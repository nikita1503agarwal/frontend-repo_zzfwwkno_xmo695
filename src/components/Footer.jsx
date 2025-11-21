function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-neutral-950 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src="/wesco-logo-orange.svg" alt="WesCo Property Group" className="h-10 w-auto" />
            <div>
              <p className="font-bold">WesCo Property Group</p>
              <p className="text-sm text-neutral-300">#207 — 32615 South Fraser Way, Abbotsford, BC V2T 1X8</p>
              <p className="text-sm text-neutral-300">Century 21 Coastal Realty Ltd.</p>
              <p className="text-xs text-neutral-400">Each office independently owned and operated.</p>
            </div>
          </div>
          <div className="text-sm text-neutral-300">
            <p>Service Areas: Surrey • Langley • Abbotsford • Mission • Maple Ridge • Coquitlam</p>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">© {year} WesCo Property Group. All rights reserved.</p>
          <div className="flex items-center gap-4 text-neutral-300">
            <a href="#" aria-label="Instagram" className="hover:text-white">Instagram</a>
            <a href="#" aria-label="TikTok" className="hover:text-white">TikTok</a>
            <a href="#" aria-label="Facebook" className="hover:text-white">Facebook</a>
            <a href="#" aria-label="YouTube" className="hover:text-white">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
