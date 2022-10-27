import React, { useEffect, useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/api/v1/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  const displayReviews = reviews.map((review) => (
    <div key={review.id}>
      <p>{review.title}</p>
      <p>{review.description}</p>
      <p>{review.score}</p>
    </div>
  ));

  return (
    <div>
      Reviews
      {displayReviews}
    </div>
  );
}

export default Reviews;
