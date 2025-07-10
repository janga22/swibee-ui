"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from "lucide-react"

export default function MobileLoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-200 to-orange-200 max-w-sm mx-auto">
      {/* Mobile Header */}
      <div className="flex items-center justify-between p-4">
        <Button variant="ghost" size="icon" className="rounded-full">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-semibold text-gray-800">로그인</h1>
        <div className="w-10"></div>
      </div>

      <div className="px-4 py-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🐝</span>
          </div>
          <h2 className="text-2xl font-bold text-yellow-600 mb-2">Swibee</h2>
          <p className="text-gray-600">달콤한 쇼핑의 시작</p>
        </div>

        <Card className="shadow-xl border-0 rounded-3xl">
          <CardContent className="p-6 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">이메일</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="email"
                    placeholder="이메일을 입력하세요"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-12 py-4 rounded-2xl border-gray-300 focus:border-yellow-500 text-base"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">비밀번호</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="비밀번호를 입력하세요"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="pl-12 pr-12 py-4 rounded-2xl border-gray-300 focus:border-yellow-500 text-base"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </Button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-sm text-gray-600">로그인 상태 유지</span>
                </label>
                <Link href="/auth/forgot-password" className="text-sm text-yellow-600 hover:text-yellow-700">
                  비밀번호 찾기
                </Link>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold py-4 rounded-2xl text-base"
              >
                로그인
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">또는</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full rounded-2xl py-4 bg-transparent text-base">
                <div className="w-5 h-5 mr-3 bg-blue-500 rounded"></div>
                Google로 로그인
              </Button>
              <Button variant="outline" className="w-full rounded-2xl py-4 bg-transparent text-base">
                <div className="w-5 h-5 mr-3 bg-blue-600 rounded"></div>
                Facebook으로 로그인
              </Button>
              <Button variant="outline" className="w-full rounded-2xl py-4 bg-transparent text-base">
                <div className="w-5 h-5 mr-3 bg-green-500 rounded"></div>
                네이버로 로그인
              </Button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center pt-4">
              <p className="text-gray-600">
                아직 계정이 없으신가요?{" "}
                <Link href="/auth/signup" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                  회원가입
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="mt-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-yellow-200">
            <h3 className="font-semibold text-gray-800 mb-4 text-center">🍯 Swibee 회원 혜택</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl mb-2">🎁</div>
                <p className="text-gray-600">
                  신규회원
                  <br />
                  20% 할인
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🚚</div>
                <p className="text-gray-600">
                  5만원 이상
                  <br />
                  무료배송
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">💰</div>
                <p className="text-gray-600">
                  구매금액의
                  <br />
                  1% 적립
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">⭐</div>
                <p className="text-gray-600">
                  생일 특별
                  <br />
                  쿠폰 증정
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
