function isPangram(string){
    var array = string.toLowerCase().split('');
    var testArray = [];
    for (var n in array) {
        if (array[n].search(/[a-z]/g) !== -1 && !testArray.includes(array[n])){
        	testArray.push(array[n]);
        };
    };
    return (testArray.length === 26) ? true : false;}
