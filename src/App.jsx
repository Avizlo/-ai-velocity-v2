import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/sections/Navbar';
import { Home } from './pages/Home';
import { AgenticCommerce } from './pages/AgenticCommerce';
import { Marketing } from './pages/Marketing';
import { Payments } from './pages/Payments';
import { AEO } from './pages/AEO';
import { Strategy } from './pages/Strategy';
import { AgenticPhotoshoots } from './pages/AgenticPhotoshoots';
import Sandbox from './pages/Sandbox';
import Sandbox2 from './pages/Sandbox2';
import Sandbox4 from './pages/Sandbox4';

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-[#F0F0EC] text-[#1A1A1A]">
      <Navbar />
      <Routes>
        {/* FIX: Removed the extra <Hero /> here. It lives inside <Home />. */}
        <Route path="/" element={<Home />} />

        <Route path="/agentic-commerce" element={<AgenticCommerce />} />
        <Route path="/agentic-marketing" element={<Marketing />} />
        <Route path="/agentic-photoshoots" element={<AgenticPhotoshoots />} />
        <Route path="/agentic-payments" element={<Payments />} />
        <Route path="/agentic-aeo" element={<AEO />} />
        <Route path="/agentic-strategy" element={<Strategy />} />

        {/* Hidden Development Routes */}
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="/sandbox-2" element={<Sandbox2 />} />
        <Route path="/sandbox-4" element={<Sandbox4 />} />
      </Routes>
    </div>
  );
}