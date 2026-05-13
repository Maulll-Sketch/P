import { useState } from "react";
import { Screen1 } from "./components/Screen1";
import { Screen2 } from "./components/Screen2";
import { Screen3 } from "./components/Screen3";
import { Screen4 } from "./components/Screen4";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    { component: Screen1, title: "Tiered & Grouped Cart" },
    { component: Screen2, title: "Gifting Card Detail" },
    { component: Screen3, title: "Stepper Highlight" },
    { component: Screen4, title: "Interactive Elements" },
  ];

  const CurrentScreenComponent = screens[currentScreen].component;

  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="flex items-center gap-8">
        {/* Navigation */}
        <button
          onClick={() => setCurrentScreen((prev) => Math.max(0, prev - 1))}
          disabled={currentScreen === 0}
          className="p-3 rounded-full bg-white shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft size={24} className="text-gray-800" />
        </button>

        {/* Phone Frame */}
        <div className="relative">
          <div className="w-[393px] h-[852px] bg-black rounded-[50px] shadow-2xl overflow-hidden border-8 border-black">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10" />

            {/* Screen Content */}
            <div className="w-full h-full bg-white overflow-hidden">
              <CurrentScreenComponent />
            </div>
          </div>

          {/* Screen Label */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <p className="text-white text-sm font-semibold">
              Screen {currentScreen + 1}: {screens[currentScreen].title}
            </p>
          </div>

          {/* Screen Indicators */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-2 mt-2">
            {screens.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentScreen(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentScreen ? "bg-[#5BBFBF] w-6" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation */}
        <button
          onClick={() =>
            setCurrentScreen((prev) => Math.min(screens.length - 1, prev + 1))
          }
          disabled={currentScreen === screens.length - 1}
          className="p-3 rounded-full bg-white shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
        >
          <ChevronRight size={24} className="text-gray-800" />
        </button>
      </div>
    </div>
  );
}
