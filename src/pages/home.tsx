import { useEffect, useState } from "react";
import { calulatedTimeLeft } from "../utils/caluclate"; // Ensure this handles countdown in minutes/hours
import { FcSerialTasks } from "react-icons/fc";
import { pointToAdd, user_point } from "../data/data";
import mxdlogo from "../images/MXD.png";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function HomePage() {
  const dailyCheckin = useSelector((state: RootState) => state.dailyCheckin);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dailyLoginTimeLeft, setDailyLoginTimeLeft] = useState("");
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>(
    []
  );
  const [currentClicks, setCurrentClicks] = useState(0);
  const [point, setPoint] = useState(user_point);
  const [dailyTaskTime, setDailyTaskTimeLeft] = useState("");
  const [cooldownActive, setCooldownActive] = useState(false);
  const [timeUntilNextClaim, setTimeUntilNextClaim] = useState("");
  const [isDailyTaskButtonActive, setIsDailyTaskButtonActive] = useState(false);

  const navigate = useNavigate();
  const cooldownDuration = 2 * 60 * 60 * 1000; // 2 hours in milliseconds

  const onNavigateToEarnPageFn = () => {
    navigate("/earn");
  };

  const onNavigateDailyRewardScreenFn = () => {
    navigate("/DailyRewardScreen");
  };

  useEffect(() => {
    const updateCountdownFN = () => {
      const dailyTaskCountdown = calulatedTimeLeft(19);
      setDailyLoginTimeLeft(calulatedTimeLeft(0));
      setDailyTaskTimeLeft(dailyTaskCountdown);

      // Pause countdown at "00:00" until dailyCheckin becomes true
      if (dailyTaskCountdown === "00:00" && !dailyCheckin) {
        setIsDailyTaskButtonActive(false);
        return;
      }

      // When dailyCheckin is true, reset and enable the daily task button
      if (dailyCheckin) {
        setIsDailyTaskButtonActive(true);
        setDailyTaskTimeLeft("Ready");
      }
    };

    updateCountdownFN();
    const intervalCall = setInterval(updateCountdownFN, 60000);
    return () => clearInterval(intervalCall);
  }, [dailyCheckin]);

  const formatTimeLeft = (milliseconds: number) => {
    const totalMinutes = Math.floor(milliseconds / 1000 / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const hoursDisplay = hours > 0 ? ` ${hours} h ${hours > 1 ? "s" : ""}` : "";
    const minutesDisplay =
      minutes > 0 ? ` ${minutes} min ${minutes > 1 ? "s" : ""}` : "";
    return [hoursDisplay, minutesDisplay].filter(Boolean).join(" ");
  };

  useEffect(() => {
    const lastClaimTime = localStorage.getItem("lastClaimTime");
    if (lastClaimTime) {
      const timeSinceLastClaim = Date.now() - parseInt(lastClaimTime, 10);
      if (timeSinceLastClaim < cooldownDuration) {
        const timeLeft = cooldownDuration - timeSinceLastClaim;
        setCooldownActive(true);
        setTimeUntilNextClaim(formatTimeLeft(timeLeft));
        const cooldownInterval = setInterval(() => {
          const updatedTimeLeft =
            cooldownDuration - (Date.now() - parseInt(lastClaimTime, 10));
          if (updatedTimeLeft <= 0) {
            setCooldownActive(false);
            clearInterval(cooldownInterval);
            localStorage.removeItem("lastClaimTime");
          } else {
            setTimeUntilNextClaim(
              calulatedTimeLeft(updatedTimeLeft / 1000 / 60)
            );
          }
        }, 60000);

        return () => clearInterval(cooldownInterval);
      }
    }
  }, [cooldownDuration]);

  const onHandleCoinClickFN = (e: React.MouseEvent<HTMLDivElement>) => {
    if (currentClicks >= 2000 || cooldownActive) {
      return;
    }

    const card = e.currentTarget as HTMLDivElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `perspective(1000px) rotateX(${
      -y / 10
    }deg) rotateY(${x / 10}deg)`;

    setTimeout(() => {
      card.style.transform = "";
    }, 100);

    setCurrentClicks(currentClicks + pointToAdd);
    setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
  };

  const handleAnimationEndClick = (id: number) => {
    setClicks(previous => previous.filter(click => click.id !== id));
  };

  const ClaimClickedCoinFunction = () => {
    if (!cooldownActive) {
      setCurrentClicks(0);
      setPoint(point + currentClicks);
      localStorage.setItem("lastClaimTime", Date.now().toString());
      setCooldownActive(true);
      setTimeUntilNextClaim(calulatedTimeLeft(120)); // 120 minutes (2 hours)
    }
  };

  return (
    <div className="top-glow relative flex-grow mt-3 bg-yellow-500 rounded-t-[48px] z-0">
      <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#1d2025] rounded-t-[46px]">
        <div className="px-4 mt-6 flex justify-between gap-2">
          <div
            className={`bg-[#272a2f] rounded-lg px-4 py-2 w-full flex-1 flex flex-col gap-1 items-center justify-center relative ${
              isDailyTaskButtonActive ? "cursor-pointer" : "cursor-not-allowed"
            }`}
            onClick={
              isDailyTaskButtonActive || dailyCheckin
                ? onNavigateDailyRewardScreenFn
                : undefined
            }
          >
            <div className="flex flex-col items-center justify-center">
              <div className="dot" />
              <SlCalender size={30} className="mt-1" />
              <p className="text-[10px] text-center text-white mt-1">
                Daily Reward
              </p>
              <p className="text-[10px] font-medium text-center text-gray-400 mt-2">
                {dailyLoginTimeLeft}
              </p>
            </div>
          </div>
          <div
            className="bg-[#272a2f] rounded-lg px-4 py-2 w-full flex-1 flex flex-col items-center relative justify-center"
            onClick={onNavigateToEarnPageFn}
          >
            <div className="dot"></div>
            <div className="flex flex-col items-center">
              <FcSerialTasks size={30} />
            </div>
            <p className="text-[10px] text-center text-white mt-1">
              Daily Task
            </p>
            <p className="text-[10px] font-medium text-center text-gray-400 mt-2">
              {dailyTaskTime}
            </p>
          </div>
        </div>
        <div className="px-4 mt-2 flex justify-center">
          <div className="px-4 py-2 flex items-center space-x-2">
            <img src={mxdlogo} alt="MXD logo" className="w-13 h-10" />
            <p className="text-4xl text-white">{point.toLocaleString()}</p>
          </div>
        </div>
        <div className="px-4 mt-2 flex justify-center">
          <div
            className="w-56 h-56 p-4 rounded-full outsideCircle"
            onClick={onHandleCoinClickFN}
          >
            <div className="w-full h-full rounded-full innerCircle">
              <img src={mxdlogo} alt="clickCoin" className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="px-4 mt-6 flex justify-between gap-2">
          <div className="bg-[#272a2f] flex flex-row rounded-lg px-4 py-2 w-full relative items-center justify-between">
            <p className="text-sm">
              {currentClicks}
              <span className="text-[#95908a]"> / 2000</span>
            </p>
            <div
              className={`p-3 rounded-lg ${
                currentClicks > 0 && !cooldownActive
                  ? "bg-yellow-600"
                  : "bg-yellow-900"
              }`}
              onClick={
                currentClicks > 0 && !cooldownActive
                  ? ClaimClickedCoinFunction
                  : undefined
              }
            >
              {cooldownActive
                ? `Next Claim: ${timeUntilNextClaim}`
                : "Claim MXD"}
            </div>
          </div>
        </div>
      </div>
      {clicks.map(click => (
        <div
          key={click.id}
          className="clickAnimation absolute bg-yellow-300 rounded-full"
          style={{
            left: click.x,
            top: click.y,
          }}
          onAnimationEnd={() => handleAnimationEndClick(click.id)}
        />
      ))}
    </div>
  );
}

export default HomePage;
