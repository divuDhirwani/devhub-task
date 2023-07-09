// import { profileApi } from "apiServices/profileService";
import { useEffect } from "react";
import { profileApi } from "src/apiServices/profileService";
import image from "src/assets/images/userImage.png";
import CustomButton from "src/components/customButton/CustomButton";
import CustomInfoContainer from "src/components/customInfoContainer/CustomInfoContainer";
function Profile() {
  // const token = useSelector((state) => state?.authReducer?.accessToken);
  const getProfileData = async () => {
    try {
      let res = await profileApi();
      console.log(res);
    } catch (error) {}
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
            }}
            src={image}
            alt=""
          />
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
          {/* <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <CustomInfoContainer name="Age" />
          </div> */}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <CustomButton name="Update Profile" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
