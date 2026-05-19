import { useSelector } from "react-redux";

function Home() {
  const userData = useSelector((state) => state.auth.user);
  console.log(userData,"userData")
  return (
    <div>
      <h1>Welcome to Home</h1>
      <p>Hello, {userData?.name}!</p>
    </div>
  );
}

export default Home;