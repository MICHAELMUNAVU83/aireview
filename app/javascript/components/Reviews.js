import React, { useEffect } from "react";

function Reviews() {
  useEffect(() => {
    fetch("/api/v1/reviews")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return <div>Reviews</div>;
}

export default Reviews;
