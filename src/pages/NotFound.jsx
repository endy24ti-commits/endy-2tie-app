import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6 overflow-hidden">
      
      {/* Container Efek Salju Hitam */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="snow text-black opacity-20 absolute text-xl"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 4 + 6}s`,
              fontSize: `${Math.random() * 10 + 10}px`, // Variasi ukuran salju
            }}
          >
            ❄
          </div>
        ))}
      </div>

      <div className="text-center z-10">
        {/* Angka 404 Besar */}
        <h1 className="text-9xl font-black text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)]">
          404
        </h1>

        {/* Pesan Error */}
        <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">
          Waduh! Halaman tidak ditemukan.
        </p>

        <p className="text-gray-500 mt-2 mb-8 italic">
          "Sepertinya menu ini belum matang atau sudah habis..."
        </p>

        {/* Tombol Kembali (Tetap Hijau Sesuai Request) */}
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-2xl text-white bg-green-500 hover:bg-green-600 transition-all shadow-[0_10px_20px_rgba(34,197,94,0.3)] hover:scale-105 active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Kembali ke Dashboard
        </Link>
      </div>

      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg);
          }
          50% {
            transform: translateY(50vh) translateX(20px) rotate(180deg);
          }
          100% {
            transform: translateY(110vh) translateX(-20px) rotate(360deg);
          }
        }
        .snow {
          top: -50px;
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  );
}