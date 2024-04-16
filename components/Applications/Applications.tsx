function Applications(props) {
  return (
    <section className="sectionContainer flex w-full flex-col items-center justify-center bg-primary-dark">
      <h2 className="py-10 text-5xl text-black underline lg:text-7xl">
        Applications
      </h2>
      <div className="applications-wrapper grid w-8/12 grid-cols-1 justify-center gap-10 py-12 lg:flex lg:w-10/12 lg:flex-wrap 2xl:w-8/12">
        <div className="app flex w-full basis-[calc((100%-80px)/3)] flex-col overflow-hidden rounded-xl border border-primary-darker bg-primary-darker/80">
          <div className="appThumbnail group aspect-[1.33] w-full">
            <div className="appThumbnailInner relative h-full w-full overflow-x-visible transition duration-700 group-hover:[transform:rotateY(180deg)] ">
              <img
                className="appThumbnailImg-front lto absolute h-full w-full"
                src="https://nb-portfolio-images.s3.amazonaws.com/moonbaselogo.jpg"
              ></img>
              <img
                className="appThumbnailImg-back absolute h-full w-full [transform:rotateY(180deg)]"
                src="https://nb-portfolio-images.s3.amazonaws.com/ltomoonbase.gif"
              ></img>
            </div>
          </div>
          <div className="appInfo flex grow flex-col justify-between p-4">
            <h4 className="appTitle py-3 text-lg text-white sm:text-2xl lg:text-xl xl:text-2xl">
              LTO Moonbase Website
            </h4>
            <p className="appDescription grow indent-8 text-base text-white sm:text-xl lg:text-lg xl:text-xl">
              As the full stack developer for the cryptocurrency leasing node,
              LTO Moonbase, I created this website using React and NodeJS from
              the ground up. I worked closely with the business team to design
              the site based on the company&apos;s current needs with
              scalability in mind for new features down the road. I also worked
              on scripts for node itself as well as automated payments to
              stakeholders.
            </p>
            <a
              className="appLinks relative py-3 text-base text-white hover:underline sm:text-xl lg:text-lg xl:text-xl"
              rel="noreferrer"
              target="_blank"
              href="https://ltomoonbase.club/"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className="app flex w-full basis-[calc((100%-80px)/3)] flex-col overflow-hidden rounded-xl border border-primary-darker bg-primary-darker/80">
          <div className="appThumbnail group aspect-[1.33] w-full">
            <div className="appThumbnailInner relative h-full w-full overflow-x-visible transition duration-700 group-hover:[transform:rotateY(180deg)] ">
              <img
                className="appThumbnailImg-front absolute h-full w-full"
                src="https://nb-portfolio-images.s3.amazonaws.com/chessApp.jpeg"
              ></img>
              <img
                className="appThumbnailImg-back absolute h-full w-full [transform:rotateY(180deg)]"
                src="/images/chess-site.jpg"
              ></img>
            </div>
          </div>
          <div className="appInfo flex grow flex-col justify-between p-4 text-white">
            <h4 className="appTitle py-3 text-lg text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Game Catalog
            </h4>
            <p className="appDescription grow indent-8 text-base text-white sm:text-xl lg:text-lg xl:text-xl">
              Search through a catalog of games by name, platform, or category.
              Filter by release date, popularity, and much more! This
              application enables you to discover extensive information about a
              wide variety of video games through a seamless and user-friendly
              interface. Discover what fellow gamers and critics think about the
              games you&apos;re interested in, view screenshots, read synopses,
              and perhaps even watch trailers!
            </p>
            <a
              className="appLinks relative py-3 text-base text-white hover:underline sm:text-xl lg:text-lg xl:text-xl"
              rel="noreferrer"
              target="_blank"
              href="https://nickbuzzerio.com/games-catalog/"
            >
              Find a Game
            </a>
          </div>
        </div>
        <div className="app flex w-full basis-[calc((100%-80px)/3)] flex-col overflow-hidden rounded-xl border border-primary-darker bg-primary-darker/80">
          <div className="appThumbnail group aspect-[1.33] w-full">
            <div className="appThumbnailInner relative h-full w-full overflow-x-visible transition duration-700 group-hover:[transform:rotateY(180deg)] ">
              <img
                className="appThumbnailImg-front absolute h-full w-full"
                src="https://nb-portfolio-images.s3.amazonaws.com/chessApp.jpeg"
              ></img>
              <img
                className="appThumbnailImg-back absolute h-full w-full [transform:rotateY(180deg)]"
                src="/images/chess-site.jpg"
              ></img>
            </div>
          </div>
          <div className="appInfo flex grow flex-col justify-between p-4 text-white">
            <h4 className="appTitle py-3 text-lg text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Algorithm Showcase
            </h4>
            <p className="appDescription grow indent-8 text-base text-white sm:text-xl lg:text-lg xl:text-xl">
              Small collection of software engineering interview prompts. Each
              one is accompanied by a solution I have written to solve the
              prompt, including a breakdown of the Time and Space complexities
              of the solution in Big O notation. Come check out some of my
              solutions and maybe try out some of these coding challenges
              yourself!
            </p>
            <a
              className="appLinks relative py-3 text-base text-white hover:underline sm:text-xl lg:text-lg xl:text-xl"
              rel="noreferrer"
              target="_blank"
              href="https://nickbuzzerio.com/chess/"
            >
              Check my work!
            </a>
          </div>
        </div>

        {/* row 2 */}
        <div className="app flex w-full basis-[calc((100%-80px)/3)] flex-col overflow-hidden rounded-xl border border-primary-darker bg-primary-darker/80">
          <div className="appThumbnail group aspect-[1.33] w-full">
            <div className="appThumbnailInner relative h-full w-full overflow-x-visible transition duration-700 group-hover:[transform:rotateY(180deg)] ">
              <img
                id="ytsoThumbnail-front"
                className="appThumbnailImg-front absolute h-full w-full"
                src="https://nb-portfolio-images.s3.amazonaws.com/ytso.jpeg"
              ></img>
              <img
                id="ytsoThumbnail-back"
                className="appThumbnailImg-back absolute h-full w-full [transform:rotateY(180deg)]"
                src="https://nb-portfolio-images.s3.amazonaws.com/YTSOSite-min.png"
                alt="GIF of the App"
              ></img>
            </div>
          </div>
          <div className="appInfo flex grow flex-col justify-between p-4 text-white">
            <h4 className="appTitle py-3 text-lg text-white sm:text-2xl lg:text-xl xl:text-2xl">
              YouTube Subscription Organizer
            </h4>
            <p className="appDescription grow indent-8 text-base text-white sm:text-xl lg:text-lg xl:text-xl">
              Have too many YouTube subs? Can&apos;t find the genre you&apos;re
              looking for or miss out on a video not placed in your feed? YTSO
              is here to solve that. This application lets you log into YouTube
              using Google OAuth and fetches your subs for you. Then you can
              neatly drop them into categories letting you see uploads only for
              what you are in the mood to watch all sorted by release date!
            </p>
            {/* <a className="appLinks py-3 text-white relative hover:underline text-base sm:text-xl lg:text-lg xl:text-xl" 
            href="https://nickbuzzerio.com/ytso/">
                Try it out
              </a> */}
          </div>
        </div>

        <div className="app flex w-full basis-[calc((100%-80px)/3)] flex-col overflow-hidden rounded-xl border border-primary-darker bg-primary-darker/80">
          <div className="appThumbnail group aspect-[1.33] w-full">
            <div className="appThumbnailInner relative h-full w-full overflow-x-visible transition duration-700 group-hover:[transform:rotateY(180deg)] ">
              <img
                className="appThumbnailImg-front absolute h-full w-full"
                src="https://nb-portfolio-images.s3.amazonaws.com/chessApp.jpeg"
              ></img>
              <img
                className="appThumbnailImg-back absolute h-full w-full [transform:rotateY(180deg)]"
                src="/images/chess-site.jpg"
              ></img>
            </div>
          </div>
          <div className="appInfo flex grow flex-col justify-between p-4 text-white">
            <h4 className="appTitle py-3 text-lg text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Multiplayer Chess
            </h4>
            <p className="appDescription grow indent-8 text-base text-white sm:text-xl lg:text-lg xl:text-xl">
              Want to play a quick game of Chess over Zoom with a friend without
              all the hassle? Multiplayer Chess does just that. No need to
              create an account, remember passwords, or send invite codes 10
              times to grandpa! Just go to the site, join the same room, and
              play as if it were at the kitchen table. Even see your opponent
              moving the pieces in real time with the help of Socket.io.
            </p>
            <a
              className="appLinks relative py-3 text-base text-white hover:underline sm:text-xl lg:text-lg xl:text-xl"
              rel="noreferrer"
              target="_blank"
              href="https://nickbuzzerio.com/chess/"
            >
              Play a Game
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Applications;
