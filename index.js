//---->let
/*let a=10;
console.log(a);

if(true){
    let b =5;//let chỉ có ý nghĩa khi nó ở trong {} của nó
}
//console.log('b = '+b);//lỗi*/


//---->arrow function
/*let mang=[4, 3, 7, 5, 1];
//mang.forEach(e => console.log(e)); //arrow function

var mang2 =mang.map(e=> e*2);

console.log(mang2);


// function add(a,b){
//     return a+b;
// }

let add= (a,b) => a+b;
console.log(add(4,5));*/


let getFunction= (num)=>{
    if(num>=0){
        return ()=>console.log("So duong");
    }
    else{
        return ()=>console.log("So am");
    }
}
getFunction(1)(); //thêm () để thực thi func trong func


//let a=()=>{}
//console.log(a()); //undefined