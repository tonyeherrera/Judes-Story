


document.getElementById("begin").addEventListener("click",function begin(){
    document.getElementById("mainText").innerText = "Once upon a time there was a boy, and he walked up to a haunted house. He saw the front door.";
    document.getElementById("begin").outerHTML  = '<button id="openFrontDoor">Open the door?</button>';
    document.getElementById("openFrontDoor").addEventListener("click", function openFrontDoor(){
        document.getElementById("mainText").innerText = 'The door opens and goes "EEEEEEEEEEECK!" There is another door!';
        document.getElementById("openFrontDoor").outerHTML  = '<button id="openOtherDoor">Open the other door?</button>';
        document.getElementById("openOtherDoor").addEventListener("click", function openOtherDoor(){
            document.getElementById("mainText").innerText = 'The other door opens and goes "EEEEEEEEEEEeeeeeeeeeeCK!" He sees a closet!';
            document.getElementById("openOtherDoor").outerHTML  = '<button id="openCloset">Open the closet?</button>';
            document.getElementById("openCloset").addEventListener("click", function openCloset(){
                document.getElementById("mainText").innerText = 'The closet door opens and goes "EEEeeeeeeEEEEEEeeeeeeeEECccckkkkkKKk!" He sees a box!';
                document.getElementById("openCloset").outerHTML  = '<button id="openBox">Open the box?</button>';
                document.getElementById("openBox").addEventListener("click", function openBox(){
                    document.getElementById("mainText").innerText = 'Theres nothing in the box. He sees another box!    ';
                    document.getElementById("openBox").outerHTML  = '<button id="openOtherBox">Open the other box?</button>';
                    document.getElementById("openOtherBox").addEventListener("click", function openOtherBox(){
                        document.getElementById("mainText").innerText = "There's a jelly bean!!! =)";
                        document.getElementById("openOtherBox").outerHTML  = '<button id="return">Return to the Begining</button>';
                        document.getElementById("return").addEventListener("click",function returnToBegining(){
                          location.reload();
                            });
                    
                    }); 
                    
                });
                
            });
            
        });
    
    });


})
