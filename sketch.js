var Img,Img1,Img2,Img3,Img4,Img5,BgImg;

function preload()
{
	Img=loadImage("Rajanyya.png")
  Img1=loadImage("Ritoja.png")
  Img2=loadImage("Anvita.png")
  Img3=loadImage("Maanvi.png")
  Img4=loadImage("Diya.png")
  BgImg=loadImage("Bg.jpg")
  
}

function setup() {
  createCanvas(3000,700)
  background(BgImg);
	var Rajanyya=createSprite(250,350,50,100)
Rajanyya.addImage(Img)
Rajanyya.scale=0.25


var Ritoja=createSprite(750,350,50,100)
Ritoja.addImage(Img1)
Ritoja.scale=0.25


var Anvita=createSprite(1250,350,50,100)
Anvita.addImage(Img2)
Anvita.scale=0.25


var Maanvi=createSprite(1750,350,50,100)
Maanvi.addImage(Img3)
Maanvi.scale=0.25


var Diya=createSprite(2250,350,50,100)
Diya.addImage(Img4)
Diya.scale=0.25


fill("blue");
textSize(10)
text("https://jamboard.google.com/d/1IbzL8CFtXjPHkgkVLdnVFOsSrOai5Qv3xdCh7CE5Azo/viewer?f=1",2500,350)
}


function draw() {
drawSprites();
}