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
