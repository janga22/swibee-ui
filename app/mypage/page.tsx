"use client"

import { useState } from "react"
import MobileBottomNav from "@/components/layout/mobile-bottom-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  User,
  Settings,
  ShoppingBag,
  Heart,
  Star,
  Gift,
  HelpCircle,
  Bell,
  CreditCard,
  MapPin,
  ChevronRight,
  LogOut,
  ArrowLeft,
} from "lucide-react"

export default function MyPagePage() {
  const [user] = useState({
    name: "김스위비",
    email: "swibee@example.com",
    level: "골드",
    points: 12500,
    coupons: 3,
  })

  const menuItems = [
    {
      category: "주문 관리",
      items: [
        { icon: ShoppingBag, label: "주문/배송 조회", count: 2, href: "/mypage/orders" },
        { icon: Star, label: "리뷰 관리", count: 5, href: "/mypage/reviews" },
        { icon: Heart, label: "찜한 상품", count: 8, href: "/wishlist" },
      ],
    },
    {
      category: "혜택 관리",
      items: [
        { icon: Gift, label: "쿠폰함", count: user.coupons, href: "/mypage/coupons" },
        { icon: CreditCard, label: "적립금", count: `${user.points.toLocaleString()}P`, href: "/mypage/points" },
      ],
    },
    {
      category: "계정 설정",
      items: [
        { icon: User, label: "개인정보 수정", href: "/mypage/profile" },
        { icon: MapPin, label: "배송지 관리", href: "/mypage/address" },
        { icon: Bell, label: "알림 설정", href: "/mypage/notifications" },
        { icon: Settings, label: "앱 설정", href: "/mypage/settings" },
      ],
    },
    {
      category: "고객 지원",
      items: [
        { icon: HelpCircle, label: "자주 묻는 질문", href: "/mypage/faq" },
        { icon: HelpCircle, label: "1:1 문의", href: "/mypage/inquiry" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 max-w-sm mx-auto">
      {/* Custom Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="flex items-center justify-between p-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold text-gray-800">마이페이지</h1>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <main className="pb-20">
        {/* User Profile */}
        <div className="bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 px-4 py-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-yellow-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-1">{user.name}님</h2>
              <p className="text-yellow-100 text-sm">{user.email}</p>
              <div className="flex items-center mt-2">
                <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {user.level} 회원
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 text-center">
              <div className="text-white font-bold text-lg">{user.points.toLocaleString()}</div>
              <div className="text-yellow-100 text-xs">적립금</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 text-center">
              <div className="text-white font-bold text-lg">{user.coupons}</div>
              <div className="text-yellow-100 text-xs">쿠폰</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 text-center">
              <div className="text-white font-bold text-lg">8</div>
              <div className="text-yellow-100 text-xs">찜한 상품</div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="px-4 py-4 space-y-6">
          {menuItems.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-sm font-semibold text-gray-500 mb-3 px-2">{category.category}</h3>
              <Card>
                <CardContent className="p-0">
                  {category.items.map((item, itemIndex) => {
                    const Icon = item.icon
                    return (
                      <button
                        key={itemIndex}
                        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors first:rounded-t-xl last:rounded-b-xl border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="w-5 h-5 text-gray-600" />
                          <span className="text-gray-800 font-medium">{item.label}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {item.count && <span className="text-sm text-yellow-600 font-semibold">{item.count}</span>}
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </button>
                    )
                  })}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Special Offers */}
        <div className="px-4 py-4">
          <Card className="bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-1">🎉 특별 혜택</h4>
                  <p className="text-sm text-yellow-700">생일 쿠폰이 도착했어요!</p>
                </div>
                <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 rounded-full">
                  확인하기
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* App Info */}
        <div className="px-4 py-4">
          <div className="text-center space-y-2">
            <p className="text-xs text-gray-500">Swibee v1.0.0</p>
            <div className="flex justify-center space-x-4 text-xs text-gray-500">
              <button>이용약관</button>
              <button>개인정보처리방침</button>
              <button>고객센터</button>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <div className="px-4 py-4">
          <Button variant="outline" className="w-full py-3 rounded-xl border-gray-300 text-gray-600 bg-transparent">
            <LogOut className="w-4 h-4 mr-2" />
            로그아웃
          </Button>
        </div>
      </main>

      <MobileBottomNav />
    </div>
  )
}
