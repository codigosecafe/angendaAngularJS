
# Claudio Alexssandro Lino

>Sou Full Stack Developer gosto de atuar em todas as fazes dos projetos, desde a criação do wireframe, configuração do servidor, pranejamento das historias atráves dos metódos agéis, codificação do backend e frontend. 
>
>Tenho experiência no frameworks Laravel (4 anos). Exerci varias funções dentro da minha profissão que qualificou a ser um Full Stack Developer , executei vários trabalhos como Web Design, Ilustrador WEB, Gerente de Media Social, Consultor SEO voltado para estrutura HTML, Desenvolvimento back-end para aplicações Web e Desktop, configuração e manutenção de servidores web baseado em linux. 
>

>Especializações: PHP, AngularJS, MySQL, PostgreSQL, MariaDB, Framework PHP Laravel, Intel® XDK, Ionic, Smarty Template - Blade Template - Bootstrap - Framework PHP CodeIgniter, Wordpress, Linux, Java Script, Jquery junto com Ajax, GIT e Vagrant.

## Sobre esse projeto

Uma agenda simples de contato, aonde é possível cadastrar, editar e deletar um registro.
Resolvi criar esse projeto para mostrar um pouco do conhecimento em **AngularJS**. Com o tempo irei aprimorar e criar novos recursos para esse projeto.
### Sobre o desenvolvimento:
Busquei usar alguns dos principais recursos do angularJS@1.6.6, no desenvolvimento. Também utilizei os seguintes recursos para uma melhor apresentação do Front-end.

- https://getbootstrap.com/
- http://fontawesome.io/
- https://daneden.github.io/animate.css/
- https://sciactive.com/pnotify/
- https://jquery.com/
- https://angularjs.org/
- https://github.com/gsklee/ngStorage

Acabei usando alguns recursos que acredito ser bem útil quando se pensa em um projeto que possa ser utilizado por qualquer pessoa, e um desses recursos é todo o conteúdo de estático de texto, vir de um arquivo json, assim facilitando caso queira mudar o idioma do projeto, a maioria das traduções feita no HTML, são feitas por DIRETIVAS, um exemplo do uso:

Diretiva **cec-text**
---
```javascript
<div class="modal fade" id="modalDeleteRecord" tabindex="-1" role="dialog" aria-labelledby="modalDeleteRecordLabel" aria-hidden="true">
   <div class="modal-dialog" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h5 class="modal-title" id="modalDeleteRecordLabel" cec-text="TABELA_CONTATOS_MODAL_DELETAR_TITLE"></h5>
            <button type="button" class="close fecharModal" aria-label="Close" ng-click="closeModal()">
            <span aria-hidden="true">&times;</span>
            </button>
         </div>
         <div class="modal-body">
            <p class="text-center" cec-text="TABELA_CONTATOS_MODAL_DETLETAR_TEXTO_CONFIRMACAO"></p>
            <h4 class="text-center"> {{ recordNameDelete }} </h4>
         </div>
         <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" cec-text="TABELA_CONTATOS_MODAL_DETLETAR_BTN_CANCELAR"></button>
            <button type="button" class="btn btn-primary" cec-text="TABELA_CONTATOS_MODAL_DETLETAR_BTN_SIM" ng-click="confirmDeleteRecord()"></button>
         </div>
      </div>
   </div>
</div>
```
Esse é apenas um exemplo dos recursos utilizado nesse projeto.

Você pode testar esse projeto acessando a seguinte URL: 
http://codigosecafe.com.br/agenda/

---
> codigosecafe+git@gmail.com | Skype: claudio.alexssandro | https://www.linkedin.com/in/claudioalexssandrolino/
---