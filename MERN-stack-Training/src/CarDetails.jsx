import React from "react";

const CarDetails = () => {
  return (
    <div
      style={{
        width: "300px",
        margin: "20px auto",
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "black",
        padding: "10px",
        fontFamily: "Arial, sans-serif",
        color:"white",
      }}
    >
      {/* Car Image */}
      <img
        src="https://cdn.jdpower.com/JDPA_2021%20Toyota%20Corolla%20XSE%20Red%20Front%20Quarter%20View.jpg"
        alt="Car"
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />

      {/* Title */}
      <h3 style={{ margin: "10px 0 5px 0", fontSize: "1.2rem" }}>
        Toyota Corolla Altis
      </h3>

      {/* Price */}
      <p style={{ fontWeight: "bold", color: "#d32f2f", margin: "5px 0" }}>
        $75,000
      </p>

      {/* Basic Details */}
      <p style={{ margin: "5px 0", fontSize: "0.9rem", color: "yellow" }}>
        Year: 2021<br/>
        Mileage: 28,500 km<br/>
        Fuel: Petrol<br/>
        Transmission: Automatic
      </p>

      {/* Description */}
      <p style={{ fontSize: "0.9rem", color: "blue" }}>
        Well maintained single owner car with full service history. Smooth drive and excellent condition.
      </p>
    </div>
  );
};

export default CarDetails;
