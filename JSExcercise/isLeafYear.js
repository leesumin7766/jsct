const isLeafYear = function (연도) { 
    return (연도 % 4 === 0) 
        && (연도 % 100 !== 0)
        || (연도 % 400 === 0)
}

console.log(`2020 ? === ${isLeafYear(2020)}`)
console.log(`2010 ? === ${isLeafYear(2010)}`)
console.log(`2000 ? === ${isLeafYear(2000)}`)
console.log(`1900 ? === ${isLeafYear(1900)}`)