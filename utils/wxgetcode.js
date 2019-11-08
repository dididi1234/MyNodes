const appid="wxffedcd45bc20038b";
const baseUrl=""
let str=window.location.href;
if(str.indexOf("?")==-1){
    let redirect_uri=encodeURIComponent(str)	
    window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+appid+"&redirect_uri="+redirect_uri+"&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect"
  
    }else{
        let Url=window.location.href
        let Urlarr=Url.split("?")
        let code=Urlarr[1].split("=")[1].split('&')[0]
        console.log(code)//传入后台
    }