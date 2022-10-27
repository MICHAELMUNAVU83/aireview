import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Airline() {
  const [airline, setAirline] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`/api/v1/airlines/${params.slug}`)
      .then((response) => response.json())
      .then((data) => setAirline(data));
  }, []);
  console.log(airline);
  const displayAirline = (
    <div>
      <h1>{airline.name}</h1>
      <img src={airline.image_url} alt={airline.name} />
      <div>{airline.avg_score}</div>
    </div>
  );
  return (
    <div>
      Airline
      {displayAirline}
    </div>
  );
}

export default Airline;
