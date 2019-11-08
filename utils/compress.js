//引入之前先引exif.js
function compress(img, width, height, ratio) {
    var canvas, ctx, img64;     
    canvas = document.createElement('canvas');        
    canvas.width = width;
    canvas.height = height;
          
    ctx = canvas.getContext("2d");
    EXIF.getData(img, function() {
      var Orientation = EXIF.getTag(this, 'Orientation');
    
      if(Orientation && Orientation != 1){//图片角度不正确
        //ctx.translate(canvas.width , 0)
        canvas.width = height;
        canvas.height = width;
        switch(Orientation){
          case 6://旋转90度
          ctx.rotate(Math.PI / 2); 
          ctx.drawImage(img, 0, -height, width,height); 
          break;
          case 3://旋转180
          canvas.width = width;
          canvas.height = height;
          ctx.rotate(Math.PI);
          ctx.drawImage(img, -width, -height, width,height); 
          break;
          case 8://旋转-90
          canvas.width = width;
          canvas.height = height;
          ctx.rotate(3 * Math.PI / 2);
          ctx.drawImage(img, -width, 0, width,height); 
          break
        }
      }else{
        ctx.drawImage(img, 0, 0, width, height);
      }
  }) 
  
    
          
    img64 = canvas.toDataURL("image/jpeg", ratio);
          
    return img64;
  }
