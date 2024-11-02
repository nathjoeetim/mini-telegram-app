import { useState } from "react";
import { FaBolt } from "react-icons/fa";
import { user_point } from "../data/data";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDailyCheckin } from "../store/dailyCheckinSlice";

const DailyRewardScreen = () => {
  const route = useNavigate();
  const dispatch = useDispatch();
  const [userPoint, setUserPoint] = useState(user_point);

  const handleClaimReward = () => {
    setUserPoint(prevPoints => prevPoints + userPoint); // Increment points by 1000
    dispatch(setDailyCheckin(true)); // Set daily check-in as true
    route("/"); // Redirect to home page
  };

  return (
    <div className="flex flex-col items-center justify-between bg-black text-white px-4 py-6 relative h-[95vh]">
      {/* Confetti background */}
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
        <ConfettiAnimation />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center z-10 mt-20">
        <FaBolt className="text-yellow-500 text-6xl mb-6" />
        <h1 className="font-bold text-5xl">10</h1>
        <h1 className="text-2xl font-bold mb-4">Your daily rewards</h1>
        <span className="text-sm gap-1">
          <span className="text-yellow-600">1000</span> MXD
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-sm text-gray-300 text-center max-w-xs">
          Come back tomorrow for check-in day <strong>50</strong>
          <br />
          <span className="text-gray-400">
            Tip: Skipping a day resets your check-in.
          </span>
        </p>

        <button
          className="bg-yellow-600 text-white font-semibold rounded-lg py-3 w-[95%] mx-auto max-w-sm relative bottom-1 z-10 mb-14"
          onClick={handleClaimReward}
        >
          Claim Reward
        </button>
      </div>
    </div>
  );
};

const ConfettiAnimation = () => {
  return (
    <div className="confetti absolute inset-0">
      {/* Insert confetti animation here */}
    </div>
  );
};

export default DailyRewardScreen;
