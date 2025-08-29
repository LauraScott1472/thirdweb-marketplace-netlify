import Image from "next/image";
import { notFound } from "next/navigation";
import { marketplace } from "@/lib/contracts";
import { getListing } from "thirdweb/extensions/marketplace";

type ListingPageProps = {
  params: { id: string };
};

export default async function ListingPage({ params }: ListingPageProps) {
  const { id } = params;

  let listing: any;
  try {
    listing = await getListing({ contract: marketplace, listingId: BigInt(id) });
  } catch (err) {
    console.error("Error fetching listing:", err);
    return notFound();
  }

  if (!listing) return notFound();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">{listing.asset.name}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {listing.asset.image && (
          <Image
            src={listing.asset.image}
            alt={listing.asset.name || "Listing Image"}
            width={400}
            height={400}
            className="rounded-lg"
          />
        )}
        <div>
          <p className="text-gray-700">{listing.asset.description}</p>
          <p className="mt-4 font-semibold">
            Price: {listing.buyoutCurrencyValuePerToken.displayValue}{" "}
            {listing.buyoutCurrencyValuePerToken.symbol}
          </p>
        </div>
      </div>
    </main>
  );
}
