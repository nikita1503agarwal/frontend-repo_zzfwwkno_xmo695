import { Routes, Route } from 'react-router-dom'
import { HomePage, BuyPage, SellPage, DevPage, TeamPage, CommunitiesPage, ResourcesPage, ContactPage } from './components/Pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/buy" element={<BuyPage />} />
      <Route path="/sell" element={<SellPage />} />
      <Route path="/developments" element={<DevPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/communities" element={<CommunitiesPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App
