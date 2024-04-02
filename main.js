var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	
	
}

function playSound(){
	
}
function new_image()
{
    fabric.image.fromUrl('BirthdayImage.jpg',function(img){
        block_image_object = Img;
        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:0
        });
        Canvas.add(block_image_object);
    });

}

function playsound(){
    x.play();
}