import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Link from "next/link";
interface props {
  name: string;
  image: string;
  rating: number;
  entry_fees:string;
  id:string
}
const ImgMediaCard:React.FC<props>=({name, image, rating, entry_fees, id})=> {
  return (
    <Card
      className="relative"
      sx={{ maxWidth: 350, minWidth: 350, height: 360 }}
    >
      <Paper
        elevation={3}
        className=" bg-orange-600 w-fit absolute right-0 px-3 font-medium text-white"
      >
        ₹{entry_fees}
      </Paper>
      <CardMedia
        component="img"
        alt="green iguana"
        height="240"
        className=" w-full h-72"
        image={image}
      />

      <CardActions className="my-0 py-0">
        <Typography variant="h5" className=" font-semibold">
          {name}
        </Typography>
      </CardActions>
      <CardActions className=" my-0 py-0">
        <Link href={`/park/${id}`}>
          <Button size="small" variant="outlined">
            Explore Now
          </Button>
        </Link>
        <Rating
          name="half-rating-read"
          className="absolute right-2"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />
      </CardActions>
    </Card>
  );
}
export default ImgMediaCard;