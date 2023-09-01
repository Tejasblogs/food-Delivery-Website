import { data } from "./data";
import RestaurantCard from './RestaurantCard';

const Body_section = () => {
  return (
    <div className="Body_section">
        <div className="search">Search</div>
      
      <div className="res-container">
      {
          data.map(element=><RestaurantCard {...element} />)
        }

      </div>
      
    </div>
  );
};

export default Body_section
