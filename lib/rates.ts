const GOLD_URL = "https://api.gold-api.com/price/XAU/INR";
const SILVER_URL = "https://api.gold-api.com/price/XAG/INR";
const TROY_OZ_TO_GRAM = 31.1035;
const IMPORT_DUTY = 5.0;
const GST = 3.0;
const DUTY_MULT = (1 + IMPORT_DUTY / 100) * (1 + GST / 100);

export interface Rates {
  gold24kPerGram: number;
  gold24kPer10Gram: number;
  gold22kPerGram: number;
  gold22kPer10Gram: number;
  gold18kPerGram: number;
  gold18kPer10Gram: number;
  silverPerGram: number;
  silverPerKg: number;
  importDuty: number;
  gst: number;
  updatedAt: string;
}

async function fetchPrice(url: string): Promise<number | null> {
  try {
    const res = await fetch(url, { next: { revalidate: 1800 } });
    if (!res.ok) return null;
    const data = await res.json();
    return parseFloat(data.price) || null;
  } catch {
    return null;
  }
}

function applyTaxes(spotPerGram: number): number {
  return spotPerGram * DUTY_MULT;
}

export async function getRates(): Promise<Rates | null> {
  const [goldOz, silverOz] = await Promise.all([
    fetchPrice(GOLD_URL),
    fetchPrice(SILVER_URL),
  ]);

  if (!goldOz || !silverOz) return null;

  const goldGram = applyTaxes(goldOz / TROY_OZ_TO_GRAM);
  const silverGram = applyTaxes(silverOz / TROY_OZ_TO_GRAM);

  return {
    gold24kPerGram: Math.round(goldGram),
    gold24kPer10Gram: Math.round(goldGram * 10),
    gold22kPerGram: Math.round(goldGram * 22 / 24),
    gold22kPer10Gram: Math.round((goldGram * 22 / 24) * 10),
    gold18kPerGram: Math.round(goldGram * 18 / 24),
    gold18kPer10Gram: Math.round((goldGram * 18 / 24) * 10),
    silverPerGram: Math.round(silverGram),
    silverPerKg: Math.round(silverGram * 1000),
    importDuty: IMPORT_DUTY,
    gst: GST,
    updatedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
  };
}
