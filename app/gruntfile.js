/**
 * Represents the grunt file
 *
 * @author poonwu
 * @version 1.0
 */
'use strict';

module.exports = function (grunt) {

    // Configuration
    grunt.initConfig({
        concat: {},

        jshint: {
            files: ['app/js/**/*.js'],
            options: {
                jshintrc: true
            }
        },

        watch: {
            scripts: {
                files: ['app/js/**/*.js'],
                options: {
                    livereload: true,
                    spawn: false
                }
            }
        },
        
        connect: {
            dev: {
                options: {
                    base: 'src',
                    port: 8000,
                    open: true
                }
            }
        },

        injector: {
            dev: {
                'src/index.html' : ['src/js/*.js', 'src/css/*.css']
            }
        }
    });

    // Plugins
    require('load-grunt-tasks')(grunt);

    // Tasks
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('dev', ['jshint', 'injector:dev', 'connect:dev:keepalive']);
    // grunt.registerTask('build', ['jshint', 'concat', 'watch']);
};

