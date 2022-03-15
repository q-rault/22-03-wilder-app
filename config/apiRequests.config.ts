import config from "./config";

const {
  api: { host, port, wilder },
} = config;

const apiRequests = {
  wilderCreateString: `http://${host}:${port}/${wilder}create`,
  wilderReadString: `http://${host}:${port}/${wilder}read`,
  wilderDeleteString: `http://${host}:${port}/${wilder}delete/`,
  wilderUpdateString: `http://${host}:${port}/${wilder}update/`,
};
export default apiRequests;
