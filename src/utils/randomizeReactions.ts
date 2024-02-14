const LOWEST_AMOUNT: number = 0;
const HIGHEST_AMOUNT: number = 50;

export const randomizeReactions = () => {
  return Math.floor(Math.random() * HIGHEST_AMOUNT) + LOWEST_AMOUNT;
};
