
import { Formik, Form } from "formik"
import Select from 'react-select'
import styles from "./style.module.css";
import { api } from '../../../api';
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import { useAction, useSelect } from "../../../hooks";
import { get } from "lodash";

function UploadJobOfferModal({ 
  onClose, 
  initialValues
}) {

  // const updateApplication = useAction('application.updateApplication');
  // const getApplicationList = useAction('application.getApplicationList');

  const [selectedFileRecruitment, setSelectedFileRecruitment] = useState(initialValues.job_offer);

  // console.log("ASD", selectedFileRecruitment.replace('https://',''))
  
  const handleFile = (event) => {
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
      setSelectedFileRecruitment(response.data.file)
    })
    .catch(error => {
      console.error('Error uploading image.', error);
    });
  };


  return (
    <>
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {

        onClose();


        // let payload = {
        //   job_offer: `https://${selectedFileRecruitment}`,
        //   status: "PASSED"
        // }

        // updateApplication(initialValues.id, payload, () => {
        //   const obj: any = {
        //     per_page: 40,
        //     page: 1,
        //     "status[0]": "PASSED"
        //   };
        
        //   const query = new URLSearchParams(obj)

        //   getApplicationList(query);
        //   onClose()
        // });
      }}
    >
     {(formikProps) => (
      <Form style={{height: '100%'}}>
    <div className={styles["container-filled"]} style={{width: "100%"}}>
    <div className={styles["header"]}>
      <div className={styles["icon-button"]} style={{cursor: "pointer"}} onClick={() => {
                onClose()
                const body = document.body
                if (body)
                  body.classList.remove("no-scroll")
              }}>
        <svg
          className={styles["chevron-left"]}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 12.6663L5.33334 7.99967L10 3.33301"
            stroke="#606774"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={styles["create-new-mr"]}>Upload Signed Job Offer </div>
    </div>

    <div className={styles["main-documents"]} style={{height: "400px", width: "100%"}}>
        {selectedFileRecruitment &&
          <iframe style={{height: "100%", width: "100%"}} src={`https://recruitment-app-files.s3.ap-southeast-1.amazonaws.com/files/${selectedFileRecruitment.replace('https://','')}`}></iframe>
        }
    </div>
    <div className={styles["row"]}>
      <div className={styles["input-file-upload"]} style={{width: "100%"}}>
        <div className={styles["label"]}>
          <div className={styles["label-and-icon"]}>
            <div className={styles["label2"]}>Upload Signed Job Offer </div>
            <svg
              className={styles["check21"]}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 6.5L4.5 8.5L9.5 3.5"
                stroke="#54D568"
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
          onChange={handleFile}
          
        />
      </div>
    </div>
    <div className={styles["buttons2"]}>
      <div className={styles["solid-button2"]} style={{cursor: "pointer"}} onClick={() => {
                onClose()
                const body = document.body
                if (body)
                  body.classList.remove("no-scroll")
              }}>
        <div className={styles["button2"]}>Cancel </div>
      </div>
      <div className={styles["solid-button3"]} style={{cursor: "pointer"}} onClick={() => formikProps.submitForm()}>
        <div className={styles["content3"]}>
          <div className={styles["button"]}>Submit </div>
        </div>
      </div>
    </div>
  </div>
  </Form>
      )}
    </Formik>
    </>
  )
}



export default UploadJobOfferModal;