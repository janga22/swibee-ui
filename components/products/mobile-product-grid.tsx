"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star, Plus } from "lucide-react"
import { useRouter } from "next/navigation"

const products = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `달콤한 상품 ${i + 1}`,
  price: 25000 + i * 5000,
  originalPrice: 35000 + i * 5000,
  rating: 4.5 + (i % 5) * 0.1,
  reviews: 50 + i * 10,
  image: ["🍯", "🧴", "🌿", "🍪", "💊", "🏠"][i % 6],
  badge: ["BEST", "NEW", "HOT", "SALE"][i % 4],
  discount: 15 + (i % 3) * 5,
}))

export default function MobileProductGrid() {
  const router = useRouter()

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`)
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {products.map((product) => (
        <Card
          key={product.id}
          className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden rounded-2xl cursor-pointer"
          onClick={() => handleProductClick(product.id)}
        >
          <CardContent className="p-0">
            {/* Product Image */}
            <div className="relative bg-gradient-to-br from-yellow-100 to-orange-100 h-32 flex items-center justify-center">
              <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{product.image}</span>

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
              <div className="absolute bottom-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                -{product.discount}%
              </div>
            </div>

            {/* Product Info */}
            <div className="p-3">
              <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2 leading-tight">{product.name}</h3>

              {/* Rating */}
              <div className="flex items-center mb-2">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="text-xs font-medium text-gray-700 ml-1">{product.rating}</span>
                <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
              </div>

              {/* Price */}
              <div className="mb-3">
                <span className="text-base font-bold text-gray-800">₩{product.price.toLocaleString()}</span>
                <span className="text-xs text-gray-500 line-through ml-1">
                  ₩{product.originalPrice.toLocaleString()}
                </span>
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
  )
}
