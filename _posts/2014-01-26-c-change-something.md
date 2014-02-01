---
layout: post
title: "c: Change Something (also d and y&hellip;)"
date: 2014-01-26 12:25:45
categories: commands
tags: c d normal vim y
---

I used Vim daily for several months before I really started to grasp [the `c` command](http://vimhelp.appspot.com/change.txt.html#c). In retrospect that's strange since once I got it, it instantly became essential to almost any change I needed to make in any kind of code or text whatsoever. The command's job is to

> Delete &hellip; text &hellip; and start insert

In mouse-and-click terms, the effect is the same as if you'd highlighted a bit of text and deleted it with the cursor waiting for you to type the replacement text. This explanation fails to capture how *useful* `c` is though. Consider the following examples:

- change the current word: `ciw`
- change the next three words: `c3w`
- change the contents of an html tag: `cit`
- change inside these single or double quotes: `ci"` or `ci'`
- change inside these brackets, parentheses or braces: `ci[` or `ci(`,
  `ci{`
- change inside these brackets, parentheses or braces and the brackets,
  parentheses or braces too: `ca[`, `ci(`, `ci{`
- change everything from here to the next "R", inclusive: `cfR`
- change everything from here up to but not including the next "R": `ctR`
- change everything from here to the end of the line: `c$` or `C`
- change everything from here to the beginning of the line: `c^`
- just change the whole line already: `cc`

Every one of the above combinations also works with [the `d` command](http://vimhelp.appspot.com/change.txt.html#d) (and [the `y` command](http://vimhelp.appspot.com/change.txt.html#y) for that matter). More seasoned Vim users may laugh, but I had to *learn* that Vim's various commands are not completely random, and that you can apply what you learn about one command to another command.

If you haven't used Vim much yet, take note of that differences between `c` ("change") and `d` ("delete"). `d` deletes the specified text and instantly returns Vim to normal mode while `c` deletes the text and then puts Vim in insert mode. Not paying attention to this difference can impair your efficiency; I learned `d` well ahead of `c` with the result that I now often delete something I mean to change and then–o, the inefficiency!–immediately need to type an extra `i` to enter insert mode to make the actual change.
