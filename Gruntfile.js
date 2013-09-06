module.exports = function(grunt) {

     grunt.initConfig({ 
        pkg: grunt.file.readJSON('package.json'), 
        jshint: {
            all: ['Gruntfile.js', 'js/*.js']
        },     
         
       concat: {
          dist: {
            src: ['js/messageHandler.js', 'js/dude.js', 'js/main.js'],
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
        }
    });
    
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-karma');
    
    grunt.registerTask('build', ['jshint', 'clean:dist','useminPrepare','copy','concat','usemin','uglify']);
    
      grunt.registerTask('test', ['karma']);
    
    // Default task(s)
    grunt.registerTask('default', ['test','build']);
};
