
console.log('travelFunction app start');
let db = {
    destenations: null,
    travels: null
}

// try {
    let destenation = [
    {code:1,name:"Amrica",price:900 },
    {code:2,name:"England",price:800 },
    {code:3,name:"Germania",price:700 },
    {code:4,name:"Australia",price:600 },
    {code:5,name:"France",price:500 },
    {code:6,name:"Spain",price:400 },
]
let tdest = document.querySelector('.table-destenations tbody')
let destTemplate = '<tr><td>#CODE</td><td>#NANE</td><td>#PRICE</td></tr>'
let destrRowsHtml = ''
destenation.forEach(destItem =>{
    destrRowsHtml += destTemplate
    .replace('#CODE', destItem.code)
    .replace('#NANE', destItem.name)
    .replace('#PRICE', destItem.price)
})
tdest.innerHTML = destrRowsHtml;
db.destenations = destenation;




// } catch (error) {
//     console.error('travelFunction app error',error);
// }
let b = 1;
let c = 1;
function order(){
  
    let orders = [
     {code:b++,name:"",id:"",tid:"",passengers:"",total:""},
 ]
 let aa = destenation.find(x =>{
     return x.code == document.getElementById('input-Destination').value
 })
 
 let torderrs = document.querySelector('.table-orders tbody')
let oTemp = `<tr>
<td>#code</td>
<td>#name</td>
<td>#id</td>
<td>#tid</td>
<td>#passengers</td>
<td>#total</td></tr>`
let oHml = ''
orders.forEach(Item =>{
    oHml += oTemp
    .replace('#code',Item.code)
    .replace('#name', document.getElementById('input-name').value)
    .replace('#id',document.getElementById('input-ID').value*1)
    .replace('#tid', aa.name)
    .replace('#passengers', document.getElementById('input-Passengers').value)
    .replace('#total', document.getElementById('input-Passengers').value* aa.price)
})
torderrs.innerHTML += oHml;
}
function searchname(){
    let orderss = [
        {code:c++,name:"",id:"",tid:"",passengers:"",total:""},
    ]
  

 let zz = orderss.filter(y =>{
        return y.name ==  document.getElementById('input-YourName').value;
    })
    let oorder = document.querySelector('.serchnameorder tbody')
   let orserTemplate =  `<tr>
   <td>#code</td>
   <td>#name</td>
   <td>#id</td>
   <td>#tid</td>
   <td>#passengers</td>
   <td>#total</td></tr>`
   let tsearch = ''
   orderss.forEach(Item =>{
   tsearch += orserTemplate 
   .replace('#code',Item.code)
   .replace('#name', document.getElementById('input-name').value)
   .replace('#id',document.getElementById('input-ID').value*1)
   .replace('#tid', zz.name)
   .replace('#passengers', document.getElementById('input-Passengers').value)
   .replace('#total', document.getElementById('input-Passengers').value* zz.total)
   })
    
    oorder.innerHTML += tsearch
}
function selectorder(){
    let selectop = document.getElementById('selectnew');
    let op = order().orders.filter(element => {
        return element.destenation == selectop;
    });
    let ordderss = [
        {code:c++,name:"",id:"",tid:"",passengers:"",total:""},
    ]
  

 let zz = ordderss.filter(y =>{
        return y.name ==  document.getElementById('input-YourName').value;
    })
    let oorder = document.querySelector('.serchnameorder tbody')
   let orserTemplate =  `<tr>
   <td>#code</td>
   <td>#name</td>
   <td>#id</td>
   <td>#tid</td>
   <td>#passengers</td>
   <td>#total</td></tr>`
   let tsearch = ''
   ordderss.forEach(Item =>{
   tsearch += orserTemplate 
   .replace('#code',Item.code)
   .replace('#name', document.getElementById('input-name').value)
   .replace('#id',document.getElementById('input-ID').value*1)
   .replace('#tid', Item.name)
   .replace('#passengers', document.getElementById('input-Passengers').value)
   .replace('#total', document.getElementById('input-Passengers').value* Item.total)
   })
    
   oorder.innerHTML += tsearch;
console.log(selectop);
console.log(op);

 
    
}
