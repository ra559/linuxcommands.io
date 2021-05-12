# Wildcards

## Description:
Wildcard represents letters and characters used to specify a filename. File globing is the process of pattern matching using wildcards. The wildcards are officially called metacharacter wildcards. Wildcards are useful to work with files in bulk by using a pattern in the file name that the files have in common. 

|Wildcard | Description | Example|
|---------|-------------|--------|
|*        | Matches zero or more characters in a file name | ls *.txt |
|?        | Matches any one character in a filename | ls f?l?.txt |
|[aei]    | Matches one of multiple characters in a filename | ls f[a,e,i]le.txt |
|[a-z]    | Matches one of a range of characters in a filename| ls f[a-z]le.txt |
|[!m-x]   | Matches filenames that do not contain a specified range of characters| ls f[!m-x]le.txt |

# Examples of the * Wildcard
* List all the .png files in the present working directory.
``

# Examples of the ? Wildcard


# Examples of the [] Wildcard


> For more information, read the manual page of glob `man 7 glob`