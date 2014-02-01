module.exports = function(grunt) {
  grunt.initConfig({
    compass: {
      dist: {
        options: {
          sassDir: '_scss',
          cssDir: 'assets/css',
          environment: 'production'
        }
      }    },
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
    },
    copy: {
      foundation: {
        files: [
          {expand: true,
            cwd: 'bower_components/modernizr/',
            src: 'modernizr.js',
            dest: 'assets/js'}
        ]
      }
      //bootstrap: {
        //files: [
          //{expand: true, cwd: 'bower_components/bootstrap/img/', src: ['**'], dest: 'assets/img/'}
        //]
      //}
    },
    exec: {
      build: {
        cmd: 'jekyll build'
      },
      serve: {
        cmd: 'jekyll serve --watch'
      },
      //deploy: {
        //cmd: 'rsync --progress -a --delete -e "ssh -q" _site/ myuser@host:mydir/'
      //}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', [ 'compass', 'uglify', 'copy', 'exec:build' ]);
  //grunt.registerTask('deploy', [ 'default', 'exec:deploy' ]);
};
