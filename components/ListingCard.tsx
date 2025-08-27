'use client';

export default function ListingCard({ listing }: { listing: any }) {
  return (
    <div className="border border-gray-700 rounded-2xl p-4 shadow-md bg-neutral-900 hover:shadow-lg transition-all duration-200">
      <h2 className="text-lg font-semibold mb-2">{listing.asset?.name || "Untitled NFT"}</h2>
      <p className="text-sm text-gray-400 mb-3">{listing.asset?.description || "No description available."}</p>
      
      {listing.asset?.image && (
        <img
          src={listing.asset.image}
          alt={listing.asset?.name || "NFT Image"}
          className="w-full h-48 object-cover rounded-xl mb-3"
        />
      )}

      <div className="flex items-center justify-between mt-3">
        <span className="text-sm text-gray-300">
          Price: {listing.buyoutCurrencyValuePerToken?.displayValue}{" "}
          {listing.buyoutCurrencyValuePerToken?.symbol}
        </span>

        <button
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition"
          onClick={() => alert(`Buy ${listing.asset?.name || "NFT"}`)}
        >
          Buy
        </button>
      </div>
    </div>
  );
}
