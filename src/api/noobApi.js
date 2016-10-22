import axios from 'axios';
// const noobApiUrl = "https://pure-crag-60488.herokuapp.com/api/noobs";
const noobApiUrl = "http://localhost:3002/api/noobs";

class NoobApi {

  static getAllNoobs() {
    return axios.get(noobApiUrl);
      // .then(NoobApi.checkStatus)
      // .then(res => res.json())
      // .catch(error => {
      //   throw(error);
      // });
  }

  static getNoob(id) {
    return axios.get(`${noobApiUrl}/${id}`);
      // .then(NoobApi.checkStatus)
      // .then(res => res.json())
      // .catch(error => {
      //   throw(error);
      // });
  }

  static addNoob(name) {
    return axios.post(noobApiUrl, {noob: name});
  }

  static addNoobPoint(id) {
    return axios.post(`${noobApiUrl}/${id}/noob/increment`);
      // .then(NoobApi.checkStatus)
      // .then(res => res.json())
      // .catch(error => {
      //   throw(error);
      // });
  }

  static addAssassinPoint(id) {
    return axios.post(`${noobApiUrl}/${id}/assassin/increment`);
      // .then(NoobApi.checkStatus)
      // .then(res => res.json())
      // .catch(error => {
      //   throw(error);
      // });
  }

  static removeNoobPoint(id) {
    return axios.post(`${noobApiUrl}/${id}/noob/decrement`);
      // .then(NoobApi.checkStatus)
      // .then(res => res.json())
      // .catch(error => {
      //   throw(error);
      // });
  }

  static removeAssassinPoint(id) {
    return axios.post(`${noobApiUrl}/${id}/assassin/decrement`);
      // .then(NoobApi.checkStatus)
      // .then(res => res.json())
      // .catch(error => {
      //   throw(error);
      // });
  }

  static checkStatus(response) {
    if (!response.ok) {
      throw("Did not receive 200 status code back.");
    }
    return response;
  }
}

export default NoobApi;
