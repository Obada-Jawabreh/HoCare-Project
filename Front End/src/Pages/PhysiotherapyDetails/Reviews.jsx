import React, { useState } from "react";
import dr from "./../../assets/images/dr.png";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Al-Badawi",
      comment:
        "Dr. Hoda is amazing! She helped me recover from my injury quickly.",
      rating: 5,
    },
    {
      name: "Mohammad Jaber",
      comment: "Great experience. Highly recommend her services.",
      rating: 4,
    },
    {
      name: "Leila Amin",
      comment: "Professional and caring. I felt very comfortable.",
      rating: 5,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 md:flex-row">
    <h2 className="w-full text-2xl font-bold mb-6 md:text-left">Reviews</h2>
    <div className="flex flex-wrap gap-6 justify-center">
      {[1, 2, 3, 4].map((index) => (
        <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-4">
            <img src={dr} alt="User" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h3 className="text-xl font-semibold">Ahmad</h3>
              <p className="text-sm text-gray-500">May 8, 2024</p>
              <p className="mt-2 text-gray-700 line-clamp-3">
                Nice, this is a long review to demonstrate how to handle overflow and text clamping in a review section. This text should be truncated if it exceeds the defined number of lines.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Reviews;
