import Layout from './Layout'
import Hero from './Hero'
import Section from './Section'

export function HomePage() {
  return (
    <Layout>
      <Hero />
      <Section
        title="Service Areas"
        subtitle="Surrey • Langley • Abbotsford • Mission • Maple Ridge • Coquitlam"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {['Surrey','Langley','Abbotsford','Mission','Maple Ridge','Coquitlam'].map((city) => (
            <a key={city} href="/communities" className="p-5 border border-neutral-200 rounded-xl hover:shadow">{city}</a>
          ))}
        </div>
      </Section>
    </Layout>
  )
}

export function BuyPage() {
  const items = [
    'On-point search results',
    'Off-market & pre-market access',
    'Offer strategy & negotiation',
    'Financing connections',
  ]
  return (
    <Layout>
      <section className="py-14 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-extrabold mb-4">Smart Buying Starts Here.</h1>
          <p className="text-neutral-700 max-w-3xl mb-8">Find your perfect home faster — with data-backed strategies, early access listings, and real agents who move fast.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((text) => (
              <div key={text} className="p-5 border border-neutral-200 rounded-xl bg-white">{text}</div>
            ))}
          </div>
          <div className="mt-8">
            <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-[#FB9B1C] text-white font-semibold px-5 py-2.5">Talk to a WesCo Buyer Specialist</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export function SellPage() {
  const items = [
    'Strategic pricing & positioning',
    'Professional marketing (photo, video, ads)',
    'Active agent & buyer network',
    'Offer control',
  ]
  return (
    <Layout>
      <section className="py-14 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-extrabold mb-4">Your Property Deserves More Than a Listing.</h1>
          <p className="text-neutral-700 max-w-3xl mb-8">From strategy to sold, we help you position your property to attract attention — and strong offers.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((text) => (
              <div key={text} className="p-5 border border-neutral-200 rounded-xl bg-white">{text}</div>
            ))}
          </div>
          <div className="mt-8">
            <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-[#FB9B1C] text-white font-semibold px-5 py-2.5">Get a Free Home Evaluation</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export function DevPage() {
  const items = [
    'Zoning & OCP analysis',
    'Land acquisition strategy',
    'Builder & investor partnerships',
    'Current opportunities',
  ]
  return (
    <Layout>
      <section className="py-14 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-extrabold mb-4">Future-Focused Real Estate.</h1>
          <p className="text-neutral-700 max-w-3xl mb-8">We specialize in sourcing and structuring land deals with real upside — from small single-family lots to townhouse developments.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((text) => (
              <div key={text} className="p-5 border border-neutral-200 rounded-xl bg-white">{text}</div>
            ))}
          </div>
          <div className="mt-8">
            <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-[#FB9B1C] text-white font-semibold px-5 py-2.5">Book a Development Strategy Call</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export function TeamPage() {
  const members = [
    {
      name: 'Mendim Tahirsylaj — REALTOR®',
      bio: 'Young, driven, and results-oriented. Focused on strategy, negotiation, and lifestyle-based marketing.',
      title: 'REALTOR®',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop'
    },
  ]
  return (
    <Layout>
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-extrabold mb-4">The WesCo Difference</h1>
          <p className="text-neutral-700 max-w-3xl mb-8">We’re a collective of motivated professionals combining real estate expertise, marketing power, and development insight.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((m) => (
              <div key={m.name} className="border border-neutral-200 rounded-xl overflow-hidden bg-white">
                <img src={m.img} alt={m.name} className="h-56 w-full object-cover" />
                <div className="p-5">
                  <p className="font-bold">{m.name}</p>
                  <p className="text-sm text-neutral-600">{m.title}</p>
                  <p className="text-sm text-neutral-700 mt-2">{m.bio}</p>
                </div>
              </div>
            ))}
            {/* Placeholder for other team members */}
            {[1,2,3,4,5].map((i) => (
              <div key={i} className="border border-dashed border-neutral-300 rounded-xl p-8 text-neutral-500 flex items-center justify-center">
                Add team member
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-[#FB9B1C] text-white font-semibold px-5 py-2.5">Connect with Our Team</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export function CommunitiesPage() {
  const cities = [
    { name: 'Surrey', desc: 'Vibrant neighbourhoods with diverse housing options.' },
    { name: 'Langley', desc: 'Family-friendly with strong growth and amenities.' },
    { name: 'Mission', desc: 'Scenic community with space and value.' },
    { name: 'Abbotsford', desc: 'Central hub of the Fraser Valley.' },
    { name: 'Maple Ridge', desc: 'Outdoor lifestyle with suburban comfort.' },
  ]
  return (
    <Layout>
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-extrabold mb-4">Communities</h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((c) => (
              <a key={c.name} href="#" className="p-6 border border-neutral-200 rounded-xl hover:shadow bg-white">
                <p className="font-bold">{c.name}</p>
                <p className="text-sm text-neutral-600">{c.desc}</p>
                <p className="text-sm text-[#FB9B1C] mt-2">View active listings →</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export function ResourcesPage() {
  const items = [
    { name: 'Buyer Guide', action: 'Download PDF' },
    { name: 'Seller Prep Checklist', action: 'View' },
    { name: 'Investment Insights', action: 'Read' },
    { name: 'Land Development 101', action: 'Read' },
  ]
  return (
    <Layout>
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-extrabold mb-4">Resources</h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((it) => (
              <a key={it.name} href="#" className="p-6 border border-neutral-200 rounded-xl bg-white hover:shadow">
                <p className="font-bold">{it.name}</p>
                <p className="text-sm text-[#FB9B1C] mt-2">{it.action} →</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export function ContactPage() {
  return (
    <Layout>
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-extrabold mb-4">Let’s Get You Moving.</h1>
          <p className="text-neutral-700 max-w-2xl mb-8">We reply same-day. Fill out the form or book a quick 15-minute call to map your next move.</p>
          <form className="grid md:grid-cols-2 gap-4 max-w-3xl">
            <input className="border border-neutral-300 rounded-md px-4 py-2" placeholder="Name" />
            <input className="border border-neutral-300 rounded-md px-4 py-2" placeholder="Phone" />
            <input className="border border-neutral-300 rounded-md px-4 py-2 md:col-span-2" placeholder="Email" />
            <select className="border border-neutral-300 rounded-md px-4 py-2">
              <option>Buy</option>
              <option>Sell</option>
              <option>Invest</option>
            </select>
            <input className="border border-neutral-300 rounded-md px-4 py-2" placeholder="Area" />
            <input className="border border-neutral-300 rounded-md px-4 py-2" placeholder="Budget" />
            <textarea className="border border-neutral-300 rounded-md px-4 py-2 md:col-span-2" rows="5" placeholder="Message" />
            <button className="md:col-span-2 inline-flex items-center justify-center rounded-md bg-[#FB9B1C] text-white font-semibold px-5 py-2.5">Book a Call</button>
          </form>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div>
              <p className="font-bold">Phone</p>
              <p className="text-neutral-700">Add your business number</p>
            </div>
            <div>
              <p className="font-bold">Email</p>
              <p className="text-neutral-700">Add your contact email</p>
            </div>
            <div>
              <p className="font-bold">Office</p>
              <p className="text-neutral-700">#207 — 32615 South Fraser Way, Abbotsford, BC V2T 1X8</p>
            </div>
          </div>
          <div className="mt-8">
            <iframe title="WesCo Office" className="w-full h-64 border rounded-md" src="https://www.google.com/maps?q=32615%20South%20Fraser%20Way%2C%20Abbotsford%2C%20BC%20V2T%201X8&output=embed" />
          </div>
        </div>
      </section>
    </Layout>
  )
}
