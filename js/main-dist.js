"use strict";for(var vue=new Vue({el:"#app",data:{pic:1,d:0,h:0,m:0,s:0,y:0,cards:15,pics:[1,2,3],faq:-1,back:"./img/fone7.jpg"},computed:{picName:function(){return"./img/".concat(this.pic,".png")},scroll:function(){return this.y}},methods:{next:function(){for(var e=this.cards,t=[0,0,0],i=0;i<3;i+=1){var n=this.pics[i];(n+=1)===e+1&&(n=1),t[i]=n}this.pics=t},prev:function(){console.log("fdf");for(var e=this.cards,t=[0,0,0],i=0;i<3;i+=1){var n=this.pics[i];0===(n-=1)&&(n=e),t[i]=n}this.pics=t},open:function(e){this.faq=this.faq===e?-1:e},back1:function(){this.back="./img/fone7.jpg"},back2:function(){this.back="./img/fonen.jpg"}}}),imgs=[],i=1;i<=vue.cards+1;i++){var img=document.createElement("img");img.src="img/".concat(i,".png"),imgs.push(img)}setInterval((function(e){vue.pic+=1,vue.pic>=vue.cards+1&&(vue.pic=1)}),5e3);var time=new Date(Date.UTC(2021,10,13,20)).getTime();setInterval((function(e){for(var t=new Date(time-new Date((new Date).toISOString()).getTime()),i=time-new Date((new Date).toISOString()),n=[t.getUTCDate()-1+"",t.getUTCHours()+"",t.getUTCMinutes()+"",t.getUTCSeconds()+""],o=0;o<4;o+=1)1===n[o].length&&(n[o]="0"+n[o]);if(i<0)for(var c=0;c<4;c+=1)n[c]="00";vue.d=n[0],vue.h=n[1],vue.m=n[2],vue.s=n[3]}),1e3),setInterval((function(e){if(window.innerWidth<=600)vue.y=0;else{var t=window.innerWidth,i=document.querySelector(".text1").offsetTop,n=document.querySelector(".benefits").offsetTop;t<=400&&(i=document.querySelector(".coming").offsetTop,n-=40);var o=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,c=0;if(o>i&&o<=n&&(c=(o-i)/(n-i)),o>n&&(c=1),window.innerWidth<=600){var r=16-952*c;vue.y=r*t/360}else{var s=156-2076*c;vue.y=s*t/1440}}}),100);