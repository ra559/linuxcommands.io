# Wildcards and Brace Expansion

## Description
Wildcard represents letters and characters used to specify a filename. File globing is the process of pattern matching using wildcards. Wildcards are useful to work with files in bulk by using a pattern in the file name that the files have in common. 

| Wildcard | Description                                                           | Example           |
| -------- | --------------------------------------------------------------------- | ----------------- |
| *        | Matches zero or more characters in a file name                        | ls *.txt          |
| ?        | Matches any one character in a filename                               | ls f?l?.txt       |
| [aei]    | Matches one of multiple characters in a filename                      | ls f[a,e,i]le.txt |
| [a-z]    | Matches one of a range of characters in a filename                    | ls f[a-z]le.txt   |
| [!m-x]   | Matches filenames that do not contain a specified range of characters | ls f[!m-x]le.txt  |

## Examples of the * Wildcard
* List all the .png and .txt files in the present working directory.
* `ls *.png *.txt`
* List all the files that have a particular string in the file name. For example, all files that have the word **new** anywhere in the file name.
* `ls *new*`
* List all the files that start with a particular string.
* `ls New*`
* Move all the files inside a given directory to another directory
* `mv Downloads/games/* Documents/new-games/`
* Remove 3 files that have the same name but different file extensions.
* `rm program.*`

## Examples of the ? Wildcard
* Match only 1 character
* `ls f?le.txt`
* Move all the files that have 3 letters in their file name
* `mv Downloads/program.?? Documents/CIS108/Homework/` 
* List all the directories in the root directory that have only 3 characters in their name
* `ls -d /???`
* List all the hidden directories in a given directory
* `ls -Ad .??*`

## Examples of the [] Wildcard
* List all the text files that start with a lower case letter
* `ls [a-z]*.txt`
* List all the files that start with an upper case letter, are followed by a number, and have a 4 letter file extension
* `ls [A-Z][0-9]*.????`
* List all the files that do not start with a lower case letter
* `ls [!a-z]*`

## Using POSIX classes
| POSIX Class | Represents    | Means                               |
| ----------- | ------------- | ----------------------------------- |
| [:upper:]   | [A-Z]         | Upper case letters                  |
| [:lower:]   | [a-z]         | Lower case letters                  |
| [:alpha:]   | [A-Za-z]      | Upper and Lower case letters        |
| [:alnum:]   | [A-Za-z0-9]   | Lower case, upper case, and digits  |
| [:digit:]   | [0-9]         | digits                              |
| [:xdigit:]  | [0-9A-Fa-f]   | hexadecimal digits                  |
| [:punct:]   | [.,!?:...]    | punctuation                         |
| [:blank:]   | [\t]          | space and tabs                      |
| [:cntrl:]   | n/a           | control characters                  |
| [:graph:]   | [^\t\n\r\g\v] | printed characters without spaces   |
| [:print:]   | [^\t\n\r\g\v] | printed characters including spaces |
| [:space:]   | [\t\n\r\g\v]  | whitespace characters               |

## Examples using POSIX classes
* List all the files that have a punctuation character in the name
* `ls *[[:punct:]].*`
* List all the files that have a number before the file extension
* `ls *[[:digit:]].*`
* List all files that have a space in their name
* `ls *[[:space:]]*`

## Brace Expansion
Brace expansion is a built-in feature of the shell that allows the creation of strings to expand the functionality of commands. The syntax for brace expansion is either a sequence specification or a comma separated list of items inside curly braces "{}". 
* Example of sequences are:
  * {a..z} = Expands from a to z
  * {A..Z} = Expands from A to Z
  * {0..9} = Expands from 0 to 9
  * {a..Z} = Expands from a to Z
  * {001..100} = Expands from 0001 to 0100
* Example of comma separated values are:
  * {videos,pictures,songs}
  * {rap/{90s,2000s},rock/{old,new},jazz/{ny,nj}}
  * {fps/game{1..2},rpg/game{a..e}}

## Examples Using Brace Expansion
* Create a complex directory structure in a single command
```
movies
├── anime
│   ├── 80s
│   │   ├── mkv
│   │   └── mp4
│   └── 90s
│       ├── mkv
│       └── mp4
├── dc
│   ├── 80s
│   │   ├── mkv
│   │   └── mp4
│   └── 90s
│       ├── mkv
│       └── mp4
└── marvel
    ├── 80s
    │   ├── mkv
    │   └── mp4
    └── 90s
        ├── mkv
        └── mp4
```
* `mkdir -p movies/{marvel,dc,anime}/{90s,80s}/{mp4,mkv}`
* Another example of creating a complex directory structure in a single command
```
games/
├── arcade
│   ├── beat-em-up
│   └── shoot-em-up
├── console
│   ├── platform
│   └── racing
└── pc
    ├── fps
    └── rpg
```
* `mkdir -p games/{pc/{fps,rpg},console/{platform,racing},arcade/{beat-em-up,shoot-em-up}}`
* List specific files based on their file extension
* `ls *.{jpg,png,gif,txt,raw}`
* Create files with a given prefix in the file name combining 2 wildcards
* `touch file{1..5}{A..E}`
* Create files with an increment in the count
* `touch file{1..20..2}`
* It also works with letters
* `touch file{a..z..5}`
* Create a for loop using non numeric indexes
```
for i in {a..z}
do
    echo $i
done
```
* Create a counted for loop
```
for i in {0..19}
do
    echo $i
done
```

> For more information, read the manual page of glob `man 7 glob`