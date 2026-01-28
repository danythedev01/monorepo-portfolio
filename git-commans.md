# Git

## Rebase

1. checkout to branch

2. git rebase -i HEAD~3
   3 is for the last 3 commits back from head

3. Then, replace "pick" from lines 2 and 3 with "squash"

4. Save the changes (Esc : w q)

5. A new file will pop up for refactoring squash message

6. Save & exit (Esc : w q)
