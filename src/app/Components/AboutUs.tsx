import { Typography } from '@mui/material'
import React from 'react'
import DividerComponent from './DividerComponent';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AboutUsData from "../Cards/AboutUs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const AboutUs = () => {
  return (
    <Card className=" w-[100%] pb-16">
      <DividerComponent />
      <div className=" text-center">
        <Typography variant="h6" className=" font-semibold text-orange-500">
          PROMOTION
        </Typography>
        <Typography variant="h4" className=" lg:font-semibold md:font-normal">
          See What Our Visitors Say{" "}
        </Typography>
        <Typography variant="h3" className=" font-semibold">
          About Us
        </Typography>
      </div>
      <div className=" mx-16 md:mx-32 mt-10">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {AboutUsData.map((data, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 md:basis-1/1 "
              >
                <div className="p-1">
                  <Card className=" md:min-h-72">
                    <CardContent className="flex items-center justify-center p-6 relative">
                      <Avatar className="w-20 h-20 absolute top-2 border-4 border-orange-500">
                        <AvatarImage src={data.image} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <Typography className=" mt-20 md:px-20 text-justify">
                          {data.message}
                        </Typography>
                        <Typography variant="h6" className=' font-semibold text-center mt-6'>
                          {data.name}
                        </Typography>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Card>
  );
}

export default AboutUs
