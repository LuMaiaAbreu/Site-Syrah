



const gulp = require('gulp')
const image = require('gulp-image')




function tarefasImagem(){
    
    return gulp.src('./src/Imagens/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'))
}


exports.image = tarefasImagem