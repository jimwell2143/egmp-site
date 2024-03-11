import React, { useEffect, useState } from 'react';
import Footer from "../../components/Footer/Footer";
import ProfileNavigation from "../../components/Navigation/ProfileNavigation";
import styles from "./style.module.css";
import buttonStyle from "./button.module.css";
import styles2 from "./style2.module.css";
import header from "./header.module.css";
import DisplayPersonal from "../../components/Profile/Personal/DisplayPersonal";
import { Link } from "react-router-dom";
import { useAction, useSelect } from '../../hooks';
import { get } from 'lodash';
import { api } from '../../api';
import { createModal } from '../../components/Modal';
import UploadJobOfferModal from './modals/UploadJobOfferModal';
import { toast } from 'react-toastify';

const Tracker = () => {
  const getProfile = useAction('profile.getProfile');
    const getApplicationLogs = useAction('manpower.getApplicationLogs');

    const profileSelected = useSelect('profile.profileSelected');

    const applicationLogList = useSelect('manpower.applicationLogList');
    
    const [selectedFilePhoto, setSelectedFilePhoto] = useState(get(profileSelected, 'photo', ""));

    useEffect(() => {
        getProfile();
        getApplicationLogs();
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

    console.log("profileSelected", get(profileSelected, 'applications', ""))
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
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
                            src="/profile-banner.png"
                            alt="about-header"
                            className="top-0 w-full h-full object-cover"
                        />
                        </div>
                    </div>

                    <div className={header["tabs"]}>
                        <div className={header["tab-items-line-tab-multiverse"]} onClick={() => handleTabClick(1)}>
                        <div className={header["content"]}>
                            <div className={activeTab == 1 ? header["tab"] : activeTab == 1 ? header["tab"] : header["tab2"]}>Status Tracker </div>
                        </div>
                        <div className={activeTab == 1 ? header["line"] : activeTab == 1 ? header["line"] : header["line2"]}></div>
                        </div>

                        <div className={header["tab-items-line-tab-multiverse"]} onClick={() => handleTabClick(2)}>
                        <div className={header["content"]}>
                            <div className={activeTab == 2 ? header["tab"] : header["tab2"]}>Job Detail </div>
                        </div>
                        <div className={activeTab == 2 ? header["line"] : header["line2"]}></div>
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
                    <div className="bg-white" style={{paddingTop: "20px"}}>
                        <div className="container mx-auto pb-7" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>

                     

                            {activeTab == 1 && get(profileSelected, 'applications[0]') &&
                            <div className={styles["frame-46465"]}>
                            <div className={styles["container-filled"]}>
                              <div className={styles["applying-for"]}>APPLYING FOR </div>
                              <div className={styles["header"]}>
                                <div className={styles["avatar"]}>
                                  <img className={styles["content"]} src="jo1.png" />
                                </div>
                                <div className={styles["info"]}>
                                  <div className={styles["cook-baratie-restaurant"]}>
                                    <span>
                                      <span className={styles["cook-baratie-restaurant-span"]}>
                                      {(get(profileSelected, 'applications[0].manpower_request.jo_category', "--") || "--")} -&nbsp;
                                      </span>
                                      <span className={styles["cook-baratie-restaurant-span2"]}>
                                      {(get(profileSelected, 'applications[0].manpower_request.principal_id.name', "--") || "--")}
                                      </span>
                                    </span>{" "}
                                  </div>
                                  <div className={styles["subinfo"]}>
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
                                        {(get(profileSelected, 'applications[0].manpower_request.principal_id.region_code.name', "--") || "--")}&nbsp;{(get(profileSelected, 'applications[0].manpower_request.principal_id.province_code.name', "--") || "--")}&nbsp;{(get(profileSelected, 'applications[0].manpower_request.principal_id.municipality_code.name', "--") || "--")}&nbsp;
                                        {(get(profileSelected, 'applications[0].manpower_request.principal_id.street', "--") || "--")}

                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["buttons"]}>
                              <div className={styles["list-of-4-entries"]}>List of (1 entries) </div>
                              <div className={styles["text-button"]}>
                                <svg
                                  className={styles["sort-ascending"]}
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.39961 2.40039C1.95778 2.40039 1.59961 2.75856 1.59961 3.20039C1.59961 3.64222 1.95778 4.00039 2.39961 4.00039H11.1996C11.6414 4.00039 11.9996 3.64222 11.9996 3.20039C11.9996 2.75856 11.6414 2.40039 11.1996 2.40039H2.39961Z"
                                    fill="#BEAC6F"
                                  />
                                  <path
                                    d="M2.39961 5.60039C1.95778 5.60039 1.59961 5.95856 1.59961 6.40039C1.59961 6.84222 1.95778 7.20039 2.39961 7.20039H6.3996C6.84143 7.20039 7.1996 6.84222 7.1996 6.40039C7.1996 5.95856 6.84143 5.60039 6.3996 5.60039H2.39961Z"
                                    fill="#BEAC6F"
                                  />
                                  <path
                                    d="M2.39961 8.80039C1.95778 8.80039 1.59961 9.15856 1.59961 9.60039C1.59961 10.0422 1.95778 10.4004 2.39961 10.4004H5.5996C6.04143 10.4004 6.3996 10.0422 6.3996 9.60039C6.3996 9.15856 6.04143 8.80039 5.5996 8.80039H2.39961Z"
                                    fill="#BEAC6F"
                                  />
                                  <path
                                    d="M10.3996 12.8004C10.3996 13.2422 10.7578 13.6004 11.1996 13.6004C11.6414 13.6004 11.9996 13.2422 11.9996 12.8004L11.9996 8.33176L13.0339 9.36608C13.3463 9.6785 13.8529 9.6785 14.1653 9.36608C14.4777 9.05366 14.4777 8.54713 14.1653 8.23471L11.7653 5.83471C11.6153 5.68468 11.4118 5.60039 11.1996 5.60039C10.9874 5.60039 10.7839 5.68468 10.6339 5.83471L8.23391 8.23471C7.92149 8.54712 7.92149 9.05366 8.23391 9.36608C8.54633 9.6785 9.05286 9.6785 9.36528 9.36608L10.3996 8.33176V12.8004Z"
                                    fill="#BEAC6F"
                                  />
                                </svg>
                      
                                <div className={styles["button"]}>Oldest First </div>
                              </div>
                            </div>
     
                         
                            {(applicationLogList || []).map((data, index) => {
                                return (
                            <div className={styles["container-filled3"]} style={{background: index == 0 ? "#F9F6F1" : "", gap: "10px"}}>
                              <div className={styles["header2"]}>
                               

                                  {data.event == "NEW" &&
                                    <>
                                    <div className={styles["accepted-application"]}>
                                    Accepted Application{" "}
                                  </div>
                                    <div className={styles["badge5"]} style={{backgroundColor: "blue"}}>
                                      <div className={styles["badge2"]}>SCREENING </div>
                                    </div>
                                    </>
                                  }

                                  {data.event == "SCREENED" &&
                                    <>
                                    <div className={styles["accepted-application"]}>
                                    Accepted for Lineup
                                  </div>
                                    <div className={styles["badge5"]} style={{backgroundColor: "#FFB803"}}>
                                      <div className={styles["badge2"]}>LINEUP</div>
                                    </div>
                                    </>
                                  }

                                  {data.event == "REAPPLICATION" &&
                                    <>
                                    <div className={styles["accepted-application"]}>
                                    Reapplication
                                  </div>
                                    <div className={styles["badge5"]} style={{backgroundColor: "#FFB803"}}>
                                      <div className={styles["badge2"]}>{data.event}</div>
                                    </div>
                                    </>
                                  }

                                  {data.event == "BLACKLISTED" &&
                                    <>
                                    <div className={styles["accepted-application"]}>
                                    Accepted Application{" "}
                                  </div>
                                    <div className={styles["badge5"]} style={{backgroundColor: "#DB4343"}}>
                                      <div className={styles["badge2"]}>{data.event} </div>
                                    </div>
                                    </>
                                  }                             

                                  {data.event == "PASSED" &&
                                    <>
                                    <div className={styles["accepted-application"]}>
                                    Interviewed by Employer
                                  </div>
                                    <div className={styles["badge5"]} style={{backgroundColor: "#54D468"}}>
                                      <div className={styles["badge2"]}>{data.event} </div>
                                    </div>
                                    </>
                                    
                                  }

                                  {data.event == "HOLD" &&
                                    <>
                                    <div className={styles["accepted-application"]}>
                                    Hold
                                  </div>
                                    <div className={styles["badge5"]} style={{backgroundColor: "#FFB803"}}>
                                      <div className={styles["badge2"]}>{data.event} </div>
                                    </div>
                                    </>
                                    
                                  }

                                  {data.event == "BACKUP" &&
                                    <>
                                    <div className={styles["accepted-application"]}>
                                    Backup
                                  </div>
                                    <div className={styles["badge5"]} style={{backgroundColor: "#949494"}}>
                                      <div className={styles["badge2"]}>{data.event} </div>
                                    </div>
                                    </>
                                    
                                  }

                                  {data.event == "SELECTED" &&
                                    <>
                                    <div className={styles["accepted-application"]}>
                                    Job Offer
                                  </div>
                                    <div className={styles["badge5"]} style={{backgroundColor: "#54D468"}}>
                                      <div className={styles["badge2"]}>{data.event} </div>
                                    </div>
                                    </>
                                    
                                  }

                                    {data.event == "ENDORSED" &&
                                    <>
                                    <div className={styles["accepted-application"]}>
                                    Endorsed
                                  </div>
                                    <div className={styles["badge5"]} style={{backgroundColor: "#54D468"}}>
                                      <div className={styles["badge2"]}>{data.event} </div>
                                    </div>
                                    </>
                                    
                                  }
                              </div>

                              {data.event == "SCREENED" &&
                             <>     
                              <div className={styles["october-24-2023-10-00-00-am"]}>
                                Date: {data.created_at} 
                              </div>
                              <div className={styles["october-24-2023-10-00-00-am"]}>
                                Employer Interview Type: {get(profileSelected, 'applications[0].employer_interview[0].employer_interview_type', "")}
                              </div>
                              <div className={styles["october-24-2023-10-00-00-am"]}>
                                Employer Interview Date: {get(profileSelected, 'applications[0].employer_interview[0].employer_interview_date', "")}
                              </div>
                              <div className={styles["october-24-2023-10-00-00-am"]}>
                              Employer Interview Location/Link: {get(profileSelected, 'applications[0].employer_interview[0].employer_interview_location_link', "")}
                              </div>
                              <div className={styles["october-24-2023-10-00-00-am"]}>
                              Employer Interview Remarks: {get(profileSelected, 'applications[0].employer_interview[0].employer_interview_remarks', "")}
                              </div>

                          
                              <div className={styles["october-24-2023-10-00-00-am"]}>
                                Agency Interview Type: {get(profileSelected, 'applications[0].employer_interview[0].agency_interview_type', "")}
                              </div>
                              <div className={styles["october-24-2023-10-00-00-am"]}>
                              Agency Interview Date: {get(profileSelected, 'applications[0].employer_interview[0].agency_interview_date', "")}
                              </div>
                              <div className={styles["october-24-2023-10-00-00-am"]}>
                              Agency Interview Location/Link: {get(profileSelected, 'applications[0].employer_interview[0].agency_interview_location_link', "")}
                              </div>
                              <div className={styles["october-24-2023-10-00-00-am"]}>
                              Agency Interview Remarks: {get(profileSelected, 'applications[0].employer_interview[0].agency_interview_remarks', "")}
                              </div>
                              </>
                            }

                            {data.event == "SELECTED" &&
                              <>
                               <div className={styles["october-24-2023-10-00-00-am"]}>
                              {data.created_at} 
                              </div>
                              <div className={styles["ddfds"]}>
                                {data.payload.remarks || data.payload.employer_interview_remarks || 'N/A'}
                              </div>
                                  <div className={buttonStyle["frame-46464"]}>
                              <div className={buttonStyle["solid-button"]} style={{cursor: "pointer"}} onClick={(e) => {
                                        createModal({
                                            title: "Blacklist",
                                            content: (close) => (
                                                <UploadJobOfferModal 
                                                  id="1"
                                                  onClose={close}
                                                  initialValues={{
                                                    job_offer: get(profileSelected, 'applications[0].job_offer', "")
                                                  }}
                                                />
                                            ),
                                            size: "sm",
                                        })
                                      }}>
                                <div className={buttonStyle["content"]}>
                                  <div className={buttonStyle["button"]}>Upload Signed Job Offer </div>
                                </div>
                              </div>
                              <div className={buttonStyle["solid-button2"]} style={{cursor: "pointer"}} onClick={(e) => {
                                       toast.success("Successfully Declined Job Offer", { position: 'top-right' })
                                      }}>
                                <div className={buttonStyle["button"]}>Decline Job Offer </div>
                              </div>
                            </div>
                      
                              </>
                            }


                            {data.event != "SCREENED" && data.event != "SELECTED" &&
                             <>     
                              <div className={styles["october-24-2023-10-00-00-am"]}>
                              {data.created_at} 
                              </div>
                              <div className={styles["ddfds"]}>
                                {data.payload.remarks || data.payload.employer_interview_remarks || 'N/A'}
                              </div>
                              </>
                            }



                            </div>


                                  )
                                })}
                          </div>

                            }

                            {activeTab == 2 && get(profileSelected, 'applications[0]') &&
                             <div className={styles2["container-filled"]}>
                             <div className={styles2["applying-for"]}>APPLYING FOR </div>
                             <div className={styles2["header"]}>
                               <div className={styles2["avatar"]}>
                                 <img className={styles2["content"]} src="jo1.png" />
                               </div>
                               <div className={styles2["info"]}>
                                 <div className={styles2["cook-baratie-restaurant"]}>
                                   <span>
                                     <span className={styles2["cook-baratie-restaurant-span"]}>
                                     {(get(profileSelected, 'applications[0].manpower_request.jo_category', "--") || "--")} -&nbsp;
                                     </span>
                                     <span className={styles2["cook-baratie-restaurant-span2"]}>
                                     {(get(profileSelected, 'applications[0].manpower_request.principal_id.name', "--") || "--")}
                                     </span>
                                   </span>{" "}
                                 </div>
                                 <div className={styles2["subinfo"]}>
                                   <div className={styles2["location"]}>
                                     <svg
                                       className={styles2["location-marker"]}
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
                                         styles2["_123-faraway-street-al-olaya-riyadh-saudi-arabia"]
                                       }
                                     >
                                                   {(get(profileSelected, 'applications[0].manpower_request.principal_id.region_code.name', "--") || "--")}&nbsp;{(get(profileSelected, 'applications[0].manpower_request.principal_id.province_code.name', "--") || "--")}&nbsp;{(get(profileSelected, 'applications[0].manpower_request.principal_id.municipality_code.name', "--") || "--")}&nbsp;
                                        {(get(profileSelected, 'applications[0].manpower_request.principal_id.street', "--") || "--")}
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                             <div className={styles2["php-25-k-35-k-monthly"]}>
                               PHP  {(get(profileSelected, 'applications[0].manpower_request.jo_salary', "--") || "--")}K Monthly{" "}
                             </div>
                             <div className={styles2["divider"]}></div>
                             <div className={styles2["other-information"]}>
                               <div className={styles2["job-description"]}>
                                 <div className={styles2["gender"]}>GENDER </div>
                                 <div className={styles2["asdasd"]}>Any </div>
                               </div>
                               <div className={styles2["job-description"]}>
                                 <div className={styles2["religion"]}>RELIGION </div>
                                 <div className={styles2["asdasd"]}>Any </div>
                               </div>
                             </div>
                             <div className={styles2["job-description2"]}>
                               <div className={styles2["job-description3"]}>JOB DESCRIPTION </div>
                               <div className={styles2["asdasd"]}>
                               {(get(profileSelected, 'applications[0].manpower_request.jo_jd_1', "--") || "--")}
                               </div>
                             </div>
                             <div className={styles2["job-requirements"]}>
                               <div className={styles2["job-requirements2"]}>JOB REQUIREMENTS </div>
                               <div className={styles2["asdasd"]}>
                               {(get(profileSelected, 'applications[0].manpower_request.jo_jd_2', "--") || "--")}
                               </div>
                             </div>
                           </div>

                            }

                            {/* {activeTab == 1 &&
                                <DisplayPersonal selectedFilePhoto={selectedFilePhoto}/>
                            }
                            {activeTab == 2 &&
                                <DisplayContact />
                            }
                            {activeTab == 3 &&
                                <DisplayEducation />
                            }
                            {activeTab == 4 &&
                                <DisplayWorkHistory />
                            }
                            {activeTab == 5 &&
                                <DisplayTraining />
                            }
                            {activeTab == 6 &&
                                <DisplayPassword />
                            } */}



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

export default Tracker;
