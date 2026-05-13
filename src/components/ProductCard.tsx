import { Edit2 } from "lucide-react";
import { QuantityStepper } from "./QuantityStepper";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
  showGiftingAddOn?: boolean;
  showDeliveryNotes?: boolean;
  backgroundColor?: string;
  textColor?: string;
  promoBadge?: string;
  variant?: "default" | "teal" | "gold";
}

export function ProductCard({
  image,
  name,
  price,
  quantity,
  onQuantityChange,
  showGiftingAddOn = false,
  showDeliveryNotes = false,
  backgroundColor = "#FFFFFF",
  textColor = "#3D0C1E",
  promoBadge,
  variant = "default"
}: ProductCardProps) {
  const borderClass = variant === "default" ? "border-[#F9D9E3]" : "border-transparent";
  const bgClass = variant === "teal" ? "bg-[#5BBFBF]" : variant === "gold" ? "bg-[#D4A853]" : "";
  const priceColor = variant === "teal" ? "text-white" : textColor;
  const nameColor = variant === "teal" ? "text-white" : textColor;

  return (
    <div
      className={`rounded-2xl border ${borderClass} p-4 ${bgClass}`}
      style={variant === "default" ? { backgroundColor } : {}}
    >
      <div className="flex gap-3">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3
            className={`font-bold text-sm leading-tight mb-1 line-clamp-2 ${nameColor}`}
          >
            {name}
          </h3>
          <p className={`font-semibold ${priceColor}`}>{price}</p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <QuantityStepper
          quantity={quantity}
          onDecrease={() => onQuantityChange(Math.max(1, quantity - 1))}
          onIncrease={() => onQuantityChange(quantity + 1)}
          variant={variant === "teal" ? "white" : "default"}
        />

        <div className="flex gap-2">
          {showGiftingAddOn && (
            <button className="px-3 py-1 rounded-full bg-[#5C1A2E] text-white text-xs">
              Gifting Add-on
            </button>
          )}
          {showDeliveryNotes && (
            <button className="px-3 py-1 rounded-full bg-white border border-gray-200 text-[#5C1A2E] text-xs flex items-center gap-1">
              <Edit2 size={10} />
              Delivery Notes
            </button>
          )}
        </div>
      </div>

      {promoBadge && (
        <div className="mt-2 flex justify-end">
          <span className="px-3 py-1 rounded-full bg-[#5C1A2E] text-white text-xs">
            {promoBadge}
          </span>
        </div>
      )}
    </div>
  );
}
