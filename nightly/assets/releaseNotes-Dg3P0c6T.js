import{t as e}from"./releaseNotes-D_l1BA9x.js";var t=Object.entries(Object.assign({"../../docs/releases/0.1.0.md":`The first release of scmJS — a StarCraft and Brood War map editor that runs in a browser
tab or as a desktop application. It opens real \`.scm\`, \`.scx\` and \`.chk\` files, draws them
with the game's own tileset and unit graphics, and writes archives the game will play.
Sections and archive members it does not model are copied through untouched.

**This is a beta.** No map made with it has shipped a campaign yet. Keep backups of maps
you care about, and check anything important in-game before relying on it.

## Getting it

- **Browser** — the hosted build needs nothing installed.
- **Windows** — \`scmJS-windows-x64-setup.exe\` to install, or \`scmJS-windows-x64.zip\` to
  unpack and run.
- **macOS** — \`scmJS-macos-arm64.dmg\` or \`scmJS-macos-x64.dmg\`. The app is **not signed**:
  the first launch needs right-click ▸ Open (or *Open Anyway* in System Settings ▸ Privacy
  & Security), and the in-app updater can see a new version but cannot install it, so it
  offers the download page instead.
- **Linux** — \`scmJS-linux-x86_64.AppImage\` or \`scmJS-linux-amd64.deb\`.
- **Container** — \`docker run --rm -p 8080:80 ghcr.io/scm-js/scm-js:0.1.0\`, nginx serving
  the same web bundle.

The installers register \`.scm\`, \`.scx\` and \`.chk\`, so a map opens from the file manager or
by dropping it on the app; dropping one on the window works in every build, browsers
included. The desktop builds check for a newer version at startup and offer it in a notice;
nothing downloads or installs without being asked, and Preferences turns the check off.

## Game data

The editor draws with graphics from StarCraft's own archives. Blizzard's data is not
redistributable and none of it ships here, so on first use **Help ▸ Game Data…** offers two
ways to get it: a one-click download of Blizzard's own free StarEdit package, which carries
the two archives, or your own \`StarDat.mpq\` and \`BrooDat.mpq\` from a classic (1.16) install.
Extraction runs locally and the result is kept for next time. Without it the editor still
runs, with flat colours for terrain and coloured markers for units.

## What is in it

Terrain with the isometric, rect, tile and blend brushes, fills, Replace Terrain and
symmetry, over elevation and buildability overlays; doodads, units, sprites, locations and
fog of war, each with its own palette, selection and placement rules. Maps open in tabs —
each with its own undo history, selection and view, cut, copy and paste between them, and a
preference for StarEdit's one map at a time.

Triggers in the classic editor (every condition and action, per-item disable), mission
briefings, CUWP slots and EPD help for EUD work, with \`.trg\` and SCMDraft text triggers
read and written by File ▸ Import / Export. The scenario tables are all here: players,
forces, colours including Remastered RGB, unit, upgrade and technology settings, strings,
sounds and switches. Beyond that, Check Map, Find, Statistics, PNG export from full art
down to a minimap, and Test Map, which writes the map into the game's Maps folder — one
you pick once, in the browser — where Custom Game lists it, and on the desktop starts the
game as well.

When something goes wrong, **View ▸ Debug Console** shows the log — maps opened and saved,
plugins started, where the game data came from, and every error the page threw — and copies
it with the version, build and plugin list above it.

Much of the rest is plugins, and seven are installed and on from the start: Repair (checks
every map as it opens and unprotects it), Paint, Walkability, Terrain from Image,
TrigScript (triggers written as TypeScript), Stamp Library, and a search of scmscx.com.
Two more are installed but start off — TrigEdit, the Text Trigger Editor in SCMDraft's
syntax, and scmjs.dev, which is an account to keep maps on and the AI that comes with it.
Every one of them is compiled into the build rather than fetched, so the desktop app and the
container image work on a network that cannot reach GitHub. Plugins ▸ Browse Plugins… lists
the rest — Melee Wizard, Section Explorer and the Hello World example — and Manage Plugins…
takes a link to anyone's. There is no sandbox: a plugin runs with the editor's own access,
so add only ones you trust.

## Known limits

- Firefox and Safari hand a file's contents to a page but no way back to it, so there every
  save is a download. Chrome, Edge and the desktop app write in place.
- macOS is unsigned, as above.
- Remastered installations do not carry \`StarDat.mpq\` and \`BrooDat.mpq\`; the download in
  Help ▸ Game Data… is the way in without a 1.16 install.
`,"../../docs/releases/0.10.0.md":"This release is the command line's third, and the one that makes `scmjs` a tool for\nteams and for bot authors. A map's triggers can be tested in the game from a tests file,\ntwo versions of a map can be merged, git included, bots can play a ladder against each\nother on one computer, and a melee map can be made from a seed. The command line guide\nwas rewritten by task and has pictures.\n\n## Testing a map's triggers\n\n- `scmjs map test ridge.scx` runs the scenarios in `ridge.tests.json` in the game itself:\n  units placed, switches set and orders given at the frames you name, then what the\n  scenario expects at the end: a trigger fired, a switch set, a death count, units in a\n  location, a text shown, a victory. Every failed scenario leaves a replay beside the\n  map, so you watch what went wrong.\n- `--format github`, `junit` and `sarif` put the results where CI reads them. A test run\n  needs a copy of StarCraft, so the workflow `scmjs init` writes names the command in a\n  comment rather than a step.\n\n## Merging two versions of a map\n\n- `scmjs map merge base.scx ours.scx theirs.scx` merges two versions of a map part by\n  part: terrain tile by tile, units and doodads as sets, locations by slot, triggers as an\n  ordered list, settings field by field, strings following whatever refers to them.\n  What only one side changed is taken; what both changed differently is a conflict, listed\n  and settled with `--ours` or `--theirs`.\n- `scmjs init` now sets the command up as git's merge driver for `.scm`, `.scx` and\n  `.chk`, so `git merge` merges maps on its own and stops on a real conflict as it does\n  for code.\n\n## A ladder for bots\n\n- `scmjs bot ladder a.scmbot b.scmbot computer --maps *.scx` plays every pairing on every\n  map, both seats, as many games as you ask, and prints the standing: Elo, games, won,\n  lost, undecided, length and the time each bot takes a frame. Every game's replay is\n  saved.\n- Two bots play each other on one computer with no server: the runner keeps two copies of\n  the game in step, so the same seed gives the same game however long a bot thinks.\n\n## A map from a seed\n\n- `scmjs map generate ridge.scx --players 4 --tileset jungle --seed 7` lays out a\n  symmetric melee map: a high-ground main with one ramp for each player, a natural below\n  it, free bases, an open middle with obstacles, minerals and gas placed as the Melee\n  Wizard places them. It walks every start to every other before writing, and prints the\n  resources and distances per player. The same seed gives the same map. It needs a copy\n  of the game for the tileset.\n\n## Smaller additions\n\n- `scmjs map triggers edit` and `scmjs map strings edit` open the text in your editor\n  and import it when you close it. Nothing changed, nothing written; a parse error keeps\n  the file and tells you how to import it again.\n- `--qr` on `map share`, `replay share`, `map play` and `account` prints the link's QR\n  code under the link, for a phone across the table.\n- `scmjs map sounds ridge.scx` lists the sounds in a map, and `map sounds export` writes\n  them out as `.wav` and `.ogg` files you can play.\n\n## Documentation\n\n- The command line guide on docs.scmjs.dev is organised by what you are doing: getting\n  started, looking inside a map, making and changing one, maps in git, running a map in\n  the game, replays, sharing, bots, developers, and a command reference. Eleven pictures\n  show what the commands print. Old addresses forward.\n\n## Fixes\n\n- The repository's ignore rules now match a symlink at a game-data path as well as a\n  folder, after a merge brought such links into the tree. If you pulled `main` on\n  2026-11-07 and your `fixtures`, `node_modules`, `plugins` or `public` data folders turned\n  into dangling links, delete the links and run `npm ci`, `npm run extract` and\n  `npm run vendor:plugins`.\n","../../docs/releases/0.11.0.md":`This release turns a replay into evidence. The command line can play a recorded game
through a map's triggers and say which fired and when, make a test out of that game,
draw where the fighting happened across many replays, and export a replay as a video
with the game's own pictures. A map's history in git reads in the map's terms, and
TrigScript has a language server for VS Code, Neovim and the rest. In the editor,
Resize and Change Tileset can be undone, and a trigger edit on a shared map is no
longer lost to someone else's OK.

## Replays as evidence

- \`scmjs map trace --replay report.rep\` plays the replay's game with the trigger trace
  on: the players' own commands, to the end of the game, and a report of which triggers
  fired, how often, and first and last on the game's clock. \`--order\` lists every firing
  in turn. Name a map as well to play the replay against a fixed version of it; the
  command says how the map differs and where the game parted from the replay if it did.
  \`scmjs map cost --replay\` weighs the triggers of that game the same way.
- \`scmjs map test record ridge.scx report.rep\` turns a replay into a test scenario: the
  replay drives the game, and everything the game ended with is written as
  expectations you can trim. \`scmjs map test -u\` rewrites the expectations of such
  scenarios that no longer hold after a change you meant to make.
- \`scmjs map heatmap ridge.scx replays/\` plays every replay on that map and draws where
  units died as heat over the map's picture, or where they were killed, where buildings
  went up, or where the armies walked. Replays played on another map are left out and
  listed. A replay is played once and kept, so the next run with more replays is quick.
- \`scmjs replay export game.rep --from 14:00 --to 14:30\` makes a video of a replay with
  the game's own pictures, drawn by the play page's viewer in a browser already on your
  computer. The camera follows a player's army and their biggest fight, or holds on a
  place, or shows the whole map. WebM and GIF need nothing more; MP4 needs ffmpeg.

## Maps in git

- \`scmjs map log ridge.scx\` lists the commits that changed a map and says what each one
  changed in the map's terms: "3 triggers added, 1 changed", "resized 64 × 64 → 96 × 96",
  "2 units moved, 1 removed".
- \`scmjs map blame ridge.scx\` is git blame for a map: each trigger, location, string,
  unit group or setting with the commit, author and date that last changed it.

## TrigScript in your text editor

- \`scmjs lsp\` is a language server for TrigScript. VS Code, Neovim, Helix or any editor
  with a language client gets the errors \`map build\` would stop on as you type,
  completions of the map's own locations, units and switches, hovers, go to definition
  and an outline. Unpack the map with \`scmjs map unpack\`, edit the files in its
  \`trigscript\` folder, and pack it back. The command line guide has the setup for each
  editor.
- The TrigScript plugin is at 4.2.0, which carries the language service the server uses.

## In the editor

- Resize, Crop Map and Change Tileset are one undo step each. Ctrl+Z puts back the old
  size or tileset with everything the change removed. On a shared map they still clear
  everyone's undo history, since the change replaced the map for everyone, and the
  dialog says so.
- On a shared map, when someone else's OK replaces your triggers, briefing or settings
  without having seen your version, a notice keeps yours and offers **Put mine back**.
- The menu item is **Test in Browser**, as the guide now says.

## Documentation

- The guide and the docs home page open with three ways in: a first melee map, a first
  scripted scenario, and an existing SCMDraft 2 project, which leads to a new Coming from
  SCMDraft 2 section.
- A wording pass over every guide: stacked sentences split, asides turned into sentences,
  and vague references spelled out.

## For contributors

- \`npm run verify\` and CI's summary name each test suite that was skipped, with a count,
  so a green run no longer hides the suites that need game data.

## For plugin authors

- \`api.document.resize()\` and \`api.document.changeTileset()\` are one undo step each now, as the
  dialogs are, instead of dropping both history stacks. On a shared map the history is
  still dropped.
- A dialog write on a shared map carries a \`from\` fingerprint of the tables it started
  from. A relay that validates the shape of writes has to allow the extra field.
`,"../../docs/releases/0.12.1.md":`The command line now installs without Node, keeps a map in git as a folder of text, and
answers two more questions about a map: which of its triggers never fire in real games,
and whether a melee map is fair to every start location. Old maps can run under a check
baseline so that only new problems fail a build, and a map can be made smaller without
changing what the game plays.

## Without Node

- \`scmjs\` is now also one program to download, for Windows, macOS (Apple silicon and
  Intel) and Linux, on the release page beside the installers, with a \`SHA256SUMS\` file to
  check a download against. Unpack it, put it on your PATH, and the whole command line is
  there with nothing else installed. The programs are not code-signed yet, so the first run
  may meet SmartScreen on Windows or Gatekeeper on macOS; the guide's Without Node section
  says what to click.
- Scoop, winget and Homebrew recipes follow this release, with the commands the guide
  lists. \`scmjs about\` tells you how to update for the way you installed.
- \`scmjs map build\` still finds TypeScript in your project or a global install, as before;
  it is not inside the program.

## Maps in git

- \`scmjs map unpack --text ridge.scx\` writes the map as a folder of text: the header,
  players and forces in \`map.json\`, the terrain as a grid, the units, locations, sprites
  and doodads as tables, the strings, the triggers and briefing in the trigger window's
  text form, and the unit, weapon, upgrade and tech settings. \`scmjs map pack\` puts the
  map back together byte for byte. A moved unit is a one-line change in \`git diff\`, two
  people's edits to different triggers merge as lines do, and a review reads what changed
  instead of a binary file. A map built from TrigScript unpacks to its built scenario and
  its script; pack it, then \`scmjs map build\`.
- \`scmjs map check --baseline\` accepts the problems a map has today and fails only on new
  ones, so an old map with a hundred warnings can run \`--strict\` in CI. \`--write-baseline\`
  writes the file, and refreshes it: problems that went away are dropped and reported as
  fixed. The GitHub, JUnit and SARIF outputs show only the new findings.

## Which triggers never fire

- \`scmjs map coverage ridge.scx replays/\` plays every Use Map Settings replay of the map
  through its triggers and adds the games up: for each trigger, the games it fired in, how
  often, and when first; then the triggers no game ever fired, each with the condition that
  said no last. \`--tests\` counts the map's own test scenarios as games, \`--strict\` fails
  the run on a trigger that never fired, and \`--format github|junit|sarif\` puts the result
  where CI shows it. A replay that parted from the map is counted up to the parting and
  said so.

## Is the map fair to every start

- \`scmjs map balance "(4)Ridge.scx" --bots mybot.scmbot\` plays rounds on a melee map
  with your BWAPI bot, against the game's computer or a second bot, reads back which start
  each side was dealt, and reports per start location: games, wins, the win rate beside
  what the sides' own records predict, average length, first contact, the walk to the
  other starts, and the main's minerals and gas. A last line gives the verdict: balanced
  within a margin, a start that stands out and the number that sets it apart, or too few
  games to tell. It takes minutes; \`--games\` and \`--parallel\` set how many.

## Smaller maps

- \`scmjs map optimize ridge.scx\` makes a map smaller without changing what the game
  plays: unused strings, sounds nothing plays, archive files nothing names, and every file
  compressed again. It prints a table of what each step saved and what was kept and why.
  \`--dry-run\` shows the result without writing. \`--strip-editor\` also drops the sections
  only editors read, with a warning that the map becomes harder to edit afterwards.
  TrigScript and Magenta sources, the game's own marks and the strings an EUD map reads
  are always kept.

## AI tools

- \`scmjs mcp\` gains \`map_coverage\`, \`map_balance\` and \`map_optimize\`, and \`map_check\`
  takes a baseline, so an AI tool on your computer can run the same checks.

## In the editor

- **Help ▸ Command Line…** opens the command line's install page.

## For developers

- \`@scm-js/core\` exports more of the editor's map code: \`encodeSection\`, the default unit,
  weapon, upgrade and tech settings, \`locationSlots\`, \`weaponName\`, \`memberInfo\`,
  \`readWavs\`, \`applySounds\` and \`triggerReferences\`. \`docs/core.md\` lists them.
`,"../../docs/releases/0.13.0.md":`This release is the mods release: a mod of StarCraft, Cosmonarchy BW among them, opens in
the editor, plays on the play page with its own code, has bots written for it, and its
replays play back, analyse and open from the editor like any other. The command line
grew a \`scmjs mod\` family and speaks Korean; a GitHub Action checks maps on every push.

## Mods on the play page

- The play page at scmjs.dev/play takes a mod as its makers ship it: **Game Menu ▸ Mods ▸
  Add a Mod…**, then drop the folder, an \`.mpq\`, the mod's own \`.exe\` or a \`.zip\`. The
  page keeps the files that differ from your game in your browser, runs the mod's plugins
  and FireGraft project inside the game, and plays its maps with their own settings. A
  Remastered installation works as well as a 1.16.1 one.
- A mod the page kept is found again by its hash on later visits, and the page switches
  to it, or to the live engine it needs, by itself when a map or a replay asks for it.
- A replay saved on the page records which mod it was played with. Opening it later, on
  the page or from the editor, plays it with that mod, or says which mod it needs and
  where its makers publish it.
- Games between people carry the mod: a joiner without it is told which mod to add and
  where to get it, and a replay saved by either player is the same file.

## Bots for a mod

- The catalogue's bots say what they were made for, and a bot written for a mod can be
  seated in that mod's game, alone or in a game between people. The first such bot, a
  small one for Cosmonarchy BW, is in the catalogue.
- \`scmjs mod header\` writes a C++ header and a JSON of a mod's units, weapons, upgrades
  and technologies by name, so a bot for the mod is written against its real names;
  \`scmjs bot run\` and \`scmjs bot ladder\` take \`--mod\` and play the mod with its plugins.

## Replays of a mod in the editor

- Aftermath opens a replay of a mod, names the mod, and plays it through with the mod
  when your browser keeps it: the Game, Analysis and Cast tabs fill as for any replay,
  Play From Here opens the play page with the mod, and the Replay view plays it there.
- The Fights tab does not yet replay a fight of a mod whose plugins run, and such a
  replay seeks backward by starting again from its first frame; both say so where they
  apply. Analysing a mod's replay runs at the game's own pace, so a long game takes a
  while.

## Mods in the editor

- **Help ▸ Game Data… ▸ Add a data set…** takes a mod's folder, archives or loader, and
  the editor draws and thinks from the mod's tables: its units by their own names in the
  palette, under the race the mod gives them; upgrade and technology settings with the
  mod's names; the trigger editor's unit picker listing every unit the mod has.
- Trigger text (TrigEdit, Import and Export) keeps every unit a mod's map names. Two
  types that share a name are written as \`Unit #id\`, so a round trip is exact.
- A map made with a data set remembers it, and now carries it with every export, share
  and Test Map build. Test Map says when the chosen target plays the game's own data
  instead of the mod's.
- Repair no longer takes a mod's units for units the game does not have, so Apply leaves
  them alone. Melee Wizard lays bases out with the mod's own footprint sizes. Section
  Explorer reads an extended tileset's tile groups. Walkability says when its game walks
  were worked out with the game's own units rather than the mod's.
- Magenta keeps a mod's unit through a build row into the triggers, and its EUD and
  build rows say that they read the game's own memory layout, which a mod with plugins
  may move.
- TrigScript names a mod's units, weapons, upgrades and technologies from the data set,
  under the same identifier rule the bot header uses, and accepts unit types past the
  game's. Its memory-level features and tests in the game say they are for the game's
  own data.

## Command line

- \`scmjs mod info|unpack|pack|check|diff|new|build\` read a mod from what it ships as, turn
  it into a folder of text to edit and keep in git, check it, compare two versions and
  pack it again. \`scmjs mod play\` hands a mod to the play page in your browser, with a
  map and a bot made for the mod if you like; \`scmjs mod test\` runs a map's tests with the
  mod laid over the game.
- \`scmjs replay info\` names the mod a replay was played with, and \`scmjs replay\` commands
  take \`--mod\` for a mod's names. Replays recorded by a mod with commands of its own are
  read without tripping on them.
- \`scmjs map analyze\` describes a map's layout: starts, naturals, ground and air distances
  between them, chokes and terrain shares, with a picture.
- A GitHub Action, \`scm-js/scm-js/action@v0.13.0\`, checks every map on each push, puts the
  findings and the changed maps' pictures on the pull request, and \`scmjs init\` writes a
  workflow that uses it. \`scmjs map test --clips\` records a GIF of a failed scenario.
- The command line speaks Korean: \`--lang ko\`, \`SCMJS_LANG\`, or your locale. Map text and
  the dump and trigger text formats are never translated.
- The MCP server gains \`mod_header\` and \`mod_play\`, and \`map_trace\` and \`map_cost\` take a
  mod.

## For plugin authors

- A map's data set now travels with every export and build, and the engine plugin's
  \`playReplay\`, \`view\` and \`analyse\` take the data set a replay was played with. Read
  names, counts and widths from \`api.data\` and \`api.palette\` rather than the game's
  constants: a mod's tables are wider and named differently, and the editor and its
  plugins now follow them.
`,"../../docs/releases/0.13.1.md":`A replay recorded by a mod's own release now opens in the editor with the mod, the editor
hands the mod's files to the play page itself, and the terrain a mod brings is explained
instead of drawn black. TrigScript moves to 4.4.0, with sampled instruments and played
music.

## Replays of a mod

- A replay recorded by a mod's own release does not say which mod it was played with.
  With the mod open in the editor, Aftermath asks whether to watch the replay with it.
  With none open, it says what in the replay points to a mod and offers **Pick the Mod's
  Folder…**. Before, such a replay stayed on "Loading…".
- The play page no longer has to keep the mod beforehand. The editor hands it the files
  of the mod that is open, or of the folder you picked, and the page keeps them: once for
  a browser, a minute or two for a large mod. The Replay view counts the files as they
  are kept and shows the game as soon as they are, while the analysis goes on beside it.
- A replay the engine cannot play says why in the Replay view.

## Mods in the editor

- A map with terrain the game data in use has not got, a mod's tileset or the tiles
  Remastered added, draws those tiles hatched on the map, the minimap and an exported
  image, where it drew black or other tiles. A notice counts them, says whose they are,
  and offers a way to them: **Switch to** an installed data set that has the terrain,
  **Choose the mod's folder…**, or **Game Data…**. Check Map tells a mod's tiles from
  Remastered's.
- With **View ▸ Remastered Graphics** on and a mod that brings a tileset of its own, the
  terrain is drawn with the classic pictures, since Remastered's are of the game's tiles.
  The editor now says so; it used to suggest installing Remastered.
- A mod's folder dropped on the editor is read faster, with every file in it, and the
  status bar counts the files from the moment of the drop, where the editor said nothing
  until the folder was read. The Mod Editor plugin (**Plugins ▸ Browse Plugins…**) opens
  a mod this way.
- A mod's hash leaves out the files an operating system puts in a folder (\`desktop.ini\`,
  \`Thumbs.db\`, \`.DS_Store\`), so one folder has one hash however it was read. A mod with
  such files has a new hash: Cosmonarchy BW's is now \`20e1c6d89ae2af75\`. \`scmjs mod info\`
  prints the older hash beside it, and a replay recorded under the older one still finds
  its mod.

## TrigScript 4.4.0

- A recording can be an instrument: \`music.sampled\` plays notes from a \`.samples\` file,
  and \`samples()\` builds one from clips.
- \`music.perform\` plays parts written like a score, with a tempo that moves, dynamics,
  the pedal and a human touch; \`excerpt\` takes a passage out of one.
- A clip tells its loudness (\`Clip.lufs\`, \`loudness()\`), and \`duck()\` lowers one sound
  under another.
- The guide's Showcase has a third map, Für Elise, with its script and a video.

## Documentation

- The mods guide covers the Mod Editor plugin.
- Command blocks on the documentation site have a **Copy** button that copies the
  command without its output or comments.

## For plugin authors

- A plugin with a mod open registers it with the engine plugin's \`provideMod(hash, mod)\`,
  and everything that plays with that hash (\`view\`, \`playReplay\`, \`analyse\`, \`fights\`,
  Test in Browser) finds its files there. The view's \`onKeeping\` says how far the play
  page is with keeping them.
- A file type's \`acceptsFolder\` is asked with a dropped folder's paths before any file
  is read, and \`openFolder\` gets every file. \`ui.pickFiles({ directory: true })\` uses the
  browser's folder picker, which leaves out \`desktop.ini\`, shortcuts and, on Windows,
  file types such as \`.ini\` and \`.dll\`.
- \`@scm-js/core\` exports \`SYSTEM_FILES\`, \`isSystemFile\`, \`hashLinesAsWere\` and
  \`isSystemLine\`, and \`modHash\` answers with \`older\` when such files were among a mod's.
`,"../../docs/releases/0.13.2.md":`A replay of a mod with plugins can now be gone back in without starting over, its fights
are played again, and the analysis no longer hangs after a mod has been played. The play
page's part of this is live already; this release brings the editor's part.

## Replays of a mod

- Going back in a replay of a mod whose plugins run (Cosmonarchy BW, say) returns to a
  moment kept on the way and plays on from there, where it used to start the replay again
  from its first frame. Going ahead to a part not yet played still plays forward at about
  the game's own pace.
- Aftermath's Fights tab plays such a replay's fights again. Before, it listed them and
  said why it could not.
- Opening any replay could stay on "Analysing the game…" without end once a mod with
  plugins had been chosen on the play page, which Play From Here on a mod's replay does.
  The analysis now runs.
- A drag along Aftermath's timeline moves the game once, when the drag ends, for a replay
  that plays this slowly. The timeline stays at the moment you chose and says how far the
  game has got; it used to jump to the start, and the last movement of a drag could be
  lost.
- Play From Here starts from the moment chosen. Pressed while the game was on its way
  there, it could start from the first frame. The play page now says when it is running
  ahead to a moment, and how far it is.
- With a mod open in the editor, Aftermath asks whether to watch a replay that names no
  mod with it. For a replay that shows no sign of a mod, **Watch Without** is now the
  highlighted answer: a game of StarCraft itself watched with a mod's plugins takes
  minutes to analyse and is another game.
- The analysis refused a replay with "another version of it" when the browser kept an
  older copy of the mod under the same name, although the editor had the right one open.
  It now takes the files the editor hands it.
- A mod handed over by the editor is kept under the hash the editor shows, the same as
  when its folder is dropped on the play page, and a mod the browser already keeps is not
  copied again.

## Mods

- A folder that holds a mod beside a whole copy of the game, such as Cosmonarchy's
  \`Release\` next to a \`Starcraft\` folder, opens as the mod alone. \`scmjs mod\`, the Mod
  Editor plugin and the play page leave the game's own archives out and say which ones;
  before, the game's files became part of the mod and a replay watched with it stopped
  at an error about \`iscript.bin\`. A copy of the game with no mod in it is refused.

## For plugin authors

- The engine plugin (scm-sim 0.19.2) sends a request again when the engine's page loads
  again before answering, and fails it in a sentence if the page keeps loading again.
- A view's frame reports carry \`target\`, the frame a seek is going to, and a loaded
  replay says \`slow: true\` when a mod's plugins run and a seek is costly: send a drag's
  seeks sparingly. Such a replay now says \`rewinds: true\`.
- \`@scm-js/core\` exports \`GAME_ARCHIVES\` and \`gameCopyFiles\`, and a mod source names the
  archives left out as \`gameCopy\`.
`,"../../docs/releases/0.13.3.md":`A mod can add races of its own, and the tools now keep such a race, name it, and let you
play it, alone or against someone. Cosmonarchy BW's fourth race, Askosi, is the case this
was built on. The play page's part is live already; this release brings the editor's.

## Races a mod adds

- A player whose race is one a mod adds is shown as *Race* and its number, \`Race 69\`,
  until it is named. Before, Aftermath's player list called such a player Random and its
  cast told the commentators Terran.
- Name it once. **Name this race…** beside the player in Aftermath, or the **Races** tab
  of the Mod Editor, asks for a name, the letter of the race's own files, and the game's
  race it plays as. The names and letters the mod's files hint at are offered as buttons,
  and nothing is filled in until you pick. The name is kept with the mod, through a new
  release of it, and is listed under Preferences ▸ Storage.
- **Scenario ▸ Player Settings** and **Statistics** show the name, and Player Settings
  offers the mod's races after the game's. A race the map holds that nothing names is kept
  as it is.
- A mod folder's \`mod.json\` takes the names as \`races\`, and a map and a replay made with
  the mod carry them, so they show for someone who never named them. Naming a race does
  not change the mod's hash.
- On the play page, choose the race on the setup screen, or in a lobby for a game between
  people. The game starts with the race's own units, and the console is the race's own
  where the mod has one.

## Playing and watching a mod

- **Test Map** and the Mod Editor's **Start Test Game** start a mod that has plugins with
  them. Before, the game stopped as it started, with a line about its startup data.
  \`scmjs map play\` does the same.
- Supply reads right under a mod that keeps it its own way. Under Cosmonarchy, Zerg and
  Protoss players read 0/0 before.
- Aftermath counts a mod's own units and buildings. Under a mod it took units 106 to 201
  for buildings and left out everything past 202, so a mod's buildings, losses and bases
  were missing or wrong. Workers, town halls and what counts as army now come from the
  mod's own units table. Tech tiers are shown for the unmodified game only, and the tab
  says so.

## Terrain a mod adds

- Flat ground that only a mod's tileset has can be painted with the Rect brush and its
  fills, and chosen in **Replace Terrain**. The Tile tab names it instead of listing it as
  Unlisted. Ground that is the game's own under another height reads *Mud (high ground)*;
  other ground the open map uses reads *Group* and its number, and the Tile tab's menu
  adds any pair you pick.

## Command line

- \`scmjs replay info\` names a mod's race from the replay itself, or from the \`mod.json\` of
  the mod \`--mod\` names, and \`--json\` gains \`raceId\`. \`scmjs mod info\` lists a mod's
  races, \`mod check\` mentions it when a mod's files suggest races and none is named, and
  \`mod play --race\` takes one by name or number.

## For plugin authors

- \`api.gameData.races()\` lists the races the data set in use declares,
  \`setRaces(races, id?)\` declares them, and \`raceCandidates()\` gives the names and letters
  the set's files hint at. \`GameDataProfile\` has \`races\`, \`api.names.race\` and \`races\`
  name them, and Test Map hands them on in \`dataSet.races\`. In an older editor call them
  as \`setRaces?.(…)\`.
- \`@scm-js/core\` exports \`normalizeRaces\`, \`raceLabel\`, \`raceCandidates\` and
  \`racePlaysAs\`.
- The bundled plugins move to Aftermath 0.24.0 and scm-sim 0.20.1. The Mod Editor is
  0.4.0.
`,"../../docs/releases/0.2.0.md":`## Map text encoding

- The string table was read and written as latin1, so a Korean map opened as mojibake and
  Korean typed into the editor was saved as garbage. Fixed.
- The encoding is guessed from the table's bytes on open — UTF-8 first, then the legacy code
  pages scored by script — and written back on save.
- **Scenario ▸ Map Revision** shows the guess and corrects it: UTF-8, Korean (EUC-KR / CP949),
  Japanese (Shift_JIS), Chinese (GBK, Big5), Cyrillic, Western.
- A character the encoding cannot hold is no longer a silent \`?\`: Map Revision counts them,
  Check Map lists them, saving warns first.
- The game's own \`.tbl\` files are read the same way, so a non-English install's unit names
  come through as text.

## Korean interface

- Every menu, panel, dialog, status message and Check Map finding is translated; Korean is
  complete.
- **Preferences ▸ Display ▸ Language**; the default follows the browser, or the system
  language on the desktop.
- The Korean was written with AI, not by a native speaker. Corrections welcome.
- A map's own text is never translated — names, briefings and trigger strings stay as the
  map has them.
- Plugins can translate themselves through \`api.i18n\`, with a \`language\` event when the
  setting changes. The plugin API version is unchanged; nothing needs updating.

## Elsewhere

- **Help ▸ Copy Bug Report** allows for a copy of a log to attach to a bug report.
- Plugin authors get listed with an issue form on the registry, checked as soon as it is
  posted, instead of a pull request against a JSON file.
- LegacyWeapon is credited in Help ▸ About.`,"../../docs/releases/0.3.0.md":`## Enhancements
* The map will now scroll when placing terrain or moving to the edges. SCMDraft2 style keybinds have also been added.
`,"../../docs/releases/0.3.1.md":`* Enhance plugin api with additional text methods to detect color/linebreak/etc characters
* Update default for repair plugin to latest
`,"../../docs/releases/0.4.0.md":`## Preferences

- **Edit ▸ Preferences** (Ctrl+,) has pages down the left instead of tabs: General, Editing,
  View, Testing, Plugins, Storage and Hotkeys. Nothing changes until you press OK or Apply,
  and **Reset to defaults** puts every page back.
- New settings:
  - **General**: reopen the last map at startup, how many recent files to keep, the map
    revision a new map starts with, and what the Save dialog starts from.
  - **Editing**: the owner, brush size and location size the palettes start on, and how
    many undo steps each map keeps.
  - **View**: the mouse wheel can scroll or zoom, and zooming can keep the tile under the
    pointer in place. Ctrl+wheel always zooms the map and no longer zooms the browser page.
  - **Storage**: **Export** saves all your settings, plugin settings included, to one
    file, and **Import** loads them in another browser or on another computer.
- **View ▸ Grid Settings** now opens the Editing page, and Test Map's folder is set on the
  Testing page.
- A plugin can have its own page under **Plugins**. The AI Options of the scmjs.dev plugin
  are there now.

## Saving and new maps

- The Save dialog is shorter. It asks for a file name, a format and what to keep:
  *Everything*, *Smallest that plays*, or *Custom*. Compression, encryption, the other
  files in the archive and the section list are folded underneath. The archive options
  start open when a map is not stored the usual way.
- The Save dialog only shows Check Map when it finds problems. The map saves either way.
- In New Scenario, *Place automatically* (start locations in a ring) is now off by default.

## TrigScript

The TrigScript plugin moves from 2.5 to 3.10. This is a big update.

- **\`program()\` now needs StarCraft: Remastered.** Programs are built into the map when
  you save, test or export it, so there is no separate build step and no second file.
  \`trigger()\` is unchanged and still works on every version of the game. If you used
  \`program()\` on a map meant for 1.16.1, that map now needs Remastered.
- Programs can now:
  - work with units on the map: loop over them, pick one, read hit points, energy and
    timers, and order, give, kill, remove, damage or heal them;
  - read and change the game's own tables, such as a unit type's cost, speed and name,
    a weapon's damage, or a player's upgrades;
  - read player input: key presses, mouse clicks, the cursor's position and chat
    messages (for example \`-spawn {n} {what:unit}\`);
  - use negative numbers, arrays, records, \`Map\` and \`Set\`, strings, classes, callbacks
    such as \`forEach\`/\`map\`/\`filter\`, and functions that call themselves;
  - show text with numbers and player names in it, and use \`random(n)\`.
- The workspace is laid out like VS Code: an Explorer with folders, tabs, a panel with
  Problems, Output and Simulate, a status bar, and a command list on F1. F5 plays the
  map; Ctrl+Shift+B applies the script.
- A script can have its own tests. They run in the simulator after every change and
  their results show in the margin.
- Hovering over a variable shows what it holds. A save whose build fails says that the
  map was saved without its programs.

The guide's TrigScript section covers all of this, with examples and a table comparing
TrigScript to TypeScript.

## New default plugin: eudplib

- The eudplib plugin builds TrigScript's programs. It installs with the editor and turns
  itself on when a plugin that needs it is on.
- In the browser, the first build downloads its runtime (about 15 MB) once. The desktop
  app and the container image include it, so they work offline.
- Plugins can now depend on other plugins. Installing one installs what it needs, and a
  plugin that something else uses is marked "Used by …" in Manage Plugins and cannot be
  turned off while it is needed.

## AI assistant (scmjs.dev plugin)

- Each map has its own conversation.
- AI Options can set a spending limit.
- Make Scenario places starting buildings on the map instead of creating them with
  triggers, puts yards and landing pads on open ground in the lanes layout, and has a
  capture-the-flag system.
- The assistant finds bases and building sites faster and needs fewer steps for most
  requests.
- Clearing terrain with shapes only clears what the shapes cover, instead of the whole
  map.

## Fixes

- Triggers: *Any unit*, *Men*, *Buildings* and *Factories* were saved one number too low.
  A trigger using *Any unit* matched no units, and Blizzard melee maps' defeat trigger was
  shown as *Factories*. They now use the game's values. A trigger made with one of these
  in an earlier version shows the class below the one you picked (*Any unit* shows as
  *None*); pick the right one again and save.
- Maps built by eudplib or euddraft now open. Before, the editor could show them as empty.
- Right-click menu items added by plugins now appear when they should, including on a
  newly opened map.
- Test Map: the hint and the Download button are no longer squeezed into a narrow column.

## Other changes

- **Help ▸ Report an Issue…** opens a new GitHub issue with the bug report already filled
  in, under three questions: what you did, what you expected, and what happened. The log
  in it is shortened to fit in a link; use **Help ▸ Copy Bug Report** for the full log.
- The hosted editor, the nightly and the documentation site now count visits with
  Cloudflare Web Analytics. It uses no cookies and collects nothing about your maps. The
  desktop app and copies you host yourself do not report anything.

## For plugin authors

The plugin API version is still 1, so existing plugins keep working. New in this release:
Preferences pages (\`api.ui.preferencesPage\`), manifest \`requires\`, build steps that run on
save (\`api.document.buildSteps\`), \`api.document.test\`, trigger helpers for EUD addresses,
fingerprints and counter usage, and \`flush\` dialogs and panels without a footer. Run
\`npm update @scm-js/plugin-api\` to get the types.
`,"../../docs/releases/0.5.0.md":`## Editing a map together

Several people can now edit one map at the same time, each in their own editor.

- **Account ▸ Share this Map…** copies the open map to scmjs.dev and gives you a link.
  Anyone who opens the link joins the map. Sharing needs a signed-in account; joining
  needs only the link.
- Every change anyone makes shows up for everyone: terrain, doodads, units, sprites,
  locations, fog, the settings dialogs, triggers, strings and sounds. You see the others'
  pointers with their names, a box around what each of them has on screen, and which
  dialog they are in. Undo takes back only your own changes.
- A shared map has a chat, from the button on the map's bottom-right row, and reconnects
  on its own after a dropped connection.
- **Keep it open** decides what happens when people leave. *Until everyone leaves*, the
  choice it starts on, stores nothing. *For a day*, *a week*, *a month* or *until I end it* saves the map to My Maps
  and keeps it at its link, so people can come back on another day. Each time everyone
  has left, the map is saved as a new revision naming who changed it.
- The person who shared the map can remove someone, replace the link with a new one, or
  end sharing. **Account ▸ Account…** lists every map you are sharing. In My Maps, a
  revision of a map kept open can be put back into it if someone spoiled it.
- Up to eight people can be in one map, and an account can share five maps at a time.

The guide's *Editing a map together* section covers all of this.

## Links to your maps

- **Account ▸ Copy Link to This Map…** saves the open map to your account and copies a
  link. Whoever opens it gets a copy of the map in their own editor, without signing in.
  The link opens the version you just saved, or, if you tick *Let the link follow my
  later saves*, whatever you save to that map next.
- Pasted into Discord, Slack, a forum or anywhere else that shows previews, a link to the
  web editor shows a card with the map's name, who shared it, its tileset, size, players
  and a picture of it. A removed link shows a card saying so.
- **Embed…** in My Maps gives you that card as a picture with the link around it, as
  BBCode, Markdown or HTML, for a forum post, a signature, a README or a website.
- My Maps lists each map's links, how many times each was opened, and **Remove** for each.
  A map can have ten links.
- My Maps now fills its dialog, and shows when it is waiting for the server.
- Links open at their own address (\`/map/…\` and \`/share/…\`) on the web editor. The link's
  dialog comes first, and the offer to install the game's graphics comes after it.

## The scmjs.dev plugin is on by default

The scmjs.dev plugin, which holds the account, maps on scmjs.dev and sharing, is now
installed and on from the start. It sends nothing to scmjs.dev until you use one of its
features. To hide the Account menu, turn the plugin off in Plugins ▸ Manage Plugins….

The AI features are off for now. The Account dialog says so, and Tools ▸ AI does not
appear.

## Plugin settings in Preferences

Plugin settings now live on each plugin's page under **Edit ▸ Preferences ▸ Plugins**,
instead of on menu items of their own:

- **scmscx.com**: the forwarder address, search as you type, and which minimaps to show.
  The Plugins ▸ scmscx.com Settings… item is gone; Settings… in the search dialog opens
  the page.
- **Repair**: *Check maps when they open*. It is still in the Repair dialog's footer too,
  but once it was off that dialog stopped appearing, so this is the place to turn it back
  on.
- **eudplib**: what is installed, the versions, and Install and Remove. The Plugins ▸
  eudplib… item is gone.
- **Stamp Library**: whether its panel floats over the map or sits in the right dock.
  Changing it no longer opens the panel when it was closed.

## Documentation

The guides at [docs.scmjs.dev](https://docs.scmjs.dev) have grown:

- **Installing**, a new first guide: the hosted editor, the desktop app, the container
  and the game's graphics.
- **Trigger reference**: a page for every condition and action, with what it does, its
  arguments, its text form, where it is stored in the map and an example.
- **CHK format reference**: a page for every section of a scenario file, with its byte
  layout, what the game does with a repeat, whether it is required, and its values. It
  also explains the isometric terrain record with diagrams, covers protected maps, and
  comes with a Kaitai Struct description of the format (\`docs/chk.ksy\`).
- The user guide and the plugin guide are reworked, and *Map files* is now *Opening and
  saving maps*.
- An example in the plugin documentation marked **Try it** opens in the API Playground
  plugin, where it runs against the open map when you press Run.

## Fixes

- A map joined from a link, or a replay's map opened by the Aftermath plugin, no longer
  leaves an empty *Untitled Scenario* tab beside it. It takes the place of the empty map
  the editor starts with.
- The desktop app and the container image now list the licences of the eudplib runtime
  they carry (Pyodide's among them) in their third-party notices.

## Plugins to try

New in Plugins ▸ Browse Plugins… since 0.4.0, and not installed by default:

- **Aftermath** plays a StarCraft replay back over the map it was played on, with heat
  maps, build orders and APM.
- **Timelapse** records the map as you build it and exports the recording as a GIF or a
  video. It needs this version of the editor.
- **API Playground** runs plugin API code against the open map, with completion and the
  reference on hover, without writing a plugin. It needs this version of the editor.

## For plugin authors

The plugin API version is still 1, so existing plugins keep working. New in this release:
\`api.sync\` (editing one map from several editors, with \`session.snapshot()\`), the
\`"commit"\` event, \`tileset.load(id)\`, \`ui.mapButton\`, \`ui.openDialogs()\` with the
\`"dialogs"\` event, \`document.sections.chkOf\`, and \`api.scope()\`, a child API whose
registrations are all taken back with one \`dispose()\`. Run \`npm update @scm-js/plugin-api\`
to get the types (1.36.0).
`,"../../docs/releases/0.6.0.md":`## Not losing work

- **Recovery copies.** While a map has unsaved changes, the editor keeps a copy of it
  every few minutes and whenever the editor goes to the background. The copy is dropped
  when you save or close the map. If the editor closes with work unsaved (a crash, a
  closed tab, a power cut), the next start offers the maps back, and
  **File ▸ Recover Maps…** lists them at any time. **Edit ▸ Preferences ▸ General ▸
  Recovery** turns this off or changes how often a copy is made (every 2 minutes to start with).
- **The file a save replaces is kept.** In the desktop app, saving over a map first copies
  the old file to \`<name>.bak\` beside it. A browser can't put a file beside another, so it
  keeps the last three versions of each file name instead, listed under
  **File ▸ Previous Versions…**. This is on by default; **Preferences ▸ General ▸ Saving**
  turns it off.
- **Preferences ▸ Storage** lists the recovery copies and previous versions the editor is
  keeping, and discards them.

## Hotkeys and the status bar

- **Preferences ▸ Hotkeys** now lets you change the keys. A command can have several keys,
  or none. A key that clashes with another command or with a plugin is marked. Delete, Esc,
  the arrow keys, Tab, Enter, Space and F11 can't be reassigned. The menus, the toolbar and
  the F1 list show the keys you chose.
- Shortcuts now work with a Korean keyboard layout (Ctrl+S with Hangul input on), and with
  shifted number keys such as Ctrl+Shift+0. On a Mac, Cmd counts as Ctrl.
- **Preferences ▸ View ▸ Status bar** chooses which cells the status bar shows.

## Plugins in Korean

With the editor set to Korean, the default plugins now show their menus, dialogs,
overlays and trigger labels in Korean too: eudplib, Paint, Repair, scmjs.dev,
scmscx.com, Stamp Library, Terrain from Image, TrigEdit, TrigScript and Walkability.
Korean particles after a number or an English name now read correctly (Player 3이,
Marine을(를)).

## Links to scmscx.com maps

A link like \`https://editor.scmjs.dev/scmscx/35b32Dsq\`, using the id from the map's
address on scmscx.com, opens the editor with Find on scmscx.com already on that map.

## Desktop app

- Saving now writes the \`.bak\` described above. Before this, the desktop app never
  managed to, and fell back to Previous Versions without saying so. File ▸ Open and
  Save As now use the app's own file dialogs. If a \`.bak\` can't be written, the save
  still goes through and a notice says why.
- **Updates on the nightly line work again.** A nightly build with *Include nightly builds* on
  never found a newer nightly, and a nightly build with it off was offered 0.5.0, which is
  older. Now the nightly line finds the latest nightly, and only a newer version is ever
  offered. **A nightly build installed before this fix won't find the update by
  itself.** Install this release, or the latest nightly, once from the release page.

## Plugins to try

New in Plugins ▸ Browse Plugins…, and not installed by default:

- **Trigger Map** (Triggers ▸ Trigger Map…) shows a map's triggers as a graph of what
  each one waits for and changes: switches, death counters, locations and so on. It also
  lists what looks wrong, such as a switch nothing sets, a counter nothing reads or a
  trigger that can never fire. It needs this version of the editor.

## For plugin authors

The plugin API version is still 1, so existing plugins keep working. New in this release:

- \`api.gameData.read(path)\` returns one file of the extracted game data as bytes. The
  game data now also includes \`arr/orders.dat\`.
- \`api.triggers.references(list?)\` returns what each trigger reads, writes and uses, with
  player groups resolved to slots. \`api.triggers.resolvePlayers(group, owners?)\` does
  just the player-group part.
- \`view.goTo({ kind: "trigger", index, briefing? })\` opens the Trigger Editor or Mission
  Briefing on a row. Their plugin slots now receive \`selected\`, which can be set, and
  \`modified\`, which is read only.
- Menu labels, context-menu labels, overlay names and trigger claim labels are given in
  English and translated through your plugin's own catalogue (the one registered with
  \`api.i18n\`). Other plugins' catalogues are never used for them.

Run \`npm update @scm-js/plugin-api\` to get the types (1.40.0).
`,"../../docs/releases/0.6.1.md":`## Saving and opening

- **Large zlib maps save and open quickly again.** A map compressed with zlib in small
  (4 KB) sectors was slow out of all proportion to its size: a 7 MB scenario took over
  half a minute to save and about six seconds to open. That is a fraction of a second
  now, and the file written is byte for byte the same. Two kinds of map were affected:
  one saved with zlib whose archive holds files the editor carries across as they are,
  and a zlib map written by another editor.
- **The Save dialog no longer builds the same file twice.** It builds the file to show
  its size whenever an option changes. Going back to a choice you already tried, such as
  switching between **Everything** and **Smallest that plays**, now shows the size at once.
- **A map kept in 512-byte sectors is saved correctly.** The archive said its sectors
  were 1024 bytes, so its compressed files could not be read back. This only arose when
  re-saving an archive that already used 512-byte sectors and held files the editor
  carries across as they are, which is rare.

## Drawing

- **Moving a unit, a sprite or a location no longer redraws the terrain.** Every edit
  used to redraw all the ground in view and recolour the minimap, whatever it changed.
  Now only an edit to the terrain, doodads or fog does.
- **Scrolling no longer recomputes the minimap.** It only moves the view rectangle.

## Plugins

- **Repair 1.5.1.** *Restore original* still works after you switch to another open map
  and back.

## For plugin authors

Nothing in the API changed. The \`"terrain"\` event still fires on every committed edit,
undo and redo, as before.
`,"../../docs/releases/0.6.2.md":`## Triggers and dialogs

- The Trigger Editor and Mission Briefing no longer leave stray strings in the map.
  Typing a message, sound path or comment used to add a string for every keystroke,
  and they stayed even after Cancel. If you edited a map with an earlier version,
  **Scenario ▸ String Editor ▸ Delete unused** clears them.
- Closing one of the larger editors with unapplied changes (Escape, the close button,
  a click outside) now asks before discarding them. Cancel still closes at once.
- Typing in the Trigger Editor and String Editor no longer lags on maps with thousands
  of triggers or strings.

## Drawing

- Scrolling is smoother, most noticeably zoomed out on a large map.
- Maps with many animated units and sprites use less CPU.
- Shadows no longer trail one frame behind their units.

## For plugin authors

- \`document.scenario()\` and a transaction's \`scenario\` are now typed \`ReadonlyScenario\`.
  Nothing changes at run time, but a plugin that wrote to the map directly, or passes
  what it reads to a helper typed \`Scenario\`, \`TriggerRecord[]\` or \`Uint16Array\`, will
  fail its type-check. Use \`ReadonlyScenario\`, a \`readonly\` list or \`ArrayLike<number>\`.
- While the Trigger Editor or Mission Briefing is open, a trigger claim's \`locate\` and
  \`open\` may see a negative \`text\` or \`wav\` number: a string typed but not yet applied.
- The [plugin guide](https://docs.scmjs.dev/plugins/) has a step-by-step first plugin, a
  page of recipes, sections on debugging and testing, pictures, and an example for every
  part of the API. Nearly all of them open in the API Playground from a **Try it** link.
- Most calls now carry an example in the typings, so it shows when you hover over a name
  in your editor or the playground. Update with \`npm update @scm-js/plugin-api\`.
`,"../../docs/releases/0.7.0.md":`## StarCraft: Remastered

- The editor can now take its graphics from a StarCraft: Remastered installation. In
  **Help ▸ Game Data…**, **Choose the StarCraft folder…** accepts the folder Remastered
  is installed in, as well as a 1.16 one. If you already have graphics installed,
  **Add StarCraft: Remastered…** under *Data sets* installs it beside them.
- The browser will ask whether to upload the folder's files. Nothing is uploaded: the
  editor reads what it needs where the files are. It takes about half a minute and keeps
  about 375 MB.
- **View ▸ Remastered Graphics** draws the terrain, units and sprites with Remastered's
  own pictures, at twice the detail of the classic ones. It is turned on for you when you
  install from a Remastered folder; untick it for the classic look. The switch changes
  only how the map is drawn, not the map.
- Water ripples and lava shimmers as they do in Remastered while **View ▸ Animate Water**
  is on. **Preferences ▸ View ▸ Graphics ▸ Water and lava** adjusts how strongly and how
  fast.
- Remastered added several hundred doodads across seven of the eight tilesets. With its
  files installed they are in the Doodads palette, and maps that use them now draw
  correctly. A map you place one on needs the Remastered files to draw: with a 1.16
  copy those tiles are blank, and the 1.16 game's own files do not have them.
  **Tools ▸ Check Map** now says when a map uses any.
- The desktop app finds a Remastered installation on its own, as it does a 1.16 one.
- A few things differ from the game: units are drawn without its lighting, the minimap
  keeps the classic colours, and an exported map image has still water.

## Sounds in triggers

- **Browse…** beside a WAV argument in the Trigger Editor and Mission Briefing lists the
  map's sounds and StarCraft's own, so a unit's voice or an interface sound can be chosen
  without knowing its file name. Search by file, by unit or by the moment: "marine yes",
  "zealot annoyed", "button".
- In a Transmission the list opens on the lines of the unit the action names.
- The line under the field says whether the path is in the map or one of the game's, and
  warns when it is neither.
- **Tools ▸ Check Map** no longer reports a trigger that plays one of the game's own
  sounds as playing a file that is not in the archive.
- The list of the game's sounds comes with the game data. If Browse… shows only the map's
  sounds, install the game data again from **Help ▸ Game Data…**.
- The picker does not play the sounds yet.

## Undo

- Undo now takes back what a dialog wrote. Each OK or Apply that changed something in the
  Trigger Editor, Mission Briefing, String Editor, Sound Editor or a settings dialog is
  one step in the same history as your terrain and unit edits, so Ctrl+Z after closing
  the dialog puts the whole of it back.
- Changes made inside a dialog before OK or Apply are still not in the history; Cancel is
  the way back. Resizing and changing the tileset still clear the history.
- On a shared map, undoing your own OK leaves a table alone if someone else has written
  it since.

## When something goes wrong

- An error in one panel, the map view or a dialog no longer blanks the whole editor. The
  part that failed shows a notice with **Try again** and **Show the log**, and the rest
  keeps working.
- If the editor itself fails, it shows the error and the log instead of an empty window,
  writes a recovery copy of each map with unsaved changes, and **Try again** brings it
  back with your maps still open.

## Drawing

- Scrolling and painting are smoother with the Elevation or Buildability overlay or the
  fog of war showing, and on displays scaled to 125% or 150%.
- The grid is now drawn over the Elevation and Buildability tints instead of under them.

## Fixes

- A map made for the original StarCraft that also carries Brood War settings (some
  editors write both) now shows the upgrade, technology and unit settings the game
  actually uses for it. Before, the editor showed the Brood War ones, and saving a change
  to them could overwrite the real ones.
- A data set added in **Help ▸ Game Data…** now appears in the list straight away. The
  first one added in a session used to be missing until the page was reloaded.

## What's new

- **Help ▸ What's New…** lists what changed in each release, and works offline. The first
  start after an update shows a notice that opens it.

## For plugin authors

- \`document.update\` now records what it wrote as one undo step under its label, and
  clears the redo history as any new edit does. If your plugin kept its own way back,
  such as a saved copy and an "Undo" button, it can go: \`api.document.undo()\` or Ctrl+Z
  does it.
- Check any \`document.update\` that runs without the user asking, for example in an event
  handler. It now adds a step to the history each time it changes something.
- An update whose function throws still keeps what it wrote, and that is now one undo
  step.
- \`view.flags()\` has a new flag, \`hdGraphics\`, for **View ▸ Remastered Graphics**, and
  \`view.setFlags\` sets it.
- With that option on, the tile, doodad and clip pictures from \`api.graphics\` are drawn
  from Remastered's art, at the same size as before. \`unitImage\` and \`spriteImage\` always
  return the classic picture, so code that reads their pixels is unaffected.
- A copy of the game data made from a Remastered installation holds more files than
  before, which \`api.gameData.read\` can reach: \`tileset/<name>.hd.vr4\` and
  \`unit/hd/main_NNN.anim\` among them.
- Every new copy of the game data also holds \`arr/sfxdata.dat\` and \`arr/sfxdata.tbl\`, the
  game's list of its own sounds, which \`api.gameData.read\` can reach.
`,"../../docs/releases/0.7.1.md":`## Game data

- A copy made from your own game now also keeps the files the game itself runs on, its
  sounds among them. The editor does not use them. They are for the play page at
  scmjs.dev/play, which runs a map in the browser from the same copy, so the game is
  installed once for both. This applies to a StarCraft 1.16 folder and to a StarCraft:
  Remastered one.
- Installing from your own game takes longer and keeps more because of it. A Remastered
  copy is about 640 MB where it was 375 MB, and takes about three quarters of a minute.
  A copy from 1.16 archives grows by about 95 MB.
- The free download from Blizzard is unchanged: it has the editor's graphics and not the
  game, and cannot be played from.
- A copy you already have keeps working in the editor. To play from it, install it again
  in **Help ▸ Game Data…**, which replaces it.
`,"../../docs/releases/0.7.2.md":`## Game data

- The play page at scmjs.dev/play can now install a StarCraft: Remastered folder itself.
  Choose the folder there and it is copied into the browser without a trip to the Game
  Data page; the editor and the play page still share the one copy.
`,"../../docs/releases/0.7.3.md":`## Testing a map

- **Tools ▸ Test Map in Browser** opens the map you are editing on the play page at
  scmjs.dev/play and runs it there, with its own forces, units and triggers. Nothing is
  saved or uploaded on the way, and testing again sends the new version to the same tab.
  It is in the editor at scmjs.dev; the desktop app keeps **Tools ▸ Test Map**.

## Remastered graphics

- Units and buildings that were still drawn with their classic picture under
  **View ▸ Remastered Graphics** now use Remastered's: the Command Center and about a
  hundred other pictures.

## Game data

- A copy made from your own game now keeps the pictures of everything a game draws, not
  only of what can be placed on a map: buildings going up, zerg units hatching, protoss
  warp-ins, spell effects. The play page needs them. To get them into a copy you already
  have, install it again in **Help ▸ Game Data…** or choose the folder again on the play
  page.
`,"../../docs/releases/0.8.0.md":`## Maps the game accepts

The editor was checked against what StarCraft 1.16.1 and Remastered do with a map, and
fixed wherever a saved map lost something or did not play.

- Changing **Scenario ▸ Map Revision** to StarCraft 1.00 or Hybrid, or making a new map
  of either, now writes the settings tables those games need. Before, such a map was
  refused as a Use Map Settings game. Check Map points out a map an earlier version saved
  without them.
- A map whose strings come to more than 64 KB used to show the wrong text in the game.
  Save now lays the strings out so they fit where it can, and refuses to write a table
  that still does not.
- A Machine Shop, Comsat or other add-on placed beside its building is joined to it, and
  so are the two ends of a Nydus Canal. Before, the game saw them as separate.
- A Refinery, Extractor or Assimilator is placed with 5,000 gas, as a geyser is, instead
  of none.
- A map whose protection check would fail after a Player Settings change is given
  StarEdit's own on save, so it still lists and starts.
- With StarCraft 1.00 or Hybrid, the colours chosen in **Player Colors** now reach
  Remastered players too.
- Remastered maps without Brood War (revision 64) keep their revision and their strings
  through Map Revision. Before, pressing OK there turned them into Hybrid maps and lost the
  strings.
- Compressing with zlib is marked as Remastered only: StarCraft 1.16.1 cannot read it.

## Symmetry

- The toolbar has an on/off button for symmetry with the modes beside it, and **M** turns
  it off and back on to the last mode. **Tools ▸ Symmetry On** does the same.
- Mirrored copies of a unit, sprite or doodad go to their own players: under a half turn,
  Player 1's start location gives Player 2's instead of a second one for Player 1.
  Neutral units and resources stay neutral. This is on by default; untick **Give each copy
  its own player** in **Tools ▸ Symmetry…** to keep the owner.
- Selecting a unit, sprite, doodad or location also selects what stands at its mirror
  images, so dragging, resizing a location, the arrow keys and Delete act on all of them.
  To change one side alone, turn symmetry off first.
- The isometric brush's preview shows the mirrored diamonds.
- A mirrored unit no longer lands a tile away from its mirror image when placed between
  two tiles.

## TrigScript 4

- TrigScript is at 4.1. A script with a program is built into the map by TrigScript itself
  when you save or test, in under a second, without the eudplib plugin. A 3.x script builds
  into the same map.
- Whatever the build cannot take is marked in Problems, and Save offers to save without it.
- The language grew: functions as values, \`try\` / \`catch\`, \`async\` functions and tasks,
  events, numbers with a fraction, keys and the mouse, sounds, and pictures and videos
  imported into a script. The TrigScript plugin's README lists everything.
- **Simulate** and script tests now run triggers on the game's own schedule: a pass every
  31 frames, one Wait at a time for each player.
- The eudplib plugin is no longer installed with the editor. Nothing it shipped with needs
  it any more.

## Replays

Replays open with the [Aftermath](https://github.com/scm-js/plugin-aftermath) plugin,
which now comes installed and on. **File ▸ Open Replay…** picks one or more.

- A replay opens its map in a tab of its own, to look at but not change. **File ▸ Edit a
  Copy** opens an ordinary copy you can edit, and **Save Copy As** still works.
- **File ▸ Open…** and dropping files on the editor take replays as well as maps.
- While Aftermath's Replay view is in the map's place, the zoom, the minimap, the grid,
  locations, fog of war and the status bar's Tile and Px follow the game. Switching back to
  Map keeps the place you were looking at.

## Plugins that come with the editor

- scm-sim is now one of them and brings **Tools ▸ Test Map in Browser**. How the map is
  played is set on its page in **Preferences ▸ Plugins**.
- Walkability can have the game itself walk the map: the game's regions, each unit's
  route, and the walks that get stuck or take far longer than they should. **Chokes ▸
  Measure** times twelve units through each choke, and **Mining ▸ Measure** gives each
  start location's minerals a minute and warns when one mines noticeably less. These need
  the editor on scmjs.dev.
- Repair fixes what is safe to fix as a map opens, without a dialog, and leaves the rest
  to a cell on the status bar, such as "Repaired 3 · 1 to review". **Preferences ▸ Plugins
  ▸ Repair** chooses between that, asking first, and not checking.

## Check Map

- Check Map's rules now come from what the game does with a map. A map with no triggers is
  judged as melee, one with triggers as a scenario.
- It finds what the game would refuse that it missed before: sections of a length the game
  does not take, a missing string table or \`TRIG\`, an unknown revision, a Brood War tileset
  on a 1.00 or Hybrid map, and strings past 64 KB.
- New warnings for triggers: a player ticked twice (the trigger runs twice), Create Unit,
  Set Resources or Set Score for Players 9–12, Create Unit that makes nothing, unknown
  condition or action types (1.16.1 crashes on them), and AI scripts a trigger's owner
  cannot run.
- New warnings for units: units of a slot not in the game, ground units on unwalkable
  ground, and resources over 65,535.
- It warns when Remastered will show a map's Western text as Korean, and how to fix it in
  **Scenario ▸ Map Revision**.
- Several warnings were wrong and are gone or softer: a missing start location in a
  scenario, a switch tested for Cleared and never set, AI scripts outside StarEdit's list,
  and the 1,024-string limit.

## Triggers

- A trigger's owner can be Players 1–8, All Players or a force, the owners the game runs
  triggers for. Others stay shown only on a trigger that already has them.
- A new Create Unit or Set Deaths starts on Terran Marine, and Create Unit lists only the
  units the game can create.
- The trigger flag that was called "Ignore Game End" is now "Defeat Others", which is what
  it does. Set Countdown Timer is in seconds, and Mission Briefing is no longer offered as
  a trigger condition.
- In the text format, Create Unit with a count of 0 prints \`0\`, not \`All\`: the game makes
  one unit.
- The colour code \`<01>\` is labelled *Previous colour*, and the preview follows what the
  game does with it and with grey text.

## Drawing

- Tiles that were drawn black because they carry the game's creep flag now draw as the game
  shows them.
- Installation doors and traps, and some Ice and Twilight sprites, face the way the game
  shows them.
- Opening a map built with eudplib (euddraft, or TrigScript before 4) used to cover it in
  cyan boxes. Its scrambled locations are now hidden, with a **Show** button.
- Locations drawn inside out have a dashed edge, since the game finds nothing inside them.
- With **View ▸ Remastered Graphics**, a Siege Tank's turret sits on its hull and Desert's
  tar no longer ripples.
- The rulers line up with the tiles all the way across the map.
- **Remove Stranded** keeps buildings on unbuildable ground, as the game does.

## Game data

- **Help ▸ Game Data…** now recommends your own StarCraft folder, classic 1.16 or
  Remastered. Blizzard's StarEdit download is still there for editing and watching
  replays; testing or playing a map needs StarCraft installed.
- A copy from the StarEdit download now has the 1.16.1 unit, weapon and upgrade tables, as
  an installation does.
- A copy made from a 1.16 folder kept almost none of the game's sounds. If you made one,
  install it again to have the sounds on the play page.
- A copy now keeps the command card's button icons and more of what the play page needs.
  For a copy made before this release, install it again.

## Plugins

- **Check all for updates** puts each answer on the plugin's row and one line under the
  button, instead of a notice for each plugin. With two or more updates, **Update all**
  installs them in turn.

## On scmjs.dev

- The hosted editor and the documentation now count visits themselves, and the editor
  counts which of its parts are used: the name of a dialog, a tool or a menu item, with no
  identifier. Nothing of a map is sent, not its name, its contents or anything typed.
  **Preferences ▸ General ▸ Privacy** turns it off. The desktop app and self-hosted copies
  count nothing.
- The nightly moved to scmjs.dev/nightly and shares its game data with the editor there.

## Documentation

- The trigger reference's *How triggers run* was rewritten from what the game does: when
  triggers run, what a Wait costs, who a trigger runs for, and how units and deaths are
  counted.
- The map file reference says what each game does with every section, and when it refuses
  a map.
- TrigScript has a language guide, a library guide, a page for those coming from eudplib,
  and a Showcase, starting with Bad Apple!! on the minimap.

## Fixes

- A protected map with a one-byte string table after the real one lost its name and every
  string. The short copy is now passed over.
- Typing in the API Playground no longer switches layers or pastes onto the map.
- Dragging the right dock's edge over a plugin's view no longer leaves the dock following
  the mouse. The dock can be up to 45% of the window wide.
- The desktop app follows a Korean system's language when **Same as the system** is
  chosen.

## For plugin authors

- \`npm update @scm-js/plugin-api\` for everything below. \`PLUGIN_API_VERSION\` is still 1.
- \`api.document.open(bytes, name, { viewOnly: { label } })\` opens a map to look at only.
  Every write to it throws with the reason; \`info().viewOnly\` and \`list()\` report it.
- \`api.ui.mapView({ title, mount })\` shows a plugin's own view in a map's place. A view can
  take the editor's zoom (\`onZoom\`, \`wheel\`), draw its own minimap (\`minimap\`,
  \`setCamera\`), have the grid, locations and overlays drawn over it (\`paintOver\`), and feed
  the fog switch and the status bar (\`onFog\`, \`setFog\`, \`setPointer\`).
- \`api.ui.fileType({ name, extensions, open })\` hands a plugin the files it opens, from
  drops and File ▸ Open.
- \`PanelSpec.dock: "bottom"\` docks a panel under the map, and \`PanelSpec.maximizable\`
  lets a floating panel fill the map's area.
- New widgets: \`widgets.tabs\` and \`widgets.segmented\`. \`api.ui.tooltip\` gives a plugin's
  element the editor's tooltip.
- \`api.graphics.icon(kind, id)\` returns the command card's button picture for a unit,
  upgrade or technology. It returns null with a copy of the game data made before this
  release.
- \`document.sections.replaceFile(bytes, { asOpened: true })\` replaces the map without
  marking it changed, for a repair made as it opens.
- \`api.triggers.resolvePlayers\` now includes Players 9–12 for All Players where the game
  does: in conditions and unit actions, not as an owner.
- \`MapVersion\` has a new value, \`"remasteredHybrid"\`, for revision 64. \`CombineMode\` has
  \`"entries"\`, and \`SectionKnowledge\` has \`minimum\`.
- \`api.document.create\` caps a map's size at 256, as \`resize\` does.
`,"../../docs/releases/0.8.1.md":`## Privacy

- On scmjs.dev, when something goes wrong in the editor, the usage count now says where in
  the code it happened: the kind of error, and the file, line and function, for the
  editor's own code and the plugins the project publishes. It never sends the error's
  message, the map or anything you typed. **Preferences ▸ General ▸ Privacy** still turns
  all counting off. The desktop app and copies hosted elsewhere count nothing, as before.

## Plugins

- When a plugin such as TrigScript does not build a save because of something in your map
  or script, the Debug Console now lists it as a warning, not an error. The notice and the
  map that is saved are the same as before.

## For plugin authors

- A build step or a \`buildSteps.before\` handler that throws a plain \`Error\` is taken as a
  message for the user and logged as a warning. Anything else it throws, such as a
  \`TypeError\` or an error class of your own, is logged as an error. If you throw your own
  class to tell the user something, throw an \`Error\` instead.
`,"../../docs/releases/0.8.10.md":`This release is for the command line and for people working on scmJS itself. The editor
and the desktop app are the same as in 0.8.9.

## Command line

- \`scmjs\` on its own lists every command, grouped into maps and replays, plugins and bots,
  and the tool itself, with what each noun can do (\`map info|check|open\`).
- \`scmjs about\` says when a newer version is on npm, with the line that installs it:
  \`npm install -g @scm-js/cli@latest\`.

## Working on scmJS

- \`npm run dev:desktop\` starts the dev server and the desktop app on it in one command,
  and closing the window stops both.
- \`npm run verify\` runs what the project's checks run on a pull request, and ends with a
  summary to paste into it. \`npm run doctor\` says what a machine is missing to work on
  scmJS, such as the game data or the browser tests' Chromium, and the command for each.
- [CONTRIBUTING.md](https://github.com/scm-js/scm-js/blob/main/CONTRIBUTING.md) is the
  short way in.
`,"../../docs/releases/0.8.11.md":`This release adds a library for scripts and tools of your own, and a face for the command
line. The editor and the desktop app are the same as in 0.8.9.

## Library

- New: **@scm-js/core**, the editor's map code as an npm package, for Node.js and the
  browser. Open a \`.scm\`, \`.scx\` or \`.chk\`; read and change its triggers, strings, units,
  locations and settings; run Check Map; write the map back. It is the code the editor
  runs, built from the same source, so a map goes through the library exactly as it goes
  through the editor of the same version — the two are released together and carry the
  same version number. No game data is needed. \`npm install @scm-js/core\`; the guide is at
  [docs.scmjs.dev/core](https://docs.scmjs.dev/core/).

## Command line

- \`scmjs\` on its own, or \`scmjs --help\`, opens with the scmJS globe beside the version and
  lists every command, grouped, on one screen. The examples that were there are in the
  [guide](https://docs.scmjs.dev/cli/) and in each command's own \`--help\`.

## Working on scmJS

- The command line imports from the editor only what the library exports, and a test holds
  it to that, so what the command can do a script can do too. \`npm run build:core\` builds
  the package.
`,"../../docs/releases/0.8.2.md":`## Saving and opening

- Some maps altered by a map protector could not be saved: Save stopped with "stored member
  at offset … overlaps another". They save now, with everything the archive held kept as it
  was.

## Privacy

- On scmjs.dev, when the editor hits an error while drawing, the usage count now also says
  which part of the editor it happened in, and whether the browser was translating the page.
  It still never sends the error's message, the map or anything you typed, and
  **Preferences ▸ General ▸ Privacy** still turns all counting off.
`,"../../docs/releases/0.8.3.md":`## Saving and opening

- Some maps altered by a map protector could not be saved: Save stopped with a \`RangeError\`.
  Others saved, but the file came out much larger than the map, padded with empty space.
  Both save normally now. A file that was saved too large shrinks back when you open it
  and save it again.

## Korean

- Many messages that still showed in English in the Korean editor are translated: the
  status bar when opening and saving, the names in **Edit ▸ Undo**, plugin notices,
  **Help ▸ Game Data…** while it installs and when it fails, and the warnings shown when a
  map opens.

## For plugin authors

- The clipboard summary and the CUWP slot summary the API returns are now in the editor's
  language, like the rest of what it shows. So are the messages \`loadImage\` rejects with.
`,"../../docs/releases/0.8.4.md":`## Fixes

- The editor works with the browser translating the page. Switching layers, or opening a
  menu, could replace the properties panel or the palette with an error notice, and an
  error in a menu could take down the whole editor.
- If the menu bar fails, only the menu bar is replaced by a notice with **Try again** and
  **Show the log**. Everything else keeps working, your maps included.
`,"../../docs/releases/0.8.5.md":`## Saving

- Maps whose text is stored compactly, with some strings starting partway into others, can
  be saved again. Save used to refuse them, saying the strings ran past 64 KB, even when
  nothing had been edited.
- An unedited string table is saved exactly as it was opened, and Check Map no longer
  reports one as too big.
`,"../../docs/releases/0.8.6.md":`## Testing

- Test Map is one command with a choice of where it sends the map. In the editor at
  scmjs.dev, **Edit ▸ Preferences ▸ Testing** has *Send the map to*: StarCraft or this
  browser. Ctrl+F5 and the toolbar's Test button follow it. It is the browser until you
  choose.
- Every test setting is on that page now: the folder written for StarCraft, and the game
  type, race, slot and computers for the browser. **Tools ▸ Test Map Settings…** opens it.
- **Tools ▸ Test in StarCraft** and **Tools ▸ Test in Browser** go to one place whatever the
  choice. Test in StarCraft can be given a key under **Edit ▸ Preferences ▸ Hotkeys**.
- The desktop app works as before: Test Map writes the map for StarCraft and starts the
  game.

## Replays

- Aftermath has the game play each key moment again twice: as it was played, and with both
  sides only attack-moving. The Fights tab gives each side's losses in both.
- A new Scouting tab shows what each player knew of their opponents, and which scout found
  it.
- Choosing a player in the **Vision** menu draws their opponents on the map as that player
  knew them: what was in sight, what was last seen, and very faintly what they never saw.

## Privacy

- The editor at scmjs.dev now also counts the type of each unit placed, and says that it
  counts the tileset and size of a map opened. The map itself, its name and its text are
  never sent. **Edit ▸ Preferences ▸ General ▸ Privacy** turns counting off.

## For plugin authors

- \`api.ui.testTarget(spec)\` adds a place besides StarCraft for Test Map to send the map. It
  shows up as a choice on Preferences ▸ Testing and as a Tools item. \`run\` is called inside
  the click, with a promise of the built map, so it can open a tab. \`api.document.test\` still
  goes to StarCraft. See **Test targets** in the plugin guide.
`,"../../docs/releases/0.8.7.md":`## TrigScript

- **Run All Tests in the Game**, **Debug Test at Cursor in the Game** and **Find an EUD
  Error…** work on scmjs.dev again. Since TrigScript 4.0 they stopped with a message asking
  for a newer scm-sim plugin, even when it was up to date. Tests in TrigScript's own
  simulator were not affected.
`,"../../docs/releases/0.8.8.md":`## Triggers

- **Tools ▸ Debug Triggers in Browser** plays the map in a panel under the map and shows
  what its triggers do while you play: a timeline of each time the game runs them, and for
  each trigger whether it fired, was held at an action such as a Wait, or which condition
  did not hold. Pause, step a frame, go to the next or previous pass, and click a trigger to
  open it in the Trigger Editor. In the editor at scmjs.dev only.

## Doodads

- The Doodads palette can draw its previews small, medium or large, with the three buttons
  beside the category list. Large draws one to a row, so a doodad's detail can be read. The
  choice is remembered.
`,"../../docs/releases/0.8.9.md":`## Replays

- **Play From Here** on a replay's timeline opens the replay on the play page at that
  moment, through the eyes of the player picked in **Vision**. Take a player and play on
  alone, against a community bot, or with others. In the editor at scmjs.dev only.

## Command line

- New: **scmjs**, scmJS in a terminal. Install it with \`npm install -g @scm-js/cli\` (it
  needs Node.js 22.12 or newer), or run it once with \`npx @scm-js/cli\`. It says what a
  map, replay or bot file holds, runs Check Map on any number of maps (failing a script
  or CI step when a map fails), and opens a map or replay in the desktop app, or in the
  editor in your browser when the app is not installed. The guide is at
  [docs.scmjs.dev/cli](https://docs.scmjs.dev/cli/).
- \`scmjs bot new\`, \`init\` and \`build\` build a BWAPI bot of your own into a file to add on
  the play page. They need Docker.
- The desktop app opens a replay named on its command line, in the replay viewer.

## Doodads

- The Doodads palette keeps its search when you switch to another layer and back.
  Clearing the search shows the selected doodad's category and scrolls to it.

## For plugin authors

- \`scmjs plugin new "My Plugin"\` writes a plugin to start from, set up as the project's
  own plugins are: typings, Korean catalogue and its test, build and CI.
- \`scmjs plugin dev\` opens the editor with the plugin you are writing and reloads it each
  time you save, showing a failed build in the editor. It replaces serving the folder,
  pasting its address into Manage Plugins and pressing Reload.
- \`scmjs plugin check\` says what would stop the editor loading a plugin: its manifest,
  API version, missing files, a build older than its source, and npm imports without a
  bundle. It fails a CI step when the plugin would not load.
`,"../../docs/releases/0.9.0.md":"This release is the command line's: `scmjs` grew from a reader of maps into a tool for\nmaps in git, maps in the game, and maps in the hands of AI tools. The editor itself is the\nsame as in 0.8.11, apart from one change for the play page.\n\n## Command line\n\n- **Maps as text.** `scmjs map dump` prints the whole map as text, and three lines in a\n  repository make `git diff` and `git log -p` show what changed in a map instead of\n  \"binary files differ\". `scmjs map triggers export|import` and\n  `map strings export|import` take a map's triggers and strings out as files beside it and\n  put them back.\n- **Comparing and checking.** `scmjs map diff a.scx b.scx` says what changed between two\n  maps in a map maker's terms, or since a git revision with `--rev HEAD~1`. `map check`\n  gained `--format github`, `junit` and `sarif`, so a workflow puts Check Map's findings\n  on the pull request itself. `map info --table` is one row per map for a folder of them.\n- **Editing from the terminal.** `scmjs map new` writes a new map with its start locations\n  laid out; `map set` is Map Properties; `map resize` is Scenario ▸ Resize;\n  `map strings prune` drops the strings nothing refers to; `map find` is Edit ▸ Find\n  across any number of maps.\n- **Pipes.** `-` as a map's path reads it from standard input, and `--out -` writes it to\n  standard output, so the commands chain: `scmjs map new - | scmjs map set - --name Ridge\n  | scmjs map check -`.\n- **The archive.** `scmjs map unpack` takes a map apart into a folder of its files, and\n  `map pack` puts it back together as it was.\n- **TrigScript and plugins.** `scmjs map build` applies a map's TrigScript script and\n  builds its programs, as Save does, so a map in git can be built where it is checked.\n  `scmjs map run` runs a plugin, or a few lines written like one, over a map with the\n  plugin API and no editor.\n- **The game.** `scmjs map trace` runs a map's triggers in the game itself with nobody\n  playing and reports which fired, how often, which never did and what said no.\n  `scmjs map cost` weighs them as StarCraft: Remastered charges for them, in milliseconds\n  a frame, and names the costliest. `scmjs replay watch` plays a replay in the terminal,\n  the minimap redrawn as it goes with every unit in its player's colour, the players'\n  figures and the chat under it. `scmjs bot run` plays a bot of your own against the\n  game's computers with no page open. These use the play page's engine, fetched once, and\n  your own copy of StarCraft.\n- **Pictures.** `scmjs map preview` draws a map with the game's own tileset graphics, read\n  from your copy of the game: in the terminal, in colour, or as a PNG with `--out`.\n- **Replays.** `scmjs replay map` writes out the map a replay was played on; a replay\n  carries it whole.\n- `scmjs doctor` says what this computer has for each command, which commands are ready,\n  and the one thing each other one lacks.\n- A shell completion script for bash, zsh or fish: `scmjs completion bash`.\n\n## For AI tools\n\n- `scmjs mcp` runs the map commands as an MCP server on your computer, so Claude Code,\n  Cursor, VS Code and other tools that speak the Model Context Protocol can read, check,\n  search, compare and change your maps with the editor's own code. Triggers travel as the\n  trigger window's text, which the model edits and imports back; `map_preview` answers\n  with the map's picture; `map_trace` and `map_cost` run it in the game. With Claude Code,\n  once, in your maps folder: `claude mcp add scmjs -- npx -y @scm-js/cli mcp`. The guide\n  is at [docs.scmjs.dev/cli](https://docs.scmjs.dev/cli/).\n\n## Replays\n\n- The play page's **Analyse in the Editor**, in its end-of-game menu, hands the game's\n  replay to the editor at scmjs.dev, which opens it in Aftermath.\n\n## For plugin authors\n\n- `scmjs map run` is the editor's own plugin host without the editor, so a plugin's logic\n  can be tried from a terminal, or run over many maps from a shell loop, before anyone\n  installs it.\n- `@scm-js/core` gained what the command line needed: the tileset and units.dat decoders,\n  the archive read and written as it is, the TrigScript build steps, and a few more\n  readers of a scenario.\n","../../docs/releases/0.9.1.md":`This release is the command line's second: \`scmjs\` signs in to scmjs.dev and makes links
from the files on your disk, sets a folder of maps up for git, and reaches the community's
map database and the play page. In the editor, a replay can be kept on your account and
shared by link. The desktop app finds a Battle.net install of the game on macOS.

## Links from the terminal

- \`scmjs login\` signs in to your scmjs.dev account in the browser, once; \`scmjs account\`
  says who you are, the storage you use and the maps you are sharing; \`scmjs logout\` ends
  it.
- \`scmjs map share ridge.scx\` prints a link to the map on scmjs.dev: whoever opens it gets
  a copy in their editor. With \`--edit\` the link opens the map for editing together
  instead. The same map shared again becomes a new revision of the one on your account, as
  the editor's Share this Map does.
- \`scmjs replay share game.rep\` stores the replay on your account and prints a link;
  anyone with it watches the replay in the editor, without signing in. The link's preview
  card shows the map, the matchup, the players and the length.
- \`scmjs map play ridge.scx\` opens a lobby on the play page with the map and prints the
  invite link to send around.

## Maps in git, and from elsewhere

- \`scmjs init\` sets a folder of maps up for git and GitHub in one step: \`git diff\` and
  \`git log -p\` read the maps as text, a workflow checks every map on each push and puts
  the findings on the pull request, and a README lists the maps.
- \`scmjs map diff a.scx b.scx --picture\` draws where the two maps differ, in the terminal
  or as a PNG, and side by side when there is room.
- \`scmjs map rush ridge.scx\` says how far apart the start locations are by ground: the
  game walks a unit from each to every other and times it.
- \`scmjs map fetch lost temple\` searches scmscx.com, the community's map database, and
  \`--first\` or \`--id\` downloads a map from it, named as the site names it.
- \`init\` and \`account\` have their own rows in \`scmjs --help\`.

## Replays

- **My Maps** has a Replays part: upload a replay, make a link to it, copy or remove the
  link, open it. A replay link opens the replay in Aftermath, and a removed one says so.

## Desktop

- On macOS, Test Map now finds the game where Battle.net installs it,
  \`/Applications/StarCraft/x86_64/StarCraft.app\`, and starts it. Before, it wrote the map
  and then said the game was not found. Thanks to the first outside contributor for the
  fix.
`})).map(([e,t])=>({version:e.slice(e.lastIndexOf(`/`)+1,-3),markdown:t})).filter(e=>/^\d+\.\d+\.\d+$/.test(e.version)).sort((t,n)=>e(n.version,t.version));export{t};