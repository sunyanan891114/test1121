function calculate_median(arr) {
	var temp = [];
  	arr.filter(function(el, index) {
  	if(index % 2 != 0)
  		temp.push(el);
  	return temp;
  	});
  	console.log(temp);
  	if(temp.length % 2 == 0){
  		console.log((temp[temp.length / 2 ] + temp[temp.length / 2 - 1]) / 2);
  		return (temp[temp.length / 2 ] + temp[temp.length / 2 - 1]) / 2;
  	}
  	else{
  		console.log(temp[(temp.length-1) / 2]);
  		return temp[(temp.length-1) / 2];
  	}

}
