var database;
var ref;
var input,button,button2;
var score = 0;
var score_count;
function setup(){
    createCanvas(windowWidth-100,windowHeight-100);
    database = firebase.database();
    console.log(firebase);
    input = createInput('');
    input.position(windowWidth/2,windowHeight/2);
    button = createButton('Press me to log on');
    button.position(870,329);
    button.mousePressed(UpdateThis);
    ref = database.ref('Score');
    ref.on('value',gotData,errData);
   //if ( input.value() === ref(Name/name) === "You are admin then it will be me"){
    //   console.log("that is already there");
 //  }
  score_count = createElement('h2');
 
  score_count.position(755,200);
    button2 = createButton('increase Score');
    button2.position(570,329);
    button2.mousePressed(UpdateClicks);
}
function UpdateThis(){
   
    var data = {
        name: input.value(),
        score: score
    }
    ref.push(data);

}
function UpdateClicks(){
    score = score+1;
}
function gotData(data){
    console.log(data.val());
}
function errData(err){
    console.log("error");
    console.log(err);
}
function draw(){
    background("white");
    score_count.html(score);
}