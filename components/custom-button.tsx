import type React from "react"
import { cn } from "@/lib/utils"
import { type ButtonHTMLAttributes, forwardRef } from "react"

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline"
  size?: "default" | "lg"
  children: React.ReactNode
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = "primary", size = "default", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

    const variants = {
      primary: "text-white hover:opacity-90",
      outline: "border border-primary bg-background hover:bg-primary hover:text-white",
    }

    const sizes = {
      default: "h-10 px-4 py-2",
      lg: "h-11 rounded-md px-8 text-lg py-6",
    }

    const primaryStyle =
      variant === "primary"
        ? {
            backgroundColor: "oklch(0.35 0.15 264)",
            color: "oklch(1 0 0)",
          }
        : {}

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        style={primaryStyle}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)

CustomButton.displayName = "CustomButton"

export { CustomButton }
