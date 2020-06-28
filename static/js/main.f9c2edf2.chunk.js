(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e){e.exports=[{id:1,logo:"https://pbs.twimg.com/profile_images/1123386148288491520/48zba-Q2_400x400.jpg",company:"BlindlyDate",job_title:"Full Stack Developer",responsibilities:["Built Profile back-end server using Node.js, Express.js, MongoDB and Mongoose","Built Image back-end server using AWS S3","Built the application front-end UI using React-Native, React-Native Navigation","Cooperated with Chat teammate to build a functional conversation room using Socket.io","Cooperated with Auth teammate to build a functional Login System"],skills:["React-Native","Javascript","Node.js","Express.js","Mongoose","Socket.io","AWS"],date:{start:"2019-06",end:"2020-03"}},{id:2,logo:"https://pbs.twimg.com/profile_images/1124403763630858240/Yz2BfK1K_400x400.jpg",company:"San Francsico State Univeristy Asian American & Pacific Islander",job_title:"Web Developer",responsibilities:["Updating new event and team member information for the existing website","Building a new service website to replace the old one on Drupal using JavaScript, Html, CSS, JQuery."],skills:["HTML5","CSS","Bootstrap"],date:{start:"2018-01",end:"2018-09"}}]},function(e){e.exports=[{id:"1",image:"https://uploads.codesandbox.io/uploads/user/ea14886a-d3cb-4078-a05b-a39d098edff8/E8qF-p1.png",alt:"laptop"},{id:"2",image:"https://uploads.codesandbox.io/uploads/user/ea14886a-d3cb-4078-a05b-a39d098edff8/Kjg7-p2.png",alt:"cloud"},{id:"3",image:"https://uploads.codesandbox.io/uploads/user/ea14886a-d3cb-4078-a05b-a39d098edff8/YL1v-p3.png",alt:"mobile"},{id:"4",image:"https://uploads.codesandbox.io/uploads/user/ea14886a-d3cb-4078-a05b-a39d098edff8/HA9_-p4.png",alt:"data"}]},function(e,a,t){e.exports=t(13)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),i=t(3),s=t.n(i),r=(t(12),t(1)),c=t.n(r);c()(window).scroll(function(e){var a=c()(window).scrollTop();a>80&&window.innerWidth>414?(c()(".sidebar").css({width:"75px"}),c()("#App").css({"margin-left":"75px"})):a<80&&window.innerWidth>414&&(c()(".sidebar").css({width:"0px"}),c()("#App").css({"margin-left":"0px"}))}),c()(window).scroll(function(e){var a=c()(window).scrollTop();a>80&&window.innerWidth<=414?c()(".navbar").css({position:"fixed",padding:"30px"}):a<80&&window.innerWidth<=414&&c()(".navbar").css({position:"relative",padding:"15px"})}),c()(function(){window.innerWidth>414?c()("ul#myScrollSpy").removeAttr("myScrollSpy"):c()("div#myScrollSpy").removeAttr("myScrollSpy")});let o=!0;c()(window).scroll(function(e){c()(window).scrollTop()>document.getElementById("projects").scrollTop&&window.innerWidth>414&&o&&(c()("#p2").css({"margin-top":-300}).addClass("floatingObj"),c()("#p3").css({"margin-left":-125}).addClass("floatingObj"),c()("#p4").css({"margin-left":325}).addClass("floatingObj"),o=!1)}),c()(function(){c()("#ptextContainer").mouseover(function(){c()("#ptext").text("Let's Go!")}),c()("#ptextContainer").mouseout(function(){c()("#ptext").text("Check out my latest Projects!")})});var d=t(4);c()(function(){Object(d.a)({targets:"#begin",delay:1e3,easing:"easeInOutCirc",update:function(e){c()("#begin .progress-log").val(Math.round(e.progress)+"%")},complete:function(e){c()("#splash").fadeOut("slow",()=>{c()("#splash").remove()}),c()("#introduction").css({opacity:1}),c()("#contact").css({opacity:1})}}),c()("#splash").click(()=>{c()("#splash").fadeOut("slow",()=>{c()("#splash").remove()})})});let m=!0;function p(){return n.a.createElement("div",{id:"introduction"},n.a.createElement("div",{id:"list-item-1",class:"container"},n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"placeholder1"}),n.a.createElement("div",{class:"col-sm-12"},n.a.createElement("h1",{id:"myName"},"KaChiLau"),n.a.createElement("div",{class:"d-flex flex-row flex-wrap justify-content-start"},n.a.createElement("div",{class:"titleBox border p-2 m-2"},"#Web Developer"),n.a.createElement("div",{class:"titleBox border p-2 m-2"},"#Frontend Developer"),n.a.createElement("div",{class:"titleBox border p-2 m-2"}," #Backend Developer")),n.a.createElement("p",{class:"p-2",id:"myIntro"},"I am passionate to create different kind of great applications for web and mobile devices.")))))}function u(){return n.a.createElement("div",{id:"contact"},n.a.createElement("div",{id:"list-item-2",class:"container"},n.a.createElement("div",{class:"d-flex flex-row justify-content-start"},n.a.createElement("div",{class:"p-3"},n.a.createElement("a",{href:"https://twitter.com/Rex61420085"},n.a.createElement("i",{class:"fa fa-twitter fa-2x","aria-hidden":"true"}))),n.a.createElement("div",{class:"p-3"},n.a.createElement("a",{href:"https://www.linkedin.com/in/kachilau/"},n.a.createElement("i",{class:"fa fa-linkedin fa-2x","aria-hidden":"true"}))),n.a.createElement("div",{class:"p-3"},n.a.createElement("a",{href:"mailto:chikarauA@outlook.com"},n.a.createElement("i",{class:"fa fa-envelope-o fa-2x","aria-hidden":"true"}))),n.a.createElement("div",{class:"p-3"},n.a.createElement("a",{href:"https://github.com/chiKaRau"},n.a.createElement("i",{class:"fa fa-github fa-2x","aria-hidden":"true"}))),n.a.createElement("div",{class:"p-3"},n.a.createElement("a",{href:"https://codesandbox.io/u/chiKaRau/sandboxes"},n.a.createElement("i",{class:"fa fa-codepen fa-2x","aria-hidden":"true"}))))),n.a.createElement("div",{class:"placeholder2"}))}c()(window).scroll(function(e){if(c()(window).scrollTop()>document.getElementById("skills").scrollTop&&window.innerWidth>414&&m){let e=0;c()(".skillBox").each(function(a,t){setTimeout(function(){c()(t).fadeIn()},50+e),e+=50}),m=!1}}),c()(function(){window.innerWidth>414&&c()(".skillBox").hide()});var f=t(5);function E(e){return n.a.createElement("div",null,n.a.createElement("div",{class:"border exp-box m-2"},n.a.createElement("img",{src:e.data.logo,alt:e.data.company}),n.a.createElement("div",{class:"p-2"},n.a.createElement("i",{"data-toggle":"modal","data-target":"#myModal-".concat(e.data.id),class:"fa fa-search fa-2x","aria-hidden":"true"}))),n.a.createElement(v,{data:e.data}))}function v(e){let a=e.data.responsibilities.map((e,a)=>n.a.createElement("li",{key:a++},e)),t=e.data.skills.map((e,a)=>n.a.createElement("div",{key:a++,class:"p-2 m-2 border"},n.a.createElement("p",null,"#",e)));return n.a.createElement("div",{class:"modal fade",id:"myModal-".concat(e.data.id)},n.a.createElement("div",{class:"modal-dialog"},n.a.createElement("div",{class:"modal-content"},n.a.createElement("div",{class:"modal-header"},n.a.createElement("h4",{class:"modal-title"},e.data.company),n.a.createElement("button",{type:"button",class:"close","data-dismiss":"modal"},"\xd7")),n.a.createElement("div",{class:"modal-body"},n.a.createElement("h5",null,e.data.job_title," (",e.data.date.start," -"," ",e.data.date.end,")"),n.a.createElement("h5",null,"My Duties"),n.a.createElement("ul",null,a),n.a.createElement("h5",null,"Used Skills"),n.a.createElement("div",{class:"d-flex flex-wrap flex-row justify-content-start"},t)),n.a.createElement("div",{class:"modal-footer"},n.a.createElement("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal"},"Close")))))}function g(){let e=f.map(e=>n.a.createElement(E,{key:e.id,data:e}));return n.a.createElement("div",{id:"experiences"},n.a.createElement("hr",{class:"hr-text p-3","data-content":"Experiences"}),n.a.createElement("div",{id:"list-item-3",className:"container"},n.a.createElement("div",{class:"d-flex flex-row flex-wrap justify-content-center"},e)),n.a.createElement("div",{class:"placeholder3"}))}var h=t(6);function x(){let e=h.map(e=>n.a.createElement("div",{key:e.id},n.a.createElement("img",{id:"p".concat(e.id),src:e.image,alt:e.alt})));return n.a.createElement("div",{id:"projects"},n.a.createElement("hr",{class:"hr-text p-3","data-content":"Projects"}),n.a.createElement("div",{id:"list-item-4",class:"container"},n.a.createElement("div",{class:"d-flex flex-row flex-wrap justify-content-center"},n.a.createElement("div",{class:"p-5"},e),n.a.createElement("div",{id:"ptextContainer"},n.a.createElement("div",{id:"ptextBackground"}),n.a.createElement("a",{id:"ptext",href:"http://chikarau.github.io/MyProjectPage"},"Check out my latest Projects!")))))}const b=["C","C++","C++","Java","Python","Javascript","ES6","Typescript","HTML5","CSS3","SASS","PHP","Linux","Webpack"],w=["JQuery.js","Redux.js","Bootstrap.js","Jest.js","Socket.IO"],y=["React.js","React-Native.js","Expo","Node.js","Express.js","Drupal"],k=["MySQL","MongoDB","Mongoose","SQlite","Schema","AWS","S3"],S=["Git","Unity3D"],j=["Web Development","Front-end Development","Full-Stack Development","Data Structure","Data Algorithm","OOP","MVC"];function B(){let e=b.map((e,a)=>n.a.createElement("div",{class:"skillBox p-2 m-2 border",key:a++},"#",e)),a=w.map((e,a)=>n.a.createElement("div",{class:"skillBox p-2 m-2 border",key:a++},"#",e)),t=y.map((e,a)=>n.a.createElement("div",{class:"skillBox p-2 m-2 border",key:a++},"#",e)),l=k.map((e,a)=>n.a.createElement("div",{class:"skillBox p-2 m-2 border",key:a++},"#",e)),i=j.map((e,a)=>n.a.createElement("div",{class:"skillBox p-2 m-2 border",key:a++},"#",e)),s=S.map((e,a)=>n.a.createElement("div",{class:"skillBox p-2 m-2 border",key:a++},"#",e));return n.a.createElement("div",{id:"skills"},n.a.createElement("hr",{class:"hr-text p-3","data-content":"Skills"}),n.a.createElement("div",{id:"list-item-5",class:"container p-3"},n.a.createElement("div",{class:"d-flex flex-row flex-wrap justify-content-start"},n.a.createElement("div",{class:"skillTitles"},n.a.createElement("h6",null,"Programming Language")),e,n.a.createElement("div",{class:"skillTitles"},n.a.createElement("h6",null,"Libraries")),a,n.a.createElement("div",{class:"skillTitles"},n.a.createElement("h6",null,"Frameworks")),t,n.a.createElement("div",{class:"skillTitles"},n.a.createElement("h6",null,"Databases")),l,n.a.createElement("div",{class:"skillTitles"},n.a.createElement("h6",null,"Knowledges")),i,n.a.createElement("div",{class:"skillTitles"},n.a.createElement("h6",null,"Tools")),s)))}function C(){return n.a.createElement("nav",{class:"navbar navbar-expand-sm navbar-dark bg-transparent bg-dark "},n.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{class:"navbar-toggler-icon"})),n.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarText"},n.a.createElement("ul",{id:"myScrollSpy",class:"navbar-nav ml-auto"},n.a.createElement("li",{class:"nav-item"},n.a.createElement("a",{class:"nav-link",href:"#introduction"},"Home ",n.a.createElement("span",{class:"sr-only"},"(current)"))),n.a.createElement("li",{class:"nav-item"},n.a.createElement("a",{class:"nav-link",href:"#contact"},"Contact")),n.a.createElement("li",{class:"nav-item"},n.a.createElement("a",{class:"nav-link",href:"#experiences"},"Experiences")),n.a.createElement("li",{class:"nav-item"},n.a.createElement("a",{class:"nav-link",href:"#projects"},"Projects")),n.a.createElement("li",{class:"nav-item"},n.a.createElement("a",{class:"nav-link",href:"#skills"},"Skills")))))}function T(){return n.a.createElement("div",{id:"myScrollSpy",class:"list-group sidebar"},n.a.createElement("a",{class:"list-group-item list-group-item-action",href:"#introduction"},n.a.createElement("i",{class:"fa fa-user fa-1x","aria-hidden":"true"})),n.a.createElement("a",{class:"list-group-item list-group-item-action",href:"#contact"},n.a.createElement("i",{class:"fa fa-phone fa-1x","aria-hidden":"true"})),n.a.createElement("a",{class:"list-group-item list-group-item-action",href:"#experiences"},n.a.createElement("i",{class:"fa fa-briefcase fa-1x","aria-hidden":"true"})),n.a.createElement("a",{class:"list-group-item list-group-item-action",href:"#projects"},n.a.createElement("i",{class:"fa fa-file fa-1x","aria-hidden":"true"})),n.a.createElement("div",{id:"skillIcon"},n.a.createElement("a",{class:"list-group-item list-group-item-action",href:"#skills"},n.a.createElement("i",{class:"fa fa-align-left fa-1x","aria-hidden":"true"}))))}function D(){return n.a.createElement("div",{id:"footer",class:"container p-5"},n.a.createElement("div",{class:"d-flex flex-row justify-content-center"},n.a.createElement("p",null,"@2020 KaChi Lau All Rights Reserved.")))}function A(){return n.a.createElement("div",{id:"splash",class:"d-flex justify-content-center align-items-center"},n.a.createElement("div",{class:"d-flex justify-content-center align-items-center"},n.a.createElement("div",{id:"begin"},n.a.createElement("input",{class:"log progress-log"}))))}function M(){return n.a.createElement("div",{"data-spy":"scroll","data-target":"#myScrollSpy","data-offset":"0",id:"App"},n.a.createElement("div",{id:"UpperParts"},n.a.createElement(C,null),n.a.createElement(p,null),n.a.createElement(u,null)),n.a.createElement(g,null),n.a.createElement(x,null),n.a.createElement(B,null),n.a.createElement(T,null),n.a.createElement(D,null),n.a.createElement(A,null))}const W=document.getElementById("root");s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(M,null)),W)}],[[7,1,2]]]);
//# sourceMappingURL=main.f9c2edf2.chunk.js.map