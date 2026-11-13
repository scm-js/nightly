var e=[`error`],t=[`reason`],n=[`progress`],r=[`said`],i=[`said`,`progress`],a=[`loader`],o=[`named`],s=[`entry`],c=[`why`],l=[`description`],u={"not-in-tree":{text:`{path} is not among {name}'s files`,params:[`path`,`name`],in:e},"tbl-too-short":{text:`a string table of fewer than two bytes`,params:[],in:e},"tbl-offsets-past-end":{text:`a string table whose offsets run past its end`,params:[],in:e},"tbl-string-past-end":{text:`string {index} starts past the table's end`,params:[`index`],in:e},"overlay-form":{text:`its patcher overlay (at byte {at}) is of form {form}; only form {known} is known`,params:[`at`,`form`,`known`],in:t},"overlay-count":{text:`its patcher overlay (at byte {at}) says it holds {count} plugins, which is no number a patcher writes`,params:[`at`,`count`],in:t},"overlay-cut":{text:`its patcher overlay says it holds {count} plugins, and the file ends after {read}`,params:[`count`,`read`],in:t},"overlay-word":{text:`plugin {n} of its patcher overlay (at byte {at}) has {value} where every patcher seen has 0: a form this reader does not know`,params:[`n`,`at`,`value`],in:t},"overlay-plugin-cut":{text:`plugin {n} of its patcher overlay is {size} bytes, and the file ends {left} bytes after its start`,params:[`n`,`size`,`left`],in:t},"overlay-plugin-not-library":{text:`plugin {n} of its patcher overlay (at byte {at}) is no Windows library`,params:[`n`,`at`],in:t},"efs-entry-cut":{text:`entry {n} of its MPQDraft file system (at byte {at}) runs past the file's end`,params:[`n`,`at`],in:t},"patcher-no-archive":{text:`it is FireGraft's patcher with {plugins, plural, one {# plugin} other {# plugins}}, and no archive was found after {plugins, plural, =0 {its overlay} other {them}}`,params:[`plugins`],in:t},"sempq-no-archive":{text:`it is MPQDraft's self-executing form with {files, plural, one {# embedded file} other {# embedded files}}, and no archive was found after them`,params:[`files`],in:t},"zip-cut":{text:`This zip's directory is not at its end: it may be cut short.`,params:[],in:t},zip64:{text:`This zip is in the large-zip form (zip64), which this reader does not read: unzip it and give the folder instead.`,params:[],in:t},"zip-damaged":{text:`This zip's directory is damaged.`,params:[],in:t},"zip-encrypted":{text:`{path} is encrypted in this zip, and encrypted zips are not read.`,params:[`path`],in:t},"zip-method":{text:`{path} is packed in a way this reader does not read (method {method}): only stored and deflated members are read.`,params:[`path`,`method`],in:t},"zip-member-damaged":{text:`{path}: its place in the zip is damaged.`,params:[`path`],in:t},"zip-member-size":{text:`{path}: inflated to {got} bytes, where the zip says {size}.`,params:[`path`,`got`,`size`],in:t},"zip-member-inflate":{text:`{path}: its packed bytes could not be inflated ({detail}).`,params:[`path`,`detail`],in:t},"mpq-no-header":{text:`no archive header is where it should be ({detail})`,params:[`detail`],in:t},"mpq-version":{text:`its format version is one this reader does not read ({detail})`,params:[`detail`],in:t},"mpq-damaged":{text:`it is damaged ({detail})`,params:[`detail`],in:t},"mpq-compression":{text:`a file in it is packed in a way this reader does not read ({detail})`,params:[`detail`],in:t},"mpq-io":{text:`it could not be read ({detail})`,params:[`detail`],in:t},"mpq-file-missing":{text:`a file it needs is not in it ({detail})`,params:[`detail`],in:t},"mpq-other":{text:`{detail}`,params:[`detail`],in:t},"archive-unopenable":{text:`{path} could not be opened as an archive: {why}`,params:[`path`,`why`,`reason`],in:e,hidden:[`reason`]},"exe-unreadable":{text:`{path} cannot be read as a mod: {why}.`,params:[`path`,`why`],in:e},"exe-no-archive":{text:`{path} holds no archive: it is a program only, not a mod's patcher or self-executing archive`,params:[`path`],in:e},"exe-archive-unopenable":{text:`the archive inside {path} (at byte {at}) could not be opened: {why}`,params:[`path`,`at`,`why`,`reason`],in:e,hidden:[`reason`]},"zip-unreadable":{text:`{path} cannot be read as a zip: {why}`,params:[`path`,`why`],in:e},"file-unreadable":{text:`{path} could not be read: {why}`,params:[`path`,`why`],in:e},"module-no-source":{text:`{name} has no source to read it from`,params:[`name`],in:e},"module-in-archive":{text:`{name} is inside an archive ({archive}): no loader loads it from there`,params:[`name`,`archive`],in:e},"firegraft-archive-missing":{text:`{name}: its archive {archive} is not among the mod's`,params:[`name`,`archive`],in:e},"firegraft-unreadable":{text:`{name} could not be read from {path}`,params:[`name`,`path`],in:e},opening:{text:`Opening {path}…`,params:[`path`],in:n},probing:{text:`{path} has no list of its files; looking for the game's own names in it…`,params:[`path`],in:n},"reading-files":{text:`Reading the mod's files: {done} of {total}…`,params:[`done`,`total`],in:n},"game-copy":{text:`{folder} is a copy of the game. Its own archives ({list}{more, plural, =0 {} other { and # more}}) are not part of the mod and were left out.`,params:[`folder`,`list`,`more`],in:i},"copy-only":{text:`{folder} is a copy of the game, and there is no mod in it.`,params:[`folder`],in:r},"packing-laid-instead":{text:`{path} is {loader}'s own packing of its folder of files (it names it): the folder is laid in its place, at {priority}.`,params:[`path`,`loader`,`priority`],in:r},"json-unreadable":{text:`{path} is not JSON that can be read: left out.`,params:[`path`],in:r},"text-folder":{text:`{path} says this is a mod folder in text form (format {format}): its texts and pictures are packed into the game's files before it can be read as a mod.`,params:[`path`,`format`],in:r},unheld:{text:`Left out, listed but not held by its archive or not readable: {list}{more, plural, =0 {} other { and # more}}.`,params:[`list`,`more`],in:r},duplicate:{text:`{name} is given more than once, in another case ({paths}): the last is used.`,params:[`name`,`paths`],in:r},"no-game-files":{text:`There are no game files in {name}.`,params:[`name`],in:r},"loader-firegraft":{text:`FireGraft's patcher, with {plugins, plural, one {# plugin} other {# plugins}} in its overlay and its archive`,params:[`plugins`],in:a},"loader-sempq":{text:`MPQDraft's self-executing MPQ, with {files, plural, one {# embedded file} other {# embedded files}} and its archive`,params:[`files`],in:a},"loader-self-executing":{text:`a program with an archive after it, in neither patcher's form: read as that archive`,params:[],in:a},"loader-replacement":{text:`an archive in place of the game's own {name}: the game opens it itself`,params:[`name`],in:a},"loader-mpqdraft":{text:`an archive, as MPQDraft's patcher lays one`,params:[],in:a},"loader-packing":{text:`{loader}'s own packing of its folder of files, which it opens at {priority}{laid, select, yes {: the folder is laid in its place} other {}}`,params:[`loader`,`priority`,`laid`],in:a},"loader-plugin-loader":{text:`a plugin that loads plugins: its folder's plugins by name (not those starting with _), its folder of files laid at {priority}`,params:[`priority`],in:a},"loader-folder":{text:`files in the game's paths and plugins beside them, which no loader on Windows takes: the mod needs its files laid over the game's and its plugins loaded by name`,params:[],in:a},"patcher-plugin":{text:`{exe} ({form, select, mpqdraft-sempq {MPQDraft SEMPQ} other {FireGraft patcher}} plugin {named, select, yes {{name}, } other {}}id {id})`,params:[`exe`,`form`,`named`,`name`,`id`],in:o},"entry-mpqdraft":{text:`MPQDraft's interface (GetMPQDraftPlugin, InitializePlugin)`,params:[],in:s},"entry-bwl":{text:`Chaoslauncher's (GetPluginAPI, ApplyPatchSuspended)`,params:[],in:s},"entry-snp":{text:`a storm network provider's (SnpBind)`,params:[],in:s},"entry-dllmain":{text:`DllMain alone`,params:[],in:s},"entry-none":{text:`none: not a Windows image`,params:[],in:s},"why-plugin-loader":{text:`it loads the mod's other plugins: the mod needs those plugins loaded in its order, not this plugin itself`,params:[],in:c},"why-underscore":{text:`its loader leaves out a name that starts with _`,params:[],in:c},"why-qdp-only":{text:`its loader loads .qdp files only`,params:[],in:c},"why-no-entry":{text:`it has no GetMPQDraftPlugin, which its loader asks for`,params:[],in:c},"why-off":{text:`turned off`,params:[],in:c},"why-mpqdraft-patcher":{text:`MPQDraft's own patcher, which its stub loads to lay the archive and load the plugins: the mod needs what it does, not the DLL itself`,params:[],in:c},"why-same-plugin":{text:`the same plugin as {name}, which is that file`,params:[`name`],in:c},"why-library":{text:`a library: mapped when a module imports it or asks for it`,params:[],in:c},"why-provider":{text:`a storm network provider: storm loads it only when a game between people chooses its mode, not when the mod starts`,params:[],in:c},"why-plugin-data":{text:`a file of plugin {id}'s, handed to it by MPQDraft's server (GetPluginModule)`,params:[`id`],in:c},"why-plugin-in-archive":{text:`a plugin inside an archive: no loader loads one from there`,params:[],in:c},"describe-name":{text:`{name}{link, select, none {} other { <{link}>}}{races, select, none {} other {; races {races}}}`,params:[`name`,`link`,`races`],in:l},"describe-loaders":{text:`loaders (outermost first):`,params:[],in:l},"describe-loader":{text:`  {kind}  {top, select, yes {(the top)} other {{path}}}: {words}`,params:[`kind`,`top`,`path`,`words`],in:l},"describe-layers":{text:`layers (by storm's priority, lowest first: laid in this order, the later winning):`,params:[],in:l},"describe-layer":{text:`  {n}. {kind} {top, select, yes {(the top)} other {{path}}}{at, select, none {} other { at byte {at}}}  priority {priority} by {by}{replaces, select, none {} other {, in place of the game's {replaces}}}: {files, plural, one {# file} other {# files}}{probed, select, yes { (no list: found by name)} other {}}`,params:[`n`,`kind`,`top`,`path`,`at`,`priority`,`by`,`replaces`,`files`,`probed`],in:l},"describe-files":{text:`  the game files after laying: {files}`,params:[`files`],in:l},"describe-modules":{text:`modules (the loader's order):`,params:[],in:l},"describe-module":{text:`  {order} {name}  {role}, entered by {entry}{samase, select, yes {; samase too} other {}}{id, select, none {} other {, id {id}}}; from {from}; {size} bytes{loaded, select, yes {} other {; not loaded: {why}}}`,params:[`order`,`name`,`role`,`entry`,`samase`,`id`,`from`,`size`,`loaded`,`why`],in:l},"describe-patches":{text:`patches:`,params:[],in:l},"describe-patch":{text:`  FireGraft project {project} (from {top, select, yes {the top} other {{place}}}){database, select, none {, no database} other { with database {database}}}; lands at the game's first open of {moment} (a game's start, after the plugins' inits)`,params:[`project`,`top`,`place`,`database`,`moment`],in:l},"describe-carried":{text:`carried:`,params:[],in:l},"describe-carried-file":{text:`  {name}: {why}`,params:[`name`,`why`],in:l},"describe-none":{text:`  none`,params:[],in:l},"describe-identity":{text:`identity: hash {hash}, without plugins {withoutPlugins}; {lines} lines and {plugins} plugin lines{older, select, none {} other {; older {older}}}{beforeCode, select, none {} other {; before its code had lines {beforeCode}}}{declared, select, none {} other {; mod.json says {declared}}}; code {code, select, yes {yes} other {no}}; startup data read again {startup, select, yes {yes} other {no}}`,params:[`hash`,`withoutPlugins`,`lines`,`plugins`,`older`,`beforeCode`,`declared`,`code`,`startup`],in:l},"describe-said":{text:`said: {said}`,params:[`said`],in:l}};function d(e,t){let n={key:e,params:t,template:u[e].text,text:``};return n.text=f(n),n}function f(e,t){let n={};for(let[r,i]of Object.entries(e.params))n[r]=typeof i==`object`?f(i,t):i;return t?t(e.template,n,e):p(e.template,n)}function p(e,t){let n=``,r=0;for(;r<e.length;){let i=e.indexOf(`{`,r);if(i<0){n+=e.slice(r);break}let a=m(e,i);if(a<0){n+=e.slice(r);break}n+=e.slice(r,i)+h(e.slice(i+1,a),t),r=a+1}return n}function m(e,t){let n=0;for(let r=t;r<e.length;r++)if(e[r]===`{`)n++;else if(e[r]===`}`&&--n===0)return r;return-1}function h(e,t){let n=e.indexOf(`,`);if(n<0){let n=t[e.trim()];return n===void 0?`{${e}}`:String(n)}let r=e.slice(0,n).trim(),i=e.slice(n+1),a=i.indexOf(`,`),o=t[r];if(a<0||o===void 0)return`{${e}}`;let s=i.slice(0,a).trim(),c=g(i.slice(a+1));if(s===`plural`&&typeof o==`number`){let n=c.get(`=${o}`)??c.get(o===1?`one`:`other`)??c.get(`other`);return n===void 0?`{${e}}`:p(n.replace(/#/g,o.toLocaleString(`en-US`)),t)}if(s===`select`){let n=c.get(String(o))??c.get(`other`);return n===void 0?`{${e}}`:p(n,t)}return`{${e}}`}function g(e){let t=new Map,n=0;for(;n<e.length;){let r=e.indexOf(`{`,n);if(r<0)break;let i=m(e,r);if(i<0)break;let a=e.slice(n,r).trim();a&&t.set(a,e.slice(r+1,i)),n=i+1}return t}var _=class extends Error{detail;constructor(e,t){super(e.text,t),this.name=new.target.name,this.detail=e}get key(){return this.detail.key}},v=class extends _{},y={names:[`desktop.ini`,`thumbs.db`,`ehthumbs.db`,`ehthumbs_vista.db`,`.ds_store`,`icon\r`,`.directory`],prefixes:[`._`],folders:[`__macosx`]};function b(e){let t=e.toLowerCase().split(/[\\/]/).filter(Boolean),n=t.pop()??``;return y.names.includes(n)||y.prefixes.some(e=>n.startsWith(e))||t.some(e=>y.folders.includes(e))}function x(e){let t=e.split(/[\\/]/).filter(Boolean);return t.pop(),t.some(e=>e.startsWith(`.`)&&e!==`.`&&e!==`..`)}var S=e=>e.slice(Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))+1),C=e=>e.replace(/\//g,`\\`).toLowerCase(),w=[`arr`,`rez`,`scripts`,`unit`,`tileset`,`sound`,`game`,`font`,`dlgs`,`glue`,`triggers`,`portrait`,`music`,`cursor`,`local`,`parallax`,`smk`,`maps`,`anim`,`hd2`,`sd`,`templates`,`staredit`,`campaign`],T=[`stardat.mpq`,`broodat.mpq`,`patch_rt.mpq`,`starcraft.mpq`,`broodwar.mpq`];function E(e){let t=new Map,n=new Set;for(let r of e){let e=r.split(`/`);for(let r=0;r<e.length-1;r++){let i=e[r].toLowerCase();if(!w.includes(i)||i===`maps`)continue;let a=e.slice(0,r).join(`/`);t.set(a,(t.get(a)??0)+1),i===`arr`&&n.add(a)}}let r=e=>e.sort((e,n)=>(t.get(n)??0)-(t.get(e)??0)||e.split(`/`).length-n.split(`/`).length)[0];return r([...n])??r([...t.keys()])??``}function D(e){let t=e=>e.slice(0,Math.max(0,e.lastIndexOf(`/`))),n=e=>e.slice(e.lastIndexOf(`/`)+1).toLowerCase(),r=new Set(e.filter(e=>n(e)===`stardat.mpq`).map(e=>t(e).toLowerCase())),i=new Set;if(!r.size)return i;for(let a of e){if(r.has(t(a).toLowerCase())&&T.includes(n(a))){i.add(a);continue}for(let e of r)if(a.toLowerCase().startsWith(e?`${e}/maps/`:`maps/`)){i.add(a);break}}return i}String.raw`
portrait\nbadcrit\ nbcfid0 nbctlk0
portrait\nbiker\ nbifid0 nbitlk0
portrait\nblucrit\ nlcfid0 nlctlk0
portrait\ncivilian\ ncifid0
portrait\ngassac\ ngsfid0
portrait\ngastank\ ngtfid0
portrait\ngorb\ ngofid0
portrait\nicecrit\ nicfid0 nictlk0
portrait\njungcrit\ njcfid0 njctlk0
portrait\nlavacrit\ nlcfid0 nlctlk0
portrait\nore\ nocfid0
portrait\nredcrit\ nrdfid0 nrdtlk0
portrait\padvisor\ padfid0 padtlk0
portrait\parbiter\ pabfid0 pabtlk0
portrait\parchon\ parfid0 partlk0
portrait\partanis\ patfid0 pattlk0
portrait\pcarrier\ pcafid0 pcatlk0
portrait\pcorsair\ pcsfid0 pcstlk0
portrait\pdarchon\ pdafid0 pdatlk0
portrait\pdragoon\ pdrfid0 pdrtlk0
portrait\pinterce\ pinfid0 pintlk0
portrait\pprobe\ pprfid0 pprtlk0
portrait\praz\ przfid0 prztlk0
portrait\pscout\ pscfid0 psctlk0
portrait\pshuttle\ pshfid0 pshtlk0
portrait\ptemplar\ ptefid0 ptetlk0
portrait\ptrilo\ ptrfid0 ptrtlk0
portrait\pwitness\ pwifid0 pwitlk0
portrait\pzealot\ pzefid0 pzetlk0
portrait\tadvisor\ tadfid0 tadtlk0
portrait\talex\ taxfid0 taxtlk0
portrait\tbattlec\ tbafid0 tbatlk0
portrait\tbomber\ tbmfid0 tbmtlk0
portrait\tdropshi\ tdrfid0 tdrtlk0
portrait\tdugal\ udgfid0 udgtlk0
portrait\tfirebat\ tfbfid0 tfbtlk0
portrait\tghost\ tghfid0 tghtlk0
portrait\tgoliath\ tgofid0 tgotlk0
portrait\tmarine\ tmafid0 tmatlk0
portrait\tmedic\ tmefid0 tmetlk0
portrait\tphoenix\ tphfid0 tphtlk0
portrait\tsam\ tsmfid0 tsmtlk0
portrait\tscv\ tscfid0 tsctlk0
portrait\tspider\ tmnfid0 tmntlk0
portrait\ttank\ ttafid0 ttatlk0
portrait\tvessel\ tvefid0 tvetlk0
portrait\tvulture\ tvufid0 tvutlk0
portrait\udagg\ udgfid0 udgtlk0
portrait\udisk\ uddfid0 uddtlk0
portrait\udtemplar\ udtfid0 udttlk0
portrait\uduke\ udufid0 udutlk0
portrait\ufendrag\ ufdfid0 ufdtlk0
portrait\ufenzeal\ ufefid0 ufetlk0
portrait\uflag10\ uf10fid0 uf10tlk0
portrait\uflag11\ uf11fid0 uf11tlk0
portrait\uflag12\ uf12fid0 uf12tlk0
portrait\uflag1\ uf1fid0 uf1tlk0
portrait\uflag2\ uf2fid0 uf2tlk0
portrait\uflag3\ uf3fid0 uf3tlk0
portrait\uflag4\ uf4fid0 uf4tlk0
portrait\uflag5\ uf5fid0 uf5tlk0
portrait\uflag6\ uf6fid0 uf6tlk0
portrait\uflag7\ uf7fid0 uf7tlk0
portrait\uflag8\ uf8fid0 uf8tlk0
portrait\uflag9\ uf9fid0 uf9tlk0
portrait\uhunters\ uhufid0 uhutlk0
portrait\uikerr\ uikfid0 uiktlk0
portrait\ujim\ urafid0 uratlk0
portrait\ukerr\ ukefid0 uketlk0
portrait\ukhad\ ncrfid0 ncrtlk0
portrait\ukhalis\ uksfid0 ukstlk0
portrait\umengsk\ umefid0 umetlk0
portrait\upsi\ upsfid0 upstlk0
portrait\ushard\ ushfid0 ushtlk0
portrait\utassadar\ utafid0 utatlk0
portrait\uuraj\ uujfid0 uujtlk0
portrait\uzasz\ fid0 tlk0
portrait\uzeratul\ uzefid0 uzetlk0
portrait\zadvisor\ zadfid0 zadtlk0
portrait\zavenger\ zavfid0 zavtlk0
portrait\zbrood\ zbrfid0 zbrtlk0
portrait\zchrysalis\ zchfid0
portrait\zcocoon\ zcofid0
portrait\zdefiler\ zdefid0 zdetlk0
portrait\zdevour\ zdvfid0 zdvtlk0
portrait\zdrone\ zdrfid0 zdrtlk0
portrait\zegg\ zegfid0 zegtlk0
portrait\zguard\ zgufid0 zgutlk0
portrait\zhydra\ zhyfid0 zhytlk0
portrait\zinfestt\ zbgfid0 zbgtlk0
portrait\zlarva\ zlafid0 zlatlk0
portrait\zlurker\ zlufid0 zlutlk0
portrait\zmutalid\ zmufid0 zmutlk0
portrait\zover\ zovfid0 zovtlk0
portrait\zqueen\ zqufid0 zqutlk0
portrait\zultra\ zulfid0 zultlk0
portrait\zzergl\ zzefid0 zzetlk0
sound\bullet\ blastcan.wav blastgn2.wav dragbull.wav hkmissle.wav laserb.wav laserhit.wav lasrhit1.wav lasrhit2.wav
  lasrhit3.wav parfir00.wav phoatt00.wav phohit00.wav psahit00.wav pshield.wav psiblade.wav psibolt.wav ptrfir00.wav
  ptrfir01.wav pzefir00.wav shcklnch.wav shockbmb.wav spooghit.wav tbafir00.wav tfrhit.wav tfrshoot.wav tghfir00.wav
  tgofi200.wav tgofir00.wav tmafir00.wav tnsfir00.wav tnshit00.wav tphfi100.wav tphfi200.wav tscfir00.wav ttafi200.wav
  ttafir00.wav tvufir00.wav tvuhit00.wav tvuhit01.wav tvuhit02.wav ukifir00.wav uzefir00.wav zbghit00.wav zdeatt00.wav
  zdrhit00.wav zgufir00.wav zguhit00.wav zhyfir00.wav zhyhit00.wav zlrkfir1.wav zlrkfir2.wav zlrkhit1.wav zlrkhit2.wav
  zlufir00.wav zluhit00.wav zmufir00.wav zqufir00.wav zquhit00.wav zquhit01.wav zquhit02.wav
sound\glue\ bnetclick.wav countdown.wav mousedown2.wav mouseover.wav scorefill.wav scorefillend.wav swishin.wav
  swishlock.wav swishout.wav
sound\misc\ burrowdn.wav burrowup.wav button.wav buzz.wav explo1.wav explo2.wav explo3.wav explo4.wav explo5.wav
  explolrg.wav explomed.wav explosm.wav intonydus.wav land.wav liftoff.wav onfirsml.wav outofgas.wav pbldgplc.wav
  perror.wav ppwrdown.wav prescue.wav pshtra00.wav pshtra01.wav tbldgplc.wav tdrtra00.wav tdrtra01.wav tpwrdown.wav
  transmission.wav trescue.wav uicwht00.wav unrwht00.wav upiwht00.wav utmwht00.wav youlose.wav youwin.wav zbldgplc.wav
  zovtra00.wav zovtra01.wav zpwrdown.wav zrescue.wav
sound\misc\critters\ bcrdth00.wav bcrwht00.wav bcrwht01.wav bcrwht02.wav jcrdth00.wav jcrwht00.wav jcrwht01.wav
  jcrwht02.wav lcrdth00.wav lcrwht00.wav lcrwht01.wav lcrwht02.wav pbdeath01.wav pbwht01.wav pbwht02.wav pbwht03.wav
  scdeath01.wav scwht01.wav scwht02.wav scwht03.wav terdeath01.wav terwht01.wav terwht02.wav terwht03.wav
sound\misc\door\ door1cls.wav door1opn.wav door2cls.wav door2opn.wav door3cls.wav door3opn.wav door4cls.wav
  door4opn.wav
sound\protoss\advisor\ paderr00.wav paderr01.wav paderr02.wav paderr06.wav padupd00.wav padupd01.wav padupd02.wav
  padupd04.wav padupd06.wav
sound\protoss\arbiter\ pabcag00.wav pabdth00.wav pabfol00.wav pabfol01.wav pabfol02.wav pabfol03.wav pabpss00.wav
  pabpss01.wav pabpss02.wav pabpss03.wav pabpss04.wav pabrdy00.wav pabwht00.wav pabwht01.wav pabwht02.wav pabwht03.wav
  pabyes00.wav pabyes01.wav pabyes02.wav
sound\protoss\archon\ pardth00.wav parmin00.wav parpss00.wav parpss01.wav parpss02.wav parpss03.wav parrdy00.wav
  parwht00.wav parwht01.wav parwht02.wav parwht03.wav paryes00.wav paryes01.wav paryes02.wav paryes03.wav
sound\protoss\artanis\ patpss00.wav patpss01.wav patpss02.wav patpss03.wav patpss04.wav patpss05.wav patwht00.wav
  patwht01.wav patwht02.wav patwht03.wav patyes00.wav patyes01.wav patyes02.wav patyes03.wav
sound\protoss\bldg\ pacwht00.wav paswht00.wav pbaact00.wav pbawht00.wav pbewht00.wav pciwht00.wav pfowht00.wav
  pgawht00.wav pgcwht00.wav pnawht00.wav pnewht00.wav ppbwht00.wav ppywht00.wav prowht00.wav ptrwht00.wav pwawht00.wav
sound\protoss\carrier\ pcadth00.wav pcadth01.wav pcapss00.wav pcapss01.wav pcapss02.wav pcapss03.wav pcardy00.wav
  pcawht00.wav pcawht01.wav pcawht02.wav pcawht03.wav pcayes00.wav pcayes01.wav pcayes02.wav pcayes03.wav
sound\protoss\corsair\ pcopss00.wav pcopss01.wav pcopss02.wav pcopss03.wav pcopss04.wav pcopss05.wav pcopss06.wav
  pcordy00.wav pcorhit1.wav pcorhit2.wav pcorlasr2.wav pcorweb1.wav pcowht00.wav pcowht01.wav pcowht02.wav
  pcowht03.wav pcoyes00.wav pcoyes01.wav pcoyes02.wav pcoyes03.wav
sound\protoss\darchon\ feedback.wav mind.wav paraattk.wav parahit.wav pdapss00.wav pdapss01.wav pdapss02.wav
  pdapss03.wav pdardy00.wav pdawht00.wav pdawht01.wav pdawht02.wav pdawht03.wav pdayes00.wav pdayes01.wav pdayes02.wav
  pdayes03.wav pdrdth00.wav
sound\protoss\darktemplar\ pdtdth00.wav pdtpss00.wav pdtpss01.wav pdtpss02.wav pdtpss03.wav pdtrdy00.wav pdtwht00.wav
  pdtwht01.wav pdtwht02.wav pdtwht03.wav pdtyes00.wav pdtyes01.wav pdtyes02.wav pdtyes03.wav
sound\protoss\dragoon\ pdrdth00.wav pdrpss00.wav pdrpss01.wav pdrpss02.wav pdrpss03.wav pdrrdy00.wav pdrwht00.wav
  pdrwht01.wav pdrwht02.wav pdrwht03.wav pdrwht04.wav pdrwht05.wav pdrwht06.wav pdrwht07.wav pdryes00.wav pdryes01.wav
  pdryes02.wav pdryes03.wav pdryes04.wav pdryes05.wav pdryes06.wav
sound\protoss\fenixd\ ufdpss00.wav ufdpss01.wav ufdpss02.wav ufdpss03.wav ufdwht00.wav ufdwht01.wav ufdwht02.wav
  ufdwht03.wav ufdyes00.wav ufdyes01.wav ufdyes02.wav ufdyes03.wav
sound\protoss\fenixz\ ufepss00.wav ufepss01.wav ufepss02.wav ufepss03.wav ufewht00.wav ufewht01.wav ufewht02.wav
  ufewht03.wav ufeyes00.wav ufeyes01.wav ufeyes02.wav ufeyes03.wav
sound\protoss\gantrithor\ utcpss00.wav utcpss01.wav utcpss02.wav utcpss03.wav utcwht00.wav utcwht01.wav utcwht02.wav
  utcwht03.wav utcyes00.wav utcyes01.wav utcyes02.wav utcyes03.wav
sound\protoss\intercep\ pinlau00.wav
sound\protoss\probe\ ppratt00.wav ppratt01.wav pprdth00.wav pprerr00.wav pprerr01.wav pprmin00.wav pprpss00.wav
  pprpss01.wav pprpss02.wav pprpss03.wav pprrdy00.wav pprwht00.wav pprwht01.wav pprwht02.wav pprwht03.wav ppryes00.wav
  ppryes01.wav ppryes02.wav ppryes03.wav
sound\protoss\scout\ pscdth00.wav pscpss00.wav pscpss01.wav pscpss02.wav pscpss03.wav pscpss04.wav pscrdy00.wav
  pscwht00.wav pscwht01.wav pscwht02.wav pscwht03.wav pscyes00.wav pscyes01.wav pscyes02.wav pscyes03.wav
sound\protoss\shuttle\ pshbld00.wav pshbld01.wav pshbld02.wav pshbld03.wav pshbld04.wav pshdth00.wav pshpss00.wav
  pshpss01.wav pshpss02.wav pshpss03.wav pshpss04.wav pshrdy00.wav pshwht00.wav pshwht01.wav pshwht02.wav pshwht03.wav
  pshyes00.wav pshyes01.wav pshyes02.wav pshyes03.wav
sound\protoss\tassadar\ utadth00.wav utapss00.wav utapss01.wav utapss02.wav utapss03.wav utawht00.wav utawht01.wav
  utawht02.wav utawht03.wav utayes00.wav utayes01.wav utayes02.wav utayes03.wav
sound\protoss\templar\ ptedth00.wav ptehal00.wav ptehal01.wav ptemov00.wav ptepss00.wav ptepss01.wav ptepss02.wav
  ptepss03.wav pterdy00.wav ptesto00.wav ptesto01.wav ptesum00.wav ptewht00.wav ptewht01.wav ptewht02.wav ptewht03.wav
  pteyes00.wav pteyes01.wav pteyes02.wav pteyes03.wav
sound\protoss\trilobyte\ ptrdth00.wav ptrpss00.wav ptrpss01.wav ptrpss02.wav ptrrdy00.wav ptrwht00.wav ptrwht01.wav
  ptrwht02.wav ptrwht03.wav ptryes00.wav ptryes01.wav ptryes02.wav ptryes03.wav
sound\protoss\witness\ pwidth00.wav pwidth01.wav pwipss00.wav pwipss01.wav pwipss02.wav pwipss03.wav pwipss04.wav
  pwirdy00.wav pwiwht00.wav pwiwht01.wav pwiyes00.wav pwiyes01.wav
sound\protoss\zealot\ pzeatt00.wav pzeatt01.wav pzedth00.wav pzehit00.wav pzepss00.wav pzepss01.wav pzepss02.wav
  pzerag00.wav pzerdy00.wav pzewht00.wav pzewht01.wav pzewht02.wav pzewht03.wav pzeyes00.wav pzeyes01.wav pzeyes02.wav
  pzeyes03.wav
sound\protoss\zeratul\ uzedth00.wav uzepss00.wav uzepss01.wav uzepss02.wav uzepss03.wav uzewht00.wav uzewht01.wav
  uzewht02.wav uzewht03.wav uzeyes00.wav uzeyes01.wav uzeyes02.wav uzeyes03.wav
sound\terran\advisor\ taderr00.wav taderr01.wav taderr02.wav taderr03.wav taderr04.wav taderr06.wav tadupd00.wav
  tadupd01.wav tadupd02.wav tadupd03.wav tadupd04.wav tadupd05.wav tadupd06.wav tadupd07.wav
sound\terran\battle\ tbadth00.wav tbapss00.wav tbapss01.wav tbapss02.wav tbapss03.wav tbapss04.wav tbardy00.wav
  tbawht00.wav tbawht01.wav tbawht02.wav tbawht03.wav tbayam01.wav tbayam02.wav tbayes00.wav tbayes01.wav tbayes02.wav
  tbayes03.wav
sound\terran\bldg\ onfirlrg.wav tacwht00.wav tclwht00.wav tcssca00.wav tcswht00.wav tddwht00.wav tglwht00.wav
  tmswht00.wav tmtwht00.wav tnswht00.wav tpgwht00.wav tplwht00.wav trewht00.wav trfwht00.wav trlwht00.wav twpwht00.wav
sound\terran\civilian\ tcvdth00.wav tcvpss00.wav tcvpss01.wav tcvpss02.wav tcvpss03.wav tcvpss04.wav tcvrdy00.wav
  tcvwht00.wav tcvwht01.wav tcvwht02.wav tcvwht03.wav tcvyes00.wav tcvyes01.wav tcvyes02.wav tcvyes03.wav tcvyes04.wav
sound\terran\dropship\ tdrdth00.wav tdrpss00.wav tdrpss01.wav tdrpss02.wav tdrpss03.wav tdrrdy00.wav tdrwht00.wav
  tdrwht01.wav tdrwht02.wav tdrwht03.wav tdryes00.wav tdryes01.wav tdryes02.wav tdryes03.wav tdryes04.wav tdryes05.wav
sound\terran\dukeb\ udupss00.wav udupss01.wav udupss02.wav udupss03.wav udupss04.wav uduwht00.wav uduwht01.wav
  uduwht02.wav uduwht03.wav uduyes00.wav uduyes01.wav uduyes02.wav uduyes03.wav
sound\terran\duket\ udtpss00.wav udtpss01.wav udtpss02.wav udtpss03.wav udtpss04.wav udtwht00.wav udtwht01.wav
  udtwht02.wav udtwht03.wav udtyes00.wav udtyes01.wav udtyes02.wav udtyes03.wav
sound\terran\duran\ tdndth00.wav tdnpss00.wav tdnpss01.wav tdnpss02.wav tdnpss03.wav tdnpss04.wav tdnpss05.wav
  tdnpss06.wav tdnpss07.wav tdnpss08.wav tdnwht00.wav tdnwht01.wav tdnwht02.wav tdnwht03.wav tdnyes00.wav tdnyes01.wav
  tdnyes02.wav tdnyes03.wav
sound\terran\firebat\ tfbdth00.wav tfbdth01.wav tfbdth02.wav tfbfir00.wav tfbfir01.wav tfbpss00.wav tfbpss01.wav
  tfbpss02.wav tfbpss03.wav tfbpss04.wav tfbpss05.wav tfbpss06.wav tfbrdy00.wav tfbwht00.wav tfbwht01.wav tfbwht02.wav
  tfbwht03.wav tfbyes00.wav tfbyes01.wav tfbyes02.wav tfbyes03.wav
sound\terran\frigate\ afteroff.wav afteron.wav tvkdth00.wav tvkpss00.wav tvkpss01.wav tvkpss02.wav tvkpss03.wav
  tvkpss04.wav tvkpss05.wav tvkrdy00.wav tvkwht00.wav tvkwht01.wav tvkwht02.wav tvkwht03.wav tvkyes00.wav tvkyes01.wav
  tvkyes02.wav tvkyes03.wav tvkyes04.wav
sound\terran\ghost\ tghdth00.wav tghlas00.wav tghlkd00.wav tghpss00.wav tghpss01.wav tghpss02.wav tghpss03.wav
  tghrdy00.wav tghwht00.wav tghwht01.wav tghwht02.wav tghwht03.wav tghyes00.wav tghyes01.wav tghyes02.wav tghyes03.wav
sound\terran\goliath\ tgopss00.wav tgopss01.wav tgopss02.wav tgopss03.wav tgopss04.wav tgopss05.wav tgordy00.wav
  tgowht00.wav tgowht01.wav tgowht02.wav tgowht03.wav tgoyes00.wav tgoyes01.wav tgoyes02.wav tgoyes03.wav
sound\terran\kerrigan\ ukedth00.wav ukepss00.wav ukepss01.wav ukepss02.wav ukepss03.wav ukepss04.wav ukewht00.wav
  ukewht01.wav ukewht02.wav ukewht03.wav ukeyes00.wav ukeyes01.wav ukeyes02.wav ukeyes03.wav
sound\terran\marine\ tmadth00.wav tmadth01.wav tmapss00.wav tmapss01.wav tmapss02.wav tmapss03.wav tmapss04.wav
  tmapss05.wav tmapss06.wav tmardy00.wav tmasti00.wav tmasti01.wav tmawht00.wav tmawht01.wav tmawht02.wav tmawht03.wav
  tmayes00.wav tmayes01.wav tmayes02.wav tmayes03.wav
sound\terran\medic\ miopia1.wav tmddth00.wav tmdpss00.wav tmdpss01.wav tmdpss02.wav tmdpss03.wav tmdpss04.wav
  tmdpss05.wav tmdpss06.wav tmdrdy00.wav tmdwht00.wav tmdwht01.wav tmdwht02.wav tmdwht03.wav tmdyes00.wav tmdyes01.wav
  tmdyes02.wav tmdyes03.wav tmedcure.wav tmedflsh.wav tmedheal.wav tmedrest.wav
sound\terran\phoenix\ tphclo00.wav tphclo01.wav tphdth00.wav tphpss00.wav tphpss01.wav tphpss02.wav tphpss03.wav
  tphpss04.wav tphpss05.wav tphpss06.wav tphrdy00.wav tphwht00.wav tphwht01.wav tphwht02.wav tphwht03.wav tphyes00.wav
  tphyes01.wav tphyes02.wav tphyes03.wav
sound\terran\raynorm\ uradth00.wav uradth01.wav urapss00.wav urapss01.wav urapss02.wav urapss03.wav urawht00.wav
  urawht01.wav urawht02.wav urawht03.wav urayes00.wav urayes01.wav urayes02.wav urayes03.wav
sound\terran\raynorv\ urvpss00.wav urvpss01.wav urvpss02.wav urvpss03.wav urvwht00.wav urvwht01.wav urvwht02.wav
  urvwht03.wav urvyes00.wav urvyes01.wav urvyes02.wav urvyes03.wav
sound\terran\scv\ edrrep00.wav edrrep01.wav edrrep02.wav edrrep03.wav edrrep04.wav tscdth00.wav tscerr00.wav
  tscerr01.wav tscmin00.wav tscmin01.wav tscpss00.wav tscpss01.wav tscpss02.wav tscpss03.wav tscpss04.wav tscpss05.wav
  tscpss06.wav tscrdy00.wav tsctra00.wav tscupd00.wav tscwht00.wav tscwht01.wav tscwht02.wav tscwht03.wav tscyes00.wav
  tscyes01.wav tscyes02.wav tscyes03.wav
sound\terran\tank\ ttadth00.wav ttapss00.wav ttapss01.wav ttapss02.wav ttapss03.wav ttardy00.wav ttatra00.wav
  ttatra01.wav ttawht00.wav ttawht01.wav ttawht02.wav ttawht03.wav ttayes00.wav ttayes01.wav ttayes02.wav ttayes03.wav
sound\terran\vessel\ tvedef00.wav tvedth00.wav tveemp00.wav tveirr00.wav tvepss00.wav tvepss01.wav tvepss02.wav
  tvepss03.wav tvepss04.wav tvepss05.wav tvepss06.wav tverdy00.wav tvewht00.wav tvewht01.wav tvewht02.wav tvewht03.wav
  tveyes00.wav tveyes01.wav tveyes02.wav tveyes03.wav
sound\terran\vulture\ tvudth00.wav tvumin00.wav tvumin01.wav tvupss00.wav tvupss01.wav tvupss02.wav tvupss03.wav
  tvurdy00.wav tvuwht00.wav tvuwht01.wav tvuwht02.wav tvuwht03.wav tvuyes00.wav tvuyes01.wav tvuyes02.wav tvuyes03.wav
sound\zerg\advisor\ zaderr00.wav zaderr01.wav zaderr02.wav zaderr06.wav zadupd00.wav zadupd01.wav zadupd02.wav
  zadupd04.wav
sound\zerg\avenger\ zavatt00.wav zavdth00.wav zavhit00.wav zavpss00.wav zavpss01.wav zavrdy00.wav zavwht00.wav
  zavwht01.wav zavyes00.wav zavyes01.wav
sound\zerg\bldg\ zbldgdth.wav zcbwht00.wav zchrdy00.wav zchwht00.wav zevwht00.wav zfcwht00.wav zhawht00.wav
  zhiwht00.wav zigwht00.wav zlrwht00.wav zluwht00.wav zmcwht00.wav zmhwht00.wav znewht00.wav znywht00.wav zo1wht00.wav
  zrcwht00.wav zsbwht00.wav zscwht00.wav zspwht00.wav
sound\zerg\broodling\ zbratt00.wav zbrdth00.wav zbrpss00.wav zbrpss01.wav zbrpss02.wav zbrpss03.wav zbrrdy00.wav
  zbrwht00.wav zbrwht01.wav zbrwht02.wav zbrwht03.wav zbryes00.wav zbryes01.wav zbryes02.wav
sound\zerg\bugguy\ zbgpss00.wav zbgpss01.wav zbgpss02.wav zbgpss03.wav zbgrdy00.wav zbgwht00.wav zbgwht01.wav
  zbgwht02.wav zbgwht03.wav zbgyes00.wav zbgyes01.wav zbgyes02.wav zbgyes03.wav
sound\zerg\defiler\ zdeblo00.wav zdeblo01.wav zdecon00.wav zdedth00.wav zdepss00.wav zdepss01.wav zdepss02.wav
  zderdy00.wav zdewht00.wav zdewht01.wav zdewht02.wav zdeyes00.wav zdeyes01.wav zdeyes02.wav
sound\zerg\devourer\ firesuck.wav goophit.wav zdvdth00.wav zdvpss00.wav zdvpss01.wav zdvpss02.wav zdvrdy00.wav
  zdvwht00.wav zdvwht01.wav zdvwht02.wav zdvyes00.wav zdvyes01.wav zdvyes02.wav zdvyes03.wav
sound\zerg\drone\ zdrdth00.wav zdrerr00.wav zdrmin00.wav zdrpss00.wav zdrpss01.wav zdrpss02.wav zdrrdy00.wav
  zdrwht00.wav zdrwht01.wav zdrwht02.wav zdrwht03.wav zdrwht04.wav zdryes00.wav zdryes01.wav zdryes02.wav zdryes03.wav
  zdryes04.wav
sound\zerg\egg\ zegdth00.wav zegpss00.wav zegrdy00.wav zegwht00.wav zegwht01.wav
sound\zerg\guardian\ zgudth00.wav zgupss00.wav zgupss01.wav zgupss02.wav zgupss03.wav zgurdy00.wav zguwht00.wav
  zguwht01.wav zguwht02.wav zguwht03.wav zguyes00.wav zguyes01.wav zguyes02.wav zguyes03.wav
sound\zerg\hydra\ zhydth00.wav zhypss00.wav zhypss01.wav zhyrdy00.wav zhywht00.wav zhywht01.wav zhywht02.wav
  zhyyes00.wav zhyyes01.wav zhyyes02.wav zhyyes03.wav
sound\zerg\larva\ zladth00.wav zlapss00.wav zlawht00.wav
sound\zerg\lurker\ zluburrw.wav zludth00.wav zlupss00.wav zlupss01.wav zlupss02.wav zlupss03.wav zlurdy00.wav
  zluwht00.wav zluwht01.wav zluwht02.wav zluwht03.wav zluyes00.wav zluyes01.wav zluyes02.wav zluyes03.wav
sound\zerg\mutalid\ zmudth00.wav zmupss00.wav zmupss01.wav zmupss02.wav zmupss03.wav zmurdy00.wav zmuwht00.wav
  zmuwht01.wav zmuwht02.wav zmuwht03.wav zmuyes00.wav zmuyes01.wav zmuyes02.wav zmuyes03.wav
sound\zerg\overlord\ zovdth00.wav zovpss00.wav zovrdy00.wav zovwht00.wav zovwht01.wav zovwht02.wav zovwht03.wav
  zovyes00.wav zovyes01.wav zovyes02.wav zovyes03.wav
sound\zerg\queen\ zqudth00.wav zqudth01.wav zqudth02.wav zquens00.wav zqupss00.wav zqupss01.wav zqupss02.wav
  zqupss03.wav zqurdy00.wav zquswm00.wav zquswm01.wav zqutag00.wav zqutag01.wav zquwht00.wav zquwht01.wav zquwht02.wav
  zquwht03.wav zquyes00.wav zquyes01.wav zquyes02.wav zquyes03.wav
sound\zerg\ultra\ zulatt00.wav zulatt01.wav zulatt02.wav zuldth00.wav zulhit00.wav zulhit01.wav zulpss00.wav
  zulpss01.wav zulpss02.wav zulrdy00.wav zulror00.wav zulwht00.wav zulwht01.wav zulwht02.wav zulwht03.wav zulyes00.wav
  zulyes01.wav zulyes02.wav zulyes03.wav
sound\zerg\zergduran\ zdndth00.wav zdnpss00.wav zdnpss01.wav zdnpss02.wav zdnpss03.wav zdnpss04.wav zdnpss05.wav
  zdnpss06.wav zdnpss07.wav zdnpss08.wav zdnwht00.wav zdnwht01.wav zdnwht02.wav zdnwht03.wav zdnyes00.wav zdnyes01.wav
  zdnyes02.wav zdnyes03.wav
sound\zerg\zergkerri\ ukidth00.wav ukipss00.wav ukipss01.wav ukipss02.wav ukipss03.wav ukiwht00.wav ukiwht01.wav
  ukiwht02.wav ukiwht03.wav ukiyes00.wav ukiyes01.wav ukiyes02.wav ukiyes03.wav
sound\zerg\zergling\ zzedth00.wav zzepss00.wav zzepss01.wav zzepss02.wav zzerdy00.wav zzewht00.wav zzewht01.wav
  zzewht02.wav zzewht03.wav zzeyes00.wav zzeyes01.wav zzeyes02.wav zzeyes03.wav
unit\bullet\ blastcan.grp circle14.grp dragbull.grp epbbul.grp ephfire.grp eycbull.grp gemini.grp grenade.grp hks.grp
  missile.grp parasite.grp pdriphit.grp pspark.grp scvspark.grp smmissle.grp spike.grp spore2.grp spores.grp
  tentacle.grp tspark.grp zspark.grp
unit\neutral\ acritter.grp bcritter.grp cbashad.grp cbattle.grp civilian.grp datadisk.grp flag.grp gasorb.grp
  gassac.grp gastank.grp generate.grp geyser.grp geyser.los geyshad.grp icritter.grp ion.grp jcritter.grp kcritter.grp
  kerrchry.grp kerregg.grp khalis.grp khchunk.grp khyad01.grp maprev.grp min01.grp min01sha.grp min02.grp min02sha.grp
  min03.grp min03sha.grp nacshad.grp nbcshad.grp ncicshad.grp ncishad.grp nckshad.grp nddsha2.grp nddshad.grp
  nflsha2.grp nflshad.grp ngcshad.grp ngoshad.grp ngsshad.grp njcshad.grp nkesha2.grp nkeshad.grp nkhsha2.grp
  nkhshad.grp nkoshad.grp norshad.grp npssha2.grp npsshad.grp orechunk.grp psidisr.grp psiemit.grp scritter.grp
  stasis.grp temple.grp tgnshad.grp tpdshad.grp uraj.grp
unit\protoss\ arbiter.grp archives.grp archives.lof archon.grp archon.lob archont.grp archont.lol archont2.grp
  assim.grp assim.lof assim.los beacon.grp beacon.lof carrier.grp citadel.grp citadel.lof corsair.grp darchn.grp
  darchnt.grp darchnt.lol darchnt2.grp dragoon.grp dtemplar.grp forge.grp forge.lof forget.grp gateway.grp gateway.lof
  gencore.grp gencore.lof gencoret.grp intercep.grp lshield.los mshield.los nexus.grp nexus.lof pacshad.grp
  passhad.grp paushad.grp pb1glow.grp pbaglow.grp pbashad.grp pbeshad.grp pcirglow.grp pcishad.grp pdadeath.grp
  pdrdeath.grp pdrshad.grp pfoshad.grp pgashad.grp pgcshad.grp photon.grp photon.lof pmarker.grp pneglow.grp
  pneshad.grp ppbshad.grp ppyshad.grp prism.grp prism.lof probe.grp proshad.grp psgglow.grp psgshad.grp pstshad.grp
  pteshad.grp ptrshad.grp pwashad.grp pwgshad.grp pxtshad.grp pylon.grp pylon.lof pzeshad.grp robotic.grp robotic.lof
  sapper.grp sbattery.grp sbattery.lof scout.grp shuttle.grp sshield.los stargate.grp stargate.lof stasis.grp
  stasis.lof templar.grp texture.grp trilob.grp warp.grp warp.lof witness.grp xeltempl.grp xwarpfir.grp xwarpgat.grp
  zealot.grp
unit\terran\ academy.grp academy.lof academyt.grp battlecr.grp battlecr.lol battlecr.lox bomber.grp chemlab.grp
  chemlab.lof chemlabt.grp comsat.grp comsat.lof comsatc.grp comsatt.grp control.grp control.lod control.lof
  control.lou controlt.grp depot.grp depot.lof depott.grp dropship.grp dropship.lod dropship.lou drydockc.grp
  drydocks.grp drydocks.lof drydockt.grp factory.grp factory.lod factory.lof factory.lou factoryt.grp firebat.grp
  genelab.grp genelab.lof genelabc.grp genelabt.grp ghost.grp goliath.grp goliath.lol goliatht.grp machinec.grp
  machines.grp machines.lof marine.grp medic.grp missile.grp missile.lof missilet.grp nukemiss.grp nukesilc.grp
  nukesilo.grp nukesilo.lof nukesilt.grp phoenix.grp phoenix.lol physics.grp physics.lof physicsc.grp pillbox.grp
  pillbox.loa pillbox.lof pillboxt.grp refinery.grp refinery.lof refinery.los research.grp research.lod research.lof
  research.lou researct.grp scv.grp scv.loo spider.grp stank.grp stank.lol stankt.grp stankt.loa starport.grp
  starport.lod starport.lof starport.lou starpot.grp tacshad.grp tank.grp tank.lol tankt.grp tb1shad.grp tb2shad.grp
  tb3shad.grp tbarrack.grp tbarrack.lod tbarrack.lof tbarrack.lou tbldlrg.grp tbldmed.grp tbldsml.grp tbrshad.grp
  tccshad.grp tcirglow.grp tclshad.grp tcsshad.grp tddshad.grp tdeshad.grp tfashad.grp tfbshad.grp tghdeath.grp
  tghshad.grp tglshad.grp tgoshad.grp tmadeath.grp tmarker.grp tmashad.grp tmedeath.grp tmeshad.grp tmishad.grp
  tmsshad.grp tnsshad.grp tpbshad.grp tplshad.grp treshad.grp trlshad.grp tsmshad.grp tspshad.grp tstshad.grp
  ttashad.grp tveshad.grp twpshad.grp ughost.grp ughshad.grp vulture.grp weaponpl.grp weaponpl.lod weaponpl.lof
  weaponpl.lou weaponpt.grp wessel.grp wessel.lod wessel.lol wessel.lou wesselt.grp
unit\thingy\ bblood01.grp bblood02.grp bblood03.grp bblood04.grp bdust.grp blackx.grp bsmoke.grp consume.grp
  dbl_exp.grp disrupt.grp dswarm.grp dust01.grp dust02.grp dust03.grp dust04.grp dust05.grp dust06.grp dust07.grp
  dust08.grp dust09.grp ebbcloud.grp ebbhitl.grp ebbhitm.grp ebbhits.grp ecahit.grp edmbackl.grp edmbackm.grp
  edmbacks.grp edmfronl.grp edmfronm.grp edmfrons.grp edmhitl.grp edmhitm.grp edmhits.grp efghit.grp ehamed.grp
  elbbat.grp elbfire.grp elbfirec.grp elbfirew.grp elbhit.grp elbmuzz.grp eldfire.grp eldlarge.grp eldmed.grp
  eldsmall.grp elect02.grp elect02a.grp emp.grp empl.grp emsbeam.grp emshit.grp ensgool.grp ensgoom.grp ensgoos.grp
  ensnare.grp ep2fire.grp ep3burst.grp ep3shot.grp eplmuzz.grp eradlrg.grp esfhit.grp esflarge.grp esfsmall.grp
  esifire.grp etghit.grp ettflash.grp evecast.grp explo2.grp eycblast.grp eychit.grp flamer.grp geysmok1.grp
  geysmok2.grp geysmok3.grp geysmok4.grp geysmok5.grp geysmos1.grp gresmoke.grp gsmoke.grp halmind.grp hkexplod.grp
  hktrail.grp juice01.grp juice02.grp maelhit.grp mushroom.grp nukebeam.grp nukehit.grp nuketarg.grp o022.grp o032.grp
  o048.grp o062.grp o072.grp o094.grp o110.grp o122.grp o146.grp o224.grp od022.grp od032.grp od048.grp od062.grp
  od072.grp od094.grp od110.grp od122.grp od146.grp od224.grp ofirec.grp ofiref.grp ofirev.grp pabglow.grp pcaglow.grp
  pcsglow.grp pcssplsh.grp pdamyolg.grp pdamyomd.grp pdamyosm.grp pdaparlg.grp pdaparmd.grp pdaparsm.grp pdapsylg.grp
  pdapsymd.grp pdapsysm.grp plasdrip.grp plasma.grp prubblel.grp prubbles.grp psaexplo.grp pscglow.grp pshglow.grp
  pshield.grp psistorm.grp pteglow.grp recall.grp rubblel.grp rubbles.grp sbalarge.grp sbasmall.grp small.grp
  smoke.grp spooge.grp sporehit.grp spotrail.grp startloc.grp tbaglow.grp tbangl.grp tbangs.grp tbangx.grp
  tbmafter.grp tbmglow.grp tcurelrg.grp tcuremed.grp tcuresml.grp tdrglow.grp tmeflshl.grp tmeflshm.grp tmeflshs.grp
  tmeheall.grp tmehealm.grp tmnexplo.grp tphglow.grp tscglow.grp tveglowb.grp tveglowo.grp tvegloww.grp zairdthl.grp
  zairdths.grp zbgexplo.grp zblddths.grp zdvbirth.grp zdvgool.grp zdvgoom.grp zdvgoos.grp zdvhit.grp zdvpuke.grp
  zrubblel.grp zrubbles.grp
unit\thingy\tileset\ashworld\ hasroc01.grp hasroc02.grp hasroc03.grp hasroc04.grp hasroc05.grp hasroc06.grp
  lalroc01.grp lalroc02.grp rock01.grp rock02.grp rock03.grp rock04.grp rock05.grp rock1sha.grp rock2sha.grp
  rock3sha.grp rock4sha.grp rock5sha.grp rorock01.grp rorock02.grp rorock03.grp
unit\thingy\tileset\badlands\ hdrock01.grp hdrock02.grp hdrock03.grp hdrock04.grp hdrock05.grp hdrock06.grp
  hdrock07.grp hdrock08.grp hdrock1s.grp hdrock2s.grp hdrock3s.grp hdrock4s.grp hdtree01.grp hdtree02.grp hdtree03.grp
  hdtree04.grp hdvent01.grp hgtree01.grp lcshop01.grp lcshop02.grp lcshop03.grp lcshop04.grp lcshop05.grp lcshop06.grp
  lcshop07.grp lcshop08.grp lcshop09.grp lcshopaa.grp lcsign01.grp lcsign02.grp lcsign03.grp lcsign04.grp lcsign05.grp
  lcsign06.grp lcsign07.grp lcsign08.grp lcsign09.grp lcsignaa.grp lcsignbb.grp lcsigncc.grp ldtree1s.grp ldtree2s.grp
  ldtree3s.grp ldtree4s.grp
unit\thingy\tileset\desert\ hdbant.grp hdbbroke.grp hdbgas.grp hdbmed.grp hdbmoss.grp hdbtent.grp hdlbox01.grp
  hdmachn2.grp hdplnt03.grp jgbcomm.grp jgbfact.grp jgbgas.grp jgbgen.grp jgbred.grp jgbroke.grp jgbsgn.grp
  jgbtent.grp jgplnt01.grp jgplnt02.grp ldbaz.grp ldbgas.grp ldbgren.grp ldbneon.grp ldbsuky.grp ldbtent.grp
  ldlbox01.grp ldmachn1.grp ldneon.grp ldplnt04.grp sarlacc.grp shdbbrke.grp shdbgas.grp shdbmed.grp shdbmoss.grp
  shdbtent.grp shdlbox1.grp shdplnt3.grp sjgbcomm.grp sjgbfact.grp sjgbgas.grp sjgbgen.grp sjgbred.grp sjgbroke.grp
  sjgbsgn.grp sjgbtent.grp sjgplnt2.grp sldbaz.grp sldbgas.grp sldbgren.grp sldbsuky.grp sldbtent.grp sldlbox1.grp
  sldmchn1.grp sldplnt4.grp tgas.grp
unit\thingy\tileset\ice\ hdbld01.grp hdbld02.grp hdbld03.grp hdbld04.grp hdpipes.grp hdradarl.grp hdradarr.grp
  hdradr02.grp hdrock01.grp hdrock02.grp hdspire.grp hdstre01.grp hdstre02.grp hdstre03.grp hdstre04.grp hdtwr01.grp
  hdtwr02.grp jgant1.grp ldbld01.grp ldbld02.grp ldbtre01.grp ldbtre02.grp ldbtre03.grp ldbtre04.grp ldcomm.grp
  lddish.grp lddtre01.grp lddtre02.grp ldrck01.grp ldrck02.grp ldrdr01.grp ldrdr02.grp ldrdr03.grp ldsmrock.grp
  ldthing.grp rjbtree1.grp rjbtree2.grp rjbtree3.grp rjbtree4.grp shdbld01.grp shdbld02.grp shdbld03.grp shdbld04.grp
  shdpipes.grp shdradr2.grp shdradrl.grp shdradrr.grp shdrck01.grp shdrck02.grp shdspire.grp shdtwr01.grp shdtwr02.grp
  sldbld01.grp sldbld02.grp sldbtre1.grp sldbtre2.grp sldbtre3.grp sldbtre4.grp sldcomm.grp slddish.grp slddtre1.grp
  slddtre2.grp sldrck01.grp sldrck02.grp sldrdr01.grp sldrdr02.grp sldrdr03.grp sldthing.grp srjbtre1.grp srjbtre2.grp
  srjbtre3.grp srjbtre4.grp
unit\thingy\tileset\install\ clplat1t.grp clplate1.grp clplate2.grp crdoor1.grp dcfan1.grp dcgun1.grp dcgun2.grp
  dcgun2.loa dicran1.grp dicran2.grp dicran3.grp dicran4.grp didoor1.grp digear1.grp digear2.grp dihatc1.grp
unit\thingy\tileset\jungle\ dd025.grp dd026.grp dd027.grp dd028.grp dd029.grp dd030.grp dd031.grp dd055.grp dd056.grp
  dd075.grp dd076.grp dd077.grp dd078.grp dd079.grp dd080.grp dd081.grp dd091.grp dd203.grp dd204.grp dd205.grp
  dd206.grp dd207.grp dd209.grp dd210.grp dd211.grp hdrock01.grp hdrock02.grp hdrock03.grp hdrock04.grp hdrock1s.grp
  hdrock2s.grp hdrock3s.grp hdrock4s.grp jubush01.grp jubush03.grp jubush05.grp jubush1s.grp jubush3s.grp jubush5s.grp
  ldtree01.grp ldtree02.grp ldtree03.grp ldtree04.grp ldtree1s.grp ldtree2s.grp ldtree3s.grp ldtree4s.grp tree01.grp
  tree02.grp tree03.grp tree04.grp tree1sha.grp tree2sha.grp tree3sha.grp tree4sha.grp
unit\thingy\tileset\platform\ dish01.grp dish02.grp dish03.grp dish1sha.grp dish2sha.grp dish3sha.grp glob01.grp
  glob02.grp glob03.grp glob1sha.grp glob2sha.grp glob3sha.grp lbsign01.grp lbsign02.grp lbsign03.grp lbsign04.grp
  lbsign05.grp lbsign06.grp lbsign07.grp lbsign08.grp refinery.grp spthin01.grp towr01.grp towr02.grp tree01.grp
  tree02.grp
unit\thingy\tileset\twilight\ jtree01.grp jtree02.grp jtree03.grp jtree04.grp jtree05.grp ldarch.grp lddrill.grp
  ldxel01.grp ldxel02.grp ldxel03.grp ldxel04.grp ldxel05.grp ldxel06.grp ldxeltur.grp rstatue.grp
unit\zerg\ avenger.grp brood.grp bugguy.grp cerebrat.grp cerebrat.lof chrysal.grp chrysal.lof cocoon.grp defiler.grp
  defiler.log devour.grp drone.grp drone.log drone.loo egg.grp extract.grp extract.lof extract.los fcolony.grp
  fcolony.lof guardian.grp guardian.log hatchery.grp hatchery.lof hive.grp hive.lof hydra.grp hydra.log infest03.grp
  lair.grp lair.lof larva.grp lurkegg.grp lurker.grp lurker.lof mutacham.grp mutacham.lof mutalid.grp mutalid.log
  mutapit.grp mutapit.lof nest.grp nest.lof nyduspit.grp nyduspit.lof over1.grp over2.grp overlord.grp queen.grp
  rcluster.grp rcluster.lof scolony.grp scolony.lof snakey.grp snakey.lof spire.grp spire.lof ucereb.grp ucereb.lof
  uikerr.grp uikshad.grp ultra.grp xovermnd.grp zavbirth.grp zavbirth.lob zavdeath.grp zavexplo.grp zbgshad.grp
  zbrdeath.grp zbrshad.grp zbshad.grp zbuild.grp zceshad.grp zchshad.grp zcirglow.grp zdebirth.grp zdedeath.grp
  zdrbirth.grp zdrdeath.grp zdvdeath.grp zegdeath.grp zegshad.grp zegspawn.grp zergling.grp zfcshad.grp zgudeath.grp
  zhashad.grp zhishad.grp zhybirth.grp zhydeath.grp zhyshad.grp zladeath.grp zlrshad.grp zlubirth.grp zlurker.grp
  zlushad.grp zmarker.grp zmcshad.grp zmhshad.grp zmubirth.grp zmudeath.grp zneshad.grp znyshad.grp zovbirth.grp
  zovdeath.grp zovshad.grp zqubirth.grp zqudeath.grp zrcshad.grp zreshad.grp zsbshad.grp zscshad.grp zspawn01.grp
  zspawn02.grp zspawn03.grp zspshad.grp zucshad.grp zulbirth.grp zuldeath.grp zulshad.grp zzebirth.grp zzebirth.lob
  zzedeath.grp zzeshad.grp zzlushad.grp
`;var O=new TextDecoder(`windows-1252`);function k(e){if(e.length<2)throw new v(d(`tbl-too-short`,{}));let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=t.getUint16(0,!0);if(2+2*n>e.length)throw new v(d(`tbl-offsets-past-end`,{}));let r=[];for(let i=0;i<n;i++){let n=t.getUint16(2+2*i,!0);if(n>e.length)throw new v(d(`tbl-string-past-end`,{index:i}));let a=e.indexOf(0,n);r.push(O.decode(e.subarray(n,a<0?e.length:a)))}return r}var A=e=>typeof e==`number`&&Number.isInteger(e)&&e>=8&&e<=255,j=e=>e===0||e===1||e===2;function M(e){if(!e||typeof e!=`object`||Array.isArray(e))return null;let t=e;if(!A(t.id)||typeof t.name!=`string`)return null;let n=t.name.trim();if(!n||n.length>40)return null;let r={...t,id:t.id,name:n};return typeof t.letter==`string`&&/^[a-z]$/i.test(t.letter.trim())?r.letter=t.letter.trim().toLowerCase():delete r.letter,j(t.like)?r.like=t.like:delete r.like,r}function N(e){if(!Array.isArray(e))return[];let t=new Set,n=[];for(let r of e){let e=M(r);if(!(!e||t.has(e.id))&&(t.add(e.id),n.push(e),n.length>=248))break}return n.sort((e,t)=>e.id-t.id)}var P=e=>Array.isArray(e)?N(e):void 0,F=new Set([`z`,`t`,`p`,`n`]);function I(e){let t=[];if(e.network){let n=e=>{try{return k(e)}catch{return[]}},r=n(e.network),i=(e.gameNetwork?n(e.gameNetwork).length:0)||168;for(let e=i;e<r.length;e++){let n=[...r[e]].filter(e=>e.charCodeAt(0)>=32).join(``).trim();n&&t.push({index:e,name:n})}}let n=new Set;for(let t of e.paths){let e=/^(?:game\\([a-z])console\.pcx|rez\\statbtn([a-z])\.bin)$/.exec(C(t)),r=e?.[1]??e?.[2];r&&!F.has(r)&&n.add(r)}return{names:t,letters:[...n].sort()}}var L=/^[0-9a-f]{16}$/;function R(e){let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!=`object`||Array.isArray(t))return null;let n=t,r={};typeof n.name==`string`&&n.name.trim()&&(r.name=n.name.trim().slice(0,80));let i=[n.link,n.url,n.homepage].find(e=>typeof e==`string`&&/^https?:\/\//i.test(e));i&&(r.link=i);let a=P(n.races);return a!==void 0&&(r.races=a),typeof n.hash==`string`&&L.test(n.hash)&&(r.declared={hash:n.hash,...typeof n.withoutPlugins==`string`&&L.test(n.withoutPlugins)?{withoutPlugins:n.withoutPlugins}:{}}),typeof n.base==`string`&&n.base.trim()&&(r.base=n.base.trim()),typeof n.scmjs==`number`&&Number.isFinite(n.scmjs)&&(r.format=n.scmjs),r}function z(e,t){let n=e.split(`/`);if(n.pop()?.toLowerCase()!==`mod.json`)return!1;if(t){if(n[0]!==t)return!1;n.shift()}return n.length===0||n.length===1&&!w.includes(n[0].toLowerCase())}export{d as C,P as S,M as _,v as a,R as b,D as c,A as d,z as f,E as g,S as h,_ as i,C as l,b as m,w as n,y as o,j as p,u as r,p as s,T as t,x as u,N as v,k as w,f as x,I as y};