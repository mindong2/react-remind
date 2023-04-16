import axios from "axios";

const BASE_URL = "https://api.coinpaprika.com/v1";

export const getCoins = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/coins`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getInfoData = async (coinId: string | undefined) => {
  try {
    const response = await axios.get(`${BASE_URL}/coins/${coinId}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getPriceData = async (coinId: string | undefined) => {
  try {
    const response = await axios.get(`${BASE_URL}/tickers/${coinId}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
