# Hard and Soft Links
## Hard Links

### Description
Are files that point to data on the hard drive (associates a name with a file on a file system). Hard links share the same inode number. The data isn’t deleted until the last link is delete. If one file is changed, all the hard links will change as well.

### Usage
`ln [file] [new hard link]`

### Examples
* Create a hard link of the file games.txt named list_of_games.lst in the Documents directory
`ln games.txt ~/Documents/list_of_games.lst`


## Symbolic (soft) links

### Description
Are special types of files that point to other files instead of pointing to data on the hard drive.
Symbolic links are the equivalent of shortcuts in a Windows environment
To create a hard link use the command:.

### Usage
`ln -s [file] [new hard link]`

### Examples
* Create a symbolic link of the file games.txt named list_of_games.lst in the Documents directory
`ln -s games.txt ~/Documents/list_of_games.lst`

> For more information, read bash's man page.