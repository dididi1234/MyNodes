//图片转base64
let file=$("#ipt").get(0).files[0];
let render=new FileReader();
render.readAsDataURL(file);
render.onload=function(){
    console.log(this.result)//base64
}