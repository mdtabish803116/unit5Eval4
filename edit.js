let titleId = JSON.parse(localStorage.getItem("titleId"));
let title = document.getElementById("inputTitle");
let checkBox = document.getElementById("checkBox");
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click" ,async function(){
     try {  
    let res = await fetch(`http://localhost:3000/tasks/${titleId}` , {
        method : "PUT",
        body : JSON.stringify({
            title : title.value,
            status : checkBox.checked,
        }),
        headers : {
            "content-type" : "application/json"
        }
    });

    alert("Edited Succesfully");

     }catch(error){
           console.log(error);
     }

})


document.getElementById("editedPage").addEventListener("click", function(){
    window.location.href = "./index.html";
})