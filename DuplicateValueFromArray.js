/**
 * duplicate value finder from an array function.
 *
 * @param {array} arrays containing duplicate values.
 * 
 * @return {array} the duplicate values.
 */
const duplicateFinder = (array) => {
    let duplicateAray = []
    let map = {}

    for (let i = 0; i < array.length; i++) {
        if (!map[array[i]]) {
            map[array[i]] = 1;
        } else map[array[i]] += 1;
    }

    //console.log(map)

    for (let index in map) {
        if (map[index] > 1) duplicateAray.push(index);
        //console.log(map[index]);
    }

    return duplicateAray;
}

const arr = [1, 2, 3, 3, 4, 5, 6, 6, 1, 2]
console.log(duplicateFinder(arr))
console.log(duplicateFinder([11, 2, 2, 1]))
