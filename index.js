let isLoading = true;
let url="https://sgov16pyb1.execute-api.ap-southeast-2.amazonaws.com/default/api/order/"
function loadOrders(){
    const orderContainer = document.getElementById("orders")
    orderContainer.innerText = "刷新中"
    let allPromises = []
    for(let i=1;i<11;i++){
        allPromises.push(axios.get(`${url}${1000+i}`))
    }
    Promise.all(allPromises).then(values=>{
        
        console.log(values)
        orderContainer.innerText = ""
        const fragment = document.createDocumentFragment()
        values.sort((a,b)=>a.data[0].time.localeCompare(b.data[0].time)).reverse()
        values.map(value=>{
            
            const order = document.createElement("div")
            order.className = "order-item"
            order.innerText = `${value.data[0].name}-更新时间-${value.data[0].time}` 
            fragment.appendChild(order)
        })
        orderContainer.appendChild(fragment)
    })
}

window.addEventListener("load",(event)=>{
    document.getElementById("button").addEventListener("click",(event)=>loadOrders())
    loadOrders()}
    
    )
