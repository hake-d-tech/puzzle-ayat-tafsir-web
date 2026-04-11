import { Settings, User, Search, ChevronLeft, Volume2, Bookmark, Play, Grid2X2 } from "lucide-react";

export function MockupScreens() {
  return (
    <>
      {/* Puzzle UI Mockup */}
      <div className="w-full h-full flex flex-col bg-[#F3F4F6]">
        {/* Status Bar Fake */}
        <div className="h-6 w-full flex items-center justify-between px-6 pt-2 pb-1 text-[10px] font-medium text-gray-800 bg-white">
          <span>9:41</span>
          <div className="flex gap-1">
             <div className="w-3 h-3 bg-gray-800 rounded-full" />
             <div className="w-3 h-3 bg-gray-800 rounded-full" />
             <div className="w-4 h-3 bg-gray-800 rounded-sm" />
          </div>
        </div>
        
        {/* App Header */}
        <div className="bg-[#1B8A6B] text-white p-4 rounded-b-3xl shadow-sm flex items-center justify-between">
           <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
             <ChevronLeft className="w-6 h-6" />
           </div>
           <span className="font-bold text-lg">Al-Fatihah</span>
           <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
             <Settings className="w-5 h-5" />
           </div>
        </div>
        
        <div className="p-4 flex-1 flex flex-col items-center">
          <h3 className="text-[#1B8A6B] font-bold text-center mt-2 mb-4">Ayat 1</h3>
          
          {/* Target Area */}
          <div className="w-full bg-white rounded-2xl p-4 shadow-sm min-h-[120px] flex flex-wrap gap-2 items-center justify-center border-2 border-dashed border-[#1B8A6B]/30 mb-6">
             {/* Filled pieces */}
             <div className="bg-[#D4A843] text-white px-3 py-2 rounded-xl text-2xl shadow-sm font-bold">بِسْمِ</div>
             <div className="bg-[#D4A843] text-white px-3 py-2 rounded-xl text-2xl shadow-sm font-bold">ٱللَّهِ</div>
             {/* Empty slot */}
             <div className="bg-gray-100 border-2 border-dashed border-gray-300 px-6 py-2 rounded-xl text-transparent text-2xl">ٱلرَّحْمَـٰنِ</div>
             <div className="bg-gray-100 border-2 border-dashed border-gray-300 px-6 py-2 rounded-xl text-transparent text-2xl">ٱلرَّحِيمِ</div>
          </div>
          
          {/* Draggable Pieces */}
          <div className="w-full flex-1">
             <p className="text-sm text-gray-500 text-center mb-3">Pilih dan geser potongan ayat</p>
             <div className="flex flex-wrap gap-3 justify-center">
                <div className="bg-white text-[#1B8A6B] border border-[#1B8A6B]/20 px-4 py-3 rounded-xl text-2xl shadow-sm font-bold cursor-grab active:cursor-grabbing hover:bg-[#1B8A6B]/5">ٱلرَّحْمَـٰنِ</div>
                <div className="bg-white text-[#1B8A6B] border border-[#1B8A6B]/20 px-4 py-3 rounded-xl text-2xl shadow-sm font-bold cursor-grab active:cursor-grabbing hover:bg-[#1B8A6B]/5">ٱلرَّحِيمِ</div>
             </div>
          </div>
          
          <div className="w-full mt-auto">
             <button className="w-full bg-[#E5E7EB] text-gray-400 py-3 rounded-2xl font-bold flex items-center justify-center gap-2">
                Cek Jawaban
             </button>
          </div>
        </div>
      </div>
    </>
  );
}

export function TafsirScreenMockup() {
  return (
    <div className="w-full h-full flex flex-col bg-[#FFF8E7]">
        {/* Status Bar Fake */}
        <div className="h-6 w-full flex items-center justify-between px-6 pt-2 pb-1 text-[10px] font-medium text-gray-800 bg-[#FFF8E7]">
          <span>9:41</span>
          <div className="flex gap-1">
             <div className="w-3 h-3 bg-gray-800 rounded-full" />
             <div className="w-3 h-3 bg-gray-800 rounded-full" />
             <div className="w-4 h-3 bg-gray-800 rounded-sm" />
          </div>
        </div>
        
        {/* App Header */}
        <div className="p-4 flex items-center justify-between">
           <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-[#1B8A6B]">
             <ChevronLeft className="w-6 h-6" />
           </div>
           <span className="font-bold text-[#1B8A6B] text-lg">Tafsir</span>
           <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-[#1B8A6B]">
             <Bookmark className="w-5 h-5" />
           </div>
        </div>
        
        <div className="p-5 flex-1 overflow-y-auto no-scrollbar pb-10">
           {/* Card Ayat */}
           <div className="bg-white rounded-3xl p-6 shadow-sm mb-6 relative overflow-hidden">
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D4A843]/10 rounded-full" />
             <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#1B8A6B]/10 rounded-full" />
             
             <div className="flex justify-between items-start mb-4 relative z-10">
                <span className="bg-[#1B8A6B] text-white text-xs px-3 py-1 rounded-full font-bold">Ayat 1</span>
                <button className="w-8 h-8 bg-[#D4A843]/20 text-[#D4A843] rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 ml-1" />
                </button>
             </div>
             
             <p className="text-4xl text-right leading-loose mb-4 text-gray-800 relative z-10 font-bold" dir="rtl">
               بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
             </p>
             <p className="text-gray-600 text-sm leading-relaxed relative z-10">
               "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang."
             </p>
           </div>
           
           {/* Tafsir Content */}
           <div className="mb-6">
             <h3 className="font-bold text-gray-800 text-lg mb-3 flex items-center gap-2">
               <BookOpenIcon /> Makna Ayat
             </h3>
             <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3">
               <p className="text-gray-600 text-sm leading-relaxed">
                 Ayat ini mengajarkan kita untuk selalu memulai segala kebaikan dengan menyebut nama Allah.
               </p>
               <div className="bg-[#FFF8E7] p-3 rounded-xl border border-[#D4A843]/30 flex items-start gap-3 mt-4">
                  <div className="bg-[#D4A843] w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 mt-0.5">
                    <span className="text-lg font-bold">!</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#D4A843] block text-sm mb-1">Pelajaran untuk Anak:</span>
                    <span className="text-gray-600 text-xs leading-relaxed block">
                      Yuk, selalu ucapkan "Bismillah" sebelum makan, belajar, dan bermain agar selalu dilindungi Allah!
                    </span>
                  </div>
               </div>
             </div>
           </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="p-4 bg-white mt-auto rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex items-center justify-between sticky bottom-0 z-20">
           <button className="flex-1 bg-gray-100 text-gray-600 py-3 rounded-xl font-bold flex items-center justify-center gap-2 mr-3">
             <ChevronLeft className="w-5 h-5" /> Sebelumnya
           </button>
           <button className="flex-1 bg-[#1B8A6B] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2">
             Selanjutnya <ChevronLeft className="w-5 h-5 rotate-180" />
           </button>
        </div>
    </div>
  );
}

function BookOpenIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B8A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
  );
}
