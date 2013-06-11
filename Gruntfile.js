module.exports = function(grunt) {

     grunt.initConfig({ 
         
        jshint: {
            all: ['Gruntfile.js', 'js/*.js']
        },     
         
       concat: {
          dist: {
            src: ['js/a.js', 'js/b.js', 'js/c.js'],
            dest: 'dist/js/app.js'
          }
        },
        clean: {
            dist: ['dist']
        },
         useminPrepare: {
          html: 'index.html',
          options: {
            dest: 'dist'
          }
        },
        usemin: {
          html: ['dist/index.html'],
          options: {
            dirs: ['dist']
          }
        },
         uglify: {
          dist: {
            files: {
              'dist/js/app.js': ['dist/js/app.js' ]
            }
          }
         },
         copy: {
            dist : {
                files: [{
                    dest: 'dist/',
                    src: ['*.html']
                },
                {
                    dest: 'dist/',
                    src: ['css/*.css']
                },
                {
                    dest: 'dist/',
                    src: ['img/*.*']
                }        
                ]
            }
          }
    });
    
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    
    grunt.registerTask('build', ['jshint', 'clean:dist','useminPrepare','copy','concat','usemin','uglify']);
    
    // Default task(s)
    grunt.registerTask('default', ['build']);
};