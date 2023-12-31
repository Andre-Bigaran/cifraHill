# Cifra de Hill

Este é um projeto HTML/JavaScript que implementa a cifra de Hill, um algoritmo de criptografia clássico. Ele permite que o usuário insira um texto e criptografe ou descriptografe usando uma chave fixa 2x2.

## Como usar

1. Abra o arquivo `index.html` em um navegador da web.

2. Na página, você verá um campo de texto rotulado como "Texto". Insira o texto que você deseja criptografar nesse campo.

3. Clique no botão "Criptografar" para processar o texto inserido.

4. O campo de texto rotulado como "Cifrado" será preenchido com o texto criptografado.

5. Para descriptografar o texto, copie o texto cifrado do campo "Cifrado" e cole-o no campo de texto rotulado como "Texto". Certifique-se de limpar qualquer texto existente no campo "Texto" antes de colar o texto cifrado.

6. Clique no botão "Descriptografar" para processar o texto cifrado e obter o texto original descriptografado.

7. O campo de texto rotulado como "Criptografado" exibirá o texto criptografado originalmente e o campo de texto rotulado como "Descriptografado" exibirá o texto descriptografado.

## Estilo e Layout

O projeto possui uma aparência minimalista e utiliza o seguinte estilo:

- A página tem um plano de fundo cinza claro (#f2f2f2).

- O conteúdo é centralizado verticalmente e horizontalmente na página.

- O texto é exibido usando a fonte Arial ou uma fonte sans-serif padrão.

- A caixa que contém o conteúdo tem um fundo branco (#fff), um sombreamento suave, bordas arredondadas e preenchimento interno de 20 pixels.

- O título "Cifra de Hill" é exibido com fonte de tamanho 24 pixels, cor preta (#333) e sem margem superior.

- As etiquetas e campos de texto são exibidos em formato de coluna, com as etiquetas alinhadas à esquerda, negrito, cor preta (#333) e margem superior de 10 pixels.

- Os campos de texto têm altura de 40 pixels, preenchimento interno de 10 pixels, borda de 1 pixel sólido em cinza (#ccc) e bordas arredondadas.

- Os botões têm um plano de fundo verde (#4CAF50), texto branco, borda arredondada, preenchimento interno de 10 pixels verticalmente e 20 pixels horizontalmente. O cursor do mouse se transforma em uma mão quando o botão é passado com o mouse.

- Quando o mouse é colocado sobre o botão, a cor do plano de fundo muda para uma tonalidade mais escura de verde (#45a049).

- Os resultados da criptografia e descriptografia são exibidos em um formato de coluna, com etiquetas de cor cinza (#555) e caixas de exibição de fundo claro (#f9f9f9). As caixas de exibição têm preenchimento interno de 8 pixels, borda de 1 pixel sólido em cinza (#ccc), bordas arredondadas e texto de cor cinza (#555).

## Algoritmo de Cript

ografia

O algoritmo de criptografia implementado neste projeto usa uma chave fixa 2x2 representada pela matriz `KEY`:

```
[[1, 2],
 [3, 5]]
```

O texto inserido é dividido em blocos de tamanho 2 e cada bloco é criptografado separadamente usando a chave `KEY`. Para criptografar um bloco, a multiplicação da matriz chave pelo vetor do bloco é realizada e, em seguida, o resultado é convertido em texto novamente.

## Funções JavaScript

O código JavaScript contém as seguintes funções:

- `encryptMessage()`: É chamada quando o botão "Criptografar" é clicado. Obtém o texto do campo de texto rotulado como "Texto" e chama a função `encrypt()` para criptografar o texto. O resultado criptografado é exibido no campo de texto rotulado como "Criptografado".

- `decryptMessage()`: É chamada quando o botão "Descriptografar" é clicado. Obtém o texto do campo de texto rotulado como "Cifrado" e chama a função `decrypt()` para descriptografar o texto. O resultado descriptografado é exibido no campo de texto rotulado como "Descriptografado".

- `encrypt(message)`: Recebe uma mensagem como entrada e retorna a mensagem criptografada usando a cifra de Hill. Essa função realiza várias etapas, incluindo a formatação da mensagem, a conversão dos caracteres em números correspondentes, a multiplicação da matriz chave pelos blocos da mensagem e a conversão dos números resultantes em caracteres novamente.

- `decrypt(ciphertext)`: Recebe um texto cifrado como entrada e retorna o texto original descriptografado usando a cifra de Hill. Essa função é semelhante à função `encrypt()`, mas usa a matriz inversa da chave para desfazer a criptografia.

- Funções auxiliares: O código também contém várias funções auxiliares, como `formatMessage()`, `convertToNumbers()`, `convertToText()`, `multiplyMatrix()` e `invertMatrix()`. Essas funções auxiliares são usadas pelas funções `encrypt()` e `decrypt()` para realizar as operações necessárias durante a criptografia e descriptografia.

É importante observar que a cifra de Hill implementada neste projeto assume que a mensagem contém apenas letras maiúsculas e que a saída criptografada e descriptografada também será composta apenas por letras maiúsculas.

## Limitações

Este projeto possui algumas limitações:

- A chave usada para criptografar e descriptografar é fixa e definida na matriz `KEY`. Ela é uma matriz 2x2 com valores específicos. Não há suporte para inserir uma chave personalizada.

- A cifra de Hill implementada neste projeto assume que a mensagem contém apenas letras maiúsculas. Qualquer caractere não alfabético ou letra minúscula será ignorado durante o processamento.

- A cifra de Hill é sensível ao tamanho da mensagem. O tamanho da mensagem precisa ser múltiplo de 2. Se a mensagem tiver um número ímpar de caracteres, será adicionado um "X" ao final da mensagem para completar o bloco.

- Durante a descriptografia, os caracteres "X" adicionados para completar os blocos na criptografia são removidos do texto descriptografado

.

- O projeto não possui recursos avançados de interface do usuário, como validação de entrada ou tratamento de erros. Portanto, é importante inserir o texto corretamente e seguir as instruções fornecidas.

## Considerações Finais

Este projeto HTML/JavaScript implementa a cifra de Hill de forma simples e demonstra o processo de criptografia e descriptografia usando uma chave fixa. Ele serve como uma introdução básica à cifra de Hill e pode ser utilizado para criptografar e descriptografar mensagens curtas em letras maiúsculas. No entanto, é importante lembrar que a cifra de Hill é apenas um exemplo de criptografia e não oferece segurança robusta para uso em aplicações reais.
