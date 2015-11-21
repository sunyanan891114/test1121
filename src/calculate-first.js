function single_element(arr) {
	var map = {};
	var temp = [];
  arr.filter(function(el, index) {
  	if(index % 2 != 0)
  		temp.push(el);
  	return temp;
  });
  console.log(temp);
  var result = [];
  var i = 0;
  
  var j = 0;
  for(j = 0; j < temp.length; j++){
  	var el = temp[j];
  	var flag = false;
  	for(i = 0;i < temp.length && i != j;i++){
  		if( temp[i] == el ){ 			
  			flag = true;
  			break;
  		}
  	}
  	if(!flag)
  		result.push(el);
  }
  return result;
}
