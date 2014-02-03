# Vim WTF Build

This site is built with [npm](https://npmjs.org/), [bower](http://bower.io/), [jekyll](http://jekyllrb.com/), [grunt](http://gruntjs.com/) and [compass](http://compass-style.org/). These components are used for the following purposes:

- **npm**: set up the environment for grunt (@see
  [package.json](https://github.com/ctorgalson/vimwtf/blob/master/package.json))
- **bower**: manage frontend packages&mdash;mainly foundation, jquery and
  font-awesome in this case (@see
  [bower.json](https://github.com/ctorgalson/vimwtf/blob/master/bower.json); note that we never edit the files in bower_components)
- **jekyll**: builds the static site
- **grunt**: currently used for the following tasks:
  - run compass
  - concatenate, and minify/uglify javascript files
  - copy javascript files
  - run Jekyll

## To use it

1. clone this repo
2. run `npm install`
3. run `bower install`
4. make a post or make a change to _scss/_settings.scss etc
5. run `grunt`
6. run `jekyll serve --watch` (I think grunt is supposed to be handling
   this the way I've set it up, but it doesn't seem to be
   working&hellip;)
7. visit [the site](http://localhost:4000)

## References:

- [Jekyll, Bower & Grunt](http://www.pletscher.org/blog/2013/05/27/website.html)
