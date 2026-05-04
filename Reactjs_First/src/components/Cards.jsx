import React from "react";

function Cards() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#c2c0c0",
        height: "65vh",
        marginTop:"10px"
      }}
    >
      {/* CARD BOX 1 */}
      <div
        style={{
          width: "280px",
          borderRadius: "12px",
          overflow: "hidden",
          backgroundColor: "#fff",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60"
          alt="tiger"
          style={{ width: "100%", height: "180px", objectFit: "cover" }}
        />
        <div style={{ padding: "15px" }}>
          <p style={{ color: "gray", fontSize: "12px" , textTransform:"Uppercase" }}>Tiger</p>
          <h3 style={{fontWeight:"1000px"}}>Tiger is also knows Panthera </h3>
          <p style={{ fontSize: "14px", color: "#555" }}>
            The tiger is the largest wild  cat in the world.
          </p>
          <span style={{ color: "red", fontSize: "12px" }}>
            by IBCA World
          </span>
        </div>
      </div>

      {/* CARD BOX 2 */}
      <div
        style={{
          width: "280px",
          borderRadius: "12px",
          overflow: "hidden",
          backgroundColor: "#fff",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="sunset"
          style={{ width: "100%", height: "180px", objectFit: "cover" }}
        />
        <div style={{ padding: "15px" }}>
          <p style={{ color: "gray", fontSize: "12px" , textTransform:"uppercase"}}>Sunset</p>
          <h3>Lorem ipsum dolor</h3>
          <p style={{ fontSize: "14px", color: "#555" }}>
            The  Sun rise from East...
          </p>
          <span style={{ color: "red", fontSize: "12px" }}>
            by Learning Own...
          </span>
        </div>
      </div>

      {/* CARD BOX 3 */}
      <div
        style={{
          width: "280px",
          borderRadius: "12px",
          overflow: "hidden",
          backgroundColor: "#fff",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt="thunder"
          style={{ width: "100%", height: "180px", objectFit: "cover" }}
        />
        <div style={{ padding: "15px" }}>
          <p style={{ color: "gray", fontSize: "12px" , textTransform:"uppercase" }}>Thunder</p>
          <h3>Lorem ipsum dolor</h3>
          <p style={{ fontSize: "14px", color: "#555" }}>
            Sed malesuada vulputate nisi in fermentum...
          </p>
          <span style={{ color: "red", fontSize: "12px" }}>
            by Learning Robo
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cards;