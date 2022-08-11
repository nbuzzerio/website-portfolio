function Applications(props) {
  return (
    <section className="sectionContainer w-full bg-primary-dark flex justify-center flex-col items-center">
        <h2 className="py-10 text-5xl text-black underline lg:text-7xl">
          About Me
        </h2>
        <div className="applications-wrapper grid lg:flex grid-cols-1 justify-center py-12 gap-20 w-8/12 lg:w-10/12 2xl:w-8/12">
          <div className="app border rounded-xl border-primary-darker bg-primary-darker/80 overflow-hidden w-full flex flex-col">
            <div className="appThumbnail group w-full aspect-[1.33]">
              <div className="appThumbnailInner group-hover:[transform:rotateY(180deg)] w-full h-full relative overflow-x-visible transition duration-700 ">
                <img
                  className="appThumbnailImg-front absolute w-full h-full lto"
                  src="https://nb-portfolio-images.s3.amazonaws.com/moonbaselogo.jpg"
                ></img>
                <img
                  className="appThumbnailImg-back absolute w-full h-full [transform:rotateY(180deg)]"
                  src="https://nb-portfolio-images.s3.amazonaws.com/ltomoonbase.gif"
                ></img>
              </div>
            </div>
            <div className="appInfo flex flex-col p-4">
              <h4 className="appTitle text-white py-3 text-lg sm:text-2xl lg:text-xl xl:text-2xl">LTO Moonbase Website</h4>
              <p className="appDescription indent-8 text-white text-base sm:text-xl lg:text-lg xl:text-xl">
                As the full stack developer for the cryptocurrency leasing node,
                LTO Moonbase, I created this website using React and NodeJS from
                the ground up. I worked closely with the business team to design
                the site based on the company&apos;s current needs with scalability
                in mind for new features down the road. I also worked on scripts
                for node itself as well as automated payments to stakeholders.
              </p>
              <a
                className="appLinks py-3 text-white relative hover:font-bold text-base sm:text-xl lg:text-lg xl:text-xl"
                rel="noreferrer"
                target="_blank"
                href="https://ltomoonbase.club/"
              >
                Visit Site
              </a>
            </div>
          </div>
          <div className="app border rounded-xl border-primary-darker bg-primary-darker/80 overflow-hidden w-full flex flex-col">
            <div className="appThumbnail group w-full aspect-[1.33]">
              <div className="appThumbnailInner group-hover:[transform:rotateY(180deg)] w-full h-full relative overflow-x-visible transition duration-700 ">
                <img
                  id="ytsoThumbnail-front"
                  className="appThumbnailImg-front absolute w-full h-full"
                  src="https://nb-portfolio-images.s3.amazonaws.com/ytso.jpeg"
                ></img>
                <img
                  id="ytsoThumbnail-back"
                  className="appThumbnailImg-back absolute w-full h-full [transform:rotateY(180deg)]"
                  src="https://nb-portfolio-images.s3.amazonaws.com/YTSOSite-min.png"
                  alt="GIF of the App"
                ></img>
              </div>
            </div>
            <div className="appInfo flex flex-col p-4 text-white">
              <h4 className="appTitle text-white py-3 text-lg sm:text-2xl lg:text-xl xl:text-2xl">YouTube Subscription Organizer</h4>
              <p className="appDescription indent-8 text-white text-base sm:text-xl lg:text-lg xl:text-xl">
                Have too many YouTube subs? Can&apos;t find the genre you&apos;re looking
                for or miss out on a video not placed in your feed? YTSO is here
                to solve that. This application lets you log into YouTube using
                Google OAuth and fetches your subs for you. Then you can neatly
                drop them into categories letting you see uploads only for what
                you are in the mood to watch all sorted by release date!
              </p>
              <a className="appLinks py-3 text-white relative hover:font-bold text-base sm:text-xl lg:text-lg xl:text-xl" href="https://nickbuzzerio.com/ytso/">
                Try it out
              </a>
            </div>
          </div>

          <div className="app border rounded-xl border-primary-darker bg-primary-darker/80 overflow-hidden w-full flex flex-col">
            <div className="appThumbnail group w-full aspect-[1.33]">
              <div className="appThumbnailInner group-hover:[transform:rotateY(180deg)] w-full h-full relative overflow-x-visible transition duration-700 ">
                <img
                  className="appThumbnailImg-front absolute w-full h-full"
                  src="https://nb-portfolio-images.s3.amazonaws.com/chessApp.jpeg"
                ></img>
                <img
                  className="appThumbnailImg-back absolute w-full h-full [transform:rotateY(180deg)]"
                  src="/images/chess-site.jpg"
                ></img>
              </div>
            </div>
            <div className="appInfo flex flex-col p-4 text-white">
              <h4 className="appTitle text-white py-3 text-lg sm:text-2xl lg:text-xl xl:text-2xl">Multiplayer Chess</h4>
              <p className="appDescription indent-8 text-white text-base sm:text-xl lg:text-lg xl:text-xl">
                Want to play a quick game of Chess over Zoom with a friend
                without all the hassle? Multiplayer Chess does just that. No
                need to create an account, remember passwords, or send invite
                codes 10 times to grandpa! Just go to the site, join the same
                room, and play as if it were at the kitchen table. Even see your
                opponent moving the pieces in real time with the help of
                Socket.io.
              </p>
              <a className="appLinks py-3 text-white relative hover:font-bold text-base sm:text-xl lg:text-lg xl:text-xl" href="https://nickbuzzerio.com/chess/">
                Play a Game
              </a>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Applications;
