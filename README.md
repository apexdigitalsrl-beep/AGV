# AGV Solutions — Landing

Landing de una sola página para AGV Solutions (software a medida — Santa Fe, Argentina): sitios de alta conversión, sistemas de pedidos, paneles de administración y automatización con WhatsApp.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack) + TypeScript estricto
- Tailwind CSS v4 (tokens centralizados en `app/globals.css`)
- [shadcn/ui](https://ui.shadcn.com/) sobre Base UI para primitivos accesibles (input, textarea, accordion, sonner)
- [Motion](https://motion.dev/) (`motion/react`) para animación
- Supabase (`@supabase/supabase-js`) para el formulario de contacto
- Zod para validación de servidor

## Desarrollo

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Copiá `.env.example` a `.env.local` y completá los valores reales:

```bash
cp .env.example .env.local
```

Sin estas variables, el formulario de contacto falla de forma controlada y le pide al visitante que escriba por WhatsApp — el resto del sitio funciona igual.

| Variable | Uso |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | URL del proyecto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Reservada para uso futuro en cliente (hoy el formulario solo usa el Server Action) |
| `SUPABASE_SERVICE_ROLE_KEY` | Usada **solo** en el servidor (`lib/supabase/server.ts`) para insertar leads |

La migración de la tabla está en `supabase/migrations/0001_contact_submissions.sql` (RLS habilitado, deny-by-default; el Server Action escribe con la service role key).

## Estructura

```
app/                 rutas, layout, metadata, server actions
components/
  layout/            header, footer, menú móvil, botón flotante de WhatsApp
  sections/          las 14 secciones de la landing, en orden
  shared/            animación y visuales reutilizables (glass card, reveal, etc.)
  forms/             formulario de contacto
  ui/                primitivos de shadcn/ui
lib/                 contenido real, config del sitio, csp, supabase, utils
supabase/migrations/ esquema de base de datos
types/               tipos compartidos
```

## Contenido real vs. placeholders

El contacto (WhatsApp, email, redes) y los dos primeros casos de éxito (Barreras Neumáticos, Delivery Al Paso) son reales, tomados del sitio en producción. Testimonios y el tercer caso (Fernández Hermanos) están marcados explícitamente como placeholders honestos hasta tener contenido real — ver `lib/content.ts`.

## Build

```bash
npm run build
npm run lint
```

## Deploy en Hostinger (Node.js App / Passenger)

Este proyecto usa Server Actions, `proxy.ts` (middleware con CSP por request) y llamadas a Supabase en el servidor — **no es un sitio estático**, necesita un proceso Node corriendo. No sirve subir el repo crudo a un hosting compartido PHP/HTML clásico (tira 403).

Configuración en hPanel → **Node.js App**:

1. **Versión de Node**: 22 (LTS). Next.js 16 requiere mínimo Node 20.9 — Node 18 no arranca.
2. **Application root**: la carpeta donde se pullea este repo.
3. **Application startup file**: `.next/standalone/server.js` (se genera en el build, no está en git).
4. Después de cada `git pull`, correr en esa carpeta:
   ```bash
   npm ci
   npm run build
   ```
   `npm run build` corre `next build` y automáticamente copia `public/` y `.next/static` dentro de `.next/standalone/` (script `postbuild`, ver `scripts/copy-standalone-assets.js`) — sin ese paso el sitio levanta sin estilos ni imágenes.
5. Reiniciar la app Node desde hPanel para que Passenger levante el nuevo `server.js`.
6. Variables de entorno (`NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, etc.) se cargan en la sección de env vars del Node.js App, no en `.env.local` (ese archivo no se commitea).

`output: "standalone"` en `next.config.ts` es lo que hace esto posible: empaqueta un server mínimo con solo los `node_modules` necesarios para producción, en vez de depender de `next start` (que Passenger no invoca de forma nativa).
