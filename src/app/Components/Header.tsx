import HeaderItem from '../Cards/HeaderItem';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
const Header = () => {
    const menu = [
      {
        name: "Home",
      },
      {
        name: "About",
      },
      {
        name: "Services",
      },
      {
        name: "DDA Portal",
      },
    ];
  return (
    <div className="flex gap-8 justify-between">
      <div className="flex gap-12">
        <div className="flex align-middle gap-2">
          <Image
            src="https://management.ind.in/img/o/IIT-Roorkee-Symbol-2.png"
            className="w-[80px] md:w-[80px] object-cover"
            alt=""
            width={80}
            height={80}
          />
          <Typography className="self-center font-serif text-xl font-semibold">
            IITR Travels
          </Typography>
        </div>
        <div className="hidden md:flex gap-8">
          {menu.map((item, index) => {
            return <HeaderItem key={index} name={item.name} />;
          })}
        </div>
      </div>
      <Button
        variant="contained"
        size="small"
        className=" h-min px-8 py-2 self-center"
      >
        Login
      </Button>
    </div>
  );
}

export default Header
