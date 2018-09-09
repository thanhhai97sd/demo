//let a = await aPromise -->chỉ có thể nằm trong async func, chờ khi promise chạy xong

let add=(a,b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof a!='number'||typeof b!='number'){
                return reject(new Error('Tham số phải là kiểu number'));
            }
            resolve(a+b);
        },1000);
    });
}

let mul=(a,b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof a!='number'||typeof b!='number'){
                return reject(new Error('Tham số phải là kiểu number'));
            }
            resolve(a*b);
        },1000);
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
        },1000);
    });
}

let tinhDienTichHinhThang=async(a,b,h)=>{
    try {
        let ab=await add(a, b);
        let abh=await mul(ab, h);
        let dt=await div(abh, 2);
        return Promise.resolve(dt);
    } catch (error) {
        return Promise.reject(error);
    }
}

tinhDienTichHinhThang(4,5, 6)
.then(res=>console.log(res))
.catch(err=>console.log(err+""));


//async await dùng callback function
// let tinhDienTichHinhThang=async(a,b,h, cb)=>{
//     try {
//         let ab=await add(a, b);
//         let abh=await mul(ab, h);
//         let dt=await div(abh, 2);
//         cb(undefined, dt);
//     } catch (error) {
//         cb(error);
//     }
// }

// tinhDienTichHinhThang(4,5, 6, (err, result)=>{
//     if(err) return console.log(err+"");
//     console.log(result);
// });

// let add=async()=>{
//     let res=await addpr(4,5);//await chờ cho đến khi promise chạy xong mới chạy tiếp
//     console.log(res);
    
// }
// add(2,4);