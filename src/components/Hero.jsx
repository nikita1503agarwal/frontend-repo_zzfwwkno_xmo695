import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,155,28,0.15),transparent_40%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
              Real Estate. Simplified.
            </h1>
            <p className="text-xl text-neutral-600 mb-4">WesCo Property Group — Your Move, Made Simple.</p>
            <p className="text-neutral-700 mb-8">
              We’re a results-driven real estate group based in Abbotsford, BC — helping buyers, sellers, and investors make the smartest moves across the Fraser Valley. Whether you’re looking for your first home, building a portfolio, or selling for top dollar, our team brings strategy, speed, and clarity to every transaction.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-[#FB9B1C] text-white font-semibold px-6 py-3 shadow hover:opacity-95 transition">
                Book a 15-Min Call →
              </Link>
              <Link to="/buy" className="inline-flex items-center justify-center rounded-md border border-neutral-300 text-neutral-900 font-semibold px-6 py-3 hover:bg-neutral-50 transition">
                Start Buying
              </Link>
            </div>
          </div>
          <div>
            <div className="aspect-[4/3] rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center">
              <img src="/wesco-logo-orange.svg" alt="WesCo Logo" className="h-24 w-auto opacity-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
