import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { BottomNav } from "./BottomNav";

export function Screen2() {
  const [quantity, setQuantity] = useState(2);
  const [customization, setCustomization] = useState(true);
  const [selectedRibbon, setSelectedRibbon] = useState(0);
  const [selectedTexture, setSelectedTexture] = useState(0);

  const ribbonColors = ["#DC143C", "#D4A853", "#F5B8CC", "#3D3D3D"];
  const textureColors = ["#F5DEB3", "#E8D5C4", "#FAFAF0"];

  return (
    <div className="h-full bg-[#F9D9E3] flex flex-col">
      <div className="flex-1 overflow-auto pb-32 px-4">
        <h1 className="text-2xl font-bold text-[#5C1A2E] pt-6 pb-2">MY CART</h1>
        <p className="text-sm text-[#5C1A2E] mb-4">Gifting Card</p>

        <ProductCard
          image="https://images.unsplash.com/photo-1686424735290-ea6ac590983c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBib3VxdWV0JTIwYXJyYW5nZW1lbnQlMjBwaW5rJTIwcm9zZXN8ZW58MXx8fHwxNzc4NjkyNjczfDA&ixlib=rb-4.1.0&q=80&w=1080"
          name="Pink Rose Bouquet - Deluxe"
          price="IDR 85.000"
          quantity={quantity}
          onQuantityChange={setQuantity}
        />

        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#3D0C1E] mb-2">
              Add Message:
            </label>
            <textarea
              className="w-full rounded-2xl border border-gray-200 p-3 text-sm resize-none"
              rows={3}
              placeholder="Write your message here..."
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#3D0C1E] mb-2">
              Delivery Date:
            </label>
            <button className="w-full rounded-2xl border border-gray-200 bg-white p-3 flex items-center justify-between text-sm">
              <span>Nov. 27</span>
              <ChevronDown size={16} />
            </button>
          </div>

          <div className="bg-white rounded-2xl p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-[#3D0C1E]">Customization</span>
              <button
                onClick={() => setCustomization(!customization)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  customization ? "bg-[#5BBFBF]" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    customization ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {customization && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#3D0C1E] mb-2">
                    Ribbon Color:
                  </label>
                  <div className="flex gap-3">
                    {ribbonColors.map((color, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedRibbon(idx)}
                        className={`w-10 h-10 rounded-full border-2 ${
                          selectedRibbon === idx ? "border-[#5C1A2E]" : "border-transparent"
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#3D0C1E] mb-2">
                    Paper Texture:
                  </label>
                  <div className="flex gap-3">
                    {textureColors.map((color, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedTexture(idx)}
                        className={`w-10 h-10 rounded-full border-2 ${
                          selectedTexture === idx ? "border-[#5C1A2E]" : "border-transparent"
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <button className="w-full rounded-2xl border border-gray-200 bg-white p-3 flex items-center justify-between text-sm">
                    <span className="text-gray-500">Flower Substitution (e.g. specific...)</span>
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-[#3D0C1E]">Subtotal</span>
              <span className="font-semibold">IDR 85.000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#3D0C1E]">Gift Service Fee</span>
              <span className="font-semibold">IDR 120</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#3D0C1E]">Estimated Shipping Cost</span>
              <span className="font-semibold">IDR 3.100</span>
            </div>
          </div>

          <button className="w-full rounded-full border-2 border-[#5C1A2E] bg-transparent text-[#5C1A2E] py-3 font-semibold">
            Calculate Shipping
          </button>
        </div>
      </div>

      <BottomNav activeTab="cart" />
    </div>
  );
}
