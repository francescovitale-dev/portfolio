import { createContext, useContext, useEffect } from "react"

const ThemeProviderContext = createContext()

export function ThemeProvider({
  children,
  ...props
}) {
  // Force dark theme
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light")
    root.classList.add("dark")
  }, [])

  // Simplified context value - theme is always "dark"
  const value = {
    theme: "dark",
    // Keep setTheme for API compatibility but make it a no-op
    setTheme: () => {}
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}