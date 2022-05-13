# PokeDev

## Rodando o projeto

Após clonar o repositório no ambiente local, abra o diretório da aplicação e execute o comando a seguir:

```shell
yarn
```

Este comando irá instalar todas as dependências necessárias para rodar a aplicação no emulador ou no ambiente local.

Após ter feita a instalação das dependências, execute o comando a seguir para rodar a aplicação (deve-se conectar um aparelho via USB ou abrir um emulador Android ou iOS, respectivamente):

```shell
yarn android

# ou

yarn ios
```

**PS.: necessário verificar se a SDK do android está instalada em caso de erro de SDK na máquina para poder rodar a aplicação no emulador, neste caso, deve-se considerar os passos a seguir.**

Caso seja necessário especificar a sdk, basta criar um arquivo chamando `local.properties` na pasta `android` com o seguinte valor:

```
sdk.dir=/Users/USERNAME/Library/Android/sdk
```

Sendo `USERNAME` a pasta do usuário atual.
