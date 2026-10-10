import{un as e}from"./index--OWOUjwp.js";var t=Object.entries(Object.assign({"../../docs/releases/0.1.0.md":`The first release of scmJS — a StarCraft and Brood War map editor that runs in a browser
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
`,"../../docs/releases/0.7.0.md":`## Undo

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
`})).map(([e,t])=>({version:e.slice(e.lastIndexOf(`/`)+1,-3),markdown:t})).filter(e=>/^\d+\.\d+\.\d+$/.test(e.version)).sort((t,n)=>e(n.version,t.version));export{t as RELEASE_NOTES};