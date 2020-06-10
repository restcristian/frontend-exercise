/**
 * Helper functions that contains string patterns to facilitate validation
 */
export const email = () => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
};

export const wordWithoutSpace = () => {
  return /^[A-Za-zäöüÄÖÜß]+$/;
};
