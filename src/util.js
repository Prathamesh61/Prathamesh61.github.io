export const BASE_RESUME_URL =
  "https://drive.google.com/drive/folders/1c0apQGG0jK9bp3yrJ8u_ZdutJwU3-YlL?usp=sharing";

export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
};
