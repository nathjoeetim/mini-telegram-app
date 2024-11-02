import { BiSolidGift } from "react-icons/bi";
import Mine from "../icons/Mine";
import { FaWallet } from "react-icons/fa6";
import { ReactNode } from "react";
import { BottomSheetSide } from "@/components/bottom_sheet";

// Type alias for RewardItem props
// type

// Type alias for SectionHeader props
type SectionHeaderProps = {
  icon: ReactNode;
  title: string;
  subtitle: string;
};

// Reusable header component
const SectionHeader = ({ icon, title, subtitle }: SectionHeaderProps) => (
  <div className="flex flex-col gap-2 items-center text-center">
    {icon}
    <div className="flex flex-col gap-0">
      <h2 className="text-xl">{title}</h2>
      <p className="text-sm font-normal">{subtitle}</p>
    </div>
  </div>
);

export default function EarnPage() {
  return (
    <div className="flex flex-col items-center p-3 mt-5 overflow-y-scroll hide-scrollbar w-full">
      {/* Game section */}
      <SectionHeader
        icon={<BiSolidGift size={55} color="#C5A35E" />}
        title="Games"
        subtitle="Get rewarded daily"
      />
      <div className="flex flex-col gap-4 mt-7 w-[90%]">
        <BottomSheetSide
          icon={<Mine size={24} className="text-[#d4d4d4]" />}
          title="Roulette"
          description="Get Rewarded in MXD"
        />
      </div>

      {/* Task to earn section */}
      <div className="flex flex-col gap-4 mt-10 w-[95%] mb-24">
        <SectionHeader
          icon={<FaWallet size={55} color="#C5A35E" />}
          title="Earn MXD"
          subtitle="Simple Steps To Earn More"
        />
        <div className="flex flex-col gap-4 mt-2 w-full mx-auto">
          <BottomSheetSide
            icon={<Mine size={24} className="text-[#d4d4d4]" />}
            title="Follow MXD on Telegram"
            description="+2000 MXD"
            showPlayIcon={false} // Disable play icon in this section
          />
          <BottomSheetSide
            icon={<Mine size={24} className="text-[#d4d4d4]" />}
            title="Share in Telegram Story"
            description="+3000 MXD"
            showPlayIcon={false} // Disable play icon in this section
          />
          <BottomSheetSide
            icon={<Mine size={24} className="text-[#d4d4d4]" />}
            title="Boost MXD Channel"
            description="+1500 MXD"
            showPlayIcon={false} // Disable play icon in this section
          />{" "}
          <BottomSheetSide
            icon={<Mine size={24} className="text-[#d4d4d4]" />}
            title="Invite More Friends"
            description="+7500 MXD"
            showPlayIcon={false} // Disable play icon in this section
          />
        </div>
      </div>
    </div>
  );
}
