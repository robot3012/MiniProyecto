export const domain = "https://newsapi.org/v2/top-headlines?country="
export const apikey = "b0372149af3645de9ef387fbdfac52fe"
export const endpointPath = (country, category, page, pageSize) => `${domain}${country}&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`;
