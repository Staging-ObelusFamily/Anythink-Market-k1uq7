const axiosLib = require("axios");
const fs = require("fs");

const WILCO_ID = process.env.WILCO_ID || fs.readFileSync('../.wilco', 'utf8')

const baseURL = 'http://localhost:3002';
const axios = axiosLib.create({
  baseURL: baseURL,
  headers: {
    'Content-type': 'application/json',
  },
});

async function sendEvent(event, metadata) {
  const result = await axios.post(`/users/${WILCO_ID}/event`, JSON.stringify({ event, metadata }));
  return result.data;
}

module.exports = {
  sendEvent,
}
