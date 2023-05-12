let filmes = document.querySelector("#filmes")

const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=e012bf6e6f6187dcc58d23d205bea9e8"
fetch(url).then((resposta) => {
    resposta.json().then((json) => {
        const dados = json.results
        console.log(dados)
        dados.forEach((filme) => filmes.appendChild(card(filme)))
    })
    
})

function cadastrar(e){
    e.preventDefault()

const filme = {
    title: e.target.titulo.value,
    poster_path: e.target.poster.value,
    vote_average: e.target.nota.value
}
filmes.appendChild(card(filme))
    
}

let formulario = document.getElementById("#form-filme")
formulario.addEventListener("submit",  cadastrar)
