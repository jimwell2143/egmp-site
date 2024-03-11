import React, { useEffect, useState } from 'react';
import display from "./display.module.css";
import { get } from 'lodash';
import { useAction, useSelect } from '../../../hooks';
import EditContact from './EditContact';

const DisplayContact = ({setActiveTab}) => {
const [showUpdate, setShowUpdate] = useState(false);
const getProfile = useAction('profile.getProfile');
const profileSelected = useSelect('profile.profileSelected');
const getRegion = useAction('dropdown.getRegion');
const getProvince = useAction('dropdown.getProvince');
const getMunincipality = useAction('dropdown.getMunincipality');
const getBarangay = useAction('dropdown.getBarangay');

useEffect(() => {
  const getRegionWithDelay = () => {
      setTimeout(() => {
          getRegion();
          getProvinceWithDelay();
      }, 1000); // 1 second delay
  };

  const getProvinceWithDelay = () => {
      setTimeout(() => {
          getProvince({
            region_code: get(profileSelected, 'profile.region_code.code', "")
          });
          getMunincipalityWithDelay();
      }, 2000); // 2 seconds delay
  };

  const getMunincipalityWithDelay = () => {
      setTimeout(() => {
          getMunincipality({
            province_code: get(profileSelected, 'profile.province_code.code', "")
          });
          getBarangayWithDelay();
      }, 3000); // 3 seconds delay
  };

  const getBarangayWithDelay = () => {
    setTimeout(() => {
         getBarangay({
          municipality_code: get(profileSelected, 'profile.municipality_code.code', "")
         });
    }, 4000); // 3 seconds delay
};

  getRegionWithDelay();

  // Clean up function to clear any remaining timeouts in case the component is unmounted
  return () => {
      clearTimeout(getRegionWithDelay);
      clearTimeout(getProvinceWithDelay);
      clearTimeout(getMunincipalityWithDelay);
      clearTimeout(getBarangayWithDelay);
  };
}, []);


useEffect(() => {
    getProfile();
    // getRegion();
    // getProvince();
    // getMunincipality();
    // getBarangay();
}, []);


  return (
    <>
    {!showUpdate &&
    <div className={display["container-filled"]}>
    <div className={display["button"]} onClick={() => setShowUpdate(true)} style={{cursor: "pointer"}}>
      <div className={display["icon-button"]}>
        <div className={display["content"]}>
          <svg
            className={display["pencil-alt"]}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.931 2.06824C13.3061 1.4434 12.2931 1.4434 11.6682 2.06824L5.5996 8.13687V10.3996H7.86234L13.931 4.33098C14.5558 3.70614 14.5558 2.69308 13.931 2.06824Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.59961 4.79961C1.59961 3.91595 2.31595 3.19961 3.19961 3.19961H6.3996C6.84143 3.19961 7.1996 3.55778 7.1996 3.99961C7.1996 4.44144 6.84143 4.79961 6.3996 4.79961H3.19961V12.7996H11.1996V9.59961C11.1996 9.15778 11.5578 8.79961 11.9996 8.79961C12.4414 8.79961 12.7996 9.15778 12.7996 9.59961V12.7996C12.7996 13.6833 12.0832 14.3996 11.1996 14.3996H3.19961C2.31595 14.3996 1.59961 13.6833 1.59961 12.7996V4.79961Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className={display["edit-contact-information"]}>
        Edit Contact Information{" "}
      </div>
    </div>
    <div className={display["field-group"]}>
      <div className={display["contact-information"]}>
        Contact Information{" "}
      </div>
      <div className={display["table"]}>
        <div className={display["row"]}>
          <div className={display["email-address"]}>Email Address </div>
          <div className={display["j-delacruz-email-com"]}>
          {get(profileSelected, 'email', "--") || "--"}
          </div>
        </div>
        <div className={display["row2"]}>
          <div className={display["mobile-no"]}>Mobile No. </div>
          <div className={display["_63-9123456789"]}>{get(profileSelected, 'profile.mobile_number', "--") || "--"} </div>
        </div>
        <div className={display["row"]}>
          <div className={display["telephone-no"]}>Telephone No. </div>
          <div className={display["_63-9123456789"]}>{get(profileSelected, 'profile.telephone_number', "--") || "--"} </div>
        </div>
      </div>
    </div>
    <div className={display["field-group"]}>
      <div className={display["address"]}>ADDRESS </div>
      <div className={display["table"]}>
        <div className={display["row"]}>
          <div className={display["region"]}>Region </div>
          <div className={display["metro-manila"]}>{get(profileSelected, 'profile.region_code.name', "--") || "--"}</div>
        </div>
        <div className={display["row2"]}>
          <div className={display["province"]}>Province </div>
          <div className={display["manila-district-4"]}>
          {get(profileSelected, 'profile.province_code.name', "--") || "--"}
          </div>
        </div>
        <div className={display["row"]}>
          <div className={display["city-municipality"]}>
            City / Municipality{" "}
          </div>
          <div className={display["makati"]}>{get(profileSelected, 'profile.municipality_code.name', "--") || "--"}</div>
        </div>
        <div className={display["row2"]}>
          <div className={display["barangay"]}>Barangay </div>
          <div className={display["legazpi"]}>{get(profileSelected, 'profile.barangay_code.name', "--") || "--"} </div>
        </div>
        <div className={display["row"]}>
          <div className={display["address-line"]}>Address Line </div>
          <div className={display["_123-faraway-street"]}>
          {get(profileSelected, 'profile.street', "--") || "--"}
          </div>
        </div>
      </div>
    </div>
  </div>
        }

        {showUpdate && 
            <EditContact profileSelected={profileSelected} setShowUpdate={setShowUpdate} setActiveTab={setActiveTab}/>    
        }
    </>
  );
};

export default DisplayContact;
