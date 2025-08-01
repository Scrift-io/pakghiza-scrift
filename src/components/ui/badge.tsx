import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 relative overflow-hidden group hover:scale-105",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/90 shadow-sm backdrop-blur-sm",
        secondary:
          "border-transparent bg-secondary/80 text-secondary-foreground hover:bg-secondary/90 shadow-sm backdrop-blur-sm",
        destructive:
          "border-transparent bg-destructive/80 text-destructive-foreground hover:bg-destructive/90 shadow-sm backdrop-blur-sm",
        outline: "text-foreground border-border/50 hover:bg-accent/50 hover:text-accent-foreground backdrop-blur-sm",
        premium: "border-transparent bg-amber-500/80 text-white shadow-sm hover:bg-amber-500/90 backdrop-blur-sm before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        success: "border-transparent bg-green-500/80 text-white shadow-sm hover:bg-green-500/90 backdrop-blur-sm",
        animated: "border-transparent bg-amber-500/80 text-white shadow-sm animate-pulse hover:animate-none backdrop-blur-sm hover:bg-amber-500/90"
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
