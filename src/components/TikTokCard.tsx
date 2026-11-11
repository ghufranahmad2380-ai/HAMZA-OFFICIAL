'use client';

export function TikTok() {
  return (
    <section id="tiktok" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-transparent via-primary-pink to-transparent">
      <div className="card bg-white/10 border border-pink/20 rounded-xl shadow-xl overflow-hidden">
        <div className="relative z-10 flex flex-col items-center gap-4 p-6">
          <h2 className="text-3xl font-bold text-primary-pink">Find Me on TikTok</h2>
          <p className="text-gray-600 leading-relaxed">Scan the QR code below to discover my TikTok profile and start following my posts!</p>
          <button className="btn-primary w-full">Visit My TikTok</button>
          <img
            src="/tiktok-qr.jpeg"
            alt="TikTok QR Code"
            className="w-full max-w-sm object-contain rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
          />
        </div>
      </div>
    </section>
  );
}
