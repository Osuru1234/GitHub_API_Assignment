# Setting Up a GitHub Repository and Making a First Commit
## Prerequisites

Before starting, make sure you have:

- A computer with an internet connection.
- A GitHub account.
- Git installed on your computer.
- Visual Studio Code installed.
- Basic knowledge of using files and folders.

## Step-by-Step Procedure

1. Open your web browser.
   **Expected result:** Your web browser opens.

2. Open the GitHub website.
   **Expected result:** The GitHub homepage appears.

3. Sign in to your GitHub account.
   **Expected result:** Your GitHub account dashboard appears.

4. Create a new repository.
   **Expected result:** The new repository page appears.

5. Enter `GitHub_API_Assignment` as the repository name.
   **Expected result:** The repository name appears in the name field.

6. Select **Public** as the repository visibility.
   **Expected result:** The Public option is selected.

7. Click **Create repository**.
   **Expected result:** The new GitHub repository page appears.

8. Open the `GitHub_API_Assignment` folder on your computer.
   **Expected result:** The project folder opens.

9. Open the folder in Visual Studio Code.
   **Expected result:** The project files appear in VS Code.

10. Open the VS Code terminal.
    **Expected result:** A terminal appears at the bottom of VS Code.

11. Initialize the Git repository.
    **Command:** `git init`
    **Expected result:** Git creates a local repository in the project folder.

12. Check the repository status.
    **Command:** `git status`
    **Expected result:** Git displays the current repository status.

13. Stage the README file.
    **Command:** `git add README.md`
    **Expected result:** `README.md` is listed under changes to be committed.

14. Create the first commit.
    **Command:** `git commit -m "Add assignment procedure"`
    **Expected result:** Git creates a new commit containing the README file.

15. Rename the current branch to `main`.
    **Command:** `git branch -M main`
    **Expected result:** The current branch is named `main`.

16. Connect the local repository to GitHub.
    **Command:** `git remote add origin YOUR-GITHUB-REPOSITORY-URL`
    **Expected result:** The local repository has a remote named `origin`.

17. Push the commit to GitHub.
    **Command:** `git push -u origin main`
    **Expected result:** The `main` branch and README file are uploaded to GitHub.

18. Refresh the GitHub repository page.
    **Expected result:** `README.md` appears in the GitHub repository.

## Screenshot Description

Include a screenshot of the GitHub repository page after the push is completed. The screenshot should show the repository name, the `README.md` file, and the uploaded assignment content.

## Troubleshooting

**Common error:** `fatal: 'origin' does not appear to be a git repository`

This usually means the GitHub repository has not been connected to the local repository.

Run:

```bash
git remote -v
```

If nothing appears, add the GitHub repository again:

```bash
git remote add origin YOUR-GITHUB-REPOSITORY-URL
```

Then push the project again:

```bash
git push -u origin main
```
