import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export default function MobileHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 px-4 py-8">
      <div className="text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-4">
          <Star className="w-4 h-4 text-yellow-800 mr-2" />
          <span className="text-yellow-800 font-medium text-sm">신규 회원 20% 할인</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl font-bold text-yellow-900 mb-4 leading-tight">
          달콤한 쇼핑의
          <br />
          <span className="text-white">새로운 경험</span>
        </h1>

        <p className="text-yellow-800 text-base mb-6 leading-relaxed px-4">
          Swibee와 함께 특별한 상품들을 만나보세요.
          <br />
          꿀처럼 달콤한 쇼핑 경험을 선사합니다. 🍯
        </p>

        {/* CTA Buttons */}
        <div className="space-y-3 mb-8">
          <Button
            size="lg"
            className="w-full bg-white text-yellow-600 hover:bg-yellow-50 rounded-full py-4 font-semibold text-base"
          >
            쇼핑 시작하기
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full border-white text-white hover:bg-white/10 rounded-full py-4 font-semibold bg-transparent text-base"
          >
            베스트 상품 보기
          </Button>
        </div>

        {/* Product Preview Cards */}
        <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <div className="w-full h-16 bg-yellow-100 rounded-xl mb-2 flex items-center justify-center">
              <span className="text-2xl">🍯</span>
            </div>
            <h3 className="font-semibold text-white text-sm">프리미엄 꿀</h3>
            <p className="text-yellow-100 font-bold text-sm">₩25,000</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <div className="w-full h-16 bg-pink-100 rounded-xl mb-2 flex items-center justify-center">
              <span className="text-2xl">🧴</span>
            </div>
            <h3 className="font-semibold text-white text-sm">천연 화장품</h3>
            <p className="text-yellow-100 font-bold text-sm">₩35,000</p>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 right-4 w-24 h-24 bg-orange-300/20 rounded-full blur-xl"></div>
    </section>
  )
}
