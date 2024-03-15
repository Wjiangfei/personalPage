import {defineStore} from 'pinia';

export const useMealStore=defineStore("meals",{
    state:()=>({
        data:[
            {
                id: "1",
                title: "汉堡包",
                desc: "百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！",
                price: 12,
                img: "/images/meals/1.png"
            },
            {
                id: "2",
                title: "双层吉士汉堡",
                desc: "百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！",
                price: 20,
                img: "/images/meals/2.png"
            },
            {
                id: "3",
                title: "巨无霸",
                desc: "两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！",
                price: 24,
                img: "/images/meals/3.png"
            },
            {
                id: "4",
                title: "麦辣鸡腿汉堡",
                desc: "金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！",
                price: 21,
                img: "/images/meals/4.png"
            },
            {
                id: "5",
                title: "板烧鸡腿堡",
                desc: "原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！",
                price: 22,
                img: "/images/meals/5.png"
            },
            {
                id: "6",
                title: "麦香鸡",
                desc: "清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！",
                price: 14,
                img: "/images/meals/6.png"
            },
            {
                id: "7",
                title: "吉士汉堡包",
                desc: "百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！",
                price: 12,
                img: "/images/meals/7.png"
            },
            {
                id: "8",
                title: "双层深海鳕鱼堡",
                desc: "百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！",
                price: 30,
                img: "/images/meals/7.png"
            }
        ],
        mount:[0,0,0,0,0,0,0,0],
        keyword:"",
        ifcheck:false,
        ifpay:false
    }),
    getters:{
        // 关键词搜索
        findTaget:(state)=>{
            console.log("筛选商品");
            return state.data.filter((item)=>item.title.includes(state.keyword));
        },
        // 获取总价
        priceSum:(state)=>{
            let res=0;
            state.mount.forEach((item,index)=>{
                res+=item*state.data[index].price;
            });
            return res;
        },
        // 获取总数量
        getSum:(state)=>{
            let res=0;
            state.mount.forEach((item)=>{
                res+=item;
            });
            return res;
        },
        // 获取已选内容
        getChosed:(state)=>{
            return state.data.filter((item,index)=>state.mount[index]);
        }

    },
    actions:{
        // 增加个数
        increse(id:number){
            this.mount[id]++;
            console.log(id,this.mount[id]);
        },
        // 减少个数
        decre(id:number){
            this.mount[id]--;
            if(this.getSum==0)this.ifpay=false;
            console.log(id,this.mount[id]);
        },
        // 切换购物袋显示状态
        checkToggle(){
            this.ifcheck=!this.ifcheck;
            console.log("ifcheck",this.ifcheck);
        },
        // 前往已支付页面
        topay(){
            if(this.getSum>0){
                this.ifpay=true;
            }
            
            console.log("ifpay",this.ifpay);
        },
        cancelpay(){
            this.ifpay=false;
            console.log("ifpay",this.ifpay);
        },
        // 清空
        toEmpty(){
            this.mount=[0,0,0,0,0,0,0,0];
        }
    }
})