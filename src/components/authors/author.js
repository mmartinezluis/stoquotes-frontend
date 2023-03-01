export const randomAuthor = (authorsCount) => {
  const id = Math.floor(authorsCount * Math.random());
  return id;
};
