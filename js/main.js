const vue=new Vue({
    el:"#app",
    data:{
        pic:1
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
