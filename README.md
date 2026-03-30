# Bem Vindo(a) a Cantina-Virtual! 👋




## Integrantes do grupo:

- Ali Andrea Mamani Molle - 558052
- Guilherme Linard F.R Gozzi - 555768
- Lucas Vasquez Silva - 555159

# Sobre:

## Nome:

- Cantina Virtual FIAP

## Problema Escolhido:

- Fila e Incerteza na Cantina:
- Durante os dias de aula na FIAP, o tempo de intervalo é de apenas 15 minutos, o que gera grandes filas nas cantinas devido ao alto número de alunos. Muitas vezes, apenas a espera já consome metade ou todo o intervalo, obrigando os alunos a procurarem alternativas fora da faculdade, podendo causar atrasos para a aula seguinte.
- O aplicativo **Cantina Virtual FIAP** foi desenvolvido para solucionar esse problema, permitindo que os alunos visualizem o cardápio e realizem pedidos antecipadamente, reduzindo filas e otimizando o tempo de intervalo.




## Funcionalidades: 

- Visualizar o cardapio
- Adicionar produtos no carrinho
- Escolher forma de pagamento
- Pagar na hora
- Reservar pedido para pagamento presencial

# Como Rodar o Projeto:
## Pré-requisitos:
- Node.js
- Expo Go (Celular ou Emulador)
- Android Studio (Para emulador Android)
- Git (Opcional)
- Visual Studio Code (Opcional)

## Passo a Passo
1. Clonar o repositório

   ```bash
   git clone https://github.com/linard07/fiap-mdi-cp1-cantina-app.git
   ```

2. Entrar na pasta do projeto

   ```bash
   cd fiap-mdi-cp1-cantina-app
   ```
3. Instalar as dependências

   ```bash
   npm install
   ```

4. Iniciar o projeto

   ```bash
   npx expo start
   ```

5. Abrir no emulador Android

   ```bash
   Abra o Android Studio
   Inicie o emulador
   Pressione a no terminal
   ```

# Demonstração

# Decisões Técnicas:

## Estrutura do Projeto

O projeto foi estruturado de forma organizada, separando as telas em uma pasta específica chamada "screens". Isso facilita a manutenção do código e melhora a organização do projeto.

Estrutura principal:

- App.js → Arquivo principal responsável pela navegação
- screens/ → Contém as telas do aplicativo
  - HomeScreen
  - MenuScreen
  - CartScreen

---

## Hooks Utilizados

Durante o desenvolvimento foram utilizados os seguintes hooks do React:

- useState → Utilizado para gerenciar estados como carrinho, produtos e informações do usuário
- useEffect → Utilizado para controle do ciclo de vida dos componentes

---

## Navegação

Foram criadas três telas principais:

- Home → Tela inicial do aplicativo
- Menu → Tela de visualização do cardápio
- Cart → Tela de carrinho de compras

A navegação foi configurada no arquivo App.js utilizando NavigationContainer e createNativeStackNavigator, permitindo a transição entre as telas do aplicativo.

   



