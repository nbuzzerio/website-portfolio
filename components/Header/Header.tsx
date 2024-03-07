import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  const [dropDown, setDropDown] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    document
      .querySelector(".menu-btn-wrapper")
      .addEventListener("click", (e) => {
        document.querySelector(".menu-btn").classList.add("clicked");
      });

    if (dropDown && !loaded) setLoaded(true);
  }, [dropDown]);

  const handleDropDown = () => {
    if (!dropDown) {
      document.body.style.height = "100vh";
      document.body.style.width = "100%";
    } else {
      document.querySelector(".menu-btn").classList.remove("clicked");
    }

    setDropDown(!dropDown);
  };

  return (
    <>
      <div className="navbar absolute z-50 flex h-[80px] w-full justify-center lg:h-[140px]">
        <nav
          className={`wrapper max-w-bg absolute z-10 mx-auto flex h-[80px] w-full items-center justify-between bg-gray-500 lg:h-[140px]`}
        >
          <div className="logo-wrapper nav-item z-10 hidden px-10 lg:flex">
            <Link href="/">
              <a href="/">
                <img
                  className="h-7 cursor-pointer px-2 lg:h-10"
                  src="/images/logo.svg"
                  alt="logo image"
                />
              </a>
            </Link>
          </div>

          <div className="home-wrapper flex justify-center px-10 lg:absolute lg:w-full">
            <Link href="/">
              <a
                title="home"
                className="text-4xl font-extrabold uppercase text-black md:text-6xl lg:text-7xl"
              >
                TEXT LOGO
              </a>
            </Link>
          </div>

          <div className="right-header-wrapper nav-item z-10 flex items-center px-10">
            <div
              className="menu-btn-wrapper flex items-center"
              onClick={handleDropDown}
            >
              <div className="hidden text-2xl uppercase tracking-[0.07rem] text-black sm:block lg:text-3xl"></div>
              <div className="menu-btn flex w-[40px] cursor-pointer flex-col sm:w-[50px]">
                <span className="line1 w-1/2"></span>
                <span className="line2 w-full"></span>
                <span className="line3 w-9/12"></span>
              </div>
            </div>
          </div>
          {loaded && (
            <div
              className={`dropdown-wrapper ${
                dropDown ? "animate-open" : "animate-close"
              } hd:right-[calc((100vw-1937px)/2)] fixed top-0 flex h-full w-full justify-end`}
            >
              <div
                className="dropdown-overlay w-0 lg:w-7/12"
                onClick={handleDropDown}
              ></div>
              <ul
                className={
                  "flex h-full w-full flex-col justify-evenly overflow-hidden bg-gray-500 bg-cover px-20 py-10 text-right lg:w-[56%] xl:w-5/12"
                }
              >
                <li className="pb-10 text-xl uppercase tracking-[.2rem] text-green-400 lg:text-3xl xs:text-2xl">
                  Menu
                </li>
                <li className="uppercase tracking-[.2rem]">
                  <Link href="/">
                    <a
                      className="text-2xl text-green-400 hover:text-red-700 lg:text-4xl xs:text-3xl"
                      onClick={handleDropDown}
                    >
                      Home
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Header;
