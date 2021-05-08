# The mkdir command

## Description

The mkdir command is used for creating directories. Mkdir can create a single directory or multiple directories by separating each directory name by a space. Mkdir by default will create the given directory in the current working directory unless an absolute or relative path is specified in the new directory name. Mkdir can create directories with subdirectories when the -p option is used. If you try to create a directory that already exist, the following message is shown: mkdir: cannot create directory ‘directory’: File exists

# Usage

`mkdir [option] [directory(ies) to create]`

### Examples
* Create a directory called newFiles in the current(present) working directory
`mkdir newFiles`

* Create a directory using absolute path.For example, the following command will create a directory called assets_backup inside /var/www/html
`mkdir /var/www/html/assets_backup`

* Create multiple directories in the current working directory
`mkdir accounting hr support`
* Create multiple directories in different directories using relative path. (Asuming your pwd is your home directory)
`mkdir Music/newSongs Downloads/OldGames Pictures/Val_vacation-3-19`

* Create a parent directory with children directory.
`mkdir -p Vacations/DR/Summer/`

* Create a directory structure with brace expansion. For example, create the following structure with a single command:
Vacations/
```
├── DR
│ ├── summer
│ └── winter
├── PR
│ ├── jan
│ ├── march
│ └── september
└── USA
 ├── 2018
 ├── 2019
 └── 2021
```
`mkdir -p Vacations/{DR/{summer,winter},PR/{jan,march,september},USA/{2018,2019,2021}}`

> For more information, read the man page of the given command.