import { Button } from "@/components/ui/button"

const categories = [
  { name: "꿀 & 잼", icon: "🍯", color: "bg-yellow-100" },
  { name: "천연 화장품", icon: "🧴", color: "bg-pink-100" },
  { name: "유기농 식품", icon: "🌿", color: "bg-green-100" },
  { name: "수제 간식", icon: "🍪", color: "bg-orange-100" },
  { name: "건강 보조제", icon: "💊", color: "bg-blue-100" },
  { name: "홈 & 리빙", icon: "🏠", color: "bg-purple-100" },
  { name: "반려동물", icon: "🐕", color: "bg-amber-100" },
  { name: "전체보기", icon: "✨", color: "bg-gray-100" },
]

export default function MobileCategories() {
  return (
    <section className="py-6 bg-white">
      <div className="px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">카테고리 🛍️</h2>
          <p className="text-gray-600 text-base">원하는 카테고리를 선택해보세요</p>
        </div>

        {/* Mobile Categories Grid */}
        <div className="grid grid-cols-4 gap-3">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`${category.color} h-20 rounded-2xl border-2 border-transparent hover:border-yellow-300 transition-all duration-200 flex flex-col items-center justify-center space-y-1`}
            >
              <span className="text-2xl">{category.icon}</span>
              <span className="font-medium text-gray-700 text-xs text-center leading-tight">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
