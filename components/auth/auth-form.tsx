"use client"

import { Mail, User } from "lucide-react"
import { PasswordInput } from "./password-input"

interface AuthFormProps {
  mode: "sign-in" | "sign-up"
}

export function AuthForm({ mode }: AuthFormProps) {
  const isSignUp = mode === "sign-up"

  return (
    <form
      className="flex h-full w-full flex-col items-center justify-center gap-4 px-6 py-10 sm:px-12"
      onSubmit={(e) => e.preventDefault()}
    >
      <h1 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance text-center">
        {isSignUp ? "Create Account" : "Welcome Back"}
      </h1>
      <p className="text-sm text-muted-foreground text-center max-w-xs">
        {isSignUp
          ? "Enter your details to get started"
          : "Sign in to continue to your account"}
      </p>

      <div className="mt-2 flex w-full max-w-xs flex-col gap-3">
        {isSignUp && (
          <div className="relative w-full group">
            <User
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary"
              size={16}
            />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full rounded-xl border border-border bg-input px-10 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              autoComplete="name"
            />
          </div>
        )}

        <div className="relative w-full group">
          <Mail
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary"
            size={16}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-border bg-input px-10 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            autoComplete="email"
          />
        </div>

        <PasswordInput />

        {isSignUp && (
          <PasswordInput
            placeholder="Confirm Password"
            name="confirm-password"
          />
        )}

        {!isSignUp && (
          <button
            type="button"
            className="self-end text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            Forgot password?
          </button>
        )}

        <button
          type="submit"
          className="mt-2 w-full rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-105 active:scale-[0.98] cursor-pointer"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </form>
  )
}
