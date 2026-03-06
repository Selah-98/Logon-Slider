"use client"

import { useState } from "react"
import { Eye, EyeOff, Lock } from "lucide-react"

interface PasswordInputProps {
  placeholder?: string
  name?: string
  id?: string
}

export function PasswordInput({
  placeholder = "Password",
  name = "password",
  id,
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false)

  return (
    <div className="relative w-full group">
      <Lock
        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary"
        size={16}
      />
      <input
        type={visible ? "text" : "password"}
        name={name}
        id={id}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-input px-10 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
        autoComplete={name === "password" ? "current-password" : "new-password"}
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        aria-label={visible ? "Hide password" : "Show password"}
      >
        {visible ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
    </div>
  )
}
