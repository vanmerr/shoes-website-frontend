import axios from 'axios';

const base_url_api = process.env.REACT_APP_API_URL;

const fetchApi = async (url, method, body = null, token = null) => {
  try {
    const config = {
      url: `${base_url_api}${url}`,
      method,
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      data: body,
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : error.message;
  }
};

const getApi = (url, token = null) => fetchApi(url, "GET", null, token);
const postApi = (url, body, token = null) => fetchApi(url, "POST", body, token);
const putApi = (url, body, token = null) => fetchApi(url, "PUT", body, token);
const deleteApi = (url, token = null) => fetchApi(url, "DELETE", null, token);

export { getApi, postApi, putApi, deleteApi };
export default fetchApi;
