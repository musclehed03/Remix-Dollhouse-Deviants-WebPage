/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AccessibilityProvider } from './context/AccessibilityContext';
import Home from './pages/Home';
import SplashGate from './pages/SplashGate';
import AdminDashboard from './pages/AdminDashboard';
import Vault from './pages/Vault';
import Studio from './pages/Studio';
import Boutique from './pages/Boutique';
import Creations from './pages/Creations';
import Circuit from './pages/Circuit';
import Echoes from './pages/Echoes';
import About from './pages/About';
import Compliance from './pages/Compliance';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Support from './pages/Support';
import UserProfile from './pages/UserProfile';
import TrevorBanner from './components/TrevorBanner';
import AccessibilityMenu from './components/AccessibilityMenu';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <AccessibilityProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <TrevorBanner />
          <AccessibilityMenu />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gate" element={<SplashGate />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/creations" element={<Creations />} />
          <Route path="/circuit" element={<Circuit />} />
          <Route path="/echoes" element={<Echoes />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/support" element={<Support />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </AuthProvider>
    </AccessibilityProvider>
  );
}
