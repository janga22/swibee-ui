"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import MobileBottomNav from "@/components/layout/mobile-bottom-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Heart, Share, Star, Plus, Minus, ShoppingCart, MessageCircle } from "lucide-react"

// 샘플 상품 데이터
const sampleProducts = {
  1: {
    id: 1,
    name: "프리미엄 아카시아 꿀 500g",
    price: 28000,
    originalPrice: 35000,
    rating: 4.8,
    reviews: 124,
    image: "🍯",
    badge: "BEST",
    discount: 20,
    description:
      "100% 순수 아카시아 꿀로 달콤하고 부드러운 맛이 일품입니다. 천연 그대로의 영양소가 가득한 프리미엄 꿀입니다.",
    features: ["100% 순수 아카시아 꿀", "무첨가 천연 제품", "국내산 원료 사용", "HACCP 인증 제품"],
    detailImages: ["🍯", "🌻", "🐝"],
    inStock: true,
    deliveryInfo: "오늘 주문 시 내일 도착",
  },
  2: {
    id: 2,
    name: "천연 로즈힙 비타민C 세럼",
    price: 45000,
    originalPrice: 60000,
    rating: 4.9,
    reviews: 89,
    image: "🧴",
    badge: "NEW",
    discount: 25,
    description: "천연 로즈힙 추출물로 만든 고농축 비타민C 세럼입니다. 피부 톤 개선과 탄력 증진에 도움을 줍니다.",
    features: ["천연 로즈힙 추출물", "고농축 비타민C", "파라벤 프리", "동물실험 안함"],
    detailImages: ["🧴", "🌹", "✨"],
    inStock: true,
    deliveryInfo: "2-3일 내 배송",
  },
}

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const productId = Number.parseInt(params.id as string)

  const [quantity, setQuantity] = useState(1)
  const [selectedTab, setSelectedTab] = useState("description")
  const [isWishlisted, setIsWishlisted] = useState(false)

  // 상품 데이터 가져오기 (실제로는 API 호출)
  const product = sampleProducts[productId as keyof typeof sampleProducts] || sampleProducts[1]

  const handleAddToCart = () => {
    // 장바구니 추가 로직
    console.log(`Added ${quantity} of product ${productId} to cart`)
  }

  const handleBuyNow = () => {
    // 바로 구매 로직
    console.log(`Buy now: ${quantity} of product ${productId}`)
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    // 찜하기 로직
  }

  return (
    <div className="min-h-screen bg-white max-w-sm mx-auto">
      {/* Custom Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="flex items-center justify-between p-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()} className="rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold text-gray-800">상품 상세</h1>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Share className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleWishlist} className="rounded-full">
              <Heart className={`w-5 h-5 ${isWishlisted ? "text-red-500 fill-current" : "text-gray-500"}`} />
            </Button>
          </div>
        </div>
      </div>

      <main className="pb-32">
        {/* Product Images */}
        <div className="relative bg-gradient-to-br from-yellow-100 to-orange-100 h-80 flex items-center justify-center">
          <span className="text-8xl">{product.image}</span>

          {/* Badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`px-3 py-1 text-sm font-bold rounded-full ${
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

          {/* Discount Badge */}
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{product.discount}%
          </div>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {product.detailImages.map((_, index) => (
              <div key={index} className={`w-2 h-2 rounded-full ${index === 0 ? "bg-white" : "bg-white/50"}`} />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h1>

          {/* Rating & Reviews */}
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-700 ml-1">{product.rating}</span>
            </div>
            <span className="text-sm text-gray-500 ml-2">({product.reviews}개 리뷰)</span>
            <Button variant="ghost" size="sm" className="ml-auto text-sm text-yellow-600">
              리뷰 보기
            </Button>
          </div>

          {/* Price */}
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-gray-800">₩{product.price.toLocaleString()}</span>
            <span className="text-lg text-gray-500 line-through ml-2">₩{product.originalPrice.toLocaleString()}</span>
            <span className="text-sm text-red-500 font-bold ml-2">{product.discount}% 할인</span>
          </div>

          {/* Delivery Info */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mb-6">
            <div className="flex items-center">
              <span className="text-yellow-600 font-medium text-sm">🚚 {product.deliveryInfo}</span>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">수량</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-none"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="px-4 py-2 font-medium min-w-[60px] text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-none"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <span className="text-lg font-bold text-gray-800">₩{(product.price * quantity).toLocaleString()}</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-4">
            <div className="flex">
              <Button
                variant="ghost"
                onClick={() => setSelectedTab("description")}
                className={`flex-1 py-3 rounded-none border-b-2 ${
                  selectedTab === "description"
                    ? "border-yellow-400 text-yellow-600"
                    : "border-transparent text-gray-500"
                }`}
              >
                상품설명
              </Button>
              <Button
                variant="ghost"
                onClick={() => setSelectedTab("reviews")}
                className={`flex-1 py-3 rounded-none border-b-2 ${
                  selectedTab === "reviews" ? "border-yellow-400 text-yellow-600" : "border-transparent text-gray-500"
                }`}
              >
                리뷰 ({product.reviews})
              </Button>
              <Button
                variant="ghost"
                onClick={() => setSelectedTab("qna")}
                className={`flex-1 py-3 rounded-none border-b-2 ${
                  selectedTab === "qna" ? "border-yellow-400 text-yellow-600" : "border-transparent text-gray-500"
                }`}
              >
                Q&A
              </Button>
            </div>
          </div>

          {/* Tab Content */}
          {selectedTab === "description" && (
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>

              {/* Product Features */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">제품 특징</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1 h-1 bg-yellow-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detail Images */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">상세 이미지</h4>
                <div className="space-y-3">
                  {product.detailImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-full h-48 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center"
                    >
                      <span className="text-6xl">{image}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedTab === "reviews" && (
            <div className="space-y-4">
              {/* Review Summary */}
              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800 mb-1">{product.rating}</div>
                    <div className="flex justify-center mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">{product.reviews}개의 리뷰</p>
                  </div>
                </CardContent>
              </Card>

              {/* Sample Reviews */}
              <div className="space-y-3">
                {[1, 2, 3].map((review) => (
                  <Card key={review}>
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-3 h-3 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-2">김**님</span>
                        <span className="text-xs text-gray-400 ml-auto">2024.01.15</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        정말 달콤하고 맛있어요! 품질이 좋아서 만족합니다. 포장도 깔끔하고 배송도 빨라서 재주문
                        예정이에요.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full py-3 rounded-xl border-yellow-400 text-yellow-600 bg-transparent"
              >
                리뷰 더보기
              </Button>
            </div>
          )}

          {selectedTab === "qna" && (
            <div className="space-y-4">
              <div className="text-center py-8">
                <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">아직 문의가 없어요</h3>
                <p className="text-gray-500 mb-4">궁금한 점이 있으시면 문의해주세요!</p>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 rounded-full px-6">
                  문의하기
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Fixed Bottom Actions */}
      <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-200 p-4 z-40">
        <div className="flex space-x-3">
          <Button
            onClick={handleAddToCart}
            variant="outline"
            className="flex-1 py-4 rounded-xl border-yellow-400 text-yellow-600 bg-transparent"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            장바구니
          </Button>
          <Button
            onClick={handleBuyNow}
            className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold py-4 rounded-xl"
          >
            바로 구매
          </Button>
        </div>
      </div>

      <MobileBottomNav />
    </div>
  )
}
