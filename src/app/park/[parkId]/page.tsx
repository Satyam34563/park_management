"use client";
import React from 'react'
import { usePathname } from "next/navigation";
import ParkData from '@/app/Cards/ParkData';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Divider from "@mui/material/Divider";
import DividerComponent from '@/app/Components/DividerComponent';
import LockClockIcon from "@mui/icons-material/LockClock";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Rating from "@mui/material/Rating";
import ParkCardDivider from '@/app/Components/ParkCardDivider';
import Gallery from '@/app/Cards/Gallery';
import AboutPark from '@/app/Components/SpecificPark/AboutPark';
import SpecificPageAbout from './SpecificPageAbout';
import Image from 'next/image';

const page = () => {
  const pathName = usePathname();
  const parkId = pathName.split("/")[2];
  const parkData = ParkData[parseInt(parkId)-1];
  return (
    <>
      <div className="relative">
        <Image
          src={parkData.image}
          alt="Image"
          className=" w-full md:h-[70vh]"
          width={400}
          height={400}
        />
        <div className="absolute bottom-2 left-2">
          <Typography variant="h2" className=" font-extrabold text-white">
            {parkData.name}
          </Typography>
          <div>
            <Button
              startIcon={<CalendarMonthIcon />}
              variant="contained"
              color="error"
              className="px-8 py-2"
            >
              BOOK
            </Button>
            <Button
              variant="contained"
              color="success"
              className="px-8 py-2 ml-2"
            >
              ADOPT
            </Button>
          </div>
        </div>
      </div>
      <DividerComponent />
      <Divider />
      <div className="md:flex justify-between p-5 md:px-28">
        <div className="flex gap-2">
          <LockClockIcon className="text-orange-600 text-2xl font-semibold self-center" />
          <label htmlFor="" className=" text-orange-600 text-2xl font-semibold">
            11:00am - 4:00pm(IST)
          </label>
        </div>
        <div className=" flex gap-0">
          <CurrencyRupeeIcon className="text-orange-600 text-2xl font-semibold self-center" />
          <label htmlFor="" className="text-orange-600 text-2xl font-semibold">
            11,00
          </label>
          <Typography className=" line-through disabled self-end text-xl px-4">
            1,200
          </Typography>
        </div>
        <Rating
          size="large"
          name="read-only"
          value={parkData.rating}
          readOnly
        />
      </div>
      <Divider />
      <ParkCardDivider subheading="PROMOTION" heading="About Us" />
      <AboutPark />
      <ParkCardDivider subheading="" heading="Gallery" />
      <Gallery />
      <SpecificPageAbout />
    </>
  );
}

export default page
