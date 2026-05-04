import React from "react";

const UserCard = ({ user }) => {
  return (
    <>
      <div className="card_box">
        <div><img src={user.img} alt={user.username} width="100" height="100" /></div>
        <div>
          <h2>{user.username}</h2>
          <h4>Age: {user.userage}</h4>
        </div>
         <a href={user.link} target="_blank" rel="noreferrer">
          <button>Click Me</button>
        </a>
      </div>
    </>
  );
};

export default UserCard;
