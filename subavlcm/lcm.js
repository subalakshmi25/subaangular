let val1 =4, val2 =8; 
function gcd(val1,val2) 
	{ 
    if (val1 == 0)
    return val2;
    return gcd(val2 % val1,val1); 
	} 	
	function lcm(val1,val2) 
	{ 
		return (val1*val2)/gcd(val1, val2); 
	} 
	console.log("the lcm of two number is = "+lcm(val1,val2));
