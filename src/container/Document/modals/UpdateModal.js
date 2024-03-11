import React, { useEffect, useState } from 'react';
import styles from "./style.module.css";
import { Formik, Form, Field } from "formik"
import Input from "../../../components/Input/Input";
import { get } from 'lodash';
import { toast } from 'react-toastify';
 import { api } from '../../../api';


function UpdateModal({ onClose, documentData, onChildClick}) {
  console.log("documentData", documentData)
  const [selectedFile, setSelectedFile] = useState(null);
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

  return (
    <>
      <Formik
      initialValues={{...documentData}}
      onSubmit={async (values, { resetForm }) => {
         values.file_attached = selectedFile;
         values.authenticated = "Yes"
         values["201_copy"] = "No"

        // let obj = (get(profileSelected, 'profile.work_history', []) || []);

        // obj = [...obj, values];

        // let data = {
        //   "work_history" : obj
        // }

        // updateProfile(data, () => {
        //   resetForm();
        //   setSelectedFile(null)
        //   getProfile();
        // });
        onChildClick(values)
        onClose()
        console.log("onSubmit", values)
      }}
    >
     {(formikProps) => (
      <Form style={{height: '100%'}}>
    <div className={styles["update-document"]}>
      <div className={styles["header"]}>
        <div className={styles["update-document2"]}>Update Document </div>
        <svg
          className={styles["x"]}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{cursor: "pointer"}} onClick={() => {
            onClose()
            const body = document.body
            if (body)
              body.classList.remove("no-scroll")
          }}>
          <path
            d="M4 12L12 4M4 4L12 12"
            stroke="#323943"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={styles["contents"]}>
        <div className={styles["birth-certificate-information"]}>
          INFORMATION{" "}
        </div>
        <div className={styles["row"]}>
          <div className={styles["input-text"]}>
            <div className={styles["label"]}>
              <div className={styles["label-and-icon"]}>
                <div className={styles["label2"]}>Serial No. </div>
                <svg
                  className={styles["check"]}
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
                name="serial_no"
                className={styles["input-field"]}
                required
              />
          </div>
          <div className={styles["input-text-with-attached-button"]}>
            <div className={styles["label"]}>
              <div className={styles["label-and-icon"]}>
                <div className={styles["label2"]}>Received Date </div>
                <svg
                  className={styles["check2"]}
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
                name="receive_date"
                className={styles["input-field"]}
                required
              />
          </div>
        </div>
        <div className={styles["row"]}>
          <div className={styles["input-file-upload"]}>
            <div className={styles["label"]}>
              <div className={styles["label-and-icon"]}>
                <div className={styles["label2"]}>File Attached </div>
                <svg
                  className={styles["check3"]}
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
            <input
              type="file"
              className={styles["input-file"]}
              onChange={handleFileChange}
          />
          </div>
          <div className={styles["input-text-with-attached-button"]}>
            <div className={styles["label"]}>
              <div className={styles["label-and-icon"]}>
                <div className={styles["label2"]}>Issue Date </div>
                <svg
                  className={styles["check4"]}
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
                name="issue_date"
                className={styles["input-field"]}
                required
              />
          </div>
        </div>
        <div className={styles["row"]}>
          <div className={styles["input-text-with-attached-button"]}>
            <div className={styles["label"]}>
              <div className={styles["label-and-icon"]}>
                <div className={styles["label2"]}>Expiry Date </div>
                <svg
                  className={styles["check5"]}
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
                name="expiry_date"
                className={styles["input-field"]}
                required
              />
          </div>
          <div className={styles["selection-dropdown"]}>
            <div className={styles["label"]}>
              <div className={styles["label-and-icon"]}>
                <div className={styles["label2"]}>Received By </div>
                <svg
                  className={styles["check6"]}
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
                name="received_by"
                className={styles["input-field"]}
                required
              />
          </div>
        </div>

        <div className={styles["row"]}>
          <div className={styles["input-text-with-attached-button"]}>
            <div className={styles["label"]}>
              <div className={styles["label-and-icon"]}>
                <div className={styles["label2"]}>Released Date </div>
                <svg
                  className={styles["check7"]}
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
                name="release_date"
                className={styles["input-field"]}
                required
              />
          </div>
          <div className={styles["selection-dropdown"]}>
            <div className={styles["label"]}>
              <div className={styles["label-and-icon"]}>
                <div className={styles["label2"]}>Released By </div>
                <svg
                  className={styles["check8"]}
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
                name="release_by"
                className={styles["input-field"]}
                required
              />
          </div>
        </div>
        <div className={styles["row"]}>
          <div className={styles["input-text-area"]}>
            <div className={styles["label"]}>
              <div className={styles["label-and-icon"]}>
                <div className={styles["label2"]}>Remarks </div>
                <svg
                  className={styles["check9"]}
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
                name="remarks"
                className={styles["input-field"]}
                required
              />
          </div>
        </div>
      </div>
      <div className={styles["buttons"]}>
        <div className={styles["solid-button2"]} style={{cursor: "pointer"}} onClick={() => {
                onClose()
                const body = document.body
                if (body)
                  body.classList.remove("no-scroll")
              }}>
          <div className={styles["button2"]}>Cancel </div>
        </div>
        <div className={styles["solid-button"]} style={{cursor: "pointer"}} onClick={() => formikProps.submitForm()}>
          <div className={styles["content5"]}>
            <div className={styles["button"]}>Update </div>
          </div>
        </div>
      </div>
    </div>
    </Form>
      )}
    </Formik>
    </>



    // <div className={styles["terms-and-conditions"]}>
    //   <div className={styles["header"]}>
    //     <div
    //       className={
    //         styles["accept-terms-and-conditions-of-applying-with-e-gmp"]
    //       }
    //     >
    //       Certificate
    //     </div>
    //     <svg 
    //       className={styles["x"]}
    //       width="16"
    //       height="16"
    //       viewBox="0 0 16 16"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //       style={{cursor: "pointer"}}
    //       onClick={() => {
    //         onClose()
    //         const body = document.body
    //         if (body)
    //           body.classList.remove("no-scroll")
    //       }}>
    //       <path
    //         d="M4 12L12 4M4 4L12 12"
    //         stroke="#323943"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //     </svg>
    //   </div>
    //   <div className={styles["contents"]}>
    //   <div className={styles["content"]}>
    //          asd
    //     </div>
    //   </div>
    //   <div className={styles["buttons"]} style={{cursor: "pointer"}} onClick={() => {
    //             onClose()
    //             const body = document.body
    //             if (body)
    //               body.classList.remove("no-scroll")
    //           }}>
    //     <div className={styles["solid-button"]}>
    //       <div className={styles["button"]}>Close </div>
    //     </div>
  
    //   </div>
    // </div>
  )
}



export default UpdateModal;