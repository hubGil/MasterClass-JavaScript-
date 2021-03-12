# String

O tipo String é primitivo, imutável e é representado internamente pelo padrão
Unicode, codificado em UTF-16 para representacao em memoria, desta forma cada 
string ocupa 16 bits.

Existem 3 formas de declarar uma String de forma literal:
- aspas simples ' '
- aspas duplas " "
- acento grave \` \`

Em termos da declaracao da string nao tem diferente, entretanto o acento grave nos ajuda com interpolacao da variavel dentro da string entro outras coisas.

## Funcao construtora
Também possível declarar uma String por meio de sua funcao construtora, mas tome cuidado. A funcao é mais lenta e pode prejudicar a performance. Lembrando que isso só é perceptivel em projetos maiores.

>Exemplo feito de forma simplista nos arquivos string_4 e string_5

Alguns tipos de caracteres não são permitidos e precisam de ser escapados, existem também caracteres de controle que podem ser utilizados para quebrar linhas, aumentar a indentacao entre outras coisas.

## Caracteres Especiais

> Curiosidade: Esses caracteres vem da época das máquinas de escrever

<table>
    <tr>
        <td>Carectere de Controle</td>
        <td>Descricao</td>
    </tr>
    <tr>
        <td>\b</td>
        <td>Backspace</td>
    </tr>
    <tr>
        <td>\f</td>
        <td>Form Feed</td>
    </tr>
    <tr>
        <td>\n</td>
        <td>New Line</td>
    </tr>
    <tr>
        <td>\r</td>
        <td>Carriege Return</td>
    </tr>
    <tr>
        <td>\t</td>
        <td>Horizontal</td>
    </tr>
    <tr>
        <td>\v</td>
        <td>Vertical Tabulator</td>
    </tr>    
</table>

> É possível escrever caracteres utilizando seu code point no padrão Unicode
