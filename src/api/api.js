export const dataRequest = () => {
  fetch(`/config/flights.json`);
};
export const onFetch = async () => {
  const req = await fetch("./data.json");
  return req.json();
};
