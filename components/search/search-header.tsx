"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search, X, SlidersHorizontal, Mic } from "lucide-react"

interface SearchHeaderProps {
  searchQuery: string
  onSearch: (query: string) => void
  onToggleFilters: () => void
  isSearching: boolean
}

export default function SearchHeader({ searchQuery, onSearch, onToggleFilters, isSearching }: SearchHeaderProps) {
  const [inputValue, setInputValue] = useState(searchQuery)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const suggestions = ["프리미엄 꿀", "천연 화장품", "유기농 차", "수제 쿠키", "아카시아 꿀"]

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onSearch(inputValue.trim())
      setShowSuggestions(false)
    }
  }

  const handleInputChange = (value: string) => {
    setInputValue(value)
    setShowSuggestions(value.length > 0)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
    onSearch(suggestion)
    setShowSuggestions(false)
  }

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Search Header */}
      <div className="flex items-center p-4 space-x-3">
        <Button variant="ghost" size="icon" className="rounded-full flex-shrink-0">
          <ArrowLeft className="w-5 h-5" />
        </Button>

        <form onSubmit={handleSubmit} className="flex-1 relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              ref={inputRef}
              type="text"
              placeholder="상품을 검색해보세요"
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
              className="pl-10 pr-20 py-3 rounded-full border-gray-300 focus:border-yellow-500 text-base"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
              {inputValue && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setInputValue("")
                    setShowSuggestions(false)
                  }}
                  className="w-6 h-6 rounded-full"
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
              <Button type="button" variant="ghost" size="icon" className="w-8 h-8 rounded-full text-yellow-600">
                <Mic className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Auto-complete Suggestions */}
          {showSuggestions && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-2xl mt-2 shadow-lg z-50">
              {suggestions
                .filter((suggestion) => suggestion.toLowerCase().includes(inputValue.toLowerCase()))
                .map((suggestion, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center space-x-3 first:rounded-t-2xl last:rounded-b-2xl"
                  >
                    <Search className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">{suggestion}</span>
                  </button>
                ))}
            </div>
          )}
        </form>
      </div>

      {/* Filter Bar */}
      {searchQuery && (
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
          <span className="text-sm text-gray-600">{isSearching ? "검색 중..." : `'${searchQuery}' 검색 결과`}</span>
          <Button variant="outline" size="sm" onClick={onToggleFilters} className="rounded-full px-4 bg-transparent">
            <SlidersHorizontal className="w-4 h-4 mr-1" />
            필터
          </Button>
        </div>
      )}
    </div>
  )
}
