import { ArrowUpRight, Bot, CircleCheck } from "lucide-react";

const chartBars = [38, 62, 45, 78, 58, 92, 70];

const liveOrders = [
  { label: "Pedido #248", detail: "Mesa 4 · $8.400" },
  { label: "Turno confirmado", detail: "14:30 · Alineación" },
  { label: "Pedido #249", detail: "Delivery · $6.100" },
];

/**
 * Illustrative floating UI — not a real client dashboard. Communicates
 * "we build software like this" without claiming to be an actual product.
 */
export function DashboardMockup() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md sm:max-w-lg lg:max-w-none" aria-hidden="true">
      <div className="glass-surface animate-float absolute left-0 top-6 w-56 rounded-2xl p-4 shadow-glow sm:w-64">
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium uppercase tracking-wide text-ink-400">Ventas del mes</p>
          <ArrowUpRight className="size-4 text-brand-400" />
        </div>
        <p className="mt-2 font-display text-3xl font-semibold text-white">+34%</p>
        <div className="mt-4 flex h-16 items-end gap-1.5">
          {chartBars.map((value, index) => (
            <div
              key={index}
              className="flex-1 rounded-full bg-gradient-to-t from-brand-600 to-brand-400"
              style={{ height: `${value}%` }}
            />
          ))}
        </div>
      </div>

      <div
        className="glass-surface animate-float absolute right-0 top-24 w-64 rounded-2xl p-4 sm:w-72"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-cyan-400" />
          </span>
          <p className="text-xs font-medium uppercase tracking-wide text-ink-400">Pedidos en vivo</p>
        </div>
        <ul className="mt-3 space-y-2.5">
          {liveOrders.map((order) => (
            <li key={order.label} className="flex items-center justify-between gap-3 text-sm">
              <span className="flex items-center gap-2 text-ink-200">
                <CircleCheck className="size-3.5 shrink-0 text-brand-400" />
                {order.label}
              </span>
              <span className="text-ink-400">{order.detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="glass-surface animate-float absolute bottom-4 left-8 w-52 rounded-2xl p-4 sm:w-60"
        style={{ animationDelay: "2.4s" }}
      >
        <div className="flex items-center gap-2">
          <Bot className="size-4 text-brand-400" />
          <p className="text-xs font-medium uppercase tracking-wide text-ink-400">Asistente WhatsApp</p>
        </div>
        <p className="mt-2 text-sm text-ink-200">&ldquo;Tenemos turno mañana a las 10, ¿te lo reservo?&rdquo;</p>
      </div>
    </div>
  );
}
