"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star, Plus } from "lucide-react"
import { useRouter } from "next/navigation"

const featuredProducts = [
  {
    id: 1,
    name: "프리미엄 아카시아 꿀",
    price: 28000,
    originalPrice: 35000,
    rating: 4.8,
    reviews: 124,
    image: "🍯",
    badge: "BEST",
    discount: 20,
  },
  {
    id: 2,
    name: "천연 로즈힙 세럼",
    price: 45000,
    originalPrice: 60000,
    rating: 4.9,
    reviews: 89,
    image: "🧴",
    badge: "NEW",
    discount: 25,
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
  },
]

export default function MobileFeaturedProducts() {
  const router = useRouter()

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`)
  }

  return (
    <section className="py-6 bg-gradient-to-b from-yellow-50 to-white">
      <div className="px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">이번 주 베스트 ⭐</h2>
          <p className="text-gray-600 text-base">고객들이 가장 사랑하는 상품들</p>
        </div>

        {/* Mobile Product Grid - 2 columns only */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative bg-gradient-to-br from-yellow-100 to-orange-100 h-32 flex items-center justify-center">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {product.image}
                  </span>

                  {/* Badge */}
                  <div className="absolute top-2 left-2">
                    <span
                      className={`px-2 py-1 text-xs font-bold rounded-full ${
                        product.badge === "BEST"
                          ? "bg-yellow-400 text-yellow-900"
                          : product.badge === "NEW"
                            ? "bg-green-400 text-green-900"
                            : product.badge === "HOT"
                              ? "bg-red-400 text-red-900"
                              : "bg-blue-400 text-blue-900"
                      }`}
                    >
                      {product.badge}
                    </span>
                  </div>

                  {/* Wishlist */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation()
                      // 찜하기 로직
                    }}
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full w-7 h-7"
                  >
                    <Heart className="w-3 h-3 text-gray-600" />
                  </Button>

                  {/* Discount Badge */}
                  {product.discount > 0 && (
                    <div className="absolute bottom-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      -{product.discount}%
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-3">
                  <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2 leading-tight">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center mb-2">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs font-medium text-gray-700 ml-1">{product.rating}</span>
                    <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="mb-3">
                    <span className="text-base font-bold text-gray-800">₩{product.price.toLocaleString()}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-xs text-gray-500 line-through ml-1">
                        ₩{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    onClick={(e) => {
                      e.stopPropagation()
                      // 장바구니 담기 로직
                    }}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold rounded-xl py-2 text-sm"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    담기
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-yellow-400 text-yellow-600 hover:bg-yellow-50 rounded-full px-8 bg-transparent w-full"
          >
            더 많은 상품 보기
          </Button>
        </div>
      </div>
    </section>
  )
}
