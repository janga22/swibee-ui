import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-yellow-400 text-yellow-900 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">🍯 달콤한 소식을 받아보세요!</h3>
          <p className="mb-6 text-yellow-800">특별 할인과 신상품 소식을 가장 먼저 알려드려요</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="이메일 주소를 입력하세요" className="flex-1 bg-white border-0 rounded-full" />
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-full px-6">구독하기</Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-lg">🐝</span>
              </div>
              <h3 className="text-xl font-bold text-yellow-400">Swibee</h3>
            </div>
            <p className="text-gray-400 mb-4">
              달콤한 쇼핑의 새로운 경험을 선사하는 Swibee입니다. 고품질의 천연 제품들을 합리적인 가격에 만나보세요.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-yellow-400">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-yellow-400">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-yellow-400">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow-400">빠른 링크</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  홈
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  카테고리
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  베스트 상품
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  이벤트
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  리뷰
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow-400">고객 서비스</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  주문/배송 조회
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  반품/교환
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  1:1 문의
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  이용약관
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow-400">연락처</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400">1588-1234</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400">help@swibee.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400">서울시 강남구 테헤란로 123</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-400">
                <strong className="text-yellow-400">고객센터 운영시간</strong>
                <br />
                평일 09:00 - 18:00
                <br />
                주말/공휴일 휴무
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Swibee. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                이용약관
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                사업자정보
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
