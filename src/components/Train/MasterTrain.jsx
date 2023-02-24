import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import TrainSearch from "./TrainSearch";
import TSreachResult from "./TSreachResult";

const MasterTrain = ({ modal2Open, setModal2Open }) => {
  const [from, setfrom] = useState("");
  const [to, setTo] = useState("");
  const [depart, setDepart] = useState("");

  const [trains, setTrains] = useState([]);
  const [filteredTrains, setFilteredTrains] = useState([]);

  const getData = async () => {
    await fetch(
      "https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains"
    )
      .then((response) => response.json())
      .then((data) => {
        setFilteredTrains(data);
        setTrains(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <TrainSearch
        from={from}
        setfrom={setfrom}
        to={to}
        setTo={setTo}
        depart={depart}
        setDepart={setDepart}
        TrainProps={trains}
        setFilteredTrains={setFilteredTrains}
      />

      <TSreachResult
        from={from}
        to={to}
        depart={depart}
        trains={trains}
        setTrains={setTrains}
        filteredTrains={filteredTrains}
        setFilteredTrains={setFilteredTrains}
      />
    </div>
  );
};

export default MasterTrain;
