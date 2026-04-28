import { provinceData } from "../data/provinces";

export async function getProvinceDetails(provinceName: string) {
  // Simulasi waktu proses (loading) agar animasi UI tetap terlihat natural
  await new Promise((resolve) => setTimeout(resolve, 600));

  if (provinceData[provinceName]) {
    return provinceData[provinceName];
  }

  // Fallback jika nama provinsi tidak ditemukan di arsip statis
  return {
    nama: provinceName,
    ibukota: "Belum Tercatat",
    sejarah: `Arsip sejarah terperinci mengenai provinsi ${provinceName} sedang dalam proses digitalisasi dan belum tersedia secara offline.`,
    menarik: ["Data belum tersedia", "Data belum tersedia", "Data belum tersedia"]
  };
}
