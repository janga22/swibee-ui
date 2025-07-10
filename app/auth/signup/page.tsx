"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, Mail, Lock, User, Phone, Check } from "lucide-react"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic
    console.log("Signup attempt:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-200 to-orange-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">🐝</span>
            </div>
            <h1 className="text-3xl font-bold text-yellow-600">Swibee</h1>
          </Link>
          <p className="text-gray-600 mt-2">달콤한 쇼핑의 시작</p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-gray-800">회원가입</CardTitle>
            <p className="text-gray-600">Swibee 가족이 되어주세요! 🍯</p>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">이름</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="이름을 입력하세요"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-10 rounded-xl border-gray-300 focus:border-yellow-500"
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">이메일</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="email"
                    placeholder="이메일을 입력하세요"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10 rounded-xl border-gray-300 focus:border-yellow-500"
                    required
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">휴대폰 번호</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="tel"
                    placeholder="휴대폰 번호를 입력하세요"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="pl-10 rounded-xl border-gray-300 focus:border-yellow-500"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">비밀번호</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="비밀번호를 입력하세요"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="pl-10 pr-10 rounded-xl border-gray-300 focus:border-yellow-500"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
                <p className="text-xs text-gray-500">8자 이상, 영문/숫자/특수문자 포함</p>
              </div>

              {/* Confirm Password Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">비밀번호 확인</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="비밀번호를 다시 입력하세요"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="pl-10 pr-10 rounded-xl border-gray-300 focus:border-yellow-500"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                    className="rounded border-gray-300"
                    required
                  />
                  <label htmlFor="agreeTerms" className="text-sm text-gray-700 flex-1">
                    <span className="text-red-500">*</span> 이용약관에 동의합니다
                  </label>
                  <Button variant="ghost" size="sm" className="text-yellow-600 p-0 h-auto">
                    보기
                  </Button>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="agreePrivacy"
                    checked={formData.agreePrivacy}
                    onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                    className="rounded border-gray-300"
                    required
                  />
                  <label htmlFor="agreePrivacy" className="text-sm text-gray-700 flex-1">
                    <span className="text-red-500">*</span> 개인정보 처리방침에 동의합니다
                  </label>
                  <Button variant="ghost" size="sm" className="text-yellow-600 p-0 h-auto">
                    보기
                  </Button>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="agreeMarketing"
                    checked={formData.agreeMarketing}
                    onChange={(e) => setFormData({ ...formData, agreeMarketing: e.target.checked })}
                    className="rounded border-gray-300"
                  />
                  <label htmlFor="agreeMarketing" className="text-sm text-gray-700 flex-1">
                    마케팅 정보 수신에 동의합니다 (선택)
                  </label>
                </div>
              </div>

              {/* Signup Button */}
              <Button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold py-3 rounded-xl"
                disabled={!formData.agreeTerms || !formData.agreePrivacy}
              >
                회원가입 완료
              </Button>
            </form>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-gray-600">
                이미 계정이 있으신가요?{" "}
                <Link href="/auth/login" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                  로그인
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Welcome Benefits */}
        <div className="mt-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-200">
            <h3 className="font-semibold text-gray-800 mb-4">🎉 신규 회원 혜택</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-700">즉시 사용 가능한 20% 할인 쿠폰</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-700">첫 구매 시 무료배송</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-700">생일 특별 쿠폰 증정</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
