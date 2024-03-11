import React, { useEffect, useState } from 'react';
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import styles from "./style.module.css";
import terms from "./terms.module.css";
import { Link, useHistory } from "react-router-dom";
import Select from 'react-select'
import { Formik, Form, Field } from "formik"
import Input from "../../components/Input/Input";
import { get } from 'lodash';
import { useAction, useSelect } from '../../hooks';
import * as c from "./constants";
import { toast } from 'react-toastify';
import { api } from '../../api';

import { createModal } from '../../components/Modal';

const SignupJobSeeker = () => {
    const [isChecked, setIsChecked] = useState(false);

    const history = useHistory()
    const [selectedFile, setSelectedFile] = useState("");

    const register = useAction('profile.register');

    const getRegion = useAction('dropdown.getRegion');
    const getProvince = useAction('dropdown.getProvince');
    const getMunincipality = useAction('dropdown.getMunincipality');
    const getBarangay = useAction('dropdown.getBarangay');
    const getSourceApplication = useAction('dropdown.getSourceApplication');
    const getPosition = useAction('dropdown.getPosition');

    const regionDropdown = useSelect('dropdown.regionDropdown');
    const provinceDropdown = useSelect('dropdown.provinceDropdown');
    const munincipalityDropdown = useSelect('dropdown.munincipalityDropdown');
    const barangayDropdown = useSelect('dropdown.barangayDropdown');
    const sourceApplicationDropdown = useSelect('dropdown.sourceApplicationDropdown');
    const positionDropdown = useSelect('dropdown.positionDropdown');

    const handleFileChange = (event) => {
        const formData = new FormData();
        formData.append('file', event.target.files[0]);

        api.post('/api/ste/files/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })
            .then(response => {
                console.log('Image uploaded successfully.', response);
                toast.success(response.data.message, { position: 'top-right' })
                setSelectedFile(response.data.file)
            })
            .catch(error => {
                console.error('Error uploading image.', error);
            });
    };

    useEffect(() => {
        const getRegionWithDelay = () => {
            setTimeout(() => {
                getRegion();
                getPositionWithDelay();
            }, 1000); // 1 second delay
        };

        const getPositionWithDelay = () => {
            setTimeout(() => {
                getPosition();
                getSourceApplicationWithDelay();
            }, 2000); // 2 seconds delay
        };

        const getSourceApplicationWithDelay = () => {
            setTimeout(() => {
                getSourceApplication();
            }, 3000); // 3 seconds delay
        };

        getRegionWithDelay();

        // Clean up function to clear any remaining timeouts in case the component is unmounted
        return () => {
            clearTimeout(getRegionWithDelay);
            clearTimeout(getPositionWithDelay);
            clearTimeout(getSourceApplicationWithDelay);
        };
    }, []);


    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    password_confirmation: "",
                    last_name: "",
                    first_name: "",
                    middle_name: "",
                    extension_name: "",
                    mobile_number: "",
                    date_of_birth: "",
                    position_id: "",
                    application_source_id: "",
                    gender: "",
                    telephone_number: "",
                    region_code: "",
                    province_code: "",
                    municipality_code: "",
                    barangay_code: "",
                    street: "",
                    resume: "",
                    photo: ""

                }}
                onSubmit={async (values) => {
                    values.resume = selectedFile;
                    values.telephone_number = values.mobile_number;
                    values.photo = `https://eu.ui-avatars.com/api/?name=${values.first_name}+${values.last_name}&size=250`
                    register(values, (data) => {
                        history.push({
                            pathname: '/'
                        })
                    });
                    console.log("onSubmit", values)
                }}
            >
                {(formikProps) => (
                    <Form style={{ height: '100%' }}>
                        <Navigation />
                        <div className="h-screen">
                            <div className="w-full">
                                <div className="inset-0 z-0">

                                    <img
                                        src="/signup.png"
                                        alt="about-header"
                                        width={1512}
                                        height={280}
                                        className="top-0 w-full object-cover"
                                        style={{ paddingTop: "6%" }}
                                    />

                                    <div className="bg-white">
                                        <div className="container mx-auto p-7" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <div className={styles["container-filled"]}>
                                                <div className={styles["sign-up-as-a-job-seeker"]}>
                                                    Sign Up as a Job Seeker{" "}
                                                </div>
                                                <div className={styles["field-group2"]}>
                                                    <div className={styles["password"]}>Application </div>
                                                    <div className={styles["row"]}>


                                                        <div className={styles["input-text-with-icon"]}>
                                                            <div className={styles["label"]}>
                                                                <div className={styles["label-and-icon"]}>
                                                                    <div className={styles["label2"]}>Applicant Position</div>
                                                                </div>
                                                            </div>

                                                            <Select
                                                                options={positionDropdown || []}
                                                                value={(positionDropdown || []).find(option => option.value === formikProps.values.position_id)}
                                                                onChange={(option) => formikProps.setFieldValue('position_id', option.value)}
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

                                                        </div>
                                                        <div className={styles["input-text-with-icon"]}>
                                                            <div className={styles["label"]}>
                                                                <div className={styles["label-and-icon"]}>
                                                                    <div className={styles["label2"]}>Application Source</div>
                                                                </div>
                                                            </div>

                                                            <Select
                                                                options={sourceApplicationDropdown || []}
                                                                value={(sourceApplicationDropdown || []).find(option => option.value === formikProps.values.application_source_id)}
                                                                onChange={(option) => formikProps.setFieldValue('application_source_id', option.value)}
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

                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <div className={styles["field-group2"]}>
                                                    <div className={styles["password"]}>PASSWORD </div>
                                                    <div className={styles["row"]}>


                                                        <div className={styles["input-text-with-icon"]}>
                                                            <div className={styles["label"]}>
                                                                <div className={styles["label-and-icon"]}>
                                                                    <div className={styles["label2"]}>Password</div>
                                                                </div>
                                                            </div>

                                                            <Input
                                                                type="password"
                                                                name="password"
                                                                className={styles["input-field"]}
                                                                required
                                                            />

                                                        </div>
                                                        <div className={styles["input-text-with-icon"]}>
                                                            <div className={styles["label"]}>
                                                                <div className={styles["label-and-icon"]}>
                                                                    <div className={styles["label2"]}>Retype Password </div>
                                                                </div>
                                                            </div>

                                                            <Input
                                                                type="password"
                                                                name="password_confirmation"
                                                                className={styles["input-field"]}
                                                                required
                                                            />

                                                        </div>
                                                    </div>
                                                </div> */}



                                                <div className={styles["field-group"]}>
                                                    <div className={styles["name-of-job-seeker"]}>Name of Job Seeker </div>
                                                    <div className={styles["row"]}>
                                                        <div className={styles["input-text"]}>
                                                            <div className={styles["label"]}>
                                                                <div className={styles["label-and-icon"]}>
                                                                    <div className={styles["label2"]}>Last Name </div>
                                                                    <svg
                                                                        className={styles["form-required3"]}
                                                                        width="16"
                                                                        height="16"
                                                                        viewBox="0 0 16 16"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M9.78841 3.76755L10.3884 4.84755L8.82841 5.41155L10.3884 5.97555L9.76441 7.09156L8.46841 6.02355L8.74441 7.67955H7.49641L7.76041 6.02355L6.47641 7.11556L5.81641 5.96355L7.37641 5.39955L5.82841 4.85955L6.44041 3.75555L7.77241 4.81155L7.49641 3.14355H8.75641L8.46841 4.81155L9.78841 3.76755Z"
                                                                            fill="#DB4343"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>

                                                            <Input
                                                                type="text"
                                                                name="last_name"
                                                                className={styles["input-field"]}
                                                                required
                                                            />
                                                        </div>
                                                        <div className={styles["input-text"]}>
                                                            <div className={styles["label"]}>
                                                                <div className={styles["label-and-icon"]}>
                                                                    <div className={styles["label2"]}>First Name </div>
                                                                    <svg
                                                                        className={styles["form-required4"]}
                                                                        width="16"
                                                                        height="16"
                                                                        viewBox="0 0 16 16"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M9.78841 3.76755L10.3884 4.84755L8.82841 5.41155L10.3884 5.97555L9.76441 7.09156L8.46841 6.02355L8.74441 7.67955H7.49641L7.76041 6.02355L6.47641 7.11556L5.81641 5.96355L7.37641 5.39955L5.82841 4.85955L6.44041 3.75555L7.77241 4.81155L7.49641 3.14355H8.75641L8.46841 4.81155L9.78841 3.76755Z"
                                                                            fill="#DB4343"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <Input
                                                                type="text"
                                                                name="first_name"
                                                                className={styles["input-field"]}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={styles["row"]}>
                                                        <div className={styles["input-text"]}>
                                                            <div className={styles["label"]}>
                                                                <div className={styles["label-and-icon"]}>
                                                                    <div className={styles["label2"]}>Middle Name </div>
                                                                </div>
                                                            </div>
                                                            <Input
                                                                type="text"
                                                                name="middle_name"
                                                                className={styles["input-field"]}
                                                                required
                                                            />
                                                        </div>
                                                        <div className={styles["selection-dropdown2"]}>
                                                            <div className={styles["label"]}>
                                                                <div className={styles["label-and-icon"]}>
                                                                    <div className={styles["label2"]}>Suffix </div>
                                                                </div>
                                                            </div>

                                                            <Select
                                                                options={c.EXTENSION_NAMES}
                                                                value={c.EXTENSION_NAMES.find(option => option.value === formikProps.values.extension_name)}
                                                                onChange={(option) => {
                                                                    return formikProps.setFieldValue('extension_name', option.value)
                                                                }}
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
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles["field-group"]}>
                                                    <div className={styles["contact-information"]}>
                                                        Account Information{" "}
                                                    </div>
                                                    <div className={styles["row"]}>
                                                        <div className={styles["input-text"]}>
                                                            <div className={styles["label"]}>
                                                                <div className={styles["label-and-icon"]}>
                                                                    <div className={styles["label2"]}>Email Address </div>
                                                                    <svg
                                                                        className={styles["form-required5"]}
                                                                        width="16"
                                                                        height="16"
                                                                        viewBox="0 0 16 16"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M9.78841 3.76755L10.3884 4.84755L8.82841 5.41155L10.3884 5.97555L9.76441 7.09156L8.46841 6.02355L8.74441 7.67955H7.49641L7.76041 6.02355L6.47641 7.11556L5.81641 5.96355L7.37641 5.39955L5.82841 4.85955L6.44041 3.75555L7.77241 4.81155L7.49641 3.14355H8.75641L8.46841 4.81155L9.78841 3.76755Z"
                                                                            fill="#DB4343"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>

                                                            <Input
                                                                type="text"
                                                                name="email"
                                                                className={styles["input-field"]}
                                                                required
                                                            />
                                                        </div>
                                                        <div className={styles["input-mobile"]}>
                                                            <div className={styles["label"]}>
                                                                <div className={styles["label-and-icon"]}>
                                                                    <div className={styles["label2"]}>Mobile No. </div>
                                                                </div>
                                                            </div>
                                                            <Input
                                                                type="text"
                                                                name="mobile_number"
                                                                className={styles["input-field"]}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={styles["row"]}>


                                                        <div className={styles["input-text-with-icon"]}>
                                                            <div className={styles["label"]}>
                                                                <div className={styles["label-and-icon"]}>
                                                                    <div className={styles["label2"]}>Password</div>
                                                                </div>
                                                            </div>

                                                            <Input
                                                                type="password"
                                                                name="password"
                                                                className={styles["input-field"]}
                                                                required
                                                            />

                                                        </div>
                                                        <div className={styles["input-text-with-icon"]}>
                                                            <div className={styles["label"]}>
                                                                <div className={styles["label-and-icon"]}>
                                                                    <div className={styles["label2"]}>Retype Password </div>
                                                                </div>
                                                            </div>

                                                            <Input
                                                                type="password"
                                                                name="password_confirmation"
                                                                className={styles["input-field"]}
                                                                required
                                                            />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles["field-group"]}>
                                                    <div className={styles["other-information"]}>Other Information </div>
                                                    <div className={styles["row"]}>
                                                        <div className={styles["input-text-with-attached-button"]}>
                                                            <div className={styles["label"]}>
                                                                <div className={styles["label-and-icon"]}>
                                                                    <div className={styles["label2"]}>Date of Birth </div>
                                                                    <svg
                                                                        className={styles["form-required7"]}
                                                                        width="16"
                                                                        height="16"
                                                                        viewBox="0 0 16 16"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M9.78841 3.76755L10.3884 4.84755L8.82841 5.41155L10.3884 5.97555L9.76441 7.09156L8.46841 6.02355L8.74441 7.67955H7.49641L7.76041 6.02355L6.47641 7.11556L5.81641 5.96355L7.37641 5.39955L5.82841 4.85955L6.44041 3.75555L7.77241 4.81155L7.49641 3.14355H8.75641L8.46841 4.81155L9.78841 3.76755Z"
                                                                            fill="#DB4343"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <Input
                                                                type="date"
                                                                name="date_of_birth"
                                                                className={styles["input-field"]}
                                                                required
                                                            />
                                                        </div>
                                                        <div className={styles["selection-dropdown2"]}>
                                                            <div className={styles["label"]}>
                                                                <div className={styles["label-and-icon"]}>
                                                                    <div className={styles["label2"]}>Gender </div>
                                                                    <svg
                                                                        className={styles["form-required8"]}
                                                                        width="16"
                                                                        height="16"
                                                                        viewBox="0 0 16 16"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M9.78841 3.76755L10.3884 4.84755L8.82841 5.41155L10.3884 5.97555L9.76441 7.09156L8.46841 6.02355L8.74441 7.67955H7.49641L7.76041 6.02355L6.47641 7.11556L5.81641 5.96355L7.37641 5.39955L5.82841 4.85955L6.44041 3.75555L7.77241 4.81155L7.49641 3.14355H8.75641L8.46841 4.81155L9.78841 3.76755Z"
                                                                            fill="#DB4343"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>

                                                            <Select
                                                                options={c.GENDERS}
                                                                value={c.GENDERS.find(option => option.value === formikProps.values.gender)}
                                                                onChange={(option) => formikProps.setFieldValue('gender', option.value)}
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
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles["field-group"]}>
                                                    <div className={styles["address"]}>Address </div>
                                                    <div className={styles["row"]}>
                                                        <div className={styles["selection-dropdown2"]}>
                                                            <div className={styles["label"]}>
                                                                <div className={styles["label-and-icon"]}>
                                                                    <div className={styles["label2"]}>Region </div>
                                                                    <svg
                                                                        className={styles["form-required9"]}
                                                                        width="16"
                                                                        height="16"
                                                                        viewBox="0 0 16 16"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M9.78841 3.76755L10.3884 4.84755L8.82841 5.41155L10.3884 5.97555L9.76441 7.09156L8.46841 6.02355L8.74441 7.67955H7.49641L7.76041 6.02355L6.47641 7.11556L5.81641 5.96355L7.37641 5.39955L5.82841 4.85955L6.44041 3.75555L7.77241 4.81155L7.49641 3.14355H8.75641L8.46841 4.81155L9.78841 3.76755Z"
                                                                            fill="#DB4343"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>

                                                            <Select
                                                                options={regionDropdown || []}
                                                                value={(regionDropdown || []).find(option => option.value === formikProps.values.region_code)}
                                                                onChange={(option) => {
                                                                    const params = {
                                                                        region_code: option.value
                                                                    };
                                                                    getProvince(params);
                                                                    return formikProps.setFieldValue('region_code', option.value)
                                                                }}
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
                                                        </div>
                                                        <div className={styles["selection-dropdown2"]}>
                                                            <div className={styles["label"]}>
                                                                <div className={styles["label-and-icon"]}>
                                                                    <div className={styles["label2"]}>Province </div>
                                                                    <svg
                                                                        className={styles["form-required10"]}
                                                                        width="16"
                                                                        height="16"
                                                                        viewBox="0 0 16 16"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M9.78841 3.76755L10.3884 4.84755L8.82841 5.41155L10.3884 5.97555L9.76441 7.09156L8.46841 6.02355L8.74441 7.67955H7.49641L7.76041 6.02355L6.47641 7.11556L5.81641 5.96355L7.37641 5.39955L5.82841 4.85955L6.44041 3.75555L7.77241 4.81155L7.49641 3.14355H8.75641L8.46841 4.81155L9.78841 3.76755Z"
                                                                            fill="#DB4343"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>

                                                            <Select
                                                                options={provinceDropdown || []}
                                                                value={(provinceDropdown || []).find(option => option.value === formikProps.values.province_code)}
                                                                onChange={(option) => {
                                                                    const params = {
                                                                        province_code: option.value
                                                                    };
                                                                    getMunincipality(params);

                                                                    return formikProps.setFieldValue('province_code', option.value)
                                                                }}
                                                                className={styles["input-select"]}
                                                                isDisabled={provinceDropdown == undefined ? true : false}
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
                                                        </div>
                                                    </div>
                                                    <div className={styles["row"]}>
                                                        <div className={styles["selection-dropdown2"]}>
                                                            <div className={styles["label"]}>
                                                                <div className={styles["label-and-icon"]}>
                                                                    <div className={styles["label2"]}>City / Municipality </div>
                                                                    <svg
                                                                        className={styles["form-required11"]}
                                                                        width="16"
                                                                        height="16"
                                                                        viewBox="0 0 16 16"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M9.78841 3.76755L10.3884 4.84755L8.82841 5.41155L10.3884 5.97555L9.76441 7.09156L8.46841 6.02355L8.74441 7.67955H7.49641L7.76041 6.02355L6.47641 7.11556L5.81641 5.96355L7.37641 5.39955L5.82841 4.85955L6.44041 3.75555L7.77241 4.81155L7.49641 3.14355H8.75641L8.46841 4.81155L9.78841 3.76755Z"
                                                                            fill="#DB4343"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>

                                                            <Select
                                                                options={munincipalityDropdown || []}
                                                                value={(munincipalityDropdown || []).find(option => option.value === formikProps.values.municipality_code)}
                                                                onChange={(option) => {
                                                                    const params = {
                                                                        municipality_code: option.value
                                                                    };
                                                                    getBarangay(params);
                                                                    return formikProps.setFieldValue('municipality_code', option.value)

                                                                }}
                                                                className={styles["input-select"]}
                                                                isDisabled={munincipalityDropdown == undefined ? true : false}
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

                                                        </div>
                                                        <div className={styles["selection-dropdown2"]}>
                                                            <div className={styles["label"]}>
                                                                <div className={styles["label-and-icon"]}>
                                                                    <div className={styles["label2"]}>Barangay </div>
                                                                    <svg
                                                                        className={styles["form-required12"]}
                                                                        width="16"
                                                                        height="16"
                                                                        viewBox="0 0 16 16"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M9.78841 3.76755L10.3884 4.84755L8.82841 5.41155L10.3884 5.97555L9.76441 7.09156L8.46841 6.02355L8.74441 7.67955H7.49641L7.76041 6.02355L6.47641 7.11556L5.81641 5.96355L7.37641 5.39955L5.82841 4.85955L6.44041 3.75555L7.77241 4.81155L7.49641 3.14355H8.75641L8.46841 4.81155L9.78841 3.76755Z"
                                                                            fill="#DB4343"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>

                                                            <Select
                                                                options={barangayDropdown || []}
                                                                value={(barangayDropdown || []).find(option => option.value === formikProps.values.barangay_code)}
                                                                onChange={(option) => formikProps.setFieldValue('barangay_code', option.value)}
                                                                isDisabled={barangayDropdown == undefined ? true : false}
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
                                                        </div>
                                                    </div>
                                                    <div className={styles["row"]}>
                                                        <div className={styles["input-text"]}>
                                                            <div className={styles["label"]}>
                                                                <div className={styles["label-and-icon"]}>
                                                                    <div className={styles["label2"]}>Address Line </div>
                                                                    <svg
                                                                        className={styles["form-required13"]}
                                                                        width="16"
                                                                        height="16"
                                                                        viewBox="0 0 16 16"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M9.78841 3.76755L10.3884 4.84755L8.82841 5.41155L10.3884 5.97555L9.76441 7.09156L8.46841 6.02355L8.74441 7.67955H7.49641L7.76041 6.02355L6.47641 7.11556L5.81641 5.96355L7.37641 5.39955L5.82841 4.85955L6.44041 3.75555L7.77241 4.81155L7.49641 3.14355H8.75641L8.46841 4.81155L9.78841 3.76755Z"
                                                                            fill="#DB4343"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <Input
                                                                type="text"
                                                                name="street"
                                                                className={styles["input-field"]}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles["field-group"]}>
                                                    <div className={styles["upload"]}>UPLOAD </div>
                                                    <div className={styles["row"]}>
                                                        <div className={styles["input-file-upload"]}>
                                                            <div className={styles["label"]}>
                                                                <div className={styles["label-and-icon"]}>
                                                                    <div className={styles["label2"]}>Upload CV or Resume </div>
                                                                </div>
                                                            </div>
                                                            <input
                                                                type="file"
                                                                className={styles["input-file"]}
                                                                onChange={handleFileChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles["selection-checkbox-item"]}>
                                                    <div className={styles["checkbox"]}>
                                                        <input
                                                            onClick={() => {

                                                                var element = document.getElementById("header-nav");

                                                                // Apply a z-index of 0
                                                                if (element) {
                                                                    element.style.zIndex = "0";
                                                                }

                                                                createModal({
                                                                    title: "Add Source",
                                                                    content: (close) => (
                                                                        <div className={terms["terms-and-conditions"]}>
                                                                            <div className={terms["header"]}>
                                                                                <div
                                                                                    className={
                                                                                        terms["accept-terms-and-conditions-of-applying-with-e-gmp"]
                                                                                    }
                                                                                >
                                                                                    Accept Terms and Conditions of applying with E-GMP{" "}
                                                                                </div>
                                                                                <svg
                                                                                    onClick={() => {
                                                                                        var element = document.getElementById("header-nav");

                                                                                        // Apply a z-index of 0
                                                                                        if (element) {
                                                                                            element.style.zIndex = "50";
                                                                                        }

                                                                                        close()
                                                                                        const body = document.body
                                                                                        if (body)
                                                                                            body.classList.remove("no-scroll")
                                                                                    }}
                                                                                    style={{ cursor: "pointer" }}
                                                                                    className={terms["x"]}
                                                                                    width="16"
                                                                                    height="16"
                                                                                    viewBox="0 0 16 16"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M4 12L12 4M4 4L12 12"
                                                                                        stroke="#323943"
                                                                                        strokeWidth="2"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                    />
                                                                                </svg>
                                                                            </div>
                                                                            <div className={terms["contents"]}>
                                                                                <div className={terms["content"]}>
                                                                                    <div
                                                                                        className={
                                                                                            terms[
                                                                                            "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation"
                                                                                            ]
                                                                                        }
                                                                                    >
                                                                                        <span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                EGMP Website, Application Page Terms and Conditions
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span2"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                <br />
                                                                                                Terms of Agreement for E-GMP International Corporation&#039;s
                                                                                                OFW Recruitment Website
                                                                                                <br />
                                                                                                <br />
                                                                                                Welcome to E-GMP International Corporation&#039;s OFW
                                                                                                Recruitment Website (&quot;Website Name&quot;). This Terms of
                                                                                                Agreement sets forth the terms and conditions governing your use
                                                                                                of the Website. By accessing or using the Website, you agree to
                                                                                                be bound by the terms and conditions outlined herein. If you do
                                                                                                not agree with any part of this Agreement, please refrain from
                                                                                                using the Website.
                                                                                                <br />
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span3"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                Purpose of the Website:
                                                                                                <br />
                                                                                                The Website is owned and operated by E-GMP International
                                                                                                Corporation (&quot;E-GMP&quot;). It serves as a platform to
                                                                                                provide information about overseas employment opportunities
                                                                                                offered by E-GMP and enables job seekers
                                                                                                (&quot;Candidates&quot;) to apply for job openings (&quot;Job
                                                                                                Openings&quot;) available at E-GMP.
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span4"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span5"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                User Responsibilities
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span6"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                By using the Website, you acknowledge that all information
                                                                                                provided during the registration and application process is
                                                                                                accurate and up-to-date.
                                                                                                <br />
                                                                                                You shall not use the Website for any unlawful or unauthorized
                                                                                                purposes, including but not limited to engaging in fraudulent
                                                                                                activities or disseminating harmful content.
                                                                                                <br />
                                                                                                You agree not to attempt to interfere with the functionality or
                                                                                                security of the Website.
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span7"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                You agree not to attempt to interfere with the functionality or
                                                                                                security of the Website.
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span8"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span9"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                Job Openings:
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span10"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                E-GMP provides Job Openings on the Website, which are specific
                                                                                                positions available for employment with E-GMP.
                                                                                                <br />
                                                                                                E-GMP reserves the right to modify, update, or remove Job
                                                                                                Openings at its discretion without prior notice.
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span11"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span12"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                Application and Selection Process:
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span13"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                Candidates may apply for Job Openings through the Website by
                                                                                                following the designated application procedures.
                                                                                                <br />
                                                                                                The selection process for each Job Opening may involve multiple
                                                                                                stages, and E-GMP reserves the right to determine the criteria
                                                                                                for candidate evaluation and selection.
                                                                                                <br />
                                                                                                E-GMP does not guarantee employment to any candidate applying
                                                                                                through the Website.
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span14"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span15"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                Privacy Policy:
                                                                                                <br />
                                                                                                Your use of the Website is subject to E-GMPs Privacy Policy,
                                                                                                which governs the collection, use, and disclosure of your
                                                                                                personal information. By using the Website, you agree to the
                                                                                                terms outlined in the Privacy Policy.
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span16"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span17"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                Intellectual Property:
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span18"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                The Website and all its content, including but not limited to
                                                                                                text, graphics, logos, and software, are the intellectual
                                                                                                property of E-GMP and are protected by copyright and other
                                                                                                intellectual property laws.
                                                                                                <br />
                                                                                                You agree not to reproduce, modify, distribute, or create
                                                                                                derivative works based on the Website&#039;s content without
                                                                                                E-GMP&#039;s prior written consent.
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span19"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span20"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                Limitation of Liability:
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span21"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                E-GMP shall not be liable for any damages, losses, or expenses
                                                                                                arising from the use of the Website or the content therein.
                                                                                                <br />
                                                                                                E-GMP shall not be liable for any direct, indirect, incidental,
                                                                                                consequential, or punitive damages resulting from your use of
                                                                                                the Website or reliance on its content.
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span22"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span23"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                Indemnification:
                                                                                                <br />
                                                                                                You agree to indemnify and hold E-GMP and its officers,
                                                                                                directors, employees, and agents harmless from any claims,
                                                                                                damages, or liabilities arising from your use of the Website or
                                                                                                violation of this Agreement.
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span24"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span25"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                Termination:
                                                                                                <br />
                                                                                                E-GMP reserves the right to terminate your access to the Website
                                                                                                if you violate any terms of this Agreement or engage in
                                                                                                activities harmful to the Website or its users.
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span26"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span27"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                Modifications to the Agreement:
                                                                                                <br />
                                                                                                E-GMP reserves the right to modify, update, or change the terms
                                                                                                of this Agreement at any time. You will be notified of any
                                                                                                changes, and continued use of the Website after the
                                                                                                modifications will be considered acceptance of the updated
                                                                                                terms.
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span28"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span29"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                Governing Law and Jurisdiction:
                                                                                                <br />
                                                                                                This Agreement shall be governed by and construed in accordance
                                                                                                with the laws of the Philippines. Any dispute arising under this
                                                                                                Agreement shall be subject to the exclusive jurisdiction of the
                                                                                                courts in the Philippines.
                                                                                                <br />
                                                                                            </span>
                                                                                            <span
                                                                                                className={
                                                                                                    terms[
                                                                                                    "egmp-website-application-page-terms-and-conditions-terms-of-agreement-for-e-gmp-international-corporation-s-ofw-recruitment-website-welcome-to-e-gmp-international-corporation-s-ofw-recruitment-website-website-name-this-terms-of-agreement-sets-forth-the-terms-and-conditions-governing-your-use-of-the-website-by-accessing-or-using-the-website-you-agree-to-be-bound-by-the-terms-and-conditions-outlined-herein-if-you-do-not-agree-with-any-part-of-this-agreement-please-refrain-from-using-the-website-purpose-of-the-website-the-website-is-owned-and-operated-by-e-gmp-international-corporation-e-gmp-it-serves-as-a-platform-to-provide-information-about-overseas-employment-opportunities-offered-by-e-gmp-and-enables-job-seekers-candidates-to-apply-for-job-openings-job-openings-available-at-e-gmp-user-responsibilities-by-using-the-website-you-acknowledge-that-all-information-provided-during-the-registration-and-application-process-is-accurate-and-up-to-date-you-shall-not-use-the-website-for-any-unlawful-or-unauthorized-purposes-including-but-not-limited-to-engaging-in-fraudulent-activities-or-disseminating-harmful-content-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-you-agree-not-to-attempt-to-interfere-with-the-functionality-or-security-of-the-website-job-openings-e-gmp-provides-job-openings-on-the-website-which-are-specific-positions-available-for-employment-with-e-gmp-e-gmp-reserves-the-right-to-modify-update-or-remove-job-openings-at-its-discretion-without-prior-notice-application-and-selection-process-candidates-may-apply-for-job-openings-through-the-website-by-following-the-designated-application-procedures-the-selection-process-for-each-job-opening-may-involve-multiple-stages-and-e-gmp-reserves-the-right-to-determine-the-criteria-for-candidate-evaluation-and-selection-e-gmp-does-not-guarantee-employment-to-any-candidate-applying-through-the-website-privacy-policy-your-use-of-the-website-is-subject-to-e-gm-ps-privacy-policy-which-governs-the-collection-use-and-disclosure-of-your-personal-information-by-using-the-website-you-agree-to-the-terms-outlined-in-the-privacy-policy-intellectual-property-the-website-and-all-its-content-including-but-not-limited-to-text-graphics-logos-and-software-are-the-intellectual-property-of-e-gmp-and-are-protected-by-copyright-and-other-intellectual-property-laws-you-agree-not-to-reproduce-modify-distribute-or-create-derivative-works-based-on-the-website-s-content-without-e-gmp-s-prior-written-consent-limitation-of-liability-e-gmp-shall-not-be-liable-for-any-damages-losses-or-expenses-arising-from-the-use-of-the-website-or-the-content-therein-e-gmp-shall-not-be-liable-for-any-direct-indirect-incidental-consequential-or-punitive-damages-resulting-from-your-use-of-the-website-or-reliance-on-its-content-indemnification-you-agree-to-indemnify-and-hold-e-gmp-and-its-officers-directors-employees-and-agents-harmless-from-any-claims-damages-or-liabilities-arising-from-your-use-of-the-website-or-violation-of-this-agreement-termination-e-gmp-reserves-the-right-to-terminate-your-access-to-the-website-if-you-violate-any-terms-of-this-agreement-or-engage-in-activities-harmful-to-the-website-or-its-users-modifications-to-the-agreement-e-gmp-reserves-the-right-to-modify-update-or-change-the-terms-of-this-agreement-at-any-time-you-will-be-notified-of-any-changes-and-continued-use-of-the-website-after-the-modifications-will-be-considered-acceptance-of-the-updated-terms-governing-law-and-jurisdiction-this-agreement-shall-be-governed-by-and-construed-in-accordance-with-the-laws-of-the-philippines-any-dispute-arising-under-this-agreement-shall-be-subject-to-the-exclusive-jurisdiction-of-the-courts-in-the-philippines-by-using-e-gmp-international-corporation-s-ofw-recruitment-website-you-acknowledge-that-you-have-read-understood-and-agree-to-be-bound-by-this-terms-of-agreement-if-you-do-not-agree-with-any-part-of-this-agreement-please-do-not-use-the-website-e-gmp-international-corporation-span30"
                                                                                                    ]
                                                                                                }
                                                                                            >
                                                                                                <br />
                                                                                                By using E-GMP International Corporation&#039;s OFW Recruitment
                                                                                                Website, you acknowledge that you have read, understood, and
                                                                                                agree to be bound by this Terms of Agreement. If you do not
                                                                                                agree with any part of this Agreement, please do not use the
                                                                                                Website.
                                                                                                <br />
                                                                                                <br />
                                                                                                E-GMP International Corporation
                                                                                            </span>
                                                                                        </span>{" "}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className={terms["buttons"]}>
                                                                                <div className={terms["solid-button"]} onClick={() => {
                                                                                    var element = document.getElementById("header-nav");

                                                                                    // Apply a z-index of 0
                                                                                    if (element) {
                                                                                        element.style.zIndex = "50";
                                                                                    }

                                                                                    close()
                                                                                    const body = document.body
                                                                                    if (body)
                                                                                        body.classList.remove("no-scroll")
                                                                                }}>
                                                                                    <div className={terms["button"]}>I Do Not Accept </div>
                                                                                </div>
                                                                                <div className={terms["solid-button2"]} onClick={() => {
                                                                                    var element = document.getElementById("header-nav");

                                                                                    // Apply a z-index of 0
                                                                                    if (element) {
                                                                                        element.style.zIndex = "50";
                                                                                    }

                                                                                    close()
                                                                                    const body = document.body
                                                                                    if (body)
                                                                                        body.classList.remove("no-scroll")
                                                                                    setIsChecked(true);

                                                                                }}>
                                                                                    <div className={terms["button"]}>I Accept </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ),
                                                                    size: "lg",
                                                                })
                                                            }}
                                                            type="checkbox"
                                                            checked={isChecked}
                                                            style={{ cursor: "pointer" }}
                                                            className={styles["input-checkbox"]}
                                                            name="street"
                                                        />
                                                    </div>
                                                    <div className={styles["item-name"]}>
                                                        I have read and understood the Terms and Conditions for my application{" "}
                                                    </div>
                                                </div>
                                                <div className={styles["buttons2"]}>
                                                    <Link to="/job-openings">
                                                        <div className={styles["solid-button2"]}>
                                                            <div className={styles["button"]}>Back to Job Openings </div>
                                                        </div>
                                                    </Link>


                                                    <div className={styles["solid-button3"]} style={{ cursor: "pointer" }}>
                                                        <div className={styles["button4"]} onClick={() => formikProps.submitForm()}>Create Account </div>
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
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default SignupJobSeeker;
