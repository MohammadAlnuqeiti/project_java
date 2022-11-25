
//-----------------------------------------------------------
let users =JSON.parse(localStorage.getItem("users"))

users.map(ele => {
    document.getElementById(`name`).innerHTML=ele.name
    document.getElementById(`email`).innerHTML=ele.mail

})

//------------------------------------------------------------
let arr = JSON.parse(localStorage.getItem('array')) 

   let array = arr || [
    // {
    // 'orderImage'  : "./aptizerFood.jpg",
    // 'customerName': "ahmed",
    // 'foodType':"desert",
    // 'payment':8  
    // }
]
console.log(array);
console.log(arr);
// ___________________________________

// _______________________________________
// function addData(){


// }

let btn=document.querySelector("#saveData")
btn.addEventListener("click", save)
let name = document.getElementById("inputName").value

function save(event){

let name = document.getElementById('inputName').value
let select = document.getElementById(`select`).value
console.log(name)
    if(select==="dessert"){
        a="desseret"
        // b=name
        x="./dessertFood.jpg";
        z=7
    }
    if(select==="mainCo"){
        a="mainCo"
        // b=name
        x="./seaFood.jpg";
        z=18
    }
    if(select==="aptizer"){
        a="aptizer"
        // b=name
        x="./aptizerFood.jpg";
        z=10
    }
    let obj ={
    
       'orderImage'  : x,
        'customerName': name,
        'foodType':a,
        'payment':z
    }
    console.log(arr)
    array.push(obj)
    console.log(array)
    console.log(obj)
localStorage.setItem("array",JSON.stringify(array))

printData()
     event.preventDefault()
}

function printData(){

let table1 = '<table border=2>';
    table1 += '<tr><th>order image</th><th>customer name</th><th>food type</th><th>payment</th></tr>';
    array.map( ele => {
        var image = ele.orderImage;
        var namee = ele.customerName;
        var foodType = ele.foodType;
        var payment = ele.payment;
 
        table1 = table1 + '<tr>',
        table1 = table1 + '<td>'+ `<img src=${image} style="width:150px ;">` + '</td>',
        table1 = table1 + '<td>' + `${namee}` + '</td>',
        table1 = table1 + '<td>' + `${foodType}` + '</td>'
        table1 = table1 + '<td>'  + `${payment}` + '</td>'
     });  
     table1 += "</table>"

     
     document.getElementById("list").innerHTML = table1;


}
//----------------------------------------------
let btnRemove=document.getElementById(`remove`)
btnRemove.addEventListener(`click`,removetable)

function removetable(){
    // localStorage.clear()

    document.getElementById("list").innerHTML = "";
    // document.getElementById("list").style.visibility = `hidden`
console.log(array)

}
// //----------------------------------------------
let removeLocal=document.getElementById(`delete`)
removeLocal.addEventListener(`click`,deleteLocal)

function deleteLocal(){
    localStorage.removeItem('array')
    document.getElementById("list").innerHTML = "";


    // document.getElementById("list").innerHTML = "";
    // document.getElementById("list").style.visibility = `hidden`


}
//----------------------------------------------
// let btnRemove=document.getElementById(`remove`)
// btnRemove.addEventListener(`click`,removetable)

// function removetable(){
//     // localStorage.clear()

//     document.getElementById("list").innerHTML = "";
//     // document.getElementById("list").style.visibility = `hidden`


// }