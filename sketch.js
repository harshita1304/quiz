var canva;

function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database();
}


function draw(){
  background("pink");
  form=new Form()
  form.display();

  
}
