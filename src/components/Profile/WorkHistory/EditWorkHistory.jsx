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
import display from "./display.module.css";
import { createModal } from '../../../components/Modal';
import ViewModal from './modals/ViewModal'
import styles from "./style.module.css"

const EditWorkHistory = ({profileSelected, setShowUpdate, setActiveTab}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const updateProfile = useAction('profile.updateProfile');
  const getProfile = useAction('profile.getProfile');
  
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
      formData.append('file', null);
      setSelectedFile(response.data.file)
    })
    .catch(error => {
      console.error('Error uploading image.', error);
    });
  };

  
  const handleDelete = (index) => {
    let obj = (get(profileSelected, 'profile.work_history', []) || []);
    obj = [...obj];

    obj.splice(index, 1);

    let data = {
      "work_history" : obj
    }

    updateProfile(data, () => {
      getProfile();
    });
  }


  return (
    <>
    <Formik
      initialValues={{
        position: "",
        company: "",
        country: "",
        start_date: "",
        end_date: "",
        certificate: ""

      }}
      onSubmit={async (values, { resetForm }) => {
        values.certificate = selectedFile;

        let obj = (get(profileSelected, 'profile.work_history', []) || []);

        obj = [...obj, values];

        let data = {
          "work_history" : obj
        }

        updateProfile(data, () => {
          resetForm();
          setSelectedFile(null)
          getProfile();
        });
        console.log("onSubmit", obj)
      }}
    >
     {(formikProps) => (
      <Form style={{height: '100%'}}>
        <div className={edit["container-filled"]}>
      <div className={edit["content"]}>
        <div className={edit["field-group"]}>
          <div className={edit["row"]}>
            <div className={edit["selection-dropdown"]}>
              <div className={edit["label"]}>
                <div className={edit["label-and-icon"]}>
                  <div className={edit["label2"]}>
                    Position{" "}
                  </div>
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
              <Input 
                type="text"
                name="position"
                className={edit["input-field"]}
                required
              />
            </div>
            <div className={edit["input-text"]}>
              <div className={edit["label"]}>
                <div className={edit["label-and-icon"]}>
                  <div className={edit["label2"]}>Company </div>
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
              <Input 
              type="text"
              name="company"
              className={edit["input-field"]}
              required
            />
            </div>
          </div>
          <div className={edit["row"]}>
            <div className={edit["selection-dropdown2"]}>
              <div className={edit["label"]}>
                <div className={edit["label-and-icon"]}>
                  <div className={edit["label2"]}>Country </div>
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
              <Input 
              type="text"
              name="country"
              className={edit["input-field"]}
              required
            />
            </div>
            <div className={edit["input-text-with-attached-button"]}>
              <div className={edit["label"]}>
                <div className={edit["label-and-icon"]}>
                  <div className={edit["label2"]}>Start Date </div>
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
              <Input 
              type="date"
              name="start_date"
              className={edit["input-field"]}
              required
            />
            </div>
            <div className={edit["input-text-with-attached-button"]}>
              <div className={edit["label"]}>
                <div className={edit["label-and-icon"]}>
                  <div className={edit["label2"]}>End Date </div>
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
              <Input 
              type="date"
              name="end_date"
              className={edit["input-field"]}
              required
            />
            </div>
          </div>
          <div className={edit["row"]}>
            <div className={edit["input-file-upload"]}>
              <div className={edit["label"]}>
                <div className={edit["label-and-icon"]}>
                  <div className={edit["label2"]}>
                    Upload Certificate of Employment{" "}
                  </div>
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
        <div className={edit["text-button"]}>
          <svg
            className={edit["plus"]}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.00038 2.40039C8.44221 2.40039 8.80038 2.75856 8.80038 3.20039V7.20039H12.8004C13.2422 7.20039 13.6004 7.55856 13.6004 8.00039C13.6004 8.44222 13.2422 8.80039 12.8004 8.80039H8.80038V12.8004C8.80038 13.2422 8.44221 13.6004 8.00038 13.6004C7.55856 13.6004 7.20038 13.2422 7.20038 12.8004V8.80039H3.20039C2.75856 8.80039 2.40039 8.44222 2.40039 8.00039C2.40039 7.55856 2.75856 7.20039 3.20039 7.20039H7.20038V3.20039C7.20038 2.75856 7.55856 2.40039 8.00038 2.40039Z"
              fill="#BEAC6F"
            />
          </svg>

          <div className={edit["button2"]} onClick={() => formikProps.submitForm()} style={{cursor: "pointer"}}>
            Add This Educational Attainment{" "}
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
       

        {(get(profileSelected, 'profile.work_history', []) || []).map((data, index) => {
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
            
            <div className={styles["icon-button"]} style={{cursor: "pointer"}} onClick={() => handleDelete(index)}>
               <svg
                  className={display["trash"]}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.20038 1.59961C6.89737 1.59961 6.62036 1.77081 6.48484 2.04184L5.90596 3.19961H3.20039C2.75856 3.19961 2.40039 3.55778 2.40039 3.99961C2.40039 4.44144 2.75856 4.79961 3.20039 4.79961L3.20039 12.7996C3.20039 13.6833 3.91673 14.3996 4.80039 14.3996H11.2004C12.084 14.3996 12.8004 13.6833 12.8004 12.7996V4.79961C13.2422 4.79961 13.6004 4.44144 13.6004 3.99961C13.6004 3.55778 13.2422 3.19961 12.8004 3.19961H10.0948L9.51592 2.04184C9.38041 1.77081 9.1034 1.59961 8.80038 1.59961H7.20038ZM5.60039 6.39961C5.60039 5.95778 5.95856 5.59961 6.40038 5.59961C6.84221 5.59961 7.20038 5.95778 7.20038 6.39961V11.1996C7.20038 11.6414 6.84221 11.9996 6.40038 11.9996C5.95856 11.9996 5.60039 11.6414 5.60039 11.1996V6.39961ZM9.60038 5.59961C9.15855 5.59961 8.80038 5.95778 8.80038 6.39961V11.1996C8.80038 11.6414 9.15855 11.9996 9.60038 11.9996C10.0422 11.9996 10.4004 11.6414 10.4004 11.1996V6.39961C10.4004 5.95778 10.0422 5.59961 9.60038 5.59961Z"
                    fill="white"
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
      <div className={edit["buttons"]}>
        <div className={edit["buttons2"]}>
          <div className={edit["solid-button2"]} style={{cursor: "pointer"}} onClick={() => setShowUpdate(false)}>
            <div className={edit["button3"]}>Cancel </div>
          </div>
          <div className={edit["solid-button"]} style={{cursor: "pointer"}} onClick={() => formikProps.submitForm()}>
            <div className={edit["content5"]}>
              <div className={edit["button"]}>Update Changes </div>
            </div>
          </div>
        </div>
        <div className={edit["arrow-buttons"]}>
          <div className={edit["icon-button4"]} style={{cursor: "pointer"}} onClick={() => setActiveTab(3)}>
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
                fill="#606774"
              />
            </svg>
          </div>
          <div className={edit["icon-button4"]} style={{cursor: "pointer"}} onClick={() => setActiveTab(5)}>
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

export default EditWorkHistory;
