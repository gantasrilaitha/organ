import { Avatar } from "@mui/material";
import { useRouter } from "next/router";
import { MdSearch } from "react-icons/md";
export default function Home() {
  const router = useRouter();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <div>
      <div className="bg-purple-100" style={{ height: "90vh" }}>
        <div className="flex flex-row justify-between items-center pt-4 px-12">
          <h1 className="font-head text-7xl">LifeClicks</h1>
          <div className="flex flex-row items-center">
            <Avatar
              sx={{ width: 90, height: 90 }}
              src={userInfo.profileURL}
            ></Avatar>
            <button
              class="x-6 m-12 drop-shadow-xl font-small rounded-md bg-gradient-to-r from-purple-400 to-purple-500 py-3 px-8 text-white"
              type="submit"
              onClick={() => {
                localStorage.setItem("userInfo", "");
                router.push("/");
              }}
            >
              <div className="flex flex-row items-center">
                <span className="text-xl">Logout</span>
              </div>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 ">
          <h3
            className="pt-4 px-20 font-head text-9xl text-indigo-900 font-bold align-middle"
            style={{ paddingTop: "13vh" }}
          >
            Welcome back, {userInfo.Name}!
          </h3>
          <div className="flex justify-center">
            {" "}
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/medicine-3494848-2928740.png"></img>
          </div>
        </div>
      </div>
      <div className="w-screen px-20 flex flex-row relative bottom-20">
        <div className="w-1/6 flex justify-center items-center">
          <div className="py-4 drop-shadow-xl font-small rounded-md bg-gradient-to-r from-purple-400 to-purple-500 px-8">
            <span className="text-white text-justify align-middle">
              Generate QR Code
            </span>
          </div>
        </div>
        <div className="p-8 w-full">
          <input
            className="w-full px-4 py-8 border placeholder:font-small placeholder:text-2xl text-2xl border-gray-300 rounded outline-none focus:ring-purple-500 focus:border-purple-500 focus:ring-1"
            placeholder="Search"
          ></input>
        </div>
        <div className="w-1/6 flex justify-center items-center">
          <div className="p-8 drop-shadow-xl font-small rounded-full bg-gradient-to-r from-purple-400 to-purple-500  flex items-center justify-center">
            <MdSearch size={32} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}
