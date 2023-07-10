import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASEURL } from "src/apiServices/config";
import image from "src/assets/images/userImage.png";
import CustomButton from "src/components/customButton/CustomButton";
import CustomInput from "src/components/customInput/CustomInput";
import routeNames from "src/constants/routeNames";
import { updateUserDetails } from "src/redux/reducers/authReducer";
function UpdateProfile() {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state?.authReducer?.userDetails);
  const token = useSelector((state) => state?.authReducer?.accessToken);
  const { PROFILE } = routeNames;
  const navigate = useNavigate();
  const [UpdateProfileData, setUpdateProfileData] = useState({
    first_name: profileData?.first_name,
    last_name: profileData?.last_name,
    age: profileData?.age,
    profile: profileData?.profile,
  });
  const handleChange = (e) => {
    if (e.target.type === "file") {
      if (e.target.files)
        setUpdateProfileData((prev) => ({
          ...prev,
          profile: e.target.files[0],
        }));
    } else if (e.target.type === "text") {
      setUpdateProfileData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };
  console.log(UpdateProfileData, "divya");
  const submitUpdateProfile = async () => {
    try {
      let fd = new FormData();
      fd.append("first_name", updateUserDetails?.first_name);
      fd.append("last_name", updateUserDetails?.last_name);
      fd.append("age", updateUserDetails?.age);
      fd.append("profile", updateUserDetails?.profile);
      let res = await fetch(`${BASEURL}/update_profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: fd,
      });
      let temp = await res.json();
      console.log(temp, "divya");
      if (temp?.status) {
        dispatch(updateUserDetails(temp?.data));
        alert("Updated successful");
        navigate(PROFILE);
      } else {
        alert(temp?.message);
      }
    } catch (error) {
      console.log("error from update profile", error);
    }
  };
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
          width: "700px",
          backgroundColor: "aliceblue",
          padding: "30px 60px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <div style={{ fontSize: "30px", fontWeight: "bold" }}>Edit Profile</div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              position: "relative",
              height: "100px",
              width: "100px",
              borderRadius: "50%",
              border: "1px solid black",
              margin: "30px 0",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                height: "100%",
                width: "100%",
                // marginLeft: "30px",
                objectFit: "cover",
              }}
              src={
                UpdateProfileData?.profile
                  ? URL.createObjectURL(UpdateProfileData?.profile)
                  : image
              }
              alt=""
            />
            <input
              style={{
                height: "100%",
                width: "100%",
                // borderRadius: "20px",
                position: "absolute",
                opacity: 0,
                zIndex: 2,
              }}
              type="file"
              onChange={handleChange}
            />
          </div>
          <div style={{ flexWrap: "wrap" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "30px",
              }}
            >
              <CustomInput
                placeholder="First Name"
                defaultValue={profileData?.first_name}
                name="first_name"
                onChange={handleChange}
              />

              <CustomInput
                placeholder="Last Name"
                name="last_name"
                defaultValue={profileData?.last_name}
                onChange={handleChange}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <CustomInput
                isDisabled={true}
                placeholder="Email"
                defaultValue={profileData?.email}
              />
              <CustomInput
                isDisabled={true}
                placeholder="Mobile Number"
                defaultValue={profileData?.mobile}
              />
            </div>
            <CustomInput
              placeholder="Age"
              defaultValue={profileData?.age}
              name="age"
              onChange={handleChange}
              style={{ margin: "30px 0" }}
            />
            {/* <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                margin: "30px 0px",
                backgroundColor: "blue",
              }}
            ></div> */}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <CustomButton name="Update Profile" onClick={submitUpdateProfile} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
