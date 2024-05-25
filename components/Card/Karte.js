
import { BadgeIcon } from '@components/Badge';
import Image from 'next/image';
import React from 'react';

const Karte = ({ title, description,icon,image }) => {
  return (
      <div className="flex flex-col md:flex-row justify-between w-full bg-white-600/20 rounded-lg shadow-md p-4 mt-5  lg:w-3/5">
          {/* Left Section - Details */}
          <div className="flex flex-col justify-between w-full md:w-1/2 m-5 pr-10">
              <div>
                  <h2 className="flex items-center text-xl font-semibold mb-2">
                      <BadgeIcon icon={icon} />
                      {title}
                  </h2>
                  <p className="text-gray-600">{description}</p>
              </div>
              {/* <ul className="list-disc pl-5 space-y-2">
      <li>Save time and effort with AI-generated copywriting</li>
      <li>Boost your advertising success with engaging copy</li>
      <li>Drive more conversions with copy that speaks to your audience</li>
    </ul> */}
          </div>

          <div className="w-full md:w-1/3 h-1/4 lg:w-1/3">
              <Image
                  src={image}
                  width={512}
                  height={512}
                  alt="Description"
                  objectFit="cover"
                  className="drop-shadow-xl w-full rounded-xl"
              />
          </div>
      </div>
      //   <div className="flex justify-between w-3/5 bg-white-600/20 rounded-lg shadow-md p-4 mt-5">
      //       {/* Left Section - Details */}
      //       <div className="flex flex-col justify-between w-1/2 m-5">
      //           <div>
      //               <h2 className="flex items-center text-xl font-semibold mb-2">
      //                   <BadgeIcon icon={icon} />
      //                   {title}
      //               </h2>
      //               <p className="text-gray-600">{description}</p>
      //           </div>
      //           {/* <ul className="list-disc pl-5 space-y-2">
      //   <li>Save time and effort with AI-generated copywriting</li>
      //   <li>Boost your advertising success with engaging copy</li>
      //   <li>Drive more conversions with copy that speaks to your audience</li>
      // </ul> */}
      //       </div>

      //       <div className="w-1/3 h-full">
      //           <Image
      //               src={image}
      //               width={512}
      //               height={512}
      //               alt="Description"
      //               objectFit="cover"
      //               className="drop-shadow-xl w-full rounded-xl"
      //           />
      //       </div>
      //   </div>
  );
};

export default Karte;
