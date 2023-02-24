import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import HotelSearch from "./HotelSearch";
import HSearchRes from "./HSearchRes";

const MasterHotel = () => {
  const [from, setfrom] = useState("");

  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);

  const getData = async () => {
    await fetch(
      "https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels"
    )
      .then((response) => response.json())
      .then((data) => {
        setFilteredHotels(data);
        setHotels(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <HotelSearch
        from={from}
        setfrom={setfrom}
        HotelsProps={hotels}
        setFilteredHotels={setFilteredHotels}
      />

      <HSearchRes
        from={from}
        hotels={hotels}
        setHotels={setHotels}
        filteredHotels={filteredHotels}
        setFilteredHotels={setFilteredHotels}
      />
    </div>
  );
};

export default MasterHotel;
