// pages/home/position/position_origin.js
import {config} from '../../../utils/config.js'
var amapFile = require('../../../libs/amap-wx.js');
import { Method } from '../../../utils/commonality.js'
let _Method = new Method();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tips: {}
  },
  // 搜索地区
  bindInput: function (e) {
    console.log(e.detail.value)
    var that = this;
    var keywords = e.detail.value;
    var myAmapFun = new amapFile.AMapWX({ key: config.key });
    myAmapFun.getInputtips({
      keywords: keywords,
      location: '长沙',
      success: function (data) {
        console.log(data)
        if (data && data.tips) {
          that.setData({
            tips: data.tips
          });
        }
      }
    })
  },
  bindSearch: function (e) {
    console.log(e)
    var keywords = e.target.dataset.keywords;
    var url = '../home?keywords=' + keywords;
    console.log(e.target)
    console.log(keywords)
    wx.redirectTo({
      url: url
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  // return
  returnFun:function(){
    _Method._go();
  }











})

