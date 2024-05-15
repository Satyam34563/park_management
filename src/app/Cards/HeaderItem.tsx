import React from "react";
interface props{
    name:string,
}
function HeaderItem({name}:props) {
  return (
    <div className="flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8">
      <h2>{name}</h2>
    </div>
  );
}

export default HeaderItem;
