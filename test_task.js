function red(arr) {
        arr = arr.map (x => typeof(x) == 'string' ? x.toLowerCase() : x);
        for (let j = 0; j < arr.length; j++ ){
          if(((arr.filter(x => x === arr[j]).length) % 2 ? false: true) == true){
                console.log(arr)
            return true;
              break;
          }
        }
    return false;

}
console.log(red([3,2,'two','apple',"AppLE"]));
console.log(red([3,'3',2,'two','apple',"apple","apple"]));
