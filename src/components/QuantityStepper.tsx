import { Minus, Plus } from "lucide-react";

interface QuantityStepperProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "white";
}

export function QuantityStepper({
  quantity,
  onDecrease,
  onIncrease,
  size = "sm",
  variant = "default"
}: QuantityStepperProps) {
  const sizeClasses = {
    sm: "h-8 gap-3 px-3",
    md: "h-10 gap-4 px-4",
    lg: "h-12 gap-6 px-6"
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18
  };

  const bgClass = variant === "white" ? "bg-white" : "bg-[#F5B8CC]";
  const textClass = variant === "white" ? "text-[#5C1A2E]" : "text-[#5C1A2E]";

  return (
    <div className={`flex items-center rounded-full ${bgClass} ${sizeClasses[size]}`}>
      <button
        onClick={onDecrease}
        className="flex items-center justify-center transition-opacity hover:opacity-70"
      >
        <Minus size={iconSizes[size]} className={textClass} strokeWidth={2.5} />
      </button>
      <span className={`${textClass} font-semibold min-w-[20px] text-center`}>
        {quantity}
      </span>
      <button
        onClick={onIncrease}
        className="flex items-center justify-center transition-opacity hover:opacity-70"
      >
        <Plus size={iconSizes[size]} className={textClass} strokeWidth={2.5} />
      </button>
    </div>
  );
}
