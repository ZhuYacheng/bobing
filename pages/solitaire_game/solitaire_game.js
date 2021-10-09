// pages/solitaire_game/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num1:0,
    num2:0, 
    num3:0,
    num4:0, 
    num5:0,
    num6:0,
    arr:[],
    rank_list:[
              "一秀",
              "二举",
              "四进",
              "三红",
              "对堂",
              "状元!",
              "五子登科!",
              "五子带一秀!",
              "五王!",
              "六杯黑!",
              "六杯红!",
              "状元插金花!"
    ]
  },                                           
  handle_dice(e){
    var temp = [0,0,0,0,0,0,0]
    this.setData({
          num1: Math.ceil(Math.random()*6), 
          num2: Math.ceil(Math.random()*6), 
          num3: Math.ceil(Math.random()*6), 
          num4: Math.ceil(Math.random()*6),  
          num5: Math.ceil(Math.random()*6), 
          num6: Math.ceil(Math.random()*6), 
    });
    temp[Number(this.data.num1)] += 1;
    temp[Number(this.data.num2)] += 1;
    temp[Number(this.data.num3)] += 1;
    temp[Number(this.data.num4)] += 1;
    temp[Number(this.data.num5)] += 1;
    temp[Number(this.data.num6)] += 1;
    
    this.setData({
          arr:temp,
    })   
    console.log(e)
    console.log(this.data.arr[1])
    console.log(this.data.arr[2])
    console.log(this.data.arr[3])
    console.log(this.data.arr[4])
    console.log(this.data.arr[5])
    console.log(this.data.arr[6])  
  },



})
