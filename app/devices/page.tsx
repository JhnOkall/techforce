import { Filter } from "lucide-react"
import { DevicesHeader } from "@/components/devices-header"
import { DevicesGrid } from "@/components/devices-grid"
import { DevicesSidebar } from "@/components/devices-sidebar"
import { DevicesControls } from "@/components/devices-controls"
import { TechForceNavbar } from "@/components/tech-force-navbar"
import { TechForceFooter } from "@/components/tech-force-footer"
import { Pagination } from "@/components/pagination"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function DevicesPage() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6EDF3] font-['Rajdhani']">
      <TechForceNavbar />

      <main className="pt-20">
        <DevicesHeader />

        <div className="container mx-auto px-4 py-8">
          <div className="lg:hidden mb-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full flex items-center justify-center gap-2 border-[#3B3F51]">
                  <Filter className="h-4 w-4" /> Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] bg-[#0D1117] border-[#3B3F51]">
                <div className="py-6">
                  <DevicesSidebar />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="hidden lg:block w-[280px] shrink-0">
              <div className="sticky top-24">
                <DevicesSidebar />
              </div>
            </div>

            <div className="flex-1">
              <DevicesControls />
              <DevicesGrid />
              <Pagination />
            </div>
          </div>
        </div>
      </main>

      <TechForceFooter />
    </div>
  )
}
