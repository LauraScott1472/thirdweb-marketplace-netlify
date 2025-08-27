'use client';

import { useEffect, useState } from "react";
import { getAllValidListings } from "thirdweb/extensions/marketplace";
import { marketplace } from "@/lib/contracts";
import ListingCard from "@/components/ListingCard";

export default function HomePage() {
  const [listings, setListings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadListings() {
      try {
        const allListings = await getAllValidListings({ contract: marketplace });
        setListings(allListings);
      } catch (err) {
        console.error("Error fetching listings:", err);
      } finally {
        setLoading(false);
      }
    }
    loadListings();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Marketplace Listings</h1>
      {loading ? (
        <p>Loading listings…</p>
      ) : listings.length === 0 ? (
        <p>No active listings found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      )}
    </div>
  );
}
