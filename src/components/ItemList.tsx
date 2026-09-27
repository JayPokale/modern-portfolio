import type { Item } from "../data";

/** Two-column ledger: title and tag, a quiet one-line fact, then the punchline. */
const ItemList = ({ items }: { items: Item[] }) => (
  <ul className="grid sm:grid-cols-2 gap-x-12">
    {items.map((it) => {
      const inner = (
        <>
          <span className="flex flex-wrap items-baseline gap-x-3">
            <span className="prose-serif text-xl text-bone group-hover:text-ember transition-colors">
              {it.title}
            </span>
            {it.tag && <span className="mono-label">{it.tag}</span>}
            {it.href && (
              <span className="mono-label !text-ember opacity-0 group-hover:opacity-100 transition-opacity">
                ↗
              </span>
            )}
          </span>
          {it.fact && (
            <span className="font-mono text-xs text-dim leading-relaxed">{it.fact}</span>
          )}
          <span className="quip text-lg mt-1">{it.quip}</span>
        </>
      );
      return (
        <li key={it.title} className="border-b rule">
          {it.href ? (
            <a
              href={it.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-1 py-6"
            >
              {inner}
            </a>
          ) : (
            <div className="group flex flex-col gap-1 py-6">{inner}</div>
          )}
        </li>
      );
    })}
  </ul>
);

export default ItemList;
