//see: https://gulpjs.com/docs/en/api/series/#usage
//see: https://dev.to/ganeshtyjo/gulp-4-tutorial-50l8
const gulp = require('gulp');
const del = require("del");
const connect = require('gulp-connect');

const { watch, series, parallel } = require('gulp');

const paths = {
    html: ['./src/**/*.html'],
    css: ['./src/**/*.css'],
    images: ['./src/**/*.ico', './src/**/*.png', './src/**/*.jpg', './src/**/*.jpeg'],
    src: 'src/**',
    dist: 'dist/**',
    dest: './dist'
}

function clean(done) {
    del([paths.dist, '!dist'], { force: true });
    done();
}

function server(done) {
    connect.server({
        root: 'dist',
        port: 3000,
        livereload: true
    });
    done();
}

function html() {
    return gulp.src(paths.html)
        .pipe(gulp.dest(paths.dest))
        .pipe(connect.reload());        
}

function css() {
    return gulp.src(paths.css)
        .pipe(gulp.dest(paths.dest))
        .pipe(connect.reload());        
}

function img() {
    return gulp.src(paths.images)
        .pipe(gulp.dest(paths.dest))
        .pipe(connect.reload());        
}

function monitor(done) {
    watch(paths.html, series(html));
    done();
}

const build = series(clean, parallel(html, css, img));

exports.clean = clean;
exports.build = build;
exports.default = series(build, server, monitor);