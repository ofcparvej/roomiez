import React from "react";
import { useNavigate } from "react-router-dom";
import { CardHeader } from "@material-tailwind/react";

const Dummy = (props) => {
  const navigate = useNavigate();
  let logoUrl = props.data.collegeImgUrl;

  return (
    <div className="  ">
      <div
        onClick={() => {
          navigate(`/locations/${props.data.collegeCode}`);
        }}
      >
        <div class="max-w-sm  rounded overflow-hidden shadow-sm h-[500px] ">
          <CardHeader
            color="blue-gray"
            className="relative w-full object-cover h-[300px] flex justify-center items-center "
          >
            <img
              className="relative object-cover  max-w-full max-h-full  rounded-sm  "
              src={logoUrl}
              alt="card-image"
            />
          </CardHeader>
          <div class="px-6 py-4">
            <div class="font-bold  mb-2 flex justify-center items-center ">
              {props.data.collegeName}
            </div>
            <p class="text-gray-700 text-base  ">
              {/* COLLEGE CODE : {props.data.collegeCode} */}
              {/* <br></br> */}
              College Address : {props.data.address}
              <br></br>
            </p>
          </div>
          <div class="px-6 pt-4 pb-2"></div>
        </div>
      </div>
    </div>
  );
};
// class="flex justify-center items-center"

export default Dummy;
