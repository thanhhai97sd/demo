let aPromise=new Promise((resolve, reject)=>{
    //console.log('hello');
    //resolve("Thành công");//hoàn thành thành công
    setTimeout(()=>{
        reject(new Error('Không thể kết nối tới server'));//thất bại
    },2000);
    
});

aPromise.then((msg)=>console.log('Đã thực thi '+ msg),
(errMsg)=>console.log(errMsg+""));
