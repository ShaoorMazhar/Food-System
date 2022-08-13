import { BASE_URL, NETWORK_ERROR } from "../constants/appConstants";
import { ToastContainer, toast } from "react-toastify";

function buildApiEndpoint(path) {
  const url = new URL(path, BASE_URL);
  return url.href;
}
<ToastContainer
  position="top-center"
  autoClose={5000}
  hideProgressBar
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>;
export const request = async (
  path,
  method = "GET",
  body = {},
  contentType = "application/json"
) => {
  const fetchOption = {
    method,

    headers: new Headers({
      Accept: "application/json",
      "Content-Type": contentType
    }),
    ...(method !== "GET" ? { body: JSON.stringify(body) } : {})
  };
  try {
    const res = await fetch(buildApiEndpoint(path), fetchOption);

    if (res.status === 200) {
      const jsonResponse = await res.json();
      return jsonResponse;
    } else {
      return res;
    }
  } catch (err) {
    toast(NETWORK_ERROR);
    throw new Error(err);
  }
};
export const setHeaders = () => {
  const headerConfig = {
    headers: { Authorization: "Bearer " + localStorage.getItem("token") }
  };
  return headerConfig;
};
