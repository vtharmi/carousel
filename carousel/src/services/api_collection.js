import api from "./api_config";

const GetCarouselImages = async function (query) {
  try {
    const { data: response } = await api.get(`/carousel${query}`);
    console.log("response", response)
    return response;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};


export { GetCarouselImages };
