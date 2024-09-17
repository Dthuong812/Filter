fetch('https://fakestoreapi.com/products')
.then(res=>{
    return res.json()
})
.then(data=>{
    var products = document.querySelector('.products');
//init
products.innerHTML=''
data.forEach(item =>{
    var newProduct = document.createElement('div')
    newProduct.classList.add('product')
    
    newProduct.innerHTML=`<img src="${item.image}" alt="">
    <div class="info">
        <div class="name">${item.title}</div>
        <div class="price">${item.price}</div>
    </div>`
    // phương thức appendChild giúp chèn một phần tử con vào trong phần tử cha.
products.appendChild(newProduct);
})
    // console.log(data)
})

var searchInput = document.querySelector('.search input')
searchInput.addEventListener('input',function(e){
    let textSearch = e.target.value.trim().toLowerCase();
    let listProductDom = document.querySelectorAll('.product')
    //thuat toan ke hoach
    listProductDom.forEach(item=>{
        // console.log(item.innerText)
        if(item.innerText.toLowerCase().includes(textSearch)){
            item.classList.remove('hide')
        }else{
            item.classList.add('hide')
        }
    })
})