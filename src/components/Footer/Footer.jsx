
import React from "react";

const Footer = () => {
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

  return (
    <div className="w-full">
      <div className="w-full p-10 bg-neutral-500 flex-col justify-start items-start gap-10 inline-flex">
        <div className="self-stretch justify-start items-start gap-20 inline-flex">
          <div className="self-stretch flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-80 h-14 flex-col justify-center items-start gap-2.5 flex">
              <div className="justify-start items-center gap-2 inline-flex">
                {/* <Link
                  href="/"
                  className="justify-start items-center gap-2 inline-flex"
                > */}
                  <img src="/seal.png" alt="seal" width={123} height={56} />
                  <img src="/seal2.png" alt="seal2" width={165} height={56} />
                {/* </Link> */}
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-6 inline-flex">
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
          <div className="grow shrink basis-0 self-stretch justify-start items-start gap-12 flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch text-white text-base font-semibold leading-none">
                Head Office
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
        <div className="self-stretch h-px opacity-20 bg-neutral-200" />
        <div className="self-stretch justify-start items-center gap-10 inline-flex">
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
          <div className="grow shrink basis-0 h-5 justify-end items-start gap-6 flex">
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
        </div>


      </div>
    </div>
  );
};

export default Footer;
