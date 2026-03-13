import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold" style={{ color: '#222' }}>Contact</h1>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: '#888' }}>
        Have a question, want to collaborate, or just want to say hello? Get in touch.
      </p>

      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        {/* Form */}
        <div className="flex-1 rounded-lg px-6 py-6" style={{ background: '#fff' }}>
          {submitted ? (
            <div className="py-10 text-center">
              <p className="text-lg font-semibold" style={{ color: '#222' }}>Thanks for reaching out.</p>
              <p className="mt-2 text-sm" style={{ color: '#888' }}>
                We'll get back to you as soon as we can.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs font-medium"
                style={{ color: '#999' }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest" style={{ color: '#b5b0a8' }}>
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded border px-3 py-2 text-sm outline-none"
                  style={{ borderColor: '#ddd8d1', background: '#faf9f7', color: '#333' }}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest" style={{ color: '#b5b0a8' }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded border px-3 py-2 text-sm outline-none"
                  style={{ borderColor: '#ddd8d1', background: '#faf9f7', color: '#333' }}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest" style={{ color: '#b5b0a8' }}>
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  className="mt-1 w-full rounded border px-3 py-2 text-sm outline-none resize-none"
                  style={{ borderColor: '#ddd8d1', background: '#faf9f7', color: '#333' }}
                />
              </div>
              <button
                type="submit"
                className="self-start rounded px-5 py-2 text-sm font-medium text-white"
                style={{ background: '#888' }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Info sidebar */}
        <div className="lg:w-64 lg:shrink-0">
          <div className="rounded-lg px-5 py-5" style={{ background: '#fff' }}>
            <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#b5b0a8' }}>
              Other ways to reach us
            </h3>
            <ul className="mt-4 flex flex-col gap-4">
              <li>
                <p className="text-xs font-semibold uppercase" style={{ color: '#b5b0a8' }}>Email</p>
                <p className="mt-0.5 text-sm" style={{ color: '#555' }}>hello@alittlela.com</p>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase" style={{ color: '#b5b0a8' }}>Instagram</p>
                <p className="mt-0.5 text-sm" style={{ color: '#555' }}>@alittlela</p>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase" style={{ color: '#b5b0a8' }}>Twitter</p>
                <p className="mt-0.5 text-sm" style={{ color: '#555' }}>@alittlela</p>
              </li>
            </ul>
          </div>

          <div className="mt-5 rounded-lg overflow-hidden">
            <img
              src="/images/IMG_4346.jpg"
              alt="Silver morning"
              className="w-full object-cover"
              style={{ height: '180px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
