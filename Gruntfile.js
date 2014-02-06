module.exports = function(grunt) {
  grunt.initConfig({
    compass: {
      dist: {
        options: {
          config: 'config.rb',
          cssDir: 'assets/css',
          environment: 'production',
          sassDir: '_scss'
        }
      },
      dev: {
        options: {
          config: 'config.rb',
          cssDir: 'assets/css',
          environment: 'development',
          sassDir: '_scss',
          watch: true
        }
      }
    },
    copy: {
      foundation: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/modernizr/',
            src: 'modernizr.js',
            dest: 'assets/js'
          }
        ]
      }
    },
    exec: {
      build: {
        cmd: 'jekyll build'
      },
      serve: {
        cmd: 'jekyll serve --watch &' // Run jekyll in the background...
      },
      //deploy: {
        //cmd: 'rsync --progress -a --delete -e "ssh -q" _site/ myuser@host:mydir/'
      //}
    },
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
          expand: true,
          cwd: '_images/',
          src: ['**/*.png'],
          dest: 'assets/img/',
          ext: '.png'
        }
        ]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [
          {
          expand: true,
          cwd: '_images/',
          src: ['**/*.jpg'],
          dest: 'assets/img/',
          ext: '.jpg'
        }
        ]
      }
    },
    uglify: {
      jquery: {
        files: {
          'assets/js/jquery.min.js': 'bower_components/jquery/jquery.js'
        }
      },
      foundation: {
        files: {
          'assets/js/foundation.min.js': [
            'bower_components/foundation/js/foundation.js',
            'bower_components/foundation/js/topbar.js',
            'bower_components/foundation/js/dropdown.js',
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', [ 'copy', 'imagemin', 'exec:build' ]);
  grunt.registerTask('dev', [ 'uglify', 'exec:serve', 'compass' ]);
  //grunt.registerTask('deploy', [ 'default', 'exec:deploy' ]);
};
