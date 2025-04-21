import React from 'react';

const ProfileCard = ({ user }) => {
  return (
    <>
      <div className="card" style={{ borderColor: user.color }}>
        <h2>{user.name}</h2>
        <h4>{user.role}</h4>
        <p>{user.bio}</p>
        <button className="btn">Follow</button>
        <button className="btn btn-outline">Message</button>
      </div>
    </>
  );
};

export default ProfileCard;
