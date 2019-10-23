// pages/login/phone/phone.js
import { Method } from '../../../.../../utils/js/commonality'
let _Method = new Method();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state:true,
    phone:null,
  },
  valueFun:function(e){
    let value = e.detail.value;
    if (value.length == 11){
      this.setData({
        state:false,
        phone:value
      })
    }else{
      this.setData({
        state: true,
      })
    }
  },
  //跳转下一个页面
  nextFun:function(){
    let url = 'PhoneCode?phone='+this.data.phone
    _Method._go_next(url)
  }
})