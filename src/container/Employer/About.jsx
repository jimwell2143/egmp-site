import React, { useEffect, useState} from "react";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

const About = () => {


 
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
                src="/about-header.png"
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
                    Our Story
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
                    Why Choose Us?
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
                    Vision & Mission
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
                    Core Values
                    </div>
                  </div>
                </div>
                </HashLink>
              </div>
            </div>
          </div>
          </div>
          <div className="bg-white  mx-auto px-4 md:px-20 pb-12 md:pb-28">
          <div className="flex flex-col md:flex-row px-4 md:px-20 pb-8 md:pb-24 pt-5 justify-center items-center gap-10">
            <div className="flex-grow flex flex-col justify-center items-start gap-6" style={{width: "50%"}}>
              <div className="self-stretch h-12 flex flex-col justify-start items-start gap-1">
                <div className="self-stretch text-zinc-700 text-3xl font-semibold leading-10">
                  Our Story
                </div>
                <div className="w-14 h-2 bg-stone-400" />
              </div>
              <div className="self-stretch text-justify text-zinc-700 text-sm font-normal leading-7">
                Founded in 2003 by President Alexander Tan, EGMP International Corporation has established itself as a trusted and reputable licensed recruitment agency from the Philippines. With more than 20 years of experience in the industry, EGMP is an well recognized recruitment powerhouse that has grown from serving Southeast Asian markets to expanding its dominant presence in the Middle East. Now, we are setting our sights on Europe, the United States, and Canada, aiming to replicate our success and deliver exceptional recruitment services across borders.
              </div>
            </div>
            <div className="md:w-96 px-30 h-80 p-10 bg-brand-base rounded-full flex justify-center items-center" sty>
              <div className="w-full h-full bg-white rounded-full border-8 border-white flex justify-center items-center">
                <img
                  src="/egmp-image.png"
                  alt="about-header"
                  className="max-w-full max-h-full rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="button-2" className="bg-white  mx-auto px-4 md:px-20 pb-12 md:pb-28">
          <div className="flex flex-col md:flex-row px-4 md:px-20 pb-8 md:pb-24 pt-5 justify-center items-center gap-10">
          <div className="md:w-96 px-30 h-80 p-10 bg-brand-base rounded-full flex justify-center items-center" sty>
              <div className="w-full h-full bg-white rounded-full border-8 border-white flex justify-center items-center">
                <img
                  src="/egmp-employee.png"
                  alt="about-header"
                  className="max-w-full max-h-full rounded-full"
                />
              </div>
            </div>
            <div className="flex-grow flex flex-col justify-center items-start gap-6" style={{width: "50%"}}>
              <div className="self-stretch h-12 flex flex-col justify-start items-start gap-1">
                <div className="self-stretch text-zinc-700 text-3xl font-semibold leading-10">
                Why Choose Us?
                </div>
                <div className="w-14 h-2 bg-stone-400" />
              </div>
              <div className="self-stretch text-justify text-zinc-700 text-sm font-normal leading-7">
              {`Over the course of our 20 years of operation, we take immense
                  pride in facilitating the deployment of approximately 30,000
                  workers to date, connecting them with quality jobs that
                  directly contribute to the improvement of their respective
                  families' lives. Our unwavering commitment to excellence has
                  garnered recognition within the industry, placing our CEO
                  among the esteemed leaders as the Vice President of PEACEME
                  (Philippine Employment Agency for Corporate Employers in the
                  Middle East).`}
                  <br /> Furthermore, we have solidified our position as early
                  innovators in the field of business processes. By introducing
                  automation, we have not only benefited 200 other recruitment
                  agencies in the Philippines but also elevated the overall
                  recruitment process within our industry. This accomplishment
                  showcases our dedication to staying at the forefront of
                  advancements and continuously enhancing our services.
              </div>
            </div>
           
          </div>
        </div>


</section>

<div className="bg-white mx-auto px-4 md:px-20 pb-12 md:pb-28" id="button-3">
  <div className="px-4 md:px-20 pb-8 md:pb-24 flex flex-col justify-center items-center gap-10">
    <div className="self-stretch h-12 flex flex-col justify-start items-center gap-1">
      <div className="self-stretch text-center text-zinc-700 text-3xl font-semibold leading-10">
        Vision & Mission
      </div>
      <div className="w-14 h-2 bg-stone-400" />
    </div>
    <div className="self-stretch flex flex-col justify-start items-start gap-10">
      <div className="self-stretch p-6 bg-white rounded-2xl flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="w-28 h-28 px-3.5 py-3.5 rounded-2xl flex justify-center items-center">
          <div className="w-24 h-24 relative flex justify-start items-start">
            <img
              src="/arrow-icon.png"
              alt="about-header"
              className="max-w-full max-h-full"
            />
          </div>
        </div>
        <div className="flex-grow flex flex-col justify-start items-start gap-2">
          <div className="self-stretch text-stone-400 text-xl font-semibold leading-7">
            Our Mission
          </div>
          <div className="self-stretch text-zinc-700 text-sm font-normal leading-7">
            Our Mission is to make life better - one job, one family at a time.
            <br />
            To achieve this mission, we ensure we provide quality employment that
            lives up to its promise while simultaneously connecting families to
            valuable livelihood programs within the Philippine business community as
            an alternative potential source that may lead the worker and his family
            to another path of opportunity as entrepreneur.
          </div>
        </div>
      </div>
      <div className="self-stretch p-6 bg-white rounded-2xl flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="w-28 h-28 relative rounded-2xl flex justify-center items-center">
          <img
            src="/eye-icon.png"
            alt="about-header"
            className="max-w-full max-h-full"
          />
        </div>
        <div className="flex-grow flex flex-col justify-start items-start gap-2">
          <div className="self-stretch text-stone-400 text-xl font-semibold leading-7">
            Our Vision
          </div>
          <div className="self-stretch text-zinc-700 text-sm font-normal leading-7">
            Our vision is to be the premier recruitment gateway in the Philippines,
            known for our dedication to excellence that exemplifies the best of what
            Philippine recruitment has to offer.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="bg-white mx-auto px-4 md:px-20 pb-12 md:pb-28" id="button-4">
  <div className="px-4 md:px-20 pb-8 md:pb-24 flex flex-col justify-center items-center gap-10">
    <div className="self-stretch h-12 flex flex-col justify-start items-center gap-1">
      <div className="self-stretch text-center text-zinc-700 text-3xl font-semibold leading-10">
        Core Values
      </div>
      <div className="w-14 h-2 bg-stone-400" />
    </div>
    <div className="self-stretch text-center text-zinc-700 text-sm font-normal leading-none">
      At EGMP, we hold a set of core values that shape our approach
      and guide our actions.
    </div>
    <div className="self-stretch justify-start items-start gap-10 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-auto p-6 bg-white rounded-2xl flex flex-col justify-start items-start gap-6">
        <div className="w-20 h-20 px-3.5 pt-3.5 pb-4 bg-gradient-to-b from-white to-amber-300 rounded-lg flex justify-center items-center">
          <div className="w-14 h-12 relative"></div>
        </div>
        <div className="flex-grow flex flex-col justify-start items-start gap-2">
          <div className="self-stretch text-stone-400 text-xs font-bold uppercase leading-none tracking-wide">
            ETHICAL, RULE BASED PRACTICES
          </div>
          <div className="self-stretch text-justify text-zinc-700 text-sm font-normal leading-7">
            We uphold the highest ethical standards in all our
            endeavors. Integrity, honesty, and respect for all
            stakeholders are the foundation of our operations. We
            prioritize fairness, transparency, and compliance with
            laws and regulations, ensuring that our interactions and
            decisions are guided accordingly.
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-auto p-6 bg-white rounded-2xl flex flex-col justify-start items-start gap-6">
        <div className="w-20 h-20 px-3.5 pt-3 pb-2.5 bg-gradient-to-b from-white to-amber-300 rounded-lg flex justify-center items-center">
          <div className="w-14 h-14 relative"></div>
        </div>
        <div className="flex-grow flex flex-col justify-start items-start gap-2">
          <div className="self-stretch text-stone-400 text-xs font-bold uppercase leading-none tracking-wide">
            QUALITY JOBS THAT UPLIFT LIVES
          </div>
          <div className="self-stretch text-justify text-zinc-700 text-sm font-normal leading-7">
            We are committed to offering job opportunities that have a
            positive impact on the lives of jobseekers. We understand
            that employment is not only a means of income but also a
            crucial factor in personal growth and fulfillment. By
            connecting candidates with quality employment that lives
            up to its promise.
          </div>
        </div>
      </div>
    </div>

    <div className="self-stretch justify-start items-start gap-10 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-auto p-6 bg-white rounded-2xl flex flex-col justify-start items-start gap-6">
        <div className="w-20 h-20 px-3.5 pt-3.5 pb-4 bg-gradient-to-b from-white to-amber-300 rounded-lg flex justify-center items-center">
          <div className="w-14 h-12 relative"></div>
        </div>
        <div className="flex-grow flex flex-col justify-start items-start gap-2">
          <div className="self-stretch text-stone-400 text-xs font-bold uppercase leading-none tracking-wide">
          PROFESSIONALISM
          </div>
          <div className="self-stretch text-justify text-zinc-700 text-sm font-normal leading-7">
          We maintain a high level of professionalism in all our
                      interactions. Our team members are knowledgeable,
                      courteous, and dedicated to providing the best possible
                      service. We treat all individuals with respect, act with
                      integrity, and maintain confidentiality to build trust and
                      establish long-lasting relationships.
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-auto p-6 bg-white rounded-2xl flex flex-col justify-start items-start gap-6">
        <div className="w-20 h-20 px-3.5 pt-3 pb-2.5 bg-gradient-to-b from-white to-amber-300 rounded-lg flex justify-center items-center">
          <div className="w-14 h-14 relative"></div>
        </div>
        <div className="flex-grow flex flex-col justify-start items-start gap-2">
          <div className="self-stretch text-stone-400 text-xs font-bold uppercase leading-none tracking-wide">
          SERVICE TO THE COMMUNITY
          </div>
          <div className="self-stretch text-justify text-zinc-700 text-sm font-normal leading-7">
          To live up to our mission, we do not just focus on
                      providing quality jobs but also reach out to the workers
                      families by connecting them to business opportunities in
                      the hope of introducing entrepreneurship as an alternative
                      livelihood.
          </div>
        </div>
      </div>
    </div>


    <div className="self-stretch justify-start items-start gap-10 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-auto p-6 bg-white rounded-2xl flex flex-col justify-start items-start gap-6">
        <div className="w-20 h-20 px-3.5 pt-3.5 pb-4 bg-gradient-to-b from-white to-amber-300 rounded-lg flex justify-center items-center">
          <div className="w-14 h-12 relative"></div>
        </div>
        <div className="flex-grow flex flex-col justify-start items-start gap-2">
          <div className="self-stretch text-stone-400 text-xs font-bold uppercase leading-none tracking-wide">
          GETTING THE JOB DONE
          </div>
          <div className="self-stretch text-justify text-zinc-700 text-sm font-normal leading-7">
          We take pride in getting the job done that meet or exceed
                      client expectations. This is the bottom line. We
                      understand the importance of timely and efficient
                      delivery, and we are dedicated to meeting our commitments.
                      By closely collaborating with our clients and maintaining
                      open communication, we ensure that their recruitment needs
                      are understood and fulfilled to their satisfaction.
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-auto p-6 bg-white rounded-2xl flex flex-col justify-start items-start gap-6">
        <div className="w-20 h-20 px-3.5 pt-3 pb-2.5 bg-gradient-to-b from-white to-amber-300 rounded-lg flex justify-center items-center">
          <div className="w-14 h-14 relative"></div>
        </div>
        <div className="flex-grow flex flex-col justify-start items-start gap-2">
          <div className="self-stretch text-stone-400 text-xs font-bold uppercase leading-none tracking-wide">
          EXCELLENCE IN BUSINESS
          </div>
          <div className="self-stretch text-justify text-zinc-700 text-sm font-normal leading-7">
          We pursue excellence in all aspects of our operations.
                      From our customer service to our recruitment processes, we
                      strive to exemplify the best practices in the industry.
                      Through continuous improvement, technological innovation,
                      and a commitment to delivering exceptional results, we aim
                      to set new standards of excellence in the recruitment
                      sector.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="bg-white mx-auto px-4 md:px-20 pb-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:pb-5">
    <div className="flex justify-center md:justify-end items-center md:px-10">
      <img
        src="/1image.png"
        alt="about-header"
        width={185}
        height={356}
        className="md:ml-auto"
      />
    </div>
    <div className="flex flex-col justify-start items-start md:pl-10">
      <div className="pb-10 text-center md:text-left text-stone-400 text-5xl font-normal leading-10">
        20+ Years in the Recruitment
        <br />
        Business and Still Going
      </div>
      <div className="pb-10 text-center md:text-left text-stone-400 text-4xl font-normal leading-10">
        The Filipino's choice...
      </div>
      <div className="pb-10 text-center md:text-left text-stone-500 text-3xl font-normal leading-10">
        Changing one Filipino's life at a time,
        <br />
        Your Success, is Our Business...
      </div>
    </div>
  </div>
  <div className="h-1 md:left-0 md:top-10 bottom-5 bg-stone-400" />
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

export default About;
