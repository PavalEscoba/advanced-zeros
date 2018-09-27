module.exports = function getZerosCount(number, base) {
	//i'm not that smart. Дзякуй суполцы RSS Band за падказку. Артыкул захаваў у рэпазіторыі на ўсялякі выпадак.
  var baseCopy = base;
		var primePows = [];
		var prime = 2;
		var expObj = {};
		var result;
		var resultArray= [];
		while(baseCopy != 1){
			if(baseCopy % prime == 0){
				baseCopy /= prime;
				primePows.push(prime);
				if(expObj.hasOwnProperty(prime)===false){
					expObj[prime] = 0;
				};
				if(expObj.hasOwnProperty(prime)){
					expObj[prime] +=1;
				}
			}
			else{
				prime +=1;
			}
		}
		for (let i = 0; i < primePows.length; i++) {
			let pow = primePows[i];
			let exp = primePows[i];
			let tempResult = 0;
			
			while(number > pow){
				tempResult += Math.floor(number / pow);
				pow *= exp;
			}
			resultArray.push(Math.floor(tempResult / expObj[exp]));			
		}
		var result = Math.min.apply("", resultArray);
		return result;
}