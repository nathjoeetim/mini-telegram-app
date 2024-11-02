"use client";

import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { BiPlayCircle } from "react-icons/bi";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// type SubRewardContent = {
//   price: number;
//   // image : i
//   text: string;
//   link: string;
// };

type RewardItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
  reward?: string; // Optional, as not every item may have a reward
  showPlayIcon?: boolean; // Optional, to show or hide play icon
};

export function BottomSheetSide({
  icon,
  title,
  description,
  reward,
  showPlayIcon = true, // Default is true, but can be turned off
}: RewardItemProps) {
  //

  return (
    <div className="grid grid-cols-1 gap-2 w-full">
      <Sheet>
        <SheetTrigger asChild>
          <div
            className="bg-[#272a2f] rounded-lg px-4 py-2 items-center justify-between flex flex-row gap-10 cursor-pointer w-full"
            // onClick={handleClick} // Add onClick event here
          >
            <div className="flex flex-row gap-3 items-center w-full ">
              <div className="p-1 rounded-lg bg-[#1d2025]">{icon}</div>
              <div className="flex flex-col">
                {title}
                <span className="text-sm font-normal text-[#C5A35E]">
                  {description}
                </span>
                {reward && (
                  <span className="text-sm font-normal text-[#C5A35E]">
                    {reward}
                  </span>
                )}
              </div>
            </div>
            {showPlayIcon && <BiPlayCircle color="#D1B86E" size={20} />}
          </div>
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="flex flex-col w-full bg-[#1d2025] text-white"
        >
          <SheetHeader>
            <SheetTitle className="text-white text-2xl">{title}</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-4">
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus, id.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                temporibus!
              </p>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
