// index.js
const dayjs = require('dayjs');

// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
  },
  bindViewTap() {
    wx.navigateTo({
      url: 'pages/author/list/author_list',
    })
  },
})
