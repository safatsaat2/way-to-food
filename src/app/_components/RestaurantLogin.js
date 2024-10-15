import { useState } from "react";

const RestaurantLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("please fill the form");
    } else {
    }
    let response = await fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify JSON format
      },
      body: JSON.stringify({
        email,
        password,
        login: true,
      }),
    });
    response = await response.json();

    const { result } = response;
    if (response.success) {

        delete result.password;
      localStorage.setItem("restaurantUser", JSON.stringify(result));
      console.log("Redirecting to dashboard...");
      router.push("/restaurant/dashboard");
      alert("Thank you for login");
    }
  };
  return (
    <div className=" max-w-[600px] w-full mx-auto bg-white border p-10 mt-4 rounded-md">
      <h3 className="text-3xl text-slate-900 text-center">Login</h3>
      <div className="flex flex-col gap-4 justify-center mt-5">
        <div>
          <input
            className="w-full p-3 bg-slate-200 rounded-sm"
            type="text"
            placeholder="Enter Your Email "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            className="w-full p-3 bg-slate-200 rounded-sm"
            type="password"
            placeholder="Enter Your Password "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center rounded-sm">
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-sm"
            onClick={handleLogin}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantLogin;
