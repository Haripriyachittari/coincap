import React, { useEffect, useState } from "react";
import CoinItem from "./CoinItem";
import { CaretDownOutlined } from "@ant-design/icons";
const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getCoinData();
  }, []);
  const setPageHandler = () => {
    setPage(2);
  };
  const getCoinData = () => {
    fetch("https://api.coincap.io/v2/assets")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        } else {
          return res.json();
        }
      })
      .then((resJson) => {
        console.log(resJson.data);
        setCoins(resJson.data);
      });
  };
  return (
    <>
      <div>
        <div className=" bg-blue-500 h-[100px] md:h-[200px]">
          <div className="w-[100%] md:w-[80%] mx-auto   p-4 text-white font-bold">
            <div className="flex md:hidden justify-between px-4">
              <p>Market Snapshot</p>
              <p>
                <CaretDownOutlined />
              </p>
            </div>
            <div className=" hidden md:flex justify-between p-4 ">
              <div className="flex flex-col ">
                <h2>MARKET CAP</h2>
                <p className="text-2xl">1.65T</p>
              </div>
              <div className="flex flex-col">
                <h2>EXCHANGE CAP</h2>
                <p className="text-2xl">$130.29B</p>
              </div>
              <div className="flex flex-col">
                <h2>ASSETS</h2>
                <p className="text-2xl">1737</p>
              </div>
              <div className="flex flex-col">
                <h2>EXCHANGES</h2>
                <p className="text-2xl">90</p>
              </div>
              <div className="flex flex-col">
                <h2>MARKETS</h2>
                <p className="text-2xl">10,085</p>
              </div>
              <div className="flex flex-col">
                <h2>BTC INDEX DOM</h2>
                <p className="text-2xl">45%</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {coins.length > 0 && (
            <div className="w-[100%] md:w-[80%] mx-auto md:p-6  relative -top-8 md:-top-14 bg-white">
              <table className=" border-collapse text-center">
                <thead>
                  <tr className="border-b  ">
                    <th className="hidden md:table-cell">Rank</th>
                    <th className="">Name</th>

                    <th>Price</th>
                    <th className="hidden md:table-cell">Market Cap</th>
                    <th className="hidden md:table-cell">VWAP(24hr)</th>
                    <th className="hidden md:table-cell">Supply</th>
                    <th className="hidden md:table-cell">Volume</th>
                    <th>Charge</th>
                  </tr>
                </thead>
                <tbody>
                  {coins.slice(0, page * 50).map((coin) => (
                    <CoinItem key={coin.id} coin={coin} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="flex justify-center mb-4">
          {/* {[...Array(coins.length / 50)].map((_, i) => {
            return (
              <button
                className="border-2  p-2 mx-2 w-[50px] border-blue-600"
                key={i}
                onClick={() => setPageHandler(i + 1)}
              >
                {i + 1}
              </button>
            );
          })} */}

          <button
            className="border-2   p-2 mx-2 w-[200px] rounded bg-blue-700 text-white font-bold hover:text-blue-700 hover:border-blue-600 hover:bg-white"
            onClick={() => setPageHandler()}
          >
            LOAD MORE
          </button>
        </div>
      </div>
    </>
  );
};

export default Coins;
