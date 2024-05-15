import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import React from 'react'

const SpecificPageAbout = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent className="-ml-4">
          <CarouselItem className="pl-4">1</CarouselItem>
          <CarouselItem className="pl-4">2</CarouselItem>
          <CarouselItem className="pl-4">3</CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default SpecificPageAbout
