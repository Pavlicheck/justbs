const gulp = require('gulp'),
	  bs   = require('browser-sync').create();

gulp.task('bs', () => {
	bs.init({
		server: {
			baseDir: "./project/"
		},
		notify: false
	})
})


gulp.task('default', ['bs'], () => {
	gulp.watch("./project/**/*", bs.reload)
})