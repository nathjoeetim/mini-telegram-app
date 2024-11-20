"use client";
import r from "@/assets/R.png";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { BiPlayCircle } from "react-icons/bi";
import { useToast } from "@/hooks/use-toast";

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

export type RewardItemProps = {
  icon?: ReactNode;
  title: string;
  description: string;
  reward?: string; // Optional, as not every item may have a reward
  showPlayIcon?: boolean; // Optional, to show or hide play icon
  button: string;
  button_2?: string;
  link: string;
};

export function BottomSheetSide({
  icon,
  title,
  description,
  reward,
  button,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  link, //this link will be used to navigate around the task assigned
  button_2,
  showPlayIcon = true, // Default is true, but can be turned off
}: RewardItemProps) {
  const { toast } = useToast();

  // Reusable toast function
  const showToast = (
    type: "error" | "unableToLoad" | "success" | "invalidLink"
  ) => {
    switch (type) {
      case "error":
        toast({
          variant: "destructive",
          title: "Error",
          description: "Uh oh! Something went wrong.",
          // status: "error",
        });
        break;
      case "unableToLoad":
        toast({
          variant: "destructive",
          title: "Unable to Load",
          description:
            "The content couldn't be loaded. Please try again later.",
          // status: "warning",
        });
        break;
      case "success":
        toast({
          variant: "default",
          // color:"green"
          title: "Success",
          description:
            "Task successfully executed, MXD has been added to your balance",
          // status: "success",
        });
        break;
      case "invalidLink":
        toast({
          variant: "destructive",
          title: "Invalid Link",
          description:
            "The link provided is invalid. Please check and try again.",
          // status: "error",
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="grid grid-cols-1 gap-2 w-full">
      <Sheet>
        <SheetTrigger asChild>
          <div className="bg-[#272a2f] rounded-lg px-4 py-2 items-center justify-between flex flex-row gap-10 cursor-pointer w-full">
            <div className="flex flex-row gap-3 items-center w-full">
              <div className="p-1 rounded-lg bg-[#1d2025]">{icon}</div>
              <div className="flex flex-col">
                {title}
                {reward && (
                  <span className="text-sm font-normal text-[#C5A35E]">
                    +{reward} MXD
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
          <SheetHeader className="flex flex-col items-center justify-center w-full">
            {title === "Roulette" && (
              <img alt="tag icon" src={r} className="w-32 h-32 animate-spin" />
            )}
            <SheetTitle className="text-white text-2xl flex flex-col w-full">
              {title}
              <span className="text-xs text-[#D1B86E]">+1,500 MXD</span>
            </SheetTitle>
            <SheetDescription>{description}</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-4">
            <div className="text-center mb-7">
              <p>{description}</p>
            </div>
          </div>
          <SheetFooter className="flex flex-col gap-2">
            <SheetClose asChild>
              <Button type="button">{button}</Button>
            </SheetClose>
            {button_2 && button_2.trim().length > 1 && (
              <SheetClose asChild>
                <Button
                  className="text-black"
                  variant={"outline"}
                  type="button"
                  onClick={() => showToast("success")} // Example: triggering error toast
                >
                  {button_2}
                </Button>
              </SheetClose>
            )}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
