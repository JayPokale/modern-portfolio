/** A small mono label followed by its punchline, on one line when it fits. */
const Caption = ({
  label,
  quip,
  className = "",
}: {
  label: string;
  quip: string;
  className?: string;
}) => (
  <p className={`flex flex-wrap items-baseline gap-x-4 gap-y-1 ${className}`}>
    <span className="mono-label">{label}</span>
    <span className="quip text-lg">{quip}</span>
  </p>
);

export default Caption;
