import React, { useState } from "react";
import {
  SearchOutlined,
  SettingOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const Header = () => {
  return (
    <div className="w-[100%] shadow">
      <div className="flex justify-between items-center  h-[80px] p-4 md:w-[80%] mx-auto font-bold">
        <div className=" hidden md:flex gap-6">
          <p>Coins</p>
          <p>Exchanges</p>
          <p>Charts</p>
          <p>Swap</p>
        </div>
        <div className="md:hidden">
          <SearchOutlined style={{ fontSize: "25px" }} />
        </div>
        <div className="flex items-center">
          <img
            src="https://coincap.io/static/logos/black.svg"
            alt=" logo"
            className="w-[120px]"
          />
        </div>
        <div className="md:hidden">
          <MenuOutlined />
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <p>
            <SearchOutlined style={{ fontSize: "25px" }} />
          </p>

          <p>
            {" "}
            <SettingOutlined style={{ fontSize: "25px" }} />
          </p>

          <button className="bg-green-600 py-2 px-4 rounded-3xl text-sm text-white font-bold">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
