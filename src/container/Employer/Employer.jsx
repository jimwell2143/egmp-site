import React, { useEffect, useState} from "react";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

const Employer = () => {
  const location = useLocation();

  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/js/navbar.js';  // Adjust the path based on your project structure
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means it runs only once 

  const openFacebookUrl = () => {
    const url = 'https://www.facebook.com/egmpinternationalcorp';
    
    // Open a new window/tab with the specified URL
    window.open(url, '_blank');
  };
  const openLinkedinUrl = () => {
    const url = ' https://ph.linkedin.com/company/egmpmain';
    
    // Open a new window/tab with the specified URL
    window.open(url, '_blank');
  };

  const testimonials = [
    "Partnering with EGMP has been a game-changer for our overseas hiring. Their team doesn't just find talent; they understand our culture and needs. It's like having an extension of our HR team globally. Highly recommend EGMP for their dedication and professionalism.",
    "We have partnered with EGMP for several recruitment projects, and each time, they have exceeded our expectations. Their team's commitment to understanding our unique requirements and delivering qualified candidates on time has been instrumental in our success. Trusting EGMP for our staffing needs has proven to be a great decision.",
    "I manage international recruitment, and partnering with EGMP has been a breath of fresh air. They don't just fill positions; they help build teams. EGMP understands the global job market intricacies, making them our go-to partner for efficient and reliable recruitment solutions.",
    "In EGMP, we found a partner dedicated to excellence. Their active approach in understanding our staffing needs and delivering qualified candidates promptly has streamlined our recruitment process. EGMP consistently demonstrates a commitment to ensuring the success of our international workforce.",
    "Choosing EGMP for our overseas recruitment needs has been a strategic decision for our organization. Their team's responsiveness, attention to detail, and ability to navigate complex international hiring landscapes set them apart. We look forward to continuing our successful partnership with EGMP for decades to come."
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleNext = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1
    );
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = - 80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}


  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleScrollToTop();
  }, []);


  
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const isFixed = window.scrollY > 0; // You can adjust this value based on your design
      setIsHeaderFixed(isFixed);
      var myElement = document.getElementById('main-nav');

      if (isFixed == false) {
       
        myElement.style.backgroundColor = 'transparent';
      } else {
        myElement.style.backgroundColor = 'white';

      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>

<nav id="main-nav"
      style={{zIndex: 10}}
        className={(isHeaderFixed == true) ? "bg-white flex flex-col sm:flex-row flex-wrap md:items-center px-4 md:px-5 lg:px-16 py-6 justify-between fixed top-0 z-9999 w-full" : "flex flex-col sm:flex-row flex-wrap md:items-center px-4 md:px-5 lg:px-16 py-6 justify-between fixed top-0 z-20 w-full"}>


        <div class="flex items-center justify-between sm:justify-around gap-x-2 text-white">
          <a href="#!" class="py-1 flex items-center text-2xl">
            <HashLink
              to="/"
              className="justify-start items-center gap-2 inline-flex"
            >
              <img
                src="/seal-med.png"
                alt="seal"
                width={250}
                height={56}
              />
            </HashLink>
          </a>


          <button class="sm:hidden cursor-pointer flex flex-col justify-center gap-y-1" id="hamburger" aria-label="menu">
            <div class="w-6 h-1 rounded-lg bar duration-300" style={{background: "#b8a972"}}></div>
            <div class="w-4 h-1 rounded-lg  bar duration-300" style={{background: "#b8a972"}}></div>
            <div class="w-6 h-1 rounded-lg  bar duration-300" style={{background: "#b8a972"}}></div>
          </button>

        </div>


        <ul class="hidden md:flex text-gray-400 justify-end items-center gap-x-2 gap-y-5 tracking-wide mt-5 sm:mt-0"
          id="links">
          <li class="mb-5 sm:mb-0">
            <div className="px-1 py-0.5 rounded">
              <HashLink
                scroll={el => scrollWithOffset(el)}
                to="/"
                className="nav-menu text-gray-500 text-sm font-semibold leading-none"
                style={{color: isHeaderFixed == true ? "": "white"}}
              >
                Home
              </HashLink>
            </div>
          </li>
          <li class="mb-5 sm:mb-0">
            <div className="px-1 py-0.5 rounded">
              <HashLink
                scroll={el => scrollWithOffset(el)}
                to="/employers"
                className="nav-menu text-gray-500 text-sm font-semibold leading-none"
                style={{color: isHeaderFixed == true ? "": "white"}}
              >
                Employers
              </HashLink>
            </div>
          </li>
          <li class="mb-5 sm:mb-0">
            <div className="px-1 py-0.5 rounded">
              <HashLink
                scroll={el => scrollWithOffset(el)}
                to="/job-seekers"
                className="nav-menu text-gray-500 text-sm font-semibold leading-none"
                style={{color: isHeaderFixed == true ? "": "white"}}
              >
                Job Seekers
              </HashLink>
            </div>
          </li>
          <li class="mb-5 sm:mb-0">
            <div className="px-1 py-0.5 rounded">
              <HashLink
                scroll={el => scrollWithOffset(el)}
                to="/job-openings"
                className="nav-menu text-gray-500 text-sm font-semibold leading-none"
                style={{color: isHeaderFixed == true ? "": "white"}}
              >
                Job Openings
              </HashLink>
            </div>
          </li>
          <li class="mb-5 sm:mb-0">
            <div className="px-1 py-0.5 rounded">
              <  HashLink
                scroll={el => scrollWithOffset(el)}
                to="/about"
                className="nav-menu text-gray-500 text-sm font-semibold leading-none"
                style={{color: isHeaderFixed == true ? "": "white"}}
              >
                About Us
              </HashLink>
            </div>
          </li>
          <li class="mb-5 sm:mb-0">
            <div className="px-1 py-0.5 rounded">
              <HashLink
                scroll={el => scrollWithOffset(el)}
                to="/#testimonials"
                className="nav-menu text-gray-500 text-sm font-semibold leading-none"
                style={{color: isHeaderFixed == true ? "": "white"}}
              >
                Testimonials
              </HashLink>
            </div>
          </li>
          <li class="mb-5 sm:mb-0">
            <div className="px-1 py-0.5 rounded">
              <HashLink
                scroll={el => scrollWithOffset(el)}
                to="/#branches"
                className="nav-menu text-gray-500 text-sm font-semibold leading-none"
                style={{color: isHeaderFixed == true ? "": "white"}}
              >
                Branches
              </HashLink>
            </div>
          </li>

          <li class="mb-5 sm:mb-0">
            <div className="px-1 py-0.5 rounded">
              <HashLink
                scroll={el => scrollWithOffset(el)}
                to="/#contacts"
                className="nav-menu text-gray-500 text-sm font-semibold leading-none"
                style={{color: isHeaderFixed == true ? "": "white"}}
              >
                Contact Us
              </HashLink>
            </div>
          </li>
          <li class="mb-5 sm:mb-0">
            <div className="px-1 py-0.5 rounded">
              <div className="justify-start items-start gap-2 flex">
                <HashLink
                  scroll={el => scrollWithOffset(el)}
                  to="/"
                >
                  <div className="bg-stone-400 rounded justify-center items-center flex" style={{ cursor: "pointer" }}>
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
                  <div className="rounded border border-stone-400 justify-center items-center flex" style={{ cursor: "pointer" }}>
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
          </li>
        </ul>
      </nav>
      <main>





<section className="relative">
<img
            src="/employer-header.png"
            alt="about-header"
            width={1512}
            height={700}
            className="top-0 w-full object-cover"
          />

<div className="bg-white" id="button-1">
            <div class="container mx-auto p-10" style={{width: "50%"}}>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="flex justify-center">
                  <HashLink
                   scroll={el => scrollWithOffset(el)}
                   to="#button-1"
                 >
                <div className="flex bg-stone-400 rounded-lg flex-col justify-start items-start">
                  <div className="flex px-6 py-2 bg-stone-100 rounded justify-start items-start gap-2" style={{width: "155px", justifyContent: "center"}}>
                    <div className="text-stone-400 text-xs font-semibold leading-none">
                      Guide in Recruiting
                    </div>
                  </div>
                </div>
                </HashLink>
              </div>
              <div class="flex justify-center">
              <HashLink
                   scroll={el => scrollWithOffset(el)}
                   to="#button-2"
                 >
                <div className="bg-stone-400 rounded-lg flex-col justify-start items-start inline-flex">
                  <div className="px-6 py-2 bg-stone-100 rounded justify-start items-start gap-2 inline-flex" style={{width: "155px", justifyContent: "center"}}>
                    <div className="text-stone-400 text-xs font-semibold leading-none">
                      Client Testimonials
                    </div>
                  </div>
                </div>
                </HashLink>
              </div>
              <div class="flex justify-center">
              <HashLink
                   scroll={el => scrollWithOffset(el)}
                   to="#button-3"
                 >
                <div className="bg-stone-400 rounded-lg flex-col justify-start items-start inline-flex">
                  <div className="px-6 py-2 bg-stone-100 rounded justify-start items-start gap-2 inline-flex" style={{width: "155px", justifyContent: "center"}}>
                    <div className="text-stone-400 text-xs font-semibold leading-none">
                      Partners
                    </div>
                  </div>
                </div>
                </HashLink>
              </div>
              <div class="flex justify-center">
              <HashLink
                   scroll={el => scrollWithOffset(el)}
                   to="#button-4"
                 >
                <div className="bg-stone-400 rounded-lg flex-col justify-start items-start inline-flex">
                  <div className="px-6 py-2 bg-stone-100 rounded justify-start items-start gap-2 inline-flex" style={{width: "155px", justifyContent: "center"}}>
                    <div className="text-stone-400 text-xs font-semibold leading-none">
                      Specialties
                    </div>
                  </div>
                </div>
                </HashLink>
              </div>
            </div>
          </div>
          </div>
      
          <div className="bg-white">
            <div className="container mx-auto">
              <div className="pb-10 flex-col justify-center items-center gap-10 inline-flex">
                <div className="self-stretch flex-col justify-start items-center gap-1 flex">
                  <div className="self-stretch text-center text-zinc-700 text-3xl font-semibold leading-10">
                    Guide in Recruiting in the Philippines
                  </div>
                  <div className="w-14 h-2 bg-stone-400" />
                </div>
                <div className="self-stretch p-6 bg-white rounded-2xl flex-col justify-start items-start gap-6 flex">
                  <div className="justify-start items-center gap-6 inline-flex">
                    <div className="w-8 h-8 bg-gradient-to-b from-white to-orange-200 rounded-lg justify-center items-center flex">
                      <div className="text-orange-300 text-sm font-semibold leading-none">
                        1
                      </div>
                    </div>
                    <div className="text-zinc-700 text-xl font-semibold leading-normal">
                      Confirmation of Business
                    </div>
                  </div>
                  <div className="self-stretch text-gray-500 text-sm font-normal leading-normal">
                      Firstly, finalize a business agreement with EGMP; you can inquire through our  “Contact Us” Page, or through our email (inquire@egmpjobs.com) .

                  </div>
                  <div className="justify-start items-center gap-6 inline-flex">
                    <div className="w-8 h-8 bg-gradient-to-b from-white to-orange-200 rounded-lg justify-center items-center flex">
                      <div className="text-orange-300 text-sm font-semibold leading-none">
                        2
                      </div>
                    </div>
                    <div className="text-zinc-700 text-xl font-semibold leading-normal">
                      Visit the EGMP Website
                    </div>
                  </div>
                  <div className="self-stretch text-gray-500 text-sm font-normal leading-normal">
                     Navigate to the Homepage and click the "I am an Employer" section.

                  </div>
                  <div className="justify-start items-center gap-6 inline-flex">
                    <div className="w-8 h-8 bg-gradient-to-b from-white to-orange-200 rounded-lg justify-center items-center flex">
                      <div className="text-orange-300 text-sm font-semibold leading-none">
                        3
                      </div>
                    </div>
                    <div className="text-zinc-700 text-xl font-semibold leading-normal">
                      Log-In

                    </div>
                  </div>
                  <div className="self-stretch text-gray-500 text-sm font-normal leading-normal">
                  Enter the Email Address and Password ,which will be provided by EGMP if and only if the two parties' business agreement is finalized.
                  </div>
                  <div className="justify-start items-center gap-6 inline-flex">
                    <div className="w-8 h-8 bg-gradient-to-b from-white to-orange-200 rounded-lg justify-center items-center flex">
                      <div className="text-orange-300 text-sm font-semibold leading-none">
                        4
                      </div>
                    </div>
                    <div className="text-zinc-700 text-xl font-semibold leading-normal">
                      Profile Setup
                    </div>
                  </div>
                  <div className="self-stretch text-gray-500 text-sm font-normal leading-normal">
                    After logging in, located at the top right, by pressing “Company Profile”, Employers can Complete their company profile by adding relevant information in general, manpower details, insurance,  documents, certification of details, and password.
                  </div>

                  <div className="justify-start items-center gap-6 inline-flex">
                    <div className="w-8 h-8 bg-gradient-to-b from-white to-orange-200 rounded-lg justify-center items-center flex">
                      <div className="text-orange-300 text-sm font-semibold leading-none">
                        5
                      </div>
                    </div>
                    <div className="text-zinc-700 text-xl font-semibold leading-normal">
                    Check Your Dashboard
                    </div>
                  </div>
                  <div className="self-stretch text-gray-500 text-sm font-normal leading-normal">
                    After logging in, located at the top right press, by pressing “Dashboard”, Employers can Check the specific status of their Job Order(s), as well as the specific status of their applicants. 

                  </div>
                  <div className="justify-start items-center gap-6 inline-flex">
                    <div className="w-8 h-8 bg-gradient-to-b from-white to-orange-200 rounded-lg justify-center items-center flex">
                      <div className="text-orange-300 text-sm font-semibold leading-none">
                        6
                      </div>
                    </div>
                    <div className="text-zinc-700 text-xl font-semibold leading-normal">
                    Communication with EGMP
                    </div>
                  </div>
                  <div className="self-stretch text-gray-500 text-sm font-normal leading-normal">
                  After logging in, located at the top right , by pressing the Message Box,  Employers  are able to communicate with EGMP regarding updates, concerns, schedule interviews, and gather additional information, etc.


                  </div>
                </div>
              </div>
            </div>
          </div>
</section>

<section id="button-2" >
  <div className="bg-gray-100 h-full">
    <div className="behind-us container mx-auto px-10">

      <div className="py-48 flex-col justify-center items-center gap-10 inline-flex" style={{ width: "100%" }}>
        <div className="self-stretch flex-col justify-start items-center gap-1 flex">
          <div className="self-stretch text-center text-gray-500 text-xs font-bold uppercase leading-none tracking-wide">
            CLIENT TESTIMONIALS
          </div>
          <div className="self-stretch text-center text-zinc-700 text-2xl font-semibold leading-loose">
          Find Out Why Our Clients Trust Us!
          </div>
          <div className="w-14 h-2 bg-stone-400" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-1 gap-10 mt-4">

          <div class="md:col-span-1">

            <div className="flex-col justify-end items-center flex">
              <div className="qoute self-stretch  justify-start items-start inline-flex" style={{ paddingLeft: "80px" }}>
                <img
                  src="/double-qoute.png"
                  alt="about-header"
                  width={48}
                  height={48}
                  className="relative origin-top-left"
                />
              </div>

              <div className="self-stretch flex-col justify-start items-center flex overflow-hidden">
                <div class="container mx-auto flex items-center justify-between p-4">
                  <div className="left-btn bg-stone-400 rounded justify-center items-center flex cursor-pointer" style={{ marginRight: "30px" }} onClick={handlePrev}>
                    <div className="p-3 bg-stone-400 rounded justify-start items-start gap-2 flex">
                      <div className="w-4 h-4 relative">
                        <img
                          src="/jobseekers/icon-left.png"
                          alt="icon-left"
                          width={16}
                          height={16}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="self-stretch flex-col justify-start items-center flex overflow-hidden" style={{ borderRadius: "10px" }}>
                    <div
                      className="self-stretch bg-white flex"
                      style={{
                        display: 'flex',
                        width: `${testimonials.length * 100}%`,
                        transform: `translateX(${-currentTestimonialIndex * (100 / testimonials.length)}%)`,
                        transition: 'transform 0.5s ease',
                      }}
                    >
                      {testimonials.map((testimonial, index) => (
                        <div key={index} style={{ width: `${100 / testimonials.length}%` }}>
                          <div className="p-10 flex-col justify-start items-center gap-6 flex">
                            <div className="self-stretch text-justify text-zinc-700 text-sm font-normal leading-7">
                              {testimonial}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="right-btn bg-stone-400 rounded justify-center items-center flex cursor-pointer" style={{ marginLeft: "30px" }} onClick={handleNext}>
                    <div className="p-3 bg-stone-400 rounded justify-start items-start gap-2 flex">
                      <div className="w-4 h-4 relative">
                        <img
                          src="/jobseekers/icon-right.png"
                          alt="icon-right"
                          width={16}
                          height={16}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>                 
</section>

{/* <div className="bg-white" id="button-3">
  <div className="container mx-auto w-full">
    <div className="flex bg-gradient-to-r from-orange-300 via-amber-300 to-orange-300 justify-center items-center py-10 md:py-28 px-4 md:px-20 gap-10">
      <div className="bg-stone-400 rounded justify-center items-center hidden md:flex">
        <div className="p-3 bg-stone-400 rounded justify-start items-start gap-2 flex">
          <div className="w-4 h-4 relative">
            <img
              src="/jobseekers/icon-left.png"
              alt="icon-left"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>

      <div className="bg-stone-400 rounded justify-center items-center hidden md:flex">
        <div className="p-3 bg-stone-400 rounded justify-start items-start gap-2 flex">
          <div className="w-4 h-4 relative">
            <img
              src="/jobseekers/icon-right.png"
              alt="icon-right"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}

<div className="bg-white" id="button-3">
  <div className="mx-auto w-full">
    <div className="flex bg-gradient-to-r from-orange-300 via-amber-300 to-orange-300 justify-center items-center py-10 md:py-28 px-4 md:px-20 gap-10">
      <div className="bg-stone-400 rounded justify-center items-center hidden md:flex">
        <div className="p-3 bg-stone-400 rounded justify-start items-start gap-2 flex">
          <div className="w-4 h-4 relative">
            <img
              src="/jobseekers/icon-left.png"
              alt="icon-left"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
      <div className="p-5 md:flex-grow md:shrink md:basis-0 flex flex-col justify-start items-center gap-10 w-full">
        <div className="self-stretch flex flex-col justify-start items-center gap-1 w-full">
          <div className="self-stretch text-center text-white text-xs font-bold uppercase leading-none tracking-wide">
            OUR PARTNERS
          </div>
          <div className="self-stretch text-center text-white text-2xl font-semibold leading-loose">
            Companies We Have Worked With
          </div>
          <div className="w-14 h-2 bg-stone-100" />
        </div>
        <div className="md:self-stretch md:justify-center md:items-start gap-10 md:inline-flex w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {/* Card 1 */}
            <div className="flex-col justify-start items-center gap-6">
              <div className="h-48 p-2 bg-white rounded-lg flex flex-col justify-center items-center gap-2">
                <img
                  src="/jobseekers/jawa-human.jpg"
                  alt="icon-right"
                  width={230}
                  height={130}
                />
              </div>
              <div className="text-center text-white text-sm font-semibold leading-none">
                Jawa Human Resources
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex-col justify-start items-center gap-6">
              <div className="h-48 p-2 bg-white rounded-lg flex flex-col justify-center items-center gap-2">
                <img
                  src="/jobseekers/alfalak-human.png"
                  alt="icon-right"
                  width={121}
                  height={140}
                />
              </div>
              <div className="text-center text-white text-sm font-semibold leading-none">
                Alfalak Human Resources
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex-col justify-start items-center gap-6">
              <div className="h-48 p-2 bg-white rounded-lg flex flex-col justify-center items-center gap-2">
                <img
                  src="/jobseekers/mueen-human.png"
                  alt="icon-right"
                  width={140}
                  height={140}
                />
              </div>
              <div className="text-center text-white text-sm font-semibold leading-none">
                Mueen Human Resources
              </div>
            </div>
            {/* Card 4 */}
            <div className="flex-col justify-start items-center gap-6">
              <div className="h-48 p-2 bg-white rounded-lg flex flex-col justify-center items-center gap-2">
                <img
                  src="/jobseekers/tamdeen-entertainment.png"
                  alt="icon-right"
                  width={230}
                  height={130}
                />
              </div>
              <div className="text-center text-white text-sm font-semibold leading-none">
                Tamdeen Entertainment
              </div>
            </div>

            <div className="flex-col justify-start items-center gap-6">
              <div className="h-48 p-2 bg-white rounded-lg flex flex-col justify-center items-center gap-2">
                <img
                  src="/jobseekers/maharah-human.png"
                  alt="icon-right"
                  width={230}
                  height={130}
                />
              </div>
              <div className="text-center text-white text-sm font-semibold leading-none">
              Maharah Human Resources
              </div>
            </div>

            <div className="flex-col justify-start items-center gap-6">
              <div className="h-48 p-2 bg-white rounded-lg flex flex-col justify-center items-center gap-2">
                <img
                  src="/jobseekers/al-muzaini.png"
                  alt="icon-right"
                  width={230}
                  height={130}
                />
              </div>
              <div className="text-center text-white text-sm font-semibold leading-none">
              Al Muzaini Exchange
              </div>
            </div>

            <div className="flex-col justify-start items-center gap-6">
              <div className="h-48 p-2 bg-white rounded-lg flex flex-col justify-center items-center gap-2">
                <img
                    src="/jobseekers/jal-human.png"
                  alt="icon-right"
                  width={230}
                  height={130}
                />
              </div>
              <div className="text-center text-white text-sm font-semibold leading-none">
              Jal Human Resources
              </div>
            </div>

            <div className="flex-col justify-start items-center gap-6">
              <div className="h-48 p-2 bg-white rounded-lg flex flex-col justify-center items-center gap-2">
                <img
                      src="/jobseekers/mc-carren.jpg"
                  alt="icon-right"
                  width={230}
                  height={130}
                />
              </div>
              <div className="text-center text-white text-sm font-semibold leading-none">
              McCarren Meat
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-stone-400 rounded justify-center items-center hidden md:flex">
        <div className="p-3 bg-stone-400 rounded justify-start items-start gap-2 flex">
          <div className="w-4 h-4 relative">
            <img
              src="/jobseekers/icon-right.png"
              alt="icon-right"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="bg-white" id="button-4">
  <div className="mx-auto py-10 px-4 md:px-20">
    <div className="justify-start items-center gap-10 inline-flex">
      <div className="p-5 flex-grow flex shrink-0 basis-0 flex-col justify-start items-center gap-10">
      <div className="self-stretch flex flex-col justify-start items-center gap-1 w-full">
          <div className="self-stretch text-center text-gray-500 text-xs font-bold uppercase leading-none tracking-wide">
            OUR SPECIALTIES
          </div>
          <div className="self-stretch text-center text-zinc-700 text-2xl font-semibold leading-loose">
            E-GMP offers these Jobs to Talents
          </div>
          <div className="w-14 h-2 bg-stone-400" />
        </div>
        <div className="justify-start items-start gap-4 inline-flex">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="h-64 relative bg-white rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-700 rounded" />
              <img
                src="/jobseekers/nurses.png"
                alt="Nurses"
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 w-full text-center text-white text-xl font-semibold p-4">
                Nurses
              </div>
            </div>
            <div className="h-64 relative bg-white rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-700 rounded" />
              <img
                src="/jobseekers/it-Operation.png"
                alt="IT Operations"
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 w-full text-center text-white text-xl font-semibold p-4">
                IT Operations
              </div>
            </div>
            <div className="h-64 relative bg-white rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-700 rounded" />
              <img
                src="/jobseekers/cleaners.png"
                alt="Cleaners"
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 w-full text-center text-white text-xl font-semibold p-4">
                Cleaners
              </div>
            </div>
            <div className="h-64 relative bg-white rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-700 rounded" />
              <img
                src="/jobseekers/waiters.png"
                alt="Waiters/Waitresses"
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 w-full text-center text-white text-xl font-semibold p-4">
                Waiters/Waitresses
              </div>
            </div>
            <div className="h-64 relative bg-white rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-700 rounded" />
              <img
                src="/jobseekers/construction.png"
                alt="Constructions"
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 w-full text-center text-white text-xl font-semibold p-4">
                Constructions
              </div>
            </div>
            <div className="h-64 relative bg-white rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-700 rounded" />
              <img
                src="/jobseekers/cooks.png"
                alt="Cooks"
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 w-full text-center text-white text-xl font-semibold p-4">
                Cooks
              </div>
            </div>
            <div className="h-64 relative bg-white rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-700 rounded" />
              <img
                src="/jobseekers/factory.png"
                alt="Factory Workers"
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 w-full text-center text-white text-xl font-semibold p-4">
                Factory Workers
              </div>
            </div>
            <div className="h-64 relative bg-white rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-700 rounded" />
              <img
                src="/jobseekers/bartender.png"
                alt="Bartenders"
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 w-full text-center text-white text-xl font-semibold p-4">
                Bartenders
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<footer class="bg-neutral-500 pb-3 pt-10 lg:pt-10 text-white">

  <div class="flex flex-wrap justify-around gap-y-16 gap-x-7 mb-16">

     <div class="flex flex-wrap gap-y-8 sm:grid grid-cols-4">
    <div class="mx-10 lg:mx-16">
    <div class="text-left">
    <img
        src="/seal-med.png"
        alt="seal"
        width={250}
        height={56}
      />
      <div class="flex flex-wrap gap-x-7  gap-y-5 mt-5">
      <img
        style={{cursor: "pointer"}}
        onClick={openFacebookUrl}
        src="/facebook.png"
        alt="seal"
        width={24}
        height={24}
        className="bg-gray-500 rounded-sm"
      />
      <img
        style={{cursor: "pointer"}}
        onClick={openLinkedinUrl}
        src="/linkedin.png"
        alt="seal2"
        width={24}
        height={24}
        className="bg-gray-500 rounded-sm"
      />

      </div>
    </div>

      </div>
      <div class="mx-10 lg:mx-16">
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
      <div className="self-stretch text-white text-base font-semibold leading-none">
        Head Office
      </div>
      <div className="self-stretch h-24 flex-col justify-start items-start gap-2 flex">
        <div   className="self-stretch justify-start items-start gap-2 inline-flex">
          <div className="w-5 h-5 relative">
            <img
              src="/egmp/icon-location.png"
              alt="location-marker"
              width={20}
              height={20}
            />
          </div>
          <div className="grow shrink basis-0 text-white text-sm font-normal leading-tight">
            3rd Floor, MJL Building, 1175 Chino Roces Avenue, Makati
            City
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-2 inline-flex">
          <div className="w-5 h-5 relative">
            <img
              src="/egmp/icon-phone.png"
              alt="location-marker"
              width={20}
              height={20}
            />
          </div>
          <div className="grow shrink basis-0 text-white text-sm font-normal leading-tight">
            +63 927 802 1252
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-2 inline-flex">
          <div className="w-5 h-5 relative">
            <img
              src="/egmp/icon-mail.png"
              alt="location-marker"
              width={20}
              height={20}
            />
          </div>
          <div className="grow shrink basis-0 text-white text-sm font-normal leading-tight">
            info.main@egmp.com
          </div>
        </div>
      </div>
    </div>
      </div>

      <div class="mx-10 lg:mx-16">
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
      <div className="self-stretch text-white text-base font-semibold leading-none">
        Cebu Branch
      </div>
      <div className="self-stretch h-24 flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch justify-start items-start gap-2 inline-flex">
          <div className="w-5 h-5 relative">
            <img
              src="/egmp/icon-location.png"
              alt="location-marker"
              width={20}
              height={20}
            />
          </div>
          <div className="grow shrink basis-0 text-white text-sm font-normal leading-tight">
            Room 301, 3rd Floor LDM Building, Legaspi St, Cor. MJ Cuenco
            Avenue, Cebu City
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-2 inline-flex">
          <div className="w-5 h-5 relative">
            <img
              src="/egmp/icon-phone.png"
              alt="location-marker"
              width={20}
              height={20}
            />
          </div>
          <div className="grow shrink basis-0 text-white text-sm font-normal leading-tight">
            +63 975 382 0865
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-2 inline-flex">
          <div className="w-5 h-5 relative">
            <img
              src="/egmp/icon-mail.png"
              alt="location-marker"
              width={20}
              height={20}
            />
          </div>
          <div className="grow shrink basis-0 text-white text-sm font-normal leading-tight">
            cebu@egmpjobs.com
          </div>
        </div>
      </div>
    </div>
      </div>
      <div class="mx-10 lg:mx-16">
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
      <div className="self-stretch text-white text-base font-semibold leading-none">
        Davao Branch
      </div>
      <div className="self-stretch h-24 flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch justify-start items-start gap-2 inline-flex">
          <div className="w-5 h-5 relative">
            <img
              src="/egmp/icon-location.png"
              alt="location-marker"
              width={20}
              height={20}
            />
          </div>
          <div className="grow shrink basis-0 text-white text-sm font-normal leading-tight">
            Door 2 Nicholas Bldg, Elpidio Quirino Ave, Poblacion
            District, Davao City
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-2 inline-flex">
          <div className="w-5 h-5 relative">
            <img
              src="/egmp/icon-phone.png"
              alt="location-marker"
              width={20}
              height={20}
            />
          </div>
          <div className="grow shrink basis-0 text-white text-sm font-normal leading-tight">
            +63 960 317 4450
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-2 inline-flex">
          <div className="w-5 h-5 relative">
            <img
              src="/egmp/icon-mail.png"
              alt="location-marker"
              width={20}
              height={20}
            />
          </div>
          <div className="grow shrink basis-0 text-white text-sm font-normal leading-tight">
            davao@egmpjobs.com
          </div>
        </div>
      </div>
    </div>
      </div>

    </div>

  </div>

  <div className="self-stretch h-px opacity-20 bg-neutral-200 mx-16"/>


  <div class="flex flex-wrap justify-around p-8">


<div className="self-stretch justify-start items-center gap-10 inline-flex" style={{width: "100%"}}>


<div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4" style={{marginLeft: "30px"}}>
          <div class="md:col-span-1">
           
  <div className="grow shrink basis-0">
    <span className="text-white text-xs font-normal leading-none">
      Copyright 2022 E-GMP International Corporation
    </span>
    <span className="text-white text-xs font-normal leading-none">
      .
    </span>
    <span className="text-white text-xs font-normal leading-none">
      {" "}
      All Rights Reserved
    </span>
  </div>
          </div>

          {/* <div class="md:col-span-1" style={{marginTop: "4px", width: "100%"}}>

          <div className="grow shrink basis-0 h-5 justify-end  gap-6 flex">
    <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
      <div className="text-white text-xs font-normal leading-none">
        Home
      </div>
    </div>
    <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
      <div className="text-white text-xs font-normal leading-none">
        Employers
      </div>
    </div>
    <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
      <div className="text-white text-xs font-normal leading-none">
        Jobseekers
      </div>
    </div>
    <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
      <div className="text-white text-xs font-normal leading-none">
        About Us
      </div>
    </div>
    <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
      <div className="text-white text-xs font-normal leading-none">
        Contact Us
      </div>
    </div>
  </div>

          </div> */}
        </div>

</div>
  
</div>
{/* 
  <div class="h-1 w-full bg-gradient-to-r from-primary-color to-green-500 "></div>

  <p class="text-center mt-8 mb-4 font-semibold">Template Raven - Copyright &copy; <span id="year"></span>. All
    Rights
    Reserved</p>
*/}

  

</footer>


</main>

    </>
  );
};

export default Employer;
