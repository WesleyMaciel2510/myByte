import axios from 'axios';

const validateCEP = (cep: string) => {
  // Regular expression to validate the CEP format: exactly 8 digits.
  const regex = /^\d{8}$/;
  return regex.test(cep);
};

const fetchCEPData = async (cep: string) => {
  try {
    // Validate CEP format
    if (!validateCEP(cep)) {
      return {error: 'Invalid CEP format. CEP must consist of 8 digits.'};
    }

    // Construct the URL
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    // Make the HTTP request using Axios
    const response = await axios.get(url);

    // Check if the CEP was found
    if (response.data.erro) {
      return {error: 'CEP not found.'};
    }

    return response.data;
  } catch (error) {
    // Handle errors in making the request
    console.error('Error fetching CEP data:', error);
    return {error: 'An error occurred while fetching CEP data.'};
  }
};

export default fetchCEPData;
