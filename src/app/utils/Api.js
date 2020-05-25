import axios from "axios";
import history from "../constants/history";

const url = "https://vkbot-noves-api.herokuapp.com/api/v1";
let token = localStorage.getItem("token");

const generateHeaders = (disableToken) => {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: !disableToken && token ? `Bearer ${token}` : "",
    },
  };
};

const handleExceptions = (error) => {
  if (error.response.status === 403 || error.response.status === 500) {
    localStorage.setItem("token", "");
    history.push("/login");
  }
};

export default {
  login: async (reqData) => {
    const res = await axios
      .post(`${url}/auth/login`, reqData, generateHeaders(true))
      .catch((error) => handleExceptions(error));

    const data = res ? res.data : {};
    if (data.token) {
      localStorage.setItem("token", (token = data.token));
      history.push("/tasks");
    }
  },
  getUserInfo: async () => {
    const res = await axios
      .get(`${url}/user`, generateHeaders())
      .catch((error) => handleExceptions(error));

    return res ? res.data : {};
  },
  getSettings: async () => {
    const res = await axios
      .get(`${url}/settings`, generateHeaders())
      .catch((error) => handleExceptions(error));

    return res ? res.data : {};
  },
  getTasks: async () => {
    const res = await axios
      .get(`${url}/task`, generateHeaders())
      .catch((error) => handleExceptions(error));

    return res ? res.data : {};
  },
  getProgram: async (programId) => {
    const res = await axios
      .get(`${url}/program/${programId}`, generateHeaders())
      .catch((error) => handleExceptions(error));

    return res ? res.data : {};
  },
  getPrograms: async () => {
    const res = await axios
      .get(`${url}/program`, generateHeaders())
      .catch((error) => handleExceptions(error));

    return res ? res.data : {};
  },
  getAccountLogs: async (accountId) => {
    const res = await axios
      .get(`${url}/account/${accountId}/logs`, generateHeaders())
      .catch((error) => handleExceptions(error));

    return res ? res.data : {};
  },
  getProgramAccounts: async (programId) => {
    const res = await axios
      .get(`${url}/program/${programId}/accounts`, generateHeaders())
      .catch((error) => handleExceptions(error));

    return res ? res.data : {};
  },
  saveSettings: (reqData) => {
    axios
      .put(`${url}/settings`, reqData, generateHeaders())
      .catch((error) => handleExceptions(error));
  },
  createTask: (reqData) => {
    axios
      .post(`${url}/task`, reqData, generateHeaders())
      .catch((error) => handleExceptions(error));
  },
  addAccounts: (reqData) => {
    axios
      .post(`${url}/account`, reqData, generateHeaders())
      .catch((error) => handleExceptions(error));
  },
  addProgram: async (reqData) => {
    const res = await axios
      .post(`${url}/program`, reqData, generateHeaders())
      .catch((error) => handleExceptions(error));

    return res ? res.data : {};
  },
  startTask: (taskId) => {
    axios
      .put(`${url}/task/start/${taskId}`, {}, generateHeaders())
      .catch((error) => handleExceptions(error));
  },
  stopTask: (taskId) => {
    axios
      .put(`${url}/task/stop/${taskId}`, {}, generateHeaders())
      .catch((error) => handleExceptions(error));
  },
  deleteTask: (taskId) => {
    axios
      .put(`${url}/task/delete/${taskId}`, {}, generateHeaders())
      .catch((error) => handleExceptions(error));
  },
  startProgram: (programId) => {
    axios
      .put(`${url}/program/start/${programId}`, {}, generateHeaders())
      .catch((error) => handleExceptions(error));
  },
  stopProgram: (programId) => {
    axios
      .put(`${url}/program/stop/${programId}`, {}, generateHeaders())
      .catch((error) => handleExceptions(error));
  },
  deleteProgram: (programId) => {
    axios
      .put(`${url}/program/delete/${programId}`, {}, generateHeaders())
      .catch((error) => handleExceptions(error));
  },
};
