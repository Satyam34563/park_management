import React from 'react'
import ParkDetailsCard from "../Cards/ParkDetailsCard";
import ParkData from "../Cards/ParkData";
const ParkCardComponent = () => {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-none">
      {ParkData.map((i) => (
        <ParkDetailsCard
          image={i.image}
          current_status={i.current_status}
          weeks={i.weeks}
          name={i.name}
          location={i.location}
          entry_fees={i.entry_fees}
          prev_fee={i.prev_fee}
          about={i.about}
          rating={i.rating}
        />
      ))}
    </div>
  );
}

export default ParkCardComponent
