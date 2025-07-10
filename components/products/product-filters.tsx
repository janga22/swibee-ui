import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export default function ProductFilters() {
  return (
    <div className="space-y-6">
      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">가격대</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider defaultValue={[10000, 50000]} max={100000} min={0} step={1000} className="w-full" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>₩10,000</span>
              <span>₩50,000</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">카테고리</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { id: "honey", label: "꿀 & 잼", count: 45 },
              { id: "cosmetics", label: "천연 화장품", count: 32 },
              { id: "organic", label: "유기농 식품", count: 28 },
              { id: "snacks", label: "수제 간식", count: 19 },
              { id: "supplements", label: "건강 보조제", count: 15 },
            ].map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox id={category.id} />
                <label
                  htmlFor={category.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1"
                >
                  {category.label}
                </label>
                <span className="text-xs text-gray-500">({category.count})</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Brand */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">브랜드</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {["Swibee Original", "Natural Honey Co.", "Organic Garden", "Pure Beauty", "Healthy Life"].map((brand) => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox id={brand} />
                <label
                  htmlFor={brand}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Rating */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">평점</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <Checkbox id={`rating-${rating}`} />
                <label
                  htmlFor={`rating-${rating}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                >
                  <span className="text-yellow-400 mr-1">
                    {"★".repeat(rating)}
                    {"☆".repeat(5 - rating)}
                  </span>
                  {rating}점 이상
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-yellow-900">필터 적용</Button>
    </div>
  )
}
