import axios from "axios";
import { AddressInfo, Transaction } from "./type";
const blockscoutURL = "https://eth.blockscout.com/api/v2";

export const getAddressInfo = async (address: string): Promise<AddressInfo> => {
  const route = `/addresses/${address}`;
  const url = `${blockscoutURL}${route}`;
  const response = await axios.get(url);
  return response.data;
};

export const getTransactions = async (address: string): Promise<Transaction[]> => {
  const route = `/addresses/${address}/transactions`;
  const url = `${blockscoutURL}${route}`;
  const response = await axios.get(url);
  return response.data.items;
};
