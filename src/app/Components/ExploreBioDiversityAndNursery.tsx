import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import React from 'react'
import DividerComponent from './DividerComponent';

const ExploreBioDiversityAndNursery = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <div className=" relative">
            <img
              src="https://media.greenmatters.com/brand-img/IAh_ipPAS/0x0/wildlife-1586888387645.jpg"
              className=" w-full h-80"
              alt=""
            />
            <div className="grid place-items-center">
              <div className=" absolute top-0 text-center w-full h-full grid place-items-center">
                <div>
                  <Typography className=" text-white font-semibold">
                    PROMOTION
                  </Typography>
                  <Typography variant="h4" className="text-white font-semibold">
                    Biodiversity Parks
                  </Typography>
                  <DividerComponent />
                  <Button
                    className=" text-white border-white"
                    variant="outlined"
                  >
                    View Nurserys
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className=" relative">
            <img
              src="https://media.timeout.com/images/103951638/image.jpg"
              className=" w-full h-80"
              alt=""
            />
            <div className="grid place-items-center">
              <div className=" absolute top-0 text-center w-full h-full grid place-items-center">
                <div>
                  <Typography className=" text-white font-semibold">
                    PROMOTION
                  </Typography>
                  <Typography variant="h4" className="text-white font-semibold">
                    Explore Nursery
                  </Typography>
                  <DividerComponent />
                  <Button
                    className=" text-white border-white"
                    variant="outlined"
                  >
                    View Nurserys
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ExploreBioDiversityAndNursery
