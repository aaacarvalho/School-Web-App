(this.webpackJsonpedu_app=this.webpackJsonpedu_app||[]).push([[0],{16:function(e,a,l){e.exports=l(27)},26:function(e,a,l){},27:function(e,a,l){"use strict";l.r(a);var t=l(0),n=l.n(t),r=l(12),c=l.n(r),m=l(3),o=l(4),s=function(e){var a=e.extraClasses?e.extraClasses:"";return n.a.createElement("div",{className:"white-card "+a},e.children)},i=function(e){return n.a.createElement("label",{className:"input-container"},e.children)},u=function(e){return n.a.createElement(i,null,n.a.createElement("button",{className:"button button--send",onClick:function(){e.Action&&e.Action()}},e.text))},E=l(6),p=l.n(E),d=function(){return n.a.createElement("div",{className:"page login"},n.a.createElement(s,null,n.a.createElement("img",{src:p.a,alt:"Logo"}),n.a.createElement("h2",null,"Acesse sua Conta"),n.a.createElement("form",{className:"login__form"},n.a.createElement(i,null,n.a.createElement("i",{className:"icon ion-md-person"}),"Usu\xe1rio",n.a.createElement("input",{type:"text",placeholder:"Usu\xe1rio"})),n.a.createElement(i,null,n.a.createElement("i",{className:"icon ion-md-key"}),"Senha",n.a.createElement("input",{type:"password",placeholder:"Senha"})),n.a.createElement(m.b,{to:"/aulas"},n.a.createElement(u,{text:"Enviar",Action:null})))))},N=l(15),h=function(){var e=Object(t.useState)(!1),a=Object(N.a)(e,2),l=a[0],r=a[1];return n.a.createElement("nav",{className:"main-nav"},n.a.createElement("i",{className:"icon ion-md-menu",onClick:function(){var e=document.querySelector(".main-menu").classList,a=document.querySelector(".icon").classList;l?(r(!1),e.contains("isVisible")&&e.remove("isVisible"),e.add("isNotVisible"),a.remove("ion-md-close"),a.add("ion-md-menu")):(r(!0),e.contains("isNotVisible")&&e.remove("isNotVisible"),e.add("isVisible"),a.remove("ion-md-menu"),a.add("ion-md-close"))}}),n.a.createElement("img",{src:p.a,alt:"Logo"}),n.a.createElement("ul",{className:"main-menu"},n.a.createElement("li",null,n.a.createElement(m.b,{to:"/usuarios"},n.a.createElement("i",{className:"icon ion-md-person-add"}),"Usu\xe1rios")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/alunos"},n.a.createElement("i",{className:"icon ion-md-happy"}),"Alunos")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/professores"},n.a.createElement("i",{className:"icon ion-md-people"}),"Professores")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/aulas"},n.a.createElement("i",{className:"icon ion-md-calendar"}),"Aulas")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/salas"},n.a.createElement("i",{className:"icon ion-md-business"}),"Salas")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/"},n.a.createElement("i",{className:"icon ion-md-power"}),"Sair"))))},f=function(e){return n.a.createElement(s,{extraClasses:"page-title"},n.a.createElement("h2",null,e.title))},b=function(e){return n.a.createElement("ul",{className:"list"},e.children)},x=function(){return n.a.createElement("section",{className:"page"},n.a.createElement(h,null),n.a.createElement(f,{title:"Salas de aula"}),n.a.createElement(s,null,n.a.createElement("h2",null,"Cadastrar Sala"),n.a.createElement("form",null,n.a.createElement(i,null,"Sala",n.a.createElement("input",{type:"text",placeholder:"Sala"})),n.a.createElement(u,{text:"Enviar"}))),n.a.createElement(s,{extraClasses:"extended"},n.a.createElement("h2",null,"Salas"),n.a.createElement(b,null,n.a.createElement("li",{className:"long"},"Sala"),n.a.createElement("li",null,"Status"),n.a.createElement("li",{className:"short"},"Editar"),n.a.createElement("li",{className:"short"},"Excluir")),n.a.createElement(b,null,n.a.createElement("li",{className:"long"},"Sala 1"),n.a.createElement("li",null,n.a.createElement("select",null,n.a.createElement("option",null,"Ativa"),n.a.createElement("option",null,"Inativa"))),n.a.createElement("li",{className:"short"},n.a.createElement("i",{className:"icon ion-md-build"})),n.a.createElement("li",{className:"short"},n.a.createElement("i",{className:"icon ion-md-trash"}))),n.a.createElement(b,null,n.a.createElement("li",{className:"long"},"Sala 2"),n.a.createElement("li",null,n.a.createElement("select",null,n.a.createElement("option",null,"Ativa"),n.a.createElement("option",null,"Inativa"))),n.a.createElement("li",{className:"short"},n.a.createElement("i",{className:"icon ion-md-build"})),n.a.createElement("li",{className:"short"},n.a.createElement("i",{className:"icon ion-md-trash"})))))},S=function(){return n.a.createElement("section",{className:"page"},n.a.createElement(h,null),n.a.createElement(f,{title:"Usu\xe1rios"}),n.a.createElement(s,null,n.a.createElement(i,null,"Nome",n.a.createElement("input",{type:"text",placeholder:"Nome"})),n.a.createElement(i,null,"Tipo de usu\xe1rio",n.a.createElement("select",null,n.a.createElement("option",null,"Administrador"),n.a.createElement("option",null,"Usu\xe1rio"),n.a.createElement("option",null,"Professor"),n.a.createElement("option",null,"Aluno"))),n.a.createElement(i,null,"Usu\xe1rio",n.a.createElement("input",{type:"text",placeholder:"Usu\xe1rio"})),n.a.createElement(i,null,"Senha",n.a.createElement("input",{type:"password",placeholder:"Senha"})),n.a.createElement(u,{text:"Enviar"})),n.a.createElement(s,{extraClasses:"extended"},n.a.createElement("h2",null,"Todos Usu\xe1rios"),n.a.createElement(b,null,n.a.createElement("li",{className:"long"},"Nome"),n.a.createElement("li",null,"Usu\xe1rio"),n.a.createElement("li",null,"Tipo"),n.a.createElement("li",{className:"short"},"Editar"),n.a.createElement("li",{className:"short"},"Excluir")),n.a.createElement(b,null,n.a.createElement("li",{className:"long"},"Aluno 1"),n.a.createElement("li",null,"aluno.1"),n.a.createElement("li",null,"Aluno"),n.a.createElement("li",{className:"short"},n.a.createElement("i",{className:"icon ion-md-build"})),n.a.createElement("li",{className:"short"},n.a.createElement("i",{className:"icon ion-md-trash"}))),n.a.createElement(b,null,n.a.createElement("li",{className:"long"},"Professor 1"),n.a.createElement("li",null,"professor.1"),n.a.createElement("li",null,"Professor"),n.a.createElement("li",{className:"short"},n.a.createElement("i",{className:"icon ion-md-build"})),n.a.createElement("li",{className:"short"},n.a.createElement("i",{className:"icon ion-md-trash"}))),n.a.createElement(b,null,n.a.createElement("li",{className:"long"},"Administrador 1"),n.a.createElement("li",null,"Administrador.1"),n.a.createElement("li",null,"Administrador"),n.a.createElement("li",{className:"short"},n.a.createElement("i",{className:"icon ion-md-build"})),n.a.createElement("li",{className:"short"},n.a.createElement("i",{className:"icon ion-md-trash"}))),n.a.createElement(b,null,n.a.createElement("li",{className:"long"},"Professor 2"),n.a.createElement("li",null,"professor.2"),n.a.createElement("li",null,"Professor"),n.a.createElement("li",{className:"short"},n.a.createElement("i",{className:"icon ion-md-build"})),n.a.createElement("li",{className:"short"},n.a.createElement("i",{className:"icon ion-md-trash"}))),n.a.createElement(b,null,n.a.createElement("li",{className:"long"},"Professor 3"),n.a.createElement("li",null,"professor.3"),n.a.createElement("li",null,"Professor"),n.a.createElement("li",{className:"short"},n.a.createElement("i",{className:"icon ion-md-build"})),n.a.createElement("li",{className:"short"},n.a.createElement("i",{className:"icon ion-md-trash"}))),n.a.createElement(b,null,n.a.createElement("li",{className:"long"},"Aluno 2"),n.a.createElement("li",null,"Aluno.1"),n.a.createElement("li",null,"Aluno"),n.a.createElement("li",{className:"short"},n.a.createElement("i",{className:"icon ion-md-build"})),n.a.createElement("li",{className:"short"},n.a.createElement("i",{className:"icon ion-md-trash"})))))},A=function(){return n.a.createElement(i,null,"Mat\xe9ria",n.a.createElement("select",null,n.a.createElement("option",null,"Selecione..."),n.a.createElement("option",null,"Disciplina 1"),n.a.createElement("option",null,"Disciplina 2"),n.a.createElement("option",null,"Disciplina 3"),n.a.createElement("option",null,"Disciplina 4"),n.a.createElement("option",null,"Disciplina 5")))},g=function(){return n.a.createElement(i,null,"Professor",n.a.createElement("select",null,n.a.createElement("option",null,"Selecione..."),n.a.createElement("option",null,"Professor 1"),n.a.createElement("option",null,"Professor 2"),n.a.createElement("option",null,"Professor 3"),n.a.createElement("option",null,"Professor 4"),n.a.createElement("option",null,"Professor 5")))},v=function(){return n.a.createElement(i,null,"Sala de aula",n.a.createElement("select",null,n.a.createElement("option",null,"Selecione..."),n.a.createElement("option",null,"Sala 1"),n.a.createElement("option",null,"Sala 2"),n.a.createElement("option",null,"Sala 3"),n.a.createElement("option",null,"Sala 4"),n.a.createElement("option",null,"Sala 5")))},y=function(){return n.a.createElement("section",{className:"page"},n.a.createElement(h,null),n.a.createElement(f,{title:"Aulas"}),n.a.createElement(s,null,n.a.createElement("h2",null,"Nova aula"),n.a.createElement(A,null),n.a.createElement(g,null),n.a.createElement(v,null),n.a.createElement(i,null,"Data",n.a.createElement("input",{type:"date"})),n.a.createElement(u,{text:"Enviar"})),n.a.createElement(s,null,n.a.createElement("h2",null,"Aulas Marcadas"),n.a.createElement(A,null),n.a.createElement(g,null),n.a.createElement(v,null),n.a.createElement(i,null,"Data",n.a.createElement("input",{type:"date"})),n.a.createElement(u,{text:"Enviar"})))},C=function(){return n.a.createElement(i,null,"Aluno",n.a.createElement("select",null,n.a.createElement("option",null,"Selecione..."),n.a.createElement("option",null,"Aluno 1"),n.a.createElement("option",null,"Aluno 2"),n.a.createElement("option",null,"Aluno 3"),n.a.createElement("option",null,"Aluno 4"),n.a.createElement("option",null,"Aluno 5")))},P=function(){return n.a.createElement("section",{className:"page"},n.a.createElement(h,null),n.a.createElement(f,{title:"Alunos"}),n.a.createElement(s,null,n.a.createElement("h2",null,"Cadastrar Aluno"),n.a.createElement("form",null,n.a.createElement(i,null,"Nome",n.a.createElement("input",{type:"text",placeholder:"Nome"})),n.a.createElement(i,null,"Sobrenome",n.a.createElement("input",{type:"text",placeholder:"Sobrenome"})),n.a.createElement(i,null,"Email",n.a.createElement("input",{type:"email",placeholder:"Email"})),n.a.createElement(i,null,"Celular",n.a.createElement("input",{type:"phone",placeholder:"Celular"})),n.a.createElement(u,{text:"Cadastrar"}))),n.a.createElement(s,null,n.a.createElement("h2",null,"Creditar Aluno"),n.a.createElement("form",null,n.a.createElement(C,null),n.a.createElement(i,null,"Cr\xe9ditos",n.a.createElement("input",{type:"number",placeholder:"Cr\xe9ditos",min:"0"})),n.a.createElement(u,{text:"Creditar"}))))},U=function(){return n.a.createElement("section",{className:"page"},n.a.createElement(h,null),n.a.createElement(f,{title:"Professores"}),n.a.createElement(s,null,n.a.createElement("h2",null,"Cadastrar Professor"),n.a.createElement("form",null,n.a.createElement(i,null,"Nome",n.a.createElement("input",{type:"text",placeholder:"Nome"})),n.a.createElement(i,null,"Sobrenome",n.a.createElement("input",{type:"text",placeholder:"Sobrenome"})),n.a.createElement(A,null),n.a.createElement(u,{text:"Cadastrar"}))),n.a.createElement(s,{extraClasses:"extended"},n.a.createElement("h2",null,"Professores"),n.a.createElement(b,null,n.a.createElement("li",null,"Nome"),n.a.createElement("li",null,"Sobrenome"),n.a.createElement("li",null,"Disciplina"),n.a.createElement("li",{className:"short"},"Editar"),n.a.createElement("li",{className:"short"},"Excluir")),n.a.createElement(b,null,n.a.createElement("li",null,"Nome 1"),n.a.createElement("li",null,"Sobrenome 1"),n.a.createElement("li",null,"Matem\xe1tica"),n.a.createElement("li",{className:"short"},n.a.createElement("i",{className:"icon ion-md-build"})),n.a.createElement("li",{className:"short"},n.a.createElement("i",{className:"icon ion-md-trash"}))),n.a.createElement(b,null,n.a.createElement("li",null,"Nome 2"),n.a.createElement("li",null,"Sobrenome 2"),n.a.createElement("li",null,"Portugu\xeas"),n.a.createElement("li",{className:"short"},n.a.createElement("i",{className:"icon ion-md-build"})),n.a.createElement("li",{className:"short"},n.a.createElement("i",{className:"icon ion-md-trash"}))),n.a.createElement(b,null,n.a.createElement("li",null,"Nome 3"),n.a.createElement("li",null,"Sobrenome 3"),n.a.createElement("li",null,"F\xedsica"),n.a.createElement("li",{className:"short"},n.a.createElement("i",{className:"icon ion-md-build"})),n.a.createElement("li",{className:"short"},n.a.createElement("i",{className:"icon ion-md-trash"})))))},D=function(){return n.a.createElement(m.a,null,n.a.createElement(o.c,null,n.a.createElement(o.a,{exact:!0,path:"/",component:d}),n.a.createElement(o.a,{exact:!0,path:"/aulas",component:y}),n.a.createElement(o.a,{exact:!0,path:"/alunos",component:P}),n.a.createElement(o.a,{exact:!0,path:"/professores",component:U}),n.a.createElement(o.a,{exact:!0,path:"/salas",component:x}),n.a.createElement(o.a,{exact:!0,path:"/usuarios",component:S})))},w=function(){return n.a.createElement(D,null)};l(26);c.a.render(n.a.createElement(w,null),document.getElementById("root"))},6:function(e,a,l){e.exports=l.p+"static/media/logo.4254f227.webp"}},[[16,1,2]]]);
//# sourceMappingURL=main.405fe002.chunk.js.map