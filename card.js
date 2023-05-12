function card(filme){

    let card =  document.createElement("div")
    card.classList.add("card")
    
    let poster = document.createElement("img")
    poster.src = "https://www.themoviedb.org/t/p/w220_and_h330_face" + filme.poster_path
    poster.alt = "Poster do filme" + filme.title
    
    let titulo = document.createElement("p")
    titulo.classList.add("titulo")
    titulo.innerHTML = filme.title
    
    let divNota = document.createElement("div")
    divNota.classList.add("nota")
    
    let icone= document.createElement("span")
    icone.classList.add("estrela")
    icone.classList.add("material-icons")
    icone.innerHTML = "star"
    
    let nota = document.createElement("span")
    nota.innerHTML = filme.vote_average
    
    let botao = document.createElement("a")
    botao.classList.add("botao")
    botao.innerHTML = "detalhe"
    
    card.appendChild(botao)
    divNota.appendChild(nota)
    divNota.appendChild(icone)
    card.appendChild(divNota)
    card.appendChild(poster)
    card.appendChild(titulo) 
    
    return card
    
    }