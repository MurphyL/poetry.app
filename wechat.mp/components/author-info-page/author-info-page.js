// components/author-info-page/author-info-page.js
const globalBehavior = require('../../utils/global-behavior');

Component({
    behaviors: [globalBehavior],
    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type: String,
            value: '作者'
        },
        info: {
            type: Object,
            value: {}
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
