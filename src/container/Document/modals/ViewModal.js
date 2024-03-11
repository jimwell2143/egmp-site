import React, { useEffect, useState } from 'react';
import detail from "./detail.module.css";
import { get } from 'lodash';
import { api } from '../../../api';


function ViewModal({ onClose, file}) {
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    api.get(`/api/mng/files/get-presigned-url/${file}`)
    .then(response => {
      console.log('View Image successfully.', response);
      setSelectedFile(response.data.url)
    })
    .catch(error => {
      console.error('Error uploading image.', error);
    });
  }, []);

  return (
    <div className={detail["terms-and-conditions"]}>
      <div className={detail["header"]}>
        <div
          className={
            detail["accept-terms-and-conditions-of-applying-with-e-gmp"]
          }
        >
          Certificate
        </div>
        <svg 
          className={detail["x"]}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{cursor: "pointer"}}
          onClick={() => {
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
      <div className={detail["contents"]}>
      <div className={detail["content"]}>
              <img src={selectedFile} style={{width: "100%", height: "100%"}}>
              </img>
        </div>
      </div>
      <div className={detail["buttons"]} style={{cursor: "pointer"}} onClick={() => {
                onClose()
                const body = document.body
                if (body)
                  body.classList.remove("no-scroll")
              }}>
        <div className={detail["solid-button"]}>
          <div className={detail["button"]}>Close </div>
        </div>
  
      </div>
    </div>
  )
}



export default ViewModal;