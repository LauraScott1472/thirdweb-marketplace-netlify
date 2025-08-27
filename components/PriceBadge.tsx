export default function PriceBadge({ value, symbol }: { value: string; symbol: string }) {
return (
<span className="inline-flex items-center rounded-full border border-white/15 px-2 py-1 text-xs text-white/90">
{value} {symbol}
</span>
);
}