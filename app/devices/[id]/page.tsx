import { TechForceNavbar } from "@/components/tech-force-navbar"
import { TechForceFooter } from "@/components/tech-force-footer"
import { ProductHeader } from "@/components/product-header"
import { ProductSpecifications } from "@/components/product-specifications"
import { ProductGallery } from "@/components/product-gallery"
import { ProductPricing } from "@/components/product-pricing"
import { ProductReviews } from "@/components/product-reviews"
import { RelatedProducts } from "@/components/related-products"

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = params.id

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6EDF3] font-['Rajdhani']">
      <TechForceNavbar />

      <main className="pt-20">
        <ProductHeader productId={productId} />

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ProductSpecifications productId={productId} />
              <ProductGallery productId={productId} />
              <ProductReviews productId={productId} />
            </div>

            <div>
              <div className="space-y-8 lg:sticky lg:top-24">
                <ProductPricing productId={productId} />
                <RelatedProducts productId={productId} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <TechForceFooter />
    </div>
  )
}
