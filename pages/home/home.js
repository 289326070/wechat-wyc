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
    origin_place:"请输入起点"
  },
 
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function(options) {
    console.log('监听页面加载1')
    console.log(options)
    wx.authorize({
       scope: 'scope.userLocation',
       success: (res) => {
        console.log(res)
         if (res["errMsg:authorize:ok"]){
           this.getLocation();
         }else{
           console.log(2)
           wx.openSetting({
             success(res) {
               console.log(res.authSetting)
              
             }
           })
         }
       },
    })
    // wx.getSetting({
    //   success:(res)=>{
    //     console.log(res.authSetting['scope.userLocation'])
    //     if (res.authSetting['scope.userLocation']){
    //       console.log(2)
    //       this.getLocation();
    //     }else{
    //       console.log(1)
          

    //     }
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log('监听页面初次渲染完成2')
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('监听页面显示3')
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
    console.log('监听页面隐藏4')

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log('监听页面卸载5')
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
    this.setData({
      origin_place:'正在获取上车位置'
    })
    var myAmapFun = new amapFile.AMapWX({
      key: config.key
    });
    myAmapFun.getRegeo({
      success: (res) => {
        this.setData({
          origin_address: res[0].name
        })
      }
    })
  },
  //判断用户授权登录
  loginFun:function(){
    wx.login({
      success(res) {
        console.log(res)
        if (res.code) {
          //发起网络请求
         console.log('登录成功')
        } else {
          console.log('登录失败！')
        }
      }
    })
  }
})