const myAge = (birthday) => {
  const birthDay = new Date(birthday);
  const today = Date.now();

  const diff_ms = today - birthDay.getTime();
  const diffDate = new Date(diff_ms);

  return diffDate.getFullYear() - 1970;
};

console.log(myAge("1996-05-10"));
