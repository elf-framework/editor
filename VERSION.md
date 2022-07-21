# Version 

explain: https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md

##  make release note (automatic)

You can write different release notes for each selected project.

```sh
npm run changeset
```

* Select the version to update. (major, minor, patch)
* When selecting a version, press enter immediately to move to the next version.
* Write the text in summary to make a release note.
* When the summary is long, press Enter in the place where the summary is written to open an external editor.
* Automatically create .changeset/xxxx.md files.
* If the release notes are different for each project, repeat the above actions.

## make release note (manually)

Create a file like `.changeset/UNIQUE_ID.md` 

```md
---
"@myproject/cli": major
"@myproject/core": minor
---

Change all the things <- change logs
```

explain: https://github.com/changesets/changesets/blob/main/docs/detailed-explanation.md#the-solution-changesets

## update version 

Update the version of package.json based on the created release notes.

```sh
npm run version-packages 
```

## release 

After building the project, release it to npm.

```sh
npm run release
```
