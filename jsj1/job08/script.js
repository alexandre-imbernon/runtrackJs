function estPremier(n) {
    if (n < 2) return false
    // Si n est inférieur à 2, la fonction retourne false car les nombres inférieurs à 2 ne sont pas premiers
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false 
        // Si n est divisible par i (0), alors n n’est pas un nombre premier et la fonction retourne false
    }
    return true
}

function sommeNombresPremiers(a, b) {
    if (estPremier(a) && estPremier(b)) {
        return a + b
    } else {
        return false
    }
}

console.log(sommeNombresPremiers(11, 5))
console.log(sommeNombresPremiers(4, 5))
