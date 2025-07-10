"use client"

import { usePathname, useRouter } from "next/navigation"
import { Home, Search, ShoppingCart, Grid3X3, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileBottomNav() {
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    { id: "home", icon: Home, label: "홈", href: "/", badge: null },
    { id: "search", icon: Search, label: "검색", href: "/search", badge: null },
    { id: "cart", icon: ShoppingCart, label: "장바구니", href: "/cart", badge: 3 },
    { id: "categories", icon: Grid3X3, label: "카테고리", href: "/categories", badge: null },
    { id: "mypage", icon: User, label: "마이페이지", href: "/mypage", badge: null },
  ]

  const handleNavigation = (href: string) => {
    router.push(href)
  }

  return (
    <div className="max-w-sm mx-auto">
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-200 z-50">
        <div className="grid grid-cols-5 py-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive =
              pathname === item.href || (item.href === "/categories" && pathname.startsWith("/categories"))

            return (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => handleNavigation(item.href)}
                className={`flex flex-col items-center justify-center h-16 space-y-1 relative ${
                  isActive ? "text-yellow-600" : "text-gray-500"
                }`}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 ${isActive ? "text-yellow-600" : "text-gray-500"}`} />
                  {item.badge && (
                    <span className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className={`text-xs font-medium ${isActive ? "text-yellow-600" : "text-gray-500"}`}>
                  {item.label}
                </span>
                {isActive && <div className="absolute bottom-0 w-8 h-0.5 bg-yellow-400 rounded-full"></div>}
              </Button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
