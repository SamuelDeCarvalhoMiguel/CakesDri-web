const apiUtils = {};

const GetConfig = async () => {
  const res = await fetch('../../appsettings.json');
  let data;
  try {
    data = await res.json();
  } catch (e) {
    console.log('error:', e);
  }
  return data;
};

apiUtils.getConfig = GetConfig;

apiUtils.exec = async (endpoint, params) => {
  const internalParams = params;
  const config = await GetConfig();
  const url = config.apiUrl + endpoint;

  return (await fetch(url, internalParams)).json();
};

export default apiUtils;