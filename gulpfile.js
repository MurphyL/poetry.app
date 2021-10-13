const { src, dest } = require('gulp');
const rename = require('gulp-rename');
const json2js = require('gulp-json-transform');

const defaultTask = async () => {
    const items = [{
        source: './chinese-poetry/json/authors.tang.json',
        target: './wechat.mp/subpackages/tang-shi/build/'
    }, {
        source: './chinese-poetry/json/authors.song.json',
        target: './wechat.mp/subpackages/tang-shi/build/'
    }];
    items.forEach(({ source, target }) => {
        src(source)
            .pipe(json2js(function (rows) {
                const result = {};
                rows.forEach(({ id, name, desc }) => {
                    result[id] = { name, desc };
                });
                return 'module.exports = ' + JSON.stringify({ file: source, data: result });
            }))
            .pipe(rename({
                extname: '.js'
            }))
            .pipe(dest(target));
    });

};

exports.default = defaultTask;