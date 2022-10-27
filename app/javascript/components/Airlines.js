import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function Airlines() {
  useEffect(() => {
    fetch("/api/v1/airlines")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  console.log("Airlines");

  return (
    <div>
      Airlines
      <Link to="/airlines/1">airline</Link>
    </div>
  );
}

export default Airlines;
