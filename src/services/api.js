import axios from "axios";

const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = "";
};

export const requestContacts = async () => {
  const { data } = await instance.get("/contacts");

  return data;
};

export const apiAddContact = async (contactData) => {
  const { data } = await instance.post(`/contacts`, contactData);

  return data;
};

export const apiDeleteContact = async (contactId) => {
  const { data } = await instance.delete(`/contacts/${contactId}`);

  return data;
};
