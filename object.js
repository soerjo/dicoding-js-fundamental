const spaceship = {
  name: "Millenium Falcon",
  manufacture: "Corellian Engginering Corporation",
  maxSpeed: 1200,
  color: "light gray",
};

//mengganti nilai dan menambahakan properti baru
spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
spaceship.class = "light Freighter";

console.log(spaceship);

//menghapus properti dengan keyword delete
delete spaceship.manufacture;
spaceship.color = "Deep Black";

console.log(spaceship);
