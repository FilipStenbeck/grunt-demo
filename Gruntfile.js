module.exports = function(grunt) {

     grunt.initConfig({ 
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: ['js/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        coffee: {
            compile: {
                files: {
                    'js/messageHandler.js': 'coffee/messageHandler.coffee'
                }
            }
        },
        watch: {
            sass: {
                files: ['css/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            },
            coffee: {
                files: ['coffee/*.coffee'],
                tasks: ['compile', 'jshint'],
                options: {
                    spawn: false
                }
            },
            javascript: {
                files: ['js/*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false
                }
            },
            livereload: {
              options: {
                  livereload: '<%= connect.options.livereload %>'
              },
              files: [
                  '*.html',
                  'css/{,*/}*.css',
                  'js/{,*/}*.js',
              ]
            }
        },
        connect: {
          options: {
              port: 9001,
              livereload: 35729,
              // change this to '0.0.0.0' to access the server from outside
              hostname: 'localhost'
          },
          livereload: {
              options: {
                  open: true,
              }
          }

          },
        concat: {
          dist: {
            src: ['js/messageHandler.js', 'js/dude.js', 'js/main.js', 'js/hello.js'],
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
          options: {
            banner: '/*! <%= pkg.name %> <%= pkg.version %> by : <%= pkg.author %> licence : <%= pkg.license %> build date : <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          dist: {
            files: {
              'dist/js/app-min.js': ['dist/js/app.js' ]
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
          },
         karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
         sass: {                             
           dist: {                          
             options: {                       
               style: 'expanded'
             },
             files: {                        
               'css/app.css': 'css/app.scss'      
             }
           }
        }
    });
         
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-karma');
    

    grunt.registerTask('build', ['compile', 'sass', 'jshint', 'clean:dist','useminPrepare','copy','concat','usemin','uglify']);
    grunt.registerTask('compile', ['coffee']);
    grunt.registerTask('test', ['compile', 'karma']);
    grunt.registerTask('sass-compile', ['sass']);
   
    grunt.registerTask('server', ['build', 'connect:livereload', 'watch']);

    
    // Default task(s)
    grunt.registerTask('default', ['test','build']);
};
