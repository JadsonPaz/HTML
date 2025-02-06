var menuitem = document.querySelectorAll('.item')

function selectlink(){
    menuitem.forEach((item)=>   
        item.classList.remove('atv')
    )
    this.classList.add('atv')
}

menuitem.forEach((item)=>
    item.addEventListener('click', selectlink)
)

//expandi menu
var expande = document.querySelector('#expand') 
var menulado = document.querySelector('.menu_lateral')

expande.addEventListener('click', function(){
    menulado.classList.toggle('expand')
})



