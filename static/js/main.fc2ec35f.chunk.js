(this.webpackJsonpreactresume=this.webpackJsonpreactresume||[]).push([[0],{26:function(e,s,t){},29:function(e,s,t){},42:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t(14),n=t.n(c),i=(t(26),t(6)),r=t(7),l=t(9),j=t(8),d=t(16),o=t(18),h=t.n(o),b=(t(29),t(19)),m=t(4),O=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.project,s=this.props.data.github,t=this.props.data.name,a=this.props.data.description;return Object(m.jsxs)("header",{id:"home",children:[Object(m.jsx)(b.a,{type:"cobweb",bg:!0}),Object(m.jsxs)("nav",{id:"nav-wrap",children:[Object(m.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(m.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(m.jsxs)("ul",{id:"nav",className:"nav",children:[Object(m.jsx)("li",{className:"current",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(m.jsx)("div",{className:"row banner",children:Object(m.jsxs)("div",{className:"banner-text",children:[Object(m.jsx)("h1",{className:"responsive-headline",children:t}),Object(m.jsx)("h3",{children:a}),Object(m.jsx)("hr",{}),Object(m.jsxs)("ul",{className:"social",children:[Object(m.jsxs)("a",{href:e,className:"button btn project-btn",target:"blank",children:[Object(m.jsx)("i",{className:"fa fa-linkedin-square"}),"LinkedIn"]}),Object(m.jsxs)("a",{href:s,className:"button btn github-btn",target:"blank",children:[Object(m.jsx)("i",{className:"fa fa-github"}),"Github"]})]})]})}),Object(m.jsx)("p",{className:"scrolldown",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(m.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(a.Component),u=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,children:Object(m.jsx)("i",{className:e.className})})},e.name)}));return Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("ul",{className:"social-links",children:e}),Object(m.jsx)("ul",{className:"copyright",children:Object(m.jsx)("li",{children:"\xa9 Copyright 2021"})})]}),Object(m.jsx)("div",{id:"go-top",children:Object(m.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(m.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(a.Component),x=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,s="images/"+this.props.data.image,t=this.props.data.bio,a=this.props.data.address.street,c=this.props.data.address.city,n=this.props.data.address.state,i=this.props.data.address.zip,r=this.props.data.phone,l=this.props.data.email,j=this.props.data.resumedownload;return Object(m.jsx)("section",{id:"about",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"three columns",children:Object(m.jsx)("img",{className:"profile-pic",src:s,alt:"Nordic Giant Profile Pic"})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("h2",{children:"About Me"}),Object(m.jsx)("p",{children:t}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"columns contact-details",children:[Object(m.jsx)("h2",{children:"Contact Details"}),Object(m.jsxs)("p",{className:"address",children:[Object(m.jsx)("span",{children:e}),Object(m.jsx)("br",{}),Object(m.jsxs)("span",{children:["\ud83c\udde6\ud83c\uddf7 ",a,Object(m.jsx)("br",{}),c," ",n,", ",i]}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:r}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:l})]})]}),Object(m.jsxs)("div",{className:"columns download",children:[Object(m.jsx)("p",{children:Object(m.jsxs)("a",{href:j,className:"button",children:[Object(m.jsx)("i",{className:"fa fa-download"}),"English Resume"]})}),Object(m.jsx)("p",{children:Object(m.jsxs)("a",{href:j,className:"button",children:[Object(m.jsx)("i",{className:"fa fa-download"}),"Spanish Resume"]})})]})]})]})]})})}}]),t}(a.Component),p=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"getRandomColor",value:function(){for(var e="#",s=0;s<6;s++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var s=this.props.data.skillmessage,t=this.props.data.education.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.school}),Object(m.jsxs)("p",{className:"info",children:[e.degree," ",Object(m.jsx)("span",{children:"\u2022"}),Object(m.jsx)("em",{className:"date",children:e.graduated})]}),Object(m.jsx)("p",{className:"msg-wrapper",children:e.description.replace("\n\n",Object(m.jsx)("br",{}))})]},e.id)})),a=this.props.data.work.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.company}),Object(m.jsxs)("p",{className:"info",children:[e.title,Object(m.jsx)("span",{children:"\u2022"})," ",Object(m.jsx)("em",{className:"date",children:e.years})]}),Object(m.jsx)("p",{className:"msg-wrapper",children:e.description.replace("\n\n",Object(m.jsx)("br",{}))})]},e.id)})),c=this.props.data.skills.map((function(s){var t=e.getRandomColor(),a="bar-expand "+s.name.toLowerCase(),c=s.level;return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{style:{width:c,backgroundColor:t},className:a}),Object(m.jsx)("em",{children:s.name})]},s.name)})),n=this.props.data.softSkills.map((function(s){var t=e.getRandomColor(),a="bar-expand "+s.name.toLowerCase(),c=s.level;return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{style:{width:c,backgroundColor:t},className:a}),Object(m.jsx)("em",{children:s.name})]},s.name)}));return Object(m.jsxs)("section",{id:"resume",children:[Object(m.jsxs)("div",{className:"row skill",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Skills"})})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("p",{children:s}),Object(m.jsx)("div",{className:"bars",children:Object(m.jsx)("p",{className:"skills",children:c})})]})]}),Object(m.jsxs)("div",{className:"row skill",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Soft Skills"})})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("p",{children:s}),Object(m.jsx)("div",{className:"bars",children:Object(m.jsx)("p",{className:"skills",children:n})})]})]}),Object(m.jsxs)("div",{className:"row education",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Education"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:Object(m.jsx)("div",{className:"row item",children:Object(m.jsx)("div",{className:"twelve columns",children:t})})})]}),Object(m.jsxs)("div",{className:"row work",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Work"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:a})]})]})}}]),t}(a.Component),v=t(5),f=t(12),N=t(20),g=t(11),w=t(15),k=t.n(w),y=t(33),C=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=s.call(this,e)).state={name:"",email:"",subject:"",message:"",recaptchaLoad:!1,isVerified:!1},a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a.resetForm=a.resetForm.bind(Object(f.a)(a)),a.handleChange=a.handleChange.bind(Object(f.a)(a)),a.recaptchaLoaded=a.recaptchaLoaded.bind(Object(f.a)(a)),a.verifiedRecaptcha=a.verifiedRecaptcha.bind(Object(f.a)(a)),a}return Object(r.a)(t,[{key:"handleSubmit",value:function(e){var s=this.state,t=s.recaptchaLoad,a=s.isVerified;if(e.preventDefault(),t&&a){var c=this.state,n={from_name:c.name,from_email:c.email,to_name:"Facundo",subject:c.subject,message_html:c.message};N.send("service_y7m1pt7","template_vxv9cji",n,"user_NAkdQArsUzbw24YZTtpV1"),k.a.fire("Congrats!","\n    Your message has been sent successfully. We will contact you soon<br>        \n              "),this.resetForm()}else k.a.fire("Oops...","\n    Please check the Recaptcha before sending your message<br>        \n              ");this.resetForm()}},{key:"resetForm",value:function(){this.setState({name:"",email:"",subject:"",message:""})}},{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"recaptchaLoaded",value:function(){this.setState({recaptchaLoad:!0})}},{key:"verifiedRecaptcha",value:function(e){e&&this.setState({isVerified:!0})}},{key:"render",value:function(){var e=this.state,s=e.name,t=e.email,a=e.subject,c=e.message;return Object(m.jsxs)("section",{id:"contact",children:[Object(m.jsxs)("div",{className:"row section-head",children:[Object(m.jsx)("div",{className:"two columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Get In Touch."})})}),Object(m.jsx)("div",{className:"ten columns",children:Object(m.jsx)("p",{className:"lead",children:c})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"eight columns",children:[Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsxs)(g.c,{children:[Object(m.jsx)(g.e,{children:"Name"}),Object(m.jsx)(g.b,{children:Object(m.jsx)(g.d,{name:"name",type:"text",placeholder:"Your first and last name",value:s,onChange:this.handleChange})})]}),Object(m.jsxs)(g.c,{children:[Object(m.jsx)(g.e,{children:"Email for contact"}),Object(m.jsx)(g.b,{children:Object(m.jsx)(g.d,{name:"email",type:"email",placeholder:"email@gmail.com",value:t,onChange:this.handleChange})})]}),Object(m.jsxs)(g.c,{children:[Object(m.jsx)(g.e,{children:"Subject"}),Object(m.jsx)(g.b,{children:Object(m.jsx)(g.d,{name:"subject",type:"text",placeholder:"What is the subject?",value:a,onChange:this.handleChange})})]}),Object(m.jsxs)(g.c,{children:[Object(m.jsx)(g.e,{children:"Message"}),Object(m.jsxs)(g.b,{children:[Object(m.jsx)(g.f,{name:"message",placeholder:"Tell me more about...",value:c,onChange:this.handleChange}),Object(m.jsx)(y,{sitekey:"6LcsBpAaAAAAAFUIOcc3WvZPox3Ebphqeb3vBDXl",render:"explicit",onloadCallback:this.recaptchaLoaded,verifyCallback:this.verifiedRecaptcha})]})]}),Object(m.jsx)("br",{}),Object(m.jsx)(g.c,{kind:"group",children:Object(m.jsx)(g.b,{children:Object(m.jsx)(g.a,{className:"submit",children:"Send"})})})]}),Object(m.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(m.jsxs)("div",{id:"message-success",children:[Object(m.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(m.jsx)("br",{})]})]}),Object(m.jsx)("aside",{className:"four columns footer-widgets",children:Object(m.jsxs)("div",{className:"widget widget_contact",children:[Object(m.jsx)("h4",{children:"Get in touch"}),Object(m.jsxs)("p",{className:"address",children:["\ud83c\udde6\ud83c\uddf7  GMT -3 ",Object(m.jsx)("br",{}),"\ud83c\udfe1 Bah\xeda Blanca, Buenos Aires, Argentina",Object(m.jsx)("br",{})]})]})})]})]})}}]),t}(a.Component),S=t(21),D=t.n(S),A=0,L=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var s="images/portfolio/"+e.image;return Object(m.jsx)("div",{className:"columns portfolio-item",children:Object(m.jsxs)("div",{className:"item-wrap",children:[Object(m.jsx)(D.a,{alt:e.title,src:s}),Object(m.jsx)("div",{style:{textAlign:"center"},children:e.title}),Object(m.jsx)("a",{href:e.url,target:"blank",style:{textAlign:"center"},children:"View repository"})]})},A++)}));return Object(m.jsx)("section",{id:"portfolio",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"twelve columns collapsed",children:[Object(m.jsx)("h1",{children:"Check out some of my latests projects"}),Object(m.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),t}(a.Component),R=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=s.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("266517791"),d.a.pageview(window.location.pathname),a}return Object(r.a)(t,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(O,{data:this.state.resumeData.main}),Object(m.jsx)(x,{data:this.state.resumeData.main}),Object(m.jsx)(L,{data:this.state.resumeData.portfolio}),Object(m.jsx)(p,{data:this.state.resumeData.resume}),Object(m.jsx)(C,{data:this.state.resumeData.main}),Object(m.jsx)(u,{data:this.state.resumeData.main})]})}}]),t}(a.Component),F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(s){var t=s.getCLS,a=s.getFID,c=s.getFCP,n=s.getLCP,i=s.getTTFB;t(e),a(e),c(e),n(e),i(e)}))};n.a.render(Object(m.jsx)(R,{}),document.getElementById("root")),F()}},[[42,1,2]]]);
//# sourceMappingURL=main.fc2ec35f.chunk.js.map