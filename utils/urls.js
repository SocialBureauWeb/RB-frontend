// export const BASE_URL = "http://localhost:5000"
export const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const MEDIA_BASE_URL = (import.meta.env.VITE_MEDIA_URL || "https://pub-551ad76f06a94ab19c65c540e6bf9ac7.r2.dev/realty-images").replace(/\/$/, "");

export const getMediaUrl = (url) => {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${MEDIA_BASE_URL}/${url.replace(/^\/+/, "")}`;
};
