# Jogo_snake_com_JS
Um jogo clássico da cobra implementado em JavaScript, HTML e CSS. Este projeto recria o jogo Snake com mecânicas adicionais, como diferentes tipos de comida que oferecem pontuações variadas e níveis de dificuldade crescente.
Funcionalidades

    Movimentação da cobra: Use as teclas de seta para controlar a direção.
    Tipos de comida:
        Comida preta: vale 1 ponto.
        Comida vermelha: vale 2 pontos.
    Pontuação dinâmica: A pontuação é exibida e atualizada em tempo real no placar.
    Incremento de velocidade: A velocidade da cobra aumenta automaticamente a cada 60 frames.
    Pausa e reinício:
        p: Pausa e retoma o jogo.
        s: Reinicia o jogo após o término ou pausa.
    Fim de jogo: O jogo termina se a cobra colidir com a parede ou consigo mesma.

####Requisitos####

    Um navegador moderno que suporte JavaScript, HTML5 e CSS3.

####Estrutura do Projeto####

├── index.html      # Arquivo principal do jogo
├── css/
│   └── style.css   # Estilos para o jogo
└── js/
    └── game.js     # Lógica do jogo

####Arquivos####

    index.html: Define a interface do jogo com duas telas principais:
        Tela de instruções.
        Tela do jogo com o tabuleiro e o placar.
    style.css: Estiliza os elementos do jogo, como o tabuleiro, placar e botões.
    game.js: Contém toda a lógica do jogo, incluindo a movimentação da cobra, geração de comida, cálculo de pontuação e mecânica de fim de jogo.

####Instruções para Executar####

    Baixe ou clone este repositório.
    Abra o arquivo index.html em qualquer navegador moderno.
    Leia as instruções na tela inicial.
    Pressione o botão "OK" e, em seguida, s para iniciar o jogo.

####Controles####

    Setas direcionais: Controlam a direção da cobra.
    p: Pausa/despausa o jogo.
    s: Reinicia o jogo após o término.

####Como Jogar####

    A cobra se move automaticamente após o início.
    Controle a direção para comer a comida gerada no tabuleiro.
    Evite colidir com as paredes ou consigo mesma.
    Pontue com base nos tipos de comida consumidos:
        Comida preta: 1 ponto.
        Comida vermelha: 2 pontos.

####Mecânica de Jogo####

    Aceleramento: A velocidade da cobra aumenta gradualmente a cada 60 frames, tornando o jogo mais desafiador.
    Geração de comida: A comida é gerada em locais aleatórios no tabuleiro, evitando colisões com o corpo da cobra.

####Melhorias Futuras####

    Implementação de níveis com diferentes tamanhos de tabuleiro e velocidades iniciais.
    Adição de novos tipos de comida com efeitos especiais.
    Suporte a placares globais ou locais.

####Contribuição####

Sinta-se à vontade para contribuir com este projeto enviando um pull request ou relatando problemas na seção de issues.
