import { PhoneMockup } from "../components/PhoneMockup";
import { MockupScreens, TafsirScreenMockup } from "../components/MockupScreens";
import { Play, Grid2X2, ShieldCheck, Heart, Headphones } from "lucide-react";

export function Home() {
  return (
    <div className="flex flex-col flex-1 w-full bg-[#FFF8E7]">
      
      {/* 1. Hero Section */}
      <section className="relative pt-16 pb-24 px-6 overflow-hidden">
        {/* Decorative Background Shapes */}
        <div className="absolute top-[-100px] left-[-100px] w-64 h-64 bg-[#1B8A6B]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-[-50px] w-80 h-80 bg-[#D4A843]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4A843]/10 text-[#D4A843] rounded-full text-sm font-bold tracking-wide uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D4A843]"></span>
              Baru Dirilis
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1]">
              Belajar Al-Qur'an Jadi Semudah <span className="text-[#1B8A6B]">Bermain Puzzle</span>
            </h1>
            
            <p className="text-lg text-gray-600 md:max-w-md mx-auto md:mx-0 leading-relaxed">
              Aplikasi edukasi Islami interaktif untuk anak dan keluarga. Menyusun ayat, memahami tafsir, dan mencintai Al-Qur'an dengan cara yang menyenangkan.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a href="#download" className="w-full sm:w-auto px-8 py-4 bg-[#1B8A6B] hover:bg-[#156d54] text-white rounded-2xl font-bold text-lg shadow-lg shadow-[#1B8A6B]/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-3">
                <Play className="w-5 h-5 fill-white" />
                Download di Google Play
              </a>
              <a href="#cara-kerja" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-[#1B8A6B] border-2 border-[#1B8A6B]/20 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                Lihat Cara Kerja
              </a>
            </div>
          </div>
          
          <div className="flex-1 relative w-full flex justify-center mt-10 md:mt-0">
            {/* Soft backdrop shape behind phone */}
            <div className="absolute inset-0 bg-[#D4A843]/20 rounded-[3rem] rotate-3 scale-95 blur-md -z-10"></div>
            <div className="absolute inset-0 bg-[#1B8A6B]/10 rounded-[3rem] -rotate-3 scale-105 blur-lg -z-10"></div>
            
            <PhoneMockup className="rotate-0 hover:rotate-1 transition-transform duration-500 hover:scale-105">
              <MockupScreens />
            </PhoneMockup>
          </div>
          
        </div>
      </section>

      {/* 2. Features Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Kenapa Memilih <span className="text-[#1B8A6B]">Puzzle Ayat Tafsir?</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Didesain khusus untuk membangun kecintaan anak pada Al-Qur'an melalui metode yang sesuai dengan fitrah dan perkembangan mereka.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Grid2X2 className="w-8 h-8 text-[#1B8A6B]" />}
              title="Puzzle Ayat"
              desc="Metode unik menyusun potongan ayat untuk menguatkan hafalan dan pemahaman bahasa Arab."
              color="bg-[#1B8A6B]/10"
            />
            <FeatureCard 
              icon={<Heart className="w-8 h-8 text-[#D4A843]" />}
              title="Belajar Tafsir Interaktif"
              desc="Penjelasan makna setiap ayat yang disederhanakan dan mudah dipahami oleh anak-anak."
              color="bg-[#D4A843]/10"
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-8 h-8 text-[#1B8A6B]" />}
              title="Cocok untuk Anak"
              desc="Visual flat design yang bersih, minimalis, dan aman (tanpa wajah atau karakter animasi yang berlebihan)."
              color="bg-[#1B8A6B]/10"
            />
            <FeatureCard 
              icon={<Headphones className="w-8 h-8 text-[#D4A843]" />}
              title="Tanpa Musik"
              desc="Hanya menggunakan lantunan murottal dan efek suara natural agar anak lebih fokus belajar."
              color="bg-[#D4A843]/10"
            />
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section id="cara-kerja" className="py-24 bg-[#FFF8E7] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute right-0 top-1/4 w-64 h-64 bg-[#1B8A6B]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">3 Langkah Mudah <span className="text-[#D4A843]">Memahami Al-Qur'an</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Proses belajar yang terstruktur namun terasa seperti bermain game.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-1 bg-gradient-to-r from-[#1B8A6B]/20 via-[#D4A843]/50 to-[#1B8A6B]/20 z-0 border-dashed border-2"></div>
            
            <StepCard 
              num="1"
              title="Pilih Surah & Ayat"
              desc="Tersedia juz 30 dengan urutan pembelajaran yang sistematis."
              delay="0"
            />
            <StepCard 
              num="2"
              title="Susun Puzzle Ayat"
              desc="Latih daya ingat visual dan motorik anak dengan menyusun ayat yang acak."
              delay="100"
            />
            <StepCard 
              num="3"
              title="Pahami Tafsirnya"
              desc="Dapatkan penjelasan makna ayat dan pelajaran hikmah yang bisa diamalkan."
              delay="200"
            />
          </div>
        </div>
      </section>

      {/* 4. Screens Preview */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Tampilan Aplikasi yang <span className="text-[#1B8A6B]">Bersih & Ramah Anak</span></h2>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-20">
             <div className="relative group">
                <div className="absolute inset-0 bg-[#1B8A6B]/10 rounded-[3rem] rotate-2 scale-105 blur-lg transition-transform group-hover:rotate-4 -z-10"></div>
                <PhoneMockup className="transform transition-transform hover:-translate-y-2">
                  <MockupScreens />
                </PhoneMockup>
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-bold text-gray-800">Mode Puzzle</h3>
                  <p className="text-gray-500 mt-2">Menyusun potongan ayat</p>
                </div>
             </div>
             
             <div className="relative group mt-12 md:mt-0 md:translate-y-12">
                <div className="absolute inset-0 bg-[#D4A843]/15 rounded-[3rem] -rotate-2 scale-105 blur-lg transition-transform group-hover:-rotate-4 -z-10"></div>
                <PhoneMockup className="transform transition-transform hover:-translate-y-2">
                  <TafsirScreenMockup />
                </PhoneMockup>
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-bold text-gray-800">Mode Tafsir</h3>
                  <p className="text-gray-500 mt-2">Pelajaran dan hikmah</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. Call To Action */}
      <section id="download" className="py-24 px-6 relative bg-[#1B8A6B] overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4A843]/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-[3rem] shadow-2xl shadow-black/10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Mulai Petualangan Belajar Al-Qur'an Hari Ini</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Jadikan waktu luang anak lebih bermanfaat dengan aplikasi islami yang mendidik, aman, dan tanpa iklan yang mengganggu.
          </p>
          <button className="px-10 py-5 bg-[#D4A843] hover:bg-[#c49833] text-white rounded-full font-bold text-xl shadow-xl shadow-[#D4A843]/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-3 mx-auto w-full sm:w-auto">
            <Play className="w-6 h-6 fill-white" />
            Download Sekarang
          </button>
          <p className="text-white/60 text-sm mt-6">Tersedia gratis di Google Play Store</p>
        </div>
      </section>
      
    </div>
  );
}

function FeatureCard({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) {
  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(27,138,107,0.1)] transition-all border border-gray-100 hover:-translate-y-1 group">
      <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function StepCard({ num, title, desc, delay }: { num: string, title: string, desc: string, delay: string }) {
  return (
    <div className="relative flex flex-col items-center text-center z-10 group" style={{ animationDelay: `${delay}ms` }}>
      <div className="w-20 h-20 bg-white shadow-xl shadow-[#D4A843]/10 rounded-full flex items-center justify-center text-2xl font-black text-[#1B8A6B] mb-6 border-4 border-[#FFF8E7] group-hover:scale-110 transition-transform relative">
        {num}
        {/* Pulsing ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#1B8A6B]/30 animate-ping opacity-20"></div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed max-w-xs">{desc}</p>
    </div>
  );
}
