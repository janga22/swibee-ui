"use client"

import { useState } from "react"
import MobileHeader from "@/components/layout/mobile-header"
import MobileBottomNav from "@/components/layout/mobile-bottom-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react"

const cartItems = [
  {
    id: 1,
    name: "프리미엄 아카시아 꿀 500g",
    price: 28000,
    originalPrice: 35000,
    quantity: 2,
    image: "🍯",
    inStock: true,
  },
  {
    id: 2,
    name: "천연 로즈힙 비타민C 세럼",
    price: 45000,
    originalPrice: 60000,
    quantity: 1,
    image: "🧴",
    inStock: true,
  },
]

export default function MobileCartPage() {
  const [items, setItems] = useState(cartItems)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setItems(items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal >= 50000 ? 0 : 3000
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-gray-50 max-w-sm mx-auto">
      <MobileHeader />

      <main className="pb-32">
        {/* Page Header */}
        <div className="bg-white px-4 py-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800 mb-1">장바구니</h1>
          <p className="text-sm text-gray-600">선택하신 달콤한 상품들 🛒</p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-16 px-4">
            <ShoppingBag className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-600 mb-2">장바구니가 비어있어요</h2>
            <p className="text-gray-500 mb-6">달콤한 상품들을 담아보세요!</p>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 rounded-full px-8 w-full">
              쇼핑 계속하기
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="px-4 py-4 space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="overflow-hidden shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex space-x-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">{item.image}</span>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-800 text-sm leading-tight">{item.name}</h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 w-6 h-6"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="flex items-center space-x-2 mb-3">
                          <span className="text-base font-bold text-gray-800">₩{item.price.toLocaleString()}</span>
                          {item.originalPrice > item.price && (
                            <span className="text-sm text-gray-500 line-through">
                              ₩{item.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-gray-300 rounded-lg">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-none"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="px-3 py-2 font-medium text-sm">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-none"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>

                          {/* Item Total */}
                          <span className="text-base font-bold text-gray-800">
                            ₩{(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </main>

      {/* Fixed Bottom Order Summary */}
      {items.length > 0 && (
        <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-200 p-4 z-40">
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">상품 금액</span>
              <span>₩{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">배송비</span>
              <span>{shipping === 0 ? "무료" : `₩${shipping.toLocaleString()}`}</span>
            </div>
            {shipping > 0 && (
              <p className="text-xs text-yellow-600 bg-yellow-50 p-2 rounded-lg">
                ₩{(50000 - subtotal).toLocaleString()} 더 구매하시면 무료배송!
              </p>
            )}
            <hr />
            <div className="flex justify-between font-bold">
              <span>총 결제 금액</span>
              <span className="text-yellow-600">₩{total.toLocaleString()}</span>
            </div>
            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold py-4 rounded-xl text-base">
              주문하기 ({items.length}개)
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      )}

      <MobileBottomNav />
    </div>
  )
}
