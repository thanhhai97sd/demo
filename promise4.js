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

let mul=(a,b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof a!='number'||typeof b!='number'){
                return reject(new Error('Tham số phải là kiểu number'));
            }
            resolve(a*b);
        },2000);
    });
}

// Promise.all([add(4,5), mul(4,5)])
// .then(res=>console.log(res))
// .catch(err=>console.log(err+""));


Promise.race([add(4,5), mul(4,5)])//câu lệnh có kết quả dầu tiên sẽ là kết quả của cả race
.then(res=>console.log(res))
.catch(err=>console.log(err+""));

