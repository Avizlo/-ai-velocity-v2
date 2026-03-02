import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/sections/Navbar';
import { Footer } from './components/sections/Footer';

// Use lazy loading for code-splitting with named exports:
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const AgenticCommerce = lazy(() => import('./pages/AgenticCommerce').then(module => ({ default: module.AgenticCommerce })));
const Marketing = lazy(() => import('./pages/Marketing').then(module => ({ default: module.Marketing })));
const Payments = lazy(() => import('./pages/Payments').then(module => ({ default: module.Payments })));
const AEO = lazy(() => import('./pages/AEO').then(module => ({ default: module.AEO })));
const Strategy = lazy(() => import('./pages/Strategy').then(module => ({ default: module.Strategy })));
const AgenticPhotoshoots = lazy(() => import('./pages/AgenticPhotoshoots').then(module => ({ default: module.AgenticPhotoshoots })));

// Sandbox pages are default exports:
const Sandbox = lazy(() => import('./pages/Sandbox'));
const Sandbox2 = lazy(() => import('./pages/Sandbox2'));
const Sandbox4 = lazy(() => import('./pages/Sandbox4'));

// Quick fallback loader
const PageLoader = () => (
  <div className="w-full h-screen bg-charcoal flex items-center justify-center">
    <div className="text-white font-mono opacity-50 animate-pulse tracking-widest text-sm">LOADING...</div>
  </div>
);

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-[#F0F0EC] text-[#1A1A1A]">
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
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
      </Suspense>
      <Footer />
    </div>
  );
}