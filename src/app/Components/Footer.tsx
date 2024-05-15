import { Button, Grid, IconButton, InputBase, Paper, Typography } from '@mui/material'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";
import React from 'react';
import Divider from "@mui/material/Divider";


const Footer = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h4"
            className=" font-semibold font-serif text-xl pl-7 md:pb-7"
          >
            Travel IITR
          </Typography>
          <Typography className=" xs:w-full md:w-72 pl-7">
            Travel helps companies manage payments easily.
          </Typography>
          <div className="pl-7">
            <IconButton aria-label="delete">
              <LinkedInIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <MapsUgcIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <XIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <EmailIcon />
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container>
            <Grid item xs={6}>
              <ul className='pl-7 md:pl-1 '>
                <li className=" font-medium">Company</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Pricing</li>
              </ul>
            </Grid>
            <Grid item xs={6}>
              <ul>
                <li className=" font-medium">Destinations</li>
                <li>Maldives</li>
                <li>Los Angelas</li>
                <li>Las Vegas</li>
                <li>Torronto</li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} className='mt-10 sm:mt-1 pl-7 sm:pl-1'>
          <Typography className=" font-semibold">
            Join Our Newsletter
          </Typography>
          <Paper elevation={3} className="p-1 w-[21rem]">
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              className=" w-52"
              placeholder="Your email address"
              inputProps={{ "aria-label": "Your email address" }}
            />
            <Button variant="contained">Subscribe</Button>
          </Paper>
          <Typography className=" text-muted-foreground">
            *Will send you weekly updates for your better tour packages.{" "}
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Typography className=' text-center p-5'> Copyright @ Xpro 2022. All Rights Reserved</Typography>
    </>
  );
}

export default Footer
