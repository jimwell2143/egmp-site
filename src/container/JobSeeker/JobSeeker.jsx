import React, { useEffect, useState } from 'react';
import Footer from "../../components/Footer/Footer";
import ProfileNavigation from "../../components/Navigation/ProfileNavigation";
import styles from "./style.module.css";
import detail from "./detail.module.css";
import header from "./header.module.css";
import { Link } from "react-router-dom";
import { get } from 'lodash';
import { useAction, useSelect } from '../../hooks';
import Select from 'react-select'
import { toast } from 'react-toastify';
import { api } from '../../api';

const country = [
  {
      "id": 1,
      "name": "afghanistan"
  },
  {
      "id": 2,
      "name": "albania"
  },
  {
      "id": 3,
      "name": "algeria"
  },
  {
      "id": 4,
      "name": "american samoa"
  },
  {
      "id": 5,
      "name": "andorra"
  },
  {
      "id": 6,
      "name": "angola"
  },
  {
      "id": 7,
      "name": "anguilla"
  },
  {
      "id": 8,
      "name": "antarctica"
  },
  {
      "id": 9,
      "name": "antigua and barbuda"
  },
  {
      "id": 10,
      "name": "argentina"
  },
  {
      "id": 11,
      "name": "armenia"
  },
  {
      "id": 12,
      "name": "aruba"
  },
  {
      "id": 13,
      "name": "australia"
  },
  {
      "id": 14,
      "name": "austria"
  },
  {
      "id": 15,
      "name": "azerbaijan"
  },
  {
      "id": 16,
      "name": "bahamas the"
  },
  {
      "id": 17,
      "name": "bahrain"
  },
  {
      "id": 18,
      "name": "bangladesh"
  },
  {
      "id": 19,
      "name": "barbados"
  },
  {
      "id": 20,
      "name": "belarus"
  },
  {
      "id": 21,
      "name": "belgium"
  },
  {
      "id": 22,
      "name": "belize"
  },
  {
      "id": 23,
      "name": "benin"
  },
  {
      "id": 24,
      "name": "bermuda"
  },
  {
      "id": 25,
      "name": "bhutan"
  },
  {
      "id": 26,
      "name": "bolivia"
  },
  {
      "id": 27,
      "name": "bosnia and herzegovina"
  },
  {
      "id": 28,
      "name": "botswana"
  },
  {
      "id": 29,
      "name": "bouvet island"
  },
  {
      "id": 30,
      "name": "brazil"
  },
  {
      "id": 31,
      "name": "british indian ocean territory"
  },
  {
      "id": 32,
      "name": "brunei"
  },
  {
      "id": 33,
      "name": "bulgaria"
  },
  {
      "id": 34,
      "name": "burkina faso"
  },
  {
      "id": 35,
      "name": "burundi"
  },
  {
      "id": 36,
      "name": "cambodia"
  },
  {
      "id": 37,
      "name": "cameroon"
  },
  {
      "id": 38,
      "name": "canada"
  },
  {
      "id": 39,
      "name": "cape verde"
  },
  {
      "id": 40,
      "name": "cayman islands"
  },
  {
      "id": 41,
      "name": "central african republic"
  },
  {
      "id": 42,
      "name": "chad"
  },
  {
      "id": 43,
      "name": "chile"
  },
  {
      "id": 44,
      "name": "china"
  },
  {
      "id": 45,
      "name": "christmas island"
  },
  {
      "id": 46,
      "name": "cocos (keeling) islands"
  },
  {
      "id": 47,
      "name": "colombia"
  },
  {
      "id": 48,
      "name": "comoros"
  },
  {
      "id": 49,
      "name": "congo"
  },
  {
      "id": 50,
      "name": "congo the democratic republic of the"
  }
];


const JobSeeker = () => {
  const [inputValue, setInputValue] = useState('');

  const getProfile = useAction('profile.getProfile');
  const profileSelected = useSelect('profile.profileSelected');

  
  const getManpowerList = useAction('manpower.getManpowerList');
  const createManpower = useAction('manpower.createManpower');
  
  const manpowerList = useSelect('manpower.manpowerList');



  const [selectedFilePhoto, setSelectedFilePhoto] = useState(get(profileSelected, 'photo', ""));

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
      getProfile();
      getManpowerList();
  }, []);
    
  useEffect(() => {
    console.log("selectedFilePhoto",get(profileSelected, 'photo', ""))
   
        if (profileSelected) {  
            if (!get(profileSelected, 'photo', "").includes("nicepng")) {
            api.get(`/api/mng/files/get-presigned-url/${get(profileSelected, 'photo', "")}`)
            .then(response => {
                console.log('View Image successfully presigned.', response);
                setSelectedFilePhoto(response.data.url)
            })
            .catch(error => {
                console.error('Error uploading image.', error);
            });
        } else {
            setSelectedFilePhoto(get(profileSelected, 'photo', ""))
        }
    }
}, [profileSelected]);


  const handleClick = (id) => {
    createManpower({
      manpower_request_id: id
    }, () => {
      toast.success("Success", { position: 'top-right' })
    })
  }

    return (
        <>
            <ProfileNavigation />
            <div className="h-screen">
            <div className="w-full">
                <div className="inset-0 z-0">
                <div className={header["header"]}>
                    <div className={header["banner"]}>
                        <div className={header["my-profile"]}>
                            <img
                            src="/jo-banner.png"
                            alt="about-header"
                            className="top-0 w-full h-full object-cover"
                        />
                        </div>
                    </div>

                    <div className={header["information"]}>
                          <div className={header["juan-santos-dela-cruz"]}>
                        {`${(get(profileSelected, 'profile.first_name', "--") || "--")} ${(get(profileSelected, 'profile.last_name', "--") || "--")} ${(get(profileSelected, 'profile.middle_name', "--") || "--")}`}
                        </div>
                        <div className={header["subinfo"]}>
                        <div className={header["badge"]}>
                            <svg
                            className={header["briefcase"]}
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.60019 3.6002V3.0002C3.60019 2.00608 4.40608 1.2002 5.40019 1.2002H6.60018C7.59429 1.2002 8.40018 2.00608 8.40018 3.0002V3.6002H9.60018C10.2629 3.6002 10.8002 4.13745 10.8002 4.8002V6.94265C9.30597 7.49703 7.68911 7.80016 6.0002 7.80016C4.31128 7.80016 2.69441 7.49703 1.2002 6.94264V4.8002C1.2002 4.13745 1.73745 3.6002 2.40019 3.6002H3.60019ZM4.80019 3.0002C4.80019 2.66882 5.06882 2.4002 5.40019 2.4002H6.60018C6.93155 2.4002 7.20018 2.66882 7.20018 3.0002V3.6002H4.80019V3.0002ZM5.40019 6.0002C5.40019 5.66882 5.66881 5.4002 6.00018 5.4002H6.00618C6.33755 5.4002 6.60618 5.66882 6.60618 6.0002C6.60618 6.33157 6.33755 6.6002 6.00618 6.6002H6.00018C5.66881 6.6002 5.40019 6.33157 5.40019 6.0002Z"
                                fill="#BEAC6F"
                            />
                            <path
                                d="M1.2002 8.21555V9.6002C1.2002 10.2629 1.73745 10.8002 2.40019 10.8002H9.60018C10.2629 10.8002 10.8002 10.2629 10.8002 9.6002V8.21556C9.29251 8.72446 7.67802 9.00016 6.0002 9.00016C4.32236 9.00016 2.70787 8.72446 1.2002 8.21555Z"
                                fill="#BEAC6F"
                            />
                            </svg>

                            <div className={header["badge2"]}>{(get(profileSelected, 'profile.position_id.name', "--") || "--")} </div>
                        </div>
                        </div>
                    </div>
                    <div className={header["avatar"]}>
                    <div className={header["content2"]}>
                            <img style={{height: "100%", width: "100%"}} src={selectedFilePhoto}></img>
                        </div>
                    </div>
                    </div>
                    <div className="bg-white">
                        <div className="container mx-auto" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                           
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
      <div className={styles["_4-jobs-available"]}>{`(${(manpowerList || []).length})`} jobs available </div>

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
<div className={styles["buttons"]}>
  <div className={styles["solid-button2"]}>
    <div className={styles["button2"]}>View More Details </div>
  </div>
  <div className={styles["solid-button"]} onClick={() => handleClick(data.id)} style={{cursor: "pointer"}}>
    <div className={styles["content4"]}>
      <div className={styles["button"]}>Apply for this Position </div>
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
                </div>
            </div>
            <div className="bg-white bottom-0">
                <Footer />
            </div>
        </div>
        </>
    );
}

export default JobSeeker;
