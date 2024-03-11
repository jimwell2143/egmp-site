import React, { useEffect, useState } from 'react';
import edit from "./edit.module.css";
import { get } from 'lodash';
import { useAction, useSelect } from '../../../hooks';
import Select from 'react-select'
import * as c from "./constants";
import { Formik, Form, Field } from "formik"
import Input from "../../Input/Input";
import { toast } from 'react-toastify';
import { api } from '../../../api';
import Cookie from 'js-cookie';

const EditPersonal = ({profileSelected, setShowUpdate, selectedFilePhotoDisplay, setActiveTab}) => {
  const [selectedFilePhoto, setSelectedFilePhoto] = useState(get(profileSelected, 'photo', ""));

  const [selectedFile, setSelectedFile] = useState(get(profileSelected, 'profile.resume', ""));
  const updateProfile = useAction('profile.updateProfile');
  const sourceApplicationDropdown = useSelect('dropdown.sourceApplicationDropdown');
  const positionDropdown = useSelect('dropdown.positionDropdown');

  const handleFileChangePhoto = (event) => {
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
      setSelectedFilePhoto(response.data.file)
    })
    .catch(error => {
      console.error('Error uploading image.', error);
    });
  };

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
 

  return (
    <>
    <Formik
      initialValues={{
        last_name: get(profileSelected, 'profile.last_name', "--"),
        first_name: get(profileSelected, 'profile.first_name', "--"),
        middle_name: get(profileSelected, 'profile.middle_name', "--"),
        extension_name: get(profileSelected, 'profile.extension_name', "--"),
        date_of_birth: get(profileSelected, 'profile.date_of_birth', "--"),
        gender: get(profileSelected, 'profile.gender', "--"),
        civil_status: get(profileSelected, 'profile.civil_status', "--"),
        nationality: get(profileSelected, 'profile.nationality', "--"),
        religion: get(profileSelected, 'profile.religion', "--"),
        position_id: get(profileSelected, 'profile.position_id.id', "--"),
        application_source_id: get(profileSelected, 'profile.application_source_id.id', "--"),
        resume : get(profileSelected, 'profile.resume', "--")

      }}
      onSubmit={async (values) => {
        values.resume = selectedFile;
        values.photo = selectedFilePhoto;
        updateProfile(values);
        console.log("onSubmit", values)
      }}
    >
     {(formikProps) => (
      <Form style={{height: '100%'}}>
       <div className={edit["container-filled"]}>
      <div className={edit["profile-picture"]}>
        <div className={edit["upload-img"]}>
          <div className={edit["avatar"]}>
            <img className={edit["content"]} src={selectedFilePhotoDisplay} />
          </div>
          <div className={edit["solid-button"]}>
         

            <input
              type="file"
              className={edit["input-file"]}
              style={{border: "none", background: "none"}}
              onChange={handleFileChangePhoto}
          />
          </div>
        </div>
        <div
          className={
            edit[
              "upload-colored-2-x-2-photo-should-have-white-background-and-wearing-corporate-attire-applicant-s-face-should-be-clear-should-be-taken-within-the-last-6-months-in-full-face-view-and-directly-facing-the-camera-this-photo-will-also-serve-as-your-account-s-profile-picture"
            ]
          }
        >
          Upload colored 2x2 photo.
          <br />
          Should have white background and wearing corporate attire.
          <br />
          Applicant’s face should be clear.
          <br />
          Should be taken within the last 6 months.
          <br />
          In full-face view and directly facing the camera.
          <br />
          This photo will also serve as your account’s profile picture.{" "}
        </div>
      </div>
      <div className={edit["field-group"]}>
        <div className={edit["position-applying-for"]}>
          Position Applying For{" "}
        </div>
        <div className={edit["row"]}>
          <div className={edit["selection-dropdown"]}>
            <div className={edit["label"]}>
              <div className={edit["label-and-icon"]}>
                <div className={edit["label2"]}>Position </div>
                <svg
                  className={edit["check"]}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 6.5L4.5 8.5L9.5 3.5"
                    stroke="#54D468"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>


            <Select
                    options={positionDropdown || []}
                    value={(positionDropdown || []).find(option => option.value === formikProps.values.position_id)}
                    onChange={(option) => formikProps.setFieldValue('position_id', option.value)}
                    className={edit["input-select"]}
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

      


            <div className={edit["this-is-a-help-text"]}>
              Your Job Position is based from the Job Offering you selected.{" "}
            </div>
          </div>
        </div>
      </div>
      <div className={edit["field-group"]}>
        <div className={edit["source-of-application"]}>
          Source of Application{" "}
        </div>
        <div className={edit["row"]}>
          <div className={edit["selection-dropdown2"]}>
            <div className={edit["label"]}>
              <div className={edit["label-and-icon"]}>
                <div className={edit["label2"]}>Method of Application </div>
                <svg
                  className={edit["form-required"]}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.78841 3.76853L10.3884 4.84853L8.82841 5.41253L10.3884 5.97653L9.76441 7.09253L8.46841 6.02453L8.74441 7.68053H7.49641L7.76041 6.02453L6.47641 7.11653L5.81641 5.96453L7.37641 5.40053L5.82841 4.86053L6.44041 3.75653L7.77241 4.81253L7.49641 3.14453H8.75641L8.46841 4.81253L9.78841 3.76853Z"
                    fill="#DB4343"
                  />
                </svg>
              </div>
            </div>
            <Select
                    options={c.METHOD}
                    className={edit["input-select"]}
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
          <div className={edit["selection-dropdown2"]}>
            <div className={edit["label"]}>
              <div className={edit["label-and-icon"]}>
                <div className={edit["label2"]}>Source of Application </div>
                <svg
                  className={edit["form-required2"]}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.78841 3.76853L10.3884 4.84853L8.82841 5.41253L10.3884 5.97653L9.76441 7.09253L8.46841 6.02453L8.74441 7.68053H7.49641L7.76041 6.02453L6.47641 7.11653L5.81641 5.96453L7.37641 5.40053L5.82841 4.86053L6.44041 3.75653L7.77241 4.81253L7.49641 3.14453H8.75641L8.46841 4.81253L9.78841 3.76853Z"
                    fill="#DB4343"
                  />
                </svg>
              </div>
            </div>

            <Select
                    options={sourceApplicationDropdown || []}
                    value={(sourceApplicationDropdown || []).find(option => option.value === formikProps.values.application_source_id)}
                    onChange={(option) => formikProps.setFieldValue('application_source_id', option.value)}
                    className={edit["input-select"]}
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
      <div className={edit["field-group"]}>
        <div className={edit["name-of-applicant"]}>Name of Applicant </div>
        <div className={edit["row"]}>
          <div className={edit["input-text"]}>
            <div className={edit["label"]}>
              <div className={edit["label-and-icon"]}>
                <div className={edit["label2"]}>Last Name </div>
                <svg
                  className={edit["check2"]}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 6.5L4.5 8.5L9.5 3.5"
                    stroke="#54D468"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <Input 
              type="text"
              name="last_name"
              className={edit["input-field"]}
              required
            />
          </div>
          <div className={edit["input-text"]}>
            <div className={edit["label"]}>
              <div className={edit["label-and-icon"]}>
                <div className={edit["label2"]}>First Name </div>
                <svg
                  className={edit["check3"]}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 6.5L4.5 8.5L9.5 3.5"
                    stroke="#54D468"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <Input 
              type="text"
              name="first_name"
              className={edit["input-field"]}
              required
            />
          </div>
        </div>
        <div className={edit["row"]}>
          <div className={edit["input-text"]}>
            <div className={edit["label"]}>
              <div className={edit["label-and-icon"]}>
                <div className={edit["label2"]}>Middle Name </div>
                <svg
                  className={edit["check4"]}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 6.5L4.5 8.5L9.5 3.5"
                    stroke="#54D468"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <Input 
              type="text"
              name="middle_name"
              className={edit["input-field"]}
              required
            />
          </div>
          <div className={edit["selection-dropdown2"]}>
            <div className={edit["label"]}>
              <div className={edit["label-and-icon"]}>
                <div className={edit["label2"]}>Suffix </div>
              </div>
            </div>
  
              <Select
                    options={c.EXTENSION_NAMES }
                    value={c.EXTENSION_NAMES.find(option => option.value === formikProps.values.extension_name)}
                    onChange={(option) => formikProps.setFieldValue('extension_name', option.value)}
                    className={edit["input-select"]}
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
      <div className={edit["field-group"]}>
        <div className={edit["other-information"]}>other information </div>
        <div className={edit["row"]}>
          <div className={edit["input-text-with-attached-button"]}>
            <div className={edit["label"]}>
              <div className={edit["label-and-icon"]}>
                <div className={edit["label2"]}>Date of Birth </div>
                <svg
                  className={edit["check5"]}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 6.5L4.5 8.5L9.5 3.5"
                    stroke="#54D468"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

           <Input 
              type="date"
              name="date_of_birth"
              className={edit["input-field"]}
              required
            />    


          </div>
          <div className={edit["selection-dropdown2"]}>
            <div className={edit["label"]}>
              <div className={edit["label-and-icon"]}>
                <div className={edit["label2"]}>Gender </div>
                <svg
                  className={edit["check6"]}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 6.5L4.5 8.5L9.5 3.5"
                    stroke="#54D468"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          
            <Select
                    options={c.GENDERS }
                    value={c.GENDERS.find(option => option.value === formikProps.values.gender)}
                    onChange={(option) => formikProps.setFieldValue('gender', option.value)}
                    className={edit["input-select"]}
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
        <div className={edit["row"]}>
          <div className={edit["selection-dropdown2"]}>
            <div className={edit["label"]}>
              <div className={edit["label-and-icon"]}>
                <div className={edit["label2"]}>Civil Status </div>
                <svg
                  className={edit["form-required3"]}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.78841 3.76853L10.3884 4.84853L8.82841 5.41253L10.3884 5.97653L9.76441 7.09253L8.46841 6.02453L8.74441 7.68053H7.49641L7.76041 6.02453L6.47641 7.11653L5.81641 5.96453L7.37641 5.40053L5.82841 4.86053L6.44041 3.75653L7.77241 4.81253L7.49641 3.14453H8.75641L8.46841 4.81253L9.78841 3.76853Z"
                    fill="#DB4343"
                  />
                </svg>
              </div>
            </div>
            
            <Select
                    options={c.CIVIL_STATUSES }
                    value={c.CIVIL_STATUSES.find(option => option.value === formikProps.values.civil_status)}
                    onChange={(option) => formikProps.setFieldValue('civil_status', option.value)}
                    className={edit["input-select"]}
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
          <div className={edit["selection-dropdown2"]}>
            <div className={edit["label"]}>
              <div className={edit["label-and-icon"]}>
                <div className={edit["label2"]}>Nationality </div>
                <svg
                  className={edit["form-required4"]}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.78841 3.76853L10.3884 4.84853L8.82841 5.41253L10.3884 5.97653L9.76441 7.09253L8.46841 6.02453L8.74441 7.68053H7.49641L7.76041 6.02453L6.47641 7.11653L5.81641 5.96453L7.37641 5.40053L5.82841 4.86053L6.44041 3.75653L7.77241 4.81253L7.49641 3.14453H8.75641L8.46841 4.81253L9.78841 3.76853Z"
                    fill="#DB4343"
                  />
                </svg>
              </div>
            </div>
            <Select
                    options={c.NATIONALITY }
                    value={c.NATIONALITY.find(option => option.value === formikProps.values.nationality)}
                    onChange={(option) => formikProps.setFieldValue('nationality', option.value)}
                    className={edit["input-select"]}
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
        <div className={edit["row"]}>
          <div className={edit["selection-dropdown2"]}>
            <div className={edit["label"]}>
              <div className={edit["label-and-icon"]}>
                <div className={edit["label2"]}>Religion </div>
                <svg
                  className={edit["form-required5"]}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.78841 3.76853L10.3884 4.84853L8.82841 5.41253L10.3884 5.97653L9.76441 7.09253L8.46841 6.02453L8.74441 7.68053H7.49641L7.76041 6.02453L6.47641 7.11653L5.81641 5.96453L7.37641 5.40053L5.82841 4.86053L6.44041 3.75653L7.77241 4.81253L7.49641 3.14453H8.75641L8.46841 4.81253L9.78841 3.76853Z"
                    fill="#DB4343"
                  />
                </svg>
              </div>
            </div>
            <Select
                    options={c.RELIGIONS }
                    value={c.RELIGIONS.find(option => option.value === formikProps.values.religion)}
                    onChange={(option) => formikProps.setFieldValue('religion', option.value)}
                    className={edit["input-select"]}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? '#E4E4E4' : '#E4E4E4',
                            height: 40,
                            borderRadius: 4
                        })
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
          <div className={edit["input-file-upload"]}>
            <div className={edit["label"]}>
              <div className={edit["label-and-icon"]}>
                <div className={edit["label2"]}>Attach CV </div>
              </div>
            </div>
            <input
              type="file"
              className={edit["input-file"]}
              onChange={handleFileChange}
          />
          </div>
        </div>
      </div>
      <div className={edit["buttons"]}>
        <div className={edit["buttons2"]}>
          <div className={edit["solid-button3"]} onClick={() => setShowUpdate(false)} style={{cursor: "pointer"}}>
            <div className={edit["button"]}>Cancel </div>
          </div>
          <div className={edit["solid-button2"]} style={{cursor: "pointer"}}>
            <div className={edit["content4"]}>
              <div className={edit["button2"]} onClick={() => formikProps.submitForm()}>Update Changes </div>
            </div>
          </div>
        </div>
        <div className={edit["arrow-buttons"]}>
          <div className={edit["icon-button2"]}>
            <svg
              className={edit["arrow-narrow-left"]}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.16529 11.7657C5.85287 12.0781 5.34634 12.0781 5.03392 11.7657L1.83392 8.56569C1.5215 8.25327 1.5215 7.74673 1.83392 7.43432L5.03392 4.23431C5.34634 3.9219 5.85287 3.9219 6.16529 4.23431C6.47771 4.54673 6.47771 5.05327 6.16529 5.36569L4.33098 7.2L13.5996 7.2C14.0414 7.2 14.3996 7.55817 14.3996 8C14.3996 8.44183 14.0414 8.8 13.5996 8.8L4.33098 8.8L6.16529 10.6343C6.47771 10.9467 6.47771 11.4533 6.16529 11.7657Z"
                fill="#949494"
              />
            </svg>
          </div>
          <div className={edit["icon-button3"]} style={{cursor: "pointer"}} onClick={() => setActiveTab(2)}>
            <svg
              className={edit["arrow-narrow-right"]}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.83391 4.23431C10.1463 3.9219 10.6529 3.9219 10.9653 4.23431L14.1653 7.43431C14.4777 7.74673 14.4777 8.25327 14.1653 8.56569L10.9653 11.7657C10.6529 12.0781 10.1463 12.0781 9.83391 11.7657C9.52149 11.4533 9.52149 10.9467 9.83391 10.6343L11.6682 8.8H2.39961C1.95778 8.8 1.59961 8.44183 1.59961 8C1.59961 7.55817 1.95778 7.2 2.39961 7.2H11.6682L9.83391 5.36569C9.52149 5.05327 9.52149 4.54673 9.83391 4.23431Z"
                fill="#606774"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    </Form>
      )}
    </Formik>
    </>
  );
};

export default EditPersonal;
