document.getElementById('buttonCitation').addEventListener('click', function () {

    var citationEnCours = document.getElementById('section-citation').getAttribute('data-citation');

    if (citationEnCours == 'citation1') {
        document.getElementById('citation1').style.display = "none";
        document.getElementById('citation2').style.display = "block";
        document.getElementById('section-citation').setAttribute('data-citation', 'citation2');
    } else if (citationEnCours == 'citation2') {
        document.getElementById('citation2').style.display = "none";
        document.getElementById('citation3').style.display = "block";
        document.getElementById('section-citation').setAttribute('data-citation', 'citation3');
    } else if (citationEnCours == 'citation3') {
        document.getElementById('citation3').style.display = "none";
        document.getElementById('citation4').style.display = "block";
        document.getElementById('section-citation').setAttribute('data-citation', 'citation4');
    } else if (citationEnCours == 'citation4') {
        document.getElementById('citation4').style.display = "none";
        document.getElementById('citation5').style.display = "block";
        document.getElementById('section-citation').setAttribute('data-citation', 'citation5');
    } else if (citationEnCours == 'citation5') {
        document.getElementById('citation5').style.display = "none";
        document.getElementById('citation1').style.display = "block";
        document.getElementById('section-citation').setAttribute('data-citation', 'citation1');
    }
});

/* ______________________________________ J'ai essayé promis ! _______________________________ */
// let citation1 = document.getElementById('citation1');
// let citation2 = document.getElementById('citation2');
// let citation3 = document.getElementById('citation3');
// let citation4 = document.getElementById('citation4');
// let citation5 = document.getElementById('citation5');
// // let citations = [citation1, citation2, citation3, citation4, citation5];
// // let random = Math.floor(Math.random() * citations.lenght);
// let buttonCitation = document.getElementById('buttonCitation');

// buttonCitation.addEventListener('click', function(){
//     if (citation1.style.display === "none"){
//         citation1.style.display = "block";
//     }
//     if (citation1.style.display === "block"){
//         citation1.style.display = "none";
//         citation2.style.display = "block";
//     }
//     if (citation2.style.display === "block"){
//         citation2.style.display = "none";
//         citation3.style.display = "block";
//     }
//     if (citation3.style.display === "block"){
//         citation3.style.display = "none";
//         citation4.style.display = "block";
//     }
//     if (citation4.style.display === "block"){
//         citation4.style.display = "none";
//         citation5.style.display = "block";
//     }
//     if (citation5.style.display === "block"){
//         citation5.style.display = "none";
//         citation1.style.display = "block";
//     }

// });