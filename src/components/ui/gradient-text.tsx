
import { cn } from "@/lib/utils"
import * as React from "react"
import { HTMLAttributes } from "react"

interface GradientTextProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Array of colors for the gradient
   * @default ["hsl(45, 93%, 62%)", "hsl(280, 100%, 62%)", "hsl(45, 93%, 62%)"]
   */
  colors?: string[]
  /**
   * Animation duration in seconds
   * @default 8
   */
  animationSpeed?: number
  /**
   * Show animated border
   * @default false
   */
  showBorder?: boolean
}

export function GradientText({
  children,
  className,
  colors = ["hsl(45, 93%, 62%)", "hsl(280, 100%, 62%)", "hsl(45, 93%, 62%)"],
  animationSpeed = 8,
  showBorder = false,
  ...props
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  }

  return (
    <div
      className={cn(
        "relative mx-auto flex max-w-fit flex-row items-center justify-center",
        "rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500",
        "overflow-visible p-4",
        className
      )}
      {...props}
    >
      {showBorder && (
        <div
          className="absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient"
          style={{
            ...gradientStyle,
            backgroundSize: "300% 100%",
          }}
        >
          <div
            className="absolute inset-0 bg-background rounded-[1.25rem] z-[-1]"
            style={{
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      )}
      <div
        className="inline-block relative z-10 px-4 py-2"
        style={{
          background: `linear-gradient(to right, ${colors.join(", ")})`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundSize: "300% 100%",
          animation: `gradient ${animationSpeed}s linear infinite`,
        }}
      >
        {children}
      </div>
    </div>
  )
}
