/**
 * Created by IoanaTrif on 1/6/2015.
 */
module.exports = function(grunt) {

    grunt.config.init({
        watch: {
            all: {
                files: ['src/pages/*.*', 'src/scripts/*.*', 'src/*.html'],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 9001,
                    base: './src',
                    keepalive: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
}