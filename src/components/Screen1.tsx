import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { BottomNav } from "./BottomNav";

export function Screen1() {
  const [quantities, setQuantities] = useState<Record<string, number>>({
    product1: 1,
    product2: 1,
    product3: 1,
    product4: 1
  });

  const updateQuantity = (id: string, newQuantity: number) => {
    setQuantities(prev => ({ ...prev, [id]: newQuantity }));
  };

  const total = 195000;

  return (
    <div className="h-full bg-[#F9D9E3] flex flex-col">
      <div className="flex-1 overflow-auto pb-32 px-4">
        <h1 className="text-2xl font-bold text-[#5C1A2E] pt-6 pb-4">MY CART</h1>

        <div className="space-y-4">
          <h2 className="font-bold text-[#3D0C1E]">Occasions Collection</h2>

          <ProductCard
            image="https://images.unsplash.com/photo-1686424735290-ea6ac590983c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBib3VxdWV0JTIwYXJyYW5nZW1lbnQlMjBwaW5rJTIwcm9zZXN8ZW58MXx8fHwxNzc4NjkyNjczfDA&ixlib=rb-4.1.0&q=80&w=1080"
            name="Pink Rose Bouquet - Deluxe"
            price="IDR 85.000"
            quantity={quantities.product1}
            onQuantityChange={(q) => updateQuantity("product1", q)}
            showGiftingAddOn
            showDeliveryNotes
          />

          <ProductCard
            image="https://images.unsplash.com/photo-1686424735444-269a535f2be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmbG93ZXIlMjBib3VxdWV0JTIwYXJyYW5nZW1lbnQlMjBwaW5rJTIwcm9zZXN8ZW58MXx8fHwxNzc4NjkyNjczfDA&ixlib=rb-4.1.0&q=80&w=1080"
            name="Romance Rose Collection"
            price="IDR 120.000"
            quantity={quantities.product2}
            onQuantityChange={(q) => updateQuantity("product2", q)}
            showGiftingAddOn
            showDeliveryNotes
          />

          <h2 className="font-bold text-[#3D0C1E] mt-6">Last-Minute Picks</h2>

          <ProductCard
            image="https://images.unsplash.com/photo-1686424735279-12235a5582d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmbG93ZXIlMjBib3VxdWV0JTIwYXJyYW5nZW1lbnQlMjBwaW5rJTIwcm9zZXN8ZW58MXx8fHwxNzc4NjkyNjczfDA&ixlib=rb-4.1.0&q=80&w=1080"
            name="Simple Pink Elegance"
            price="IDR 65.000"
            quantity={quantities.product3}
            onQuantityChange={(q) => updateQuantity("product3", q)}
            showGiftingAddOn
            showDeliveryNotes
          />

          <ProductCard
            image="https://images.unsplash.com/photo-1754731995953-3e588560d7e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmbG93ZXIlMjBib3VxdWV0JTIwYXJyYW5nZW1lbnQlMjBwaW5rJTIwcm9zZXN8ZW58MXx8fHwxNzc4NjkyNjczfDA&ixlib=rb-4.1.0&q=80&w=1080"
            name="Mixed Rose Delight"
            price="IDR 95.000"
            quantity={quantities.product4}
            onQuantityChange={(q) => updateQuantity("product4", q)}
            showGiftingAddOn
            showDeliveryNotes
          />
        </div>
      </div>

      <div className="fixed bottom-16 left-0 right-0 bg-white px-4 py-4 flex items-center justify-between shadow-lg">
        <span className="font-bold text-[#3D0C1E]">TOTAL :</span>
        <button className="px-8 py-3 rounded-full bg-[#5C1A2E] text-white font-semibold">
          Cash Out
        </button>
      </div>

      <BottomNav activeTab="cart" />
    </div>
  );
}
