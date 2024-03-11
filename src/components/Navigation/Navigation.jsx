import React,{ useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isFixed = window.scrollY > 0; // You can adjust this value based on your design
      setIsHeaderFixed(isFixed);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.pathname == "/") {
      const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  
      handleScrollToTop();
    }
    
  }, [location]);


  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

  return (
    <>
      {location.pathname != "/" &&
              <div id="header-nav" className="bg-white fixed z-50 top-0 left-0 right-0 shadow">
              <div className="container mx-auto px-5">
                <div className="flex py-6 justify-between items-center space-x-2">
                  <div className="w-96 h-14 flex-col justify-center items-start gap-2.5 inline-flex z-40">
                    <div className="justify-start items-center gap-2 inline-flex">
                    <HashLink
                        scroll={el => scrollWithOffset(el)}
                        to="/"
                        className="justify-start items-center gap-2 inline-flex"
                      >
                        <img
                         //  className="w-60 h-14"
                          src="/seal.png"
                          alt="seal"
                          width={123}
                          height={56}
                        />
                        <img
                           // className="w-40 h-14"
                          src="/seal2.png"
                          alt="seal2"
                          width={165}
                          height={56}
                        />
                      </HashLink>
                    </div>
                  </div>
                  <div className="justify-start items-center gap-2 flex">
                    <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
                       <HashLink
                        scroll={el => scrollWithOffset(el)}
                        to="/"
                        className="text-gray-500 text-sm font-semibold leading-none"
                      >
                        Home
                      </HashLink>
                    </div>
                    <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
                      <HashLink
                        scroll={el => scrollWithOffset(el)}
                        to="/employers"
                        className="text-gray-500 text-sm font-semibold leading-none"
                      >
                        Employers
                      </HashLink>
                    </div>
                    <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
                    <HashLink
                        scroll={el => scrollWithOffset(el)}
                        to="/job-seekers"
                        className="text-gray-500 text-sm font-semibold leading-none"
                      >
                        Job Seekers
                      </HashLink>
                    </div>
                    <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
                    <HashLink
                        scroll={el => scrollWithOffset(el)}
                        to="/job-openings"
                        className="text-gray-500 text-sm font-semibold leading-none"
                      >
                        Job Openings
                      </HashLink>
                    </div>
                    <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
                    <  HashLink
                        scroll={el => scrollWithOffset(el)}
                        to="/about"
                        className="text-gray-500 text-sm font-semibold leading-none"
                      >
                        About Us
                      </HashLink>
                    </div>
                    <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
                      <HashLink
                      scroll={el => scrollWithOffset(el)}
                        to="/#testimonials"
                        className="text-gray-500 text-sm font-semibold leading-none"
                      >
                        Testimonials
                      </HashLink>
                    </div>
                    <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
                      <HashLink
                        scroll={el => scrollWithOffset(el)}
                        to="/#branches"
                        className="text-gray-500 text-sm font-semibold leading-none"
                      >
                        Branches
                      </HashLink>
                    </div>
                    <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
                      <HashLink
                        scroll={el => scrollWithOffset(el)}
                        to="/#contacts"
                        className="text-gray-500 text-sm font-semibold leading-none"
                      >
                        Contact Us
                      </HashLink>
                    </div>
                    <div className="justify-start items-start gap-2 flex">
                    <HashLink
                        scroll={el => scrollWithOffset(el)}
                        to="/"
                      >  
                      <div className="bg-stone-400 rounded justify-center items-center flex" style={{cursor: "pointer"}}>
                        <div className="self-stretch px-4 py-3 bg-stone-400 justify-center items-center gap-2 flex">
                          <button
                            type="button"
                            className="text-white text-xs font-semibold leading-none"
                          >
                            LOG IN
                          </button>
                        </div>
                      </div>
                        </HashLink>
     
                        <HashLink
                        to="/sign-up"
                      >  
                      <div className="rounded border border-stone-400 justify-center items-center flex" style={{cursor: "pointer"}}>
                        <div className="px-4 py-3 justify-start items-center gap-2 flex">
                          <button
                            type="button"
                            className="text-stone-400 text-xs font-semibold leading-none"
                          >
                            SIGN UP
                          </button>
                        </div>
                      </div>
                     </HashLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
     
      }

      {location.pathname == "/" &&
              <div id="header-nav" className={(isHeaderFixed == true) ? "bg-white fixed z-50 top-0 left-0 right-0 shadow" : "fixed z-50 top-0 left-0 right-0"}>
              <div className="container mx-auto px-5">
                <div className="flex py-6 justify-between items-center space-x-2">
                  <div className="w-96 h-14 flex-col justify-center items-start gap-2.5 inline-flex z-40">
                    <div className="justify-start items-center gap-2 inline-flex">
                    <HashLink
                        scroll={el => scrollWithOffset(el)}
                        to="/"
                        className="justify-start items-center gap-2 inline-flex"
                      >
                        <img
                         //  className="w-60 h-14"
                          src="/seal.png"
                          alt="seal"
                          width={123}
                          height={56}
                        />
                        <img
                           // className="w-40 h-14"
                          src="/seal2.png"
                          alt="seal2"
                          width={165}
                          height={56}
                        />
                      </HashLink>
                    </div>
                  </div>
                  <div className="justify-start items-center gap-2 flex">
                    <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
                       <HashLink
                        scroll={el => scrollWithOffset(el)}
                        to="/"
                        className={(location.pathname == "/" && isHeaderFixed == true) ? "text-gray-500 text-sm font-semibold leading-none" : "text-slate-100 text-sm font-semibold leading-none"}
                      >
                        Home
                      </HashLink>
                    </div>
                    <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
                      <HashLink
                        scroll={el => scrollWithOffset(el)}
                        to="/employers"
                        className={(location.pathname == "/" && isHeaderFixed == true) ? "text-gray-500 text-sm font-semibold leading-none" : "text-slate-100 text-sm font-semibold leading-none"}
                      >
                        Employers
                      </HashLink>
                    </div>
                    <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
                    <HashLink
                        scroll={el => scrollWithOffset(el)}
                        to="/job-seekers"
                        className={(location.pathname == "/" && isHeaderFixed == true) ? "text-gray-500 text-sm font-semibold leading-none" : "text-slate-100 text-sm font-semibold leading-none"}
                      >
                        Job Seekers
                      </HashLink>
                    </div>
                    <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
                    <HashLink
                        scroll={el => scrollWithOffset(el)}
                        to="/job-openings"
                        className={(location.pathname == "/" && isHeaderFixed == true) ? "text-gray-500 text-sm font-semibold leading-none" : "text-slate-100 text-sm font-semibold leading-none"}
                      >
                        Job Openings
                      </HashLink>
                    </div>
                    <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
                    <  HashLink
                        scroll={el => scrollWithOffset(el)}
                        to="/about"
                        className={(location.pathname == "/" && isHeaderFixed == true) ? "text-gray-500 text-sm font-semibold leading-none" : "text-slate-100 text-sm font-semibold leading-none"}
                      >
                        About Us
                      </HashLink>
                    </div>
                    <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
                      <HashLink
                      scroll={el => scrollWithOffset(el)}
                        to="/#testimonials"
                        className={(location.pathname == "/" && isHeaderFixed == true) ? "text-gray-500 text-sm font-semibold leading-none" : "text-slate-100 text-sm font-semibold leading-none"}
                      >
                        Testimonials
                      </HashLink>
                    </div>
                    <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
                      <HashLink
                        scroll={el => scrollWithOffset(el)}
                        to="/#branches"
                        className={(location.pathname == "/" && isHeaderFixed == true) ? "text-gray-500 text-sm font-semibold leading-none" : "text-slate-100 text-sm font-semibold leading-none"}
                      >
                        Branches
                      </HashLink>
                    </div>
                    <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
                      <HashLink
                        scroll={el => scrollWithOffset(el)}
                        to="/#contacts"
                        className={(location.pathname == "/" && isHeaderFixed == true) ? "text-gray-500 text-sm font-semibold leading-none" : "text-slate-100 text-sm font-semibold leading-none"}
                      >
                        Contact Us
                      </HashLink>
                    </div>
                    <div className="justify-start items-start gap-2 flex">
                    <HashLink
                        scroll={el => scrollWithOffset(el)}
                        to="/"
                      >  
                      <div className="bg-stone-400 rounded justify-center items-center flex" style={{cursor: "pointer"}}>
                        <div className="self-stretch px-4 py-3 bg-stone-400 justify-center items-center gap-2 flex">
                          <button
                            type="button"
                            className="text-white text-xs font-semibold leading-none"
                          >
                            LOG IN
                          </button>
                        </div>
                      </div>
                        </HashLink>
     
                        <HashLink
                        to="/sign-up"
                      >  
                      <div className="rounded border border-stone-400 justify-center items-center flex" style={{cursor: "pointer"}}>
                        <div className="px-4 py-3 justify-start items-center gap-2 flex">
                          <button
                            type="button"
                            className="text-stone-400 text-xs font-semibold leading-none"
                          >
                            SIGN UP
                          </button>
                        </div>
                      </div>
                     </HashLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
     
      }



    </>
  );
};

export default Navigation;
