//let hinhthang=(a,b,h)=>(a+b)*h/2;
//console.log('Dien tich hình thang: '+hinhthang(2,3,2));

let add=(a,b, cb)=>{
    setTimeout(()=>{
        let err, result;
        if(typeof a!='number' ||typeof b!='number'){
            err='Tham số phải có kiểu number'; //new Error(Tham số phải có kiểu number);
            
            return cb(err, result);
        }
        result=a+b;
        cb(err, result);
    },1000);
}

let mul=(a,b, cb)=>{
    setTimeout(()=>{
        let err, result;
        if(typeof a!='number' ||typeof b!='number'){
            err='Tham số phải có kiểu number'; //new Error(Tham số phải có kiểu number);
            
            return cb(err, result);
        }
        result=a*b;
        cb(err, result);
    },1000);
}

let div=(a,b, cb)=>{
    setTimeout(()=>{
        let err, result;
        if(typeof a!='number' ||typeof b!='number'){
            err='Tham số phải có kiểu number'; //new Error(Tham số phải có kiểu number);
            
            return cb(err, result);
        }
        if(b==0){
            return cb(new Error('b phải khác 0'));
        }
        cb(err, a/b);
    },1000);
}

// add(4,5, (err, result)=>{
//     if(err)return console.log("lỗi: "+err);
//     console.log('kết quả: '+result);
// });

let tinhDienTichHinhThang=(a,b,h,cb)=>{
    add(a,b, (err, result)=>{
        if(err) return cb(err);
        mul(result, h, (err, result)=>{
            if(err) return cb(err);
            div(result, 2, (err, result)=>{
                if(err) return cb(err);
                cb(undefined, result);
            });
        });
    });
}

tinhDienTichHinhThang(2,3,2, (err, result)=>{
    if(err)return console.log(err+'');
    console.log('Diện tích hình thang la: ', result);
    
});