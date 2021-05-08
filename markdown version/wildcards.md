# Wildcards

## Description:
Wildcard represents letters and characters used to specify a filename. File globing is the process of pattern matching using wildcards. The wildcards are officially called metacharacter wildcards.

**For Example:**
* You can use a wildcard to get a long list of all files in the current directory starting with “new.”
* Use wildcards to navigate to directories faster
* Move or delete a group of files
* Locate files based on a portion of their filenames
* Create files and directory quicker

|Wildcard | Description | Example|
|----------|---------------|---------|
|*         |Matches zero or more characters in a file name | ls *.txt |
|?         |Matches any one character in a filename | ls f?l?.txt |
|[aei]     |Matches one of multiple characters in a filename | ls f[a,e,i]le.txt |
|[a-z]     |Matches one of a range of characters in a filename|ls f[a-z]le.txt|
|[!m-x]    |Matches filenames that do not contain a specified range of characters|ls f[!m-x]le.txt|

> For more information, read the manual page of glob `man 7 glob`