import React, { useState } from "react";
import { getAddressInfo, getTransactions } from "../lib/api";
import { AddressInfo, Transaction } from "../lib/type";
import Link from "next/link";
const HomeScreen: React.FC = () => {
  const [searchAddress, setSearchAddress] = useState<string>("");
  const [transferAddress, setTransferAddress] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [transferVisible, setTransferVisible] = useState<boolean>(false);
  const [addressInfo, setAddressInfo] = useState<AddressInfo | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleTransfer = () => {
    console.log({
      step: "transfer",
      from: searchAddress,
      to: transferAddress,
      token: token,
    });
  };

  const handleSearch = async () => {
    if (!searchAddress) return;
    const info = await getAddressInfo(searchAddress);
    setAddressInfo(info);
    const txs = await getTransactions(searchAddress);
    setTransactions(txs);
  };

  const formatDate = (string: string) => {
    //string is 2024-07-31T08:36:11.000000Z
    const date = new Date(string);
    return date.toLocaleString().split(" ")[0];
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="gap-x-2 flex">
        <input
          type="text"
          value={searchAddress}
          onChange={(e) => {
            setSearchAddress(e.target.value);
          }}
          className="mt-4 p-2 border border-gray-300 rounded-md w-[30rem]"
          placeholder="Search an address"
        />
        <button
          onClick={() => {
            handleSearch();
          }}
          className="mt-4 bg-custom-blue text-white p-2 rounded-md"
        >
          Search
        </button>
      </div>
      <div className="flex w-full justify-center">
        {transferVisible ? (
          <div className="gap-x-2 flex">
            <input
              type="string"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              className="mt-4 p-2 border border-gray-300 rounded-md w-24"
              placeholder="Amount"
            />
            <select
              value={token}
              onChange={(e) => {
                setToken(e.target.value);
              }}
              className="mt-4 p-2 border border-gray-300 rounded-md w-24"
            >
              <option value="0">Token</option>
            </select>
            <input
              type="text"
              value={searchAddress}
              onChange={(e) => {
                setTransferAddress(e.target.value);
              }}
              className="mt-4 p-2 border border-gray-300 rounded-md w-[30rem]"
              placeholder="Tranfer to"
            />
            <button
              onClick={() => {
                handleTransfer();
              }}
              className="mt-4 bg-custom-blue text-white p-2 rounded-md"
            >
              Transfer
            </button>
            <button
              onClick={() => {
                setTransferVisible(false);
              }}
              className="mt-4 bg-red-500 text-white p-2 rounded-md"
            >
              Close
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setTransferVisible(true);
            }}
            className="mt-4 bg-custom-blue text-white p-2 rounded-md"
          >
            Transfer token
          </button>
        )}
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-8">
        {addressInfo?.ens_domain_name && <h1 className="text-2xl">{addressInfo.ens_domain_name}</h1>}
      </div>
      <div className="w-[60rem] flex flex-col items-center justify-center mt-8">
        {transactions.length > 0 && (
          <div className="w-full text-center ">
            <div className="w-full flex ">
              <p className="w-[14%]">Timestamp</p>
              <p className="w-[14%]">Block</p>
              <p className="w-[14%]">Status</p>
              <p className="w-[14%]">Method</p>
              <p className="w-[14%]">Type</p>
              <p className="w-[14%]">Contract</p>
              <p className="w-[14%]">Result</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-y-2">
              {transactions.map((tx, index) => (
                <Link
                  href={`https://eth.blockscout.com/tx/${tx.hash}`}
                  target="_blank"
                  className="bg-custom-blue/20 hover:bg-custom-blue/30 transition-all rounded-lg flex w-full h-10 items-center justify-center hover:transform hover:scale-105"
                  key={index}
                >
                  <p className="w-[14%]">{formatDate(tx.timestamp)}</p>
                  <p className="w-[14%]">{tx.block}</p>
                  <p className="w-[14%]">{tx.status}</p>
                  <p className="w-[14%]">{tx.method}</p>
                  <p className="w-[14%]">{tx.tx_types[0]}</p>
                  <p className="w-[14%]">{tx.to.implementation_name}</p>
                  <p className="w-[14%]">{tx.result}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
