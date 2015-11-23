function even_group_calculate_average(arr) {
    var result = [];
    var number = [];
    for(var i = 0; i < arr.length; i++){
        if(i % 2 != 0 && arr[i] % 2 == 0){
            var n = arr[i].toString().length;
            if(result[n] == undefined){
                result[n] = 0;
                number[n] = 0;
            }
            result[n] += arr[i];
            number[n]++;
        }
    }
    for(var i = 0;i < result.length; i++){
        if(result[i] != undefined)
            result[i] = result[i] / number[i];
        else{
            result.splice(i+1,1);
            i--;
        }
    }
    console.log("hello");
    console.log(result);
    return result;

}
