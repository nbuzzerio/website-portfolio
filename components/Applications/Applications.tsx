import Image from "next/image";
import applicationCards from "../../data/application_cards.json";

function Applications() {
  return (
    <section
      className="sectionContainer flex w-full flex-col items-center justify-center bg-primary-dark"
      id="projects"
    >
      <h2 className="py-10 text-5xl text-white underline lg:text-7xl">
        Applications
      </h2>

      <div className="flex w-10/12 flex-wrap justify-center gap-10 py-12 2xl:w-8/12">
        {applicationCards.map((app, index) => (
          <div
            key={index}
            className="app flex w-full flex-col overflow-hidden rounded-xl border border-primary-darker bg-primary-darker/80 transition-transform duration-300 ease-in-out hover:shadow-lg sm:basis-[100%] md:basis-[48%] lg:basis-[calc((100%-80px)/3)]"
          >
            {app.linkUrl && (
              <a
                className=""
                rel="noreferrer"
                target="_blank"
                href={app.linkUrl}
              >
                {/* Thumbnail */}
                <div className="appThumbnail group aspect-[1.33] w-full">
                  <div className="appThumbnailInner relative h-full w-full overflow-x-visible transition duration-700 group-hover:[transform:rotateY(180deg)]">
                    <Image
                      className="appThumbnailImg-front absolute h-full w-full object-cover"
                      src={app.frontImage}
                      alt={`${app.title} front`}
                      fill
                      priority={false}
                    />

                    <Image
                      className="appThumbnailImg-back absolute h-full w-full object-cover [transform:rotateY(180deg)]"
                      src={app.backImage}
                      alt={`${app.title} back`}
                      fill
                      priority={false}
                    />
                  </div>
                </div>
              </a>
            )}

            {/* Info Section */}
            <div className="appInfo flex grow flex-col justify-between p-4 text-white">
              <h3 className="appTitle py-3 text-lg text-white sm:text-2xl lg:text-xl xl:text-2xl">
                {app.title}
              </h3>

              <p className="appDescription grow text-base text-white sm:text-xl lg:text-lg xl:text-xl">
                {app.description}
              </p>

              <p className="mt-2 text-sm italic text-gray-400 sm:text-base">
                {app.techStack}
              </p>

              {app.linkUrl && (
                <a
                  className="mt-3 inline-block rounded border border-white px-4 py-2 text-center text-base text-white transition hover:bg-white hover:text-primary-dark sm:text-lg"
                  rel="noreferrer"
                  target="_blank"
                  href={app.linkUrl}
                >
                  {app.linkText}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Applications;
