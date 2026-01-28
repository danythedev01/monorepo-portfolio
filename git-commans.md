# Git

## Squash

1. checkout to branch

2. git rebase -i HEAD~3
   3 is for the last 3 commits back from head

3. Then, replace "pick" from lines 2 and 3 with "squash"

4. Save the changes (Esc : w q)

5. A new file will pop up for refactoring squash message

6. Save & exit (Esc : w q)

## Cherry pick

1. See the commits from desired branch
   (in one line for better readability)

```bash
git log cherry-pick-branch --oneline
```

2. Identify the commit hash we wanna pick

3. Create a branch off of main

```bash
git checkout -b cherrypick_readme-fix
```

4. put the changes into the cherrypick branch

```bash
git cherry-pick f3746aa0b9d3f9521cb18efd088e084214446658
```

5. push the changes so you can create a PR and merge to main
