import {
  Bot,
  Briefcase,
  CalendarClock,
  Car,
  Code2,
  Eye,
  Factory,
  Gauge,
  LayoutDashboard,
  LifeBuoy,
  MessageSquareText,
  MonitorX,
  PenTool,
  Percent,
  Plug,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

import type {
  BusinessProblem,
  FaqItem,
  FeaturedProject,
  Industry,
  ProcessStep,
  Service,
  Solution,
  TechItem,
  WhyReason,
} from "@/types";

export const businessProblems: BusinessProblem[] = [
  {
    title: "Nadie te encuentra en Google",
    description:
      "Existís en redes sociales, pero cuando alguien busca lo que ofrecés, aparece la competencia. Cada día sin un sitio propio es una venta que se va a otro lado.",
    icon: MonitorX,
    solutionLabel: "Presencia digital",
  },
  {
    title: "El teléfono y el WhatsApp no paran",
    description:
      "Cada consulta de precio, turno o disponibilidad te saca de lo que realmente hace crecer el negocio. El tiempo del mostrador termina en la pantalla del celular.",
    icon: MessageSquareText,
    solutionLabel: "Automatización",
  },
  {
    title: "Las apps de delivery se quedan con tu margen",
    description:
      "Cada pedido paga comisión y el cliente queda del lado de la app, no del tuyo. No hay forma de fidelizar a quien ya te compró.",
    icon: Percent,
    solutionLabel: "Canal propio",
  },
  {
    title: "Turnos y pedidos a mano, en un cuaderno o Excel",
    description:
      "Sin un sistema, los errores de agenda y stock son cuestión de tiempo. Escalar así significa multiplicar el caos, no las ventas.",
    icon: CalendarClock,
    solutionLabel: "Sistema propio",
  },
  {
    title: "Imagen poco profesional",
    description:
      "Un cliente nuevo te busca antes de llamarte. Si lo primero que encuentra es una foto de perfil y nada más, la confianza se pierde antes de empezar la conversación.",
    icon: Eye,
    solutionLabel: "Marca digital",
  },
  {
    title: "Procesos que dependen de una sola persona",
    description:
      "Si el dueño no está, nadie sabe qué stock hay, qué se cobró o qué falta entregar. El negocio no puede crecer mientras todo pase por una sola cabeza.",
    icon: Users,
    solutionLabel: "Software a medida",
  },
];

export const solutions: Solution[] = [
  {
    problem: "Nadie te encuentra en Google",
    title: "Sitios y landings que trabajan mientras vos atendés",
    description:
      "Construimos tu presencia digital con SEO técnico desde el día uno: velocidad real, estructura semántica y contenido pensado para tu cliente, no para quedar lindo en una demo.",
    impact: "Más consultas calificadas, sin pautar un peso extra.",
    icon: Sparkles,
  },
  {
    problem: "El teléfono y el WhatsApp no paran",
    title: "Automatización que responde antes de que atiendas vos",
    description:
      "Bots de WhatsApp y flujos automáticos que cotizan, agendan turnos y responden lo repetitivo, para que tu equipo hable solo con quien ya está listo para comprar.",
    impact: "Horas de mostrador recuperadas todas las semanas.",
    icon: Bot,
  },
  {
    problem: "Las apps de delivery se quedan con tu margen",
    title: "Tu propio canal de pedidos, sin comisión de terceros",
    description:
      "Un sistema de pedidos con tu marca, tu carta y tus reglas. El cliente vuelve a comprarte a vos directamente, no a la app que se queda con el 30%.",
    impact: "Más margen por pedido y una base de clientes que es tuya.",
    icon: ShoppingCart,
  },
  {
    problem: "Turnos y pedidos a mano, en un cuaderno o Excel",
    title: "Paneles de administración hechos para tu operación real",
    description:
      "Turnos, pedidos, stock e información del negocio en un solo panel, accesible desde cualquier dispositivo, sin depender de una planilla que solo entiende una persona.",
    impact: "Menos errores operativos, más control del día a día.",
    icon: LayoutDashboard,
  },
  {
    problem: "Imagen poco profesional",
    title: "Una marca digital que genera confianza antes del primer mensaje",
    description:
      "Diseño premium, copy claro y una estructura pensada en cómo decide tu cliente, para que la primera impresión ya juegue a tu favor.",
    impact: "Visitantes que llegan más convencidos y listos para avanzar.",
    icon: Eye,
  },
  {
    problem: "Procesos que dependen de una sola persona",
    title: "Software a medida que documenta y ordena tu operación",
    description:
      "Sistemas internos, integraciones y automatizaciones diseñadas alrededor de cómo trabaja tu equipo hoy, para que el negocio funcione aunque vos no estés mirando.",
    impact: "Una operación que escala sin depender de la memoria de una persona.",
    icon: Workflow,
  },
];

export const industries: Industry[] = [
  {
    name: "Gastronomía y delivery",
    description:
      "Restaurantes, hamburgueserías y locales de comida rápida que necesitan pedidos propios y fidelizar sin pagar comisión.",
    problems: ["Comisiones de apps de delivery", "Pedidos por teléfono", "Poca fidelización"],
    icon: ShoppingCart,
    proven: true,
  },
  {
    name: "Automotor y repuestos",
    description:
      "Distribuidores y talleres que pierden tiempo cotizando por WhatsApp en vez de vender.",
    problems: ["Consultas de precio repetitivas", "Turnos a mano", "Poca visibilidad online"],
    icon: Car,
    proven: true,
  },
  {
    name: "Retail y comercios",
    description: "Negocios locales que compiten con e-commerce grandes sin presencia digital propia.",
    problems: ["Sin catálogo online", "Dependencia de redes sociales", "Poca trazabilidad de stock"],
    icon: Store,
  },
  {
    name: "Servicios profesionales",
    description: "Estudios y consultoras que necesitan agenda, cotización y seguimiento ordenados.",
    problems: ["Agenda manual", "Seguimiento disperso", "Imagen poco profesional"],
    icon: Briefcase,
  },
  {
    name: "PyMEs industriales",
    description: "Empresas con procesos en papel o Excel que frenan el crecimiento operativo.",
    problems: ["Excel como ERP", "Información no centralizada", "Procesos manuales"],
    icon: Factory,
  },
];

export const services: Service[] = [
  {
    title: "Sitios y landing pages de alta conversión",
    description: "Presencia digital rápida, medible y pensada para convertir visitas en consultas reales.",
    details: ["SEO técnico incluido", "Diseño responsive", "Velocidad medida con Lighthouse"],
    icon: Rocket,
  },
  {
    title: "Tiendas y sistemas de pedidos online",
    description: "Tu propio canal de venta, sin comisiones de terceros y con tu marca al frente.",
    details: ["Carta o catálogo digital", "Pedidos directos", "Integración con pagos"],
    icon: ShoppingCart,
  },
  {
    title: "Paneles de administración a medida",
    description: "Turnos, pedidos, inventario e información del negocio en un solo lugar.",
    details: ["Gestión de turnos", "Control de stock", "Acceso desde cualquier dispositivo"],
    icon: LayoutDashboard,
  },
  {
    title: "Automatización con WhatsApp e IA",
    description: "Respuestas automáticas y flujos que atienden lo repetitivo por vos.",
    details: ["Bots de WhatsApp", "Recordatorios automáticos", "Calificación de consultas"],
    icon: Bot,
  },
  {
    title: "Integraciones y turnos online",
    description: "Conectamos tu software con las herramientas que ya usás todos los días.",
    details: ["Calendarios y agenda", "Pasarelas de pago", "APIs de terceros"],
    icon: Plug,
  },
  {
    title: "Mantenimiento y soporte continuo",
    description: "Tu sistema sigue funcionando y mejorando después de la entrega.",
    details: ["Soporte directo con el equipo", "Actualizaciones de seguridad", "Mejoras incrementales"],
    icon: LifeBuoy,
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Reunión inicial",
    description: "Entendemos tu negocio, tu operación y qué te está frenando hoy.",
    benefit: "Una propuesta que responde a tu realidad, no a una plantilla.",
    icon: Users,
  },
  {
    step: 2,
    title: "Análisis de necesidades",
    description: "Definimos el alcance exacto: qué problema resolvemos primero y cómo.",
    benefit: "Foco en lo que genera impacto antes.",
    icon: MessageSquareText,
  },
  {
    step: 3,
    title: "Diseño de la propuesta",
    description: "Armamos la solución y el diseño antes de escribir una sola línea de código.",
    benefit: "Sabés exactamente qué vas a recibir.",
    icon: PenTool,
  },
  {
    step: 4,
    title: "Desarrollo",
    description: "Construimos el sistema con arquitectura pensada para crecer con vos.",
    benefit: "Código limpio, escalable y documentado.",
    icon: Code2,
  },
  {
    step: 5,
    title: "Revisión del cliente",
    description: "Mostramos avances reales y ajustamos con tu feedback antes de cerrar.",
    benefit: "Hasta 3 rondas de ajustes sin costo adicional.",
    icon: Eye,
  },
  {
    step: 6,
    title: "Ajustes finales",
    description: "Pulimos cada detalle de rendimiento, diseño y contenido.",
    benefit: "Nada se entrega \"más o menos terminado\".",
    icon: Sparkles,
  },
  {
    step: 7,
    title: "Publicación y soporte continuo",
    description: "Publicamos, medimos y seguimos disponibles después de la entrega.",
    benefit: "Un sistema que sigue mejorando con el tiempo.",
    icon: Rocket,
  },
];

export const whyReasons: WhyReason[] = [
  {
    title: "Trato directo con quienes construyen tu proyecto",
    description: "Hablás con los mismos tres socios que diseñan y programan tu sistema. Sin intermediarios.",
    icon: Users,
  },
  {
    title: "Medimos lo que prometemos",
    description: "Cada proyecto se entrega con su propia medición de Lighthouse real. Rápido, con un número que lo respalda.",
    icon: Gauge,
  },
  {
    title: "Entregas rápidas y sin vueltas",
    description: "Procesos claros y comunicación constante para que el proyecto avance sin fricción.",
    icon: Zap,
  },
  {
    title: "Arquitectura pensada para escalar",
    description: "Construimos con tecnología moderna para que tu sistema crezca con tu negocio, no en contra de él.",
    icon: Code2,
  },
  {
    title: "Seguridad desde el diseño",
    description: "Datos de tu negocio y de tus clientes protegidos desde la primera línea de código.",
    icon: ShieldCheck,
  },
  {
    title: "Soporte que continúa después de la entrega",
    description: "El proyecto no termina en la publicación: seguimos disponibles para mantenerlo y mejorarlo.",
    icon: LifeBuoy,
  },
];

export const techStack: TechItem[] = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Lenguaje" },
  { name: "Tailwind CSS", category: "Diseño" },
  { name: "Astro", category: "Frontend" },
  { name: "Supabase", category: "Backend" },
  { name: "PostgreSQL", category: "Base de datos" },
  { name: "Node.js", category: "Backend" },
  { name: "Vercel", category: "Infraestructura" },
  { name: "WhatsApp Business API", category: "Integraciones" },
];

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "barreras-neumaticos",
    title: "Barreras Neumáticos",
    industry: "Distribuidor oficial Yokohama · Venado Tuerto",
    challenge:
      "Perdían clientes entre tantas consultas: cada pregunta de precio o turno por teléfono y WhatsApp era tiempo del local que no se cobraba.",
    solution:
      "Una web que transmite profesionalismo y además trabaja: cotiza neumáticos y servicios al instante y toma turnos online.",
    image: "/casos/barreras-yokohama.webp",
    imageAlt: "Captura del sitio de Barreras Neumáticos, distribuidor oficial Yokohama en Venado Tuerto",
    metrics: [
      { label: "Perf", value: "100", icon: Gauge },
      { label: "SEO", value: "100", icon: Sparkles },
      { label: "Acc", value: "97", icon: ShieldCheck },
      { label: "LCP", value: "1.3s", icon: Zap },
    ],
    liveUrl: "https://barrerasneumaticos.agvsolutions.online/",
  },
  {
    slug: "delivery-al-paso",
    title: "Delivery Al Paso",
    industry: "Hamburguesería con pedidos online propios",
    challenge:
      "Dependía de las apps de delivery, que se llevan una comisión de cada pedido y lo alejan de sus propios clientes.",
    solution:
      "Una web rápida con la carta completa y pedidos directos, sin comisiones de terceros, más un sistema de juegos con premio para fidelizar.",
    image: "/casos/deliveryalpaso.webp",
    imageAlt: "Captura del sitio de Delivery Al Paso, hamburguesería con pedidos online propios",
    metrics: [
      { label: "Perf", value: "91", icon: Gauge },
      { label: "SEO", value: "100", icon: Sparkles },
      { label: "Acc", value: "95", icon: ShieldCheck },
      { label: "LCP", value: "2.2s", icon: Zap },
    ],
    liveUrl: "https://deliveryalpaso.agvsolutions.online/",
  },
  {
    slug: "fernandez-hermanos",
    title: "Fernández Hermanos",
    industry: "Próximamente",
    challenge: "Estamos terminando de documentar este caso con su medición real.",
    solution: "Vas a poder ver el sitio en vivo y sus métricas apenas esté publicado.",
    image: "/casos/fernandezhermanos.webp",
    imageAlt: "Vista previa del próximo caso de estudio, Fernández Hermanos",
    metrics: [],
    isComingSoon: true,
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "¿Cuánto tarda el desarrollo de un proyecto?",
    answer:
      "Entre 5 y 15 días hábiles según la complejidad. En la reunión inicial te damos un plazo concreto antes de empezar.",
  },
  {
    question: "¿Ofrecen soporte después de la entrega?",
    answer:
      "Sí. El proyecto no termina en la publicación: seguimos disponibles para mantenimiento, mejoras y soporte según el plan contratado.",
  },
  {
    question: "¿Pueden integrar sistemas que ya uso?",
    answer:
      "Sí. Integramos con WhatsApp, calendarios, pasarelas de pago y otras herramientas que ya formen parte de tu operación diaria.",
  },
  {
    question: "¿El software puede crecer con mi negocio?",
    answer:
      "Sí. Construimos con arquitecturas pensadas para escalar, así no hace falta rehacer todo de cero cuando el negocio crece.",
  },
  {
    question: "¿Cómo funciona la garantía?",
    answer:
      "Garantizamos que el proyecto se entregue funcionando según lo acordado, con rondas de ajustes incluidas antes del cierre.",
  },
  {
    question: "¿Cómo empezamos?",
    answer:
      "Agendás un diagnóstico gratuito por WhatsApp, conversamos sobre tu operación y armamos una propuesta a medida sin compromiso.",
  },
];
