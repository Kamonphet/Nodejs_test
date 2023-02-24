function ass(name){
    let name1 = 'phet ';
    return name1+name
}

console.log (ass('ku'))


const url = 'downloads/game.exe';
function download(url,callback){
    console.log(`กำลังดาวน์โหลดข้อมูลจาก ${url}`);
    setTimeout(()=>{
        callback(url)
    },3000)
}

download(url,function(result){
    console.log(`ดาว์นโหลดไฟล์ ${result} เสร็จเรียบร้อย`)
})