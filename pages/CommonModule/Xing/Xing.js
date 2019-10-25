// pages/CommonModule/Xing/Xing.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    index:0,
    text: ['您对这次服务满意吗','非常不满意，各方面都很差', "不满意，比较差", "一般，还需改善",'比较满意，任可改善','非常满意，无可挑剔']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    xingFun:function(e){
      console.log(this)
      this.setData({
        index: e.target.dataset.xing
      }),
        this.triggerEvent('myevent', e.target.dataset.xing)
        console.log('子组件', e.target.dataset.xing)
    }
  },
 
})
