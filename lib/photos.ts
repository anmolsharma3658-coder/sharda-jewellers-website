const API_KEY = process.env.GOOGLE_PLACES_API_KEY || "";
const PLACE_QUERY = "Sharda Jewellers Bemetara";

interface PlacePhoto {
  name: string;
}

async function findPlaceId(): Promise<string | null> {
  try {
    const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": API_KEY,
        "X-Goog-FieldMask": "places.id",
      },
      body: JSON.stringify({ textQuery: PLACE_QUERY }),
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.places?.[0]?.id || null;
  } catch {
    return null;
  }
}

async function fetchPhotoRefs(placeId: string): Promise<PlacePhoto[]> {
  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "X-Goog-Api-Key": API_KEY,
          "X-Goog-FieldMask": "photos",
        },
        next: { revalidate: 86400 },
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.photos || [];
  } catch {
    return [];
  }
}

async function resolvePhotoUrl(photoName: string): Promise<string | null> {
  try {
    const url = `https://places.googleapis.com/v1/${photoName}/media?maxWidthPx=800&skipHttpRedirect=true&key=${API_KEY}`;
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) return null;
    const data = await res.json();
    return data.photoUri || null;
  } catch {
    return null;
  }
}

export async function getStorePhotos(count = 10): Promise<string[]> {
  if (!API_KEY) return [];

  const placeId = await findPlaceId();
  if (!placeId) return [];

  const refs = await fetchPhotoRefs(placeId);
  const selected = refs.slice(0, count);

  const urls = await Promise.all(
    selected.map((p) => resolvePhotoUrl(p.name))
  );

  return urls.filter((u): u is string => u !== null);
}
