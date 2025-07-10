"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star, Plus, Grid, List } from "lucide-react"

interface SearchResultsProps {
  query: string
  results: any[]
  isLoading: boolean
}

// 샘플 검색 결과 데이터
const sampleResults = [
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
    description: "100% 순수 아카시아 꿀로 달콤하고 부드러운 맛",
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
    description: "천연 로즈힙 추출물로 만든 고농축 비타민C 세럼",
  },
  {
    id: 3,
    name: "유기농 허브티 세트 (5종)",
    price: 22000,
    originalPrice: 28000,
    rating: 4.7,
    reviews: 156,
    image: "🌿",
    badge: "HOT",
    discount: 21,
    description: "엄선된 유기농 허브로 만든 프리미엄 차 세트",
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
    description: "매일 아침 만드는 신선한 수제 마카롱",
  },
  {
    id: 5,
    name: "프로폴리스 건강 보조제",
    price: 35000,
    originalPrice: 42000,
    rating: 4.5,
    reviews: 78,
    image: "💊",
    badge: "NEW",
    discount: 17,
    description: "면역력 강화에 도움을 주는 프로폴리스",
  },
  {
    id: 6,
    name: "천연 아로마 캔들 세트",
    price: 25000,
    originalPrice: 32000,
    rating: 4.4,
    reviews: 92,
    image: "🕯️",
    badge: "HOT",
    discount: 22,
    description: "집안을 향기롭게 만드는 천연 아로마 캔들",
  },
]

export default function SearchResults({ query, results, isLoading }: SearchResultsProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("popular")

  // 실제로는 props의 results를 사용하지만, 데모를 위해 샘플 데이터 사용
  const displayResults = results.length > 0 ? results : sampleResults

  if (isLoading) {
    return (
      <div className="p-4">
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 rounded-2xl h-32"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (!isLoading && displayResults.length === 0) {
    return (
      <div className="p-4">
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">'{query}' 검색 결과가 없어요</h3>
          <p className="text-gray-500 mb-6">
            다른 키워드로 검색해보시거나
            <br />
            카테고리에서 상품을 찾아보세요
          </p>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 rounded-full px-8">카테고리 보기</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4">
      {/* Results Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-600">총 {displayResults.length}개 상품</span>
        <div className="flex items-center space-x-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-full text-sm bg-white"
          >
            <option value="popular">인기순</option>
            <option value="latest">최신순</option>
            <option value="price-low">가격 낮은순</option>
            <option value="price-high">가격 높은순</option>
            <option value="rating">평점순</option>
          </select>

          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-none w-8 h-8 p-0"
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-none w-8 h-8 p-0"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Results Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-2 gap-3">
          {displayResults.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden rounded-2xl"
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
                    <span className="text-xs text-gray-500 line-through ml-1">
                      ₩{product.originalPrice.toLocaleString()}
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold rounded-xl py-2 text-sm">
                    <Plus className="w-4 h-4 mr-1" />
                    담기
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {displayResults.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex space-x-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 relative">
                    <span className="text-2xl">{product.image}</span>
                    {/* Badge */}
                    <div className="absolute -top-1 -left-1">
                      <span
                        className={`px-1 py-0.5 text-xs font-bold rounded-full ${
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
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight flex-1 pr-2">{product.name}</h3>
                      <Button variant="ghost" size="icon" className="w-6 h-6 rounded-full flex-shrink-0">
                        <Heart className="w-3 h-3 text-gray-600" />
                      </Button>
                    </div>

                    <p className="text-xs text-gray-600 mb-2 line-clamp-1">{product.description}</p>

                    <div className="flex items-center mb-2">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs font-medium text-gray-700 ml-1">{product.rating}</span>
                      <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-base font-bold text-gray-800">₩{product.price.toLocaleString()}</span>
                        <span className="text-xs text-gray-500 line-through ml-1">
                          ₩{product.originalPrice.toLocaleString()}
                        </span>
                        <span className="text-xs text-red-500 font-bold ml-1">{product.discount}%</span>
                      </div>
                      <Button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold rounded-xl px-4 py-1 text-sm">
                        <Plus className="w-3 h-3 mr-1" />
                        담기
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Load More Button */}
      <div className="text-center mt-6">
        <Button
          variant="outline"
          className="border-yellow-400 text-yellow-600 hover:bg-yellow-50 rounded-full px-8 bg-transparent"
        >
          더 많은 상품 보기
        </Button>
      </div>
    </div>
  )
}
