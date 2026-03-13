import { Link } from 'react-router-dom';
import { allPosts, tags } from '../data';

const featured = allPosts.find((p) => p.featured);
const recent = allPosts.filter((p) => !p.featured).slice(0, 4);
const older = allPosts.slice(5);

export default function Home() {
  return (
    <>
      {/* Featured post */}
      <section className="mx-auto max-w-6xl px-6 pt-8">
        <Link to={`/post/${featured.slug}`} className="block overflow-hidden rounded-lg" style={{ background: '#fff' }}>
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full object-cover"
            style={{ height: '480px' }}
          />
          <div className="px-8 py-6">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#b5b0a8' }}>
              Featured
            </p>
            <h2 className="mt-2 text-2xl font-bold" style={{ color: '#222' }}>
              {featured.title}
            </h2>
            <p className="mt-1 text-xs" style={{ color: '#b5b0a8' }}>
              {featured.date} &middot; Photo by Amy Lilley, &copy; 2026
            </p>
            <p className="mt-3 leading-relaxed" style={{ color: '#555', fontSize: '15px' }}>
              {featured.excerpt}
            </p>
            <span className="mt-4 inline-block text-sm font-medium" style={{ color: '#888' }}>
              Continue reading &rarr;
            </span>
          </div>
        </Link>
      </section>

      {/* Posts grid + sidebar */}
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-12">
        <div className="flex gap-8">
          {/* Posts grid */}
          <main className="flex-1 min-w-0">
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest" style={{ color: '#b5b0a8' }}>
              Recent Posts
            </h2>
            <div className="grid grid-cols-2 gap-5">
              {recent.map((post) => (
                <Link
                  to={`/post/${post.slug}`}
                  key={post.slug}
                  className="block overflow-hidden rounded-lg"
                  style={{ background: '#fff' }}
                >
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full object-cover"
                      style={{ height: '220px' }}
                      loading="lazy"
                    />
                  )}
                  <div className="px-5 py-4">
                    <h3 className="text-base font-semibold" style={{ color: '#222' }}>
                      {post.title}
                    </h3>
                    <p className="mt-1 text-xs" style={{ color: '#b5b0a8' }}>
                      {post.date}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: '#666' }}>
                      {post.excerpt}
                    </p>
                    <span className="mt-3 inline-block text-xs font-medium" style={{ color: '#999' }}>
                      Read more &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block" style={{ width: '280px', flexShrink: 0 }}>
            <div className="rounded-lg px-5 py-5" style={{ background: '#fff' }}>
              <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#b5b0a8' }}>
                About
              </h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: '#666' }}>
                ALittleLA is a blog about Los Angeles and the landscapes around it &mdash; sunsets,
                shorelines, and everything in between. Written and photographed from somewhere in LA.
              </p>
              <Link to="/about" className="mt-3 inline-block text-xs font-medium" style={{ color: '#999' }}>
                Learn more &rarr;
              </Link>
            </div>

            <div className="mt-5 rounded-lg px-5 py-5" style={{ background: '#fff' }}>
              <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#b5b0a8' }}>
                Older Posts
              </h3>
              <ul className="mt-3 flex flex-col gap-3">
                {older.map((post) => (
                  <li key={post.slug} className="border-b pb-3" style={{ borderColor: '#eee' }}>
                    <Link to={`/post/${post.slug}`} className="text-sm font-medium hover:underline" style={{ color: '#333' }}>
                      {post.title}
                    </Link>
                    <p className="mt-0.5 text-xs" style={{ color: '#bbb' }}>{post.date}</p>
                  </li>
                ))}
              </ul>
              <Link to="/archive" className="mt-4 inline-block text-xs font-medium" style={{ color: '#999' }}>
                View all posts &rarr;
              </Link>
            </div>

            <div className="mt-5 rounded-lg px-5 py-5" style={{ background: '#fff' }}>
              <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#b5b0a8' }}>
                Tags
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded px-2.5 py-1 text-xs"
                    style={{ background: '#f5f2ed', color: '#777' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
