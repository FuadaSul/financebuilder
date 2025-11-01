import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-blue-100">
      {/* Navbar */}
      <nav className="bg-blue-300 h-30 text-white px-6 py-4 flex items-center justify-between">
        Logo
        <div className="flex items-center gap-2">

        </div>
        <ul className="hidden md:flex gap-6 text-sm font-bold text-2x1 ">
          <li className="hover:underline cursor-pointer">Startseite</li>
          <li className="hover:underline cursor-pointer">Über uns</li>
        </ul>
        <div className="flex items-center gap-4">
        <button className="bg-white text-black font-semibold px-3 py-1 rounded-lg hover:bg-blue-200 transition">
        Login
        </button>
        <button className="w-8 h-8 bg-white rounded-full  flex items-center justify-center text-black font-bold hover:bg-blue-200 transition">
          U
        </button>
      </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-20 p-8 ">
        {/* Left: Heading & Button */}
        <div className="bg-white p-6 rounded-xl text-center">
          <h1 className="text-black text-2xl font-bold mb-2">Heading</h1>
          <p className="text-gray-700 mb-4">Verstehe Geld, Investieren und Sparen </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-lg">
            Jetzt Starten
          </button>
        </div>

        {/* Right: Icon / Image */}
        <div className="bg-white p-6 rounded-xl flex items-center justify-center min-w-[200px] min-h-[200px] font-semibold text-gray-800 translate-x-30 ">
          Icon / image
        </div>
      </section>

      {/* Topic Cards */}
      <section className="flex flex-wrap justify-center items-start gap-6 p-8">
        <div className="bg-blue-800 w-60 h-70 rounded-xl flex items-center justify-center font-semibold -translate-x-30 ">
        Investieren leicht gemacht
        </div>
        <div className="bg-blue-800 w-60 h-70 rounded-xl flex items-center justify-center font-semibold ">
        Budgetplanung
        </div>
        <div className="bg-blue-800 w-60 h-70 rounded-x1 flex items-center justify-center font-semibold translate-x-30 ">
        Schulden vermeiden
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-300 h-30 text-white text-center py-4 mt-auto">
        Datenschutz und Lizenzen
        <ul className="hidden md:flex gap-10 text-sm font-medium">
          <li className="hover:underline cursor-pointer">Discord</li>
          <li className="hover:underline cursor-pointer">Facebook</li>
          <li className="hover:underline cursor-pointer">Instagram</li>
        </ul>
      </footer>
    </div>
  );
};


   