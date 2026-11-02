# nightly

The nightly web build of [scmJS](https://github.com/scm-js/scm-js), the browser-based
StarCraft: Brood War map editor. It is served at
[scmjs.dev/nightly](https://scmjs.dev/nightly/) and rebuilt every night from the editor's
`main` branch, for trying what is in development.

Nothing here is written by hand. Each night the `nightly-site` job in the editor's
`build.yml` builds the same commit as the nightly installers and force-pushes it to this
repository's `gh-pages` branch. Each push is a single orphan commit, so the repository
stays the size of one build. The editor is in the branch's `nightly/` folder.

The old address, nightly.editor.scmjs.dev, is still served from this branch. Its pages send
you on to the same path under scmjs.dev/nightly and carry your settings over.

The nightly keeps its own settings, plugins and sign-in. It shares the game's graphics with
the released editor, so you add them once for both. The released editor is at
[scmjs.dev/editor](https://scmjs.dev/editor/), built from the newest `v*` tag.
[docs/installing.md](https://docs.scmjs.dev/installing/) has the details.
