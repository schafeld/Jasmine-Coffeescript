module.exports = function(grunt) {
  'use strict';
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
        all: [
            "Gruntfile.js",
            // "lib/**/*.js",
            "spec/**/*.js"
        ],
        options: {
          jshintrc: '.jshintrc'
        },
      },
    jasmine : {
      src : 'src/**/*.js',
      options : {
        specs : 'spec/**/*.js'
      }
    },
    watch: {
      files: 'src/**/*.js',
      tasks: ['jasmine']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['jshint', 'jasmine']);
  grunt.registerTask('default', ['test']);
};