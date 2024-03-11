import React from "react";
import { Link } from "react-router-dom";

const ProfileNavigation = () => {
  return (
    <>
      <div className="bg-white z-50 top-0 left-0 right-0 shadow">
         <div className="container mx-auto px-5">
           <div className="flex py-6 justify-between items-center space-x-2">
             <div className="w-96 h-14 flex-col justify-center items-start gap-2.5 inline-flex z-40">
               <div className="justify-start items-center gap-2 inline-flex">
                 <Link
                   to="/"
                   className="justify-start items-center gap-2 inline-flex"
                 >
                   <img
                    //  className="w-60 h-14"
                     src="/seal.png"
                     alt="seal"
                     width={123}
                     height={56}
                   />
                   <img
                      // className="w-40 h-14"
                     src="/seal2.png"
                     alt="seal2"
                     width={165}
                     height={56}
                   />
                 </Link>
               </div>
             </div>
             <div className="justify-start items-center gap-2 flex">
               <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
                 <Link
                   to="/profile"
                   className="text-gray-500 text-sm font-semibold leading-none"
                 >
                   My Profile
                 </Link>
               </div>
               <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
                 <Link
                   to="/documents"
                   className="text-gray-500 text-sm font-semibold leading-none"
                 >
                   Documents
                 </Link>
               </div>
               <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
                 <Link
                   to="/job-tracker"
                   className="text-gray-500 text-sm font-semibold leading-none"
                 >
                   Job Application Tracker
                 </Link>
               </div>
               <div className="px-1 py-0.5 rounded justify-center items-center gap-2 flex">
                 <Link
                   to="/job-seeker"
                   className="text-gray-500 text-sm font-semibold leading-none"
                 >
                   Job Openings
                 </Link>
               </div>
              
               <div className="justify-start items-start gap-2 flex">
                 <Link
                   to="/"
                 >  
                 <div className="bg-stone-400 rounded justify-center items-center flex" style={{cursor: "pointer"}}>
                   <div className="self-stretch px-4 py-3 bg-stone-400 justify-center items-center gap-2 flex">
                     <button
                       type="button"
                       className="text-white text-xs font-semibold leading-none"
                     >
                       Logout
                     </button>
                   </div>
                 </div>
                   </Link>

                   <Link
                   to="/sign-up"
                 >  
                
                </Link>
               </div>
             </div>
           </div>
         </div>
       </div>
    </>
  );
};

export default ProfileNavigation;
