/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProductsPage } from "./pages/ProductsPage";
import { IndustriesPage } from "./pages/IndustriesPage";
import { QuotePage } from "./pages/QuotePage";
import { ContactPage } from "./pages/ContactPage";
import { CompliancePage } from "./pages/CompliancePage";
import { LogisticsPage } from "./pages/LogisticsPage";

export default function App() {
  useEffect(() => {
    document.title = "MedEquip Pro";
  }, []);

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/logistics" element={<LogisticsPage />} />
          <Route path="/compliance" element={<CompliancePage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

