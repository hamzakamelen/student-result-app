

var Student1 = {
    Name: "Hamza Kamelen",
    FatherName: "Muhammad Kamelen",
    ContactNo: "03112474407",
    rollno: 1,
    Result: "A+"
}
var Student2 = {
    Name: "Saad Ahmed",
    FatherName: "Saleem Ahmed",
    ContactNo: "03112472207",
    rollno: 2,
    Result: "A"
}
var Student3 = {
    Name: "Asad Naseem",
    FatherName: "Muhammad Naseem",
    ContactNo: "03112474407",
    rollno: 3,
    Result: "B"
}
var Student4 = {
    Name: "Hamza Nazir",
    FatherName: "Nazir Ahmed",
    ContactNo: "03112474407",
    rollno: 4,
    Result: "A"
}
var Student5 = {
    Name: "Faiz Ahmed",
    FatherName: "Muhammad Ahmed",
    ContactNo: "03112474407",
    rollno: 5,
    Result: "B"
}
var Student6 = {
    Name: "Ibaad Saleem",
    FatherName: "Saleem Ahmed",
    ContactNo: "03112474407",
    rollno: 6,
    Result: "C"
}
var Student7 = {
    Name: "Usman",
    FatherName: "Muhammad Raza",
    ContactNo: "03112474407",
    rollno: 7,
    Result: "Fail"
}
var Student8 = {
    Name: "Shahid Ahmed",
    FatherName: "Muhammad Ahmed",
    ContactNo: "03112474407",
    rollno: 8,
    Result: "B"
}
var Student9 = {
    Name: "Anwer Soomro",
    FatherName: "Muhammad Hamza",
    ContactNo: "03112474407",
    rollno: 9,
    Result: "A+"
}
var Student10 = {
    Name: "Faizan Ahmed",
    FatherName: "Muhammad Farooq",
    ContactNo: "03112474407",
    rollno: 10,
    Result: "D"
}
var AllClass = [Student1, Student2, Student3, Student4, Student5, Student6, Student7, Student8, Student9, Student10];


var show_name = document.getElementById("show-name");
var parent = document.getElementById("parent");

var input = document.getElementById("inputs");
for (var i = 0; i < AllClass.length; i++){
    show_name.innerHTML += `
    <tr>
        <td>${AllClass[i].Name}</td>
        <td>${AllClass[i].FatherName}</td>
        <td>${AllClass[i].ContactNo}</td>
        <td class="roll">${AllClass[i].rollno}</td>
        </tr>
    `
}
function search() {
    parent.style.display = 'none'
    for (var i = 0; i < AllClass.length; i++) {
    if (input.value == AllClass[i].rollno) {
        show_name.innerHTML = `
        <tr>
        <th>Name</th>
        <th  >Result</th>
        <th>Roll Number</th>
    </tr>
    <tr>   
    <td>${AllClass[i].Name}</td>
    <td class="res">${AllClass[i].Result}</td>
       <td class="roll">${AllClass[i].rollno}</td>
       </tr>
       `
       if(AllClass[i].Result =="Fail"){
        Result.style.color = "Red"
       }
    }
}
    }
    // function back() {
    //     box.style.display = "none";
    //     container.style.display = "block";
    //     container.style.display = "flex";
    //     container.style.justifyContent = "center";
    // }
    // for( i=0 ; i < AllClass.length ; i++){
            
        //     parent.innerHTML += `<table>
//     <tbody >
//     <tr>
//     <td>${AllClass[i].Name}</td>
//     <td>${AllClass[i].FatherName}</td>
//     <td>${AllClass[i].ContactNo}</td>
//     <td>${AllClass[i].FatherNo}</td>
//     </tr>
//     </tbody>
//     </table>`
// }


// box.innerHTML = `
// <div class="get_values">
//             <i id="font" onclick="back()" class="fa-solid fa-arrow-left"></i>
//             <h2>Your Data</h2>
//             <p><span>First Name :</span> ${AllClass[i].Name}</p>
//             <p><span>Last Name :</span> ${AllClass[i].Result}</p>
//             <p><span class="phone">Phone :</span> ${AllClass[i].rollno}</p>
//         </div>
// var Hamza = {
//     Name: "Hamza Kamelen",
//     FatherName: "Muhammad Kamelen",
//     ContactNo : "03112474407",
//     FatherNo: "03178557000"
// }
// var Hamza_Kamelen = {
//     Name: "Hamza ",
//     FatherName: "Muhammad Kamelen",
//     ContactNo : "03112474407",
//     FatherNo: "03178557000"
// }
// // Hamza.Name = "Hamzaaaaa"
// // delete Hamza_Kamelen.ContactNo
// // console.log(Hamza_Kamelen)

// var AllClass = {Hamza, Hamza_Kamelen  }
// console.log(AllClass)

// TASK 
// `








/* <tr>
<td>${AllClass[1].Name}</td>
<td>${AllClass[1].FatherName}</td>
<td>${AllClass[1].ContactNo}</td>
<td>${AllClass[1].FatherNo}</td>
</tr>
<tr>
<td>${AllClass[2].Name}</td>
<td>${AllClass[2].FatherName}</td>
<td>${AllClass[2].ContactNo}</td>
<td>${AllClass[2].FatherNo}</td>
</tr>
<tr>
<td>${AllClass[3].Name}</td>
<td>${AllClass[3].FatherName}</td>
<td>${AllClass[3].ContactNo}</td>
<td>${AllClass[3].FatherNo}</td>
</tr>
<tr>
<td>${AllClass[4].Name}</td>
<td>${AllClass[4].FatherName}</td>
<td>${AllClass[4].ContactNo}</td>
<td>${AllClass[4].FatherNo}</td>
</tr>
<tr>
<td>${AllClass[5].Name}</td>
<td>${AllClass[5].FatherName}</td>
<td>${AllClass[5].ContactNo}</td>
<td>${AllClass[5].FatherNo}</td>
</tr>
<tr>
<td>${AllClass[6].Name}</td>
<td>${AllClass[6].FatherName}</td>
<td>${AllClass[6].ContactNo}</td>
<td>${AllClass[6].FatherNo}</td>
</tr>
<tr>
<td>${AllClass[7].Name}</td>
<td>${AllClass[7].FatherName}</td>
<td>${AllClass[7].ContactNo}</td>
<td>${AllClass[7].FatherNo}</td>
</tr>
<tr>
<td>${AllClass[8].Name}</td>
<td>${AllClass[8].FatherName}</td>
<td>${AllClass[8].ContactNo}</td>
<td>${AllClass[8].FatherNo}</td>
</tr>
<tr>
<td>${AllClass[9].Name}</td>
<td>${AllClass[9].FatherName}</td>
<td>${AllClass[9].ContactNo}</td>
<td>${AllClass[9].FatherNo}</td>
// </tr> */