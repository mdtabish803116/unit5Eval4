let title = document.getElementById("inputTitle");
let checkBox = document.getElementById("checkBox");
let addBtn = document.getElementById("addBtn");


addBtn.addEventListener("click", postData)

async function postData(){
       try { 
       let res = await fetch("http://localhost:3000/tasks" , {
           method : "POST",
           body : JSON.stringify({
               title : title.value,
               status : checkBox.checked  
           }),
           headers : {
               "content-Type" : "application/json"
           }
        
       });

        displayData();
       }catch(err){
           console.log(error);
       }
}

async function getData(url){
     try {  
    let res = await fetch(url);
    let data = await res.json();
    return data;

     }catch(error){
         console.log(error);
     }
}



function updateDom(data){
    document.getElementById("appendBox").innerHTML = "";
    data.forEach((each) => {
        let box = document.createElement("div");
         let title = document.createElement("div");
         title.textContent = each.title;
         if(each.status){
             title.style.color = "green";
         }else {
            title.style.color = "red";
         }
         let deleteBtn = document.createElement("button");
         deleteBtn.textContent = "Delete";
         deleteBtn.style.cursor = "pointer";
         let editBtn = document.createElement("Edit");
         editBtn.textContent = "Edit";
         editBtn.style.cursor = "pointer";
         box.append(title, deleteBtn , editBtn);
         document.getElementById("appendBox").append(box);
    })
}

async function displayData(){
    let titleData = await getData("http://localhost:3000/tasks");
    // let filteredData = titleData.filter(function(ele){
    //       return ele.status;
    // })

    updateDom(titleData);
}

displayData();





