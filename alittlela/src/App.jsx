import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Archive from './pages/Archive';
import Contact from './pages/Contact';
import Post from './pages/Post';

export default function App() {
  return (
    <BrowserRouter basename="/alittlela">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:slug" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
