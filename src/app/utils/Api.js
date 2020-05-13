import axios from "axios";
import history from "../constants/history";

export default class Api {
  constructor() {
    const token = localStorage.getItem("token");
    this.state = {
      url: "/api/v1",
      token: token,
      options: {
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      },
    };
  }

  login = ({ username, password }) => {
    axios
      .post(
        `${this.state.url}/auth/login`,
        { username, password },
        this.state.options
      )
      .then((response) => {
        const data = response.data;
        if (data.token) {
          localStorage.setItem("token", data.token);
          history.push("/tasks");
        }
      });
  };

  getUserInfo = () => {
    return axios.get(`${this.state.url}/user`, this.state.options);
  };
}
