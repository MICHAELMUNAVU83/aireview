import React, { useEffect } from "react";

function Airlines() {
  useEffect(() => {
    fetch("https://mytecheventsapi.herokuapp.com/events")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  console.log("Airlines");

  return <div>Airlines</div>;
}

export default Airlines;
