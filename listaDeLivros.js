//Carregando os dados do arquivo JSON (livros.json)
const pedido = new Request ("livros.json");// pedido da url que eu quero me conectar
// fetch abre a conexao com servidor e retorna imediatamente, ou seja, ela é assicrona e 
//um reetorno do tipo promisse que guarda o conteúudo  ao cliente que o pedido esteja dispnível depois e o then é o 
//método da promisse quando recebe os dados.
//essa função recebera o conteúdo res como parâmetro
fetch (pedido)
    .then(res => res.json())
    .then(livros => {
        listaDeLivros = document.querySelector("#listaDeLivros")
        //lemos objeto por objeto do array livros
        //cada objeto é um livro
        //pegamos os daados desse objeto livro
        //para criar um item da lista (li)
        // e adicionamos esseitem à lista
        livros.forEach(livro => {
            trLivro = document.createElement('tr')
            
            trLivro.innerHTML = `
            <td>${livro.titulo}</td>
            <td>${livro.autor}</td>
            <td>${livro.editora}</td>
            <td>${livro.ano}</td>
            `

            
        listaDeLivros.appendChild(trLivro)
            
           
        });
    }
)
