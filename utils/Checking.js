/*
@正则验证手机号、身份证、姓名
*/
export function regUser(user){
	let reg =  /^[\u4e00-\u9fa5]{2,6}$/;
	if(reg.test(user)){
		return true;
	}
	return false;
}
/*手机号*/
export function regTel(tel){
	if(typeof tel !='number'){
		tel = Number(tel)
	}
	let reg =  /^[1][3,4,5,6,7,8][0-9]{9}$/;
	if(reg.test(tel)){
		return true;
	}
	return false;
}
/*
身份证
*/
export function regIdCard(idNum){
	let reg =  /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9X]$/;
	let reg2 =  /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/;
	if(reg.test(idNum)||reg2.test(idNum)){
		return true;
	}
	return false;
}
//获取?后参数
function getQueryString(name) {  
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
	var r = window.location.search.substr(1).match(reg);  
	if (r != null) return unescape(r[2]);  
	return null;  
} 