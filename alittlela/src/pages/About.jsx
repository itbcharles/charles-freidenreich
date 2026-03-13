export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold" style={{ color: '#222' }}>About</h1>

      <div className="mt-8 flex flex-col gap-8 sm:flex-row">
        <div className="overflow-hidden rounded-lg sm:w-64 sm:shrink-0">
          <img
            src="/images/IMG_4357.jpg"
            alt="Twilight sky"
            className="w-full object-cover"
            style={{ height: '280px' }}
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold" style={{ color: '#222' }}>
            ALittleLA
          </h2>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: '#555' }}>
            This blog started as a way to keep track of the places and moments that make
            Los Angeles feel like home. It grew into something a little bigger — a collection
            of photos, walks, and observations from around the city and the landscapes that
            surround it.
          </p>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: '#555' }}>
            Most of the photos here were taken by Amy Lilley, a photographer based in
            Southern California who specializes in landscape and golden-hour photography.
            The writing is loosely structured on purpose — more like field notes than
            polished essays.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-lg px-6 py-6" style={{ background: '#fff' }}>
        <h2 className="text-lg font-semibold" style={{ color: '#222' }}>
          What this blog is about
        </h2>
        <ul className="mt-4 flex flex-col gap-3">
          {[
            { label: 'Sunsets & landscapes', desc: 'The skies around LA are endlessly interesting. We try to catch them at their best.' },
            { label: 'Walks & hikes', desc: 'From Griffith Park to the salt flats, notes from the trail.' },
            { label: 'City life', desc: 'Downtown, the neighborhoods, the quiet corners most people drive past.' },
            { label: 'Photography', desc: 'Mostly golden hour, mostly unedited, mostly from a phone.' },
          ].map((item) => (
            <li key={item.label} className="border-b pb-3" style={{ borderColor: '#eee' }}>
              <p className="text-sm font-semibold" style={{ color: '#333' }}>{item.label}</p>
              <p className="mt-1 text-sm" style={{ color: '#777' }}>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 rounded-lg px-6 py-6" style={{ background: '#fff' }}>
        <h2 className="text-lg font-semibold" style={{ color: '#222' }}>
          About the photographer
        </h2>
        <p className="mt-3 text-sm leading-relaxed" style={{ color: '#555' }}>
          Amy Lilley is a landscape photographer based in Southern California. Her work
          focuses on natural light, water, and the sky — especially during the golden hour.
          All photos on this site are &copy; 2026 Amy Lilley Photography.
        </p>
      </div>
    </div>
  );
}
