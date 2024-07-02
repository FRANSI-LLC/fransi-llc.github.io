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
                <Route path="/fransillc" element={<Home />} />
                <Route path="/fransillc/careers" element={<Careers />} />
                <Route path="/fransillc/faqs" element={<FAQs />} />
                <Route path="/fransillc/contact" element={<ContactPage />} />
            </Routes>
    </Router>
  );
}