import { forwardRef } from "react"
import { cn } from "../../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "destructive";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        className={
          cn("text-[white] px-4 py-3 rounded-md font-bold flex items-center justify-center gap-[0.5rem] ease-out duration-300", 
            className,
            variant === "primary" 
            ? "bg-[#009dff] hover:bg-[#009dffd2]" 
            : variant === "destructive" 
            && "bg-[#ec1b1baf] hover:bg-[#ec1b1be0]"
          )
        }
        ref={ref}
        {...props}
      />
    )
  }
)