import type { Item } from "../data";

/** Compact two-column ledger: title + tag on top, one sarcastic line below. */
const ItemList = ({ items }: { items: Item[] }) => (
  <ul className="grid sm:grid-cols-2 gap-x-12">
    {items.map((it) => {
      const inner = (
        <>
          <span className="flex items-baseline gap-3">
            <span className="prose-serif text-xl text-bone group-hover:text-ember transition-colors">
              {it.title}
            </span>
            {it.tag && <span className="mono-label !text-faint">{it.tag}</span>}
            {it.href && (
              <span className="mono-label !text-ember opacity-0 group-hover:opacity-100 transition-opacity">
                ↗
              </span>
            )}
          </span>
          <span className="font-mono text-sm text-faint group-hover:text-dim transition-colors leading-relaxed">
            {it.note}
          </span>
        </>
      );
      return (
        <li key={it.title} className="border-b rule">
          {it.href ? (
            <a
              href={it.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-1.5 py-6"
            >
              {inner}
            </a>
          ) : (
            <div className="group flex flex-col gap-1.5 py-6">{inner}</div>
          )}
        </li>
      );
    })}
  </ul>
);

export default ItemList;
