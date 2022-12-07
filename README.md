# SOLID

Princíos da programação orientada a objetos. Facilitam o desenvolvimento
e a manutenção de uma aplicação.
SOLID é uma sigla criada por Michael Feathers ao observar os cinco princípios
da orientação a objetos e desing de códigos criados por Robert C. Martin
(Uncle Bob).

    S - Single Responsability Principle (Princípio da responsabilidade única)
    O - Open-Closed Principle (Princípio aberto-fechado)
    L - Liskov Substitution Principle (Princípio da substituição de Liskov)
    I - Interface Segregation Principle (Princípio da segregação da interface)
    D - Dependency Inversion Principle (Princípio da inversão da dependência)

# SOLID: Single Responsability Principle

Uma classe (ou métodos e funções) deve ter somente um motivo para mudar. Ou seja, uma classe deve possuir apenas uma responsabilidade dentro do software, tendo apenas uma tarefa ou ação para executar.

## Exemplo

Uma classe que faz uma consulta no banco de dados buscando pela lista de clientes de uma loja. esta classe deve retronar a lista quando for feita uma requisição no sistema. A ela não deve ser repassada mais nenhuma tarefa como por exemplo, retornar a lista e mostrar um número total de clientes.

Caso este princípio não seja respeitado problemas podem ocorrer como dificuldade de reutilização do código e de testes automatizados.

# SOLID: Open-closed Principle

Objetos ou entidades devem estar abertos para extensão, mas fechados para modiicação. Se novos comportamentos precisam ser adicionados no código, deve-se estender e não alterar o código original.

## Exemplo

Em um sistema de uma empresa, existe o cadastro dos funcionários em regime de CLT. No caso de novos funcionários contratados e regime de PJ, devemos estender o código que trata dos funcionários em regime CLT. Isto é diferente de modificar a classe para que ela trate dos dois regimes de contratação.

Poderia-se pensar que apenas mais um if no algoritimo resolveria o problema. Porém, iríamos modificar algo que já está funcionando. Alterar uma classe para colocar novos métodos seria arriscado, visto que podemos introduzir novos "bugs".

Por isso, diz-se que a classe deve estar fechada para modificação, mas aberta para extensão.

# SOLID: Liskov substitution principle

Por Barbara Liskov.

Se S é um subtipo de T, então os objetos do tipo T, em um programa, podem ser substituidos pelos objetos de tipo S sem que seja necessário alterar as propriedades deste programa - Wikipedia.

Se a classe B herda da classe A deverá ser possivel usar B no lugar de A. Também é possível dizer que classes filhas nunca podem violar as regras de uma classe pai.

# SOLID: Interface segregation principle

Uma classe não deve ser forçada a implementar interfaces e módulos que não serão utilizados. É preferível criar interfaces mais específicas em vez de uma única interface genérica.

## Exemplo:

No caso de um jogo, podemos ter personagens que são soldados. Porém, existem os soldados de um pais de outro. Então em vez de criar uma classe que cuida de todos os soldados, podemos criar classes que se referem a cada grupo de forma mais específica. Classe soldados Aliados x classe soldadosDoEixo.

Com isso, poderíamos ter uma classe para soldados e desta, extender para cada grupo de soldados, herdando as propriedades e métodos gerais. isto é vantajoso porque você reutiliza o código.

# SOLID: Dependency inversion principle

Depender de abstrações e não de implementações.

De acordo com o Uncle Bob: módulos de alto nível não devem depender de módulos de baixo nivel. Ambos devem depender de abstração.

Módulo de alto nível é aquele que depende de outros módulos. Já, os módulos de baixo nível não dependem de ninguém. Podem ser as entidades e regras de negócio.

## Exemplo

Para recuperar a senha em uma aplicação a classe deve se conectar ao banco de dados e com isso, criar uma instância dele. Isto gera um alto acoplamento e torna muito difícil a troca do banco no futuro. Também não conseguiríamos reaproveitar tal classe. Neste caso, estaríamos dependendo de um implementação e não de uma abstração.
