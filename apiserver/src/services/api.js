const API_BASE = "http://localhost:4000/products";


export const fetchProducts = async () => {
  try {
    const response = await fetch(API_BASE);
    console.log("Full response:", response.ok);

    const data = await response.json();
    console.log("Fetched data:", data);

    return data;  // ✅ Ensure data is returned
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return []; // Return empty array to avoid undefined issues
  }
};


// const API_BASE = "http://localhost:4000/products";

// export const fetchProducts = async () => {
//   try {
//     const response = await fetch(API_BASE);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     //   const customStatus = 403
//     //   throw new Error(`HTTP error! Status: ${customStatus}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return [];
//   }
// };