import React, { useEffect, useState } from 'react';
import display from "./display.module.css";
import { get } from 'lodash';
import { useAction, useSelect } from '../../../hooks';
import EditPersonal from './EditPersonal';

const DisplayPersonal = ({selectedFilePhoto, setActiveTab}) => {
const [showUpdate, setShowUpdate] = useState(false);
const getSourceApplication = useAction('dropdown.getSourceApplication');
const getPosition = useAction('dropdown.getPosition');
const getProfile = useAction('profile.getProfile');
const profileSelected = useSelect('profile.profileSelected');

useEffect(() => {
    getProfile();
    getPosition();
    getSourceApplication();
}, []);
  
  return (
    <>
    {!showUpdate &&
    <div className={display["container-filled"]}>
        <button className={display["button"]} onClick={() => setShowUpdate(true)}>
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
            <div className={display["edit-personal-information"]} >
                Edit Personal Information{" "}
            </div>
        </button>
        <div className={display["table"]}>
            <div className={display["row"]}>
            <div className={display["profile-picture"]}>Profile Picture </div>
            <div className={display["profile-picture2"]}>
                <div className={display["avatar"]}>
                <img className={display["content2"]} src={selectedFilePhoto} />
                </div>
            </div>
            </div>
        </div>
        <div className={display["field-group"]}>
            <div className={display["position-applying-for"]}>
            Position Applying For{" "}
            </div>
            <div className={display["table"]}>
            <div className={display["row"]}>
                <div className={display["position"]}>Position </div>
                <div className={display["cook"]}>{get(profileSelected, 'profile.position_id.name', "--") || "--"} </div>
            </div>
            </div>
        </div>
        <div className={display["field-group"]}>
            <div className={display["source-of-application"]}>
            Source of Application{" "}
            </div>
            <div className={display["table"]}>
            <div className={display["row"]}>
                <div className={display["method-of-application"]}>
                Method of Application{" "}
                </div>
                <div className={display["online"]}>Online </div>
            </div>
            <div className={display["row2"]}>
                <div className={display["source-of-application2"]}>
                Source of Application{" "}
                </div>
                <div className={display["facebook"]}>{get(profileSelected, 'profile.application_source_id.name', "--") || "--"} </div>
            </div>
            </div>
        </div>
        <header className={display["field-group"]}>
            <div className={display["name-of-applicant"]}>Name of Applicant </div>
            <div className={display["table"]}>
            <div className={display["row"]}>
                <div className={display["last-name"]}>Last Name </div>
                <div className={display["dela-cruz"]}>{get(profileSelected, 'profile.last_name', "--") || "--"} </div>
            </div>
            <div className={display["row2"]}>
                <div className={display["first-name"]}>First Name </div>
                <div className={display["juan"]}>{get(profileSelected, 'profile.first_name', "--") || "--"} </div>
            </div>
            <div className={display["row"]}>
                <div className={display["middle-name"]}>Middle Name </div>
                <div className={display["santos"]}>{get(profileSelected, 'profile.middle_name', "--") || "--"} </div>
            </div>
            <div className={display["row2"]}>
                <div className={display["suffix"]}>Suffix </div>
                <div className={display["santos"]}>{get(profileSelected, 'profile.extension_name', "--") || "--"} </div>
            </div>
            </div>
        </header>
        <div className={display["field-group"]}>
            <div className={display["other-information"]}>other information </div>
            <div className={display["table"]}>
            <div className={display["row"]}>
                <div className={display["date-of-birth"]}>Date of Birth </div>
                <div className={display["_10-24-1997"]}>{get(profileSelected, 'profile.date_of_birth', "--") || "--"} </div>
            </div>
            <div className={display["row2"]}>
                <div className={display["gender"]}>Gender </div>
                <div className={display["male"]}>{get(profileSelected, 'profile.gender', "--") || "--"} </div>
            </div>
            <div className={display["row"]}>
                <div className={display["civil-status"]}>Civil Status </div>
                <div className={display["single"]}>{get(profileSelected, 'profile.civil_status', "--") || "--"} </div>
            </div>
            <div className={display["row2"]}>
                <div className={display["nationality"]}>Nationality </div>
                <div className={display["filipino"]}>{get(profileSelected, 'profile.nationality', "--") || "--"} </div>
            </div>
            <div className={display["row"]}>
                <div className={display["religion"]}>Religion </div>
                <div className={display["catholic"]}>{get(profileSelected, 'profile.religion', "--") || "--"} </div>
            </div>
            <div className={display["row2"]}>
                <div className={display["cv"]}>CV </div>
                <div className={display["frame-12"]}>
                <svg
                    className={display["paper-clip"]}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M12.6427 5.83333L7.1545 11.3215C6.50362 11.9724 6.50362 13.0276 7.1545 13.6785C7.80537 14.3294 8.86065 14.3294 9.51152 13.6785L14.8567 8.19036C16.1584 6.88861 16.1584 4.77806 14.8567 3.47631C13.5549 2.17456 11.4444 2.17456 10.1427 3.47631L4.79747 8.96447C2.84485 10.9171 2.84485 14.0829 4.79747 16.0355C6.7501 17.9882 9.91592 17.9882 11.8685 16.0355L17.083 10.8333"
                    stroke="#323232"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                </svg>

                <div className={display["j-delacruz-cv-pdf"]}>
                     {get(profileSelected, 'profile.resume', "--") || "--"}
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        }

        {showUpdate && 
            <EditPersonal profileSelected={profileSelected} setShowUpdate={setShowUpdate} selectedFilePhotoDisplay={selectedFilePhoto} setActiveTab={setActiveTab}/>    
        }
    </>
  );
};

export default DisplayPersonal;
