import { LucideProps } from "lucide-react";
import React, { forwardRef } from "react";
import { cn } from "../../utils/cn";

interface InputProps {
  label?: string;
  placeholder?: string;
  className?: string;
  icon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon: Icon, placeholder, label, className, ...props }, ref) => (
    <div className={cn(className)}>
      {label && <label className="text-sm font-semibold">{label}</label>}

      <div className="bg-[white] border border-[gray] rounded-md flex items-center px-[1rem] py-1 focus-within:ring-2 focus-within:ring-black">
        {Icon && <Icon />}
        <input
          type="text"
          ref={ref}
          placeholder={placeholder} 
          className="w-full bg-[transparent] px-2 py-2 focus:outline-none"
          {...props}
        />
      </div>
    </div>
  )
);