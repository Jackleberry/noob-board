class NoobApi {
  static getAllNoobs() {
    return fetch('http://localhost:3002/api/noobs', {
      accept: 'application/json'
    })
      .then(NoobApi.checkStatus)
      .then(res => res.json())
      .catch(error => {
        throw(error);
      });
  }

  static getNoob(id) {
    return fetch(`http://localhost:3002/api/noobs/${id}`)
      .then(NoobApi.checkStatus)
      .then(res => res.json())
      .catch(error => {
        throw(error);
      });
  }

  static addNoob(name) {
    return fetch('http://localhost:3002/api/noobs', {
      method: "POST",
      accept: 'application/json',
      body: JSON.stringify({name})
    })
  }

  static addNoobPoint(id) {
    return fetch(`http://localhost:3002/api/noobs/${id}/noob`, {
      method: "POST"
    })
      .then(NoobApi.checkStatus)
      .then(res => res.json())
      .catch(error => {
        throw(error);
      });
  }

  static addAssassinPoint(id) {
    return fetch(`http://localhost:3002/api/noobs/${id}/assassin`, {
      method: "POST"
    })
      .then(NoobApi.checkStatus)
      .then(res => res.json())
      .catch(error => {
        throw(error);
      });
  }

  static checkStatus(response) {
    if (!response.ok) {
      throw("Did not receive 200 status code back.");
    }
    return response;
  }
}

export default NoobApi;
