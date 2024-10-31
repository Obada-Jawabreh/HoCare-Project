import React from 'react';
import { Star } from 'lucide-react';

const RatingsAndReviews = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Ratings and Reviews</h2>
      <div className="flex items-center space-x-3">
        <Star size={24} className="text-yellow-400" fill="currentColor" />
        <span className="text-2xl font-bold">4.8</span>
        <span className="text-gray-600">(127 reviews)</span>
      </div>
    </div>
  );
};

export default RatingsAndReviews;