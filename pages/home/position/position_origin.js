// pages/home/position/position_origin.js
const amapFile = require('../../../libs/amap-wx.js');
const ALLCITY = require('../../../utils/js/city_two.js')
import {config} from '../../../utils/js/config.js'
import { Method } from '../../../utils/js/commonality.js'
let _Method = new Method();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tips: {},     //高德地图搜索上车数据
    AllCity:null, //js加载的城市数据
    city:'',  
    show_city:true, //控制城市名与上车地点显示元素
  
  },
  // 搜索地区
  bindInput: function (e) {

    var that = this;
    that.setData({
      show_city: false,
    })
    var keywords = e.detail.value;
    var myAmapFun = new amapFile.AMapWX({ key: config.key });
    myAmapFun.getInputtips({
      keywords: keywords,
      city:this.data.city,
      success: function (data) {
        if (data && data.tips) {
          that.setData({
            tips: data.tips
          });
        }
      }
    })
  },
  bindSearch: function (e) {
    var origin = e.target.dataset.keywords;
    var url = '../home?origin=' + origin;
    let pages = getCurrentPages();  // 当前页的数据，可以输出来看看有什么东西
    let prevPage = pages[pages.length - 2]
    prevPage.setData({
      origin_address: origin,
    })
    wx.navigateBack({});
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      AllCity:ALLCITY.city
    })
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
  },
  //选择城市
  inputFun:function(e){
    this.setData({
      city: e.target.dataset.city,
      show_city:false,
    })
    var that = this;
    var keywords = e.target.dataset.city;
    var myAmapFun = new amapFile.AMapWX({ key: config.key });
    myAmapFun.getInputtips({
      keywords: keywords,
      city: this.data.city,
      success: function (data) {
        if (data && data.tips) {
          that.setData({
            tips: data.tips
          });
        }
      }
    })
  },
  focusFun:function(){
    this.setData({
      show_city: true,
    })
  }


})

