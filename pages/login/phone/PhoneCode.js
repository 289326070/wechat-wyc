// pages/login/phone/PhoneCode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state:true,
    phone:'',
    codeLength:6,
    time:3
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      phone:options.phone
    })
    this.timeFun()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  timingFun:function(){
    console.log(16)
  },
  valueFun: function (e) {
    let value = e.detail.value;
    if (value.length == this.data.codeLength) {
      this.setData({
        state: false,
        phone: value
      })
    } else {
      this.setData({
        state: true,
      })
    }
  },
  // 定时器
  timeFun(){
    var that=this;
    let t = setInterval(function(){
      that.data.time--;
      that.setData({
        time: that.data.time
      })
      if (that.data.time==1){
        clearInterval(t)
      }
      console.log(that.data.time)
    },1000)
  },
  HomeFun:function(){
    let url = "../../home/home?login="+'登录成功'
    wx.reLaunch({
      url: url,
    })
  }
})