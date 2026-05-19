import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../config/axiosConfig";
import { login } from "../redux/authSlice";
import { useDispatch } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  console.log(showForm, "showForm");

  const [profileData, setProfileData] = useState({});
  const [updatedProfileData, setUpdatedProfileData] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(updatedProfileData, "updatedProfileData");
  console.log(profileData, "profileData");

  const getProfileData = async () => {
    try {
      const response = await api.post("/user/profile");
      if (response.data.success) {
        setProfileData(response.data.profileData);
        setUpdatedProfileData(response.data.profileData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const handleChange = (event) => {
    setUpdatedProfileData({
      ...updatedProfileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.patch(
        "/user/update-profile",
        updatedProfileData,
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setProfileData(response.data.profileData);
        setUpdatedProfileData(response.data.profileData);
        setShowForm(false);
        dispatch(login(response.data.userData));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      <div>
        <h3>Name : {profileData?.name}</h3>
        <h3>Email : {profileData?.email}</h3>
      </div>
      <button onClick={() => setShowForm(showForm == true ? false : true)}>
        Edit Profile Data
      </button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>Name</label>
            <br />
            <input
              name="name"
              onChange={handleChange}
              value={updatedProfileData.name}
            />
            <br />
            <label>Email</label>
            <br />
            <input
              name="email"
              onChange={handleChange}
              value={updatedProfileData.email}
            />
            <br />
            <label>Password</label>
            <br />
            <input name="password" onChange={handleChange} />
            <br />
            <input type="submit" value="Update Profile" />
          </fieldset>
        </form>
      )}
    </div>
  );
};

export default Profile;
