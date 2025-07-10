import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star, ShoppingCart } from "lucide-react"

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

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-gradient-to-b from-yellow-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">이번 주 베스트 상품 ⭐</h2>
          <p className="text-gray-600 text-lg">고객들이 가장 사랑하는 달콤한 상품들을 만나보세요</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden rounded-2xl"
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative bg-gradient-to-br from-yellow-100 to-orange-100 h-48 flex items-center justify-center">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {product.image}
                  </span>

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
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

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-yellow-400 text-yellow-600 hover:bg-yellow-50 rounded-full px-8 bg-transparent"
          >
            더 많은 상품 보기
          </Button>
        </div>
      </div>
    </section>
  )
}
