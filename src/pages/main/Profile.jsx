import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASEURL } from "src/apiServices/config";
import image from "src/assets/images/userImage.png";
import CustomButton from "src/components/customButton/CustomButton";
import CustomInfoContainer from "src/components/customInfoContainer/CustomInfoContainer";
import routeNames from "src/constants/routeNames";

function Profile() {
  const token = useSelector((state) => state?.authReducer?.accessToken);
  const profileDetails = useSelector(
    (state) => state?.authReducer?.userDetails
  );
  const [profileData, setProfileData] = useState(profileDetails);
  const { UPDATE_PROFILE } = routeNames;
  const navigate = useNavigate();

  const getProfileData = async () => {
    try {
      let res = await fetch(`${BASEURL}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      let temp = await res.json();
      setProfileData(temp?.data);
    } catch (error) {
      console.log("error from profile", error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "aliceblue",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          width: "600px",
          backgroundColor: "aliceblue",
          padding: "20px 60px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <div style={{ fontSize: "30px", fontWeight: "bold" }}>User Profile</div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "50%",
              border: "1px solid black",
              marginBottom: "40px",
              // marginLeft: "30px",
              marginTop: "30px",
            }}
            src={profileData?.profile ? profileData?.profile : image}
            alt=""
          />{" "}
          <div style={{ flexWrap: "wrap" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "30px",
              }}
            >
              <CustomInfoContainer
                value={profileData.first_name}
                key={profileData?.first_name}
                // setProfileData={profileDetails?.first_name}
                name="First Name"
              />

              <CustomInfoContainer
                value={profileData.last_name}
                name="Last Name"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <CustomInfoContainer value={profileData?.email} name="Email" />
              <CustomInfoContainer
                value={profileData?.mobile}
                name="Mobile Number"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                margin: "30px 0",
              }}
            >
              <CustomInfoContainer
                key={profileData.age}
                value={profileData.age}
                name="Age"
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              // marginTop: "40px",
            }}
          >
            <CustomButton
              name="Edit Profile"
              onClick={() => navigate(`${UPDATE_PROFILE}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
