// subpackages/tang-shi/pages/author-list/author-list.js
const authors = require('../../build/authors.tang');

Page({
    /**
     * 页面的初始数据
     */
    data: {
        authors: [],
        windowStart: 0,
        windowEnd: 10,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const rows = Object.entries(authors.data).map(([id, info]) => ({
            id,
            name: info.name
        }));
        this.setData({
            authors: (rows).slice(this.data.windowStart, this.data.windowEnd)
        });
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

    }
})