import { levelMinPoint, User_Level } from "../data/data";

export const calculateUserProgress = (
  levelIndex: number,
  points: number
): number => {
  // Ensure levelIndex is within the bounds of levelMinPoint and User_Level arrays
  if (levelIndex >= User_Level.length - 1 || levelIndex < 0) {
    return 100;
  }

  const currentUserMinLevel = levelMinPoint[levelIndex];
  const nextLevelMin = levelMinPoint[levelIndex + 1];

  // Safety check to avoid dividing by zero or undefined values
  if (
    typeof currentUserMinLevel === "undefined" ||
    typeof nextLevelMin === "undefined" ||
    nextLevelMin === currentUserMinLevel
  ) {
    return 0;
  }

  const userProgress =
    ((points - currentUserMinLevel) / (nextLevelMin - currentUserMinLevel)) *
    100;

  // Ensure the progress is a valid number and is clamped between 0 and 100
  return Math.min(Math.max(userProgress, 0), 100);
};

// styling the input of your wallet address
export function walletTextFormater(text: string) {
  if (text.length <= 8) {
    // If the string is already shorter than 8 characters, return it as is
    return text;
  }
  const firstFour = text.slice(0, 4);
  const lastFour = text.slice(-4);

  return `${firstFour}...${lastFour}`;
}

// calculating time left for the next event
export const calulatedTimeLeft = (targetHour: number) => {
  const currentTime = new Date();
  const target = new Date(currentTime);
  target.setUTCHours(targetHour, 0, 0, 0);

  if (currentTime.getUTCHours() >= targetHour) {
    target.setUTCDate(target.getUTCDate() + 1);
  }

  const diff = target.getTime() - currentTime.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  const paddedHours = hours.toString().padStart(2, "0");
  const paddedMinutes = minutes.toString().padStart(2, "0");

  return `${paddedHours}:${paddedMinutes}`;
};

// Handle Card click
