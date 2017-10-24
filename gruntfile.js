module.exports = function(grunt) {

// Project configuration.

grunt.initConfig({
  browserSync: {
    dev: {
     bsFiles: {
        src : [
            'css/*.css',
            './*.html'
            ]
     },
     options: {
        watchTask: true,
        server: './'
     }
    }
  },
   
  sass: {
    options: {
      sourceMap: true
      },
    dist: {
      files: {
        'css/style.css': 'scss/style.scss'
      }
    }
  },

  imagemin: {
    dynamic: {
  		files: [{
  			expand: true,
  			cwd: 'images/',
  			src: ['**/*.{png,jpg,gif}'],
  			dest: 'images/build/'
  		}]
  	}
  },
	watch: {
    		scripts: {
        		files: ['scss/*.scss'],
  		      tasks: ['sass'],
        		options: {
       			     spawn: false,
        		},
    		}
	}
  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['browserSync','sass', 'imagemin','watch']);
};