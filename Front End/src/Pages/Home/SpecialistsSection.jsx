import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Components/Card";

function SpecialistsSection() {
  return (
    <Link to="/Details">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-24">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Link>
  );
}

export default SpecialistsSection;