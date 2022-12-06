const getRandomNumber = (maxNumber) => {
  const num = Math.round(Math.random() * maxNumber);

  return num;
}

export {
  getRandomNumber
}