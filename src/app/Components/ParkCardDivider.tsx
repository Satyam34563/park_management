import React from 'react'
import Typography from "@mui/material/Typography";
interface props{
    subheading:string,
    heading:string
}
const ParkCardDivider: React.FC<props> = ({ subheading, heading }) => {
  return (
    <div className=" h-40 grid place-items-center">
      <div className=" text-center  ">
        <Typography variant="h6" className=" font-semibold text-orange-500">
          {subheading}
        </Typography>
        <Typography variant="h4" className=" font-semibold">
          {heading}
        </Typography>
      </div>
    </div>
  );
};

export default ParkCardDivider
