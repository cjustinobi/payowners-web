
const axios = require('axios');

export default axios.create({
  baseURL: process.env.VUE_APP_NIBSS,
  withCredentials: false,
  headers: {
    // "sandbox-key": "5becec1e9d6c7d670cde1ae3cdcc7f66"
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  //   'Accept' : 'application/json, text/plain, */*',
  //   "Ocp-Apim-Subscription-Key": "1cc664165bd4490e97019c61a492d19a",
  //   "Ocp-Apim-Trace": "true",
  //   "Appid": "69",
  //   "ipval": 0,
  }
});

/*
*  5becec1e9d6c7d670cde1ae3cdcc7f66
*
* */
