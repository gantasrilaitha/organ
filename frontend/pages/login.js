import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function login() {
  const router = useRouter();
  const [validateInfo, setValidateInfo] = useState({});
  const login = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API}` + "login",
      validateInfo
    );
    localStorage.setItem("userInfo", JSON.stringify(response.data));
    router.push("/home");
  };
  const change = (props) => (e) => {
    var d = {};
    d[props] = e.target.value;
    setValidateInfo({ ...validateInfo, ...d });
  };
  return (
    <div className="grid grid-cols-2 w-screen h-full">
      <div className="h-full ">
        <h1 className="text-darkpurple mx-10 my-10 text-4xl font-head">
          LifeClicks
        </h1>
        <div className=" flex flex-col items-center">
          <h1 className="font-head  mt-20 mb-14 text-4xl font-extrabold">
            Login to your account
          </h1>
          <div className="w-full px-36 pb-7 mt-8">
            <input
              className="w-full px-4 py-4 text-base border placeholder:font-small placeholder:text-lg border-gray-300 rounded outline-none focus:ring-purple-500 focus:border-purple-500 focus:ring-1"
              placeholder="Email"
              onChange={change("email")}
            ></input>
            <input
              type="password"
              className="w-full px-4 my-8 py-4 text-base border placeholder:font-small placeholder:text-lg border-gray-300 rounded outline-none focus:ring-purple-500 focus:border-purple-500 focus:ring-1"
              placeholder="Password"
              onChange={change("password")}
            ></input>
            <div className="flex justify-center">
              <button
                class="x-6 m-12 drop-shadow-xl font-small rounded-md bg-gradient-to-r from-purple-400 to-purple-500 py-3 px-8 text-white"
                type="submit"
                onClick={() => {
                  login();
                }}
              >
                <span className="text-xl">Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-screen w-full flex justify-center items-center bg-gradient-to-b from-purple-200 to-purple-600"
        style={{
          borderRadius: "0px 0px 0px 100px",
        }}
      >
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/medicine-prescription-4036034-3342343.png"></img>
      </div>
    </div>
  );
}
