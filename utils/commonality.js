import {config} from 'config.js'
class Method{
  // 反回上index层次
  _go(index){
    if(!index){
      index = 1;
    }
    console.log(index)
    wx.navigateBack({
      delta: index
    })
  }
  // 



}

export {
  Method
}