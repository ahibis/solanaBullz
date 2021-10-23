const vue=new Vue({
    el:"#app",
    data:{
        pic:1,
        d:0,
        h:0,
        s:0
    },
    computed:{
        picName(){
            return `./img/${this.pic}.png`
        }
    }
})
setInterval(e=>{
    vue.pic+=1;
    if(vue.pic==14) vue.pic=1;
},5000)
const time=new Date("10-31-2021").getTime();
setInterval(e=>{
    let date=new Date(time - new Date().getTime());
    vue.d=date.getUTCDate();
    vue.h=date.getUTCHours()
    vue.s=date.getUTCMinutes();
},1000)
