import axios from "axios";
import apiRequests from "../config/apiRequests.config";

export const deleteWilder = async (id) => {
  try {
    await axios.delete(`${apiRequests.wilderDeleteString}${id}`);
  } catch (err) {
    console.log(err);
  }
};

export const updateWilder = async (id, wilder) => {
  try {
    await axios.put(`${apiRequests.wilderUpdateString}${id}`, wilder);
  } catch (err) {
    console.log(err);
  }
};

export const createWilder = async (name, city) => {
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
