type Review = {
  title: string;
  src: string; // poster path
  blurb: string;
  href?: string;
};

type ReviewGridProps = {
  heading?: string;
  reviews: Review[];
};

export default function ReviewGrid({ heading = "Favorite reviews", reviews }: ReviewGridProps) {
  return (
    <section className="mt-14">
      <h2 className="text-sm font-medium tracking-[0.08em] uppercase text-[#9ca3af]">
        {heading}
      </h2>
      <div className="mt-2 mb-6 h-px bg-[#2a2d33]"></div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
        {reviews.map((r) => (
          <a key={r.title} href={r.href ?? "#"} className="group block">
            <div className="flex gap-4">
              <div className="w-[92px] shrink-0 rounded-lg border border-[#2a2d33] bg-[#1a1d23] p-0.5 shadow-sm">
                <div className="overflow-hidden rounded-md border-[4px] border-[#2a2d33] shadow-[0_1px_6px_rgba(0,0,0,0.3)]">
                  <img src={r.src} alt={r.title} className="aspect-[2/3] w-full object-cover" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium leading-snug text-[#e5e5e5]">{r.title}</p>
                <p className="mt-1 text-sm text-[#d1d5db] line-clamp-3 italic">"{r.blurb.trim()}"</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}


