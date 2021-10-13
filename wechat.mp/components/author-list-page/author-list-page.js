// components/author-list-page/author-list-page.js
const globalBehavior = require('../../utils/global-behavior');

Component({
    behaviors: [globalBehavior],
    properties: {
        title: {
            type: String,
            value: '所有作者'
        },
        url: {
            type: String,
            value: '/pages/index/index'
        },
        rows: {
            type: Array,
            value: []
        }
    },
    data: {

    },
    methods: {

    }
})