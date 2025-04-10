export function CompareHeader() {
  return (
    <div className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1117]/90 to-[#0D1117]/70"></div>
        <div className="comparison-grid"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-['Orbitron'] uppercase tracking-wider text-white">
            Device <span className="text-[#0A84FF]">Comparison</span>
          </h1>
          <p className="text-lg md:text-xl text-[#E6EDF3]/90 max-w-2xl">
            Compare specifications, features, and performance metrics side by side to find the perfect device for your
            needs.
          </p>
        </div>
      </div>
    </div>
  )
}
