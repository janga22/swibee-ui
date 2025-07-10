"use client"

import { useState } from "react"
import MobileBottomNav from "@/components/layout/mobile-bottom-nav"
import SearchHeader from "@/components/search/search-header"
import SearchSuggestions from "@/components/search/search-suggestions"
import SearchResults from "@/components/search/search-results"
import SearchFilters from "@/components/search/search-filters"

export default function MobileSearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState([])

  // 검색 실행
  const handleSearch = async (query: string) => {
    if (!query.trim()) return

    setIsSearching(true)
    setSearchQuery(query)

    // 실제 API 호출 시뮬레이션
    setTimeout(() => {
      setSearchResults([
        // 검색 결과 데이터
      ])
      setIsSearching(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-50 max-w-sm mx-auto">
      <SearchHeader
        searchQuery={searchQuery}
        onSearch={handleSearch}
        onToggleFilters={() => setShowFilters(!showFilters)}
        isSearching={isSearching}
      />

      <main className="pb-20">
        {!searchQuery ? (
          <SearchSuggestions onSearch={handleSearch} />
        ) : (
          <>
            {showFilters && <SearchFilters />}
            <SearchResults query={searchQuery} results={searchResults} isLoading={isSearching} />
          </>
        )}
      </main>

      <MobileBottomNav />
    </div>
  )
}
