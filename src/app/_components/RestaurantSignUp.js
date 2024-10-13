
import { useRouter } from "next/navigation";
import { useState } from "react";

const RestaurantSignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      // Ensure that the required fields are available
      if (!email || !password || !address || !name || !city || !number) {
        alert("Please fill all input");
        throw new Error("All fields are required");
      }
      else if( password !== cPassword){
        alert("Password is not matched");
        return;
      }
      let response = await fetch("http://localhost:3000/api/restaurant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify JSON format
        },
        body: JSON.stringify({
          email,
          password,
          address,
          name,
          city,
          number,
        }),
      });
  
      // Log the response status
      console.log("Response status:", response.status);
  
      // Check if the response is ok (status code in the range 200-299)
      if (!response.ok) {
        const errorText = await response.text(); // Get error text for debugging
        throw new Error(`Error: ${response.status}, ${errorText}`);
      }
  
      // Parse the response as JSON
      response = await response.json();
      console.log(response);
      const { result } = response;
  
      delete result.password;
  
      localStorage.setItem("restaurantUser", JSON.stringify(result));
      console.log("Redirecting to dashboard...");
      router.push("/restaurant/dashboard");
      alert("Restaurant Registration done");
    } catch (error) {
      console.error("Error during sign-up:", error);
      alert("Restaurant Registration Not done, something went wrong: " + error.message);
    }
  };
  

  return (
    <>
      <div className=" max-w-[600px] w-full mx-auto bg-white border p-10 mt-4 rounded-md">
        <h3 className="text-3xl text-slate-900 text-center">
          Restaurant Sign Up
        </h3>
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
              type="text"
              placeholder="Enter Your Name "
              value={name}
              onChange={(e) => setName(e.target.value)}
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
          <div>
            <input
              className="w-full p-3 bg-slate-200 rounded-sm"
              type="password"
              placeholder="Confirm Your Password "
              value={cPassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              className="w-full p-3 bg-slate-200 rounded-sm"
              type="text"
              placeholder="Enter Your Address "
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <input
              className="w-full p-3 bg-slate-200 rounded-sm"
              type="text"
              placeholder="Enter Your City "
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <input
              className="w-full p-3 bg-slate-200 rounded-sm"
              type="number"
              placeholder="Enter Your Contact No. "
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center rounded-sm">
            <button
              onClick={() => {
                handleSignUp();
              }}
              className="bg-indigo-600 text-white px-4 py-2 rounded-sm"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantSignUp;
