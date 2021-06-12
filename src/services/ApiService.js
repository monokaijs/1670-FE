const API_BASE_URL = "http://localhost:8080";
const ApiService = {}

const callApi = async (url, data) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
}

ApiService.login = function (data) {
  return callApi(API_BASE_URL+ '/api/signin', data)
}

ApiService.signUp = function (data) {
  return callApi(API_BASE_URL+ '/api/signup', data)
}

export default ApiService;
