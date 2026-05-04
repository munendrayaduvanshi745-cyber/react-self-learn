import React from "react";

const ShowsCard = ({ user }) => {
  return (
    <>
      
      <div className="card_box">
        <div><img src={user.image} alt={user.title} width="100" height="100" /></div>
        <div>
          <h2>{user.title}</h2>
          <h4> {user.category}</h4>
        </div>
         <a href={user.link} target="_blank" rel="noreferrer">
          <button>Watch Now</button>
        </a>
      </div>
    </>
  );
};

export default ShowsCard;
