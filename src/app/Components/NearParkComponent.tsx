import React from 'react'
import NearParkCard from '../Cards/NearParkCard'
import ParkData from '../Cards/ParkData'
const NearParkComponent = () => {
  return (
    <div className="flex gap-4 overflow-x-scroll scrollbar-none">
      {ParkData.map((i, index) => {
        return <NearParkCard key={index} name={i.name} image={i.image} rating={i.rating} entry_fees={i.entry_fees} id={i.id.toString()} />;
      })}
    </div>
  );
}

export default NearParkComponent
