import AboutUs from "./Components/AboutUs";
import DividerComponent from "./Components/DividerComponent";
import ExploreBioDiversityAndNursery from "./Components/ExploreBioDiversityAndNursery";
import HeaderWithSearch from "./Components/HeaderWithSearch";
import NearParkComponent from "./Components/NearParkComponent";
import ParkCardComponent from "./Components/ParkCardComponent";
import ParkCardDivider from "./Components/ParkCardDivider";

export default function Home() {
  
  return (
    <>
      <HeaderWithSearch/>
      <ParkCardDivider subheading="CHECKOUT" heading="PARKS NEAR YOU" />
      <NearParkComponent />
      <ParkCardDivider subheading="TRENDY" heading=" Our Trending Tour Parks" />
      <ParkCardComponent />
      <DividerComponent />
      <ExploreBioDiversityAndNursery />
      <DividerComponent />
      <AboutUs />
      <DividerComponent />
      
    </>
  );
}
