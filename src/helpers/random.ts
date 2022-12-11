const getRandomNumber = (maxNumber: number) : number => {
  const num = Math.round(Math.random() * maxNumber);

  return num;
}

export {
  getRandomNumber
}