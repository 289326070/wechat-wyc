import {config} from 'config.js'
class Method{
  // 反回上index层次
  _go(index){
    if(!index){
      index = 1;
    }
    wx.navigateBack({
      delta: index
    })
  }
  //返回上一层
  _go_data(url,index) {
    if (!index) {
      index = 1;
    }
    wx.navigateBack({
      url: url,
      delta: index
    })
  }
  //跳转下一页面(保留当前页面，跳转到应用内的某个页面)
  _go_next(url){
    wx.navigateTo({
      url:url
    })
  }
}

export {
  Method
}