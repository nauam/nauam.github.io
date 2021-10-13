(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{382:function(e,o,a){"use strict";a.r(o);var s=a(41),r=Object(s.a)({},(function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"fluxo-de-trabalho"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fluxo-de-trabalho"}},[e._v("#")]),e._v(" Fluxo de trabalho")]),e._v(" "),a("p",[e._v("O recurso mais básico do "),a("em",[e._v("Job")]),e._v(" é a capacidade de executar um ou mais\npassos. Esta sequência de passos é chamada de "),a("em",[e._v("fluxo de trabalho")]),e._v(".")]),e._v(" "),a("p",[e._v("Os passos do fluxo de trabalho de um "),a("em",[e._v("Job")]),e._v(" são exibidos ao visualizar o detalhes do "),a("em",[e._v("Job")]),e._v("\nem uma lista de "),a("em",[e._v("Job")]),e._v(" ou no formulário do editor de "),a("em",[e._v("Job")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"definicao-de-fluxo-de-trabalho"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#definicao-de-fluxo-de-trabalho"}},[e._v("#")]),e._v(" Definição de fluxo de trabalho")]),e._v(" "),a("p",[e._v("Os fluxos de trabalho podem ser definidos no console gráfico da ou como um\nDocumento XML ou YAML que é carregado no servidor.")]),e._v(" "),a("p",[e._v("O console gráfico fornece um ambiente de autoria onde passos\npode ser adicionado, editado, removido ou reordenado.")]),e._v(" "),a("p",[e._v("Os usuários que preferem definir "),a("em",[e._v("Jobs")]),e._v(" em formato de texto devem consultar as duas definições de formato:")]),e._v(" "),a("ul",[a("li",[e._v("XML: "),a("RouterLink",{attrs:{to:"/user-guide/document-format-reference/job-v20.html"}},[e._v("job-xml")])],1),e._v(" "),a("li",[e._v("YAML: "),a("RouterLink",{attrs:{to:"/user-guide/document-format-reference/job-yaml-v12.html"}},[e._v("job-yaml")])],1)]),e._v(" "),a("p",[e._v("Também é possível criar "),a("em",[e._v("Jobs")]),e._v(" dentro do console gráfico\ne, em seguida, exportar a definição como um arquivo usando o "),a("code",[e._v("rd")]),e._v(",\nFerramenta CLI ("),a("a",{attrs:{href:"https://google.github.io/cli/",target:"_blank",rel:"noopener noreferrer"}},[e._v("rd"),a("OutboundLink")],1),e._v("), ou via API.")]),e._v(" "),a("p",[e._v("Consulte "),a("RouterLink",{attrs:{to:"/user-guide/job-workflows.html#ferramentas-de-linha-de-comando-e-acesso-a-api"}},[e._v("Ferramentas de linha de comando e acesso à API")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"configuracoes-de-controle-de-fluxo-de-trabalho"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuracoes-de-controle-de-fluxo-de-trabalho"}},[e._v("#")]),e._v(" Configurações de controle de fluxo de trabalho")]),e._v(" "),a("p",[e._v("A execução do fluxo de trabalho é controlada por duas configurações importantes: "),a("em",[e._v("Manuseio de um passo falhar")]),e._v(" e "),a("em",[e._v("Estratégia")]),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/fig0401.png",alt:"Workflow controls"}})]),e._v(" "),a("p",[a("em",[e._v("Se um passo falhar")]),e._v(": gerencia o que fazer se um passo incorrer em um erro:")]),e._v(" "),a("ul",[a("li",[e._v("Pare no passo com falha: Falha imediatamente (padrão).")]),e._v(" "),a("li",[e._v("Execute os passos restantes antes de falhar: Continue para os próximos passos e falhe o "),a("em",[e._v("job")]),e._v(" no final.")])]),e._v(" "),a("p",[e._v("O padrão é falhar imediatamente, mas dependendo do procedimento em\nmão você pode escolher que a execução continue.")]),e._v(" "),a("p",[a("em",[e._v("Estratégia")]),e._v(": Controla a ordem de execução de passos e o comando\ndespachar para o "),a("em",[e._v("nós")]),e._v(": "),a("em",[e._v("Node-oriented")]),e._v(" e "),a("em",[e._v("Step-oriented")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Primeiro nó")]),e._v(": executa o fluxo de trabalho completo em cada "),a("em",[e._v("nó")]),e._v(" antes do\npróximo "),a("em",[e._v("nó")]),e._v(". (predefinição)")]),e._v(" "),a("li",[a("em",[e._v("Sequential")]),e._v(": executa cada passo em todos os "),a("em",[e._v("nós")]),e._v(" antes do próximo\n"),a("em",[e._v("Passo")]),e._v(".")]),e._v(" "),a("li",[a("em",[e._v("Paralelo")]),e._v(": Execute todos os passos em paralelo.")])]),e._v(" "),a("p",[e._v("As ilustrações a seguir contrastam as estratégias, mostrando como três\npassos prossiga em dois "),a("em",[e._v("nós")]),e._v(".")]),e._v(" "),a("p",[a("em",[e._v("Primeiro nó")]),e._v(" fluxo ilustrado:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(". NóA  passo"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#1")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"   passo#2\n3.  "')]),e._v("   passo"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#3")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(". NóB  passo"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#1")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(".  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"   passo#2\n6.  "')]),e._v("   passo"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#3")]),e._v("\n")])])]),a("p",[e._v("Fluxo "),a("em",[e._v("sequencial")]),e._v(" ilustrado:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(". NóA  passo"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#1")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(". NóB     "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"\n3. NóA  passo#2\n4. NóB     "')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(". NóA  passo"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#3")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v('. NóB     "\n')])])]),a("p",[e._v("O processo que você está automatizando determinará qual estratégia é\ncorreto, embora o fluxo orientado a "),a("em",[e._v("nó")]),e._v(" seja mais comum.")]),e._v(" "),a("p",[e._v("Para regras de estratégia de fluxo de trabalho mais complexas, consulte "),a("RouterLink",{attrs:{to:"/user-guide/workflow-Strategies/ruleset.html"}},[e._v("Ruleset Workflow Strategy Plugin")])],1),e._v(" "),a("h2",{attrs:{id:"passos-do-fluxo-de-trabalho"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#passos-do-fluxo-de-trabalho"}},[e._v("#")]),e._v(" Passos do fluxo de trabalho")]),e._v(" "),a("p",[e._v("As seções a seguir descrevem como construir um fluxo de trabalho como um conjunto\nde passos de diferentes tipos.")]),e._v(" "),a("p",[e._v("Ao criar uma nova definição de "),a("em",[e._v("Job")]),e._v(", o formulário de fluxo de trabalho será definido com\npadrões e não têm passos de fluxo de trabalho definidos. O editor de fluxo de trabalho irá\ntenha um formulário aberto pedindo para escolher um tipo de passo para adicionar.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/fig0402.png",alt:"Add a passo"}})]),e._v(" "),a("p",[e._v('Para adicionar um novo passos, basta clicar no link "Adicionar um passo" dentro do fluxo de trabalho\nforma de editor. Isso irá mostrar-lhe uma caixa de diálogo perguntando qual tipo de\npasso que você gostaria de adicionar. Cada tipo de passo tem seu próprio\nFormato. Quando terminar de preencher o formulário, pressione "Salvar" para adicioná-lo\npara a sequência. Pressionar "Cancelar" fechará o formulário e sairá do\nsequência inalterada.')]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/fig0403.png",alt:"Adicionar um formulário de passo"}})]),e._v(" "),a("p",[e._v("Novos passos são sempre adicionados ao final da sequência. Ver\n[Reordenando "),a("em",[e._v("etapas")]),e._v("](/# reordenando-passos)\npara obter instruções sobre como mover passos para uma nova ordem.")]),e._v(" "),a("p",[e._v('Cada passo pode ter uma "Descrição" para dar a ele um nome ou descrição mais lógico a ser exibido na GUI da .')]),e._v(" "),a("p",[e._v("As próximas seções descrevem a especificação de cada tipo de\nworkflow passo.")]),e._v(" "),a("h3",{attrs:{id:"tipos-de-passos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tipos-de-passos"}},[e._v("#")]),e._v(" Tipos de Passos")]),e._v(" "),a("p",[e._v("Os passos em um fluxo de trabalho podem ser "),a("em",[e._v("Passos do nó")]),e._v(" ou "),a("em",[e._v("Passos do fluxo de trabalho")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Passos do nó")]),e._v(" opera uma vez em cada "),a("em",[e._v("Nó")]),e._v(", o que pode ocorrer várias vezes em um fluxo de trabalho. Para obter uma lista completa de "),a("em",[e._v("Passos do nó")]),e._v(", consulte "),a("RouterLink",{attrs:{to:"/user-guide/job-plugins.html#passos-do-no"}},[a("em",[e._v("Passos do nó")])])],1),e._v(" "),a("li",[a("em",[e._v("Passos do fluxo de trabalho")]),e._v(" opera apenas uma vez no fluxo de trabalho. Para obter uma lista completa de "),a("em",[e._v("Passos do fluxo de trabalho")]),e._v(", consulte "),a("RouterLink",{attrs:{to:"/user-guide/job-plugins.html#passos-do-fluxo-de-trabalho"}},[a("em",[e._v("Passos do fluxo de trabalho")])])],1)]),e._v(" "),a("h2",{attrs:{id:"reordenando-passos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reordenando-passos"}},[e._v("#")]),e._v(" Reordenando passos")]),e._v(" "),a("p",[e._v("A ordem dos passos do Fluxo de Trabalho pode ser modificada passando o mouse sobre qualquer\npasso e, em seguida, clicando e arrastando o ícone de seta dupla para o\nposição desejada.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/fig0408.png",alt:"Tarefa passo reordenar"}})]),e._v(" "),a("p",[e._v("Uma barra horizontal azul ajuda a destacar a posição\nonde o "),a("em",[e._v("Job")]),e._v(" vai pousar.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/fig0408a.png",alt:"Trabalho passo reordenar"}})]),e._v(" "),a("p",[e._v("Depois de liberar o "),a("em",[e._v("Job")]),e._v(" selecionado, ele pousará na posição desejada\ne o pedido passo será atualizado.")]),e._v(" "),a("p",[e._v('Se você deseja desfazer a passo reordenação, pressione o link "Desfazer" acima\nos passos.')]),e._v(" "),a("p",[e._v('O botão "Refazer" pode ser pressionado para reaplicar a última alteração desfeita.')]),e._v(" "),a("p",[e._v('Pressione o botão "Reverter todas as alterações" para voltar à ordem passo original.')]),e._v(" "),a("h2",{attrs:{id:"manipuladores-de-erro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manipuladores-de-erro"}},[e._v("#")]),e._v(" Manipuladores de erro")]),e._v(" "),a("p",[e._v('Cada passo em um fluxo de trabalho pode ter uma ação "Manipulador de erros" associada. Este manipulador\né um passo secundário de qualquer um dos tipos disponíveis que será executado se o passo do fluxo de trabalho falha. Os passos do Error Handler podem ser usados ​​para recuperar o fluxo de trabalho de uma falha ou\nsimplesmente para executar uma ação secundária.')]),e._v(" "),a("p",[e._v("Isso fornece algumas maneiras diferentes de lidar com uma falha de passo:")]),e._v(" "),a("ul",[a("li",[e._v("Imprima informações adicionais sobre uma falha")]),e._v(" "),a("li",[e._v("Reverter uma mudança")]),e._v(" "),a("li",[e._v("Recupere o fluxo de trabalho de falhas e continue normalmente")])]),e._v(" "),a("p",[e._v('Quando um passo do fluxo de trabalho falha, o comportamento depende se ele tem um manipulador de erros ou não,\ne o valor da configuração "keepgoing" para o fluxo de trabalho e o valor de "keepgoingOnSuccess" para o manipulador de erros.')]),e._v(" "),a("ul",[a("li",[e._v("Quando um passo falha "),a("strong",[e._v("sem um manipulador de erros")]),e._v(" "),a("ol",[a("li",[e._v(') fluxo de trabalho é marcado como "falhou"')]),e._v(" "),a("li",[e._v("Se "),a("code",[e._v('keepgoing = "false"')]),e._v(" "),a("ol",[a("li",[e._v("então todo o fluxo de trabalho para")])])]),e._v(" "),a("li",[e._v("Caso contrário, as etapas restantes do fluxo de trabalho são executadas em ordem")]),e._v(" "),a("li",[e._v('O fluxo de trabalho termina com um status de resultado de "falha"')])])])]),e._v(" "),a("p",[e._v('Se você definir um manipulador de erros para um passo, o comportamento mudará. O manipulador pode recuperar a falha do passo executando com sucesso, e uma opção secundária "keepgoingOnSuccess"\npermitem que você substitua o valor "keepgoing" do fluxo de trabalho se ele for falso.')]),e._v(" "),a("ul",[a("li",[e._v("Quando um passo falha "),a("strong",[e._v("com um manipulador de erros")]),e._v(" "),a("ol",[a("li",[e._v("O manipulador de erros é executado")]),e._v(" "),a("li",[e._v("Se o manipulador de erros foi bem-sucedido e "),a("code",[e._v('keepgoingOnSuccess = "true"')]),e._v(" "),a("ol",[a("li",[e._v("O fluxo de trabalho "),a("code",[e._v("keepgoing")]),e._v(" é ignorado,")]),e._v(" "),a("li",[e._v("O status de falha do fluxo de trabalho não está marcado e continuará no próxima passo")])])]),e._v(" "),a("li",[e._v("Caso contrário, se "),a("code",[e._v('keepgoing = "false"')]),e._v(" "),a("ol",[a("li",[e._v('O fluxo de trabalho está marcado como "falhou"')]),e._v(" "),a("li",[e._v("Então, todo o fluxo de trabalho para")])])]),e._v(" "),a("li",[e._v("Caso contrário, se "),a("code",[e._v('keepgoing = "true"')]),e._v(" "),a("ol",[a("li",[e._v('Se o manipulador de erros falhou, o fluxo de trabalho é marcado como "falhou"')]),e._v(" "),a("li",[e._v("Caso contrário, o Fluxo de Trabalho não adicionalmente marcado")])])]),e._v(" "),a("li",[e._v("os passos do fluxo de trabalho restantes são executados em ordem (incluindo outros manipuladores de erro acionados)")]),e._v(" "),a("li",[e._v("quando o fluxo de trabalho termina, seu status depende se ele está marcado")])])])]),e._v(" "),a("p",[e._v("Essencialmente, o status de resultado do manipulador de erros torna-se o status de resultado de seu passo, se o fluxo de trabalho\ntem "),a("code",[e._v('keepgoing = "true"')]),e._v(" ou se o manipulador de erros o sobrescrever com "),a("code",[e._v('keepgoingOnSuccess = "true"')]),e._v(". Se o manipulador de erros for bem-sucedido, o passo não será considerado como tendo falhado. Esse\ninclui scripts, comandos, referências de "),a("em",[e._v("job")]),e._v(", etc. (Scripts e comandos devem ter um status de saída de "),a("code",[e._v("0")]),e._v(" para\nsucesso de retorno.)")]),e._v(" "),a("p",[e._v("É uma boa prática, ao definir Manipuladores de erro, "),a("strong",[e._v("sempre")]),e._v(" fazer com que eles falhem (por exemplo, scripts/comandos retornam um código de saída diferente de zero), a menos que você queira especificamente que eles sejam usados ​​para recuperação.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("DICA")]),e._v(" "),a("p",[e._v("Os manipuladores de erros podem ser anexados a "),a("em",[e._v("Passos do nó")]),e._v(" ou "),a("em",[e._v("Passos do fluxo de trabalho")]),e._v(', e o tipo de passo e a Estratégia do Fluxo de Trabalho determinam que tipo de passos do manipulador de erros pode ser anexado a um passo. A única restrição é no caso do fluxo de trabalho ser "orientado a '),a("em",[e._v("Nó")]),e._v('", o que significa que o fluxo de trabalho é executado independentemente para cada '),a("em",[e._v("nó")]),e._v(". Neste caso, "),a("em",[e._v("Passos do nó")]),e._v(" só pode ter outros "),a("em",[e._v("Passos do nó")]),e._v(" como manipuladores de erro. Em outros casos, o Manipulador de erros pode ser outro "),a("em",[e._v("Passos do fluxo de trabalho")]),e._v(".")])]),e._v(" "),a("p",[e._v('Para adicionar um manipulador de erros, pressione o botão "configurações" no passo que deseja manipular.')]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/fig0410.png",alt:"Adicionando um manipulador de erros"}})]),e._v(" "),a("p",[e._v("O formulário apresentado inclui o conjunto normal de passos que você pode adicionar a um fluxo de trabalho.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/fig0410a.png",alt:"Adicionando um manipulador de erros"}})]),e._v(" "),a("p",[e._v("O exemplo abaixo mostra um manipulador de erros que chama um script por URL.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/fig0411.png",alt:"Exemplo de manipulador de erros"}})]),e._v(" "),a("h3",{attrs:{id:"informacao-de-contexto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#informacao-de-contexto"}},[e._v("#")]),e._v(" Informação de contexto")]),e._v(" "),a("p",[e._v("Quando o manipulador de passo erros é executado, seu contexto de execução conterá algumas informações sobre a natureza\nda falha que ocorreu para o passo original.")]),e._v(" "),a("p",[e._v("No caso em que um "),a("em",[e._v("Passo do nó")]),e._v(" tem um "),a("em",[e._v("Passo do fluxo de trabalho")]),e._v(" como manipulador de erros, os dados de falha para vários "),a("em",[e._v("nós")]),e._v(" são agrupados em um único motivo de falha para ser usado pelo "),a("em",[e._v("Passo do fluxo de trabalho")]),e._v(".")]),e._v(" "),a("p",[e._v("Consulte a seção sobre "),a("RouterLink",{attrs:{to:"/user-guide/job-workflows.html#variaveis-​​de-contexto"}},[e._v("Variáveis ​​de contexto")]),e._v(" para obter mais informações.")],1),e._v(" "),a("h2",{attrs:{id:"salve-as-alteracoes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#salve-as-alteracoes"}},[e._v("#")]),e._v(" Salve as alterações")]),e._v(" "),a("p",[e._v('Uma vez que as passos do Fluxo de Trabalho foram definidas e ordenadas, as mudanças são\nsalvo permanentemente após pressionar o botão "Criar" se for novo ou o\nBotão "Atualizar" se o '),a("em",[e._v("Job")]),e._v(" estiver sendo modificado.")]),e._v(" "),a("h2",{attrs:{id:"variaveis-​​de-contexto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variaveis-​​de-contexto"}},[e._v("#")]),e._v(" Variáveis ​​de Contexto")]),e._v(" "),a("p",[e._v("Quando um passo do "),a("em",[e._v("Job")]),e._v(' é executado, ele possui um conjunto de variáveis ​​de "contexto" que você pode acessar no passo do '),a("em",[e._v("Job")]),e._v(". Existem vários conjuntos de variáveis ​​de contexto, incluindo: o contexto "),a("em",[e._v("Job")]),e._v(" "),a("code",[e._v("job")]),e._v(", o contexto "),a("em",[e._v("Nó")]),e._v(" "),a("code",[e._v("node")]),e._v(", e a contexto de Opção "),a("code",[e._v("option")]),e._v(".")]),e._v(" "),a("p",[a("em",[e._v("Job")]),e._v(" variáveis ​​de contexto (escopo global):")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("job.name")]),e._v(": Nome do "),a("em",[e._v("Job")])]),e._v(" "),a("li",[a("code",[e._v("job.group")]),e._v(": Grupo do "),a("em",[e._v("Job")])]),e._v(" "),a("li",[a("code",[e._v("job.id")]),e._v(": ID do "),a("em",[e._v("Job")])]),e._v(" "),a("li",[a("code",[e._v("job.execid")]),e._v(": ID da execução atual")]),e._v(" "),a("li",[a("code",[e._v("job.executionType")]),e._v(": tipo de execução, pode ser "),a("code",[e._v("usuário")]),e._v(", "),a("code",[e._v("agendado")]),e._v(" ou "),a("code",[e._v("agendado pelo usuário")]),e._v(" para execuções "),a("code",[e._v("Executar _Job_ mais tarde")])]),e._v(" "),a("li",[a("code",[e._v("job.username")]),e._v(": Nome de usuário do usuário que está executando o "),a("em",[e._v("Job")])]),e._v(" "),a("li",[a("code",[e._v("job.project")]),e._v(": Nome do projeto")]),e._v(" "),a("li",[a("code",[e._v("job.loglevel")]),e._v(": nível de registro, um de: 'ERROR', 'WARN', 'INFO', 'VERBOSE', 'DEBUG'")]),e._v(" "),a("li",[a("code",[e._v("job.user.email")]),e._v(": Executando o endereço de e-mail do usuário definido em "),a("RouterLink",{attrs:{to:"/user-guide/10-user.html"}},[e._v("Perfil do usuário")]),e._v(".")],1),e._v(" "),a("li",[a("code",[e._v("job.retryAttempt")]),e._v(": Um número que indica a tentativa, se esta execução for uma [nova tentativa](/# nova tentativa).")]),e._v(" "),a("li",[a("code",[e._v("job.wasRetry")]),e._v(":"),a("code",[e._v("true")]),e._v(" se esta execução for uma nova tentativa, caso contrário, "),a("code",[e._v("false")]),e._v(". Veja: [repetir](/# nova tentativa).")]),e._v(" "),a("li",[a("code",[e._v("job.threadcount")]),e._v(": Threadcount (número de "),a("em",[e._v("nós")]),e._v(" executados de uma vez) do "),a("em",[e._v("Job")])]),e._v(" "),a("li",[a("code",[e._v("job.filter")]),e._v(": O filtro usado para selecionar os "),a("em",[e._v("nós")]),e._v(" para este "),a("em",[e._v("job")]),e._v(" (se aplicável)")])]),e._v(" "),a("p",[e._v("Variáveis ​​de contexto "),a("em",[e._v("Nó")]),e._v(" (escopo "),a("em",[e._v("Nó")]),e._v("):")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("node.name")]),e._v(": Nome do "),a("em",[e._v("Nó")]),e._v(" sendo executado em")]),e._v(" "),a("li",[a("code",[e._v("node.hostname")]),e._v(": Nome do host do "),a("em",[e._v("Nó")])]),e._v(" "),a("li",[a("code",[e._v("node.username")]),e._v(": Nome de usuário do usuário remoto")]),e._v(" "),a("li",[a("code",[e._v("node.description")]),e._v(": Descrição do "),a("em",[e._v("nó")])]),e._v(" "),a("li",[a("code",[e._v("node.tags")]),e._v(": lista separada por vírgulas de tags")]),e._v(" "),a("li",[a("code",[e._v("node.os-*")]),e._v(": propriedades do sistema operacional do "),a("em",[e._v("Nó")]),e._v(": "),a("code",[e._v("name")]),e._v(","),a("code",[e._v("version")]),e._v(","),a("code",[e._v("arch")]),e._v(","),a("code",[e._v("family")])]),e._v(" "),a("li",[a("code",[e._v("node.*")]),e._v(": Todos os atributos "),a("em",[e._v("Nó")]),e._v(" definidos no "),a("em",[e._v("Nó")]),e._v(".")])]),e._v(" "),a("p",[e._v("Variáveis ​​de contexto de execução (escopo global):")]),e._v(" "),a("p",[e._v("Os dados de execução são incluídos como um mapa denominado execução contendo as seguintes chaves e valores:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("running.id")]),e._v(": ID da execução")]),e._v(" "),a("li",[a("code",[e._v("running.href")]),e._v(": URL para a visualização de saída de execução")]),e._v(" "),a("li",[a("code",[e._v("running.status")]),e._v(": estado de execução ('em execução', 'falhou', 'abortado', 'com êxito')")]),e._v(" "),a("li",[a("code",[e._v("running.user")]),e._v(": usuário que iniciou o "),a("em",[e._v("job")])]),e._v(" "),a("li",[a("code",[e._v("running.dateStarted")]),e._v(": hora de início (java.util.Date)")]),e._v(" "),a("li",[a("code",[e._v("running.dateStartedUnixtime")]),e._v(": hora de início em milissegundos desde a época (longa)")]),e._v(" "),a("li",[a("code",[e._v("running.dateStartedW3c")]),e._v(": hora de início como uma string formatada em W3C")]),e._v(" "),a("li",[a("code",[e._v("running.description")]),e._v(": string de resumo para a execução")]),e._v(" "),a("li",[a("code",[e._v("running.argstring")]),e._v(": string de argumento para qualquer opção de "),a("em",[e._v("job")])]),e._v(" "),a("li",[a("code",[e._v("running.project")]),e._v(": nome do projeto")]),e._v(" "),a("li",[a("code",[e._v("running.loglevel")]),e._v(": string de nível de log ('ERROR', 'WARN', 'INFO', 'VERBOSE', 'DEBUG')\nOs seguintes valores podem estar disponíveis após o "),a("em",[e._v("job")]),e._v(" ser concluído (não disponível para o acionador onstart):")]),e._v(" "),a("li",[a("code",[e._v("running.failedNodeListString")]),e._v(": lista separada por vírgulas de qualquer "),a("em",[e._v("nós")]),e._v(" que falhou, se presente")]),e._v(" "),a("li",[a("code",[e._v("execution.failedNodeList")]),e._v(": Lista Java de quaisquer nomes de "),a("em",[e._v("nó")]),e._v(" que falharam, se presente")]),e._v(" "),a("li",[a("code",[e._v("execution.succeededNodeListString")]),e._v(": lista separada por vírgulas de quaisquer "),a("em",[e._v("nós")]),e._v(" que tiveram sucesso, se presente")]),e._v(" "),a("li",[a("code",[e._v("execution.succeededNodeList")]),e._v(": Lista Java de quaisquer nomes de "),a("em",[e._v("nó")]),e._v(" que tiveram sucesso, se presente")]),e._v(" "),a("li",[a("code",[e._v("execution.nodestatus")]),e._v(": Mapa Java contendo contagens resumidas de "),a("em",[e._v("nó")]),e._v(" sucesso/falha/total, na forma: [sucesso: int, falha: int, total: int]")]),e._v(" "),a("li",[a("code",[e._v("running.dateEnded")]),e._v(": hora de término (java.util.Date)")]),e._v(" "),a("li",[a("code",[e._v("running.dateEndedUnixtime")]),e._v(": hora de término em milissegundos desde a época (longo)")]),e._v(" "),a("li",[a("code",[e._v("running.dateEndedW3c")]),e._v(": hora de término como string formatada W3C")]),e._v(" "),a("li",[a("code",[e._v("running.abortedby")]),e._v(": usuário que abortou a execução")])]),e._v(" "),a("p",[e._v("Variáveis ​​de contexto adicionais do manipulador de erros (escopo global):")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("result.reason")]),e._v(": um código que indica a razão da falha do passo\n"),a("ul",[a("li",[e._v("Sequências de código de razão comum usadas por "),a("em",[e._v("nó")]),e._v(" execução de comandos ou scripts:\n"),a("ul",[a("li",[a("code",[e._v("NonZeroResultCode")]),e._v(" - a execução retornou um código diferente de zero")]),e._v(" "),a("li",[a("code",[e._v("SSHProtocolFailure")]),e._v(" - falha do protocolo SSH")]),e._v(" "),a("li",[a("code",[e._v("HostNotFound")]),e._v(" - host não encontrado")]),e._v(" "),a("li",[a("code",[e._v("ConnectionTimeout")]),e._v(" - tempo limite de conexão")]),e._v(" "),a("li",[a("code",[e._v("ConnectionFailure")]),e._v(" - falha de conexão (por exemplo, recusada)")]),e._v(" "),a("li",[a("code",[e._v("IOFailure")]),e._v(" - erro IO")]),e._v(" "),a("li",[a("code",[e._v("AuthenticationFailure")]),e._v(" - autenticação foi recusada ou incorreta")])])]),e._v(" "),a("li",[e._v("Strings de código de razão usadas por referências de "),a("em",[e._v("Job")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("JobFailed")]),e._v(" - o fluxo de trabalho de um "),a("em",[e._v("Job")]),e._v(" referenciado falhou")]),e._v(" "),a("li",[a("code",[e._v("NotFound")]),e._v(" - referenciado "),a("em",[e._v("Job")]),e._v(" não encontrado")]),e._v(" "),a("li",[a("code",[e._v("Unauthorized")]),e._v(" - referenciado "),a("em",[e._v("Job")]),e._v(" não autorizado")]),e._v(" "),a("li",[a("code",[e._v("InvalidOptions")]),e._v(" - opções de entrada "),a("em",[e._v("Job")]),e._v(" referenciadas inválidas")]),e._v(" "),a("li",[a("code",[e._v("NoMatchedNodes")]),e._v(" - filtros de despacho "),a("em",[e._v("Job")]),e._v(" "),a("em",[e._v("nó")]),e._v(" referenciados não tinham correspondência")])])]),e._v(" "),a("li",[e._v("Código de razão usado de um "),a("em",[e._v("Passo do nó")]),e._v(" com falha se o manipulador for um "),a("em",[e._v("Passo do fluxo de trabalho")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("NodeDispatchFailure")]),e._v(" - um ou mais "),a("em",[e._v("nós")]),e._v(" falharam no passo")])])])])]),e._v(" "),a("li",[a("code",[e._v("result.message")]),e._v(": uma string que descreve a falha")]),e._v(" "),a("li",[a("code",[e._v("result.resultCode")]),e._v(": código de saída de uma execução (se disponível)")]),e._v(" "),a("li",[a("code",[e._v("result.failedNodes")]),e._v(": lista separada por vírgulas de nomes "),a("em",[e._v("nó")]),e._v(" que falhou para um "),a("code",[e._v("NodeDispatchFailure")])])]),e._v(" "),a("p",[e._v("Variáveis ​​de contexto de opção são referidas como "),a("code",[e._v("option.NAME")]),e._v(" (mais sobre "),a("RouterLink",{attrs:{to:"/user-guide/job-options.html"}},[a("em",[e._v("Job")]),e._v(" Options")]),e._v(".)")],1),e._v(" "),a("p",[e._v("Pode haver variáveis ​​de contexto adicionais disponíveis, como valores "),a("code",[e._v("data.*")]),e._v(" Ao usar os "),a("RouterLink",{attrs:{to:"/user-guide/job-workflows.html#variaveis-​​de-contexto"}},[e._v("Plugins de filtro de registro de captura de dados")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"uso-da-variavel-de-contexto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uso-da-variavel-de-contexto"}},[e._v("#")]),e._v(" Uso da variável de contexto")]),e._v(" "),a("p",[e._v("Variáveis ​​de contexto podem ser usadas de algumas maneiras em um passo do "),a("em",[e._v("Job")]),e._v(", com sintaxes ligeiramente diferentes:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Comandos, Argumentos de Script e "),a("em",[e._v("Job")]),e._v(" Argumentos de Referência")]),e._v(" "),a("p",[e._v(": "),a("code",[e._v("${ctx.name}")])])]),e._v(" "),a("li",[a("p",[e._v("Conteúdo de script embutido ("),a("em",[e._v("ver nota")]),e._v(")")]),e._v(" "),a("p",[e._v(": "),a("code",[e._v("@ctx.name@")])])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTA")]),e._v(" "),a("p",[e._v('A expansão da variável "Conteúdo de script embutido" '),a("strong",[e._v("não")]),e._v(' está disponível para passos de "Arquivo de script". O arquivo de script não é reescrito quando usado para execução.')])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("DICA")]),e._v(" "),a("p",[e._v("Isso pode ser desativado, consulte "),a("RouterLink",{attrs:{to:"/administration/configuration/config-file-reference.html#framework-properties"}},[e._v("Guia do administrador> Referência do arquivo de configuração> framework.properties")]),e._v(".")],1)]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Variáveis ​​de ambiente ("),a("em",[e._v("ver nota")]),e._v(")")]),e._v(" "),a("p",[e._v(": "),a("code",[e._v("$RD_CTX_NAME")])]),e._v(" "),a("p",[e._v("A sintaxe para variáveis ​​de ambiente é que todas as letras se tornam maiúsculas, a pontuação é substituída por sublinhado e o nome é prefixado com "),a("code",[e._v("RD")]),e._v(".")])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTA")]),e._v(" "),a("p",[e._v("Veja o capítulo "),a("RouterLink",{attrs:{to:"/administration/projects/_node_-execution/ssh.html#configuring-remote-machine-for-ssh"}},[e._v("Configurando Máquina Remota para SSH")]),e._v(" para informações sobre os requisitos do servidor SSH.")],1)]),e._v(" "),a("ul",[a("li",[e._v("Sintaxe especial para escopos diferentes (veja abaixo)")])]),e._v(" "),a("h3",{attrs:{id:"sobre-escopos-de-variavel-de-contexto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sobre-escopos-de-variavel-de-contexto"}},[e._v("#")]),e._v(" Sobre Escopos de Variável de Contexto")]),e._v(" "),a("p",[e._v("As variáveis ​​"),a("code",[e._v("job.*")]),e._v(" e "),a("code",[e._v("execution.*")]),e._v(" mencionadas acima existem no escopo Global.")]),e._v(" "),a("p",[e._v("Variáveis ​​de escopo global estão disponíveis para todos os tipos de passos de fluxo de trabalho.")]),e._v(" "),a("p",[e._v("Os valores "),a("code",[e._v("node.*")]),e._v(" Estão disponíveis dentro de um escopo "),a("em",[e._v("Nó")]),e._v(". Pode haver vários Escopos de "),a("em",[e._v("Nó")]),e._v(" e cada Escopo de "),a("em",[e._v("Nó")]),e._v(" é vinculado a um Nome de "),a("em",[e._v("Nó")]),e._v(" específico.")]),e._v(" "),a("p",[e._v("Os valores dos Escopos de "),a("em",[e._v("Nó")]),e._v(" para um nome de "),a("em",[e._v("Nó")]),e._v(" específico estão disponíveis no mesmo Escopos para o mesmo "),a("em",[e._v("Nó")]),e._v(".")]),e._v(" "),a("p",[e._v("Variáveis ​​que são adicionadas ao Contexto enquanto o fluxo de trabalho está em execução, como variáveis ​​"),a("code",[e._v("data.*")]),e._v(", São adicionadas ao Escopo Global ou a um Escopo "),a("em",[e._v("Nó")]),e._v(".")]),e._v(" "),a("p",[e._v("Se a variável for incluída em um "),a("em",[e._v("Passo do nó")]),e._v(", os valores de dados serão armazenados no Escopos do "),a("em",[e._v("Nó")]),e._v(" para esse "),a("em",[e._v("nó")]),e._v(". Isso permite que vários valores sejam adicionados por diferentes "),a("em",[e._v("nós")]),e._v(" com o mesmo nome de variável.")]),e._v(" "),a("p",[e._v("Quaisquer variáveis ​​dentro do mesmo Escopo podem ser referenciadas sem sintaxe especial. Por exemplo, dentro de um "),a("em",[e._v("Passo do nó")]),e._v(" outras variáveis\nadicionado ao Contexto dentro do mesmo "),a("em",[e._v("Nó")]),e._v(" Escopo para o mesmo "),a("em",[e._v("nó")]),e._v(" pode ser referenciado usando "),a("code",[e._v("${data.MyKey}")]),e._v(".")]),e._v(" "),a("p",[e._v('Se um valor não for encontrado para a referência de variável dentro do escopo atual, o escopo é "ampliado" para localizá-lo em um escopo superior. Portanto, todas as variáveis ​​com escopo global\nos valores podem ser referenciados usando a sintaxe normal.')]),e._v(" "),a("p",[e._v("Os valores de escopo "),a("em",[e._v("Nó")]),e._v(" podem ser referenciados a partir do escopo Global ou de um escopo de "),a("em",[e._v("Nó")]),e._v(" diferente usando uma sintaxe especial:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("${data.MyKey@MyNodeName}")]),e._v(" - referencia a variável dentro do escopo "),a("em",[e._v("Nó")]),e._v(" para o "),a("code",[e._v("MyNodeName")]),e._v(" "),a("em",[e._v("nó")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("${data.MyKey*}")]),e._v(" - coleta todos os valores de variáveis ​​de todos os Escopos do "),a("em",[e._v("Nó")]),e._v(", e produz um único valor usando "),a("code",[e._v(",")]),e._v("(vírgula) para delimitar os valores.")]),e._v(" "),a("li",[a("code",[e._v("${data.MyKey*;}")]),e._v(" - especifica um delimitador diferente para os valores")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("DICA")]),e._v(" "),a("p",[e._v("Se uma referência de variável não produz o valor esperado, certifique-se de que o Escopo do valor e o Escopo do ponto de referência (ou seja, onde a referência da variável de contexto está sendo avaliada) correspondem.")]),e._v(" "),a("p",[e._v("O "),a("strong",[e._v("Log Data")]),e._v(" "),a("em",[e._v("Passo do fluxo de trabalho")]),e._v(" registrará todas as variáveis ​​de contexto com escopo definido, para visualizar quais valores estão disponíveis em um determinado ponto em um fluxo de trabalho.")]),e._v(" "),a("p",[e._v("A Estratégia de Fluxo de Trabalho usada no Fluxo de Trabalho rege quando passos executa: Uma estratégia sequencial significa que cada passo será processado antes de passos subsequentes, o que permite (por exemplo) Passo 2 fazer referência a qualquer valor armazenado em Passo 1, mesmo de "),a("em",[e._v("Nós")]),e._v(" diferentes. No entanto, um "),a("em",[e._v("Nó")]),e._v(" primeiro, Paralelo ou Estratégia de conjunto de regras terá um comportamento diferente, portanto, dependendo da ordem em que os Passos são executados, alguns valores capturados podem ou não estar presentes.")])]),e._v(" "),a("h3",{attrs:{id:"plugins-de-filtro-de-registro-de-captura-de-dados"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugins-de-filtro-de-registro-de-captura-de-dados"}},[e._v("#")]),e._v(" Plugins de filtro de registro de captura de dados")]),e._v(" "),a("p",[e._v("O oferece dois plug-ins de filtro de registro de captura de dados diferentes. O primeiro, Dados de valor-chave, captura dados simples de chave/valor usando um formato de texto simples. O segundo, Multiline Regex Data Capture, captura dados de chave/valor regex multilinha usando um formato de texto simples. Os plug-ins do filtro de registro de captura de dados permitem que os usuários definam e utilizem variáveis ​​de dados em vários "),a("em",[e._v("job")]),e._v(" passos.")]),e._v(" "),a("p",[e._v("Para obter mais informações sobre dados de valor-chave, consulte "),a("RouterLink",{attrs:{to:"/user-guide/log-filters/key-value-data.html"}},[e._v("Dados de valor-chave")]),e._v(".")],1),e._v(" "),a("p",[e._v("Para obter mais informações sobre dados de valor-chave, consulte "),a("RouterLink",{attrs:{to:"/user-guide/log-filters/multi-line-regex.html"}},[e._v("Multiline Regex Capture")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"ferramentas-de-linha-de-comando-e-acesso-a-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ferramentas-de-linha-de-comando-e-acesso-a-api"}},[e._v("#")]),e._v(" Ferramentas de linha de comando e acesso à API")]),e._v(" "),a("p",[a("em",[e._v("Jobs")]),e._v(" podem ser exportados ou importados no formato XML ou Yaml usando a API ou a ferramenta CLI "),a("code",[e._v("rd")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/api/api.html#export-jobs"}},[e._v("Exportando "),a("em",[e._v("Jobs")])])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/api/api.html#importing-jobs"}},[e._v("Importing "),a("em",[e._v("Jobs")])])],1),e._v(" "),a("li",[a("a",{attrs:{href:"https://google.github.io/wcontrol-cli/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ferramenta RD CLI"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);o.default=r.exports}}]);