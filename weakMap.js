let visitsCountMap = new Map(); //Menyimpan daftar user

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  console.log(count);
  visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas); //Menambah user "Jonas"

jonas = null; //Data object "jonas" di hapus

console.log(visitsCountMap);
