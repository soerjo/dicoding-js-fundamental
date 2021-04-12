const myAge = (birthday) => {
  const birthday = new Date(birthday);
  const today = Date.now();

  const diff_ms = today - birthday.getTime();
  const diffDate = new Date(diff_ms);
  return diffDate.getFullYear() - 1970;
};

myAge("1996-05-10");
