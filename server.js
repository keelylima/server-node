const http = require('http'); //estou requerendo o módulo
const utf8 = require('utf8');

const comidas = [ //não precisa das aspas nas propriedades
    {
        "nome": "Paçoquita",
        "descricao": "Melhor doce",
        "imagem": "https://http2.mlstatic.com/pacoquita-20g-santa-helena-D_NQ_NP_540215-MLB25162744484_112016-F.jpg"
    },
    {
        "nome": "Doce de leite",
        "descricao": "Doce feito de leite",
        "imagem": "https://portal-amb-imgs.clubedaana.com.br/2017/08/doce-de-leite-caseiro.jpg"
    },
    {
        "nome": "Macarrão",
        "descricao": "feito de massa",
        "imagem": "http://acarnequeomundoprefere.com.br/uploads/media/image/_PNK6191-macarrao-molho-linguica.jpg"
    },
    {
        "nome": "Feijão",
        "descricao": "Feijãozinho",
        "imagem": "https://img.itdg.com.br/tdg/images/recipes/000/169/692/146782/146782_original.jpg?mode=crop&width=710&height=400"
    },
    {
        "nome": "Batata Frita",
        "descricao": "Batatinhas fritas",
        "imagem": "https://panelinha-sitenovo.s3-sa-east-1.amazonaws.com/receita/953607600000-Batata-frita-tradicional.jpg"
    },
    {
        "nome": "Chocolate",
        "descricao": "Docinho show",
        "imagem": "https://upload.wikimedia.org/wikipedia/commons/7/70/Chocolate_%28blue_background%29.jpg"
    },
    {
        "nome": "Frango frito",
        "descricao": "kfc dos irmãos",
        "imagem": "https://t2.rg.ltmcdn.com/pt/images/5/0/1/img_frango_frito_americano_do_kfc_5105_600.jpg"
    },
    {
        "nome": "Torta de limão",
        "descricao": "Docinho legal para uma tarde",
        "imagem": "http://www.receitasnestle.com.br/images/default-source/recipes/torta-de-lim-%C3%BAo_alta.jpg"
    },
    {
        "nome": "Sopa",
        "descricao": "Sopa não é refeição",
        "imagem": "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2018/07/04/como-deixar-sua-sopa-deliciosa.jpg"
    },
    {
        "nome": "Chiclete",
        "descricao": "Faz mal pro estomago",
        "imagem": "https://docemalu.vteximg.com.br/arquivos/ids/162214-1000-1000/2002-1.jpg?v=635822354780930000"
    },
]

const server = http.createServer(function (request, response) {  //função que mora dentro do http modules, ela recebe requisições e também dá respostas
    if (request.url === '/') {
        response.end('Hello World'); //mostra pro usuario
    } else if (request.url === '/comidas') {
        // response.end('comidinhas show'); não vai entrar nesse response, vai no get direto
        if (request.method === 'GET') {
            response.writeHead(200, {
                // "Content-Type": "text/html;charset=utf-8" //avisando que ele consegue receber/ler um arquivo text/html
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin":"*"
            })
            response.write(JSON.stringify(comidas))
            response.end();
        } else if (request.method === 'POST') {
            response.writeHead(201, {
                "Content-Type": "text/html;charset=utf-8"
            })
            response.end('<h1>Tem post não</h1>');
        }
    }
})

server.listen(3010)
console.log('servidorzinho rodando na porta 3000'); //mostra no terminal