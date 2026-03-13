import { useParams, Link } from 'react-router-dom';
import { allPosts } from '../data';

export default function Post() {
  const { slug } = useParams();
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold" style={{ color: '#222' }}>Post not found</h1>
        <Link to="/" className="mt-4 inline-block text-sm" style={{ color: '#888' }}>
          &larr; Back to home
        </Link>
      </div>
    );
  }

  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prev = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const next = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <article className="mx-auto max-w-3xl px-6 py-10">
      <Link to="/" className="text-xs font-medium" style={{ color: '#999' }}>
        &larr; Back to home
      </Link>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="mt-6 w-full rounded-lg object-cover"
          style={{ height: '420px' }}
        />
      )}

      <h1 className="mt-6 text-3xl font-bold" style={{ color: '#222' }}>
        {post.title}
      </h1>
      <p className="mt-2 text-sm" style={{ color: '#b5b0a8' }}>
        {post.date}
        {post.image && <> &middot; Photo by Amy Lilley, &copy; 2026</>}
      </p>

      <div className="mt-6" style={{ color: '#555' }}>
        {post.body.split('\n\n').map((paragraph, i) => (
          <p key={i} className="mb-4 leading-relaxed" style={{ fontSize: '15px' }}>
            {paragraph}
          </p>
        ))}
      </div>

      {/* Prev / Next navigation */}
      <div
        className="mt-10 flex items-stretch gap-4 border-t pt-8"
        style={{ borderColor: '#e0ddd8' }}
      >
        {prev ? (
          <Link
            to={`/post/${prev.slug}`}
            className="flex-1 rounded-lg px-5 py-4"
            style={{ background: '#fff' }}
          >
            <p className="text-xs" style={{ color: '#b5b0a8' }}>&larr; Older</p>
            <p className="mt-1 text-sm font-semibold" style={{ color: '#333' }}>{prev.title}</p>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {next ? (
          <Link
            to={`/post/${next.slug}`}
            className="flex-1 rounded-lg px-5 py-4 text-right"
            style={{ background: '#fff' }}
          >
            <p className="text-xs" style={{ color: '#b5b0a8' }}>Newer &rarr;</p>
            <p className="mt-1 text-sm font-semibold" style={{ color: '#333' }}>{next.title}</p>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </article>
  );
}
