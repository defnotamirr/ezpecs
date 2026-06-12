import HeroSection from './sections/HeroSection'
import LiveDemo from './sections/LiveDemo'
import PricingSection from './sections/PricingSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #4a7c59; border-radius: 3px; }
      `}</style>
      <HeroSection />
      <LiveDemo />
      <PricingSection />
      <Footer />
    </div>
  )
}