// import { profileApi } from "apiServices/profileService";
import React, { useEffect } from "react";
import { profileApi } from "src/apiServices/profileService";

function Profile() {
  const getProfileData = async () => {
    try {
      let res = await profileApi();
      console.log(res);
    } catch (error) {}
  };
  useEffect(() => {
    getProfileData();
  }, []);
  return <div>Profile</div>;
}

export default Profile;
