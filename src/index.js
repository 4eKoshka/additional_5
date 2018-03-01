module.exports = function check(str, bracketsConfig) {
  var a='(';
  var b='[';
  var c='{';
  var a1=')';
  var b1=']';
  var c1='}';
  var con1 = true;
  var con2 = true;
  
  var arr=[];
  var arrh=[];
  var arr1=[];
  var arrh1=[];
  
  var str,stb;
  
  var k=0;
  var l=0;
  
  	for (var i=0; i < str.length; i++){
		if (str.charAt(i) === a ||	str.charAt(i) === b || str.charAt(i) === c) arr.push(str.charAt(i));  
		
		if (str.charAt(i) === a1 && arr[arr.length-1]=== a) arr.pop(); 
		if (str.charAt(i) === b1 && arr[arr.length-1]=== b) arr.pop(); 
		if (str.charAt(i) === c1 && arr[arr.length-1]=== c) arr.pop(); 
		
		
	}
	
	
	
	if ( arr.length === 0) con1 = true;
	else con1 = false;
	
	
	
	for (var i=0; i< bracketsConfig.length; i++){
	  
		arr1 = arr1.concat(bracketsConfig[i]);
		
	}
	stb = arr1.join("");
	arr1=[];
	
	
	for (i=0; i < stb.length; i++){
		if (stb.charAt(i) === a ||	stb.charAt(i) === b || stb.charAt(i) === c)	arr1.push(stb.charAt(i));  
		
		if (stb.charAt(i) === a1 && arr1[arr1.length-1]=== a) arr1.pop(); 
		if (stb.charAt(i) === b1 && arr1[arr1.length-1]=== b) arr1.pop(); 
		if (stb.charAt(i) === c1 && arr1[arr1.length-1]=== c) arr1.pop(); 
		
		
	}
	
	if ( arr1.length === 0) con2 = true;
	else con2 = false;
	
	
	
	if(con1 == con2) return true;
	else return false;
		
}
	

