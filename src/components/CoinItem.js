import React from "react";

const CoinItem = ({ coin }) => {
  return (
    <tr className="h-[80px] border-b overflow-hidden hover:bg-gray-200">
      <td className="hidden md:table-cell">{coin.rank}</td>

      <td className="md:pl-8">
        <div className="flex items-center  ">
          <img
            src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
            alt="crytosign"
            className="w-8 mx-1"
          />
          <div className="flex flex-col text-left">
            <p>{coin.name}</p>
            <p>{coin.symbol}</p>
          </div>
        </div>
      </td>
      <td className="w-[300px]">${Number(coin.priceUsd).toLocaleString()}</td>
      <td className="w-[300px] hidden md:table-cell">
        ${Number(+coin.marketCapUsd / 1000000000).toFixed(2)}b
      </td>

      <td className="w-[300px] hidden md:table-cell">
        <p className="text-green-600">
          ${Number(coin.vwap24Hr).toLocaleString()}
        </p>
      </td>
      <td className="w-[180px] hidden md:table-cell">
        {Number(+coin.supply / 1000000).toFixed(2)}m
      </td>
      <td className="w-[180px] hidden md:table-cell">
        ${Number(+coin.volumeUsd24Hr / 1000000000).toFixed(2)}b
      </td>
      <td
        className={
          +coin.changePercent24Hr < 0
            ? "w-[180px]  text-red-500"
            : "w-[180px]  text-green-600"
        }
      >
        {Number(coin.changePercent24Hr).toFixed(2)}%
      </td>
    </tr>
  );
};

export default CoinItem;
