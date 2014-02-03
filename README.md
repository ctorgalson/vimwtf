# Vim WTF Build

This site is built with [npm](https://npmjs.org/), [bower](http://bower.io/), [jekyll](http://jekyllrb.com/), [grunt](http://gruntjs.com/) and [compass](http://compass-style.org/). These components are used for the following purposes:

- **npm**: set up the environment for grunt (@see
  [package.json](https://github.com/ctorgalson/vimwtf/blob/master/package.json))
- **bower**: manage frontend packages&mdash;mainly foundation, jquery and
  font-awesome in this case (@see
  [bower.json](https://github.com/ctorgalson/vimwtf/blob/master/bower.json); note that we never edit the files in bower_components)
- **jekyll**: builds the static site (@see
  [_config.yml](https://github.com/ctorgalson/vimwtf/blob/master/_config.yml))
- **compass**: makes css from sass (@see
  [config.rb](https://github.com/ctorgalson/vimwtf/blob/master/config.rb); **note**: I haven't confirmed that this file is even being used since I'm running compass from grunt)
- **grunt**: currently used for the following tasks (@see
  [Gruntfile.js](https://github.com/ctorgalson/vimwtf/blob/master/Gruntfile.js)):
  - run compass
  - concatenate, and minify/uglify javascript files
  - copy javascript files
  - run Jekyll

## To use it

1. clone this repo
2. run `npm install`
3. run `bower install`
4. run `grunt` (builds jekyll site for first time)
5. run `grunt dev` (runs compass, ugfy and `jekyll serve --watch &`)
5. make a post or make a change to \_scss/\_settings.scss etc
7. visit [the site](http://localhost:4000)

## References:

- [grunt-contrib-compass](https://github.com/gruntjs/grunt-contrib-compass)
- [grunt-exec](https://npmjs.org/package/grunt-exec)
- [Jekyll, Bower & Grunt](http://www.pletscher.org/blog/2013/05/27/website.html)
- [Deploying Jekyll on
  Heroku](http://blog.lifeoutthewindow.com/jekyll/update/2014/01/19/deploying-jekyll-on-heroku.html)

**To-do**:

- https://coderwall.com/p/g1kqzg
- https://github.com/gruntjs/grunt-contrib-watch
- live reload
