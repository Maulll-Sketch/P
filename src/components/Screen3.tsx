import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { BottomNav } from "./BottomNav";
import { QuantityStepper } from "./QuantityStepper";
import { ChevronRight } from "lucide-react";

export function Screen3() {
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(3);

  return (
    <div className="h-full bg-[#F9D9E3] flex flex-col">
      <div className="flex-1 overflow-auto pb-32 px-4">
        <h1 className="text-2xl font-bold text-[#5C1A2E] pt-6 pb-4">MY CART</h1>

        <div className="space-y-4">
          {/* Teal Featured Product */}
          <div className="bg-[#5BBFBF] rounded-2xl p-4">
            <div className="flex gap-3 mb-3">
              <img
                src="https://images.unsplash.com/photo-1686424735290-ea6ac590983c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBib3VxdWV0JTIwYXJyYW5nZW1lbnQlMjBwaW5rJTIwcm9zZXN8ZW58MXx8fHwxNzc4NjkyNjczfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Featured Product"
                className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-bold text-white text-sm leading-tight mb-1">
                  Pink Rose Bouquet - Premium Edition
                </h3>
                <p className="font-semibold text-white">IDR 150.000</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-white font-semibold text-sm">Stepper:</span>
              <QuantityStepper
                quantity={quantity1}
                onDecrease={() => setQuantity1(Math.max(1, quantity1 - 1))}
                onIncrease={() => setQuantity1(quantity1 + 1)}
                size="md"
                variant="white"
              />
            </div>
          </div>

          {/* Gold Product with Promo */}
          <ProductCard
            image="https://images.unsplash.com/photo-1686424735444-269a535f2be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmbG93ZXIlMjBib3VxdWV0JTIwYXJyYW5nZW1lbnQlMjBwaW5rJTIwcm9zZXN8ZW58MXx8fHwxNzc4NjkyNjczfDA&ixlib=rb-4.1.0&q=80&w=1080"
            name="Romance Rose Collection"
            price="IDR 120.000"
            quantity={quantity2}
            onQuantityChange={setQuantity2}
            variant="gold"
            promoBadge="10+ pcs: -15%"
          />

          {/* Checkout Summary */}
          <div className="bg-white rounded-2xl p-4 mt-6">
            <h2 className="font-bold text-[#3D0C1E] mb-4">Checkout Summary</h2>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#3D0C1E]">Merchandise Subtotal</span>
                <span className="font-semibold">IDR 85.000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#3D0C1E]">Customization Fee</span>
                <span className="font-semibold">IDR 100</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#3D0C1E]">Greeting Card (Premium)</span>
                <span className="font-semibold">IDR 700</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#3D0C1E]">Tax</span>
                <span className="font-semibold">IDR 250</span>
              </div>
              <div className="h-px bg-gray-200 my-2" />
              <div className="flex justify-between">
                <span className="font-bold text-[#3D0C1E]">TOTAL</span>
                <span className="font-bold text-[#3D0C1E]">IDR 195.000</span>
              </div>
            </div>

            <button className="w-full mt-4 rounded-full bg-[#5C1A2E] text-white py-3 font-semibold flex items-center justify-center gap-2">
              Cash Out
              <ChevronRight size={18} />
            </button>

            <button className="w-full mt-2 text-[#5C1A2E] text-sm flex items-center justify-center gap-1">
              Proceed to Secure Checkout
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <BottomNav activeTab="cart" />
    </div>
  );
}
