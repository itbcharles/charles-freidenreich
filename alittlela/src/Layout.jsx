import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#f5f2ed' }}>
      {/* Header */}
      <header style={{ background: '#eae7e1', borderBottom: '1px solid #ddd8d1' }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-xl font-bold tracking-tight" style={{ color: '#222' }}>
            ALittleLA
          </Link>
          <nav className="flex gap-6 text-sm font-medium" style={{ color: '#777' }}>
            <Link to="/" className="hover:text-gray-900">Home</Link>
            <Link to="/about" className="hover:text-gray-900">About</Link>
            <Link to="/archive" className="hover:text-gray-900">Archive</Link>
            <Link to="/contact" className="hover:text-gray-900">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Page content */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* Footer */}
      <footer style={{ background: '#eae7e1', borderTop: '1px solid #ddd8d1' }}>
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <Link to="/" className="text-sm font-bold" style={{ color: '#222' }}>ALittleLA</Link>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: '#888' }}>
                A blog about Los Angeles and the landscapes that surround it. Photos, observations, and the occasional long walk.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#b5b0a8' }}>
                Navigation
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-sm" style={{ color: '#777' }}>
                <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
                <li><Link to="/about" className="hover:text-gray-900">About</Link></li>
                <li><Link to="/archive" className="hover:text-gray-900">Archive</Link></li>
                <li><Link to="/contact" className="hover:text-gray-900">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#b5b0a8' }}>
                Connect
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-sm" style={{ color: '#777' }}>
                <li><a href="#" className="hover:text-gray-900">Instagram</a></li>
                <li><a href="#" className="hover:text-gray-900">Twitter</a></li>
                <li><a href="#" className="hover:text-gray-900">Email</a></li>
              </ul>
            </div>
          </div>
          <p className="mt-10 text-xs" style={{ color: '#c0bbb4' }}>
            &copy; 2026 ALittleLA. All rights reserved. Photos by Amy Lilley.
          </p>
        </div>
      </footer>
    </div>
  );
}
