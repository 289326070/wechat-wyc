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
  //返回上一
  _go_data(url,index) {
    if (!index) {
      index = 1;
    }
    wx.navigateBack({
      url: url,
      delta: index
    })
  }


}

export {
  Method
}