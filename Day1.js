// let value = 3

// let arr = [1, 2, 3, 4, 5, 3]

// arr = arr.filter(item => item !== value)

// console.log(arr)
const registerToVote = (name, unregisteredVoters) => {
    // Code here!
    /*Check if name exists already*/
    unregisteredVoters = unregisteredVoters.filter(item => item !== name);
    return unregisteredVoters;
    // Remember to return a value!
}