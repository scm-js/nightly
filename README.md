# nightly

The nightly web build of [scmJS](https://github.com/scm-js/scm-js), served at
[nightly.editor.scmjs.dev](https://nightly.editor.scmjs.dev).

Nothing here is written by hand. The `nightly-site` job in scm-js/scm-js's `build.yml`
unpacks the web zip the nightly release carries — the same bundle, never a second build —
and force-pushes it to the `gh-pages` branch as a single orphan commit, so this repository
stays the size of one bundle rather than growing by that much every night. That branch is
what GitHub Pages serves; the `CNAME` in it is what holds the domain.

The released editor is at [editor.scmjs.dev](https://editor.scmjs.dev), built from the
newest `v*` tag. The two are separate origins, so the nightly asks for the game data again
and keeps its own settings, plugins and recent files.
