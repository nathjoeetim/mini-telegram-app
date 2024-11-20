import { BiSolidGift } from "react-icons/bi";
import { FaWallet } from "react-icons/fa6";
import Mine from "../icons/Mine";
import { ReactNode } from "react";
import { BottomSheetSide, RewardItemProps } from "@/components/bottom_sheet";

// Data for the earn tasks
const earnTasks: RewardItemProps[] = [
  {
    title: "Follow MXD on Telegram",
    description:
      "Join the MXD Telegram community to stay updated and earn rewards.",
    reward: "950",
    button: "Follow Community",
    link: "",
    button_2: "check",
    showPlayIcon: false,
    icon: <Mine size={24} className="text-[#d4d4d4]" />,
  },
  {
    title: "Share in Telegram Story",
    description:
      "Share MXD in your Telegram story to earn extra rewards and spread the word.",
    reward: "500",
    button: "Follow Community",
    link: "",
    button_2: "check",
    showPlayIcon: false,
    icon: <Mine size={24} className="text-[#d4d4d4]" />,
  },
  {
    title: "Boost MXD Channel",
    description:
      "Boost the official MXD channel to unlock new features and earn daily MXD by maintaining your boost.",
    reward: "1,500",
    button: "Follow Community",
    link: "",
    button_2: "check",
    showPlayIcon: false,
    icon: <Mine size={24} className="text-[#d4d4d4]" />,
  },
  {
    title: "Invite More Friends",
    description:
      "Invite your friends to join MXD and get rewarded as they join the platform.",
    reward: "7,500",
    button: "Follow Community",
    link: "",
    button_2: "check",
    showPlayIcon: false,
    icon: <Mine size={24} className="text-[#d4d4d4]" />,
  },
];

// Type definition for SectionHeader props
type SectionHeaderProps = {
  icon: ReactNode;
  title: string;
  subtitle: string;
};

// SectionHeader component for displaying an icon, title, and subtitle
const SectionHeader = ({ icon, title, subtitle }: SectionHeaderProps) => (
  <div className="flex flex-col items-center text-center gap-2">
    {icon}
    <div className="flex flex-col gap-0">
      <h2 className="text-xl">{title}</h2>
      <p className="text-sm font-normal">{subtitle}</p>
    </div>
  </div>
);

// Main EarnPage component
export default function EarnPage() {
  return (
    <div className="flex flex-col items-center w-full p-3 mt-5 overflow-y-scroll bg-black hide-scrollbar">
      {/* Games Section */}
      <SectionHeader
        icon={<BiSolidGift size={55} color="#C5A35E" />}
        title="Games"
        subtitle="Get rewarded daily"
      />
      <div className="flex flex-col w-[90%] gap-4 mt-7">
        <BottomSheetSide
          icon={<Mine size={24} className="text-[#d4d4d4]" />}
          title="Roulette"
          button="Play Now"
          link=""
          button_2=""
          reward="1,500"
          description="Get Rewarded in MXD"
        />
      </div>

      {/* Earn MXD Section */}
      <div className="flex flex-col w-[95%] gap-4 mt-10 mb-24">
        <SectionHeader
          icon={<FaWallet size={55} color="#C5A35E" />}
          title="Earn MXD"
          subtitle="Simple Steps To Earn More"
        />
        <div className="flex flex-col w-full gap-4 mt-2 mx-auto">
          {/* List of Earn Tasks */}
          {earnTasks.map((task, index) => (
            <BottomSheetSide
              key={index}
              button={task.button}
              link={task.link}
              button_2={task.button_2}
              icon={<Mine size={24} className="text-[#d4d4d4]" />}
              title={task.title}
              description={task.description}
              reward={task.reward}
              showPlayIcon={task.showPlayIcon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
