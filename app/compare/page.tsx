import { TechForceNavbar } from "@/components/tech-force-navbar"
import { TechForceFooter } from "@/components/tech-force-footer"
import { CompareHeader } from "@/components/compare-header"
import { DeviceSelector } from "@/components/device-selector"
import { ComparisonTable } from "@/components/comparison-table"
import { VisualComparison } from "@/components/visual-comparison"
import { ProsConsComparison } from "@/components/pros-cons-comparison"
import { FinalVerdict } from "@/components/final-verdict"
import { Button } from "@/components/ui/button"
import { Share2, Download, Trash2 } from "lucide-react"

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6EDF3] font-['Rajdhani']">
      <TechForceNavbar />

      <main className="pt-20">
        <CompareHeader />

        <div className="container mx-auto px-4 py-8">
          <DeviceSelector />

          <div className="mt-10 space-y-12">
            <div className="flex justify-end gap-3">
              <Button variant="outline" size="sm" className="border-[#3B3F51] hover:bg-[#3B3F51]/50 hover:text-white">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="border-[#3B3F51] hover:bg-[#3B3F51]/50 hover:text-white">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm" className="border-[#3B3F51] hover:bg-[#3B3F51]/50 hover:text-white">
                <Trash2 className="h-4 w-4 mr-2" />
                Clear
              </Button>
            </div>

            <ComparisonTable />
            <VisualComparison />
            <ProsConsComparison />
            <FinalVerdict />
          </div>
        </div>
      </main>

      <TechForceFooter />
    </div>
  )
}
