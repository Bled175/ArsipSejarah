import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const cache: Record<string, any> = {};

export async function getProvinceDetails(provinceName: string) {
  if (cache[provinceName]) {
    return cache[provinceName];
  }

  const prompt = `Berikan informasi mendetail tentang provinsi "${provinceName}" di Indonesia dalam format JSON. 
  Informasi harus mencakup:
  1. "sejarah": Sejarah singkat pembentukan provinsi (kapan dibentuk, UU apa yang mendasarinya, alasan pemekaran jika ada).
  2. "menarik": 3 hal menarik atau unik tentang provinsi tersebut (budaya, wisata, atau kuliner).
  3. "ibukota": Ibukota provinsi.
  
  Gunakan bahasa Indonesia yang formal namun menarik.
  Format JSON:
  {
    "nama": "...",
    "ibukota": "...",
    "sejarah": "...",
    "menarik": ["...", "...", "..."]
  }`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    
    const text = response.text;
    if (!text) throw new Error("Gagal mengambil data provinsi");
    
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const data = JSON.parse(jsonMatch[0]);
      cache[provinceName] = data;
      return data;
    }
    throw new Error("Gagal mengambil data provinsi");
  } catch (error) {
    console.error(error);
    return null;
  }
}
