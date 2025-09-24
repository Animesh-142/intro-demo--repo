# intro-demo--repo
This is a demonstration repository containing a simple readme file. It serves as an introductory example for working with Git repositories and basic file operations.

**CRITICAL**: Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the information provided here.

## Working Effectively

### Repository Setup and Navigation
- **Repository location**: Always work from `/home/runner/work/intro-demo--repo/intro-demo--repo`
- **Navigate to repository**: `cd /home/runner/work/intro-demo--repo/intro-demo--repo`
- **Check current location**: `pwd`
- **List repository contents**: `ls -la`
- **View all files including hidden**: `find . -type f | grep -v "\.git/" | head -20`

### Basic Git Operations (All operations complete in < 1 second)
- **Check repository status**: `git status`
- **View commit history**: `git log --oneline -10`
- **View current branch**: `git branch -v`
- **View all branches**: `git branch -a`
- **View remote repositories**: `git remote -v`
- **Check differences**: `git diff`
- **Check differences for specific file**: `git diff filename`

### File Operations
- **View readme content**: `cat readme.md`
- **Count lines in readme**: `wc -l readme.md`
- **Check file type**: `file readme.md`
- **Create backup**: `cp readme.md /tmp/readme_backup.md`
- **View file permissions**: `ls -la readme.md`

### Making Changes
- **Edit files using str_replace_editor tool**: Use the str_replace_editor tool to view and modify files
- **Append to file**: `echo "additional content" >> filename`
- **Create new files**: Use str_replace_editor with "create" command
- **Revert changes**: `git checkout -- filename`
- **Stage changes**: `git add filename` (Note: Use report_progress tool for commits)

## Validation Steps

### Always Run These Validation Steps After Making Changes:
- **Check git status**: `git status` - Verify expected files are modified
- **Review changes**: `git diff` - Ensure changes are correct and minimal
- **Test file integrity**: `cat filename` - Verify file content is as expected
- **Check repository structure**: `ls -la` - Ensure no unintended files were created

### Manual Testing Scenarios:
- **Basic file reading**: Run `cat readme.md` and verify content displays properly
- **File modification**: Make a small change, check with `git diff`, then revert with `git checkout -- readme.md`
- **Directory navigation**: Confirm you can navigate and list files in the repository
- **Permission checks**: Run `ls -la` to ensure file permissions are maintained

## Repository Structure

### Current Repository Contents:
```
/home/runner/work/intro-demo--repo/intro-demo--repo/
├── .git/                    # Git repository data
├── .github/                 # GitHub-specific files (created as needed)
│   └── copilot-instructions.md  # These instructions
└── readme.md                # Main repository documentation (38 bytes)
```

### Key Information:
- **Main file**: `readme.md` - Contains introductory text about the repository
- **File size**: 38 bytes (1 line of text)
- **File type**: ASCII text
- **Current branch**: Working branches are typically named `copilot/fix-*`
- **Remote**: `https://github.com/Animesh-142/intro-demo--repo`

## Common Tasks

### Viewing Repository Information:
```bash
# Quick repository overview
cd /home/runner/work/intro-demo--repo/intro-demo--repo
pwd && ls -la && git status

# View readme content
cat readme.md

# Check git history
git log --oneline -5

# View current branch and remotes
git branch -v && git remote -v
```

### Making and Validating Changes:
```bash
# Always start by checking current state
git status

# After making changes, always validate
git diff                    # Review your changes
git status                  # Check which files are modified

# Use report_progress tool to commit and push changes
# DO NOT use git commit or git push directly
```

### Emergency Recovery:
```bash
# Revert all uncommitted changes
git checkout -- .

# Revert specific file
git checkout -- filename

# Check if repository is clean
git status
```

## Timing Expectations
- **All basic operations** (git status, ls, cat, etc.): < 1 second
- **File operations** (reading, copying, basic editing): < 1 second  
- **Git operations** (diff, log, status): < 1 second
- **NO LONG-RUNNING BUILDS**: This repository has no build processes or complex operations

## Critical Reminders
- **ALWAYS** use the `report_progress` tool for committing and pushing changes
- **NEVER** use `git commit` or `git push` directly - these operations are handled by the report_progress tool
- **ALWAYS** work from the absolute path `/home/runner/work/intro-demo--repo/intro-demo--repo`
- **ALWAYS** validate changes with `git diff` and `git status` before using report_progress
- **File paths**: Use absolute paths starting with `/home/runner/work/intro-demo--repo/intro-demo--repo/`
- **Backup important changes**: Copy files to `/tmp/` before making modifications if testing

## Troubleshooting
- **If git commands fail**: Check you're in the correct directory with `pwd`
- **If files seem missing**: Run `ls -la` to see all files including hidden ones
- **If changes don't appear**: Run `git status` to see working tree state
- **If confused about repository state**: Run `git status && git log --oneline -3`

## Examples of Common Command Sequences:

### Check repository state:
```bash
cd /home/runner/work/intro-demo--repo/intro-demo--repo
git status && ls -la && cat readme.md
```

### Make and validate a change:
```bash
# 1. Check current state
git status

# 2. Make change using str_replace_editor tool
# (use str_replace_editor to modify files)

# 3. Validate change
git diff
git status

# 4. Commit using report_progress tool
# (use report_progress tool to commit and push)
```

This repository is intentionally simple and serves as a foundation for learning basic repository operations and Git workflows.