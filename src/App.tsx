import Home from './pages/Home';
import Careers from './pages/careers';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import FAQs from './pages/faqs';
import ContactPage from './pages/contact';

export default function App() {
  return (
    <Router>
        <Routes>
                <Route path="/fransi_llc" element={<Home />} />
                <Route path="/fransi_llc/careers" element={<Careers />} />
                <Route path="/fransi_llc/faqs" element={<FAQs />} />
                <Route path="/fransi_llc/contact" element={<ContactPage />} />
            </Routes>
    </Router>
  );
}