import axios from "axios";

const KEY = "AIzaSyCXvgQxwKxV2Asn5sN1hxOVI96qE0Nw_po";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: "5",
    key: KEY,
  },
});
