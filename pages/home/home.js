// pages/home/home.js
import {
  config
} from '../../utils/js/config.js'
const amapFile = require('../../libs/amap-wx.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    origin_address: null, //起点
    end_address: null, //终点
    position_success: false, //定位
  },
 
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function(options) {
    this.getLocation();
    wx.getSetting()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
  
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
    //判断用户起点与终点是否输入
    if (this.data.origin_address && this.data.end_address){
      this.setData({
        position_success:true
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  //定位
  getLocation: function () {
    var myAmapFun = new amapFile.AMapWX({
      key: config.key
    });
    myAmapFun.getRegeo({
      success: (res) => {
        console.log(res)
        console.log(res, res[0].regeocodeData.formatted_address)
        this.setData({
          origin_address: res[0].name
        })
      }
    })
  },
})