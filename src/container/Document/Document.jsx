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
import { createModal } from '../../components/Modal';
import UpdateModal from './modals/UpdateModal';
import ViewModal from './modals/ViewModal';

const Document = () => {
  const updateProfile = useAction('profile.updateProfile');
  const getProfile = useAction('profile.getProfile');
  const profileSelected = useSelect('profile.profileSelected');

  const [selectedFilePhoto, setSelectedFilePhoto] = useState(get(profileSelected, 'photo', ""));
  const [activeTab, setActiveTab] = useState(0);
  
  const [documentData, setDocumentData] = useState(get(profileSelected, 'profile.documents[0]', null) || null );
  console.log("documentData", documentData)

  useEffect(() => {
      getProfile();
  }, []);
    
  useEffect(() => {
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
    setDocumentData(get(profileSelected, 'profile.documents[0]', null) || null )

}   , [profileSelected]);

const handleChildClick = (data) => {
  let obj = (get(profileSelected, 'profile.documents', []) || []);
  obj = [...obj];
  obj[activeTab] = data


  console.log("obj",obj)


  // let documentData = {
  //   "documents" : obj
  // }

  // updateProfile(documentData, () => {
  //     getProfile();
  //   });
  };
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
                            src="/document-banner.png"
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
                        <div className="container mx-auto pb-7" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <div className={styles["container-filled"]}>
      <div className={styles["documents"]}>Documents </div>
      <div className={styles["field"]}>
        <div className={styles["input-text-with-icon"]}>
          <div className={styles["txtbox"]}>
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

            <div className={styles["placeholder"]}>Search... </div>
          </div>
        </div>
        <div className={styles["filter"]}>
          <div className={styles["filter-by"]}>Filter By </div>
          <div className={styles["all-status"]}>All Status </div>
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
              d="M4.23431 5.83392C4.54673 5.5215 5.05326 5.5215 5.36568 5.83392L7.99999 8.46824L10.6343 5.83392C10.9467 5.5215 11.4533 5.5215 11.7657 5.83392C12.0781 6.14634 12.0781 6.65288 11.7657 6.96529L8.56568 10.1653C8.25326 10.4777 7.74673 10.4777 7.43431 10.1653L4.23431 6.96529C3.9219 6.65288 3.9219 6.14634 4.23431 5.83392Z"
              fill="#BEAC6F"
            />
          </svg>
        </div>
      </div>
      <div className={styles["list-10-entries"]}>List (10 entries) </div>
      <div className={styles["list-menu-lgu-list"]}>
        

      {(get(profileSelected, 'profile.documents', []) || []).map((data, index) => {
        return (
        <div style={{cursor: "pointer"}} className={styles["list-item-lgu-list"]} onClick={() => {
          setActiveTab(index)
          setDocumentData(data)
        }}>
          <div className={activeTab == index ? styles["content"] : styles["content3"]}>
            <div className={styles["content2"]}>
              <div className={styles["juan-dela-cruz"]}>{(get(data, 'name',  "--") || "--")}</div>
              <div className={styles["badge4"]}>
                <div className={styles["badge2"]}>BLANK </div>
              </div>
            </div>
          </div>
        </div>

      )
      })}

{/*         
        <div className={styles["list-item-lgu-list"]}>
          <div className={styles["content3"]}>
            <div className={styles["content2"]}>
              <div className={styles["juan-dela-cruz2"]}>National ID </div>
              <div className={styles["badge3"]}>
                <div className={styles["badge2"]}>REJECTED </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["list-item-lgu-list"]}>
          <div className={styles["content3"]}>
            <div className={styles["content2"]}>
              <div className={styles["juan-dela-cruz2"]}>Resume / CV </div>
              <div className={styles["badge4"]}>
                <div className={styles["badge2"]}>BLANK </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["list-item-lgu-list"]}>
          <div className={styles["content3"]}>
            <div className={styles["content2"]}>
              <div className={styles["juan-dela-cruz2"]}>NBI </div>
              <div className={styles["badge"]}>
                <div className={styles["badge2"]}>VERIFIED </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["list-item-lgu-list"]}>
          <div className={styles["content3"]}>
            <div className={styles["content2"]}>
              <div className={styles["juan-dela-cruz2"]}>Police Clearance </div>
              <div className={styles["badge3"]}>
                <div className={styles["badge2"]}>REJECTED </div>
              </div>
            </div>
          </div>
        </div> */}
 
      </div>
      <div className={styles["pagination"]}>
        <div className={styles["prev"]}>
          <svg
            className={styles["chevron-double-left"]}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5661 12.5659C12.2537 12.8783 11.7471 12.8783 11.4347 12.5659L7.43471 8.56588C7.12229 8.25346 7.12229 7.74693 7.43471 7.43451L11.4347 3.43451C11.7471 3.12209 12.2537 3.12209 12.5661 3.43451C12.8785 3.74693 12.8785 4.25346 12.5661 4.56588L9.13176 8.0002L12.5661 11.4345C12.8785 11.7469 12.8785 12.2535 12.5661 12.5659ZM7.76608 12.5659C7.45366 12.8783 6.94713 12.8783 6.63471 12.5659L2.63471 8.56588C2.32229 8.25346 2.32229 7.74693 2.63471 7.43451L6.63471 3.43451C6.94713 3.12209 7.45366 3.12209 7.76608 3.43451C8.0785 3.74693 8.0785 4.25346 7.76608 4.56588L4.33176 8.0002L7.76608 11.4345C8.0785 11.7469 8.0785 12.2535 7.76608 12.5659Z"
              fill="#BEAC6F"
            />
          </svg>

          <div className={styles["prev2"]}>Prev </div>
        </div>
        <div className={styles["page"]}>
          <div className={styles["page-1-of-24"]}>Page 1 of 1 </div>
        </div>
        <div className={styles["next"]}>
          <div className={styles["next2"]}>Next </div>
          <svg
            className={styles["chevron-double-right"]}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.23354 12.5659C7.92112 12.2535 7.92112 11.7469 8.23354 11.4345L11.6679 8.0002L8.23354 4.56588C7.92112 4.25346 7.92112 3.74693 8.23354 3.43451C8.54596 3.12209 9.05249 3.12209 9.36491 3.43451L13.3649 7.43451C13.6773 7.74693 13.6773 8.25346 13.3649 8.56588L9.36491 12.5659C9.05249 12.8783 8.54596 12.8783 8.23354 12.5659Z"
              fill="#BEAC6F"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.43353 12.5659C3.12111 12.2535 3.12111 11.7469 3.43353 11.4345L6.86785 8.0002L3.43353 4.56588C3.12111 4.25346 3.12111 3.74693 3.43353 3.43451C3.74595 3.12209 4.25249 3.12209 4.5649 3.43451L8.56491 7.43451C8.87733 7.74693 8.87733 8.25346 8.56491 8.56588L4.56491 12.5659C4.25249 12.8783 3.74595 12.8783 3.43353 12.5659Z"
              fill="#BEAC6F"
            />
          </svg>
        </div>
      </div>
    </div>   

    <div className={detail["container-filled"]}>
      <div className={detail["header"]}>
        <div className={detail["title"]}>
          <div className={detail["birth-certificate"]}>{(get(documentData, 'name',  "--") || "--")}</div>
          <div className={detail["badge"]}>
            <div className={detail["badge2"]}>BLANK </div>
          </div>
        </div>
        <div style={{cursor: "pointer"}} className={detail["icon-button"]} onClick={() => {
                createModal({
                    title: "Add Source",
                    content: (close) => (
                        <UpdateModal onClose={close} documentData={documentData} onChildClick={handleChildClick}/>
                    ),
                    size: "md",
                })
              }}>
          <svg
            className={detail["pencil-alt"]}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9329 2.06824C13.3081 1.4434 12.295 1.4434 11.6702 2.06824L5.60156 8.13687V10.3996H7.86429L13.9329 4.33098C14.5577 3.70614 14.5577 2.69308 13.9329 2.06824Z"
              fill="#606774"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.60156 4.79961C1.60156 3.91595 2.31791 3.19961 3.20156 3.19961H6.40155C6.84338 3.19961 7.20155 3.55778 7.20155 3.99961C7.20155 4.44144 6.84338 4.79961 6.40155 4.79961H3.20156V12.7996H11.2015V9.59961C11.2015 9.15778 11.5597 8.79961 12.0015 8.79961C12.4434 8.79961 12.8015 9.15778 12.8015 9.59961V12.7996C12.8015 13.6833 12.0852 14.3996 11.2015 14.3996H3.20156C2.31791 14.3996 1.60156 13.6833 1.60156 12.7996V4.79961Z"
              fill="#606774"
            />
          </svg>
        </div>
      </div>
      <div className={detail["divider"]}></div>
      <div className={detail["table"]}>
        <div className={detail["row"]}>
          <div className={detail["serial-no"]}>Serial No. </div>
          <div className={detail["_1234567890"]}>{(get(documentData, 'serial_no',  "--") || "--")} </div>
        </div>
        <div className={detail["row2"]}>
          <div className={detail["received-date"]}>Received Date </div>
          <div className={detail["_10-24-2023"]}>{(get(documentData, 'receive_date',  "--") || "--")}</div>
        </div>
        <div className={detail["row"]}>
          <div className={detail["file-attached"]}>File Attached </div>
          <div className={detail["view"]}>
            <div className={detail["sample-pdf"]}>{(get(documentData, 'file_attached',  "--") || "--")}</div>
            <div style={{cursor: "pointer"}} className={detail["text-button"]} onClick={() => {
                createModal({
                    title: "Add Source",
                    content: (close) => (
                        <ViewModal onClose={close} file={(get(documentData, 'file_attached',  "--") || "--")}/>
                    ),
                    size: "md",
                })
              }}>
              <div className={detail["button"]}>VIEW </div>
            </div>
          </div>
        </div>
        <div className={detail["row2"]}>
          <div className={detail["issue-date"]}>Issue Date </div>
          <div className={detail["_10-24-1998"]}>{(get(documentData, 'issue_date',  "--") || "--")}</div>
        </div>
        <div className={detail["row"]}>
          <div className={detail["expiry-date"]}>Expiry Date </div>
          <div className={detail["_10-24-2030"]}>{(get(documentData, 'expiry_date',  "--") || "--")} </div>
        </div>
        {/* <div className={detail["row2"]}>
          <div className={detail["expiry-in"]}>Expiry In </div>
          <div className={detail["_120-days"]}>{(get(documentData, 'expiry_in',  "--") || "--")} </div>
        </div> */}
        <div className={detail["row"]}>
          <div className={detail["received-by"]}>Received By </div>
          <div className={detail["jane-doe"]}>{(get(documentData, 'received_by',  "--") || "--")} </div>
        </div>
        <div className={detail["row2"]}>
          <div className={detail["authenticated"]}>Authenticated </div>
          <div className={detail["yes"]}>{(get(documentData, 'authenticated',  "--") || "--")} </div>
        </div>
        <div className={detail["row"]}>
          <div className={detail["_201-copy"]}>201 Copy </div>
          <div className={detail["no"]}>{(get(documentData, '201_copy',  "--") || "--")} </div>
        </div>
        <div className={detail["row2"]}>
          <div className={detail["released-date"]}>Released Date </div>
          <div className={detail["_10-24-2023"]}>{(get(documentData, 'release_date',  "--") || "--")}</div>
        </div>
        <div className={detail["row"]}>
          <div className={detail["released-by"]}>Released By </div>
          <div className={detail["jane-doe"]}>{(get(documentData, 'release_by',  "--") || "--")}</div>
        </div>
        <div className={detail["row2"]}>
          <div className={detail["remarks"]}>Remarks </div>
          <div className={detail["legazpi"]}>
          {(get(documentData, 'remarks',  "--") || "--")}
          </div>
        </div>
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

export default Document;
