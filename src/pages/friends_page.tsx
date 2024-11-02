/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import InvitedUserComponent from "../component/referred_user";

type invitedUserAleses = {
  short_name: string;
  name: string;
  amount_earned: string | number;
};

function Friends_page() {
  const [allInvite, _setAllInvite] = useState<invitedUserAleses[]>([
    {
      name: "Nathaniel Etim",
      amount_earned: 10000,
      short_name: "", // We will compute this dynamically
    },
    {
      name: "Samuel Edet",
      amount_earned: 1000,
      short_name: "", // We will compute this dynamically
    },
  ]);

  // Function to create the short name from the full name
  const getShortName = (fullName: string) => {
    const nameParts = fullName.split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts[1];
    return firstName[0] + lastName[0]; // Combine the first letters of first and last name
  };

  // Updating the allInvite array to include dynamically generated short names
  const updatedInvite = allInvite.map(invite => ({
    ...invite,
    short_name: getShortName(invite.name),
  }));

  return (
    <div className="flex flex-col items-center p-3 mt-5 hide-scrollbar gap-3 mb-24  overflow-y-scroll hide-scrollbar">
      <span className="text-4xl">👨‍👨‍👧‍👦</span>
      <h3 className="text-lg">Invite Friends</h3>
      <div className="flex flex-col w-[97%] p-5 border-[#85827d82] border-2 items-center justify-center h-[180px] rounded-lg gap-3">
        <span>MXD 2000</span>
        <span className="p-3  rounded-lg bg-yellow-600 w-32 text-center">
          Claim
        </span>
        <span className="p-3 rounded-lg border border-yellow-600 w-44 text-center">
          Copy Invite Link
        </span>
      </div>
      <p className="text-xs text-gray-500 text-center">
        Score 20% from each of your invite claims
      </p>
      <div className="flex flex-col gap-1 w-full items-start mt-4">
        <h3>Total Invite: {updatedInvite.length}</h3>
        <div className="flex flex-col gap-3 w-full mt-3">
          {updatedInvite.map((element, index) => {
            return (
              <InvitedUserComponent
                key={index}
                amount_earned={element.amount_earned}
                name={element.name}
                short_name={element.short_name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Friends_page;
