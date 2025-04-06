import React from "react";
import "./Reviews.css";
import { Star, StarOutline } from "@mui/icons-material";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ratingsSummary = [70, 10, 8, 5, 7]; // Percentage distribution of ratings

const getStars = (rating) => {
  return [...Array(5)].map((_, index) => {
    if (index < rating) return <Star key={index} className="text-yellow-500" />;
    return <StarOutline key={index} className="text-gray-400" />;
  });
};

const Reviews = ({ reviews }) => {
  return (
    <div className="reviews-section p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold">Ratings and Reviews</h2>
      <div className="flex items-center mt-2">
        <span className="text-3xl font-bold">3.9</span>
        <div className="ml-2 flex">{getStars(4)}</div>
      </div>
      <p className="text-gray-500">22K reviews</p>
      <div className="mt-4">
        {ratingsSummary.map((value, index) => (
          <div key={index} className="flex items-center mt-1">
            <span className="w-4 text-gray-600">{5 - index}</span>
            <Progress value={value} className="ml-2 w-full" />
          </div>
        ))}
      </div>
      <div className="mt-6">
        {reviews.length > 0 ? (
          <div className="reviews-list">
            {reviews.map((review) => (
              <Card key={review.id} className="review-item mb-4">
                <CardContent>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-300 rounded-full"></div>
                    <div className="ml-2">
                      <p className="font-bold">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex mt-2">{getStars(review.rating)}</div>
                  <p className="mt-2 text-sm text-gray-700">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p>No reviews yet. Be the first to leave a review!</p>
        )}
      </div>
    </div>
  );
};

export default Reviews;
