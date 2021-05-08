# Getting help

## The man command
* Man (manual) pages are documentation files that describe Linux shell commands, executable programs, system calls, special files, and so forth.
* Man pages are not step-by-step guides, but instead quick references
* To view the manual of a command type: man + command.
* Example:
  * `man ls`
* To navigate the man page of a command, you can use the arrow key or the man command internal shortcuts.
* To exit the man page press letter “q”

## Examples
* Open the man page of the passwd command
`man passwd`

* Open a specific man page for the passwd command
`man 5 passwd`

* Show the man page section of the passwd command
`man -f passwd`

* Show all the available pages of a command
`man -a passwd`

* Searches for a man page for a given word or regular expression or phrase.
`man -k file`

## Other ways of getting help
* Use the command options --help
`ls --help cat --h`

* The `apropos` command list all the applicable man pages for a given command
`apropos wget`

* The whatis command shows a brief snippet of information about a given command
`whatis ssh`

* An alternative to man is info which works in a similar way but it is more modern and with more options.
`info wget`

> For more information, read the man page of the given command.