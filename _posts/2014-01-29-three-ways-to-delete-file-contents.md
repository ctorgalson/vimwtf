---
layout: post
title: "Three ways to delete file contents"
date: 2014-01-29 21:54:26
categories: commands
tags: c d Ex G gg motions V Vi Vim visual 
---

Recently, due to a Drupal security update, I needed to log into multiple
different servers and replace the contents of an .htaccess file.

Now in a conventional editor, this would have been a simple task:

1. open the file
1. type `Command A` or `Control A` (depending on OS) to select the entire
  contents of the file
1. paste the new contents of the file

Vim, however, is a slightly different paradigm. This is made slightly
trickier still by the fact that some of the servers I had to work on
have some version of Vim available, while others only have a version of
Vi. This meant that my first solution–use [Visual
mode](http://vimhelp.appspot.com/visual.txt.html#visual.txt)–was not
available everywhere I needed to make the change. This in turn meant I had to delve into the world of [Ex
ranges](http://vimhelp.appspot.com/quickref.txt.html#Q_ra) (to me, Ex
is an even more obscure area than the rest of Vi[m]).

### Vim: Delete everything using Visual mode

Visual mode is about as close as Vim comes to acting like the GUI
applications we're usually accustomed to. The sequence for replacing a
file's contents looks similar to the one above:

1. Highlight the entire contents of the file
2. Delete the highlighted text
3. Insert new text

Adapted to the Vim idiom, this looks like this:

1. `gg`: navigate to the very beginning of the file
2. `V`: enter Visual mode
3. `G`: navigate to the very end of the file
4. `c`: *change* (not delete!) the selected text
5. Paste in the new text

This is one of those cases where Vim is actually a bit *less* efficient
than the typical GUI app. However, it's not dramatically inefficient,
and besides, there are no GUI apps available on the servers I was
working with.

It's worth noting here that step 4 in Vim you can save a keystroke by
using `c` to delete the selected stuff **and** enter insert mode instead
of `di` to achieve the same effect.

### Vi: Delete everything using an Ex range

I don't know a lot of Vim, I know less Vi, and less still about Ex.
However ranges are neat. Here the basic strategy looks like this:

1. Delete a specified range of lines
2. Insert new text

You can't beat the simplicity. So with the file open the actual sequence
looks like this:

2. `:1,$d` + `Enter`: Unpacked a bit, this means:
  * `:`: enter Ex mode
  * `1,$d`: specify a range of lines to delete (`d`) beginning with the first line (`1`) and
    ending with the last line of the file (`$`)
  * `Enter`: do it
3. `i`: enter Insert mode
4. Paste in the new text

This is also very efficient (!), but I find it difficult to type.

### Vi[m] Delete everything in two keystrokes

Full disclosure: *I figured this one out while writing this blog post*.
The two solutions above are fast and the first one's even easy. But
honestly neither of them compares to the GUI app's `Control A`/`Command
A`-and-start-typing method.

While writing the two steps above, I realized that since [Vim operators
work with motions](http://vimhelp.appspot.com/motion.txt.html#operator) (e.g.: `3x` will delete the next three characters), it would be enough to:

1. Navigate to the beginning of the file
2. Use a motion to change to the end of the file

Which, in Vim-language looks like this:

1. `gg`: navigate to the very beginning of the file
2. `cG`: change from here to the end of the file

I have a bad habit of using `d` + `i` (delete plus insert) where
I should just use `c`. This is a good example of where to use
`c` instead of `d`–because the whole point of the exercise is to *change* the file's
contents.
