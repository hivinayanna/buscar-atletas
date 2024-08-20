import axios from "axios";

export const fetchAthletes = async (name) => {
  const options = {
    method: "GET",
    url: `https://soccer.sportmonks.com/api/v2.0/players/search/${name}?api_token=${process.env.REACT_APP_API_KEY}`,
  };

  const response = await axios.request(options);
  if (response.data.data.length === 0) {
    return [];
  }
  return response.data.data;
};
