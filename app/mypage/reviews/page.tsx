"use client"

import { useState } from "react"
import MobileBottomNav from "@/components/layout/mobile-bottom-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Star, Camera, Edit, Trash2 } from "lucide-react"

const reviewTabs = [
  { id: "written", label: "작성한 리뷰", count: 5 },
  { id: "pending", label: "작성 가능", count: 3 },
]

const writtenReviews = [
  {
    id: 1,
    productName: "프리미엄 아카시아 꿀 500g",
    productImage: "🍯",
    rating: 5,
    content: "정말 달콤하고 맛있어요! 품질이 너무 좋아서 재주문했습니다. 포장도 깔끔하고 배송도 빨라서 만족스러워요.",
    date: "2024-01-15",
    helpful: 12,
    images: ["📷", "📷"],
  },
  {
    id: 2,
    productName: "천연 로즈힙 비타민C 세럼",
    productImage: "🧴",
    rating: 4,
    content: "피부가 좋아진 것 같아요. 향도 좋고 발림성도 부드러워요. 다만 가격이 조금 아쉬워요.",
    date: "2024-01-10",
    helpful: 8,
    images: [],
  },
]

const pendingReviews = [
  {
    id: 1,
    productName: "유기농 허브티 세트",
    productImage: "🌿",
    orderDate: "2024-01-20",
    daysLeft: 25,
  },
  {
    id: 2,
    productName: "수제 마카롱 12개입",
    productImage: "🍪",
    orderDate: "2024-01-18",
    daysLeft: 27,
  },
]

export default function ReviewsPage() {
  const [selectedTab, setSelectedTab] = useState("written")

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className={`w-4 h-4 ${star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 max-w-sm mx-auto">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="flex items-center justify-between p-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold text-gray-800">리뷰 관리</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <main className="pb-20">
        {/* Tabs */}
        <div className="bg-white px-4 py-3 border-b border-gray-200">
          <div className="flex space-x-4">
            {reviewTabs.map((tab) => (
              <Button
                key={tab.id}
                variant="ghost"
                onClick={() => setSelectedTab(tab.id)}
                className={`flex-1 py-3 rounded-none border-b-2 ${
                  selectedTab === tab.id ? "border-yellow-400 text-yellow-600" : "border-transparent text-gray-500"
                }`}
              >
                {tab.label}
                {tab.count > 0 && <span className="ml-1 text-sm">({tab.count})</span>}
              </Button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="px-4 py-4">
          {selectedTab === "written" ? (
            <div className="space-y-4">
              {writtenReviews.length === 0 ? (
                <div className="text-center py-16">
                  <Star className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">작성한 리뷰가 없어요</h3>
                  <p className="text-gray-500">구매한 상품에 리뷰를 남겨보세요!</p>
                </div>
              ) : (
                writtenReviews.map((review) => (
                  <Card key={review.id} className="overflow-hidden shadow-sm">
                    <CardContent className="p-4">
                      {/* Product Info */}
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg flex items-center justify-center">
                          <span className="text-lg">{review.productImage}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-800 line-clamp-1">{review.productName}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            {renderStars(review.rating)}
                            <span className="text-xs text-gray-500">{review.date}</span>
                          </div>
                        </div>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="icon" className="w-8 h-8">
                            <Edit className="w-4 h-4 text-gray-500" />
                          </Button>
                          <Button variant="ghost" size="icon" className="w-8 h-8">
                            <Trash2 className="w-4 h-4 text-gray-500" />
                          </Button>
                        </div>
                      </div>

                      {/* Review Content */}
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">{review.content}</p>

                      {/* Review Images */}
                      {review.images.length > 0 && (
                        <div className="flex space-x-2 mb-3">
                          {review.images.map((image, index) => (
                            <div
                              key={index}
                              className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center"
                            >
                              <span className="text-2xl">{image}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Review Stats */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <span className="text-xs text-gray-500">도움이 됐어요 {review.helpful}명</span>
                        <Button variant="ghost" size="sm" className="text-xs text-gray-500">
                          신고하기
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {pendingReviews.length === 0 ? (
                <div className="text-center py-16">
                  <Star className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">작성 가능한 리뷰가 없어요</h3>
                  <p className="text-gray-500">상품을 구매하고 리뷰를 작성해보세요!</p>
                </div>
              ) : (
                pendingReviews.map((review) => (
                  <Card key={review.id} className="overflow-hidden shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg flex items-center justify-center">
                          <span className="text-lg">{review.productImage}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-800 line-clamp-1">{review.productName}</p>
                          <p className="text-xs text-gray-500">구매일: {review.orderDate}</p>
                          <p className="text-xs text-orange-600">리뷰 작성 가능 기간 {review.daysLeft}일 남음</p>
                        </div>
                        <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 rounded-xl px-4">
                          <Camera className="w-4 h-4 mr-1" />
                          리뷰 작성
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}

              {/* Review Incentive */}
              <Card className="bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-200">
                <CardContent className="p-4">
                  <div className="text-center">
                    <h4 className="font-semibold text-yellow-800 mb-2">🎁 리뷰 작성 혜택</h4>
                    <p className="text-sm text-yellow-700 mb-3">
                      포토 리뷰 작성 시 적립금 500P 지급!
                      <br />
                      일반 리뷰 작성 시 적립금 100P 지급!
                    </p>
                    <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 rounded-full">
                      자세히 보기
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>

      <MobileBottomNav />
    </div>
  )
}
