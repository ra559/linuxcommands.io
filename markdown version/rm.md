# The rm Command

## Description
Removes files and directories

## Usage
rm [options] [file/directory name]

## Examples
Removes a single file
`rm file.txt`

Removes several files
`rm file1.txt file.docx`

Removes all files inside the present working directory
`rm *`

Removes a directory (this commands will remove a directory whether it is empty or not! Use it carefully!)
`rm -r homework/`

Removes an empty directory
`rmdir labs/`

### Let's see more complex examples
Bob wants to remove 3 directories inside the Downloads directory (wallpapers, games, docs).

`rm -r Downloads/{wallpapers,games,docs}`

Bob is asked to remove all text files inside the script directory and all doc files inside the work directory

`rm script/*.txt work/*.doc`

Bob needs to remove all html and js files from two directories. He wants to make sure that only html or js files are removed.

`rm website/{*.html,*.js} website2/{*.html,*.js}`

> For more information, read the man page of the given command.