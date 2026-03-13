import { Link } from 'react-router-dom';
import { allPosts } from '../data';

const months = {};
allPosts.forEach((post) => {
  const parts = post.date.split(' ');
  const key = `${parts[0]} ${parts[2]}`;
  if (!months[key]) months[key] = [];
  months[key].push(post);
});

export default function Archive() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold" style={{ color: '#222' }}>Archive</h1>
      <p className="mt-2 text-sm" style={{ color: '#888' }}>
        All posts, organized by month.
      </p>

      <div className="mt-8 flex flex-col gap-8">
        {Object.entries(months).map(([month, monthPosts]) => (
          <div key={month}>
            <h2 className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#b5b0a8' }}>
              {month}
            </h2>
            <div className="mt-3 rounded-lg" style={{ background: '#fff' }}>
              {monthPosts.map((post, i) => (
                <Link
                  to={`/post/${post.slug}`}
                  key={post.slug}
                  className="flex items-center justify-between px-5 py-4"
                  style={i < monthPosts.length - 1 ? { borderBottom: '1px solid #eee' } : {}}
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold" style={{ color: '#222' }}>
                      {post.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed" style={{ color: '#888' }}>
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="ml-6 shrink-0">
                    <p className="text-xs" style={{ color: '#bbb' }}>{post.date}</p>
                    {post.image && (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="mt-2 rounded object-cover"
                        style={{ width: '80px', height: '52px' }}
                        loading="lazy"
                      />
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-lg px-6 py-5 text-center" style={{ background: '#fff' }}>
        <p className="text-sm" style={{ color: '#888' }}>
          That's everything so far. Check back soon for new posts.
        </p>
      </div>
    </div>
  );
}
