const galleryModules = import.meta.glob<string>("../assets/galerija/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
  query: "?url",
});

const IMAGES = Object.entries(galleryModules)
  .map(([path, src]) => ({
    src,
    alt: path
      .split("/")
      .pop()
      ?.replace(/\.[^.]+$/, "")
      .replace(/[-_]/g, " "),
  }))
  .sort((a, b) => (a.alt ?? "").localeCompare(b.alt ?? ""));

export function AboutGallery() {
  if (IMAGES.length === 0) return null;

  return (
    <section id="galerija" className="section-y bg-white">
      <div className="container-x">
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow">Galerija</span>
          <h2 className="mt-3 text-3xl font-bold text-primary md:text-5xl">
            Einblicke in unsere Arbeit
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {IMAGES.map((image, index) => (
            <figure
              key={image.src}
              className={index % 5 === 0 ? "sm:col-span-2 lg:col-span-2" : undefined}
            >
              <img
                src={image.src}
                alt={image.alt ?? "SCHRITT KW Galerie"}
                className="h-72 w-full object-cover md:h-80"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
