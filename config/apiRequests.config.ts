import config from "./config";

const {
  api: { url , wilder },
} = config;

const apiRequests = {
  wilderCreateString: `http://${url}/${wilder}create`,
  wilderReadString: `http://${url}/${wilder}read`,
  wilderDeleteString: `http://${url}/${wilder}delete/`,
  wilderUpdateString: `http://${url}/${wilder}update/`,
};
export default apiRequests;
