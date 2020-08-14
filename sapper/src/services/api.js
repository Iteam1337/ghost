const GHOST_URL = "http://localhost:2368";
const GHOST_KEY = "535423ddb8466a96c6b02fb6a1";

/*
 * Each request to Ghost's API requires a content key.
 * This function adds it to the provided URL.
 */
const addKeyParameterToUrl = (url) => {
  const key = `key=${GHOST_KEY}`;
  if (url.indexOf("?") > -1) {
    return `${url}&${key}`;
  } else {
    return `${url}?${key}`;
  }
};

/*
 * Use fetch to make a request to Ghost's API.
 */
const call = async (fetch, { uri, options }) => {
  // Build full URL.
  let url = `${GHOST_URL}/ghost/api/v3/content${uri}`;

  // Apply Ghost API key.
  url = addKeyParameterToUrl(url);

  // Call Ghost API.
  const response = await fetch(url, options);

  if (response.ok) {
    return response.json();
  }

  // Something has gone wrong.
  console.error(response.status, response.statusText, response.json());
  throw new Error(response.statusText);
};

/**
 * A wrapper for GET requests.
 */
const get = async (fetch, uri) => {
  const data = await call(fetch, {
    uri,
  });

  console.log("DEBUG", "GET", uri, data);
  return data;
};

/*
 * API collection
 */
export const API = (fetch) => ({
  Pages: {
    ByTags: async (tags) => {
      let filter = "?filter=";

      tags.forEach((tag) => {
        filter += `tag:${tag},`;
      });

      filter = filter.substring(0, filter.length - 1);

      return await get(fetch, `/pages${filter}`);
    },
  },
  Posts: {
    ByTags: async (tags) => {
      let filter = "?filter=";

      tags.forEach((tag) => {
        filter += `tag:${tag},`;
      });

      filter = filter.substring(0, filter.length - 1);

      return await get(fetch, `/posts${filter}`);
    },
    List: async () => {
      return await get("/posts");
    },
  },
});
