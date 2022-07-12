// rotate word

function rotate() {

    let word = document.getElementById("word");

    let circle = word.textContent.split("");
    word.textContent = "";
    
    for(var i = 0; i < circle.length; i++){
        word.innerHTML += "<span style='transform:rotate(" + (i*8) +"deg)'>"+ circle[i] +"</span>";
    }

}

rotate();



// layout rose

function rose(){

    document.body.style.backgroundImage = "url('/images/roses_bg.jpg')";

    let feelings = document.getElementById("feelings");
    feelings.style.color = "#E3170A";

    let word = document.getElementById("word");
    word.textContent = "Love";
    word.style.color = "#E3170A";

    rotate();

    let flowers = document.getElementById("flowers");
    flowers.style.backgroundImage = "url('/images/roses.jpg')";

    let flowersBg = document.getElementById("flowersBg");
    flowersBg.style.backgroundImage = "url('/images/roses_bg.jpg')";

}

// layout lily

function lily(){

    document.body.style.backgroundImage = "url('/images/lily_bg.jpg')";

    let feelings = document.getElementById("feelings");
    feelings.style.color = "#FFD447";

    let word = document.getElementById("word");
    word.textContent = "Happy";
    word.style.color = "#FFD447";

    rotate();

    let flowers = document.getElementById("flowers");
    flowers.style.backgroundImage = "url('/images/lily.jpg')";

    let flowersBg = document.getElementById("flowersBg");
    flowersBg.style.backgroundImage = "url('/images/lily_bg.jpg')";

}

// layout iris

function iris(){

    document.body.style.backgroundImage = "url('/images/iris_bg.jpg')";

    let feelings = document.getElementById("feelings");
    feelings.style.color = "#A882DD";

    let word = document.getElementById("word");
    word.textContent = "Hope";
    word.style.color = "#A882DD";

    rotate();

    let flowers = document.getElementById("flowers");
    flowers.style.backgroundImage = "url('/images/iris.jpg')";

    let flowersBg = document.getElementById("flowersBg");
    flowersBg.style.backgroundImage = "url('/images/iris_bg.jpg')";

}

// layout begonia

function begonia(){

    document.body.style.backgroundImage = "url('/images/begonia_bg.jpg')";

    let feelings = document.getElementById("feelings");
    feelings.style.color = "#e94f37";

    let word = document.getElementById("word");
    word.textContent = "Beware";
    word.style.color = "#e94f37";

    rotate();

    let flowers = document.getElementById("flowers");
    flowers.style.backgroundImage = "url('/images/begonia.jpg')";

    let flowersBg = document.getElementById("flowersBg");
    flowersBg.style.backgroundImage = "url('/images/begonia_bg.jpg')";

}

// toggle menu < 992px

function toggleMenu() {

    var menuToggle = document.querySelector(".toggle");
    var navigation = document.querySelector(".navigation")
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
}