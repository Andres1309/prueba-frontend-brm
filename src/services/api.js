export const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Para manejo de errores en componentes
  }
};