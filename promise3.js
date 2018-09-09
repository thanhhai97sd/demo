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

let div=(a,b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof a!='number'||typeof b!='number'){
                return reject(new Error('Tham số phải là kiểu number'));
            }
            if(b==0) return reject(new Error('Nhap b phai khac 0'));
            resolve(a/b);
        },2000);
    });
}

let tinhDienTichHinhThang=(a,b,h)=>{
    return add(a,b)
    .then(res=>mul(res,h))
    .then(result=>div(result,2))  
}

tinhDienTichHinhThang(6,4,5)
.then(dt=>console.log('Dien tich hinh thang bang: '+dt))
.catch(err=>console.log('Loi: '+err));
// add(4,5)
// .then(res => add(res, 6))
// .then(result =>console.log(result))
// .catch(err =>console.log('Loi: '+err));