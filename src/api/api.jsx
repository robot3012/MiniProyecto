export const domain = "https://newsapi.org/v2/top-headlines?country="
export const apikey = "6f050de39c9f4179bf8dd81f9cc86a34"
export const endpointPath = (country, category, page, pageSize) => `${domain}${country}&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`;
