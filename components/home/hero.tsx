import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-yellow-800 mr-2" />
              <span className="text-yellow-800 font-medium text-sm">신규 회원 20% 할인</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-yellow-900 mb-6 leading-tight">
              달콤한 쇼핑의
              <br />
              <span className="text-white">새로운 경험</span>
            </h1>

            <p className="text-yellow-800 text-lg md:text-xl mb-8 leading-relaxed">
              Swibee와 함께 특별한 상품들을 만나보세요.
              <br />
              꿀처럼 달콤한 쇼핑 경험을 선사합니다. 🍯
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-white text-yellow-600 hover:bg-yellow-50 rounded-full px-8 py-3 font-semibold"
              >
                쇼핑 시작하기
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 rounded-full px-8 py-3 font-semibold bg-transparent"
              >
                베스트 상품 보기
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  {/* Product Cards */}
                  <div className="bg-white rounded-2xl p-4 shadow-lg">
                    <div className="w-full h-24 bg-yellow-100 rounded-xl mb-3 flex items-center justify-center">
                      <span className="text-3xl">🍯</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm">프리미엄 꿀</h3>
                    <p className="text-yellow-600 font-bold text-sm">₩25,000</p>
                  </div>

                  <div className="bg-white rounded-2xl p-4 shadow-lg">
                    <div className="w-full h-24 bg-orange-100 rounded-xl mb-3 flex items-center justify-center">
                      <span className="text-3xl">🧴</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm">천연 화장품</h3>
                    <p className="text-yellow-600 font-bold text-sm">₩35,000</p>
                  </div>

                  <div className="bg-white rounded-2xl p-4 shadow-lg">
                    <div className="w-full h-24 bg-green-100 rounded-xl mb-3 flex items-center justify-center">
                      <span className="text-3xl">🌿</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm">유기농 차</h3>
                    <p className="text-yellow-600 font-bold text-sm">₩18,000</p>
                  </div>

                  <div className="bg-white rounded-2xl p-4 shadow-lg">
                    <div className="w-full h-24 bg-pink-100 rounded-xl mb-3 flex items-center justify-center">
                      <span className="text-3xl">🍪</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm">수제 쿠키</h3>
                    <p className="text-yellow-600 font-bold text-sm">₩12,000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-orange-300/30 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-300/20 rounded-full blur-xl"></div>
    </section>
  )
}
