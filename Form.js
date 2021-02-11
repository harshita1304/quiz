class Form{
    constructor(){
        this.input=createInput("name");
        this.button=createButton('submit');
        this.greeting=createElement('h3');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title=createElement('h2');
        title.html("My Quiz Game");
        title.position(130,0);
        var subtext=createElement('h3');
        subtext.html("Question:What starts and ends with an 'e'?");
        subtext.position(130,100);
        var mcq1=createElement("h4");
        mcq1.html("1)everyone");
        mcq1.position(130,125);
        var mcq2=createElement("h4");
        mcq2.html("2)everything");
        mcq2.position(130,140);
        var mcq3=createElement("h4");
        mcq3.html("3)estimate");
        mcq3.position(130,160);
        var mcq4=createElement("h4");
        mcq4.html("4)example");
        mcq4.position(130,180);
        
        this.input.position(130,270);
        this.button.position(130,300);
        this.button.mousePressed(function(){
            this.input.hide();
            this.button.hide();

            player.name=this.input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            
            this.greeting.html("hello"+player.name);
            this.greeting.position(130,250);
        })
    }
}