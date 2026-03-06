"use client"

import { useState } from "react"
import { AuthForm } from "./auth-form"
import { OverlayPanel } from "./overlay-panel"
import { ThemeToggle } from "./theme-toggle"

export function AuthContainer() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false)

  return (
    <main className="flex min-h-svh items-center justify-center p-4 transition-colors duration-500">
      <ThemeToggle />

      <div
        className="relative w-full max-w-[900px] overflow-hidden rounded-2xl bg-card shadow-2xl backdrop-blur-2xl transition-all duration-500 md:min-h-[540px]"
      >
        {/* ── Sign In ── */}
        <div
          className={`
            transition-all duration-700 ease-in-out
            md:absolute md:inset-y-0 md:left-0 md:w-1/2
            ${
              isRightPanelActive
                ? "md:translate-x-full md:opacity-0 md:pointer-events-none"
                : "md:translate-x-0 md:opacity-100 md:z-20"
            }
            ${isRightPanelActive ? "hidden md:block" : "block"}
          `}
        >
          <AuthForm mode="sign-in" />
        </div>

        {/* ── Sign Up ── */}
        <div
          className={`
            transition-all duration-700 ease-in-out
            md:absolute md:inset-y-0 md:left-0 md:w-1/2
            ${
              isRightPanelActive
                ? "md:translate-x-full md:opacity-100 md:z-20"
                : "md:translate-x-0 md:opacity-0 md:pointer-events-none"
            }
            ${isRightPanelActive ? "block" : "hidden md:block"}
          `}
        >
          <AuthForm mode="sign-up" />
        </div>

        {/* ── Desktop Overlay ── */}
        <OverlayPanel
          isRightPanelActive={isRightPanelActive}
          onSignIn={() => setIsRightPanelActive(false)}
          onSignUp={() => setIsRightPanelActive(true)}
        />

        {/* ── Mobile Toggle ── */}
        <div className="flex items-center justify-center border-t border-border px-6 py-5 md:hidden">
          {isRightPanelActive ? (
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsRightPanelActive(false)}
                className="font-semibold text-foreground underline underline-offset-4 hover:text-primary transition-colors cursor-pointer"
              >
                Sign In
              </button>
            </p>
          ) : (
            <p className="text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => setIsRightPanelActive(true)}
                className="font-semibold text-foreground underline underline-offset-4 hover:text-primary transition-colors cursor-pointer"
              >
                Sign Up
              </button>
            </p>
          )}
        </div>
      </div>
    </main>
  )
}
