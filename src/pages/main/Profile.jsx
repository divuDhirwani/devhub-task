import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BASEURL } from "src/apiServices/config";
import image from "src/assets/images/userImage.png";
import CustomButton from "src/components/customButton/CustomButton";
import CustomInfoContainer from "src/components/customInfoContainer/CustomInfoContainer";
import CustomInput from "src/components/customInput/CustomInput";
function Profile() {
  const token = useSelector((state) => state?.authReducer?.accessToken);
  const [profileData, setProfileData] = useState();
  console.log(profileData);

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
        backgroundColor: "aliceblue",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          width: "700px",
          height: "800px",
          backgroundColor: "aliceblue",
          marginTop: "80px",
          padding: "20px",
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
              marginBottom: "60px",
              marginLeft: "30px",
              marginTop: "30px",
            }}
            src={image}
            alt=""
          />{" "}
          <div style={{ flexWrap: "wrap" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "60px",
              }}
            >
              <CustomInfoContainer name="Fisrt Name" />

              <CustomInfoContainer name="Last Name" />
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <CustomInfoContainer name="Email" />
              <CustomInfoContainer name="Mobile Number" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                margin: "60px 40px",
              }}
            >
              <CustomInfoContainer name="Age" />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <CustomButton name="Edit Profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
