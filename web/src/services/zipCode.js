import { apiCEP } from "./api";

export async function fetchAddressFromZipCode(zipCode) {
  try {
    const response = await apiCEP.get(`/${zipCode}/json`);

    console.log()
    return {
      data: response.data,
      latitude: response.latitude,
      longitude: response.longitude,
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}