import { GameState } from './Context';

export const storeData = async (data: GameState) => {
  try {
    const jsonValue = JSON.stringify(data);
    localStorage.setItem('balance-tracker-for-business', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getData = async () => {
  try {
    const jsonValue = localStorage.getItem('balance-tracker-for-business');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

export const clearData = async () => {
  try {
    localStorage.removeItem('balance-tracker-for-business');
  } catch (e) {
    console.log(e);
  }
};
