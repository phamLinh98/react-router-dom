import { envConfig } from "../configs/EnvConfig";

export const prefixApi = envConfig.host + ":" + envConfig.port;

export async function get(api = "/demodata") {
  const url = prefixApi + api;
  const response = await fetch(url);
  const json = await response.json();
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  return json;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get,
};
