import React from "react";
import "./ActivitiesExplorer.css";
import Categories from "./Categories";
import Subcategories from "./Subcategories";
import Search from "./Search";
import Filters from "./Filters";
import PartnersList from "./PartnersList";
import Map from "./Map";

function ActivitiesExplorer() {
  return (
    <div className="activitiesExplorer">
      <Categories />
      <Subcategories />
      <Search />
      <Filters />
      <PartnersList />
      <Map />
    </div>
  );
}

export default ActivitiesExplorer;
