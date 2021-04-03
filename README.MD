## Sobre esse projeto

Uma agenda simples de contato, aonde é possível cadastrar, editar e deletar um registro.
Resolvi criar esse projeto para mostrar um pouco do conhecimento em **AngularJS**.

Você pode testar esse projeto acessando nas seguintes links: 


- https://codigosecafe.github.io/angendaAngularJS/

### Sobre o desenvolvimento:
Busquei usar alguns dos principais recursos do angularJS@1.6.6, no desenvolvimento. Também utilizei os seguintes recursos para uma melhor apresentação do Front-end.

- https://getbootstrap.com/
- http://fontawesome.io/
- https://daneden.github.io/animate.css/
- https://sciactive.com/pnotify/
- https://jquery.com/
- https://angularjs.org/
- https://github.com/gsklee/ngStorage

Acabei usando alguns recursos que acredito ser bem úteis, e um desses recursos é todo o conteúdo de texto estático, vir de um arquivo json, assim facilitando caso queira mudar o idioma do projeto, a maioria das traduções feita no HTML, são feitas por DIRETIVAS, um exemplo do uso:

Diretiva **cec-text**
---
```html
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
            <p class="text-center" cec-text="TABELA_CONTATOS_MODAL_DELETAR_TEXTO_CONFIRMACAO"></p>
            <h4 class="text-center"> {{ recordNameDelete }} </h4>
         </div>
         <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" cec-text="TABELA_CONTATOS_MODAL_DELETAR_BTN_CANCELAR"></button>
            <button type="button" class="btn btn-primary" cec-text="TABELA_CONTATOS_MODAL_DELETAR_BTN_SIM" ng-click="confirmDeleteRecord()"></button>
         </div>
      </div>
   </div>
</div>
```
Esse é apenas um exemplo dos recursos utilizado nesse projeto. 
A tradução inicial de basea pelo atributo lang na tag HTML
```html
<html lang="pt-br">
```
Mas pode ser alterada, ainda não criei uma ação para isso na agenda mas pode ser alterada através do LocalStorage na aba Application no inspetor de elemento.

Basta procurar pela key **ngStorage-lang** e alterar o seu valor de **"pt-br"** para **"en"** e apagar a key **ngStorage-translate**




---
> codigosecafe+git@gmail.com | Skype: claudio.alexssandro | https://www.linkedin.com/in/claudioalexssandrolino/
---
