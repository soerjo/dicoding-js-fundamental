const favorite = ["Seafood", "Salad", "Nugget", "soup"];
const others = ["Sake", "Pie", "Donut"];

//tidak bisa menggbung array dengan cara seperti ini
const allFavorites = favorite + others;
console.log();

//tidak bisa menggabung array dengan cara seperti ini
const allFavorites2 = [favorite, others];
console.log(allFavorites2);

//menggabung array dengan cara spreading...
const allFavorites3 = [...favorite, ...others];
console.log(allFavorites3);
