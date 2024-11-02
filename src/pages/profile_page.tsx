//

import { walletTextFormater } from "../utils/caluclate";

function Profile_page() {
  return (
    <div className="flex flex-col items-center p-3 mt-5 w-full">
      <div className="flex flex-col gap-2 mt-4  w-full">
        <div className="bg-slate-600 w-[90px] h-[90px] rounded-full p-3"></div>
        <div className="flex flex-col gap-5 w-full mt-5">
          <div className="flex flex-row items-center justify-between w-full">
            <h2>Name :</h2>
            <p className="text-[#95908a] text-sm">UserName</p>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <h2>MXD :</h2>
            <p className="text-[#95908a] text-sm">150,000 MXD</p>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <h2>Wallet Address :</h2>
            <p className="text-[#95908a] text-sm">
              {walletTextFormater("ksnjfnjanncajnckkamk")}
            </p>
          </div>
          {/* <div className="flex flex-row items-center justify-between w-full">
            <h2>Name :</h2>
            <p className="text-[#95908a] text-sm">UserName</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Profile_page;