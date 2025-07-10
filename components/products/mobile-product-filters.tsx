import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { X } from "lucide-react"

export default function MobileProductFilters() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-800">필터</h3>
          <Button variant="ghost" size="sm" className="text-gray-500">
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-700 mb-3">가격대</h4>
          <div className="grid grid-cols-2 gap-2">
            {["1만원 이하", "1-3만원", "3-5만원", "5만원 이상"].map((price) => (
              <Button key={price} variant="outline" size="sm" className="rounded-full text-sm bg-transparent">
                {price}
              </Button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-700 mb-3">카테고리</h4>
          <div className="space-y-2">
            {["꿀 & 잼", "천연 화장품", "유기농 식품", "수제 간식"].map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox id={category} />
                <label htmlFor={category} className="text-sm text-gray-700">
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Apply Button */}
        <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-yellow-900 rounded-full py-3">
          필터 적용
        </Button>
      </div>
    </div>
  )
}
