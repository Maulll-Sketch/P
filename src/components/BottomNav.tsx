import { Home, Store, ShoppingBasket, User } from "lucide-react";

interface BottomNavProps {
  activeTab?: "home" | "store" | "cart" | "profile";
}

export function BottomNav({ activeTab = "cart" }: BottomNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-3 flex justify-between items-center">
      <button className={`p-2 ${activeTab === "home" ? "text-[#5C1A2E]" : "text-gray-400"}`}>
        <Home size={24} />
      </button>
      <button className={`p-2 ${activeTab === "store" ? "text-[#5C1A2E]" : "text-gray-400"}`}>
        <Store size={24} />
      </button>
      <button className={`relative ${activeTab === "cart" ? "" : ""}`}>
        <div className={`p-2 rounded-full ${activeTab === "cart" ? "bg-[#5C1A2E] text-white" : "text-gray-400"}`}>
          <ShoppingBasket size={24} />
        </div>
      </button>
      <button className={`p-2 ${activeTab === "profile" ? "text-[#5C1A2E]" : "text-gray-400"}`}>
        <User size={24} />
      </button>
    </div>
  );
}
