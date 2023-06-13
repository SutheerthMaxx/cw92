name_1 = localStorage.getItem("player 1");
name_2 = localStorage.getItem("player 2");

pscore1 = 0;
pscore2 = 0;

document.getElementById("player1_name").innerHTML =  name_1 + " : ";
document.getElementById("player2_name").innerHTML =  name_2 + " : ";

document.getElementById("Qturn").innerHTML = "Question turn : " +  name_1;
document.getElementById("Aturn").innerHTML =  "Answer turn : " +   name_2;

document.getElementById("score1").innerHTML = pscore1;
document.getElementById("score2").innerHTML = pscore2;

function send()
{
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word");
    
    charAt1 = word.charAt(1);
    console.log(charAt1);

     divide = Math.floor(word.length / 2);
     charAt2 = word.charAt(divide);
     console.log(charAt2);

     minus = word.length - 1;
     charAt3 = word.charAt(minus);
     console.log(charAt3);

     remove1 = word.replace(charAt1 , "_");
     remove2 = remove1.replace(charAt2 , "_");
     remove3 = remove2.replace(charAt3 , "_");
     console.log(remove3);

     question = "<h4 id ='word_display'> Q. " + remove3 + "</h4>";
     Answer = "<br> Answer : <input id = 'box' type = 'text'>";
     check = "<br><br> <button class = 'btn btn-info' onclick = 'check()'> check </button>";

     row = question + Answer + check;
     document.getElementById("output").innerHTML = row;
     document.getElementById("word").value = "";
}


questionT = "player1";
AnswerT = "player2";

function check()
{
    getvalue = document.getElementById("box").value;
    answer = getvalue.toLowerCase();
    console.log(answer); 

    if ( answer == word)
    {
        if (AnswerT == "player1") {
            pscore1 = pscore1 + 1;
            document.getElementById("score1").innerHTML = pscore1; 
        } else {
            pscore2 = pscore2 + 1;
            document.getElementById("score2").innerHTML = pscore2;  
        }
    }

    if (questionT == "player1") {
        questionT = "player2";
        document.getElementById("Qturn").innerHTML = "Question turn : " + name_2;
    }
    else
    {
        questionT = "player1";
        document.getElementById("Qturn").innerHTML = "Question turn : " + name_1;
    }

    if (AnswerT == "player1") {
        AnswerT = "player2";
        document.getElementById("Aturn").innerHTML = "Answer turn : " + name_2;
    }
    else
    {
        AnswerT = "player1";
        document.getElementById("Aturn").innerHTML = "Answer turn : " + name_1;
    }

    document.getElementById("output").innerHTML = "";
}