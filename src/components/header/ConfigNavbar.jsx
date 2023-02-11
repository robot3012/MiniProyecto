
export const header = (category) => `News - Top ${category} `;
export const navs = [
    
    { nav: "Business", page: "/business" },
    { nav: "Sports", page: "/sports" },
    { nav: "Science", page: "/science" },
    { nav: "Health", page: "/health" },
    { nav: "Entertainment", page: "/entertainment" },
    { nav: "Technology", page: "/technology" }
]

export const router = [
     { path: "/", key: "general", category: "general", country: "mx" },
    { path: "/general", key: "general", category: "general", country: "mx" },
    { path: "/business", key: "business", category: "business", country: "mx" },
    { path: "/sports", key: "sports", category: "sports", country: "mx" },
    { path: "/science", key: "science", category: "science", country: "mx" },
    { path: "/health", key: "health", category: "health", country: "mx" },
    { path: "/entertainment", key: "entertainment", category: "entertainment", country: "mx" },
    { path: "/technology", key: "technology", category: "technology", country: "mx" }
]

export const summary = "Author, Channel and Date";
export const author = (author) => `Author: ${!author ? "Unknown" : author}`;
export const channel = (channel) => `Channel: ${channel}`;
export const lastUpdate = (date) => `Last updated: ${new Date(date).toGMTString()}`;