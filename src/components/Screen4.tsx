import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BottomNav } from "./BottomNav";
import { QuantityStepper } from "./QuantityStepper";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Screen4() {
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);

  const product1Images = [
    "https://images.unsplash.com/photo-1686424735290-ea6ac590983c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBib3VxdWV0JTIwYXJyYW5nZW1lbnQlMjBwaW5rJTIwcm9zZXN8ZW58MXx8fHwxNzc4NjkyNjczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1686424735444-269a535f2be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmbG93ZXIlMjBib3VxdWV0JTIwYXJyYW5nZW1lbnQlMjBwaW5rJTIwcm9zZXN8ZW58MXx8fHwxNzc4NjkyNjczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1686424735279-12235a5582d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmbG93ZXIlMjBib3VxdWV0JTIwYXJyYW5nZW1lbnQlMjBwaW5rJTIwcm9zZXN8ZW58MXx8fHwxNzc4NjkyNjczfDA&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  const product2Images = [
    "https://images.unsplash.com/photo-1754731995953-3e588560d7e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmbG93ZXIlMjBib3VxdWV0JTIwYXJyYW5nZW1lbnQlMjBwaW5rJTIwcm9zZXN8ZW58MXx8fHwxNzc4NjkyNjczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1709099158463-cae636593236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxmbG93ZXIlMjBib3VxdWV0JTIwYXJyYW5nZW1lbnQlMjBwaW5rJTIwcm9zZXN8ZW58MXx8fHwxNzc4NjkyNjczfDA&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  return (
    <div className="h-full bg-[#F9D9E3] flex flex-col">
      <div className="flex-1 overflow-auto pb-32 px-4">
        <h1 className="text-2xl font-bold text-[#5C1A2E] pt-6 pb-4">MY CART</h1>

        <div className="space-y-4">
          {/* Carousel Product 1 */}
          <div className="bg-white rounded-2xl border border-[#F9D9E3] p-4">
            <div className="relative">
              <div className="flex gap-3 mb-2">
                <div className="relative w-20 h-20">
                  <ImageWithFallback
                    src={product1Images[currentSlide1]}
                    alt="Product"
                    className="w-full h-full rounded-xl object-cover"
                  />
                  <button
                    onClick={() => setCurrentSlide1((currentSlide1 - 1 + product1Images.length) % product1Images.length)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-1 shadow-lg"
                  >
                    <ChevronLeft size={14} className="text-[#5C1A2E]" />
                  </button>
                  <button
                    onClick={() => setCurrentSlide1((currentSlide1 + 1) % product1Images.length)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-1 shadow-lg"
                  >
                    <ChevronRight size={14} className="text-[#5C1A2E]" />
                  </button>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#3D0C1E] text-sm leading-tight mb-1">
                    Pink Rose Bouquet - Deluxe
                  </h3>
                  <p className="font-semibold text-[#3D0C1E]">IDR 85.000</p>
                </div>
              </div>

              <div className="flex justify-center gap-1 mb-3">
                {product1Images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-1.5 h-1.5 rounded-full ${
                      idx === currentSlide1 ? "bg-[#5C1A2E]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <QuantityStepper
                quantity={quantity1}
                onDecrease={() => setQuantity1(Math.max(1, quantity1 - 1))}
                onIncrease={() => setQuantity1(quantity1 + 1)}
              />
              <button className="text-sm text-[#5C1A2E] underline">
                Save for Later
              </button>
            </div>
          </div>

          {/* Carousel Product 2 */}
          <div className="bg-white rounded-2xl border border-[#F9D9E3] p-4">
            <div className="relative">
              <div className="flex gap-3 mb-2">
                <div className="relative w-20 h-20">
                  <ImageWithFallback
                    src={product2Images[currentSlide2]}
                    alt="Product"
                    className="w-full h-full rounded-xl object-cover"
                  />
                  <button
                    onClick={() => setCurrentSlide2((currentSlide2 - 1 + product2Images.length) % product2Images.length)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-1 shadow-lg"
                  >
                    <ChevronLeft size={14} className="text-[#5C1A2E]" />
                  </button>
                  <button
                    onClick={() => setCurrentSlide2((currentSlide2 + 1) % product2Images.length)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-1 shadow-lg"
                  >
                    <ChevronRight size={14} className="text-[#5C1A2E]" />
                  </button>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#3D0C1E] text-sm leading-tight mb-1">
                    Mixed Rose Delight
                  </h3>
                  <p className="font-semibold text-[#3D0C1E]">IDR 95.000</p>
                </div>
              </div>

              <div className="flex justify-center gap-1 mb-3">
                {product2Images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-1.5 h-1.5 rounded-full ${
                      idx === currentSlide2 ? "bg-[#5C1A2E]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <QuantityStepper
                quantity={quantity2}
                onDecrease={() => setQuantity2(Math.max(1, quantity2 - 1))}
                onIncrease={() => setQuantity2(quantity2 + 1)}
              />
              <button className="text-sm text-[#5C1A2E] underline">
                Save for Later
              </button>
            </div>
          </div>

          {/* Special Offers Section */}
          <div className="bg-[#D4A853] rounded-2xl p-4 mt-6">
            <h2 className="font-bold text-white mb-3">Special Offers & Bundles</h2>
            <div className="flex gap-3 items-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1709099158463-cae636593236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxmbG93ZXIlMjBib3VxdWV0JTIwYXJyYW5nZW1lbnQlMjBwaW5rJTIwcm9zZXN8ZW58MXx8fHwxNzc4NjkyNjczfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Vase"
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div className="flex-1">
                <p className="text-white text-sm">
                  Complete the look with a vase – Add $20
                </p>
              </div>
              <button className="px-4 py-2 rounded-full bg-[#5C1A2E] text-white font-semibold text-sm">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Promo Code */}
      <div className="fixed bottom-16 left-0 right-0 bg-white px-4 py-4 shadow-lg">
        <div className="flex items-center gap-2 mb-2">
          <input
            type="text"
            placeholder="Gift Voucher / Promo Code"
            className="flex-1 px-4 py-2 rounded-full border border-gray-300 text-sm"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-[#3D0C1E]">TOTAL :</span>
          <button className="px-6 py-2 rounded-full bg-[#5C1A2E] text-white font-semibold text-sm">
            Express Cash Out
          </button>
        </div>
      </div>

      <BottomNav activeTab="cart" />
    </div>
  );
}
