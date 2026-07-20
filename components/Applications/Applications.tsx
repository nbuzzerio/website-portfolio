import Image from "next/image";
import applicationCards from "../../data/application_cards.json";

type ProjectClickSource = "thumbnail" | "cta";

function createProjectSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function trackProjectClick(title: string, source: ProjectClickSource) {
  const projectSlug = createProjectSlug(title);

  void window.zaraz?.track(`project_${projectSlug}_${source}_click`, {
    project: title,
    section: "featured_projects",
    source,
  });
}

function Applications() {
  return (
    <section
      id="projects"
      className="sectionContainer flex w-full flex-col items-center justify-center bg-primary"
      aria-labelledby="projects-heading"
    >
      <h2
        id="projects-heading"
        className="py-10 text-5xl text-white underline lg:text-7xl"
      >
        Featured Projects
      </h2>

      <div className="flex w-10/12 flex-wrap justify-center gap-10 py-12 2xl:w-8/12">
        {applicationCards.map((app) => (
          <article
            key={app.title}
            className="app flex w-full flex-col overflow-hidden rounded-xl border border-primary-darker bg-primary-darker/80 transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg sm:basis-full md:basis-[48%] lg:basis-[calc((100%-80px)/3)]"
          >
            {app.linkUrl && (
              <a
                href={app.linkUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${app.title}`}
                onClick={() => trackProjectClick(app.title, "thumbnail")}
              >
                <div className="appThumbnail group aspect-[1.33] w-full">
                  <div className="appThumbnailInner relative h-full w-full transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
                    <Image
                      className="appThumbnailImg-front absolute h-full w-full object-cover"
                      src={app.frontImage}
                      alt={`${app.title} preview`}
                      fill
                      sizes="(max-width: 768px) 83vw, (max-width: 1024px) 40vw, 27vw"
                    />

                    <Image
                      className="appThumbnailImg-back absolute h-full w-full object-cover"
                      src={app.backImage}
                      alt={`${app.title} application screenshot`}
                      fill
                      sizes="(max-width: 768px) 83vw, (max-width: 1024px) 40vw, 27vw"
                    />
                  </div>
                </div>
              </a>
            )}

            <div className="appInfo flex grow flex-col justify-between p-4 text-white">
              <h3 className="appTitle py-3 text-lg text-white sm:text-2xl lg:text-xl xl:text-2xl">
                {app.title}
              </h3>

              <p className="appDescription grow text-base text-white sm:text-xl lg:text-lg xl:text-xl">
                {app.description}
              </p>

              <p className="mt-4 text-sm italic text-gray-400 sm:text-base">
                {app.techStack}
              </p>

              {app.linkUrl && (
                <a
                  className="mt-4 inline-block rounded border border-white px-4 py-2 text-center text-base text-white transition hover:bg-white hover:text-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-lg"
                  href={app.linkUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackProjectClick(app.title, "cta")}
                >
                  {app.linkText}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Applications;
