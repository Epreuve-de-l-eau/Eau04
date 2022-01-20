#! node

//Script qui affiche le n-ème élément de la suite de Fibonacci

//Fonction qui calcul la suite de Fibonacci
let fibo = (tab) => {
  for (let a = 0; a != stop; a++) {
    let next = tab[a] + tab[a + 1];
    tab.push(next)
  }
}

//Gestion d'erreur
if (process.argv.length != 3) {
  console.log("Veuillez indiquer qu'un seul argument au script")
  return
} else if (Number(process.argv[2]) % 1 != 0) {
  console.log("Veuillez indiquer un nombre en argument")
  return
}

//Parsing
let start = [0, 1];
let stop = process.argv[2]

//Résolution du problème
fibo(start)

//Affichage du résultat
console.log(start[stop])
