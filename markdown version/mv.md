# The mv Command

## Description
Moves files and directories. Also renames files and directories

## Usage
### Move:
`mv [options] [file to move] [destination]`

### Rename:
`mv [options] [file to rename] [new file name]`

## Examples
* Using absolute paths to move the file `notes.txt` to the `Documents` directory
`mv /home/adrian/Downloads/notes.txt /home/adrian/Documents`

* Using relative paths move the file `bash_notes.txt` to the `cis106` directory
`mv Downloads/bash_notes.txt Documents/cis106/`

* Mixing Relative Paths and Absolute path to move the file ocean.png top the `homework` directory
`mv /home/adrian/Downloads/ocean.png Documents/homework/`

* Using ~ and $HOME to move
`mv ~/Pictures/DR/hotel.png “$HOME/Pictures/Website Project/”`

* Renaming a Directory with absolute path
`mv /home/adrian/Pictures/Trip_To_Disney /home/adrian/Pictures/Maria_BD`

* Renaming a file with relative path
`mv Downloads/homework1.pdf Downloads/homework_w1.pdf`

* Renaming a file with ~ and $HOME
`mv ~/Downloads/script.py $HOME/Downloads/script.sh`

* Renaming and moving a file in the same command
`mv ~/Pictures/logo.png ~/Documents/company_logo_4x4.svg`

### Let's see more complex examples
Bob needs to move all the JPG files inside the Pictures directory and inside Documents directory to a directory called backupFiles

`mv Pictures/*.jpg Documents/*.jpg backupFiles`

Bob is being asked to rename a script.sh to script.sh.bk and move it the backupFiles directory. Bob present working directory is /usr/share and the script is located in the Documents directory.

`mv /home/$USER/Documents/script.sh ~/backupFiles/script.sh.bk`

> For more information, read the man page of the given command.