import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star, ShoppingCart } from "lucide-react"

interface ProductGridProps {
  viewMode: "grid" | "list"
}

const products = [
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
    description: "100% 순수 아카시아 꿀로 달콤하고 부드러운 맛이 일품입니다.",
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
    description: "천연 로즈힙 추출물로 만든 고농축 비타민C 세럼입니다.",
  },
  // ... more products
]

export default function ProductGrid({ viewMode }: ProductGridProps) {
  if (viewMode === "list") {
    return (
      <div className="space-y-4">
        {products.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="flex">
                {/* Product Image */}
                <div className="w-48 h-48 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-6xl">{product.image}</span>
                </div>

                {/* Product Info */}
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`px-2 py-1 text-xs font-bold rounded-full ${
                            product.badge === "BEST"
                              ? "bg-yellow-400 text-yellow-900"
                              : product.badge === "NEW"
                                ? "bg-green-400 text-green-900"
                                : "bg-blue-400 text-blue-900"
                          }`}
                        >
                          {product.badge}
                        </span>
                        {product.discount > 0 && (
                          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                            -{product.discount}%
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center mb-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-700 ml-1">{product.rating}</span>
                        <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-gray-800">₩{product.price.toLocaleString()}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-lg text-gray-500 line-through ml-2">
                            ₩{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold px-6">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      장바구니
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden rounded-2xl"
        >
          <CardContent className="p-0">
            {/* Product Image */}
            <div className="relative bg-gradient-to-br from-yellow-100 to-orange-100 h-48 flex items-center justify-center">
              <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{product.image}</span>

              {/* Badge */}
              <div className="absolute top-3 left-3">
                <span
                  className={`px-2 py-1 text-xs font-bold rounded-full ${
                    product.badge === "BEST"
                      ? "bg-yellow-400 text-yellow-900"
                      : product.badge === "NEW"
                        ? "bg-green-400 text-green-900"
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
                className="absolute top-3 right-3 bg-white/80 hover:bg-white rounded-full w-8 h-8"
              >
                <Heart className="w-4 h-4 text-gray-600" />
              </Button>

              {/* Discount Badge */}
              {product.discount > 0 && (
                <div className="absolute bottom-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  -{product.discount}%
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>

              {/* Rating */}
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-700 ml-1">{product.rating}</span>
                </div>
                <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-lg font-bold text-gray-800">₩{product.price.toLocaleString()}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-500 line-through ml-2">
                      ₩{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold rounded-xl">
                <ShoppingCart className="w-4 h-4 mr-2" />
                장바구니 담기
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
