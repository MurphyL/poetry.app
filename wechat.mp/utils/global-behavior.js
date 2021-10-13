var appInstance = getApp();

module.exports = Behavior({
    data: {
        ...appInstance.globalData
    },
})