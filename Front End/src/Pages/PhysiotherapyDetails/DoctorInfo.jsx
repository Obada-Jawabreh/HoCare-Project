import React from "react";
import dr from "./../../assets/images/dr.png";

const DoctorInfo = ({ provider }) => (
  <div className="bg-prim-dark flex flex-col md:flex-row justify-between items-center p-6 pt-16">
    <div className="flex flex-col gap-6 md:gap-12 w-full md:w-auto text-center md:text-left ml-4 md:ml-0">
      <div>
        <h2 className="font-medium text-xl md:text-2xl">
          {/* {provider?.profession} :*/} {provider?.firstName}{" "}
          {provider?.lastName}
        </h2>
        <p className="text-xs md:text-sm">{provider?.profession}</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-start">
        <p className="text-base md:text-lg">
          Experience <br /> 2+
        </p>
        <p className="text-base md:text-lg">
          Certification <br /> 5+
        </p>
        <p className="text-base md:text-lg">
          Patients <br /> 3K+
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center md:justify-start text-base md:text-lg">
        <div className="flex items-center">
          <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          <span className="ml-2">4.5</span>
        </div>
        <div>Open until 12:00 AM</div>
        <div>Location: Amman</div>
      </div>
    </div>
    <div
      className="relative mx-auto md:mx-0 mt-6 md:mt-0 md:ml-6 lg:ml-12"
      style={{ marginRight: "20%" }}
    >
      <span className="block border-4 border-white p-2">
        <img
          className="object-cover w-48 h-48 md:w-64 md:h-64 p-4"
          src={`http://localhost:5001/${provider?.profilePicture}`}
          alt="Dr. Hoda Khoori"
        />
      </span>
    </div>
  </div>
);

export default DoctorInfo;
