# The ls Command
## Description

The ls command is used for listing files and directories. In other words, you can use the ls command to see whats inside a directory.


## Usage

`ls [options] [directory or file]`

## Examples:

* List all files inside the present working directory
`ls`
* List all files inside the present working directory including hidden files
`ls -a`
* Long list all files inside the pwd
`ls -l`
* Long list all files including hidden files inside the present working directory
`ls -la`
* Bob wants to list all the files in the Music directory with the author
`ls -la --author ~/Music`
* Joe wants to see all the files in the Downloads directory sorted by modification time with human readable file sizes.
`ls -ath ~/Downloads`
* Maria wants to see all the files in the /var/www/html/assets directory sorted by file extension, with human readable file sizes but without the user and the group information
`ls -lhgGX /var/wwww/html/assets/`

* See all the options of the ls command
`ls --help | grep "^[[:space:]]*[[:punct:]]"`

> For more information, read the man page of the given command.