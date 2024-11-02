/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { User_Level } from "../data/data";
import { calculateUserProgress, walletTextFormater } from "../utils/caluclate";
// import { binanceLogo } from "../images";
import Settings from "../icons/Settings";
import { NavLink, Outlet } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { GiTwoCoins } from "react-icons/gi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";

function LayoutComponent() {
  const [levelIndex, _setLevelIndex] = useState(2); // this holds the user current level index

  const [points] = useState(50000); //the number of point the user has gotten

  return (
    <div className="w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl mx-auto">
      <div className="px-4 z-10">
        <div className="flex flex-row items-center space-x-2 pt-4">
          <div className="p-1 rounded-lg bg-[#1d2025]">
            <FaUserTie size={24} className="text-[#d4d4d4]" />
          </div>
          <div>
            <p className="text-sm">Mxd playerName</p>
          </div>
        </div>

        {/* Level Information */}
        <div className="flex items-center justify-between space-x-4 mt-2">
          <div className="flex items-center w-1/3">
            <div className="w-full">
              <div className="flex justify-between w-fit gap-2">
                <p className="text-sm">{User_Level[levelIndex]}</p>
                <p className="text-sm">
                  {levelIndex + 1}{" "}
                  <span className="text-[#95908a]"> / {User_Level.length}</span>
                </p>
              </div>
              <div className="flex items-center mt-1 border-2 border-[#43433b] rounded-full">
                <div className="w-full h-2 bg-[#43433b]/60 rounded-full">
                  <div
                    className="progress-gradiant h-2 rounded-full"
                    style={{
                      width: `${calculateUserProgress(levelIndex, points)}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center w-2/3 rounded-full px-4 py-[2px] max-w-64px">
            {/* <img src={binanceLogo} alt="binance logo" className="w-8 h-8" /> */}
            <div className="flex-1 text-center">
              <p className="text-xs text-[#85827d]"> Wallet Connected</p>
              <span className="text-xs">
                {walletTextFormater("nsbhvfjknlanfah")}
              </span>
            </div>
            <Settings className="text-white cursor-pointer" />
          </div>
        </div>
      </div>
      <Outlet />
      <div className="fixed bottom-1 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-center text-white w-1/5  m-1 p-2 rounded-2xl items-center justify-center flex flex-col bg-[#1c1f24]"
              : "text-center text-[#85827d] w-1/5  m-1 p-2 rounded-2xl items-center justify-center flex flex-col"
          }
        >
          <IoHomeOutline size={25} />
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/earn"
          className={({ isActive }) =>
            isActive
              ? "text-center text-white w-1/5  m-1 p-2 rounded-2xl items-center justify-center flex flex-col bg-[#1c1f24]"
              : "text-center text-[#85827d] w-1/5  m-1 p-2 rounded-2xl items-center justify-center flex flex-col"
          }
        >
          <GiTwoCoins size={25} />
          <p>Earn</p>
        </NavLink>
        <NavLink
          to="/friends"
          className={({ isActive }) =>
            isActive
              ? "text-center text-white w-1/5  m-1 p-2 rounded-2xl items-center justify-center flex flex-col bg-[#1c1f24]"
              : "text-center text-[#85827d] w-1/5  m-1 p-2 rounded-2xl items-center justify-center flex flex-col"
          }
        >
          <LiaUserFriendsSolid size={25} />
          <p>Friends</p>
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "text-center text-white w-1/5 m-1 p-2 rounded-2xl items-center justify-center flex flex-col bg-[#1c1f24] transition-all duration-300 ease-in-out"
              : "text-center text-[#85827d] w-1/5 m-1 p-2 rounded-2xl items-center justify-center flex flex-col transition-all duration-300 ease-in-out"
          }
        >
          <FaRegUser size={25} />
          <p>Profile</p>
        </NavLink>
      </div>
    </div>
  );
}

export default LayoutComponent;
