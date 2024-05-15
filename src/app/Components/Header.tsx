import HeaderItem from '../Cards/HeaderItem';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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
          <img
            src="https://management.ind.in/img/o/IIT-Roorkee-Symbol-2.png"
            className="w-[80px] md:w-[80px] object-cover"
            alt=""
          />
          <Typography className="self-center font-serif text-xl font-semibold">
            IITR Travels
          </Typography>
        </div>
        <div className="hidden md:flex gap-8">
          {menu.map((item) => {
            return <HeaderItem name={item.name} />;
          })}
        </div>
      </div>
      <Button variant="contained" size="small" className=' h-min px-8 py-2 self-center'>
        Login
      </Button>
    </div>
  );
}

export default Header
