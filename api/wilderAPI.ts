import axios from 'axios';
import { IWilder } from '../components/WilderCardComponent';
import apiRequests from '../config/apiRequests.config';
import config from '../config/config.js'



export const deleteWilder = async (id: string) => {
  try {
    return await axios.delete(`${apiRequests.wilderDeleteString}${id}`);
  } catch (err) {
    console.log(err);
  }
};

export const updateWilder = async (id: string, wilder: IWilder) => {
  try {
    return await axios.put(`${apiRequests.wilderUpdateString}${id}`, wilder);
  } catch (err) {
    console.log(err);
  }
};

export const createWilder = async (name: string, city: string) => {
  try {
    return await axios.post(apiRequests.wilderCreateString, {
      name: name,
      city: city,
    });
  } catch (err) {
    console.log(err);
  }
};

export const readWilders = async () => {
  try {
    return await axios.get(apiRequests.wilderReadString);
  } catch (err) {
    console.log(err);
  }
};
