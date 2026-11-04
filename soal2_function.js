const data = [
  20, 5, 10, 15, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
  100,
];

const calculateGanjilGenap = (...data) => {
  const arrayBilanganGenap = data.filter((bilangan) => bilangan % 2 === 0);

  const arrayBilanganGanjil = data.filter((bilangan) => bilangan % 2 !== 0);
  return {
    arrayBilanganGenap,
    arrayBilanganGanjil,
  };
};

const hasil = calculateGanjilGenap(data);
console.log(hasil);
