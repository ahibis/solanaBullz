"use strict";var vue=new Vue({el:"#app",data:{pic:1,d:0,h:0,m:0,s:0,y:0,cards:15,pics:[1,2,3],faq:-1,back:"./img/fone7.jpg"},computed:{picName:function(){return"./img/".concat(this.pic,".png")},scroll:function(){return this.y}},methods:{next:function(){for(var e=this.cards,t=[0,0,0],n=0;n<3;n+=1){var i=this.pics[n];(i+=1)===e+1&&(i=1),t[n]=i}this.pics=t},prev:function(){console.log("fdf");for(var e=this.cards,t=[0,0,0],n=0;n<3;n+=1){var i=this.pics[n];0===(i-=1)&&(i=e),t[n]=i}this.pics=t},open:function(e){this.faq=this.faq===e?-1:e},back1:function(){this.back="./img/fone7.jpg"},back2:function(){this.back="./img/fonen.jpg"}}});setInterval((function(e){vue.pic+=1,vue.pic>=vue.cards+1&&(vue.pic=1)}),5e3);var time=new Date("11-13-2021 23:00").getTime();setInterval((function(e){for(var t=new Date(time-(new Date).getTime()),n=[t.getUTCDate()+"",t.getUTCHours()+"",t.getUTCMinutes()+"",t.getUTCSeconds()+""],i=0;i<4;i+=1)1===n[i].length&&(n[i]="0"+n[i]);vue.d=n[0],vue.h=n[1],vue.m=n[2],vue.s=n[3]}),1e3),setInterval((function(e){var t=window.innerWidth,n=document.querySelector(".text1").offsetTop,i=document.querySelector(".benefits").offsetTop;t<=400&&(n=document.querySelector(".coming").offsetTop,i-=40);var o=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,c=0;if(o>n&&o<=i&&(c=(o-n)/(i-n)),o>i&&(c=1),window.innerWidth<=400){var s=16-952*c;vue.y=s*t/360}else{var r=156-2076*c;vue.y=r*t/1440}}),100);