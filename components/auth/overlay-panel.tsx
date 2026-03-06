"use client"

interface OverlayPanelProps {
  onSignIn: () => void
  onSignUp: () => void
  isRightPanelActive: boolean
}

export function OverlayPanel({
  onSignIn,
  onSignUp,
  isRightPanelActive,
}: OverlayPanelProps) {
  return (
    <div
      className={`
        pointer-events-none absolute inset-y-0 left-1/2 z-30 hidden w-1/2 overflow-hidden
        transition-transform duration-700 ease-in-out
        md:block
        ${isRightPanelActive ? "-translate-x-full" : "translate-x-0"}
      `}
    >
      <div
        className={`
          relative -left-full flex h-full w-[200%]
          bg-gradient-to-br from-accent to-primary
          transition-transform duration-700 ease-in-out
          ${isRightPanelActive ? "translate-x-1/2" : "translate-x-0"}
        `}
      >
        {/* Left overlay — shown when sign-up is active */}
        <div className="flex h-full w-1/2 flex-col items-center justify-center gap-5 px-10 text-center">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground">
            Welcome Back!
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/80">
            Already have an account? Sign in and pick up right where you left
            off.
          </p>
          <button
            type="button"
            onClick={onSignIn}
            className="pointer-events-auto rounded-xl border-2 border-primary-foreground bg-transparent px-8 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-foreground hover:text-primary active:scale-95 cursor-pointer"
          >
            Sign In
          </button>
        </div>

        {/* Right overlay — shown when sign-in is active */}
        <div className="flex h-full w-1/2 flex-col items-center justify-center gap-5 px-10 text-center">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground">
            Hello, Friend!
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/80">
            Don&apos;t have an account yet? Start your journey with us today.
          </p>
          <button
            type="button"
            onClick={onSignUp}
            className="pointer-events-auto rounded-xl border-2 border-primary-foreground bg-transparent px-8 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-foreground hover:text-primary active:scale-95 cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}
