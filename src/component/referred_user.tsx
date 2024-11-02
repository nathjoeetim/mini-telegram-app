type invitedUserAleses = {
  short_name: string;
  name: string;
  amount_earned: string | number;
};

function InvitedUserComponent(invite: invitedUserAleses) {
  return (
    <div className="flex flex-row items-center justify-start mx-auto w-[96%] ">
      <div className="p-1 w-10 h-10 flex flex-col items-center rounded-full bg-[#1d2025] mr-1">
        <span className="text-base">{invite.short_name}</span>
      </div>
      <div className="flex flex-row gap-2 items-center justify-between w-full border-b-[0.2px] p-3 ">
        <p className="text-sm under">{invite.name}</p>
        <span className="text-sm font-bold"> {invite.amount_earned} MXD </span>
      </div>
    </div>
  );
}

export default InvitedUserComponent;
