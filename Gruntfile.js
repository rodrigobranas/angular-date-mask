module.exports = function (grunt) {

  grunt.initConfig({
    clean: {
      dist: ['dist/']
    },
    jshint: {
      options: {
        curly: false,
        eqeqeq: false,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: false,
        unused: false,
        boss: true,
        eqnull: false,
        browser: true,
        noempty: true,
        trailing: true,
        globals: {
          jQuery: true
        }
      },
      dist: ['src/*.js']
    },
    concat: {
      dist: {
        src: ['src/angular-date-mask.js'],
        dest: 'dist/angular-date-mask.js'
      }
    },
    uglify: {
      dist: {
        src: ['dist/angular-date-mask.js'],
        dest: 'dist/angular-date-mask.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('dist',  ['clean', 'jshint', 'concat', 'uglify']);
}