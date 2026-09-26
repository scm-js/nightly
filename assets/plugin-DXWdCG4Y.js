import{wn as e}from"./index-D1LfcfJU.js";var t=class{buf;view;len=0;constructor(e=256){this.buf=new Uint8Array(e),this.view=new DataView(this.buf.buffer)}get length(){return this.len}need(e){if(this.len+e<=this.buf.length)return;let t=this.buf.length*2||256;for(;t<this.len+e;)t*=2;let n=new Uint8Array(t);n.set(this.buf.subarray(0,this.len)),this.buf=n,this.view=new DataView(n.buffer)}u8(e){return this.need(1),this.view.setUint8(this.len,e),this.len+=1,this}i8(e){return this.need(1),this.view.setInt8(this.len,e),this.len+=1,this}u16(e){return this.need(2),this.view.setUint16(this.len,e,!0),this.len+=2,this}i16(e){return this.need(2),this.view.setInt16(this.len,e,!0),this.len+=2,this}u32(e){return this.need(4),this.view.setUint32(this.len,e>>>0,!0),this.len+=4,this}i32(e){return this.need(4),this.view.setInt32(this.len,e|0,!0),this.len+=4,this}bytes(e){return this.need(e.length),this.buf.set(e,this.len),this.len+=e.length,this}fill(e,t){return this.need(t),this.buf.fill(e,this.len,this.len+t),this.len+=t,this}finish(){return this.buf.slice(0,this.len)}},n={None:0,CountdownTimer:1,Command:2,Bring:3,Accumulate:4,Kill:5,CommandTheMost:6,CommandTheMostAt:7,MostKills:8,HighestScore:9,MostResources:10,Switch:11,ElapsedTime:12,Briefing:13,Opponents:14,Deaths:15,CommandTheLeast:16,CommandTheLeastAt:17,LeastKills:18,LowestScore:19,LeastResources:20,Score:21,Always:22,Never:23},r={None:0,Victory:1,Defeat:2,PreserveTrigger:3,Wait:4,PauseGame:5,UnpauseGame:6,Transmission:7,PlayWav:8,DisplayText:9,CenterView:10,CreateUnitWithProperties:11,SetMissionObjectives:12,SetSwitch:13,SetCountdownTimer:14,RunAiScript:15,RunAiScriptAt:16,LeaderboardControl:17,LeaderboardControlAt:18,LeaderboardResources:19,LeaderboardKills:20,LeaderboardPoints:21,KillUnit:22,KillUnitAt:23,RemoveUnit:24,RemoveUnitAt:25,SetResources:26,SetScore:27,MinimapPing:28,TalkingPortrait:29,MuteUnitSpeech:30,UnmuteUnitSpeech:31,LeaderboardComputerPlayers:32,LeaderboardGoalControl:33,LeaderboardGoalControlAt:34,LeaderboardGoalResources:35,LeaderboardGoalKills:36,LeaderboardGoalPoints:37,MoveLocation:38,MoveUnit:39,LeaderboardGreed:40,SetNextScenario:41,SetDoodadState:42,SetInvincibility:43,CreateUnit:44,SetDeaths:45,Order:46,Comment:47,GiveUnits:48,ModifyHitPoints:49,ModifyEnergy:50,ModifyShields:51,ModifyResourceAmount:52,ModifyHangarCount:53,PauseTimer:54,UnpauseTimer:55,Draw:56,SetAllianceStatus:57,DisableDebugMode:58,EnableDebugMode:59},i={None:0,Wait:1,PlayWav:2,TextMessage:3,MissionObjectives:4,ShowPortrait:5,HidePortrait:6,DisplaySpeakingPortrait:7,Transmission:8,SkipTutorialEnabled:9},a={Player1:0,Player2:1,Player3:2,Player4:3,Player5:4,Player6:5,Player7:6,Player8:7,Player9:8,Player10:9,Player11:10,Player12:11,None:12,CurrentPlayer:13,Foes:14,Allies:15,NeutralPlayers:16,AllPlayers:17,Force1:18,Force2:19,Force3:20,Force4:21,Unused1:22,Unused2:23,Unused3:24,Unused4:25,NonAlliedVictoryPlayers:26},o={AtLeast:0,AtMost:1,Exactly:10},s={Set:2,Cleared:3},c={Set:4,Clear:5,Toggle:6,Randomize:11},l={SetTo:7,Add:8,Subtract:9},u={Enable:4,Disable:5,Toggle:6},d={Move:0,Patrol:1,Attack:2},f={Enemy:0,Ally:1,AlliedVictory:2},p={Ore:0,Gas:1,OreAndGas:2},m={Total:0,Units:1,Buildings:2,UnitsAndBuildings:3,Kills:4,Razings:5,KillsAndRazings:6,Custom:7},h={Any:229,Men:230,Buildings:231,Factories:232},g={Unknown:1,Disabled:2,AlwaysDisplay:4,UnitPropertiesUsed:8,UnitTypeUsed:16,UnitIdUsed:32},_={IgnoreWaitOnce:1,Disabled:2,AlwaysDisplay:4,UnitPropertiesUsed:8,UnitTypeUsed:16,UnitIdUsed:32},v={ConditionsMet:1,IgnoreGameEnd:2,Preserve:4,Disabled:8,IgnoreDisplay:16,Paused:32,WaitSkipDisabled:64};function ee(){return{location:0,text:0,wav:0,time:0,player:0,target:0,unitId:0,type:0,modifier:0,flags:0,padding:0,mask:0}}function te(e,t){e.u32(t.location).u32(t.player).u32(t.amount).u16(t.unitId).u8(t.comparison).u8(t.type).u8(t.resource).u8(t.flags).u16(t.mask)}function y(e,t){e.u32(t.location).u32(t.text).u32(t.wav).u32(t.time).u32(t.player).u32(t.target).u16(t.unitId).u8(t.type).u8(t.modifier).u8(t.flags).u8(t.padding).u16(t.mask)}function ne(e,t){if(t.conditions.length>16)throw Error(`A trigger holds at most 16 conditions (got ${t.conditions.length}).`);if(t.actions.length>64)throw Error(`A trigger holds at most 64 actions (got ${t.actions.length}).`);for(let n of t.conditions)te(e,n);e.fill(0,(16-t.conditions.length)*20);for(let n of t.actions)y(e,n);e.fill(0,(64-t.actions.length)*32),e.u32(t.flags);for(let n=0;n<27;n++)e.u8(t.players[n]??0);e.u8(t.currentAction)}function b(e){let n=new t(e.length*2400||16);for(let t of e)ne(n,t);return n.finish()}function x(e){return{conditions:e.conditions.map(e=>({...e})),actions:e.actions.map(e=>({...e})),flags:e.flags,players:e.players.slice(),currentAction:e.currentAction}}var S=(e,t,n)=>({kind:e,field:t,label:n}),C=(e,t,n)=>({kind:e,field:t,label:n}),w=[S(`comparison`,`comparison`,`Comparison`),S(`amount`,`amount`,`Amount`)],T=[{type:n.Accumulate,name:`Accumulate`,args:[S(`player`,`player`,`Player`),...w,S(`resource`,`resource`,`Resource`)]},{type:n.Always,name:`Always`,args:[]},{type:n.Bring,name:`Bring`,args:[S(`player`,`player`,`Player`),S(`unit`,`unitId`,`Unit`),S(`location`,`location`,`Location`),...w]},{type:n.Command,name:`Command`,args:[S(`player`,`player`,`Player`),S(`unit`,`unitId`,`Unit`),...w]},{type:n.CommandTheLeast,name:`Command the Least`,args:[S(`unit`,`unitId`,`Unit`)]},{type:n.CommandTheLeastAt,name:`Command the Least At`,args:[S(`unit`,`unitId`,`Unit`),S(`location`,`location`,`Location`)]},{type:n.CommandTheMost,name:`Command the Most`,args:[S(`unit`,`unitId`,`Unit`)]},{type:n.CommandTheMostAt,name:`Command the Most At`,args:[S(`unit`,`unitId`,`Unit`),S(`location`,`location`,`Location`)]},{type:n.CountdownTimer,name:`Countdown Timer`,args:[...w]},{type:n.Deaths,name:`Deaths`,args:[S(`player`,`player`,`Player`),S(`unit`,`unitId`,`Unit`),...w]},{type:n.ElapsedTime,name:`Elapsed Time`,args:[...w]},{type:n.HighestScore,name:`Highest Score`,args:[S(`score`,`resource`,`Score`)]},{type:n.Kill,name:`Kill`,args:[S(`player`,`player`,`Player`),S(`unit`,`unitId`,`Unit`),...w]},{type:n.LeastKills,name:`Least Kills`,args:[S(`unit`,`unitId`,`Unit`)]},{type:n.LeastResources,name:`Least Resources`,args:[S(`resource`,`resource`,`Resource`)]},{type:n.LowestScore,name:`Lowest Score`,args:[S(`score`,`resource`,`Score`)]},{type:n.MostKills,name:`Most Kills`,args:[S(`unit`,`unitId`,`Unit`)]},{type:n.MostResources,name:`Most Resources`,args:[S(`resource`,`resource`,`Resource`)]},{type:n.Never,name:`Never`,args:[]},{type:n.Opponents,name:`Opponents`,args:[S(`player`,`player`,`Player`),...w]},{type:n.Score,name:`Score`,args:[S(`player`,`player`,`Player`),S(`score`,`resource`,`Score`),...w]},{type:n.Switch,name:`Switch`,args:[S(`switch`,`resource`,`Switch`),S(`switchState`,`comparison`,`State`)]},{type:n.Briefing,name:`Mission Briefing`,args:[]}],E=C(`player`,`player`,`Player`),D=C(`unit`,`unitId`,`Unit`),O=C(`location`,`location`,`Location`),k=C(`count`,`modifier`,`Count`),A=C(`modifier`,`modifier`,`Modifier`),re=C(`text`,`text`,`Text`),j=C(`text`,`text`,`Label`),ie=C(`textFlags`,`flags`,`Display`),M=[{type:r.CenterView,name:`Center View`,args:[O]},{type:r.Comment,name:`Comment`,args:[re]},{type:r.CreateUnit,name:`Create Unit`,args:[E,D,k,O]},{type:r.CreateUnitWithProperties,name:`Create Unit with Properties`,args:[E,D,k,O,C(`cuwp`,`target`,`Properties`)]},{type:r.Defeat,name:`Defeat`,args:[]},{type:r.DisplayText,name:`Display Text Message`,args:[ie,re],hasTextFlags:!0},{type:r.Draw,name:`Draw`,args:[]},{type:r.GiveUnits,name:`Give Units to Player`,args:[C(`player`,`player`,`From`),C(`player`,`target`,`To`),D,k,O]},{type:r.KillUnit,name:`Kill Unit`,args:[E,D]},{type:r.KillUnitAt,name:`Kill Unit At Location`,args:[E,D,k,O]},{type:r.LeaderboardControl,name:`Leader Board Control`,args:[j,D]},{type:r.LeaderboardControlAt,name:`Leader Board Control At Location`,args:[j,D,O]},{type:r.LeaderboardGreed,name:`Leader Board Greed`,args:[C(`amount`,`target`,`Goal`)]},{type:r.LeaderboardKills,name:`Leader Board Kills`,args:[j,D]},{type:r.LeaderboardPoints,name:`Leader Board Points`,args:[j,C(`score`,`unitId`,`Score`)]},{type:r.LeaderboardResources,name:`Leader Board Resources`,args:[j,C(`resource`,`unitId`,`Resource`)]},{type:r.LeaderboardGoalControl,name:`Leaderboard Goal Control`,args:[j,D,C(`amount`,`target`,`Goal`)]},{type:r.LeaderboardGoalControlAt,name:`Leaderboard Goal Control At Location`,args:[j,D,C(`amount`,`target`,`Goal`),O]},{type:r.LeaderboardGoalKills,name:`Leaderboard Goal Kills`,args:[j,D,C(`amount`,`target`,`Goal`)]},{type:r.LeaderboardGoalPoints,name:`Leaderboard Goal Points`,args:[j,C(`score`,`unitId`,`Score`),C(`amount`,`target`,`Goal`)]},{type:r.LeaderboardGoalResources,name:`Leaderboard Goal Resources`,args:[j,C(`amount`,`target`,`Goal`),C(`resource`,`unitId`,`Resource`)]},{type:r.LeaderboardComputerPlayers,name:`Leaderboard Computer Players`,args:[C(`unitState`,`modifier`,`State`)]},{type:r.MinimapPing,name:`Minimap Ping`,args:[O]},{type:r.ModifyEnergy,name:`Modify Unit Energy`,args:[E,D,C(`percent`,`target`,`Percent`),k,O]},{type:r.ModifyHangarCount,name:`Modify Unit Hanger Count`,args:[E,D,C(`amount`,`target`,`Amount`),k,O]},{type:r.ModifyHitPoints,name:`Modify Unit Hit Points`,args:[E,D,C(`percent`,`target`,`Percent`),k,O]},{type:r.ModifyResourceAmount,name:`Modify Unit Resource Amount`,args:[E,C(`amount`,`target`,`Amount`),k,O]},{type:r.ModifyShields,name:`Modify Unit Shield Points`,args:[E,D,C(`percent`,`target`,`Percent`),k,O]},{type:r.MoveLocation,name:`Move Location`,args:[E,D,C(`location`,`location`,`Unit at`),C(`location`,`target`,`Move`)]},{type:r.MoveUnit,name:`Move Unit`,args:[E,D,k,C(`location`,`location`,`From`),C(`location`,`target`,`To`)]},{type:r.MuteUnitSpeech,name:`Mute Unit Speech`,args:[]},{type:r.Order,name:`Order`,args:[E,D,C(`location`,`location`,`From`),C(`location`,`target`,`To`),C(`order`,`modifier`,`Order`)]},{type:r.PauseGame,name:`Pause Game`,args:[]},{type:r.PauseTimer,name:`Pause Timer`,args:[]},{type:r.PlayWav,name:`Play WAV`,args:[C(`wav`,`wav`,`WAV`),C(`duration`,`time`,`Duration`)]},{type:r.PreserveTrigger,name:`Preserve Trigger`,args:[]},{type:r.RemoveUnit,name:`Remove Unit`,args:[E,D]},{type:r.RemoveUnitAt,name:`Remove Unit At Location`,args:[E,D,k,O]},{type:r.RunAiScript,name:`Run AI Script`,args:[C(`aiScript`,`target`,`Script`)]},{type:r.RunAiScriptAt,name:`Run AI Script At Location`,args:[C(`aiScript`,`target`,`Script`),O]},{type:r.SetAllianceStatus,name:`Set Alliance Status`,args:[E,C(`alliance`,`unitId`,`Status`)]},{type:r.SetCountdownTimer,name:`Set Countdown Timer`,args:[A,C(`duration`,`time`,`Seconds`)]},{type:r.SetDeaths,name:`Set Deaths`,args:[E,D,A,C(`amount`,`target`,`Amount`)]},{type:r.SetDoodadState,name:`Set Doodad State`,args:[E,D,O,C(`unitState`,`modifier`,`State`)]},{type:r.SetInvincibility,name:`Set Invincibility`,args:[E,D,O,C(`unitState`,`modifier`,`State`)]},{type:r.SetMissionObjectives,name:`Set Mission Objectives`,args:[re]},{type:r.SetNextScenario,name:`Set Next Scenario`,args:[C(`text`,`text`,`Scenario`)]},{type:r.SetResources,name:`Set Resources`,args:[E,A,C(`amount`,`target`,`Amount`),C(`resource`,`unitId`,`Resource`)]},{type:r.SetScore,name:`Set Score`,args:[E,A,C(`amount`,`target`,`Amount`),C(`score`,`unitId`,`Score`)]},{type:r.SetSwitch,name:`Set Switch`,args:[C(`switch`,`target`,`Switch`),C(`switchAction`,`modifier`,`Action`)]},{type:r.TalkingPortrait,name:`Talking Portrait`,args:[D,C(`duration`,`time`,`Duration`)]},{type:r.Transmission,name:`Transmission`,args:[ie,re,D,O,A,C(`duration`,`target`,`Duration`),C(`wav`,`wav`,`WAV`),C(`duration`,`time`,`WAV duration`)],hasTextFlags:!0},{type:r.UnmuteUnitSpeech,name:`Unmute Unit Speech`,args:[]},{type:r.UnpauseGame,name:`Unpause Game`,args:[]},{type:r.UnpauseTimer,name:`Unpause Timer`,args:[]},{type:r.Victory,name:`Victory`,args:[]},{type:r.Wait,name:`Wait`,args:[C(`duration`,`time`,`Milliseconds`)]},{type:r.DisableDebugMode,name:`Disable Debug Mode`,args:[]},{type:r.EnableDebugMode,name:`Enable Debug Mode`,args:[]}],N=[{type:i.Wait,name:`Wait`,args:[C(`duration`,`time`,`Milliseconds`)]},{type:i.PlayWav,name:`Play WAV`,args:[C(`wav`,`wav`,`WAV`),C(`duration`,`time`,`Duration`)]},{type:i.TextMessage,name:`Text Message`,args:[re,C(`duration`,`time`,`Duration`)]},{type:i.MissionObjectives,name:`Mission Objectives`,args:[re]},{type:i.ShowPortrait,name:`Show Portrait`,args:[D,C(`slot`,`player`,`Slot`)]},{type:i.HidePortrait,name:`Hide Portrait`,args:[C(`slot`,`player`,`Slot`)]},{type:i.DisplaySpeakingPortrait,name:`Display Speaking Portrait`,args:[C(`slot`,`player`,`Slot`),C(`duration`,`time`,`Duration`)]},{type:i.Transmission,name:`Transmission`,args:[re,C(`slot`,`player`,`Slot`),A,C(`amount`,`target`,`Amount`),C(`duration`,`time`,`Duration`),C(`wav`,`wav`,`WAV`)]},{type:i.SkipTutorialEnabled,name:`Skip Tutorial Enabled`,args:[]}],ae=e=>new Map(e.map(e=>[e.type,e])),oe=e=>new Map(e.map(e=>[e.name.toLowerCase(),e])),se=ae(T);oe(T);var ce=ae(M);oe(M);var le=ae(N);oe(N);var ue=e=>se.get(e),de=(e,t=!1)=>(t?le:ce).get(e),fe=[...Array.from({length:12},(e,t)=>({value:t,label:`Player ${t+1}`,aliases:[`P${t+1}`]})),{value:a.None,label:`None`,aliases:[`Player 13`]},{value:a.CurrentPlayer,label:`Current Player`},{value:a.Foes,label:`Foes`},{value:a.Allies,label:`Allies`},{value:a.NeutralPlayers,label:`Neutral Players`},{value:a.AllPlayers,label:`All Players`,aliases:[`All players`]},{value:a.Force1,label:`Force 1`},{value:a.Force2,label:`Force 2`},{value:a.Force3,label:`Force 3`},{value:a.Force4,label:`Force 4`},{value:a.Unused1,label:`Unused 1`},{value:a.Unused2,label:`Unused 2`},{value:a.Unused3,label:`Unused 3`},{value:a.Unused4,label:`Unused 4`},{value:a.NonAlliedVictoryPlayers,label:`Non Allied Victory Players`,aliases:[`Non AV Players`]}],pe=[{value:h.Any,label:`Any unit`,aliases:[`Any Unit`]},{value:h.Men,label:`Men`},{value:h.Buildings,label:`Buildings`},{value:h.Factories,label:`Factories`}],me={player:fe,comparison:[{value:o.AtLeast,label:`At least`,aliases:[`atleast`,`>=`]},{value:o.AtMost,label:`At most`,aliases:[`atmost`,`<=`]},{value:o.Exactly,label:`Exactly`,aliases:[`==`]}],switchState:[{value:s.Set,label:`set`,aliases:[`true`]},{value:s.Cleared,label:`not set`,aliases:[`cleared`,`clear`,`false`]}],switchAction:[{value:c.Set,label:`set`},{value:c.Clear,label:`clear`,aliases:[`cleared`]},{value:c.Toggle,label:`toggle`},{value:c.Randomize,label:`randomize`,aliases:[`random`,`randomise`]}],modifier:[{value:l.SetTo,label:`Set To`,aliases:[`setto`,`set`]},{value:l.Add,label:`Add`},{value:l.Subtract,label:`Subtract`,aliases:[`sub`]}],unitState:[{value:u.Enable,label:`enable`,aliases:[`enabled`]},{value:u.Disable,label:`disable`,aliases:[`disabled`]},{value:u.Toggle,label:`toggle`}],order:[{value:d.Move,label:`move`},{value:d.Patrol,label:`patrol`},{value:d.Attack,label:`attack`}],alliance:[{value:f.Enemy,label:`Enemy`},{value:f.Ally,label:`Ally`,aliases:[`Allied`]},{value:f.AlliedVictory,label:`Allied Victory`}],resource:[{value:p.Ore,label:`ore`,aliases:[`minerals`]},{value:p.Gas,label:`gas`},{value:p.OreAndGas,label:`ore and gas`,aliases:[`both`]}],score:[{value:m.Total,label:`Total`},{value:m.Units,label:`Units`},{value:m.Buildings,label:`Buildings`},{value:m.UnitsAndBuildings,label:`Units and buildings`},{value:m.Kills,label:`Kills`},{value:m.Razings,label:`Razings`},{value:m.KillsAndRazings,label:`Kills and razings`},{value:m.Custom,label:`Custom`}],textFlags:[{value:0,label:`Don't Always Display`,aliases:[`Dont Always Display`,`Never Display`]},{value:4,label:`Always Display`}]};function he(e){if(e.length!==4)throw Error(`AI script codes are four characters: "${e}"`);return(e.charCodeAt(0)|e.charCodeAt(1)<<8|e.charCodeAt(2)<<16|e.charCodeAt(3)<<24)>>>0}function ge(e){return String.fromCharCode(e&255,e>>>8&255,e>>>16&255,e>>>24&255)}var _e={TMCu:`Terran Custom Level`,ZMCu:`Zerg Custom Level`,PMCu:`Protoss Custom Level`,TMCx:`Terran Expansion Custom Level`,ZMCx:`Zerg Expansion Custom Level`,PMCx:`Protoss Expansion Custom Level`,TLOf:`Terran Campaign Easy`,TMED:`Terran Campaign Medium`,THIf:`Terran Campaign Difficult`,TSUP:`Terran Campaign Insane`,TARE:`Terran Campaign Area Town`,ZLOf:`Zerg Campaign Easy`,ZMED:`Zerg Campaign Medium`,ZHIf:`Zerg Campaign Difficult`,ZSUP:`Zerg Campaign Insane`,ZARE:`Zerg Campaign Area Town`,PLOf:`Protoss Campaign Easy`,PMED:`Protoss Campaign Medium`,PHIf:`Protoss Campaign Difficult`,PSUP:`Protoss Campaign Insane`,PARE:`Protoss Campaign Area Town`,TLOx:`Expansion Terran Campaign Easy`,TMEx:`Expansion Terran Campaign Medium`,THIx:`Expansion Terran Campaign Difficult`,TSUx:`Expansion Terran Campaign Insane`,TARx:`Expansion Terran Campaign Area Town`,ZLOx:`Expansion Zerg Campaign Easy`,ZMEx:`Expansion Zerg Campaign Medium`,ZHIx:`Expansion Zerg Campaign Difficult`,ZSUx:`Expansion Zerg Campaign Insane`,ZARx:`Expansion Zerg Campaign Area Town`,PLOx:`Expansion Protoss Campaign Easy`,PMEx:`Expansion Protoss Campaign Medium`,PHIx:`Expansion Protoss Campaign Difficult`,PSUx:`Expansion Protoss Campaign Insane`,PARx:`Expansion Protoss Campaign Area Town`,Suic:`Send All Units on Strategic Suicide Missions`,SuiR:`Send All Units on Random Suicide Missions`,Rscu:`Switch Computer Player to Rescue Passive`,"+Vi0":`Turn ON Shared Vision for Player 1`,"+Vi1":`Turn ON Shared Vision for Player 2`,"+Vi2":`Turn ON Shared Vision for Player 3`,"+Vi3":`Turn ON Shared Vision for Player 4`,"+Vi4":`Turn ON Shared Vision for Player 5`,"+Vi5":`Turn ON Shared Vision for Player 6`,"+Vi6":`Turn ON Shared Vision for Player 7`,"+Vi7":`Turn ON Shared Vision for Player 8`,"-Vi0":`Turn OFF Shared Vision for Player 1`,"-Vi1":`Turn OFF Shared Vision for Player 2`,"-Vi2":`Turn OFF Shared Vision for Player 3`,"-Vi3":`Turn OFF Shared Vision for Player 4`,"-Vi4":`Turn OFF Shared Vision for Player 5`,"-Vi5":`Turn OFF Shared Vision for Player 6`,"-Vi6":`Turn OFF Shared Vision for Player 7`,"-Vi7":`Turn OFF Shared Vision for Player 8`,MvTe:`Move Dark Templars to Region`,ClrC:`Clear Previous Combat Data`,Enmy:`Set Player to Enemy`,Ally:`Set Player to Ally`,VluA:`Value This Area Higher`,EnBk:`Enter Closest Bunker`,StTg:`Set Generic Command Target`,StPt:`Make These Units Patrol`,EnTr:`Enter Transport`,ExTr:`Exit Transport`,NuHe:`AI Nuke Here`,HaHe:`AI Harass Here`,JYDg:`Set Unit Order To: Junk Yard Dog`,DWHe:`Disruption Web Here`,ReHe:`Recall Here`},ve=Object.entries(_e).map(([e,t])=>({id:e,name:t}));function ye(e){let t=ge(e);return _e[t]??t}function be(e,t){for(let[n,r]of Object.entries(e))if(r===t)return n}var xe=new Set(`break case catch class const continue debugger default delete do else enum export extends false finally for function if import in instanceof new null return super switch this throw true try typeof var void while with implements interface let package private protected public static yield`.split(` `));function Se(e){let t=e[0].toLowerCase()+e.slice(1);return xe.has(t)?`${t}Is`:t}function P(e){let t=be(n,e);return t===void 0?void 0:Se(t)}function Ce(e){let t=be(r,e);return t===void 0?void 0:Se(t)}var we=new Map(T.filter(e=>e.type!==n.Briefing).map(e=>[P(e.type),e])),Te=new Map(M.map(e=>[Ce(e.type),e])),Ee={comparison:`Comparison`,switchState:`SwitchState`,switchAction:`SwitchAction`,modifier:`Modifier`,unitState:`UnitState`,order:`OrderKind`,alliance:`Alliance`,resource:`ResourceKind`,score:`ScoreKind`},F={comparison:[[o.AtLeast,`>=`],[o.AtMost,`<=`],[o.Exactly,`==`]],switchState:[[s.Set,`set`],[s.Cleared,`cleared`]],switchAction:[[c.Set,`set`],[c.Clear,`clear`],[c.Toggle,`toggle`],[c.Randomize,`randomize`]],modifier:[[l.SetTo,`set`],[l.Add,`add`],[l.Subtract,`subtract`]],unitState:[[u.Enable,`enable`],[u.Disable,`disable`],[u.Toggle,`toggle`]],order:[[d.Move,`move`],[d.Patrol,`patrol`],[d.Attack,`attack`]],alliance:[[f.Enemy,`enemy`],[f.Ally,`ally`],[f.AlliedVictory,`alliedVictory`]],resource:[[p.Ore,`ore`],[p.Gas,`gas`],[p.OreAndGas,`oreAndGas`]],score:[[m.Total,`total`],[m.Units,`units`],[m.Buildings,`buildings`],[m.UnitsAndBuildings,`unitsAndBuildings`],[m.Kills,`kills`],[m.Razings,`razings`],[m.KillsAndRazings,`killsAndRazings`],[m.Custom,`custom`]]};function De(e,t){let n=F[e]?.find(([e])=>e===t);return n?n[1]:me[e]?.find(e=>e.value===t)?.label}function I(e){return(F[e]??[]).map(([,e])=>e)}function Oe(e){switch(e){case`player`:return`Player`;case`unit`:return`UnitType`;case`location`:return`Location`;case`switch`:return`Switch`;case`text`:case`wav`:return`string`;case`aiScript`:return`AiScript | string`;case`count`:return`Count`;case`textFlags`:return`boolean`;case`number`:case`amount`:case`duration`:case`percent`:case`cuwp`:case`slot`:return`number`;default:return`${Ee[e]??`number`} | number`}}function ke(e){let t=e.split(/[^A-Za-z0-9]+/).filter(Boolean).map((e,t)=>t===0?e[0].toLowerCase()+e.slice(1):e[0].toUpperCase()+e.slice(1)).join(``);return/^\d/.test(t)||t===``?`_${t}`:xe.has(t)?`${t}_`:t}function L(e){let t=new Set,n=e=>{let n=ke(e);for(;t.has(n);)n=`${n}_`;return t.add(n),n},r=e.args.filter(e=>e.kind!==`textFlags`).map(e=>({arg:e,name:n(e.label),optional:!1})),i=e.args.find(e=>e.kind===`textFlags`);return i?[...r,{arg:i,name:`always`,optional:!0}]:r}var Ae=/^[A-Za-z_$][A-Za-z0-9_$]*$/;function je(e){return Ae.test(e)?e:JSON.stringify(e)}function R(e,t){return Ae.test(t)?`${e}.${t}`:`${e}[${JSON.stringify(t)}]`}var z=[[v.Preserve,`preserve`],[v.Disabled,`disabled`],[v.IgnoreGameEnd,`ignoreGameEnd`],[v.IgnoreDisplay,`ignoreDisplay`],[v.ConditionsMet,`conditionsMet`],[v.Paused,`paused`],[v.WaitSkipDisabled,`waitSkipDisabled`]],Me=`trigscript`,Ne=new Set([106,111,113,114,131,132,133,154,155,160,167]),Pe=(e,t)=>t===229?!0:t===230?e<106:t===231?e>=106&&e<=202:Ne.has(e),Fe=class{slots;loose;forces;constructor(e,t){this.loose=!e.players,this.slots=e.players?[...new Set(e.players)].filter(e=>e>=0&&e<12).sort((e,t)=>e-t):[t],this.forces=e.forces??{}}of(e,t){if(e<12)return[e];if(e===a.CurrentPlayer)return[t];if(this.loose)return e<=a.Force4?[t]:[e];let n=this.forces[t];switch(e){case a.AllPlayers:return[...this.slots];case a.Force1:case a.Force2:case a.Force3:case a.Force4:return this.slots.filter(t=>this.forces[t]===e-a.Force1);case a.Allies:return this.slots.filter(e=>e!==t&&n!==void 0&&this.forces[e]===n);case a.Foes:case a.NonAlliedVictoryPlayers:return this.slots.filter(e=>e!==t&&(n===void 0||this.forces[e]!==n));case a.NeutralPlayers:return[11];default:return[]}}owns(e,t){if(e[t]||e[a.AllPlayers])return!0;for(let n=0;n<4;n++)if(e[a.Force1+n]&&(this.loose||this.forces[t]===n))return!0;return!1}},Ie=(e,t,n)=>{let r=n>>>0;return t===o.AtLeast?e>=r:t===o.AtMost?e<=r:t===o.Exactly&&e===r},Le=class{units=[];locations=new Map;players;stats;onDeath=()=>{};table=[];uids=[];classOf;properties;killed=new Map;constructor(e,t){this.players=new Fe(e,t),this.classOf=e.unitClass??Pe,this.stats=e.unitStats??(()=>void 0),this.properties=e.properties??(()=>void 0);for(let[t,n]of Object.entries(e.locations??{}))this.locations.set(Number(t),{...n});for(let t of e.units??[])this.make(t)}make(e){let t=0;for(;t<1700&&this.table[t];)t++;if(t>=1700)return null;let n=this.uids[t]===void 0?0:this.uids[t]+1&255;this.uids[t]=n;let r=e.hp??e.maxHp??1,i=e.shields??e.maxShields??0,a={x:0,y:0,energy:0,kills:0,orderId:3,cooldown:0,resources:0,stim:0,ensnare:0,plague:0,lockdown:0,maelstrom:0,irradiate:0,stasis:0,hallucinated:!1,cloaked:!1,burrowed:!1,invincible:!1,underAttack:!1,...e,hp:r,maxHp:e.maxHp??r,shields:i,maxShields:e.maxShields??i,alive:!0,slot:t,uid:n};return this.table[t]=a,this.units.push(a),a}create(e,t,n,r,i){let a=this.stats(e)??{},o=Math.max(1,a.hp??1),s=Math.max(0,a.shields??0),c=(e,t,n)=>t===void 0?e:Math.max(n,Math.ceil(e*Math.min(100,Math.max(0,t))/100));return this.make({type:e,owner:t,x:n,y:r,maxHp:o,maxShields:s,hp:c(o,i?.hpPercent,1),shields:c(s,i?.shieldPercent,0),energy:i?.energyPercent===void 0?a.energy??0:Math.floor(200*Math.min(100,Math.max(0,i.energyPercent))/100),resources:i?.resources??0,cloaked:i?.cloaked??!1,burrowed:i?.burrowed??!1,hallucinated:i?.hallucinated??!1,invincible:i?.invincible??!1})}gone(e,t,n){e.alive&&(e.alive=!1,this.table[e.slot]===e&&(this.table[e.slot]=null),t&&(this.onDeath(e),n!==void 0&&this.killed.set(e.type*4096+n,(this.killed.get(e.type*4096+n)??0)+1)))}at(e,t){let n=this.table[e];return n&&n.uid===t?n:this.units.find(n=>n.slot===e&&n.uid===t)??null}living(){let e=[];for(let t of this.table)t&&e.push(t);return e}typed(e,t){return t===void 0||(t>=229?this.classOf(e.type,t):e.type===t)}inside(e,t){let n=t===void 0||t===0?void 0:this.locations.get(t);return!n||e.x>=n.left&&e.x<=n.right&&e.y>=n.top&&e.y<=n.bottom}matching(e,t,n){return this.living().filter(r=>(!e||e.includes(r.owner))&&this.typed(r,t)&&this.inside(r,n))}centreOf(e){let t=this.locations.get(e);return t?{x:Math.floor((t.left+t.right)/2),y:Math.floor((t.top+t.bottom)/2)}:{x:0,y:0}}centre(e,t,n){let r=this.locations.get(e)??{left:0,top:0,right:0,bottom:0},i=r.right-r.left,a=r.bottom-r.top,o=t-Math.floor(i/2),s=n-Math.floor(a/2);this.locations.set(e,{left:o,top:s,right:o+i,bottom:s+a})}kills(e,t){let n=0;for(let[r,i]of this.killed)e.includes(r%4096)&&(t>=229?this.classOf(Math.floor(r/4096),t):Math.floor(r/4096)===t)&&(n+=i);return n}quantity(e,t){let r=this.players.of(e.player,t);switch(e.type){case n.Bring:return this.matching(r,e.unitId,e.location).length;case n.Command:return this.matching(r,e.unitId).length;case n.Kill:return this.kills(r,e.unitId);default:return}}holds(e,t){let r=this.quantity(e,t);if(r!==void 0)return Ie(r,e.comparison,e.amount);let i=e.type===n.CommandTheMost||e.type===n.CommandTheMostAt,a=e.type===n.CommandTheLeast||e.type===n.CommandTheLeastAt;if(!i&&!a)return;let o=e.type===n.CommandTheMostAt||e.type===n.CommandTheLeastAt?e.location:void 0,s=this.matching([t],e.unitId,o).length;return this.players.slots.filter(e=>e!==t).every(t=>{let n=this.matching([t],e.unitId,o).length;return i?s>=n:s<=n})}some(e,t){return t>0?e.slice(0,t):e}act(e,t,n){let i=this.players.of(e.player,t);switch(e.type){case r.CreateUnit:case r.CreateUnitWithProperties:{let{x:t,y:a}=this.centreOf(e.location),o=e.type===r.CreateUnitWithProperties?this.properties(e.target):void 0;for(let r of i)if(r<12)for(let i=0;i<Math.max(1,e.modifier);i++){let i=this.create(e.unitId,r,t,a,o);i&&n?.push(i)}return!0}case r.KillUnit:for(let t of this.matching(i,e.unitId))this.gone(t,!0);return!0;case r.RemoveUnit:for(let t of this.matching(i,e.unitId))this.gone(t,!1);return!0;case r.KillUnitAt:for(let t of this.some(this.matching(i,e.unitId,e.location),e.modifier))this.gone(t,!0);return!0;case r.RemoveUnitAt:for(let t of this.some(this.matching(i,e.unitId,e.location),e.modifier))this.gone(t,!1);return!0;case r.GiveUnits:{let n=this.players.of(e.target,t)[0];if(n!==void 0&&n<12)for(let t of this.some(this.matching(i,e.unitId,e.location),e.modifier))t.owner=n;return!0}case r.MoveUnit:{let{x:t,y:n}=this.centreOf(e.target);for(let r of this.some(this.matching(i,e.unitId,e.location),e.modifier))r.x=t,r.y=n;return!0}case r.MoveLocation:{let t=this.matching(i,e.unitId,e.location)[0]??this.centreOf(e.location);return this.centre(e.target,t.x,t.y),!0}case r.ModifyHitPoints:for(let t of this.some(this.matching(i,e.unitId,e.location),e.modifier))t.hp=Math.max(1,Math.ceil(t.maxHp*Math.min(100,e.target)/100));return!0;case r.ModifyShields:for(let t of this.some(this.matching(i,e.unitId,e.location),e.modifier))t.shields=Math.ceil(t.maxShields*Math.min(100,e.target)/100);return!0;case r.ModifyEnergy:for(let t of this.some(this.matching(i,e.unitId,e.location),e.modifier))t.energy=Math.floor(200*Math.min(100,e.target)/100);return!0;case r.ModifyResourceAmount:for(let t of this.some(this.matching(i,e.unitId,e.location),e.modifier))t.resources=Math.min(65535,e.target>>>0);return!0;case r.SetInvincibility:for(let t of this.matching(i,e.unitId,e.location))t.invincible=e.modifier===u.Enable||e.modifier!==u.Disable&&!t.invincible;return!0;default:return!1}}},Re=class{triggers;player;current;game;events=[];switches=new Uint8Array(256);deaths=new Map;done=new Set;options;cycle=0;constructor(e,t={}){this.triggers=e,this.options=t,this.player=t.player??t.players?.[0]??e.map(e=>e.players.findIndex((e,t)=>e&&t<12)).find(e=>e>=0)??0,this.current=this.player,this.game=new Le(t,this.player),this.game.onDeath=e=>this.deaths.set(e.type*4096+e.owner,(this.deaths.get(e.type*4096+e.owner)??0)+1>>>0)}death(e,t){let n=0;for(let r of this.game.players.of(e,this.current))n+=this.deaths.get(t*4096+r)??0;return n>>>0}setDeath(e,t,n){for(let r of this.game.players.of(e,this.current))this.deaths.set(t*4096+r,n>>>0)}changeDeath(e,t,n,r){let i=r>>>0;for(let r of this.game.players.of(e,this.current)){let e=this.deaths.get(t*4096+r)??0;this.deaths.set(t*4096+r,(n===l.SetTo?i:n===l.Add?e+i:Math.max(0,e-i))>>>0)}}text(e){let{strings:t}=this.options;if(!t||e===0)return;if(typeof t==`function`)return t(e)??void 0;let n=t[e-1];return n&&`text`in n?n.text:void 0}step(){let e=0,t=this.options.maxRunsPerCycle??1e5;for(let n of this.game.players.slots){this.current=n;for(let i=0;i<this.triggers.length;i++){let a=this.triggers[i];if(this.done.has(i*12+n)||a.flags&v.Disabled||!this.game.players.owns(a.players,n)||!a.conditions.every(e=>this.condition(e)))continue;if(++e>t)throw Error(`More than ${t} trigger runs in one cycle.`);let o=(a.flags&v.Preserve)!==0;for(let e of a.actions)e.flags&_.Disabled||(e.type===r.PreserveTrigger?o=!0:this.action(e,i));o||this.done.add(i*12+n)}}this.current=this.player,this.cycle++}run(e){for(let t=0;t<e;t++)this.step();return this}condition(e){if(e.flags&g.Disabled)return!0;switch(e.type){case n.Always:return!0;case n.Never:return!1;case n.Deaths:return ze(this.death(e.player,e.unitId),e.comparison,e.amount);case n.Switch:return e.comparison===s.Set?this.switches[e.resource]===1:this.switches[e.resource]===0;default:return this.options.condition?.(e,this)??this.game.holds(e,this.current)??!1}}action(e,t){switch(e.type){case r.SetDeaths:this.changeDeath(e.player,e.unitId,e.modifier,e.target);return;case r.SetSwitch:{let t=e.target;if(t<0||t>=256)return;switch(e.modifier){case c.Set:this.switches[t]=1;break;case c.Clear:this.switches[t]=0;break;case c.Toggle:this.switches[t]^=1;break;case c.Randomize:this.switches[t]=(this.options.random??Math.random)()<.5?0:1}return}case r.Comment:return;default:{this.game.act(e,this.current);let n={cycle:this.cycle,trigger:t,player:this.current,action:e},r=this.text(e.text);r!==void 0&&(n.text=r),this.events.push(n)}}}};function ze(e,t,n){let r=n>>>0;switch(t){case o.AtLeast:return e>=r;case o.AtMost:return e<=r;case o.Exactly:return e===r;default:return!1}}function Be(e,t,n={}){return new Re(e,n).run(t)}var Ve=16384,He=1024,Ue=1<<20;function We(e){return typeof e==`number`&&Number.isFinite(e)?Math.min(Ue,Math.max(He,Math.floor(e))):Ve}var Ge=1024,Ke=65536,qe=1<<20;function Je(e){return typeof e==`number`&&Number.isFinite(e)?Math.min(Ke,Math.max(16,Math.floor(e))):Ge}var Ye=[`hallucinated`,`cloaked`,`burrowed`,`invincible`,`underAttack`],Xe=1023,Ze=new Set([`text`,`textVar`,`textOf`,`textAt`,`template`,`textTernary`,`textSlice`,`textPad`,`textRepeat`,`textCall`]),Qe=e=>Ze.has(e.kind),B=(e,t)=>t.text?t.text(e):et(e,t);function $e(e,t){return e.map(e=>e.kind===`number`?{...e,expr:t.num(e.expr)}:e.kind===`value`?{...e,text:B(e.text,t)}:e)}function et(e,t){switch(e.kind){case`textOf`:case`textAt`:return{...e,index:t.num(e.index)};case`template`:return{...e,parts:$e(e.parts,t)};case`textTernary`:return{...e,cond:t.bool(e.cond),whenTrue:B(e.whenTrue,t),whenFalse:B(e.whenFalse,t)};case`textSlice`:return{...e,of:B(e.of,t),...e.start?{start:t.num(e.start)}:{},...e.end?{end:t.num(e.end)}:{}};case`textPad`:return{...e,of:B(e.of,t),width:t.num(e.width),with:B(e.with,t)};case`textRepeat`:return{...e,of:B(e.of,t),count:t.num(e.count)};case`textCall`:return{...e,call:t.call(e.call)};default:return e}}function tt(e,t){switch(e.kind){case`textLength`:return{...e,of:B(e.of,t)};case`textIndexOf`:return{...e,of:B(e.of,t),find:B(e.find,t),...e.from?{from:t.num(e.from)}:{}};case`textCode`:return{...e,of:B(e.of,t),index:t.num(e.index)};case`textCompare`:return{...e,left:B(e.left,t),right:B(e.right,t)};case`textTest`:return{...e,of:B(e.of,t),find:B(e.find,t)};default:return}}function nt(e){return[e.body,...(e.functions??[]).map(e=>e.body)]}function rt(e,t){if(Array.isArray(e)){for(let n of e)rt(n,t);return}if(!e||typeof e!=`object`)return;let n=e;(n.kind===`call`||n.kind===`textCall`)&&n.call&&typeof n.call==`object`&&t(n.call);for(let e of Object.values(n))e&&typeof e==`object`&&rt(e,t)}var it=e=>e.kind===`unitNull`||e.kind===`unitVar`||e.kind===`pick`||e.kind===`unitAt`||e.kind===`call`&&e.call.result?.kind===`unit`,at=e=>{switch(e.kind){case`textLength`:case`textIndexOf`:case`textCode`:return!0;case`const`:return typeof e.value==`number`;case`var`:return!1;case`element`:case`pop`:return!1;case`length`:case`unitPart`:return!0;case`unary`:case`cast`:case`binary`:case`intrinsic`:case`read`:case`randomInt`:case`unitField`:case`tableRead`:case`input`:return!0;case`ternary`:return at(e.whenTrue);case`call`:return e.call.result?.kind===`number`;default:return!1}};function ot(e){let t=[],n=e=>{switch(e.kind){case`declare`:t.push(e.decl),i(e.init);break;case`assign`:c(e.value);break;case`declareArray`:e.init?.forEach(i),e.fill&&i(e.fill);break;case`store`:c(e.index),i(e.value);break;case`push`:i(e.value);break;case`setLength`:c(e.value);break;case`assignBool`:i(e.value);break;case`assignUnit`:s(e.value);break;case`assignText`:o(e.value);break;case`storeText`:c(e.index),o(e.value);break;case`releaseText`:c(e.index);break;case`textLoop`:o(e.of),t.push(e.decl),e.body.forEach(n);break;case`unitLoop`:t.push(e.decl),e.body.forEach(n);break;case`unitWrite`:s(e.unit),i(e.value);break;case`unitDo`:s(e.unit),(e.verb.do===`damage`||e.verb.do===`heal`)&&c(e.verb.amount);break;case`tableWrite`:i(e.value);break;case`if`:i(e.cond),e.then.forEach(n),e.else?.forEach(n);break;case`while`:e.cond&&i(e.cond),e.body.forEach(n);break;case`do`:e.body.forEach(n),i(e.cond);break;case`for`:e.cond&&i(e.cond),e.update.forEach(n),e.body.forEach(n);break;case`unrolled`:e.iterations.forEach(e=>e.forEach(n));break;case`switch`:c(e.value),e.cases.forEach(e=>e.body.forEach(n));break;case`return`:e.value&&i(e.value);break;case`action`:for(let t of e.variables??[])c(t.expr);e.text&&o(e.text);break;case`centerLocation`:c(e.x),c(e.y);break;case`print`:a(e.parts);break;case`call`:r(e.call);break;case`block`:e.body.forEach(n)}},r=e=>{e.result&&t.push(e.result.decl);for(let n of e.params)e.fn||t.push(n.decl),i(n.init);e.body.forEach(n)},i=e=>Qe(e)?o(e):it(e)?s(e):at(e)?c(e):l(e),a=e=>{for(let t of e)t.kind===`number`?c(t.expr):t.kind===`value`&&o(t.text)},o=e=>{switch(e.kind){case`textOf`:case`textAt`:c(e.index);break;case`template`:a(e.parts);break;case`textTernary`:l(e.cond),o(e.whenTrue),o(e.whenFalse);break;case`textSlice`:o(e.of),e.start&&c(e.start),e.end&&c(e.end);break;case`textPad`:o(e.of),c(e.width),o(e.with);break;case`textRepeat`:o(e.of),c(e.count);break;case`textCall`:r(e.call)}},s=e=>{e.kind===`call`?r(e.call):e.kind===`unitAt`&&(c(e.ptr),c(e.epd),c(e.uid))},c=e=>{switch(e.kind){case`unitField`:case`unitPart`:s(e.unit);break;case`element`:c(e.index);break;case`unary`:case`cast`:c(e.expr);break;case`binary`:c(e.left),c(e.right);break;case`ternary`:l(e.cond),c(e.whenTrue),c(e.whenFalse);break;case`intrinsic`:e.args.forEach(c);break;case`randomInt`:c(e.bound);break;case`textLength`:o(e.of);break;case`textIndexOf`:o(e.of),o(e.find),e.from&&c(e.from);break;case`textCode`:o(e.of),c(e.index);break;case`call`:r(e.call)}},l=e=>{switch(e.kind){case`unitAlive`:case`unitFlag`:s(e.unit);break;case`unitSame`:s(e.left),s(e.right);break;case`element`:c(e.index);break;case`test`:c(e.expr);break;case`compare`:c(e.left),c(e.right);break;case`and`:case`or`:e.items.forEach(l);break;case`not`:l(e.expr);break;case`edge`:l(e.cond);break;case`ternary`:l(e.cond),l(e.whenTrue),l(e.whenFalse);break;case`textCompare`:o(e.left),o(e.right);break;case`textTest`:o(e.of),o(e.find);break;case`call`:r(e.call)}};return e.forEach(n),t}var st=6701184,V=(e,t,n)=>({name:e,doc:n,base:st,stride:4,width:`bit`,bit:t,boolean:!0}),ct={unit:[{name:`maxHp`,doc:`Hit points of units made after the write.`,base:6693712,stride:4,width:4,scale:256},{name:`maxShields`,doc:`Shield points of units made after the write.`,base:6688256,stride:2,width:2},{name:`armor`,doc:`Armour, before upgrades.`,base:6684360,stride:1,width:1},{name:`minerals`,doc:`What the unit costs in minerals.`,base:6699144,stride:2,width:2},{name:`gas`,doc:`What the unit costs in gas.`,base:6683904,stride:2,width:2},{name:`buildTime`,doc:`Seconds to build, on the game's clock; a fraction is fine when the number is known when you build (1.5).`,base:6685736,stride:2,width:2,scale:15},{name:`supplyUsed`,doc:`Supply the unit takes; a Zergling is 0.5.`,base:6700264,stride:1,width:1,scale:2},{name:`supplyProvided`,doc:`Supply the unit provides, for the ones made after the write.`,base:6702792,stride:1,width:1,scale:2},{name:`sight`,doc:`Sight range in tiles, up to 11.`,base:6697528,stride:1,width:1},{name:`groundWeapon`,doc:`The weapon used against ground units (weapons.*); units already on the map switch too.`,base:6698680,stride:1,width:1,type:`Weapon`},{name:`airWeapon`,doc:`The weapon used against air units (weapons.*); weapons.None for none.`,base:6690528,stride:1,width:1,type:`Weapon`},{name:`size`,doc:`What concussive and explosive damage scale by: 0 independent, 1 small, 2 medium, 3 large.`,base:6693248,stride:1,width:1},{name:`speed`,doc:`Top speed in pixels a frame (a Marine walks at 4, a Vulture at 6.67), for units made after the write: the type's flingy is switched to table control and given this speed, with acceleration and stopping distance to match. A fraction is fine when the number is known when you build.`,base:7118584,stride:4,width:4,scale:256,writeOnly:!0,special:`speed`},{name:`name`,doc:`The name shown for the type: text known when you build.`,base:6685280,stride:2,width:2,writeOnly:!0,special:`name`,type:`string`},V(`detector`,15,`Sees cloaked and burrowed units in its sight range.`),V(`permanentCloak`,22,`Always cloaked, for units made after the write.`),V(`cloakable`,9,`Has the ability to cloak (the flag alone gives no button).`),V(`burrowable`,20,`Has the ability to burrow (the flag alone gives no button).`),V(`regenerates`,7,`Hit points climb back over time, as a Zerg unit's do; units already on the map follow at once.`),V(`invincible`,29,`Cannot be hurt, for units made after the write.`),V(`hero`,6,`A hero unit.`),V(`organic`,16,`A Medic can heal it; units already on the map follow.`),V(`mechanical`,30,`An SCV can repair it; units already on the map follow.`),V(`robotic`,14,`Immune to the spells robotic units are immune to.`)],weapon:[{name:`damage`,doc:`Damage of one hit, before upgrades.`,base:6647472,stride:2,width:2},{name:`bonus`,doc:`Extra damage per upgrade level.`,base:6649464,stride:2,width:2},{name:`cooldown`,doc:`Frames between attacks.`,base:6647736,stride:1,width:1},{name:`factor`,doc:`Hits per attack.`,base:6644960,stride:1,width:1},{name:`range`,doc:`Range in pixels, 32 a tile.`,base:6648944,stride:4,width:4},{name:`minRange`,doc:`The least range in pixels: nothing closer can be shot.`,base:6646296,stride:4,width:4}],upgrade:[{name:`minerals`,doc:`The first level's mineral cost.`,base:6641472,stride:2,width:2},{name:`gas`,doc:`The first level's gas cost.`,base:6641728,stride:2,width:2},{name:`time`,doc:`Seconds the first level takes, on the game's clock.`,base:6642560,stride:2,width:2,scale:15},{name:`maxLevel`,doc:`How many times it can be researched. Read only: the game took no write.`,base:6641408,stride:1,width:1,readonly:!0}],tech:[{name:`minerals`,doc:`Mineral cost of the research.`,base:6644296,stride:2,width:2},{name:`gas`,doc:`Gas cost of the research.`,base:6644208,stride:2,width:2},{name:`time`,doc:`Seconds the research takes, on the game's clock.`,base:6644696,stride:2,width:2,scale:15},{name:`energy`,doc:`Energy a cast takes.`,base:6644608,stride:2,width:2}],player:[{name:`color`,doc:`The colour the player's units and minimap dots are drawn in: one of colors.*, or "teal". Takes effect at once.`,base:5774710,stride:1,width:1,writeOnly:!0,special:`color`,type:`PlayerColor | ColorName`},{name:`upgrades`,doc:`The player's level of each upgrade: stats(P1).upgrades[upgrades.TerranInfantryWeapons] = 3.`,base:5821104,stride:46,width:1,keyed:{kind:`upgrade`,type:`Upgrade`}},{name:`researched`,doc:`Whether the player has each technology: stats(P1).researched[techs.Lockdown] = true.`,base:5820228,stride:24,width:1,boolean:!0,keyed:{kind:`tech`,type:`Tech`}}]},lt={red:111,blue:165,teal:159,purple:164,orange:179,brown:19,white:255,yellow:135,green:117},ut=e=>e===`bit`?1:e===4?4294967295:2**(e*8)-1,dt={left:`L`,right:`R`,middle:`M`},H={Space:`SPACE`,Enter:`ENTER`,Escape:`ESC`,Tab:`TAB`,Shift:`SHIFT`,Ctrl:`LCTRL`,Alt:`LALT`,Left:`LEFT`,Up:`UP`,Right:`RIGHT`,Down:`DOWN`,Backspace:`BACK`,Delete:`DELETE`,Insert:`INSERT`,Home:`HOME`,End:`END`,PageUp:`PGUP`,PageDown:`PGDN`},ft=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split(``),pt=`0123456789`.split(``),mt={F6:`StarCraft: Remastered keeps F6 to itself and reports no press of it (played and seen); F7 and F8 work`},ht=[...ft,...pt,...Array.from({length:12},(e,t)=>`F${t+1}`).filter(e=>!(e in mt)),...Object.keys(H),...pt.map(e=>`Numpad${e}`)],gt=new Map(ht.map(e=>[e.toLowerCase(),e]));function _t(e){return gt.get(e.trim().toLowerCase())??null}function vt(e){return H[e]??e.toUpperCase()}var yt=1048575,bt=/^[A-Za-z_][A-Za-z0-9_]*$/,xt=e=>new TextEncoder().encode(e).length;function St(e){if(e===``)throw Error(`chatted: the pattern is what the player types, such as "-give {n}".`);if(/[\r\n\0]/.test(e))throw Error(`chatted: a typed line is one line.`);let t=[],n=[],r=``;for(let i=0;i<e.length;i++){let a=e[i];if(a===`}`)throw Error(`chatted: a } without its {. A capture is {name}, {name:unit} or {name:word|word}.`);if(a!==`{`){r+=a;continue}let o=e.indexOf(`}`,i);if(o<0)throw Error(`chatted: a { without its }. A capture is {name}, {name:unit} or {name:word|word}.`);let s=e.slice(i+1,o);i=o;let c=s.indexOf(`:`),l=c<0?s:s.slice(0,c),u=c<0?``:s.slice(c+1);if(!bt.test(l)||l.startsWith(`__`))throw Error(`chatted: {${s}} needs a name to be read by: {n}, {unit:unit}, {kind:ore|gas}.`);if(n.some(e=>e.name===l))throw Error(`chatted: two captures are called ${l}.`);if(r===``)throw Error(t.length===0?`chatted: a pattern starts with its own word, so that ordinary talk is not taken for it: "-give {n}".`:`chatted: {${l}} follows another capture with nothing between them; put a space or a word there.`);if(t.push(r),r=``,u===``)n.push({name:l,kind:`number`});else if(u===`unit`)n.push({name:l,kind:`unit`});else{let e=u.split(`|`);if(u===`number`||u===`word`)throw Error(`chatted: {${l}} alone is a number; {${l}:unit} a unit type; {${l}:ore|gas} one of the words listed.`);if(e.some(e=>e===``||/\s/.test(e)))throw Error(`chatted: {${s}}: each word of the list is one word, without spaces.`);if(new Set(e.map(e=>e.toLowerCase())).size!==e.length)throw Error(`chatted: {${s}} lists a word twice.`);n.push({name:l,kind:`word`,words:e})}t.push(n.length-1)}if(r!==``&&t.push(r),n.length>3)throw Error(`chatted: a pattern reads at most 3 values.`);let i=n.findIndex(e=>e.kind===`unit`);if(i>=0&&(i!==n.length-1||typeof t[t.length-1]==`string`))throw Error(`chatted: a unit's name has spaces in it, so {…:unit} reads the rest of the line and comes last.`);if(xt(t.filter(e=>typeof e==`string`).join(``))>78)throw Error(`chatted: the game lets a player type 78 bytes; the pattern's own text is longer.`);return{pattern:e,segments:t,captures:n}}function Ct(e,t,n){let r=0,i=[];for(let a=0;a<e.segments.length;a++){let o=e.segments[a];if(typeof o==`string`){if(!t.startsWith(o,r))return null;r+=o.length;continue}let s=e.captures[o];if(s.kind===`number`){let e=/^\d+/.exec(t.slice(r));if(!e)return null;r+=e[0].length,i.push(Math.min(Number(e[0]),yt))}else if(s.kind===`unit`){let e=n(t.slice(r).toLowerCase());if(e===void 0)return null;r=t.length,i.push(e)}else{let e=/^\S+/.exec(t.slice(r)),n=e?s.words.findIndex(t=>t.toLowerCase()===e[0].toLowerCase()):-1;if(!e||n<0)return null;r+=e[0].length,i.push(n)}}return r===t.length?i:null}function wt(e){let t=[],n=!1,r=null,i=e=>{e.kind===`call`?l(e.call):e.kind===`pick`&&e.mouse!==void 0?(n=!0,r??=e.at):e.kind===`unitAt`&&(c(e.ptr),c(e.epd),c(e.uid))},a=e=>Qe(e)?s(e):it(e)?i(e):c(e),o={num:e=>(c(e),e),bool:e=>(c(e),e),call:e=>(l(e),e)},s=e=>{et(e,o)},c=e=>{if(!tt(e,o))switch(e.kind){case`input`:t.push(e.input),r??=e.at,e.input.source===`mouse`&&(n=!0);break;case`unitField`:case`unitPart`:case`unitAlive`:case`unitFlag`:i(e.unit);break;case`unitSame`:i(e.left),i(e.right);break;case`unary`:case`cast`:c(e.expr);break;case`element`:c(e.index);break;case`binary`:case`compare`:c(e.left),c(e.right);break;case`ternary`:c(e.cond),c(e.whenTrue),c(e.whenFalse);break;case`intrinsic`:e.args.forEach(c);break;case`randomInt`:c(e.bound);break;case`and`:case`or`:e.items.forEach(c);break;case`not`:case`test`:c(e.expr);break;case`edge`:c(e.cond);break;case`call`:l(e.call)}},l=e=>{for(let t of e.params)a(t.init);e.body.forEach(u)},u=e=>{switch(e.kind){case`declare`:e.failed||a(e.init);break;case`assign`:case`assignBool`:c(e.value);break;case`declareArray`:e.init?.forEach(c),e.fill&&c(e.fill);break;case`store`:c(e.index),c(e.value);break;case`push`:case`setLength`:c(e.value);break;case`assignUnit`:i(e.value);break;case`assignText`:s(e.value);break;case`storeText`:c(e.index),s(e.value);break;case`releaseText`:c(e.index);break;case`textLoop`:s(e.of),e.body.forEach(u);break;case`unitLoop`:e.body.forEach(u);break;case`unitWrite`:i(e.unit),c(e.value);break;case`unitDo`:i(e.unit),(e.verb.do===`damage`||e.verb.do===`heal`)&&c(e.verb.amount);break;case`tableWrite`:a(e.value);break;case`centerLocation`:c(e.x),c(e.y);break;case`if`:c(e.cond),e.then.forEach(u),e.else?.forEach(u);break;case`while`:e.cond&&c(e.cond),e.body.forEach(u);break;case`do`:e.body.forEach(u),c(e.cond);break;case`for`:e.cond&&c(e.cond),e.update.forEach(u),e.body.forEach(u);break;case`unrolled`:e.iterations.forEach(e=>e.forEach(u));break;case`switch`:c(e.value),e.cases.forEach(e=>e.body.forEach(u));break;case`return`:e.value&&a(e.value);break;case`action`:for(let t of e.variables??[])c(t.expr);e.text&&s(e.text);break;case`print`:$e(e.parts,o);break;case`call`:l(e.call);break;case`block`:e.body.forEach(u)}};for(let t of e)for(let e of nt(t))e.forEach(u);return{sources:t,mouse:n,at:r}}var U={key:e=>`tsin_key${e}`,button:e=>`tsin_button${e}`,chatLocal:`tsin_chat`,chatIn:`tsin_chat_in`,captureLocal:e=>`tsin_capture${e}`,captureIn:e=>`tsin_capture${e}_in`,heard:`tsin_heard`,pointer:`tsin_pointer`,length:`tsin_length`,pattern:`tsin_pattern`};function Tt(e){let t={};e.chats.length&&(t.chatEvent={__addr__:U.heard,__ptrAddr__:U.pointer,__lenAddr__:U.length,__patternAddr__:U.pattern});let n={QCUnit:58,QCLoc:e.qcLocation,QCPlayer:11,QCDebug:`false`};if(e.keys.forEach((e,t)=>{n[`KeyPress(${vt(e)}); NotTyping`]=`${U.key(t)}, 1`}),e.buttons.forEach((e,t)=>{n[`MouseDown(${dt[e]})`]=`${U.button(t)}, 1`}),e.mouseBase!==null&&(n.Mouse=e.mouseBase),e.chats.length){let t=`${U.chatLocal}.AtLeast(1)`;n[`${t}; val, ${U.chatLocal}`]=U.chatIn;let r=Math.max(0,...e.chats.map(e=>e.captures.length));for(let e=0;e<r;e++)n[`${t}; val, ${U.captureLocal(e)}`]=U.captureIn(e)}return{before:t,after:{MSQC:n}}}function Et(e,t){let n=e?Tt(e):{before:{},after:{}};return{...n.before,trigscript:{ir:t},...n.after,eudTurbo:{}}}var W=4294967296,Dt={hp:16777215,shields:16777215,energy:255,kills:255,cooldown:255,resources:65535,stim:255,ensnare:255,plague:255,lockdown:255,maelstrom:255,irradiate:255,stasis:255},Ot=class extends Error{},kt=class extends Error{},At=new TextEncoder,G=e=>At.encode(e).length;function jt(e){let t=4;for(;t<Math.floor(e/4)+2;)t*=2;return t}function Mt(e,t){let n=``,r=0;for(let i of e){let e=G(i);if(r+e>t)break;n+=i,r+=e}return n}function Nt(e,t){let n=[...e],r=[...t];for(let e=0;e<n.length&&e<r.length;e++){let t=n[e].codePointAt(0)-r[e].codePointAt(0);if(t)return t}return n.length-r.length}var Pt=()=>({ids:new Set,vars:new Map,unitVars:new Map,textVars:new Map,arrays:new Map}),Ft=class extends Map{ids;common;constructor(e,t){super(),this.ids=e,this.common=t}get(e){return this.ids.has(e)?this.common.get(e):super.get(e)}has(e){return this.ids.has(e)?this.common.has(e):super.has(e)}set(e,t){return this.ids.has(e)?this.common.set(e,t):super.set(e,t),this}},It=class{vars;unitVars;textVars;bits=new Map;unsigned=new Set;latches=new Map;arrays=new class extends Map{run;get(e){let t=super.get(e);return t?.decl.through?this.run.inner(t.decl,e=>super.get(e)):t}};body;done=!1;steps=0;depth=0;apart=[];sim;index;program;player;common;constructor(e,t,n,r,i=Pt()){this.sim=e,this.index=t,this.program=n,this.player=r,this.common=i,this.vars=new Ft(i.ids,i.vars),this.unitVars=new Ft(i.ids,i.unitVars),this.textVars=new Ft(i.ids,i.textVars),this.arrays.run=this;for(let e of n.arrays??[]){let t=(e.shared?i.arrays.get(e.id):void 0)??{decl:e,room:0,cells:e.values?[...e.values]:e.dynamic?[]:Array(e.length).fill(e.kind===`number`&&0)};e.shared&&i.arrays.set(e.id,t),this.arrays.set(e.id,t)}this.body=this.run()}*run(){return yield*this.block(this.program.body,{}),`next`}tick(){if(!(this.done||!this.body)){this.steps=0;try{this.drive()&&(this.done=!0,this.body=null)}catch(e){if(this.apart.length=0,!(e instanceof kt))throw e;this.done=!0,this.body=null,this.depth=0}}}drive(){let e;for(;;){let t=(this.apart[this.apart.length-1]??this.body).next(e);if(e=void 0,t.done){if(!this.apart.length)return!0;this.apart.pop(),e=t.value}else if(t.value===void 0)return!1;else this.apart.push(t.value.run)}}step(){if(++this.steps>this.sim.maxSteps)throw new Ot(`A program ran more than ${this.sim.maxSteps} statements in one frame: is there a loop with no sleep() in it?`)}read(e,t){let n=this.vars.get(e);if(n===void 0)throw Error(`The variable ${e} was read before it was declared${t?` (line ${t.line})`:``}.`);return n}store(e,t){if(typeof t==`number`){let n=this.bits.get(e);this.vars.set(e,n?Math.min(t>>>0,2**n-1):this.unsigned.has(e)?t>>>0:t|0)}else this.vars.set(e,t)}kept(e,t){return typeof e==`number`?t.bits?Math.min(e>>>0,2**t.bits-1):t.unsigned?e>>>0:e|0:e}*cell(e,t,n,r){let i=this.arrays.get(e);if(!i)throw Error(`The array ${e} is not one of the program's (line ${n.line}).`);let a=yield*this.num(t);if(i.decl.slice){let e=this.arrays.get(i.decl.slice.of);if(!e)throw Error(`The array ${i.decl.slice.of} is not one of the program's (line ${n.line}).`);let t=(Number(this.read(i.decl.slice.offset))|0)+a;if(a>=0&&a<i.decl.length&&t>=0&&t<(e.decl.dynamic?e.cells.length:e.decl.length))return{decl:i.decl,cells:e.cells,i:t};this.sim.faults.push({cycle:this.sim.cycle,program:this.index,at:n,message:`${i.decl.name}[${a}] is past the end of the row (its length is ${i.decl.length}): ${r}.`});return}let o=i.decl.dynamic?i.cells.length:i.decl.length;if(a>=0&&a<o)return{...i,i:a};this.sim.faults.push({cycle:this.sim.cycle,program:this.index,at:n,message:`${i.decl.name}[${a}] is past the end of the array (its length is ${o}): ${r}.`})}grow(e,t,n){if(t<=e.room)return!0;let r=Math.max(e.room,4);for(;r<t;)r*=2;return this.sim.heap.take(r)?(e.room&&this.sim.heap.give(e.room),e.room=r,!0):(this.sim.faults.push({cycle:this.sim.cycle,program:this.index,at:n,message:`Out of memory: ${e.decl.name} could not grow to ${t} cells (the heap the programs' arrays share is ${this.sim.heap.cells} cells; the script's settings set it).`}),!1)}inner(e,t,n=!1){let r=()=>({decl:e,cells:[],room:0}),i=t(e.through.ptr),a=Number(this.read(e.through.index))|0;if(!i||a<0||a>=i.cells.length)return r();let o=Number(i.cells[a]);if(n){let e=this.sim.inner.get(o);return e?.room&&this.sim.heap.give(e.room),this.sim.inner.delete(o),i.cells[a]=0,r()}if(!o){let t={decl:e,cells:[],room:0};return i.cells[a]=++this.sim.lastInner,this.sim.inner.set(this.sim.lastInner,t),t}let s=this.sim.inner.get(o);return s?(s.decl=e,s):(this.sim.faults.push({cycle:this.sim.cycle,program:this.index,at:e.at,message:`${e.name} was given back — the row that held it was popped, cut off or declared again — and this is a copy of its handle: in the game it reads whatever has the block now.`}),r())}declare(e){if(e.shared&&this.program.perPlayer&&this.common.ids.add(e.id),e.kind===`unit`){this.unitVars.set(e.id,null);return}if(e.kind===`text`){this.textVars.has(e.id)||this.textVars.set(e.id,{s:``,room:0});return}e.bits&&this.bits.set(e.id,e.bits),e.unsigned&&this.unsigned.add(e.id),this.vars.set(e.id,e.kind===`number`&&0)}*unit(e){switch(e.kind){case`unitNull`:return null;case`unitVar`:return this.unitVars.get(e.id)??null;case`pick`:return this.sim.pick(e.by,e.filter,e.near,e.mouse,e.within);case`unitAt`:{let t=(yield*this.num(e.ptr))>>>0;yield*this.num(e.epd);let n=(yield*this.num(e.uid))>>>0;return t>=1?this.sim.game.at(t-1,n):null}case`call`:return yield*this.call(e.call),e.call.result?this.unitVars.get(e.call.result.decl.id)??null:null}}*living(e){let t=yield*this.unit(e);return t?.alive?t:null}*unitDo(e,t,n){let i=yield*this.living(e),a=t.do===`damage`||t.do===`heal`?yield*this.amount(t.amount):0;if(i)switch(t.do){case`kill`:case`remove`:this.sim.game.gone(i,t.do===`kill`),this.sim.unitEvent(this,t.do===`kill`?r.KillUnit:r.RemoveUnit,i,n);break;case`give`:{let e=this.sim.slotOf(t.to);e<12&&(i.owner=e);break}case`order`:this.sim.unitEvent(this,r.Order,i,n,{location:t.target,text:t.order});break;case`locate`:this.sim.centre(t.location,i.x,i.y);break;case`damage`:case`heal`:{let e=t.percent?Math.floor(i.maxHp*256*a/100):a*256,o=t.do===`damage`?Math.max(0,i.hp*256-e):Math.min(i.maxHp*256,i.hp*256+e);i.hp=Math.ceil(o/256),i.hp===0&&(this.sim.game.gone(i,!0),this.sim.unitEvent(this,r.KillUnit,i,n));break}}}*num(e){switch(e.kind){case`const`:return e.value|0;case`var`:return Number(this.read(e.id))|0;case`element`:{let t=yield*this.cell(e.array,e.index,e.at,`it reads 0`);return t?Number(t.cells[t.i])|0:0}case`length`:return this.arrays.get(e.array)?.cells.length??0;case`pop`:return Number(this.arrays.get(e.array)?.cells.pop()??0)|0;case`unary`:return-(yield*this.num(e.expr))|0;case`cast`:return yield*this.num(e.expr);case`binary`:{let t=yield*this.num(e.left),n=yield*this.num(e.right);switch(e.op){case`+`:return t+n|0;case`-`:return t-n|0;case`*`:return Math.imul(t,n);case`/`:return n===0?0:e.unsigned?Math.floor((t>>>0)/(n>>>0))|0:t/n|0;case`%`:return n===0?0:e.unsigned?(t>>>0)%(n>>>0)|0:t%n|0;case`&`:return t&n;case`|`:return t|n;case`^`:return t^n;case`<<`:return n>>>0>=32?0:t<<n;case`>>`:return n>>>0>=32?t<0?-1:0:t>>n;case`>>>`:return n>>>0>=32?0:t>>>n|0}return 0}case`read`:return this.sim.read(e.read)|0;case`unitField`:{let t=yield*this.living(e.unit);return t?t[e.field]|0:0}case`unitPart`:{let t=yield*this.unit(e.unit);return t?e.part===`uid`?t.uid:t.slot+1:0}case`tableRead`:return this.sim.tableRead(e.cell)|0;case`input`:return this.sim.input(e.input)|0;case`randomInt`:{let t=(yield*this.num(e.bound))>>>0;return t===0?0:Math.min(t-1,Math.floor(this.sim.random()*t))|0}case`ternary`:return(yield*this.bool(e.cond))?yield*this.num(e.whenTrue):yield*this.num(e.whenFalse);case`intrinsic`:{let t=[];for(let n of e.args)t.push(yield*this.num(n));if(e.name===`abs`)return Math.abs(t[0])|0;let n=e.unsigned?t.map(e=>e>>>0):t;return(e.name===`min`?Math.min(...n):Math.max(...n))|0}case`call`:return Number(yield*this.call(e.call))|0;case`textLength`:{let t=yield*this.text(e.of);return this.used(t),[...t.s].length}case`textIndexOf`:{let t=yield*this.text(e.of),n=yield*this.text(e.find),r=e.from?Math.max(0,yield*this.num(e.from)):0;this.used(t,n);let i=[...t.s],a=t.s.indexOf(n.s,i.slice(0,r).join(``).length);return a<0||r>i.length?n.s===``&&r<=i.length?r:-1:[...t.s.slice(0,a)].length}case`textCode`:{let t=yield*this.text(e.of),n=yield*this.num(e.index);return this.used(t),[...t.s][n]?.codePointAt(0)??-1}}}made(e,t,n=G(e)){G(e)>1023&&(this.sim.faults.push({cycle:this.sim.cycle,program:this.index,at:t,message:`This text came to ${n.toLocaleString(`en-US`)} bytes, and a text that is made holds ${Xe.toLocaleString(`en-US`)}: it is cut off there, as it is in the game.`}),e=Mt(e,Xe));let r=jt(G(e));return this.sim.heap.take(r)?{s:e,room:r,taken:!0}:(this.sim.faults.push({cycle:this.sim.cycle,program:this.index,at:t,message:`Out of memory: no room for this text (the heap the programs' arrays and texts share is ${this.sim.heap.cells} cells; the script's settings set it). It is empty instead, as it is in the game.`}),{s:``,room:0,taken:!0})}used(...e){for(let t of e)t.taken&&t.room&&this.sim.heap.give(t.room)}owned(e,t){if(e.taken||!e.room)return{s:e.s,room:e.room};let n=this.made(e.s,t);return{s:n.s,room:n.room}}*parts(e,t){let n=``;for(let r of e)if(r.kind===`number`)n+=String(r.unsigned?yield*this.amount(r.expr):yield*this.num(r.expr));else if(r.kind===`value`){let e=yield*this.text(r.text);t.push(e),n+=e.s}else n+=this.sim.partText(r);return n}*text(e){switch(e.kind){case`text`:return{s:e.text,room:0,taken:!0};case`textVar`:{let t=this.textVars.get(e.id);if(!t)throw Error(`The variable ${e.id} was read before it was declared.`);return{...t,taken:!1}}case`textAt`:{let t=yield*this.cell(e.addr,e.index,e.at,`it reads as no text`),n=t?this.cellTexts.get(t.cells[t.i]):void 0;return{s:n?.s??``,room:n?.room??0,taken:!1}}case`textOf`:{let t=this.arrays.get(e.array),n=yield*this.num(e.index),r=t?.decl.texts?.[n];return r===void 0&&this.sim.faults.push({cycle:this.sim.cycle,program:this.index,at:e.at,message:`${t?.decl.name??e.array}[${n}] is past the end of the list (its length is ${t?.decl.texts?.length??0}): it reads an empty text.`}),{s:r??``,room:0,taken:!0}}case`template`:{let t=[],n=yield*this.parts(e.parts,t),r=this.made(n,e.at);return this.used(...t),r}case`textTernary`:{let t=(yield*this.bool(e.cond))?yield*this.text(e.whenTrue):yield*this.text(e.whenFalse);return{...this.owned(t,e.at),taken:!0}}case`textSlice`:{let t=yield*this.text(e.of),n=[...t.s],r=e.start?Math.min(n.length,Math.max(0,yield*this.num(e.start))):0,i=e.end?Math.min(n.length,Math.max(0,yield*this.num(e.end))):n.length,a=this.made(n.slice(r,Math.max(r,i)).join(``),e.at);return this.used(t),a}case`textPad`:{let t=yield*this.text(e.of),n=yield*this.num(e.width),r=yield*this.text(e.with),i=[...t.s],a=[...r.s],o=``;if(a.length)for(let e=0;i.length+e<n;e++)o+=a[e%a.length];let s=this.made(e.side===`start`?o+t.s:t.s+o,e.at);return this.used(t,r),s}case`textRepeat`:{let t=yield*this.text(e.of),n=yield*this.num(e.count),r=this.made(n>=1?t.s.repeat(Math.min(n,Math.ceil((Xe+1)/Math.max(1,G(t.s))))):``,e.at,Math.max(0,n)*G(t.s));return this.used(t),r}case`textCall`:{yield*this.call(e.call);let t=e.call.result?this.textVars.get(e.call.result.decl.id):void 0;if(!t)return{s:``,room:0,taken:!0};let n={...t,taken:!0};return t.room=0,n}}}cellTexts=new Map;lastCellText=0;releaseCellText(e){let t=e?this.cellTexts.get(e):void 0;t&&(t.room&&this.sim.heap.give(t.room),this.cellTexts.delete(e))}*putText(e,t,n){let r=this.owned(yield*this.text(t),n),i=this.textVars.get(e);i?.room&&this.sim.heap.give(i.room),this.textVars.set(e,r)}shown(e,t,n){return!e.room||G(e.s)<=255?e.s:(this.sim.faults.push({cycle:this.sim.cycle,program:this.index,at:t,message:`This text is ${G(e.s)} bytes, and ${n} shows 255 of a text that was made: it is cut off there, as it is in the game.`}),Mt(e.s,255))}*amount(e){return(yield*this.num(e))>>>0}*bool(e){switch(e.kind){case`const`:return e.value;case`cond`:return this.sim.condition(e.record);case`var`:return!!this.read(e.id);case`element`:{let t=yield*this.cell(e.array,e.index,e.at,`it reads false`);return t?!!t.cells[t.i]:!1}case`pop`:return!!(this.arrays.get(e.array)?.cells.pop()??!1);case`test`:return(yield*this.num(e.expr))!==0;case`compare`:{let t=yield*this.num(e.left),n=yield*this.num(e.right);switch((e.unsigned===!0||e.unsigned===`left`)&&(t>>>=0),(e.unsigned===!0||e.unsigned===`right`)&&(n>>>=0),e.op){case`<`:return t<n;case`<=`:return t<=n;case`>`:return t>n;case`>=`:return t>=n;case`==`:return t===n;case`!=`:return t!==n}return!1}case`and`:for(let t of e.items)if(!(yield*this.bool(t)))return!1;return!0;case`or`:for(let t of e.items)if(yield*this.bool(t))return!0;return!1;case`not`:return!(yield*this.bool(e.expr));case`random`:return this.sim.random()<.5;case`unitAlive`:return(yield*this.living(e.unit))!==null;case`unitSame`:{let t=yield*this.unit(e.left),n=yield*this.unit(e.right);return t!==null&&t===n}case`unitFlag`:{let t=yield*this.living(e.unit);return t?t[e.flag]:!1}case`edge`:{let t=yield*this.bool(e.cond),n=this.latches.get(e)??!1;return t?!n&&(this.latches.set(e,!0),!0):(e.edge===`rose`&&this.latches.set(e,!1),!1)}case`ternary`:return(yield*this.bool(e.cond))?yield*this.bool(e.whenTrue):yield*this.bool(e.whenFalse);case`call`:return!!(yield*this.call(e.call));case`textCompare`:{let t=yield*this.text(e.left),n=yield*this.text(e.right);this.used(t,n);let r=Nt(t.s,n.s);return e.op===`==`?r===0:e.op===`!=`?r!==0:e.op===`<`?r<0:e.op===`<=`?r<=0:e.op===`>`?r>0:r>=0}case`textTest`:{let t=yield*this.text(e.of),n=yield*this.text(e.find);return this.used(t,n),e.test===`startsWith`?t.s.startsWith(n.s):e.test===`endsWith`?t.s.endsWith(n.s):t.s.includes(n.s)}}}*init(e,t){return t===`number`?yield*this.num(e):yield*this.bool(e)}*put(e,t,n){if(e.kind===`text`||Qe(t)){yield*this.putText(e.id,t,n??e.at??{file:``,line:0,column:0});return}e.kind===`unit`?this.unitVars.set(e.id,yield*this.unit(t)):this.store(e.id,yield*this.init(t,e.kind))}*call(e){e.result&&this.declare(e.result.decl);let t=e.fn?this.program.functions?.find(t=>t.id===e.fn):void 0;if(e.fn&&!t)throw Error(`The function ${e.fn} is not one of the program's (line ${e.at.line}).`);let n;if(t){let t=[];for(let n of e.params)t.push(n.decl.kind===`unit`?yield*this.unit(n.init):n.decl.kind===`text`?this.owned(yield*this.text(n.init),e.at):yield*this.init(n.init,n.decl.kind));e.saves&&(n=this.keep(e)),e.params.forEach((e,n)=>{if(this.declare(e.decl),e.decl.kind===`unit`)this.unitVars.set(e.decl.id,t[n]);else if(e.decl.kind===`text`){let r=this.textVars.get(e.decl.id);r?.room&&this.sim.heap.give(r.room),this.textVars.set(e.decl.id,t[n])}else this.store(e.decl.id,t[n])})}else for(let t of e.params)this.declare(t.decl),yield*this.put(t.decl,t.init);let r={fn:{result:e.result?.decl}},i=n&&t?yield{run:this.block(t.body,r)}:yield*this.block(t?t.body:e.body,r);if(i===`break`||i===`continue`)throw Error(`${i} inside a function reached its end (line ${e.at.line}).`);return n&&this.bringBack(n),e.result&&e.result.kind!==`unit`&&e.result.kind!==`text`?this.read(e.result.decl.id):0}keep(e){let t=e.saves;if(this.depth>=this.sim.stackDepth)throw this.sim.faults.push({cycle:this.sim.cycle,program:this.index,at:e.at,message:`Stack overflow in ${t.within}: ${this.sim.stackDepth.toLocaleString(`en-US`)} calls deep, which is as deep as the script's settings allow. The program has stopped, as it does in the game.`}),new kt;this.depth++;let n={vars:[],units:[],texts:[],arrays:[]};for(let e of t.vars)this.textVars.has(e)?(n.texts.push([e,this.textVars.get(e)]),this.textVars.set(e,{s:``,room:0})):this.unitVars.has(e)?n.units.push([e,this.unitVars.get(e)??null]):this.vars.has(e)&&n.vars.push([e,this.vars.get(e)]);for(let e of t.arrays){let t=this.arrays.get(e);t&&(n.arrays.push({a:t,cells:t.cells,room:t.room}),t.cells=[],t.room=0)}return n}bringBack(e){for(let[t,n]of e.vars)this.vars.set(t,n);for(let[t,n]of e.units)this.unitVars.set(t,n);for(let[t,n]of e.texts){let e=this.textVars.get(t);e?.room&&this.sim.heap.give(e.room),this.textVars.set(t,n)}for(let t of e.arrays)t.a.room&&this.sim.heap.give(t.a.room),t.a.cells=t.cells,t.a.room=t.room;this.depth--}*block(e,t){for(let n of e){let e=yield*this.stmt(n,t);if(e!==`next`)return e}return`next`}*stmt(e,t){switch(this.step(),e.kind){case`declare`:return this.declare(e.decl),e.failed||(yield*this.put(e.decl,e.init)),`next`;case`assignUnit`:return this.unitVars.set(e.target,yield*this.unit(e.value)),`next`;case`assignText`:return yield*this.putText(e.target,e.value,e.at),`next`;case`storeText`:{let t=this.owned(yield*this.text(e.value),e.at),n=yield*this.num(e.index),r=[e.addr,e.block,e.chars].map(e=>this.arrays.get(e));if(r.some(e=>!e||n<0||n>=e.cells.length))return this.sim.faults.push({cycle:this.sim.cycle,program:this.index,at:e.at,message:`${r[0]?.decl.name??e.addr}[${n}] is past the end of the array (its length is ${r[0]?.cells.length??0}): nothing is stored.`}),t.room&&this.sim.heap.give(t.room),`next`;let[i,a,o]=r;this.releaseCellText(a.cells[n]);let s=++this.lastCellText;return this.cellTexts.set(s,t),i.cells[n]=s,a.cells[n]=t.room?s:0,o.cells[n]=[...t.s].length,`next`}case`releaseText`:{let t=yield*this.cell(e.block,e.index,e.at,`nothing is given back`);return t&&(this.releaseCellText(t.cells[t.i]),t.cells[t.i]=0),`next`}case`textLoop`:{this.declare(e.decl);let n=this.owned(yield*this.text(e.of),e.at),r=`next`;for(let i of n.s){let n=this.textVars.get(e.decl.id),a=this.made(i,e.at);if(n?.room&&this.sim.heap.give(n.room),this.textVars.set(e.decl.id,{s:a.s,room:a.room}),r=yield*this.block(e.body,t),r===`break`||r===`return`)break}return n.room&&this.sim.heap.give(n.room),r===`return`?r:`next`}case`unitLoop`:this.declare(e.decl);for(let n of this.sim.matching(e.filter)){if(!n.alive)continue;this.unitVars.set(e.decl.id,n);let r=yield*this.block(e.body,t);if(r===`break`)break;if(r===`return`)return r}return`next`;case`unitWrite`:{let t=yield*this.living(e.unit),n=e.field;if(n===`invincible`){let n=yield*this.bool(e.value);return t&&(t.invincible=n),`next`}let i=yield*this.amount(e.value);return t?(t[n]=Math.min(i,Dt[n]??4294967295),n===`hp`&&t.hp===0&&(this.sim.game.gone(t,!0),this.sim.unitEvent(this,r.KillUnit,t,e.at)),`next`):`next`}case`unitDo`:return yield*this.unitDo(e.unit,e.verb,e.at),`next`;case`tableWrite`:{if(Qe(e.value)){let t=yield*this.text(e.value);return this.sim.tableWrite(e.cell,0,!1,this.shown(t,e.at,`a unit type's name`)),this.used(t),`next`}let t=e.boolean?(yield*this.bool(e.value))?1:0:yield*this.amount(e.value);return this.sim.tableWrite(e.cell,t,e.scaled===!0),`next`}case`assign`:return this.store(e.target,yield*this.num(e.value)),`next`;case`declareArray`:{let t=this.arrays.get(e.array);if(!t)throw Error(`The array ${e.array} is not one of the program's (line ${e.at.line}).`);let n=function*(e,n){return t.decl.kind===`number`?yield*e.num(n):yield*e.bool(n)};if(t.decl.through){this.inner(t.decl,e=>Map.prototype.get.call(this.arrays,e),!0);let r=[];for(let i of e.init??[])r.push(this.kept(yield*n(this,i),t.decl));if(r.length){let t=this.arrays.get(e.array);this.grow(t,r.length,e.at)&&t.cells.push(...r)}return`next`}if(t.decl.dynamic){t.room&&=(this.sim.heap.give(t.room),0),t.cells.length=0;let r=[];if(e.fill){let i=this.kept(yield*n(this,e.fill),t.decl);for(let e=0;e<t.decl.length;e++)r.push(i)}else for(let i of e.init??[])r.push(this.kept(yield*n(this,i),t.decl));return(r.length===0||this.grow(t,r.length,e.at))&&t.cells.push(...r),`next`}if(e.fill){let r=this.kept(yield*n(this,e.fill),t.decl);t.cells.fill(r)}else for(let r=0;r<t.decl.length;r++)t.cells[r]=this.kept(e.init?.[r]?yield*n(this,e.init[r]):t.decl.kind===`number`&&0,t.decl);return`next`}case`push`:{let t=this.arrays.get(e.array);if(!t)throw Error(`The array ${e.array} is not one of the program's (line ${e.at.line}).`);let n=t.decl.kind===`boolean`?yield*this.bool(e.value):yield*this.num(e.value);return this.grow(t,t.cells.length+1,e.at)&&t.cells.push(this.kept(n,t.decl)),`next`}case`pop`:return this.arrays.get(e.array)?.cells.pop(),`next`;case`setLength`:{let t=this.arrays.get(e.array),n=yield*this.amount(e.value);return t&&n<t.cells.length&&(t.cells.length=n),`next`}case`store`:{let t=this.arrays.get(e.array),n=t?.decl.kind===`boolean`?yield*this.bool(e.value):yield*this.num(e.value);if(t?.decl.dynamic){let r=yield*this.num(e.index);return r===t.cells.length?(this.grow(t,r+1,e.at)&&t.cells.push(this.kept(n,t.decl)),`next`):(r>=0&&r<t.cells.length?t.cells[r]=this.kept(n,t.decl):this.sim.faults.push({cycle:this.sim.cycle,program:this.index,at:e.at,message:`${t.decl.name}[${r}] is past the end of the array (its length is ${t.cells.length}): nothing is stored.`}),`next`)}let r=yield*this.cell(e.array,e.index,e.at,`nothing is stored`);return r&&(r.cells[r.i]=this.kept(n,r.decl)),`next`}case`assignBool`:return this.store(e.target,yield*this.bool(e.value)),`next`;case`if`:return(yield*this.bool(e.cond))?yield*this.block(e.then,t):e.else?yield*this.block(e.else,t):`next`;case`while`:for(;;){if(e.cond&&!(yield*this.bool(e.cond)))return`next`;let n=yield*this.block(e.body,t);if(n===`break`)return`next`;if(n===`return`)return n}case`do`:for(;;){let n=yield*this.block(e.body,t);if(n===`break`)return`next`;if(n===`return`)return n;if(!(yield*this.bool(e.cond)))return`next`}case`for`:for(;;){if(e.cond&&!(yield*this.bool(e.cond)))return`next`;let n=yield*this.block(e.body,t);if(n===`break`)return`next`;if(n===`return`)return n;let r=yield*this.block(e.update,t);if(r===`return`)return r}case`unrolled`:for(let n of e.iterations){let e=yield*this.block(n,t);if(e===`break`)return`next`;if(e===`return`)return e}return`next`;case`switch`:{let n=yield*this.num(e.value),r=e.cases.findIndex(e=>e.value!==null&&(e.value|0)===n);if(r<0&&(r=e.cases.findIndex(e=>e.value===null)),r<0)return`next`;for(let n=r;n<e.cases.length;n++){let r=yield*this.block(e.cases[n].body,t);if(r===`break`)return`next`;if(r!==`next`)return r}return`next`}case`break`:return`break`;case`continue`:return`continue`;case`return`:return e.value&&t.fn?.result&&(yield*this.put(t.fn.result,e.value,e.at)),`return`;case`sleep`:{let t=e.cycles??Math.max(1,Math.round((e.ms??0)/1e3*24));for(let e=0;e<t;e++)yield;return`next`}case`action`:{let t={...e.record};for(let n of e.variables??[])t[n.field]=yield*this.amount(n.expr);if(e.text){let n=yield*this.text(e.text);return this.sim.act(this,t,e.at,this.shown(n,e.at,`this action`)),this.used(n),`next`}return this.sim.act(this,t,e.at),`next`}case`print`:{let t=[],n=yield*this.parts(e.parts,t);return this.used(...t),this.sim.print(this,n,e.to,e.at),`next`}case`centerLocation`:{let t=yield*this.amount(e.x),n=yield*this.amount(e.y);return this.sim.centre(e.location,t,n),`next`}case`call`:return yield*this.call(e.call),`next`;case`block`:return yield*this.block(e.body,t);case`remark`:return`next`}}unitValue(e){let t=null;for(let[n,r]of[...this.unitVars,...this.common.unitVars])(n===e||n.startsWith(`${e}#`))&&(t=r);return t?.alive?t:null}value(e){let t;for(let[n,r]of[...this.vars,...this.common.vars])(n===e||n.startsWith(`${e}#`))&&(t=r);return t}textValue(e){let t;for(let[n,r]of[...this.textVars,...this.common.textVars])(n===e||n.startsWith(`${e}#`))&&(t=r.s);return t}lookup(e){let t=this.value(e);if(t!==void 0)return t;let n=this.textValue(e);if(n!==void 0)return n;let r=this.list(e);if(r!==void 0)return[...r];for(let t of[...this.unitVars.keys(),...this.common.unitVars.keys()])if(t===e||t.startsWith(`${e}#`))return this.unitValue(e);let i=t=>t.startsWith(`${e}.`)?t.slice(e.length+1).split(`#`)[0]:null,a={};for(let[e,t]of[...this.vars,...this.common.vars]){let n=i(e);n&&!n.includes(` (`)&&(a[n]=t)}for(let[e,t]of[...this.textVars,...this.common.textVars]){let n=i(e);n&&(a[n]=t.s)}if(Object.keys(a).length)return a;let o=[];for(let[e,t]of this.arrays){let n=i(e);n&&t.cells.forEach((e,t)=>{(o[t]??={})[n]=e})}return o.length?o:void 0}list(e){let t;for(let[n,r]of this.arrays)(n===e||n.startsWith(`${e}#`))&&(t=r.cells);return t}},Lt=class{world;runs;events=[];faults=[];inner=new Map;lastInner=0;heap={cells:Ve,top:1,stack:Ve,free:new Map,take(e){let t=this.free.get(e)??0;return t>0?(this.free.set(e,t-1),!0):this.top+e>this.stack?!1:(this.top+=e,!0)},give(e){this.free.set(e,(this.free.get(e)??0)+1)}};stackDepth=Ge;maxSteps;random;conditionOf;readOf;nameOf;game;tables=new Map;tableOf;resources=new Map;chats=[];unitByName;queued={events:new Set,lines:new Map};current=this.queued;mice=new Map;cycle=0;constructor(e,t){if(this.world=t.world??new Re([],{player:t.player??(t.players?void 0:e[0]?.owner??0),condition:t.condition,random:t.random,strings:t.strings,players:t.players,forces:t.forces,units:t.units,locations:t.locations,unitClass:t.unitClass,properties:t.properties}),this.game=this.world.game,t.world){for(let[e,n]of Object.entries(t.locations??{}))this.game.locations.set(Number(e),{...n});for(let e of t.units??[])this.game.make(e)}this.maxSteps=t.maxStepsPerCycle??1e5,this.heap.cells=this.heap.stack=We(t.heapCells),this.stackDepth=Je(t.stackDepth),this.random=t.random??Math.random,this.conditionOf=t.condition,this.readOf=t.read,this.nameOf=t.playerName??(e=>`Player ${e+1}`),this.tableOf=t.table;let n=(e,t)=>{let n=ct.unit.find(t=>t.name===e);return{name:`unit.${e}`,base:n.base,stride:n.stride,index:t,width:n.width,...n.scale?{scale:n.scale}:{}}},r=t.unitStats??this.game.stats;this.game.stats=e=>{let t=r(e)??{};return{...t,hp:this.tableRead(n(`maxHp`,e))||t.hp,shields:this.tableRead(n(`maxShields`,e))||t.shields}},this.unitByName=t.unitByName??(()=>void 0);for(let t of wt(e).sources)t.source===`chat`&&!this.chats.some(e=>e.pattern===t.pattern)&&this.chats.push(St(t.pattern));this.current={events:new Set,lines:new Map},this.runs=e.flatMap((e,t)=>{let n=Pt(),r=this.ownersOf(e);return(e.perPlayer?r:r.slice(0,1)).map(r=>new It(this,t,e,r,n))})}get player(){return this.world.player}get units(){return this.game.units}get locations(){return this.game.locations}ownersOf(e){let t=this.game.players;if(t.loose)return[this.world.player];let n=[];for(let r of e.owners?.length?e.owners:[e.owner])for(let e of t.of(r,this.world.player))t.slots.includes(e)&&!n.includes(e)&&n.push(e);return n.sort((e,t)=>e-t)}condition(e){switch(e.type){case n.Always:return!0;case n.Never:return!1;case n.Deaths:{let t=this.world.death(e.player,e.unitId),n=e.amount>>>0;return e.comparison===o.AtLeast?t>=n:e.comparison===o.AtMost?t<=n:e.comparison===o.Exactly&&t===n}case n.Switch:return e.comparison===s.Set?this.world.switches[e.resource]===1:this.world.switches[e.resource]===0;default:return this.conditionOf?.(e,this.world)??this.game.holds(e,this.world.current)??!1}}slotsOf(e){return this.game.players.of(e,this.world.current)}slotOf(e){return this.slotsOf(e)[0]??e}resourcesOf(e){let t=0,n=0;for(let r of this.slotsOf(e))if(r<12){let e=this.stockOf(r);t+=e[0],n+=e[1]}return[t%W,n%W]}stockOf(e){let t=this.resources.get(e);return t||(t=[0,0],this.resources.set(e,t)),t}quantity(e){switch(e.type){case n.Deaths:return this.world.death(e.player,e.unitId);case n.Accumulate:{let t=this.slotsOf(e.player).filter(e=>e<12);if(t.length===0)return;let n=0,r=0;for(let e of t){let t=this.stockOf(e);n+=t[0],r+=t[1]}return(e.resource===p.Ore?n:e.resource===p.Gas?r:n+r)%W}case n.ElapsedTime:return Math.floor(this.cycle/16);default:return this.game.quantity(e,this.world.current)}}read(e){let t=this.readOf?.(e,this);return t===void 0?e.source===`condition`?this.quantity(e.record)??0:e.source===`player`&&e.fact===`slot`&&this.game.players.slots.includes(this.slotOf(e.player))?2:0:Math.max(0,Math.trunc(t))%W}press(e,t=this.player){return this.queued.events.add(`key:${t}:${_t(e)??e}`),this}click(e=`left`,t=this.player){return this.queued.events.add(`click:${t}:${e}`),this}moveMouse(e,t,n=this.player){return this.mice.set(n,{x:e,y:t}),this}type(e,t=this.player){for(let n of this.chats){let r=Ct(n,e,this.unitByName);if(r){this.queued.lines.set(t,{pattern:n.pattern,values:r});break}}return this}input(e){let t=this.slotOf(e.player);switch(e.source){case`key`:return+!!this.current.events.has(`key:${t}:${e.key}`);case`click`:return+!!this.current.events.has(`click:${t}:${e.button}`);case`mouse`:return this.mice.get(t)?.[e.axis]??0;case`chat`:{let n=this.current.lines.get(t);return!n||n.pattern!==e.pattern?0:e.capture===null?1:n.values[e.capture]??0}}}matching(e){return this.game.matching(e.owner===void 0?void 0:this.slotsOf(e.owner),e.type,e.at)}pick(e,t,n,r,i){let a=this.matching(t);if(a.length===0)return null;if(e===`first`)return a[0];if(e===`random`)return a[Math.min(a.length-1,Math.floor(this.random()*a.length))];let o=n===void 0?void 0:this.locations.get(n),s=r===void 0?void 0:this.mice.get(this.slotOf(r))??{x:0,y:0},c=s?s.x:o?Math.floor((o.left+o.right)/2):0,l=s?s.y:o?Math.floor((o.top+o.bottom)/2):0,u=null,d=i===void 0?1/0:i+1;for(let e of a){let t=Math.abs(e.x-c)+Math.abs(e.y-l);t<d&&(d=t,u=e)}return u}centre(e,t,n){this.game.centre(e,t,n)}cellKey(e){return`${e.name}:${e.player?this.slotOf(e.index):e.index}${e.key===void 0?``:`:${e.key}`}`}tableRead(e){let t=this.tables.get(this.cellKey(e));if(typeof t==`number`)return Math.floor(t/(e.scale??1));let n=this.tableOf?.(e);return n===void 0?0:Math.max(0,Math.trunc(n))}tableWrite(e,t,n,r){if(r!==void 0){this.tables.set(this.cellKey(e),r);return}let i=n?t:t*(e.scale??1);this.tables.set(this.cellKey(e),Math.min(i,ut(e.width)))}unitEvent(e,t,n,r,i={}){let a=`unit ${n.slot} (type ${n.type}, P${n.owner+1})`;this.events.push({cycle:this.cycle,program:e.index,player:e.player,at:r,action:{...ee(),type:t,player:n.owner,unitId:n.type,...i.location?{location:i.location}:{}},text:i.text?`${i.text}: ${a}`:a})}partText(e){return e.kind===`text`?e.text:e.kind===`name`?this.nameOf(this.slotOf(e.player)):``}print(e,t,n,i){this.events.push({cycle:this.cycle,program:e.index,player:e.player,at:i,action:{...ee(),type:r.DisplayText,player:n},text:t})}act(e,t,n,i){if(t.type===r.SetResources){let e=t.target>>>0,n=n=>t.modifier===l.SetTo?e:t.modifier===l.Add?(n+e)%W:Math.max(0,n-e);for(let e of this.slotsOf(t.player)){if(e>=12)continue;let r=this.stockOf(e);(t.unitId===p.Ore||t.unitId===p.OreAndGas)&&(r[0]=n(r[0])),(t.unitId===p.Gas||t.unitId===p.OreAndGas)&&(r[1]=n(r[1]))}}switch(t.type){case r.SetDeaths:this.world.changeDeath(t.player,t.unitId,t.modifier,t.target);return;case r.SetSwitch:{let e=t.target;if(e<0||e>=256)return;switch(t.modifier){case c.Set:this.world.switches[e]=1;break;case c.Clear:this.world.switches[e]=0;break;case c.Toggle:this.world.switches[e]^=1;break;case c.Randomize:this.world.switches[e]=this.random()<.5?0:1}return}case r.Comment:case r.PreserveTrigger:return;default:{this.game.act(t,e.player);let r={cycle:this.cycle,program:e.index,player:e.player,at:n,action:t},a=i??this.world.text(t.text);a!==void 0&&(r.text=a),this.events.push(r)}}}step(){this.current=this.queued,this.queued={events:new Set,lines:new Map};for(let e of this.runs){this.world.current=e.player;try{e.tick()}catch(e){throw e instanceof Ot?Error(e.message):e}}this.world.current=this.world.player,this.cycle++}run(e){for(let t=0;t<e;t++)this.step();return this}finished(){return this.runs.every(e=>e.done)}runOf(e=0,t){return this.runs.find(n=>(typeof e==`number`?n.index===e:n.program.name===e)&&(t===void 0||n.player===t))}unit(e,t=0,n){return this.runOf(t,n)?.unitValue(e)??null}value(e,t=0,n){return this.runOf(t,n)?.value(e)}text(e,t=0,n){return this.runOf(t,n)?.textValue(e)}list(e,t=0,n){return this.runOf(t,n)?.list(e)}},Rt=e=>/\.test\.ts$/i.test(e),zt=[`type`,`location`,`player`,`amount`,`unitId`,`comparison`,`resource`],Bt=[`type`,`location`,`text`,`wav`,`time`,`player`,`target`,`unitId`,`modifier`];r.SetDeaths,r.SetResources,r.SetScore,r.SetCountdownTimer;var Vt=`Terran Marine.Terran Ghost.Terran Vulture.Terran Goliath.Goliath Turret.Terran Siege Tank (Tank Mode).Siege Tank Turret (Tank Mode).Terran SCV.Terran Wraith.Terran Science Vessel.Gui Montag (Firebat).Terran Dropship.Terran Battlecruiser.Spider Mine.Nuclear Missile.Terran Civilian.Sarah Kerrigan (Ghost).Alan Schezar (Goliath).Alan Schezar Turret.Jim Raynor (Vulture).Jim Raynor (Marine).Tom Kazansky (Wraith).Magellan (Science Vessel).Edmund Duke (Tank Mode).Edmund Duke Turret (Tank Mode).Edmund Duke (Siege Mode).Edmund Duke Turret (Siege Mode).Arcturus Mengsk (Battlecruiser).Hyperion (Battlecruiser).Norad II (Battlecruiser).Terran Siege Tank (Siege Mode).Siege Tank Turret (Siege Mode).Terran Firebat.Scanner Sweep.Terran Medic.Zerg Larva.Zerg Egg.Zerg Zergling.Zerg Hydralisk.Zerg Ultralisk.Zerg Broodling.Zerg Drone.Zerg Overlord.Zerg Mutalisk.Zerg Guardian.Zerg Queen.Zerg Defiler.Zerg Scourge.Torrasque (Ultralisk).Matriarch (Queen).Infested Terran.Infested Kerrigan (Infested Terran).Unclean One (Defiler).Hunter Killer (Hydralisk).Devouring One (Zergling).Kukulza (Mutalisk).Kukulza (Guardian).Yggdrasill (Overlord).Terran Valkyrie.Mutalisk Cocoon.Protoss Corsair.Protoss Dark Templar.Zerg Devourer.Protoss Dark Archon.Protoss Probe.Protoss Zealot.Protoss Dragoon.Protoss High Templar.Protoss Archon.Protoss Shuttle.Protoss Scout.Protoss Arbiter.Protoss Carrier.Protoss Interceptor.Protoss Dark Templar (Hero).Zeratul (Dark Templar).Tassadar/Zeratul (Archon).Fenix (Zealot).Fenix (Dragoon).Tassadar (Templar).Mojo (Scout).Warbringer (Reaver).Gantrithor (Carrier).Protoss Reaver.Protoss Observer.Protoss Scarab.Danimoth (Arbiter).Aldaris (Templar).Artanis (Scout).Rhynadon (Badlands Critter).Bengalaas (Jungle Critter).Cargo Ship (Unused).Mercenary Gunship (Unused).Scantid (Desert Critter).Kakaru (Twilight Critter).Ragnasaur (Ashworld Critter).Ursadon (Ice World Critter).Lurker Egg.Raszagal (Corsair).Samir Duran (Ghost).Alexei Stukov (Ghost).Map Revealer.Gerard DuGalle (Battlecruiser).Zerg Lurker.Infested Duran.Disruption Web.Terran Command Center.Terran Comsat Station.Terran Nuclear Silo.Terran Supply Depot.Terran Refinery.Terran Barracks.Terran Academy.Terran Factory.Terran Starport.Terran Control Tower.Terran Science Facility.Terran Covert Ops.Terran Physics Lab.Starbase (Unused).Terran Machine Shop.Repair Bay (Unused).Terran Engineering Bay.Terran Armory.Terran Missile Turret.Terran Bunker.Norad II (Crashed).Ion Cannon.Uraj Crystal.Khalis Crystal.Zerg Infested Command Center.Zerg Hatchery.Zerg Lair.Zerg Hive.Zerg Nydus Canal.Zerg Hydralisk Den.Zerg Defiler Mound.Zerg Greater Spire.Zerg Queen's Nest.Zerg Evolution Chamber.Zerg Ultralisk Cavern.Zerg Spire.Zerg Spawning Pool.Zerg Creep Colony.Zerg Spore Colony.Unused Zerg Building 1.Zerg Sunken Colony.Zerg Overmind (With Shell).Zerg Overmind.Zerg Extractor.Mature Chrysalis.Zerg Cerebrate.Zerg Cerebrate Daggoth.Unused Zerg Building 2.Protoss Nexus.Protoss Robotics Facility.Protoss Pylon.Protoss Assimilator.Unused Protoss Building 1.Protoss Observatory.Protoss Gateway.Unused Protoss Building 2.Protoss Photon Cannon.Protoss Citadel of Adun.Protoss Cybernetics Core.Protoss Templar Archives.Protoss Forge.Protoss Stargate.Stasis Cell/Prison.Protoss Fleet Beacon.Protoss Arbiter Tribunal.Protoss Robotics Support Bay.Protoss Shield Battery.Khaydarin Crystal Formation.Protoss Temple.Xel'Naga Temple.Mineral Field (Type 1).Mineral Field (Type 2).Mineral Field (Type 3).Cave (Unused).Cave-in (Unused).Cantina (Unused).Mining Platform (Unused).Independent Command Center (Unused).Independent Starport (Unused).Independent Jump Gate (Unused).Ruins (Unused).Khaydarin Crystal Formation (Unused).Vespene Geyser.Warp Gate.Psi Disrupter.Zerg Marker.Terran Marker.Protoss Marker.Zerg Beacon.Terran Beacon.Protoss Beacon.Zerg Flag Beacon.Terran Flag Beacon.Protoss Flag Beacon.Power Generator.Overmind Cocoon.Dark Swarm.Floor Missile Trap.Floor Hatch (Unused).Left Upper Level Door.Right Upper Level Door.Left Pit Door.Right Pit Door.Floor Gun Trap.Left Wall Missile Trap.Left Wall Flame Trap.Right Wall Missile Trap.Right Wall Flame Trap.Start Location.Flag.Young Chrysalis.Psi Emitter.Data Disk.Khaydarin Crystal.Mineral Cluster Type 1.Mineral Cluster Type 2.Protoss Vespene Gas Orb Type 1.Protoss Vespene Gas Orb Type 2.Zerg Vespene Gas Sac Type 1.Zerg Vespene Gas Sac Type 2.Terran Vespene Gas Tank Type 1.Terran Vespene Gas Tank Type 2`.split(`.`),Ht=`Gauss Rifle.Gauss Rifle (Jim Raynor).C-10 Canister Rifle.C-10 Canister Rifle (Sarah Kerrigan).Fragmentation Grenade.Fragmentation Grenade (Jim Raynor).Spider Mines.Twin Autocannons.Hellfire Missile Pack.Twin Autocannons (Alan Schezar).Hellfire Missile Pack (Alan Schezar).Arclite Cannon.Arclite Cannon (Edmund Duke).Fusion Cutter.Fusion Cutter (Harvest).Gemini Missiles.Burst Lasers.Gemini Missiles (Tom Kazansky).Burst Lasers (Tom Kazansky).ATS Laser Battery.ATA Laser Battery.ATS Laser Battery (Hero).ATA Laser Battery (Hero).ATS Laser Battery (Hyperion).ATA Laser Battery (Hyperion).Flame Thrower.Flame Thrower (Gui Montag).Arclite Shock Cannon.Arclite Shock Cannon (Edmund Duke).Longbolt Missile.Yamato Gun.Nuclear Strike.Lockdown.EMP Shockwave.Irradiate.Claws.Claws (Devouring One).Claws (Infested Kerrigan).Needle Spines.Needle Spines (Hunter Killer).Kaiser Blades.Kaiser Blades (Torrasque).Toxic Spores (Broodling).Spines.Spines (Harvest).Acid Spray (Unused).Acid Spore.Acid Spore (Kukulza).Glave Wurm.Glave Wurm (Kukulza).Venom (Unused).Venom (Unused, Hero).Seeker Spores.Subterranean Tentacle.Suicide (Infested Terran).Suicide (Scourge).Parasite.Spawn Broodlings.Ensnare.Dark Swarm.Plague.Consume.Particle Beam.Particle Beam (Harvest).Psi Blades.Psi Blades (Fenix).Phase Disruptor.Phase Disruptor (Fenix).Psi Assault (Unused).Psi Assault (Tassadar/Aldaris).Psionic Shockwave.Psionic Shockwave (Tassadar/Zeratul Archon).Unknown 72.Dual Photon Blasters.Anti-Matter Missiles.Dual Photon Blasters (Mojo).Anti-Matter Missiles (Mojo).Phase Disruptor Cannon.Phase Disruptor Cannon (Danimoth).Pulse Cannon.STS Photon Cannon.STA Photon Cannon.Scarab.Stasis Field.Psionic Storm.Warp Blades (Zeratul).Warp Blades (Dark Templar Hero).Missiles (Unused).Laser Battery 1 (Unused).Tormentor Missiles (Unused).Bombs (Unused).Raider Gun (Unused).Laser Battery 2 (Unused).Laser Battery 3 (Unused).Dual Photon Blasters (Unused).Flechette Grenade (Unused).Twin Autocannons (Floor Trap).Hellfire Missile Pack (Wall Trap).Flame Thrower (Wall Trap).Hellfire Missile Pack (Floor Trap).Neutron Flare.Disruption Web.Restoration.Halo Rockets.Corrosive Acid.Mind Control.Feedback.Optical Flare.Maelstrom.Subterranean Spines.Gauss Rifle 0 (Unused).Warp Blades.C-10 Canister Rifle (Samir Duran).C-10 Canister Rifle (Infested Duran).Dual Photon Blasters (Artanis).Anti-Matter Missiles (Artanis).C-10 Canister Rifle (Alexei Stukov).Gauss Rifle 1 (Unused).Unknown 118.Unknown 119.Unknown 120.Unknown 121.Unknown 122.Unknown 123.Unknown 124.Unknown 125.Unknown 126.Unknown 127.Unknown 128.Unknown 129`.split(`.`),Ut=`Terran Infantry Armor.Terran Vehicle Plating.Terran Ship Plating.Zerg Carapace.Zerg Flyer Carapace.Protoss Ground Armor.Protoss Air Armor.Terran Infantry Weapons.Terran Vehicle Weapons.Terran Ship Weapons.Zerg Melee Attacks.Zerg Missile Attacks.Zerg Flyer Attacks.Protoss Ground Weapons.Protoss Air Weapons.Protoss Plasma Shields.U-238 Shells.Ion Thrusters.Burst Lasers (Unused).Titan Reactor.Ocular Implants.Moebius Reactor.Apollo Reactor.Colossus Reactor.Ventral Sacs.Antennae.Pneumatized Carapace.Metabolic Boost.Adrenal Glands.Muscular Augments.Grooved Spines.Gamete Meiosis.Metasynaptic Node.Singularity Charge.Leg Enhancements.Scarab Damage.Reaver Capacity.Gravitic Drive.Sensor Array.Gravitic Boosters.Khaydarin Amulet.Apial Sensors.Gravitic Thrusters.Carrier Capacity.Khaydarin Core.Unused (45).Unused (46).Argus Jewel.Unused (48).Argus Talisman.Unused (50).Caduceus Reactor.Chitinous Plating.Anabolic Synthesis.Charon Boosters.Unused (55).Unused (56).Unused (57).Unused (58).Unused (59).Unused (60)`.split(`.`),Wt=`Stim Packs.Lockdown.EMP Shockwave.Spider Mines.Scanner Sweep.Tank Siege Mode.Defensive Matrix.Irradiate.Yamato Gun.Cloaking Field.Personnel Cloaking.Burrowing.Infestation.Spawn Broodlings.Dark Swarm.Plague.Consume.Ensnare.Parasite.Psionic Storm.Hallucination.Recall.Stasis Field.Archon Warp.Restoration.Disruption Web.Unused (26).Mind Control.Dark Archon Meld.Feedback.Optical Flare.Maelstrom.Lurker Aspect.Unused (33).Healing.Unused (35).Unused (36).Unused (37).Unused (38).Unused (39).Unused (40).Unused (41).Unused (42).Unused (43)`.split(`.`),Gt=e=>[e.players,e.units,e.locations,e.switches,e.aiScripts,e.weapons,e.upgrades,e.techs];function Kt(e){let t=e.split(/[^A-Za-z0-9]+/).filter(Boolean).map(e=>e[0].toUpperCase()+e.slice(1)).join(``);return t===``&&(t=`_`),/^\d/.test(t)&&(t=`_${t}`),t}function K(...e){let t=[];for(let n of e)if(n)for(let e of[Kt(n),n])t.includes(e)||t.push(e);return t}function qt(e,t,n,r){let i=new Set,a=[];for(let e of r){let t=[];e.keys.forEach((e,n)=>{if(!i.has(e)){i.add(e),t.push(e);return}if(n!==0)return;let r=2;for(;i.has(`${e}_${r}`);)r++;i.add(`${e}_${r}`),t.push(`${e}_${r}`)}),a.push({value:e.value,keys:t})}return{object:e,type:t,doc:n,entries:a}}var Jt={[a.None]:`None`,[a.CurrentPlayer]:`Current`,[a.Foes]:`Foes`,[a.Allies]:`Allies`,[a.NeutralPlayers]:`Neutral`,[a.AllPlayers]:`All`,[a.NonAlliedVictoryPlayers]:`NonAlliedVictory`};function Yt(e=[]){return fe.map(t=>{let n=t.value<12?[`P${t.value+1}`,t.label]:K(Jt[t.value]??t.label,t.label),r=t.value-a.Force1;return r>=0&&r<4&&n.push(...K(e[r]).filter(e=>!n.includes(e))),{value:t.value,keys:n}})}function Xt(e=()=>null){let t=Vt.map((t,n)=>({value:n,keys:K(t,e(n)||null)}));for(let e of pe)t.push({value:e.value,keys:K(e.label,...e.aliases??[])});return t}function Zt(){return ve.map(e=>({value:he(e.id),keys:K(e.name,e.id)}))}var Qt=e=>`Switch ${e+1}`;function $t(e={}){let t=!!(e.forceNames||e.locations||e.switchNames||e.unitCustomName),n=[{value:0,keys:[`NoLocation`,`No Location`]}],r=(e.locations??[]).slice().sort((e,t)=>e.index-t.index);r.some(e=>e.index===63)||r.push({index:63,name:`Anywhere`});for(let{index:e,name:t}of r)n.push({value:e+1,keys:e===63?[`Anywhere`,...K(t).filter(e=>e!==`Anywhere`)]:K(t)});let i=Array.from({length:256},(t,n)=>{let r=[`Switch${n+1}`,`Switch ${n+1}`],i=e.switchNames?.[n];if(i&&i.trim()&&i.trim()!==Qt(n))for(let e of K(i.trim()))r.includes(e)||r.push(e);return{value:n,keys:r}});return{players:qt(`players`,`Player`,t?`Players, player groups and the map's forces.`:`Players and player groups.`,Yt(e.forceNames??[])),units:qt(`units`,`UnitType`,t?`Unit types, by StarEdit name and by the map's custom names.`:`Unit types, by StarEdit name.`,Xt(e.unitCustomName??(()=>null))),locations:qt(`locations`,`Location`,`The map's locations.`,n),switches:qt(`switches`,`Switch`,t?`The 256 switches, by number and by the map's names.`:`The 256 switches.`,i),aiScripts:qt(`aiScripts`,`AiScript`,`AI scripts, by StarEdit name or four-character code.`,Zt()),weapons:qt(`weapons`,`Weapon`,`Weapons, for stats() and a unit type's groundWeapon / airWeapon.`,[...Ht.map((e,t)=>({value:t,keys:K(e)})),{value:Ht.length,keys:[`None`]}]),upgrades:qt(`upgrades`,`Upgrade`,`Upgrades, for stats().`,Ut.map((e,t)=>({value:t,keys:K(e)}))),techs:qt(`techs`,`Tech`,`Technologies, for stats().`,Wt.map((e,t)=>({value:t,keys:K(e)})))}}function en(){return $t()}function tn(e,t){return e.entries.find(e=>e.value===t)}var nn=new Map([...we].filter(([,e])=>e.args.some(e=>e.kind===`comparison`)&&e.args.some(e=>e.kind===`amount`)).map(([e,t])=>[e,t.args.length-2])),rn=[`minerals`,`gas`,`resources`,`countUnits`,`kills`,`countdown`,`elapsed`,`race`,`slot`,`isHuman`,`hasLeft`,`supply`],an=[`unitsAt`,`unitsOf`,`allUnits`,`first`,`nearest`,`randomUnit`,`underMouse`,`stats`],on=[`keyPressed`,`clicked`,`mouse`,`chatted`,`centerLocation`],sn=`trigscript.d.ts`,cn=`// ── TrigScript ────────────────────────────────────────────────────────────
// Generated for the open map; rebuilt whenever the map's names change. Do not edit.
//
// A script is ordinary TypeScript that runs when you build: every trigger() it calls
// becomes one trigger of the map, in order. Code inside program(() => { … }) runs in
// the game instead (StarCraft: Remastered), built into the map when it is saved.
`;function ln(e){return`
${e}type Brand<K extends string> = { readonly __kind?: K };
/** A player or player group (P1 … P12, CurrentPlayer, AllPlayers, players.*, or a raw group number). */
${e}type Player<N extends number = number> = N & Brand<"player">;
/** A unit type (units.*, or a raw units.dat id): what a condition or an action names. A unit on the map is a Unit. */
${e}type UnitType<N extends number = number> = N & Brand<"unit">;
/** A weapon (weapons.*, or a raw weapons.dat id), for stats(). */
${e}type Weapon<N extends number = number> = N & Brand<"weapon">;
/** An upgrade (upgrades.*, or a raw upgrades.dat id), for stats(). */
${e}type Upgrade<N extends number = number> = N & Brand<"upgrade">;
/** A technology (techs.*, or a raw techdata.dat id), for stats(). */
${e}type Tech<N extends number = number> = N & Brand<"tech">;
/** A player colour (colors.*), for stats(player).color. */
${e}type PlayerColor<N extends number = number> = N & Brand<"color">;
${e}type ColorName = __COLOR_NAMES__;
/** A location (locations.*, or a raw 1-based location number; 0 = none). */
${e}type Location<N extends number = number> = N & Brand<"location">;
/** A switch (switches.*, or a raw 0-based switch number). */
${e}type Switch<N extends number = number> = N & Brand<"switch">;
/** An AI script (aiScripts.*; a four-character code or StarEdit name as a string also works). */
${e}type AiScript<N extends number = number> = N & Brand<"aiScript">;
/** A race (races.*), as race() returns it. */
${e}type Race<N extends number = number> = N & Brand<"race">;
/** What holds a player's slot (slots.*), as slot() returns it. */
${e}type Slot<N extends number = number> = N & Brand<"slot">;
/** A unit count: a number, or "All". */
${e}type Count = number | "All";
/** A number of a program that stays within 0 … 255: stored below zero it is 0, above 255 it is 255. A plain \`number\` is signed and wraps. */
${e}type u8 = number & Brand<"u8">;
/** A number of a program that stays within 0 … 65 535: stored below zero it is 0, above 65 535 it is 65 535. */
${e}type u16 = number & Brand<"u16">;
/**
 * A number of a program read as 0 … 4 294 967 295, wrapping as \`x >>> 0\` does: for bit masks, hashes and a count past
 * 2 147 483 647. A plain \`number\` is signed. The two do not mix in arithmetic without saying which is meant — u32(x), i32(x) —
 * but compare exactly: a number below zero is smaller than any u32.
 */
${e}type u32 = number & Brand<"u32">;
/** A function that runs in the game, as returned by game(): call it inside program() or another game function. */
${e}type GameFunction<F extends (...args: never[]) => unknown> = F & { readonly __game: true };

/** A condition, as returned by bring(...), deaths(...), …: give it to trigger(), or test it in an if inside program(). */
${e}interface Condition { readonly __condition: true; }
/** An action, as returned by displayText(...), setDeaths(...), …: give it to trigger(), or call it as a statement inside program(). */
${e}interface Action { readonly __action: true; }
/** A trigger, as returned by trigger(). */
${e}interface Trigger { readonly __trigger: true; }
/** A length of time, from seconds(), minutes() or frames(): what sleep() takes. */
${e}interface Duration { readonly __duration: true; }
/** Conditions, nested arrays allowed (they are flattened); false / null / undefined entries are skipped. */
${e}type Conditions = readonly (Condition | Conditions | false | null | undefined)[];
/** Actions, nested arrays allowed (they are flattened); false / null / undefined entries are skipped. */
${e}type Actions = readonly (Action | Actions | false | null | undefined)[];

${e}interface TriggerOptions {
${z.map(([,e])=>`  ${e}?: boolean;`).join(`
`)}
  /** Raw execution flags, ORed in. */
  flags?: number;
}

/**
 * A unit on the map, inside program() only: one of the game's units as it is right now. Get one from a
 * loop — \`for (const u of unitsAt(locations.Pen, { owner: P2 })) u.hp = u.maxHp / 2;\` — or a pick,
 * which may find none: \`const t = nearest(units.TerranMarine, locations.Beacon); if (t) t.order("move", locations.Exit);\`
 * A variable may keep a unit across a sleep(). The game reuses a dead unit's place for a new one, so
 * every use checks that the unit is still the one that was kept: once it is gone, its numbers read 0,
 * its booleans false, and writing to it or telling it something does nothing. \`if (u)\` asks whether it is still there.
 */
${e}interface Unit {
  readonly __unit: true;
  /** Hit points, in whole points as the game shows them. Writing 0 kills the unit. */
  hp: number;
  /** The type's hit points. */
  readonly maxHp: number;
  /** Shield points. */
  shields: number;
  /** The type's shield points. */
  readonly maxShields: number;
  /** Energy, 0 … 255. */
  energy: number;
  /** Who owns the unit; give() changes it. */
  readonly owner: Player;
  /** What the unit is: \`if (u.type == units.TerranMarine)\`. */
  readonly type: UnitType;
  /** Where the unit is, in pixels (32 a tile). Read only: the game ends when a position is written. */
  readonly x: number;
  readonly y: number;
  /** How many units it has killed, 0 … 255. */
  kills: number;
  /** The orders.dat id of what the unit is doing (3 is standing guard, 6 moving, 10 attacking). */
  readonly orderId: number;
  /** Frames until the unit can attack or cast again, 0 … 255; writing it holds the unit's fire that long. */
  cooldown: number;
  /** What a mineral field or a geyser still holds. */
  resources: number;
  /** Frames left of each effect, 0 … 255: write one to start, lengthen or end it. Stim, ensnare and the rest tick down about every eighth frame. */
  stim: number;
  ensnare: number;
  plague: number;
  lockdown: number;
  maelstrom: number;
  irradiate: number;
  stasis: number;
  /** Whether the unit cannot be hurt. */
  invincible: boolean;
  readonly hallucinated: boolean;
  readonly cloaked: boolean;
  readonly burrowed: boolean;
  /** True for about a second after something hit the unit. */
  readonly underAttack: boolean;
  /** Send the unit somewhere, as the Order action does, this unit alone. */
  order(order: "move" | "patrol" | "attack", target: Location): void;
  /** Hand the unit to another player. */
  give(player: Player): void;
  kill(): void;
  /** Take the unit off the map without a death. */
  remove(): void;
  /** Take hit points away — so many, or a percentage of the type's maximum; at 0 the unit dies. Shields are left alone. */
  damage(amount: number | { percent: number }): void;
  /** Give hit points back, up to the type's maximum. */
  heal(amount: number | { percent: number }): void;
  /** Centre a location on the unit, its size kept: then createUnit(), moveUnit() and the rest can happen where the unit is. */
  locate(location: Location): void;
}
/** Which units a loop or a pick looks at; a part left out matches all. units.Men, units.Buildings and units.Factories work as a type. */
${e}interface UnitFilter {
  type?: UnitType;
  owner?: Player;
  /** Inside this location. */
  at?: Location;
}
/** A key keyPressed() knows. F6 is not among them: the game reports no press of it. */
${e}type Key = __KEY_NAMES__;
/** What a chatted() pattern's captures are read as: {n} a number, {unit:unit} a unit type, {kind:ore|gas} the place of the word in its list. */
${e}type ChatCapture<C extends string> = C extends \`\${infer N}:unit\` ? { readonly [K in N]: UnitType } : C extends \`\${infer N}:\${string}\` ? { readonly [K in N]: number } : { readonly [K in C]: number };
${e}type ChatValues<P extends string> = P extends \`\${string}{\${infer C}}\${infer Rest}\` ? ChatCapture<C> & ChatValues<Rest> : {};
__STATS_TYPES__
${e}interface ProgramOptions {
  /**
   * Who the program runs for (default P1). One player: one thread, as that player. AllPlayers, a
   * force (players.Force1) or a list of players: the program runs once for each of them at the
   * same time, CurrentPlayer is that player, and every variable is per player — each player has
   * their own copy (a variable declared with shared() is one cell they all share).
   */
  owner?: Player | readonly Player[];
  /** What the program is called: in the Explorer's list, and by a test — sim.program("waves"). */
  name?: string;
}
`}var un=Object.keys(lt).map(e=>JSON.stringify(e)).join(` | `),dn=Object.entries(lt).map(([e,t])=>`readonly ${e}: PlayerColor<${t}>`).join(`; `);function fn(e){let t=[];for(let[n,r]of Object.entries(Ee))t.push(`${e}type ${r} = ${I(n).map(e=>JSON.stringify(e)).join(` | `)};`);return t.join(`
`)}function pn(e){return`
/**
 * Define one trigger. The script's triggers become a contiguous, generated block of the
 * map's trigger list in the order they are defined; hand-made triggers around it are left alone.
 * @param players The player or players the trigger runs for.
 * @param conditions Up to 16 conditions; a trigger with none never fires.
 * @param actions Up to 64 actions.
 * @param options Execution flags: { preserve: true } is the same as a preserveTrigger() action.
 */
${e}function trigger(players: Player | readonly Player[], conditions: Conditions, actions: Actions, options?: TriggerOptions): Trigger;
/**
 * Code that runs in the game, every frame, from where it left off. Inside the arrow,
 * variables hold whole numbers (32-bit and signed, wrapping at the ends; u8, u16 and u32 are
 * the other widths), booleans, text, units and arrays (a const computed from them is
 * one too, and cannot be reassigned; \`let p = { lives: 3 }\` is a record of them); if / else,
 * while, do, for, switch, break, continue, ?: and functions (arguments passed by value,
 * return values allowed) all work; conditions go in an if or while and
 * actions stand as statements. The body runs until it sleeps or ends, all within one frame:
 * a loop runs to completion at once, so a loop that goes on for ever needs a sleep() inside
 * it — \`while (true) { …; sleep(frames(1)); }\` is a game loop. Arithmetic: + − × / %,
 * Math.min / max / abs, clamp(). Everything the body reads from outside (constants, helpers,
 * conditions, actions) is computed when you build — the editor underlines those parts — so
 * it cannot depend on the variables, except the amount of setResources / setDeaths /
 * setScore / setCountdownTimer, the unit count of createUnit / killUnitAt / removeUnitAt /
 * giveUnits and an action's unit type, which can be variables, and the text of displayText() /
 * print(), which can hold numbers of the program. The game's own values are reads:
 * minerals(P1), deaths(P1, unit), … and what the players do: keyPressed(), clicked(), mouse(), chatted().
 *
 * A map with a program in it needs StarCraft: Remastered: the programs are built into the
 * saved map by the eudplib plugin. trigger() makes ordinary triggers that play anywhere.
 */
${e}function program(body: () => void, options?: ProgramOptions): void;
/**
 * A function that runs in the game, for programs to call — from any file, imported like any
 * other: \`export const award = game((p: Player, n: number) => { setResources(p, "add", n, "ore"); })\`.
 * Its body follows program()'s rules; arguments pass by value and it may return a value. Calling it when the script is built is an error.
 */
${e}function game<F extends (...args: any[]) => unknown>(body: F): GameFunction<F>;
/** Three preserved triggers of sixty-two Wait(0) each: the trigger loop runs every frame. Owned by one player whose triggers never wait. */
${e}function hyperTriggers(owner?: Player): void;
/** A coin toss, inside program() only: \`flag = random()\`, \`if (random() && …)\`. */
${e}function random(): boolean;
/** A whole number from 0 to n − 1, picked by the game; inside program() only: \`let lane = random(3)\`. n may be a variable; 0 gives 0. */
${e}function random(n: number): number;
/** A length of time in seconds, for sleep(): twenty-four frames a second at Fastest. */
${e}function seconds(n: number): Duration;
/** A length of time in minutes, for sleep(). */
${e}function minutes(n: number): Duration;
/** A length of time in frames of the game, for sleep(): sleep(frames(1)) ends this frame's turn and goes on in the next. */
${e}function frames(n: number): Duration;
/** @deprecated The same as frames(): a program's clock is the frame. */
${e}function cycles(n: number): Duration;
/**
 * Pause the program, inside program() only: the statements after it run that much later, and nothing
 * else of this program runs meanwhile (other programs and triggers go on). \`while (true) { spawn(); sleep(seconds(15)); }\`
 * is a wave every fifteen seconds. Unlike wait(), it stalls no other trigger.
 */
${e}function sleep(duration: Duration): void;
/** True on the frame its condition becomes true, false until it becomes false and true again. Inside program(), in an if: \`if (rose(bring(…)))\`. */
${e}function rose(condition: Condition | boolean): boolean;
/** True the first time its condition holds, never again. Inside program(), in an if. */
${e}function once(condition: Condition | boolean): boolean;
/** In a program that runs for several players, a variable they all share instead of one per player: \`let total = shared(0)\`. */
${e}function shared(initial: number): number;
${e}function shared(initial: boolean): boolean;
${e}function shared(initial: number[]): number[];
${e}function shared(initial: boolean[]): boolean[];
/** The value kept within low … high: Math.min(Math.max(value, low), high). Works on variables inside program() and on numbers outside. */
${e}function clamp(value: number, low: number, high: number): number;
/** The same 32 bits read as a u32: u32(-1) is 4 294 967 295. Costs nothing in a program; \`x >>> 0\` says the same. */
${e}function u32(value: number): u32;
/** The same 32 bits read as a signed number: i32(4294967295) is -1. Costs nothing in a program; \`x | 0\` of a u32 says the same. */
${e}function i32(value: number): number;
/**
 * Reads, inside program() only: a value the game holds, read when the line runs. Use it wherever a
 * number goes — \`let ore = minerals(P1)\`, \`if (minerals(CurrentPlayer) > price * 2)\`,
 * \`setResources(P2, "set", minerals(P1), "ore")\`. Every condition that compares a quantity is
 * also a read when called without its comparison and amount: \`deaths(P1, units.TerranMarine)\`,
 * \`bring(P1, units.AnyUnit, locations.Base)\`, \`score(P1, "kills")\`, \`countdownTimer()\`.
 * What to read — the player, the unit, the location — is known when you build.
 */
/** A player's minerals. */
${e}function minerals(player: Player): number;
/** A player's gas. */
${e}function gas(player: Player): number;
/** A player's minerals, gas, or both added up: what accumulate() compares. */
${e}function resources(player: Player, resource: ResourceKind | number): number;
/** How many units of a type a player has — at a location (what bring() compares) or anywhere (what command() compares). */
${e}function countUnits(player: Player, unit: UnitType, location?: Location): number;
/** How many units of a type a player has killed: what kill() compares. */
${e}function kills(player: Player, unit: UnitType): number;
/** The countdown timer, in game seconds: what countdownTimer() compares. A game second is sixteen frames, so at Fastest the timer runs about one and a half times as fast as sleep(seconds()). */
${e}function countdown(): number;
/** Game seconds since the start: what elapsedTime() compares. A game second is sixteen frames: after sleep(seconds(14)) at Fastest it reads about 21. */
${e}function elapsed(): number;
/** The race a player is playing, as one of races.*: \`if (race(CurrentPlayer) == races.Zerg)\`. */
${e}function race(player: Player): Race;
/** What holds a player's slot, as one of slots.*: \`if (slot(P3) == slots.Computer)\` — a melee computer and a Use Map Settings one alike. */
${e}function slot(player: Player): Slot;
/** Whether a person plays this slot. */
${e}function isHuman(player: Player): boolean;
/** Whether the player has left the game (P1 … P8). A computer never does. */
${e}function hasLeft(player: Player): boolean;
/**
 * A player's supply as the top bar shows it: "used", "max" (the cap, 200 unless the map changed it)
 * or "provided" (by depots, overlords, pylons). Of the race the player plays unless one is given.
 */
${e}function supply(player: Player, of?: "used" | "max" | "provided", race?: Race): number;
/** The races, as race() returns them and supply() takes them. */
${e}const races: { readonly Zerg: Race<0>; readonly Terran: Race<1>; readonly Protoss: Race<2> };
/** What a slot can hold, as slot() returns it. */
${e}const slots: { readonly Empty: Slot<0>; readonly Computer: Slot<1>; readonly Human: Slot<2>; readonly Rescuable: Slot<3>; readonly Neutral: Slot<7> };
/**
 * Units on the map, inside program() only. Each of these looks through the game's 1700 unit slots when the
 * line runs — once or a few times a second is nothing, every frame for every player adds up (the editor
 * notes it at the end of the line). What to look for is known when you build. A loop over units runs
 * within the frame: no sleep() inside it.
 */
/**
 * What unitsAt(), unitsOf() and allUnits() give: the units of the game the filter matches, as they are when the line
 * runs. They come in no order, so there is no place and no sort; filter() keeps them in an array of the program.
 */
${e}interface UnitSet extends Iterable<Unit> {
  /** \`unitsOf(P1).forEach((u) => u.heal(10));\` */
  forEach(fn: (unit: Unit) => void): void;
  some(fn: (unit: Unit) => boolean): boolean;
  every(fn: (unit: Unit) => boolean): boolean;
  /** One that matches, or null. */
  find(fn: (unit: Unit) => boolean): Unit | null;
  /** The ones that match, kept in an array: \`const weak = unitsOf(P1).filter((u) => u.hp < 20);\` */
  filter(fn: (unit: Unit) => boolean): Unit[];
  /** A number from each, in an array. */
  map(fn: (unit: Unit) => number): number[];
  map(fn: (unit: Unit) => boolean): boolean[];
  /** \`const hp = unitsOf(P1).reduce((sum, u) => sum + u.hp, 0);\` */
  reduce(fn: (so: number, unit: Unit) => number, start: number): number;
  reduce(fn: (so: boolean, unit: Unit) => boolean, start: boolean): boolean;
}
/** The units inside a location: \`for (const u of unitsAt(locations.Pen, { owner: P2 })) u.kill();\` */
${e}function unitsAt(location: Location, filter?: Omit<UnitFilter, "at">): UnitSet;
/** A player's units: \`for (const u of unitsOf(CurrentPlayer, { type: units.TerranMarine })) u.heal(10);\` */
${e}function unitsOf(player: Player, filter?: Omit<UnitFilter, "owner">): UnitSet;
/** Every unit on the map the filter matches. */
${e}function allUnits(filter?: UnitFilter): UnitSet;
/** The first unit the filter matches, or null. */
${e}function first(filter?: UnitFilter): Unit | null;
/** The unit of a type nearest to the centre of a location, or null; units.AnyUnit for any type. */
${e}function nearest(unit: UnitType, location: Location, filter?: Omit<UnitFilter, "type">): Unit | null;
/** One of the units the filter matches, picked by the game, or null. */
${e}function randomUnit(filter?: UnitFilter): Unit | null;
/**
 * The game's own tables, inside program() only: what a unit type costs, what a weapon does, a player's
 * upgrades. Read a field as a number, assign to it, += it: \`stats(units.TerranMarine).minerals = 25;\`
 * \`stats(weapons.GaussRifle).damage += 2;\` \`stats(P1).upgrades[upgrades.TerranInfantryWeapons] = 3;\`
 * A write lasts for the game. Only fields seen working in StarCraft: Remastered are here.
 */
${e}function stats(unit: UnitType): UnitTypeStats;
${e}function stats(weapon: Weapon): WeaponStats;
${e}function stats(upgrade: Upgrade): UpgradeStats;
${e}function stats(tech: Tech): TechStats;
${e}function stats(player: Player): PlayerStats;
/** The player colours stats(player).color takes. */
${e}const colors: { __COLOR_TABLE__ };
/**
 * A player's name, for a text a program shows: displayText(\`\${name(CurrentPlayer)} wins\`). The game
 * fills it in when the text is shown, so it works inside program() only.
 */
${e}function name(player: Player): string;
/** The colour code of a player's colour, for a text a program shows: \`\${color(P2)}\${name(P2)}\`. Inside program() only. */
${e}function color(player: Player): string;
/**
 * Show text, inside program() only. Like displayText(), whose text may hold the program's numbers too —
 * displayText(\`\${gold} gold left\`) — but for someone else, or in the middle of the screen where the
 * game's own messages ("Not enough minerals") appear: print(\`Wave \${wave}\`, { to: AllPlayers, position: "center" }).
 */
${e}function print(text: string, options?: { to?: Player; position?: "chat" | "center" }): void;
/**
 * What the players do, inside program() only. A key, a click and a typed line are true on the one
 * frame they arrive, so look for them in a loop that runs every frame:
 * \`while (true) { if (keyPressed(CurrentPlayer, "F2")) …; sleep(frames(1)); }\`. They reach every
 * player's computer in step, a few frames after they happen. The player is one of P1 … P8 or
 * CurrentPlayer — in a program with \`{ owner: AllPlayers }\`, each player's own keys.
 * The map gives up a little for it: one free location among the first 63 (nine when the mouse is read),
 * the Valkyrie unit type, and Player 12 to hold the units that carry the input.
 */
/** True on the frame a player's press of a key arrives. Not while the player is typing a message. */
${e}function keyPressed(player: Player, key: Key): boolean;
/** True on the frame a player's press of a mouse button arrives ("left" when none is named). */
${e}function clicked(player: Player, button?: "left" | "right" | "middle"): boolean;
/** Where a player's mouse is on the map, in pixels (32 to a tile): \`const at = mouse(CurrentPlayer);\` keeps the place as it is now. */
${e}function mouse(player: Player): { readonly x: number; readonly y: number };
/** The unit nearest a player's mouse and no farther from it than \`within\` pixels (48 when not given), or null. */
${e}function underMouse(player: Player, filter?: UnitFilter & { within?: number }): Unit | null;
/**
 * What a player typed, on the frame the line arrives: null, or the values the pattern names.
 * \`const m = chatted(CurrentPlayer, "-give {n}"); if (m) setResources(CurrentPlayer, "add", m.n, "ore");\`
 * The pattern's own text is matched exactly and the whole line has to fit it. {n} reads a whole number
 * (up to 1 048 575), {unit:unit} a unit type by its name — the rest of the line, so it comes last —
 * and {kind:ore|gas} one of the listed words, giving its place in the list (0, 1, …); names and words
 * match whatever the capitals. Up to three values. A game played alone has no chat: test these in a
 * multiplayer game, which one person can host.
 */
${e}function chatted<const P extends string>(player: Player, pattern: P): ChatValues<P> | null;
/** Centre a location on a point of the map, in pixels, its size kept; inside program() only. With mouse(): \`centerLocation(locations.Cursor, at.x, at.y)\`, then createUnit() there. */
${e}function centerLocation(location: Location, x: number, y: number): void;
/** Keep a condition or action in the trigger but switched off (StarEdit's disabled state). */
${e}function disabled<T extends Condition | Action>(item: T): T;
/**
 * The opposite of a condition, for a trigger's conditions list: a comparison flips ("at least 3" becomes
 * "at most 2"), a switch test flips, always becomes never. Throws for "exactly n" and for conditions the
 * game cannot negate in one condition; inside program(), if (!…) handles every condition.
 */
${e}function not(condition: Condition): Condition;
/** A condition by raw type number and record fields, for types the editor does not know. */
${e}function condition(${zt.map(e=>`${e}?: number`).join(`, `)}): Condition;
/** An action by raw type number and record fields, for types the editor does not know. */
${e}function action(${Bt.map(e=>`${e}?: number`).join(`, `)}): Action;
/** EUD: compare the 32-bit value at a memory address (1.16.1 layout; Remastered emulates it). deaths at player EPD(address). */
${e}function memory(address: number, comparison: Comparison | number, value: number): Condition;
/** EUD: set / add to / subtract from the 32-bit value at a memory address (1.16.1 layout; Remastered emulates it). */
${e}function setMemory(address: number, modifier: Modifier | number, value: number): Action;
/** Preserve Trigger: the trigger runs again next cycle instead of once. */
${e}function preserve(): Action;
`}function mn(e,t,n,r){let i=L(n),a=i.map(e=>`${e.name}${e.optional?`?`:``}: ${Oe(e.arg.kind)}`),o=`/** ${n.args.length?`${n.name} — ${n.args.map(e=>e.label).join(`, `)}`:n.name} */\n${e}function ${t}(${a.join(`, `)}): ${r};`;if(r!==`Condition`||!nn.has(t))return o;let s=i.filter(e=>e.arg.kind!==`comparison`&&e.arg.kind!==`amount`).map(e=>`${e.name}: ${Oe(e.arg.kind)}`);return`${o}\n/** ${n.name}, as a number: what the condition compares, read inside program(). */\n${e}function ${t}(${s.join(`, `)}): number;`}function hn(e,t,n=()=>!0,r){let i=[`/** ${t.doc} */`,`${e}const ${t.object}: {`];r&&i.push(`  // ${r}`);for(let e of t.entries)e.keys.forEach((r,a)=>{n(r,a)&&i.push(`  readonly ${je(r)}: ${t.type}<${e.value}>;`)});return i.push(`};`),i.join(`
`)}var gn=e=>/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(e),_n={unit:[`UnitTypeStats`,`units.dat, for one unit type. Most fields reach the units made after the write; the ones already on the map keep what they were made with.`],weapon:[`WeaponStats`,`weapons.dat, for one weapon: every unit using it follows at once.`],upgrade:[`UpgradeStats`,`upgrades.dat, for one upgrade.`],tech:[`TechStats`,`techdata.dat, for one technology.`],player:[`PlayerStats`,`The player tables, for one player.`]};function vn(e){return Object.keys(ct).map(t=>{let[n,r]=_n[t],i=[`/** ${r} */`,`${e}interface ${n} {`];for(let e of ct[t]){let t=e.type??(e.boolean?`boolean`:`number`);i.push(`  /** ${e.doc}${e.writeOnly?` Set only.`:``} */`),i.push(e.keyed?`  readonly ${e.name}: { [${e.keyed.kind}: number]: ${t} };`:`  ${e.readonly?`readonly `:``}${e.name}: ${t};`)}return i.push(`}`),i.join(`
`)}).join(`
`)}function yn(e,t){let n=[];for(let r of t.players.entries)r.value<12&&n.push(`/** ${r.keys[1]} */\n${e}const ${r.keys[0]}: Player<${r.value}>;`);return n.push(`/** The player the trigger is running for. */\n${e}const CurrentPlayer: Player<13>;`),n.push(`/** Every player. */\n${e}const AllPlayers: Player<17>;`),n.join(`
`)}function bn(e,t,n){if(!n)return Gt(t).map(t=>hn(e,t)).join(`
`);let r=e=>/^Switch ?(\d+)$/.test(e);return[hn(e,t.players),hn(e,t.units,e=>/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(e),`Every unit is also indexable by its StarEdit name: ${t.units.object}["Terran Marine"].`),hn(e,t.locations),hn(e,t.switches,e=>{let t=/^Switch(\d+)$/.exec(e);return t?Number(t[1])<=16:!r(e)},`Switch1 … Switch256 exist; the first sixteen are listed. A switch given a name in the map is listed by that name.`),`/** AI scripts, by StarEdit name ("Terran Custom Level") or four-character code. */\n${e}const ${t.aiScripts.object}: { readonly [name: string]: AiScript<number> };`,...[t.weapons,t.upgrades,t.techs].map(t=>hn(e,t,gn))].join(`
`)}function xn(e,t,n,r){return[ln(t).replace(`__COLOR_NAMES__`,un).replace(`__KEY_NAMES__`,ht.map(e=>JSON.stringify(e)).join(` | `)).replace(`__STATS_TYPES__`,vn(t)),fn(t),pn(e).replace(`__COLOR_TABLE__`,dn),`// ── Conditions ──`,...[...we].map(([t,n])=>mn(e,t,n,`Condition`)),``,`// ── Actions ──`,...[...Te].map(([t,n])=>mn(e,t,n,`Action`)),``,`// ── The map ──`,yn(e,n),bn(e,n,r)].join(`
`)}var Sn=`
interface ArrayConstructor {
  new <T = number>(arrayLength: number): T[];
  <T = number>(arrayLength: number): T[];
}
`,Cn=`
// ── Tests: they run in the editor's simulator, never in the game, and cost the map nothing ──

/** A unit of the simulated game, as a test sees it. */
export interface SimUnit {
  readonly type: UnitType; readonly owner: Player; readonly x: number; readonly y: number;
  readonly hp: number; readonly maxHp: number; readonly shields: number; readonly maxShields: number; readonly energy: number;
  readonly kills: number; readonly resources: number; readonly invincible: boolean; readonly burrowed: boolean; readonly cloaked: boolean; readonly hallucinated: boolean;
  /** Still on the map. */
  readonly alive: boolean;
}

/**
 * The world a test is handed, new for every test: the map's placed units and locations, the script's
 * programs at frame 0 and its trigger()s beside them, random() the same every run. Units are made, given,
 * moved, killed and counted; nothing walks, fights or is built, and nothing dies but by the script or the test.
 */
export interface Sim {
  /** Units for a player at a location's centre, as createUnit() makes them. They are given back. */
  place(player: Player, type: UnitType, at: Location, count?: number): SimUnit[];
  /** A unit dies: what a fight is in a test. \`by\`: the player whose kill it is. */
  kill(unit: SimUnit, by?: Player): this;
  /** A unit goes without dying. */
  remove(unit: SimUnit): this;
  give(unit: SimUnit, to: Player): this;
  /** A unit to a location's centre, or to a point in pixels. */
  move(unit: SimUnit, to: Location | { x: number; y: number }): this;

  /** Run the game for so many frames (24 a second at Fastest). */
  frames(n?: number): this;
  seconds(n: number): this;
  /** Run until \`done()\` is true. The test fails when \`most\` frames pass first (2400 unless said), so no test hangs. */
  until(done: () => unknown, most?: number): this;
  /** The frames run so far. */
  readonly frame: number;
  /** random() from this number on. Before anything that draws one. */
  seed(n: number): this;

  /** A key goes down for the next frame: what keyPressed() finds. */
  press(key: Key, player?: Player): this;
  click(button?: "left" | "right" | "middle", player?: Player): this;
  /** A line of chat, for the next frame: what chatted() finds. */
  type(line: string, player?: Player): this;
  moveMouse(x: number, y: number, player?: Player): this;

  count(player: Player, type: UnitType, at?: Location): number;
  /** The units on the map, in the order of the game's unit table. */
  units(filter?: { owner?: Player; type?: UnitType; at?: Location }): SimUnit[];
  resources(player: Player): { ore: number; gas: number };
  deaths(player: Player, type: UnitType): number;
  kills(player: Player, type: UnitType): number;
  switch(n: Switch): boolean;
  /** Where a location is now: a program may have moved it. */
  location(n: Location): { left: number; top: number; right: number; bottom: number } | undefined;

  /**
   * A program's variables, by their names in the source: numbers, booleans, texts, arrays, a record as an
   * object, a unit (null for none). The program by the name its options give it — program(() => { … },
   * { name: "waves" }) — or by its place in the script, from 0. Of a per-player program, \`player\`'s.
   */
  program(name?: string | number, player?: Player): Readonly<Record<string, any>>;

  /** What was shown, in order: to anybody, or what one player saw. */
  printed(player?: Player): string[];
  /** Everything that happened, by frame. */
  readonly events: readonly { frame: number; text: string; player: number; file?: string; line?: number }[];
  /** What a program did that is always a mistake: an index past an array's end, the stack's depth, the heap full. One the test did not ask for (expect(sim).toHaveFaulted) fails it. */
  readonly faults: readonly { message: string; cycle: number }[];
}

export interface Expectation<T> {
  toBe(expected: T): void;
  toEqual(expected: unknown): void;
  toBeTruthy(): void;
  toBeFalsy(): void;
  toBeNull(): void;
  toBeDefined(): void;
  toBeUndefined(): void;
  toBeGreaterThan(n: number): void;
  toBeGreaterThanOrEqual(n: number): void;
  toBeLessThan(n: number): void;
  toBeLessThanOrEqual(n: number): void;
  toContain(item: unknown): void;
  toHaveLength(n: number): void;
  toMatch(pattern: RegExp | string): void;
  toThrow(message?: RegExp | string): void;
  /** expect(sim): a text was shown — all of it, a part of it, or a pattern. \`to\`: to that player. */
  toHavePrinted(text: RegExp | string, options?: { to?: Player }): void;
  /** expect(sim): the simulator said a program did what is always a mistake. Asking is what lets the test go on past it. */
  toHaveFaulted(message?: RegExp | string): void;
}
export function expect<T>(actual: T): Expectation<T> & { readonly not: Expectation<T> };

export interface TestOptions {
  /** Without the map's player settings the world has one player: this one. */
  as?: Player;
}
type TestBody<A extends readonly unknown[] = []> = (sim: Sim, ...args: A) => void;
interface TestEach<F> { <T>(cases: readonly T[]): (name: string, fn: F extends "suite" ? (...args: T extends readonly unknown[] ? T : [T]) => void : TestBody<T extends readonly unknown[] ? T : [T]>) => void }
interface TestCall { (name: string, fn: TestBody): void; (name: string, options: TestOptions, fn: TestBody): void; each: TestEach<"test"> }
interface SuiteCall { (name: string, body: () => void): void; each: TestEach<"suite"> }
/** A test: ordinary TypeScript, run in the simulator after every compile that goes through. Not async: nothing in sim waits. */
export const test: TestCall & { only: TestCall; skip: TestCall };
export const it: typeof test;
/** Tests under one name. */
export const describe: SuiteCall & { only: SuiteCall; skip: SuiteCall };
/** Before each test of this describe (or of the file) and of those inside it. */
export function beforeEach(fn: (sim: Sim) => void): void;
export function afterEach(fn: (sim: Sim) => void): void;
`;function wn(e=en(),t={}){let n=t.compact===!0,r=xn(`declare `,``,e,n);return n?`${cn}${r}\n${Sn}`:`${cn}${r}\n${Sn}\n// ── The same names, as a module: import { trigger, units } from "${Me}"; ──\ndeclare module "${Me}" {\n${`${xn(`export `,`export `,e,!1)}\n${Cn}`.split(`
`).map(e=>e&&`  ${e}`).join(`
`)}\n}\n`}[...rn,...an,...on];function Tn(e,t){let n=e.split(`/`).slice(0,-1);for(let e of t.split(`/`))e!==`.`&&e!==``&&(e===`..`?n.pop():n.push(e));return n.join(`/`)}function En(e,t,n){if(!n.startsWith(`./`)&&!n.startsWith(`../`))return null;let r=Tn(t,n);for(let t of[r,`${r}.ts`,r.replace(/\.js$/,`.ts`),`${r}/index.ts`])if(e.has(t))return t;return null}function Dn(e,t,n=null,r={}){let i=e=>{if(e<=0)return 0;let n=t[e-1];return n?`index`in n?n.index:n.text:0},a=e=>({...e,text:i(e.text),wav:i(e.wav)}),o=e=>({...e}),s=e=>e.kind===`call`?{...e,call:f(e.call)}:e.kind===`unitAt`?{...e,ptr:d(e.ptr),epd:d(e.epd),uid:d(e.uid)}:e,c=e=>Qe(e)?u(e):it(e)?s(e):d(e),l={num:e=>d(e),bool:e=>d(e),call:e=>f(e)},u=e=>et(e,l),d=e=>{let t=tt(e,l);if(t)return t;switch(e.kind){case`unitField`:case`unitPart`:case`unitAlive`:case`unitFlag`:return{...e,unit:s(e.unit)};case`unitSame`:return{...e,left:s(e.left),right:s(e.right)};case`unary`:case`cast`:return{...e,expr:d(e.expr)};case`element`:return{...e,index:d(e.index)};case`binary`:case`compare`:return{...e,left:d(e.left),right:d(e.right)};case`ternary`:return{...e,cond:d(e.cond),whenTrue:d(e.whenTrue),whenFalse:d(e.whenFalse)};case`intrinsic`:return{...e,args:e.args.map(d)};case`randomInt`:return{...e,bound:d(e.bound)};case`call`:return{...e,call:f(e.call)};case`cond`:return{...e,record:o(e.record)};case`test`:return{...e,expr:d(e.expr)};case`and`:case`or`:return{...e,items:e.items.map(d)};case`not`:return{...e,expr:d(e.expr)};case`edge`:return{...e,cond:d(e.cond)};default:return e}},f=e=>({...e,params:e.params.map(e=>({...e,init:c(e.init)})),body:e.body.map(p)}),p=e=>{switch(e.kind){case`declare`:return{...e,init:c(e.init)};case`assignUnit`:return{...e,value:s(e.value)};case`unitLoop`:return{...e,body:e.body.map(p)};case`unitWrite`:return{...e,unit:s(e.unit),value:d(e.value)};case`unitDo`:return{...e,unit:s(e.unit),verb:e.verb.do===`damage`||e.verb.do===`heal`?{...e.verb,amount:d(e.verb.amount)}:e.verb};case`tableWrite`:return{...e,value:c(e.value)};case`assignText`:return{...e,value:u(e.value)};case`storeText`:return{...e,index:d(e.index),value:u(e.value)};case`releaseText`:return{...e,index:d(e.index)};case`textLoop`:return{...e,of:u(e.of),body:e.body.map(p)};case`assign`:return{...e,value:d(e.value)};case`declareArray`:return{...e,...e.init?{init:e.init.map(d)}:{},...e.fill?{fill:d(e.fill)}:{}};case`store`:return{...e,index:d(e.index),value:d(e.value)};case`push`:return{...e,value:d(e.value)};case`setLength`:return{...e,value:d(e.value)};case`assignBool`:return{...e,value:d(e.value)};case`if`:return{...e,cond:d(e.cond),then:e.then.map(p),...e.else?{else:e.else.map(p)}:{}};case`while`:return{...e,...e.cond?{cond:d(e.cond)}:{},body:e.body.map(p)};case`do`:return{...e,body:e.body.map(p),cond:d(e.cond)};case`for`:return{...e,...e.cond?{cond:d(e.cond)}:{},update:e.update.map(p),body:e.body.map(p)};case`unrolled`:return{...e,iterations:e.iterations.map(e=>e.map(p))};case`switch`:return{...e,value:d(e.value),cases:e.cases.map(e=>({...e,body:e.body.map(p)}))};case`return`:return e.value?{...e,value:c(e.value)}:e;case`action`:return{...e,record:a(e.record),...e.variables?{variables:e.variables.map(e=>({...e,expr:d(e.expr)}))}:{},...e.text?{text:u(e.text)}:{}};case`centerLocation`:return{...e,x:d(e.x),y:d(e.y)};case`print`:return{...e,parts:$e(e.parts,l)};case`call`:return{...e,call:f(e.call)};case`block`:return{...e,body:e.body.map(p)};default:return e}},m=r.heapCells!==void 0&&r.heapCells!==16384&&e.some(e=>e.arrays.some(e=>e.dynamic))?{heap:We(r.heapCells)}:{},h=r.stackDepth!==void 0&&r.stackDepth!==1024&&e.some(e=>e.functions?.some(e=>e.recursive))?{stack:Je(r.stackDepth)}:{};return JSON.stringify({version:e[0]?.version??1,...m,...h,...n?{input:n}:{},programs:e.map(e=>({...e,...e.functions?{functions:e.functions.map(e=>({...e,body:e.body.map(p)}))}:{},body:e.body.map(p)}))})}new Set(Ye);var On=e=>e.kind===`unit`||e.kind===`text`&&e.text!==`id`?3:1;new Set(Ye);var kn=4;function An(e,t,n){let r=n??jn(e);return 1+t.arrays.length*kn+t.vars.reduce((e,t)=>e+(r.get(t)??1),0)}function jn(e){let t=new Map;for(let n of ot(e.body))t.set(n.id,On(n));for(let n of e.functions??[])for(let e of[...n.params,...n.result?[n.result.decl]:[],...ot(n.body)])t.set(e.id,On(e));return t}function Mn(e){let t=0;for(let n of e){if(!n.functions?.some(e=>e.recursive))continue;let e=jn(n);rt(n.functions,r=>{r.saves&&(t=Math.max(t,An(n,r.saves,e)))})}return t}r.SetMissionObjectives,r.Transmission,r.LeaderboardControl,r.LeaderboardControlAt,r.LeaderboardResources,r.LeaderboardKills,r.LeaderboardPoints,r.LeaderboardGoalControl,r.LeaderboardGoalControlAt,r.LeaderboardGoalResources,r.LeaderboardGoalKills,r.LeaderboardGoalPoints,r.LeaderboardGreed,r.CreateUnit,r.CreateUnitWithProperties,r.KillUnitAt,r.RemoveUnitAt,r.GiveUnits;var Nn=`main.ts`;function Pn(e){return e.kind===`unit`?`a unit of the game, or none — checked before every use: once the unit is gone it reads 0 and takes no write`:e.kind===`boolean`?`a boolean`:e.kind===`text`?"a text — `length`, `s[i]` and `slice` count characters (code points), and a made text holds 1 023 bytes":e.bits?`a u${e.bits} number (0 … ${2**e.bits-1}, stopping at either end)`:e.unsigned?"a u32 number (0 … 4 294 967 295, wrapping at either end as `x >>> 0` does)":"a number (−2 147 483 648 … 2 147 483 647, whole, wrapping at either end as `x | 0` does)"}function q(e){return e.replace(/\\/g,`/`).replace(/^(\.\/)+/,``).replace(/\/+/g,`/`)}var Fn=import.meta.url,In=`[A-Za-z_$][\\w$]*`;function Ln(e,t){let n=[],r=RegExp(`(^|[^\\w$.])(${t.replace(/[$]/g,`\\$&`)})\\.(${In})`,`g`),i=[0];for(let t=0;t<e.length;t++)e[t]===`
`&&i.push(t+1);let a=e=>{let t=0,n=i.length-1;for(;t<n;){let r=t+n+1>>1;i[r]<=e?t=r:n=r-1}return t};for(let t of e.matchAll(r)){let e=t.index+t[1].length,r=e+t[2].length+1,o=a(e);n.push({key:t[3],line:o+1,column:r-i[o]+1,endColumn:r-i[o]+1+t[3].length})}return n}function Rn(e,t){let n=[],r=new Map(e.entries.map(e=>[e.value,e.keys]));for(let e of t.entries){let t=r.get(e.value);if(!t)continue;let i=t.filter(t=>!e.keys.includes(t)),a=e.keys.filter(e=>!t.includes(e));i.forEach((t,r)=>n.push({value:e.value,from:t,to:a[r]??a[0]??e.keys[0]}))}return n}function zn(e,t,n){let r=new Set;for(let n of e)n.object===t&&r.add(n.key);return n.filter(e=>r.has(e.from))}function Bn(e,t,n,r){let i=new Map(r.map(e=>[e.from,e.to])),a=0,o={};for(let[r,s]of Object.entries(e)){let e=t.filter(e=>q(e.file)===q(r)&&e.object===n&&i.has(e.key));if(e.length===0){o[q(r)]=s;continue}let c=s.split(`
`);for(let t of[...e].sort((e,t)=>t.line-e.line||t.column-e.column)){let e=c[t.line-1];if(e===void 0||t.endLine!==t.line)continue;let n=t.quoted?JSON.stringify(i.get(t.key)):i.get(t.key);c[t.line-1]=e.slice(0,t.column-1)+n+e.slice(t.endColumn-1),a++}o[q(r)]=c.join(`
`)}return{files:o,count:a}}var Vn=`https://cdn.jsdelivr.net/gh/scm-js/plugin-trigscript@monaco-0.56.0-2/dist`,Hn=`monacoDist`,Un=null,Wn=null;function Gn(e){let t=new Blob([`import ${JSON.stringify(e)};\n`],{type:`text/javascript`});return new Worker(URL.createObjectURL(t),{type:`module`})}function Kn(e){let t=e.typescript??e.languages.typescript;if(!t?.typescriptDefaults)throw Error(`Monaco loaded without its TypeScript language service.`);return t}var qn=100;function Jn(e){let t=Kn(e);t.typescriptDefaults.setCompilerOptions({strict:!0,target:t.ScriptTarget.ESNext,module:t.ModuleKind.ESNext,moduleResolution:qn,lib:[`lib.es2023.d.ts`],noEmit:!0,types:[]}),t.typescriptDefaults.setEagerModelSync(!0),t.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!1,noSyntaxValidation:!1}),e.editor.defineTheme(`scm`,{base:`vs-dark`,inherit:!0,rules:[{token:`comment`,foreground:`5d6675`,fontStyle:`italic`},{token:`keyword`,foreground:`e6b95c`},{token:`string`,foreground:`4fd1c5`},{token:`number`,foreground:`f4d08a`},{token:`type.identifier`,foreground:`8fd3ff`},{token:`identifier`,foreground:`dde2ea`},{token:`delimiter`,foreground:`99a2b3`},{token:`operator`,foreground:`99a2b3`}],colors:{"editor.background":`#0a0c10`,"editor.foreground":`#dde2ea`,"editor.lineHighlightBackground":`#12151b`,"editor.lineHighlightBorder":`#12151b`,"editorLineNumber.foreground":`#5d6675`,"editorLineNumber.activeForeground":`#99a2b3`,"editor.selectionBackground":`#2b4f80`,"editor.inactiveSelectionBackground":`#222732`,"editorCursor.foreground":`#e6b95c`,"editorIndentGuide.background1":`#222732`,"editorIndentGuide.activeBackground1":`#353c4b`,"editorWidget.background":`#191d25`,"editorWidget.border":`#2c3341`,"editorSuggestWidget.background":`#191d25`,"editorSuggestWidget.border":`#2c3341`,"editorSuggestWidget.selectedBackground":`#2b4f80`,"editorHoverWidget.background":`#191d25`,"editorHoverWidget.border":`#2c3341`,"editorError.foreground":`#d9534f`,"editorWarning.foreground":`#e0a545`,"scrollbarSlider.background":`#353c4b80`,"scrollbarSlider.hoverBackground":`#3b4453a0`,"editorGutter.background":`#0a0c10`,"minimap.background":`#0a0c10`,focusBorder:`#3a68a8`,"widget.shadow":`#000000a0`,"input.background":`#0a0c10`,"input.foreground":`#dde2ea`,"input.border":`#2c3341`,"quickInput.background":`#191d25`,"quickInput.foreground":`#dde2ea`,"quickInputList.focusBackground":`#2b4f80`,"quickInputList.focusForeground":`#dde2ea`,"list.hoverBackground":`#222732`,"list.highlightForeground":`#e6b95c`,"list.focusHighlightForeground":`#f4d08a`,"pickerGroup.border":`#2c3341`,"pickerGroup.foreground":`#99a2b3`,"keybindingLabel.background":`#222732`,"keybindingLabel.foreground":`#dde2ea`,"keybindingLabel.border":`#3b4453`,"keybindingLabel.bottomBorder":`#3b4453`,"menu.background":`#191d25`,"menu.foreground":`#dde2ea`,"menu.selectionBackground":`#2b4f80`,"menu.selectionForeground":`#dde2ea`,"menu.separatorBackground":`#2c3341`,"menu.border":`#3b4453`}})}function Yn(t=Vn){let n=t.replace(/\/+$/,``);return Un&&Wn!==n||(Un??=(async()=>{Wn=n,globalThis.MonacoEnvironment={getWorker:(e,t)=>Gn(`${n}/${t===`typescript`||t===`javascript`?`ts.worker.js`:`editor.worker.js`}`)};let t=`${n}/monaco.js`,r=await e(()=>import(t),[]);return Jn(r),r})().catch(e=>{throw Un=null,Wn=null,e})),Un}function Xn(e,t){Kn(e).typescriptDefaults.setExtraLibs([{content:t,filePath:`file:///${sn}`}])}var Zn=(e,t)=>e.Uri.parse(`file:///${q(t)}`),Qn=e=>q(e.path.replace(/^\/+/,``)),$n=`trigscript-build-time`,er=`Computed when the script is built, not in the game.`,tr=()=>[],nr=!1;function rr(e,t){tr=t,!nr&&(nr=!0,e.languages.registerHoverProvider(`typescript`,{async provideHover(t,n){if(t.uri.scheme!==`file`)return null;let r=t.getWordAtPosition(n);if(!r)return null;let i=await(await(await Kn(e).getTypeScriptWorker())(t.uri)).getDefinitionAtPosition(t.uri.toString(),t.getOffsetAt(n));for(let t of i??[]){let i=e.editor.getModel(e.Uri.parse(t.fileName));if(!i)continue;let a=i.getPositionAt(t.textSpan.start),o=Qn(i.uri),s=tr().find(e=>e.at&&q(e.at.file)===o&&e.at.line===a.lineNumber&&e.at.column===a.column);if(s)return{range:new e.Range(n.lineNumber,r.startColumn,n.lineNumber,r.endColumn),contents:[{value:`**${s.name}** is a variable of the program: ${Pn(s)}${s.shared?`, one value shared by every player the program runs for`:``}. It lives in the game while the map is played.`}]}}return null}}))}var ir=()=>[],ar=null;function or(e,t){if(ir=t,ar){ar.fire();return}let n=new e.Emitter;ar=n,e.languages.registerInlayHintsProvider(`typescript`,{onDidChangeInlayHints:n.event,provideInlayHints(t,n){if(t.uri.scheme!==`file`)return null;let r=Qn(t.uri);return{hints:ir().filter(e=>q(e.file)===r&&e.line>=n.startLineNumber&&e.line<=n.endLineNumber&&e.line<=t.getLineCount()).map(n=>({position:{lineNumber:n.line,column:t.getLineMaxColumn(n.line)},label:n.label,kind:e.languages.InlayHintKind.Type,paddingLeft:!0,tooltip:n.note})),dispose(){}}}})}function sr(){ar?.fire()}var cr=()=>null,lr=!1,ur=`trigscript`;function dr(e,t){cr=t,!lr&&(lr=!0,e.languages.registerLinkProvider(`typescript`,{provideLinks(t){let n=cr();return!n||t.uri.scheme!==`file`?{links:[]}:{links:Ln(t.getValue(),n.object).filter(e=>n.byKey.has(e.key)).map(t=>({range:new e.Range(t.line,t.column,t.line,t.endColumn),url:e.Uri.from({scheme:ur,path:`/location/${n.byKey.get(t.key).index}`}),tooltip:`Show on the map`}))}}}),e.editor.registerLinkOpener({open(e){if(e.scheme!==ur)return!1;let t=/^\/location\/(\d+)$/.exec(e.path),n=cr();if(!t||!n)return!0;let r=Number(t[1]),i=[...n.byKey.values()].find(e=>e.index===r);return i&&n.open(i),!0}}),e.languages.registerHoverProvider(`typescript`,{provideHover(t,n){let r=cr();if(!r||t.uri.scheme!==`file`)return null;let i=t.getWordAtPosition(n);if(!i||!t.getLineContent(n.lineNumber).slice(0,i.startColumn-1).endsWith(`${r.object}.`))return null;let a=r.byKey.get(i.word);return a?{range:new e.Range(n.lineNumber,i.startColumn,n.lineNumber,i.endColumn),contents:[{value:`**${a.name}** — location ${a.index+1}: ${a.w} × ${a.h} tiles at ${a.x}, ${a.y}. Ctrl+click to show it on the map.`}]}:null}}))}function fr(e,t,n,r=[]){for(let i of Object.keys(t)){let t=e.editor.getModel(Zn(e,i));t&&e.editor.setModelMarkers(t,`trigscript`,[...n.filter(e=>e.source!==`typescript`&&q(e.file)===q(i)).map(t=>({severity:e.MarkerSeverity.Error,message:t.message,startLineNumber:t.line,startColumn:t.column,endLineNumber:t.endLine,endColumn:t.endColumn})),...r.filter(e=>q(e.file)===q(i)&&e.line>=1&&e.line<=t.getLineCount()).map(n=>({severity:e.MarkerSeverity.Warning,message:n.message,startLineNumber:n.line,startColumn:t.getLineFirstNonWhitespaceColumn(n.line)||1,endLineNumber:n.line,endColumn:t.getLineMaxColumn(n.line)}))])}}var J=`trigscript-test`;function pr(e){for(let t of e.editor.getModels())t.uri.scheme===`file`&&t.uri.path.endsWith(`.ts`)&&t.dispose()}function mr(e){pr(e);let t=Kn(e).typescriptDefaults;t.setCompilerOptions(t.getCompilerOptions())}function hr(e,t,n,r,i,a){pr(e);let o=new Map,s=new Map,c=new Map,l=new Map,u=[],d=new Map,f=(t,n)=>{let r=e.editor.createModel(n,`typescript`,Zn(e,t));return o.set(t,r),s.set(t,r.onDidChangeContent(()=>i(t,r.getValue()))),r};for(let[e,t]of Object.entries(n))f(q(e),t);let p=q(r);o.has(p)||(p=[...o.keys()][0]);let m=e.editor.create(t,{model:o.get(p)??null,theme:`scm`,automaticLayout:!0,fontFamily:`"Cascadia Mono", "JetBrains Mono", ui-monospace, Consolas, Menlo, monospace`,fontSize:12.5,lineHeight:18,minimap:{enabled:!1},glyphMargin:!0,scrollBeyondLastLine:!1,renderLineHighlight:`line`,tabSize:2,insertSpaces:!0,wordWrap:`off`,fixedOverflowWidgets:!0,padding:{top:8,bottom:8},quickSuggestions:{other:!0,strings:!0,comments:!1},suggest:{showWords:!1}});m.onMouseDown(t=>{if(t.target.type!==e.editor.MouseTargetType.GUTTER_GLYPH_MARGIN)return;let n=t.target.position?.lineNumber,r=u.find(e=>q(e.file)===p&&e.line===n);r&&a?.(r.id)});let h=e=>{let t=q(e),n=o.get(t);if(!n||t===p)return;d.set(p,m.saveViewState()),p=t,m.setModel(n);let r=d.get(t);r&&m.restoreViewState(r)};return{editor:m,active:()=>p,show:h,files:()=>Object.fromEntries([...o].map(([e,t])=>[e,t.getValue()])),add(e,t){let n=q(e);o.has(n)||(f(n,t),i(n,t),h(n))},remove(e){let t=q(e),n=o.get(t);if(n){if(t===p){let e=[...o.keys()].find(e=>e!==t);e&&h(e)}s.get(t)?.dispose(),s.delete(t),o.delete(t),d.delete(t),c.delete(t),l.delete(t),n.dispose()}},rename(e,t){let n=q(e),r=q(t),i=o.get(n);if(!i||o.has(r))return;let a=i.getValue(),u=n===p,h=u?m.saveViewState():d.get(n)??null;s.get(n)?.dispose(),s.delete(n),o.delete(n),d.delete(n),c.delete(n),l.delete(n),u&&m.setModel(null),i.dispose();let g=f(r,a);d.set(r,h),u&&(p=r,m.setModel(g),h&&m.restoreViewState(h))},set(e,t){let n=o.get(q(e));n&&n.getValue()!==t&&n.setValue(t)},insert(t){let n=m.getSelection()??new e.Selection(1,1,1,1);m.executeEdits(`trigscript`,[{range:n,text:t,forceMoveMarkers:!0}]),m.focus()},cursor(){return{file:p,line:m.getPosition()?.lineNumber??1}},setTests(t,n){u=t;for(let[r,i]of o){let a=i.getLineCount(),o=[...t.filter(e=>q(e.file)===r&&e.line>=1&&e.line<=a).map(t=>({range:new e.Range(t.line,1,t.line,1),options:{glyphMarginClassName:`${J} ${J}-${t.state}`,glyphMarginHoverMessage:{value:t.title},stickiness:e.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges}})),...n.filter(e=>q(e.file)===r&&e.line>=1&&e.line<=a).map(t=>({range:new e.Range(t.line,i.getLineMaxColumn(t.line),t.line,i.getLineMaxColumn(t.line)),options:{after:{content:`  ${t.text}`,inlineClassName:`${J}-note`},...t.hover?{hoverMessage:{value:t.hover}}:{},showIfCollapsed:!0,stickiness:e.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges}}))];l.set(r,i.deltaDecorations(l.get(r)??[],o))}},decorate(t){for(let[n,r]of o){let i=t.filter(e=>q(e.file)===n).map(t=>({range:new e.Range(t.line,t.column,t.endLine,t.endColumn),options:{inlineClassName:$n,hoverMessage:{value:er},stickiness:e.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges}}));c.set(n,r.deltaDecorations(c.get(n)??[],i))}},dispose(){for(let e of s.values())e.dispose();m.dispose()}}}var gr=`3.10.4`,_r=`https://cdn.jsdelivr.net/npm/typescript@6.0.3/lib/typescript.js`,vr=(e=Vn)=>`${e.replace(/\/+$/,``)}/lib.d.ts`,yr=(e=Vn)=>e===Vn?`https://cdn.jsdelivr.net/gh/scm-js/plugin-trigscript@v${gr}/dist/compiler.js`:`${e.replace(/\/+$/,``)}/compiler.js`,br=(e=Vn)=>Fn.startsWith(`blob:`)&&!wr?Fn:yr(e),xr=15e3,Sr=`
importScripts(${JSON.stringify(_r)});
let loading = null;
let lib = null;
self.onmessage = async (e) => {
  const { id, moduleUrl, libUrl, files, names, tests } = e.data;
  try {
    if (!loading) loading = import(moduleUrl);
    let mod;
    try { mod = await loading; } catch (err) { loading = null; postMessage({ id, error: String((err && err.message) || err), fatal: true }); return; }
    // The plugin fetched as one bundle is a blob too, but one that exports the plugin and not the compiler.
    if (typeof mod.compileScript !== "function") { loading = null; postMessage({ id, error: "the module has no compiler in it", fatal: true }); return; }
    if (lib === null) {
      const r = await fetch(libUrl);
      if (!r.ok) throw new Error("Could not load the standard library from " + libUrl + " (" + r.status + ").");
      lib = await r.text();
    }
    postMessage({ id, result: mod.compileScript(self.ts, files, names, { lib, tests }) });
  } catch (err) {
    postMessage({ id, error: String((err && err.message) || err) });
  }
};
`,Cr=class extends Error{constructor(e){super(`The compiler could not start (${e}). It is tried again on the next check.`),this.name=`CompilerUnavailable`}},Y=null,wr=!1,Tr=null,Er=0,X=new Map,Dr=3e4,Or=null,kr=0;function Ar(){Or!==null&&(clearTimeout(Or),Or=null)}function jr(){!Y||kr>0||X.size>0||(Ar(),Or=setTimeout(()=>{Or=null,!(!Y||kr>0||X.size>0)&&(Y.terminate(),Y=null)},Dr))}function Mr(){kr++,Ar();let e=!1;return()=>{e||(e=!0,kr--,jr())}}function Nr(e){for(let[t,n]of X)X.delete(t),clearTimeout(n.timer),n.reject(Error(e))}var Pr=`retry by the bundle`;function Fr(e){if(Y?.terminate(),Y=null,Fn.startsWith(`blob:`)&&!wr){wr=!0,Nr(Pr);return}Tr={reason:e,at:Date.now()};for(let[t,n]of X)X.delete(t),clearTimeout(n.timer),n.reject(new Cr(e))}function Ir(e){let t=X.get(e);t&&(X.delete(e),Y?.terminate(),Y=null,Nr(`The compile was stopped.`),t.reject(Error(`The script did not finish in ${xr/1e3} seconds. Is there an endless loop outside program()?`)))}function Lr(){if(Tr){if(Date.now()-Tr.at<5e3)throw new Cr(Tr.reason);Tr=null}if(Ar(),Y)return Y;try{if(typeof Worker>`u`)throw Error(`this browser has no workers`);Y=new Worker(URL.createObjectURL(new Blob([Sr],{type:`text/javascript`})))}catch(e){throw Tr={reason:e.message,at:Date.now()},new Cr(Tr.reason)}return Y.onmessage=e=>{let t=e.data;if(t.fatal){Fr(`${t.error??`the compiler module did not load`}`);return}let n=X.get(t.id);n&&(X.delete(t.id),clearTimeout(n.timer),t.result?n.resolve(t.result):n.reject(Error(t.error??`Compile failed.`)),jr())},Y.onerror=e=>Fr(e.message||`the worker's scripts did not load`),Y}var Rr=class extends Error{constructor(){super(`A newer compile replaced this one.`),this.name=`CompileSuperseded`}};function zr(e,t=Vn){let n;try{n=Lr()}catch(e){return Promise.reject(e)}let r=++Er;for(let[e,t]of X)X.delete(e),clearTimeout(t.timer),t.reject(new Rr);return new Promise((i,a)=>{X.set(r,{resolve:i,reject:a,timer:setTimeout(()=>Ir(r),xr)});let o={id:r,moduleUrl:br(t),libUrl:vr(t),files:e.files,names:e.names,...e.tests?{tests:e.tests}:{}};n.postMessage(o)}).catch(n=>{if(n.message===Pr)return zr(e,t);throw n})}function Z(e,t){return e.used?.add(t),t}function Br(e,t,n){let r=tn(e,t);return r?R(Z(n,e.object),r.keys[0]):String(t)}function Vr(e,t){return t>=0&&t<12?Z(e,`P${t+1}`):t===a.CurrentPlayer?Z(e,`CurrentPlayer`):t===a.AllPlayers?Z(e,`AllPlayers`):Br(e.names.players,t,e)}function Hr(e,t,n){switch(e){case`player`:return Vr(n,t);case`unit`:return Br(n.names.units,t,n);case`location`:return Br(n.names.locations,t,n);case`switch`:return Br(n.names.switches,t,n);case`aiScript`:{let e=tn(n.names.aiScripts,t);return e?R(Z(n,n.names.aiScripts.object),e.keys[0]):JSON.stringify(ye(t))}case`text`:case`wav`:return JSON.stringify(n.string(t)??``);case`count`:return t===0?`"All"`:String(t);case`number`:case`amount`:case`duration`:case`percent`:case`cuwp`:case`slot`:return String(t);default:{let n=De(e,t);return n?JSON.stringify(n):String(t)}}}function Ur(e,t,n){return t?`${Z(n,`disabled`)}(${e})`:e}function Wr(e,t){let n=ue(e.type),r=P(e.type),i=(e.flags&g.Disabled)!==0;if(!n||!r||r===`briefing`){let n=e;return Ur(`${Z(t,`condition`)}(${zt.map(e=>n[e]).join(`, `)})`,i,t)}let a=L(n).map(n=>Hr(n.arg.kind,e[n.arg.field],t));return Ur(`${Z(t,r)}(${a.join(`, `)})`,i,t)}function Gr(e,t){let n=de(e.type),r=Ce(e.type),i=(e.flags&_.Disabled)!==0,a=e;if(!n||!r)return Ur(`${Z(t,`action`)}(${Bt.map(e=>a[e]).join(`, `)})`,i,t);let o=[];for(let e of L(n)){if(e.arg.kind===`textFlags`){a.flags&_.AlwaysDisplay||o.push(`false`);continue}o.push(Hr(e.arg.kind,a[e.arg.field],t))}return Ur(`${Z(t,r)}(${o.join(`, `)})`,i,t)}function Kr(e){return e.length?`[\n${e.map(e=>`  ${e},`).join(`
`)}\n]`:`[]`}function qr(e,t){let n=[];e.players.forEach((e,r)=>{e&&n.push(Vr(t,r))});let r=z.reduce((e,[t])=>e|t,0),i=z.filter(([t])=>e.flags&t).map(([,e])=>`${e}: true`);e.flags&~r&&i.push(`flags: 0x${(e.flags&~r).toString(16)}`);let a=[n.length===1?n[0]:`[${n.join(`, `)}]`,Kr(e.conditions.map(e=>Wr(e,t))),Kr(e.actions.map(e=>Gr(e,t)))];return i.length&&a.push(`{ ${i.join(`, `)} }`),`${Z(t,`trigger`)}(${a.join(`, `)});`}var Jr=`// TrigScript — built into a block of the map's trigger list.
// Each trigger(players, conditions, actions, options?) call becomes one trigger, in order.
`;function Yr(e,t,n={}){let r=n.header??Jr,i=new Set,a=e.length?e.map(e=>qr(e,{...t,used:i})).join(`

`)+`
`:``;return[r,n.imports&&i.size?`import { ${[...i].sort().join(`, `)} } from "${Me}";\n`:``,a].filter(e=>e!==``).join(`
`)}var Xr=`trigscript\\`,Zr=`${Xr}build.json`;`${Xr}${Nn}`;var Qr=`${Xr}settings.json`,$r={heapCells:Ve,stackDepth:Ge,testsGuardBuild:!1};function ei(e){let t=li(e,Qr);if(!t)return{...$r};try{let e=JSON.parse(ni.decode(t));return{heapCells:We(e?.heapCells),stackDepth:Je(e?.stackDepth),testsGuardBuild:e?.testsGuardBuild===!0}}catch{return{...$r}}}function ti(e,t){let n={},r=We(t.heapCells),i=Je(t.stackDepth);return r!==$r.heapCells&&(n.heapCells=r),i!==$r.stackDepth&&(n.stackDepth=i),t.testsGuardBuild===!0&&(n.testsGuardBuild=!0),ui(e,Qr,Object.keys(n).length?ri.encode(JSON.stringify(n,null,2)):null)}var ni=new TextDecoder,ri=new TextEncoder,ii=e=>e.replace(/\//g,`\\`).toLowerCase();function ai(e){return ii(e).startsWith(ii(Xr))}function oi(e){return`${Xr}${q(e).replace(/\//g,`\\`)}`}function si(e){if(!ai(e))return null;let t=e.replace(/\//g,`\\`).slice(11);return/\.ts$/i.test(t)?t.replace(/\\/g,`/`):null}var ci=/^(?:[A-Za-z0-9_\-.]+\/)*[A-Za-z0-9_\-.]+\.ts$/;function li(e,t){let n=ii(t);for(let[t,r]of e)if(ii(t)===n)return r}function ui(e,t,n){let r=new Map(e),i=ii(t);for(let e of r.keys())ii(e)===i&&r.delete(e);return n&&r.set(t,n),r}function di(e){let t={};for(let[n,r]of e){let e=si(n);e&&(t[e]=ni.decode(r))}return t}function fi(e,t){let n=new Map;for(let[t,r]of e)si(t)||n.set(t,r);for(let[e,r]of Object.entries(t))n.set(oi(e),ri.encode(r));return n}function pi(e){let t=li(e,Zr);if(!t)return null;try{let e=JSON.parse(ni.decode(t));if(e.version!==2||typeof e.start!=`number`||typeof e.count!=`number`||typeof e.hash!=`string`)return null;let n=typeof e.programs==`number`&&e.programs>=0?{programs:Math.floor(e.programs)}:{},r=Array.isArray(e.sources)?e.sources.map(e=>e&&typeof e==`object`&&typeof e.file==`string`&&typeof e.line==`number`?{file:e.file,line:e.line}:null):[],i=Array.isArray(e.files)?e.files.filter(e=>typeof e==`string`):[],a=Array.isArray(e.records)&&e.records.length===e.count&&e.records.every(e=>typeof e==`string`)?e.records:void 0;return{version:2,...n,start:e.start,count:e.count,hash:e.hash,sources:r,files:i,sourceHash:typeof e.sourceHash==`string`?e.sourceHash:``,...a?{records:a}:{}}}catch{return null}}function mi(e,t){return ui(e,Zr,t?ri.encode(JSON.stringify(t)):null)}function hi(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e[n],t=Math.imul(t,16777619)>>>0;return t.toString(16).padStart(8,`0`)}function gi(e){return`${e.length}:${hi(b(e))}`}function _i(e){return hi(b([e]))}function vi(e){return hi(ri.encode(e))}function yi(e){return vi(Object.keys(e).map(q).sort().map(t=>`${t}\0${e[t]??``}\0`).join(``))}function bi(e,t){let{start:n,count:r}=t,i=n=>n>=0&&n+r<=e.length&&gi(e.slice(n,n+r))===t.hash;if(i(n))return{start:n,count:r,sources:t.sources};if(r===0)return{start:Math.min(n,e.length),count:r,sources:t.sources};for(let a=0;a+r<=e.length;a++)if(a!==n&&i(a))return{start:a,count:r,sources:t.sources};return null}function xi(e,t){if(!t.records)return null;let n={unchanged:[],changed:[]};for(let r=0;r<t.count;r++){let i=t.start+r;if(i>=e.length)break;(_i(e[i])===t.records[r]?n.unchanged:n.changed).push(i)}return n.unchanged.length?n:null}function Si(e,t){let n=di(t),r=Object.keys(n).length?n:null,i=pi(t),a=e&&i?bi(e,i):null,o=r!==null&&(!i||i.sourceHash!==yi(r)),s=!!i&&!a,c=s&&e?xi(e,i):null;return{files:r,source:r?.[`main.ts`]??null,manifest:i,block:a,stale:s,edited:c?{unchanged:c.unchanged.length,changed:c.changed.length}:null,unbuilt:o,programs:i?.programs??0}}function Ci(e,t){let n=pi(t);if(!n)return null;let r=bi(e,n);return!r||r.start===n.start?null:mi(t,{...n,start:r.start})}function wi(e,t){let n=new Map;return r=>{if(r===0)return 0;let i=n.get(r);if(i!==void 0)return i;let a=e.strings[r-1],o=a?`index`in a?a.index:t(a.text):0;return n.set(r,o),o}}function Ti(e,t){let n=wi(e,t);return e.triggers.map(e=>{let t=x(e);for(let e of t.actions)e.text=n(e.text),e.wav=n(e.wav);return t})}function Ei(e,t,n,r,i,a={}){let o=Ti(r,i),s=Si(e,t),c,l,u,d,f=a.replaceStale&&s.stale&&s.manifest?xi(e,s.manifest):null;if(a.takeOver)c=0,l=[],u=[];else if(s.block)c=s.block.start,l=e.slice(0,c),u=e.slice(c+s.block.count);else if(f){c=s.manifest.start;let t=Math.min(e.length,c+s.manifest.count);l=e.slice(0,c),u=[...f.changed.map(t=>e[t]),...e.slice(t)],d={removed:f.unchanged.length,kept:f.changed.length}}else c=e.length,l=e.slice(),u=[];let p={version:2,programs:r.ir.length,start:c,count:o.length,hash:gi(o),sources:r.sources,files:Object.keys(n).map(q).sort(),sourceHash:yi(n),records:o.map(_i)};return{list:[...l,...o,...u],extras:mi(a.keepFiles?t:fi(t,n),p),block:{start:c,count:o.length,sources:p.sources},...d?{replaced:d}:{}}}function Di(e,t,n){let r=null,i=q(t);return e.sources.forEach((t,a)=>{t&&q(t.file)===i&&t.line<=n&&(r=e.start+a)}),r}function Oi(e){let t={kind:`folder`,name:``,path:``,children:[]};for(let n of e.map(q)){let e=n.split(`/`),r=t;for(let[t,n]of e.slice(0,-1).entries()){let i=r.children.find(e=>e.kind===`folder`&&e.name===n);i||(i={kind:`folder`,name:n,path:e.slice(0,t+1).join(`/`),children:[]},r.children.push(i)),r=i}r.children.push({kind:`file`,name:e[e.length-1],path:n})}let n=e=>{e.children.sort((e,t)=>e.kind===t.kind?e.path===`main.ts`?-1:t.path===`main.ts`?1:e.name.localeCompare(t.name):e.kind===`folder`?-1:1);for(let t of e.children)t.kind===`folder`&&n(t)};return n(t),t.children}var ki=e=>e.split(`/`).slice(0,-1).join(`/`),Ai=(e,t)=>e.filter(e=>e.startsWith(`${t}/`)),ji=/^(?:[A-Za-z0-9_\-.]+\/)*[A-Za-z0-9_\-.]+$/,Mi=e=>ji.test(e)&&!e.split(`/`).some(e=>e===`.`||e===`..`);function Ni(e){let t=new Map;for(let n of e){let e=n.split(`/`).pop();t.set(e,[...t.get(e)??[],n])}let n=new Map;for(let[e,r]of t)for(let t of r)n.set(t,r.length>1?{label:e,folder:ki(t)||`.`}:{label:e});return n}var Pi=/[A-Za-z0-9_$]/;function Fi(e){let t=[],n=``,r=``,i=e=>{r=n,n=e},a=0,o=e.length;for(;a<o;){let s=e[a];if(s===`/`&&e[a+1]===`/`){let t=e.indexOf(`
`,a);a=t<0?o:t;continue}if(s===`/`&&e[a+1]===`*`){let t=e.indexOf(`*/`,a+2);a=t<0?o:t+2;continue}if(s===`"`||s===`'`){let c=a+1;for(;c<o&&e[c]!==s&&e[c]!==`
`;)c+=e[c]===`\\`?2:1;(n===`from`||n===`import`||n===`(`&&(r===`import`||r===`require`))&&e[c]===s&&t.push({text:e.slice(a+1,c),start:a+1,end:c}),i(`string`),a=c+1;continue}if(s==="`"){let t=a+1,n=0;for(;t<o;){if(e[t]===`\\`){t+=2;continue}if(n===0&&e[t]==="`")break;if(e[t]===`$`&&e[t+1]===`{`){n++,t+=2;continue}n>0&&e[t]===`{`&&n++,n>0&&e[t]===`}`&&n--,t++}i(`string`),a=t+1;continue}if(Pi.test(s)){let t=a+1;for(;t<o&&Pi.test(e[t]);)t++;i(e.slice(a,t)),a=t;continue}/\s/.test(s)||i(s),a++}return t}function Ii(e,t){let n=ki(e).split(`/`).filter(Boolean),r=t.split(`/`),i=0;for(;i<n.length&&i<r.length-1&&n[i]===r[i];)i++;let a=n.length-i,o=r.slice(i).join(`/`);return a===0?`./${o}`:`${`../`.repeat(a)}${o}`}function Li(e,t,n){let r=Ii(e,t);return/\.ts$/.test(n)?r:/\.js$/.test(n)?r.replace(/\.ts$/,`.js`):/\/index\.ts$/.test(t)&&!/(^|\/)index$/.test(n)&&r!==`./index.ts`?r.replace(/\/index\.ts$/,``):r.replace(/\.ts$/,``)}function Ri(e,t,n){let r=new Map;if(t===n)return r;if(e.includes(t))r.set(t,n);else for(let i of Ai(e,t))r.set(i,`${n}${i.slice(t.length)}`);return r}function zi(e,t){if(t.has(`main.ts`))return`${Nn} is where the script starts: it stays where it is.`;let n=new Set(e.filter(e=>!t.has(e)));for(let e of t.values())if(n.has(e))return`There is already a ${e}.`;return null}function Bi(e,t){let n=new Set(Object.keys(e).map(q)),r={},i=[],a=0;for(let[o,s]of Object.entries(e)){let e=q(o),c=t.get(e)??e,l=s;for(let r of Fi(s).reverse()){let i=En(n,e,r.text);if(!i)continue;let o=t.get(i)??i;if(c===e&&o===i)continue;let s=Li(c,o,r.text);s!==r.text&&(l=l.slice(0,r.start)+s+l.slice(r.end),a++)}l!==s&&i.push(c),r[c]=l}return{files:r,imports:a,edited:i}}var Vi={list:[],results:new Map,only:[]};function Hi(e,t){if(!t)return Vi;let n=new Set(t.list.map(e=>e.id)),r=new Map([...e.results].filter(([e])=>n.has(e)));for(let e of t.results)r.set(e.id,e);return{list:t.list,results:r,only:t.only}}function Ui(e,t){let n={total:0,passed:0,failed:0,skipped:0,notRun:0};for(let r of e.list){if(r.kind!==`test`||t&&!t(r))continue;n.total++;let i=e.results.get(r.id);i?n[i.status]++:n.notRun++}return n}var Wi=e=>e.failed?`failed`:e.total===0||e.notRun===e.total?`none`:e.passed?`passed`:e.skipped?`skipped`:`none`,Gi=e=>t=>t.id===e.id||t.id.startsWith(`${e.id} > `);function Ki(e,t){return t.kind===`suite`?Wi(Ui(e,Gi(t))):e.results.get(t.id)?.status??`none`}var qi={none:`Not run yet`,passed:`Passed`,failed:`Failed`,skipped:`Skipped`,running:`Running…`};function Ji(e){return e.list.map(t=>{let n=Ki(e,t),r=e.results.get(t.id);return{file:t.file,line:t.line,state:n,id:t.id,title:`${qi[n]}${r?.status===`failed`&&r.message?`: ${r.message}`:``} — click to run ${t.kind===`suite`?`these tests`:`this test`}`}})}function Yi(e){let t=[];for(let n of e.list){let r=e.results.get(n.id);if(r?.status!==`failed`)continue;let i=r.at??{file:n.file,line:n.line},a=r.expected!==void 0||r.actual!==void 0?`**${n.name}**\n\nExpected: \`${r.expected??`—`}\`\n\nGot: \`${r.actual??`—`}\``:`**${n.name}**\n\n${r.message??`failed`}`;t.push({file:i.file,line:i.line,text:r.message??`failed`,hover:a})}return t}function Xi(e){let t=[];for(let n of e.list){let r=e.results.get(n.id);n.kind===`test`&&r?.status===`failed`&&t.push({file:n.file,line:n.line,message:`The test "${n.name}" fails: ${r.message??`failed`}`})}for(let n of e.only)t.push({file:n.file,line:n.line,message:`An only is left in: the other tests of this file do not run.`});return t}function Zi(e){let t=[...new Set(e.map(e=>e.file))],n=t=>{let n=e.filter(e=>e.file===t),r=e=>n.filter(t=>t.path.length===e.length&&t.path.every((t,n)=>t===e[n])).map(t=>({kind:t.kind,info:t,children:t.kind===`suite`?r([...e,t.name]):[]}));return r([])},r=e=>e.map(e=>e.kind===`folder`?{kind:`folder`,name:e.name,path:e.path,children:r(e.children)}:{kind:`file`,name:e.name,path:e.path,children:n(e.path)});return r(Oi(t))}function Qi(e){return e.kind===`test`||e.kind===`suite`?[e.info.id]:e.children.flatMap(Qi)}function $i(e){let t=[...new Set(e)].sort((e,t)=>e-t),n=[];for(let e=0;e<t.length;e++){let r=e;for(;r+1<t.length&&t[r+1]===t[r]+1;)r++;n.push(r-e>=2?`P${t[e]+1}–P${t[r]+1}`:t.slice(e,r+1).map(e=>`P${e+1}`).join(`, `)),e=r}return n.join(`, `)}function ea(e){let t=[],n=new Map;for(let r of e){let e=`${r.frame}|${r.file??``}|${r.line??0}|${r.text}`,i=n.get(e);if(i){i.players.includes(r.player)||i.players.push(r.player);continue}let a={...r,players:[r.player]};n.set(e,a),t.push(a)}return t}function ta(e){return e.total===0?null:e.failed?{text:`${e.failed} failed${e.passed?`, ${e.passed} passed`:``}`,failed:!0}:e.notRun===e.total?{text:`${e.total} test${e.total===1?``:`s`}`,failed:!1}:{text:`${e.passed} passed${e.skipped?`, ${e.skipped} skipped`:``}${e.notRun?`, ${e.notRun} not run`:``}`,failed:!1}}var na=`"""
[trigscript]
ir : /work/files/trigscript.json

TrigScript's programs: the euddraft plugin that lowers the compiler's IR — data, never
code — into eudplib. The IR file is what the plugin's compiler wrote (docs/ir.md);
this module is handed to the eudplib library plugin as a source with every build, so the
two halves of the IR version are always the same build.

A program is a coroutine the game runs every frame. Its body is lowered to straight-line
eudplib triggers with jumps between labels: \`if\` / \`while\` / \`switch\` become conditional
jumps, and \`sleep\` stores the label to resume at in a state variable, sets a frame counter,
and leaves the frame. The frame's entry counts the wait down, then jumps to the stored
label. A program runs for the players it is owned by, as a trigger would: one owner runs
it as that player while that player is in the game; several owners, All Players or a force
run it once each frame for every such player who is in the game, CurrentPlayer set, its
variables and its state as 12-slot arrays indexed by the player.

Text is written out in the IR: an action's \`text\` or \`wav\` is the string itself, which
eudplib adds to the built map's string table, or a number when the script named an index
of the map's own. The map the user edits never holds a program's strings.

A read is a value of the game taken when the expression is evaluated. What a condition compares
is read from the game's tables where the table is that value (a player's deaths, kills, ore, gas)
and otherwise found by asking the condition itself — "at least 2^31? at least that plus 2^30? …" —
so a read means what the condition means, for a force's minerals or the units at a location alike.
Player facts are bytes of the player tables. Text with values in it is printed through eudplib's
string buffer, for the player it is for and nobody else.

A unit of the game is a pointer into the game's unit table — 1700 slots of 336 bytes — with the slot's
uniqueness byte kept beside it: the game gives a dead unit's slot to the next unit made, so a unit kept
in a variable is checked before every use (a sprite, an order other than "die", the same uniqueness
byte) and reads 0, and takes no write, once it is gone. A loop over units and a pick walk the whole
table with conditions whose address is moved on a slot at a time, as eudplib's own EUDLoopUnit2 does;
a dying unit is passed over. What a unit can be asked and told is what Magenta's probe maps saw
working in Remastered: no position, cloak or speed writes. The game's tables (\`stats()\`) are plain
cells at addresses the IR carries; a speed is four flingy records, a colour two bytes, a name a string.

What the players do — keys, clicks, the mouse, what they type — happens on one computer, and two
plugins the build adds beside this one bring it to all of them in step. chatEvent (before this
plugin) finds the line the local player typed; this plugin matches it against the programs'
patterns, there and then, into a number for the pattern and up to three values; MSQC (after this
plugin) sends those, the keys and the clicks to every computer as the player they came from, and
keeps each player's mouse in a location. They land in arrays registered by name — which is how the
other two plugins' settings reach them — a cell per player, fresh every frame: an input reads 1 on
the frame it arrives. The IR's \`input\` lists what is asked for; the editor wrote the settings from it.

Numbers keep one contract with the simulator: 32 bits, a \`number\` signed and a \`u32\` not, wrapping at
either end. + - * and the bitwise operators are the same bits whichever way they are read; what reads
them one way or the other - a comparison, a division, a shift right, min and max, a printed number -
says which in the IR (\`unsigned\`), so nothing here works a type out. Where the game takes nothing below
zero the compiler has already written max(v, 0), and a store keeps stopping at the top of what it holds.
In here a number known when the map is built is a Python int holding the 32 bits, 0 to 2^32 - 1.

A text is kept one of two ways, a variable at a time (the IR says which). One that only ever holds texts written in
the script is the text's id in the built map's string table: a number. One that is made while the map is played is
three cells - where its bytes are (UTF-8, ended by a 0), the block of the heap it owns (0: none, the bytes are a
string of the table) and its length in characters. A made text is written into one scratch buffer, measured, and
copied into a block of just that size, whose first cell says which size; what holds the text owns the block, so
assigning copies it, a value that was just made is moved, and whatever a variable held goes back to the heap once
its new value is worked out. compiler/simulateIr.ts takes and gives blocks in the same order, so both run out at
the same text. A made text in an action's field goes over a string the build keeps for that kind of field, on the
computer of the player the action is for and nowhere else: the game reads such a string again whenever it draws.
"""
import json

from eudplib import *
from eudplib.core.mapdata.stringmap import ForceAddString
from eudplib.memio.rwcommon import br1, br2, bw1

IR_VERSION = 14
FRAMES_PER_SECOND = 24
# Where the game keeps what a read reads (1.16.1 addresses, which Remastered emulates). The player
# tables are the ones Magenta's probes 5 and 8 read in the game.
DEATHS_TABLE = 0x58A364
KILLS_TABLE = 0x5878A4
ORE_TABLE = 0x57F0F0
GAS_TABLE = 0x57F120
PLAYER_BYTES = {"slot": 0x57F1B4, "race": 0x57F1C0}
# Per race (144 bytes apart: Zerg, Terran, Protoss), a dword per player, in half supplies.
SUPPLY_TABLES = {"provided": 0x582144, "used": 0x582174, "max": 0x5821A4}
# The unit table, and a unit's dwords the scans test (as EPD offsets from the unit's own).
UNIT_TABLE = 0x59CCA8
UNIT_SIZE = 336
UNIT_SLOTS = 1700
UNIT_END = UNIT_TABLE + UNIT_SIZE * UNIT_SLOTS
OFF_SPRITE, OFF_POS, OFF_OWNER_ORDER, OFF_TYPE, OFF_UID = 0x0C // 4, 0x28 // 4, 0x4C // 4, 0x64 // 4, 0xA4 // 4
# units.dat: max hit points (dword, 256 to a point), max shields (word), the group flags a trigger's
# Men / Buildings / Factories go by (byte), the flingy a type moves as (byte).
UNITS_MAX_HP = 0x662350
UNITS_MAX_SHIELDS = 0x660E00
UNITS_GROUP = 0x6637A0
UNITS_FLINGY = 0x6644F8
GROUP_BITS = {230: 0x08, 231: 0x10, 232: 0x20}
# flingy.dat, by flingy id: movement control (byte), top speed (dword), acceleration (word), halt distance (dword).
FLINGY_CONTROL, FLINGY_SPEED, FLINGY_ACCELERATION, FLINGY_HALT = 0x6C9858, 0x6C9EF8, 0x6C9C78, 0x6C9930
MINIMAP_COLOR_OFFSET = 0x581DD6 - 0x581D76
# The location table, and the one an order borrows for the length of one action (put back after).
MRGN = 0x58DC60
SCRATCH_LOCATION = 255
UNIT_TIMERS = {"stim": "stimTimer", "ensnare": "ensnareTimer", "plague": "plagueTimer", "lockdown": "lockdownTimer", "maelstrom": "maelstromTimer", "irradiate": "irradiateTimer", "stasis": "stasisTimer"}
STATUS_INVINCIBLE, STATUS_HALLUCINATION, STATUS_BURROWED, STATUS_CLOAKED = 0x04000000, 0x40000000, 0x00000010, 0x00000300
COND_COMMAND, COND_BRING, COND_ACCUMULATE, COND_KILL, COND_OPPONENTS, COND_DEATHS = 2, 3, 4, 5, 14, 15
CURRENT_PLAYER = 13
# The state of a program whose body ended: nothing resumes it.
DONE = 0xFFFFFFFF
U32 = 0xFFFFFFFF
SIGN = 0x80000000

MINUS_SIGN = Db(b"-\\0\\0\\0")
NO_SIGN = Db(b"\\0\\0\\0\\0")

with open(settings["ir"], encoding="utf-8") as _f:
    IR = json.load(_f)
if IR.get("version") != IR_VERSION:
    raise RuntimeError("trigscript: the IR is version %r; this plugin reads version %d" % (IR.get("version"), IR_VERSION))


def where(node):
    """" at main.ts:12:5" for a node with a position — what the editor parses back into a marker."""
    at = node.get("at") if isinstance(node, dict) else None
    if not at:
        return ""
    if at.get("file"):
        return " at %s:%s:%s" % (at.get("file"), at.get("line"), at.get("column"))
    return " at %s:%s" % (at.get("line"), at.get("column"))


class Fail(RuntimeError):
    pass


class Leave(Exception):
    """Raised through the lowering when a statement ends the straight line (break / continue / return)."""


class Storage:
    """A variable's cell: plain, or a 12-slot row of a per-player program."""

    def __init__(self, decl, per_player, player_of):
        self.decl = decl
        self.bits = decl.get("bits")
        self.rowed = per_player and not decl.get("shared")
        self.player_of = player_of
        self.store = EUDArray([0] * 12) if self.rowed else EUDVariable(0)  # initial: the variable's own cell

    def get(self):
        return self.store[self.player_of()] if self.rowed else self.store

    def set(self, value):
        if self.bits:
            value = saturate(value, self.bits)
        if self.rowed:
            self.store[self.player_of()] = value
        else:
            self.store << value


class ArrayStorage:
    """An array's cells: \`length\` of them, twelve rows of that in a per-player program, or - \`values\` - a list
    the script computed when it was built, which is in the map as it loads and which nothing writes. An index
    past either end (read from 0 up, so one below zero too) reads 0 and stores nothing."""

    def __init__(self, decl, per_player, player_of):
        self.decl = decl
        self.length = int(decl["length"])
        self.bits = decl.get("bits")
        values = decl.get("values")
        self.rowed = per_player and not decl.get("shared") and values is None
        self.player_of = player_of
        if decl.get("texts") is not None:
            # A list of texts the script has: a cell is the text's id in the built map's table.
            values = [text_id(t) for t in decl["texts"]]
        self.store = EUDArray([int(v) & U32 for v in values] if values is not None else [0] * (self.length * (12 if self.rowed else 1)))  # initial: a table's values, or cells declareArray sets

    def at(self, index):
        """The cell's place among the store's: the player's row first."""
        if not self.rowed:
            return index
        p = self.player_of()
        row = p * self.length if isinstance(p, int) else f_mul(p, self.length)
        return row + index

    def get(self, index):
        if isinstance(index, int):
            return self.store[self.at(index)] if index < self.length else 0
        out = fresh(0)
        if EUDIf()(index <= self.length - 1):
            out << self.store[self.at(index)]
        EUDEndIf()
        return out

    def set(self, index, value):
        if self.bits:
            value = saturate(value, self.bits)
        if isinstance(index, int):
            if index < self.length:
                self.store[self.at(index)] = value
            return
        if EUDIf()(index <= self.length - 1):
            self.store[self.at(index)] = value
        EUDEndIf()

    def fill(self, value):
        if self.length <= 16:
            for i in range(self.length):
                self.set(i, value)
            return
        v, i = as_var(value), fresh(0)
        if EUDWhile()(i <= self.length - 1):
            self.set(i, v)
            i += 1
        EUDEndWhile()


class SliceStorage:
    """A window on another array's cells - a row of a grid: cell i is cell \`offset + i\` of the array it is a window
    on, \`offset\` a variable of the program. Past its own end it reads 0 and stores nothing, so a row never reaches
    into the next; what it is a window on keeps its own ends (and its own width, and its row a player)."""

    def __init__(self, decl, lowering):
        self.decl = decl
        self.length = int(decl["length"])
        self.lowering = lowering

    def of(self):
        return self.lowering.array(self.decl["slice"]["of"], self.decl)

    def offset(self):
        return self.lowering.var(self.decl["slice"]["offset"], self.decl).get()

    def get(self, index):
        if isinstance(index, int):
            return self.of().get(self.offset() + index) if index < self.length else 0
        out = fresh(0)
        if EUDIf()(index <= self.length - 1):
            out << self.of().get(self.offset() + index)
        EUDEndIf()
        return out

    def set(self, index, value):
        if isinstance(index, int):
            if index < self.length:
                self.of().set(self.offset() + index, value)
            return
        if EUDIf()(index <= self.length - 1):
            self.of().set(self.offset() + index, value)
        EUDEndIf()

    def fill(self, value):
        v, i = as_var(value), fresh(0)
        if EUDWhile()(i <= self.length - 1):
            self.set(i, v)
            i += 1
        EUDEndWhile()


# The heap the programs' growing arrays share. A block is a power of two of cells, four at least; one given back
# waits in its size's list (its first cell links the next) for whoever wants that size next; new ground is taken
# from the bottom up. Cell 0 is never handed out: 0 is "no block". compiler/simulateIr.ts counts the same way, so
# both run out at the same push. (Recursion's stack is an array of its own, below: how deep a function may go is
# then the same whatever the arrays hold.)
HEAP_CELLS = min(1 << 20, max(1024, int(IR.get("heap", 16384))))  # the map's script settings, or the default
HEAP_SMALLEST = 4
HEAP_ROOMS = []
while HEAP_SMALLEST << len(HEAP_ROOMS) <= HEAP_CELLS:
    HEAP_ROOMS.append(HEAP_SMALLEST << len(HEAP_ROOMS))
_HEAP = {}


def heap():
    """The heap's cells and its functions, made when the first growing array is met."""
    if _HEAP:
        return _HEAP
    cells = EUDArray(HEAP_CELLS)
    rooms = EUDArray(HEAP_ROOMS + [0xFFFFFFFF])  # initial: the sizes, never written
    free = EUDArray(len(HEAP_ROOMS))  # initial: no block waits
    top = EUDVariable(1)  # initial: the heap's own state, for the whole game
    said = EUDVariable(0)  # initial: the heap's own state

    @EUDFunc
    def take(k):
        """A block of size class k: its place among the cells, or 0 when there is none."""
        at = EUDVariable()
        at << free[k]
        if EUDIf()(at >= 1):
            free[k] = cells[at]
            EUDReturn(at)
        EUDEndIf()
        end = top + rooms[k]
        if EUDIf()(end <= HEAP_CELLS):
            at << top
            top << end
            EUDReturn(at)
        EUDEndIf()
        EUDReturn(0)

    @EUDFunc
    def give(at, k):
        cells[at] = free[k]
        free[k] = at

    @EUDFunc
    def grow(ptr, length, room, k, need):
        """Room for \`need\` cells: a larger block, the cells copied over, the old block given back. Returns the
        handle as it is now and whether there is room; when the heap has no block left the handle is unchanged."""
        if EUDIf()(need <= room):
            EUDReturn(ptr, room, k, 1)
        EUDEndIf()
        nk = EUDVariable()
        nk << 0
        if EUDIf()(ptr >= 1):
            nk << k + 1
        EUDEndIf()
        if EUDWhile()(rooms[nk] < need):
            nk += 1
        EUDEndWhile()
        if EUDIf()(nk >= len(HEAP_ROOMS)):
            EUDReturn(ptr, room, k, 0)
        EUDEndIf()
        block = take(nk)
        if EUDIf()(block == 0):
            EUDReturn(ptr, room, k, 0)
        EUDEndIf()
        if EUDIf()(ptr >= 1):
            if EUDIf()(length >= 1):
                # An EUDArray's own value is where it is, as an EPD already.
                f_repmovsd_epd(cells + block, cells + ptr, length)
            EUDEndIf()
            give(ptr, k)
        EUDEndIf()
        EUDReturn(block, rooms[nk], nk, 1)

    @EUDFunc
    def push(ptr, length, room, k, value):
        """One more cell at the end; the handle as it is afterwards. Nothing is pushed when the heap is full."""
        ptr, room, k, ok = grow(ptr, length, room, k, length + 1)
        if EUDIf()(ok >= 1):
            cells[ptr + length] = value
            length += 1
        if EUDElse()():
            if EUDIf()(said == 0):
                said << 1
                GetGlobalStringBuffer().print("\\x06TrigScript: out of memory - an array could not grow (the programs' arrays share %d cells)." % HEAP_CELLS)
            EUDEndIf()
        EUDEndIf()
        EUDReturn(ptr, length, room, k)

    _HEAP.update(cells=cells, rooms=rooms, take=take, give=give, grow=grow, push=push)
    return _HEAP


# The stack of the functions that call themselves. A function's variables are cells of the program, one of each, so
# a call that may come back into the function it is in (the IR's \`saves\`) puts what that function holds here first
# and takes it back after, with where the function returns to. One stack serves every program and every player:
# such a function never sleeps, so the stack is empty whenever a frame ends. It is as many frames of the largest
# frame as the map's script settings allow calls deep (the IR file's \`stack\`), and the depth is what is counted -
# compiler/simulateIr.ts counts the same - so a program stops at the same call in both.
STACK_DEPTH = min(1 << 16, max(16, int(IR.get("stack", 1024))))
STACK_CELLS_MAX = 1 << 20
HANDLE = ("ptr", "len", "room", "k")
_STACK = {}


def frame_cells(saves, kinds):
    return 1 + 4 * len(saves.get("arrays", [])) + sum(3 if kinds.get(v) in ("unit", "text") else 1 for v in saves.get("vars", []))


def largest_frame():
    most = [0]

    def walk(node, kinds):
        if isinstance(node, list):
            for x in node:
                walk(x, kinds)
        elif isinstance(node, dict):
            if isinstance(node.get("saves"), dict):
                most[0] = max(most[0], frame_cells(node["saves"], kinds))
            for v in node.values():
                if isinstance(v, (dict, list)):
                    walk(v, kinds)

    def kinds_of(node, into):
        if isinstance(node, list):
            for x in node:
                kinds_of(x, into)
        elif isinstance(node, dict):
            if isinstance(node.get("id"), str) and node.get("kind") in ("number", "boolean", "unit", "text") and "shared" in node:
                # A text kept as its id is one cell, as a number is; one that was made is three.
                into[node["id"]] = "number" if node["kind"] == "text" and node.get("text") == "id" else node["kind"]
            for v in node.values():
                if isinstance(v, (dict, list)):
                    kinds_of(v, into)
        return into

    for program in IR.get("programs", []):
        walk(program.get("functions", []), kinds_of(program, {}))
    return most[0]


def stack():
    """The stack's cells, where the next frame goes (an EPD, so a cell is one write) and how deep it is."""
    if _STACK:
        return _STACK
    frame = largest_frame()
    if frame * STACK_DEPTH > STACK_CELLS_MAX:
        raise Fail("trigscript: the stack would be %d cells - %d calls deep, %d cells a call - and %d is the most: lower the recursion depth in the script's Settings, or keep fewer variables in the function that calls itself" % (frame * STACK_DEPTH, STACK_DEPTH, frame, STACK_CELLS_MAX))
    cells = EUDArray(max(1, frame) * STACK_DEPTH)
    base = cells  # an EUDArray's own value is where it is, as an EPD already
    at = EUDVariable(base)  # initial: the stack's own state; it is back here whenever a frame ends
    depth = EUDVariable(0)  # initial: the stack's own state; nothing is on it between frames
    _STACK.update(cells=cells, base=base, at=at, depth=depth)
    return _STACK


class ListStorage:
    """An array that grows: a handle - where its block is among the heap's cells (0: none yet), how many cells are
    in use, how many the block has room for, and the block's size class - a cell each, or a row of twelve each in
    a per-player program. Reads and stores are bounded by the cells in use; a store at exactly the length is a push."""

    def __init__(self, decl, per_player, player_of):
        self.decl = decl
        self.bits = decl.get("bits")
        self.rowed = per_player and not decl.get("shared")
        self.player_of = player_of
        make = (lambda: EUDArray([0] * 12)) if self.rowed else (lambda: EUDVariable(0))  # initial: no block
        self.handle = {name: make() for name in ("ptr", "len", "room", "k")}
        self.heap = heap()

    def field(self, name):
        cell = self.handle[name]
        return cell[self.player_of()] if self.rowed else cell

    def put(self, name, value):
        if self.rowed:
            self.handle[name][self.player_of()] = value
        else:
            self.handle[name] << value

    def length(self):
        return self.field("len")

    def get(self, index):
        out = fresh(0)
        if EUDIf()(as_var(index) < as_var(self.field("len"))):
            out << self.heap["cells"][self.field("ptr") + index]
        EUDEndIf()
        return out

    def push(self, value):
        if self.bits:
            value = saturate(value, self.bits)
        ptr, length, room, k = self.heap["push"](self.field("ptr"), self.field("len"), self.field("room"), self.field("k"), value)
        for name, v in (("ptr", ptr), ("len", length), ("room", room), ("k", k)):
            self.put(name, v)

    def set(self, index, value):
        if self.bits:
            value = saturate(value, self.bits)
        i, v, n = as_var(index), fresh(value), as_var(self.field("len"))
        if EUDIf()(i < n):
            self.heap["cells"][self.field("ptr") + i] = v
        if EUDElseIf()(i == n):
            self.push(v)  # xs[xs.length] = v, as JavaScript has it
        EUDEndIf()

    def pop(self):
        out = fresh(0)
        n = fresh(self.field("len"))
        if EUDIf()(n >= 1):
            n -= 1
            self.put("len", n)
            out << self.heap["cells"][self.field("ptr") + n]
        EUDEndIf()
        return out

    def set_length(self, value):
        v = as_var(value)
        if EUDIf()(v < as_var(self.field("len"))):
            self.put("len", v)
        EUDEndIf()

    def declare(self, values):
        """Declared (again): the block it held goes back, and it starts over with these values."""
        ptr = fresh(self.field("ptr"))
        if EUDIf()(ptr >= 1):
            self.heap["give"](ptr, self.field("k"))
        EUDEndIf()
        for name in ("ptr", "len", "room", "k"):
            self.put(name, 0)
        for v in values:
            self.push(v)

    def declare_filled(self, value, count):
        """The same with one value \`count\` times over: a loop, where a push a cell would be a push a cell in the map."""
        if count <= 8:
            self.declare([value] * count)
            return
        self.declare([])
        v, i = as_var(value), fresh(0)
        if EUDWhile()(i <= count - 1):
            self.push(v)
            i += 1
        EUDEndWhile()

    def fill(self, value):
        v, i = as_var(value), fresh(0)
        if EUDWhile()(i < as_var(self.field("len"))):
            self.heap["cells"][self.field("ptr") + i] = v
            i += 1
        EUDEndWhile()


class InnerListStorage(ListStorage):
    """An array that grows inside another: its handle is cell \`index\` of four arrays the outer one keeps (where the
    block is, how many cells are in use, its room, its size class), \`index\` a variable of the program. Everything
    else is a growing array's, which only ever asks for its handle's fields and puts them back."""

    def __init__(self, decl, lowering):
        self.decl = decl
        self.bits = decl.get("bits")
        self.rowed = False
        self.lowering = lowering
        self.heap = heap()

    def at(self):
        return self.lowering.var(self.decl["through"]["index"], self.decl).get()

    def field(self, name):
        return self.lowering.array(self.decl["through"][name], self.decl).get(self.at())

    def put(self, name, value):
        self.lowering.array(self.decl["through"][name], self.decl).set(self.at(), value)


# ── texts ──
TEXT_BYTES = 1023  # the most a made text holds; compiler/ir.ts has the same number
TEXT_FIELD_BYTES = 255  # the room of a string kept for an action's field or a unit type's name
UNIT_MAP_STRING = 0x660260  # units.dat: the id of the name a map gives a unit type, a word each
_TEXT = {}
_SLOTS = {}


def texts():
    """The texts' part of the run time, made when the first text that is made is met."""
    if _TEXT:
        return _TEXT
    h = heap()
    cells, rooms, take, give = h["cells"], h["rooms"], h["take"], h["give"]
    # A text being made. It may run one part past its most before it is cut, and a part is at most that long again.
    scratch = Db(TEXT_BYTES + 1 + TEXT_BYTES + 1 + 8)
    empty = Db(4)
    said_cut = EUDVariable(0)  # initial: said once a game
    said_full = EUDVariable(0)  # initial: said once a game
    said_field = EUDVariable(0)  # initial: said once a game

    @EUDFunc
    def count(addr):
        """How many characters the text at addr is: every byte but those that continue a character (10xxxxxx)."""
        n = EUDVariable()
        n << 0
        br1.seekoffset(addr)
        if EUDInfLoop()():
            b = br1.readbyte()
            EUDBreakIf(b == 0)
            if EUDIfNot()(b.ExactlyX(0x80, 0xC0)):
                n += 1
            EUDEndIf()
        EUDEndInfLoop()
        EUDReturn(n)

    @EUDFunc
    def append(pos, src):
        """The text at src written at pos, ended by a 0; where that 0 is. A text of the table may be any length, so no
        more of it than leaves the scratch whole: what is past a text's most is cut by make() anyway."""
        br1.seekoffset(src)
        bw1.seekoffset(pos)
        if EUDWhile()(pos <= scratch + TEXT_BYTES + TEXT_BYTES):
            b = br1.readbyte()
            EUDBreakIf(b == 0)
            bw1.writebyte(b)
            pos += 1
        EUDEndWhile()
        bw1.writebyte(0)
        EUDReturn(pos)

    @EUDFunc
    def make(end):
        """The text in the scratch, which ends at \`end\`, into a block of its own: where it is, the block, its
        length in characters. Past what a text holds it is cut, never inside a character."""
        if EUDIf()(end >= scratch + TEXT_BYTES + 1):
            end << scratch + TEXT_BYTES
            if EUDWhile()(f_bread(end).ExactlyX(0x80, 0xC0)):
                end -= 1
            EUDEndWhile()
            f_bwrite(end, 0)
            if EUDIf()(said_cut == 0):
                said_cut << 1
                GetGlobalStringBuffer().print("\\x06TrigScript: a text was cut off - one that is made holds %d bytes." % TEXT_BYTES)
            EUDEndIf()
        EUDEndIf()
        need = f_div(end - scratch, 4)[0] + 2
        k = EUDVariable()
        k << 0
        if EUDWhile()(rooms[k] < need):
            k += 1
        EUDEndWhile()
        block = take(k)
        if EUDIf()(block == 0):
            if EUDIf()(said_full == 0):
                said_full << 1
                GetGlobalStringBuffer().print("\\x06TrigScript: out of memory - a text could not be made (the programs' arrays and texts share %d cells)." % HEAP_CELLS)
            EUDEndIf()
            EUDReturn(empty, 0, 0)
        EUDEndIf()
        cells[block] = k
        f_repmovsd_epd(cells + block + 1, EPD(scratch), need - 1)
        addr = f_mul(cells + block + 1, 4) + 0x58A364
        EUDReturn(addr, block, count(addr))

    @EUDFunc
    def copy(addr, block, length):
        """A text as something to keep: itself when it owns no block, else a block of the same size with the same cells."""
        if EUDIf()(block == 0):
            EUDReturn(addr, 0, length)
        EUDEndIf()
        k = cells[block]
        mine = take(k)
        if EUDIf()(mine == 0):
            if EUDIf()(said_full == 0):
                said_full << 1
                GetGlobalStringBuffer().print("\\x06TrigScript: out of memory - a text could not be copied (the programs' arrays and texts share %d cells)." % HEAP_CELLS)
            EUDEndIf()
            EUDReturn(empty, 0, 0)
        EUDEndIf()
        f_repmovsd_epd(cells + mine, cells + block, rooms[k])
        EUDReturn(f_mul(cells + mine + 1, 4) + 0x58A364, mine, length)

    @EUDFunc
    def release(block):
        if EUDIf()(block >= 1):
            give(block, cells[block])
        EUDEndIf()

    @EUDFunc
    def skip(addr, n):
        """Where character n of the text at addr starts; its end when it has fewer."""
        br1.seekoffset(addr)
        if EUDInfLoop()():
            b = br1.readbyte()
            EUDBreakIf(b == 0)
            if EUDIfNot()(b.ExactlyX(0x80, 0xC0)):
                EUDBreakIf(n == 0)
                n -= 1
            EUDEndIf()
            addr += 1
        EUDEndInfLoop()
        EUDReturn(addr)

    @EUDFunc
    def size(addr):
        """The bytes of the character that starts at addr; 0 at the text's end."""
        b = f_bread(addr)
        n = EUDVariable()
        n << 1
        if EUDIf()(b == 0):
            n << 0
        if EUDElseIf()(b >= 0xF0):
            n << 4
        if EUDElseIf()(b >= 0xE0):
            n << 3
        if EUDElseIf()(b >= 0xC0):
            n << 2
        EUDEndIf()
        EUDReturn(n)

    @EUDFunc
    def slice_(addr, start, end):
        """Characters start … end - 1 of the text at addr, made."""
        a = skip(addr, start)
        z = EUDVariable()
        z << a
        if EUDIf()(end >= start + 1):
            z << skip(a, end - start)
        EUDEndIf()
        # A text of the table may be longer than one that is made: no more of it than the scratch holds, and make() cuts.
        n = z - a
        if EUDIf()(n >= TEXT_BYTES + 2):
            n << TEXT_BYTES + 1
        EUDEndIf()
        f_memcpy(scratch, a, n)
        f_bwrite(scratch + n, 0)
        EUDReturn(*make(scratch + n))

    @EUDFunc
    def pad(addr, length, width, fill, at_start):
        """The text with \`fill\` over and over before or after it until it is \`width\` characters; as it is when it is that long, or \`fill\` is empty."""
        pos = EUDVariable()
        pos << scratch
        need = EUDVariable()
        need << 0
        if EUDIf()([width >= length + 1, width <= 0x7FFFFFFF, f_bread(fill) >= 1]):
            need << width - length
        EUDEndIf()
        if EUDIf()(at_start == 0):
            pos << append(pos, addr)
        EUDEndIf()
        src = EUDVariable()
        src << fill
        if EUDWhile()([need >= 1, pos <= scratch + TEXT_BYTES]):
            n = size(src)
            if EUDIf()(n == 0):
                src << fill
                n << size(src)
            EUDEndIf()
            f_memcpy(pos, src, n)
            pos += n
            src += n
            need -= 1
        EUDEndWhile()
        f_bwrite(pos, 0)
        if EUDIf()([at_start >= 1, pos <= scratch + TEXT_BYTES]):
            pos << append(pos, addr)
        EUDEndIf()
        EUDReturn(*make(pos))

    @EUDFunc
    def repeat(addr, times):
        pos = EUDVariable()
        pos << scratch
        f_bwrite(pos, 0)
        if EUDIf()([times <= 0x7FFFFFFF, f_bread(addr) >= 1]):
            if EUDWhile()([times >= 1, pos <= scratch + TEXT_BYTES]):
                pos << append(pos, addr)
                times -= 1
            EUDEndWhile()
        EUDEndIf()
        EUDReturn(*make(pos))

    @EUDFunc
    def starts(addr, find):
        """Whether the text at addr starts with the one at find."""
        br1.seekoffset(addr)
        br2.seekoffset(find)
        if EUDInfLoop()():
            want = br2.readbyte()
            if EUDIf()(want == 0):
                EUDReturn(1)
            EUDEndIf()
            EUDBreakIfNot(br1.readbyte() == want)
        EUDEndInfLoop()
        EUDReturn(0)

    @EUDFunc
    def find_from(addr, find, start):
        """The place, in characters, of the first match at or after character \`start\`; 0xFFFFFFFF when there is none."""
        if EUDIf()(start >= count(addr) + 1):
            EUDReturn(0xFFFFFFFF)
        EUDEndIf()
        at = skip(addr, start)
        place = EUDVariable()
        place << start
        if EUDInfLoop()():
            if EUDIf()(starts(at, find) >= 1):
                EUDReturn(place)
            EUDEndIf()
            n = size(at)
            EUDBreakIf(n == 0)
            at += n
            place += 1
        EUDEndInfLoop()
        EUDReturn(0xFFFFFFFF)

    @EUDFunc
    def ends(addr, find):
        a, b = f_strlen(addr), f_strlen(find)
        if EUDIf()(b >= a + 1):
            EUDReturn(0)
        EUDEndIf()
        if EUDIf()(f_strcmp(addr + (a - b), find) == 0):
            EUDReturn(1)
        EUDEndIf()
        EUDReturn(0)

    @EUDFunc
    def code(addr, index):
        """The number of character \`index\`; 0xFFFFFFFF past either end."""
        if EUDIf()(index >= 0x80000000):
            EUDReturn(0xFFFFFFFF)
        EUDEndIf()
        at = skip(addr, index)
        n = size(at)
        if EUDIf()(n == 0):
            EUDReturn(0xFFFFFFFF)
        EUDEndIf()
        br1.seekoffset(at)
        v = EUDVariable()
        v << br1.readbyte()
        if EUDIf()(n == 2):
            v << (v & 0x1F)
        if EUDElseIf()(n == 3):
            v << (v & 0x0F)
        if EUDElseIf()(n == 4):
            v << (v & 0x07)
        EUDEndIf()
        if EUDWhile()(n >= 2):
            v << f_mul(v, 64) + (br1.readbyte() & 0x3F)
            n -= 1
        EUDEndWhile()
        EUDReturn(v)

    @EUDFunc
    def show(dst, src):
        """At most TEXT_FIELD_BYTES bytes of the text at src over the string at dst, never half a character."""
        used = EUDVariable()
        used << 0
        if EUDInfLoop()():
            n = size(src)
            EUDBreakIf(n == 0)
            if EUDIf()(used + n >= TEXT_FIELD_BYTES + 1):
                if EUDIf()(said_field == 0):
                    said_field << 1
                    GetGlobalStringBuffer().print("\\x06TrigScript: a text was cut off - an action's text and a unit's name show %d bytes of one that is made." % TEXT_FIELD_BYTES)
                EUDEndIf()
                EUDBreak()
            EUDEndIf()
            f_memcpy(dst + used, src, n)
            used += n
            src += n
        EUDEndInfLoop()
        f_bwrite(dst + used, 0)

    @EUDFunc
    def address(id_):
        """Where the text of the table with this id is; an empty one for id 0."""
        if EUDIf()(id_ == 0):
            EUDReturn(empty)
        EUDEndIf()
        EUDReturn(GetMapStringAddr(id_))

    _TEXT.update(scratch=scratch, empty=empty, append=append, count=count, make=make, copy=copy, release=release, slice=slice_, pad=pad, repeat=repeat,
                 starts=starts, ends=ends, find=find_from, code=code, show=show, size=size, address=address)
    return _TEXT


def slot(kind):
    """The string of the built map's table kept for one kind of field, made the first time one is asked for: its
    room in bytes that nothing else shares, which is what ForceAddString is for."""
    if kind not in _SLOTS:
        text = "(TrigScript: %s)" % kind
        _SLOTS[kind] = ForceAddString(text + " " * (TEXT_FIELD_BYTES - len(text)))
    return _SLOTS[kind]


# The actions whose text the game shows from a string it reads again whenever it draws (played 2026-09-19), by the
# kind of field: a player has one of each at a time, so one string a kind is enough.
SLOT_OF_ACTION = {12: "objectives", 7: "transmission"}
for _t in (17, 18, 19, 20, 21, 33, 34, 35, 36, 37, 40):
    SLOT_OF_ACTION[_t] = "leaderboard"


def text_id(text):
    """The id of a text written in the script; 0 for the empty one, which the table does not hold."""
    return EncodeString(text) if text else 0


class TextVal:
    """A text as the lowering holds it: where it is, the block it owns (the int 0: none), and its length in
    characters - an int, a variable, or None when nobody has counted yet. \`taken\`: the block is the value's own, so
    what receives the value keeps the block or gives it back; a variable's is only looked at."""

    def __init__(self, addr, block, length, taken):
        self.addr, self.block, self._length, self.taken = addr, block, length, taken

    def length(self):
        if self._length is None:
            self._length = texts()["count"](self.addr)
        return self._length


class TextStorage:
    """A text variable that is made: three cells, or three rows of twelve in a per-player program."""

    def __init__(self, decl, per_player, player_of):
        self.decl = decl
        self.rowed = per_player and not decl.get("shared")
        self.player_of = player_of
        make = (lambda: EUDArray([0] * 12)) if self.rowed else (lambda: EUDVariable(0))  # initial: no text yet, and no block
        self.addr, self.block, self.len = make(), make(), make()

    def cell(self, cell):
        return cell[self.player_of()] if self.rowed else cell

    def get(self):
        # A variable that was never given a text is an empty one: its address is 0 until then.
        addr = fresh(self.cell(self.addr))
        if EUDIf()(addr == 0):
            addr << texts()["empty"]
        EUDEndIf()
        return TextVal(addr, self.cell(self.block), self.cell(self.len), False)

    def write(self, addr, block, length):
        for cell, value in ((self.addr, addr), (self.block, block), (self.len, length)):
            if self.rowed:
                cell[self.player_of()] = value
            else:
                cell << value

    def take_out(self):
        """The text, and its block with it: the variable holds no block from here on."""
        v = self.get()
        out = TextVal(v.addr, fresh(v.block), fresh(v.length()), True)
        self.write(out.addr, 0, out.length())
        return out


class UnitRef:
    """A unit of the game as the lowering holds it: the pointer, its EPD, and the slot's uniqueness byte
    (as it sits in its dword, masked 0xFF00). \`uid\` None is the unit of a loop's turn, there by
    construction; a pointer that is the int 0 is no unit at all."""

    def __init__(self, ptr, epd, uid=None):
        self.ptr, self.epd, self.uid = ptr, epd, uid

    @property
    def none(self):
        return isinstance(self.ptr, int) and self.ptr == 0


NO_UNIT = UnitRef(0, 0, 0)


class UnitStorage:
    """A unit variable: three cells, or three 12-slot rows of a per-player program."""

    def __init__(self, decl, per_player, player_of):
        self.decl = decl
        self.rowed = per_player
        self.player_of = player_of
        make = (lambda: EUDArray([0] * 12)) if self.rowed else (lambda: EUDVariable(0))  # initial: no unit
        self.ptr, self.epd, self.uid = make(), make(), make()

    def get(self):
        if self.rowed:
            p = self.player_of()
            return UnitRef(self.ptr[p], self.epd[p], self.uid[p])
        return UnitRef(self.ptr, self.epd, self.uid)

    def set(self, ref):
        uid = ref.uid
        if uid is None:
            # The unit of a loop's turn is there now: this is when its slot's uniqueness byte is taken.
            uid = f_maskread_epd(ref.epd + OFF_UID, 0xFF00)
        for cell, value in ((self.ptr, ref.ptr), (self.epd, ref.epd), (self.uid, uid)):
            if self.rowed:
                cell[self.player_of()] = value
            else:
                cell << value


class LoopUnit:
    """The variable of a loop over units: the scan's own pointer, never kept past the loop."""

    def __init__(self, ref):
        self.ref = ref

    def get(self):
        return self.ref

    def set(self, ref):
        raise Fail("trigscript: the unit of a loop's turn cannot be assigned")


def saturate(value, bits):
    top = (1 << bits) - 1
    if isinstance(value, int):
        return min(value, top)
    v = EUDVariable()
    v << value
    if EUDIf()(v >= top + 1):
        v << top
    EUDEndIf()
    return v


def as_var(value):
    if isinstance(value, int):
        return EUDVariable(value & U32)  # initial: a constant, never written
    return value


def fresh(value=0):
    """A temporary that starts from \`value\` every time the code runs. \`EUDVariable(n)\` is not
    that: n is the cell's value when the map loads, so a temporary built that way and then
    written keeps what the last run left in it — \`ticks + 1\` went 1, 2, 4, 8 (found in the
    first played probe, 2026-09-18). Anything the lowering writes to starts here."""
    v = EUDVariable()
    v << value
    return v


class Lowering:
    def __init__(self, program):
        self.p = program
        self.per_player = bool(program.get("perPlayer"))
        self.owner = int(program.get("owner", 0))
        self.slots = owner_slots(program)
        self.player = None
        self.vars = {}
        self.arrays = {a["id"]: SliceStorage(a, self) if a.get("slice") else InnerListStorage(a, self) if a.get("through") else (ListStorage if a.get("dynamic") else ArrayStorage)(a, self.per_player, self.player_of) for a in program.get("arrays", [])}
        self.state = EUDArray([0] * 12) if self.per_player else EUDVariable(0)  # initial: program state
        self.wait = EUDArray([0] * 12) if self.per_player else EUDVariable(0)  # initial: program state
        self.resumes = []  # (index, Forward) for every sleep
        self.frame_end = None
        self.latches = {}
        # The functions that are called, by id, and each one's EUDFunc once something has called it.
        self.functions = {f["id"]: f for f in program.get("functions", [])}
        self.made = {}
        self.in_function = 0
        # The function being lowered, when it is one that calls itself: whose return address a frame keeps.
        self.within = []

    # ── storage ──
    def player_of(self):
        if self.player is None:
            raise Fail("trigscript: a per-player variable outside the player loop")
        return self.player

    def declare(self, decl):
        if decl.get("kind") == "unit":
            s = UnitStorage(decl, self.per_player, self.player_of)
        elif decl.get("kind") == "text" and decl.get("text") != "id":
            s = TextStorage(decl, self.per_player, self.player_of)
        else:
            s = Storage(decl, self.per_player, self.player_of)
        self.vars[decl["id"]] = s
        return s

    def array(self, id_, node=None):
        a = self.arrays.get(id_)
        if a is None:
            raise Fail("trigscript: unknown array %r%s" % (id_, where(node)))
        return a

    def var(self, id_, node=None):
        s = self.vars.get(id_)
        if s is None:
            raise Fail("trigscript: unknown variable %r%s" % (id_, where(node)))
        return s

    def get_state(self):
        return self.state[self.player] if self.per_player else self.state

    def set_state(self, value):
        if self.per_player:
            self.state[self.player] = value
        else:
            self.state << value

    def get_wait(self):
        return self.wait[self.player] if self.per_player else self.wait

    def set_wait(self, value):
        if self.per_player:
            self.wait[self.player] = value
        else:
            self.wait << value

    # ── numbers: an int (the 32 bits, 0 … 2^32 - 1) or an EUDVariable ──
    def num(self, e):
        k = e["kind"]
        if k in ("textLength", "textIndexOf", "textCode"):
            return self.text_number(e)
        if k == "input":
            return INPUT.read(e["input"], self, e)
        if k == "const":
            return int(e["value"]) & U32
        if k == "var":
            return self.var(e["id"], e).get()
        if k == "element":
            return self.array(e["array"], e).get(self.num(e["index"]))
        if k == "length":
            a = self.array(e["array"], e)
            return a.length() if isinstance(a, ListStorage) else a.length
        if k == "pop":
            return self.array(e["array"], e).pop()
        if k == "cast":
            return self.num(e["expr"])
        if k == "unary":
            x = self.num(e["expr"])
            return (-x) & U32 if isinstance(x, int) else 0 - x
        if k == "binary":
            return self.binary(e)
        if k == "read":
            return self.read(e)
        if k == "randomInt":
            # 0 … n - 1; an n of 0 gives 0, as a 0 divisor does.
            n = self.num(e["bound"])
            if isinstance(n, int):
                if n <= 1:
                    return 0
                return f_div(f_dwrand(), n)[1]
            out = fresh(0)
            if EUDIf()(n >= 1):
                out << f_div(f_dwrand(), n)[1]
            EUDEndIf()
            return out
        if k == "unitField":
            return self.unit_field(e)
        if k == "unitPart":
            return self.unit_part(e)
        if k == "tableRead":
            return self.table_read(e["cell"], e)
        if k == "ternary":
            t = EUDVariable()
            if EUDIf()(self.cond(e["cond"])):
                t << self.num(e["whenTrue"])
            if EUDElse()():
                t << self.num(e["whenFalse"])
            EUDEndIf()
            return t
        if k == "intrinsic" and e["name"] == "abs":
            x = self.num(e["args"][0])
            if isinstance(x, int):
                return abs(signed(x)) & U32
            t = fresh(x)
            if EUDIf()(t >= SIGN):
                t << 0 - t
            EUDEndIf()
            return t
        if k == "intrinsic":
            a, b = [self.num(x) for x in e["args"]]
            name = e["name"]
            unsigned = bool(e.get("unsigned"))
            if isinstance(a, int) and isinstance(b, int):
                key = (lambda v: v) if unsigned else signed
                return min(a, b, key=key) if name == "min" else max(a, b, key=key)
            t = EUDVariable()
            if EUDIf()(self.ordered(a, "<=" if name == "min" else ">=", b, unsigned)):
                t << a
            if EUDElse()():
                t << b
            EUDEndIf()
            return t
        if k == "call":
            return self.call(e["call"])
        raise Fail("trigscript: unknown expression %r%s" % (k, where(e)))

    def binary(self, e):
        a, b = self.num(e["left"]), self.num(e["right"])
        op = e["op"]
        if op in BITWISE:
            return self.bitwise(op, a, b)
        both = isinstance(a, int) and isinstance(b, int)
        if op == "+":
            return (a + b) & U32 if both else a + b
        if op == "-":
            return (a - b) & U32 if both else a - b
        if op == "*":
            return (a * b) & U32 if both else f_mul(as_var(a), as_var(b))
        # / and %: towards zero, the remainder with the dividend's sign, unless both sides are u32s. A divisor of 0 gives 0.
        unsigned = bool(e.get("unsigned"))
        pick = (lambda q, r: q) if op == "/" else (lambda q, r: r)
        if isinstance(b, int):
            if b == 0:
                raise Fail("trigscript: division by zero%s" % where(e))
            if both:
                if unsigned:
                    return pick(a // b, a % b)
                x, y = signed(a), signed(b)
                q = abs(x) // abs(y) * (-1 if (x < 0) != (y < 0) else 1)
                return pick(q, x - q * y) & U32
            return pick(*(f_div(a, b) if unsigned else f_div_towards_zero(fresh(a), signed(b))))
        out = fresh(0)
        if EUDIf()(b >= 1):
            q, r = f_div(as_var(a), b) if unsigned else f_div_towards_zero(fresh(a), fresh(b))
            out << pick(q, r)
        EUDEndIf()
        return out

    def ordered(self, a, op, b, unsigned):
        """\`a op b\` as one condition, the two read as u32s (\`unsigned\` true), as signed numbers (false), or one of
        each ("left" / "right" names the u32) - exactly: a number below zero is smaller than any u32. At least one
        side is a variable. A signed order is the unsigned one with the top bit of both sides flipped."""
        if unsigned in ("left", "right"):
            # s is the signed side, u the u32, and the comparison is turned to read s op u.
            s_, u_ = (b, a) if unsigned == "left" else (a, b)
            if unsigned == "left":
                op = FLIPPED[op]
            if isinstance(s_, int):
                if s_ >= SIGN:
                    return always(op in ("<", "<=", "!="))
                return self.ordered(s_, op, u_, True)
            sv = as_var(s_)
            if op in ("<", "<=", "!="):
                return EUDOr(sv >= SIGN, relation(sv, op, u_))
            return EUDAnd(sv <= SIGN - 1, relation(sv, op, u_))
        if isinstance(a, int):
            a, b, op = b, a, FLIPPED[op]
        if unsigned or op in ("==", "!="):
            return relation(as_var(a), op, b)
        return relation(a + SIGN, op, (b + SIGN) & U32 if isinstance(b, int) else b + SIGN)

    @staticmethod
    def bitwise(op, a, b):
        """& | ^ << >> >>> over 32 bits. \`>>\` keeps the sign of what it shifts and \`>>>\` does not; a shift by 32 or
        more leaves nothing but that sign."""
        if op in ("<<", ">>", ">>>"):
            if isinstance(a, int) and isinstance(b, int):
                if op == "<<":
                    return 0 if b >= 32 else (a << b) & U32
                if op == ">>>":
                    return 0 if b >= 32 else a >> b
                return (signed(a) >> min(b, 31)) & U32
            if isinstance(b, int) and b == 0:
                return a
            if isinstance(b, int) and b >= 32 and op != ">>":
                return 0
            if op == "<<":
                return f_bitlshift(fresh(a), b)
            if op == ">>>":
                return f_bitrshift(fresh(a), b)
            # The sign kept: a number below zero is shifted as its complement, which has zeros where it has ones.
            x, below = fresh(a), fresh(0)
            if EUDIf()(x >= SIGN):
                below << 1
                x << ~x
            EUDEndIf()
            r = fresh(f_bitrshift(x, b)) if not (isinstance(b, int) and b >= 32) else fresh(0)
            if EUDIf()(below >= 1):
                r << ~r
            EUDEndIf()
            return r
        if isinstance(a, int) and isinstance(b, int):
            return {"&": a & b, "|": a | b, "^": a ^ b}[op]
        # Copies: eudplib computes in place into an operand nothing else refers to, and ours may be a variable's own cell.
        x, y = fresh(a), fresh(b)
        return x & y if op == "&" else x | y if op == "|" else x ^ y

    # ── reads: a value of the game ──
    def current(self):
        """The player the program is running as: a slot, or the player loop's variable."""
        return self.player if self.per_player else self.slots[0]

    def one_player(self, p, node):
        if p == CURRENT_PLAYER:
            return self.current()
        if 0 <= p < 12:
            return p
        raise Fail("trigscript: a read takes one player%s" % where(node))

    def read(self, e):
        r = e["read"]
        source = r.get("source")
        if source == "condition":
            return self.read_condition(r["record"], e)
        if source == "player" and r.get("fact") == "left":
            return self.read_left(r, e)
        if source == "player":
            base = PLAYER_BYTES.get(r.get("fact"))
            if base is None:
                raise Fail("trigscript: unknown player fact %r%s" % (r.get("fact"), where(e)))
            value = f_bread(base + self.one_player(r["player"], e))
            if r.get("fact") == "slot":
                # A computer of a Use Map Settings game keeps the map's own number, 5; a melee computer is 1
                # (the slice 2 probe read 5 for one). Both are "a computer": one number for the script.
                kind = fresh(value)
                if EUDIf()(kind == 5):
                    kind << 1
                EUDEndIf()
                return kind
            return value
        if source == "supply":
            return self.read_supply(r, e)
        raise Fail("trigscript: unknown read %r%s" % (source, where(e)))

    def read_left(self, r, e):
        """1 once a player who was in the map's settings as a human or a computer is gone. Asked the way
        eudplib's f_playerexist asks (the player's trigger list), which the player loop already relies on.
        The byte table at 0x581D62 read 0 for players who were there, as it should, but nobody has seen it
        turn 1 in a game — a computer never leaves — so it is not what this rests on."""
        p = self.one_player(r["player"], e)
        if isinstance(p, int) and (p >= 8 or GetPlayerInfo(p).typestr not in ("Human", "Computer")):
            return 0
        gone = fresh(1)
        if EUDIf()(f_playerexist(p)):
            gone << 0
        EUDEndIf()
        return gone

    def read_supply(self, r, e):
        base = SUPPLY_TABLES.get(r.get("of"))
        if base is None:
            raise Fail("trigscript: unknown supply %r%s" % (r.get("of"), where(e)))
        p = self.one_player(r["player"], e)
        half = fresh(0)
        if r.get("race") is None:
            # The race the player plays; a slot with none (neutral, empty) has no supply.
            race = f_bread(PLAYER_BYTES["race"] + p)
            if EUDIf()(race <= 2):
                half << f_dwread_epd(EPD(base) + race * 36 + p)
            EUDEndIf()
        else:
            half << f_dwread_epd(EPD(base) + int(r["race"]) * 36 + p)
        # As the top bar shows it: half a supply in use counts as one.
        if r["of"] == "used":
            half += 1
        return half // 2

    def read_condition(self, rec, e):
        t, player, unit = rec["type"], rec["player"], rec["unitId"]
        one = player == CURRENT_PLAYER or not 12 <= player <= 26  # not a group; beyond 26 is an EUD offset, read as it stands
        table = None
        if one and t in (COND_DEATHS, COND_KILL) and not 229 <= unit <= 232:
            table = (DEATHS_TABLE if t == COND_DEATHS else KILLS_TABLE, unit * 12)
        elif one and t == COND_ACCUMULATE and rec["resource"] in (0, 1):
            table = (ORE_TABLE if rec["resource"] == 0 else GAS_TABLE, 0)
        if table is not None:
            p = self.current() if player == CURRENT_PLAYER else player
            return f_dwread_epd(EPD(table[0]) + table[1] + p)
        # No table holds it (a group's sum, units counted at a location, a score, a clock): ask the
        # condition, a bit at a time from the top. A unit count stays under 2^12, a number of players under 2^4.
        bits = 12 if t in (COND_BRING, COND_COMMAND) else 4 if t == COND_OPPONENTS else 32
        found = fresh(0)
        for bit in reversed(range(bits)):
            probe = found + (1 << bit)
            if EUDIf()(Condition(rec["location"], player, probe, unit, 0, t, rec["resource"], rec["flags"], eudx=rec.get("mask", 0) or 0)):
                found << probe
            EUDEndIf()
        return found

    # ── booleans: an eudplib condition ──
    def cond(self, e):
        k = e["kind"]
        if k == "const":
            return always(e["value"])
        if k == "cond":
            return condition(e["record"])
        if k == "var":
            return as_var(self.var(e["id"], e).get()) >= 1
        if k == "element":
            return as_var(self.array(e["array"], e).get(self.num(e["index"]))) >= 1
        if k == "pop":
            return as_var(self.array(e["array"], e).pop()) >= 1
        if k == "test":
            return as_var(self.num(e["expr"])) >= 1
        if k == "compare":
            a, b = self.num(e["left"]), self.num(e["right"])
            op, unsigned = e["op"], e.get("unsigned", False)
            if isinstance(a, int) and isinstance(b, int):
                x = a if unsigned in (True, "left") else signed(a)
                y = b if unsigned in (True, "right") else signed(b)
                return always(compare(x, op, y))
            # One comparison, built once: a comparison between variables writes into its own
            # condition, and one that is built and dropped is an orphan eudplib refuses.
            return self.ordered(a, op, b, unsigned)
        if k == "and":
            return EUDAnd(*[self.cond(c) for c in e["items"]])
        if k == "or":
            return EUDOr(*[self.cond(c) for c in e["items"]])
        if k == "not":
            return EUDNot(self.cond(e["expr"]))
        if k == "random":
            return (f_rand() & 1) >= 1
        if k in ("unitAlive", "unitFlag", "unitSame"):
            return as_var(self.truth(e)) >= 1
        if k == "edge":
            return self.edge(e)
        if k == "ternary":
            t = EUDVariable()
            if EUDIf()(self.cond(e["cond"])):
                t << self.truth(e["whenTrue"])
            if EUDElse()():
                t << self.truth(e["whenFalse"])
            EUDEndIf()
            return t >= 1
        if k == "call":
            return as_var(self.call(e["call"])) >= 1
        if k in ("textCompare", "textTest"):
            return as_var(self.text_truth(e)) >= 1
        raise Fail("trigscript: unknown condition %r%s" % (k, where(e)))

    def truth(self, e):
        """A boolean expression as 0 / 1."""
        if e["kind"] == "const":
            return 1 if e["value"] else 0
        if e["kind"] == "var":
            return self.var(e["id"], e).get()
        if e["kind"] == "element":
            return self.array(e["array"], e).get(self.num(e["index"]))
        if e["kind"] == "pop":
            return self.array(e["array"], e).pop()
        if e["kind"] == "unitAlive":
            ref = self.unit(e["unit"])
            t = fresh(0)
            if not ref.none:
                self.when_alive(ref, lambda: t << 1)
            return t
        if e["kind"] == "unitFlag":
            return self.unit_flag(e)
        if e["kind"] == "unitSame":
            a, b = self.unit(e["left"]), self.unit(e["right"])
            t = fresh(0)
            if not a.none and not b.none:
                ap, bp = as_var(a.ptr), as_var(b.ptr)
                if EUDIf()([ap >= 1, ap == bp]):
                    t << 1
                EUDEndIf()
            return t
        t = fresh(0)
        if EUDIf()(self.cond(e)):
            t << 1
        EUDEndIf()
        return t

    def edge(self, e):
        """rose(c): true on the frame c becomes true; once(c): true the first time it holds."""
        key = id(e)
        if key not in self.latches:
            self.latches[key] = EUDArray([0] * 12) if self.per_player else EUDVariable(0)  # initial: the latch
        latch = self.latches[key]

        def get():
            return latch[self.player] if self.per_player else latch

        def put(v):
            if self.per_player:
                latch[self.player] = v
            else:
                latch << v

        fired = fresh(0)
        held = self.truth(e["cond"])
        if EUDIf()(as_var(held) >= 1):
            if EUDIf()(as_var(get()) == 0):
                fired << 1
                put(1)
            EUDEndIf()
        if EUDElse()():
            if e["edge"] == "rose":
                put(0)
        EUDEndIf()
        return fired >= 1

    # ── units: a pointer into the game's unit table, checked before use ──
    def unit(self, e):
        k = e["kind"]
        if k == "unitNull":
            return NO_UNIT
        if k == "unitVar":
            return self.var(e["id"], e).get()
        if k == "pick":
            return self.pick(e)
        if k == "unitAt":
            # A unit kept as three numbers of the program (a cell each of an array of units): re-checked like any kept unit.
            ptr = self.num(e["ptr"])
            if isinstance(ptr, int) and ptr == 0:
                return NO_UNIT
            return UnitRef(fresh(ptr), fresh(self.num(e["epd"])), fresh(self.num(e["uid"])))
        if k == "call":
            return self.call(e["call"])
        raise Fail("trigscript: unknown unit expression %r%s" % (k, where(e)))

    def unit_part(self, e):
        """One of the three numbers a unit is kept as. The unit of a loop's turn has no uniqueness byte taken yet: it is read here."""
        ref = self.unit(e["unit"])
        if ref.none:
            return 0
        part = e["part"]
        if part == "ptr":
            return ref.ptr
        if part == "epd":
            return ref.epd
        return f_maskread_epd(ref.epd + OFF_UID, 0xFF00) if ref.uid is None else ref.uid

    def when_alive(self, ref, body):
        """\`body()\` when the unit is still the one that was kept: the slot has a sprite, its order is not
        "die", and its uniqueness byte is the one taken with the pointer."""
        if ref.none:
            return
        if ref.uid is None:
            body()
            return
        ptr, epd = as_var(ref.ptr), as_var(ref.epd)
        if EUDIf()([ptr >= 1, MemoryEPD(epd + OFF_SPRITE, AtLeast, 1), MemoryXEPD(epd + OFF_OWNER_ORDER, AtLeast, 0x100, 0xFF00), MemoryXEPD(epd + OFF_UID, Exactly, ref.uid, 0xFF00)]):
            body()
        EUDEndIf()

    @staticmethod
    def cunit(ref):
        return CUnit(ref.epd, ptr=ref.ptr)

    def unit_field(self, e):
        ref = self.unit(e["unit"])
        out = fresh(0)
        self.when_alive(ref, lambda: out << self.field_of(self.cunit(ref), e["field"], e))
        return out

    def field_of(self, cu, field, node):
        """A unit's number, in the script's units: whole points for hit points (as the game shows them,
        a started point counting), shields and energy."""
        if field == "hp":
            return f_div(cu.hp + 255, 256)[0]
        if field == "maxHp":
            return f_div(f_dwread_epd(EPD(UNITS_MAX_HP) + cu.unitType), 256)[0]
        if field == "shields":
            return f_div(cu.shield, 256)[0]
        if field == "maxShields":
            return f_wread(UNITS_MAX_SHIELDS + cu.unitType * 2)
        if field == "energy":
            return f_div(cu.energy, 256)[0]
        if field in UNIT_TIMERS:
            return getattr(cu, UNIT_TIMERS[field])
        name = {"owner": "owner", "type": "unitType", "x": "posX", "y": "posY", "kills": "killCount", "orderId": "orderID", "cooldown": "groundWeaponCooldown", "resources": "resourceAmount"}.get(field)
        if name is None:
            raise Fail("trigscript: unknown unit field %r%s" % (field, where(node)))
        return getattr(cu, name)

    def unit_flag(self, e):
        ref = self.unit(e["unit"])
        out = fresh(0)

        def body():
            cu = self.cunit(ref)
            flag = e["flag"]
            if flag == "underAttack":
                held = cu.attackNotifyTimer >= 1
            else:
                mask = {"hallucinated": STATUS_HALLUCINATION, "cloaked": STATUS_CLOAKED, "burrowed": STATUS_BURROWED, "invincible": STATUS_INVINCIBLE}.get(flag)
                if mask is None:
                    raise Fail("trigscript: unknown unit flag %r%s" % (flag, where(e)))
                held = cu.check_status_flag(mask)
            if EUDIf()(held):
                out << 1
            EUDEndIf()

        self.when_alive(ref, body)
        return out

    def location_bounds(self, number):
        base = EPD(MRGN + (int(number) - 1) * 20)
        return [f_dwread_epd(base + i) for i in range(4)]

    def scan(self, flt, node, body):
        """The game's unit table, slot by slot: \`body(ref, next_, exit_)\` for every unit on the map the
        filter matches. Every test is one condition whose address moves on with the slot, so a slot
        that does not match costs a trigger or two."""
        ptr, epd = EUDVariable(), EUDVariable()
        empty = MemoryEPD(0, Exactly, 0)
        dying = MemoryXEPD(0, Exactly, 0, 0xFF00)
        moving = [(empty, OFF_SPRITE), (dying, OFF_OWNER_ORDER)]
        match, values = [], []
        owner = flt.get("owner")
        if owner is not None:
            who = self.current() if owner == CURRENT_PLAYER else int(owner)
            c = MemoryXEPD(0, Exactly, who if isinstance(who, int) else 0, 0xFF)
            match.append(c)
            moving.append((c, OFF_OWNER_ORDER))
            if not isinstance(who, int):
                values.append((c, who))
        kind = flt.get("type")
        if kind is not None and kind < 228:
            c = MemoryXEPD(0, Exactly, int(kind), 0xFFFF)
            match.append(c)
            moving.append((c, OFF_TYPE))
        elif kind is not None and kind not in GROUP_BITS:
            raise Fail("trigscript: unknown unit type %r%s" % (kind, where(node)))
        if flt.get("at"):
            left, top, right, bottom = self.location_bounds(flt["at"])
            # A location reaching past the map's edge starts below zero, which a unit's position never is.
            for v in (left, top):
                if EUDIf()(v >= 0x80000000):
                    v << 0
                EUDEndIf()
            for comparison, mask, value in ((AtLeast, 0xFFFF, left), (AtMost, 0xFFFF, right), (AtLeast, 0xFFFF0000, f_bitlshift(top, 16)), (AtMost, 0xFFFF0000, f_bitlshift(bottom, 16))):
                c = MemoryXEPD(0, comparison, 0, mask)
                match.append(c)
                moving.append((c, OFF_POS))
                values.append((c, value))
        DoActions([ptr.SetNumber(UNIT_TABLE), epd.SetNumber(EPD(UNIT_TABLE))] + [SetMemory(c + 4, SetTo, EPD(UNIT_TABLE) + off) for c, off in moving])
        for c, value in values:
            f_dwwrite_epd(EPD(c + 8), value)
        head, next_, exit_ = Forward(), Forward(), Forward()
        head << NextTrigger()
        EUDJumpIf(ptr >= UNIT_END, exit_)
        EUDJumpIf(empty, next_)
        EUDJumpIf(dying, next_)
        if match:
            matched = Forward()
            EUDJumpIf(match, matched)
            EUDJump(next_)
            matched << NextTrigger()
        if kind in GROUP_BITS:
            group = fresh(f_bread(UNITS_GROUP + f_maskread_epd(epd + OFF_TYPE, 0xFFFF)))
            EUDJumpIf((group & GROUP_BITS[kind]) == 0, next_)
        body(UnitRef(ptr, epd, None), next_, exit_)
        next_ << NextTrigger()
        DoActions([SetMemory(c + 4, Add, UNIT_SIZE // 4) for c, _ in moving] + [ptr.AddNumber(UNIT_SIZE), epd.AddNumber(UNIT_SIZE // 4)])
        EUDJump(head)
        exit_ << NextTrigger()

    def pick(self, e):
        """One unit among the matching: the first, the nearest to a location's centre, or one at random."""
        by, flt = e["by"], e.get("filter", {})
        found_ptr, found_epd = fresh(0), fresh(0)

        def take(ref):
            found_ptr << ref.ptr
            found_epd << ref.epd

        if by == "first":
            def body(ref, next_, exit_):
                take(ref)
                EUDJump(exit_)
            self.scan(flt, e, body)
        elif by == "nearest":
            if e.get("mouse") is not None:
                # A player's mouse, and nothing farther from it than \`within\`.
                cx = as_var(INPUT.read({"source": "mouse", "axis": "x", "player": e["mouse"]}, self, e))
                cy = as_var(INPUT.read({"source": "mouse", "axis": "y", "player": e["mouse"]}, self, e))
                least = fresh(int(e.get("within", 48)) + 1)
            else:
                left, top, right, bottom = self.location_bounds(e["near"])
                cx, cy = f_div(left + right, 2)[0], f_div(top + bottom, 2)[0]
                least = fresh(U32)

            def body(ref, next_, exit_):
                cu = self.cunit(ref)
                # |dx| + |dy| is enough to say which is nearest, and never overflows.
                d = distance(cu.posX, cx) + distance(cu.posY, cy)
                if EUDIf()(d < least):
                    least << d
                    take(ref)
                EUDEndIf()
            self.scan(flt, e, body)
        elif by == "random":
            # Count the matching, draw one, take the drawn one on a second pass.
            count = fresh(0)
            self.scan(flt, e, lambda ref, next_, exit_: count.__iadd__(1))
            none = Forward()
            EUDJumpIf(count == 0, none)
            drawn = f_div(f_dwrand(), count)[1]
            i = fresh(0)

            def body(ref, next_, exit_):
                hit = Forward()
                EUDJumpIf(i == drawn, hit)
                i.__iadd__(1)
                EUDJump(next_)
                hit << NextTrigger()
                take(ref)
                EUDJump(exit_)
            self.scan(flt, e, body)
            none << NextTrigger()
        else:
            raise Fail("trigscript: unknown pick %r%s" % (by, where(e)))
        uid = fresh(0)
        if EUDIf()(found_ptr >= 1):
            uid << f_maskread_epd(found_epd + OFF_UID, 0xFF00)
        EUDEndIf()
        return UnitRef(found_ptr, found_epd, uid)

    def unit_loop(self, st, ctx):
        def body(ref, next_, exit_):
            self.vars[st["decl"]["id"]] = LoopUnit(ref)
            self.straight(st["body"], dict(ctx, **{"break": exit_, "continue": next_}))
        self.scan(st.get("filter", {}), st, body)

    def unit_write(self, st):
        ref = self.unit(st["unit"])
        field = st["field"]
        if field == "invincible":
            on = self.truth(st["value"])

            def flag():
                cu = self.cunit(ref)
                if isinstance(on, int):
                    cu.set_invincible() if on else cu.clear_invincible()
                    return
                if EUDIf()(as_var(on) >= 1):
                    cu.set_invincible()
                if EUDElse()():
                    cu.clear_invincible()
                EUDEndIf()
            self.when_alive(ref, flag)
            return
        value = self.num(st["value"])

        def write():
            cu = self.cunit(ref)
            if field == "hp":
                # Hit points at 0 are a dead unit, so that is what the write makes of it.
                if isinstance(value, int):
                    if value == 0:
                        cu.die()
                    else:
                        cu.hp = min(value, 0xFFFFFF) * 256
                    return
                if EUDIf()(value == 0):
                    cu.die()
                if EUDElse()():
                    cu.hp = f_mul(saturate(value, 24), 256)
                EUDEndIf()
            elif field == "shields":
                cu.shield = points(value, 24)
            elif field == "energy":
                cu.energy = points(value, 8)
            elif field == "kills":
                cu.killCount = saturate(value, 8)
            elif field == "resources":
                cu.resourceAmount = saturate(value, 16)
            elif field == "cooldown":
                frames = saturate(value, 8)
                cu.groundWeaponCooldown = frames
                cu.airWeaponCooldown = frames
                cu.spellCooldown = frames
            elif field in UNIT_TIMERS:
                setattr(cu, UNIT_TIMERS[field], saturate(value, 8))
            else:
                raise Fail("trigscript: a unit's %s takes no write%s" % (field, where(st)))
        self.when_alive(ref, write)

    def unit_do(self, st):
        ref = self.unit(st["unit"])
        verb = st["verb"]
        do = verb["do"]
        amount = self.num(verb["amount"]) if do in ("damage", "heal") else 0

        def act():
            cu = self.cunit(ref)
            if do == "kill":
                cu.die()
            elif do == "remove":
                cu.remove()
            elif do == "give":
                to = int(verb["to"])
                cu.cgive(self.current() if to == CURRENT_PLAYER else to)
            elif do == "order":
                self.order(cu, verb, st)
            elif do == "locate":
                self.locate(cu, int(verb["location"]))
            elif do in ("damage", "heal"):
                self.adjust(cu, do, amount, bool(verb.get("percent")))
            else:
                raise Fail("trigscript: unknown unit verb %r%s" % (do, where(st)))
        self.when_alive(ref, act)

    def order(self, cu, verb, node):
        """The game's own Order, reaching this unit alone: a location is made a small box around the unit
        for the length of the action (the game did nothing with a box of no size), then put back."""
        kind = {"move": Move, "patrol": Patrol, "attack": Attack}.get(verb["order"])
        if kind is None:
            raise Fail("trigscript: unknown order %r%s" % (verb["order"], where(node)))
        base = EPD(MRGN + (SCRATCH_LOCATION - 1) * 20)
        kept = [f_dwread_epd(base + i) for i in range(5)]
        x, y = cu.posX, cu.posY
        for i, v in enumerate((x - 2, y - 2, x + 2, y + 2, 0)):
            f_dwwrite_epd(base + i, v)
        DoActions(Order(cu.unitType, cu.owner, SCRATCH_LOCATION, kind, int(verb["target"])))
        for i, v in enumerate(kept):
            f_dwwrite_epd(base + i, v)

    def locate(self, cu, number):
        """A location centred on the unit, its size kept."""
        base = EPD(MRGN + (number - 1) * 20)
        left, top, right, bottom = [f_dwread_epd(base + i) for i in range(4)]
        width, height = right - left, bottom - top
        x, y = cu.posX - f_div(width, 2)[0], cu.posY - f_div(height, 2)[0]
        for i, v in enumerate((x, y, x + width, y + height)):
            f_dwwrite_epd(base + i, v)

    def center_location(self, st):
        """A location centred on a point, its size kept."""
        x, y = self.num(st["x"]), self.num(st["y"])
        base = EPD(MRGN + (int(st["location"]) - 1) * 20)
        left, top, right, bottom = [f_dwread_epd(base + i) for i in range(4)]
        width, height = right - left, bottom - top
        nx, ny = x - f_div(width, 2)[0], y - f_div(height, 2)[0]
        for i, v in enumerate((nx, ny, nx + width, ny + height)):
            f_dwwrite_epd(base + i, v)

    def adjust(self, cu, do, amount, percent):
        """Hit points down — at 0 the unit dies — or up to the type's maximum, in the game's own units (256 to a point)."""
        now = fresh(cu.hp)
        top = f_dwread_epd(EPD(UNITS_MAX_HP) + cu.unitType)
        if percent:
            step = f_div(f_mul(top, as_var(amount)), 100)[0]
        else:
            step = amount * 256 if isinstance(amount, int) else f_mul(saturate(amount, 24), 256)
        if do == "damage":
            if EUDIf()(now <= step):
                cu.die()
            if EUDElse()():
                cu.hp = now - step
            EUDEndIf()
            return
        new = fresh(now + step)
        if EUDIf()(new >= top):
            new << top
        EUDEndIf()
        cu.hp = new

    # ── the game's tables ──
    def cell_address(self, c):
        index = c["index"]
        if c.get("player") and index == CURRENT_PLAYER:
            index = self.current()
        base = int(c["base"]) + int(c.get("key") or 0)
        return base + index * int(c["stride"])

    def table_read(self, c, node):
        if c.get("special"):
            raise Fail("trigscript: %s cannot be read%s" % (c.get("name"), where(node)))
        addr = self.cell_address(c)
        width = c["width"]
        if width == "bit":
            v = fresh(0)
            if EUDIf()(MemoryX(addr, AtLeast, 1, 1 << int(c["bit"]))):
                v << 1
            EUDEndIf()
            return v
        v = f_dwread(addr) if width == 4 else f_wread(addr) if width == 2 else f_bread(addr)
        scale = int(c.get("scale") or 1)
        return f_div(v, scale)[0] if scale > 1 else v

    def table_write(self, st):
        c = st["cell"]
        addr = self.cell_address(c)
        special = c.get("special")
        if special == "name":
            if self.has_id(st["value"]):
                f_wwrite(addr, self.text_id_of(st["value"]))
                return
            # A name that was made: over the string kept for this unit type, on every computer - a name is nobody's in particular.
            made = self.text(st["value"])
            sid = slot("the name of unit type %d" % int(c["index"]))
            texts()["show"](GetMapStringAddr(sid), made.addr)
            self.used(made)
            f_wwrite(addr, sid)
            return
        width = c["width"]
        if st.get("boolean"):
            value = self.truth(st["value"])
        else:
            value = self.num(st["value"])
            scale = int(c.get("scale") or 1)
            if scale > 1 and not st.get("scaled"):
                value = value * scale if isinstance(value, int) else f_mul(value, scale)
        top = 1 if width == "bit" else (1 << (8 * width)) - 1
        if isinstance(value, int):
            value = min(value, top)
        elif width != 4 and width != "bit":
            value = saturate(value, 8 * width)
        if special == "speed":
            self.write_speed(int(c["index"]), value)
        elif special == "color":
            f_bwrite(addr, value)
            f_bwrite(addr + MINIMAP_COLOR_OFFSET, value)
        elif width == "bit":
            mask = 1 << int(c["bit"])
            if isinstance(value, int):
                DoActions(SetMemoryX(addr, SetTo, mask if value else 0, mask))
            else:
                if EUDIf()(value >= 1):
                    DoActions(SetMemoryX(addr, SetTo, mask, mask))
                if EUDElse()():
                    DoActions(SetMemoryX(addr, SetTo, 0, mask))
                EUDEndIf()
        elif width == 4:
            f_dwwrite(addr, value)
        elif width == 2:
            f_wwrite(addr, value)
        else:
            f_bwrite(addr, value)

    def write_speed(self, unit, speed):
        """A unit type's top speed is its flingy's: the flingy is switched to table control and given the
        speed, with acceleration about a seventeenth of it and the braking distance v² / 2a to match
        (the Vulture's own figures), as Magenta writes it. Units made afterwards move at the new speed."""
        flingy = f_bread(UNITS_FLINGY + unit)
        if isinstance(speed, int):
            acceleration = max(1, round(speed / 17))
            halt = max(1, round(speed * speed / (2 * acceleration)))
        else:
            acceleration = fresh(f_div(speed, 17)[0])
            if EUDIf()(acceleration == 0):
                acceleration << 1
            EUDEndIf()
            halt = fresh(f_div(f_mul(speed, speed), acceleration * 2)[0])
            if EUDIf()(halt == 0):
                halt << 1
            EUDEndIf()
            acceleration = saturate(acceleration, 16)
        f_bwrite(FLINGY_CONTROL + flingy, 0)
        f_dwwrite(FLINGY_SPEED + flingy * 4, speed)
        f_wwrite(FLINGY_ACCELERATION + flingy * 2, acceleration)
        f_dwwrite(FLINGY_HALT + flingy * 4, halt)

    # ── statements ──
    def block(self, statements, ctx):
        for st in statements:
            self.statement(st, ctx)

    def statement(self, st, ctx):
        k = st["kind"]
        if k == "declare":
            s = self.declare(st["decl"])
            if not st.get("failed"):
                self.put(s, st["init"], st["decl"]["kind"])
        elif k == "assignText":
            self.put(self.var(st["target"], st), st["value"], "text")
        elif k == "storeText":
            self.store_text(st)
        elif k == "releaseText":
            block, i = self.array(st["block"], st), fresh(self.num(st["index"]))
            texts()["release"](as_var(block.get(i)))
            block.set(i, 0)
        elif k == "textLoop":
            self.text_loop(st, ctx)
        elif k == "assignUnit":
            self.var(st["target"], st).set(self.unit(st["value"]))
        elif k == "unitLoop":
            self.unit_loop(st, ctx)
        elif k == "unitWrite":
            self.unit_write(st)
        elif k == "unitDo":
            self.unit_do(st)
        elif k == "tableWrite":
            self.table_write(st)
        elif k == "assign":
            self.var(st["target"], st).set(self.num(st["value"]))
        elif k == "assignBool":
            self.var(st["target"], st).set(self.truth(st["value"]))
        elif k == "declareArray":
            a = self.array(st["array"], st)
            cell = self.num if a.decl["kind"] == "number" else self.truth
            if isinstance(a, ListStorage):
                if st.get("fill") is not None:
                    v = cell(st["fill"])
                    a.declare_filled(v if isinstance(v, int) else fresh(v), int(a.decl["length"]))
                else:
                    values = [cell(v) for v in st.get("init", [])]
                    a.declare([v if isinstance(v, int) else fresh(v) for v in values])
            elif st.get("fill") is not None:
                a.fill(cell(st["fill"]))
            else:
                # Every value first, then the stores: [b, a] of two cells of the array itself is a swap.
                values = [cell(v) for v in st.get("init", [])]
                values = [v if isinstance(v, int) else fresh(v) for v in values]
                for i, v in enumerate(values):
                    a.set(i, v)
        elif k == "push":
            a = self.array(st["array"], st)
            a.push((self.num if a.decl["kind"] == "number" else self.truth)(st["value"]))
        elif k == "pop":
            self.array(st["array"], st).pop()
        elif k == "setLength":
            self.array(st["array"], st).set_length(self.num(st["value"]))
        elif k == "store":
            a = self.array(st["array"], st)
            value = (self.num if a.decl["kind"] == "number" else self.truth)(st["value"])
            a.set(self.num(st["index"]), value)
        elif k == "if":
            self.if_(st, ctx)
        elif k == "while":
            self.while_(st, ctx)
        elif k == "do":
            self.do_(st, ctx)
        elif k == "for":
            self.for_(st, ctx)
        elif k == "unrolled":
            self.unrolled(st, ctx)
        elif k == "switch":
            self.switch(st, ctx)
        elif k == "break":
            if "break" not in ctx:
                raise Fail("trigscript: break outside a loop%s" % where(st))
            EUDJump(ctx["break"])
            raise Leave()
        elif k == "continue":
            if "continue" not in ctx:
                raise Fail("trigscript: continue outside a loop%s" % where(st))
            EUDJump(ctx["continue"])
            raise Leave()
        elif k == "return":
            fn = ctx.get("fn")
            if fn is None:
                raise Fail("trigscript: return outside a function%s" % where(st))
            if st.get("value") is not None and fn["result"] is not None:
                self.put(fn["result"], st["value"], fn["kind"])
            EUDJump(fn["end"])
            raise Leave()
        elif k == "sleep":
            self.sleep(st)
        elif k == "action":
            self.action(st)
        elif k == "print":
            self.print_(st)
        elif k == "centerLocation":
            self.center_location(st)
        elif k == "call":
            self.call(st["call"])
        elif k == "block":
            self.block(st["body"], ctx)
        elif k == "remark":
            pass
        else:
            raise Fail("trigscript: unknown statement %r%s" % (k, where(st)))

    def straight(self, statements, ctx):
        """A statement list whose end may not be reached (a break inside): Leave stops it. True when the end was reached."""
        try:
            self.block(statements, ctx)
            return True
        except Leave:
            return False

    def if_(self, st, ctx):
        else_l, end = Forward(), Forward()
        EUDJumpIfNot(self.cond(st["cond"]), else_l)
        if self.straight(st["then"], ctx):
            EUDJump(end)
        else_l << NextTrigger()
        if st.get("else"):
            self.straight(st["else"], ctx)
        end << NextTrigger()

    def while_(self, st, ctx):
        head, exit_ = Forward(), Forward()
        head << NextTrigger()
        if st.get("cond") is not None:
            EUDJumpIfNot(self.cond(st["cond"]), exit_)
        if self.straight(st["body"], dict(ctx, **{"break": exit_, "continue": head})):
            EUDJump(head)
        exit_ << NextTrigger()

    def do_(self, st, ctx):
        body, check, exit_ = Forward(), Forward(), Forward()
        body << NextTrigger()
        self.straight(st["body"], dict(ctx, **{"break": exit_, "continue": check}))
        check << NextTrigger()
        EUDJumpIf(self.cond(st["cond"]), body)
        exit_ << NextTrigger()

    def for_(self, st, ctx):
        head, update, exit_ = Forward(), Forward(), Forward()
        head << NextTrigger()
        if st.get("cond") is not None:
            EUDJumpIfNot(self.cond(st["cond"]), exit_)
        self.straight(st["body"], dict(ctx, **{"break": exit_, "continue": update}))
        update << NextTrigger()
        if self.straight(st["update"], ctx):
            EUDJump(head)
        exit_ << NextTrigger()

    def unrolled(self, st, ctx):
        exit_ = Forward()
        for statements in st["iterations"]:
            nxt = Forward()
            self.straight(statements, dict(ctx, **{"break": exit_, "continue": nxt}))
            nxt << NextTrigger()
        exit_ << NextTrigger()

    def switch(self, st, ctx):
        v = as_var(self.num(st["value"]))
        exit_ = Forward()
        labels = [Forward() for _ in st["cases"]]
        default = None
        for c, label in zip(st["cases"], labels):
            if c["value"] is None:
                default = label
                continue
            n = c["value"]
            if n != n or n < -SIGN or n > U32:  # NaN, or a value the variable never holds
                continue
            EUDJumpIf(v == int(n) & U32, label)
        EUDJump(default if default is not None else exit_)
        for c, label in zip(st["cases"], labels):
            label << NextTrigger()
            self.straight(c["body"], dict(ctx, **{"break": exit_}))
        exit_ << NextTrigger()

    def sleep(self, st):
        if self.in_function:
            raise Fail("trigscript: sleep inside a function that is called%s" % where(st))
        if st.get("cycles") is not None:
            frames = int(st["cycles"])
        else:
            frames = max(1, int(round(float(st.get("ms", 0)) * FRAMES_PER_SECOND / 1000)))
        index = len(self.resumes) + 1
        resume = Forward()
        self.resumes.append((index, resume))
        self.set_state(index)
        # The frame after this one is one frame later: sleep(frames(1)) goes on in the next frame, as the
        # simulator has it. (Until 3.4 the wait was one frame longer, so a loop sleeping a frame ran every other.)
        self.set_wait(frames - 1)
        EUDJump(self.frame_end)
        resume << NextTrigger()

    def action(self, st):
        r = st["record"]
        fields = dict(locid1=r["location"], strid=string_of(r["text"]), wavid=string_of(r["wav"]), time=r["time"], player1=r["player"], player2=r["target"], unitid=r["unitId"], acttype=r["type"], amount=r["modifier"], flags=r["flags"])
        shown = None
        if st.get("text") is not None:
            if self.has_id(st["text"]):
                fields["strid"] = self.text_id_of(st["text"])
            else:
                kind = SLOT_OF_ACTION.get(int(r["type"]))
                if kind is None:
                    raise Fail("trigscript: this action's text cannot be one that is made%s" % where(st))
                # Over the string kept for this kind of field - on the computer of the player the action is for, which is
                # the one the program is running as: the game reads the string again whenever it draws, and another
                # player's text must not be there when it does. Nothing of the script can read the string back.
                shown = self.text(st["text"])
                if EUDIf()(IsUserCP()):
                    texts()["show"](GetMapStringAddr(slot(kind)), shown.addr)
                EUDEndIf()
                self.used(shown)
                fields["strid"] = slot(kind)
        count = None
        for variable in st.get("variables") or []:
            value = as_var(self.num(variable["expr"]))
            field = variable["field"]
            if field == "modifier":
                # A unit count: the byte field is not a variable's place, so the action is done once per
                # unit — as many as the variable says, 0 being none (in the record, 0 means "all").
                count = value
                continue
            name = {"target": "player2", "time": "time", "player": "player1", "location": "locid1", "text": "strid", "wav": "wavid", "unitId": "unitid"}.get(field)
            if name is None:
                raise Fail("trigscript: no variable can stand in the %s field%s" % (field, where(st)))
            if name == "unitid":
                # A unit type the game has: past the table, an action reads what is not a unit.
                value = fresh(value)
                if EUDIf()(value >= 228):
                    value << 228
                EUDEndIf()
            fields[name] = value
        if count is None:
            DoActions(Action(**fields))
            return
        fields["amount"] = 1
        for _ in EUDLoopRange(0, count):
            DoActions(Action(**fields))

    def print_(self, st):
        """Text with values in it: every value first, then the text, shown only on the screen of the player it is for."""
        args = []
        temps = []
        for part in st["parts"]:
            k = part["kind"]
            if k == "text":
                args.append(part["text"])
            elif k == "value":
                v = self.text(part["text"])
                temps.append(v)
                args.append(ptr2s(v.addr))
            elif k == "number":
                v = self.num(part["expr"])
                if isinstance(v, int):
                    args.append(str(v if part.get("unsigned") else signed(v)))
                elif part.get("unsigned"):
                    args.append(v)
                else:
                    # A number below zero: its minus sign, then how far below it is.
                    sign, size = fresh(NO_SIGN), fresh(v)
                    if EUDIf()(size >= SIGN):
                        sign << MINUS_SIGN
                        size << 0 - size
                    EUDEndIf()
                    args.append(ptr2s(sign))
                    args.append(size)
            elif k == "name":
                args.append(PName(self.one_player(part["player"], st)))
            elif k == "color":
                args.append(PColor(self.one_player(part["player"], st)))
            else:
                raise Fail("trigscript: unknown text part %r%s" % (k, where(st)))
        if not args:
            return
        # eudplib prints for the current player, and only on that player's own computer.
        show = (lambda: f_eprintln(*args)) if st.get("position") == "center" else (lambda: GetGlobalStringBuffer().print(*args))
        to = int(st.get("to", CURRENT_PLAYER))
        if to == CURRENT_PLAYER:
            show()
            self.used(*temps)
            return
        for p in group_slots(to, st):
            f_setcurpl(p)
            show()
        f_setcurpl(self.current())
        self.used(*temps)

    # ── texts ──
    def has_id(self, e):
        """Whether a text is one of the built map's table whatever happens in the game (compiler/ir.ts#textHasId)."""
        k = e["kind"]
        if k in ("text", "textOf"):
            return True
        if k == "textVar":
            return not isinstance(self.var(e["id"], e), TextStorage)
        if k == "textTernary":
            return self.has_id(e["whenTrue"]) and self.has_id(e["whenFalse"])
        return False

    def text_id_of(self, e):
        """The id of a text that has one: an int, or a variable."""
        k = e["kind"]
        if k == "text":
            return text_id(e["text"])
        if k == "textVar":
            return self.var(e["id"], e).get()
        if k == "textOf":
            return self.array(e["array"], e).get(self.num(e["index"]))
        if k == "textTernary":
            t = EUDVariable()
            if EUDIf()(self.cond(e["cond"])):
                t << self.text_id_of(e["whenTrue"])
            if EUDElse()():
                t << self.text_id_of(e["whenFalse"])
            EUDEndIf()
            return t
        raise Fail("trigscript: this text has no id%s" % where(e))

    def used(self, *values):
        """Values that have been used: a block that was the value's own goes back to the heap."""
        for v in values:
            if v.taken and not isinstance(v.block, int):
                texts()["release"](v.block)

    def texts_of(self, exprs):
        """Several texts in the order they are written. A variable's text is only looked at - unless working a later
        one out runs a call, which may give that variable another text and its block back to the heap: then it is a copy."""
        out = []
        for i, e in enumerate(exprs):
            v = self.text(e)
            if not v.taken and any(has_call(x) for x in exprs[i + 1:]):
                v = self.own(v)
            out.append(v)
        return out

    def own(self, v):
        """A value as something to keep: its own block as it is, a copy of a variable's."""
        if v.taken:
            return v
        addr, block, length = texts()["copy"](v.addr, v.block, v.length())
        return TextVal(addr, block, length, True)

    def store_text(self, st):
        """A text into cell i of three arrays (a row's): worked out first - it may be made from what the cells hold -
        then the block they held goes back, then they take the text, a copy of one that was only looked at."""
        v = self.own(self.text(st["value"]))
        addr, block, length = fresh(v.addr), fresh(v.block), fresh(v.length())
        i = fresh(self.num(st["index"]))
        held = self.array(st["block"], st)
        texts()["release"](as_var(held.get(i)))
        self.array(st["addr"], st).set(i, addr)
        held.set(i, block)
        self.array(st["chars"], st).set(i, length)

    def put(self, storage, e, kind):
        """A value into a variable. A text is worked out first - it may be made from what the variable holds - and only then does the block the variable held go back."""
        if kind != "text":
            storage.set(self.value(e, kind))
            return
        if not isinstance(storage, TextStorage):
            storage.set(self.text_id_of(e))
            return
        v = self.own(self.text(e))
        addr, block, length = fresh(v.addr), fresh(v.block), fresh(v.length())
        texts()["release"](storage.cell(storage.block))
        storage.write(addr, block, length)

    def written(self, parts, st):
        """The parts of a text in the scratch, and where it ends. Every value is worked out first, since working one
        out may use the scratch itself; then the parts are written a group at a time, a group being what cannot
        come to more than a text holds, so that checking where the writing has got to between groups keeps it inside."""
        T = texts()
        items, temps = [], []
        for part in parts:
            k = part["kind"]
            if k == "text":
                data = part["text"].encode("utf-8")[:TEXT_BYTES].decode("utf-8", "ignore")
                items.append(([data], len(data.encode("utf-8")), None))
            elif k == "number":
                v = self.num(part["expr"])
                if isinstance(v, int):
                    data = str(v if part.get("unsigned") else signed(v))
                    items.append(([data], len(data), None))
                elif part.get("unsigned"):
                    items.append(([fresh(v)], 10, None))
                else:
                    sign, size = fresh(NO_SIGN), fresh(v)
                    if EUDIf()(size >= SIGN):
                        sign << MINUS_SIGN
                        size << 0 - size
                    EUDEndIf()
                    items.append(([ptr2s(sign), size], 11, None))
            elif k == "name":
                items.append(([PName(self.one_player(part["player"], st))], 25, None))
            elif k == "color":
                items.append(([PColor(self.one_player(part["player"], st))], 1, None))
            elif k == "value":
                v = self.text(part["text"])
                if not v.taken and has_call(parts[parts.index(part) + 1:]):
                    v = self.own(v)
                temps.append(v)
                items.append((None, TEXT_BYTES, v))
            else:
                raise Fail("trigscript: unknown text part %r%s" % (k, where(st)))
        pos = fresh(T["scratch"])
        f_bwrite(pos, 0)
        group, room, first = [], 0, [True]

        def flush():
            if not group:
                return
            if first[0]:
                pos << f_dbstr_print(pos, *group)
            else:
                if EUDIf()(pos <= T["scratch"] + TEXT_BYTES):
                    pos << f_dbstr_print(pos, *group)
                EUDEndIf()
            first[0] = False
            del group[:]

        for args, size, value in items:
            if value is not None:
                flush()
                room = 0
                if first[0]:
                    pos << T["append"](pos, value.addr)
                else:
                    if EUDIf()(pos <= T["scratch"] + TEXT_BYTES):
                        pos << T["append"](pos, value.addr)
                    EUDEndIf()
                first[0] = False
                continue
            if room + size > TEXT_BYTES + 1:
                flush()
                room = 0
            group.extend(args)
            room += size
        flush()
        return pos, temps

    def text(self, e):
        """A text: where it is, its block, its length (TextVal)."""
        T = texts()
        k = e["kind"]
        if k == "text":
            return TextVal(fresh(GetMapStringAddr(e["text"]) if e["text"] else T["empty"]), 0, len(e["text"]), True)
        if k == "textVar" and isinstance(self.var(e["id"], e), TextStorage):
            return self.var(e["id"], e).get()
        if k == "textAt":
            # Cells that were never given a text are 0: the empty one, as a variable's are.
            i = fresh(self.num(e["index"]))
            addr = fresh(self.array(e["addr"], e).get(i))
            if EUDIf()(addr == 0):
                addr << T["empty"]
            EUDEndIf()
            return TextVal(addr, fresh(self.array(e["block"], e).get(i)), fresh(self.array(e["chars"], e).get(i)), False)
        if self.has_id(e):
            return TextVal(T["address"](as_var(self.text_id_of(e))), 0, None, True)
        if k == "template":
            pos, temps = self.written(e["parts"], e)
            addr, block, length = T["make"](pos)
            self.used(*temps)
            return TextVal(addr, block, length, True)
        if k == "textTernary":
            addr, block, length = EUDVariable(), EUDVariable(), EUDVariable()
            if EUDIf()(self.cond(e["cond"])):
                v = self.own(self.text(e["whenTrue"]))
                addr << v.addr
                block << v.block
                length << v.length()
            if EUDElse()():
                v = self.own(self.text(e["whenFalse"]))
                addr << v.addr
                block << v.block
                length << v.length()
            EUDEndIf()
            return TextVal(addr, block, length, True)
        if k == "textSlice":
            of = self.text(e["of"])
            start = self.num(e["start"]) if e.get("start") is not None else 0
            end = self.num(e["end"]) if e.get("end") is not None else 0x7FFFFFFF
            addr, block, length = T["slice"](of.addr, start, end)
            self.used(of)
            return TextVal(addr, block, length, True)
        if k == "textPad":
            of, fill = self.texts_of([e["of"], e["with"]])
            width = self.num(e["width"])
            addr, block, length = T["pad"](of.addr, of.length(), width, fill.addr, 1 if e["side"] == "start" else 0)
            self.used(of, fill)
            return TextVal(addr, block, length, True)
        if k == "textRepeat":
            of = self.text(e["of"])
            addr, block, length = T["repeat"](of.addr, self.num(e["count"]))
            self.used(of)
            return TextVal(addr, block, length, True)
        if k == "textCall":
            self.call(e["call"])
            result = e["call"].get("result")
            if result is None:
                return TextVal(fresh(T["empty"]), 0, 0, True)
            return self.var(result["decl"]["id"], e).take_out()
        raise Fail("trigscript: unknown text %r%s" % (k, where(e)))

    def text_number(self, e):
        T = texts()
        k = e["kind"]
        if k == "textIndexOf":
            of, find = self.texts_of([e["of"], e["find"]])
            start = self.num(e["from"]) if e.get("from") is not None else 0
            out = T["find"](of.addr, find.addr, start)
            self.used(of, find)
            return out
        of = self.text(e["of"])
        if k == "textLength":
            n = of.length()
            out = n if isinstance(n, int) else fresh(n)
            self.used(of)
            return out
        out = T["code"](of.addr, self.num(e["index"]))
        self.used(of)
        return out

    def text_truth(self, e):
        """A comparison of two texts, or a test of one, as 0 / 1."""
        T = texts()
        t = fresh(0)
        if e["kind"] == "textTest":
            of, find = self.texts_of([e["of"], e["find"]])
            if e["test"] == "startsWith":
                t << T["starts"](of.addr, find.addr)
            elif e["test"] == "endsWith":
                t << T["ends"](of.addr, find.addr)
            else:
                if EUDIfNot()(T["find"](of.addr, find.addr, 0) == 0xFFFFFFFF):
                    t << 1
                EUDEndIf()
            self.used(of, find)
            return t
        op = e["op"]
        if op in ("==", "!=") and self.has_id(e["left"]) and self.has_id(e["right"]):
            # Two texts of the table: the same text is the same id.
            a, b = self.text_id_of(e["left"]), self.text_id_of(e["right"])
            if isinstance(a, int) and isinstance(b, int):
                return 1 if (a == b) == (op == "==") else 0
            if EUDIf()(as_var(a) == b):
                t << 1
            EUDEndIf()
        else:
            a, b = self.texts_of([e["left"], e["right"]])
            # The difference of the first bytes that differ, as a number of 32 bits: 0, below zero, or above.
            d = f_strcmp(a.addr, b.addr)
            self.used(a, b)
            if op in ("==", "!="):
                if EUDIf()(d == 0):
                    t << 1
                EUDEndIf()
            else:
                below = (lambda: d >= SIGN)
                if op in ("<", ">="):
                    if EUDIf()(below()):
                        t << 1
                    EUDEndIf()
                else:  # "<=" and ">": whether it is not above
                    if EUDIf()(EUDOr(d == 0, below())):
                        t << 1
                    EUDEndIf()
                return flipped(t) if op in (">=", ">") else t
        return flipped(t) if op == "!=" else t

    def text_loop(self, st, ctx):
        """\`for (const ch of s)\`: the text walked once, a character a turn, each a made text of its own."""
        T = texts()
        turn = self.declare(st["decl"])
        over = self.own(self.text(st["of"]))
        held = fresh(over.block)
        at = fresh(over.addr)
        head, done = Forward(), Forward()
        inner = dict(ctx)
        inner["break"], inner["continue"] = done, head
        leave = None
        if ctx.get("fn") is not None:
            # A return inside the loop leaves through here, so that the text the loop holds goes back first.
            leave = Forward()
            inner["fn"] = dict(ctx["fn"], end=leave)
        head << NextTrigger()
        n = T["size"](at)
        EUDJumpIf(n == 0, done)
        f_memcpy(T["scratch"], at, n)
        f_bwrite(T["scratch"] + n, 0)
        addr, block, length = T["make"](T["scratch"] + n)
        T["release"](turn.cell(turn.block))
        turn.write(addr, block, length)
        at += n
        if self.straight(st["body"], inner):
            EUDJump(head)
        done << NextTrigger()
        T["release"](held)
        if leave is not None:
            after = Forward()
            EUDJump(after)
            leave << NextTrigger()
            T["release"](held)
            EUDJump(ctx["fn"]["end"])
            after << NextTrigger()

    def value(self, e, kind):
        """An expression as what a variable of \`kind\` holds."""
        return self.num(e) if kind == "number" else self.unit(e) if kind == "unit" else self.truth(e)

    def function(self, id_, node):
        """A called function: its parameters' cells, its result's, and its one body — an EUDFunc of no
        arguments, since the cells are the program's own (a row a player, as any variable is)."""
        made = self.made.get(id_)
        if made is not None:
            return made
        f = self.functions.get(id_)
        if f is None:
            raise Fail("trigscript: unknown function %r%s" % (id_, where(node)))
        params = [self.declare(d) for d in f["params"]]
        kind = f["result"]["kind"] if f.get("result") else "void"
        result = self.declare(f["result"]["decl"]) if f.get("result") else None
        lowering = self
        if f.get("recursive"):
            return self.recursive_function(id_, f, params, kind, result)

        @EUDFunc
        def body():
            # A text result keeps what it held until \`return\` puts the next one in it, which is when that block goes back.
            if result is not None and kind != "text":
                result.set(NO_UNIT if kind == "unit" else 0)
            end = Forward()
            lowering.in_function += 1
            try:
                lowering.straight(f["body"], {"fn": {"result": result, "kind": kind, "end": end}})
            finally:
                lowering.in_function -= 1
            end << NextTrigger()

        made = self.made[id_] = (body, params, result)
        return made

    def recursive_function(self, id_, f, params, kind, result):
        """A function that calls itself. eudplib's EUDFunc keeps one return address and is not there to be called
        until its body is whole, so this one is triggers of our own: the body in a scope apart, ended by a trigger
        whose next-trigger field is the return address - a cell a call writes, and a frame keeps. It is on record
        before its body is lowered, so a call of it met in that body finds it."""
        start, tail = Forward(), Forward()
        # The return address a second time, in a variable: a frame keeps it from there, since reading a cell of
        # the game's memory back costs some thirty triggers and writing a variable out costs two.
        back = EUDVariable()

        def body():
            after = Forward()
            DoActions([SetNextPtr(tail, after), back.SetNumber(after)])
            EUDJump(start)
            after << NextTrigger()

        made = self.made[id_] = (body, params, result)
        entry = {"f": f, "tail": tail, "back": back}
        PushTriggerScope()
        start << NextTrigger()
        if result is not None and kind != "text":
            result.set(NO_UNIT if kind == "unit" else 0)
        end = Forward()
        self.in_function += 1
        self.within.append(entry)
        try:
            self.straight(f["body"], {"fn": {"result": result, "kind": kind, "end": end}})
        finally:
            self.within.pop()
            self.in_function -= 1
        end << NextTrigger()
        tail << RawTrigger()
        PopTriggerScope()
        return made

    def saved_cells(self, saves, node):
        """What a frame keeps, as (read, write) pairs a cell: the variables, a unit three cells, an array's handle four."""
        pairs = []
        for id_ in saves.get("vars", []):
            s = self.vars.get(id_)
            if s is None:
                # Declared further down the body: it has no cell yet, and the declaration that makes it sets it.
                continue
            if isinstance(s, UnitStorage):
                for cell in (s.ptr, s.epd, s.uid):
                    pairs.append(self.cell_pair(cell, s.rowed))
            elif isinstance(s, TextStorage):
                for cell in (s.addr, s.block, s.len):
                    pairs.append(self.cell_pair(cell, s.rowed))
            elif isinstance(s, Storage):
                pairs.append(self.cell_pair(s.store, s.rowed))
        for id_ in saves.get("arrays", []):
            a = self.array(id_, node)
            if isinstance(a, ListStorage):
                for name in HANDLE:
                    pairs.append(self.cell_pair(a.handle[name], a.rowed))
        return pairs

    def saved_texts(self, saves):
        """The made texts among what a frame keeps: each owns a block, which the frame keeps for it."""
        return [s for s in (self.vars.get(id_) for id_ in saves.get("vars", [])) if isinstance(s, TextStorage)]

    def cell_pair(self, cell, rowed):
        if rowed:
            return (lambda: cell[self.player_of()]), (lambda v: cell.__setitem__(self.player_of(), v))
        return (lambda: cell), (lambda v: cell << v)

    def keep(self, call):
        """Before a call that may come back into the function it is in: that function's cells and its return
        address onto the stack, the handles of its arrays set to "no block". Past the depth the map allows the
        program says so and stops for good."""
        saves = call["saves"]
        st = stack()
        if not self.within:
            raise Fail("trigscript: a call keeps a frame outside a function that calls itself%s" % where(call))
        mine = self.within[-1]
        if EUDIf()(st["depth"] >= STACK_DEPTH):
            GetGlobalStringBuffer().print("\\x06TrigScript: stack overflow in %s, line %s - %d calls deep. The program has stopped." % (saves.get("within", "a function"), (call.get("at") or {}).get("line", "?"), STACK_DEPTH))
            st["depth"] << 0
            st["at"] << st["base"]
            self.set_state(DONE)
            EUDJump(self.frame_end)
        EUDEndIf()
        pairs = self.saved_cells(saves, call)
        at = st["at"]
        f_dwwrite_epd(at, mine["back"])
        at += 1
        for read, _ in pairs:
            f_dwwrite_epd(at, read())
            at += 1
        st["depth"] += 1
        for id_ in saves.get("arrays", []):
            a = self.array(id_, call)
            if isinstance(a, ListStorage):
                for name in HANDLE:
                    a.put(name, 0)
        # A text the function holds keeps its block on the stack; the variable holds none for the length of the call,
        # so that the inner run's first text does not give the outer run's block back.
        held = self.saved_texts(saves)
        for s in held:
            s.write(0, 0, 0)
        return pairs, mine, held

    def bring_back(self, call, kept):
        pairs, mine, held = kept
        st = stack()
        # The block the inner run left in a text goes back to the heap before the text is the outer run's again.
        for s in held:
            texts()["release"](s.cell(s.block))
        # The block the inner run left in a handle goes back to the heap before the handle is the outer run's again.
        for id_ in call["saves"].get("arrays", []):
            a = self.array(id_, call)
            if isinstance(a, ListStorage):
                ptr = fresh(a.field("ptr"))
                if EUDIf()(ptr >= 1):
                    a.heap["give"](ptr, a.field("k"))
                EUDEndIf()
        at = st["at"]
        for _, write in reversed(pairs):
            at -= 1
            write(f_dwread_epd(at))
        at -= 1
        mine["back"] << f_dwread_epd(at)
        f_dwwrite_epd(EPD(mine["tail"]) + 1, mine["back"])
        st["depth"] -= 1

    def call_function(self, call, result):
        body, params, returned = self.function(call["fn"], call)
        if len(params) != len(call["params"]):
            raise Fail("trigscript: %s takes %d values, not %d%s" % (call["fn"], len(params), len(call["params"]), where(call)))
        # Every argument first, then the parameters: an argument may be a call of this same function. A variable's
        # own cell is copied when a later argument holds a call, which may be of a function that writes that variable.
        values = []
        for i, p in enumerate(call["params"]):
            if p["decl"]["kind"] == "text":
                # A text is a copy of its own by the time the parameter takes it: three numbers, read now.
                t = self.own(self.text(p["init"]))
                values.append((fresh(t.addr), fresh(t.block), fresh(t.length())))
                continue
            v = self.value(p["init"], p["decl"]["kind"])
            later = any(has_call(q["init"]) for q in call["params"][i + 1:])
            if later and p["decl"]["kind"] != "unit" and not isinstance(v, int):
                v = fresh(v)
            values.append(v)
        # A call that may come back here keeps this function's frame: after the arguments are worked out (they read
        # it), before the parameters are set (they may be this function's own).
        kept = None
        if call.get("saves"):
            # Copies: an argument may be one of this function's own parameters, which the ones set before it write over.
            values = [v if isinstance(v, (int, tuple)) else UnitRef(v.ptr if isinstance(v.ptr, int) else fresh(v.ptr), v.epd if isinstance(v.epd, int) else fresh(v.epd), v.uid if v.uid is None or isinstance(v.uid, int) else fresh(v.uid)) if isinstance(v, UnitRef) else fresh(v) for v in values]
            kept = self.keep(call)
        for s, v in zip(params, values):
            if isinstance(v, tuple):
                # What the parameter held from the call before goes back; then it holds this call's text.
                texts()["release"](s.cell(s.block))
                s.write(*v)
            else:
                s.set(v)
        body()
        if kept is not None:
            self.bring_back(call, kept)
        if result is None:
            return 0
        if isinstance(result, TextStorage):
            # The function's text moves to the call's own result, from where a textCall takes it.
            v = returned.take_out()
            texts()["release"](result.cell(result.block))
            result.write(v.addr, v.block, v.length())
            return 0
        result.set(returned.get())
        return result.get()

    def call(self, call):
        result = self.declare(call["result"]["decl"]) if call.get("result") else None
        if call.get("fn") is not None:
            return self.call_function(call, result)
        # A text result keeps what it held until \`return\` puts the next one in it, which is when that block goes back.
        if result is not None and call["result"]["kind"] != "text":
            result.set(NO_UNIT if call["result"]["kind"] == "unit" else 0)
        for p in call["params"]:
            s = self.declare(p["decl"])
            self.put(s, p["init"], p["decl"]["kind"])
        end = Forward()
        self.straight(call["body"], {"fn": {"result": result, "kind": call["result"]["kind"] if call.get("result") else "void", "end": end}})
        end << NextTrigger()
        return result.get() if result is not None else 0

    # ── one frame ──
    def frame(self):
        self.frame_end = Forward()
        start = Forward()
        skip = Forward()
        # Still waiting: count down and leave.
        EUDJumpIfNot(as_var(self.get_wait()) >= 1, skip)
        self.set_wait(as_var(self.get_wait()) - 1)
        EUDJump(self.frame_end)
        skip << NextTrigger()
        # The body once, resumes recorded as sleeps are met; the jump table is filled in after.
        table = Forward()
        EUDJump(table)
        start << NextTrigger()
        try:
            self.block(self.p["body"], {})
        except Leave:
            pass
        # The body ended: the program stops for good, as the classic backend's does.
        self.set_state(DONE)
        EUDJump(self.frame_end)
        table << NextTrigger()
        EUDJumpIf(as_var(self.get_state()) == DONE, self.frame_end)
        for index, resume in self.resumes:
            EUDJumpIf(as_var(self.get_state()) == index, resume)
        EUDJump(start)
        self.frame_end << NextTrigger()

    def run(self):
        if self.per_player:
            for p in loop_players(self.slots):
                self.player = p
                f_setcurpl(p)
                self.frame()
            self.player = None
        else:
            # As a trigger owned by that player would: not at all once the player has left.
            if EUDIf()(f_playerexist(self.slots[0])):
                f_setcurpl(self.slots[0])
                self.frame()
            EUDEndIf()


def flipped(t):
    """1 for 0 and 0 for anything else, in a variable of its own."""
    out = fresh(0)
    if EUDIf()(t == 0):
        out << 1
    EUDEndIf()
    return out


def has_call(node):
    """Whether a call is anywhere in a piece of the IR."""
    if isinstance(node, list):
        return any(has_call(x) for x in node)
    if not isinstance(node, dict):
        return False
    if node.get("kind") in ("call", "textCall") and isinstance(node.get("call"), dict):
        return True
    return any(has_call(v) for v in node.values() if isinstance(v, (dict, list)))


def string_of(value):
    """An action's text or sound: the string itself (eudplib adds it to the map), or an index the script named."""
    if isinstance(value, str):
        return EncodeString(value) if value else 0
    return int(value or 0)


def group_slots(group, node):
    """The player slots a player number stands for: a slot is itself, All Players and a force their human and computer players."""
    playing = lambda p: GetPlayerInfo(p).typestr in ("Human", "Computer")
    if 0 <= group < 8:
        return [group]
    if group == 17:
        return [p for p in range(8) if playing(p)]
    if 18 <= group <= 21:
        return [p for p in range(8) if playing(p) and GetPlayerInfo(p).force == group - 18]
    raise Fail("trigscript: expected players 1 to 8, All Players or a force%s" % where(node))


def owner_slots(program):
    """The player slots a program runs for, from its owners and the map's player settings: a slot is
    itself, All Players and a force are their human and computer players — who a trigger runs for."""
    slots = []
    for o in program.get("owners", [program.get("owner", 0)]):
        for p in group_slots(int(o), program):
            if p not in slots:
                slots.append(p)
    if not slots:
        raise Fail("trigscript: no human or computer player of this map is among the program's owners%s" % where(program))
    return slots


def loop_players(slots):
    """Each of \`slots\` who is in the game, as an EUDVariable: EUDLoopPlayer, for a list of our own."""
    start, end = min(slots), max(slots)
    v = EUDVariable()
    v << start
    if EUDWhile()(v <= end):
        for i in range(start, end):
            if i not in slots:
                EUDContinueIf(v == i)
        EUDContinueIfNot(f_playerexist(v))
        yield v
        EUDSetContinuePoint()
        v += 1
    EUDEndWhile()


BITWISE = ("&", "|", "^", "<<", ">>", ">>>")
FLIPPED = {"<": ">", "<=": ">=", ">": "<", ">=": "<=", "==": "==", "!=": "!="}


def points(value, bits):
    """Whole points as the game stores them, 256 to a point; \`bits\` is how many bits of points the cell holds."""
    if isinstance(value, int):
        return min(value, (1 << bits) - 1) * 256
    return f_mul(saturate(value, bits), 256)


def uses_random(node):
    if isinstance(node, dict):
        return node.get("kind") in ("random", "randomInt") or (node.get("kind") == "pick" and node.get("by") == "random") or any(uses_random(v) for v in node.values())
    return isinstance(node, list) and any(uses_random(v) for v in node)


def distance(a, b):
    """|a - b| of two places on the map, both from 0 up."""
    d = fresh(a)
    d -= b
    if EUDIf()(d >= SIGN):
        d << 0 - d
    EUDEndIf()
    return d


def signed(v):
    """The 32 bits as a signed number."""
    v &= U32
    return v - (1 << 32) if v >= SIGN else v


def always(truth):
    """A condition that is known when the map is built."""
    return EUDVariable(1 if truth else 0) >= 1  # initial: a constant, never written


def relation(av, op, b):
    """\`av op b\` between a variable and a variable or an int, both read from 0 up."""
    if op == "==":
        return av == b
    if op == "!=":
        return av != b
    if op == "<":
        return av < b
    if op == "<=":
        return av <= b
    if op == ">":
        return av > b
    return av >= b


def compare(a, op, b):
    return {"==": a == b, "!=": a != b, "<": a < b, "<=": a <= b, ">": a > b, ">=": a >= b}[op]


def condition(r):
    return Condition(r["location"], r["player"], r["amount"], r["unitId"], r["comparison"], r["type"], r["resource"], r["flags"], eudx=r.get("mask", 0) or 0)


class Input:
    """What the players do, as it reaches every computer: the cells chatEvent and MSQC write, by the
    names the editor put in their settings (compiler/input.ts, INPUT_NAMES), and the reads of them."""

    MAX_NUMBER = 0xFFFFF

    def __init__(self, plan):
        self.plan = plan or {}
        self.keys = list(self.plan.get("keys", []))
        self.buttons = list(self.plan.get("buttons", []))
        self.chats = list(self.plan.get("chats", []))
        self.mouse_base = self.plan.get("mouseBase")
        # A person can sit in the map's human slots, which is where MSQC counts the mouse locations from.
        self.humans = [p for p in range(8) if GetPlayerInfo(p).typestr == "Human"]
        if plan and not self.humans:
            raise Fail("trigscript: a program reads keys, clicks, the mouse or chat, and the map has no human player to give any")
        self.key_cells = [self.register("tsin_key%d" % i, EUDArray(12)) for i in range(len(self.keys))]
        self.button_cells = [self.register("tsin_button%d" % i, EUDArray(12)) for i in range(len(self.buttons))]
        self.captures = max([len(c["captures"]) for c in self.chats] or [0])
        if self.chats:
            # Local: what chatEvent found on this computer, and what the patterns made of it.
            self.heard = self.register("tsin_heard", EUDVariable())
            self.pointer = self.register("tsin_pointer", EUDVariable())
            self.length = self.register("tsin_length", EUDVariable())
            self.register("tsin_pattern", EUDVariable())
            self.chat_local = self.register("tsin_chat", EUDVariable())
            self.capture_local = [self.register("tsin_capture%d" % i, EUDVariable()) for i in range(self.captures)]
            # Everyone's: what MSQC delivered this frame, by player; 0xFFFFFFFF on a frame with nothing.
            self.chat_in = self.register("tsin_chat_in", EUDArray(12))
            self.capture_in = [self.register("tsin_capture%d_in" % i, EUDArray(12)) for i in range(self.captures)]
            self.unit_table = None

    @staticmethod
    def register(name, cell):
        EUDRegisterObjectToNamespace(name, cell)
        return cell

    # ── reads ──
    def read(self, i, low, node):
        source = i.get("source")
        p = low.one_player(i["player"], node)
        if source == "key":
            return self.cell(self.key_cells, self.keys, i["key"], node)[p]
        if source == "click":
            return self.cell(self.button_cells, self.buttons, i["button"], node)[p]
        if source == "mouse":
            return self.mouse(p, 0 if i["axis"] == "x" else 1, node)
        if source == "chat":
            number = self.chat_number(i["pattern"], node)
            out = fresh(0)
            if EUDIf()(self.chat_in[p] == number):
                out << (1 if i.get("capture") is None else self.capture_in[int(i["capture"])][p])
            EUDEndIf()
            return out
        raise Fail("trigscript: unknown input %r%s" % (source, where(node)))

    @staticmethod
    def cell(cells, names, name, node):
        if name not in names:
            raise Fail("trigscript: the IR's input plan has no %r%s" % (name, where(node)))
        return cells[names.index(name)]

    def chat_number(self, pattern, node):
        for index, c in enumerate(self.chats):
            if c["pattern"] == pattern:
                return index + 1
        raise Fail("trigscript: the IR's input plan has no pattern %r%s" % (pattern, where(node)))

    def mouse(self, p, axis, node):
        """MSQC keeps the mouse of the map's first human slot in location \`mouseBase\`, the next slot's in the next."""
        if self.mouse_base is None:
            raise Fail("trigscript: the IR's input plan keeps no mouse%s" % where(node))
        first = min(self.humans)
        cell = lambda h: EPD(MRGN + (int(self.mouse_base) - 1 + h - first) * 20) + axis
        if isinstance(p, int):
            return f_dwread_epd(cell(p)) if p in self.humans else 0
        out = fresh(0)
        for h in self.humans:
            if EUDIf()(p == h):
                out << f_dwread_epd(cell(h))
            EUDEndIf()
        return out

    # ── the typed line, on the computer it was typed on ──
    @staticmethod
    def hash_of(data):
        """What \`hashed\` makes of the same bytes: capitals A to Z as small letters, h = h × 31 + byte."""
        h = 0
        for b in data:
            if 65 <= b <= 90:
                b += 32
            h = (h * 31 + b) & U32
        return h

    def hashed(self, pos, stop_at_space):
        """The hash of the line from \`pos\` to its end or, with \`stop_at_space\`, to the next space; \`pos\` moves past it."""
        h = fresh(0)
        if EUDWhile()(pos < self.length):
            ch = fresh(f_bread(self.pointer + pos))
            if stop_at_space:
                EUDBreakIf(ch == 32)
            if EUDIf()([ch >= 65, ch <= 90]):
                ch += 32
            EUDEndIf()
            h << f_mul(h, 31) + ch
            pos += 1
        EUDEndWhile()
        return h

    def units(self):
        """Unit names by hash, in hash order, for a search by halves: two arrays side by side."""
        if self.unit_table is None:
            by_hash = {}
            for name, unit in self.plan.get("unitNames", []):
                by_hash.setdefault(self.hash_of(name.encode("utf-8")), int(unit))
            ordered = sorted(by_hash.items())
            self.unit_table = (EUDArray([h for h, _ in ordered] or [0]), EUDArray([u for _, u in ordered] or [0]), len(ordered))
        return self.unit_table

    def capture(self, c, pos, fail):
        """One value out of the line at \`pos\`, or a jump to \`fail\`."""
        value = fresh(0)
        if c["kind"] == "number":
            digits = fresh(0)
            if EUDWhile()(pos < self.length):
                ch = f_bread(self.pointer + pos)
                EUDBreakIf(ch <= 47)
                EUDBreakIf(ch >= 58)
                value << f_mul(value, 10) + ch - 48
                if EUDIf()(value >= self.MAX_NUMBER + 1):
                    value << self.MAX_NUMBER
                EUDEndIf()
                pos += 1
                digits += 1
            EUDEndWhile()
            EUDJumpIf(digits == 0, fail)
        elif c["kind"] == "word":
            h = self.hashed(pos, True)
            found = fresh(0)
            for index, word in enumerate(c["words"]):
                if EUDIf()(h == self.hash_of(word.encode("utf-8"))):
                    value << index
                    found << 1
                EUDEndIf()
            EUDJumpIf(found == 0, fail)
        elif c["kind"] == "unit":
            h = self.hashed(pos, False)
            hashes, units, count = self.units()
            lo, hi = fresh(0), fresh(count)
            if EUDWhile()(lo < hi):
                mid = f_div(lo + hi, 2)[0]
                if EUDIf()(hashes[mid] < h):
                    lo << mid + 1
                if EUDElse()():
                    hi << mid
                EUDEndIf()
            EUDEndWhile()
            EUDJumpIf(lo >= count, fail)
            EUDJumpIfNot(hashes[lo] == h, fail)
            value << units[lo]
        else:
            raise Fail("trigscript: unknown chat capture %r" % (c["kind"],))
        return value

    def match_line(self):
        """The line the local player typed against every pattern, in order: the first that fits the whole
        line gives its number and values to the cells MSQC sends from. Nothing fits: nothing is sent."""
        DoActions([self.chat_local.SetNumber(0)] + [c.SetNumber(0) for c in self.capture_local])
        if EUDIf()(self.heard >= 1):
            done = Forward()
            for index, chat in enumerate(self.chats):
                fail = Forward()
                pos = fresh(0)
                values = []
                for seg in chat["segments"]:
                    if isinstance(seg, str):
                        data = seg.encode("utf-8")
                        EUDJumpIf(pos + len(data) >= self.length + 1, fail)
                        EUDJumpIfNot(f_memcmp(self.pointer + pos, Db(data + b"\\0"), len(data)) == 0, fail)
                        pos += len(data)
                    else:
                        values.append(self.capture(chat["captures"][int(seg)], pos, fail))
                EUDJumpIfNot(pos == self.length, fail)
                DoActions(self.chat_local.SetNumber(index + 1))
                for cell, value in zip(self.capture_local, values):
                    cell << value
                EUDJump(done)
                fail << NextTrigger()
            done << NextTrigger()
        EUDEndIf()


INPUT = Input(IR.get("input"))
PROGRAMS = [Lowering(p) for p in IR.get("programs", [])]


def onPluginStart():
    # eudplib's generator starts from the same seed in every game; the game's own randomness (a switch randomized) seeds it.
    if uses_random(IR.get("programs", [])):
        f_randomize()


def beforeTriggerExec():
    # After chatEvent has looked for a typed line, before MSQC sends what it was.
    if INPUT.chats:
        INPUT.match_line()


def afterTriggerExec():
    for prog in PROGRAMS:
        prog.run()
`,ra=`eudplib.build`,ia=214,aa=5,oa=6,sa=e=>e.id.replace(/^.*?::/,``);function ca(e){let t=/\bat (?:([^\s:]+\.ts):)?(\d+):(\d+)\b/.exec(e);return t?{file:t[1]??`main.ts`,line:Number(t[2]),column:Number(t[3])}:null}function la(e){let t=e[0];return t?`${t.file}:${t.line} — ${t.message.split(`
`)[0]}${e.length>1?` (and ${e.length-1} more)`:``}`:`The script has errors.`}var ua=`TrigScript`;function Q(e){let t=new Map;for(let n of e.document.extras.list()){if(!ai(n))continue;let r=e.document.extras.get(n);r&&t.set(n,r)}return t}function da(e,t,n){for(let r of t.keys())n.has(r)||e.document.extras.remove(r);for(let[r,i]of n)t.get(r)!==i&&e.document.extras.set(r,i)}var fa=class{api;claim;compiler;lastManifest;lastArtifact=null;constructor(e,t,n=zr){this.api=e,this.compiler=n,this.claim=e.triggers.claim({label:`the TrigScript block`,badge:`script`,locate:t=>{let n=pi(Q(e));return n?bi(t,n):null},describe:(e,t)=>{let n=this.sourceOf(e,t);return`This trigger is generated by the map's TrigScript${n?` (${n.file}, line ${n.line})`:``}. Edit the source instead; applying the script (saving the map does it) replaces the whole block.`},open:(e,n)=>{let r=this.sourceOf(e,n);t(r?.file,r?.line)},openLabel:`Open TrigScript`})}sourceOf(e,t){let n=pi(Q(this.api)),r=n?bi(t,n):null;return r?r.sources[e-r.start]??null:null}dist(){return this.api.storage.get(Hn,Vn)}state(){return this.api.document.isOpen()?Si(this.api.triggers.list(),Q(this.api)):null}library(){return this.api.services.get(ra)}watchLibrary(e){return this.api.services.watch(ra,t=>e(t))}attach(){let e=this.api.document.buildSteps?.before({id:`apply`,label:ua,applies:()=>this.api.document.isOpen()&&Q(this.api).size>0,run:()=>this.bringUpToDate()}),t=null,n=this.watchLibrary(e=>{t?.dispose(),t=e?.contribute?.({id:`trigscript`,label:`TrigScript`,applies:()=>this.hasPrograms(),collect:()=>this.collect()})??null});return{dispose:()=>{e?.dispose(),t?.dispose(),n.dispose()}}}hasPrograms(){return this.api.document.isOpen()?(pi(Q(this.api))?.programs??0)>0:!1}async bringUpToDate(){let e=this.state();if(!e?.files||!e.unbuilt)return;if(e.stale)throw Error(`The script's triggers were edited or removed outside the script, so it was not applied. Open Triggers ▸ TrigScript… and press Apply to choose what becomes of them.`);this.settings().testsGuardBuild&&this.guardTests((await this.prepare(e.files,this.names(),{world:this.world()})).compiled);let t=await this.build(e.files);if(t.refused===`errors`)throw Error(la(t.compiled.diagnostics));if(t.refused)throw Error(`The map changed while the script was compiling; save again.`)}world(){let e=this.api.document.scenario();if(!e)return{};let t={};for(let e of this.api.settings.unitTypes())t[e.id]={hp:e.hitPoints,shields:e.shields};let n=(e,t,n)=>n?Math.max(1,Math.ceil(e*Math.min(100,t)/100)):e,r=e.units.filter(e=>e.unitId!==ia).map(e=>{let r=t[e.unitId]??{},i=r.hp??1,a=r.shields??0;return{type:e.unitId,owner:e.owner,x:e.x,y:e.y,maxHp:i,hp:n(i,e.hitPointsPercent,!!(e.validStates&2)),maxShields:a,shields:a?n(a,e.shieldPercent,!!(e.validStates&4)):0,resources:e.resourceAmount,...e.validStates&64?{cloaked:!!(e.stateFlags&1),burrowed:!!(e.stateFlags&2),hallucinated:!!(e.stateFlags&8),invincible:!!(e.stateFlags&16)}:{}}}),i={};e.locations.forEach((e,t)=>{(e.right>e.left||e.bottom>e.top)&&(i[t+1]={left:e.left,top:e.top,right:e.right,bottom:e.bottom})});let a=e.playerTypes.slice(0,8).flatMap((e,t)=>e===oa||e===aa?[t]:[]),o=Object.fromEntries(e.forces.playerForce.slice(0,8).map((e,t)=>[t,e])),s=(e.cuwp??[]).map(e=>{let t=t=>(e.validProperties&t)===0?void 0:(e.stateFlags&t)!==0;return{hpPercent:e.validFields&2?e.hitPointsPercent:void 0,shieldPercent:e.validFields&4?e.shieldsPercent:void 0,energyPercent:e.validFields&8?e.energyPercent:void 0,resources:e.validFields&16?e.resources:void 0,cloaked:t(1),burrowed:t(2),hallucinated:t(8),invincible:t(16)}}),c=this.settings();return{units:r,locations:i,...a.length?{players:a,forces:o}:{},unitStats:t,properties:s,heapCells:c.heapCells,stackDepth:c.stackDepth}}guardTests(e){let t=(e.tests?.results??[]).filter(e=>e.status===`failed`);if(t.length===0)return;let n=t[0];throw Error(`Not built: ${t.length===1?`a test fails`:`${t.length} tests fail`} — ${sa(n)}: ${n.message??`failed`}. (The script's settings make a failing test refuse the build.)`)}async collect(){let e=this.state();if(!e?.files)throw Error(`The map has no script.`);let t=this.names(),n=this.lastArtifact,r=this.settings().testsGuardBuild,i=n&&t&&n.context===t.context&&n.document===this.documentId()&&yi(n.files)===yi(e.files)&&(!r||!n.compiled.tests||n.compiled.tests.results.length>0)?n:await this.prepare(e.files,t,r?{world:this.world()}:void 0);if(!i.compiled.ok)throw Error(la(i.compiled.diagnostics));return r&&this.guardTests(i.compiled),{plugins:Et(i.compiled.input,`/work/files/trigscript.json`),sources:{trigscript:na},files:{"trigscript.json":Dn(i.compiled.ir,i.compiled.strings,i.compiled.input,this.settings())}}}onBuild(e){let t=null,n=this.watchLibrary(n=>{t?.dispose(),t=n?.onBuild?.(e)??null});return{dispose:()=>{t?.dispose(),n.dispose()}}}names(){let e=this.api,t=e.document.info();if(!t)return null;let n=new Map(e.settings.unitTypes().map(e=>[e.id,e.customName])),r=[...new Set(e.query.locationsIn({x0:0,y0:0,x1:t.width,y1:t.height}))].sort((e,t)=>e-t),i=e.triggers.switchNames(),a=$t({forceNames:e.settings.forces().map(e=>e.name||null),locations:r.map(t=>({index:t,name:e.names.location(t)})),switchNames:i,unitCustomName:e=>n.get(e)||null}),o=wn(a);return{names:a,decls:o,context:vi(o)}}documentId(){let e=this.api.document;return typeof e.id==`function`?e.id():null}declarations(e={}){let t=this.names();return t?e.compact?wn(t.names,{compact:!0}):t.decls:``}filesOf(e){return typeof e==`string`?{...this.state()?.files??{},[Nn]:e}:{...e}}async compile(e){return(await this.prepare(e)).compiled}async prepare(e,t=this.names(),n){if(!t)throw Error(`No map is open.`);let r=this.filesOf(e),i=this.documentId(),a=yi(this.state()?.files??{}),o={files:r,compiled:await this.compiler({files:r,names:t.names,...n?{tests:n}:{}},this.dist()),document:i,context:t.context,archived:a};return this.lastArtifact=o,o}install(e,t={}){let{compiled:n,files:r}=e,i=e=>({compiled:n,block:null,refused:e});if(!this.api.document.isOpen())return i(`closed`);if(this.documentId()!==e.document)return i(`switched`);let a=this.names();if(!a||a.context!==e.context)return i(`changed`);if(!n.ok)return i(`errors`);let o=yi(this.state()?.files??{})!==e.archived,s=null,c;if(this.api.document.update(`Apply TrigScript`,e=>{let i=Q(this.api),a=Ei(e.triggers.list(),i,r,n,t=>e.strings.intern(t),{...t,keepFiles:o});e.triggers.set(a.list),da(this.api,i,a.extras),s=a.block,c=a.replaced}),this.claim.refresh(),s){let e=s,t=n.ir.length,r=t?` ${t} program${t===1?``:`s`} will be built into the saved map (StarCraft: Remastered).`:``;this.api.ui.status((e.count===0?`Applied: the script defines no triggers.`:`Applied ${e.count} trigger${e.count===1?``:`s`} → #${e.start+1}–#${e.start+e.count}.`)+r)}return{compiled:n,block:s,...c?{replaced:c}:{}}}async build(e,t={}){for(let n=0;;n++){let r=this.install(await this.prepare(e),t);if(r.refused!==`changed`||n>=2)return r}}print(e,t){return Yr(e,{names:this.names()?.names??$t(),string:e=>this.api.names.string(e)},t)}simulate(e,t,n={}){let r=Be(e,t,{player:n.player,strings:e=>this.api.names.string(e)}),i=[];return r.switches.forEach((e,t)=>{e&&i.push(t)}),{cycles:r.cycle,events:r.events,switches:i}}triggerAt(e,t){let n=this.state();return n?.block&&!n.stale?Di(n.block,e,t):null}settings(){return this.api.document.isOpen()?ei(Q(this.api)):{...$r}}writeSettings(e){if(!this.api.document.isOpen())return;let t=Q(this.api);da(this.api,t,ti(t,e))}writeFiles(e){if(!this.api.document.isOpen())return;let t=Q(this.api);da(this.api,t,fi(t,e))}handTriggers(){let e=this.api.triggers.list(),t=this.state()?.block??null;return t?{before:e.slice(0,t.start),after:e.slice(t.start+t.count)}:{before:e,after:[]}}relocate(){if(!this.api.document.isOpen())return;let e=Q(this.api),t=Ci(this.api.triggers.list(),e);t&&da(this.api,e,t)}manifestChanged(){let e=pa(this.api),t=e!==this.lastManifest;return this.lastManifest=e,t}};function pa(e){for(let[t,n]of Q(e))if(t.toLowerCase().endsWith(`build.json`))return n;return null}var ma={play:`eb2c`,check:`eab2`,beaker:`ea79`,target:`ebf8`,ellipsis:`ea7c`,"new-file":`ea7f`,"new-folder":`ea80`,folder:`ea83`,"folder-opened":`eaf7`,edit:`ea73`,trash:`ea81`,close:`ea76`,error:`ea87`,warning:`ea6c`,info:`ea74`,"chevron-down":`eab4`,"chevron-right":`eab6`,"screen-full":`eb4c`,"multiple-windows":`eb23`,sync:`ea77`,loading:`eb19`,pass:`eba4`,"symbol-variable":`ea88`,"symbol-method":`ea8c`,"clear-all":`eabf`,"circle-filled":`ea71`,package:`eb29`,files:`eaf0`,filter:`eaf1`,"run-all":`eb9e`,"run-errors":`ebde`,"circle-outline":`eabc`,"circle-slash":`eabd`,"pass-filled":`ebb3`},ha={sidebar:!0,sidebarWidth:180,panel:!1,panelHeight:180,panelView:`problems`},ga={sidebar:!0,sidebarWidth:136,panel:!1,panelHeight:130,panelView:`problems`},_a=100,va=420,ya=64,ba=`
.tsd { position: relative; display: flex; flex-direction: column; flex: 1; min-height: 0; min-width: 0; background: var(--bg-0); color: var(--text); font-family: var(--font-ui); font-size: var(--fs-md); user-select: none; }
.tsd button { font: inherit; color: inherit; }
.tsd-i { display: inline-block; flex: none; font: normal normal normal 16px/1 codicon; text-align: center; -webkit-font-smoothing: antialiased; }
.tsd:not(.tsd-ready) .tsd-i { visibility: hidden; }
${Object.entries(ma).map(([e,t])=>`.tsd-i-${e}::before { content: "\\${t}"; }`).join(`
`)}
.tsd-spin { animation: tsd-spin 1.2s steps(30) infinite; }
@keyframes tsd-spin { to { transform: rotate(360deg); } }

.tsd-body { flex: 1; min-height: 0; display: flex; }
.tsd-activity { flex: none; width: 40px; display: flex; flex-direction: column; align-items: stretch; background: var(--bg-2); border-right: 1px solid var(--border); }
.tsd-activity[hidden] { display: none; }
.tsd-compact .tsd-activity { width: 32px; }
.tsd-activity button { position: relative; height: 40px; border: none; border-left: 2px solid transparent; background: none; color: var(--text-faint); cursor: pointer; }
.tsd-compact .tsd-activity button { height: 34px; }
.tsd-activity button:hover { color: var(--text); }
.tsd-activity button.tsd-active { color: var(--text); border-left-color: var(--gold); }
.tsd-activity button .tsd-i { font-size: 22px; }
.tsd-compact .tsd-activity button .tsd-i { font-size: 18px; }
.tsd-activity .tsd-badge { position: absolute; right: 4px; bottom: 5px; min-width: 14px; height: 14px; padding: 0 3px; box-sizing: border-box; border-radius: 7px; background: var(--sel-hi); color: var(--bg-0); font-size: 9px; font-weight: 700; line-height: 14px; text-align: center; }
.tsd-activity .tsd-badge.tsd-error { background: var(--danger); color: #fff; }
.tsd-sidebar-title .tsd-grow { flex: 1; }
.tsd-sidebar-title .tsd-icon-button { margin-left: 2px; }
.tsd-sidebar-body { flex: 1; min-height: 0; overflow: auto; }
.tsd-sidebar { flex: none; display: flex; flex-direction: column; min-height: 0; background: var(--bg-1); overflow: hidden; }
.tsd-sidebar-title { flex: none; height: 32px; display: flex; align-items: center; padding: 0 12px 0 16px; font-size: 11px; letter-spacing: 0.04em; text-transform: uppercase; color: var(--text-dim); }
.tsd-sections { flex: 1; min-height: 0; overflow: auto; }
.tsd-section-head { display: flex; align-items: center; gap: 2px; height: 22px; padding: 0 6px 0 2px; border-top: 1px solid var(--border); font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--text); cursor: pointer; }
.tsd-section-head .tsd-grow { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.tsd-section-head .tsd-icon-button { visibility: hidden; }
.tsd-section:hover .tsd-icon-button, .tsd-section:focus-within .tsd-icon-button { visibility: visible; }
.tsd-section.tsd-collapsed .tsd-section-body { display: none; }
.tsd-section-body { padding-bottom: 6px; }
.tsd-rows { margin: 0; padding: 0; list-style: none; }
.tsd-row { display: flex; align-items: center; gap: 6px; height: 22px; padding: 0 6px 0 20px; color: var(--text-dim); white-space: nowrap; cursor: pointer; }
.tsd-row.tsd-child { padding-left: 34px; }
.tsd-row:hover { background: var(--bg-3); color: var(--text); }
.tsd-row.tsd-active { background: var(--bg-4); color: var(--text); }
.tsd-row .tsd-name { flex: 0 1 auto; overflow: hidden; text-overflow: ellipsis; }
.tsd-row .tsd-about { flex: 1 1 0; min-width: 0; overflow: hidden; text-overflow: ellipsis; color: var(--text-faint); font-size: var(--fs-sm); }
.tsd-row .tsd-problem, .tsd-tab .tsd-problem { color: var(--danger); }
.tsd-row .tsd-count { flex: none; margin-left: auto; color: var(--danger); font-size: var(--fs-sm); }
.tsd-row .tsd-icon-button { display: none; margin-left: 0; }
.tsd-row .tsd-row-actions { display: flex; margin-left: auto; }
.tsd-row:hover .tsd-icon-button, .tsd-row.tsd-active .tsd-icon-button { display: inline-flex; }
.tsd-row .tsd-i { font-size: 14px; }
.tsd-row.tsd-folder { gap: 4px; }
.tsd-row.tsd-drop, .tsd-rows.tsd-drop { background: var(--sel); color: var(--text); }
.tsd-row.tsd-dragged { opacity: 0.5; }
.tsd-ts { flex: none; font-size: 9px; font-weight: 700; letter-spacing: -0.02em; color: var(--sel-hi); }

.tsd-icon-button { flex: none; display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; padding: 0; border: none; border-radius: var(--radius-lg); background: none; color: var(--text-dim); cursor: pointer; }
.tsd-icon-button:hover:not(:disabled) { background: var(--bg-4); color: var(--text); }
.tsd-icon-button:disabled { opacity: 0.4; cursor: default; }
.tsd-icon-button:focus-visible { outline: none; box-shadow: var(--focus); }

.tsd-sash { flex: none; position: relative; z-index: 3; background: var(--border); }
.tsd-sash::after { content: ""; position: absolute; transition: background 0.1s 0.2s; }
.tsd-sash:hover::after, .tsd-sash.tsd-dragging::after { background: var(--sel-hi); }
.tsd-sash-v { width: 1px; cursor: ew-resize; }
.tsd-sash-v::after { top: 0; bottom: 0; left: -2px; width: 5px; }
.tsd-sash-h { height: 1px; cursor: ns-resize; }
.tsd-sash-h::after { left: 0; right: 0; top: -2px; height: 5px; }

.tsd-main { flex: 1; min-width: 0; min-height: 0; display: flex; flex-direction: column; }
.tsd-titlebar { flex: none; display: flex; align-items: stretch; height: 33px; background: var(--bg-2); border-bottom: 1px solid var(--border); }
.tsd-tabs { flex: 1; min-width: 0; display: flex; overflow-x: auto; scrollbar-width: none; }
.tsd-tabs::-webkit-scrollbar { display: none; }
.tsd-tab { flex: none; display: flex; align-items: center; gap: 6px; padding: 0 6px 0 12px; border-right: 1px solid var(--border); border-top: 1px solid transparent; color: var(--text-dim); cursor: pointer; white-space: nowrap; }
.tsd-tab:hover { color: var(--text); }
.tsd-tab.tsd-active { background: var(--bg-0); color: var(--text); border-top-color: var(--gold); margin-bottom: -1px; padding-bottom: 1px; }
.tsd-tab .tsd-icon-button { width: 20px; height: 20px; visibility: hidden; }
.tsd-tab .tsd-icon-button .tsd-i { font-size: 14px; }
.tsd-tab:hover .tsd-icon-button, .tsd-tab.tsd-active .tsd-icon-button { visibility: visible; }
.tsd-tab .tsd-pad { width: 6px; }
.tsd-tab .tsd-about { color: var(--text-faint); font-size: var(--fs-sm); }
.tsd-actions { flex: none; display: flex; align-items: center; gap: 2px; padding: 0 8px; }
.tsd-editor { flex: 1; min-height: 0; position: relative; }

.tsd-panel-area { flex: none; display: flex; flex-direction: column; min-height: 0; background: var(--bg-1); }
.tsd-panel-head { flex: none; display: flex; align-items: center; height: 30px; padding: 0 8px 0 4px; }
.tsd-panel-tabs { flex: 1; min-width: 0; display: flex; gap: 2px; overflow: hidden; }
.tsd-panel-tab { display: flex; align-items: center; gap: 6px; height: 30px; padding: 0 10px; border: none; background: none; font-size: 11px; text-transform: uppercase; letter-spacing: 0.02em; color: var(--text-dim); cursor: pointer; border-bottom: 1px solid transparent; }
.tsd-panel-tab:hover { color: var(--text); }
.tsd-panel-tab.tsd-active { color: var(--text); border-bottom-color: var(--gold); }
.tsd-badge { min-width: 16px; padding: 1px 5px; border-radius: 9px; background: var(--bg-5); color: var(--text); font-size: 10px; line-height: 14px; text-align: center; }
.tsd-panel-actions { flex: none; display: flex; gap: 2px; }
.tsd-view { flex: 1; min-height: 0; overflow: auto; user-select: text; }
.tsd-empty { padding: 6px 20px; color: var(--text-dim); }

.tsd-statusbar { flex: none; display: flex; align-items: stretch; height: 22px; background: var(--bg-2); border-top: 1px solid var(--border); font-size: var(--fs-sm); color: var(--text-dim); overflow: hidden; }
.tsd-compact .tsd-statusbar { padding-right: 16px; }
/* The left side says what state the script is in and keeps its words; the right side gives way first, its long items by an ellipsis. */
.tsd-status-left { flex: 0 0 auto; max-width: 72%; display: flex; overflow: hidden; }
.tsd-status-right { flex: 1 1 0; min-width: 0; display: flex; justify-content: flex-end; overflow: hidden; }
.tsd-status-item { flex: none; display: flex; align-items: center; gap: 4px; padding: 0 7px; border: none; background: none; white-space: nowrap; cursor: default; }
.tsd-status-item.tsd-shrink { flex: 0 1 auto; min-width: 0; }
.tsd-status-item.tsd-shrink span:last-child { overflow: hidden; text-overflow: ellipsis; }
.tsd-status-item .tsd-i { font-size: 13px; }
button.tsd-status-item { cursor: pointer; }
button.tsd-status-item:hover { background: var(--bg-4); color: var(--text); }
.tsd-status-item.tsd-warn { background: color-mix(in srgb, var(--warn) 22%, var(--bg-2)); color: var(--warn); }
.tsd-status-item.tsd-error { color: var(--danger); }

.tsd-notifications { position: absolute; right: 10px; bottom: 30px; z-index: 20; display: flex; flex-direction: column; gap: 6px; width: min(440px, calc(100% - 20px)); pointer-events: none; }
.tsd-notification { pointer-events: auto; display: flex; flex-direction: column; gap: 8px; padding: 10px 8px 10px 10px; background: var(--bg-2); border: 1px solid var(--border-strong); border-radius: var(--radius-lg); box-shadow: var(--shadow-pop); user-select: text; }
.tsd-notification-row { display: flex; align-items: flex-start; gap: 8px; }
.tsd-notification-row .tsd-text { flex: 1; min-width: 0; line-height: 1.45; white-space: pre-wrap; overflow-wrap: anywhere; }
.tsd-notification .tsd-i-info { color: var(--sel-hi); }
.tsd-notification .tsd-i-warning { color: var(--warn); }
.tsd-notification .tsd-i-error { color: var(--danger); }
.tsd-notification-actions { display: flex; justify-content: flex-end; gap: 6px; padding-right: 2px; }
.tsd-button { height: 24px; padding: 0 10px; border: none; border-radius: var(--radius); background: var(--bg-5); color: var(--text); cursor: pointer; }
.tsd-button:hover { background: var(--border-strong); }
.tsd-button.tsd-primary { background: var(--sel); }
.tsd-button.tsd-primary:hover { background: var(--sel-hi); }

.tsd-menu { position: absolute; z-index: 30; min-width: 220px; padding: 4px; background: var(--bg-2); border: 1px solid var(--border-strong); border-radius: var(--radius-lg); box-shadow: var(--shadow-pop); }
.tsd-menu button { display: flex; align-items: center; gap: 24px; width: 100%; height: 24px; padding: 0 10px 0 22px; border: none; border-radius: var(--radius); background: none; text-align: left; white-space: nowrap; cursor: pointer; }
.tsd-menu button:hover:not(:disabled), .tsd-menu button:focus-visible { background: var(--sel); outline: none; }
.tsd-menu button:disabled { color: var(--text-faint); cursor: default; }
.tsd-menu .tsd-grow { flex: 1; }
.tsd-menu .tsd-keys { color: var(--text-dim); font-size: var(--fs-sm); }
.tsd-menu hr { margin: 4px 0; border: none; border-top: 1px solid var(--border); }
`;function xa(e){let{el:t}=e,n={...e.layout},r=(e,n=!1)=>t(`span`,{className:`tsd-i tsd-i-${e}${n?` tsd-spin`:``}`,ariaHidden:`true`}),i=e=>{let n=e.icon,i=!1,a=r(n),o=t(`button`,{type:`button`,className:`tsd-icon-button`,title:e.title,ariaLabel:e.title,onClick:t=>{t.stopPropagation(),e.run()}},a);return{element:o,set(e){e.icon&&(n=e.icon),e.busy!==void 0&&(i=e.busy),e.disabled!==void 0&&(o.disabled=e.disabled),e.title!==void 0&&(o.title=e.title,o.ariaLabel=e.title),a.className=i?`tsd-i tsd-i-loading tsd-spin`:`tsd-i tsd-i-${n}`}}},a=t(`div`,{className:`tsd-tabs`,role:`tablist`}),o=t(`div`,{className:`tsd-actions`}),s=t(`div`,{className:`tsd-editor`}),c=t(`div`,{className:`tsd-sections`}),l=t(`div`,{className:`tsd-sidebar-title`},`Explorer`),u=t(`div`,{className:`tsd-sidebar-body`},c),d=t(`div`,{className:`tsd-sidebar`},l,u),f=t(`div`,{className:`tsd-activity`,role:`tablist`,ariaLabel:`Views`,hidden:!0}),p=t(`div`,{className:`tsd-sash tsd-sash-v`}),m=t(`div`,{className:`tsd-panel-tabs`,role:`tablist`}),h=t(`div`,{className:`tsd-panel-actions`}),g=t(`div`,{className:`tsd-view`}),_=t(`div`,{className:`tsd-sash tsd-sash-h`}),v=t(`div`,{className:`tsd-panel-area`},t(`div`,{className:`tsd-panel-head`},m,h),g),ee=t(`div`,{className:`tsd-status-left`}),te=t(`div`,{className:`tsd-status-right`}),y=t(`div`,{className:`tsd-notifications`}),ne=t(`div`,{className:`tsd-main`},t(`div`,{className:`tsd-titlebar`},a,o),s,_,v),b=t(`div`,{className:e.compact?`tsd tsd-compact`:`tsd`},t(`div`,{className:`tsd-body`},f,d,p,ne),t(`div`,{className:`tsd-statusbar`,role:`status`},ee,te),y),x=()=>{d.hidden=p.hidden=!n.sidebar,d.style.width=`${n.sidebarWidth}px`,v.hidden=_.hidden=!n.panel,v.style.height=`${n.panelHeight}px`},S=()=>e.onLayout({...n}),C=(e,t,n)=>{e.addEventListener(`pointerdown`,r=>{if(r.button!==0)return;r.preventDefault();let i=t(),a=r.clientX,o=r.clientY;e.setPointerCapture(r.pointerId),e.classList.add(`tsd-dragging`);let s=e=>{n(i,e.clientX-a,e.clientY-o),x()},c=()=>{e.classList.remove(`tsd-dragging`),e.removeEventListener(`pointermove`,s),e.removeEventListener(`pointerup`,c),e.removeEventListener(`pointercancel`,c),S()};e.addEventListener(`pointermove`,s),e.addEventListener(`pointerup`,c),e.addEventListener(`pointercancel`,c)})};C(p,()=>n.sidebarWidth,(e,t)=>{n.sidebarWidth=Math.max(_a,Math.min(va,Math.min(b.clientWidth-200,e+t)))}),C(_,()=>n.panelHeight,(e,t,r)=>{n.panelHeight=Math.max(ya,Math.min(ne.clientHeight-120,e-r))});let w=new Map,T=e=>{let r=w.get(e)??w.get(`explorer`);if(r){n.sidebarView=r.id;for(let[e,t]of w)t.button.classList.toggle(`tsd-active`,e===r.id&&n.sidebar),t.button.ariaSelected=String(e===r.id&&n.sidebar);l.replaceChildren(t(`span`,{className:`tsd-grow`},r.title),...r.actions),u.replaceChildren(r.body)}},E=(e,a)=>{let o=t(`span`,{className:`tsd-badge`,hidden:!0}),s=t(`button`,{type:`button`,role:`tab`,title:e.title,ariaLabel:e.title,onClick:()=>{n.sidebar&&n.sidebarView===e.id?n.sidebar=!1:(n.sidebar=!0,n.sidebarView=e.id),x(),T(n.sidebarView??`explorer`),S()}},r(e.icon),o),c={id:e.id,title:e.title,body:a,actions:(e.actions??[]).map(e=>i(e).element),button:s,badge:o};return w.set(e.id,c),f.append(s),f.hidden=w.size<2,c};E({id:`explorer`,title:`Explorer`,icon:`files`},c);let D=new Map,O=i({icon:`close`,title:`Hide the panel (Ctrl+J)`,run:()=>re()}),k=(e,t=!0)=>{let r=D.has(e)?e:[...D.keys()][0];if(!r)return;n.panelView=r;for(let[e,t]of D)t.tab.classList.toggle(`tsd-active`,e===r),t.tab.ariaSelected=String(e===r);let i=D.get(r);g.replaceChildren(i.body),h.replaceChildren(...i.actions,O.element),n.panel&&t&&i.onShow?.()},A=e=>{n.panel=!0,x(),k(e??n.panelView),S()},re=e=>{if(n.panel&&(e===void 0||e===n.panelView)){n.panel=!1,x(),S();return}A(e)},j=null,ie=(e,n,r)=>{j?.();let i=document.activeElement instanceof HTMLElement?document.activeElement:null,a=t(`div`,{className:`tsd-menu`,role:`menu`}),o=()=>{j===o&&(j=null,a.remove(),document.removeEventListener(`pointerdown`,s,!0))},s=e=>{e.target instanceof Node&&a.contains(e.target)||o()};for(let e of n){if(!e){a.append(t(`hr`));continue}a.append(t(`button`,{type:`button`,role:`menuitem`,disabled:!!e.disabled,onClick:()=>{o(),e.run()}},t(`span`,{className:`tsd-grow`},e.label),e.keys?t(`span`,{className:`tsd-keys`},e.keys):void 0))}a.addEventListener(`keydown`,e=>{let t=[...a.querySelectorAll(`button:not(:disabled)`)],n=t.indexOf(document.activeElement);e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o(),i?.focus()):e.key===`ArrowDown`?(e.preventDefault(),t[(n+1)%t.length]?.focus()):e.key===`ArrowUp`&&(e.preventDefault(),t[(n-1+t.length)%t.length]?.focus())}),b.append(a);let c=e.getBoundingClientRect(),l=b.getBoundingClientRect();a.style.top=`${Math.max(4,Math.min((r?r.y:c.bottom+2)-l.top,l.height-a.offsetHeight-4))}px`,a.style.left=`${Math.max(4,Math.min(r?r.x-l.left:c.right-l.left-a.offsetWidth,l.width-a.offsetWidth-4))}px`,j=o,document.addEventListener(`pointerdown`,s,!0),a.querySelector(`button:not(:disabled)`)?.focus()},M=new Map,N=e=>{let t=M.get(e);t&&(t.timer!==null&&clearTimeout(t.timer),t.element.remove(),M.delete(e))};return x(),T(`explorer`),{root:b,editorHost:s,ready:()=>b.classList.add(`tsd-ready`),icon:e=>r(e),iconButton:i,setTabs(n,r){a.replaceChildren(...n.map(n=>{let a=n.id===r,o=t(`div`,{className:a?`tsd-tab tsd-active`:`tsd-tab`,role:`tab`,ariaSelected:String(a),title:n.title??n.label,onClick:()=>e.onTabSelect(n.id),onAuxClick:t=>{t.button===1&&n.closable&&(t.preventDefault(),e.onTabClose(n.id))}},t(`span`,{className:`tsd-ts`},`TS`),t(`span`,{className:n.problems?`tsd-problem`:void 0},n.problems?`${n.label} ${n.problems}`:n.label),n.about?t(`span`,{className:`tsd-about`},n.about):void 0,n.closable?i({icon:`close`,title:`Close`,run:()=>e.onTabClose(n.id)}).element:t(`span`,{className:`tsd-pad`}));return a&&queueMicrotask(()=>o.scrollIntoView({block:`nearest`,inline:`nearest`})),o}))},action(e){let t=i(e);return o.append(t.element),t},section(e){let n=t(`div`,{className:`tsd-section-body`}),a=r(`chevron-down`),o=t(`div`,{className:`tsd-section`}),s=t(`div`,{className:`tsd-section-head`,role:`button`,tabIndex:0,ariaExpanded:`true`},a,t(`span`,{className:`tsd-grow`},e.title),...(e.actions??[]).map(e=>i(e).element)),l=e=>{o.classList.toggle(`tsd-collapsed`,e),a.className=`tsd-i tsd-i-${e?`chevron-right`:`chevron-down`}`,s.ariaExpanded=String(!e)};return s.addEventListener(`click`,()=>l(!o.classList.contains(`tsd-collapsed`))),s.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),s.click())}),o.append(s,n),c.append(o),{body:n,setHidden:e=>{o.hidden=e},expand:()=>l(!1)}},sidebarView(e){let r=t(`div`,{className:`tsd-sections`}),i=E(e,r);return n.sidebarView===e.id&&T(e.id),{body:r,badge(e,t){i.badge.hidden=!e,i.badge.textContent=e?String(e):``,i.badge.classList.toggle(`tsd-error`,t===`error`)},show(){n.sidebar=!0,x(),T(e.id),S()}}},toggleSidebar(e){n.sidebar=e??!n.sidebar,x(),T(n.sidebarView??`explorer`),S()},view(e){let r=t(`span`,{className:`tsd-badge`,hidden:!0}),a=t(`button`,{type:`button`,className:`tsd-panel-tab`,role:`tab`,onClick:()=>A(e.id)},e.title,r),o=t(`div`);return D.set(e.id,{tab:a,badge:r,body:o,actions:(e.actions??[]).map(e=>i(e).element),onShow:e.onShow}),m.append(a),(D.size===1||e.id===n.panelView)&&k(e.id,!1),{body:o,badge:e=>{r.hidden=!e,r.textContent=e?String(e):``}}},showPanel:A,togglePanel:re,statusItem(e){let n=t(`span`,{hidden:!0,style:`display: contents`});return(e===`left`?ee:te).append(n),{set(e){if(n.hidden=!e,!e){n.replaceChildren();return}let i=e.kind?` tsd-${e.kind}`:``,a=[e.busy?r(`loading`,!0):e.icon?r(e.icon):void 0,e.text?t(`span`,void 0,e.text):void 0];n.replaceChildren(e.onClick?t(`button`,{type:`button`,className:`tsd-status-item${i}`,title:e.title??``,onClick:e.onClick},...a):t(`span`,{className:`tsd-status-item tsd-shrink${i}`,title:e.title??e.text},...a))}}},notify:e=>{N(e.key);let n=t(`div`,{className:`tsd-notification`,role:e.kind===`error`?`alert`:`status`},t(`div`,{className:`tsd-notification-row`},r(e.kind===`warn`?`warning`:e.kind),t(`span`,{className:`tsd-text`},e.text),i({icon:`close`,title:`Dismiss`,run:()=>N(e.key)}).element),e.actions?.length?t(`div`,{className:`tsd-notification-actions`},...e.actions.map(n=>t(`button`,{type:`button`,className:n.primary?`tsd-button tsd-primary`:`tsd-button`,onClick:()=>{n.keep||N(e.key),n.run()}},n.label))):void 0);y.append(n),M.set(e.key,{element:n,timer:e.timeout?setTimeout(()=>N(e.key),e.timeout):null})},dismiss:N,menu:ie,dispose(){j?.();for(let e of[...M.keys()])N(e)}}}var Sa=`// TrigScript: ordinary TypeScript that runs when you build. Every trigger() call becomes
// one trigger of the map, in order; code inside program(() => { … }) runs in the game.
// Names come from the map: units.*, locations.*, switches.*, players.*, P1 … P12.
import { trigger, program, bring, displayText, preserve, units, locations, P1, AllPlayers, CurrentPlayer } from "trigscript";

trigger(AllPlayers, [
  bring(CurrentPlayer, units.AnyUnit, locations.Anywhere, ">=", 1),
], [
  displayText("Hello from TrigScript."),
  preserve(),
]);

// A program is code that runs in the game: variables, if, while, for, functions.
// It runs every frame from where it left off, until it sleeps. The underlined parts
// are computed when the script is applied, everything else runs in the game.
//
// A map with a program is built by the eudplib plugin when you save it, and needs
// StarCraft: Remastered to play. trigger() alone plays on every version.
//
// program(() => {
//   let elapsed = 0;
//   while (true) {
//     elapsed++;
//     if (elapsed == 10) displayText("Ten seconds have passed.");
//     sleep(seconds(1));
//   }
// }, { owner: P1 });
`,Ca=`import { trigger, units, locations, P1 } from "trigscript";

// Helpers this file exports are imported by main.ts: import { … } from "./name";
`,wa=`import { test, expect, units, locations, P1 } from "trigscript";

// A test runs here, in the simulator, after every change that compiles: never in the game, and it costs the map nothing.
// sim is a world of its own for each test: the map's placed units and locations, and the script's programs at frame 0.
test("the script runs for a second", (sim) => {
  sim.seconds(1);
  expect(sim.frame).toBe(24);
});
`,Ta=214,Ea=5,Da=6,Oa=200,ka=20,Aa=350,ja=2e3,Ma=1e4,Na=8e3,Pa=2e3,Fa=typeof navigator<`u`&&/Mac|iPhone|iPad/.test(navigator.platform)?`Cmd`:`Ctrl`,Ia=`${ba}
.tsd .tsd-settings { box-sizing: border-box; height: 100%; overflow: auto; padding: 8px 20px 12px; font-size: var(--fs-md); }
.tsd .tsd-settings > * { max-width: 680px; }
.tsd .tsd-settings h4 { margin: 0 0 4px; font-size: var(--fs-md); font-weight: 600; }
.tsd .tsd-settings p { margin: 0 0 8px; color: var(--text-dim); line-height: 1.45; }
.tsd .tsd-settings .row { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
.tsd .tsd-settings input { width: 110px; padding: 2px 6px; font: inherit; font-family: var(--font-mono); color: var(--text); background: var(--bg-1); border: 1px solid var(--border); border-radius: 2px; }
.tsd .tsd-settings input:focus { outline: 1px solid var(--accent); outline-offset: -1px; }
.tsd .tsd-settings button { padding: 2px 8px; font: inherit; color: var(--text); background: var(--bg-3); border: 1px solid var(--border); border-radius: 2px; cursor: pointer; }
.tsd .tsd-settings button:disabled { opacity: 0.5; cursor: default; }
.tsd .tsd-settings .now { color: var(--text-faint); }
.tsd .tsd-list { margin: 0; padding: 2px 0; list-style: none; font-size: var(--fs-md); }
.tsd .tsd-list li { display: flex; align-items: baseline; gap: 8px; padding: 2px 12px 2px 20px; line-height: 18px; cursor: pointer; }
.tsd .tsd-list li:hover { background: var(--bg-3); }
.tsd .tsd-list li.tsd-plain { cursor: default; }
.tsd .tsd-list .tsd-i { align-self: center; font-size: 14px; color: var(--danger); }
.tsd .tsd-list .msg { flex: 0 1 auto; min-width: 0; white-space: pre-wrap; }
.tsd .tsd-list .src, .tsd .tsd-list .where { flex: none; color: var(--text-faint); font-size: var(--fs-sm); }
.tsd .tsd-list .frame { flex: none; min-width: 72px; color: var(--text-faint); font-family: var(--font-mono); font-size: var(--fs-sm); }
.tsd .tsd-list .note { color: var(--text-dim); }
.tsd .tsd-output { margin: 0; padding: 4px 20px; font-family: var(--font-mono); font-size: var(--fs-sm); line-height: 17px; white-space: pre-wrap; overflow-wrap: anywhere; color: var(--text-dim); }
.tsd .tsd-list li.tsd-warning .tsd-i { color: var(--warn); }
.tsd .tsd-rows .tsd-empty { padding: 6px 12px 6px 20px; color: var(--text-faint); white-space: normal; line-height: 1.45; cursor: default; }
.tsd .tsd-test-passed { color: var(--ok); }
.tsd .tsd-test-failed { color: var(--danger); }
.tsd .tsd-test-none, .tsd .tsd-test-skipped { color: var(--text-faint); }
.${J} { cursor: pointer; font: normal normal normal 14px/18px codicon; text-align: center; color: var(--text-faint); }
.${J}::before { content: "\\eabc"; }
.${J}-passed { color: var(--ok); }
.${J}-passed::before { content: "\\eba4"; }
.${J}-failed { color: var(--danger); }
.${J}-failed::before { content: "\\ea87"; }
.${J}-skipped::before { content: "\\eabd"; }
.${J}-note { color: var(--danger); font-style: italic; opacity: 0.9; }
.${$n} { text-decoration: underline dotted rgba(153, 162, 179, 0.55); text-underline-offset: 3px; }
`;function La(e){return e.owners.map(e=>e===a.AllPlayers?`all players`:e>=a.Force1&&e<=a.Force4?`Force ${e-a.Force1+1}`:`P${e+1}`).join(`, `)}function Ra(e){let t=de(e.action.type)?.name??`Action ${e.action.type}`;return e.text===void 0?t:`${t} — ${e.text}`}var $=null;function za(e,t={}){let n=e.api;if($?.isOpen()){let e=t.dock===void 0?null:t.dock?`panel`:`dialog`;if((!e||e===$.mode)&&!t.pick){$.reveal(t.file,t.line);return}let n=$.cursor(),r=$.mode;$.close(),$=null,t.file===void 0&&n&&(t={...t,file:n.file,line:n.line}),t.dock===void 0&&(t={...t,dock:r===`panel`})}if(!n.document.isOpen()){n.ui.toast({kind:`info`,title:`Open or create a map first.`});return}let r=t.dock?`panel`:`dialog`,i=Ba(e,t,r);if(r===`dialog`){let e=n.ui.dialog({title:`TrigScript`,size:`full`,tall:!0,flush:!0,buttons:[],keepOpenOnEscape:e=>e instanceof Node&&i.root.contains(e),mount(e,t){return e.append(i.root),i.attach(()=>t.close())}});$={mode:r,isOpen:()=>e.isOpen(),close:()=>e.close(),reveal:i.reveal,cursor:i.cursor}}else{let e=n.ui.panel({title:`TrigScript`,width:760,height:540,resizable:!0,flush:!0,mount(e,t){return e.append(i.root),i.attach(()=>t.close())}});$={mode:r,isOpen:()=>e.isOpen(),close:()=>e.close(),reveal:i.reveal,cursor:i.cursor}}}function Ba(e,t,n){let r=e.api,i=r.ui.el,a=r.ui.widgets,o=e.state(),s=o?.files??{"main.ts":Sa},c=!o?.files,l=e.names(),u=null,d=null,f=null,p=!1,m=!1,h=!1,g=!1,_=[],v=null,ee=null,te=null,y=e.library(),ne=!1,b=!1,x=[],S=!1,C=n===`panel`?`layout.panel`:`layout.dialog`,w=xa({el:i,compact:n===`panel`,layout:{...n===`panel`?ga:ha,...r.storage.get(C,{})},onLayout:e=>{r.storage.set(C,e)},onTabSelect:e=>Ne(e),onTabClose:e=>Pe(e)}),T=w.root;T.prepend(i(`style`,void 0,Ia));let E=w.editorHost,D=w.action({icon:`play`,title:`Play (F5): apply the script, build the map as Save would and start it in the game through Test Map`,run:()=>{yt()}}),O=w.action({icon:`beaker`,title:`Simulate (${Fa}+F5): run the script's triggers and programs for 480 frames (20 seconds of the game) in a built-in interpreter and list what happened`,run:()=>{Ct()}}),k=w.action({icon:`check`,title:`Apply (${Fa}+Shift+B): run the script and write its triggers into the map now. Saving and testing the map do this by themselves; programs are built into the saved file, not into the trigger list`,run:()=>{vt()}}),A=w.action({icon:`target`,title:`Pick from map: click a location or a unit on the map to put its name at the cursor`,run:()=>{U()}});w.action(n===`dialog`?{icon:`multiple-windows`,title:`Beside the map: open the script as a panel, so the map stays in reach`,run:()=>wt()}:{icon:`screen-full`,title:`In a window: open the script full-screen`,run:()=>wt()});let re=w.action({icon:`ellipsis`,title:`More actions…`,run:()=>w.menu(re.element,[Bt(`save`),null,...[`import`,`newFile`,`newFolder`].map(Bt),null,...[`runTests`,`runFailedTests`].map(Bt),null,...[`problems`,`output`,`panel`,`explorer`,`testing`].map(Bt),null,Bt(`settings`),null,{label:`Command Palette…`,keys:`F1`,disabled:!p,run:()=>Vt()}])}),j=i(`ul`,{className:`tsd-rows`});w.section({title:`Script`,actions:[{icon:`new-file`,title:`New file…: main.ts imports it with import { … } from "./name"`,run:()=>{W()}},{icon:`new-folder`,title:`New folder…: a folder is there while a file is in it, so its first file is asked for next`,run:()=>{Dt()}}]}).body.append(j);let ie=i(`ul`,{className:`tsd-rows`}),M=w.section({title:`Programs`});M.body.append(ie),M.setHidden(!0);let N=w.view({id:`problems`,title:`Problems`}),ae=i(`pre`,{className:`tsd-output`}),oe=w.view({id:`output`,title:`Output`,onShow:()=>ke(!0),actions:[{icon:`clear-all`,title:`Clear the output`,run:()=>{De=[],ke()}}]}),se=w.view({id:`simulate`,title:`Simulate`}),ce=w.view({id:`tests`,title:`Test Results`}),le=w.view({id:`settings`,title:`Settings`,onShow:()=>fe()}),ue=i(`ul`,{className:`tsd-rows`}),de=w.sidebarView({id:`testing`,title:`Testing`,icon:`beaker`,actions:[{icon:`run-all`,title:`Run all tests`,run:()=>{rt()}},{icon:`run-errors`,title:`Run the tests that failed`,run:()=>{it()}},{icon:`filter`,title:`Show only the tests that fail`,run:()=>{we=!we,tt()}}]});de.body.append(ue);function fe(){let t=r.document.isOpen(),n=e.settings(),a=e=>e.toLocaleString(`en-US`),o=e=>e*4>=1<<20?`${(e*4/(1<<20)).toFixed(e*4%(1<<20)?1:0)} MB`:`${Math.round(e*4/1024)} KB`,s=r=>{let o=n[r.key],s=i(`input`,{type:`number`,min:String(r.min),max:String(r.max),step:String(r.step),value:String(o),disabled:!t}),c=i(`button`,{type:`button`,disabled:!t||o===r.normal},`Default (${a(r.normal)})`),l=t=>{let n=r.fit(typeof t==`number`&&Number.isFinite(t)?t:r.normal);n!==e.settings()[r.key]&&(e.writeSettings({...e.settings(),[r.key]:n}),ee=null,ot()),fe()};return s.addEventListener(`change`,()=>l(s.value===``?r.normal:Number(s.value))),s.addEventListener(`keydown`,e=>{e.stopPropagation(),e.key===`Enter`&&s.blur()}),c.addEventListener(`click`,()=>l(r.normal)),i(`div`,{className:`row`},s,i(`span`,{className:`now`},r.said(o)),c)},c=()=>{let r=i(`input`,{type:`checkbox`,checked:n.testsGuardBuild,disabled:!t});return r.style.width=`auto`,r.addEventListener(`change`,()=>{e.writeSettings({...e.settings(),testsGuardBuild:r.checked}),fe()}),i(`label`,{className:`row`},r,i(`span`,{},`A failing test refuses the build`))},l=v?.ok?Mn(v.ir):0;le.body.replaceChildren(i(`div`,{className:`tsd-settings`},i(`h4`,{},`Memory for arrays that grow`),i(`p`,{},`Arrays a program pushes to share one pool of cells; this is its size. A single array can reach between a quarter and a half of it. When the pool runs out, nothing more is pushed and the game says so once.`),s({key:`heapCells`,min:He,max:Ue,step:1024,normal:Ve,fit:We,said:e=>`cells — ${o(e)} of the built map`}),i(`p`,{},`${a(He)} to ${a(Ue)} cells, four bytes each. A larger pool does not slow the game and hardly grows the saved file; it takes more memory while the map is played. Kept in the map, so it builds the same on any computer.`),i(`h4`,{},`Recursion depth`),i(`p`,{},`How many calls deep a function that calls itself may go. Around each such call the function's variables are kept on a stack, which is only in the built map when some function calls itself. A call past the limit stops the program, and the game says where; Simulate stops at the same call.`),s({key:`stackDepth`,min:16,max:Ke,step:256,normal:Ge,fit:Je,said:e=>{if(!l)return`calls deep — no function of this script calls itself`;let t=l*e;return`calls deep — ${l} cells a call here, ${o(t)} while the map is played${t>1048576?`: more than the ${o(qe)} a map may use, and it will not build`:``}`}}),i(`p`,{},`${a(16)} to ${a(Ke)} calls. The limit costs nothing until it is reached, but each call deep keeps and brings back every variable of its function, so thousands of calls within one frame make the game stutter. Kept in the map, like the pool above.`),i(`h4`,{},`Tests`),i(`p`,{},`The script's test() blocks run in the simulator after every compile that goes through. A failing test is a warning. With this on it also refuses the build: Save, Test Map and an export then say which test fails and write the map without the script applied again.`),c()))}let pe=w.statusItem(`left`),me=w.statusItem(`left`),he=w.statusItem(`left`),ge=w.statusItem(`left`),_e=w.statusItem(`left`),ve=w.statusItem(`left`),ye=w.statusItem(`right`),be=w.statusItem(`right`),xe=w.statusItem(`right`),Se=w.statusItem(`right`),P=Vi,Ce=null,we=!1,Te=!1,Ee=!1,F=[q(t.file??`main.ts`)],De=[],I=null,Oe=0,ke=(e=!1)=>{if(De.length===0){oe.body.replaceChildren(i(`div`,{className:`tsd-empty`},`What Apply, Play and the builds of the programs report is kept here.`));return}let t=oe.body.parentElement,n=e||!t||t.scrollHeight-t.scrollTop-t.clientHeight<24;ae.textContent=De.join(`
`),ae.parentElement!==oe.body&&oe.body.replaceChildren(ae),t&&n&&(t.scrollTop=t.scrollHeight)},L=(e,t=!0)=>{De.push(t?`[${new Date().toLocaleTimeString()}] ${e}`:e),De.length>ja&&(De=De.slice(-2e3)),ke()},Ae=null,je=null,R=(e,t,n)=>{b||(je!==null&&(clearTimeout(je),je=null),e===`busy`||e===`ok`?(Ae={kind:e,text:t},w.dismiss(`status`),e===`ok`&&(je=setTimeout(()=>{je=null,Ae=null,H()},Ma))):(Ae=null,w.notify({key:`status`,kind:e===`error`?`error`:`info`,text:t,timeout:n??(e===`info`?Na:void 0)})),e!==`busy`&&L(t),H())},z=(e,t,n=1)=>{u&&(Ne(e),u.editor.revealLineInCenter(t),u.editor.setPosition({lineNumber:t,column:n}),u.editor.focus())},Me=e=>e?Object.keys(s).length>1?`${e.file}:${e.line}`:`Ln ${e.line}`:`?`,Ne=e=>{if(!u)return;let t=q(e);s[t]!==void 0&&(F.includes(t)||F.push(t),u.show(t),Xe(),u.editor.focus())},Pe=e=>{if(!u||F.length<2)return;let t=F.indexOf(e);t<0||(F.splice(t,1),u.active()===e&&u.show(F[Math.min(t,F.length-1)]),Xe(),u.editor.focus())},Fe=`explorer.collapsed`,Ie=new Set(r.storage.get(Fe,[])),Le=e=>{Ie=e,r.storage.set(Fe,[...e])},ze=null,Be=(e,t)=>{let n=()=>ze!==null&&ki(ze)!==t&&ze!==t&&!`${t}/`.startsWith(`${ze}/`);e.addEventListener(`dragover`,t=>{n()&&(t.preventDefault(),t.stopPropagation(),e.classList.add(`tsd-drop`))}),e.addEventListener(`dragleave`,()=>e.classList.remove(`tsd-drop`)),e.addEventListener(`drop`,r=>{if(e.classList.remove(`tsd-drop`),!n()||ze===null)return;r.preventDefault(),r.stopPropagation();let i=ze.split(`/`).pop();kt(ze,t?`${t}/${i}`:i)})},Ye=(e,t)=>{e.draggable=!0,e.addEventListener(`dragstart`,n=>{ze=t,n.dataTransfer?.setData(`text/plain`,t),n.dataTransfer&&(n.dataTransfer.effectAllowed=`move`),e.classList.add(`tsd-dragged`)}),e.addEventListener(`dragend`,()=>{ze=null,e.classList.remove(`tsd-dragged`)})};Be(j,``);let Xe=()=>{let e=u?.active()??F[0]??`main.ts`,t=Object.keys(s),n=new Map;for(let e of _){let t=q(e.file);n.set(t,(n.get(t)??0)+1)}F=F.filter(e=>s[e]!==void 0),F.includes(e)||F.push(e);let r=Ni(F);w.setTabs(F.map(e=>({id:e,label:r.get(e)?.label??e,about:r.get(e)?.folder,title:e,problems:n.get(e),closable:F.length>1})),e);let a=new Set(t.flatMap(e=>{let t=e.split(`/`).slice(0,-1);return t.map((e,n)=>t.slice(0,n+1).join(`/`))}));[...Ie].some(e=>!a.has(e))&&Le(new Set([...Ie].filter(e=>a.has(e))));let o=[],c=e=>`${20+e*12}px`,l=(r,a)=>{for(let s of r){if(s.kind===`folder`){let e=!Ie.has(s.path),r=Ai(t,s.path).reduce((e,t)=>e+(n.get(t)??0),0),c=()=>{let t=new Set(Ie);e?t.add(s.path):t.delete(s.path),Le(t),Xe()},u=()=>[{label:`New File…`,run:()=>{W(s.path)}},{label:`New Folder…`,run:()=>{Dt(s.path)}},null,{label:`Rename…`,run:()=>{G(s.path)}},{label:`Remove…`,run:()=>{Nt(s.path)}}],d=i(`li`,{className:`tsd-row tsd-folder`,title:s.path,role:`button`,ariaExpanded:String(e),onClick:c},w.icon(e?`chevron-down`:`chevron-right`),i(`span`,{className:r?`tsd-name tsd-problem`:`tsd-name`},s.name),i(`span`,{className:`tsd-row-actions`},w.iconButton({icon:`new-file`,title:`New file in ${s.path}…`,run:()=>{W(s.path)}}).element,w.iconButton({icon:`edit`,title:`Rename or move…`,run:()=>{G(s.path)}}).element,w.iconButton({icon:`trash`,title:`Remove…`,run:()=>{Nt(s.path)}}).element,r?i(`span`,{className:`tsd-count`},String(r)):void 0));d.style.paddingLeft=`${6+a*12}px`,d.addEventListener(`contextmenu`,e=>{e.preventDefault(),w.menu(d,u(),{x:e.clientX,y:e.clientY})}),Ye(d,s.path),Be(d,s.path),o.push(d),e&&l(s.children,a+1);continue}let r=s.path,u=r===Nn,d=i(`li`,{className:r===e?`tsd-row tsd-active`:`tsd-row`,title:r,onClick:()=>Ne(r)},i(`span`,{className:`tsd-ts`},`TS`),i(`span`,{className:n.has(r)?`tsd-name tsd-problem`:`tsd-name`},s.name),i(`span`,{className:`tsd-row-actions`},u?void 0:w.iconButton({icon:`edit`,title:`Rename or move…`,run:()=>{At(r)}}).element,u?void 0:w.iconButton({icon:`trash`,title:`Remove…`,run:()=>{Mt(r)}}).element,n.has(r)?i(`span`,{className:`tsd-count`},String(n.get(r))):void 0));d.style.paddingLeft=c(a),u||(d.addEventListener(`contextmenu`,e=>{e.preventDefault(),w.menu(d,[{label:`Rename…`,run:()=>{At(r)}},{label:`Remove…`,run:()=>{Mt(r)}}],{x:e.clientX,y:e.clientY})}),Ye(d,r)),Be(d,ki(r)),o.push(d)}};l(Oi(t),0),j.replaceChildren(...o)},Ze=e=>e.kind===`number`?e.bits?`u${e.bits}`:e.unsigned?`u32`:`number`:e.kind===`unit`?`Unit`:e.kind===`text`?`string`:`boolean`,Qe=()=>{let e=te?.programs??[];M.setHidden(e.length===0),ie.replaceChildren(...e.flatMap((e,t)=>[i(`li`,{className:`tsd-row`,title:`${e.name??`Program ${t+1}`}, run as ${La(e)}`,onClick:()=>z(e.source.file,e.source.line)},w.icon(`symbol-method`),i(`span`,{className:`tsd-name`},e.name??`program ${t+1}`),i(`span`,{className:`tsd-about`},`${La(e)}${e.perPlayer?` · per player`:``}`)),...(te?.variables??[]).filter(e=>e.program===t).map(t=>i(`li`,{className:`tsd-row tsd-child`,title:`${t.name}: ${Ze(t)}${t.shared?`, one value shared by every player`:e.perPlayer?`, one per player`:``}`,onClick:()=>z(t.at.file,t.at.line,t.at.column)},w.icon(`symbol-variable`),i(`span`,{className:`tsd-name`},t.name),i(`span`,{className:`tsd-about`},`${Ze(t)}${t.shared?` · shared`:``}`)))]))},B=()=>{let e=Xi(P);if(N.badge(_.length+e.length),_.length+e.length===0){N.body.replaceChildren(i(`div`,{className:`tsd-empty`},p?v?`No problems have been detected in the script.`:`Checking…`:``));return}N.body.replaceChildren(i(`ul`,{className:`tsd-list`},..._.map(e=>i(`li`,{title:e.message,onClick:()=>z(e.file,e.line,e.column)},w.icon(`error`),i(`span`,{className:`msg`},e.message.split(`
`)[0]),i(`span`,{className:`src`},e.source===`typescript`?`types`:e.source===`script`?`script`:`compiler`),i(`span`,{className:`where`},`${e.file} [Ln ${e.line}, Col ${e.column}]`))),...e.map(e=>i(`li`,{className:`tsd-warning`,title:e.message,onClick:()=>z(e.file,e.line)},w.icon(`warning`),i(`span`,{className:`msg`},e.message),i(`span`,{className:`src`},`tests`),i(`span`,{className:`where`},`${e.file} [Ln ${e.line}]`)))))},$e={none:`circle-outline`,passed:`pass`,failed:`error`,skipped:`circle-slash`,running:`loading`},et=e=>{let t=w.icon($e[e]);return t.classList.add(`tsd-test-${e}`),e===`running`&&t.classList.add(`tsd-spin`),t},tt=()=>{let e=Ui(P);de.badge(e.failed||null,`error`);let t=ta(e);if(me.set(p&&t?{icon:Ee?`loading`:t.failed?`error`:`beaker`,busy:Ee,text:t.text,kind:t.failed?`error`:void 0,title:`${e.total} test${e.total===1?``:`s`}${Te?`; running them all takes a while, so only the open file's run after a change`:``}. Click for the Testing view`,onClick:()=>de.show()}:null),P.list.length===0){ue.replaceChildren(i(`li`,{className:`tsd-empty`},`The script has no tests yet. A test is a test(name, (sim) => { … }) imported from "trigscript", in any file or in one named *.test.ts: it runs here, in the simulator, after every change that compiles.`));return}let n=[],r=e=>e.kind===`test`?Ki(P,e.info)===`failed`:e.children.some(r),a=(e,t)=>{for(let o of e){if(we&&!r(o))continue;let e=Qi(o),s=Ee?`running`:o.kind===`test`||o.kind===`suite`?Ki(P,o.info):Wi(Ui(P,t=>e.some(e=>t.id===e||t.id.startsWith(`${e} > `)))),c=o.kind===`folder`||o.kind===`file`?o.name:o.info.name,l=o.kind===`test`?P.results.get(o.info.id):void 0,u=i(`li`,{className:o.kind===`test`&&o.info.id===Ce?`tsd-row tsd-active`:`tsd-row`,title:l?.message??c,onClick:()=>{if(o.kind!==`folder`){if(o.kind===`file`){Ne(o.path);return}o.kind===`test`&&(Ce=o.info.id,w.showPanel(`tests`),nt(),tt()),z(o.info.file,o.info.line)}}},et(s),i(`span`,{className:s===`failed`?`tsd-name tsd-problem`:`tsd-name`},c),l&&l.status!==`skipped`?i(`span`,{className:`tsd-about`},`${l.ms} ms`):void 0,i(`span`,{className:`tsd-row-actions`},w.iconButton({icon:`play`,title:o.kind===`test`?`Run this test`:`Run these tests`,run:()=>{rt(o.kind===`file`?{files:[o.path]}:{ids:e})}}).element));u.style.paddingLeft=`${10+t*12}px`,n.push(u),a(o.children,t+1)}};a(Zi(P.list),0),n.length===0&&n.push(i(`li`,{className:`tsd-empty`},`No test fails.`)),ue.replaceChildren(...n)},nt=()=>{let e=P.list.filter(e=>e.kind===`test`&&P.results.get(e.id)?.status===`failed`);ce.badge(e.length);let t=P.list.find(e=>e.id===Ce)??e[0]??P.list.find(e=>e.kind===`test`&&P.results.has(e.id)),n=t?P.results.get(t.id):void 0;if(!t||!n){ce.body.replaceChildren(i(`div`,{className:`tsd-empty`},P.list.length?`No test has run yet: they run after a change that compiles, or from the Testing view.`:`The script has no tests.`));return}let r=i(`ul`,{className:`tsd-list`}),a=n.at??{file:t.file,line:t.line};r.append(i(`li`,{title:`Go to the test`,onClick:()=>z(t.file,t.line)},et(n.status===`failed`?`failed`:n.status===`passed`?`passed`:`skipped`),i(`span`,{className:`msg`},sa(t)),i(`span`,{className:`src`},n.status===`skipped`?`skipped`:`${n.frames} frame${n.frames===1?``:`s`} · ${n.ms} ms`),i(`span`,{className:`where`},Me({file:t.file,line:t.line})))),n.status===`failed`&&(r.append(i(`li`,{className:`tsd-fault`,title:`Go to where it failed`,onClick:()=>z(a.file,a.line,a.column??1)},i(`span`,{className:`frame`},`failed`),i(`span`,{className:`msg`},n.message??`failed`),i(`span`,{className:`where`},Me({file:a.file,line:a.line})))),n.expected!==void 0&&r.append(i(`li`,{className:`tsd-plain`},i(`span`,{className:`frame`},`expected`),i(`span`,{className:`msg`},n.expected))),n.actual!==void 0&&r.append(i(`li`,{className:`tsd-plain`},i(`span`,{className:`frame`},`got`),i(`span`,{className:`msg`},n.actual))));let o=[];for(let e of n.printed){let t=o[o.length-1];t?.line===e?t.times++:o.push({line:e,times:1})}for(let{line:e,times:t}of o)r.append(i(`li`,{className:`tsd-plain`},i(`span`,{className:`frame`},`printed`),i(`span`,{className:`msg`},e),t>1?i(`span`,{className:`src`},`×${t}`):void 0));let s=new Set(n.events.map(e=>e.player)).size>1,c=ea(n.events);for(let e of c.slice(0,Oa))r.append(i(`li`,{onClick:()=>{e.file&&e.line&&z(e.file,e.line)}},i(`span`,{className:`frame`},`frame ${e.frame+1}`),i(`span`,{className:`msg note`},`${s?`${$i(e.players)} · `:``}${e.text}`),i(`span`,{className:`where`},e.file&&e.line?Me({file:e.file,line:e.line}):``)));c.length>Oa&&r.append(i(`li`,{className:`tsd-plain`},i(`span`,{className:`frame`},`…`),i(`span`,{className:`msg`},`and ${c.length-Oa} more`))),ce.body.replaceChildren(r)},rt=async(t={})=>{if(!(!u||Ee)){Ee=!0,tt();try{let n=await gt({world:e.world(),...t});if(!n||b)return;if(!n.compiled.ok){R(`error`,`Tests not run: ${n.compiled.diagnostics.length} problem${n.compiled.diagnostics.length===1?``:`s`} in the script.`,Na),w.showPanel(`problems`);return}let r=n.compiled.tests?.results.filter(e=>e.status!==`skipped`)??[],i=r.filter(e=>e.status===`failed`);if(r.length===0){R(`info`,P.list.length?`No test ran.`:`The script has no tests.`);return}i.length&&(Ce=i[0].id,w.showPanel(`tests`)),R(i.length?`error`:`ok`,i.length?`${i.length} of ${r.length} test${r.length===1?``:`s`} failed: ${sa(i[0])} — ${i[0].message??`failed`}`:`${r.length} test${r.length===1?``:`s`} passed.`,Na)}finally{Ee=!1,H()}}},it=()=>{let e=P.list.filter(e=>e.kind===`test`&&P.results.get(e.id)?.status===`failed`).map(e=>e.id);return e.length===0?(R(`info`,`No test has failed.`),Promise.resolve()):rt({ids:e})},at=()=>{let e=u?.cursor(),t=e?P.list.filter(t=>t.file===q(e.file)&&t.line<=e.line).sort((e,t)=>t.line-e.line)[0]:void 0;return t?rt({ids:[t.id]}):(R(`info`,`There is no test at the cursor.`),Promise.resolve())},ot=()=>{if(!ee){se.body.replaceChildren(i(`div`,{className:`tsd-empty`},`Simulate (${Fa}+F5) runs the script's first 20 seconds in a built-in interpreter and lists what happened. A change to the script clears the list.`));return}let{sim:e,programs:t,result:n}=ee,r=i(`ul`,{className:`tsd-list`});r.append(i(`li`,{className:`tsd-plain`},i(`span`,{className:`msg note`},`480 frames (20 s) for ${e.game.players.slots.map(e=>`P${e+1}`).join(`, `)}, from the map's placed units. Units are made, given, moved, killed and counted, but nothing walks or fights; scores and the countdown read 0; wait takes no time.`)));let a=new Map;for(let e of t?.faults??[]){let t=`${e.at.file}:${e.at.line}:${e.at.column}:${e.message.replace(/\d+/g,`#`)}`,n=a.get(t);n?n.times++:a.set(t,{first:e,times:1})}for(let{first:e,times:t}of[...a.values()].slice(0,ka))r.append(i(`li`,{className:`tsd-fault`,title:e.message,onClick:()=>z(e.at.file,e.at.line,e.at.column)},i(`span`,{className:`frame`},`frame ${e.cycle+1}`),w.icon(`error`),i(`span`,{className:`msg`},t>1?`${e.message} (and ${t-1} more time${t===2?``:`s`} at this line)`:e.message),i(`span`,{className:`where`},Me({file:e.at.file,line:e.at.line}))));a.size>ka&&r.append(i(`li`,{className:`tsd-plain`},i(`span`,{className:`frame`},`…`),i(`span`,{className:`msg`},`and ${a.size-ka} more lines with a fault`)));let o=e.game.players.slots.length>1,s=ea([...e.events.map((e,t)=>{let r=n.sources[e.trigger];return{frame:e.cycle,order:t,player:e.player,text:Ra(e),file:r?.file,line:r?.line,column:1,title:`Trigger #${e.trigger+1}`}}),...(t?.events??[]).map((t,n)=>({frame:t.cycle,order:e.events.length+n,player:t.player,text:Ra(t),file:t.at.file,line:t.at.line,column:t.at.column,title:`Program ${t.program+1}`}))].sort((e,t)=>e.frame-t.frame||e.order-t.order)).map(e=>({line:()=>i(`li`,{title:e.title,onClick:()=>{e.file&&e.line&&z(e.file,e.line,e.column)}},i(`span`,{className:`frame`},`frame ${e.frame+1}`),i(`span`,{className:`msg`},`${o?`${$i(e.players)} · `:``}${e.text}`),i(`span`,{className:`where`},e.file&&e.line?Me({file:e.file,line:e.line}):`?`))}));s.length===0&&r.append(i(`li`,{className:`tsd-plain`},i(`span`,{className:`frame`},`—`),i(`span`,{className:`msg`},`No actions ran in 480 frames.`)));for(let e of s.slice(0,Oa))r.append(e.line());s.length>Oa&&r.append(i(`li`,{className:`tsd-plain`},i(`span`,{className:`frame`},`…`),i(`span`,{className:`msg`},`and ${s.length-Oa} more actions`)));let c=new Set;for(let e of n.variables){if(c.has(e.name))continue;c.add(e.name);let n=e=>e===void 0?`?`:typeof e==`boolean`?e?`true`:`false`:String(e),a=t?.runs.filter(t=>t.index===e.program)??[],o=a.length>1&&!e.shared?a.map(t=>`P${t.player+1} ${n(t.value(e.name))}`).join(` · `):n(t?.value(e.name,e.program));r.append(i(`li`,{title:`The variable's value when the run ended`,onClick:()=>z(e.at.file,e.at.line,e.at.column)},i(`span`,{className:`frame`},`after`),i(`span`,{className:`msg`},`${e.name} = ${o}`),i(`span`,{className:`where`},Ze(e))))}se.body.replaceChildren(r)},st=``,V=(t=!1)=>{let n=e.state();if(!n?.stale){st=``,w.dismiss(`stale`);return}let r=n.edited??null,i=JSON.stringify([r,S]);if(!t&&i===st)return;if(st=i,!r){w.notify({key:`stale`,kind:`warn`,text:`The script's triggers were edited or removed outside the script. They stay as hand-made triggers; the next Apply appends a fresh block. Saving the map does not apply the script until this is settled.`});return}let a=(e,t)=>`${e} ${t}${e===1?``:`s`}`,o=`The script's triggers were edited outside the script: ${a(r.unchanged,`trigger`)} ${r.unchanged===1?`is`:`are`} still the script's, ${a(r.changed,`trigger`)} ${r.changed===1?`was`:`were`} changed.`,s=S?`The next Apply leaves them all as hand-made triggers and appends a fresh block.`:`The next Apply replaces the ${r.unchanged} and keeps the ${a(r.changed,`edited one`)} as hand-made triggers right after the new block.`;w.notify({key:`stale`,kind:`warn`,text:`${o} ${s}`,actions:[{label:S?`Replace instead`:`Append instead`,keep:!0,run:()=>{S=!S,H()}},{label:`Apply`,primary:!0,run:()=>{vt()}}]})},ct=()=>x.flatMap(e=>e.list.map(t=>`${e.object}.${t.from} → ${e.object}.${t.to}`)),lt=``,ut=(e=!1)=>{let t=ct();if(t.length===0){lt=``,w.dismiss(`renames`);return}let n=t.join(`
`);!e&&n===lt||(lt=n,w.notify({key:`renames`,kind:`info`,text:`The map renamed ${t.length===1?`something the script names`:`${t.length} things the script names`}: ${t.join(`, `)}.`,actions:[{label:`Leave`,run:()=>{x=[],H()}},{label:`Update references`,primary:!0,run:()=>{Tt()}}]}))},dt=()=>{let e=u?.editor.getPosition();Se.set(e?{text:`Ln ${e.lineNumber}, Col ${e.column}`,title:`Go to line…`,onClick:()=>{u?.editor.focus(),u?.editor.trigger(`trigscript`,`editor.action.gotoLine`,null)}}:null)},H=()=>{let t=_.length;D.set({disabled:!p||h||ne,busy:ne}),O.set({disabled:!p||h||t>0}),k.set({disabled:!p||h,busy:h&&!ne}),A.set({disabled:!p||g,busy:g});let n=e.state(),r=n?.block??null,i=n?.stale??!1,a=te?te.programs.length:n?.programs??0;pe.set(p?{icon:t?`error`:`pass`,text:String(t),kind:t?`error`:void 0,title:t?`${t} problem${t===1?``:`s`}`:v?`No problems`:`Checking…`,onClick:()=>w.togglePanel(`problems`)}:null),he.set(i?null:r&&!n?.unbuilt?{icon:`check`,text:`${r.count} trigger${r.count===1?``:`s`} at #${r.start+1}`,title:`The script's triggers are in the map's trigger list, from #${r.start+1}. Click to apply the script again`,onClick:()=>{vt()}}:{icon:`circle-filled`,text:r?`Changes not applied`:`Not applied yet`,title:`${r?`The script changed since it was applied`:`The script's triggers are not in the map yet`}: saving or testing the map applies the script by itself. Click to apply it now (${Fa}+Shift+B)`,onClick:()=>{vt()}}),ge.set(i?{icon:`warning`,kind:`warn`,text:`Triggers edited outside the script`,title:`What the next Apply does about it`,onClick:()=>V(!0)}:null);let o=ct().length;_e.set(o?{icon:`sync`,kind:`warn`,text:`${o} renamed`,title:`The map renamed things the script names`,onClick:()=>ut(!0)}:null),ve.set(Ae?{text:Ae.text,busy:Ae.kind===`busy`}:!p&&!m?{text:`Loading the editor…`,busy:!0}:null);let c=I?.kind===`ok`&&I.of!==s;ye.set(I?{text:c?`${I.text} · edited since`:I.text,busy:I.kind===`busy`,icon:I.kind===`error`?`error`:`package`,kind:I.kind===`error`?`error`:c?`warn`:void 0,title:`${c?`The script changed since this build: the programs in the saved map are the older ones until the next Save`:I.title??`The last build of the programs`}. Click for its log`,onClick:()=>w.showPanel(`output`)}:null);let l=a>0,u=!!y?.contribute&&y.state()!==`failed`;be.set(l?{kind:u?void 0:`warn`,icon:u?void 0:`warning`,text:y?y.contribute?`eudplib ${y.versions.eudplib} · ${y.state()===`ready`?`runtime ready`:y.state()===`installing`?`runtime downloading…`:y.state()===`failed`?`runtime failed`:`runtime downloads on the first save`}`:`eudplib plugin older than 0.4`:`eudplib plugin not running`,title:y?y.contribute?`The eudplib plugin builds the programs into the map when it is saved or tested; its runtime is downloaded once, the first time`:`Update the eudplib plugin to build the programs`:`The programs will not be built: install or turn on the eudplib plugin under Plugins ▸ Manage Plugins…`}:null),xe.set(a?{text:`${a===1?`1 program`:`${a} programs`} · Remastered`,title:`Programs are built into the saved map, which then needs StarCraft: Remastered. Click for the programs and their variables`,onClick:()=>{w.toggleSidebar(!0),M.expand()}}:null),Xe(),Qe(),B(),tt(),nt(),ot(),V(),ut()},ft=(e,t)=>{_=e.diagnostics,v=e,e.ok&&(te={programs:e.programs,variables:e.variables}),ee=null,e.ok&&(P=Hi(P,e.tests)),e.ok&&e.tests&&t&&!t.files&&!t.ids&&(Te=e.tests.ms>Pa),Ce&&!P.results.has(Ce)&&(Ce=null),u&&d&&(fr(d,s,_,Xi(P)),u.setTests(Ji(P),Yi(P)),u.decorate(e.buildTime),sr()),H()},pt=()=>({world:e.world(),...Te?{files:[u?.active()??`main.ts`]}:{}}),mt=()=>{if(!l)return null;let e=r.document.scenario();if(!e)return null;let t=new Map;for(let n of l.names.locations.entries){let r=n.value-1,i=e.locations[r];if(!i)continue;let a=Math.min(i.left,i.right),o=Math.max(i.left,i.right),s=Math.min(i.top,i.bottom),c=Math.max(i.top,i.bottom);t.set(n.keys[0],{index:r,name:n.keys[1]??n.keys[0],x:Math.floor(a/32),y:Math.floor(s/32),w:Math.max(1,Math.round((o-a)/32)),h:Math.max(1,Math.round((c-s)/32))})}return{object:l.names.locations.object,byKey:t,open:e=>{r.view.goTo({kind:`location`,index:e.index}),r.view.flash({locations:[e.index],kind:`attention`})}}},ht=()=>{f!==null&&clearTimeout(f),f=setTimeout(()=>{if(f=null,b||!l)return;let t=pt();e.prepare(s,l,t).then(e=>{b||ft(e.compiled,t)},e=>{!b&&!(e instanceof Rr)&&R(`error`,`Compiler: ${e.message}`)})},Aa)},gt=async(t=pt())=>{f!==null&&(clearTimeout(f),f=null);for(let n=0;n<3;n++){if(b||!l)return null;try{let n=await e.prepare(s,l,t);return ft(n.compiled,t),n}catch(e){if(e instanceof Rr)continue;return R(`error`,`Compiler: ${e.message}`),null}}return null},_t=e=>{switch(e){case`closed`:return`Not applied: the map closed.`;case`switched`:return`Not applied: another map is in front now.`;case`changed`:return`Not applied: the map changed while the script was running. Apply again.`;default:return`Not applied.`}},vt=async(t=!1)=>{if(h||!p)return!1;h=!0,R(`busy`,`Running the script…`);try{for(let n=0;;n++){let r=await gt();if(!r||b)return!1;if(!r.compiled.ok||_.length){let e=_.length||r.compiled.diagnostics.length;return R(`error`,`Not applied: ${e} problem${e===1?``:`s`} in the script.`,Na),w.showPanel(`problems`),!1}let i=e.state()?.stale??!1;R(`busy`,`Writing the triggers…`);let a=e.install(r,{takeOver:t,replaceStale:i&&!S});if(a.block){let e=a.block,t=a.replaced?` (replaced the previous block's ${a.replaced.removed} unchanged trigger${a.replaced.removed===1?``:`s`}; ${a.replaced.kept} edited one${a.replaced.kept===1?``:`s`} kept after it)`:i?` (appended: the previous block had been edited outside the script)`:``,n=r.compiled.ir.length,o=n?` ${n===1?`The program is`:`The ${n} programs are`} built into the map when it is saved or tested.`:``;return R(`ok`,(e.count===0?`Applied: the script defines no triggers${n?``:`; its block is empty`}.`:`Applied ${e.count} trigger${e.count===1?``:`s`} → #${e.start+1}–#${e.start+e.count}${t}.`)+o),!0}if(a.refused===`changed`&&n<2){R(`busy`,`The map changed while the script ran; running it again…`);continue}return R(`error`,_t(a.refused)),!1}}finally{h=!1,H()}},yt=async()=>{if(h||ne||!p)return;ne=!0,H();let t=null,n=e.onBuild(e=>{e.kind===`failed`&&(t=e.from&&e.from!==`trigscript`?`${e.from}: ${e.message}`:e.message)});try{if(!await vt()||b)return;R(`busy`,`Building the map…`);let e=await r.document.export({format:`scx`});if(!e){R(`error`,`No map is open.`);return}if(t){R(`error`,`Not tested: ${t}`);return}if(v?.programs.length&&!y?.contribute){R(`error`,`Not tested: the programs need the eudplib plugin (0.4 or newer) to be built. Install or turn it on under Plugins ▸ Manage Plugins….`);return}let n=new Uint8Array(await e.arrayBuffer()),i=await r.document.test(n,e.name),a=Math.round(n.length/1024);R(i?`ok`:`info`,i?.launched?`Started the game with ${i.path} (${a} KB).`:i?`Written to ${i.path} (${a} KB)${i.message?` — ${i.message}`:``}.`:`The map is built, but this browser has no test folder yet: pick one once under Tools ▸ Test Map…, which builds the map the same way.`)}catch(e){R(`error`,`Not tested: ${e.message}`)}finally{n.dispose(),ne=!1,H()}},bt=e=>{if(!(b||e.kind!==`log`&&!e.contributors.includes(`trigscript`))){if(e.kind===`start`){Oe=0,w.dismiss(`build`),I={kind:`busy`,text:`Building for ${e.purpose===`test`?`Test Map`:e.purpose===`save`?`Save`:`an export`}…`,of:s},L(`Building the programs for ${e.purpose===`test`?`Test Map`:e.purpose===`save`?`Save`:`an export`}`);let t=Ui(P).failed;t&&L(`${t===1?`A test fails`:`${t} tests fail`}: see the Testing view.`,!1)}else if(e.kind===`log`)Oe++,L(e.line,!1);else if(e.kind===`done`){!Oe&&e.log&&L(e.log,!1);let t=Math.round(e.chkBytes/1024),n=(e.ms/1e3).toFixed(1);I={kind:`ok`,text:`Built ${t} KB · ${n} s`,of:I?.of??s},L(`Built: ${t} KB of scenario in ${n} s`)}else{!Oe&&e.log&&L(e.log,!1);let t=e.purpose===`save`;I={kind:`error`,text:t?`Saved without its programs`:`Build failed`,of:I?.of??s,...t?{title:`The map was saved with the script in it, but its programs were not built, so they do not run in the game. Fix the error and save again`}:{}},L(`Build failed: ${e.message}`),w.notify({key:`build`,kind:`error`,text:t?`The map was saved without its programs, which were not built: ${e.message}`:`The programs were not built: ${e.message}`,actions:[{label:`Show the log`,run:()=>w.showPanel(`output`)}]});let n=ca(e.message);n&&(_=[..._,{file:n.file,line:n.line,column:n.column,endLine:n.line,endColumn:n.column+1,message:e.message,source:`compiler`}],u&&d&&fr(d,s,_),z(n.file,n.line,n.column))}H()}},xt=async()=>{if(!u||!l)return;let{before:t,after:n}=e.handTriggers();if(t.length+n.length===0){R(`info`,`There are no hand-made triggers to import.`);return}let i={names:l.names,string:e=>r.names.string(e)},a=s[`main.ts`]??``,o=a.trim()===``||a===Sa?Yr([...t,...n],i,{imports:!0}):[t.length?Yr(t,i,{header:``}).trimStart():``,a.replace(/\s+$/,``)+`
`,n.length?Yr(n,i,{header:``}).trimStart():``].filter(e=>e!==``).join(`
`);u.set(Nn,o),Ne(Nn),s={...s,[Nn]:o};let c=await vt(!0)!==!1,d=t.length+n.length;c&&R(`ok`,`Imported ${d} hand-made trigger${d===1?``:`s`}; every trigger is now generated by the script.`)},St=()=>{let e=r.document.scenario();if(!e)return{};let t=new Map,n=e=>{let n=t.get(e);if(!n){let i=r.settings?.unitType(e);n={hp:i?.hitPoints??1,shields:i?.shields??0},t.set(e,n)}return n},i=(e,t,n)=>n?Math.max(1,Math.ceil(e*Math.min(100,t)/100)):e,a=e.units.filter(e=>e.unitId!==Ta).map(e=>{let t=n(e.unitId);return{type:e.unitId,owner:e.owner,x:e.x,y:e.y,maxHp:t.hp,hp:i(t.hp,e.hitPointsPercent,!!(e.validStates&2)),maxShields:t.shields,shields:t.shields?i(t.shields,e.shieldPercent,!!(e.validStates&4)):0,resources:e.resourceAmount,...e.validStates&64?{cloaked:!!(e.stateFlags&1),burrowed:!!(e.stateFlags&2),hallucinated:!!(e.stateFlags&8),invincible:!!(e.stateFlags&16)}:{}}}),o={};e.locations.forEach((e,t)=>{(e.right>e.left||e.bottom>e.top)&&(o[t+1]={left:e.left,top:e.top,right:e.right,bottom:e.bottom})});let s=e.playerTypes.slice(0,8).flatMap((e,t)=>e===Da||e===Ea?[t]:[]),c=Object.fromEntries(e.forces.playerForce.slice(0,8).map((e,t)=>[t,e])),l=t=>{let n=e.cuwp?.[t-1];if(!n)return;let r=e=>(n.validProperties&e)===0?void 0:(n.stateFlags&e)!==0;return{hpPercent:n.validFields&2?n.hitPointsPercent:void 0,shieldPercent:n.validFields&4?n.shieldsPercent:void 0,energyPercent:n.validFields&8?n.energyPercent:void 0,resources:n.validFields&16?n.resources:void 0,cloaked:r(1),burrowed:r(2),hallucinated:r(8),invincible:r(16)}};return{units:a,locations:o,...s.length?{players:s,forces:c}:{},unitStats:e=>n(e),properties:l}},Ct=async()=>{let t=(await gt())?.compiled;if(t){if(!t.ok){R(`error`,`Not simulated: ${t.diagnostics.length} problem${t.diagnostics.length===1?``:`s`} in the script.`,Na),w.showPanel(`problems`);return}try{let{unitStats:n,...r}=St(),i=t.programs[0]?.owner,a=i!==void 0&&i<12&&(!r.players||r.players.includes(i))?i:r.players?.[0]??i,o=new Re(t.triggers,{strings:t.strings,player:a,unitStats:n,...r}),s=t.ir.length?new Lt(t.ir,{world:o,strings:t.strings,player:a,heapCells:e.settings().heapCells,stackDepth:e.settings().stackDepth,unitStats:n}):null;for(let e=0;e<480;e++)o.step(),s?.step();ee={sim:o,programs:s,result:t};let c=o.events.length+(s?.events.length??0),l=t.input?` Keys, clicks, the mouse and chat are not simulated: they read as nothing.`:``,u=s?.faults.length??0,d=u?` ${u} fault${u===1?``:`s`}: an array read or written past its end, or out of memory — first in the list.`:``,f=o.game.players.slots.map(e=>`P${e+1}`).join(`, `);R(`ok`,`Simulated 480 frames for ${f}: ${c} action${c===1?``:`s`} ran.${d}${l}`),w.showPanel(`simulate`)}catch(e){R(`error`,`Simulation stopped: ${e.message}`)}}},wt=()=>{let t=u?.cursor();za(e,{dock:n===`dialog`,file:t?.file,line:t?.line})},U=async()=>{if(!(!u||!l||g)){if(n===`dialog`){let t=u.cursor();za(e,{dock:!0,file:t.file,line:t.line,pick:!0});return}g=!0,H();try{let e=await r.ui.pickObject({prompt:`Click a location or a unit for the script`});if(b||!e||!u)return;let t=r.document.scenario(),n=e.kind===`unit`?l.names.units:l.names.locations,i=e.kind===`unit`?t?.units[e.index]?.unitId:e.index+1,a=i===void 0?void 0:tn(n,i);if(!a){R(`info`,e.kind===`unit`?`That unit's type has no name in the script's tables.`:`That location is not in the script's tables yet; try again after the map's names refresh.`);return}u.insert(`${n.object}.${a.keys[0]}`),R(`ok`,`Inserted ${n.object}.${a.keys[0]}.`)}finally{g=!1,H()}}},Tt=async()=>{if(!u)return;let t=await gt();if(!t||b||!u)return;let n=s,r=0;for(let e of x){let i=Bn(n,t.compiled.refs,e.object,e.list);n=i.files,r+=i.count}for(let[e,t]of Object.entries(n))t!==s[e]&&u.set(e,t);s=n,x=[],e.writeFiles(s),R(`ok`,`Updated ${r} reference${r===1?``:`s`}.`),ht()},Et=async(e,t,n=``)=>{for(;;){let i=await r.ui.prompt(e,{title:`TrigScript`,value:t,placeholder:`helpers.ts`});if(i===null)return null;let a=q(i.trim());if(a&&n&&(a=`${n}/${a}`),a&&!/\.ts$/i.test(a)&&(a+=`.ts`),!ci.test(a)||a.split(`/`).some(e=>e===`.`||e===`..`)){t=i,e=`A file name is letters, digits, _ - and ., folders with /, ending in .ts.`;continue}if(s[a]!==void 0){t=i,e=`There is already a ${a}.`;continue}return a}},W=async(e=``)=>{if(!u)return;let t=u.active(),n=/(^|\/)tests?$/i.test(e)?`${(t.split(`/`).pop()??`main.ts`).replace(/(\.test)?\.ts$/i,``)}.test.ts`:`helpers.ts`,r=await Et(e?`Name of the new file in ${e}/:`:`Name of the new file (folder/name.ts puts it in a folder):`,n,e);if(r){if(e&&Ie.has(e)){let t=new Set(Ie);t.delete(e),Le(t)}u.add(r,Rt(r)?wa:Ca),Ne(r)}},Dt=async(e=``)=>{if(!u)return;let t=e?`Name of the new folder in ${e}/:`:`Name of the new folder:`,n=`tests`;for(;;){let i=await r.ui.prompt(t,{title:`TrigScript`,value:n,placeholder:`tests`});if(i===null)return;let a=q(i.trim()).replace(/\/+$/,``);if(!Mi(a)){n=i,t=`A folder name is letters, digits, _ - and ., folders inside it with /.`;continue}await W(e?`${e}/${a}`:a);return}},Ot=(t,n=!1)=>{if(!u||t.size===0)return;let r=zi(Object.keys(s),t);if(r){R(`error`,r);return}let i=Bi(s,t);s=i.files;for(let[e,n]of t)u.rename(e,n);for(let e of i.edited)u.set(e,i.files[e]);F=F.map(e=>t.get(e)??e),e.writeFiles(s),Xe(),ht();let[[a,o]]=[...t],c=`${t.size===1?`${a} is now ${o}`:`${t.size} files moved`}${i.imports?`; ${i.imports} import${i.imports===1?``:`s`} rewritten`:``}.`;if(L(c),n){w.dismiss(`move`);return}let l=new Map([...t].map(([e,t])=>[t,e]));w.notify({key:`move`,kind:`info`,text:c,timeout:Na*2,actions:[{label:`Undo`,run:()=>Ot(l,!0)}]})},kt=(e,t)=>{!u||e===t||Ot(Ri(Object.keys(s),e,t))},At=async e=>{if(!u||e===`main.ts`)return;let t=await Et(`Rename ${e} to (a folder before the name moves it):`,e);t&&kt(e,t)},G=async e=>{if(!u)return;let t=`Rename the folder ${e} to (its files go with it, and the imports follow):`,n=e;for(;;){let i=await r.ui.prompt(t,{title:`TrigScript`,value:n,placeholder:e});if(i===null)return;let a=q(i.trim()).replace(/\/+$/,``);if(!Mi(a)){n=i,t=`A folder name is letters, digits, _ - and ., folders inside it with /.`;continue}if(a===e)return;let o=Ri(Object.keys(s),e,a),c=zi(Object.keys(s),o);if(c){n=i,t=c;continue}if(Ie.has(e)){let t=new Set(Ie);t.delete(e),t.add(a),Le(t)}Ot(o);return}},jt=t=>{if(!u)return;let n={...s};for(let e of t)u.remove(e),delete n[e];s=n,e.writeFiles(s),Xe(),ht()},Mt=async e=>{!u||e===`main.ts`||await r.ui.confirm(`Remove ${e} from the script? Its text is not kept anywhere else.`,{title:`TrigScript`,confirmLabel:`Remove`,danger:!0})&&jt([e])},Nt=async e=>{if(!u)return;let t=Ai(Object.keys(s),e);t.includes(`main.ts`)||await r.ui.confirm(`Remove the folder ${e} and the ${t.length===1?`file`:`${t.length} files`} in it? Their text is not kept anywhere else.`,{title:`TrigScript`,confirmLabel:`Remove`,danger:!0})&&jt(t)},Pt=()=>{if(b)return;let t=l;if(l=e.names(),t&&l)for(let e of[`locations`,`switches`]){let n=l.names[e].object,r=zn(v?.refs??[],n,Rn(t.names[e],l.names[e]));if(r.length===0)continue;let i=x.find(e=>e.object===n);i?i.list=[...i.list.filter(e=>!r.some(t=>t.value===e.value)),...r]:x.push({object:n,list:r})}d&&l&&Xn(d,l.decls),H(),ht()},Ft=(e,t)=>{t?z(e??`main.ts`,t):e&&Ne(e)},It=[{id:`save`,label:`Save the Map`,key:{code:`KeyS`,mod:!0},run:()=>{r.document.save()}},{id:`test`,label:`Play the Map`,key:{code:`F5`},run:()=>{yt()}},{id:`runTests`,label:`Run All Tests`,run:()=>{rt()}},{id:`runTestAtCursor`,label:`Run Test at Cursor`,context:!0,run:()=>{at()}},{id:`runFailedTests`,label:`Run Failed Tests`,run:()=>{it()}},{id:`testing`,label:`Show Testing`,run:()=>de.show()},{id:`simulate`,label:`Simulate`,key:{code:`F5`,mod:!0},run:()=>{Ct()}},{id:`apply`,label:`Apply the Script to the Map`,key:{code:`KeyB`,mod:!0,shift:!0},run:()=>{vt()}},{id:`pick`,label:`Pick a Location or Unit from the Map`,context:!0,run:()=>{U()}},{id:`import`,label:`Import the Map's Triggers`,run:()=>{xt()}},{id:`newFile`,label:`New File…`,run:()=>{W()}},{id:`newFolder`,label:`New Folder…`,run:()=>{Dt()}},{id:`mode`,label:n===`dialog`?`Open Beside the Map`:`Open in a Window`,run:()=>wt()},{id:`problems`,label:`Show Problems`,key:{code:`KeyM`,mod:!0,shift:!0},run:()=>w.togglePanel(`problems`)},{id:`output`,label:`Show Output`,key:{code:`KeyU`,mod:!0,shift:!0},run:()=>w.togglePanel(`output`)},{id:`settings`,label:`Open Settings`,key:{code:`Comma`,mod:!0},run:()=>{w.showPanel(`settings`),fe()}},{id:`panel`,label:`Toggle Panel`,key:{code:`KeyJ`,mod:!0},run:()=>w.togglePanel()},{id:`explorer`,label:`Toggle Explorer`,key:{code:`KeyB`,mod:!0},run:()=>w.toggleSidebar()}],zt=e=>e.key?`${e.key.mod?`${Fa}+`:``}${e.key.shift?`Shift+`:``}${e.key.code.replace(/^Key/,``)}`:void 0,Bt=e=>{let t=It.find(t=>t.id===e);return{label:t.label,keys:zt(t),disabled:!p,run:t.run}},Vt=()=>{u?.editor.focus(),u?.editor.trigger(`trigscript`,`editor.action.quickCommand`,null)},Ht=e=>{if(e.altKey)return;let t=e.ctrlKey||e.metaKey,n=t&&e.shiftKey&&e.code===`KeyP`||!t&&!e.shiftKey&&e.code===`F1`?{run:Vt}:It.find(n=>n.key&&n.key.code===e.code&&!!n.key.mod===t&&!!n.key.shift===e.shiftKey);n&&(e.preventDefault(),e.stopPropagation(),p&&n.run())};return T.addEventListener(`keydown`,Ht,!0),{root:T,attach:n=>{H();let i=a.busy(E,`Loading the editor…`),o=Mr(),h=[e.watchLibrary(e=>{y=e,b||H()}),e.onBuild(bt),r.events.on(`settings`,Pt),r.events.on(`locations`,Pt),r.events.on(`triggers`,Pt),r.events.on(`document`,()=>n())];return Yn(e.dist()).then(n=>{if(b)return;d=n,l&&Xn(n,l.decls),rr(n,()=>v?.variables??[]),or(n,()=>v?.hints??[]),dr(n,mt),i.done(),w.ready(),u=hr(n,E,s,t.file??`main.ts`,(t,n)=>{s={...s,[t]:n},e.writeFiles(s),ht()},e=>{rt({ids:[e]})});let r=u.editor;for(let e of It)r.addAction({id:`trigscript.${e.id}`,label:`TrigScript: ${e.label}`,keybindings:e.key?[(e.key.mod?n.KeyMod.CtrlCmd:0)|(e.key.shift?n.KeyMod.Shift:0)|n.KeyCode[e.key.code]]:void 0,...e.context?{contextMenuGroupId:`navigation`,contextMenuOrder:9}:{},run:()=>e.run()});r.onDidChangeCursorPosition(dt),r.onDidChangeModel(()=>{Xe(),dt()}),h.push(n.editor.registerEditorOpener({openCodeEditor(e,t,n){let r=q(t.path.replace(/^\/+/,``));if(t.scheme!==`file`||s[r]===void 0)return!1;let i=n?`startLineNumber`in n?n.startLineNumber:n.lineNumber:1,a=n?`startColumn`in n?n.startColumn:n.column:1;return z(r,i,a),!0}})),dt(),c&&e.writeFiles(s),Ft(t.file,t.line),u.editor.focus(),p=!0,H(),ht(),t.pick&&U()},e=>{b||(i.done(),m=!0,R(`error`,`The editor failed to load: ${e.message}`))}),()=>{b=!0,i.done(),f!==null&&clearTimeout(f),je!==null&&clearTimeout(je),T.removeEventListener(`keydown`,Ht,!0),w.dispose(),u?.dispose(),u=null,d&&mr(d),o();for(let e of h)e.dispose();$&&!$.isOpen()&&($=null)}},reveal:Ft,cursor:()=>u?.cursor()??null}}function Va(e){let t=new fa(e,(e,n)=>za(t,{file:e,line:n}));e.events.on(`triggers`,()=>{t.relocate(),t.manifestChanged()&&t.claim.refresh()}),e.events.on(`file`,()=>{t.manifestChanged()&&t.claim.refresh()}),e.events.on(`document`,()=>{t.manifestChanged(),t.claim.refresh()}),e.commands.register({id:`open`,title:`TrigScript…`,enabled:()=>e.document.isOpen(),run:e=>za(t,Ha(e)?{file:Ua(e.file),line:Wa(e.line),dock:e.dock===!0||e.dock!==!1&&void 0}:{})}),e.commands.register({id:`dock`,title:`TrigScript beside the map`,enabled:()=>e.document.isOpen(),run:()=>za(t,{dock:!0})}),e.menu.add(`Triggers`,{label:`TrigScript…`,after:`Text Trigger Editor…`,enabled:()=>e.document.isOpen(),command:`open`}),e.menu.add(`Triggers`,{label:`TrigScript beside the map`,after:`TrigScript…`,enabled:()=>e.document.isOpen(),command:`dock`}),e.commands.register({id:`state`,title:`TrigScript: state`,run:()=>t.state()}),e.commands.register({id:`declarations`,title:`TrigScript: declarations`,run:e=>t.declarations({compact:Ha(e)&&e.compact===!0})}),e.commands.register({id:`compile`,title:`TrigScript: compile`,run:e=>t.compile(Ka(e))}),e.commands.register({id:`build`,title:`TrigScript: build`,run:(e,n)=>t.build(Ka(e),{takeOver:Ha(n)&&n.takeOver===!0,replaceStale:Ha(n)&&n.replaceStale===!0})}),e.commands.register({id:`print`,title:`TrigScript: print records as script`,run:(e,n)=>t.print(Ga(e),Ha(n)?{imports:n.imports===!0,header:Ua(n.header)}:void 0)}),e.commands.register({id:`simulate`,title:`TrigScript: simulate records`,run:(e,n,r)=>t.simulate(Ga(e),Math.max(1,Math.round(Number(n)||30)),{player:Ha(r)&&typeof r.player==`number`?r.player:void 0})}),e.commands.register({id:`triggerAt`,title:`TrigScript: trigger at a source line`,run:(e,n)=>t.triggerAt(Ua(e)??`main.ts`,Number(n)||0)});let n=t.attach();return()=>n.dispose()}var Ha=e=>typeof e==`object`&&!!e,Ua=e=>typeof e==`string`?e:void 0,Wa=e=>typeof e==`number`?e:void 0,Ga=e=>Array.isArray(e)?e:[],Ka=e=>Ha(e)?Object.fromEntries(Object.entries(e).filter(([,e])=>typeof e==`string`)):String(e??``);export{Va as default};