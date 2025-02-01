const url = "https://dog.ceo/api/breeds/image/random";

let img = document.querySelector("#img");
let button = document.querySelector("#Button");

first_photo=false;
button.disabled = true;
const getFacts = async () =>{
    console.log("getting data.....")
     let  promise =await  fetch(url);   // get requests
    console.log(promise); // JASON OBJECT
    console.log(promise.status)
    let data = await promise.json();
    console.log(data.message);
    img.src = data.message;
    first_photo=true;
    if(first_photo){
        button.disabled = false;

    }
}

button.addEventListener("click", getFacts
)

getFacts();

 

