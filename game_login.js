
function adduser()
{
    name_1 = document.getElementById("Player1").value;
    name_2 = document.getElementById("Player2").value;

    localStorage.setItem("player 1" , name_1);
    localStorage.setItem("player 2" , name_2);

    window.location = "game_page.html";
}