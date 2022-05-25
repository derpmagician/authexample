import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  // if(user.email_verified) return <p>SI</p>
  // else return <p>NO</p>

  return (
    isAuthenticated && (
      <div>
        {/* {JSON.stringify(user)} */}
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <div>El Usuario esta verificado? {user.email_verified ? <b>SI</b>: <b>NO</b>}</div>
      </div>
    )
  );
};

export default Profile;