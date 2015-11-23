function single_element(arr) {
    var result = [];
    var temp= [];
    for(var i = 0 ; i < arr.length; i++){
        if(i % 2 != 0)
            temp.push(arr[i]);
    }
    temp.forEach(function (el, index) {
        if(  temp.indexOf(el,index + 1) == -1 && temp.lastIndexOf(el,index-1) == -1){
                result.push(el);
        }
    });
    console.log(result);
    return result;
}
