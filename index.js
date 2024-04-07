// 1. Écrivez une fonction qui prend un nombre positif "n" en paramètre et retourne une chaîne de caractères contenant des nombres de 1 à "n"

function displayNumbers(n) {
    let char = '';
    if (n === 0) {
        return '0';
    } else {
        for (let i = 1; i <= n; i++) {
            char += `${i} `;           
        }
        return char.trim();
    }
}
displayNumbers(10);
// 2. Écrivez une fonction qui prend un nombre "n" en paramètre et qui retourne une chaîne de caractère qui contient tous les nombres impairs de 1 à "n".

function displayOddNumbers(n) {
    let char = '';
    if (n === 0) {
        return '0';
    } else {
        for (let i = 1; i <= n; i++) {
            if (i % 2 !== 0) {
                char += `${i} `;
            }            
        }
        return char.trim();
    }
}
displayOddNumbers(10);


// 3. Écrivez une fonction qui retourne une chaîne de caractère qui contient toutes les tables de multiplication de 1 à 10.

/*
    1 * 1 = 1
    1 * 2 = 2
    1 * 3 = 3
    1 * 4 = 4
    1 * 5 = 5
    1 * 6 = 6
    1 * 7 = 7
    1 * 8 = 8
    1 * 9 = 9
    1 * 10 = 10

    2 * 1 = 2
    2 * 2 = 4
    2 * 3 = 6
    2 * 4 = 8
    2 * 5 = 10
    ...
 */

function displayAllMultiplicationTables() {
    let table = '';
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            table += `${i} * ${j} = ${i * j}\n`;
        }    
        table += `\n`    
    }
    return table.trim();
}
displayAllMultiplicationTables();
// 4. Écrivez une fonction qui prend deux nombres en paramètre n et m et qui retourne la somme de tous les nombres entre n et m.
//
// calcule la somme de tous les nombres entre 1 et 100.

function sumAllNumbers(n, m) {
    let sum = 0;
    if (m < n) {
        return '0';
    } else {
        for (let i = n; i <= m; i++) {
            sum += i;    
        }
        return sum;
    }
}
sumAllNumbers(1, 0);
// 5. Écrivez une fonction qui retourne la moyenne de tous les nombres entre 1 et 100.

function averageAllNumbers() {
    let sum = 0;
    let moyenne;
    let count;

    for (let i = 1; i <= 100; i++) {
        sum += i;
        count = i;            
    }
    return moyenne = sum / count;
}
averageAllNumbers();


module.exports = {
    displayNumbers,
    displayOddNumbers,
    displayAllMultiplicationTables,
    sumAllNumbers,
    averageAllNumbers
}