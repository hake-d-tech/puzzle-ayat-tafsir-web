import { ReactNode } from "react";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
}

export function PhoneMockup({ children, className = "" }: PhoneMockupProps) {
  return (
    <div className={`relative mx-auto border-gray-800 border-[12px] bg-white rounded-[2.5rem] h-[600px] w-[280px] shadow-2xl overflow-hidden ${className}`}>
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 rounded-b-3xl w-40 mx-auto z-20"></div>
      
      {/* Screen Content */}
      <div className="h-full w-full bg-[#FFF8E7] overflow-y-auto z-10 relative no-scrollbar pb-6">
        {children}
      </div>
    </div>
  );
}
