import MobileHeader from "@/components/layout/mobile-header"
import MobileHero from "@/components/home/mobile-hero"
import MobileCategories from "@/components/home/mobile-categories"
import MobileFeaturedProducts from "@/components/home/mobile-featured-products"
import MobileBottomNav from "@/components/layout/mobile-bottom-nav"

export default function MobileHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50 max-w-sm mx-auto">
      <MobileHeader />
      <main className="pb-20">
        <MobileHero />
        <MobileCategories />
        <MobileFeaturedProducts />
      </main>
      <MobileBottomNav />
    </div>
  )
}
