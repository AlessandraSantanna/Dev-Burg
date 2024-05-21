const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll=document.querySelector('.map-all')
const somaAll=document.querySelector('.soma-all')
const veganAll=document.querySelector('.vegan-all')


function formatCurrency(value) {
  const newValue = value.toLocaleString('pt-br', {
    style:'currency',
    currency:'BRL',
  })

  return newValue

}

function ShowAll (productsArray) {
  let myLi=''
      productsArray.forEach((product) => {
        myLi +=`  
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price"> R$ ${formatCurrency(product.price)} </p>
            </li>
        `
        
    })

    list.innerHTML=myLi
}

function mapAllItems(){
  const newPrices = menuOptions.map((product) =>({
    ...product, //três pontos servem para pegar toda linha do array menos o que es´ta especificado diferente da lista
    price: product.price * 0.9, //dar 10%de desconto
   
  }))

  

  //spread Operator
  ShowAll(newPrices)
}

function somaAllItems(){
  const newPrices = menuOptions.map((product) =>({
   
    price: product.price * 0.9, //dar 10%de desconto
   
  }))
  ShowAll(newPrices)
}


function somaAllItems(){
  const totalValue=menuOptions.reduce((acc, curr) => acc + curr.price, 0)
 list. innerHTML =`
 <li>
 <p> O valor total dos itens é R$ ${formatCurrency(totalValue)} <p>
 </li>
`
console.log(totalValue)

}

function veganAllItems(){
  const filterVegan = menuOptions.filter((product) => product.vegan)
    
     
  ShowAll(filterVegan)

}






buttonShowAll.addEventListener('click',()=> ShowAll (menuOptions)) // quando clicamos no botão e a função tem parenteses ele aparece direto na tela, pois isso foi criado uma erofuctions  antes da função
buttonMapAll.addEventListener('click', mapAllItems)
somaAll.addEventListener('click', somaAllItems)
veganAll.addEventListener('click', veganAllItems)
