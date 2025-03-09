import { cn } from "@/lib/utils";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      data-slot="card"
      className={cn(
        "flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-[#30363E] bg-[#0D1117] p-4 text-[#F0F2F8] shadow-lg transition-all duration-300 hover:scale-[102%] md:rounded-4xl md:p-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
