import { useState } from "react";
import AppContext from "../../AppProvider/AppProvider";
import LeftSide from "../components/LeftSide/LeftSide";
import RightSide from "../components/RightSide/RightSide";

export default function DefaultLayout({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AppContext.Provider value={{ isLogin, setIsLogin }}>
      <div className="h-screen bg-black text-white relative no-scrollbar ">
        <LeftSide />
        <div
          id="container"
          className="flex justify-between flex-1 h-screen relative"
        >
          <div className="main-content w-full min-w-[348px] h-screen py-3 flex justify-center mx-[5rem]">
            {children}
          </div>
        </div>
        <RightSide />
      </div>
    </AppContext.Provider>
  );
}
