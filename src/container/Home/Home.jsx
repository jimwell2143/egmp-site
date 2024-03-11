import React, { useEffect, useState, useRef } from 'react';
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import { Formik, Form, useFormikContext, Field } from "formik"
import { useAction } from "../../hooks";
import { useHistory } from 'react-router-dom';
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from 'react-toastify';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

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

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const location = useLocation();

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
  const handleRecaptchaChange = (value) => {
    console.log("reCAPTCHA value:", value);
    // Do something with the reCAPTCHA value
  };

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

  const [hasScrolled, setHasScrolled] = useState(false);

  const history = useHistory()
  const login = useAction('login.login')
  const forgotPassword = useAction('login.forgotPassword')
  const sendMessage = useAction('login.sendMessage')
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

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
                id='nav-menu'
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

        <section className="login-bg h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background.png')" }}>

          {/* <img src="/background.png" 
        width={1512}
        height={1008}
        className="absolute top-0 w-full h-screen object-cover"
        style={{zIndex: -9999}}
      /> */}


          <div class="login-containers container mx-auto" style={{ paddingRight: "5%", paddingLeft: "5%", paddingTop: "5%" }}>

            <div class="login-panel grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

              <div class="md:col-span-1 flex justify-center items-center h-full">

                <div className="flex flex-col justify-center items-center w-full text-white text-4xl font-bold" style={{ width: "90%" }}>
                  <div className="w-full text-white text-base text-left font-semibold leading-none">
                    E-GMP INTERNATIONAL CORPORATION
                  </div>
                  <div style={{ fontSize: "32px" }}>
                    Your trusted gateway to responsible, result-driven recruitment
                    in the Philippines
                  </div>
                </div>

              </div>
              {!showForgotPassword &&
              <div class="md:col-span-1 flex justify-center items-center h-full" >
                <Formik
                  initialValues={{
                    email: "",
                    password: ""
                  }}
                  onSubmit={async (values) => {
                    login(values, ()=> {
                      history.push({
                        pathname: '/profile'
                    })
                    })
                  }}
                >
                  {(formikProps) => (
                    <Form style={{ height: '80%' }}>
                      <form className="flex justify-center items-center">
                        <div className="login-title flex p-7 bg-white rounded-lg flex-col justify-start items-start gap-10">
                          <div className="self-stretch text-center text-zinc-700 text-2xl font-semibold leading-loose">
                            Login to E-GMP
                          </div>
                          <div className="self-stretch justify-center items-start gap-6 inline-flex">
                            {/* <Link href="/" scroll={false}> */}

                            <div className="w-36 flex-col justify-start items-center gap-2 inline-flex" style={{ cursor: "pointer" }}>
                              <div className="px-2 py-0.5 justify-start items-center gap-2 inline-flex">
                                <label className="text-stone-400 text-sm font-semibold leading-none">
                                  I am a Job Seeker
                                </label>
                              </div>
                              <div className="self-stretch h-0.5 bg-stone-400" />
                            </div>
                            {/* </Link> */}
                            {/* <Link href="/employer-login" scroll={false}> */}
                            <div className="w-36 flex-col justify-start items-center gap-2 inline-flex" style={{ cursor: "pointer" }}>
                              <div className="px-2 py-0.5 justify-start items-center gap-2 inline-flex">
                                <label className="text-gray-500 text-sm font-semibold leading-none">
                                  I am an Employer
                                </label>
                              </div>
                              <div className="self-stretch h-0.5 opacity-0 bg-stone-400" />
                            </div>
                            {/* </Link> */}
                          </div>
                          <div className="self-stretch h-40 flex-col justify-start items-start gap-4 flex">
                            <div className="self-stretch h-16 flex-col justify-start items-start gap-1.5 flex">
                              <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                                <div className="justify-start items-center flex">
                                  <label className="text-zinc-400 text-xs font-semibold leading-none">
                                    Email Address
                                  </label>
                                </div>
                              </div>

                              <Input
                                type="text"
                                name="email"
                                className="self-stretch h-10 p-3 bg-white rounded border border-neutral-200 justify-start items-start gap-2 inline-flex"
                                required
                              />

                            </div>
                            <div className="self-stretch h-20 flex-col justify-start items-start gap-1.5 flex">
                              <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                                <div className="justify-start items-center flex">
                                  <label className="text-zinc-400 text-xs font-semibold leading-none">
                                    Password
                                  </label>
                                </div>
                              </div>


                              <Input
                                type="password"
                                name="password"
                                className="self-stretch h-10 p-3 bg-white rounded border border-neutral-200 justify-start items-start gap-2 inline-flex"
                                required
                              />


                              <div className="self-stretch text-right text-stone-400 text-xs font-semibold leading-none" onClick={() => setShowForgotPassword(true)}>
                                <button type="button">Forgot Password?</button>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch bg-stone-400 rounded justify-center items-center inline-flex">
                            <div className="grow shrink basis-0 self-stretch px-4 py-3 bg-stone-400 justify-center items-center rounded gap-2 flex">
                              <button
                                className="text-white text-xs font-semibold leading-none"
                                type="button"
                                style={{ width: "100%", height: "100%" }}
                                onClick={() => formikProps.submitForm()}
                              >
                                Login
                              </button>
                            </div>
                          </div>
                          <div className="self-stretch justify-center items-center inline-flex">
                            <div className="text-gray-500 text-xs font-normal leading-none">
                              {`  Don't have an account yet?`}
                            </div>
                            <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex" style={{ paddingBottom: "7px" }}>
                              <Link to="/sign-up">
                                <button className="text-stone-400 text-xs font-semibold leading-none">
                                  Sign Up
                                </button>
                              </Link>
                            </div>
                            <div className="text-gray-500 text-xs font-normal leading-none">
                              now.
                            </div>
                          </div>
                        </div>
                      </form>

                    </Form>
                  )}
                </Formik>
              </div>
              }

{showForgotPassword &&
              <div class="md:col-span-1 flex justify-center items-center h-full" >
                <Formik
                  initialValues={{
                    email: ""
                  }}
                  onSubmit={async (values) => {
                    forgotPassword(values, (data)=> {
                      toast.success("We have emailed your password reset link", { position: 'top-right' })
                    })
                  }}
                >
                  {(formikProps) => (
                    <Form style={{ height: '80%' }}>
                      <form className="flex justify-center items-center">
                        <div className="login-title flex p-7 bg-white rounded-lg flex-col justify-start items-start gap-3">
                          <div className="self-stretch text-center text-zinc-700 text-2xl font-semibold leading-loose">
                            Forgot Password
                          </div>
                          <div className="self-stretch justify-center items-start gap-6 inline-flex" style={{visibility: "hidden"}}>
                            {/* <Link href="/" scroll={false}> */}

                            <div className="w-36 flex-col justify-start items-center gap-2 inline-flex" style={{ cursor: "pointer" }}>
                              <div className="px-2 py-0.5 justify-start items-center gap-2 inline-flex">
                                <label className="text-stone-400 text-sm font-semibold leading-none">
                                  I am a Job Seeker
                                </label>
                              </div>
                              <div className="self-stretch h-0.5 bg-stone-400" />
                            </div>
                            {/* </Link> */}
                            {/* <Link href="/employer-login" scroll={false}> */}
                            <div className="w-36 flex-col justify-start items-center gap-2 inline-flex" style={{ cursor: "pointer" }}>
                              <div className="px-2 py-0.5 justify-start items-center gap-2 inline-flex">
                                <label className="text-gray-500 text-sm font-semibold leading-none">
                                  I am an Employer
                                </label>
                              </div>
                              <div className="self-stretch h-0.5 opacity-0 bg-stone-400" />
                            </div>
                            {/* </Link> */}
                          </div>
                          <div className="self-stretch flex-col justify-start items-start gap-4 flex pb-5">
                            <div className="self-stretch h-16 flex-col justify-start items-start gap-1.5 flex">
                              <div className="self-stretch justify-start items-start gap-0.5 inline-flex">
                                <div className="justify-start items-center flex">
                                  <label className="text-zinc-400 text-xs font-semibold leading-none">
                                    Email Address
                                  </label>
                                </div>
                              </div>

                              <Input
                                type="text"
                                name="email"
                                className="self-stretch h-10 p-3 bg-white rounded border border-neutral-200 justify-start items-start gap-2 inline-flex"
                                required
                              />

                        <div className="self-stretch text-right text-stone-400 text-xs font-semibold leading-none" onClick={() => setShowForgotPassword(false)}>
                                <button type="button">Sign In?</button>
                              </div>
                            </div>
    
                          </div>
                          <div className="self-stretch bg-stone-400 rounded justify-center items-center inline-flex">
                            <div className="grow shrink basis-0 self-stretch px-4 py-3 bg-stone-400 justify-center items-center rounded gap-2 flex">
                              <button
                                className="text-white text-xs font-semibold leading-none"
                                type="button"
                                style={{ width: "100%", height: "100%" }}
                                onClick={() => formikProps.submitForm()}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                          <div className="self-stretch justify-center items-center inline-flex">
                            <div className="text-gray-500 text-xs font-normal leading-none">
                              {`  Don't have an account yet?`}
                            </div>
                            <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex" style={{ paddingBottom: "7px" }}>
                              <Link to="/sign-up">
                                <button className="text-stone-400 text-xs font-semibold leading-none">
                                  Sign Up
                                </button>
                              </Link>
                            </div>
                            <div className="text-gray-500 text-xs font-normal leading-none">
                              now.
                            </div>
                          </div>
                        </div>
                      </form>

                    </Form>
                  )}
                </Formik>
              </div>
              }




            </div>

          </div>
        </section>


        <section >

          <div className="bg-gray-100 h-full">
            <div className="behind-us container mx-auto px-10">
              <div className="py-48 flex-col justify-center items-center gap-10 inline-flex">
                <div className="behind-us-title self-stretch h-11 flex-col justify-start items-center gap-1 flex">
                  <div className="self-stretch text-center text-zinc-700 text-2xl font-semibold leading-loose">
                    With 20 years behind us, we have learned to keep things SIMPLE
                  </div>
                  <div className="w-16 h-2 bg-stone-400" />
                </div>



                <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-4">

                  <div class="md:col-span-1">
                    <div className="grow shrink basis-0 p-6 bg-white rounded-2xl flex-col justify-start items-center gap-6 inline-flex" style={{ height: "100%" }}>
                      <div className="w-20 h-20 px-4 py-2.5 bg-gradient-to-b from-white to-orange-200 rounded-lg justify-center items-center inline-flex">
                        <div className="w-12 h-14 relative">
                          <img
                            src="/egmp/job-done.png"
                            alt="background"
                            width={60}
                            height={49}
                          />
                        </div>
                      </div>
                      <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch text-center text-stone-400 text-xs font-bold uppercase leading-none tracking-wide">
                          GETTING THE JOB DONE
                        </div>
                        <div className="self-stretch text-center text-zinc-700 text-sm font-normal leading-tight">
                          We need to have a good understanding about our client, their
                          business, their expectations from us and from there; we
                          develop our plan to meet that expectation.{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="md:col-span-1">

                    <div className="grow shrink basis-0 p-6 bg-white rounded-2xl flex-col justify-start items-center gap-6 inline-flex" style={{ height: "100%" }}>
                      <div className="w-20 h-20 px-2.5 pt-3.5 pb-4 bg-gradient-to-b from-white to-orange-200 rounded-lg justify-center items-center inline-flex">
                        <div className="w-16 h-12 relative">
                          <img
                            src="/egmp/do-it-right.png"
                            alt="background"
                            width={60}
                            height={49}
                          />
                        </div>
                      </div>
                      <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch text-center text-stone-400 text-xs font-bold uppercase leading-none tracking-wide" >
                          DOING IT RIGHT
                        </div>
                        <div className="self-stretch text-center text-zinc-700 text-sm font-normal leading-tight">
                          {`This simply means we employ the best practice in the
        business, with the worker's welfare at the forefront in
        everything we do.`}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="md:col-span-1" >
                    <div className="grow shrink basis-0 p-6 bg-white rounded-2xl flex-col justify-start items-center gap-6 inline-flex" style={{ height: "100%" }}>
                      <div className="w-20 h-20 px-2.5 pt-4 pb-3.5 bg-gradient-to-b from-white to-orange-200 rounded-lg justify-center items-center inline-flex">
                        <div className="w-16 h-12 relative">
                          <img
                            src="/egmp/exceed.png"
                            alt="background"
                            width={60}
                            height={49}
                          />
                        </div>
                      </div>
                      <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch text-center text-stone-400 text-xs font-bold uppercase leading-none tracking-wide">
                          EXCEEDING EXPECTATIONS
                        </div>
                        <div className="self-stretch text-center text-zinc-700 text-sm font-normal leading-tight">
                          {`We narrow things down and pick your minds to understand your
        expectation form us - and we'll try to exceed that
        expectation.`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>


        <section >

          <div className="bg-gray-100 h-full">
            <div className="behind-us container mx-auto px-10">
              <div className="pb-48 flex-col justify-center items-center gap-10 inline-flex" style={{ width: "100%" }}>
                <div className="flex flex-col justify-start items-center gap-1 pb-10">
                  <div className="self-stretch text-center text-gray-500 text-xs font-bold uppercase leading-none tracking-wide">
                    E-GMP VIDEOS
                  </div>
                  <div className="self-stretch text-center text-zinc-700 text-2xl font-semibold leading-loose">
                    View our Videos to get to know us Better
                  </div>
                  <div className="w-16 h-2 bg-stone-400" />
                </div>



                <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4" style={{ width: "100%", zIndex: 6 }}>
                  <div class="md:col-span-1">
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe style={{ borderRadius: '20px', width: "100%" }} src="https://drive.google.com/file/d/1AXUaEfaQ-uTYX9ajNMVWmBSlM0ehD0ws/preview" width="636" height="400"></iframe>
                    </div>
                  </div>

                  <div class="md:col-span-1">

                    <div className="aspect-w-16 aspect-h-9">
                      <iframe style={{ borderRadius: '20px', width: "100%" }} src="https://drive.google.com/file/d/1GTgijzdzdtvULq8w1TKctEuwiHrA4HU2/preview" width="636" height="400"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full bottom-0 flex justify-end items-end">
              <img
                src="/bg-building.png"
                alt="background"
                width={1512}
                height="100%"
                className="w-full bg-gradient-to-t from-gray-700 to-gray-400 object-cover absolute"
                style={{ zIndex: "5" }}
              />
            </div>
          </div>

        </section>



        <section id="testimonials">

          <div className="bg-gray-100 h-full">
            <div className="behind-us container mx-auto px-10">

              <div className="py-48 flex-col justify-center items-center gap-10 inline-flex" style={{ width: "100%" }}>
                <div className="self-stretch flex-col justify-start items-center gap-1 flex">
                  <div className="self-stretch text-center text-gray-500 text-xs font-bold uppercase leading-none tracking-wide">
                    CLIENT TESTIMONIALS
                  </div>
                  <div className="self-stretch text-center text-zinc-700 text-2xl font-semibold leading-loose">
                    Discover why our clients love us!
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
                          
        </section >


        
        <section id="branches">

          <div className="bg-gray-100 h-full pt-3">
            <div className="behind-us container mx-auto px-36">
              <div className="pb-36 flex-col justify-center items-center gap-10 inline-flex" style={{ width: "100%" }}>
                



                <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4" style={{ width: "100%"}}>
                  <div class="md:col-span-1">
                  <div className="grow shrink basis-0 self-stretch flex-col justify-center items-start gap-10 inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-gray-500 text-xs font-bold uppercase leading-none tracking-wide">
                  E-GMP BRANCHES
                </div>
                <div className="self-stretch text-zinc-700 text-2xl font-semibold leading-loose">
                  Location and Contact Information
                </div>
                <div className="w-16 h-2 bg-stone-400" />
              </div>
              <div className="self-stretch justify-start items-start gap-10 inline-flex">
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="px-2 py-0.5 justify-start items-center gap-2 inline-flex">
                    <div className="text-stone-400 text-sm font-semibold leading-none">
                      Makati Branch
                    </div>
                  </div>
                  <div className="self-stretch h-0.5 bg-stone-400" />
                </div>
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="px-2 py-0.5 justify-start items-center gap-2 inline-flex">
                    <div className="text-gray-500 text-sm font-semibold leading-none">
                      Cebu Branch
                    </div>
                  </div>
                  <div className="self-stretch h-0.5 opacity-0 bg-stone-400" />
                </div>
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="px-2 py-0.5 justify-start items-center gap-2 inline-flex">
                    <div className="text-gray-500 text-sm font-semibold leading-none">
                      Davao Branch
                    </div>
                  </div>
                  <div className="self-stretch h-0.5 opacity-0 bg-stone-400" />
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="w-9 h-9 relative bg-gradient-to-b from-white to-orange-200 rounded-lg">
                  <div className="w-5 h-5 left-[7.20px] top-[7.20px] absolute">
                    <img
                      src="/egmp/location-marker.png"
                      alt="location-marker"
                      width={22}
                      height={22}
                    />
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch text-stone-400 text-xs font-bold uppercase leading-none tracking-wide">
                    LOCATION
                  </div>
                  <div className="self-stretch text-gray-500 text-xs font-normal leading-none">
                    3rd Floor, MJL Building, 1175 Chino Roces Avenue, Makati
                    City
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="w-9 h-9 relative bg-gradient-to-b from-white to-orange-200 rounded-lg">
                  <div className="w-5 h-5 left-[7.20px] top-[7.20px] absolute">
                    <img
                      src="/egmp/mail.png"
                      alt="location-marker"
                      width={22}
                      height={22}
                    />
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch text-stone-400 text-xs font-bold uppercase leading-none tracking-wide">
                    email address
                  </div>
                  <div className="self-stretch text-gray-500 text-xs font-normal leading-none">
                    inquire@egmpjobs.com
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="w-9 h-9 relative bg-gradient-to-b from-white to-orange-200 rounded-lg">
                  <div className="w-5 h-5 left-[7.20px] top-[7.20px] absolute">
                    <img
                      src="/egmp/phone.png"
                      alt="location-marker"
                      width={22}
                      height={22}
                    />
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="self-stretch text-stone-400 text-xs font-bold uppercase leading-none tracking-wide">
                    CONTACT NUMBER
                  </div>
                  <div className="self-stretch text-gray-500 text-xs font-normal leading-none">
                    +63 927 802 1252
                  </div>
                </div>
              </div>
            </div>
                  </div>

                  <div class="md:col-span-1">
                  <div className="w-full h-96 relative bg-white rounded-lg shadow-md"></div>

                   
                  </div>
                </div>
              </div>
            </div>


          </div>

        </section>

        <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        mobile_number: "",
        email: "",
        subject: "",
        message: ""
      }}
      onSubmit={async (values, { resetForm }) => {
        sendMessage(values, () => {
          resetForm();
        });
      }}
    >
    {(formikProps) => (
      <Form style={{height: '100%'}}>
 <div className="bg-gray-100 h-full" id="contacts">
 <div className="contact-panel container mx-auto px-20 py-16">
    <div className="flex-col justify-center items-center gap-4">
      <div className="bg-white rounded-2xl p-6 md:p-8">
        <div className="text-zinc-700 text-2xl font-semibold leading-loose">
          Send us a Message
        </div>
        <div className="text-gray-500 text-sm font-normal leading-none">
          Your search for the Philippines' leading recruitment veterans ends here. To learn more about EGMP International Corporation and how we empower people on both sides of the recruitment table, start a conversation with our friendly team today.
        </div>

        <form className="pt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 sm:gap-0">
            <div className="mb-4">
              <label className="block text-zinc-400 text-xs font-semibold leading-none pb-1">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                className="w-full h-10 p-3 bg-white rounded border border-neutral-200"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-zinc-400 text-xs font-semibold leading-none pb-1">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                className="w-full h-10 p-3 bg-white rounded border border-neutral-200"
                required
              />
            </div>
          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 sm:gap-0">
            <div className="mb-4">
              <label className="block text-zinc-400 text-xs font-semibold leading-none pb-1">
              Email Address
              </label>
              <input
              type="text"
              name="email"
              className="w-full h-10 p-3 bg-white rounded border border-neutral-200"
              required
            />
            </div>
            <div className="mb-4">
              <label className="block text-zinc-400 text-xs font-semibold leading-none pb-1">
              Mobile No.
              </label>
              <input
              type="text"
              name="mobile_number"
              className="w-full h-10 p-3 bg-white rounded border border-neutral-200"
              required
            />
            </div>
          </div>


          <div className="mb-4">
            <label className="block text-zinc-400 text-xs font-semibold leading-none pb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              className="w-full h-10 p-3 bg-white rounded border border-neutral-200"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-zinc-400 text-xs font-semibold leading-none pb-1">
              Message
            </label>
            <textarea
              name="message"
              className="w-full h-32 p-3 bg-white rounded border border-neutral-200"
              rows="4"
            ></textarea>
          </div>

          <div className="mb-4">
            <div className="w-full h-20">
            <ReCAPTCHA
                sitekey="6LfoJw0pAAAAAPxRXyCmGQBvLTDitbtGJFcg_ZPJ"
                onChange={handleRecaptchaChange}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button className="px-4 py-3 bg-stone-400 rounded text-white text-xs font-semibold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    </Form>
      )}
    </Formik>




        {/* <section>
          <div className="bg-gray-100 h-full" id="testimonials">
            <div className="container mx-auto px-20 py-24">
              <div className="justify-start items-center gap-10 inline-flex" style={{ width: "100%" }}>
                <div className="bg-stone-400 rounded justify-center items-center flex cursor-pointer" onClick={handlePrev}>
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
                <div className="grow shrink basis-0 flex-col justify-start items-center gap-10 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-1 flex">
                    <div className="self-stretch text-center text-gray-500 text-xs font-bold uppercase leading-none tracking-wide">
                      CLIENT TESTIMONIALS
                    </div>
                    <div className="self-stretch text-center text-zinc-700 text-2xl font-semibold leading-loose">
                      Discover why our clients love us!
                    </div>
                    <div className="w-14 h-2 bg-stone-400" />
                  </div>

                  <div className="flex-col justify-end items-center flex">
                    <div className="self-stretch px-6 justify-start items-start inline-flex">
                      <img
                        src="/double-qoute.png"
                        alt="about-header"
                        width={48}
                        height={48}
                        className="relative origin-top-left"
                      />
                    </div>

                    <div className="self-stretch flex-col justify-start items-center flex overflow-hidden">
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
                  </div>
                </div>
                <div className="bg-stone-400 rounded justify-center items-center flex cursor-pointer" onClick={handleNext}>
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
        </section> */}

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
}

export default Home;
