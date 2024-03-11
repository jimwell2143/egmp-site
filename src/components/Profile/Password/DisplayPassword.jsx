import React, { useEffect, useState } from 'react';
import display from "./display.module.css";
import { get } from 'lodash';
import { useAction, useSelect } from '../../../hooks';
import { Formik, Form, Field } from "formik"
import Input from "../../Input/Input";

const DisplayPassword = ({setActiveTab}) => {

const updatePassword = useAction('profile.updatePassword');

useEffect(() => {
   
}, []);
  
return (
    <>
    <Formik
      initialValues={{
        current_password: "",
        password: "",
        password_confirmation: "",

      }}
      onSubmit={async (values) => {
        updatePassword(values);
      }}
    >
     {(formikProps) => (
      <Form style={{height: '100%'}}>

    <div className={display["container-filled"]}>
      <div className={display["title"]}>
        <div className={display["complete-your-information"]}>
          Complete your Information{" "}
        </div>
        <div
          className={
            display[
              "to-avoid-delay-or-disapproval-of-your-applications-please-complete-all-of-your-information-section-by-section-the-arrow-buttons-at-the-bottom-of-this-page-will-navigate-you-to-the-next-following-sections"
            ]
          }
        >
          To avoid delay or disapproval of your applications, please complete
          all of your information section-by-section.
          <br />
          The arrow buttons at the bottom of this page will navigate you to the
          next following sections.{" "}
        </div>
      </div>
      <div className={display["field-group"]}>
        <div
          className={
            display[
              "minimum-of-eight-8-characters-must-have-at-least-one-1-uppercase-letter-must-have-at-least-one-1-lowercase-letter-must-have-at-least-one-1-special-character"
            ]
          }
        >
          Minimum of eight (8) characters.
          <br />
          Must have at least one (1) uppercase letter.
          <br />
          Must have at least one (1) lowercase letter.
          <br />
          Must have at least one (1) special character.{" "}
        </div>

        <div className={display["row"]} style={{width: "49.5%"}}>
          <div className={display["input-text-with-icon"]}>
            <div className={display["label"]}>
              <div className={display["label-and-icon"]}>
                <div className={display["label2"]}>Current Password </div>
                <svg
                  className={display["check"]}
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
                type="password"
                name="current_password"
                className={display["input-field"]}
                required
              />
          </div>
        </div>

        <div className={display["row"]}>
          <div className={display["input-text-with-icon"]}>
            <div className={display["label"]}>
              <div className={display["label-and-icon"]}>
                <div className={display["label2"]}>Password </div>
                <svg
                  className={display["check"]}
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
                type="password"
                name="password"
                className={display["input-field"]}
                required
              />
          </div>
          <div className={display["input-text-with-icon"]}>
            <div className={display["label"]}>
              <div className={display["label-and-icon"]}>
                <div className={display["label2"]}>Retype Password </div>
                <svg
                  className={display["check2"]}
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
                type="password"
                name="password_confirmation"
                className={display["input-field"]}
                required
              />
          </div>

        </div>
      </div>
      <div className={display["buttons"]} onClick={() => formikProps.submitForm()} style={{cursor: "pointer"}}>
        <div className={display["solid-button"]}>
          <div className={display["content"]}>
            <div className={display["button"]}>
              Apply changes to this Section{" "}
            </div>
          </div>
        </div>
        <div className={display["arrow-buttons"]}>
          <div className={display["icon-button"]} style={{cursor: "pointer"}} onClick={() => setActiveTab(5)}>
            <svg
              className={display["arrow-narrow-left"]}
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
          <div className={display["icon-button2"]}>
            <svg
              className={display["arrow-narrow-right"]}
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
                fill="#949494"
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

export default DisplayPassword;
