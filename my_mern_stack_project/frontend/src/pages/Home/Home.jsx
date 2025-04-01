import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import Stalls from "../../pages/Stalls/Stalls";  // Import the Stalls component

const Home = () => {
  const [category, setCategory] = useState("All");
  const [selectedStall, setSelectedStall] = useState("All");  // Manage selected stall state

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />

      <div className="home-stalls">
  
        <Stalls selectedStall={selectedStall} setSelectedStall={setSelectedStall} />
      </div>
    </div>
  );
};

export default Home;
