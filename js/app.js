//execute search plugin

// $(document).ready(function() {
//   $("#search").hideseek({
//     attribute: "data-title"
//   });
// });


let input = document.getElementById('search');
let search;
let image = document.querySelectorAll('a[data-title]');
let caption;
                // let match = document.querySelectorAll('li a');
                // match= match.getAttribute('data-title');

                // let li = document.querySelector("li");
                // let matches = li.querySelectorAll("a[data-title]");

    input.addEventListener('keyup', function(event){

      search = input.value.toLowerCase();
      caption = image.getAttribute("data-title");

      for (let i = 0; i < caption.length; i++ ){
        if (caption[i].getAttribute("data-title").toLowerCase().includes(search)){
          console.log(caption[i]);
        //   caption[i].style.display='';
        // } else {
        //   caption[i].style.display = 'hidden';
        }
      }
    });














  //declare variables
//   const input = document.getElementById('search');
//   const filter = input.value.toUpperCase();
//   const ul = document.getElementById("myUL");
//   const li = ul.getElementsByTagName ('li');
//
// function searchImages () {
//  // Loop through all list items, and hide those who don't match the search query
//   for (i = 0; i < li.length; i++) {
//       let a = li [i] .getElementsByTagName("a")[0];
//     if (a.innerHTML.toUpperCase().indexOf(filter) > -1){
//       li[i].style.display = "";
//     } else{
//         li[i].style.display = "none";
//       }
//     }
//     search.addEventListener(click, searchImages, )




//
// let input = document.getElementById('search');
//
//   input.addEventListener('keyup', (event) => {
//     input.value = input.value.toLowerCase();
//
//      let a = document.querySelectorAll('a');
//       let cap = a.getAttribute("data-title");
//     for (let i = 0; i < a.length; i++ ){
//        // if (input.value.toLowerCase().includes("data-title") == true){
//          if(cap[i].toLowerCase().includes(input) > -1){
//            cap[i].style.display = '';
//       } else {
//         cap[i].style.display='hidden';
//       };
//     };
// });
// //



// $('#input').keyup(function(){

    // let userSearch = $('#input').val();
    // userSearch = userSearch.toLowerCase();

    // let match = document.querySelectorAll('a[data-title]');

    // for (i = 0; i < match.length; i++) {

    // if (match[i].getAttribute('data-title').toLowerCase().includes(userSearch)) {
//     match[i].style.display='inline';
//     } else {
//     match[i].style.display='none';
//     }
//   }
// });
