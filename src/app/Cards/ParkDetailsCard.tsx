import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Grid from "@mui/material/Grid";
import PlaceIcon from "@mui/icons-material/Place";
import Rating from "@mui/material/Rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
interface ParkDetailsProps {
  name:string,
  image:string,
  location:string,
  entry_fees:string,
  prev_fee:string,
  current_status:string,
  rating:number,
  weeks:string,
  about:string
}
const ParkDetailsCard:React.FC<ParkDetailsProps>=(props)=> {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 345, height: 450 }}>
      <div className="relative">
        <Image
          className=" w-full h-[190px]"
          src={props.image}
          alt={props.location}
          width={200}
          height={200}
        />
        <Avatar className="w-16 h-16 absolute bottom-[-20px] left-3">
          <AvatarImage src="https://th.bing.com/th/id/OIP.zhdEnlzXf8V5Bja6mIB2fgHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <CalendarTodayIcon
              fontSize="small"
              color="disabled"
              sx={{ marginRight: 0.5 }}
            />
            <label htmlFor="" className=" disabled font-medium text-xs">
              {props.weeks}
            </label>
          </Grid>
          <Grid item xs={4}>
            <AccessTimeIcon
              fontSize="small"
              color="disabled"
              sx={{ marginRight: 0.5 }}
            />
            <label htmlFor="" className=" disabled font-medium text-xs">
              {props.current_status}
            </label>
          </Grid>
          <Grid item xs={4}>
            <PlaceIcon
              fontSize="small"
              color="disabled"
              sx={{ marginRight: 0.5 }}
            />
            <label className=" disabled font-medium text-xs">
              {props.location}
            </label>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={8}>
            <Typography variant="h5" className=" font-semibold">
              {props.name}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Rating name="read-only" value={props.rating} readOnly />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={3}>
            <Typography
              className="text-2xl font-bold text-amber-700"
              color="text.primary"
            >
              ₹{props.entry_fees}{" "}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className="line-through disabled">
              ₹{props.prev_fee}{" "}
            </Typography>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          color="text.secondary"
          className=" text-wrap h-16 overflow-hidden"
        >
          {props.about}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">
          Explore Now
        </Button>
      </CardActions>
    </Card>
  );
}
export default ParkDetailsCard;