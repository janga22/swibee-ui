"use client"

import { useState } from "react"
import MobileBottomNav from "@/components/layout/mobile-bottom-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Package, Truck, CheckCircle, Clock } from "lucide-react"

const orderStatuses = [
  { id: "all", label: "전체", count: 12 },
  { id: "preparing", label: "준비중", count: 2 },
  { id: "shipping", label: "배송중", count: 1 },
  { id: "delivered", label: "배송완료", count: 8 },
  { id: "cancelled", label: "취소/반품", count: 1 },
]

const orders = [
  {
    id: "ORD-2024-001",
    date: "2024-01-15",
    status: "delivered",
    statusText: "배송완료",
    items: [
      {
        name: "프리미엄 아카시아 꿀 500g",
        price: 28000,
        quantity: 2,
        image: "🍯",
      },
    ],
    total: 56000,
    deliveryDate: "2024-01-17",
  },
  {
    id: "ORD-2024-002",
    date: "2024-01-20",
    status: "shipping",
    statusText: "배송중",
    items: [
      {
        name: "천연 로즈힙 비타민C 세럼",
        price: 45000,
        quantity: 1,
        image: "🧴",
      },
    ],
    total: 45000,
    trackingNumber: "1234567890",
  },
  {
    id: "ORD-2024-003",
    date: "2024-01-22",
    status: "preparing",
    statusText: "준비중",
    items: [
      {
        name: "유기농 허브티 세트",
        price: 22000,
        quantity: 1,
        image: "🌿",
      },
      {
        name: "수제 마카롱 12개입",
        price: 18000,
        quantity: 1,
        image: "🍪",
      },
    ],
    total: 40000,
  },
]

export default function OrdersPage() {
  const [selectedStatus, setSelectedStatus] = useState("all")

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "preparing":
        return <Clock className="w-4 h-4 text-orange-500" />
      case "shipping":
        return <Truck className="w-4 h-4 text-blue-500" />
      case "delivered":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      default:
        return <Package className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "preparing":
        return "text-orange-600 bg-orange-50"
      case "shipping":
        return "text-blue-600 bg-blue-50"
      case "delivered":
        return "text-green-600 bg-green-50"
      case "cancelled":
        return "text-red-600 bg-red-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  const filteredOrders = selectedStatus === "all" ? orders : orders.filter((order) => order.status === selectedStatus)

  return (
    <div className="min-h-screen bg-gray-50 max-w-sm mx-auto">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="flex items-center justify-between p-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold text-gray-800">주문/배송 조회</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <main className="pb-20">
        {/* Status Tabs */}
        <div className="bg-white px-4 py-3 border-b border-gray-200">
          <div className="flex overflow-x-auto space-x-2 scrollbar-hide">
            {orderStatuses.map((status) => (
              <Button
                key={status.id}
                variant={selectedStatus === status.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedStatus(status.id)}
                className={`flex-shrink-0 rounded-full px-4 ${
                  selectedStatus === status.id
                    ? "bg-yellow-400 text-yellow-900 hover:bg-yellow-500"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {status.label}
                {status.count > 0 && <span className="ml-1 text-xs">({status.count})</span>}
              </Button>
            ))}
          </div>
        </div>

        {/* Orders List */}
        <div className="px-4 py-4 space-y-4">
          {filteredOrders.length === 0 ? (
            <div className="text-center py-16">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">주문 내역이 없어요</h3>
              <p className="text-gray-500 mb-6">달콤한 상품을 주문해보세요!</p>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 rounded-full px-8">
                쇼핑하러 가기
              </Button>
            </div>
          ) : (
            filteredOrders.map((order) => (
              <Card key={order.id} className="overflow-hidden shadow-sm">
                <CardContent className="p-4">
                  {/* Order Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-sm font-medium text-gray-800">{order.id}</p>
                      <p className="text-xs text-gray-500">{order.date}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(order.status)}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.statusText}
                      </span>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="space-y-3 mb-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg flex items-center justify-center">
                          <span className="text-lg">{item.image}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-800 line-clamp-1">{item.name}</p>
                          <p className="text-xs text-gray-500">
                            ₩{item.price.toLocaleString()} × {item.quantity}개
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Total */}
                  <div className="flex items-center justify-between mb-4 pt-3 border-t border-gray-100">
                    <span className="text-sm text-gray-600">총 결제금액</span>
                    <span className="text-base font-bold text-gray-800">₩{order.total.toLocaleString()}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    {order.status === "delivered" && (
                      <>
                        <Button variant="outline" size="sm" className="flex-1 rounded-xl bg-transparent">
                          리뷰 작성
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 rounded-xl bg-transparent">
                          재주문
                        </Button>
                      </>
                    )}
                    {order.status === "shipping" && (
                      <Button variant="outline" size="sm" className="flex-1 rounded-xl bg-transparent">
                        배송 조회
                      </Button>
                    )}
                    {order.status === "preparing" && (
                      <Button variant="outline" size="sm" className="flex-1 rounded-xl bg-transparent text-red-600">
                        주문 취소
                      </Button>
                    )}
                    <Button size="sm" className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 rounded-xl">
                      상세 보기
                    </Button>
                  </div>

                  {/* Additional Info */}
                  {order.deliveryDate && <p className="text-xs text-green-600 mt-2">✓ {order.deliveryDate} 배송완료</p>}
                  {order.trackingNumber && (
                    <p className="text-xs text-blue-600 mt-2">📦 운송장번호: {order.trackingNumber}</p>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </main>

      <MobileBottomNav />
    </div>
  )
}
