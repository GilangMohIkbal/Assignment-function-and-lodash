const grades = [85, 90, 78.5, 92.25, 67.5, 75.27, 85, 97.25];

const nilaiSemester = (grades = []) => {
  let totalNilaiSemesterGenap = 0;
  let totalNilaiSemesterGanjil = 0;
  let jumlahSemesterGenap = 0;
  let jumlahSemesterGanjil = 0;

  grades.forEach((nilai, index) => {
    if ((index + 1) % 2 === 0) {
      totalNilaiSemesterGenap += nilai;
      jumlahSemesterGenap++;
    } else {
      totalNilaiSemesterGanjil += nilai;
      jumlahSemesterGanjil++;
    }
  });

  const rataRataNilaiSemesterGenap =
    jumlahSemesterGenap > 0 ? totalNilaiSemesterGenap / jumlahSemesterGenap : 0;
  const rataRataNilaiSemesterGanjil =
    jumlahSemesterGanjil > 0
      ? totalNilaiSemesterGanjil / jumlahSemesterGanjil
      : 0;
  return {
    totalNilaiSemesterGenap,
    totalNilaiSemesterGanjil,
    rataRataNilaiSemesterGenap,
    rataRataNilaiSemesterGanjil,
  };
};

const hasil = nilaiSemester(grades);
console.log(hasil);
