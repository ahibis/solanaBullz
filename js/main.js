const vue=new Vue({
    el:"#app",
    data:{
        pic:1,
        d:0,
        h:0,
        s:0,
        y:0,
        cards:13,
        pics:[1,2,3]
    },
    computed:{
        picName(){
            return `./img/${this.pic}.png`
        },
        scroll(){
            return this.y;
        }
    },
    watch:{

    },
    methods:{
        next(){
            for(let i=0;i<3;i+=1){
                this.pics[i]+=1;
                if(this.pics[i]===this.cards) this.pics[i]=1;
            }
        },
        prev(){
            for(let i=0;i<3;i+=1){
                this.pics[i]-=1;
                if(this.pics[i]===-1) this.pics[i]=this.cards;
            }
        }
    }
})
setInterval(e=>{
    vue.pic+=1;
    if(vue.pic==14) vue.pic=1;
},5000)
const time=new Date("11-13-2021 8:00").getTime();
setInterval(e=>{
    let date=new Date(time - new Date().getTime());
    vue.d=date.getUTCDate();
    vue.h=date.getUTCHours()
    vue.s=date.getUTCMinutes();
},1000)

setInterval(e=>{
    let y1=document.querySelector(".text1").offsetTop;
    let y2=document.querySelector(".benefits").offsetTop;
    let y = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    let width = window.innerWidth;
    let k=0;
    if(y>y1 && y<y2) k=(y-y1)/(y2-y1);
    if(y>y2) k=1;
    let x=156-2076*k;
    //console.log(`${x} ${y} ${y1} ${y2}`)
    vue.y= x*width/1440;
},10)