import axiosClient from "./axios.client";

export const chatCompletion = async ({ prompt }) => {
  try {
    const response = await axiosClient.post("/api/chats", { prompt });

    return { response };
  } catch (err) {
    return { err };
  }
};