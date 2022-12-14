## Rules

- Don't create a pull request on an issue that doesn't exist, create an issue first and if the changes you are proposing are said to be okay, you can go ahead and create a pull request

- Don't work on anything unless you are assigned, if you make a pull request without being assigned to that issue, it will be closed without being merged

- Don't work on more than one issue at a time, this is so that you don't make a huge pull request and others can have opportunities to work on another issue while you work on something else

- Do read the `readme.md` file

- Add the Issue you worked on in your Pull Request 

- Don't work on the main branch, create your own branch by following the template

- Don't commit the lock files eg package.json

### Type of change

Please delete options that are not relevant.

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] This change requires a documentation update

### Checklist:

- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] Any dependent changes have been merged and published in downstream modules
- [ ] I have checked my code and corrected any misspellings


> # Note: Breaking any of the rules aboveðð½ will get your PR rejected

## ð©ð½âð» Prerequisite Skills to Contribute

### Contribute in project

- [Node.js](https://nodejs.org/)
- [JavaScript](https://www.typescriptlang.org/)

---

## ð¥ How to Contribute

- Take a look at the existing [Issues](https://github.com/UgegeDaniel/jakk/issues) or [create a new issue](https://github.com/UgegeDaniel/jakk/issues/new/choose)!
- [Fork the Repo](https://github.com/UgegeDaniel/jakk/fork). Then, create a branch for any issue that you are working on. Finally, commit your work.
- Create a [Pull Request](https://github.com/UgegeDaniel/jakk/compare) (PR), which will be promptly reviewed and given suggestions for improvements by the community.
- Add screenshots or screen captures to your Pull Request to help us understand the effects of the changes proposed in your PR.

---

## ð HOW TO MAKE A PULL REQUEST:

1. Start by making a Fork of the [jakk](https://github.com/UgegeDaniel/jakk) repository. Click on the <a href="https://github.com/UgegeDaniel/jakk/fork"><img src="https://i.imgur.com/G4z1kEe.png" height="21" width="21"></a>Fork symbol at the top right corner.

2. Clone your new fork of the repository in the terminal/CLI on your computer with the following command:

```bash
git clone https://github.com/<your-github-username>/jakk
```

3. Navigate to the newly created jakk project directory:

```bash
cd jakk
```

4. Set upstream command:

```bash
git remote add upstream https://github.com/UgegeDaniel/jakk.git
```

5. Create a new branch:

```bash
git checkout -b YourBranchName
```

6. Sync your fork or your local repository with the origin repository:

- In your forked repository, click on "Fetch upstream"
- Click "Fetch and merge"

### Alternatively, Git CLI way to Sync forked repository with origin repository:

```bash
git fetch upstream
```

```bash
git merge upstream/main
```

### [Github Docs](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) for Syncing

7. Make your changes to the source code.

8. Stage your changes and commit:

â ï¸ Make sure not to commit package.json or package-lock.json file

```bash
git cz
```

9. Push your local commits to the remote repository:

```bash
git push origin YourBranchName
```

10. Create a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)!

11. Congratulations! You've made your first contribution to [jakk](https://github.com/UgegeDaniel/jakk/graphs/contributors)!

ð After this, the maintainers will review the PR and will merge it if it helps move the jakk project forward. Otherwise, it will be given constructive feedback and suggestions for the changes needed to add the PR to the codebase.

---

## ð¥ Issues

In order to discuss changes, you are welcome to [open an issue](https://github.com/UgegeDaniel/jakk/issues/new/choose) about what you would like to contribute. Enhancements are always encouraged and appreciated.
