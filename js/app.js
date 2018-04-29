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
                

    input.addEventListener('keyup', function(event){

      search = input.value.toLowerCase();


      for (let i = 0; i < image.length; i++ ){
        caption = image[i].getAttribute("data-title");
        if (caption.toLowerCase().includes(search)){
          // console.log(caption);
          image[i].style.display='';
        } else {
          image[i].style.display = 'none';
        }
      }
    });
