import React, { useEffect, useState } from 'react';
import display from "./display.module.css";
import { get } from 'lodash';
import { useAction, useSelect } from '../../../hooks';
import EditWorkHistory from './EditWorkHistory';
import { createModal } from '../../../components/Modal';
import ViewModal from './modals/ViewModal'

const DisplayWorkHistory = ({setActiveTab}) => {
const [showUpdate, setShowUpdate] = useState(false);
const getProfile = useAction('profile.getProfile');
const profileSelected = useSelect('profile.profileSelected');

useEffect(() => {
    getProfile();
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
      <div className={display["edit-education-information"]}>
        Edit Work History Information{" "}
      </div>
    </div>


    <div className={display["table"]}>
      <div className={display["column"]}  style={{width: "100%"}}>
        <div className={display["header"]} style={{width: "100%"}}>
          <div className={display["content2"]} style={{width: "100%"}}>
            <div className={display["header2"]}>POSITION</div>
            <div className={display["header2"]}>COMPANY</div>
            <div className={display["header2"]}>COUNTRY</div>
            <div className={display["header2"]}>START DATE</div>
            <div className={display["header2"]}>END DATE</div>
            <div className={display["header2"]}>CERTIFICATE</div>
            
          </div>
        </div>
       

        {(get(profileSelected, 'profile.work_history', []) || []).map(data => {
          return (
            <div className={display["table-item"]}>
          <div className={display["content2"]}>
            <div className={display["juan-dela-cruz"]}>{data.position}</div>
          </div>
          <div className={display["content2"]}>
            <div className={display["juan-dela-cruz"]}>{data.company}</div>
          </div>
          <div className={display["content2"]}>
            <div className={display["juan-dela-cruz"]}>{data.country}</div>
          </div>
          <div className={display["content2"]}>
            <div className={display["juan-dela-cruz"]}>{data.start_date}</div>
          </div>
          <div className={display["content2"]}>
            <div className={display["juan-dela-cruz"]}>{data.end_date}</div>
          </div>
          <div className={display["content2"]}>
          <div className={display["icon-button2"]} onClick={() => {
                createModal({
                    title: "Add Source",
                    content: (close) => (
                        <ViewModal onClose={close} file={data.certificate}/>
                    ),
                    size: "md",
                })
              }}>
              <svg
                className={display["eye"]}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                style={{cursor: "pointer"}}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.999 9.60039C8.88265 9.60039 9.59899 8.88405 9.59899 8.00039C9.59899 7.11674 8.88265 6.40039 7.999 6.40039C7.11534 6.40039 6.399 7.11674 6.399 8.00039C6.399 8.88405 7.11534 9.60039 7.999 9.60039Z"
                  fill="#606774"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.365234 8.00042C1.38463 4.75472 4.41686 2.40039 7.99897 2.40039C11.5811 2.40039 14.6133 4.75469 15.6327 8.00036C14.6133 11.2461 11.5811 13.6004 7.99895 13.6004C4.41686 13.6004 1.38465 11.2461 0.365234 8.00042ZM11.199 8.00039C11.199 9.7677 9.7663 11.2004 7.999 11.2004C6.23169 11.2004 4.79901 9.7677 4.79901 8.00039C4.79901 6.23308 6.23169 4.80039 7.999 4.80039C9.7663 4.80039 11.199 6.23308 11.199 8.00039Z"
                  fill="#606774"
                />
              </svg>
            </div>
          </div>
        </div>
          )
        })}
      </div>
    </div>

    
  </div>
        }

        {showUpdate && 
            <EditWorkHistory profileSelected={profileSelected} setShowUpdate={setShowUpdate} setActiveTab={setActiveTab}/>    
        }
    </>
  );
};

export default DisplayWorkHistory;
