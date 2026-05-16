export async function askHistoryQuestion(contextTopic: string, question: string) {
  const prompt = `Anda adalah seorang ahli sejarah dan arsiparis nasional dari Indonesia. 
Pengguna sedang mengeksplorasi topik sejarah tentang: "${contextTopic}".
Pengguna bertanya: "${question}"

Tolong berikan jawaban yang informatif, akurat secara sejarah, dan menggunakan bahasa Indonesia yang baku namun ramah. Jika pertanyaannya tidak berkaitan dengan topik sejarah, ingatkan pengguna dengan sopan bahwa Anda adalah AI khusus yang berfokus pada sejarah Nusantara. Jawablah langsung tanpa menggunakan format Markdown yang berlebihan (jangan gunakan code block).`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const json = await response.json();
    const text = json.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!text) throw new Error("Gagal mengambil jawaban AI");
    
    return text;
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Mohon maaf, saat ini sedang ada gangguan pada sistem arsip AI kami (Mungkin API Key Anda bermasalah atau belum diatur). Silakan periksa kembali .env Anda.";
  }
}
