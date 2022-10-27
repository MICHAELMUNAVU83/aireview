import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Airlines() {
  const [allAirlines, setAllAirlines] = useState([]);
  useEffect(() => {
    fetch("/api/v1/airlines")
      .then((response) => response.json())
      .then((data) => {
        data ? setAllAirlines(data) : setAllAirlines([]);
      });
  }, []);
  console.log(allAirlines);

  const displayAirlines = allAirlines.map((airline) => (
    <div key={airline.id}>
      <p>{airline.name}</p>
      <Link to={`/airlines/${airline.slug}`}>{airline.name}</Link>
    </div>
  ));

  return (
    <div>
      Airlines
      {displayAirlines}
      <Link to="/reviews">reviews</Link>
    </div>
  );
}

export default Airlines;
