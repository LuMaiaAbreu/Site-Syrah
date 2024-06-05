const {parallel} = require('gulp')
const gulp = require('gulp')

const htmlmin = require('gulp-htmlmin')
const cssmin = require('gulp-cssmin')
const concat = require('gulp-concat');
const rename = require('gulp-rename');



function tarefasCss(callback){


    gulp.src([
       
        './src/Css/style.css',    
    ])
       .pipe (concat('libs.css'))
       .pipe(cssmin())
       .pipe(rename({suffix:'.min'}))
       .pipe(gulp.dest('./dist'))

       return callback()
}

function tarefasHTML(callback){

    gulp.src('./src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))

    return callback()  


}

exports.default = parallel( tarefasHTML,tarefasCss)