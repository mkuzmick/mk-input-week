import GetLocation from "@/components/GetLocation";
import MapComponent from "@/components/MapComponent";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <GetLocation />
      <MapComponent />
    </div>
  );
};

export default HomePage;
