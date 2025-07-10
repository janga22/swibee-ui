"use client"

import { useState } from "react"
import MobileHeader from "@/components/layout/mobile-header"
import MobileBottomNav from "@/components/layout/mobile-bottom-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star, Plus, Trash2, ShoppingCart } from "lucide-react"

const wishlistItems = [
  {
    id: 1,
    name: "프리미엄 아카시아 꿀 500g",
    price: 28000,
    originalPrice: 35000,
    rating: 4.8,
    reviews: 124,
    image: "🍯",
    badge: "BEST",
    discount: 20,
    inStock: true,
  },
  {
    id: 2,
    name: "천연 로즈힙 비타민C 세럼",
    price: 45000,
    originalPrice: 60000,
    rating: 4.9,
    reviews: 89,
    image: "🧴",
    badge: "NEW",
    discount: 25,
    inStock: true,
  },
  {
    id: 3,
    name: "유기농 허브티 세트",
    price: 22000,
    originalPrice: 28000,
    rating: 4.7,
    reviews: 156,
    image: "🌿",
    badge: "HOT",
    discount: 21,
    inStock: false,
  },
  {
    id: 4,
    name: "수제 마카롱 12개입",
    price: 18000,
    originalPrice: 24000,
    rating: 4.6,
    reviews: 203,
    image: "🍪",
    badge: "SALE",
    discount: 25,
    inStock: true,
  },
]

export default function WishlistPage() {
  const [items, setItems] = useState(wishlistItems)

  const removeFromWishlist = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const addToCart = (id: number) => {
    // 장바구니 추가 로직
    console.log("Added to cart:", id)
  }

  return (
    <div className="min-h-screen bg-gray-50 max-w-sm mx-auto">
      <MobileHeader />

      <main className="pb-20">
        {/* Page Header */}
        <div className="bg-white px-4 py-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800 mb-1">찜한 상품</h1>
          <p className="text-sm text-gray-600">마음에 든 달콤한 상품들 💝</p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-16 px-4">
            <Heart className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-600 mb-2">찜한 상품이 없어요</h2>
            <p className="text-gray-500 mb-6">마음에 드는 상품을 찜해보세요!</p>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 rounded-full px-8 w-full">
              상품 둘러보기
            </Button>
          </div>
        ) : (
          <>
            {/* Stats */}
            <div className="bg-white px-4 py-3 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">총 {items.length}개 상품</span>
                <Button variant="ghost" size="sm" className="text-gray-500">
                  전체 삭제
                </Button>
              </div>
            </div>

            {/* Wishlist Items */}
            <div className="px-4 py-4 space-y-3">
              {items.map((item) => (
                <Card key={item.id} className="overflow-hidden shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex space-x-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 relative">
                        <span className="text-2xl">{item.image}</span>
                        {/* Badge */}
                        <div className="absolute -top-1 -left-1">
                          <span
                            className={`px-1 py-0.5 text-xs font-bold rounded-full ${
                              item.badge === "BEST"
                                ? "bg-yellow-400 text-yellow-900"
                                : item.badge === "NEW"
                                  ? "bg-green-400 text-green-900"
                                  : item.badge === "HOT"
                                    ? "bg-red-400 text-red-900"
                                    : "bg-blue-400 text-blue-900"
                            }`}
                          >
                            {item.badge}
                          </span>
                        </div>
                        {/* Discount Badge */}
                        <div className="absolute -bottom-1 -right-1 bg-red-500 text-white px-1 py-0.5 rounded-full text-xs font-bold">
                          -{item.discount}%
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-800 text-sm leading-tight flex-1 pr-2">{item.name}</h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromWishlist(item.id)}
                            className="text-red-400 hover:text-red-500 w-6 h-6 rounded-full flex-shrink-0"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>

                        <div className="flex items-center mb-2">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs font-medium text-gray-700 ml-1">{item.rating}</span>
                          <span className="text-xs text-gray-500 ml-1">({item.reviews})</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-base font-bold text-gray-800">₩{item.price.toLocaleString()}</span>
                            <span className="text-xs text-gray-500 line-through ml-1">
                              ₩{item.originalPrice.toLocaleString()}
                            </span>
                          </div>
                          <Button
                            onClick={() => addToCart(item.id)}
                            disabled={!item.inStock}
                            className={`rounded-xl px-4 py-1 text-sm font-semibold ${
                              item.inStock
                                ? "bg-yellow-400 hover:bg-yellow-500 text-yellow-900"
                                : "bg-gray-200 text-gray-500 cursor-not-allowed"
                            }`}
                          >
                            {item.inStock ? (
                              <>
                                <Plus className="w-3 h-3 mr-1" />
                                담기
                              </>
                            ) : (
                              "품절"
                            )}
                          </Button>
                        </div>

                        {!item.inStock && <p className="text-xs text-red-500 mt-1">현재 품절된 상품입니다</p>}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="px-4 py-4">
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  className="flex-1 py-3 rounded-xl border-yellow-400 text-yellow-600 bg-transparent"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  전체 장바구니 담기
                </Button>
                <Button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold py-3 rounded-xl">
                  선택 상품 구매
                </Button>
              </div>
            </div>
          </>
        )}
      </main>

      <MobileBottomNav />
    </div>
  )
}
