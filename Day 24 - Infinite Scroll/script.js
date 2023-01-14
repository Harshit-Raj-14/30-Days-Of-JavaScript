getPost()
getPost()
getPost()

window.addEventListener('scroll', function() {
    const { scrollTop, scrollHeight, clientHeight } = this.document.documentElement

    if(clientHeight + scrollTop >= scrollHeight - 5){
        showLoading()
    }
})


function showLoading() {
    setTimeout(getPost(), 1000)
}

async function getPost() {
    fetch(`https://rickandmortyapi.com/api/character/${getRandomNumber()}`)
        .then(function(response) {
            return response.json()
        }).then(function(data) {
            addItemsCollection(data)
        })
}


function getRandomNumber(){
    return Math.floor(Math.random() * 100) + 1
}

function addItemsCollection(data) {
    const newElement = document.createElement('div')
    newElement.classList.add('item')
    newElement.innerHTML = (`
    <div class="char-id">${data.id}</div>
    <div class="char-name">${data.name}</div>
    <img src="${data.image}" alt="" class="char-img">
    <div class="char-species">${data.species}</div><br>        
    `)
    itemsContainer.appendChild(newElement)
}



// This project is built by Harshit Raj.
// This projects belongs to MedusaVerse.
// © Medusaverse