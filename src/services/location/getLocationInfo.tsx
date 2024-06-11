import axios from 'axios';

/**
 * Gets the full address based on latitude and longitude using the HERE reverse geocoding API.
 * @param {string} latitude - The latitude coordinate.
 * @param {string} longitude - The longitude coordinate.
 * @param {string} apiKey - Your HERE API key.
 * @returns {Promise<string|null>} A promise that resolves to the full address or null if no address is found.
 */
export const getAddressFromCoordinates = async (
  latitude: string,
  longitude: string,
  apiKey: string,
): Promise<string | null> => {
  try {
    const url = 'https://revgeocode.search.hereapi.com/v1/revgeocode';
    const params = {
      at: `${latitude},${longitude}`,
      lang: 'pt-BR', // Set language to Portuguese for addresses in Brazil
      apiKey: apiKey,
    };

    const response = await axios.get(url, {params});
    const data = response.data;

    // Check if there are results and extract the address
    if (data && data.items && data.items.length > 0) {
      return data.items[0].address.label; // Returns the formatted address label
    } else {
      return null; // No results found
    }
  } catch (error) {
    console.error('Error fetching address from coordinates:', error);
    return null;
  }
};

export async function displayAddress(latitude: string, longitude: string) {
  const apiKey = 'KUDsJRAADKYyrKZGdmdzJuFurZstWJkVe1-ifc-sSqI';

  try {
    const address = await getAddressFromCoordinates(
      latitude,
      longitude,
      apiKey,
    );
    if (address) {
      console.log('Full Address:', address);
      return address;
    } else {
      console.log('No address found for the provided coordinates.');
    }
  } catch (error) {
    console.error('Error in retrieving the address:', error);
  }
}
