import React, { useEffect, useState } from 'react';
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import styles from "./style1.module.css";
import { useAction, useSelect } from '../../hooks';
import { get } from 'lodash';
import { Link, useHistory } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const JobOpening = () => {
  const history = useHistory()
  const [inputValue, setInputValue] = useState('');

    
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

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = - 80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

  const getManpowerList = useAction('manpower.getManpowerList');

  const manpowerList = useSelect('manpower.manpowerList');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    getManpowerList({
      q: inputValue
    });
  }

  const handleClear = () => {
    setInputValue("")
    getManpowerList({
      q: ""
    });
  }

  useEffect(() => {
    getManpowerList();
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
               src="/egmp/jobopening-header.png"
            alt="about-header"
            width={1512}
            height={700}
            className="top-0 w-full object-cover"
          />


      
<div className="bg-gray-100">
              <div className="container mx-auto" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "30px 0 30px 0" }}>
                <div className={styles["content"]}>
                  <div className={styles["container-filled"]}>
                  <div className={styles["row"]}>
          <div className={styles["input-text-with-icon"]}>


          <input
              type="text"
              className={styles["input-field"]}
              value={inputValue} onChange={handleInputChange}
              placeholder='Search Job Position...'
          />

            {/* <div className={styles["txtbox"]}>
              <svg
                className={styles["search"]}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.3996 3.19961C4.63229 3.19961 3.1996 4.6323 3.1996 6.39961C3.1996 8.16692 4.63229 9.59961 6.3996 9.59961C8.1669 9.59961 9.59959 8.16692 9.59959 6.39961C9.59959 4.6323 8.1669 3.19961 6.3996 3.19961ZM1.59961 6.39961C1.59961 3.74864 3.74864 1.59961 6.3996 1.59961C9.05056 1.59961 11.1996 3.74864 11.1996 6.39961C11.1996 7.43627 10.871 8.39618 10.3122 9.18084L14.1653 13.0339C14.4777 13.3463 14.4777 13.8529 14.1653 14.1653C13.8528 14.4777 13.3463 14.4777 13.0339 14.1653L9.18082 10.3122C8.39616 10.871 7.43626 11.1996 6.3996 11.1996C3.74864 11.1996 1.59961 9.05058 1.59961 6.39961Z"
                  fill="#B5B5B7"
                />
              </svg>

              <div className={styles["placeholder"]}>
                Search Job Position...{" "}
              </div>
            </div> */}
          </div>
         

          {/* <Select
                    options={country}
                    className={styles["input-select"]}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? '#E4E4E4' : '#E4E4E4',
                            height: 40,
                            borderRadius: 4
                        }),
                    }}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                            ...theme.colors,
                            primary25: '#beac6f',
                            primary: '#beac6f',
                        },
                    })}
                />
             */}
            {/* <div className={styles["txtbox"]}>
              <svg
                className={styles["globe"]}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.99961 14.3996C11.5342 14.3996 14.3996 11.5342 14.3996 7.99961C14.3996 4.46499 11.5342 1.59961 7.99961 1.59961C4.46499 1.59961 1.59961 4.46499 1.59961 7.99961C1.59961 11.5342 4.46499 14.3996 7.99961 14.3996ZM3.46504 6.42154C3.76395 5.56249 4.30007 4.81452 4.99498 4.25605C5.20928 4.58334 5.57921 4.79954 5.99962 4.79954C6.66236 4.79954 7.19962 5.3368 7.19962 5.99954V6.39954C7.19962 7.28319 7.91597 7.99954 8.79962 7.99954C9.68328 7.99954 10.3996 7.28319 10.3996 6.39954C10.3996 5.64744 10.9185 5.01655 11.6179 4.84536C12.3538 5.6889 12.7996 6.79216 12.7996 7.99955C12.7996 8.27216 12.7769 8.53947 12.7332 8.79968H11.9996C11.1159 8.79968 10.3996 9.51603 10.3996 10.3997V12.1574C9.69358 12.5658 8.87382 12.7995 7.99954 12.7995V11.1996C7.99954 10.316 7.2832 9.59961 6.39954 9.59961C5.51589 9.59961 4.79954 8.88326 4.79954 7.99961C4.79954 7.2064 4.22234 6.54801 3.46504 6.42154Z"
                  fill="#B5B5B7"
                />
              </svg>

              <div className={styles["placeholder"]}>Search by Country </div>
              <svg
                className={styles["chevron-down"]}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.23431 5.83392C4.54673 5.5215 5.05327 5.5215 5.36569 5.83392L8 8.46824L10.6343 5.83392C10.9467 5.5215 11.4533 5.5215 11.7657 5.83392C12.0781 6.14634 12.0781 6.65288 11.7657 6.96529L8.56569 10.1653C8.25327 10.4777 7.74674 10.4777 7.43432 10.1653L4.23431 6.96529C3.9219 6.65288 3.9219 6.14634 4.23431 5.83392Z"
                  fill="#B5B5B7"
                />
              </svg>
            </div> */}
    
          <div className={styles["solid-button"]} style={{cursor: "pointer"}} onClick={()=> handleSearch()}>
            <div className={styles["content2"]}>
              <svg
                className={styles["search2"]}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.7992 2.4002C3.47373 2.4002 2.39921 3.47471 2.39921 4.8002C2.39921 6.12568 3.47373 7.2002 4.7992 7.2002C6.12468 7.2002 7.19919 6.12568 7.19919 4.8002C7.19919 3.47471 6.12468 2.4002 4.7992 2.4002ZM1.19922 4.8002C1.19922 2.81197 2.81099 1.2002 4.7992 1.2002C6.78742 1.2002 8.39919 2.81197 8.39919 4.8002C8.39919 5.57769 8.15271 6.29763 7.73364 6.88612L10.6234 9.77593C10.8578 10.0102 10.8578 10.3901 10.6234 10.6245C10.3891 10.8588 10.0092 10.8588 9.77492 10.6245L6.88511 7.73464C6.29663 8.15372 5.5767 8.4002 4.7992 8.4002C2.81099 8.4002 1.19922 6.78842 1.19922 4.8002Z"
                  fill="white"
                />
              </svg>

              <div className={styles["button"]}>Search </div>
            </div>
          </div>
          <div className={styles["solid-button2"]} style={{cursor: "pointer"}} onClick={()=> handleClear()}>
            <svg
              className={styles["x"]}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.57613 2.57613C2.81044 2.34181 3.19034 2.34181 3.42465 2.57613L6.00039 5.15186L8.57612 2.57613C8.81043 2.34181 9.19033 2.34181 9.42464 2.57613C9.65896 2.81044 9.65896 3.19034 9.42464 3.42465L6.84891 6.00039L9.42464 8.57613C9.65896 8.81044 9.65896 9.19034 9.42464 9.42465C9.19033 9.65897 8.81043 9.65897 8.57612 9.42465L6.00039 6.84892L3.42465 9.42465C3.19034 9.65897 2.81044 9.65897 2.57613 9.42465C2.34181 9.19034 2.34181 8.81044 2.57613 8.57613L5.15186 6.00039L2.57613 3.42465C2.34181 3.19034 2.34181 2.81044 2.57613 2.57613Z"
                fill="#323232"
              />
            </svg>

            <div className={styles["button2"]}>Clear </div>
          </div>
        </div>
                  </div>
                  <div className={styles["_16-jobs-available"]}>{`(${(manpowerList || []).length})`} jobs available </div>

                  <div class="job-parent">

                    {(manpowerList || []).map(data => {
                      return (
                        <div className={styles["container-filled2"]}>
                          <div className={styles["header"]}>
                            <div className={styles["avatar"]}>
                              <img className={styles["content3"]} src="jo1.png" />
                            </div>
                            <div className={styles["info"]}>
                              <div className={styles["cook"]}>{get(data, 'principal_id.name', "--") || "--"}</div>
                              <div className={styles["subinfo"]}>
                                <div className={styles["asdasd"]}>{get(data, 'jo_category', "--") || "--"}</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles["location"]}>
                            <svg
                              className={styles["location-marker"]}
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.04059 3.24079C6.22753 1.05385 9.77325 1.05385 11.9602 3.24079C14.1471 5.42772 14.1471 8.97345 11.9602 11.1604L8.00039 15.1202L4.04059 11.1604C1.85366 8.97345 1.85366 5.42772 4.04059 3.24079ZM8.00039 8.80059C8.88405 8.80059 9.60039 8.08424 9.60039 7.20059C9.60039 6.31693 8.88405 5.60059 8.00039 5.60059C7.11673 5.60059 6.40039 6.31693 6.40039 7.20059C6.40039 8.08424 7.11673 8.80059 8.00039 8.80059Z"
                                fill="#BEAC6F"
                              />
                            </svg>
                            <div
                              className={
                                styles["_123-faraway-street-al-olaya-riyadh-saudi-arabia"]
                              }
                            >
                              {get(data, 'jo_location', "--") || "--"}
                            </div>
                          </div>
                          <div className={styles["php-25-k-35-k-monthly"]}>
                            PHP {get(data, 'jo_salary', "--") || "--"} Monthly{" "}
                          </div>
                          <div className={styles["asdasd2"]}>
                            {/* {get(data, 'jo_jd_1', "--") || "--"} */}
                            We are seeking a skilled and passionate Cook to join our vibrant Baratie Restaurant team. As a Cook at Baratie Restaurant, you will play a crucial role in delivering exceptional dining experiences to our valued guests.
                          </div>
                          <div className={styles["asdasd2"]}  style={{paddingTop: "40px"}}>
                          <div className={styles["buttons"]}>
                            <div className={styles["solid-button2"]}>
                              <div className={styles["button2"]}>View More Details </div>
                            </div>
                            <div className={styles["solid-button"]} style={{ cursor: "pointer" }}>
                              <div className={styles["content4"]}>
                              <div className={styles["button"]} onClick={() => {
                                history.push({
                                  pathname: '/sign-up-job-seeker'
                              })
                              }}>Apply for this Position </div>
                              </div>
                            </div>
                          </div>
                          </div>
                        </div>
                        

                      )
                    })}


                  </div>



                </div>

              </div>
            </div>
 
</section>
















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

export default JobOpening;
