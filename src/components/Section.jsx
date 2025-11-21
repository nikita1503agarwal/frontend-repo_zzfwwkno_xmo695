function Section({ title, subtitle, children, ctaLabel, ctaHref }) {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-8">
          {title && <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">{title}</h2>}
          {subtitle && <p className="text-neutral-600">{subtitle}</p>}
        </div>
        <div className="grid gap-6">
          {children}
        </div>
        {ctaLabel && ctaHref && (
          <div className="mt-8">
            <a href={ctaHref} className="inline-flex items-center justify-center rounded-md bg-[#FB9B1C] text-white font-semibold px-5 py-2.5 hover:opacity-95 transition">
              {ctaLabel}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default Section
