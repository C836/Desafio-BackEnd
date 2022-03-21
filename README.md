## Sobre
Esta aplicação consiste em um algoritimo que calcula a distância entre dois ou mais pontos do mundo apenas pelo seu endereço. 

## Instalação

Necessário instalar o [Node.js](https://nodejs.org/) v10+ para funcionar.
Instalar as dependências e dependências de desenvolvimento para iniciar.

```sh
# Selecionar local de instalação
$ cd [nome da pasta]
# Clonar projeto do repositório
$ git clone https://github.com/C836/Desafio-BackEnd
# Instalar as dependências
$ npm i
# Iniciar
$ npm start
```

Inicie a aplicação e faça a consulta pelo prompt. Digite um endereço e os endereços subsequentes terão suas distâncias calculadas de acordo com o endereço principal.

Seja o mais preciso possível ao inserir os endereços, sempre especifique o estado e país.

## Resultado 

O resultado será impresso em "resultado.json" na pasta raiz do projeto.

```sh
[
  {
    "origem":"rio de janeiro brazil",
    "destino":"manaus brazil",
    "distancia":"6.674,481 km"
  },
  {
    "origem":"rio de janeiro brazil",
    "destino":"são paulo brazil",
    "distancia":"329,019 km"
  }
]
```

