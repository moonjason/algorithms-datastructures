// function reverse which accepts a string and returns a new string in reverse

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

const reverse = (str) => {
    let result = '';
    if(str.length === 0) return result;

    result = result.concat(str[str.length - 1])

    return result.concat(reverse(str.slice(0, str.length - 1)));
}

console.log(reverse('awesome'))