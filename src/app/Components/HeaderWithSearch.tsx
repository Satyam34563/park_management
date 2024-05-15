"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import ParkData from "../Cards/ParkData";
import Button from "@mui/material/Button";
type Props = {};
const options: any[] = [];
ParkData.map((data, index) => (options[index] = data.name));
const HeaderWithSearch = (props: Props) => {
  return (
    <div className="relative">
      <img
        className="w-full h-[33vh] md:h-[60vh]"
        src="https://wallpapercave.com/wp/wp11440140.jpg"
        alt=""
      />
      <div className="opacity-100 md:absolute bottom-2 mt-4 md:mt-0  ">
        <Typography className="self-center text-white font-extrabold text-center text-3xl bg-slate-500">
          PARKS OF IITR
        </Typography>
        <div className="flex gap-3 bg-gray-200 bg-opacity-80  p-2 ">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            className="w-full md:w-80"
            renderInput={(params) => (
              <TextField
                className="autoCompleteTxt"
                {...params}
                label="Search Parks"
              />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            className="w-full md:w-80"
            renderInput={(params) => (
              <TextField
                className="autoCompleteTxt"
                {...params}
                label="Search Location"
              />
            )}
          />
          <Button variant="contained" className=" px-7 h-fit self-center">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderWithSearch;
