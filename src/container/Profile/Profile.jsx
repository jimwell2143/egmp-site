import React, { useEffect, useState } from 'react';
import Footer from "../../components/Footer/Footer";
import ProfileNavigation from "../../components/Navigation/ProfileNavigation";
import styles from "./style.module.css";
import header from "./header.module.css";
import DisplayPersonal from "../../components/Profile/Personal/DisplayPersonal";
import { Link } from "react-router-dom";
import DisplayContact from '../../components/Profile/Contact/DisplayContact';
import DisplayEducation from '../../components/Profile/Education/DisplayEducation';
import DisplayWorkHistory from '../../components/Profile/WorkHistory/DisplayWorkHistory';
import DisplayTraining from '../../components/Profile/Training/DisplayTraining';
import DisplayPassword from '../../components/Profile/Password/DisplayPassword';
import { useAction, useSelect } from '../../hooks';
import { get } from 'lodash';
import { api } from '../../api';

const Profile = () => {
    const profileSelected = useSelect('profile.profileSelected');

    const [selectedFilePhoto, setSelectedFilePhoto] = useState(get(profileSelected, 'photo', ""));

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
                            <div className={activeTab == 1 ? header["tab"] : activeTab == 1 ? header["tab"] : header["tab2"]}>Personal </div>
                        </div>
                        <div className={activeTab == 1 ? header["line"] : activeTab == 1 ? header["line"] : header["line2"]}></div>
                        </div>

                        <div className={header["tab-items-line-tab-multiverse"]} onClick={() => handleTabClick(2)}>
                        <div className={header["content"]}>
                            <div className={activeTab == 2 ? header["tab"] : header["tab2"]}>Contact </div>
                        </div>
                        <div className={activeTab == 2 ? header["line"] : header["line2"]}></div>
                        </div>
                        <div className={header["tab-items-line-tab-multiverse"]} onClick={() => handleTabClick(3)}>
                        <div className={header["content"]}>
                            <div className={activeTab == 3 ? header["tab"] : header["tab2"]}>Education </div>
                        </div>
                        <div className={activeTab == 3 ? header["line"] : header["line2"]}></div>
                        </div>
                        <div className={header["tab-items-line-tab-multiverse"]} onClick={() => handleTabClick(4)}>
                        <div className={header["content"]}>
                            <div className={activeTab == 4 ? header["tab"] : header["tab2"]}>Work History </div>
                        </div>
                        <div className={activeTab == 4 ? header["line"] : header["line2"]}></div>
                        </div>
                        <div className={header["tab-items-line-tab-multiverse"]} onClick={() => handleTabClick(5)}>
                        <div className={header["content"]}>
                            <div className={activeTab == 5 ? header["tab"] : header["tab2"]}>Training / Seminars </div>
                        </div>
                        <div className={activeTab == 5 ? header["line"] : header["line2"]}></div>
                        </div>
                        <div className={header["tab-items-line-tab-multiverse"]} onClick={() => handleTabClick(6)}>
                        <div className={header["content"]}>
                            <div className={activeTab == 6 ? header["tab"] : header["tab2"]}>Password </div>
                        </div>
                        <div className={activeTab == 6 ? header["line"] : header["line2"]}></div>
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
                        <div className="container mx-auto" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            {activeTab == 1 &&
                                <DisplayPersonal selectedFilePhoto={selectedFilePhoto} setActiveTab={setActiveTab}/>
                            }
                            {activeTab == 2 &&
                                <DisplayContact setActiveTab={setActiveTab}/>
                            }
                            {activeTab == 3 &&
                                <DisplayEducation setActiveTab={setActiveTab}/>
                            }
                            {activeTab == 4 &&
                                <DisplayWorkHistory setActiveTab={setActiveTab}/>
                            }
                            {activeTab == 5 &&
                                <DisplayTraining setActiveTab={setActiveTab}/>
                            }
                            {activeTab == 6 &&
                                <DisplayPassword setActiveTab={setActiveTab}/>
                            }



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

export default Profile;
