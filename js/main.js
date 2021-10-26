const vue=new Vue({
    el:"#app",
    data:{
        pic:1,
        d:0,
        h:0,
        m:0,
        s:0,
        y:0,
        cards:15,
        pics:[1,2,3],
        faq:-1,
        back:"./img/fone7.jpg"
    },
    computed:{
        picName(){
            return `./img/${this.pic}.png`
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
let imgs=[]
for(let i=1;i<=vue.cards+1;i++){
    let img=document.createElement("img");
    img.src=`img/${i}.png`;
    imgs.push(img)
}
setInterval(e=>{
    vue.pic+=1;
    if(vue.pic>=vue.cards+1) vue.pic=1;
},5000)
const time=(new Date(2021,11,13,23)).getTime();
setInterval(e=>{
    let date=new Date(time - (new Date()).getTime());
    let times=[date.getUTCDate()+'',date.getUTCHours()+'',date.getUTCMinutes()+'',date.getUTCSeconds()+'']

    for(let i=0;i<4;i+=1){
        if(times[i].length===1) times[i]='0'+times[i];
    }
    vue.d=times[0];
    vue.h=times[1];
    vue.m=times[2];
    vue.s=times[3];
},1000)

setInterval(e=>{
    if(window.innerWidth<=600){
        vue.y=0;
        return;
    }
    let width = window.innerWidth;
    let y1=document.querySelector(".text1").offsetTop;
    let y2=document.querySelector(".benefits").offsetTop;
    if(width<=400) {
        y1=document.querySelector(".coming").offsetTop;
        y2-=40;
    }
    let y = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    let k=0;
    if(y>y1 && y<=y2) k=(y-y1)/(y2-y1);
    if(y>y2) k=1;
    if(window.innerWidth<=600){
        let x=16-952*k;
        vue.y= x*width/360;
        return;
    }

    let x=156-2076*k;

    vue.y= x*width/1440;
},100)