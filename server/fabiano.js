// https://www.petfinder.com/developers/signup/
// https://www.petfinder.com/developers/v2/docs/
const APIKEY = '2Q5pNxniuHEguKQSnGEyGtmcNxCgQg4hpWsjoPzOySNhv2Kwpy';
const SECRET = 'SxKnN6hQkucKBjoDtZY92FbiYQ8nHSBYDjKCc1YH';
// function to get access token
const getOAuthToken = async () => {
  try {
    const response = await fetch('https://api.petfinder.com/v2/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${APIKEY}&client_secret=${SECRET}`,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error:', error);
  }
};
// Usage example
const init = async () => {
  try {
    const token = await getOAuthToken();
    console.log('Access token:', token);
    // Use this token for other API calls
  } catch (error) {
    console.error('Failed to get token:', error);
  }
};
init();
// GET request using petfinder API
// const fetchPetfinder = async () => {
//   try {
//     // first we need to generate the token (which lasts 3600 seconds)
//     const token = await getOAuthToken();
//     const CATEGORY = 'animals';
//     const ACTION =
//     const response = await fetch(
//       `https://api.petfinder.com/v2/{CATEGORY}/{ACTION}?{parameter_1}={value_1}&{parameter_2}={value_2}`,
//       {
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };
// const dogData = fetchPetfinder();
// console.log(dogData);
// fetch returns a Promise object - which is fullfilled with
// a RESPONSE object representing the server's response
//   fetch(urlToBeFetched, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(formData),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       // Log the response to see what we're getting
//       console.log('Login response:', data);
//       if (data.token) {
//         localStorage.setItem('token', data.token);
//         // Try using window.location as a fallback if navigate doesn't work
//         try {
//           navigate('/app', {
//             state: { user: data.user },
//           });
//         } catch (err) {
//           console.error('Navigation error:', err);
//           window.location.href = '/app';
//         }
//       } else {
//         throw new Error(data.error || 'Login failed');
//       }
//     })
//     .catch((error) => {
//       console.error('Login error:', error);
//       setError(error.message);
//     });
// };
// export default fetchPetfinder;
// import { dogResults } from './results.js';
// const dogUrl = dogResults.animals[0].photos[0]
// console.log(dogResults.animals[0]);