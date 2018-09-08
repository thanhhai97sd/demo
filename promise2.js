let fs=require('fs');

let add=(a,b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof a!='number'||typeof b!='number'){
                return reject(new Error('Tham số phải là kiểu number'));
            }
            resolve(a+b);
        },2000);
    });
}

//add(4,'5').then((result)=>console.log(result), 
//err =>console.log(err+""));




// let promiseRead=new Promise((resolve, reject)=>{
//     fs.readFile('./a.txt', 'utf8', (err, data)=>{
//         if(err) return reject(new Error('lỗi: '+err));
//         resolve(data); 
//     });
// });

// promiseRead.then(data=>console.log(data)
// , err=>console.log(err+"")
// );

let read=(filename)=>{
    return new Promise((reslove, reject)=>{
        fs.readFile(filename, 'utf8', (err, data)=>{
            if(err) return reject(err);
            reslove(data);
        });
    });
}

read('./a.txt').then(data=>console.log(data),
err=>console.log(err+""));