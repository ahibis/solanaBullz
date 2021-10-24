const vue=new Vue({
    el:"#app",
    data:{
        pic:1,
        d:0,
        h:0,
        s:0,
        y:0,
        cards:13,
        pics:[1,2,3],
        faq:-1,
        back:"./img/fone7.jpg"
    },
    computed:{
        picName(){
            return `./img/${this.pic}.jpg`
        },
        scroll(){
            return this.y;
        }
    },
    methods:{
        next(){
            let cards=this.cards;
            let arr=[0,0,0]
            for(let i=0;i<3;i+=1){
                let pic = this.pics[i]
                pic+=1;
                if(pic===cards+1) pic=1;
                arr[i]=pic;
            }
            this.pics=arr;
        },
        prev(){
            console.log("fdf")
            let cards=this.cards;
            let arr=[0,0,0]
            for(let i=0;i<3;i+=1){
                let pic = this.pics[i]
                pic-=1;
                if(pic===0) pic=cards;
                arr[i]=pic;
            }
            this.pics=arr;
        },
        open(i){
            this.faq=this.faq===i?-1:i;
        },
        back1(){
            this.back="./img/fone7.jpg";
        },
        back2(){
            this.back="./img/fonen.jpg";
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
},100)