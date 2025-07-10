import { Button } from "@/components/ui/button"

const categories = [
  { name: "꿀 & 잼", icon: "🍯", color: "bg-yellow-100 hover:bg-yellow-200" },
  { name: "천연 화장품", icon: "🧴", color: "bg-pink-100 hover:bg-pink-200" },
  { name: "유기농 식품", icon: "🌿", color: "bg-green-100 hover:bg-green-200" },
  { name: "수제 간식", icon: "🍪", color: "bg-orange-100 hover:bg-orange-200" },
  { name: "건강 보조제", icon: "💊", color: "bg-blue-100 hover:bg-blue-200" },
  { name: "홈 & 리빙", icon: "🏠", color: "bg-purple-100 hover:bg-purple-200" },
  { name: "반려동물", icon: "🐕", color: "bg-amber-100 hover:bg-amber-200" },
  { name: "기타", icon: "✨", color: "bg-gray-100 hover:bg-gray-200" },
]

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">카테고리별 쇼핑 🛍️</h2>
          <p className="text-gray-600 text-lg">원하는 카테고리를 선택해서 쇼핑을 시작해보세요</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`${category.color} h-auto p-6 rounded-2xl border-2 border-transparent hover:border-yellow-300 transition-all duration-200 flex flex-col items-center space-y-3`}
            >
              <span className="text-4xl md:text-5xl">{category.icon}</span>
              <span className="font-semibold text-gray-700 text-sm md:text-base">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
