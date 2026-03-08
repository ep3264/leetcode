// "the-stealth-warrior" gets converted to "theStealthWarrior"
function toCamelCase(str) {

    return str.replace(/(?:-|_)([a-zA-Z])/g, (match, group1) => {
        return group1.toUpperCase();
    })
}


console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("the-stealth-warrior"));