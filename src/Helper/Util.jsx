export const truncate = (str, num) => {
    if (!str) return ''; // Handle empty or undefined strings
    return str.length > num ? str.slice(0, num) + '...' : str; // Truncate and add '...' if necessary
  };