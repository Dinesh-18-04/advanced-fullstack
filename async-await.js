fun = async (params) => {
    setTimeout(()=>{
        console.log("KEC")
        setTimeout(() => {
            fun1()
        },3000);
    },4000)
    console.log(await "hello")
}

fun1 = async ()=>{
    console.log(await "123")
}
fun()