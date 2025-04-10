import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Pagination() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Button variant="outline" size="icon" className="border-[#3B3F51] hover:bg-[#3B3F51]/50 hover:text-white">
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous page</span>
      </Button>
      <Button variant="outline" size="sm" className="border-[#3B3F51] bg-[#0A84FF] text-white hover:bg-[#0A84FF]/80">
        1
      </Button>
      <Button variant="outline" size="sm" className="border-[#3B3F51] hover:bg-[#3B3F51]/50 hover:text-white">
        2
      </Button>
      <Button variant="outline" size="sm" className="border-[#3B3F51] hover:bg-[#3B3F51]/50 hover:text-white">
        3
      </Button>
      <Button variant="outline" size="sm" className="border-[#3B3F51] hover:bg-[#3B3F51]/50 hover:text-white">
        4
      </Button>
      <Button variant="outline" size="sm" className="border-[#3B3F51] hover:bg-[#3B3F51]/50 hover:text-white">
        5
      </Button>
      <Button variant="outline" size="icon" className="border-[#3B3F51] hover:bg-[#3B3F51]/50 hover:text-white">
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next page</span>
      </Button>
    </div>
  )
}
