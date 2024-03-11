import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <>
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
                            <div className="container mx-auto p-7">
                                <div className={styles["container-filled"]}>


                                    <div className={styles["title"]}>
                                        <div
                                            className={styles["which-type-of-user-would-you-like-to-register-as"]}
                                        >
                                            Which type of user would you like to register as?{" "}
                                        </div>
                                        <div className={styles["pick-a-user-type-below"]}>
                                            pick a user type below{" "}
                                        </div>
                                    </div>
                                    <div className={styles["row"]}>
                                        <Link to="/sign-up-job-seeker">
                                            <div className={styles["item"]} style={{ cursor: "pointer" }}>
                                                <div className={styles["gmp-card"]}>
                                                    <div className={styles["container"]}>
                                                        <div className={styles["miscellaneous"]}>
                                                            <div className={styles["vector"]}>
                                                                <svg
                                                                    className={styles["path-12"]}
                                                                    width="44"
                                                                    height="47"
                                                                    viewBox="0 0 44 47"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M32.9749 20.8762H29.4874C29.5018 20.6927 29.5117 20.5075 29.5117 20.3195V7.99785C29.5117 3.98682 26.2597 0.736324 22.249 0.736324C18.239 0.736324 14.9881 3.98682 14.9881 7.99785V20.3195C14.9881 20.5075 14.9969 20.6927 15.0112 20.8762H11.5237C5.69073 20.8762 0.960938 25.6047 0.960938 31.438V46.6201H43.536V31.438C43.536 25.6047 38.8084 20.8762 32.9749 20.8762Z"
                                                                        fill="#C4823F"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-14"]}
                                                                    width="16"
                                                                    height="19"
                                                                    viewBox="0 0 16 19"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M8.24917 0.221693C4.239 0.221693 0.988281 3.47354 0.988281 7.48366V16.7618C3.27237 17.8657 5.83626 18.4854 8.54201 18.4854C11.0213 18.4854 13.3771 17.9631 15.5106 17.0282V7.48366C15.5106 3.47354 12.2597 0.221693 8.24917 0.221693Z"
                                                                        fill="#A97036"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-16"]}
                                                                    width="36"
                                                                    height="46"
                                                                    viewBox="0 0 36 46"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M35.6327 27.7531C35.6327 37.3529 27.8491 45.1357 18.2488 45.1357C8.6486 45.1357 0.866211 37.3529 0.866211 27.7531V18.3658C0.866211 8.76516 8.6486 0.981823 18.2488 0.981823C27.8491 0.981823 35.6327 8.76516 35.6327 18.3658V27.7531Z"
                                                                        fill="#C4823F"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-18"]}
                                                                    width="29"
                                                                    height="17"
                                                                    viewBox="0 0 29 17"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M14.2489 0.551847C14.2489 0.551847 3.04172 3.1315 1.14279 5.80808C0.0128128 7.39981 0.228697 9.22708 1.04422 10.7531C3.67886 13.48 7.32597 15.3779 11.4561 15.9546L11.4731 15.9564C11.5917 15.9727 11.7136 15.984 11.8328 15.998C12.6 16.0855 13.3828 16.1344 14.1785 16.1357C19.676 16.1181 24.5665 13.7821 27.7394 10.1498C28.3034 8.76098 28.34 7.19552 27.3562 5.80808C25.4569 3.1315 14.2489 0.551847 14.2489 0.551847Z"
                                                                        fill="#323943"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-20"]}
                                                                    width="12"
                                                                    height="10"
                                                                    viewBox="0 0 12 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M10.2188 8.70512C9.25851 9.22875 7.69528 9.37551 6.60548 9.41447H7.12499C7.12499 9.41447 6.77236 9.42987 6.24968 9.42307C5.72894 9.42987 5.37681 9.41447 5.37681 9.41447H5.89686C4.80584 9.37551 3.24025 9.22875 2.2825 8.70512C0.695345 7.83768 0.616211 4.68503 0.616211 4.68503C3.47258 4.52785 5.77316 3.66088 6.24999 0.745584C6.72652 3.66088 9.02813 4.52785 11.884 4.68503C11.884 4.68503 11.8056 7.83768 10.2188 8.70512Z"
                                                                        fill="#C4823F"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-22"]}
                                                                    width="2"
                                                                    height="1"
                                                                    viewBox="0 0 2 1"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M1.46667 0.738281C1.32335 0.738281 1.18904 0.73422 1.05071 0.731956C0.913548 0.73422 0.778563 0.738281 0.635742 0.738281H1.46667Z"
                                                                        fill="#4A5053"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-24"]}
                                                                    width="36"
                                                                    height="20"
                                                                    viewBox="0 0 36 20"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M35.3765 12.4114C35.3765 6.03086 30.3427 0.858879 24.1323 0.858879H12.2323C6.02278 0.858879 0.986328 6.03086 0.986328 12.4114V18.1767C1.42303 14.7867 3.56738 12.2438 6.64842 12.2438C10.0512 12.2438 10.0382 16.5837 18.051 16.7309C26.0651 16.5837 26.0524 12.2438 29.4561 12.2438C32.916 12.2438 35.1985 15.4539 35.1985 19.4654L35.3765 19.4668V12.4114Z"
                                                                        fill="#323943"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-26"]}
                                                                    width="48"
                                                                    height="27"
                                                                    viewBox="0 0 48 27"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M36.592 0.876173H30.5495L23.2427 13.3704L15.8132 0.876173H10.5625C4.72912 0.876173 0 5.6047 0 11.438V26.6201H47.1534V11.438C47.1534 5.6047 42.4258 0.876173 36.592 0.876173Z"
                                                                        fill="#EED172"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-28"]}
                                                                    width="5"
                                                                    height="9"
                                                                    viewBox="0 0 5 9"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M0.706055 0.968567C2.73263 0.968567 4.37555 2.61012 4.37555 4.6376C4.37555 6.66237 2.73263 8.30664 0.706055 8.30664V0.968567Z"
                                                                        fill="#C4823F"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-30"]}
                                                                    width="4"
                                                                    height="9"
                                                                    viewBox="0 0 4 9"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3.87375 8.30664C1.84763 8.30664 0.205078 6.66327 0.205078 4.6376C0.205078 2.61193 1.84763 0.968567 3.87375 0.968567V8.30664Z"
                                                                        fill="#C4823F"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-32"]}
                                                                    width="24"
                                                                    height="21"
                                                                    viewBox="0 0 24 21"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M19.5499 0.875496L12.2432 13.3697L4.81364 0.875496H1.52518C1.29199 0.875496 1.06035 0.886358 0.831055 0.901306L12.2504 20.6797L23.6705 0.901306C23.4396 0.886358 23.2103 0.875496 22.9764 0.875496H19.5499Z"
                                                                        fill="white"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-34"]}
                                                                    width="5"
                                                                    height="5"
                                                                    viewBox="0 0 5 5"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M4.54783 2.733C4.54783 3.79838 3.68365 4.66309 2.61791 4.66309C1.55167 4.66309 0.6875 3.79838 0.6875 2.733C0.6875 1.66671 1.55167 0.802445 2.61791 0.802445C3.68365 0.802445 4.54783 1.66671 4.54783 2.733Z"
                                                                        fill="#323943"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-36"]}
                                                                    width="5"
                                                                    height="5"
                                                                    viewBox="0 0 5 5"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M0.494141 2.733C0.494141 3.79838 1.35849 4.66309 2.42419 4.66309C3.49043 4.66309 4.3546 3.79838 4.3546 2.733C4.3546 1.66671 3.49043 0.802445 2.42419 0.802445C1.35849 0.802445 0.494141 1.66671 0.494141 2.733Z"
                                                                        fill="#323943"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-38"]}
                                                                    width="7"
                                                                    height="2"
                                                                    viewBox="0 0 7 2"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M1.02188 1.5H5.42169C5.76445 1.5 6.04416 1.21962 6.04416 0.877634C6.04416 0.534738 5.76445 0.254804 5.42169 0.254804H1.02188C0.679528 0.254804 0.399414 0.534738 0.399414 0.877634C0.399414 1.21962 0.679528 1.5 1.02188 1.5Z"
                                                                        fill="#323943"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-40"]}
                                                                    width="7"
                                                                    height="2"
                                                                    viewBox="0 0 7 2"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M1.59317 1.5H5.99316C6.33502 1.5 6.61545 1.21962 6.61545 0.877634C6.61545 0.534738 6.33502 0.254804 5.99316 0.254804H1.59317C1.25045 0.254804 0.970703 0.534738 0.970703 0.877634C0.970703 1.21962 1.25045 1.5 1.59317 1.5Z"
                                                                        fill="#323943"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-42"]}
                                                                    width="8"
                                                                    height="2"
                                                                    viewBox="0 0 8 2"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M7.11384 1.03509C7.11384 1.44321 6.78349 1.77344 6.37527 1.77344H1.6149C1.20669 1.77344 0.875977 1.44321 0.875977 1.03509C0.875977 0.626963 1.20669 0.296295 1.6149 0.296295H6.37527C6.78349 0.296295 7.11384 0.626963 7.11384 1.03509Z"
                                                                        fill="#A97036"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-44"]}
                                                                    width="6"
                                                                    height="3"
                                                                    viewBox="0 0 6 3"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M5.78502 0.635777C5.78502 1.746 4.57261 2.64648 3.07641 2.64648C1.58076 2.64648 0.368164 1.746 0.368164 0.635777H5.78502Z"
                                                                        fill="#A97036"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-46"]}
                                                                    width="7"
                                                                    height="4"
                                                                    viewBox="0 0 7 4"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M6.03117 0.806801C6.03117 2.46149 4.76354 3.80273 3.19958 3.80273C1.63593 3.80273 0.368164 2.46149 0.368164 0.806801H6.03117Z"
                                                                        fill="#C4823F"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-50"]}
                                                                    width="42"
                                                                    height="45"
                                                                    viewBox="0 0 42 45"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M31.1306 19.1429H27.7551C27.7692 18.9653 27.7782 18.786 27.7782 18.6043V7.71997C27.7782 3.83895 24.6319 0.693092 20.7509 0.693092C16.8699 0.693092 13.724 3.83895 13.724 7.71997V18.6043C13.724 18.786 13.7331 18.9653 13.7471 19.1429H10.3716C4.72673 19.1429 0.150391 23.7188 0.150391 29.3641V44.0557H41.3514V29.3641C41.3514 23.7188 36.7755 19.1429 31.1306 19.1429Z"
                                                                        fill="#FFE4CB"
                                                                    />
                                                                </svg>

                                                                <div className={styles["g-52"]}>
                                                                    <div className={styles["clip-path-group"]}>
                                                                        <svg
                                                                            className={styles["clip-path-58"]}
                                                                            width="14.05421257019043"
                                                                            height="3.804926633834839"
                                                                        ></svg>

                                                                        <svg
                                                                            className={styles["g-54"]}
                                                                            width="15"
                                                                            height="4"
                                                                            viewBox="0 0 15 4"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M0.722656 3.875H14.7769V0.0700731H0.722656V3.875Z"
                                                                                fill="#E7CEB7"
                                                                            />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <svg
                                                                    className={styles["path-62"]}
                                                                    width="35"
                                                                    height="44"
                                                                    viewBox="0 0 35 44"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M34.5723 26.7822C34.5723 36.0735 27.0409 43.6045 17.75 43.6045C8.46013 43.6045 0.927734 36.0735 0.927734 26.7822V17.697C0.927734 8.40664 8.46013 0.876076 17.75 0.876076C27.0409 0.876076 34.5723 8.40664 34.5723 17.697V26.7822Z"
                                                                        fill="#FFE4CB"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-64"]}
                                                                    width="0.16708829998970032"
                                                                    height="0.0013671362539753318"
                                                                ></svg>

                                                                <svg
                                                                    className={styles["path-66"]}
                                                                    width="27"
                                                                    height="25"
                                                                    viewBox="0 0 27 25"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M9.74969 24.6045C9.73791 24.6045 9.72568 24.6045 9.7139 24.6045C9.71073 24.6045 9.70802 24.6045 9.70485 24.6045C9.69352 24.6045 9.6822 24.6045 9.67042 24.6045C9.66997 24.6045 9.66951 24.6045 9.66906 24.6045C9.65638 24.604 9.6446 24.604 9.63237 24.604C9.6301 24.604 9.62739 24.604 9.62512 24.604C9.61289 24.604 9.60111 24.604 9.58934 24.6036C9.58888 24.6036 9.58934 24.6036 9.58843 24.6036C9.57575 24.6036 9.56307 24.6036 9.55039 24.6031C9.54858 24.6031 9.54812 24.6031 9.54631 24.6031C6.18529 24.5633 3.06253 23.5355 0.451172 21.7997C2.54615 22.7365 4.8658 23.2619 7.30911 23.2619C16.5999 23.2619 24.1314 15.7308 24.1314 6.44003V0.0767422C24.8897 0.41828 25.7109 0.647047 26.572 0.741264V4.51582C26.2916 4.44471 25.9981 4.40667 25.6955 4.40667V11.5083C25.8549 11.5083 26.0112 11.4979 26.1648 11.4775C24.4806 18.9904 17.7708 24.6045 9.74969 24.6045Z"
                                                                        fill="#E7CEB7"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-68"]}
                                                                    width="5"
                                                                    height="3"
                                                                    viewBox="0 0 5 3"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M4.32789 0.0926647C4.32789 1.2509 3.38889 2.18945 2.23155 2.18945C1.07332 2.18945 0.134766 1.2509 0.134766 0.0926647H4.32789Z"
                                                                        fill="#E7CEB7"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-70"]}
                                                                    width="5"
                                                                    height="8"
                                                                    viewBox="0 0 5 8"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M0.696289 0.405221C2.65719 0.405221 4.24755 1.99468 4.24755 3.95557C4.24755 5.91647 2.65719 7.50684 0.696289 7.50684V0.405221Z"
                                                                        fill="#EAC79A"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-72"]}
                                                                    width="5"
                                                                    height="8"
                                                                    viewBox="0 0 5 8"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M0.696289 7.50684V0.405221C2.65719 0.405221 4.24755 1.99468 4.24755 3.95557C4.24755 5.91647 2.65719 7.50684 0.696289 7.50684Z"
                                                                        fill="#E7CEB7"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-74"]}
                                                                    width="5"
                                                                    height="8"
                                                                    viewBox="0 0 5 8"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M4.30224 7.50684C2.34089 7.50684 0.750977 5.91738 0.750977 3.95557C0.750977 1.99513 2.34089 0.405221 4.30224 0.405221V7.50684Z"
                                                                        fill="#FFE4CB"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-76"]}
                                                                    width="4"
                                                                    height="4"
                                                                    viewBox="0 0 4 4"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3.93422 2.01047C3.93422 2.96985 3.15648 3.74805 2.1971 3.74805C1.23771 3.74805 0.459961 2.96985 0.459961 2.01047C0.459961 1.05154 1.23771 0.273799 2.1971 0.273799C3.15648 0.273799 3.93422 1.05154 3.93422 2.01047Z"
                                                                        fill="#323943"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-78"]}
                                                                    width="4"
                                                                    height="4"
                                                                    viewBox="0 0 4 4"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M4.00259 2.01047C4.00259 2.96985 3.22484 3.74805 2.265 3.74805C1.30652 3.74805 0.52832 2.96985 0.52832 2.01047C0.52832 1.05154 1.30652 0.273799 2.265 0.273799C3.22484 0.273799 4.00259 1.05154 4.00259 2.01047Z"
                                                                        fill="#323943"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-80"]}
                                                                    width="45"
                                                                    height="29"
                                                                    viewBox="0 0 45 29"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M33.9848 0.779381H30.3475C30.3565 0.65119 22.7671 21.9493 22.7671 21.9493L15.2519 0.779381H11.6155C5.53256 0.779381 0.601562 5.89294 0.601562 12.2014V28.6201H44.9983V12.2014C44.9983 5.89294 40.0677 0.779381 33.9848 0.779381Z"
                                                                        fill="#0EA5E9"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-82"]}
                                                                    width="11"
                                                                    height="22"
                                                                    viewBox="0 0 11 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3.25598 0.77836L10.7666 21.9482L0.157227 10.4229L3.25598 0.77836Z"
                                                                        fill="white"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-84"]}
                                                                    width="1"
                                                                    height="1"
                                                                    viewBox="0 0 1 1"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M0.598344 0.854645L0.541016 0.948242L0.637313 0.920929L0.598344 0.854645Z"
                                                                        fill="white"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-86"]}
                                                                    width="12"
                                                                    height="22"
                                                                    viewBox="0 0 12 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M11.4979 10.3988L8.33031 0.777781H8.31582C8.32533 0.653667 1.13945 21.1373 0.679688 21.9092L11.4979 10.3988Z"
                                                                        fill="white"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-88"]}
                                                                    width="3"
                                                                    height="8"
                                                                    viewBox="0 0 3 8"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M2.02821 7.03223V0.793063C2.02821 0.793063 -1.35093 1.96307 2.02821 7.03223Z"
                                                                        fill="#1B1B1B"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-90"]}
                                                                    width="11"
                                                                    height="4"
                                                                    viewBox="0 0 11 4"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M10.1286 3.98145H0.228516V0.882687H10.1286V3.98145Z"
                                                                        fill="white"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-92"]}
                                                                    width="37"
                                                                    height="25"
                                                                    viewBox="0 0 37 25"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M36.9237 17.0044C37.7572 3.25461 30.271 4.53288 30.271 4.53288C21.7828 -4.82679 6.34976 1.80285 2.49138 10.9025C-1.36699 20.0031 3.0055 24.0322 3.0055 24.0322C2.17612 22.5424 0.490174 19.6511 3.57443 18.6093C6.36969 19.5329 9.5921 20.0651 13.0306 20.0651C19.9062 20.0651 25.9415 17.9579 29.3546 14.7872C29.4289 14.7179 29.5 14.6481 29.5711 14.5779C30.3942 17.9937 33.372 20.5657 36.9903 20.775V18.5241C36.9903 18.0123 36.9649 17.5059 36.9237 17.0044Z"
                                                                        fill="#1B1B1B"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-94"]}
                                                                    width="29"
                                                                    height="16"
                                                                    viewBox="0 0 29 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M28.5057 4.81138C28.5057 4.41911 28.4672 4.03274 28.3993 3.6518C19.7662 -4.38068 5.22137 2.10717 1.49164 10.9033C1.17547 11.648 0.919997 12.3551 0.708008 13.0323C3.63373 14.4546 7.33311 15.3066 11.36 15.3066C20.8293 15.3066 28.5057 10.6075 28.5057 4.81138Z"
                                                                        fill="#323232"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-96"]}
                                                                    width="8"
                                                                    height="13"
                                                                    viewBox="0 0 8 13"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M1.27041 1.53371C1.08877 1.33441 0.903506 1.14416 0.71643 0.958899C0.422907 1.88703 0.260742 2.89399 0.260742 3.94714C0.260742 8.56378 3.34771 12.3066 7.15581 12.3066C7.43665 12.3066 7.71342 12.2835 7.98565 12.2437C8.09889 0.369131 1.27041 1.53371 1.27041 1.53371Z"
                                                                        fill="#323232"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-98"]}
                                                                    width="9"
                                                                    height="7"
                                                                    viewBox="0 0 9 7"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M2.73296 6.78125C2.18079 6.78125 1.63541 6.52577 1.29025 6.04562C0.72042 5.25383 0.902066 4.14044 1.6934 3.57106L5.31805 0.96243C5.62924 0.738211 5.99116 0.630402 6.34946 0.630402C6.90162 0.630402 7.44699 0.885874 7.7926 1.36557C8.36198 2.15735 8.18035 3.27075 7.38901 3.84059L3.76527 6.44922C3.45318 6.67344 3.09171 6.78125 2.73296 6.78125Z"
                                                                        fill="#505050"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-100"]}
                                                                    width="10"
                                                                    height="6"
                                                                    viewBox="0 0 10 6"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M9.62312 0.797109C9.62312 3.22366 7.65634 5.19043 5.23025 5.19043C2.8037 5.19043 0.836914 3.22366 0.836914 0.797109H9.62312Z"
                                                                        fill="white"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-102"]}
                                                                    width="37"
                                                                    height="72"
                                                                    viewBox="0 0 37 72"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M18.695 71.2646H18.1342C8.23009 71.2646 0.126953 63.161 0.126953 53.2578V18.19C0.126953 8.28583 8.23009 0.182716 18.1342 0.182716H18.695C28.5987 0.182716 36.7018 8.28583 36.7018 18.19V53.2578C36.7018 63.161 28.5987 71.2646 18.695 71.2646Z"
                                                                        fill="#504235"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-104"]}
                                                                    width="53"
                                                                    height="39"
                                                                    viewBox="0 0 53 39"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M20.3265 0.790302V8.16961H14.2694C6.67633 8.16961 0.518555 13.9517 0.518555 21.0837V38.5605H52.5289V21.0837C52.5289 13.9517 46.3703 8.16961 38.7777 8.16961H32.7201V0.790302H20.3265Z"
                                                                        fill="#FFB27D"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-106"]}
                                                                    width="13"
                                                                    height="5"
                                                                    viewBox="0 0 13 5"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M0.327148 3.01896C2.20606 3.87597 4.31462 4.3584 6.54458 4.3584C8.75823 4.3584 10.8518 3.88232 12.7208 3.03663V0.224164H0.327148V3.01896Z"
                                                                        fill="#ED975D"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-108"]}
                                                                    width="33"
                                                                    height="46"
                                                                    viewBox="0 0 33 46"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M16.4142 45.7422C7.75531 45.7422 0.670898 38.6578 0.670898 29.9988V16.0447C0.670898 7.38625 7.75531 0.302288 16.4142 0.302288C25.0727 0.302288 32.1571 7.38625 32.1571 16.0447V29.9988C32.1571 38.6578 25.0727 45.7422 16.4142 45.7422Z"
                                                                        fill="#F3DDCB"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-110"]}
                                                                    width="33"
                                                                    height="46"
                                                                    viewBox="0 0 33 46"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M16.4142 45.7422C7.75531 45.7422 0.670898 38.6578 0.670898 29.9988V16.0447C0.670898 7.38625 7.75531 0.302288 16.4142 0.302288C25.0727 0.302288 32.1571 7.38625 32.1571 16.0447V29.9988C32.1571 38.6578 25.0727 45.7422 16.4142 45.7422Z"
                                                                        fill="#FFB27D"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-112"]}
                                                                    width="24"
                                                                    height="46"
                                                                    viewBox="0 0 24 46"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M11.9901 0.987186C17.3093 3.52063 21.0096 8.95353 21.0096 15.2104V29.1649C21.0096 37.8225 13.9247 44.9074 5.26669 44.9074C3.67541 44.9074 2.13895 44.6659 0.689453 44.222C2.73143 45.195 5.01121 45.7422 7.4133 45.7422C16.0718 45.7422 23.1562 38.6578 23.1562 29.9988V16.0447C23.1562 8.97708 18.4349 2.96032 11.9901 0.987186Z"
                                                                        fill="#ED975D"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-114"]}
                                                                    width="6"
                                                                    height="3"
                                                                    viewBox="0 0 6 3"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M5.187 0.639884C5.187 1.84206 4.21267 2.81641 3.0105 2.81641C1.80877 2.81641 0.833984 1.84206 0.833984 0.639884H5.187Z"
                                                                        fill="#ED975D"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-116"]}
                                                                    width="33"
                                                                    height="22"
                                                                    viewBox="0 0 33 22"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M16.4142 0.301888C7.75531 0.301888 0.670898 7.38585 0.670898 16.0443V19.5652C2.4719 19.9883 4.34718 20.2189 6.27637 20.2189C12.3874 20.2189 17.9697 17.9722 22.2557 14.266C24.2565 17.9065 27.8829 20.5246 32.1571 21.1475V16.0443C32.1571 7.38585 25.0727 0.301888 16.4142 0.301888Z"
                                                                        fill="#504235"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-118"]}
                                                                    width="4"
                                                                    height="5"
                                                                    viewBox="0 0 4 5"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M3.99986 2.731C3.99986 3.75154 3.17228 4.5791 2.15129 4.5791C1.1303 4.5791 0.302734 3.75154 0.302734 2.731C0.302734 1.70956 1.1303 0.881975 2.15129 0.881975C3.17228 0.881975 3.99986 1.70956 3.99986 2.731Z"
                                                                        fill="#323943"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-120"]}
                                                                    width="4"
                                                                    height="12"
                                                                    viewBox="0 0 4 12"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M0.532227 0.597363V8.52792C0.532227 10.1332 1.62297 11.493 3.09829 11.9111C3.13362 11.4831 3.15627 11.0518 3.15627 10.6156V0.597363H0.532227Z"
                                                                        fill="#504235"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-122"]}
                                                                    width="4"
                                                                    height="12"
                                                                    viewBox="0 0 4 12"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M0.670898 0.120377V10.6156C0.670898 11.0518 0.693996 11.4831 0.729327 11.9111C2.20464 11.493 3.29539 10.1332 3.29539 8.52792V0.120377H0.670898Z"
                                                                        fill="#504235"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-124"]}
                                                                    width="28"
                                                                    height="18"
                                                                    viewBox="0 0 28 18"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M0.170898 17.0228C1.70646 17.3353 3.2932 17.5029 4.92072 17.5029C14.9603 17.5029 23.5445 11.2977 27.064 2.51651C26.746 2.26059 26.4172 2.01824 26.082 1.78361C23.8253 0.758539 21.3245 0.184639 18.6946 0.184639H18.1338C8.62327 0.184639 0.779234 7.65906 0.170898 17.0228Z"
                                                                        fill="#74604E"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-126"]}
                                                                    width="7"
                                                                    height="7"
                                                                    viewBox="0 0 7 7"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M2.63346 6.39258C2.16464 6.39258 1.69627 6.21455 1.34069 5.85897C0.628624 5.14781 0.628624 3.98369 1.34069 3.27299L3.47689 1.13588C3.83292 0.780298 4.30129 0.602734 4.77011 0.602734C5.23893 0.602734 5.70775 0.780298 6.06333 1.13588C6.77404 1.84704 6.77404 3.01117 6.06333 3.72233L3.92669 5.85897C3.57111 6.21455 3.10228 6.39258 2.63346 6.39258Z"
                                                                        fill="#997E66"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-128"]}
                                                                    width="6"
                                                                    height="3"
                                                                    viewBox="0 0 6 3"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M4.51067 2.1543H1.01194C0.662707 2.1543 0.375977 1.86801 0.375977 1.51786C0.375977 1.16817 0.662707 0.881896 1.01194 0.881896H4.51067C4.86081 0.881896 5.14708 1.16817 5.14708 1.51786C5.14708 1.86801 4.86081 2.1543 4.51067 2.1543Z"
                                                                        fill="#323943"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-130"]}
                                                                    width="4"
                                                                    height="5"
                                                                    viewBox="0 0 4 5"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M0.137695 2.731C0.137695 3.75154 0.965269 4.5791 1.9858 4.5791C3.00725 4.5791 3.83482 3.75154 3.83482 2.731C3.83482 1.70956 3.00725 0.881975 1.9858 0.881975C0.965269 0.881975 0.137695 1.70956 0.137695 2.731Z"
                                                                        fill="#323943"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-132"]}
                                                                    width="5"
                                                                    height="3"
                                                                    viewBox="0 0 5 3"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M0.628156 2.1543H4.12688C4.47657 2.1543 4.7633 1.86801 4.7633 1.51786C4.7633 1.16817 4.47657 0.881896 4.12688 0.881896H0.628156C0.278465 0.881896 -0.0078125 1.16817 -0.0078125 1.51786C-0.0078125 1.86801 0.278465 2.1543 0.628156 2.1543Z"
                                                                        fill="#323943"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-134"]}
                                                                    width="7"
                                                                    height="2"
                                                                    viewBox="0 0 7 2"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M1.25723 1.67871H5.47119C5.79959 1.67871 6.06775 1.41055 6.06775 1.0826C6.06775 0.754197 5.79959 0.486486 5.47119 0.486486H1.25723C0.929286 0.486486 0.661133 0.754197 0.661133 1.0826C0.661133 1.41055 0.929286 1.67871 1.25723 1.67871Z"
                                                                        fill="#323943"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-136"]}
                                                                    width="6"
                                                                    height="2"
                                                                    viewBox="0 0 6 2"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M1.17175 1.67871H5.38571C5.7132 1.67871 5.98136 1.41055 5.98136 1.0826C5.98136 0.754197 5.7132 0.486486 5.38571 0.486486H1.17175C0.843349 0.486486 0.575195 0.754197 0.575195 1.0826C0.575195 1.41055 0.843349 1.67871 1.17175 1.67871Z"
                                                                        fill="#323943"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-138"]}
                                                                    width="53"
                                                                    height="31"
                                                                    viewBox="0 0 53 31"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M38.7777 0.169609H36.8643L26.524 27.5307L16.1828 0.169609H14.2694C6.67633 0.169609 0.518555 5.95174 0.518555 13.0837V30.5605H52.5289V13.0837C52.5289 5.95174 46.3703 0.169609 38.7777 0.169609Z"
                                                                        fill="#606774"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-140"]}
                                                                    width="0"
                                                                    height="1.5550410747528076"
                                                                ></svg>

                                                                <svg
                                                                    className={styles["path-142"]}
                                                                    width="0"
                                                                    height="0.013795902021229267"
                                                                ></svg>

                                                                <svg
                                                                    className={styles["path-144"]}
                                                                    width="0"
                                                                    height="0.013069571927189827"
                                                                ></svg>

                                                                <svg
                                                                    className={styles["path-146"]}
                                                                    width="0"
                                                                    height="0.013559985905885696"
                                                                ></svg>

                                                                <svg
                                                                    className={styles["path-148"]}
                                                                    width="0"
                                                                    height="0.014260410331189632"
                                                                ></svg>

                                                                <svg
                                                                    className={styles["path-150"]}
                                                                    width="0"
                                                                    height="0.019722452387213707"
                                                                ></svg>

                                                                <svg
                                                                    className={styles["path-152"]}
                                                                    width="0.0004767569771502167"
                                                                    height="0.020954053848981857"
                                                                ></svg>

                                                                <svg
                                                                    className={styles["path-154"]}
                                                                    width="0"
                                                                    height="0.014748143032193184"
                                                                ></svg>

                                                                <svg
                                                                    className={styles["path-156"]}
                                                                    width="0"
                                                                    height="0.012631656602025032"
                                                                ></svg>

                                                                <svg
                                                                    className={styles["path-158"]}
                                                                    width="1"
                                                                    height="1"
                                                                    viewBox="0 0 1 1"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M0.52687 0.890625C0.52687 0.885603 0.526869 0.882087 0.526367 0.877065C0.526869 0.881585 0.52687 0.886105 0.52687 0.890625Z"
                                                                        fill="#60AFB8"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-160"]}
                                                                    width="0"
                                                                    height="0.01405040267854929"
                                                                ></svg>

                                                                <svg
                                                                    className={styles["path-162"]}
                                                                    width="0"
                                                                    height="0.013559985905885696"
                                                                ></svg>

                                                                <svg
                                                                    className={styles["path-164"]}
                                                                    width="0"
                                                                    height="0.020204076543450356"
                                                                ></svg>

                                                                <svg
                                                                    className={styles["path-166"]}
                                                                    width="0"
                                                                    height="0.013795902021229267"
                                                                ></svg>

                                                                <svg
                                                                    className={styles["path-168"]}
                                                                    width="0"
                                                                    height="0.01184209156781435"
                                                                ></svg>

                                                                <svg
                                                                    className={styles["path-170"]}
                                                                    width="0"
                                                                    height="0.009790493175387383"
                                                                ></svg>

                                                                <svg
                                                                    className={styles["path-172"]}
                                                                    width="0.0005190408555790782"
                                                                    height="0.009342735633254051"
                                                                ></svg>

                                                                <svg
                                                                    className={styles["path-174"]}
                                                                    width="0.00048807819257490337"
                                                                    height="0.009737756103277206"
                                                                ></svg>

                                                                <svg
                                                                    className={styles["path-176"]}
                                                                    width="0"
                                                                    height="0.0035593193024396896"
                                                                ></svg>

                                                                <svg
                                                                    className={styles["path-178"]}
                                                                    width="0.0004433365829754621"
                                                                    height="0.006185086444020271"
                                                                ></svg>

                                                                <svg
                                                                    className={styles["path-180"]}
                                                                    width="0"
                                                                    height="0.005460553802549839"
                                                                ></svg>

                                                                <svg
                                                                    className={styles["path-182"]}
                                                                    width="1"
                                                                    height="1"
                                                                    viewBox="0 0 1 1"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M0.520038 0.621094C0.520038 0.619069 0.520037 0.617038 0.519531 0.615014C0.520037 0.617038 0.520038 0.618563 0.520038 0.621094Z"
                                                                        fill="#60AFB8"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-184"]}
                                                                    width="0"
                                                                    height="0.003030702006071806"
                                                                ></svg>

                                                                <svg
                                                                    className={styles["path-186"]}
                                                                    width="0"
                                                                    height="0.0038538556545972824"
                                                                ></svg>

                                                                <svg
                                                                    className={styles["path-188"]}
                                                                    width="12"
                                                                    height="31"
                                                                    viewBox="0 0 12 31"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M11.5275 30.5605H8.05464V12.9501C8.05464 7.56883 5.13526 2.88877 0.838867 0.494389C6.76051 1.76043 11.2313 6.61352 11.5135 12.4926V12.493C11.5139 12.4989 11.5139 12.5044 11.5144 12.5098C11.5144 12.5107 11.5144 12.5112 11.5144 12.5121C11.5144 12.5175 11.5149 12.5229 11.5153 12.5288C11.5162 12.5519 11.5171 12.575 11.518 12.5986C11.518 12.599 11.518 12.5999 11.518 12.6004C11.5185 12.6054 11.5185 12.6099 11.5185 12.6144C11.5189 12.6162 11.5189 12.6181 11.5189 12.6199C11.5189 12.6239 11.5194 12.6289 11.5194 12.6335C11.5194 12.6348 11.5194 12.6366 11.5194 12.6385C11.5198 12.6425 11.5198 12.6475 11.5198 12.6516C11.5203 12.6534 11.5203 12.6556 11.5203 12.6579C11.5203 12.6624 11.5208 12.6665 11.5208 12.6711C11.5208 12.672 11.5208 12.6729 11.5208 12.6738C11.5212 12.6883 11.5216 12.7028 11.5221 12.7177C11.5221 12.7204 11.5226 12.7236 11.5226 12.7268C11.5226 12.7299 11.5226 12.734 11.5226 12.7372C11.523 12.7399 11.523 12.7426 11.523 12.7453C11.523 12.749 11.523 12.753 11.5235 12.7567C11.5235 12.7598 11.5235 12.7621 11.5235 12.7653C11.5235 12.7684 11.5235 12.7716 11.5239 12.7752C11.5239 12.7789 11.5239 12.782 11.5239 12.7861C11.5239 12.7888 11.5244 12.7916 11.5244 12.7943C11.5244 12.7983 11.5244 12.8029 11.5244 12.8074C11.5244 12.8092 11.5248 12.8119 11.5248 12.8138C11.5248 12.8196 11.5248 12.8264 11.5248 12.8323C11.5253 12.835 11.5253 12.8373 11.5253 12.84C11.5253 12.8436 11.5253 12.8486 11.5253 12.8522C11.5253 12.8545 11.5257 12.8572 11.5257 12.8595C11.5257 12.8636 11.5257 12.8676 11.5257 12.8722C11.5257 12.8744 11.5257 12.8772 11.5257 12.8794C11.5262 12.884 11.5262 12.8871 11.5262 12.8917C11.5262 12.8944 11.5262 12.8971 11.5262 12.8998C11.5262 12.9034 11.5262 12.9071 11.5262 12.9111C11.5266 12.9139 11.5266 12.9166 11.5266 12.9193C11.5266 12.9243 11.5266 12.9288 11.5266 12.9333C11.5266 12.9351 11.5266 12.9365 11.5266 12.9383C11.5266 12.9451 11.5271 12.9519 11.5271 12.9582C11.5271 12.9592 11.5271 12.9592 11.5271 12.9601C11.5271 12.966 11.5271 12.9718 11.5271 12.9782C11.5271 12.98 11.5271 12.9818 11.5271 12.9836C11.5271 12.9886 11.5271 12.9927 11.5271 12.9972C11.5275 12.9999 11.5275 13.0022 11.5275 13.0049C11.5275 13.0085 11.5275 13.013 11.5275 13.0171C11.5275 13.0198 11.5275 13.0221 11.5275 13.0248C11.5275 13.0289 11.5275 13.0325 11.5275 13.0366C11.5275 13.0393 11.5275 13.042 11.5275 13.0448C11.5275 13.0488 11.5275 13.0534 11.5275 13.0579C11.5275 13.0597 11.5275 13.062 11.5275 13.0638C11.5275 13.0706 11.5275 13.0769 11.5275 13.0837V14.6188V30.5605Z"
                                                                        fill="#454545"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-190"]}
                                                                    width="21"
                                                                    height="28"
                                                                    viewBox="0 0 21 28"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M16.7495 0.169228C15.5889 4.15353 13.2371 6.88084 10.5239 6.88084C7.81014 6.88084 5.45833 4.15353 4.29783 0.169228H0.182617L10.5239 27.5303L20.8642 0.169228H16.7495Z"
                                                                        fill="white"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-192"]}
                                                                    width="2"
                                                                    height="1"
                                                                    viewBox="0 0 2 1"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M1.18207 0.168945H0.429688L0.442372 0.147204L1.18207 0.168945Z"
                                                                        fill="#C79920"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-194"]}
                                                                    width="17"
                                                                    height="29"
                                                                    viewBox="0 0 17 29"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M16.5009 28.6865L1.64446 16.258L5.88514 12.2755L0.265625 9.28819L5.42945 0.169962H6.18183L16.5231 27.531L16.5009 28.6865Z"
                                                                        fill="#323232"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-196"]}
                                                                    width="1"
                                                                    height="1"
                                                                    viewBox="0 0 1 1"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M0.765527 0.168945H0.0126953L0.753296 0.147204L0.765527 0.168945Z"
                                                                        fill="#C79920"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-198"]}
                                                                    width="17"
                                                                    height="29"
                                                                    viewBox="0 0 17 29"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M0.693547 28.6865L0.670898 27.531L11.0121 0.169962H11.765L16.9279 9.28819L11.3093 12.2755L15.55 16.258L0.693547 28.6865Z"
                                                                        fill="#323232"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-200"]}
                                                                    width="16"
                                                                    height="28"
                                                                    viewBox="0 0 16 28"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M5.18188 0.168779L0.362305 8.77244L5.98182 11.7593L1.74114 15.7423L15.5231 27.5303L5.18188 0.168779Z"
                                                                        fill="#454545"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-202"]}
                                                                    width="16"
                                                                    height="28"
                                                                    viewBox="0 0 16 28"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M10.9697 0.168779L15.7897 8.77244L10.1707 11.7593L14.4109 15.7423L0.628906 27.5303L10.9697 0.168779Z"
                                                                        fill="#454545"
                                                                    />
                                                                </svg>

                                                                <svg
                                                                    className={styles["path-206"]}
                                                                    width="14"
                                                                    height="4"
                                                                    viewBox="0 0 14 4"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M7.14067 3.89941C4.9003 3.89941 2.73918 3.08362 1.05641 1.60151C0.723931 1.30844 0.691319 0.801117 0.984389 0.468186C1.27791 0.135255 1.78524 0.103079 2.11726 0.396149C3.50651 1.61916 5.29121 2.29364 7.14067 2.29364C8.99059 2.29364 10.7748 1.61916 12.1645 0.396149C12.4975 0.103079 13.0043 0.136161 13.2974 0.468186C13.5914 0.801117 13.5579 1.30844 13.2254 1.60151C11.5431 3.08362 9.38196 3.89941 7.14067 3.89941Z"
                                                                        fill="#ED975D"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className={styles["employer"]}>I am Job Seeker </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>

                                        <div className={styles["item"]}>
                                            <div className={styles["gmp-card"]}>
                                                <div className={styles["container"]}>
                                                    <div className={styles["miscellaneous"]}>
                                                        <svg
                                                            className={styles["vector2"]}
                                                            width="120"
                                                            height="100"
                                                            viewBox="0 0 120 100"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M58.5772 95.1553L24.8877 61.4653L75.5513 10.8021L109.241 44.4907L58.5772 95.1553Z"
                                                                fill="#FFB27D"
                                                            />
                                                            <path
                                                                d="M65.0596 88.6738V88.6734L67.3737 86.3593L65.0596 88.6738ZM74.0609 79.6725H74.0605L76.3286 77.4043H76.3291L74.0609 79.6725ZM83.0614 70.672V70.6716L85.2836 68.4494H85.284L83.0614 70.672ZM92.0628 61.6706L92.0623 61.6702L100.755 52.9775V52.9779L92.0628 61.6706Z"
                                                                fill="#ECDBD0"
                                                            />
                                                            <path
                                                                d="M65.059 88.6719L61.6689 85.2823L63.9835 82.9677L67.3731 86.3578L65.059 88.6719ZM74.0599 79.671L70.6703 76.2809L72.9384 74.0128L76.328 77.4028L74.0599 79.671ZM83.0608 70.67L79.6712 67.2805L81.8934 65.0578L85.283 68.4479L83.0608 70.67ZM92.0617 61.6687L88.6721 58.2791L97.3653 49.5864L100.695 52.9169L100.703 52.9241L100.755 52.976L92.0617 61.6687Z"
                                                                fill="#ED975D"
                                                            />
                                                            <path
                                                                d="M66.1391 89.7502C67.9855 91.5975 67.9855 94.591 66.1391 96.4375C64.2923 98.2839 61.2992 98.2839 59.4528 96.4375L46.3373 83.3211C44.4904 81.4756 44.4904 78.4816 46.3373 76.6347C48.1837 74.7883 51.1768 74.7883 53.0232 76.6347L66.1391 89.7502Z"
                                                                fill="#C4823F"
                                                            />
                                                            <path
                                                                d="M75.1395 80.7514C76.9855 82.5973 76.9855 85.5913 75.1391 87.4377C73.2931 89.2837 70.2991 89.2837 68.4527 87.4382L55.3368 74.3218C53.4904 72.4759 53.4908 69.4819 55.3368 67.6355C57.1832 65.7895 60.1772 65.7895 62.0236 67.6355L75.1395 80.7514Z"
                                                                fill="#C4823F"
                                                            />
                                                            <path
                                                                d="M71.7955 88.8223C71.7942 88.8223 71.7928 88.8223 71.791 88.8223C70.5826 88.8209 69.3747 88.3595 68.4528 87.4381L67.3724 86.3577L63.9827 82.9676L58.2939 77.2793L60.3026 75.2707L70.7804 85.7485C71.7023 86.6699 72.9089 87.129 74.1168 87.129C74.6183 87.129 75.1198 87.0498 75.601 86.8921C75.4609 87.0813 75.3108 87.266 75.1392 87.4377C75.1229 87.4539 75.1063 87.4706 75.0896 87.4868C74.1736 88.3762 72.9864 88.8214 71.7991 88.8223C71.7982 88.8223 71.7969 88.8223 71.7955 88.8223Z"
                                                                fill="#A97036"
                                                            />
                                                            <path
                                                                d="M84.1411 71.7498C85.987 73.5962 85.987 76.5897 84.1411 78.4361C82.2942 80.2826 79.3016 80.2835 77.4547 78.4361L64.3392 65.3207C62.4924 63.4743 62.4924 60.4803 64.3392 58.6343C66.1857 56.7879 69.1787 56.7879 71.0251 58.6343L84.1411 71.7498Z"
                                                                fill="#C4823F"
                                                            />
                                                            <path
                                                                d="M80.7499 79.8682C79.5401 79.8682 78.3304 79.4068 77.4072 78.484L76.3271 77.4036L76.3731 77.3572L77.4536 78.4376C78.3768 79.3613 79.5865 79.8227 80.7963 79.8227C81.988 79.8227 83.1802 79.3748 84.098 78.4791C84.0967 78.4804 84.0949 78.4818 84.0935 78.4831C83.1703 79.4068 81.9606 79.8682 80.7499 79.8682Z"
                                                                fill="#ECDBD0"
                                                            />
                                                            <path
                                                                d="M72.9378 74.0117L67.249 68.3234L67.2954 68.277L72.9843 73.9658L72.9378 74.0117Z"
                                                                fill="#CB8256"
                                                            />
                                                            <path
                                                                d="M76.3276 77.4014H76.3271L76.3766 77.3519L76.3276 77.4014Z"
                                                                fill="#DABCAA"
                                                            />
                                                            <path
                                                                d="M76.3271 77.4014L72.9375 74.0113L72.9839 73.9654L76.3735 77.3549L76.3271 77.4014Z"
                                                                fill="#BC7046"
                                                            />
                                                            <path
                                                                d="M80.7965 79.8213C79.5868 79.8213 78.377 79.3599 77.4538 78.4362L76.3733 77.3558L72.9838 73.9662L67.2949 68.2774L69.2571 66.3152L79.735 76.7931C80.6568 77.7145 81.8635 78.1736 83.0714 78.1736C83.5725 78.1736 84.0744 78.0943 84.5556 77.9366C84.4168 78.1245 84.2681 78.3074 84.0983 78.4777C83.1805 79.3734 81.9883 79.8213 80.7965 79.8213Z"
                                                                fill="#A97036"
                                                            />
                                                            <path
                                                                d="M93.1418 62.7495C94.9873 64.5959 94.9873 67.589 93.1413 69.4358C91.2953 71.2814 88.3009 71.2823 86.4554 69.4358L73.3386 56.3195C71.4926 54.4731 71.4926 51.4804 73.3386 49.6331C75.1854 47.7867 78.179 47.7867 80.0249 49.6331L93.1418 62.7495Z"
                                                                fill="#C4823F"
                                                            />
                                                            <path
                                                                d="M89.7059 70.9131C88.4962 70.9131 87.2864 70.4517 86.3632 69.529L85.2832 68.4485L85.3756 68.3561L86.456 69.4366C87.3788 70.3598 88.5885 70.8212 89.7983 70.8212C90.981 70.8212 92.1642 70.3801 93.0793 69.4983C93.0694 69.5087 93.0595 69.5186 93.0496 69.5285C92.1264 70.4517 90.9162 70.9131 89.7059 70.9131Z"
                                                                fill="#ECDBD0"
                                                            />
                                                            <path
                                                                d="M81.8929 65.0576L76.2041 59.3693L76.2965 59.2769L81.9853 64.9657L81.8929 65.0576Z"
                                                                fill="#CB8256"
                                                            />
                                                            <path
                                                                d="M85.2836 68.4482H85.2832L85.3765 68.3549H85.377L85.2836 68.4482Z"
                                                                fill="#DABCAA"
                                                            />
                                                            <path
                                                                d="M85.2812 68.4482L81.8916 65.0582L81.984 64.9663L85.3736 68.3559L85.2812 68.4482Z"
                                                                fill="#BC7046"
                                                            />
                                                            <path
                                                                d="M89.7985 70.8203C88.5887 70.8203 87.3789 70.3589 86.4562 69.4357L85.3757 68.3553H85.3753L81.9857 64.9657L76.2969 59.2769L78.2131 57.3606L88.691 67.8389C89.6128 68.7599 90.8195 69.219 92.0274 69.219C92.5289 69.219 93.0304 69.1397 93.5116 68.982C93.3796 69.1604 93.2385 69.3344 93.0795 69.4975C92.1644 70.3792 90.9812 70.8203 89.7985 70.8203Z"
                                                                fill="#A97036"
                                                            />
                                                            <path
                                                                d="M82.9835 52.5903L49.2935 86.2803L12.5176 49.5048L46.2076 15.8139L82.9835 52.5903Z"
                                                                fill="#C4823F"
                                                            />
                                                            <path
                                                                d="M60.6007 97.2861C60.1312 97.0609 59.691 96.754 59.3017 96.3647L57.9482 95.0112L57.9856 94.9738L59.4518 96.44C59.7992 96.7874 60.1875 97.0694 60.6007 97.2861Z"
                                                                fill="#ECDBD0"
                                                            />
                                                            <path
                                                                d="M62.6456 97.7471C61.9459 97.7471 61.2457 97.5925 60.6014 97.2839C60.1882 97.0672 59.7998 96.7851 59.4525 96.4377L57.9863 94.9716L59.529 93.4289C60.0089 92.949 60.3639 92.3917 60.5946 91.7974L62.3063 93.5091C63.2286 94.4314 64.4366 94.8914 65.645 94.8914C66.1267 94.8914 66.6079 94.8184 67.0715 94.6724C66.8417 95.2883 66.484 95.8673 65.9888 96.3625C65.0651 97.2857 63.8554 97.7471 62.6456 97.7471Z"
                                                                fill="#A97036"
                                                            />
                                                            <path
                                                                d="M51.2619 88.3223L49.1433 86.2033L49.1429 86.2037L49.0762 86.137L49.1136 86.0996L49.2929 86.279L51.2992 88.2849L51.2619 88.3223Z"
                                                                fill="#ECDBD0"
                                                            />
                                                            <path
                                                                d="M51.2998 88.2861L49.2939 86.2798L52.1852 83.3885L54.4741 85.6778C53.8798 85.9085 53.3224 86.2636 52.843 86.743L51.2998 88.2861Z"
                                                                fill="#A97036"
                                                            />
                                                            <path
                                                                d="M42.3906 79.4512L40.2045 77.265L40.2418 77.2276L42.428 79.4138L42.3906 79.4512ZM33.5181 70.5787L31.4225 68.4836L31.4599 68.4457L33.5555 70.5413L33.5181 70.5787ZM24.6451 61.7057L12.3682 49.4292L12.4556 49.3463L12.566 49.4567L12.5182 49.5045L24.6825 61.6683L24.6451 61.7057Z"
                                                                fill="#ECDBD0"
                                                            />
                                                            <path
                                                                d="M49.2935 86.2803L49.1142 86.1009L50.6569 84.5582C51.1368 84.0784 51.4918 83.521 51.722 82.9263L52.1474 83.3516L52.1478 83.3512L52.1852 83.3886L49.2935 86.2803ZM42.4274 79.4141L40.2412 77.228L41.7844 75.6848C42.2638 75.2054 42.6189 74.6481 42.8491 74.0538L45.6016 76.8058C45.0073 77.0361 44.4499 77.3911 43.9705 77.8709L42.4274 79.4141ZM33.5548 70.5416L31.4593 68.4461L33.002 66.9033C33.4819 66.4239 33.8369 65.8666 34.0676 65.2718L36.7286 67.9333C36.1343 68.1636 35.577 68.5191 35.0976 68.9989L33.5548 70.5416ZM24.6819 61.6687L12.5176 49.5048L12.5653 49.4571L22.5084 59.4001L25.1572 56.7517L24.1061 55.7005L24.3007 55.5054L27.8561 59.0604C27.2618 59.2911 26.7045 59.6461 26.2246 60.1255L24.6819 61.6687Z"
                                                                fill="#A97036"
                                                            />
                                                            <path
                                                                d="M28.6678 71.0557C26.8219 72.9021 23.8279 72.9021 21.9815 71.0548C20.1351 69.2089 20.1351 66.2149 21.9815 64.3685L26.2244 60.1251C28.0709 58.2791 31.0648 58.2791 32.9108 60.126C34.7572 61.9724 34.7577 64.9659 32.9117 66.8123L28.6678 71.0557Z"
                                                                fill="#FFB27D"
                                                            />
                                                            <path
                                                                d="M37.5409 79.929C35.694 81.775 32.7009 81.775 30.8545 79.929C29.0081 78.0826 29.0081 75.0886 30.8545 73.2426L35.0975 68.9992C36.9439 67.1519 39.9374 67.1528 41.7838 68.9992C43.6303 70.8452 43.6302 73.8392 41.7843 75.6851L37.5409 79.929Z"
                                                                fill="#FFB27D"
                                                            />
                                                            <path
                                                                d="M46.4135 88.8014C44.5676 90.6473 41.5741 90.6469 39.7276 88.8005C37.8812 86.954 37.8812 83.9605 39.7272 82.1141L43.971 77.8707C45.817 76.0243 48.8105 76.0243 50.657 77.8707C52.5034 79.718 52.5034 82.7107 50.6574 84.558L46.4135 88.8014Z"
                                                                fill="#FFB27D"
                                                            />
                                                            <path
                                                                d="M55.2851 97.6738C53.4387 99.5202 50.4451 99.5202 48.5992 97.6738C46.7523 95.8269 46.7523 92.8338 48.5978 90.9865L52.8421 86.7431C54.6881 84.8971 57.6816 84.8972 59.5281 86.7445C61.3745 88.5904 61.3745 91.5844 59.5281 93.4304L55.2851 97.6738Z"
                                                                fill="#FFB27D"
                                                            />
                                                            <path
                                                                d="M51.9424 99.0576C50.7327 99.0576 49.5225 98.5962 48.5997 97.673C48.2875 97.3603 48.032 97.0134 47.8252 96.6458C48.5438 97.0504 49.3454 97.2527 50.1465 97.2527C51.354 97.2527 52.5615 96.7926 53.4834 95.8708L57.7263 91.6274C59.2601 90.0936 59.516 87.7701 58.5013 85.9683C58.8685 86.1755 59.2154 86.4306 59.5286 86.7437C60.4518 87.6665 60.9136 88.8767 60.9136 90.0864C60.9136 90.6677 60.8068 91.2489 60.5942 91.7981C60.3635 92.3924 60.0084 92.9498 59.5286 93.4296L57.9859 94.9724L57.9485 95.0098L55.2856 97.673C54.3624 98.5962 53.1522 99.0576 51.9424 99.0576Z"
                                                                fill="#ED975D"
                                                            />
                                                            <path
                                                                d="M39.7284 88.7998C39.7194 88.7908 39.7108 88.7823 39.7018 88.7732C39.3893 88.4607 39.1344 88.1136 38.9277 87.7466C38.9304 87.7484 38.9331 87.7497 38.9363 87.7515C39.1448 88.1271 39.4087 88.4801 39.7275 88.7989C39.7279 88.7989 39.7279 88.7994 39.7284 88.7998Z"
                                                                fill="#ECDBD0"
                                                            />
                                                            <path
                                                                d="M50.6143 77.833C50.3058 77.5318 49.9668 77.281 49.607 77.081C49.6052 77.0783 49.6034 77.0752 49.6016 77.0725C49.9636 77.2764 50.3054 77.5268 50.6143 77.833Z"
                                                                fill="#D9AB7E"
                                                            />
                                                            <path
                                                                d="M43.0442 90.1602C41.8457 90.1602 40.6477 89.7073 39.7281 88.8017C39.7277 88.8013 39.7277 88.8008 39.7272 88.8008C39.4082 88.4818 39.1442 88.1286 38.9355 87.7528C39.6519 88.1538 40.4503 88.3548 41.2483 88.3548C42.4563 88.3548 43.6633 87.8947 44.5852 86.9729L48.8281 82.7295C50.3591 81.1984 50.6169 78.8799 49.6081 77.079C49.9681 77.279 50.3073 77.53 50.616 77.8314C50.6209 77.8359 50.6254 77.8409 50.6304 77.8454C52.4768 79.6918 52.4768 82.6858 50.6304 84.5317L46.3874 88.7751C45.4642 89.6983 44.2544 90.1602 43.0442 90.1602Z"
                                                                fill="#ED975D"
                                                            />
                                                            <path
                                                                d="M30.8203 79.8965C30.814 79.8897 30.8077 79.8839 30.8014 79.8771C30.4889 79.5646 30.234 79.2174 30.0273 78.8505C30.0354 78.855 30.044 78.8599 30.0521 78.8644C30.2552 79.2336 30.5114 79.5813 30.8203 79.8965Z"
                                                                fill="#ECDBD0"
                                                            />
                                                            <path
                                                                d="M41.7465 68.9619C41.4322 68.6544 41.0859 68.3995 40.7185 68.1969C40.7135 68.1883 40.7086 68.1798 40.7041 68.1712C41.0711 68.3783 41.4183 68.6332 41.7308 68.9457C41.7362 68.9511 41.7411 68.9565 41.7465 68.9619Z"
                                                                fill="#D9AB7E"
                                                            />
                                                            <path
                                                                d="M34.1452 81.2617C32.9435 81.2617 31.7419 80.8062 30.8214 79.8961C30.5123 79.5807 30.2559 79.2328 30.0527 78.8634C30.7651 79.2585 31.5572 79.4563 32.3492 79.4563C33.5568 79.4563 34.7643 78.9963 35.6861 78.0744L39.9291 73.831C41.4556 72.3045 41.716 69.9958 40.7185 68.1976C41.0861 68.4004 41.4326 68.6554 41.7471 68.9631C43.5782 70.8104 43.5728 73.7923 41.7313 75.6333L37.4884 79.8767C36.5652 80.7999 35.3554 81.2617 34.1452 81.2617Z"
                                                                fill="#ED975D"
                                                            />
                                                            <path
                                                                d="M25.4154 72.5332C24.2057 72.5332 22.9955 72.0714 22.0727 71.1482C22.0569 71.1324 22.0412 71.1166 22.0254 71.1004C22.9432 71.9952 24.134 72.4422 25.3253 72.4422C26.5346 72.4422 27.7448 71.9808 28.6676 71.0576L31.3309 68.3948L31.4214 68.4853L28.7586 71.1482C27.8354 72.0714 26.6256 72.5332 25.4154 72.5332Z"
                                                                fill="#ECDBD0"
                                                            />
                                                            <path
                                                                d="M34.0682 65.2744L33.9776 65.1839C34.6274 63.5078 34.2854 61.5356 32.9521 60.1704C32.9693 60.1867 32.9859 60.2029 33.0026 60.2195C34.3696 61.5861 34.7247 63.5812 34.0682 65.2744Z"
                                                                fill="#D9AB7E"
                                                            />
                                                            <path
                                                                d="M31.4217 68.4863L31.3311 68.3957L31.3685 68.3582L31.4592 68.4484L31.4217 68.4863Z"
                                                                fill="#DABCAA"
                                                            />
                                                            <path
                                                                d="M31.4597 68.4473L31.3691 68.3572L32.9123 66.814C33.3922 66.3341 33.7472 65.7772 33.9775 65.1825L34.068 65.273C33.8373 65.8678 33.4823 66.4251 33.0024 66.9045L31.4597 68.4473Z"
                                                                fill="#C99367"
                                                            />
                                                            <path
                                                                d="M25.326 72.4404C24.1347 72.4404 22.9438 71.9935 22.026 71.0987C21.735 70.7981 21.4948 70.4679 21.2988 70.1191C22.0175 70.5238 22.8186 70.726 23.6201 70.726C24.8281 70.726 26.0352 70.266 26.957 69.3442L31.2 65.1008C32.7337 63.567 32.9892 61.2435 31.9745 59.4417C32.3228 59.6377 32.6521 59.8769 32.9518 60.1675C34.285 61.5327 34.627 63.5049 33.9772 65.181C33.747 65.7757 33.392 66.3326 32.9121 66.8125L31.3689 68.3556L31.3315 68.393L28.6683 71.0558C27.7455 71.9791 26.5353 72.4404 25.326 72.4404Z"
                                                                fill="#ED975D"
                                                            />
                                                            <path
                                                                d="M59.5895 26.736L49.8619 36.4632L49.7911 36.5416C48.0844 38.151 47.1864 40.5552 47.6081 43.041L49.9096 56.6038C50.5796 60.5575 54.3297 63.2181 58.2838 62.5481C62.2366 61.8777 64.899 58.129 64.2277 54.1739L63.1301 47.707C62.502 45.8511 62.9228 43.7186 64.4016 42.2394C64.7102 41.9312 69.8588 37.0052 69.8588 37.0052C72.6942 34.1698 72.6933 29.5718 69.8583 26.7369C67.0225 23.9015 62.4249 23.9006 59.5895 26.736Z"
                                                                fill="#FFB27D"
                                                            />
                                                            <path
                                                                d="M51.748 52.9529L52.0224 56.133C52.2301 58.5471 54.3564 60.3358 56.7714 60.1281L57.9636 60.0254C60.3782 59.8177 62.1669 57.6906 61.9592 55.276L61.6852 52.0955L51.748 52.9529Z"
                                                                fill="#FFD0B0"
                                                            />
                                                            <path
                                                                d="M21.6072 58.1982L0 36.591L33.7378 2.8537L55.3454 24.4609L21.6072 58.1982Z"
                                                                fill="#777777"
                                                            />
                                                            <path
                                                                d="M12.5631 49.4561L12.4531 49.3461L12.6066 49.2002L12.7126 49.3066L12.5631 49.4561Z"
                                                                fill="#C4B6AD"
                                                            />
                                                            <path
                                                                d="M22.5085 59.4014L12.5654 49.4583L12.7155 49.3083L21.6073 58.2002L24.1062 55.7018L25.1573 56.7529L22.5085 59.4014Z"
                                                                fill="#A97036"
                                                            />
                                                            <path
                                                                d="M21.6059 58.1982L12.714 49.3064L12.6077 49.1996L1.0498 37.6422L3.54863 35.1438L24.1047 55.6999L21.6059 58.1982Z"
                                                                fill="#575757"
                                                            />
                                                            <path
                                                                d="M120 33.7383L100.758 52.9805L67.0205 19.2427L86.2623 2.67029e-05L120 33.7383Z"
                                                                fill="#BEAC6F"
                                                            />
                                                            <path
                                                                d="M118.4 32.1406L116.807 30.5471H116.807L118.4 32.1406Z"
                                                                fill="#D4D4D4"
                                                            />
                                                            <path
                                                                d="M100.703 52.9238L100.695 52.9166L97.5654 49.7861L116.807 30.5439L118.401 32.1384L119.944 33.6821L100.703 52.9238Z"
                                                                fill="#AD9C66"
                                                            />
                                                            <path
                                                                d="M21.8812 40.043C21.8812 42.353 20.0087 44.2256 17.6982 44.2256C15.3891 44.2256 13.5156 42.353 13.5156 40.043C13.5156 37.733 15.3891 35.8604 17.6982 35.8604C20.0087 35.8604 21.8812 37.733 21.8812 40.043Z"
                                                                fill="#EED172"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className={styles["employer"]}>I am an Employer </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles["sign-up"]}>
                                        <div className={styles["already-have-an-account"]}>
                                            Already have an account?{" "}
                                        </div>
                                        <div className={styles["text-button"]}>
                                            <div className={styles["button"]}>Log In </div>
                                        </div>
                                        <div className={styles["now"]}>now. </div>
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

export default Signup;
