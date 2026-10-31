import{t as e}from"./preload-helper-H55Wlrak.js";var t=class{buf;view;len=0;constructor(e=256){this.buf=new Uint8Array(e),this.view=new DataView(this.buf.buffer)}get length(){return this.len}need(e){if(this.len+e<=this.buf.length)return;let t=this.buf.length*2||256;for(;t<this.len+e;)t*=2;let n=new Uint8Array(t);n.set(this.buf.subarray(0,this.len)),this.buf=n,this.view=new DataView(n.buffer)}u8(e){return this.need(1),this.view.setUint8(this.len,e),this.len+=1,this}i8(e){return this.need(1),this.view.setInt8(this.len,e),this.len+=1,this}u16(e){return this.need(2),this.view.setUint16(this.len,e,!0),this.len+=2,this}i16(e){return this.need(2),this.view.setInt16(this.len,e,!0),this.len+=2,this}u32(e){return this.need(4),this.view.setUint32(this.len,e>>>0,!0),this.len+=4,this}i32(e){return this.need(4),this.view.setInt32(this.len,e|0,!0),this.len+=4,this}bytes(e){return this.need(e.length),this.buf.set(e,this.len),this.len+=e.length,this}fill(e,t){return this.need(t),this.buf.fill(e,this.len,this.len+t),this.len+=t,this}finish(){return this.buf.slice(0,this.len)}},n={None:0,CountdownTimer:1,Command:2,Bring:3,Accumulate:4,Kill:5,CommandTheMost:6,CommandTheMostAt:7,MostKills:8,HighestScore:9,MostResources:10,Switch:11,ElapsedTime:12,Briefing:13,Opponents:14,Deaths:15,CommandTheLeast:16,CommandTheLeastAt:17,LeastKills:18,LowestScore:19,LeastResources:20,Score:21,Always:22,Never:23},r={None:0,Victory:1,Defeat:2,PreserveTrigger:3,Wait:4,PauseGame:5,UnpauseGame:6,Transmission:7,PlayWav:8,DisplayText:9,CenterView:10,CreateUnitWithProperties:11,SetMissionObjectives:12,SetSwitch:13,SetCountdownTimer:14,RunAiScript:15,RunAiScriptAt:16,LeaderboardControl:17,LeaderboardControlAt:18,LeaderboardResources:19,LeaderboardKills:20,LeaderboardPoints:21,KillUnit:22,KillUnitAt:23,RemoveUnit:24,RemoveUnitAt:25,SetResources:26,SetScore:27,MinimapPing:28,TalkingPortrait:29,MuteUnitSpeech:30,UnmuteUnitSpeech:31,LeaderboardComputerPlayers:32,LeaderboardGoalControl:33,LeaderboardGoalControlAt:34,LeaderboardGoalResources:35,LeaderboardGoalKills:36,LeaderboardGoalPoints:37,MoveLocation:38,MoveUnit:39,LeaderboardGreed:40,SetNextScenario:41,SetDoodadState:42,SetInvincibility:43,CreateUnit:44,SetDeaths:45,Order:46,Comment:47,GiveUnits:48,ModifyHitPoints:49,ModifyEnergy:50,ModifyShields:51,ModifyResourceAmount:52,ModifyHangarCount:53,PauseTimer:54,UnpauseTimer:55,Draw:56,SetAllianceStatus:57,DisableDebugMode:58,EnableDebugMode:59},i={None:0,Wait:1,PlayWav:2,TextMessage:3,MissionObjectives:4,ShowPortrait:5,HidePortrait:6,DisplaySpeakingPortrait:7,Transmission:8,SkipTutorialEnabled:9},a={Player1:0,Player2:1,Player3:2,Player4:3,Player5:4,Player6:5,Player7:6,Player8:7,Player9:8,Player10:9,Player11:10,Player12:11,None:12,CurrentPlayer:13,Foes:14,Allies:15,NeutralPlayers:16,AllPlayers:17,Force1:18,Force2:19,Force3:20,Force4:21,Unused1:22,Unused2:23,Unused3:24,Unused4:25,NonAlliedVictoryPlayers:26},o={AtLeast:0,AtMost:1,Exactly:10},s={Set:2,Cleared:3},c={Set:4,Clear:5,Toggle:6,Randomize:11},l={SetTo:7,Add:8,Subtract:9},u={Enable:4,Disable:5,Toggle:6},d={Move:0,Patrol:1,Attack:2},f={Enemy:0,Ally:1,AlliedVictory:2},p={Ore:0,Gas:1,OreAndGas:2},m={Total:0,Units:1,Buildings:2,UnitsAndBuildings:3,Kills:4,Razings:5,KillsAndRazings:6,Custom:7},h={Any:229,Men:230,Buildings:231,Factories:232},g={Unknown:1,Disabled:2,AlwaysDisplay:4,UnitPropertiesUsed:8,UnitTypeUsed:16,UnitIdUsed:32},_={IgnoreWaitOnce:1,Disabled:2,AlwaysDisplay:4,UnitPropertiesUsed:8,UnitTypeUsed:16,UnitIdUsed:32},v={ConditionsMet:1,IgnoreGameEnd:2,Preserve:4,Disabled:8,IgnoreDisplay:16,Paused:32,WaitSkipDisabled:64};function y(){return{location:0,text:0,wav:0,time:0,player:0,target:0,unitId:0,type:0,modifier:0,flags:0,padding:0,mask:0}}function b(e,t){e.u32(t.location).u32(t.player).u32(t.amount).u16(t.unitId).u8(t.comparison).u8(t.type).u8(t.resource).u8(t.flags).u16(t.mask)}function x(e,t){e.u32(t.location).u32(t.text).u32(t.wav).u32(t.time).u32(t.player).u32(t.target).u16(t.unitId).u8(t.type).u8(t.modifier).u8(t.flags).u8(t.padding).u16(t.mask)}function S(e,t){if(t.conditions.length>16)throw Error(`A trigger holds at most 16 conditions (got ${t.conditions.length}).`);if(t.actions.length>64)throw Error(`A trigger holds at most 64 actions (got ${t.actions.length}).`);for(let n of t.conditions)b(e,n);e.fill(0,(16-t.conditions.length)*20);for(let n of t.actions)x(e,n);e.fill(0,(64-t.actions.length)*32),e.u32(t.flags);for(let n=0;n<27;n++)e.u8(t.players[n]??0);e.u8(t.currentAction)}function C(e){let n=new t(e.length*2400||16);for(let t of e)S(n,t);return n.finish()}function w(e){return{conditions:e.conditions.map(e=>({...e})),actions:e.actions.map(e=>({...e})),flags:e.flags,players:e.players.slice(),currentAction:e.currentAction}}var T=(e,t,n)=>({kind:e,field:t,label:n}),E=(e,t,n)=>({kind:e,field:t,label:n}),D=[T(`comparison`,`comparison`,`Comparison`),T(`amount`,`amount`,`Amount`)],O=[{type:n.Accumulate,name:`Accumulate`,args:[T(`player`,`player`,`Player`),...D,T(`resource`,`resource`,`Resource`)]},{type:n.Always,name:`Always`,args:[]},{type:n.Bring,name:`Bring`,args:[T(`player`,`player`,`Player`),T(`unit`,`unitId`,`Unit`),T(`location`,`location`,`Location`),...D]},{type:n.Command,name:`Command`,args:[T(`player`,`player`,`Player`),T(`unit`,`unitId`,`Unit`),...D]},{type:n.CommandTheLeast,name:`Command the Least`,args:[T(`unit`,`unitId`,`Unit`)]},{type:n.CommandTheLeastAt,name:`Command the Least At`,args:[T(`unit`,`unitId`,`Unit`),T(`location`,`location`,`Location`)]},{type:n.CommandTheMost,name:`Command the Most`,args:[T(`unit`,`unitId`,`Unit`)]},{type:n.CommandTheMostAt,name:`Command the Most At`,args:[T(`unit`,`unitId`,`Unit`),T(`location`,`location`,`Location`)]},{type:n.CountdownTimer,name:`Countdown Timer`,args:[...D]},{type:n.Deaths,name:`Deaths`,args:[T(`player`,`player`,`Player`),T(`unit`,`unitId`,`Unit`),...D]},{type:n.ElapsedTime,name:`Elapsed Time`,args:[...D]},{type:n.HighestScore,name:`Highest Score`,args:[T(`score`,`resource`,`Score`)]},{type:n.Kill,name:`Kill`,args:[T(`player`,`player`,`Player`),T(`unit`,`unitId`,`Unit`),...D]},{type:n.LeastKills,name:`Least Kills`,args:[T(`unit`,`unitId`,`Unit`)]},{type:n.LeastResources,name:`Least Resources`,args:[T(`resource`,`resource`,`Resource`)]},{type:n.LowestScore,name:`Lowest Score`,args:[T(`score`,`resource`,`Score`)]},{type:n.MostKills,name:`Most Kills`,args:[T(`unit`,`unitId`,`Unit`)]},{type:n.MostResources,name:`Most Resources`,args:[T(`resource`,`resource`,`Resource`)]},{type:n.Never,name:`Never`,args:[]},{type:n.Opponents,name:`Opponents`,args:[T(`player`,`player`,`Player`),...D]},{type:n.Score,name:`Score`,args:[T(`player`,`player`,`Player`),T(`score`,`resource`,`Score`),...D]},{type:n.Switch,name:`Switch`,args:[T(`switch`,`resource`,`Switch`),T(`switchState`,`comparison`,`State`)]},{type:n.Briefing,name:`Mission Briefing`,args:[]}],k=E(`player`,`player`,`Player`),A=E(`unit`,`unitId`,`Unit`),j=E(`location`,`location`,`Location`),M=E(`count`,`modifier`,`Count`),N=E(`modifier`,`modifier`,`Modifier`),P=E(`text`,`text`,`Text`),F=E(`text`,`text`,`Label`),ee=E(`textFlags`,`flags`,`Display`),te=[{type:r.CenterView,name:`Center View`,args:[j]},{type:r.Comment,name:`Comment`,args:[P]},{type:r.CreateUnit,name:`Create Unit`,args:[k,A,M,j]},{type:r.CreateUnitWithProperties,name:`Create Unit with Properties`,args:[k,A,M,j,E(`cuwp`,`target`,`Properties`)]},{type:r.Defeat,name:`Defeat`,args:[]},{type:r.DisplayText,name:`Display Text Message`,args:[ee,P],hasTextFlags:!0},{type:r.Draw,name:`Draw`,args:[]},{type:r.GiveUnits,name:`Give Units to Player`,args:[E(`player`,`player`,`From`),E(`player`,`target`,`To`),A,M,j]},{type:r.KillUnit,name:`Kill Unit`,args:[k,A]},{type:r.KillUnitAt,name:`Kill Unit At Location`,args:[k,A,M,j]},{type:r.LeaderboardControl,name:`Leader Board Control`,args:[F,A]},{type:r.LeaderboardControlAt,name:`Leader Board Control At Location`,args:[F,A,j]},{type:r.LeaderboardGreed,name:`Leader Board Greed`,args:[E(`amount`,`target`,`Goal`)]},{type:r.LeaderboardKills,name:`Leader Board Kills`,args:[F,A]},{type:r.LeaderboardPoints,name:`Leader Board Points`,args:[F,E(`score`,`unitId`,`Score`)]},{type:r.LeaderboardResources,name:`Leader Board Resources`,args:[F,E(`resource`,`unitId`,`Resource`)]},{type:r.LeaderboardGoalControl,name:`Leaderboard Goal Control`,args:[F,A,E(`amount`,`target`,`Goal`)]},{type:r.LeaderboardGoalControlAt,name:`Leaderboard Goal Control At Location`,args:[F,A,E(`amount`,`target`,`Goal`),j]},{type:r.LeaderboardGoalKills,name:`Leaderboard Goal Kills`,args:[F,A,E(`amount`,`target`,`Goal`)]},{type:r.LeaderboardGoalPoints,name:`Leaderboard Goal Points`,args:[F,E(`score`,`unitId`,`Score`),E(`amount`,`target`,`Goal`)]},{type:r.LeaderboardGoalResources,name:`Leaderboard Goal Resources`,args:[F,E(`amount`,`target`,`Goal`),E(`resource`,`unitId`,`Resource`)]},{type:r.LeaderboardComputerPlayers,name:`Leaderboard Computer Players`,args:[E(`unitState`,`modifier`,`State`)]},{type:r.MinimapPing,name:`Minimap Ping`,args:[j]},{type:r.ModifyEnergy,name:`Modify Unit Energy`,args:[k,A,E(`percent`,`target`,`Percent`),M,j]},{type:r.ModifyHangarCount,name:`Modify Unit Hanger Count`,args:[k,A,E(`amount`,`target`,`Amount`),M,j]},{type:r.ModifyHitPoints,name:`Modify Unit Hit Points`,args:[k,A,E(`percent`,`target`,`Percent`),M,j]},{type:r.ModifyResourceAmount,name:`Modify Unit Resource Amount`,args:[k,E(`amount`,`target`,`Amount`),M,j]},{type:r.ModifyShields,name:`Modify Unit Shield Points`,args:[k,A,E(`percent`,`target`,`Percent`),M,j]},{type:r.MoveLocation,name:`Move Location`,args:[k,A,E(`location`,`location`,`Unit at`),E(`location`,`target`,`Move`)]},{type:r.MoveUnit,name:`Move Unit`,args:[k,A,M,E(`location`,`location`,`From`),E(`location`,`target`,`To`)]},{type:r.MuteUnitSpeech,name:`Mute Unit Speech`,args:[]},{type:r.Order,name:`Order`,args:[k,A,E(`location`,`location`,`From`),E(`location`,`target`,`To`),E(`order`,`modifier`,`Order`)]},{type:r.PauseGame,name:`Pause Game`,args:[]},{type:r.PauseTimer,name:`Pause Timer`,args:[]},{type:r.PlayWav,name:`Play WAV`,args:[E(`wav`,`wav`,`WAV`),E(`duration`,`time`,`Duration`)]},{type:r.PreserveTrigger,name:`Preserve Trigger`,args:[]},{type:r.RemoveUnit,name:`Remove Unit`,args:[k,A]},{type:r.RemoveUnitAt,name:`Remove Unit At Location`,args:[k,A,M,j]},{type:r.RunAiScript,name:`Run AI Script`,args:[E(`aiScript`,`target`,`Script`)]},{type:r.RunAiScriptAt,name:`Run AI Script At Location`,args:[E(`aiScript`,`target`,`Script`),j]},{type:r.SetAllianceStatus,name:`Set Alliance Status`,args:[k,E(`alliance`,`unitId`,`Status`)]},{type:r.SetCountdownTimer,name:`Set Countdown Timer`,args:[N,E(`duration`,`time`,`Seconds`)]},{type:r.SetDeaths,name:`Set Deaths`,args:[k,A,N,E(`amount`,`target`,`Amount`)]},{type:r.SetDoodadState,name:`Set Doodad State`,args:[k,A,j,E(`unitState`,`modifier`,`State`)]},{type:r.SetInvincibility,name:`Set Invincibility`,args:[k,A,j,E(`unitState`,`modifier`,`State`)]},{type:r.SetMissionObjectives,name:`Set Mission Objectives`,args:[P]},{type:r.SetNextScenario,name:`Set Next Scenario`,args:[E(`text`,`text`,`Scenario`)]},{type:r.SetResources,name:`Set Resources`,args:[k,N,E(`amount`,`target`,`Amount`),E(`resource`,`unitId`,`Resource`)]},{type:r.SetScore,name:`Set Score`,args:[k,N,E(`amount`,`target`,`Amount`),E(`score`,`unitId`,`Score`)]},{type:r.SetSwitch,name:`Set Switch`,args:[E(`switch`,`target`,`Switch`),E(`switchAction`,`modifier`,`Action`)]},{type:r.TalkingPortrait,name:`Talking Portrait`,args:[A,E(`duration`,`time`,`Duration`)]},{type:r.Transmission,name:`Transmission`,args:[ee,P,A,j,N,E(`duration`,`target`,`Duration`),E(`wav`,`wav`,`WAV`),E(`duration`,`time`,`WAV duration`)],hasTextFlags:!0},{type:r.UnmuteUnitSpeech,name:`Unmute Unit Speech`,args:[]},{type:r.UnpauseGame,name:`Unpause Game`,args:[]},{type:r.UnpauseTimer,name:`Unpause Timer`,args:[]},{type:r.Victory,name:`Victory`,args:[]},{type:r.Wait,name:`Wait`,args:[E(`duration`,`time`,`Milliseconds`)]},{type:r.DisableDebugMode,name:`Disable Debug Mode`,args:[]},{type:r.EnableDebugMode,name:`Enable Debug Mode`,args:[]}],I=[{type:i.Wait,name:`Wait`,args:[E(`duration`,`time`,`Milliseconds`)]},{type:i.PlayWav,name:`Play WAV`,args:[E(`wav`,`wav`,`WAV`),E(`duration`,`time`,`Duration`)]},{type:i.TextMessage,name:`Text Message`,args:[P,E(`duration`,`time`,`Duration`)]},{type:i.MissionObjectives,name:`Mission Objectives`,args:[P]},{type:i.ShowPortrait,name:`Show Portrait`,args:[A,E(`slot`,`player`,`Slot`)]},{type:i.HidePortrait,name:`Hide Portrait`,args:[E(`slot`,`player`,`Slot`)]},{type:i.DisplaySpeakingPortrait,name:`Display Speaking Portrait`,args:[E(`slot`,`player`,`Slot`),E(`duration`,`time`,`Duration`)]},{type:i.Transmission,name:`Transmission`,args:[P,E(`slot`,`player`,`Slot`),N,E(`amount`,`target`,`Amount`),E(`duration`,`time`,`Duration`),E(`wav`,`wav`,`WAV`)]},{type:i.SkipTutorialEnabled,name:`Skip Tutorial Enabled`,args:[]}],ne=e=>new Map(e.map(e=>[e.type,e])),re=e=>new Map(e.map(e=>[e.name.toLowerCase(),e])),L=ne(O);re(O);var ie=ne(te);re(te);var ae=ne(I);re(I);var oe=e=>L.get(e),se=(e,t=!1)=>(t?ae:ie).get(e),R=[...Array.from({length:12},(e,t)=>({value:t,label:`Player ${t+1}`,aliases:[`P${t+1}`]})),{value:a.None,label:`None`,aliases:[`Player 13`]},{value:a.CurrentPlayer,label:`Current Player`},{value:a.Foes,label:`Foes`},{value:a.Allies,label:`Allies`},{value:a.NeutralPlayers,label:`Neutral Players`},{value:a.AllPlayers,label:`All Players`,aliases:[`All players`]},{value:a.Force1,label:`Force 1`},{value:a.Force2,label:`Force 2`},{value:a.Force3,label:`Force 3`},{value:a.Force4,label:`Force 4`},{value:a.Unused1,label:`Unused 1`},{value:a.Unused2,label:`Unused 2`},{value:a.Unused3,label:`Unused 3`},{value:a.Unused4,label:`Unused 4`},{value:a.NonAlliedVictoryPlayers,label:`Non Allied Victory Players`,aliases:[`Non AV Players`]}],ce=[{value:h.Any,label:`Any unit`,aliases:[`Any Unit`]},{value:h.Men,label:`Men`},{value:h.Buildings,label:`Buildings`},{value:h.Factories,label:`Factories`}],le={player:R,comparison:[{value:o.AtLeast,label:`At least`,aliases:[`atleast`,`>=`]},{value:o.AtMost,label:`At most`,aliases:[`atmost`,`<=`]},{value:o.Exactly,label:`Exactly`,aliases:[`==`]}],switchState:[{value:s.Set,label:`set`,aliases:[`true`]},{value:s.Cleared,label:`not set`,aliases:[`cleared`,`clear`,`false`]}],switchAction:[{value:c.Set,label:`set`},{value:c.Clear,label:`clear`,aliases:[`cleared`]},{value:c.Toggle,label:`toggle`},{value:c.Randomize,label:`randomize`,aliases:[`random`,`randomise`]}],modifier:[{value:l.SetTo,label:`Set To`,aliases:[`setto`,`set`]},{value:l.Add,label:`Add`},{value:l.Subtract,label:`Subtract`,aliases:[`sub`]}],unitState:[{value:u.Enable,label:`enable`,aliases:[`enabled`]},{value:u.Disable,label:`disable`,aliases:[`disabled`]},{value:u.Toggle,label:`toggle`}],order:[{value:d.Move,label:`move`},{value:d.Patrol,label:`patrol`},{value:d.Attack,label:`attack`}],alliance:[{value:f.Enemy,label:`Enemy`},{value:f.Ally,label:`Ally`,aliases:[`Allied`]},{value:f.AlliedVictory,label:`Allied Victory`}],resource:[{value:p.Ore,label:`ore`,aliases:[`minerals`]},{value:p.Gas,label:`gas`},{value:p.OreAndGas,label:`ore and gas`,aliases:[`both`]}],score:[{value:m.Total,label:`Total`},{value:m.Units,label:`Units`},{value:m.Buildings,label:`Buildings`},{value:m.UnitsAndBuildings,label:`Units and buildings`},{value:m.Kills,label:`Kills`},{value:m.Razings,label:`Razings`},{value:m.KillsAndRazings,label:`Kills and razings`},{value:m.Custom,label:`Custom`}],textFlags:[{value:0,label:`Don't Always Display`,aliases:[`Dont Always Display`,`Never Display`]},{value:4,label:`Always Display`}]};function ue(e){if(e.length!==4)throw Error(`AI script codes are four characters: "${e}"`);return(e.charCodeAt(0)|e.charCodeAt(1)<<8|e.charCodeAt(2)<<16|e.charCodeAt(3)<<24)>>>0}function de(e){return String.fromCharCode(e&255,e>>>8&255,e>>>16&255,e>>>24&255)}var fe={TMCu:`Terran Custom Level`,ZMCu:`Zerg Custom Level`,PMCu:`Protoss Custom Level`,TMCx:`Terran Expansion Custom Level`,ZMCx:`Zerg Expansion Custom Level`,PMCx:`Protoss Expansion Custom Level`,TLOf:`Terran Campaign Easy`,TMED:`Terran Campaign Medium`,THIf:`Terran Campaign Difficult`,TSUP:`Terran Campaign Insane`,TARE:`Terran Campaign Area Town`,ZLOf:`Zerg Campaign Easy`,ZMED:`Zerg Campaign Medium`,ZHIf:`Zerg Campaign Difficult`,ZSUP:`Zerg Campaign Insane`,ZARE:`Zerg Campaign Area Town`,PLOf:`Protoss Campaign Easy`,PMED:`Protoss Campaign Medium`,PHIf:`Protoss Campaign Difficult`,PSUP:`Protoss Campaign Insane`,PARE:`Protoss Campaign Area Town`,TLOx:`Expansion Terran Campaign Easy`,TMEx:`Expansion Terran Campaign Medium`,THIx:`Expansion Terran Campaign Difficult`,TSUx:`Expansion Terran Campaign Insane`,TARx:`Expansion Terran Campaign Area Town`,ZLOx:`Expansion Zerg Campaign Easy`,ZMEx:`Expansion Zerg Campaign Medium`,ZHIx:`Expansion Zerg Campaign Difficult`,ZSUx:`Expansion Zerg Campaign Insane`,ZARx:`Expansion Zerg Campaign Area Town`,PLOx:`Expansion Protoss Campaign Easy`,PMEx:`Expansion Protoss Campaign Medium`,PHIx:`Expansion Protoss Campaign Difficult`,PSUx:`Expansion Protoss Campaign Insane`,PARx:`Expansion Protoss Campaign Area Town`,Suic:`Send All Units on Strategic Suicide Missions`,SuiR:`Send All Units on Random Suicide Missions`,Rscu:`Switch Computer Player to Rescue Passive`,"+Vi0":`Turn ON Shared Vision for Player 1`,"+Vi1":`Turn ON Shared Vision for Player 2`,"+Vi2":`Turn ON Shared Vision for Player 3`,"+Vi3":`Turn ON Shared Vision for Player 4`,"+Vi4":`Turn ON Shared Vision for Player 5`,"+Vi5":`Turn ON Shared Vision for Player 6`,"+Vi6":`Turn ON Shared Vision for Player 7`,"+Vi7":`Turn ON Shared Vision for Player 8`,"-Vi0":`Turn OFF Shared Vision for Player 1`,"-Vi1":`Turn OFF Shared Vision for Player 2`,"-Vi2":`Turn OFF Shared Vision for Player 3`,"-Vi3":`Turn OFF Shared Vision for Player 4`,"-Vi4":`Turn OFF Shared Vision for Player 5`,"-Vi5":`Turn OFF Shared Vision for Player 6`,"-Vi6":`Turn OFF Shared Vision for Player 7`,"-Vi7":`Turn OFF Shared Vision for Player 8`,MvTe:`Move Dark Templars to Region`,ClrC:`Clear Previous Combat Data`,Enmy:`Set Player to Enemy`,Ally:`Set Player to Ally`,VluA:`Value This Area Higher`,EnBk:`Enter Closest Bunker`,StTg:`Set Generic Command Target`,StPt:`Make These Units Patrol`,EnTr:`Enter Transport`,ExTr:`Exit Transport`,NuHe:`AI Nuke Here`,HaHe:`AI Harass Here`,JYDg:`Set Unit Order To: Junk Yard Dog`,DWHe:`Disruption Web Here`,ReHe:`Recall Here`},pe=Object.entries(fe).map(([e,t])=>({id:e,name:t}));function me(e){let t=de(e);return fe[t]??t}var he=`Die.Stop.Guard.PlayerGuard.TurretGuard.BunkerGuard.Move.ReaverStop.Attack1.Attack2.AttackUnit.AttackFixedRange.AttackTile.Hover.AttackMove.InfestedCommandCenter.UnusedNothing.UnusedPowerup.TowerGuard.TowerAttack.VultureMine.StayInRange.TurretAttack.Nothing.Unused24.DroneStartBuild.DroneBuild.CastInfestation.MoveToInfest.InfestingCommandCenter.PlaceBuilding.PlaceProtossBuilding.CreateProtossBuilding.ConstructingBuilding.Repair.MoveToRepair.PlaceAddon.BuildAddon.Train.RallyPointUnit.RallyPointTile.ZergBirth.ZergUnitMorph.ZergBuildingMorph.IncompleteBuilding.IncompleteMorphing.BuildNydusExit.EnterNydusCanal.IncompleteWarping.Follow.Carrier.ReaverCarrierMove.CarrierStop.CarrierAttack.CarrierMoveToAttack.CarrierIgnore2.CarrierFight.CarrierHoldPosition.Reaver.ReaverAttack.ReaverMoveToAttack.ReaverFight.ReaverHoldPosition.TrainFighter.InterceptorAttack.ScarabAttack.RechargeShieldsUnit.RechargeShieldsBattery.ShieldBattery.InterceptorReturn.DroneLand.BuildingLand.BuildingLiftOff.DroneLiftOff.LiftingOff.ResearchTech.Upgrade.Larva.SpawningLarva.Harvest1.Harvest2.MoveToGas.WaitForGas.HarvestGas.ReturnGas.MoveToMinerals.WaitForMinerals.MiningMinerals.Harvest3.Harvest4.ReturnMinerals.Interrupted.EnterTransport.PickupIdle.PickupTransport.PickupBunker.Pickup4.PowerupIdle.Sieging.Unsieging.WatchTarget.InitCreepGrowth.SpreadCreep.StoppingCreepGrowth.GuardianAspect.ArchonWarp.CompletingArchonSummon.HoldPosition.QueenHoldPosition.Cloak.Decloak.Unload.MoveUnload.FireYamatoGun.MoveToFireYamatoGun.CastLockdown.Burrowing.Burrowed.Unburrowing.CastDarkSwarm.CastParasite.CastSpawnBroodlings.CastEMPShockwave.NukeWait.NukeTrain.NukeLaunch.NukePaint.NukeUnit.CastNuclearStrike.NukeTrack.InitializeArbiter.CloakNearbyUnits.PlaceMine.RightClickAction.SuicideUnit.SuicideLocation.SuicideHoldPosition.CastRecall.Teleport.CastScannerSweep.Scanner.CastDefensiveMatrix.CastPsionicStorm.CastIrradiate.CastPlague.CastConsume.CastEnsnare.CastStasisField.CastHallucination.Hallucination2.ResetCollision.ResetHarvestCollision.Patrol.CTFCOPInit.CTFCOPStarted.CTFCOP2.ComputerAI.AtkMoveEP.HarassMove.AIPatrol.GuardPost.RescuePassive.Neutral.ComputerReturn.InitializePsiProvider.SelfDestructing.Critter.HiddenGun.OpenDoor.CloseDoor.HideTrap.RevealTrap.EnableDoodad.DisableDoodad.WarpIn.Medic.MedicHeal.HealMove.MedicHoldPosition.MedicHealToIdle.CastRestoration.CastDisruptionWeb.CastMindControl.DarkArchonMeld.CastFeedback.CastOpticalFlare.CastMaelstrom.JunkYardDog.Fatal`.split(`.`),ge={move:6,patrol:152,attack:14};function _e(e,t){for(let[n,r]of Object.entries(e))if(r===t)return n}var ve=new Set(`break case catch class const continue debugger default delete do else enum export extends false finally for function if import in instanceof new null return super switch this throw true try typeof var void while with implements interface let package private protected public static yield`.split(` `));function z(e){let t=e[0].toLowerCase()+e.slice(1);return ve.has(t)?`${t}Is`:t}function ye(e){let t=_e(n,e);return t===void 0?void 0:z(t)}function be(e){let t=_e(r,e);return t===void 0?void 0:z(t)}var xe=new Map(O.filter(e=>e.type!==n.Briefing).map(e=>[ye(e.type),e])),B=new Map(te.map(e=>[be(e.type),e])),Se={comparison:`Comparison`,switchState:`SwitchState`,switchAction:`SwitchAction`,modifier:`Modifier`,unitState:`UnitState`,order:`OrderKind`,alliance:`Alliance`,resource:`ResourceKind`,score:`ScoreKind`},Ce={comparison:[[o.AtLeast,`>=`],[o.AtMost,`<=`],[o.Exactly,`==`]],switchState:[[s.Set,`set`],[s.Cleared,`cleared`]],switchAction:[[c.Set,`set`],[c.Clear,`clear`],[c.Toggle,`toggle`],[c.Randomize,`randomize`]],modifier:[[l.SetTo,`set`],[l.Add,`add`],[l.Subtract,`subtract`]],unitState:[[u.Enable,`enable`],[u.Disable,`disable`],[u.Toggle,`toggle`]],order:[[d.Move,`move`],[d.Patrol,`patrol`],[d.Attack,`attack`]],alliance:[[f.Enemy,`enemy`],[f.Ally,`ally`],[f.AlliedVictory,`alliedVictory`]],resource:[[p.Ore,`ore`],[p.Gas,`gas`],[p.OreAndGas,`oreAndGas`]],score:[[m.Total,`total`],[m.Units,`units`],[m.Buildings,`buildings`],[m.UnitsAndBuildings,`unitsAndBuildings`],[m.Kills,`kills`],[m.Razings,`razings`],[m.KillsAndRazings,`killsAndRazings`],[m.Custom,`custom`]]};function we(e,t){let n=Ce[e]?.find(([e])=>e===t);return n?n[1]:le[e]?.find(e=>e.value===t)?.label}function Te(e){return(Ce[e]??[]).map(([,e])=>e)}function Ee(e){switch(e){case`player`:return`Player`;case`unit`:return`UnitType`;case`location`:return`Location`;case`switch`:return`Switch`;case`text`:return`string`;case`wav`:return`Sound | Clip | string`;case`aiScript`:return`AiScript | string`;case`count`:return`Count`;case`textFlags`:return`boolean`;case`number`:case`amount`:case`duration`:case`percent`:case`cuwp`:case`slot`:return`number`;case`order`:return`OrderKind | OrderOfAction`;default:return`${Se[e]??`number`} | number`}}function V(e){let t=e.split(/[^A-Za-z0-9]+/).filter(Boolean).map((e,t)=>t===0?e[0].toLowerCase()+e.slice(1):e[0].toUpperCase()+e.slice(1)).join(``);return/^\d/.test(t)||t===``?`_${t}`:ve.has(t)?`${t}_`:t}function De(e){let t=new Set,n=e=>{let n=V(e);for(;t.has(n);)n=`${n}_`;return t.add(n),n},r=e.args.filter(e=>e.kind!==`textFlags`).map(e=>({arg:e,name:n(e.label),optional:!1})),i=e.args.find(e=>e.kind===`textFlags`);return i?[...r,{arg:i,name:`always`,optional:!0}]:r}var H=/^[A-Za-z_$][A-Za-z0-9_$]*$/;function Oe(e){return H.test(e)?e:JSON.stringify(e)}function ke(e,t){return H.test(t)?`${e}.${t}`:`${e}[${JSON.stringify(t)}]`}var U=[[v.Preserve,`preserve`],[v.Disabled,`disabled`],[v.IgnoreGameEnd,`ignoreGameEnd`],[v.IgnoreDisplay,`ignoreDisplay`],[v.ConditionsMet,`conditionsMet`],[v.Paused,`paused`],[v.WaitSkipDisabled,`waitSkipDisabled`]],Ae=`trigscript`,je=new Set([106,111,113,114,131,132,133,154,155,160,167]),W=(e,t)=>t===229?!0:t===230?e<106:t===231?e>=106&&e<=202:je.has(e),G=class{slots;loose;forces;constructor(e,t){this.loose=!e.players,this.slots=e.players?[...new Set(e.players)].filter(e=>e>=0&&e<12).sort((e,t)=>e-t):[t],this.forces=e.forces??{}}of(e,t){if(e<12)return[e];if(e===a.CurrentPlayer)return[t];if(this.loose)return e<=a.Force4?[t]:[e];let n=this.forces[t];switch(e){case a.AllPlayers:return[...this.slots];case a.Force1:case a.Force2:case a.Force3:case a.Force4:return this.slots.filter(t=>this.forces[t]===e-a.Force1);case a.Allies:return this.slots.filter(e=>e!==t&&n!==void 0&&this.forces[e]===n);case a.Foes:case a.NonAlliedVictoryPlayers:return this.slots.filter(e=>e!==t&&(n===void 0||this.forces[e]!==n));case a.NeutralPlayers:return[11];default:return[]}}owns(e,t){if(e[t]||e[a.AllPlayers])return!0;for(let n=0;n<4;n++)if(e[a.Force1+n]&&(this.loose||this.forces[t]===n))return!0;return!1}},Me=(e,t,n)=>{let r=n>>>0;return t===o.AtLeast?e>=r:t===o.AtMost?e<=r:t===o.Exactly&&e===r},Ne=class{units=[];locations=new Map;players;stats;onDeath=()=>{};table=[];free=[0,...Array.from({length:1699},(e,t)=>1699-t)];uids=[];classOf;properties;killed=new Map;constructor(e,t){this.players=new G(e,t),this.classOf=e.unitClass??W,this.stats=e.unitStats??(()=>void 0),this.properties=e.properties??(()=>void 0);for(let[t,n]of Object.entries(e.locations??{}))this.locations.set(Number(t),{...n});for(let t of e.units??[])this.make(t)}make(e){let t=this.free.shift();if(t===void 0)return null;let n=this.uids[t]===void 0?0:this.uids[t]+1&255;this.uids[t]=n;let r=e.hp??e.maxHp??1,i=e.shields??e.maxShields??0,a={x:0,y:0,energy:0,kills:0,orderId:3,cooldown:0,resources:0,stim:0,ensnare:0,plague:0,lockdown:0,maelstrom:0,irradiate:0,stasis:0,buildTime:0,rank:0,matrix:0,speed:0,hallucinated:!1,cloaked:!1,burrowed:!1,invincible:!1,underAttack:!1,speedUpgrade:!1,hasTarget:!1,inTransport:!1,...e,hp:r,maxHp:e.maxHp??r,shields:i,maxShields:e.maxShields??i,alive:!0,slot:t,uid:n};return this.table[t]=a,this.units.push(a),a}setOwner(e,t){e.alive&&(e.owner=t)}create(e,t,n,r,i){let a=this.stats(e)??{},o=Math.max(1,a.hp??1),s=Math.max(0,a.shields??0),c=(e,t,n)=>t===void 0?e:Math.max(n,Math.ceil(e*Math.min(100,Math.max(0,t))/100));return this.make({type:e,owner:t,x:n,y:r,maxHp:o,maxShields:s,hp:c(o,i?.hpPercent,1),shields:c(s,i?.shieldPercent,0),energy:i?.energyPercent===void 0?a.energy??0:Math.floor(200*Math.min(100,Math.max(0,i.energyPercent))/100),resources:i?.resources??0,cloaked:i?.cloaked??!1,burrowed:i?.burrowed??!1,hallucinated:i?.hallucinated??!1,invincible:i?.invincible??!1})}gone(e,t,n,r=!0){e.alive&&(e.alive=!1,this.table[e.slot]===e&&(this.table[e.slot]=null,this.free.splice(Math.min(1,this.free.length),0,e.slot)),!(!t||!r)&&(n!==void 0&&n!==e.owner&&(e.killedBy=n),this.onDeath(e),n!==void 0&&this.killed.set(e.type*4096+n,(this.killed.get(e.type*4096+n)??0)+1)))}at(e,t){let n=this.table[e];return n&&n.uid===t?n:this.units.find(n=>n.slot===e&&n.uid===t)??null}living(){return this.units.filter(e=>e.alive&&this.table[e.slot]===e)}typed(e,t){return t===void 0||(t>=229?this.classOf(e.type,t):e.type===t)}inside(e,t){let n=t===void 0||t===0?void 0:this.locations.get(t);return!n||e.x>=n.left&&e.x<=n.right&&e.y>=n.top&&e.y<=n.bottom}matching(e,t,n){return this.living().filter(r=>this.fits(r,e,t,n))}listed(e,t,n){return this.matching(e,t,n)}fits(e,t,n,r){return(!t||t.includes(e.owner))&&this.typed(e,n)&&this.inside(e,r)}centreOf(e){let t=this.locations.get(e);return t?{x:Math.floor((t.left+t.right)/2),y:Math.floor((t.top+t.bottom)/2)}:{x:0,y:0}}centre(e,t,n,r){let i=this.locations.get(e)??{left:0,top:0,right:0,bottom:0},a=r?r.width:i.right-i.left,o=r?r.height:i.bottom-i.top,s=t-Math.floor(a/2),c=n-Math.floor(o/2);this.locations.set(e,{left:s,top:c,right:s+a,bottom:c+o})}kills(e,t){let n=0;for(let[r,i]of this.killed)e.includes(r%4096)&&(t>=229?this.classOf(Math.floor(r/4096),t):Math.floor(r/4096)===t)&&(n+=i);return n}quantity(e,t){let r=this.players.of(e.player,t);switch(e.type){case n.Bring:return this.matching(r,e.unitId,e.location).length;case n.Command:return this.matching(r,e.unitId).length;case n.Kill:return this.kills(r,e.unitId);default:return}}holds(e,t){let r=this.quantity(e,t);if(r!==void 0)return Me(r,e.comparison,e.amount);let i=e.type===n.CommandTheMost||e.type===n.CommandTheMostAt,a=e.type===n.CommandTheLeast||e.type===n.CommandTheLeastAt;if(!i&&!a)return;let o=e.type===n.CommandTheMostAt||e.type===n.CommandTheLeastAt?e.location:void 0,s=this.matching([t],e.unitId,o).length;return this.players.slots.filter(e=>e!==t).every(t=>{let n=this.matching([t],e.unitId,o).length;return i?s>=n:s<=n})}some(e,t){return t>0?e.slice(0,t):e}act(e,t,n){let i=this.players.of(e.player,t);switch(e.type){case r.CreateUnit:case r.CreateUnitWithProperties:{let{x:t,y:a}=this.centreOf(e.location),o=e.type===r.CreateUnitWithProperties?this.properties(e.target):void 0;for(let r of i)if(r<12)for(let i=0;i<Math.max(1,e.modifier);i++){let i=this.create(e.unitId,r,t,a,o);i&&n?.push(i)}return!0}case r.KillUnit:for(let t of this.matching(i,e.unitId))this.gone(t,!0,void 0,!1);return!0;case r.RemoveUnit:for(let t of this.matching(i,e.unitId))this.gone(t,!1);return!0;case r.KillUnitAt:for(let t of this.some(this.matching(i,e.unitId,e.location),e.modifier))this.gone(t,!0,void 0,!1);return!0;case r.RemoveUnitAt:for(let t of this.some(this.matching(i,e.unitId,e.location),e.modifier))this.gone(t,!1);return!0;case r.GiveUnits:{let n=this.players.of(e.target,t)[0];if(n!==void 0&&n<12)for(let t of this.some(this.matching(i,e.unitId,e.location),e.modifier))this.setOwner(t,n);return!0}case r.MoveUnit:{let{x:t,y:n}=this.centreOf(e.target);for(let r of this.some(this.matching(i,e.unitId,e.location),e.modifier))r.x=t,r.y=n;return!0}case r.MoveLocation:{let t=this.matching(i,e.unitId,e.location)[0]??this.centreOf(e.location);return this.centre(e.target,t.x,t.y),!0}case r.ModifyHitPoints:for(let t of this.some(this.matching(i,e.unitId,e.location),e.modifier))t.hp=Math.max(1,Math.ceil(t.maxHp*Math.min(100,e.target)/100));return!0;case r.ModifyShields:for(let t of this.some(this.matching(i,e.unitId,e.location),e.modifier))t.shields=Math.ceil(t.maxShields*Math.min(100,e.target)/100);return!0;case r.ModifyEnergy:for(let t of this.some(this.matching(i,e.unitId,e.location),e.modifier))t.energy=Math.floor(200*Math.min(100,e.target)/100);return!0;case r.ModifyResourceAmount:for(let t of this.some(this.matching(i,e.unitId,e.location),e.modifier))t.resources=Math.min(65535,e.target>>>0);return!0;case r.SetInvincibility:for(let t of this.matching(i,e.unitId,e.location))t.invincible=e.modifier===u.Enable||e.modifier!==u.Disable&&!t.invincible;return!0;default:return!1}}},Pe=4294967295,Fe=class{triggers;player;current;game;events=[];switches=new Uint8Array(256);deaths=new Map;done=new Set;copies=new Map;waiting=new Map;options;cycle=0;frame=0;countdown=1;constructor(e,t={}){this.triggers=e,this.options=t,this.player=t.player??t.players?.[0]??e.map(e=>e.players.findIndex((e,t)=>e&&t<12)).find(e=>e>=0)??0,this.current=this.player,this.game=new Ne(t,this.player),this.game.onDeath=e=>this.deaths.set(e.type*4096+e.owner,(this.deaths.get(e.type*4096+e.owner)??0)+1>>>0)}death(e,t){let n=0;for(let r of this.game.players.of(e,this.current))n+=this.deaths.get(t*4096+r)??0;return n>>>0}setDeath(e,t,n){for(let r of this.game.players.of(e,this.current))this.deaths.set(t*4096+r,n>>>0)}changeDeath(e,t,n,r){let i=r>>>0;for(let r of this.game.players.of(e,this.current)){let e=this.deaths.get(t*4096+r)??0;this.deaths.set(t*4096+r,(n===l.SetTo?i:n===l.Add?e+i:Math.max(0,e-i))>>>0)}}text(e){let{strings:t}=this.options;if(!t||e===0)return;if(typeof t==`function`)return t(e)??void 0;let n=t[e-1];return n&&`text`in n?n.text:void 0}tick(){this.frame++;let e=this.options.msPerFrame??42;for(let[t,n]of this.waiting)n!==Pe&&(e<n?this.waiting.set(t,n-e):(this.waiting.delete(t),this.countdown=1));let t=this.countdown===0;return this.countdown=Math.max(0,this.countdown-1),t?(this.pass(),!0):!1}step(){for(;!this.tick(););return this}run(e){for(let t=0;t<e;t++)this.step();return this}pass(){this.countdown=30;let e=0,t=this.options.maxRunsPerCycle??1e5;for(let n of this.game.players.slots){this.current=n;for(let i=0;i<this.triggers.length;i++){let a=this.triggers[i],o=i*12+n;if(this.done.has(o)||a.flags&v.Disabled||!this.game.players.owns(a.players,n))continue;let s=this.copies.get(o);if(!s?.executing){if(!a.conditions.every(e=>this.condition(e)))continue;if(++e>t)throw Error(`More than ${t} trigger runs in one cycle.`);s={executing:!0,at:0,preserved:s?.preserved||(a.flags&v.Preserve)!==0,started:new Set},this.copies.set(o,s)}let c=!1;for(;s.at<a.actions.length;s.at++){let e=a.actions[s.at];if(e.type===r.None)break;if(!(e.flags&_.Disabled)&&!this.action(e,i,s)){c=!0;break}}c||(s.preserved?(s.executing=!1,s.at=0,s.started.clear()):this.done.add(o))}}this.current=this.player,this.cycle++,this.options.everyFrame&&(this.countdown=0)}condition(e){if(e.flags&g.Disabled)return!0;switch(e.type){case n.Always:return!0;case n.Never:return!1;case n.Deaths:return Ie(this.death(e.player,e.unitId),e.comparison,e.amount);case n.Switch:return e.comparison===s.Set?this.switches[e.resource]===1:this.switches[e.resource]===0;case n.ElapsedTime:return this.options.condition?.(e,this)??Ie(Math.floor(this.frame/16),e.comparison,e.amount);default:return this.options.condition?.(e,this)??this.game.holds(e,this.current)??!1}}action(e,t,n){switch(e.type){case r.PreserveTrigger:return n.preserved=!0,!0;case r.Wait:case r.Transmission:{let i=this.current;if(e.type===r.Transmission&&(e.location===0||this.options.computers?.includes(i)))return!0;if(this.waiting.has(i))return!1;if(n.started.delete(n.at))return!0;let a=e.time>>>0;if(e.type===r.Transmission){let t=e.target>>>0;a=e.modifier===l.SetTo?t:e.modifier===l.Add?a+t>>>0:e.modifier===l.Subtract?t>a?0:a-t:a}return this.waiting.set(i,a),n.started.add(n.at),this.log(e,t),!1}case r.SetDeaths:return this.changeDeath(e.player,e.unitId,e.modifier,e.target),!0;case r.SetSwitch:{let t=e.target;if(t<0||t>=256)return!0;switch(e.modifier){case c.Set:this.switches[t]=1;break;case c.Clear:this.switches[t]=0;break;case c.Toggle:this.switches[t]^=1;break;case c.Randomize:this.switches[t]=(this.options.random??Math.random)()<.5?0:1}return!0}case r.Comment:return!0;default:return this.game.act(e,this.current),this.log(e,t),!0}}log(e,t){let n={cycle:this.cycle,frame:this.frame,trigger:t,player:this.current,action:e},r=this.text(e.text);r!==void 0&&(n.text=r),this.events.push(n)}};function Ie(e,t,n){let r=n>>>0;switch(t){case o.AtLeast:return e>=r;case o.AtMost:return e<=r;case o.Exactly:return e===r;default:return!1}}function Le(e,t,n={}){return new Fe(e,n).run(t)}var Re=4294967296n,K=e=>BigInt(e<0?-e:e),ze=(e,t)=>Number(BigInt.asIntN(32,(t?Re-e%Re:e)%Re));function Be(e,t){return ze(K(e)*K(t)>>16n,e<0!=t<0)}function Ve(e,t){return t===0?0:ze((K(e)<<16n)/K(t),e<0!=t<0)}function He(e){if(e<2n)return e;let t=BigInt(Math.floor(Math.sqrt(Number(e))));for(;t*t>e;)t--;for(;(t+1n)*(t+1n)<=e;)t++;return t}function Ue(e,t=!1){return t?e>>>0>=2**30?2147483647:ze(He(BigInt(e>>>0)<<32n),!1):e<=0?0:ze(He(BigInt(e)<<16n),!1)}var We=Math.round(Math.PI*65536),Ge=Math.round(Math.PI/2*65536);function Ke(e,t,n,r){let i=t-e,a=Math.floor(Math.abs(i)*n/2**r);return(i<0?e-a:e+a)|0}function qe(e,t,n){let r=K(t),i=K(e);if(r===0n&&i===0n)return 0;let a=(e,t)=>{let r=Number((e<<16n)/t);return Ke(n[r>>6]??0,n[(r>>6)+1]??0,r&63,6)},o=i<=r?a(i,r):Ge-a(r,i);return t<0&&(o=We-o),e<0&&(o=-o),o|0}function Je(e,t,n,r=!1){let i=Be(e,t),a=(i>>>16)+(r?1024:0)&4095;return Ke(n[a]??0,n[a+1&4095]??0,i&65535,16)}function Ye(e){let t=Math.abs(e),n=Math.floor(t/65536),r=Math.floor((t%65536*1e4+32768)/65536);return r===1e4&&(n++,r=0),(e<0&&(n||r)?`-`:``)+String(n)+(r?`.`+String(r).padStart(4,`0`).replace(/0+$/,``):``)}var Xe=2047,Ze=16384,Qe=1024,$e=1<<20,et=65536;function tt(e){return typeof e==`number`&&Number.isFinite(e)?Math.min($e,Math.max(Qe,Math.floor(e))):Ze}var nt=1024,rt=65536,it=1<<20;function at(e){return typeof e==`number`&&Number.isFinite(e)?Math.min(rt,Math.max(16,Math.floor(e))):nt}var ot=[`hallucinated`,`cloaked`,`burrowed`,`invincible`,`underAttack`,`speedUpgrade`,`hasTarget`,`inTransport`],st=1023,ct=new Set([`text`,`textVar`,`textOf`,`textAt`,`template`,`textTernary`,`textSlice`,`textPad`,`textRepeat`,`textCall`,`built`]),lt=e=>ct.has(e.kind),q=(e,t)=>t.text?t.text(e):dt(e,t);function ut(e,t){return e.map(e=>e.kind===`number`||e.kind===`char`?{...e,expr:t.num(e.expr)}:e.kind===`value`?{...e,text:q(e.text,t)}:e)}function dt(e,t){switch(e.kind){case`textOf`:case`textAt`:return{...e,index:t.num(e.index)};case`template`:return{...e,parts:ut(e.parts,t)};case`textTernary`:return{...e,cond:t.bool(e.cond),whenTrue:q(e.whenTrue,t),whenFalse:q(e.whenFalse,t)};case`textSlice`:return{...e,of:q(e.of,t),...e.start?{start:t.num(e.start)}:{},...e.end?{end:t.num(e.end)}:{}};case`textPad`:return{...e,of:q(e.of,t),width:t.num(e.width),with:q(e.with,t)};case`textRepeat`:return{...e,of:q(e.of,t),count:t.num(e.count)};case`textCall`:return{...e,call:t.call(e.call)};default:return e}}function ft(e,t){switch(e.kind){case`textLength`:return{...e,of:q(e.of,t)};case`textIndexOf`:return{...e,of:q(e.of,t),find:q(e.find,t),...e.from?{from:t.num(e.from)}:{}};case`textCode`:return{...e,of:q(e.of,t),index:t.num(e.index)};case`textCompare`:return{...e,left:q(e.left,t),right:q(e.right,t)};case`textTest`:return{...e,of:q(e.of,t),find:q(e.find,t)};default:return}}var pt={Error:1,RangeError:2,TypeError:3},mt=`Maximum call stack size exceeded`;function ht(e){return[e.body,...(e.functions??[]).map(e=>e.body)]}function gt(e){let t=xt(e.body);for(let n of e.functions??[])t.push(...n.params),n.result&&t.push(n.result.decl),t.push(...xt(n.body));return t}function _t(e,t){if(Array.isArray(e)){for(let n of e)_t(n,t);return}if(!e||typeof e!=`object`)return;let n=e;(n.kind===`call`||n.kind===`textCall`)&&n.call&&typeof n.call==`object`&&t(n.call);for(let e of Object.values(n))e&&typeof e==`object`&&_t(e,t)}function vt(e,t){if(Array.isArray(e)){for(let n of e)vt(n,t);return}if(!e||typeof e!=`object`)return;let n=e;n.kind===`start`&&typeof n.task==`number`&&n.call&&typeof n.call==`object`&&t(n);for(let e of Object.values(n))e&&typeof e==`object`&&vt(e,t)}var yt=e=>e.kind===`unitNull`||e.kind===`unitVar`||e.kind===`pick`||e.kind===`unitAt`||e.kind===`call`&&e.call.result?.kind===`unit`,bt=e=>{switch(e.kind){case`textLength`:case`textIndexOf`:case`textCode`:return!0;case`const`:return typeof e.value==`number`;case`var`:return!1;case`element`:case`pop`:return!1;case`length`:case`unitPart`:return!0;case`unary`:case`cast`:case`binary`:case`intrinsic`:case`read`:case`randomInt`:case`unitField`:case`tableRead`:case`input`:case`taskHandle`:return!0;case`ternary`:return bt(e.whenTrue);case`call`:return e.call.result?.kind===`number`;default:return!1}};function xt(e){let t=[],n=e=>{switch(e.kind){case`declare`:t.push(e.decl),i(e.init);break;case`assign`:c(e.value);break;case`declareArray`:e.init?.forEach(i),e.fill&&i(e.fill);break;case`store`:c(e.index),i(e.value);break;case`push`:i(e.value);break;case`setLength`:c(e.value);break;case`assignBool`:i(e.value);break;case`assignUnit`:s(e.value);break;case`assignText`:o(e.value);break;case`storeText`:c(e.index),o(e.value);break;case`releaseText`:c(e.index);break;case`textLoop`:o(e.of),t.push(e.decl),e.body.forEach(n);break;case`unitLoop`:t.push(e.decl),e.was&&t.push(e.was),e.body.forEach(n);break;case`unitWrite`:s(e.unit),i(e.value);break;case`unitDo`:s(e.unit),(e.verb.do===`damage`||e.verb.do===`heal`)&&c(e.verb.amount);break;case`select`:e.units.forEach(s);break;case`tableWrite`:i(e.value);break;case`if`:i(e.cond),e.then.forEach(n),e.else?.forEach(n);break;case`while`:e.cond&&i(e.cond),e.body.forEach(n);break;case`do`:e.body.forEach(n),i(e.cond);break;case`for`:e.cond&&i(e.cond),e.update.forEach(n),e.body.forEach(n);break;case`unrolled`:e.iterations.forEach(e=>e.forEach(n));break;case`parallel`:e.branches.forEach(e=>e.forEach(n));break;case`start`:r(e.call);break;case`cancel`:c(e.task);break;case`switch`:c(e.value),e.cases.forEach(e=>e.body.forEach(n));break;case`return`:e.value&&i(e.value);break;case`action`:for(let t of e.variables??[])c(t.expr);e.text&&o(e.text);break;case`centerLocation`:c(e.x),c(e.y),e.size&&(c(e.size.width),c(e.size.height));break;case`syncSend`:c(e.value);break;case`print`:case`buildText`:a(e.parts);break;case`call`:r(e.call);break;case`block`:e.body.forEach(n);break;case`try`:e.body.forEach(n),e.catch.forEach(n)}},r=e=>{e.result&&t.push(e.result.decl);for(let n of e.params)e.fn||t.push(n.decl),i(n.init);e.body.forEach(n)},i=e=>lt(e)?o(e):yt(e)?s(e):bt(e)?c(e):l(e),a=e=>{for(let t of e)t.kind===`number`||t.kind===`char`?c(t.expr):t.kind===`value`&&o(t.text)},o=e=>{switch(e.kind){case`textOf`:case`textAt`:c(e.index);break;case`template`:a(e.parts);break;case`textTernary`:l(e.cond),o(e.whenTrue),o(e.whenFalse);break;case`textSlice`:o(e.of),e.start&&c(e.start),e.end&&c(e.end);break;case`textPad`:o(e.of),c(e.width),o(e.with);break;case`textRepeat`:o(e.of),c(e.count);break;case`textCall`:r(e.call)}},s=e=>{e.kind===`call`?r(e.call):e.kind===`unitAt`&&(c(e.ptr),c(e.epd),c(e.uid))},c=e=>{switch(e.kind){case`unitField`:case`unitPart`:s(e.unit);break;case`element`:c(e.index);break;case`unary`:case`cast`:c(e.expr);break;case`binary`:c(e.left),c(e.right);break;case`ternary`:l(e.cond),c(e.whenTrue),c(e.whenFalse);break;case`intrinsic`:e.args.forEach(c);break;case`randomInt`:c(e.bound);break;case`textLength`:o(e.of);break;case`textIndexOf`:o(e.of),o(e.find),e.from&&c(e.from);break;case`textCode`:o(e.of),c(e.index);break;case`call`:r(e.call)}},l=e=>{switch(e.kind){case`unitAlive`:case`unitFlag`:s(e.unit);break;case`unitSame`:s(e.left),s(e.right);break;case`element`:c(e.index);break;case`test`:c(e.expr);break;case`compare`:c(e.left),c(e.right);break;case`and`:case`or`:e.items.forEach(l);break;case`not`:l(e.expr);break;case`edge`:l(e.cond);break;case`ternary`:l(e.cond),l(e.whenTrue),l(e.whenFalse);break;case`textCompare`:o(e.left),o(e.right);break;case`textTest`:o(e.of),o(e.find);break;case`running`:c(e.task);break;case`call`:r(e.call)}};return e.forEach(n),t}var St=6701184,Ct=(e,t,n)=>({name:e,doc:n,base:St,stride:4,width:`bit`,bit:t,boolean:!0}),wt={unit:[{name:`maxHp`,doc:`Hit points of units made after the write.`,base:6693712,stride:4,width:4,scale:256},{name:`maxShields`,doc:`Shield points of units made after the write.`,base:6688256,stride:2,width:2},{name:`armor`,doc:`Armour, before upgrades.`,base:6684360,stride:1,width:1},{name:`minerals`,doc:`What the unit costs in minerals.`,base:6699144,stride:2,width:2},{name:`gas`,doc:`What the unit costs in gas.`,base:6683904,stride:2,width:2},{name:`buildTime`,doc:`Seconds to build, on the game's clock; a fraction is fine when the number is known when you build (1.5).`,base:6685736,stride:2,width:2,scale:15},{name:`supplyUsed`,doc:`Supply the unit takes; a Zergling is 0.5.`,base:6700264,stride:1,width:1,scale:2},{name:`supplyProvided`,doc:`Supply the unit provides, for the ones made after the write.`,base:6702792,stride:1,width:1,scale:2},{name:`sight`,doc:`Sight range in tiles, up to 11.`,base:6697528,stride:1,width:1},{name:`groundWeapon`,doc:`The weapon used against ground units (weapons.*); units already on the map switch too.`,base:6698680,stride:1,width:1,type:`Weapon`},{name:`airWeapon`,doc:`The weapon used against air units (weapons.*); weapons.None for none.`,base:6690528,stride:1,width:1,type:`Weapon`},{name:`size`,doc:`What concussive and explosive damage scale by: 0 independent, 1 small, 2 medium, 3 large.`,base:6693248,stride:1,width:1},{name:`speed`,doc:`Top speed in pixels a frame (a Marine walks at 4, a Vulture at 6.67), for units made after the write: the type's flingy is switched to table control and given this speed, with acceleration and stopping distance to match. A fraction is fine when the number is known when you build.`,base:7118584,stride:4,width:4,scale:256,writeOnly:!0,special:`speed`},{name:`name`,doc:`The name shown for the type: text known when you build.`,base:6685280,stride:2,width:2,writeOnly:!0,special:`name`,type:`string`},Ct(`detector`,15,`Sees cloaked and burrowed units in its sight range.`),Ct(`permanentCloak`,22,`Always cloaked, for units made after the write.`),Ct(`cloakable`,9,`Has the ability to cloak (the flag alone gives no button).`),Ct(`burrowable`,20,`Has the ability to burrow (the flag alone gives no button).`),Ct(`regenerates`,7,`Hit points climb back over time, as a Zerg unit's do; units already on the map follow at once.`),Ct(`invincible`,29,`Cannot be hurt, for units made after the write.`),Ct(`hero`,6,`A hero unit.`),Ct(`organic`,16,`A Medic can heal it; units already on the map follow.`),Ct(`mechanical`,30,`An SCV can repair it; units already on the map follow.`),Ct(`robotic`,14,`Immune to the spells robotic units are immune to.`)],weapon:[{name:`damage`,doc:`Damage of one hit, before upgrades.`,base:6647472,stride:2,width:2},{name:`bonus`,doc:`Extra damage per upgrade level.`,base:6649464,stride:2,width:2},{name:`cooldown`,doc:`Frames between attacks.`,base:6647736,stride:1,width:1},{name:`factor`,doc:`Hits per attack.`,base:6644960,stride:1,width:1},{name:`range`,doc:`Range in pixels, 32 a tile.`,base:6648944,stride:4,width:4},{name:`minRange`,doc:`The least range in pixels: nothing closer can be shot.`,base:6646296,stride:4,width:4}],upgrade:[{name:`minerals`,doc:`The first level's mineral cost.`,base:6641472,stride:2,width:2},{name:`gas`,doc:`The first level's gas cost.`,base:6641728,stride:2,width:2},{name:`time`,doc:`Seconds the first level takes, on the game's clock.`,base:6642560,stride:2,width:2,scale:15},{name:`maxLevel`,doc:`How many times it can be researched. Read only: the game took no write.`,base:6641408,stride:1,width:1,readonly:!0}],tech:[{name:`minerals`,doc:`Mineral cost of the research.`,base:6644296,stride:2,width:2},{name:`gas`,doc:`Gas cost of the research.`,base:6644208,stride:2,width:2},{name:`time`,doc:`Seconds the research takes, on the game's clock.`,base:6644696,stride:2,width:2,scale:15},{name:`energy`,doc:`Energy a cast takes.`,base:6644608,stride:2,width:2}],player:[{name:`color`,doc:`The colour the player's units and minimap dots are drawn in: one of colors.*, or "teal". Takes effect at once.`,base:5774710,stride:1,width:1,writeOnly:!0,special:`color`,type:`PlayerColor | ColorName`},{name:`upgrades`,doc:`The player's level of each upgrade: stats(P1).upgrades[upgrades.TerranInfantryWeapons] = 3.`,base:5821104,stride:46,width:1,keyed:{kind:`upgrade`,type:`Upgrade`}},{name:`researched`,doc:`Whether the player has each technology: stats(P1).researched[techs.Lockdown] = true.`,base:5820228,stride:24,width:1,boolean:!0,keyed:{kind:`tech`,type:`Tech`}}]},Tt={red:111,blue:165,teal:159,purple:164,orange:179,brown:19,white:255,yellow:135,green:117},Et=e=>e===`bit`?1:e===4?4294967295:2**(e*8)-1,Dt={Space:`SPACE`,Enter:`ENTER`,Escape:`ESC`,Tab:`TAB`,Shift:`SHIFT`,Ctrl:`LCTRL`,Alt:`LALT`,Left:`LEFT`,Up:`UP`,Right:`RIGHT`,Down:`DOWN`,Backspace:`BACK`,Delete:`DELETE`,Insert:`INSERT`,Home:`HOME`,End:`END`,PageUp:`PGUP`,PageDown:`PGDN`},Ot=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split(``),kt=`0123456789`.split(``),At=(e,t)=>`StarCraft: Remastered keeps ${e} to itself${t} and reports no press of it (played and seen); F7, F8 and F9 work`,J={F2:At(`F2`,` (a camera key)`),F3:At(`F3`,` (a camera key)`),F4:At(`F4`,` (a camera key)`),F5:At(`F5`,``),F6:At(`F6`,``)},jt=[...Ot,...kt,...Array.from({length:12},(e,t)=>`F${t+1}`).filter(e=>!(e in J)),...Object.keys(Dt),...kt.map(e=>`Numpad${e}`)],Mt=new Map(jt.map(e=>[e.toLowerCase(),e]));function Nt(e){return Mt.get(e.trim().toLowerCase())??null}var Pt=1048575,Ft=/^[A-Za-z_][A-Za-z0-9_]*$/,It=e=>new TextEncoder().encode(e).length;function Lt(e){if(e===``)throw Error(`chatted: the pattern is what the player types, such as "-give {n}".`);if(/[\r\n\0]/.test(e))throw Error(`chatted: a typed line is one line.`);let t=[],n=[],r=``;for(let i=0;i<e.length;i++){let a=e[i];if(a===`}`)throw Error(`chatted: a } without its {. A capture is {name}, {name:unit} or {name:word|word}.`);if(a!==`{`){r+=a;continue}let o=e.indexOf(`}`,i);if(o<0)throw Error(`chatted: a { without its }. A capture is {name}, {name:unit} or {name:word|word}.`);let s=e.slice(i+1,o);i=o;let c=s.indexOf(`:`),l=c<0?s:s.slice(0,c),u=c<0?``:s.slice(c+1);if(!Ft.test(l)||l.startsWith(`__`))throw Error(`chatted: {${s}} needs a name to be read by: {n}, {unit:unit}, {kind:ore|gas}.`);if(n.some(e=>e.name===l))throw Error(`chatted: two captures are called ${l}.`);if(r===``)throw Error(t.length===0?`chatted: a pattern starts with its own word, so that ordinary talk is not taken for it: "-give {n}".`:`chatted: {${l}} follows another capture with nothing between them; put a space or a word there.`);if(t.push(r),r=``,u===``)n.push({name:l,kind:`number`});else if(u===`unit`)n.push({name:l,kind:`unit`});else{let e=u.split(`|`);if(u===`number`||u===`word`)throw Error(`chatted: {${l}} alone is a number; {${l}:unit} a unit type; {${l}:ore|gas} one of the words listed.`);if(e.some(e=>e===``||/\s/.test(e)))throw Error(`chatted: {${s}}: each word of the list is one word, without spaces.`);if(new Set(e.map(e=>e.toLowerCase())).size!==e.length)throw Error(`chatted: {${s}} lists a word twice.`);n.push({name:l,kind:`word`,words:e})}t.push(n.length-1)}if(r!==``&&t.push(r),n.length>3)throw Error(`chatted: a pattern reads at most 3 values.`);let i=n.findIndex(e=>e.kind===`unit`);if(i>=0&&(i!==n.length-1||typeof t[t.length-1]==`string`))throw Error(`chatted: a unit's name has spaces in it, so {…:unit} reads the rest of the line and comes last.`);if(It(t.filter(e=>typeof e==`string`).join(``))>78)throw Error(`chatted: the game lets a player type 78 bytes; the pattern's own text is longer.`);return{pattern:e,segments:t,captures:n}}function Rt(e,t,n){let r=0,i=[];for(let a=0;a<e.segments.length;a++){let o=e.segments[a];if(typeof o==`string`){if(!t.startsWith(o,r))return null;r+=o.length;continue}let s=e.captures[o];if(s.kind===`number`){let e=/^\d+/.exec(t.slice(r));if(!e)return null;r+=e[0].length,i.push(Math.min(Number(e[0]),Pt))}else if(s.kind===`unit`){let e=n(t.slice(r).toLowerCase());if(e===void 0)return null;r=t.length,i.push(e)}else{let e=/^\S+/.exec(t.slice(r)),n=e?s.words.findIndex(t=>t.toLowerCase()===e[0].toLowerCase()):-1;if(!e||n<0)return null;r+=e[0].length,i.push(n)}}return r===t.length?i:null}function zt(e){let t=[],n=!1,r=null,i=e=>{e.kind===`call`?l(e.call):e.kind===`pick`&&e.mouse!==void 0?(n=!0,r??=e.at):e.kind===`unitAt`&&(c(e.ptr),c(e.epd),c(e.uid))},a=e=>lt(e)?s(e):yt(e)?i(e):c(e),o={num:e=>(c(e),e),bool:e=>(c(e),e),call:e=>(l(e),e)},s=e=>{dt(e,o)},c=e=>{if(!ft(e,o))switch(e.kind){case`input`:t.push(e.input),r??=e.at,e.input.source===`mouse`&&(n=!0);break;case`unitField`:case`unitPart`:case`unitAlive`:case`unitFlag`:i(e.unit);break;case`unitSame`:i(e.left),i(e.right);break;case`unary`:case`cast`:c(e.expr);break;case`element`:c(e.index);break;case`binary`:case`compare`:c(e.left),c(e.right);break;case`ternary`:c(e.cond),c(e.whenTrue),c(e.whenFalse);break;case`intrinsic`:e.args.forEach(c);break;case`randomInt`:c(e.bound);break;case`and`:case`or`:e.items.forEach(c);break;case`not`:case`test`:c(e.expr);break;case`edge`:c(e.cond);break;case`running`:c(e.task);break;case`call`:l(e.call)}},l=e=>{for(let t of e.params)a(t.init);e.body.forEach(u)},u=e=>{switch(e.kind){case`declare`:e.failed||a(e.init);break;case`assign`:case`assignBool`:c(e.value);break;case`declareArray`:e.init?.forEach(c),e.fill&&c(e.fill);break;case`store`:c(e.index),c(e.value);break;case`push`:case`setLength`:c(e.value);break;case`assignUnit`:i(e.value);break;case`assignText`:s(e.value);break;case`storeText`:c(e.index),s(e.value);break;case`releaseText`:c(e.index);break;case`textLoop`:s(e.of),e.body.forEach(u);break;case`unitLoop`:e.body.forEach(u);break;case`unitWrite`:i(e.unit),c(e.value);break;case`unitDo`:i(e.unit),(e.verb.do===`damage`||e.verb.do===`heal`)&&c(e.verb.amount);break;case`select`:e.units.forEach(i);break;case`tableWrite`:a(e.value);break;case`centerLocation`:c(e.x),c(e.y),e.size&&(c(e.size.width),c(e.size.height));break;case`syncSend`:t.push({source:`sync`,slot:e.slot,player:e.player}),r??=e.at,c(e.value);break;case`if`:c(e.cond),e.then.forEach(u),e.else?.forEach(u);break;case`while`:e.cond&&c(e.cond),e.body.forEach(u);break;case`do`:e.body.forEach(u),c(e.cond);break;case`for`:e.cond&&c(e.cond),e.update.forEach(u),e.body.forEach(u);break;case`unrolled`:e.iterations.forEach(e=>e.forEach(u));break;case`parallel`:e.branches.forEach(e=>e.forEach(u));break;case`start`:l(e.call);break;case`cancel`:c(e.task);break;case`switch`:c(e.value),e.cases.forEach(e=>e.body.forEach(u));break;case`return`:e.value&&a(e.value);break;case`action`:for(let t of e.variables??[])c(t.expr);e.text&&s(e.text);break;case`print`:case`buildText`:ut(e.parts,o);break;case`call`:l(e.call);break;case`block`:e.body.forEach(u);break;case`try`:e.body.forEach(u),e.catch.forEach(u)}};for(let t of e)for(let e of ht(t))e.forEach(u);return{sources:t,mouse:n,at:r}}var Bt=[[`###`,`###`,`#@#`,`###`],[`.###.`,`#####`,`#####`,`##@##`,`#####`,`#####`],[`..###..`,`#######`,`#######`,`#######`,`###@###`,`#######`,`#######`,`#######`],[`..#####...`,`.#######..`,`#########.`,`##########`,`##########`,`####@#####`,`##########`,`##########`,`#########.`,`.#######..`,`......#...`],[`...#####....`,`..#######...`,`.#########..`,`###########.`,`############`,`############`,`#####@######`,`############`,`############`,`###########.`,`.#########..`,`..#######...`,`.......#....`],[`....#####.....`,`..#########...`,`.###########..`,`#############.`,`#############.`,`##############`,`##############`,`######@#######`,`##############`,`##############`,`#############.`,`#############.`,`.###########..`,`..#########...`,`........#.....`],[`.....#####......`,`...#########....`,`..###########...`,`.#############..`,`###############.`,`###############.`,`################`,`################`,`#######@########`,`################`,`################`,`###############.`,`###############.`,`.#############..`,`..###########...`,`...#########....`,`.........#......`],[`......#####.......`,`....#########.....`,`..#############...`,`.###############..`,`.###############..`,`#################.`,`#################.`,`##################`,`##################`,`########@#########`,`##################`,`##################`,`#################.`,`#################.`,`.###############..`,`.###############..`,`..#############...`,`....#########.....`,`..........#.......`],[`......#######.......`,`....###########.....`,`...#############....`,`..###############...`,`.#################..`,`###################.`,`###################.`,`####################`,`####################`,`####################`,`#########@##########`,`####################`,`####################`,`####################`,`###################.`,`###################.`,`.#################..`,`..###############...`,`...#############....`,`....###########.....`,`........#####.......`],[`.......#######........`,`.....###########......`,`....#############.....`,`..#################...`,`..#################...`,`.###################..`,`#####################.`,`#####################.`,`######################`,`######################`,`######################`,`##########@###########`,`######################`,`######################`,`######################`,`#####################.`,`#####################.`,`.###################..`,`..#################...`,`..#################...`,`....#############.....`,`.....###########......`,`.........#####........`],[`........#######.........`,`......###########.......`,`....###############.....`,`...#################....`,`..###################...`,`.#####################..`,`.#####################..`,`#######################.`,`#######################.`,`########################`,`########################`,`########################`,`###########@############`,`########################`,`########################`,`########################`,`#######################.`,`#######################.`,`.#####################..`,`.#####################..`,`..###################...`,`...#################....`,`....###############.....`,`......###########.......`,`..........#####.........`]],Vt=256,Ht=4294967296,Ut=2,Wt=[8,14,15,16,17,21,22,23],Gt={hp:16777215,shields:16777215,energy:255,kills:255,cooldown:255,resources:65535,stim:255,ensnare:255,plague:255,lockdown:255,maelstrom:255,irradiate:255,stasis:255,buildTime:65535,rank:255,matrix:255},Kt=class extends Error{},qt=class extends Error{},Jt=class extends Error{},Yt=new TextEncoder,Xt=e=>Yt.encode(e).length;function Zt(e){let t=4;for(;t<Math.floor(e/4)+2;)t*=2;return t}function Qt(e,t){let n=``,r=0;for(let i of e){let e=Xt(i);if(r+e>t)break;n+=i,r+=e}return n}function $t(e,t){let n=[...e],r=[...t];for(let e=0;e<n.length&&e<r.length;e++){let t=n[e].codePointAt(0)-r[e].codePointAt(0);if(t)return t}return n.length-r.length}var en=()=>({ids:new Set,vars:new Map,unitVars:new Map,textVars:new Map,arrays:new Map}),tn=class extends Map{ids;common;constructor(e,t){super(),this.ids=e,this.common=t}get(e){return this.ids.has(e)?this.common.get(e):super.get(e)}has(e){return this.ids.has(e)?this.common.has(e):super.has(e)}set(e,t){return this.ids.has(e)?this.common.set(e,t):super.set(e,t),this}},nn=class{vars;unitVars;textVars;bits=new Map;unsigned=new Set;latches=new Map;asDied=new Set;arrays=new class extends Map{run;get(e){let t=super.get(e);return t?.decl.through?this.run.inner(t.decl,e=>super.get(e)):t}};body;done=!1;steps=0;depth=0;apart=[];taskNow=0;thrownAt;pools=[];taskFrame=0;again=!1;sim;index;program;player;common;held;constructor(e,t,n,r,i=en()){this.held=new Set(gt(n).filter(e=>e.held).map(e=>e.id)),this.sim=e,this.index=t,this.program=n,this.player=r,this.common=i,this.vars=new tn(i.ids,i.vars),this.unitVars=new tn(i.ids,i.unitVars),this.textVars=new tn(i.ids,i.textVars),this.arrays.run=this;for(let e of n.arrays??[]){let t=(e.shared?i.arrays.get(e.id):void 0)??{decl:e,room:0,cells:e.values?[...e.values]:e.dynamic?[]:Array(e.length).fill(e.kind===`number`&&0)};e.shared&&i.arrays.set(e.id,t),this.arrays.set(e.id,t)}this.body=this.run();let a=gt(this.program),o=[];vt([n.body,n.functions??[]],e=>o.push(e)),o.sort((e,t)=>e.task-t.task);for(let e of o){let t=Array.from({length:e.max},()=>({exec:null,apart:[],gen:0,ran:0,vars:new Map,units:new Map,texts:new Map,arrays:new Map,latches:new Map}));this.pools.push({start:e,vars:a.filter(t=>t.task===e.task).map(e=>e.id),arrays:(n.arrays??[]).filter(t=>t.task===e.task),slots:t,said:!1})}}*run(){return yield*this.block(this.program.body,{}),`next`}tick(){if(this.steps=0,!this.done&&this.body)try{this.drive(this.body)&&(this.done=!0,this.body=null)}catch(e){if(this.apart.length=0,!(e instanceof qt))throw e;this.done=!0,this.body=null,this.depth=0}this.runTasks()}get tasksRunning(){return this.pools.some(e=>e.slots.some(e=>e.exec))}runTasks(){if(this.pools.length){this.taskFrame++;do{this.again=!1;for(let e of this.pools)for(let t of e.slots)!t.exec||t.ran===this.taskFrame||(t.ran=this.taskFrame,this.runSlot(e,t))}while(this.again)}}runSlot(e,t){let n=t.exec,r=this.apart,i=this.latches;this.taskNow=e.slots.indexOf(t)|e.start.task<<8|t.gen<<16,this.swap(e,t,!0),this.apart=t.apart,this.latches=t.latches;try{this.drive(n)&&(t.exec=null,t.apart.length=0)}catch(e){if(t.apart.length=0,!(e instanceof qt))throw e;t.exec=null,this.depth=0}finally{this.taskNow=0,this.apart=r,this.latches=i,this.swap(e,t,!1)}}swap(e,t,n){let r=(e,t,r)=>{n?t.has(r)?e.set(r,t.get(r)):e.delete(r):(e.has(r)?t.set(r,e.get(r)):t.delete(r),e.delete(r))};for(let n of e.vars)r(this.vars,t.vars,n),r(this.unitVars,t.units,n),r(this.textVars,t.texts,n);for(let r of e.arrays)if(n)this.arrays.set(r.id,t.arrays.get(r.id)??this.newHeld(r));else{let e=this.arrays.get(r.id);e&&t.arrays.set(r.id,e)}}newHeld(e){return{decl:e,room:0,cells:e.values?[...e.values]:e.dynamic?[]:Array(e.length).fill(e.kind===`number`&&0)}}taskOf(e){let t=this.pools.find(t=>t.start.task===(e>>>8&255)),n=t?.slots[e&255];return t&&n?.exec&&n.gen===e>>>16?{pool:t,slot:n}:void 0}drive(e){let t,n;for(;;){let r=this.apart[this.apart.length-1]??e,i;try{i=n?r.throw(n):r.next(t)}catch(e){if(!(e instanceof Jt)||!this.apart.length)throw e;this.apart.pop(),n=e;continue}if(n=void 0,t=void 0,i.done){if(!this.apart.length)return!0;this.apart.pop(),t=i.value}else if(i.value===void 0)return!1;else this.apart.push(i.value.run)}}step(){if(++this.steps>this.sim.maxSteps)throw new Kt(`A program ran more than ${this.sim.maxSteps} statements in one frame: is there a loop with no sleep() in it?`)}read(e,t){let n=this.vars.get(e);if(n===void 0&&this.held.has(e))return 0;if(n===void 0)throw Error(`The variable ${e} was read before it was declared${t?` (line ${t.line})`:``}.`);return n}store(e,t){if(typeof t==`number`){let n=this.bits.get(e);this.vars.set(e,n?Math.min(t>>>0,2**n-1):this.unsigned.has(e)?t>>>0:t|0)}else this.vars.set(e,t)}kept(e,t){return typeof e==`number`?t.bits?Math.min(e>>>0,2**t.bits-1):t.unsigned?e>>>0:e|0:e}*cell(e,t,n,r){let i=this.arrays.get(e);if(!i)throw Error(`The array ${e} is not one of the program's (line ${n.line}).`);let a=yield*this.num(t);if(i.decl.slice){let e=this.arrays.get(i.decl.slice.of);if(!e)throw Error(`The array ${i.decl.slice.of} is not one of the program's (line ${n.line}).`);let t=(Number(this.read(i.decl.slice.offset))|0)+a;if(a>=0&&a<i.decl.length&&t>=0&&t<(e.decl.dynamic?e.cells.length:e.decl.length))return{decl:i.decl,cells:e.cells,i:t};this.sim.faults.push({cycle:this.sim.cycle,frame:this.sim.frame,program:this.index,at:n,message:`${i.decl.name}[${a}] is past the end of the row (its length is ${i.decl.length}): ${r}.`});return}let o=i.decl.dynamic?i.cells.length:i.decl.length;if(a>=0&&a<o)return{...i,i:a};this.sim.faults.push({cycle:this.sim.cycle,frame:this.sim.frame,program:this.index,at:n,message:`${i.decl.name}[${a}] is past the end of the array (its length is ${o}): ${r}.`})}grow(e,t,n){if(t<=e.room)return!0;let r=Math.max(e.room,4);for(;r<t;)r*=2;return this.sim.heap.take(r)?(e.room&&this.sim.heap.give(e.room),e.room=r,!0):(this.sim.faults.push({cycle:this.sim.cycle,frame:this.sim.frame,program:this.index,at:n,message:`Out of memory: ${e.decl.name} could not grow to ${t} cells (the heap the programs' arrays share is ${this.sim.heap.cells} cells; the script's settings set it).`}),!1)}inner(e,t,n=!1){let r=()=>({decl:e,cells:[],room:0}),i=t(e.through.ptr),a=Number(this.read(e.through.index))|0;if(!i||a<0||a>=i.cells.length)return r();let o=Number(i.cells[a]);if(n){let e=this.sim.inner.get(o);return e?.room&&this.sim.heap.give(e.room),this.sim.inner.delete(o),i.cells[a]=0,r()}if(!o){let t={decl:e,cells:[],room:0};return i.cells[a]=++this.sim.lastInner,this.sim.inner.set(this.sim.lastInner,t),t}let s=this.sim.inner.get(o);return s?(s.decl=e,s):(this.sim.faults.push({cycle:this.sim.cycle,frame:this.sim.frame,program:this.index,at:e.at,message:`${e.name} was given back — the row that held it was popped, cut off or declared again — and this is a copy of its handle: in the game it reads whatever has the block now.`}),r())}declare(e){if(e.shared&&this.program.perPlayer&&this.common.ids.add(e.id),e.kind===`unit`){this.unitVars.set(e.id,null);return}if(e.kind===`text`){this.textVars.has(e.id)||this.textVars.set(e.id,{s:``,room:0});return}e.bits&&this.bits.set(e.id,e.bits),e.unsigned&&this.unsigned.add(e.id),this.vars.set(e.id,e.kind===`number`&&0)}*unit(e){switch(e.kind){case`unitNull`:return null;case`unitVar`:return this.unitVars.get(e.id)??null;case`pick`:return this.sim.pick(e.by,e.filter,e.near,e.mouse,e.within);case`unitAt`:{let t=(yield*this.num(e.ptr))>>>0;yield*this.num(e.epd);let n=(yield*this.num(e.uid))>>>0;return t>=1?this.sim.game.at(t-1,n):null}case`call`:return yield*this.call(e.call),e.call.result?this.unitVars.get(e.call.result.decl.id)??null:null;case`selected`:return this.sim.selectedUnit(e.index)}}*living(e){let t=yield*this.unit(e);return t&&e.kind===`unitVar`&&this.asDied.has(e.id)||t?.alive?t:null}*unitDo(e,t,n){let i=yield*this.living(e),a=t.do===`damage`||t.do===`heal`?yield*this.amount(t.amount):0;if(i)switch(t.do){case`kill`:case`remove`:this.sim.game.gone(i,t.do===`kill`,void 0,!1),this.sim.unitEvent(this,t.do===`kill`?r.KillUnit:r.RemoveUnit,i,n);break;case`give`:{let e=this.sim.slotOf(t.to);e<12&&this.sim.game.setOwner(i,e);break}case`order`:i.orderId=ge[t.order],this.sim.unitEvent(this,r.Order,i,n,{location:t.target,text:t.order});break;case`locate`:this.sim.centre(t.location,i.x,i.y);break;case`damage`:case`heal`:{let e=t.percent?Math.floor(i.maxHp*256*a/100):a*256,o=t.do===`damage`?Math.max(0,i.hp*256-e):Math.min(i.maxHp*256,i.hp*256+e);i.hp=Math.ceil(o/256),i.hp===0&&(this.sim.game.gone(i,!0,void 0,!1),this.sim.unitEvent(this,r.KillUnit,i,n));break}}}*num(e){switch(e.kind){case`const`:return e.value|0;case`var`:return Number(this.read(e.id))|0;case`element`:{let t=yield*this.cell(e.array,e.index,e.at,`it reads 0`);return t?Number(t.cells[t.i])|0:0}case`length`:return this.arrays.get(e.array)?.cells.length??0;case`taskHandle`:return this.taskNow;case`pop`:return Number(this.arrays.get(e.array)?.cells.pop()??0)|0;case`unary`:return-(yield*this.num(e.expr))|0;case`cast`:return yield*this.num(e.expr);case`binary`:{let t=yield*this.num(e.left),n=yield*this.num(e.right);switch(e.op){case`+`:return t+n|0;case`-`:return t-n|0;case`*`:return Math.imul(t,n);case`/`:return n===0?0:e.unsigned?Math.floor((t>>>0)/(n>>>0))|0:t/n|0;case`%`:return n===0?0:e.unsigned?(t>>>0)%(n>>>0)|0:t%n|0;case`&`:return t&n;case`|`:return t|n;case`^`:return t^n;case`<<`:return n>>>0>=32?0:t<<n;case`>>`:return n>>>0>=32?t<0?-1:0:t>>n;case`>>>`:return n>>>0>=32?0:t>>>n|0}return 0}case`read`:return this.sim.read(e.read)|0;case`unitField`:{let t=yield*this.living(e.unit);return t?t[e.field]|0:0}case`unitPart`:{let t=yield*this.unit(e.unit);return t?e.part===`uid`?t.uid:t.slot+1:0}case`tableRead`:return this.sim.tableRead(e.cell)|0;case`input`:return this.sim.input(e.input)|0;case`randomInt`:{let t=(yield*this.num(e.bound))>>>0;return t===0?0:Math.min(t-1,Math.floor(this.sim.random()*t))|0}case`ternary`:return(yield*this.bool(e.cond))?yield*this.num(e.whenTrue):yield*this.num(e.whenFalse);case`intrinsic`:{let t=[];for(let n of e.args)t.push(yield*this.num(n));if(e.name===`abs`)return Math.abs(t[0])|0;if(e.name===`fmul`)return Be(t[0],t[1]);if(e.name===`fdiv`)return Ve(t[0],t[1]);if(e.name===`sqrt`)return Ue(t[0],!!e.unsigned);if(e.name===`atan2`||e.name===`sin`||e.name===`cos`){let n=(this.arrays.get(e.table??``)?.cells??[]).map(e=>Number(e)|0);return e.name===`atan2`?qe(t[0],t[1],n):Je(t[0],t[1],n,e.name===`cos`)}let n=e.unsigned?t.map(e=>e>>>0):t;return(e.name===`min`?Math.min(...n):Math.max(...n))|0}case`call`:return Number(yield*this.call(e.call))|0;case`textLength`:{let t=yield*this.text(e.of);return this.used(t),[...t.s].length}case`textIndexOf`:{let t=yield*this.text(e.of),n=yield*this.text(e.find),r=e.from?Math.max(0,yield*this.num(e.from)):0;this.used(t,n);let i=[...t.s],a=t.s.indexOf(n.s,i.slice(0,r).join(``).length);return a<0||r>i.length?n.s===``&&r<=i.length?r:-1:[...t.s.slice(0,a)].length}case`textCode`:{let t=yield*this.text(e.of),n=yield*this.num(e.index);return this.used(t),[...t.s][n]?.codePointAt(0)??-1}}}made(e,t,n=Xt(e)){Xt(e)>1023&&(this.sim.faults.push({cycle:this.sim.cycle,frame:this.sim.frame,program:this.index,at:t,message:`This text came to ${n.toLocaleString(`en-US`)} bytes, and a text that is made holds ${st.toLocaleString(`en-US`)}: it is cut off there, as it is in the game.`}),e=Qt(e,st));let r=Zt(Xt(e));return this.sim.heap.take(r)?{s:e,room:r,taken:!0}:(this.sim.faults.push({cycle:this.sim.cycle,frame:this.sim.frame,program:this.index,at:t,message:`Out of memory: no room for this text (the heap the programs' arrays and texts share is ${this.sim.heap.cells} cells; the script's settings set it). It is empty instead, as it is in the game.`}),{s:``,room:0,taken:!0})}used(...e){for(let t of e)t.taken&&t.room&&this.sim.heap.give(t.room)}owned(e,t){if(e.taken||!e.room)return{s:e.s,room:e.room};let n=this.made(e.s,t);return{s:n.s,room:n.room}}*parts(e,t){let n=``;for(let r of e)if(r.kind===`number`)n+=r.fixed?Ye(yield*this.num(r.expr)):String(r.unsigned?yield*this.amount(r.expr):yield*this.num(r.expr));else if(r.kind===`char`){let e=(yield*this.num(r.expr))&255;e&&(n+=String.fromCharCode(e))}else if(r.kind===`value`){let e=yield*this.text(r.text);t.push(e),n+=e.s}else n+=this.sim.partText(r);return n}*text(e){switch(e.kind){case`text`:return{s:e.text,room:0,taken:!0};case`textVar`:{let t=this.textVars.get(e.id);if(!t)throw Error(`The variable ${e.id} was read before it was declared.`);return{...t,taken:!1}}case`textAt`:{let t=yield*this.cell(e.addr,e.index,e.at,`it reads as no text`),n=t?this.cellTexts.get(t.cells[t.i]):void 0;return{s:n?.s??``,room:n?.room??0,taken:!1}}case`textOf`:{let t=this.arrays.get(e.array),n=yield*this.num(e.index),r=t?.decl.texts?.[n];return r===void 0&&this.sim.faults.push({cycle:this.sim.cycle,frame:this.sim.frame,program:this.index,at:e.at,message:`${t?.decl.name??e.array}[${n}] is past the end of the list (its length is ${t?.decl.texts?.length??0}): it reads an empty text.`}),{s:r??``,room:0,taken:!0}}case`template`:{let t=[],n=yield*this.parts(e.parts,t),r=this.made(n,e.at);return this.used(...t),r}case`textTernary`:{let t=(yield*this.bool(e.cond))?yield*this.text(e.whenTrue):yield*this.text(e.whenFalse);return{...this.owned(t,e.at),taken:!0}}case`textSlice`:{let t=yield*this.text(e.of),n=[...t.s],r=e.start?Math.min(n.length,Math.max(0,yield*this.num(e.start))):0,i=e.end?Math.min(n.length,Math.max(0,yield*this.num(e.end))):n.length,a=this.made(n.slice(r,Math.max(r,i)).join(``),e.at);return this.used(t),a}case`textPad`:{let t=yield*this.text(e.of),n=yield*this.num(e.width),r=yield*this.text(e.with),i=[...t.s],a=[...r.s],o=``;if(a.length)for(let e=0;i.length+e<n;e++)o+=a[e%a.length];let s=this.made(e.side===`start`?o+t.s:t.s+o,e.at);return this.used(t,r),s}case`textRepeat`:{let t=yield*this.text(e.of),n=yield*this.num(e.count),r=this.made(n>=1?t.s.repeat(Math.min(n,Math.ceil((st+1)/Math.max(1,Xt(t.s))))):``,e.at,Math.max(0,n)*Xt(t.s));return this.used(t),r}case`built`:return{s:this.sim.buffers.get(e.buffer)??``,room:0,taken:!1};case`textCall`:{yield*this.call(e.call);let t=e.call.result?this.textVars.get(e.call.result.decl.id):void 0;if(!t)return{s:``,room:0,taken:!0};let n={...t,taken:!0};return t.room=0,n}}}cellTexts=new Map;lastCellText=0;releaseCellText(e){let t=e?this.cellTexts.get(e):void 0;t&&(t.room&&this.sim.heap.give(t.room),this.cellTexts.delete(e))}*putText(e,t,n){let r=this.owned(yield*this.text(t),n),i=this.textVars.get(e);i?.room&&this.sim.heap.give(i.room),this.textVars.set(e,r)}shown(e,t,n){return!e.room||Xt(e.s)<=255?e.s:(this.sim.faults.push({cycle:this.sim.cycle,frame:this.sim.frame,program:this.index,at:t,message:`This text is ${Xt(e.s)} bytes, and ${n} shows 255 of a text that was made: it is cut off there, as it is in the game.`}),Qt(e.s,255))}*amount(e){return(yield*this.num(e))>>>0}*bool(e){switch(e.kind){case`const`:return e.value;case`cond`:return this.sim.condition(e.record);case`var`:return!!this.read(e.id);case`element`:{let t=yield*this.cell(e.array,e.index,e.at,`it reads false`);return t?!!t.cells[t.i]:!1}case`pop`:return!!(this.arrays.get(e.array)?.cells.pop()??!1);case`test`:return(yield*this.num(e.expr))!==0;case`compare`:{let t=yield*this.num(e.left),n=yield*this.num(e.right);switch((e.unsigned===!0||e.unsigned===`left`)&&(t>>>=0),(e.unsigned===!0||e.unsigned===`right`)&&(n>>>=0),e.op){case`<`:return t<n;case`<=`:return t<=n;case`>`:return t>n;case`>=`:return t>=n;case`==`:return t===n;case`!=`:return t!==n}return!1}case`and`:for(let t of e.items)if(!(yield*this.bool(t)))return!1;return!0;case`or`:for(let t of e.items)if(yield*this.bool(t))return!0;return!1;case`not`:return!(yield*this.bool(e.expr));case`random`:return this.sim.random()<.5;case`unitAlive`:return(yield*this.living(e.unit))!==null;case`unitSame`:{let t=yield*this.unit(e.left),n=yield*this.unit(e.right);return t!==null&&t===n}case`unitFlag`:{let t=yield*this.living(e.unit);return t?t[e.flag]:!1}case`edge`:{let t=yield*this.bool(e.cond),n=this.latches.get(e)??!1;return t?!n&&(this.latches.set(e,!0),!0):(e.edge===`rose`&&this.latches.set(e,!1),!1)}case`ternary`:return(yield*this.bool(e.cond))?yield*this.bool(e.whenTrue):yield*this.bool(e.whenFalse);case`running`:return!!this.taskOf((yield*this.num(e.task))>>>0);case`call`:return!!(yield*this.call(e.call));case`textCompare`:{let t=yield*this.text(e.left),n=yield*this.text(e.right);this.used(t,n);let r=$t(t.s,n.s);return e.op===`==`?r===0:e.op===`!=`?r!==0:e.op===`<`?r<0:e.op===`<=`?r<=0:e.op===`>`?r>0:r>=0}case`textTest`:{let t=yield*this.text(e.of),n=yield*this.text(e.find);return this.used(t,n),e.test===`startsWith`?t.s.startsWith(n.s):e.test===`endsWith`?t.s.endsWith(n.s):t.s.includes(n.s)}}}*init(e,t){return t===`number`?yield*this.num(e):yield*this.bool(e)}*put(e,t,n){if(e.kind===`text`||lt(t)){yield*this.putText(e.id,t,n??e.at??{file:``,line:0,column:0});return}e.kind===`unit`?this.unitVars.set(e.id,yield*this.unit(t)):this.store(e.id,yield*this.init(t,e.kind))}*taskBody(e){e.result&&this.declare(e.result.decl);let t=yield*this.block(e.body,{fn:{result:e.result?.decl}});if(t===`break`||t===`continue`)throw Error(`${t} inside a task reached its end (line ${e.at.line}).`);return`next`}*call(e){e.result&&this.declare(e.result.decl);let t=e.fn?this.program.functions?.find(t=>t.id===e.fn):void 0;if(e.fn&&!t)throw Error(`The function ${e.fn} is not one of the program's (line ${e.at.line}).`);let n;if(t){let t=[];for(let n of e.params)t.push(n.decl.kind===`unit`?yield*this.unit(n.init):n.decl.kind===`text`?this.owned(yield*this.text(n.init),e.at):yield*this.init(n.init,n.decl.kind));e.saves&&(n=this.keep(e)),e.params.forEach((e,n)=>{if(this.declare(e.decl),e.decl.kind===`unit`)this.unitVars.set(e.decl.id,t[n]);else if(e.decl.kind===`text`){let r=this.textVars.get(e.decl.id);r?.room&&this.sim.heap.give(r.room),this.textVars.set(e.decl.id,t[n])}else this.store(e.decl.id,t[n])})}else for(let t of e.params)this.declare(t.decl),yield*this.put(t.decl,t.init);let r={fn:{result:e.result?.decl}},i;try{i=n&&t?yield{run:this.block(t.body,r)}:yield*this.block(t?t.body:e.body,r)}catch(e){throw n&&e instanceof Jt&&this.bringBack(n),e}if(i===`break`||i===`continue`)throw Error(`${i} inside a function reached its end (line ${e.at.line}).`);return n&&this.bringBack(n),e.result&&e.result.kind!==`unit`&&e.result.kind!==`text`?this.read(e.result.decl.id):0}keep(e){let t=e.saves;if(this.depth>=this.sim.stackDepth&&this.program.errors){this.store(this.program.errors.thrown,pt.RangeError);let t=this.textVars.get(this.program.errors.message);throw t?.room&&this.sim.heap.give(t.room),this.textVars.set(this.program.errors.message,{s:mt,room:0}),this.thrownAt=e.at,new Jt}if(this.depth>=this.sim.stackDepth)throw this.sim.faults.push({cycle:this.sim.cycle,frame:this.sim.frame,program:this.index,at:e.at,message:`Stack overflow in ${t.within}: ${this.sim.stackDepth.toLocaleString(`en-US`)} calls deep, which is as deep as the script's settings allow. The program has stopped, as it does in the game.`}),new qt;this.depth++;let n={vars:[],units:[],texts:[],arrays:[]};for(let e of t.vars)this.textVars.has(e)?(n.texts.push([e,this.textVars.get(e)]),this.textVars.set(e,{s:``,room:0})):this.unitVars.has(e)?n.units.push([e,this.unitVars.get(e)??null]):this.vars.has(e)&&n.vars.push([e,this.vars.get(e)]);for(let e of t.arrays){let t=this.arrays.get(e);t&&(n.arrays.push({a:t,cells:t.cells,room:t.room}),t.cells=[],t.room=0)}return n}bringBack(e){for(let[t,n]of e.vars)this.vars.set(t,n);for(let[t,n]of e.units)this.unitVars.set(t,n);for(let[t,n]of e.texts){let e=this.textVars.get(t);e?.room&&this.sim.heap.give(e.room),this.textVars.set(t,n)}for(let t of e.arrays)t.a.room&&this.sim.heap.give(t.a.room),t.a.cells=t.cells,t.a.room=t.room;this.depth--}*block(e,t){for(let n of e){let e=yield*this.stmt(n,t);if(e!==`next`)return e}return`next`}*stmt(e,t){switch(this.step(),e.kind){case`declare`:return this.declare(e.decl),e.failed||(yield*this.put(e.decl,e.init)),`next`;case`assignUnit`:return this.unitVars.set(e.target,yield*this.unit(e.value)),`next`;case`assignText`:return yield*this.putText(e.target,e.value,e.at),`next`;case`storeText`:{let t=this.owned(yield*this.text(e.value),e.at),n=yield*this.num(e.index),r=[e.addr,e.block,e.chars].map(e=>this.arrays.get(e));if(r.some(e=>!e||n<0||n>=e.cells.length))return this.sim.faults.push({cycle:this.sim.cycle,frame:this.sim.frame,program:this.index,at:e.at,message:`${r[0]?.decl.name??e.addr}[${n}] is past the end of the array (its length is ${r[0]?.cells.length??0}): nothing is stored.`}),t.room&&this.sim.heap.give(t.room),`next`;let[i,a,o]=r;this.releaseCellText(a.cells[n]);let s=++this.lastCellText;return this.cellTexts.set(s,t),i.cells[n]=s,a.cells[n]=t.room?s:0,o.cells[n]=[...t.s].length,`next`}case`releaseText`:{let t=yield*this.cell(e.block,e.index,e.at,`nothing is given back`);return t&&(this.releaseCellText(t.cells[t.i]),t.cells[t.i]=0),`next`}case`textLoop`:{this.declare(e.decl);let n=this.owned(yield*this.text(e.of),e.at),r=`next`;try{for(let i of n.s){let n=this.textVars.get(e.decl.id),a=this.made(i,e.at);if(n?.room&&this.sim.heap.give(n.room),this.textVars.set(e.decl.id,{s:a.s,room:a.room}),r=yield*this.block(e.body,t),r===`break`||r===`return`)break}}catch(e){throw e instanceof Jt&&n.room&&this.sim.heap.give(n.room),e}return n.room&&this.sim.heap.give(n.room),r===`return`?r:`next`}case`unitLoop`:{this.declare(e.decl);let n=e.source===`died`||e.source===`killed`;n&&this.asDied.add(e.decl.id),e.was&&this.declare(e.was);for(let{u:r,was:i}of e.source?this.sim.eventUnits(e.source,e.filter,e.event):this.sim.matching(e.filter).map(e=>({u:e,was:0}))){if(!n&&!r.alive)continue;this.unitVars.set(e.decl.id,r),e.was&&this.store(e.was.id,i);let a=yield*this.block(e.body,t);if(a===`break`)break;if(a===`return`)return a}return`next`}case`unitWrite`:{let t=yield*this.living(e.unit),n=e.field;if(ot.includes(n)){let r=yield*this.bool(e.value);return t&&(t[n]=r),`next`}let i=yield*this.amount(e.value);return t?(t[n]=Math.min(i,Gt[n]??4294967295),n===`hp`&&t.hp===0&&(this.sim.game.gone(t,!0,void 0,!1),this.sim.unitEvent(this,r.KillUnit,t,e.at)),`next`):`next`}case`unitDo`:return yield*this.unitDo(e.unit,e.verb,e.at),`next`;case`tableWrite`:{if(lt(e.value)){let t=yield*this.text(e.value);return this.sim.tableWrite(e.cell,0,!1,this.shown(t,e.at,`a unit type's name`)),this.used(t),`next`}let t=e.boolean?(yield*this.bool(e.value))?1:0:yield*this.amount(e.value);return this.sim.tableWrite(e.cell,t,e.scaled===!0),`next`}case`assign`:return this.store(e.target,yield*this.num(e.value)),`next`;case`declareArray`:{let t=this.arrays.get(e.array);if(!t)throw Error(`The array ${e.array} is not one of the program's (line ${e.at.line}).`);let n=function*(e,n){return t.decl.kind===`number`?yield*e.num(n):yield*e.bool(n)};if(t.decl.through){this.inner(t.decl,e=>Map.prototype.get.call(this.arrays,e),!0);let r=[];for(let i of e.init??[])r.push(this.kept(yield*n(this,i),t.decl));if(r.length){let t=this.arrays.get(e.array);this.grow(t,r.length,e.at)&&t.cells.push(...r)}return`next`}if(t.decl.dynamic){t.room&&=(this.sim.heap.give(t.room),0),t.cells.length=0;let r=[];if(e.fill){let i=this.kept(yield*n(this,e.fill),t.decl);for(let e=0;e<t.decl.length;e++)r.push(i)}else for(let i of e.init??[])r.push(this.kept(yield*n(this,i),t.decl));return(r.length===0||this.grow(t,r.length,e.at))&&t.cells.push(...r),`next`}if(e.fill){let r=this.kept(yield*n(this,e.fill),t.decl);t.cells.fill(r)}else for(let r=0;r<t.decl.length;r++)t.cells[r]=this.kept(e.init?.[r]?yield*n(this,e.init[r]):t.decl.kind===`number`&&0,t.decl);return`next`}case`push`:{let t=this.arrays.get(e.array);if(!t)throw Error(`The array ${e.array} is not one of the program's (line ${e.at.line}).`);let n=t.decl.kind===`boolean`?yield*this.bool(e.value):yield*this.num(e.value);return this.grow(t,t.cells.length+1,e.at)&&t.cells.push(this.kept(n,t.decl)),`next`}case`pop`:return this.arrays.get(e.array)?.cells.pop(),`next`;case`setLength`:{let t=this.arrays.get(e.array),n=yield*this.amount(e.value);return t&&n<t.cells.length&&(t.cells.length=n),`next`}case`store`:{let t=this.arrays.get(e.array),n=t?.decl.kind===`boolean`?yield*this.bool(e.value):yield*this.num(e.value);if(t?.decl.dynamic){let r=yield*this.num(e.index);return r===t.cells.length?(this.grow(t,r+1,e.at)&&t.cells.push(this.kept(n,t.decl)),`next`):(r>=0&&r<t.cells.length?t.cells[r]=this.kept(n,t.decl):this.sim.faults.push({cycle:this.sim.cycle,frame:this.sim.frame,program:this.index,at:e.at,message:`${t.decl.name}[${r}] is past the end of the array (its length is ${t.cells.length}): nothing is stored.`}),`next`)}let r=yield*this.cell(e.array,e.index,e.at,`nothing is stored`);return r&&(r.cells[r.i]=this.kept(n,r.decl)),`next`}case`assignBool`:return this.store(e.target,yield*this.bool(e.value)),`next`;case`if`:return(yield*this.bool(e.cond))?yield*this.block(e.then,t):e.else?yield*this.block(e.else,t):`next`;case`while`:for(;;){if(e.cond&&!(yield*this.bool(e.cond)))return`next`;let n=yield*this.block(e.body,t);if(n===`break`)return`next`;if(n===`return`)return n}case`do`:for(;;){let n=yield*this.block(e.body,t);if(n===`break`)return`next`;if(n===`return`)return n;if(!(yield*this.bool(e.cond)))return`next`}case`for`:for(;;){if(e.cond&&!(yield*this.bool(e.cond)))return`next`;let n=yield*this.block(e.body,t);if(n===`break`)return`next`;if(n===`return`)return n;let r=yield*this.block(e.update,t);if(r===`return`)return r}case`unrolled`:for(let n of e.iterations){let e=yield*this.block(n,t);if(e===`break`)return`next`;if(e===`return`)return e}return`next`;case`switch`:{let n=yield*this.num(e.value),r=e.cases.findIndex(e=>e.value!==null&&(e.value|0)===n);if(r<0&&(r=e.cases.findIndex(e=>e.value===null)),r<0)return`next`;for(let n=r;n<e.cases.length;n++){let r=yield*this.block(e.cases[n].body,t);if(r===`break`)return`next`;if(r!==`next`)return r}return`next`}case`break`:return`break`;case`continue`:return`continue`;case`return`:return e.value&&t.fn?.result&&(yield*this.put(t.fn.result,e.value,e.at)),`return`;case`sleep`:{let t=e.cycles??Math.max(1,Math.round((e.ms??0)/1e3*24));for(let e=0;e<t;e++)yield;return`next`}case`parallel`:{let t=e.branches.map(e=>this.block(e,{})),n=t.map(()=>!1);for(;;){for(let r=0;r<t.length;r++){if(n[r])continue;let i,a;for(;;){let e=a?t[r].throw(a):t[r].next(i);if(i=void 0,a=void 0,e.done){n[r]=!0;break}if(e.value===void 0)break;try{i=yield e.value}catch(e){if(!(e instanceof Jt))throw e;a=e}}if(n[r]&&e.mode===`race`)return`next`}if(n.every(Boolean))return`next`;yield}}case`action`:{let t={...e.record};for(let n of e.variables??[])t[n.field]=yield*this.amount(n.expr);if(e.text){let n=yield*this.text(e.text);return this.sim.act(this,t,e.at,this.shown(n,e.at,`this action`)),this.used(n),`next`}return this.sim.act(this,t,e.at),`next`}case`print`:{let t=[],n=yield*this.parts(e.parts,t);return this.used(...t),this.sim.print(this,n,e.to,e.at),`next`}case`buildText`:{let t=[],n=yield*this.parts(e.parts,t);this.used(...t);let r=e.reset?``:this.sim.buffers.get(e.buffer)??``,i=r+n;return Xt(i)>2047&&(Xt(r)<=2047&&this.sim.faults.push({cycle:this.sim.cycle,frame:this.sim.frame,program:this.index,at:e.at,message:`This text came to more than the ${Xe.toLocaleString(`en-US`)} bytes a text put together piece by piece holds: it is cut off there, as it is in the game.`}),i=Qt(i,Xe)),this.sim.buffers.set(e.buffer,i),`next`}case`select`:{let t=[];for(let n of e.units){let e=yield*this.unit(n);e?.alive&&t.length<12&&t.push(e)}return this.sim.selectUnits(t,this.sim.slotOf(e.player)),`next`}case`syncSend`:{this.sim.readAt(e.player);let t;try{t=yield*this.num(e.value)}finally{this.sim.readAt(null)}return this.sim.syncSend(e.slot,e.player,t),`next`}case`centerLocation`:{let t=yield*this.amount(e.x),n=yield*this.amount(e.y),r=e.size?{width:yield*this.amount(e.size.width),height:yield*this.amount(e.size.height)}:void 0;return this.sim.centre(e.location,t,n,r),`next`}case`start`:{let t=this.pools.find(t=>t.start===e);if(!t)throw Error(`The start of task ${e.task} is not one of the program's (line ${e.at.line}).`);let n=[];for(let t of e.call.params)n.push(t.decl.kind===`unit`?yield*this.unit(t.init):t.decl.kind===`text`?this.owned(yield*this.text(t.init),e.at):this.kept(yield*this.init(t.init,t.decl.kind),t.decl));let r=t.slots.findIndex(e=>!e.exec);if(r<0){for(let e of n)e&&typeof e==`object`&&`room`in e&&e.room&&this.sim.heap.give(e.room);return t.said||this.sim.faults.push({cycle:this.sim.cycle,frame:this.sim.frame,program:this.index,at:e.at,message:`${e.call.name??`The task`} did not start: all ${e.max} of this start's tasks are running. start(…, { max: … }) lets more run at once.`}),t.said=!0,e.handle&&this.store(e.handle,0),`next`}let i=t.slots[r];return i.gen=i.gen>=65535?1:i.gen+1,e.call.params.forEach((e,t)=>{if(this.declare(e.decl),e.decl.kind===`unit`)i.units.set(e.decl.id,n[t]);else if(e.decl.kind===`text`){let r=i.texts.get(e.decl.id);r?.room&&this.sim.heap.give(r.room),i.texts.set(e.decl.id,n[t])}else i.vars.set(e.decl.id,n[t]);this.vars.delete(e.decl.id),this.unitVars.delete(e.decl.id),this.textVars.delete(e.decl.id)}),i.exec=this.taskBody(e.call),i.apart=[],i.ran=0,this.again=!0,e.handle&&this.store(e.handle,r|e.task<<8|i.gen<<16),`next`}case`cancel`:{let t=this.taskOf((yield*this.num(e.task))>>>0);return t&&(t.slot.exec=null,t.slot.apart.length=0),`next`}case`call`:return yield*this.call(e.call),`next`;case`block`:return yield*this.block(e.body,t);case`try`:try{return yield*this.block(e.body,t)}catch(n){if(!(n instanceof Jt))throw n;return yield*this.block(e.catch,t)}case`throw`:throw e.rethrow||(this.thrownAt=e.at),new Jt;case`uncaught`:{let t=this.program.errors;if(!t)throw Error(`An uncaught error, but the program keeps none (line ${e.at.line}).`);let n=this.read(t.thrown),r=this.arrays.get(t.names),i=r?.decl.texts?.[r.cells[n]]||`Error`,a=this.textVars.get(t.message)?.s??``,o=this.thrownAt??e.at;return this.sim.faults.push({cycle:this.sim.cycle,frame:this.sim.frame,program:this.index,at:o,message:`Uncaught ${i}${a?`: ${a}`:``}`}),this.sim.print(this,`\x06TrigScript: uncaught ${i}: ${a}, line ${o.line}.`,13,e.at),this.store(t.thrown,0),`next`}case`remark`:return`next`;case`textBlock`:case`showText`:case`watch`:throw Error(`the simulator does not run a ${e.kind}`)}}unitValue(e){let t=null;for(let[n,r]of[...this.unitVars,...this.common.unitVars])(n===e||n.startsWith(`${e}#`))&&(t=r);return t?.alive?t:null}value(e){let t;for(let[n,r]of[...this.vars,...this.common.vars])(n===e||n.startsWith(`${e}#`))&&(t=r);return t}textValue(e){let t;for(let[n,r]of[...this.textVars,...this.common.textVars])(n===e||n.startsWith(`${e}#`))&&(t=r.s);return t}lookup(e){let t=this.value(e);if(t!==void 0)return t;let n=this.textValue(e);if(n!==void 0)return n;let r=this.list(e);if(r!==void 0)return[...r];for(let t of[...this.unitVars.keys(),...this.common.unitVars.keys()])if(t===e||t.startsWith(`${e}#`))return this.unitValue(e);let i=t=>t.startsWith(`${e}.`)?t.slice(e.length+1).split(`#`)[0]:null,a={};for(let[e,t]of[...this.vars,...this.common.vars]){let n=i(e);n&&!n.includes(` (`)&&(a[n]=t)}for(let[e,t]of[...this.textVars,...this.common.textVars]){let n=i(e);n&&(a[n]=t.s)}if(Object.keys(a).length)return a;let o=[];for(let[e,t]of this.arrays){let n=i(e);n&&t.cells.forEach((e,t)=>{(o[t]??={})[n]=e})}return o.length?o:void 0}list(e){let t;for(let[n,r]of this.arrays)(n===e||n.startsWith(`${e}#`))&&(t=r.cells);return t}},rn=class{world;runs;events=[];faults=[];inner=new Map;lastInner=0;buffers=new Map;heap={cells:Ze,top:1,stack:Ze,free:new Map,take(e){let t=this.free.get(e)??0;return t>0?(this.free.set(e,t-1),!0):this.top+e>this.stack?!1:(this.top+=e,!0)},give(e){this.free.set(e,(this.free.get(e)??0)+1)}};stackDepth=nt;maxSteps;random;conditionOf;readOf;nameOf;colorOf;game;tables=new Map;tableOf;resources=new Map;chats=[];unitByName;queued={events:new Set,lines:new Map};current=this.queued;down=new Set;downNow=new Set;lastDown=new Map;heldKeys=!1;mice=new Map;cameras=new Map;synced=new Map;sending=[];cycle=0;shared;get frame(){return this.shared?this.world.frame:this.cycle+1}constructor(e,t){if(this.world=t.world??new Fe([],{player:t.player??(t.players?void 0:e[0]?.owner??0),condition:t.condition,random:t.random,strings:t.strings,players:t.players,forces:t.forces,units:t.units,locations:t.locations,unitClass:t.unitClass,properties:t.properties}),this.game=this.world.game,this.shared=t.world!==void 0,t.world){for(let[e,n]of Object.entries(t.locations??{}))this.game.locations.set(Number(e),{...n});for(let e of t.units??[])this.game.make(e)}this.maxSteps=t.maxStepsPerCycle??1e5,this.heap.cells=this.heap.stack=tt(t.heapCells),this.stackDepth=at(t.stackDepth),this.random=t.random??Math.random,this.conditionOf=t.condition,this.readOf=t.read,this.nameOf=t.playerName??(e=>`Player ${e+1}`),this.colorOf=t.playerColor??(e=>Wt[e]??Wt[7]),this.tableOf=t.table;let n=(e,t)=>{let n=wt.unit.find(t=>t.name===e);return{name:`unit.${e}`,base:n.base,stride:n.stride,index:t,width:n.width,...n.scale?{scale:n.scale}:{}}},r=t.unitStats??this.game.stats;this.game.stats=e=>{let t=r(e)??{};return{...t,hp:this.tableRead(n(`maxHp`,e))||t.hp,shields:this.tableRead(n(`maxShields`,e))||t.shields}},this.unitByName=t.unitByName??(()=>void 0);for(let t of zt(e).sources)t.source===`chat`&&!this.chats.some(e=>e.pattern===t.pattern)&&this.chats.push(Lt(t.pattern));this.heldKeys=zt(e).sources.some(e=>e.source===`key`&&e.held),this.current={events:new Set,lines:new Map},this.runs=e.flatMap((e,t)=>{let n=en(),r=this.ownersOf(e);return(e.perPlayer?r:r.slice(0,1)).map(r=>new nn(this,t,e,r,n))})}get player(){return this.world.player}get units(){return this.game.units}get locations(){return this.game.locations}ownersOf(e){let t=this.game.players;if(t.loose)return[this.world.player];let n=[];for(let r of e.owners?.length?e.owners:[e.owner])for(let e of t.of(r,this.world.player))t.slots.includes(e)&&!n.includes(e)&&n.push(e);return n.sort((e,t)=>e-t)}condition(e){switch(e.type){case n.Always:return!0;case n.Never:return!1;case n.Deaths:{let t=this.world.death(e.player,e.unitId),n=e.amount>>>0;return e.comparison===o.AtLeast?t>=n:e.comparison===o.AtMost?t<=n:e.comparison===o.Exactly&&t===n}case n.Switch:return e.comparison===s.Set?this.world.switches[e.resource]===1:this.world.switches[e.resource]===0;default:return this.conditionOf?.(e,this.world)??this.game.holds(e,this.world.current)??!1}}slotsOf(e){return this.game.players.of(e,this.world.current)}slotOf(e){return this.slotsOf(e)[0]??e}resourcesOf(e){let t=0,n=0;for(let r of this.slotsOf(e))if(r<12){let e=this.stockOf(r);t+=e[0],n+=e[1]}return[t%Ht,n%Ht]}stockOf(e){let t=this.resources.get(e);return t||(t=[0,0],this.resources.set(e,t)),t}quantity(e){switch(e.type){case n.Deaths:return this.world.death(e.player,e.unitId);case n.Accumulate:{let t=this.slotsOf(e.player).filter(e=>e<12);if(t.length===0)return;let n=0,r=0;for(let e of t){let t=this.stockOf(e);n+=t[0],r+=t[1]}return(e.resource===p.Ore?n:e.resource===p.Gas?r:n+r)%Ht}case n.ElapsedTime:return Math.floor((this.shared?this.world.frame:this.cycle)/16);default:return this.game.quantity(e,this.world.current)}}read(e){let t=this.readOf?.(e,this);return t===void 0?e.source===`condition`?this.quantity(e.record)??0:e.source===`player`&&e.fact===`slot`&&this.game.players.slots.includes(this.slotOf(e.player))?2:0:Math.max(0,Math.trunc(t))%Ht}press(e,t=this.player){return this.queued.events.add(`key:${t}:${Nt(e)??e}`),this}click(e=`left`,t=this.player){return this.queued.events.add(`click:${t}:${e}`),this}moveMouse(e,t,n=this.player){return this.mice.set(n,{x:e,y:t}),this}selections=new Map;selectUnits(e,t=this.player){return this.selections.set(t,e.slice(0,12)),this}selectedUnit(e){let t=this.selections.get(this.sendingFrom??this.slotOf(13))?.[e];return t?.alive?t:null}moveCamera(e,t,n=this.player){return this.cameras.set(n,{x:e,y:t}),this}sendingFrom=null;localRead(e){let t=this.sendingFrom??this.slotOf(13),n=this.cameras.get(t)??{x:0,y:0},r=this.mice.get(t)??n;switch(e){case`local.player`:return t;case`local.camera.x`:return n.x;case`local.camera.y`:return n.y;case`local.mouse.x`:return r.x-n.x;case`local.mouse.y`:return r.y-n.y;default:{let n=/^local\.selection\[(\d+)\]$/.exec(e);if(!n)return;let r=this.selections.get(t)?.[Number(n[1])];return r?.alive?r.slot+1:0}}}readAt(e){this.sendingFrom=e===null?null:this.slotOf(e)}syncSend(e,t,n){let r=`${e}:${this.slotOf(t)}`;this.synced.delete(r),this.sending.push([r,Math.min(Math.max(0,Math.trunc(n)),1048574)+1])}type(e,t=this.player){for(let n of this.chats){let r=Rt(n,e,this.unitByName);if(r){this.queued.lines.set(t,{pattern:n.pattern,values:r});break}}return this}input(e){let t=this.slotOf(e.player);switch(e.source){case`key`:return+!!(e.held?this.downNow:this.current.events).has(`key:${t}:${e.key}`);case`click`:return+!!this.current.events.has(`click:${t}:${e.button}`);case`mouse`:return this.mice.get(t)?.[e.axis]??0;case`sync`:return this.synced.get(`${e.slot}:${t}`)??0;case`chat`:{let n=this.current.lines.get(t);return!n||n.pattern!==e.pattern?0:e.capture===null?1:n.values[e.capture]??0}}}matching(e){return this.game.listed(e.owner===void 0?void 0:this.slotsOf(e.owner),e.type,e.at)}pick(e,t,n,r,i){let a=this.matching(t);if(a.length===0)return null;if(e===`first`)return a[0];if(e===`random`)return a[Math.min(a.length-1,Math.floor(this.random()*a.length))];let o=n===void 0?void 0:this.locations.get(n),s=r===void 0?void 0:this.mice.get(this.slotOf(r))??{x:0,y:0},c=s?s.x:o?Math.floor((o.left+o.right)/2):0,l=s?s.y:o?Math.floor((o.top+o.bottom)/2):0,u=null,d=i===void 0?1/0:i+1;for(let e of a){let t=Math.abs(e.x-c)+Math.abs(e.y-l);t<d&&(d=t,u=e)}return u}centre(e,t,n,r){this.game.centre(e,t,n,r)}cellKey(e){return`${e.name}:${e.player?this.slotOf(e.index):e.index}${e.key===void 0?``:`:${e.key}`}`}tableRead(e){if(e.name===`memory.game.frame`)return this.frame;if(e.name===`memory.vision.countdown`)return this.countdown;let t=e.name.startsWith(`local.`)?this.localRead(e.name):void 0;if(t!==void 0)return t;if(e.name.startsWith(`location.`))return this.locations.get(e.index+1)?.[e.name.slice(9)]??0;let n=this.tables.get(this.cellKey(e));if(typeof n==`number`)return Math.floor(n/(e.scale??1));let r=this.tableOf?.(e);return r===void 0?0:Math.max(0,Math.trunc(r))}vision=new Map;countdown=0;visionOf(e){let t=this.vision.get(e);return t||(t=new Uint8Array(Vt*Vt),this.vision.set(e,t)),t}reveal(e){let t=this.tables.get(`unit.sight:${e.type}`);if(typeof t!=`number`||t<1||e.owner>7)return;let n=Bt[Math.min(t,Bt.length)-1],r=n.findIndex(e=>e.includes(`@`)),i=n[r].indexOf(`@`),a=Math.floor(e.x/32),o=Math.floor(e.y/32),s=this.visionOf(e.owner);n.forEach((e,t)=>{for(let n=0;n<e.length;n++)if(e[n]!==`.`){let e=a+n-i,c=o+t-r;e>=0&&c>=0&&e<Vt&&c<Vt&&(s[c*Vt+e]=2)}})}visionStep(){if(!(this.countdown<=0)&&!(--this.countdown>0)){this.countdown=100;for(let e of this.vision.values())for(let t=0;t<e.length;t++)e[t]===2&&(e[t]=1);for(let e of this.world.game.units)e.alive&&this.reveal(e)}}fog(e,t){let n=this.tableOf?.({name:`memory.map.width`,base:5763540,stride:0,index:0,width:2})||128,r=this.tableOf?.({name:`memory.map.height`,base:5763542,stride:0,index:0,width:2})||128,{x:i=0,y:a=0,width:o=n,height:s=r}=t??{},c=this.visionOf(e),l=[];for(let e=a;e<Math.min(a+s,Vt);e++){let t=``;for(let n=i;n<Math.min(i+o,Vt);n++)t+=`.+#`[c[e*Vt+n]];l.push(t)}return l}tableWrite(e,t,n,r){if(e.name===`memory.vision.countdown`&&(this.countdown=t),e.name.startsWith(`location.`)){let n=e.index+1,r=this.locations.get(n)??{left:0,top:0,right:0,bottom:0};this.locations.set(n,{...r,[e.name.slice(9)]:Math.min(t,Et(4))});return}if(r!==void 0){this.tables.set(this.cellKey(e),r);return}let i=n?t:t*(e.scale??1);this.tables.set(this.cellKey(e),Math.min(i,Et(e.width)))}unitEvent(e,t,n,r,i={}){let a=`unit ${n.slot} (type ${n.type}, P${n.owner+1})`;this.events.push({cycle:this.cycle,frame:this.frame,program:e.index,player:e.player,at:r,action:{...y(),type:t,player:n.owner,unitId:n.type,...i.location?{location:i.location}:{}},text:i.text?`${i.text}: ${a}`:a})}partText(e){return e.kind===`text`?e.text:e.kind===`name`?this.nameOf(this.slotOf(e.player)):e.kind===`color`?String.fromCharCode(this.colorOf(this.slotOf(e.player))):``}print(e,t,n,i){this.events.push({cycle:this.cycle,frame:this.frame,program:e.index,player:e.player,at:i,action:{...y(),type:r.DisplayText,player:n},text:t})}act(e,t,n,i){if(t.type===r.SetResources){let e=t.target>>>0,n=n=>t.modifier===l.SetTo?e:t.modifier===l.Add?(n+e)%Ht:Math.max(0,n-e);for(let e of this.slotsOf(t.player)){if(e>=12)continue;let r=this.stockOf(e);(t.unitId===p.Ore||t.unitId===p.OreAndGas)&&(r[0]=n(r[0])),(t.unitId===p.Gas||t.unitId===p.OreAndGas)&&(r[1]=n(r[1]))}}switch(t.type){case r.SetDeaths:this.world.changeDeath(t.player,t.unitId,t.modifier,t.target);return;case r.SetSwitch:{let e=t.target;if(e<0||e>=256)return;switch(t.modifier){case c.Set:this.world.switches[e]=1;break;case c.Clear:this.world.switches[e]=0;break;case c.Toggle:this.world.switches[e]^=1;break;case c.Randomize:this.world.switches[e]=this.random()<.5?0:1}return}case r.Comment:case r.PreserveTrigger:return;default:{let r=[];this.game.act(t,e.player,r);for(let e of r)this.reveal(e);let a={cycle:this.cycle,frame:this.frame,program:e.index,player:e.player,at:n,action:t},o=i??this.world.text(t.text);o!==void 0&&(a.text=o),this.events.push(a)}}}eventsFrom=0;seen=new Map;events_={created:[],died:[],killed:[],ordered:[],morphed:[]};eventsPass(){let e={created:[],died:[],killed:[],ordered:[],morphed:[]};for(let[t,n]of[...this.seen].reverse()){if(!t.alive){e.died.push({u:t,was:0}),t.killedBy!==void 0&&e.killed.push({u:t,was:t.killedBy}),this.seen.delete(t);continue}t.orderId!==n.order&&(e.ordered.push({u:t,was:n.order}),n.order=t.orderId),t.type!==n.type&&(e.morphed.push({u:t,was:n.type}),n.type=t.type)}let t=this.game.units;for(;this.eventsFrom<t.length;this.eventsFrom++){let n=t[this.eventsFrom];n.alive&&(e.created.push({u:n,was:0}),this.seen.set(n,{order:n.orderId,type:n.type}))}e.created.reverse(),this.events_=e}eventUnits(e,t,n={}){let r=t.owner===void 0?void 0:this.slotsOf(t.owner),i=n.by===void 0?void 0:this.slotsOf(n.by),a=e===`died`||e===`killed`;return this.events_[e].filter(({u:e,was:o})=>(a||e.alive)&&this.game.fits(e,r,t.type,t.at)&&(n.order===void 0||e.orderId===n.order)&&(!i||i.includes(o)))}step(){this.eventsPass(),this.visionStep(),this.current=this.queued,this.queued={events:new Set,lines:new Map},this.synced.clear();for(let[e,t]of this.sending)this.synced.set(e,t);this.sending=[];let e=new Set([...this.current.events].filter(e=>e.startsWith(`key:`)||e.startsWith(`click:`)));for(let t of e)this.down.has(t)&&this.current.events.delete(t);this.down=e;for(let t of e)this.lastDown.set(t,this.frame);let t=this.downNow;if(this.downNow=new Set([...this.lastDown].filter(([,e])=>this.frame-e<=Ut).map(([e])=>e)),this.heldKeys)for(let e of[...this.current.events])e.startsWith(`key:`)&&(!this.downNow.has(e)||t.has(e))&&this.current.events.delete(e);for(let e of this.runs){this.world.current=e.player;try{e.tick()}catch(e){throw e instanceof Kt?Error(e.message):e}}this.world.current=this.world.player,this.cycle++}run(e){for(let t=0;t<e;t++)this.step();return this}finished(){return this.runs.every(e=>e.done&&!e.tasksRunning)}runOf(e=0,t){return this.runs.find(n=>(typeof e==`number`?n.index===e:n.program.name===e)&&(t===void 0||n.player===t))}unit(e,t=0,n){return this.runOf(t,n)?.unitValue(e)??null}value(e,t=0,n){return this.runOf(t,n)?.value(e)}text(e,t=0,n){return this.runOf(t,n)?.textValue(e)}list(e,t=0,n){return this.runOf(t,n)?.list(e)}},an=e=>/\.test\.ts$/i.test(e),on=[`type`,`location`,`player`,`amount`,`unitId`,`comparison`,`resource`],sn=[`type`,`location`,`text`,`wav`,`time`,`player`,`target`,`unitId`,`modifier`];r.SetDeaths,r.SetResources,r.SetScore,r.SetCountdownTimer;var cn=`Terran Marine.Terran Ghost.Terran Vulture.Terran Goliath.Goliath Turret.Terran Siege Tank (Tank Mode).Siege Tank Turret (Tank Mode).Terran SCV.Terran Wraith.Terran Science Vessel.Gui Montag (Firebat).Terran Dropship.Terran Battlecruiser.Spider Mine.Nuclear Missile.Terran Civilian.Sarah Kerrigan (Ghost).Alan Schezar (Goliath).Alan Schezar Turret.Jim Raynor (Vulture).Jim Raynor (Marine).Tom Kazansky (Wraith).Magellan (Science Vessel).Edmund Duke (Tank Mode).Edmund Duke Turret (Tank Mode).Edmund Duke (Siege Mode).Edmund Duke Turret (Siege Mode).Arcturus Mengsk (Battlecruiser).Hyperion (Battlecruiser).Norad II (Battlecruiser).Terran Siege Tank (Siege Mode).Siege Tank Turret (Siege Mode).Terran Firebat.Scanner Sweep.Terran Medic.Zerg Larva.Zerg Egg.Zerg Zergling.Zerg Hydralisk.Zerg Ultralisk.Zerg Broodling.Zerg Drone.Zerg Overlord.Zerg Mutalisk.Zerg Guardian.Zerg Queen.Zerg Defiler.Zerg Scourge.Torrasque (Ultralisk).Matriarch (Queen).Infested Terran.Infested Kerrigan (Infested Terran).Unclean One (Defiler).Hunter Killer (Hydralisk).Devouring One (Zergling).Kukulza (Mutalisk).Kukulza (Guardian).Yggdrasill (Overlord).Terran Valkyrie.Mutalisk Cocoon.Protoss Corsair.Protoss Dark Templar.Zerg Devourer.Protoss Dark Archon.Protoss Probe.Protoss Zealot.Protoss Dragoon.Protoss High Templar.Protoss Archon.Protoss Shuttle.Protoss Scout.Protoss Arbiter.Protoss Carrier.Protoss Interceptor.Protoss Dark Templar (Hero).Zeratul (Dark Templar).Tassadar/Zeratul (Archon).Fenix (Zealot).Fenix (Dragoon).Tassadar (Templar).Mojo (Scout).Warbringer (Reaver).Gantrithor (Carrier).Protoss Reaver.Protoss Observer.Protoss Scarab.Danimoth (Arbiter).Aldaris (Templar).Artanis (Scout).Rhynadon (Badlands Critter).Bengalaas (Jungle Critter).Cargo Ship (Unused).Mercenary Gunship (Unused).Scantid (Desert Critter).Kakaru (Twilight Critter).Ragnasaur (Ashworld Critter).Ursadon (Ice World Critter).Lurker Egg.Raszagal (Corsair).Samir Duran (Ghost).Alexei Stukov (Ghost).Map Revealer.Gerard DuGalle (Battlecruiser).Zerg Lurker.Infested Duran.Disruption Web.Terran Command Center.Terran Comsat Station.Terran Nuclear Silo.Terran Supply Depot.Terran Refinery.Terran Barracks.Terran Academy.Terran Factory.Terran Starport.Terran Control Tower.Terran Science Facility.Terran Covert Ops.Terran Physics Lab.Starbase (Unused).Terran Machine Shop.Repair Bay (Unused).Terran Engineering Bay.Terran Armory.Terran Missile Turret.Terran Bunker.Norad II (Crashed).Ion Cannon.Uraj Crystal.Khalis Crystal.Zerg Infested Command Center.Zerg Hatchery.Zerg Lair.Zerg Hive.Zerg Nydus Canal.Zerg Hydralisk Den.Zerg Defiler Mound.Zerg Greater Spire.Zerg Queen's Nest.Zerg Evolution Chamber.Zerg Ultralisk Cavern.Zerg Spire.Zerg Spawning Pool.Zerg Creep Colony.Zerg Spore Colony.Unused Zerg Building 1.Zerg Sunken Colony.Zerg Overmind (With Shell).Zerg Overmind.Zerg Extractor.Mature Chrysalis.Zerg Cerebrate.Zerg Cerebrate Daggoth.Unused Zerg Building 2.Protoss Nexus.Protoss Robotics Facility.Protoss Pylon.Protoss Assimilator.Unused Protoss Building 1.Protoss Observatory.Protoss Gateway.Unused Protoss Building 2.Protoss Photon Cannon.Protoss Citadel of Adun.Protoss Cybernetics Core.Protoss Templar Archives.Protoss Forge.Protoss Stargate.Stasis Cell/Prison.Protoss Fleet Beacon.Protoss Arbiter Tribunal.Protoss Robotics Support Bay.Protoss Shield Battery.Khaydarin Crystal Formation.Protoss Temple.Xel'Naga Temple.Mineral Field (Type 1).Mineral Field (Type 2).Mineral Field (Type 3).Cave (Unused).Cave-in (Unused).Cantina (Unused).Mining Platform (Unused).Independent Command Center (Unused).Independent Starport (Unused).Independent Jump Gate (Unused).Ruins (Unused).Khaydarin Crystal Formation (Unused).Vespene Geyser.Warp Gate.Psi Disrupter.Zerg Marker.Terran Marker.Protoss Marker.Zerg Beacon.Terran Beacon.Protoss Beacon.Zerg Flag Beacon.Terran Flag Beacon.Protoss Flag Beacon.Power Generator.Overmind Cocoon.Dark Swarm.Floor Missile Trap.Floor Hatch (Unused).Left Upper Level Door.Right Upper Level Door.Left Pit Door.Right Pit Door.Floor Gun Trap.Left Wall Missile Trap.Left Wall Flame Trap.Right Wall Missile Trap.Right Wall Flame Trap.Start Location.Flag.Young Chrysalis.Psi Emitter.Data Disk.Khaydarin Crystal.Mineral Cluster Type 1.Mineral Cluster Type 2.Protoss Vespene Gas Orb Type 1.Protoss Vespene Gas Orb Type 2.Zerg Vespene Gas Sac Type 1.Zerg Vespene Gas Sac Type 2.Terran Vespene Gas Tank Type 1.Terran Vespene Gas Tank Type 2`.split(`.`),ln=`Gauss Rifle.Gauss Rifle (Jim Raynor).C-10 Canister Rifle.C-10 Canister Rifle (Sarah Kerrigan).Fragmentation Grenade.Fragmentation Grenade (Jim Raynor).Spider Mines.Twin Autocannons.Hellfire Missile Pack.Twin Autocannons (Alan Schezar).Hellfire Missile Pack (Alan Schezar).Arclite Cannon.Arclite Cannon (Edmund Duke).Fusion Cutter.Fusion Cutter (Harvest).Gemini Missiles.Burst Lasers.Gemini Missiles (Tom Kazansky).Burst Lasers (Tom Kazansky).ATS Laser Battery.ATA Laser Battery.ATS Laser Battery (Hero).ATA Laser Battery (Hero).ATS Laser Battery (Hyperion).ATA Laser Battery (Hyperion).Flame Thrower.Flame Thrower (Gui Montag).Arclite Shock Cannon.Arclite Shock Cannon (Edmund Duke).Longbolt Missile.Yamato Gun.Nuclear Strike.Lockdown.EMP Shockwave.Irradiate.Claws.Claws (Devouring One).Claws (Infested Kerrigan).Needle Spines.Needle Spines (Hunter Killer).Kaiser Blades.Kaiser Blades (Torrasque).Toxic Spores (Broodling).Spines.Spines (Harvest).Acid Spray (Unused).Acid Spore.Acid Spore (Kukulza).Glave Wurm.Glave Wurm (Kukulza).Venom (Unused).Venom (Unused, Hero).Seeker Spores.Subterranean Tentacle.Suicide (Infested Terran).Suicide (Scourge).Parasite.Spawn Broodlings.Ensnare.Dark Swarm.Plague.Consume.Particle Beam.Particle Beam (Harvest).Psi Blades.Psi Blades (Fenix).Phase Disruptor.Phase Disruptor (Fenix).Psi Assault (Unused).Psi Assault (Tassadar/Aldaris).Psionic Shockwave.Psionic Shockwave (Tassadar/Zeratul Archon).Unknown 72.Dual Photon Blasters.Anti-Matter Missiles.Dual Photon Blasters (Mojo).Anti-Matter Missiles (Mojo).Phase Disruptor Cannon.Phase Disruptor Cannon (Danimoth).Pulse Cannon.STS Photon Cannon.STA Photon Cannon.Scarab.Stasis Field.Psionic Storm.Warp Blades (Zeratul).Warp Blades (Dark Templar Hero).Missiles (Unused).Laser Battery 1 (Unused).Tormentor Missiles (Unused).Bombs (Unused).Raider Gun (Unused).Laser Battery 2 (Unused).Laser Battery 3 (Unused).Dual Photon Blasters (Unused).Flechette Grenade (Unused).Twin Autocannons (Floor Trap).Hellfire Missile Pack (Wall Trap).Flame Thrower (Wall Trap).Hellfire Missile Pack (Floor Trap).Neutron Flare.Disruption Web.Restoration.Halo Rockets.Corrosive Acid.Mind Control.Feedback.Optical Flare.Maelstrom.Subterranean Spines.Gauss Rifle 0 (Unused).Warp Blades.C-10 Canister Rifle (Samir Duran).C-10 Canister Rifle (Infested Duran).Dual Photon Blasters (Artanis).Anti-Matter Missiles (Artanis).C-10 Canister Rifle (Alexei Stukov).Gauss Rifle 1 (Unused).Unknown 118.Unknown 119.Unknown 120.Unknown 121.Unknown 122.Unknown 123.Unknown 124.Unknown 125.Unknown 126.Unknown 127.Unknown 128.Unknown 129`.split(`.`),un=`Terran Infantry Armor.Terran Vehicle Plating.Terran Ship Plating.Zerg Carapace.Zerg Flyer Carapace.Protoss Ground Armor.Protoss Air Armor.Terran Infantry Weapons.Terran Vehicle Weapons.Terran Ship Weapons.Zerg Melee Attacks.Zerg Missile Attacks.Zerg Flyer Attacks.Protoss Ground Weapons.Protoss Air Weapons.Protoss Plasma Shields.U-238 Shells.Ion Thrusters.Burst Lasers (Unused).Titan Reactor.Ocular Implants.Moebius Reactor.Apollo Reactor.Colossus Reactor.Ventral Sacs.Antennae.Pneumatized Carapace.Metabolic Boost.Adrenal Glands.Muscular Augments.Grooved Spines.Gamete Meiosis.Metasynaptic Node.Singularity Charge.Leg Enhancements.Scarab Damage.Reaver Capacity.Gravitic Drive.Sensor Array.Gravitic Boosters.Khaydarin Amulet.Apial Sensors.Gravitic Thrusters.Carrier Capacity.Khaydarin Core.Unused (45).Unused (46).Argus Jewel.Unused (48).Argus Talisman.Unused (50).Caduceus Reactor.Chitinous Plating.Anabolic Synthesis.Charon Boosters.Unused (55).Unused (56).Unused (57).Unused (58).Unused (59).Unused (60)`.split(`.`),dn=`Stim Packs.Lockdown.EMP Shockwave.Spider Mines.Scanner Sweep.Tank Siege Mode.Defensive Matrix.Irradiate.Yamato Gun.Cloaking Field.Personnel Cloaking.Burrowing.Infestation.Spawn Broodlings.Dark Swarm.Plague.Consume.Ensnare.Parasite.Psionic Storm.Hallucination.Recall.Stasis Field.Archon Warp.Restoration.Disruption Web.Unused (26).Mind Control.Dark Archon Meld.Feedback.Optical Flare.Maelstrom.Lurker Aspect.Unused (33).Healing.Unused (35).Unused (36).Unused (37).Unused (38).Unused (39).Unused (40).Unused (41).Unused (42).Unused (43)`.split(`.`),fn=e=>[e.players,e.units,e.locations,e.switches,e.aiScripts,e.weapons,e.upgrades,e.techs,e.orders,e.sounds];function pn(e){let t=e.split(/[^A-Za-z0-9]+/).filter(Boolean).map(e=>e[0].toUpperCase()+e.slice(1)).join(``);return t===``&&(t=`_`),/^\d/.test(t)&&(t=`_${t}`),t}function mn(...e){let t=[];for(let n of e)if(n)for(let e of[pn(n),n])t.includes(e)||t.push(e);return t}function hn(e,t,n,r){let i=new Set,a=[];for(let e of r){let t=[];e.keys.forEach((e,n)=>{if(!i.has(e)){i.add(e),t.push(e);return}if(n!==0)return;let r=2;for(;i.has(`${e}_${r}`);)r++;i.add(`${e}_${r}`),t.push(`${e}_${r}`)}),a.push({value:e.value,keys:t})}return{object:e,type:t,doc:n,entries:a}}var gn={[a.None]:`None`,[a.CurrentPlayer]:`Current`,[a.Foes]:`Foes`,[a.Allies]:`Allies`,[a.NeutralPlayers]:`Neutral`,[a.AllPlayers]:`All`,[a.NonAlliedVictoryPlayers]:`NonAlliedVictory`};function _n(e=[]){return R.map(t=>{let n=t.value<12?[`P${t.value+1}`,t.label]:mn(gn[t.value]??t.label,t.label),r=t.value-a.Force1;return r>=0&&r<4&&n.push(...mn(e[r]).filter(e=>!n.includes(e))),{value:t.value,keys:n}})}function vn(e=()=>null){let t=cn.map((t,n)=>({value:n,keys:mn(t,e(n)||null)}));for(let e of ce)t.push({value:e.value,keys:mn(e.label,...e.aliases??[])});return t}function yn(){return pe.map(e=>({value:ue(e.id),keys:mn(e.name,e.id)}))}var bn=e=>`Switch ${e+1}`;function xn(e={}){let t=!!(e.forceNames||e.locations||e.switchNames||e.unitCustomName||e.sounds),n=[{value:0,keys:[`NoLocation`,`No Location`]}],r=(e.locations??[]).slice().sort((e,t)=>e.index-t.index);r.some(e=>e.index===63)||r.push({index:63,name:`Anywhere`});for(let{index:e,name:t}of r)n.push({value:e+1,keys:e===63?[`Anywhere`,...mn(t).filter(e=>e!==`Anywhere`)]:mn(t)});let i=Array.from({length:256},(t,n)=>{let r=[`Switch${n+1}`,`Switch ${n+1}`],i=e.switchNames?.[n];if(i&&i.trim()&&i.trim()!==bn(n))for(let e of mn(i.trim()))r.includes(e)||r.push(e);return{value:n,keys:r}});return{players:hn(`players`,`Player`,t?`Players, player groups and the map's forces.`:`Players and player groups.`,_n(e.forceNames??[])),units:hn(`units`,`UnitType`,t?`Unit types, by StarEdit name and by the map's custom names.`:`Unit types, by StarEdit name.`,vn(e.unitCustomName??(()=>null))),locations:hn(`locations`,`Location`,`The map's locations.`,n),switches:hn(`switches`,`Switch`,t?`The 256 switches, by number and by the map's names.`:`The 256 switches.`,i),aiScripts:hn(`aiScripts`,`AiScript`,`AI scripts, by StarEdit name or four-character code.`,yn()),weapons:hn(`weapons`,`Weapon`,`Weapons, for stats() and a unit type's groundWeapon / airWeapon.`,[...ln.map((e,t)=>({value:t,keys:mn(e)})),{value:ln.length,keys:[`None`]}]),upgrades:hn(`upgrades`,`Upgrade`,`Upgrades, for stats().`,un.map((e,t)=>({value:t,keys:mn(e)}))),techs:hn(`techs`,`Tech`,`Technologies, for stats().`,dn.map((e,t)=>({value:t,keys:mn(e)}))),orders:hn(`orders`,`Order`,`Orders, what a unit is doing: u.orderId, and what on.order() listens for.`,he.map((e,t)=>({value:t,keys:[e]}))),sounds:hn(`sounds`,`Sound`,`The map's sounds (the Sound Editor's list), for playWav() and transmission().`,(e.sounds??[]).filter(e=>e.stringIndex>0).map(e=>{let t=e.path.split(/[\\/]/).pop()??e.path;return{value:e.stringIndex,keys:[pn(t.replace(/\.[^.]*$/,``)),e.path]}}))}}function Sn(){return xn()}function Cn(e,t){return e.entries.find(e=>e.value===t)}var wn=Object.freeze({white:4,grey:5,red:8,orange:17,yellow:3,paleYellow:25,green:7,darkGreen:24,sage:29,teal:15,cyan:31,blue:14,lightBlue:28,paleBlue:2,purple:16,lavender:30,brown:21,cream:27});wn.white,wn.lavender,Object.freeze({line:[`color`],span:[`color`],cell:[`color`],bar:[`value`,`max`,`width`,`color`]});var Tn={vision:[`MemoryVision`,`How the game keeps fog of war.`],game:[`MemoryGame`,`The game as a whole.`],map:[`MemoryMap`,`The map being played.`]},En=[{path:[`vision`,`countdown`],base:5361304,width:4,doc:"Frames until the game works out again what every player sees. It counts down from 100 each frame; at 0 every tile goes back to fog and every unit reveals what it sees again. Between, a tile once revealed stays revealed. Write 1 after drawing and the next frame starts from a wiped board — `fog` does this for you.",remastered:`Remastered: read and written as in 1.16.1 (its own EUD emulator; its frame step is 1.16.1's line for line). Played: the S4 fog probes.`},{path:[`game`,`frame`],base:5763644,width:4,readonly:!0,doc:`Game frames since the game began: 24 a second on Fastest, the same on every player's computer.`,remastered:`Remastered: read allowed (its own EUD emulator). The game keeps it; a write would only confuse its own count.`},{path:[`map`,`width`],base:5763540,width:2,readonly:!0,doc:`The map's width, in tiles (a tile is 32 pixels).`,remastered:`Remastered: read allowed (its own EUD emulator).`},{path:[`map`,`height`],base:5763542,width:2,readonly:!0,doc:`The map's height, in tiles (a tile is 32 pixels).`,remastered:`Remastered: read allowed (its own EUD emulator).`}],Dn=[{path:[`player`,``],base:5318276,width:4,readonly:!0,doc:`The player sitting at this computer: 0 for Player 1, 1 for Player 2, … Every computer has its own.`,remastered:`Remastered: the real local player number (its own EUD emulator). Played: 0 in a game hosted alone.`},{path:[`camera`,`x`],base:6456460,width:4,readonly:!0,doc:`Where this computer's screen is on the map: the left edge, in pixels. The screen is 640 pixels wide in Classic graphics and 853 in Remastered's at 16:9.`,remastered:`Remastered: the real camera, read live (its own EUD emulator); a write is ignored — centerView() moves it. Played.`},{path:[`camera`,`y`],base:6456488,width:4,readonly:!0,doc:`Where this computer's screen is on the map: the top edge, in pixels.`,remastered:`Remastered: the real camera, read live (its own EUD emulator); a write is ignored. Played.`},{path:[`mouse`,`x`],base:7134660,width:4,readonly:!0,doc:`Where this computer's mouse is on the screen, from its left edge, in the game's pixels: 0 to 639 in Classic graphics, to 852 in Remastered's at 16:9. On the map it is local.camera.x + local.mouse.x; mouse(p) is that place, sent to every computer.`,remastered:`Remastered: its input record, read live; in widescreen wider than 640 (2560 screen pixels read as 853). Played.`},{path:[`mouse`,`y`],base:7134664,width:4,readonly:!0,doc:`Where this computer's mouse is on the screen, from its top edge, in the game's pixels: 0 to 479.`,remastered:`Remastered: its input record, read live. Played.`}],On=new WeakMap;function kn(e){let t=On.get(e);if(t)return t;let n=[],r=[];e.forEach((e,t)=>{let i=e.findIndex(e=>e.includes(`@`));if(i<0)throw Error(`Shape ${t+1} has no centre: mark it with @.`);let a=e[i].indexOf(`@`),o=[],s=[];e.forEach((e,n)=>{let r=-1,c=-1;for(let s=0;s<e.length;s++)if(e[s]===`#`||e[s]===`@`){if(r>=0&&c!==s-1)throw Error(`Shape ${t+1}, row ${n+1}: a row of a shape is one run of tiles.`);r<0&&(r=s),c=s,o.push(s-a,n-i)}r>=0&&s.push(n-i,r-a,c-a)}),n.push(Int16Array.from(o)),r.push(Int16Array.from(s))});let i=(e,t,r)=>{let i=n[e];for(let e=0;e<i.length;e+=2)if(i[e]===t&&i[e+1]===r)return!0;return!1},a=!0;for(let e=0;e+1<n.length&&a;e++)for(let t=0;t<n[e].length;t+=2)if(!i(e+1,n[e][t],n[e][t+1])){a=!1;break}let o=n.map(()=>[]);if(a)for(let e=0;e<n.length;e++)for(let t=e+1;t<=e+2&&t<n.length;t++){let r=[];for(let a=-3;a<=3;a++)for(let o=-3;o<=3;o++){if(o===0&&a===0)continue;let s=!0;for(let r=0;r<n[e].length&&s;r+=2)s=i(t,n[e][r]-o,n[e][r+1]-a);s&&r.push(o,a)}r.length&&o[e].push([t,Int16Array.from(r)])}let s=Object.freeze({count:e.length,cells:n,runs:r,nested:a,inside:o});return On.set(e,s),s}function An(e,t,n,r){let i=t*n,a=new Int32Array(i+n);for(let r=0;r<n;r++){let n=r*(t+1);for(let i=0;i<t;i++)a[n+i+1]=a[n+i]+ +!e[r*t+i]}let o=(e,i,o)=>{let s=r.runs[e];for(let e=0;e<s.length;e+=3){let r=o+s[e],c=i+s[e+1],l=i+s[e+2];if(r<0||r>=n||c<0||l>=t)return!1;let u=r*(t+1);if(a[u+l+1]!==a[u+c])return!1}return!0},s=new Uint8Array(i),c=new Int32Array(i+n),l=e=>{let n=e*(t+1);for(let r=0;r<t;r++)c[n+r+1]=c[n+r]+s[e*t+r]},u=(e,n,i)=>{let a=r.runs[e],o=0;for(let e=0;e<a.length;e+=3){let r=(i+a[e])*(t+1),s=n+a[e+1],l=n+a[e+2];o+=l-s+1-(c[r+l+1]-c[r+s])}return o},d=0;for(let t=0;t<i;t++)d+=+!!e[t];let f=[];if(d){let a=r.nested?i:i*r.count,c=new Int32Array(a),p=new Int32Array(a),m=0,h=(e,t)=>{let n=c[e],r=p[e];c[e]=c[t],p[e]=p[t],c[t]=n,p[t]=r},g=e=>{for(;e>0;){let t=e-1>>1;if(c[t]>=c[e])break;h(t,e),e=t}},_=e=>{for(;;){let t=2*e+1,n=t+1,r=e;if(t<m&&c[t]>c[r]&&(r=t),n<m&&c[n]>c[r]&&(r=n),r===e)break;h(r,e),e=r}},v=(e,t)=>{c[m]=e,p[m]=t,g(m++)};if(r.nested){let a=new Int8Array(i).fill(-1);for(let i=0;i<n;i++)for(let n=0;n<t;n++){if(!e[i*t+n])continue;let s=-1,c=r.count-1;for(;s<c;){let e=s+c+1>>1;o(e,n,i)?s=e:c=e-1}a[i*t+n]=s}for(let e=0;e<n;e++)for(let i=0;i<t;i++){let o=a[e*t+i];if(o<0)continue;let s=!1;for(let[c,l]of r.inside[o]){for(let r=0;r<l.length&&!s;r+=2){let o=i+l[r],u=e+l[r+1];s=o>=0&&o<t&&u>=0&&u<n&&a[u*t+o]>=c}if(s)break}s||v(r.cells[o].length>>1,(o*n+e)*t+i)}}else for(let i=0;i<n;i++)for(let a=0;a<t;a++)if(e[i*t+a])for(let e=0;e<r.count;e++)o(e,a,i)&&v(r.cells[e].length>>1,(e*n+i)*t+a);for(;m&&d;){let e=p[0],i=e%t,a=Math.floor(e/t)%n,o=Math.floor(e/(t*n)),g=u(o,i,a);if(m--,h(0,m),_(0),g===0)continue;if(m&&g<c[0]){v(g,e);continue}f.push({x:i,y:a,shape:o});let y=r.cells[o];for(let e=0;e<y.length;e+=2){let n=(a+y[e+1])*t+i+y[e];s[n]||(s[n]=1,d--)}let b=r.runs[o];for(let e=0;e<b.length;e+=3)l(a+b[e])}}if(d){let i=r.cells[0];for(let r=0;r<n;r++)for(let a=0;a<t;a++){if(!e[r*t+a]||s[r*t+a])continue;let o=-1,c=a,l=r;for(let s=0;s<i.length;s+=2){let u=a-i[s],d=r-i[s+1],f=0;for(let r=0;r<i.length;r+=2){let a=u+i[r],o=d+i[r+1];f+=a<0||a>=t||o<0||o>=n?1e3:+!e[o*t+a]}(o<0||f<o)&&(o=f,c=u,l=d)}f.push({x:c,y:l,shape:0});for(let e=0;e<i.length;e+=2){let r=c+i[e],a=l+i[e+1];r>=0&&r<t&&a>=0&&a<n&&(s[a*t+r]=1)}}}return f.sort((e,t)=>e.shape-t.shape)}function jn(e,t,n,r){let i=new Uint8Array(t*n);for(let a of e){let e=r.cells[a.shape];for(let r=0;r<e.length;r+=2){let o=a.x+e[r],s=a.y+e[r+1];o>=0&&o<t&&s>=0&&s<n&&(i[s*t+o]=1)}}return i}var Mn=11,Nn=5,Pn=1<<24,Fn=1024,In=class{low=0;range=4294967295;cache=0;cacheSize=1;out=[];bit(e,t,n){let r=e[t],i=(this.range>>>Mn)*r;for(n?(this.low+=i,this.range-=i,e[t]=r-(r>>Nn)):(this.range=i,e[t]=r+(2048-r>>Nn));this.range<Pn;)this.range=this.range*256>>>0,this.shiftLow()}shiftLow(){if(this.low<4278190080||this.low>=4294967296){let e=+(this.low>=4294967296),t=this.cache;do this.out.push(t+e&255),t=255;while(--this.cacheSize!==0);this.cache=Math.floor(this.low/16777216)&255}this.cacheSize++,this.low=this.low%16777216*256}finish(){for(let e=0;e<5;e++)this.shiftLow();return Uint8Array.from(this.out)}},Ln=class{range=4294967295;code=0;at=0;overrun=!1;bytes;constructor(e){this.bytes=e;for(let e=0;e<5;e++)this.code=(this.code*256+this.next())%4294967296}next(){return this.at<this.bytes.length?this.bytes[this.at++]:(this.overrun=this.at++>this.bytes.length+4,0)}bit(e,t){let n=e[t],r=(this.range>>>Mn)*n,i;for(this.code<r?(this.range=r,e[t]=n+(2048-n>>Nn),i=0):(this.code-=r,this.range-=r,e[t]=n-(n>>Nn),i=1);this.range<Pn;)this.range=this.range*256>>>0,this.code=(this.code*256+this.next())%4294967296;return i}};function Rn(e){let t=``;for(let n=0;n<e.length;n+=32768)t+=String.fromCharCode(...e.subarray(n,n+32768));return btoa(t)}function zn(e){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}var Bn=`.image`,Vn=1024,Hn=1,Un=(e,t,n)=>Math.round(.299*e+.587*t+.114*n);function Wn(e){let{width:t,height:n}=e;qn(t,n);let r=t*n;if(e.rgba.length!==r*4)throw Error(`A ${t} × ${n} image has ${r*4} bytes of red, green, blue and alpha, not ${e.rgba.length}.`);let i=Uint8Array.from(e.rgba);if(e.grey)for(let e=0;e<r*4;e+=4)i[e]=i[e+1]=i[e+2]=Un(i[e],i[e+1],i[e+2]);let a=!1,o=!1;for(let e=0;e<r*4;e+=4)(i[e]!==i[e+1]||i[e+1]!==i[e+2])&&(a=!0),i[e+3]!==255&&(o=!0);let s=new In,c=Yn();Zn(i,r,a,o).forEach((e,r)=>Qn(e,t,n,(e,t)=>{for(let n=7,i=1;n>=0;n--){let a=t>>n&1;s.bit(c,Xn(r,e,i),a),i=i*2+a}return t}));let l={trigscript:`image`,version:Hn,width:t,height:n,color:a,alpha:o,...e.source?{source:e.source}:{},data:Rn(s.finish())};return JSON.stringify(l)}function Gn(e){let t;try{t=JSON.parse(e)}catch{throw Error(`This is not an image TrigScript imported: an .image file is one line of JSON.`)}if(t?.trigscript!==`image`||typeof t.data!=`string`)throw Error(`This is not an image TrigScript imported.`);if(t.version!==Hn)throw Error(`This image was written by a newer TrigScript (format ${t.version}); update the plugin to read it.`);let n=Number(t.width),r=Number(t.height),i=t.color===!0,a=t.alpha===!0;qn(n,r);let o=n*r,s=new Ln(zn(t.data)),c=Yn(),l=Zn(new Uint8Array(o*4),o,i,a).map((e,t)=>{if(Qn(e,n,r,e=>{let n=1;for(let r=0;r<8;r++)n=n*2+s.bit(c,Xn(t,e,n));return n-256}),s.overrun)throw Error(`The image's pixels end too soon: the file is cut short.`);return e}),u=new Uint8Array(o*4);for(let e=0;e<o;e++){if(i){let t=l[0][e];u[e*4]=l[1][e]+t-128&255,u[e*4+1]=t,u[e*4+2]=l[2][e]+t-128&255}else u[e*4]=u[e*4+1]=u[e*4+2]=l[0][e];u[e*4+3]=a?l[i?3:1][e]:255}return Object.freeze({width:n,height:r,color:i,alpha:a,...typeof t.source==`string`?{source:t.source}:{},rgba:u})}function Kn(e){try{let t=JSON.parse(e);return t?.trigscript===`image`?`An image, ${Number(t.width)} × ${Number(t.height)} pixels, ${t.color?`in colour`:`in grey`}${t.alpha?`, with transparency`:``}${typeof t.source==`string`?`, from ${t.source}`:``}.`:`This is not an image TrigScript imported.`}catch(e){return e instanceof Error?e.message:String(e)}}function qn(e,t){if(!(Number.isInteger(e)&&Number.isInteger(t)&&e>0&&t>0&&e<=1024&&t<=1024))throw Error(`An image is 1 to ${Vn} pixels each way, not ${e} × ${t}.`)}var Jn=8,Yn=()=>new Uint16Array(8192).fill(Fn),Xn=(e,t,n)=>(e*Jn+t)*256+n;function Zn(e,t,n,r){let i=e=>Uint8Array.from({length:t},(t,n)=>e(n*4)),a=n?[i(t=>e[t+1]),i(t=>e[t]-e[t+1]+128&255),i(t=>e[t+2]-e[t+1]+128&255)]:[i(t=>e[t])];return r&&a.push(i(t=>e[t+3])),a}function Qn(e,t,n,r){for(let i=0,a=0;i<n;i++)for(let n=0;n<t;n++,a++){let o=n>0?e[a-1]:i>0?e[a-t]:0,s=i>0?e[a-t]:o,c=n>0&&i>0?e[a-t-1]:s,l=c>=Math.max(o,s)?Math.min(o,s):c<=Math.min(o,s)?Math.max(o,s):o+s-c,u=Math.abs(o-c)+Math.abs(s-c),d=u===0?0:Math.min(7,1+Math.floor(Math.log2(u))),f=e[a]-l&255,p=f<128?f:f-256,m=r(d,p>=0?2*p:-2*p-1);e[a]=l+(m&1?-(m+1)/2:m/2)&255}}var $n=128,er=(e,t)=>{if(typeof e!=`number`||!Number.isInteger(e))throw Error(`${t} is a whole number, not ${String(e)}.`);return e},tr=e=>{let t=e?.ink??`light`;if(t!==`light`&&t!==`dark`)throw Error(`ink is "light" or "dark", not ${JSON.stringify(t)}.`);return t===`dark`};function nr(e){let{width:t,height:n,rgba:r}=e,i=t*n,a=(e,r)=>{if(er(e,`x`),er(r,`y`),e<0||r<0||e>=t||r>=n)throw RangeError(`The image is ${t} × ${n}; there is no pixel (${String(e)}, ${String(r)}).`);return(r*t+e)*4},o=t=>e.color?Un(r[t],r[t+1],r[t+2]):r[t],s=(t,n,i)=>{let a=new Uint8Array(t*n*4);for(let e=0,o=0;e<n;e++)for(let n=0;n<t;n++,o+=4)a.set(r.subarray(i(n,e),i(n,e)+4),o);return nr({...e,width:t,height:n,rgba:a})},c=e=>{let i=[];for(let a=0;a<n;a++){let n=``;for(let i=0;i<t;i++){let s=(a*t+i)*4;n+=r[s+3]<$n?`.`:e(o(s),a*t+i)}i.push(n)}return Object.freeze(i)},l={__trigscript:`image`,width:t,height:n,color:e.color,transparent:e.alpha,grey:(e,t)=>o(a(e,t)),rgb:(e,t)=>{let n=a(e,t);return Object.freeze({r:r[n],g:r[n+1],b:r[n+2]})},alpha:(e,t)=>r[a(e,t)+3],crop(e,r,i,a){for(let[t,n]of[[e,`x`],[r,`y`],[i,`width`],[a,`height`]])er(t,n);if(e<0||r<0||i<1||a<1||e+i>t||r+a>n)throw RangeError(`crop(${e}, ${r}, ${i}, ${a}) is not inside the image, which is ${t} × ${n}.`);return s(i,a,(n,i)=>((r+i)*t+e+n)*4)},scale(i,a){er(i,`width`);let o=a===void 0?Math.max(1,Math.round(i*n/t)):er(a,`height`);return qn(i,o),nr({...e,width:i,height:o,rgba:ir(r,t,n,i,o)})},flip(e){if(e===`horizontal`)return s(t,n,(e,n)=>(n*t+(t-1-e))*4);if(e===`vertical`)return s(t,n,(e,r)=>((n-1-r)*t+e)*4);throw Error(`flip() takes "horizontal" or "vertical", not ${JSON.stringify(e)}.`)},rotate(e){if(e===90)return s(n,t,(e,r)=>((n-1-e)*t+r)*4);if(e===180)return s(t,n,(e,r)=>((n-1-r)*t+(t-1-e))*4);if(e===270)return s(n,t,(e,n)=>(e*t+(t-1-n))*4);throw Error(`rotate() turns by 90, 180 or 270 degrees clockwise, not ${String(e)}.`)},invert(){let t=Uint8Array.from(r);for(let e=0;e<i*4;e+=4)t[e]=255-t[e],t[e+1]=255-t[e+1],t[e+2]=255-t[e+2];return nr({...e,rgba:t})},threshold(e=128,t){if(typeof e!=`number`||!(e>=0&&e<=256))throw RangeError(`threshold() takes a grey from 0 to 256, not ${String(e)}.`);let n=tr(t);return c(t=>t>=e===n?`.`:`#`)},tones(e){if(er(e,`tones()' count`),e<2||e>10)throw RangeError(`tones() makes 2 to 10 tones, a digit each, not ${e}.`);return c(t=>String(Math.min(e-1,Math.floor(t*e/256))))},halftone(e,i,a){er(e,`halftone()'s cell width`);let s=i===void 0?e+1:er(i,`halftone()'s cell height`);if(e<3||s<4||e>32||s>32)throw RangeError(`halftone() takes cells 3 to 32 tiles across and 4 to 32 down (the smallest brush is 3 × 4), not ${e} × ${s}.`);return rr(t,n,e=>r[e*4+3]<$n?-1:o(e*4),e,s,a?.diffuse!==!1)}};return Object.freeze(l)}function rr(e,t,n,r,i,a){let o=new Uint8Array(e*t),s=[],c=(e,t,n)=>{let r=[];for(let n=0;n<e;n+=t)r.push(n);return r.length>1&&e-r[r.length-1]<n&&r.pop(),[...r,e]},l=c(e,r,3),u=c(t,i,4),d=l.length-1,f=u.length-1,p=new Float32Array(d*f);for(let r=0;r<f;r++)for(let i=0;i<d;i++){let c=l[i],m=u[r],h=l[i+1],g=u[r+1],_=(h-c)*(g-m),v=0,y=0;for(let t=m;t<g;t++)for(let r=c;r<h;r++){let i=n(t*e+r);i>=0&&(v+=i,y++)}if(y*2<_)continue;let b=n=>{let r=(e,t,n)=>Math.max(0,Math.min(n-t,e)),i=r(c+(h-c-n[0].length>>1),n[0].length,e),a=r(m+(g-m-n.length>>1),n.length,t),o=[],s={x:0,y:0},l=!0;return n.forEach((n,r)=>{for(let c=0;c<n.length;c++){let u=i+c,d=a+r;n[c]===`@`&&(s={x:u,y:d}),n[c]!==`.`&&(u<0||d<0||u>=e||d>=t?l=!1:o.push(d*e+u))}}),l?{tiles:o,centre:s}:null},x=e=>e.reduce((e,t)=>e+ +!o[t],0)/_,S=v/y/255+p[r*d+i],C=null,w=0;for(let[e,t]of Bt.entries()){if(t[0].length>h-c+2||t.length>g-m+2)break;let n=b(t);if(!n)continue;let r=x(n.tiles);Math.abs(r-S)<Math.abs(w-S)&&(C={...n,shape:e},w=r)}if(C){for(let e of C.tiles)o[e]=1;s.push(Object.freeze({...C.centre,shape:C.shape}))}let T=a?S-w:0,E=(e,t,n)=>{let a=i+e,o=r+t;a>=0&&a<d&&o<f&&(p[o*d+a]+=T*n/16)};E(1,0,7),E(-1,1,3),E(0,1,5),E(1,1,1)}let m=[];for(let n=0;n<t;n++){let t=``;for(let r=0;r<e;r++)t+=o[n*e+r]?`#`:`.`;m.push(t)}return Object.freeze(Object.assign(m,{brushes:Object.freeze(s)}))}function ir(e,t,n,r,i){let a=(e,t)=>Array.from({length:t},(n,r)=>{let i=r*e/t,a=(r+1)*e/t,o=[];for(let t=Math.floor(i);t<Math.min(e,Math.ceil(a));t++)o.push([t,Math.min(a,t+1)-Math.max(i,t)]);return o}),o=a(t,r),s=a(n,i),c=new Uint8Array(r*i*4);for(let n=0;n<i;n++)for(let i=0;i<r;i++){let a=0,l=0,u=0,d=0,f=0;for(let[r,c]of s[n])for(let[n,s]of o[i]){let i=(r*t+n)*4,o=s*c,p=e[i+3]/255*o;a+=e[i]*p,l+=e[i+1]*p,u+=e[i+2]*p,d+=e[i+3]*o,f+=o}let p=(n*r+i)*4,m=d/255||1;c[p]=Math.round(a/m),c[p+1]=Math.round(l/m),c[p+2]=Math.round(u/m),c[p+3]=Math.round(d/f)}return c}var ar=`.sound`,or=1,sr=[-1,-1,-1,-1,2,4,6,8,-1,-1,-1,-1,2,4,6,8],cr=[7,8,9,10,11,12,13,14,16,17,19,21,23,25,28,31,34,37,41,45,50,55,60,66,73,80,88,97,107,118,130,143,157,173,190,209,230,253,279,307,337,371,408,449,494,544,598,658,724,796,876,963,1060,1166,1282,1411,1552,1707,1878,2066,2272,2499,2749,3024,3327,3660,4026,4428,4871,5358,5894,6484,7132,7845,8630,9493,10442,11487,12635,13899,15289,16818,18500,20350,22385,24623,27086,29794,32767],lr=e=>256*Math.max(1,Math.round(e/11025)),ur=e=>(e-4)*2+1;function dr(e,t){let n=lr(t),r=ur(n),i=Math.max(1,Math.ceil(e.length/r)),a=new Uint8Array(i*n),o=t=>t<e.length?Math.max(-32768,Math.min(32767,Math.round(e[t]*32767))):0,s=0;for(let e=0;e<i;e++){let t=e*n,i=e*r,c=o(i);a[t]=c&255,a[t+1]=c>>8&255,a[t+2]=s,a[t+3]=0;for(let e=1;e<r;e++){let n=cr[s],r=o(i+e)-c,l=0;r<0&&(l=8,r=-r);let u=n>>3;r>=n&&(l|=4,r-=n,u+=n),r>=n>>1&&(l|=2,r-=n>>1,u+=n>>1),r>=n>>2&&(l|=1,u+=n>>2),c=Math.max(-32768,Math.min(32767,c+(l&8?-u:u))),s=Math.max(0,Math.min(88,s+sr[l]));let d=t+4+(e-1>>1);a[d]|=e-1&1?l<<4:l}}return a}function fr(e,t,n){let r=lr(t),i=ur(r),a=new Float32Array(n);for(let t=0,o=0;t*r<e.length&&o<n;t++){let s=t*r,c=(e[s]|e[s+1]<<8)<<16>>16,l=Math.min(88,e[s+2]);a[o++]=c/32767;for(let t=1;t<i&&o<n;t++){let n=e[s+4+(t-1>>1)],r=t-1&1?n>>4:n&15,i=cr[l],u=i>>3;r&4&&(u+=i),r&2&&(u+=i>>1),r&1&&(u+=i>>2),c=Math.max(-32768,Math.min(32767,c+(r&8?-u:u))),l=Math.max(0,Math.min(88,l+sr[r])),a[o++]=c/32767}}return a}function pr(e){if(gr(e.rate),e.samples.length/e.rate>600)throw Error(`A sound is at most 10 minutes long, not ${(e.samples.length/e.rate/60).toFixed(1)}.`);let t={trigscript:`sound`,version:or,rate:e.rate,frames:e.samples.length,...e.source?{source:e.source}:{},data:Rn(dr(e.samples,e.rate))};return JSON.stringify(t)}function mr(e){let t;try{t=JSON.parse(e)}catch{throw Error(`This is not a sound TrigScript imported: a .sound file is one line of JSON.`)}if(t?.trigscript!==`sound`||typeof t.data!=`string`)throw Error(`This is not a sound TrigScript imported.`);if(t.version!==or)throw Error(`This sound was written by a newer TrigScript (format ${t.version}); update the plugin to read it.`);let n=Number(t.rate),r=Number(t.frames);if(gr(n),!(Number.isInteger(r)&&r>=0&&r<=600*n))throw Error(`The sound's length is not a whole number of samples.`);let i=zn(t.data),a=lr(n);if(i.length<Math.ceil(r/ur(a))*a)throw Error(`The sound's samples end too soon: the file is cut short.`);return Object.freeze({rate:n,frames:r,...typeof t.source==`string`?{source:t.source}:{},adpcm:i,samples:fr(i,n,r)})}function hr(e){try{let t=JSON.parse(e);if(t?.trigscript!==`sound`)return`This is not a sound TrigScript imported.`;let n=Number(t.rate),r=Number(t.frames)/n;return`A sound, ${r.toFixed(r<10?2:1)} seconds at ${n.toLocaleString(`en-US`)} Hz${typeof t.source==`string`?`, from ${t.source}`:``}.`}catch(e){return e instanceof Error?e.message:String(e)}}function gr(e){if(!(Number.isInteger(e)&&e>=8e3&&e<=48e3))throw Error(`A sound's rate is 8 000 to 48 000 samples a second, not ${e}.`)}var _r=16,vr=512;(()=>{let e=new Float32Array(8194);for(let t=0;t<e.length;t++){let n=t/vr,r=n===0?1:Math.sin(Math.PI*n)/(Math.PI*n);e[t]=n>=_r?0:r*(.42+.5*Math.cos(Math.PI*n/_r)+.08*Math.cos(2*Math.PI*n/_r))}return e})(),[1,2,3,4,5,6,7].map(e=>e/8).map(e=>{let t=new Float32Array(32),n=0;for(let r=0;r<32;r++){let i=r-15-e,a=.42+.5*Math.cos(Math.PI*i/16.5)+.08*Math.cos(2*Math.PI*i/16.5);t[r]=(i===0?1:Math.sin(Math.PI*i)/(Math.PI*i))*a,n+=t[r]}return t.map(e=>e/n)});var yr=`.notes`,br=1;function xr(e,t){let n=new DataView(e.buffer,e.byteOffset,e.byteLength),r=t=>String.fromCharCode(...e.subarray(t,t+4));if(e.length<14||r(0)!==`MThd`)throw Error(`This is not a MIDI file: a MIDI file starts with MThd.`);let i=n.getUint32(4),a=n.getUint16(8),o=n.getUint16(10),s=n.getUint16(12);if(a>1)throw Error(`This MIDI file holds separate songs (format 2): only formats 0 and 1 are read.`);if(s&32768)throw Error(`This MIDI file counts time in SMPTE frames: only files that count in beats are read.`);let c=s,l=8+i,u=[],d=null,f=new Map;for(let t=0;t<o&&l+8<=e.length;t++){if(r(l)!==`MTrk`){l+=8+n.getUint32(l+4),t--;continue}let i=Math.min(e.length,l+8+n.getUint32(l+4)),a=l+8,o=0,s=0,p=``,m=new Map,h=new Map,g=()=>{let t=0;for(let n=0;n<4;n++){let n=e[a++];if(t=t<<7|n&127,!(n&128))break}return t},_=e=>{let n=`${t}:${e}`,r=f.get(n);return r||(r={track:t,channel:e,name:``,program:m.get(e)??0,notes:[]},f.set(n,r)),r},v=(e,t,n)=>{let r=h.get(e*128+t)?.shift();r&&n>r.tick&&_(e).notes.push({at:r.tick/c,beats:(n-r.tick)/c,pitch:t,velocity:r.velocity})};for(;a<i;){o+=g();let n=e[a];if(n&128)s=n,a++;else if(!s)throw Error(`This MIDI file is damaged: a track starts with data and no event.`);if(n=s,n===255){let t=e[a++],n=g(),r=e.subarray(a,a+n);if(a+=n,t===81&&n===3)u.push([o,r[0]<<16|r[1]<<8|r[2]]);else if(t===88&&n>=2&&!d)d=[r[0],2**r[1]];else if(t===3&&!p)p=new TextDecoder(`latin1`).decode(r).trim();else if(t===47)break;s=0;continue}if(n===240||n===247){a+=g(),s=0;continue}let r=n&240,i=n&15,c=e[a++],l=r===192||r===208?0:e[a++];if(r===144&&l>0){let e=i*128+c;h.get(e)?.length&&v(i,c,o),(h.get(e)??h.set(e,[]).get(e)).push({tick:o,velocity:l}),_(i)}else if(r===128||r===144)v(i,c,o);else if(r===192){m.set(i,c);let e=f.get(`${t}:${i}`);e&&e.notes.length===0&&(e.program=c)}}for(let[e,t]of h)for(let n of t)o>n.tick&&_(e>>7).notes.push({at:n.tick/c,beats:(o-n.tick)/c,pitch:e&127,velocity:n.velocity});for(let e of f.values())e.track===t&&(e.name=p);l=i}u.sort((e,t)=>e[0]-t[0]);let p=u.find(e=>e[0]===0)??u[0],m=p?6e7/p[1]:120,h=[...f.values()].filter(e=>e.notes.length>0),g=new Map;for(let e of h)g.set(e.track,(g.get(e.track)??0)+1);let _=h.map(e=>({name:e.name?g.get(e.track)>1?`${e.name} (channel ${e.channel+1})`:e.name:`Track ${e.track+1}${g.get(e.track)>1||o===1?` channel ${e.channel+1}`:``}`,channel:e.channel+1,program:e.program+1,notes:e.notes.sort((e,t)=>e.at-t.at||e.pitch-t.pitch)}));if(_.length===0)throw Error(`This MIDI file has no notes.`);let v=new Map;for(let e of _){let t=(v.get(e.name)??0)+1;v.set(e.name,t),t>1&&(e.name=`${e.name} ${t}`)}let y=0;for(let e=1;e<u.length;e++)u[e][1]!==u[e-1][1]&&y++;return{bpm:Math.round(m*1e3)/1e3,beats:d?d[0]*4/d[1]:4,tempoChanges:y,tracks:_,...t?{source:t}:{}}}function Sr(e){let t=e=>Math.round(e*960);return JSON.stringify({trigscript:`notes`,version:br,bpm:e.bpm,beats:e.beats,tempoChanges:e.tempoChanges,...e.source?{source:e.source}:{},tracks:e.tracks.map(e=>({name:e.name,channel:e.channel,program:e.program,notes:e.notes.flatMap(e=>[t(e.at),t(e.beats),e.pitch,e.velocity])}))})}function Cr(e){let t;try{t=JSON.parse(e)}catch{throw Error(`These are not notes TrigScript imported: a .notes file is one line of JSON.`)}if(t?.trigscript!==`notes`)throw Error(`These are not notes TrigScript imported.`);if(t.version!==br)throw Error(`These notes are of version ${String(t.version)}; this TrigScript reads version ${br}.`);let n=Number(t.bpm),r=Number(t.beats);if(!(n>0)||!(r>0)||!Array.isArray(t.tracks))throw Error(`These notes are damaged: no tempo, no bar or no tracks.`);let i=t.tracks.map((e,t)=>{let n=e?.notes;if(!Array.isArray(n)||n.length%4!=0||n.some(e=>typeof e!=`number`||!Number.isFinite(e)))throw Error(`These notes are damaged: track ${t+1}'s notes are not four numbers each.`);let r=[];for(let e=0;e<n.length;e+=4)r.push({at:n[e]/960,beats:n[e+1]/960,pitch:n[e+2],velocity:n[e+3]});return{name:String(e.name??`Track ${t+1}`),channel:Number(e.channel??1),program:Number(e.program??1),notes:r}});return{bpm:n,beats:r,tempoChanges:Number(t.tempoChanges??0),tracks:i,...typeof t.source==`string`?{source:t.source}:{}}}function wr(e){try{let t=Cr(e),n=t.tracks.reduce((e,t)=>e+t.notes.length,0),r=Math.max(0,...t.tracks.flatMap(e=>e.notes.map(e=>e.at+e.beats))),i=Math.round(r*60/t.bpm);return`Notes: ${t.tracks.length} track${t.tracks.length===1?``:`s`} (${t.tracks.map(e=>e.name).join(`, `)}), ${n.toLocaleString(`en-US`)} notes, ${Math.round(t.bpm*100)/100} beats a minute (${Math.floor(i/60)}:${String(i%60).padStart(2,`0`)})${t.tempoChanges?`, the tempo changing ${t.tempoChanges} time${t.tempoChanges===1?``:`s`} (a song plays at the first)`:``}${t.source?`, from ${t.source}`:``}.`}catch(e){return e instanceof Error?e.message:String(e)}}var Tr=e=>/\.(?:video|image|sound|notes)$/i.test(e),Er=e=>e.toLowerCase().endsWith(Bn),Dr=e=>e.toLowerCase().endsWith(ar),Or=e=>e.toLowerCase().endsWith(yr),kr=1;function Ar(e){let{width:t,height:n}=e;if(!(Number.isInteger(t)&&Number.isInteger(n)&&t>0&&n>0&&t<=256&&n<=256))throw Error(`A video is 1 to 256 tiles each way, not ${t} × ${n}.`);let r=t*n,i=new In,a=new Uint16Array(1<<Pr).fill(Fn),o=new Uint8Array(r),s=new Uint8Array(r);for(let c of e.frames){if(c.length!==r)throw Error(`A frame of a ${t} × ${n} video has ${r} tiles, not ${c.length}.`);for(let e=0;e<r;e++)s[e]=+!!c[e];for(let e=0,r=0;e<n;e++)for(let c=0;c<t;c++,r++)i.bit(a,Fr(s,o,t,n,c,e),s[r]);[o,s]=[s,o]}let c={trigscript:`video`,version:kr,width:t,height:n,frames:e.frames.length,frameMs:e.frameMs,...e.source?{source:e.source}:{},data:Rn(i.finish())};return JSON.stringify(c)}function jr(e){let t;try{t=JSON.parse(e)}catch{throw Error(`This is not a video TrigScript imported: a .video file is one line of JSON.`)}if(t?.trigscript!==`video`||typeof t.data!=`string`)throw Error(`This is not a video TrigScript imported.`);if(t.version!==kr)throw Error(`This video was written by a newer TrigScript (format ${t.version}); update the plugin to read it.`);let n=Number(t.width),r=Number(t.height),i=Number(t.frames),a=Number(t.frameMs);if(![n,r,i].every(e=>Number.isInteger(e)&&e>=0)||!(a>0))throw Error(`The video's sizes are not whole numbers.`);let o=n*r,s=o+7>>3,c=new Ln(zn(t.data)),l=new Uint16Array(1<<Pr).fill(Fn),u=new Uint8Array(s*i),d=new Uint8Array(o),f=new Uint8Array(o);for(let e=0;e<i;e++){let t=e*s;for(let e=0,i=0;e<r;e++)for(let a=0;a<n;a++,i++){let o=c.bit(l,Fr(f,d,n,r,a,e));f[i]=o,o&&(u[t+(i>>3)]|=1<<(i&7))}if(c.overrun)throw Error(`The video's frames end too soon: the file is cut short.`);[d,f]=[f,d]}return Object.freeze({width:n,height:r,length:i,frameMs:a,...typeof t.source==`string`?{source:t.source}:{},tiles(e){if(!(Number.isInteger(e)&&e>=0&&e<i))throw RangeError(`The video has frames 0 … ${i-1}; there is no frame ${e}.`);let t=new Uint8Array(o),n=e*s;for(let e=0;e<o;e++)t[e]=u[n+(e>>3)]>>(e&7)&1;return t}})}function Mr(e){try{let t=JSON.parse(e);if(t?.trigscript!==`video`)return`This is not a video TrigScript imported.`;let n={width:Number(t.width),height:Number(t.height),length:Number(t.frames),frameMs:Number(t.frameMs),source:typeof t.source==`string`?t.source:void 0},r=Math.round(n.length*n.frameMs/1e3),i=n.frameMs===42?`at the game's speed on Fastest`:`${(1e3/n.frameMs).toFixed(1)} a second`;return`A video, ${n.width} × ${n.height} tiles, ${n.length.toLocaleString(`en-US`)} frame${n.length===1?``:`s`} ${i} (${Math.floor(r/60)}:${String(r%60).padStart(2,`0`)})${n.source?`, from ${n.source}`:``}.`}catch(e){return e instanceof Error?e.message:String(e)}}var Nr=(e,t)=>Er(e)?Kn(t):Dr(e)?hr(t):Or(e)?wr(t):Mr(t),Pr=11;function Fr(e,t,n,r,i,a){let o=a*n+i,s=i>0,c=i+1<n,l=a>0;return(s?e[o-1]:0)|(i>1?e[o-2]:0)<<1|(l&&s?e[o-n-1]:0)<<2|(l?e[o-n]:0)<<3|(l&&c?e[o-n+1]:0)<<4|(a>1?e[o-2*n]:0)<<5|t[o]<<6|(s?t[o-1]:0)<<7|(c?t[o+1]:0)<<8|(l?t[o-n]:0)<<9|(a+1<r?t[o+n]:0)<<10}var Ir=new Map([...xe].filter(([,e])=>e.args.some(e=>e.kind===`comparison`)&&e.args.some(e=>e.kind===`amount`)).map(([e,t])=>[e,t.args.length-2])),Lr=[`minerals`,`gas`,`resources`,`countUnits`,`kills`,`countdown`,`elapsed`,`race`,`slot`,`isHuman`,`hasLeft`,`supply`],Rr=[`unitsAt`,`unitsOf`,`allUnits`,`first`,`nearest`,`randomUnit`,`underMouse`,`stats`],zr=[`keyPressed`,`keyHeld`,`clicked`,`mouse`,`chatted`,`centerLocation`],Br=`trigscript.d.ts`,Vr=`// ── TrigScript ────────────────────────────────────────────────────────────
// Generated for the open map; rebuilt whenever the map's names change. Do not edit.
//
// A script is ordinary TypeScript that runs when you build: every trigger() it calls
// becomes one trigger of the map, in order. Code inside program(() => { … }) runs in
// the game instead (StarCraft: Remastered), built into the map when it is saved.
`;function Hr(e){return`
${e}type Brand<K extends string> = { readonly __kind?: K };
/** A number that is none of the named tables' (units.*, orders.* …): what an argument takes where a table's would be wrong. */
${e}type RawNumber = number & { readonly __kind?: never };
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
/** An order (orders.*, or a raw orders.dat id): what a unit is doing. */
${e}type Order<N extends number = number> = N & Brand<"order">;
/** The orders the Order action gives: orders.Move, orders.Patrol and orders.AttackMove ("move", "patrol", "attack"). */
${e}type OrderOfAction = ${Object.values(ge).map(e=>`Order<${e}>`).join(` | `)};
/** A player colour (colors.*), for stats(player).color. */
${e}type PlayerColor<N extends number = number> = N & Brand<"color">;
${e}type ColorName = __COLOR_NAMES__;
/** A location (locations.*, or a raw 1-based location number; 0 = none). */
${e}type Location<N extends number = number> = N & Brand<"location">;
/** A switch (switches.*, or a raw 0-based switch number). */
${e}type Switch<N extends number = number> = N & Brand<"switch">;
/** A sound of the map (sounds.*, the Sound Editor's list): the string of its path, what playWav() takes. A path in the map's archive as text also works. */
${e}type Sound<N extends number = number> = N & Brand<"sound">;
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
/**
 * A number with a fraction: 16.16 fixed point, −32 768 … 32 767.99998 in steps of 1/65 536. A number is one as soon as a
 * fraction is stored into it (\`let x = 0.5\`, \`x += speed * 0.1\`, \`Math.cos(a)\`), so the annotation is only needed
 * to say so before anything does. + − × ÷ and the comparisons work as on any number, and a whole number beside one is
 * turned into one; Math.floor / round / trunc / ceil make a whole number of it, which is what an index, a count or a
 * place on the map takes. Math.sqrt, sin, cos, tan, atan, atan2 and hypot give one (angles in radians, as in JavaScript).
 */
${e}type fixed = number & Brand<"fixed">;
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
${U.map(([,e])=>`  ${e}?: boolean;`).join(`
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
  /** What the unit is doing: \`if (u.orderId == orders.Move)\`. orders.PlayerGuard is standing guard, orders.AttackUnit attacking. */
  readonly orderId: Order;
  /** Frames until the unit can attack or cast again, 0 … 255; writing it holds the unit's fire that long (the ground weapon's, the air weapon's and the spells' alike). */
  cooldown: number;
  /**
   * Frames left of a unit's or building's making, 0 … 65535; 0 once complete. Writing it lengthens or shortens the making.
   * A building finished early keeps the hit points it had reached, and a Terran one under a third of its full hit points
   * burns down (Remastered, played): heal it after.
   */
  buildTime: number;
  /** The unit's rank, added to the type's (the one shown on its panel: Private, Corporal …), 0 … 255. */
  rank: number;
  /** Frames left of a defensive matrix, 0 … 255: writing one gives the unit a matrix of 250 points for that long; 0 takes it away. */
  matrix: number;
  /** How fast the unit is moving now, in 256ths of a pixel a frame: 0 standing still, 1024 a Marine's walk. Read only. */
  readonly speed: number;
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
  /** Whether the unit is a hallucination: made so, it takes double damage and dies after a while, as a Templar's do. */
  hallucinated: boolean;
  /** Whether the unit moves at its upgraded speed (a Zergling's metabolic boost, a Vulture's ion thrusters) regardless of the upgrade. */
  speedUpgrade: boolean;
  readonly cloaked: boolean;
  readonly burrowed: boolean;
  /**
   * True for about a second after the game raised its "under attack" alert for the unit: a hit out of the player's view.
   * A unit hit on the player's screen does not count — the game keeps no other "recently hit" mark a map may read.
   */
  readonly underAttack: boolean;
  /** True while the unit's order is aimed at another unit (attacking, following, repairing …). */
  readonly hasTarget: boolean;
  /** True while the unit rides in a transport or a bunker. */
  readonly inTransport: boolean;
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
/** A key keyPressed() knows. F2 to F6 are not among them: StarCraft: Remastered reports no press of them. */
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
`}var Ur=Object.keys(Tt).map(e=>JSON.stringify(e)).join(` | `),Wr=Object.entries(wn).map(([e,t])=>`readonly ${e}: ${t}`).join(`; `),Gr=Object.entries(Tt).map(([e,t])=>`readonly ${e}: PlayerColor<${t}>`).join(`; `);function Kr(e){let t=[];for(let[n,r]of Object.entries(Se))t.push(`${e}type ${r} = ${Te(n).map(e=>JSON.stringify(e)).join(` | `)};`);return t.join(`
`)}function qr(e){return`
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
/** Three preserved triggers of sixty-two Wait(0) each: the game goes through the trigger list every 2 frames instead of every 31. Owned by one player whose triggers never wait: a player has one wait slot. */
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
 * else of this program runs meanwhile (other programs and triggers go on). \`while (true) { spawn(); await sleep(seconds(15)); }\`
 * is a wave every fifteen seconds. Unlike wait(), it takes nothing from the triggers: a Wait uses the player's one wait slot.
 * In an async function it is awaited; in a program that is not async, \`sleep(…)\` on its own pauses as before.
 */
${e}function sleep(duration: Duration): Promise<void>;
/**
 * Wait for the next frame — the same as sleep(frames(1)), as a frame loop reads:
 * \`while (true) { …draw…; await nextFrame(); }\`. Inside program() only.
 */
${e}function nextFrame(): Promise<void>;
/**
 * Wait until a condition holds, inside an async program only: \`await until(() => countUnits(P8, units.ZergZergling) === 0)\`.
 * The function is asked once now and then once every frame; the program goes on in the frame it answers true.
 * A condition on its own is asked again the same way: \`await until(bring(P1, units.AnyUnit, locations.Exit, ">=", 1))\`.
 */
${e}function until(test: (() => boolean) | Condition): Promise<void>;
/**
 * A task that start() started: \`t.cancel()\` stops it where it is, \`t.running\` is true until it ends or is cancelled,
 * and \`await t\` waits for it to end. Kept in a variable, it is a number of the program, 0 for none.
 */
${e}interface Task extends Promise<void> {
  readonly __task: true;
  /** Stop the task where it is. Nothing happens when it has ended already. */
  cancel(): void;
  /** True until the task ends or is cancelled. */
  readonly running: boolean;
}
/**
 * Start a task and go on without waiting for it, inside an async program only: \`start(wave(3))\`, or
 * \`start(async () => { … })\`. The arguments are worked out now; the task runs beside the program, from this frame on,
 * and keeps running after the program ends. \`void wave(3)\` starts one too, without a Task to keep.
 *
 * Each start() is a body of its own, and \`max\` of its tasks (16 unless said) can run at once: a start with all of
 * them running starts nothing, and the game says so. \`for (…) start(wave(n), { max: 40 })\`. A loop unrolled when the
 * script is built has a start() for each of its turns.
 */
${e}function start(task: Promise<unknown> | (() => Promise<unknown>), options?: { max?: number }): Task;
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
/** A whole number as a fixed one, so that what is computed with it keeps the fraction: 3 / 2 is 1, 3 / fixed(2) is 1.5. Costs a shift in a program. */
${e}function fixed(value: number): fixed;
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
/** The first unit the filter matches, or null; a set of units — \`first(unitsAt(locations.Base, { owner: P1 }))\` — is its filter. */
${e}function first(filter?: UnitFilter | UnitSet): Unit | null;
/** The unit of a type nearest to the centre of a location, or null; units.AnyUnit for any type. */
${e}function nearest(unit: UnitType, location: Location, filter?: Omit<UnitFilter, "type">): Unit | null;
/** One of the units the filter matches, picked by the game, or null. */
${e}function randomUnit(filter?: UnitFilter | UnitSet): Unit | null;
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
/**
 * For a library: a location of the map's first 63 that the map does not use, taken when the script is
 * built, so the library's users never have to give it one. The same reason gives the same location; the
 * reason is what the map's requirements show. \`const spot = reserveLocation("fog: where each brush is made");\`
 */
${e}function reserveLocation(why: string): Location;
/**
 * A video the script imports, when the script is built: \`import badApple from "./bad-apple.video"\`.
 * A .video file is made by Import Video… in the Explorer — the frames the editor decoded, a tile a pixel,
 * ink or not, a frame for every frame of the game — and kept in the map with the script.
 */
${e}interface Video {
  /** Tiles across. */
  readonly width: number;
  /** Tiles down. */
  readonly height: number;
  /** How many frames. */
  readonly length: number;
  /** How long a frame shows, in milliseconds: 42 is a frame of the game on Fastest. */
  readonly frameMs: number;
  /** How long the whole video plays, in seconds. */
  readonly seconds: number;
  /** Frame i as rows of text, # ink and . not: what fog.picture takes. When the script is built. */
  frame(i: number): readonly string[];
}
/**
 * An image the script imports, when the script is built: \`import logo from "./logo.image"\`.
 * An .image file is made by Import Video… in the Explorer from a picture — its pixels at the size
 * chosen, in grey or in colour, with its transparency — and kept in the map with the script.
 * Everything here is worked out when the script is built; what reaches the game is what the
 * script makes of it: \`fog.picture(logo.scale(64).threshold(140))\`.
 */
${e}interface Image {
  /** Pixels across. */
  readonly width: number;
  /** Pixels down. */
  readonly height: number;
  /** Whether it was kept in colour; when not, a pixel's red, green and blue are its grey. */
  readonly color: boolean;
  /** Whether any pixel is less than opaque. */
  readonly transparent: boolean;
  /** Pixel (x, y)'s grey, 0 black to 255 white. (0, 0) is the top left. */
  grey(x: number, y: number): number;
  /** Pixel (x, y)'s colour, each 0 to 255. */
  rgb(x: number, y: number): { readonly r: number; readonly g: number; readonly b: number };
  /** How opaque pixel (x, y) is: 0 transparent to 255. A pixel under 128 is never ink. */
  alpha(x: number, y: number): number;
  /** The part of the image width × height pixels in size whose top left is (x, y). */
  crop(x: number, y: number, width: number, height: number): Image;
  /** The image at another size (up to 1024 each way), each pixel the average of what it covers; height kept in shape when left out. */
  scale(width: number, height?: number): Image;
  /** The image mirrored: "horizontal" swaps left and right, "vertical" top and bottom. */
  flip(axis: "horizontal" | "vertical"): Image;
  /** The image turned clockwise. */
  rotate(turn: 90 | 180 | 270): Image;
  /** Light for dark: each colour 255 minus itself. */
  invert(): Image;
  /**
   * Rows of text for fog.picture, # the ink: with light ink (the default) a pixel whose grey is
   * level or more, with dark ink one under it. \`logo.threshold(100, { ink: "dark" })\`
   */
  threshold(level?: number, options?: { readonly ink?: "light" | "dark" }): readonly string[];
  /** Rows of digits, a pixel each from 0 (darkest) to count − 1 (lightest), . where it is transparent: 2 to 10 tones. */
  tones(count: number): readonly string[];
  /**
   * Rows of text for fog.picture that show grey: the image cut into cells (cellHeight one more than the width
   * when left out, as the fog's brushes are), each lit by one brush or none — larger for lighter, the largest
   * running into its neighbours — what one cell misses handed on to the next so an area's share of light is
   * its grey. fog.picture draws it a brush a cell at most: 6 × 7 cells over 128 × 96 tiles are about 300.
   * { diffuse: false }: each cell by its own grey alone, an even grid whose greys come in steps.
   * \`fog.picture(photo.halftone(6))\`
   */
  halftone(cellWidth: number, cellHeight?: number, options?: { readonly diffuse?: boolean }): readonly string[];
}
/**
 * Notes when the script is built, imported from a MIDI file (\`import tune from "./tune.notes"\`, made by
 * Import Video… from a .mid): each track's notes, in beats from the start. \`music.midi(tune, { Piano: keys })\`
 * makes a song of the tracks it names, each played by an instrument.
 */
${e}interface Notes {
  /** The tempo the file starts at, beats a minute. */
  readonly bpm: number;
  /** Quarter notes a bar, by the file's time signature (4 for 4/4, 3 for 6/8). */
  readonly beats: number;
  /** How often the tempo changes later in the file: a song plays at one tempo, the first. */
  readonly tempoChanges: number;
  readonly tracks: readonly NotesTrack[];
  /** The MIDI file it came from. */
  readonly source?: string;
}

/** A track of imported notes: one channel of one track of the MIDI file. */
${e}interface NotesTrack {
  /** Its name in the file (unique among the tracks), or "Track 2", "Track 1 channel 3". */
  readonly name: string;
  /** 1 … 16. */
  readonly channel: number;
  /** The General MIDI instrument the file asks for, 1 (piano) … 128. */
  readonly program: number;
  /** Whether it is on channel 10, the drums. */
  readonly drums: boolean;
  /** Its notes in the order they start: \`at\` and \`beats\` in beats (quarter notes), \`pitch\` the MIDI number (60 is C4), \`note\` its name, \`velocity\` 1 … 127. */
  readonly notes: readonly { readonly at: number; readonly beats: number; readonly pitch: number; readonly note: string; readonly velocity: number }[];
}

/**
 * A sound when the script is built: imported (\`import boom from "./boom.sound"\`, made by Import Video… in
 * the Explorer from any sound file) or made by tone(), noise() and silence(). Every method makes a new clip.
 * A program plays one with playWav(boom); the build puts each clip it plays in the map once.
 * In the game a sound starts within 21 ms of its frame; playing it again adds a second copy beside the
 * first, and nothing stops one, so a clip's length and loudness are what is heard. 32 play at once, and
 * copies add with no limiter: keep peak under 1 where they overlap. A clip of 2 seconds or more that a
 * program plays goes in the map as Ogg Vorbis (Remastered plays it). A shorter one, or one a trigger()
 * plays (which 1.16.1 plays too, and it plays no Ogg), is a WAV: IMA ADPCM, a quarter of 16-bit, unless
 * that would distort it (the jumps of a square or saw wave) or it has two channels: then 16-bit.
 */
${e}interface Clip {
  /** How long it plays. */
  readonly seconds: number;
  /** Samples a second. */
  readonly rate: number;
  /** 1, or 2 for a clip with a left and a right (pan(), or a mix with one). */
  readonly channels: 1 | 2;
  /** The loudest sample, 0 to 1; above 1 is cut off when the map's file is written. */
  readonly peak: number;
  /** The part from \`from\` to \`to\` seconds (the end when left out). */
  trim(from: number, to?: number): Clip;
  /** Louder or quieter: 0.5 is half as loud, 2 twice. The game plays it as loud as written. */
  gain(factor: number): Clip;
  /** Rising from silence over the first \`inSeconds\`, falling to it over the last \`outSeconds\`. */
  fade(inSeconds: number, outSeconds?: number): Clip;
  /** Played backwards. */
  reverse(): Clip;
  /** Higher or lower by semitones, as a sampler plays a note: 12 is an octave up and half as long. */
  pitch(semitones: number): Clip;
  /** This clip, then each of these after it. */
  then(...clips: Clip[]): Clip;
  /** \`other\` played over this one, starting \`at\` seconds in (0 when left out). */
  mix(other: Clip, at?: number): Clip;
  /** Played \`times\` times, one after another. */
  repeat(times: number): Clip;
  /**
   * Its loudness through time, a straight line between [seconds, level] points — an instrument's attack,
   * decay, sustain and release: \`tone("C4", 0.5).envelope([0, 0], [0.01, 1], [0.1, 0.6], [0.4, 0.6], [0.5, 0])\`
   */
  envelope(...points: readonly (readonly [number, number])[]): Clip;
  /**
   * Where it is heard, −1 left to 1 right: a balance, the far side turned down, so 0 is the clip as it
   * was. The clip then has two channels.
   */
  pan(position: number): Clip;
  /** Its two channels as one. */
  mono(): Clip;
  /**
   * Never louder than \`ceiling\` (0.84, −1.5 dB, when left out), between the samples too: turned down smoothly over the 5 ms before
   * each peak that would go over, and back up over \`release\` seconds (0.1). What a mix goes through last,
   * so that the parts can add up without cutting off: \`mixdown(parts).limit()\`.
   */
  /**
   * The same clip, put in the map as Ogg Vorbis at \`quality\`, −1 … 10 (5, about 160 kbit/s for two channels, when
   * left out): 4 is about 130, 3 about 110 — smaller files, for clips many of which play at once. However short it is
   * (a clip shorter than two seconds is otherwise a WAV).
   */
  ogg(quality?: number): Clip;
  limit(options?: { readonly ceiling?: number; readonly release?: number }): Clip;
  /** Louder or quieter, so its loudest sample is \`peak\` (0.84, −1.5 dB, when left out). */
  normalize(peak?: number): Clip;
  /** In the map as a WAV however long it is, for StarCraft 1.16.1, which plays no Ogg. */
  wav(): Clip;
  /**
   * A filter. "lowpass" keeps what is below \`cutoff\` hertz, "highpass" what is above, "bandpass" what is
   * near it, "notch" all but it — \`cutoff\` a number, or [seconds, hertz] points to sweep it (a synth's
   * filter opening: \`saw.filter("lowpass", [[0, 300], [0.1, 4000], [0.6, 800]], { resonance: 0.6 })\`);
   * \`resonance\` 0 to 1 rings at the cutoff. "lowshelf" and "highshelf" turn everything below or above
   * \`cutoff\` up or down by \`gain\` dB, "peak" what is around it, \`q\` wide (0.707).
   */
  filter(type: "lowpass" | "highpass" | "bandpass" | "notch" | "lowshelf" | "highshelf" | "peak", cutoff: number | readonly (readonly [number, number])[], options?: { readonly resonance?: number; readonly gain?: number; readonly q?: number }): Clip;
  /**
   * Saturation, \`dB\` of push (6 warm, 18 gritty, 30 fuzz): quiet parts as they were, loud ones rounded
   * off toward a square — the harmonics a guitar amp or a tape adds.
   */
  drive(dB: number): Clip;
  /**
   * An echo \`seconds\` later (a beat's worth: 60 / bpm), each repeat \`feedback\` as loud (0.35) and a little
   * duller (\`tone\`, the hertz kept, 5 000), \`mix\` its level (0.35). \`pingPong\`: left, right, left (two
   * channels). The clip gets longer by the repeats.
   */
  delay(seconds: number, options?: { readonly feedback?: number; readonly mix?: number; readonly tone?: number; readonly pingPong?: boolean }): Clip;
  /**
   * A plate reverb: the room around the sound, different left and right (two channels), the clip longer
   * by its tail. \`decay\` 0 to 1 (0.6; 0.3 a small room, 0.9 a hall), \`damping\` 0 to 1 (0.4: how fast the
   * top dies), \`predelay\` seconds before it starts (0.015), \`mix\` the reverb's level (0.3), \`dry\` the
   * clip's (1), \`width\` 0 to 1 (1).
   */
  reverb(options?: { readonly decay?: number; readonly damping?: number; readonly predelay?: number; readonly mix?: number; readonly dry?: number; readonly width?: number }): Clip;
  /** A chorus: copies a few ms late and wobbling, left and right apart (two channels). \`speed\` Hz (0.8), \`depth\` seconds (0.003), \`mix\` (0.5). */
  chorus(options?: { readonly speed?: number; readonly depth?: number; readonly mix?: number }): Clip;
  /**
   * A compressor: above \`threshold\` dB (−18), every \`ratio\` dB louder (4) comes out one, turned down
   * over \`attack\` seconds (0.005) and back over \`release\` (0.12), eased over a \`knee\` dB wide (6);
   * \`makeup\` dB after (0). Evens a part out, or glues a mix.
   */
  compress(options?: { readonly threshold?: number; readonly ratio?: number; readonly attack?: number; readonly release?: number; readonly knee?: number; readonly makeup?: number }): Clip;
}
/**
 * When the script is built: a tone of \`pitch\` — hertz, or a note's name: "A4" (440), "C#5", "Eb3" — for
 * \`seconds\`, or [seconds, pitch] points to glide (a kick's drop: [[0, 150], [0.08, 45]]). wave: "sine"
 * (the default), "square", "triangle" or "saw"; volume 0 to 1 (0.5). \`voices\` copies (1 to 16) spread
 * \`detune\` cents apart from lowest to highest (20), and \`width\` 0 to 1 across left and right: a
 * supersaw is \`tone("A3", 1, { wave: "saw", voices: 7, detune: 30, width: 0.8 })\`.
 *   const beep = tone("A5", 0.1, { wave: "square", volume: 0.3 }).fade(0, 0.05);
 */
${e}function tone(pitch: number | string | readonly (readonly [number, number | string])[], seconds: number, options?: { readonly wave?: "sine" | "square" | "triangle" | "saw"; readonly volume?: number; readonly rate?: number; readonly voices?: number; readonly detune?: number; readonly width?: number }): Clip;
/**
 * When the script is built: two-operator FM — a sine whose phase another, \`ratio\` times its pitch,
 * pushes by \`index\` (2; or [seconds, index] points, bright at the start and mellow after). ratio 1 a
 * reed or an electric piano, 3.5 or 7 a bell, 0.5 a bass; \`feedback\` 0 to 2 gives the push an edge.
 *   const bell = fm("E5", 2, { ratio: 3.5, index: [[0, 6], [2, 0.3]], volume: 0.3 }).fade(0, 1.5);
 */
${e}function fm(pitch: number | string | readonly (readonly [number, number | string])[], seconds: number, options?: { readonly ratio?: number; readonly index?: number | readonly (readonly [number, number])[]; readonly feedback?: number; readonly volume?: number; readonly rate?: number }): Clip;
/**
 * When the script is built: a plucked string (Karplus–Strong) — a guitar, a harp, a koto. \`brightness\`
 * 0 to 1 (0.5), \`decay\` seconds to fade away (2).
 */
${e}function pluck(pitch: number | string, seconds: number, options?: { readonly brightness?: number; readonly decay?: number; readonly volume?: number; readonly rate?: number }): Clip;
/** When the script is built: noise for \`seconds\` (the same every build) — with fade(), a hit or a burst. */
${e}function noise(seconds: number, options?: { readonly volume?: number; readonly rate?: number }): Clip;
/** When the script is built: nothing for \`seconds\`, to put a gap between clips: \`a.then(silence(0.2), b)\`. */
${e}function silence(seconds: number, options?: { readonly rate?: number }): Clip;
/**
 * When the script is built: clips laid over one another, each from its own time in seconds, as one clip —
 * a song mixed before the game, every note exactly in time. \`mixdown([{ clip: kick, at: 0 }, { clip: hat, at: 0.25 }])\`
 * At the first part's rate, or \`rate\`; two channels when a part has two. \`seconds\`: that long at least.
 */
${e}function mixdown(parts: readonly { readonly clip: Clip; readonly at: number }[], seconds?: number, rate?: number): Clip;
/**
 * Clips the game will play together, each from its time — the bars of a song played one after another and the layers
 * over them — each turned down by one gain, so what they add up to never goes over \`peak\` (0.84, −1.5 dB), between
 * the samples too: what a limiter does for a mix, for sounds the game adds up itself. Never turned up. The same clip
 * given twice comes back as one. \`over\`: clips that may play on top, each at any of its times (a stinger on any bar
 * line), room left for them too; they come back after the parts, turned down with them. When the script is built: \`const [a, b] = together([{ clip: x, at: 0 }, { clip: y, at: 1 }])\`
 */
${e}function together(parts: readonly { readonly clip: Clip; readonly at: number }[], options?: { readonly peak?: number; readonly over?: readonly { readonly clip: Clip; readonly at: readonly number[] }[] }): Clip[];
/** A brush of cover(): which of the shapes (0 the first), centred on tile (x, y) of the picture. */
${e}interface Brush { readonly x: number; readonly y: number; readonly shape: number }
/**
 * When the script is built: the brushes whose union is a picture's ink — rows of text, # the ink — each one
 * of \`shapes\` (rows of text, # its tiles and @ its centre, a row one run of tiles) lying on ink only. Ink
 * thinner than the first shape gets the first shape on it anyway. Greedy, the largest gain first. For a
 * renderer of a library's own: fog.picture is this with the game's sight ranges.
 *   cover([".##.", "####"], [["#@#"]])   // brushes of a 3-wide bar
 * Of a video, each frame's brushes (worked out once while the file and the shapes stay the same).
 */
${e}function cover(picture: readonly string[], shapes: readonly (readonly string[])[]): readonly Brush[];
${e}function cover(video: Video, shapes: readonly (readonly string[])[]): readonly (readonly Brush[])[];
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
 * The colours a text in the game takes, as their colour codes: for an array that holds a colour a cell,
 * \`board[i] = textColors.orange\`, and \`<cell color={board[i]} />\` shows it (0 is an empty cell).
 * grey ends what colour a line can change: everything after it on its line stays grey.
 */
${e}const textColors: { __TEXT_COLORS__ };
/** A colour of a text: one of textColors' names, or a colour code (0 for none). */
${e}type TextColor = keyof typeof textColors | number;
/** What a program shows on the screen, redrawn by the game as the program's variables change. */
${e}const ui: {
  /**
   * Show a text in the player's text lines, top left, and keep it there: the function is worked out again every
   * frame from the program's variables, and shown when it changed. Inside an async program only, as a task: it keeps
   * going after the program moves on, and the Task it gives back stops it (\`board.cancel()\`). Eleven lines: one
   * player's text lines are this text's only, so give a player one ui.lines at a time.
   *
   *   ui.lines(P1, () => (
   *     <>
   *       <line color="yellow">Score {score}</line>
   *       {rows.map((r) => <line>{r.map((c) => <cell color={c} />)}</line>)}
   *     </>
   *   ));
   */
  lines(player: Player, view: () => string): Task;
};
/** A unit as it was when it died, which is what on.died() hands its function: the unit itself is gone. */
${e}interface DeadUnit {
  readonly type: UnitType;
  readonly owner: Player;
  /** Where it died, in pixels (32 a tile). */
  readonly x: number;
  readonly y: number;
}
/** How many of an event's handlers can be waiting at once, when the handler is async (16 unless said, up to 255). */
${e}interface EventOptions { max?: number }
/** What on.order() looks for: a unit filter and, if you like, the order the unit takes up. */
${e}interface OrderFilter extends UnitFilter { order?: Order }
/** What on.killed() looks for: a unit filter and, if you like, the player who killed it. */
${e}interface KillFilter extends UnitFilter { by?: Player }
/**
 * What happens in the game, as it happens: on.created(…), on.died(…), on.chat(…) and the rest each runs its function for
 * every time it happens from the next frame on. Each is a task (it keeps listening after the program moves on, and the
 * Task it gives back stops it), inside an async program — or at the top of a script, where it listens from the start
 * of the game as a program of its own. A function that is not async runs within the frame, once for each time; an
 * async one is started as a task each time, so it can wait: \`max\` of them at once.
 */
${e}const on: {
  /**
   * A unit comes onto the map — made by an action or a program, trained, hatched, landed, placed by a test — and the
   * function is handed it in the next frame. A unit in a transport or a hangar comes on when it first comes out.
   * \`on.created(units.ZergZergling, (u) => { u.energy = 50; })\`
   */
  created(handler: (unit: Unit) => void, options?: EventOptions): Task;
  created(filter: UnitType | UnitFilter, handler: (unit: Unit) => void, options?: EventOptions): Task;
  /**
   * A unit dies or is removed, and the function is handed what it was and where, in the next frame — once for every
   * unit on.created() would have been handed. The filter is of the unit as it died.
   * \`on.died({ owner: P8 }, async (u) => { await sleep(seconds(2)); createUnit(P8, u.type, 1, locations.Spawn); })\`
   */
  died(handler: (unit: DeadUnit) => void, options?: EventOptions): Task;
  died(filter: UnitType | UnitFilter, handler: (unit: DeadUnit) => void, options?: EventOptions): Task;
  /**
   * A unit is killed in a fight — shot, burned, caught in a storm — and the function is handed what it was, where, and
   * the player whose attack killed it. A unit a trigger or a program kills or removes, or one that goes down with its
   * transport, has no killer and is not handed on (on.died() hears every one); nor does one its own player killed (a
   * storm on your own units), for which the game keeps no attacker, as it counts no kill.
   * \`on.killed({ owner: P8, by: P1 }, (u, by) => setResources(by, "add", 25, "ore"))\`
   */
  killed(handler: (unit: DeadUnit, by: Player) => void, options?: EventOptions): Task;
  killed(filter: UnitType | KillFilter, handler: (unit: DeadUnit, by: Player) => void, options?: EventOptions): Task;
  /**
   * A unit takes up a new order — told to move, starting to cast, sieging, going back to guard — and the function is
   * handed it in the next frame, with the order it took up and the one it had. An order held for less than a frame is
   * not seen. This looks at every unit on the map each frame: the hint says what it costs.
   * \`on.order(units.ProtossHighTemplar, orders.CastPsionicStorm, (u) => print("Storm!"))\`
   */
  order(handler: (unit: Unit, order: Order, was: Order) => void, options?: EventOptions): Task;
  order(filter: UnitType | OrderFilter, handler: (unit: Unit, order: Order, was: Order) => void, options?: EventOptions): Task;
  order(filter: UnitType | UnitFilter, order: Order, handler: (unit: Unit, order: Order, was: Order) => void, options?: EventOptions): Task;
  /**
   * A unit turns into another type and stays the same unit: a Siege Tank sieging, a Larva becoming an egg and the egg
   * its unit, a Drone becoming a building, a High Templar becoming an Archon (its partner leaves, as on.died() hears).
   * The function is handed the unit, now of its new type, and the type it was. The filter is of the new type.
   * \`on.morphed(units.TerranSiegeTankSiegeMode, (u) => print("Sieged"))\`
   */
  morphed(handler: (unit: Unit, was: UnitType) => void, options?: EventOptions): Task;
  morphed(filter: UnitType | UnitFilter, handler: (unit: Unit, was: UnitType) => void, options?: EventOptions): Task;
  /**
   * A player types a line that fits the pattern, which is chatted()'s: \`on.chat("-give {n}", (p, { n }) => setResources(p, "add", n, "ore"))\`.
   * Every player P1 … P8 unless \`from\` names one (CurrentPlayer in a program for several players); \`p\` is known
   * when the script is built, so an action can be for them.
   */
  chat<const P extends string>(pattern: P, handler: (player: Player, values: ChatValues<P>) => void, options?: EventOptions & { from?: Player }): Task;
  /** A player presses a key, as keyPressed() sees it: \`on.key("F7", (p) => print("Help", { to: p }))\`. Every player P1 … P8 unless \`from\` names one. */
  key(key: Key, handler: (player: Player) => void, options?: EventOptions & { from?: Player }): Task;
};
/**
 * What the players do, inside program() only. A key, a click and a typed line are true on the one
 * frame they arrive, so look for them in a loop that runs every frame:
 * \`while (true) { if (keyPressed(CurrentPlayer, "F7")) …; sleep(frames(1)); }\`. They reach every
 * player's computer in step, a few frames after they happen. The player is one of P1 … P8 or
 * CurrentPlayer — in a program with \`{ owner: AllPlayers }\`, each player's own keys.
 * The map gives up a little for it: one unit-properties slot, one unit type the map does not use (the
 * Valkyrie, unless the map uses it), and Player 12 to hold the hidden units that carry the input.
 */
/** True on the frame a player's press of a key arrives. Not while the player is typing a message. */
${e}function keyPressed(player: Player, key: Key): boolean;
/**
 * True on every frame a key is down — for moving while it is held. It reaches every player's computer
 * in step, a few frames after it happens, as a press does. Not while the player is typing a message.
 */
${e}function keyHeld(player: Player, key: Key): boolean;
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
/**
 * Centre a location on a point of the map and give it a size, all in pixels; inside program() only. Nothing of its
 * old size is read, so it costs less than keeping the size: \`centerLocation(spot, x, y, 32, 32)\`.
 */
${e}function centerLocation(location: Location, x: number, y: number, width: number, height: number): void;
/**
 * A location's edges as the game holds them now, in pixels (32 to a tile), inside program() only: \`const b =
 * bounds(locations.Pen);\` then \`b.left\`, \`b.top\`, \`b.right\`, \`b.bottom\` read them, and \`b.left += 32\`
 * moves one. A location centerLocation() or Move Location moved is read where it is now.
 */
${e}function bounds(location: Location): { left: number; top: number; right: number; bottom: number };
/** Keep a condition or action in the trigger but switched off (StarEdit's disabled state). */
${e}function disabled<T extends Condition | Action>(item: T): T;
/**
 * The opposite of a condition, for a trigger's conditions list: a comparison flips ("at least 3" becomes
 * "at most 2"), a switch test flips, always becomes never. Throws for "exactly n" and for conditions the
 * game cannot negate in one condition; inside program(), if (!…) handles every condition.
 */
${e}function not(condition: Condition): Condition;
/** A condition by raw type number and record fields, for types the editor does not know. */
${e}function condition(${on.map(e=>`${e}?: number`).join(`, `)}): Condition;
/** An action by raw type number and record fields, for types the editor does not know. */
${e}function action(${sn.map(e=>`${e}?: number`).join(`, `)}): Action;
/** EUD: compare the 32-bit value at a memory address (1.16.1 layout; Remastered emulates it). deaths at player EPD(address). */
${e}function memory(address: number, comparison: Comparison | number, value: number): Condition;
/** EUD: set / add to / subtract from the 32-bit value at a memory address (1.16.1 layout; Remastered emulates it). */
${e}function setMemory(address: number, modifier: Modifier | number, value: number): Action;
/** Preserve Trigger: the trigger runs again next cycle instead of once. */
${e}function preserve(): Action;
`}function Jr(e,t,n,r){let i=De(n),a=i.map(e=>`${e.name}${e.optional?`?`:``}: ${Ee(e.arg.kind)}`),o=n.args.length?`${n.name} — ${n.args.map(e=>e.label).join(`, `)}`:n.name,s=`/** ${o} */\n${e}function ${t}(${a.join(`, `)}): ${r};`,c=i.findIndex(e=>e.arg.kind===`order`);if(c>=0){let n=i.map((e,t)=>`${e.name}${e.optional?`?`:``}: ${t===c?`RawNumber`:Ee(e.arg.kind)}`);s+=`\n/** ${o}: the action's own number for the order, 0 move, 1 patrol, 2 attack. */\n${e}function ${t}(${n.join(`, `)}): ${r};`}if(r!==`Condition`||!Ir.has(t))return s;let l=i.filter(e=>e.arg.kind!==`comparison`&&e.arg.kind!==`amount`).map(e=>`${e.name}: ${Ee(e.arg.kind)}`);return`${s}\n/** ${n.name}, as a number: what the condition compares, read inside program(). */\n${e}function ${t}(${l.join(`, `)}): number;`}function Yr(e,t,n=()=>!0,r){let i=[`/** ${t.doc} */`,`${e}const ${t.object}: {`];r&&i.push(`  // ${r}`);for(let e of t.entries)e.keys.forEach((r,a)=>{n(r,a)&&i.push(`  readonly ${Oe(r)}: ${t.type}<${e.value}>;`)});return i.push(`};`),i.join(`
`)}var Xr=e=>/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(e),Zr={unit:[`UnitTypeStats`,`units.dat, for one unit type. Most fields reach the units made after the write; the ones already on the map keep what they were made with.`],weapon:[`WeaponStats`,`weapons.dat, for one weapon: every unit using it follows at once.`],upgrade:[`UpgradeStats`,`upgrades.dat, for one upgrade.`],tech:[`TechStats`,`techdata.dat, for one technology.`],player:[`PlayerStats`,`The player tables, for one player.`]};function Qr(e){return Object.keys(wt).map(t=>{let[n,r]=Zr[t],i=[`/** ${r} */`,`${e}interface ${n} {`];for(let e of wt[t]){let t=e.type??(e.boolean?`boolean`:`number`);i.push(`  /** ${e.doc}${e.writeOnly?` Set only.`:``} */`),i.push(e.keyed?`  readonly ${e.name}: { [${e.keyed.kind}: number]: ${t} };`:`  ${e.readonly?`readonly `:``}${e.name}: ${t};`)}return i.push(`}`),i.join(`
`)}).join(`
`)}function $r(e){return Object.entries(Tn).map(([t,[n,r]])=>{let i=[`/** ${r} */`,`${e}interface ${n} {`];for(let e of En.filter(e=>e.path[0]===t))i.push(`  /**\n   * ${e.doc}\n   *\n   * ${e.remastered}\n   * @address 0x${e.base.toString(16).toUpperCase()}, ${e.width*8} bits\n   */`),i.push(`  ${e.readonly?`readonly `:``}${e.path[1]}: number;`);return i.push(`}`),i.join(`
`)}).join(`
`)}function ei(e){let t=[`/**`,` * Cells of the game's memory that have no other word in the language, inside program() only:`," * \\`memory.vision.countdown = 1;\\` \\`if (memory.game.frame % 24 == 0) …\\`. Each field's hover says what",` * StarCraft: Remastered does with it; one the game keeps for itself is readonly.`,` */`,`${e}namespace memory {`];for(let[e,[n,r]]of Object.entries(Tn))t.push(`  /** ${r} */`,`  export const ${e}: ${n};`);return t.push(`}`),t.join(`
`)}function ti(e,t){let n=(e,t)=>`${t}/**\n${t} * ${e.doc}\n${t} *\n${t} * ${e.remastered}\n${t} * @address 0x${e.base.toString(16).toUpperCase()}, ${e.width*8} bits\n${t} */`,r=[`/**`,` * A value only this computer knows: it may be different on every player's computer. It can be shown — in text, in`,` * ui.lines(), a sound, the camera — but nothing that changes the game may depend on it, or the game would go`,` * differently on each computer and split. The compiler says so where it happens. To act on one, send it to every`," * computer first: \\`const x = await sync(P1, local.camera.x);\\`",` */`,`${t}type Local<T> = T;`,`/**`,` * What only this computer knows, inside program() only: who sits at it, where its screen is, where its mouse is on the`,` * screen. Each is a Local value: show it as you like; to act on it, sync() it first.`,` */`,`${e}namespace local {`],i=[...new Set(Dn.map(e=>e.path[0]))];for(let e of i){let t=Dn.filter(t=>t.path[0]===e);if(t.length===1&&!t[0].path[1]){r.push(n(t[0],`  `),`  export const ${e}: Local<number>;`);continue}r.push(`  export const ${e}: {`);for(let e of t)r.push(n(e,`    `),`    readonly ${e.path[1]}: Local<number>;`);r.push(`  };`)}return r.push(`  /**`,`   * The unit this computer has selected — the first of a group, the one the panel at the bottom shows — or null. A`,`   * Local value: show it (its hit points, its order, …) as you like; to act on it, select() or sync() first.`,`   *`,`   * Remastered: the selection, read live (its own EUD emulator: each slot a unit's 1.16.1 address). Played.`,`   * @address 0x6284B8, 32 bits a unit, twelve`,`   */`,`  export const selected: Local<Unit | null>;`,`  /** How many units this computer has selected, 0 to 12. */`,`  export const selectionCount: Local<number>;`),r.push(`}`),r.push(`/**`,` * What a player has selected becomes these units — at their computer (the panel shows them) and in the orders every`,` * computer runs for them, as if they had dragged a box round them: a Select command, sent from their computer as`,` * MSQC sends one. The units may be any, Local ones too: select(P1, local.selected) is safe. Up to twelve, written out;`,` * the selection circles may not follow.`,` */`,`${e}function select(player: Player, units: Unit | readonly Unit[]): void;`),r.push(`/**`," * One player's value, sent from their computer to every computer: what \\`value\\` is on \\`player\\`'s computer, the same",` * on all of them, a few frames later (5 or 6 in a game played alone; a game between computers adds its turns).`," * \\`const x = await sync(CurrentPlayer, local.camera.x + 400);\\` Every computer runs the program and reaches the same",` * sync(): only the named player's sends. A whole number from 0 to 1 048 574. A player who is not a person, or has`,` * left, gives 0 at once. Inside an async program, awaited where it is assigned.`,` */`,`${e}function sync(player: Player, value: Local<number>): Promise<number>;`,`/**`,` * Several of one player's values, read on the same frame and sent together: a point stays one point while the mouse`," * moves, and it takes one trip, not one a value. \\`const [x, y] = await sync(P1, local.camera.x + local.mouse.x, local.camera.y + local.mouse.y);\\`",` */`,`${e}function sync(player: Player, a: Local<number>, b: Local<number>): Promise<[number, number]>;`,`${e}function sync(player: Player, a: Local<number>, b: Local<number>, c: Local<number>): Promise<[number, number, number]>;`,`${e}function sync(player: Player, a: Local<number>, b: Local<number>, c: Local<number>, d: Local<number>): Promise<[number, number, number, number]>;`),r.join(`
`)}function ni(e,t){let n=[];for(let r of t.players.entries)r.value<12&&n.push(`/** ${r.keys[1]} */\n${e}const ${r.keys[0]}: Player<${r.value}>;`);return n.push(`/** The player the trigger is running for. */\n${e}const CurrentPlayer: Player<13>;`),n.push(`/** Every player. */\n${e}const AllPlayers: Player<17>;`),n.join(`
`)}function ri(e,t,n){if(!n)return fn(t).map(t=>Yr(e,t)).join(`
`);let r=e=>/^Switch ?(\d+)$/.test(e);return[Yr(e,t.players),Yr(e,t.units,e=>/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(e),`Every unit is also indexable by its StarEdit name: ${t.units.object}["Terran Marine"].`),Yr(e,t.locations),Yr(e,t.switches,e=>{let t=/^Switch(\d+)$/.exec(e);return t?Number(t[1])<=16:!r(e)},`Switch1 … Switch256 exist; the first sixteen are listed. A switch given a name in the map is listed by that name.`),`/** AI scripts, by StarEdit name ("Terran Custom Level") or four-character code. */\n${e}const ${t.aiScripts.object}: { readonly [name: string]: AiScript<number> };`,...[t.weapons,t.upgrades,t.techs,t.orders].map(t=>Yr(e,t,Xr))].join(`
`)}function ii(e,t,n,r){return[Hr(t).replace(`__COLOR_NAMES__`,Ur).replace(`__KEY_NAMES__`,jt.map(e=>JSON.stringify(e)).join(` | `)).replace(`__STATS_TYPES__`,`${Qr(t)}\n${$r(t)}`),Kr(t),qr(e).replace(`__COLOR_TABLE__`,Gr).replace(`__TEXT_COLORS__`,Wr),ei(e),ti(e,t),`// ── Conditions ──`,...[...xe].map(([t,n])=>Jr(e,t,n,`Condition`)),``,`// ── Actions ──`,...[...B].map(([t,n])=>Jr(e,t,n,`Action`)),``,`// ── The map ──`,ni(e,n),ri(e,n,r)].join(`
`)}var ai=`
/** JSX is a text the game shows: \`<line color="yellow">Score {score}</line>\` is a string. */
declare namespace JSX {
  type Element = string;
  interface ElementChildrenAttribute { children: {} }
  interface IntrinsicElements {
    /** A line of its own, in its colour (white unless it says). The lines of a text are put one under another. */
    line: { color?: TextColor; children?: unknown };
    /** What is inside it in its colour; the colour around it comes back after it. */
    span: { color?: TextColor; children?: unknown };
    /** One square: filled in its colour, or empty (lavender) when it has none or 0. A board's cell. */
    cell: { color?: TextColor };
    /** \`width\` squares (10 unless it says), as many of them filled as value is of max. */
    bar: { value: number; max: number; width?: number; color?: TextColor };
  }
}
/** What a component's \`children\` is: the text between its tags (\`function Box(props: { title: string; children?: Children })\`). */
type Children = string | number | boolean | null | undefined | Children[];
declare function __jsx(tag: string, props: object | null, ...children: unknown[]): string;
/** What the build adds after each class at the top of a file, for a program that makes an instance of it. Not for scripts. */
declare function __class(cls: unknown, descriptor: unknown): void;
declare function __listen(descriptor: unknown, at?: unknown): void;
/** What the build adds after each function at the top of a file, for a program that calls it with its own values. Not for scripts. */
declare function __fn(fn: unknown, descriptor: unknown): void;
declare const __fragment: string;
interface ArrayConstructor {
  new <T = number>(arrayLength: number): T[];
  <T = number>(arrayLength: number): T[];
}
`,oi=`
// ── Tests: they run in the editor's simulator, never in the game, and cost the map nothing ──

/** A unit of the simulated game, as a test sees it. */
export interface SimUnit {
  readonly type: UnitType; readonly owner: Player; readonly x: number; readonly y: number;
  readonly hp: number; readonly maxHp: number; readonly shields: number; readonly maxShields: number; readonly energy: number;
  readonly kills: number; readonly orderId: Order; readonly resources: number; readonly invincible: boolean; readonly burrowed: boolean; readonly cloaked: boolean; readonly hallucinated: boolean;
  readonly buildTime: number; readonly rank: number; readonly matrix: number; readonly speed: number; readonly speedUpgrade: boolean; readonly hasTarget: boolean; readonly inTransport: boolean;
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
  /** A unit dies: what a fight is in a test. \`by\`: the player whose kill it is, and on.killed()'s killer. */
  kill(unit: SimUnit, by?: Player): this;
  /** A unit goes without dying. */
  remove(unit: SimUnit): this;
  give(unit: SimUnit, to: Player): this;
  /** A unit turns into another type and stays the same unit, as a Siege Tank sieges: what on.morphed() hears. In the simulator only. */
  morph(unit: SimUnit, type: UnitType): this;
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
  /** The player's screen to a place on the map, its top left corner in pixels: what local.camera reads. The mouse stays where it is on the map. */
  moveCamera(x: number, y: number, player?: Player): this;
  /** The player selects these units (up to twelve), as a drag would at their computer: what local.selected reads. */
  selectUnits(units: readonly SimUnit[], player?: Player): this;

  count(player: Player, type: UnitType, at?: Location): number;
  /** The units on the map, oldest first, as a loop over them comes to them. */
  units(filter?: { owner?: Player; type?: UnitType; at?: Location }): SimUnit[];
  resources(player: Player): { ore: number; gas: number };
  deaths(player: Player, type: UnitType): number;
  kills(player: Player, type: UnitType): number;
  switch(n: Switch): boolean;
  /**
   * What \`player\` sees of the map's fog of war this frame, a text a row of tiles: "#" lit now, "+" seen before (fog),
   * "." never seen. \`area\` takes a part of the map (tiles), the whole of it by default. Null where the world has no
   * fog to read: the simulator does not draw it, the game does — run the tests in the game to check a picture.
   */
  fog(player: Player, area?: { x: number; y: number; width: number; height: number }): string[] | null;
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
  /**
   * In the game: these players, each at a computer of their own — a copy of the game for each, kept in step as a
   * game between people is. What a player does (press, click, type, moveMouse) is done at their computer, and the
   * test fails at the frame the copies stop agreeing, the lines that made them differ named. The simulator runs the
   * test once, as without it.
   */
  players?: readonly Player[];
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
`,si=`// ── A video the script imports: import badApple from "./bad-apple.video"; ──
declare module "*.video" {
  const video: Video;
  export default video;
}
// ── An image the script imports: import logo from "./logo.image"; ──
declare module "*.image" {
  const image: Image;
  export default image;
}
// ── A sound the script imports: import boom from "./boom.sound"; ──
declare module "*.sound" {
  const sound: Clip;
  export default sound;
}
// ── Notes the script imports, from a MIDI file: import tune from "./tune.notes"; ──
declare module "*.notes" {
  const notes: Notes;
  export default notes;
}
`;function ci(e=Sn(),t={}){let n=t.compact===!0,r=ii(`declare `,``,e,n);return n?`${Vr}${r}\n${ai}`:`${Vr}${r}\n${ai}\n// ── The same names, as a module: import { trigger, units } from "${Ae}"; ──\ndeclare module "${Ae}" {\n${`${ii(`export `,`export `,e,!1)}\n${oi}`.split(`
`).map(e=>e&&`  ${e}`).join(`
`)}\n}\n${si}`}var li=[`created`,`died`,`killed`,`order`,`morphed`,`chat`,`key`];[...li],new Set(li),[...Lr,...Rr,...zr];function ui(e,t){let n=e.split(`/`).slice(0,-1);for(let e of t.split(`/`))e!==`.`&&e!==``&&(e===`..`?n.pop():n.push(e));return n.join(`/`)}function di(e,t,n){if(!n.startsWith(`./`)&&!n.startsWith(`../`))return null;let r=ui(t,n);for(let t of[r,`${r}.ts`,`${r}.tsx`,r.replace(/\.js$/,`.ts`),r.replace(/\.js$/,`.tsx`),`${r}/index.ts`,`${r}/index.tsx`])if(e.has(t))return t;return null}var fi=`__libraries__`;function pi(e,t){if(t.startsWith(`.`)||t.startsWith(`/`))return null;let n=`${fi}/${t}`;for(let t of[n,`${n}.ts`,`${n}.tsx`,`${n}/index.ts`,`${n}/index.tsx`])if(e.has(t))return t;return null}var mi={cutscene:`/**
 * Scenes acted out in the game: the standard library's "trigscript/cutscene" (TrigScript 4).
 *
 *   import { Camera, walk, line, play, SECOND } from "trigscript/cutscene";
 *
 *   async function intro(raider: Unit) {
 *     const cam = new Camera(raider.x, raider.y);
 *     await line(units.JimRaynorMarine, "Something's moving out there.", 3 * SECOND);
 *     const there = start(walk(raider, 1200, 640));   // the walk goes on while the camera follows
 *     await cam.follow(raider, 2 * SECOND);
 *     await there;
 *     await cam.pan(1600, 400, 2 * SECOND);
 *     await cam.shake(12);
 *   }
 *
 *   program(async () => {
 *     const raider = first(unitsAt(locations.Base, { owner: P1, type: units.TerranMarine }));
 *     if (!raider) return;
 *     const skipped = await play(P1, start(intro(raider)));   // Escape skips the rest of it
 *     if (skipped) print("Skipped.");
 *   });
 *
 * Everything here is what a trigger can do, done a frame at a time: the camera is Center View on a location the library
 * keeps for itself, moved to where the camera should look; a unit walks by a Move order to another; a line is the
 * speaker's portrait talking and the words in the middle of the screen. Places are pixels (32 a tile), (0, 0) the map's
 * top left; time is frames of the game, 24 a second on Fastest (\`SECOND\`). The camera is the one of the player the
 * program runs as, as Center View's is.
 */
import { centerLocation, centerView, reserveLocation, talkingPortrait, print, sleep, frames, nextFrame, keyPressed, type Player, type Task, type Unit, type UnitType } from "trigscript";
import { easeInOutQuad, easeInQuad, easeOutQuad, easeOutBack } from "trigscript/math";

/** Frames a second of game time on Fastest, the speed a map is played at. */
export const SECOND = 24;

const VIEW = reserveLocation("cutscene: where the camera looks");
const GOAL = reserveLocation("cutscene: where a unit is sent");

/** How a glide speeds up and slows down: evenly, starting slow, ending slow, both, or ending past the mark and back. */
export type Ease = "linear" | "in" | "out" | "inOut" | "back";

/** How far along a glide is at \`t\` (0 at its start, 1 at its end), as \`ease\` has it. */
function eased(t: fixed, ease: Ease): fixed {
  if (ease === "in") return easeInQuad(t);
  if (ease === "out") return easeOutQuad(t);
  if (ease === "inOut") return easeInOutQuad(t);
  if (ease === "back") return easeOutBack(t);
  return t;
}

/**
 * The camera of the player the program runs as: where it looks, and how it gets somewhere else. It looks at its first
 * place as soon as it is made.
 */
export class Camera {
  /** The point the camera is centred on, in pixels. */
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    centerLocation(VIEW, x, y);
    centerView(VIEW);
  }

  /** Look at a point, now. */
  look(x: number, y: number) {
    this.x = x;
    this.y = y;
    centerLocation(VIEW, x, y);
    centerView(VIEW);
  }

  /**
   * Glide to a point over \`time\` frames, looking at each place on the way a frame at a time.
   * @param ease How it speeds up and slows down; "inOut" unless it says.
   */
  async pan(x: number, y: number, time: number, ease: Ease = "inOut") {
    const fromX = this.x;
    const fromY = this.y;
    let i = 1;
    while (i <= time) {
      const k = eased(fixed(i) / time, ease);
      this.look(fromX + Math.round((x - fromX) * k), fromY + Math.round((y - fromY) * k));
      await nextFrame();
      i++;
    }
    this.look(x, y);
  }

  /** Keep a unit in the middle of the screen for \`time\` frames, or until it is gone. */
  async follow(u: Unit, time: number) {
    let i = 0;
    while (i < time && u) {
      this.look(u.x, u.y);
      await nextFrame();
      i++;
    }
  }

  /** Shake for \`time\` frames, \`size\` pixels each way (8 unless it says), and settle where it was. */
  async shake(time: number, size: number = 8) {
    const x = this.x;
    const y = this.y;
    let i = 0;
    while (i < time) {
      const left = (i % 4) < 2;
      const up = (i % 2) === 0;
      centerLocation(VIEW, left ? x - size : x + size, up ? y - size : y + size);
      centerView(VIEW);
      await nextFrame();
      i++;
    }
    this.look(x, y);
  }
}

/**
 * Send a unit to a point by a Move order, and wait until it is there — within \`near\` pixels (48 unless it says) — or
 * \`limit\` frames have passed (30 seconds unless it says), or it is gone.
 * @returns Whether it got there.
 */
export async function walk(u: Unit, x: number, y: number, near: number = 48, limit: number = 30 * SECOND): Promise<boolean> {
  return go(u, x, y, "move", near, limit);
}

/** The same with an Attack order: the unit fights what it meets on the way. */
export async function charge(u: Unit, x: number, y: number, near: number = 48, limit: number = 30 * SECOND): Promise<boolean> {
  return go(u, x, y, "attack", near, limit);
}

async function go(u: Unit, x: number, y: number, how: "move" | "attack", near: number, limit: number): Promise<boolean> {
  centerLocation(GOAL, x, y);
  u.order(how, GOAL);
  let waited = 0;
  while (u && Math.abs(u.x - x) + Math.abs(u.y - y) > near && waited < limit) {
    await nextFrame();
    waited++;
  }
  return !!u && Math.abs(u.x - x) + Math.abs(u.y - y) <= near;
}

/**
 * Send every unit of a group to a point together, and wait until each is there, gone, or \`limit\` frames have passed.
 * @returns How many got there.
 */
export async function walkAll(group: Unit[], x: number, y: number, near: number = 64, limit: number = 30 * SECOND): Promise<number> {
  centerLocation(GOAL, x, y);
  for (const u of group) if (u) u.order("move", GOAL);
  let waited = 0;
  let there = 0;
  while (waited < limit) {
    there = 0;
    let moving = 0;
    for (const u of group) {
      if (!u) continue;
      if (Math.abs(u.x - x) + Math.abs(u.y - y) <= near) there++;
      else moving++;
    }
    if (moving === 0) break;
    await nextFrame();
    waited++;
  }
  return there;
}

/**
 * A line of the scene: the speaker's portrait talks and the words show in the middle of the screen, for \`time\` frames
 * (3 seconds unless it says), and then the scene goes on.
 */
export async function line(speaker: UnitType, text: string, time: number = 3 * SECOND) {
  talkingPortrait(speaker, Math.round((time * 1000) / SECOND));
  print(text, { position: "center" });
  await sleep(frames(time));
}

/**
 * Play a scene, started as a task (\`start(intro())\`), for a player who may skip it: when they press \`key\` (Escape unless
 * it says) the scene stops where it is. Put things where the scene would have left them when it gives true.
 * @returns Whether it was skipped.
 */
export async function play(player: Player, scene: Task, key: "Escape" | "Space" | "Enter" = "Escape"): Promise<boolean> {
  while (scene.running) {
    if (keyPressed(player, key)) {
      scene.cancel();
      return true;
    }
    await nextFrame();
  }
  return false;
}
`,fog:`/**
 * Fog of war as a picture: the standard library's "trigscript/fog" (TrigScript 4).
 *
 *   import { fog } from "trigscript/fog";
 *
 *   const heart = fog.picture([".##.##.", "#######", ".#####.", "..###.."]);
 *
 *   program(async () => {
 *     fog.reveal(P1);                  // the whole map lit once: from now on dark is fog, not black
 *     while (true) {
 *       fog.light(P1, 30, 20, 5);       // a disc of size 5 around tile (30, 20), this frame only
 *       fog.light(P1, 60, 40, heart);   // a picture, its top left on tile (60, 40)
 *       await nextFrame();
 *     }
 *   });
 *
 * The fog is a canvas that starts every frame dark: what a program lights this frame is what shows this frame, and
 * nothing else needs doing. There is no dark brush — the game's sight only ever reveals — so dark is whatever is not
 * lit; to draw dark shapes, light around them (a picture with \`{ ink: "dark" }\`). Dark is also the sharper ink: a lit
 * part is at least a brush wide (3 tiles across, 4 down), while a dark line one tile wide stays exactly that. Nothing
 * else needs doing — the library writes the game's vision countdown after every frame (memory.vision.countdown), so
 * the next frame starts from a wiped board. Watch it on the minimap. With Classic graphics (Options > Graphics) a tile
 * of the map is a pixel there, sharp; Remastered graphics blurs it a few tiles wide.
 *
 * What the board is made of decides how far apart lit and fog look. Remastered draws a tile on the minimap as the
 * average of its art and fog as 0.64 of lit, whatever the tile, so the brightest art is the best board there: plain
 * Ice snow (lit 130 against fog 82, measured 2026-10-19). Classic draws a tile as one colour of its own; Badlands
 * tile 23778 is the widest apart there, and dim and textured in Remastered. Snow played the better of the two.
 *
 * How it draws, played in StarCraft: Remastered (2026-10-17): a brush is a unit made on a tile and taken away in the
 * same trigger pass; the tiles its sight revealed stay lit through the frame. A brush's size is the unit's sight
 * range, so each size is a unit type of its own — the flying heroes below, which no ordinary map places — whose sight
 * is set every frame (Remastered takes a sight write a frame late, so one type cannot change size within a frame).
 * Coordinates are tiles, (0, 0) the map's top left. About 800 brushes a frame is the most the game makes: it keeps a
 * removed unit's place until the next frame.
 */
import { game, program, sleep, frames, stats, units, createUnit, removeUnit, centerLocation, reserveLocation, memory, cover, nextFrame, type Player, type UnitType, type Video } from "trigscript";

/**
 * Each brush's shape, sizes 1 to 11: the tiles a flying unit of that sight range reveals, read out of the game.
 * "@" is the tile the brush is centred on. The game's air sight leaves the centre's row one short below, so every
 * shape reaches a row further up than down.
 */
export const SHAPES: readonly (readonly string[])[] = [
  // 1
  ["###", "###", "#@#", "###"],
  // 2
  [".###.", "#####", "#####", "##@##", "#####", "#####"],
  // 3
  ["..###..", "#######", "#######", "#######", "###@###", "#######", "#######", "#######"],
  // 4
  ["..#####...", ".#######..", "#########.", "##########", "##########", "####@#####", "##########", "##########", "#########.", ".#######..", "......#..."],
  // 5
  ["...#####....", "..#######...", ".#########..", "###########.", "############", "############", "#####@######", "############", "############", "###########.", ".#########..", "..#######...", ".......#...."],
  // 6
  ["....#####.....", "..#########...", ".###########..", "#############.", "#############.", "##############", "##############", "######@#######", "##############", "##############", "#############.", "#############.", ".###########..", "..#########...", "........#....."],
  // 7
  [".....#####......", "...#########....", "..###########...", ".#############..", "###############.", "###############.", "################", "################", "#######@########", "################", "################", "###############.", "###############.", ".#############..", "..###########...", "...#########....", ".........#......"],
  // 8
  ["......#####.......", "....#########.....", "..#############...", ".###############..", ".###############..", "#################.", "#################.", "##################", "##################", "########@#########", "##################", "##################", "#################.", "#################.", ".###############..", ".###############..", "..#############...", "....#########.....", "..........#......."],
  // 9
  ["......#######.......", "....###########.....", "...#############....", "..###############...", ".#################..", "###################.", "###################.", "####################", "####################", "####################", "#########@##########", "####################", "####################", "####################", "###################.", "###################.", ".#################..", "..###############...", "...#############....", "....###########.....", "........#####......."],
  // 10
  [".......#######........", ".....###########......", "....#############.....", "..#################...", "..#################...", ".###################..", "#####################.", "#####################.", "######################", "######################", "######################", "##########@###########", "######################", "######################", "######################", "#####################.", "#####################.", ".###################..", "..#################...", "..#################...", "....#############.....", ".....###########......", ".........#####........"],
  // 11
  ["........#######.........", "......###########.......", "....###############.....", "...#################....", "..###################...", ".#####################..", ".#####################..", "#######################.", "#######################.", "########################", "########################", "########################", "###########@############", "########################", "########################", "########################", "#######################.", "#######################.", ".#####################..", ".#####################..", "..###################...", "...#################....", "....###############.....", "......###########.......", "..........#####........."],
];

/** Each size's unit, size 1 first: flying heroes without a sight upgrade. A map that places one gets odd sight from it. */
const BRUSHES: readonly UnitType[] = [
  units.KukulzaMutalisk, units.KukulzaGuardian, units.YggdrasillOverlord, units.MagellanScienceVessel,
  units.GantrithorCarrier, units.HyperionBattlecruiser, units.NoradIIBattlecruiser, units.TomKazanskyWraith,
  units.DanimothArbiter, units.MojoScout, units.ArtanisScout,
];

/** Where each brush is made: a location the map does not use, taken when the script is built. */
const SPOT = reserveLocation("fog: where each brush is made");

/**
 * One disc: the tiles a brush of \`size\` covers (SHAPES), centred on tile (x, y). What light() does with a size. A brush
 * is a unit made where SPOT is and taken away again at once; each branch makes its own size's, so that the unit type
 * of the action is known when the script is built (one given by the program costs writing it into the action).
 */
const disc = game((player: Player, x: number, y: number, size: number) => {
  discPx(player, x * 32 + 16, y * 32 + 16, size);
});

/**
 * disc() in pixels, (px, py) the centre of the tile: what a caller with many brushes uses, its products by 32 worked
 * out once and the brushes' offsets added (a product by 32 of a number the game holds is a test a bit, about 0.4 µs).
 */
const discPx = game((player: Player, px: number, py: number, size: number) => {
  centerLocation(SPOT, px, py, 32, 32);
  switch (size) {
    case 0: case 1: createUnit(player, BRUSHES[0], 1, SPOT); removeUnit(player, BRUSHES[0]); break;
    case 2: createUnit(player, BRUSHES[1], 1, SPOT); removeUnit(player, BRUSHES[1]); break;
    case 3: createUnit(player, BRUSHES[2], 1, SPOT); removeUnit(player, BRUSHES[2]); break;
    case 4: createUnit(player, BRUSHES[3], 1, SPOT); removeUnit(player, BRUSHES[3]); break;
    case 5: createUnit(player, BRUSHES[4], 1, SPOT); removeUnit(player, BRUSHES[4]); break;
    case 6: createUnit(player, BRUSHES[5], 1, SPOT); removeUnit(player, BRUSHES[5]); break;
    case 7: createUnit(player, BRUSHES[6], 1, SPOT); removeUnit(player, BRUSHES[6]); break;
    case 8: createUnit(player, BRUSHES[7], 1, SPOT); removeUnit(player, BRUSHES[7]); break;
    case 9: createUnit(player, BRUSHES[8], 1, SPOT); removeUnit(player, BRUSHES[8]); break;
    case 10: createUnit(player, BRUSHES[9], 1, SPOT); removeUnit(player, BRUSHES[9]); break;
    default: createUnit(player, BRUSHES[10], 1, SPOT); removeUnit(player, BRUSHES[10]);
  }
});

/**
 * Light the whole map once, so that from now on a tile left dark shows as fog (grey) rather than as never seen
 * (black) — every picture then has the same two tones. Takes one frame.
 * @param player Whose fog: P1 … P8, known when the script is built.
 */
export const reveal = game((player: Player) => {
  const width = memory.map.width;
  const height = memory.map.height;
  // Size 11 is 23 tiles wide: a brush every 14 tiles leaves no gap, and one more past the end, kept inside, reaches the edge.
  for (let y = 2; y < height + 12; y += 14) {
    for (let x = 2; x < width + 12; x += 14) disc(player, Math.min(x, width - 3), Math.min(y, height - 3), 11);
  }
});

/**
 * Light a rectangle of tiles for this frame, worked out while the game runs: its top left on tile (x, y), \`width\`
 * tiles across and \`height\` down. Every one of the five may change from frame to frame — the walls of a raycaster, a
 * bar of a chart. It is exact from 3 × 4 up (the smallest brush); a thinner one is lit a brush wide, centred.
 *
 *   fog.rect(P1, 10, 20, 3, wall);        // a column 3 tiles wide, \`wall\` tall
 *
 * @param player Whose fog: P1 … P8, known when the script is built.
 * @param x The column of its left edge.
 * @param y The row of its top edge.
 * @param width How many tiles across.
 * @param height How many tiles down.
 */
export const rect = game((player: Player, x: number, y: number, width: number, height: number) => {
  if (width < 1 || height < 1) return;
  // Size 1 is 3 tiles across and 4 down, its centre the middle column and the third row: a grid of them, the last
  // column and row moved back to end on the edge (overlapping the one before), covers the rectangle exactly.
  const right = Math.max(x + width - 2, x + 1);
  const bottom = Math.max(y + height - 2, y + 2);
  // (The brush made here, not through disc(): its unit type is then known when the script is built, which makes the
  // action a constant — a size from the program costs a branch and a written field a brush.)
  let cy = y + 2;
  while (true) {
    let cx = x + 1;
    while (true) {
      centerLocation(SPOT, cx * 32 + 16, cy * 32 + 16, 32, 32);
      createUnit(player, BRUSHES[0], 1, SPOT);
      removeUnit(player, BRUSHES[0]);
      if (cx >= right) break;
      cx = Math.min(cx + 3, right);
    }
    if (cy >= bottom) break;
    cy = Math.min(cy + 4, bottom);
  }
});

/** A picture for the fog, made when the script is built: its size in tiles and the brushes that draw it. */
export interface Picture {
  readonly width: number;
  readonly height: number;
  readonly brushes: readonly { readonly x: number; readonly y: number; readonly size: number }[];
}

/**
 * A picture from rows of text, worked out when the script is built: \`#\` is the ink, anything else is not.
 *
 *   fog.picture(["..##..", ".####.", "######"])                     // light ink: the # tiles are lit
 *   fog.picture(["..##..", ".####.", "######"], { ink: "dark" })    // dark ink: the # tiles stay dark, the rest is lit
 *
 * With light ink a lit part thinner than a brush (3 tiles across, 4 down) is drawn a tile or two thicker. An image's
 * halftone (\`fog.picture(photo.halftone(6))\`) is drawn with the brushes it was made of, one a cell. With dark
 * ink every tile of the picture's rectangle that is not \`#\` is lit and the \`#\` tiles keep their shape exactly,
 * however thin — the ink for line art and silhouettes.
 */
export function picture(rows: readonly string[], options: { readonly ink?: "light" | "dark" } = {}): Picture {
  const height = rows.length;
  const width = Math.max(0, ...rows.map((r) => r.length));
  // An image's halftone (image.halftone(6)) comes with the brushes that drew it: a brush a cell, as they are.
  const drawn = (rows as { readonly brushes?: readonly { readonly x: number; readonly y: number; readonly shape: number }[] }).brushes;
  if (drawn && options.ink !== "dark") return Object.freeze({ width, height, brushes: Object.freeze(drawn.map((b) => ({ x: b.x, y: b.y, size: b.shape + 1 }))) });
  // Dark ink: the picture's rectangle lit but for the # tiles, so what is covered is the rest.
  const ink = options.ink === "dark" ? Array.from({ length: height }, (_, y) => Array.from({ length: width }, (_, x) => (rows[y][x] === "#" ? "." : "#")).join("")) : rows;
  const brushes = cover(ink, SHAPES).map((b) => ({ x: b.x, y: b.y, size: b.shape + 1 }));
  return Object.freeze({ width, height, brushes: Object.freeze(brushes) });
}

/**
 * A video's frames as brushes, worked out when the script is built: a word a brush (x | y << 8 | size << 16), the
 * frames one after another, and where each one starts — the tables the game reads a frame from. Once a build.
 */
interface Film { readonly words: readonly number[]; readonly starts: readonly number[] }
const films = new Map<Video, Film>();
function film(video: Video): Film {
  const had = films.get(video);
  if (had) return had;
  const words: number[] = [], starts: number[] = [0];
  for (const brushes of cover(video, SHAPES)) {
    for (const b of brushes) words.push(b.x | (b.y << 8) | ((b.shape + 1) << 16));
    starts.push(words.length);
  }
  const made = { words, starts };
  films.set(video, made);
  return made;
}

/**
 * Light the fog for this frame: a disc, a picture or a frame of a video. Tiles count from the map's top left, (0, 0).
 *
 *   fog.light(P1, 30, 20, 5);              // a disc of size 5 centred on tile (30, 20)
 *   fog.light(P1, 60, 40, heart);          // a picture (fog.picture), its top left on tile (60, 40)
 *   fog.light(P1, 0, 0, badApple, f);      // frame f of a video the script imports, its top left on tile (0, 0)
 *
 * @param player Whose fog: P1 … P8, known when the script is built.
 * @param x The tile's column: a disc's centre, a picture's left edge.
 * @param y The tile's row: a disc's centre, a picture's top edge.
 * @param shape A size, 1 (3 tiles wide) to 11 (23 wide) — it may change while the game runs — a picture, or a video.
 * @param frame Of a video, which frame, from 0: it may change while the game runs. Past the end, nothing is lit.
 */
export const light = game((player: Player, x: number, y: number, shape: number | Picture | Video, frame: number = 0) => {
  if (typeof shape === "number") disc(player, x, y, shape);
  else {
    // The picture's corner in pixels once; each brush is its offset from there (a constant of a picture).
    const px = x * 32 + 16, py = y * 32 + 16;
    if ("brushes" in shape) for (const b of shape.brushes) discPx(player, px + b.x * 32, py + b.y * 32, b.size);
    else {
      const { words, starts } = film(shape);
      const end = starts[frame + 1];
      for (let i = starts[frame]; i < end; i++) {
        const w = words[i];
        // (A row's offset in pixels straight from its byte: the same as ((w >> 8) & 255) * 32, and the shift only has
        // the byte's eight bits to look at.)
        discPx(player, px + (w & 255) * 32, py + ((w & 0xff00) >> 3), w >> 16);
      }
    }
  }
});

/**
 * Play a video in the fog, a frame of it every frame of the game, from its first to its last; resolves when it ends.
 * Inside an async program: \`await fog.play(P1, badApple)\`. On Fastest a game frame is 42 ms, which is what Import
 * Video makes a video's frames by default; the game runs a little slower when a frame is heavy, and so does the video.
 *
 * @param player Whose fog: P1 … P8, known when the script is built.
 * @param video A video the script imports.
 * @param x The column of its left edge, 0 by default.
 * @param y The row of its top edge, 0 by default.
 */
export const play = game(async (player: Player, video: Video, x: number = 0, y: number = 0) => {
  // (A while: a for over a length known when the script is built would be unrolled, a copy of the body a frame.)
  let f = 0;
  while (f < video.length) {
    light(player, x, y, video, f);
    await nextFrame();
    f++;
  }
});

/**
 * How fog.columns() lays its columns out, known when the script is built: \`count\` columns side by side, each \`width\`
 * tiles across (3, a brush's width, by default) and up to \`height\` tiles tall, centred on the middle row. \`ink\`:
 * "light" lights each column (the walls of a raycaster bright, on fog), "dark" lights all but the columns (dark walls
 * between a lit ceiling and floor); dark is cheaper when columns fill most of the board, light when they are short.
 */
export interface ColumnLayout {
  readonly count: number;
  readonly height: number;
  readonly width?: number;
  readonly ink?: "light" | "dark";
  /**
   * How the walls are told apart, with fog.columns()'s \`faces\`. "outline", the default: every wall drawn as its edges —
   * its top and bottom, a brush deep, and a column lit whole wherever one face meets another (on the nearer of the
   * two) — so that blocks read as boxes, the look of the raycasters of monochrome screens; with dark ink, the edges are
   * lit lines through dark walls. A few brushes a column. Chosen over the rest when played (2026-10-17).
   *
   * The others shade the faces whose number is odd (a raycaster's other side) and leave the rest whole: "hollow" —
   * dark, lit only along its top and bottom edges; "ribbed" — hollow and lit across the middle of each half; "panelled"
   * — hollow and lit across its quarters; "line" / "lines" — dark lines a tile thick across it at its middle or its
   * quarters (the finest, and two dozen brushes a column near the eye: for a view with room to spare).
   */
  readonly shading?: "outline" | "lines" | "line" | "hollow" | "ribbed" | "panelled";
}

/**
 * What fog.columns() reads, worked out once a layout when the script is built: for each level of the drawing that is
 * wider than a column (all the columns, a group of them, the last group) and each depth from 0 to half the height, the
 * brushes that cover a rectangle that wide and that deep exactly — the encoder's covers (cover()), a few large brushes
 * in the middle and small ones at the edges. A brush is a word, dx | dy << 8 | size << 16 from the rectangle's top
 * left; \`starts\` says where each (level, depth) begins.
 */
interface ColumnPlan { readonly words: readonly number[]; readonly starts: readonly number[]; readonly group: number; readonly half: number }
const columnPlans = new Map<string, ColumnPlan>();
const COLUMN_GROUP = 6;
function columnPlan(layout: ColumnLayout): ColumnPlan {
  const width = layout.width ?? 3, half = layout.height >> 1, group = Math.min(COLUMN_GROUP, layout.count);
  const key = \`\${layout.count}:\${width}:\${half}\`;
  const had = columnPlans.get(key);
  if (had) return had;
  const words: number[] = [], starts: number[] = [];
  for (const columns of [layout.count, group, layout.count % group || group]) {
    for (let depth = 0; depth <= half; depth++) {
      starts.push(words.length);
      if (depth === 0) continue;
      // A rectangle shallower than a brush is drawn a brush deep, the rest of it on what the level before lit.
      const rows = Array.from({ length: Math.max(depth, 4) }, () => "#".repeat(columns * width));
      for (const b of cover(rows, SHAPES)) words.push(b.x | (b.y << 8) | ((b.shape + 1) << 16));
    }
  }
  starts.push(words.length);
  const made = { words, starts, group, half };
  columnPlans.set(key, made);
  return made;
}

/**
 * One rectangle of fog.columns() wider than a column: the cover at \`at\` (a level and a depth) drawn twice, the half
 * above the middle and the half below, its top rows \`top\` and \`bottom\`, from column \`x\`.
 */
const columnRect = game((player: Player, words: readonly number[], starts: readonly number[], at: number, x: number, top: number, bottom: number) => {
  let i = starts[at];
  const end = starts[at + 1];
  // In pixels once; each brush is its offset (a few bits, a few tests) from there.
  const px = x * 32 + 16, pt = top * 32 + 16, pb = bottom * 32 + 16;
  while (i < end) {
    const w = words[i];
    const dx = (w & 255) * 32, dy = (w & 0xff00) >> 3, size = w >> 16;
    discPx(player, px + dx, pt + dy, size);
    discPx(player, px + dx, pb + dy, size);
    i++;
  }
});

/**
 * One column's part of fog.columns(), in pixels: brushes (3 × 4) a column of 4 rows apart and the last moved back to
 * end on the edge, twice — from \`pt\` and from \`pb\`, the centres of the first brush of each — down a column \`k32\`
 * pixels deep (32 a row; under 4 rows, a brush deep), centred on \`px\`. What the smallest brush covers exactly, worked out
 * here rather than read: it is the most common rectangle by far. In pixels because the caller has them, stepped: a
 * product by 32 of a number the game holds is a test a bit, about 0.4 µs, where a step is an add.
 */
const columnBarPx = game((player: Player, px: number, pt: number, pb: number, k32: number) => {
  // How far down the last brush is from the first.
  const end = Math.max(k32, 128) - 128;
  let r = 0;
  while (true) {
    centerLocation(SPOT, px, pt, 32, 32);
    createUnit(player, BRUSHES[0], 1, SPOT);
    removeUnit(player, BRUSHES[0]);
    centerLocation(SPOT, px, pb, 32, 32);
    createUnit(player, BRUSHES[0], 1, SPOT);
    removeUnit(player, BRUSHES[0]);
    if (r >= end) break;
    const step = Math.min(end - r, 128);
    r += step;
    pt += step;
    pb += step;
  }
});

/** columnBarPx() in tiles: \`k\` rows from row \`top\` down and from row \`bottom\` down, centred on column \`x\`. */
const columnBar = game((player: Player, x: number, top: number, bottom: number, k: number) => {
  columnBarPx(player, x * 32 + 16, top * 32 + 80, bottom * 32 + 80, k * 32);
});

/**
 * A shaded column of fog.columns() (ColumnLayout's \`shading\`): \`a\` is half its height, \`lines\` how many lines across
 * each half — 0 hollow, 1 at its middle, 3 at its quarters. A line is a dark row through a lit column (light ink), or
 * a lit band a brush deep through a dark one; a column too short for its lines is drawn plain.
 */
const columnShaded = game((player: Player, cx: number, mid: number, a: number, dark: boolean, lines: number) => {
  if (lines <= 0) {
    if (dark) { if (a >= 6) columnBar(player, cx, mid - 4, mid, 4); }
    else if (a < 8) columnBar(player, cx, mid - a, mid, a);
    else {
      // Hollow: the edges. Ribbed (-1) and panelled (-3): bands across each half too, centred on its middle or
      // quarters, where there is room for them between the edges.
      columnBar(player, cx, mid - a, mid + a - 4, 4);
      const ribs = -lines;
      if (ribs > 0 && a >= 6 * (ribs + 1)) {
        let k = 1;
        while (k <= ribs) {
          const at = (a * k) / (ribs + 1);
          columnBar(player, cx, mid - at - 2, mid + at - 2, 4);
          k++;
        }
      }
    }
  } else if (a < 5 * (lines + 1)) {
    if (!dark) columnBar(player, cx, mid - a, mid, a);
  } else {
    // From the middle out: lit up to each line, the line's row dark (light ink); or a lit band on each line (dark ink).
    let from = 0, k = 1;
    while (k <= lines + 1) {
      const to = k > lines ? a : (a * k) / (lines + 1);
      if (dark) { if (k <= lines) columnBar(player, cx, mid - to - 2, mid + to - 2, 4); }
      else columnBar(player, cx, mid - to, mid + from, to - from);
      from = to + 1;
      k++;
    }
  }
});

/**
 * Light columns for this frame — the walls of a raycaster, a bar chart — each as tall as the program says, centred on
 * the layout's middle row. The covers are worked out when the script is built (see ColumnLayout), so a frame costs a
 * brush for each part of the picture that differs from its neighbours, not one for every few tiles: a wall that fills
 * the board is a few large brushes.
 *
 *   const VIEW = { count: 42, height: 96, ink: "dark" } as const;
 *   fog.columns(P1, 1, 0, VIEW, heights);          // heights: one a column, in tiles, the program's
 *   fog.columns(P1, 1, 0, VIEW, heights, faces);   // faces: which face of which wall each column shows
 *
 * @param player Whose fog: P1 … P8, known when the script is built.
 * @param x The column of the layout's left edge.
 * @param y The row of its top edge.
 * @param layout How the columns are laid out: known when the script is built.
 * @param heights Each column's height in tiles (0 to the layout's height), an array of the program's.
 * @param faces Which face of which wall each column shows, a number the same for every column of one face — in a
 *   raycaster, \\\`(mapY * width + mapX) * 2 + side\\\` — an array of the program's as long as \`heights\`: what the
 *   layout's \`shading\` tells walls apart by. Optional: without it, every column is lit whole (a bar chart).
 */
export const columns = game((player: Player, x: number, y: number, layout: ColumnLayout, heights: readonly number[], faces?: readonly number[]) => {
  const { words, starts, half, group } = columnPlan(layout);
  const count = layout.count, width = layout.width ?? 3, dark = layout.ink === "dark";
  // (Dark lines through a lit column count up; lit bands through a dark one, ribbed and panelled, down.)
  // (Without faces there is nothing to tell apart, and every column is whole.)
  const outline = faces !== undefined && (layout.shading === undefined || layout.shading === "outline");
  const lines = layout.shading === "lines" ? 3 : layout.shading === "line" ? 1 : layout.shading === "ribbed" ? -1 : layout.shading === "hollow" ? 0 : -3;
  const span = half + 1;
  // Each column's depth from where its lit part starts: the middle row for light ink, the top and bottom for dark.
  // A shaded column of light ink is drawn on its own, after the rest: to the rest it is as if it were not there — and
  // so is every column of a light outline, which is all edges.
  const depth: number[] = new Array(count).fill(0);
  // Half of each column's height, at most half the layout's: worked out once. (Clamped before the shift, the same
  // number: the shift then has the few bits the clamp leaves, where a height from the program could have any.)
  const halves: number[] = new Array(count).fill(0);
  // And in pixels (32 a row), for the bars, which place their brushes in pixels: a small number times 32 is a few tests.
  const halves32: number[] = new Array(count).fill(0);
  let least = half, most = 0;
  // (A light outline is all edges: every depth is 0, nothing to work out.)
  const flat = !dark && outline;
  if (flat) least = 0;
  let i = 0;
  while (i < count) {
    const a = Math.min(Math.max(heights[i], 0), 2 * half + 1) >> 1;
    halves[i] = a;
    halves32[i] = a * 32;
    if (!flat) {
      let d = dark ? half - a : a;
      if (faces !== undefined && !dark && !outline && (faces[i] & 1) != 0) d = 0;
      depth[i] = d;
      if (d < least) least = d;
      if (d > most) most = d;
    }
    i++;
  }
  // A rectangle from depth p, k deep, starts on the rows above and below the middle (light) or below the top and above
  // the bottom (dark); one shallower than 4 is drawn 4 deep, reaching back over what is lit already.
  const mid = y + half;
  // Every column, from depth 0 to the least.
  if (least > 0) {
    const k = Math.max(least, 4);
    if (dark) columnRect(player, words, starts, least, x, y + least - k, y + 2 * half - least);
    else columnRect(player, words, starts, least, x, mid - least, mid + least - k);
  }
  // Each group of columns, from the least to the group's least; then each column, from there to its own. (Nothing,
  // when every column's depth is the least: a light outline's always.)
  let g = most > least ? 0 : count;
  while (g < count) {
    const last = Math.min(g + group, count);
    let gl = half;
    let j = g;
    while (j < last) { if (depth[j] < gl) gl = depth[j]; j++; }
    const level = last - g === group ? 1 : 2;
    if (gl > least) {
      const k = gl - least, kk = Math.max(k, 4);
      if (dark) columnRect(player, words, starts, level * span + k, x + g * width, y + gl - kk, y + 2 * half - gl);
      else columnRect(player, words, starts, level * span + k, x + g * width, mid - gl, mid + gl - kk);
    }
    j = g;
    while (j < last) {
      const k = depth[j] - gl;
      if (k > 0) {
        const kk = Math.max(k, 4), cx = x + j * width + 1;
        if (dark) columnBar(player, cx, y + depth[j] - kk, y + 2 * half - depth[j], k);
        else columnBar(player, cx, mid - depth[j], mid + depth[j] - kk, k);
      }
      j++;
    }
    g = last;
  }
  if (outline) {
    // Where one face meets another, the nearer (taller) of the two columns is an edge.
    const edge: number[] = new Array(count).fill(0);
    let face = faces[0], tall = heights[0];
    i = 1;
    while (i < count) {
      const f = faces[i], h = heights[i];
      if (f != face) { if (h >= tall) edge[i] = 1; else edge[i - 1] = 1; }
      face = f;
      tall = h;
      i++;
    }
    // The bars in pixels: a column's centre stepped across, the middle row's worked out once.
    const mid80 = mid * 32 + 80;
    let px = (x + 1) * 32 + 16;
    i = 0;
    while (i < count) {
      const a = halves[i], a32 = halves32[i];
      if (dark) { if (edge[i] != 0 && a >= 2) columnBarPx(player, px, mid80 - a32, mid80, a32); }
      else if (a > 0) {
        if (edge[i] != 0 || a < 8) columnBarPx(player, px, mid80 - a32, mid80, a32);
        else columnBarPx(player, px, mid80 - a32, mid80 + a32 - 128, 128);
      }
      px += width * 32;
      i++;
    }
  } else if (faces !== undefined) {
    i = 0;
    while (i < count) {
      if ((faces[i] & 1) != 0) columnShaded(player, x + i * width + 1, mid, halves[i], dark, lines);
      i++;
    }
  }
});

/**
 * Keep what was lit this frame on the board for \`n\` frames, and wait them out: \\\`await fog.show(2)\\\` in place of
 * \\\`await nextFrame()\\\` draws every other frame at half the cost. StarCraft: Remastered redraws the fog on the minimap
 * every other frame (measured in two played recordings, 2026-10-17), so a picture drawn every other frame looks the
 * same there as one drawn every frame. The board is wiped at the start of the frame after them, ready for the next.
 *
 * @param n How many frames, 1 to 24, known when the script is built.
 */
export const show = game(async (n: number) => {
  memory.vision.countdown = n;
  await sleep(frames(n));
});

/** Everything above as one name: import { fog } from "trigscript/fog"; fog.light(P1, x, y, 3). */
export const fog = { light, rect, columns, show, play, reveal, picture, SHAPES };

/** The longest fog.show() keeps a picture: the countdown the game sets itself after a wipe is longer than this. */
const SHOW_MOST = 24;

// The canvas: every brush's sight set, every frame, and the board wiped on the next — for as long as the game runs —
// unless a program asked for the picture to stay (fog.show), when the countdown is that program's to run down.
program(() => {
  while (true) {
    for (let s = 1; s <= 11; s++) stats(BRUSHES[s - 1]).sight = s;
    const left = memory.vision.countdown;
    if (left == 0 || left > SHOW_MOST) memory.vision.countdown = 1;
    sleep(frames(1));
  }
});
`,math:`/**
 * Numbers for motion and play: the standard library's "trigscript/math" (TrigScript 4).
 *
 *   import { Vec, lerp, easeOutQuad, distance, angleTo, approach, wrap } from "trigscript/math";
 *
 *   const t = fixed(frame) / 48;                          // 0 to 1 over two seconds
 *   const x = lerp(fromX, toX, easeOutQuad(t));           // eased from one place to another
 *   const v = Vec.fromAngle(angleTo(x, y, tx, ty), fixed(4));
 *   pos = pos.add(v);
 *
 * Fractions are the language's fixed numbers (16.16: four decimal places or so, from about −32 768 to 32 767): a
 * number becomes one when a fraction is stored into it, or written \`fixed(…)\`. Angles are radians, as JavaScript's are.
 * Whole numbers stay whole where they can — \`distanceSq\`, \`manhattan\`, \`wrap\`, \`sign\` — and cost less.
 */

/** π, and a whole turn. */
export const PI = Math.PI;
export const TAU = Math.PI * 2;

/** From a to b by t: a at 0, b at 1, between them in between (t outside 0 … 1 goes past). */
export function lerp(a: fixed, b: fixed, t: fixed): fixed {
  return a + (b - a) * t;
}

/** Where v is from a to b, as lerp's t: 0 at a, 1 at b. */
export function inverseLerp(a: fixed, b: fixed, v: fixed): fixed {
  return b === a ? fixed(0) : (v - a) / (b - a);
}

/** v from the range a1 … b1 into a2 … b2. */
export function remap(v: fixed, a1: fixed, b1: fixed, a2: fixed, b2: fixed): fixed {
  return lerp(a2, b2, inverseLerp(a1, b1, v));
}

/** t kept inside 0 … 1. */
export function clamp01(t: fixed): fixed {
  return t < 0 ? fixed(0) : t > 1 ? fixed(1) : t;
}

/** From \`current\` towards \`target\` by at most \`step\`, never past it: a value that follows another at a speed. */
export function approach(current: number, target: number, step: number): number {
  if (current < target) return current + step > target ? target : current + step;
  return current - step < target ? target : current - step;
}

/** n into 0 … size − 1, going round: wrap(-1, 10) is 9, wrap(12, 10) is 2. */
export function wrap(n: number, size: number): number {
  return ((n % size) + size) % size;
}

/** −1, 0 or 1, by whether n is below, at or above zero. */
export function sign(n: number): number {
  return n > 0 ? 1 : n < 0 ? -1 : 0;
}

/** The distance from one point to another, as the crow flies. */
export function distance(x1: number, y1: number, x2: number, y2: number): fixed {
  return Math.hypot(x2 - x1, y2 - y1);
}

/** The distance squared: whole, and cheaper — compare it with a range squared. */
export function distanceSq(x1: number, y1: number, x2: number, y2: number): number {
  return (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
}

/** The distance along the axes, |dx| + |dy|: what the game's own "nearest" goes by. */
export function manhattan(x1: number, y1: number, x2: number, y2: number): number {
  return Math.abs(x2 - x1) + Math.abs(y2 - y1);
}

/** The angle from one point to another, in radians from −π to π: 0 is to the right (east), π / 2 down (south, y grows down). */
export function angleTo(x1: number, y1: number, x2: number, y2: number): fixed {
  return Math.atan2(y2 - y1, x2 - x1);
}

/** Degrees as radians. */
export function radians(degrees: fixed): fixed {
  return (degrees * PI) / 180;
}

/** Radians as degrees. */
export function degrees(radians: fixed): fixed {
  return (radians * 180) / PI;
}

/* Easing: t from 0 to 1, how far along a motion is at that point of its time — slow then fast, fast then slow, … */

/** Slow at the start. */
export function easeInQuad(t: fixed): fixed {
  return t * t;
}

/** Slow at the end. */
export function easeOutQuad(t: fixed): fixed {
  return t * (2 - t);
}

/** Slow at both ends. */
export function easeInOutQuad(t: fixed): fixed {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

/** Slower at the start than easeInQuad. */
export function easeInCubic(t: fixed): fixed {
  return t * t * t;
}

/** Slower at the end than easeOutQuad. */
export function easeOutCubic(t: fixed): fixed {
  const u = t - 1;
  return u * u * u + 1;
}

/** Goes a little past the end and comes back. */
export function easeOutBack(t: fixed): fixed {
  const u = t - 1;
  return 1 + 2.70158 * u * u * u + 1.70158 * u * u;
}

/** Slow at both ends, smoothly (Hermite: 3t² − 2t³). */
export function smoothstep(t: fixed): fixed {
  return t * t * (3 - 2 * t);
}

/**
 * A point, or a direction and a length: two fixed numbers. Each operation gives a new Vec.
 *
 *   let pos = new Vec(fixed(x), fixed(y));
 *   const toward = new Vec(fixed(tx), fixed(ty)).sub(pos).normalized().scale(fixed(3));
 *   pos = pos.add(toward);
 */
export class Vec {
  x: fixed;
  y: fixed;

  constructor(x: fixed, y: fixed) {
    this.x = x;
    this.y = y;
  }

  /** A direction \`length\` long at \`angle\` radians (0 to the right, π / 2 down). */
  static fromAngle(angle: fixed, length: fixed): Vec {
    return new Vec(Math.cos(angle) * length, Math.sin(angle) * length);
  }

  add(o: Vec): Vec {
    return new Vec(this.x + o.x, this.y + o.y);
  }

  sub(o: Vec): Vec {
    return new Vec(this.x - o.x, this.y - o.y);
  }

  scale(k: fixed): Vec {
    return new Vec(this.x * k, this.y * k);
  }

  dot(o: Vec): fixed {
    return this.x * o.x + this.y * o.y;
  }

  /** How long it is. */
  length(): fixed {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /** The same direction, 1 long (or none, for none). */
  normalized(): Vec {
    const l = this.length();
    const k: fixed = l === 0 ? fixed(0) : 1 / l;
    return new Vec(this.x * k, this.y * k);
  }

  /** Its angle, in radians from −π to π. */
  angle(): fixed {
    return Math.atan2(this.y, this.x);
  }

  /** Turned by \`angle\` radians (clockwise on the map, where y grows down). */
  rotate(angle: fixed): Vec {
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    return new Vec(this.x * c - this.y * s, this.x * s + this.y * c);
  }

  /** How far it is from another point. */
  distanceTo(o: Vec): fixed {
    return this.sub(o).length();
  }

  /** From this towards another by t (0 here, 1 there). */
  lerp(o: Vec, t: fixed): Vec {
    return new Vec(this.x + (o.x - this.x) * t, this.y + (o.y - this.y) * t);
  }
}
`,music:`/**
 * Music in a program: the standard library's "trigscript/music" (TrigScript 4).
 *
 *   import { music } from "trigscript/music";
 *   import pluck from "./pluck.sound";
 *
 *   const lead = music.synth({ wave: "square", volume: 0.2 });
 *   const bass = music.sampler(pluck, "A3");
 *   const drums = music.kit({ k: kick, s: snare, h: hat });
 *
 *   const song = music.song({ bpm: 120 },
 *     music.track(lead,  "C5 - E5 - G5 - - . | A5 - G5 - E5 - - ."),
 *     music.track(bass,  "C3 - - - - - - - | F3 - - - - - - -"),
 *     music.track(drums, "kh h sh h kh h sh h | kh h sh h kh kh sh h"),
 *   );
 *
 *   program(async () => {
 *     start(music.loop(song));          // the song again and again, beside the program
 *     playWav(lead.note("C6", 0.1));     // an instrument's note on its own, for a sound effect
 *   });
 *
 * A pattern is steps, a word each, a quarter of a beat each by default: a note's name starts it ("C4", "F#5", "Bb2"),
 * several with + sound together ("C4+E4+G4"), "-" holds what sounds a step longer, "." is a rest, "|" is only for the
 * eye; "@" after a step's notes says how loud ("C4@0.5"). A kit's step is its sounds' letters ("kh": kick and hat).
 * Everything is worked out when the script is built: each note an instrument plays becomes a clip once (\`trigscript\`'s
 * Clip, put in the map once however often it plays), and the song a table of which clip starts on which frame, which
 * \`play\` reads while the game runs.
 *
 * A longer song is written in sections — parts named once, each section saying what they play in it, a pattern played
 * again until the section is full — and chords by name, their notes drawn by a template:
 *
 *   const parts = { keys: music.part(music.presets.keys()), bass: music.part(music.presets.bass()), drums: music.part(music.drums()) };
 *   const verse = music.section(4, {
 *     keys: music.chords("Am F C G", "1+2+3 - . 1+2+3 . . 1+2+3 -", { octave: 4, lead: true }),
 *     bass: music.chords("Am F C G", "1 - . 1 . 1 3 -", { octave: 2 }),
 *     drums: music.beat({ k: [0, 3, 4], s: [2, 6], h: [0, 1, 2, 3, 4, 5, 6, 7] }, 8),
 *   });
 *   const song = music.arrange({ bpm: 120, steps: 2 }, parts, intro, verse, verse.with({ keys: null }), outro);
 *
 * Music that follows the game is a song of sections cut into bars and layers, a clip each, which the program steers
 * bar by bar — which section, which layers, a stinger on the next beat:
 *
 *   const cut = music.stems(song, { layers: { drums: ["drums"], rest: ["keys", "bass"] } });
 *   program(async () => {
 *     const band = new Band();                    // import { music, Band } from "trigscript/music"
 *     start(music.conduct(cut, band));
 *     if (danger) band.go(cut.section("chorus")); // at the next bar line
 *     if (cleared) band.sting(cut.stinger("crash")); // on the next beat
 *   });
 *
 * What the game does with it (the sound probe, 2026-10-19): a bar is a whole number of frames (42 ms on Fastest), so
 * the tempo is the nearest that fits — \`song.bpm\` says which; a sound starts within 21 ms of its frame; 32 sound at
 * once, and a song that would need more is refused; notes that overlap add, with no limiter, so keep the volumes down.
 * \`render\` mixes a song into one clip when the script is built instead: every note exactly in time, one sound playing,
 * nothing to change while it plays. A program plays to its own player; a program for each player plays to each.
 */
import { game, sleep, frames, playWav, tone, noise, fm, pluck, mixdown, together, memory, type Clip, type Notes } from "trigscript";

/** Seconds a frame lasts on Fastest, the speed a map is played at. */
const FRAME = 0.042;
/** Sounds the game plays at once. */
const VOICES = 32;

/** What plays a pattern's notes: each note a clip, made when the script is built. */
export interface Instrument {
  readonly kind: "notes";
  /**
   * Note \`name\` ("C4", "F#5") lasting \`seconds\`, release and all: a clip to play on its own, too. \`rate\`: samples a
   * second, for an instrument that makes its notes (render asks for 44 100).
   */
  note(name: string, seconds: number, rate?: number): Clip;
}

/** What plays a pattern's letters: a clip a letter. */
export interface Kit {
  readonly kind: "kit";
  readonly hits: Readonly<Record<string, Clip>>;
}

const SEMITONE: Readonly<Record<string, number>> = { c: 0, d: 2, e: 4, f: 5, g: 7, a: 9, b: 11 };

/** A note's number, 69 for A4: "C4" is 60, "C#4" 61, "Db4" 61. */
function noteNumber(name: string): number {
  const m = /^([A-Ga-g])([#b]?)(-?\\d)$/.exec(name);
  if (!m) throw new Error(\`A note is a name with its octave — "C4", "F#5", "Bb2" — not \${JSON.stringify(name)}.\`);
  return 12 * (Number(m[3]) + 1) + SEMITONE[m[1].toLowerCase()] + (m[2] === "#" ? 1 : m[2] === "b" ? -1 : 0);
}

/** Notes kept as they are made, so a note played many times is the same clip (and the same file in the map). */
function remembering(make: (name: string, seconds: number, rate?: number) => Clip): (name: string, seconds: number, rate?: number) => Clip {
  const made = new Map<string, Clip>();
  return (name, seconds, rate) => {
    const key = \`\${name} \${seconds.toFixed(4)} \${rate ?? ""}\`;
    let c = made.get(key);
    if (!c) { c = make(name, seconds, rate); made.set(key, c); }
    return c;
  };
}

/**
 * An instrument from a recording of one note, \`root\` ("A3"): every other note is it played faster or slower, as a
 * sampler does, cut to the note's length with a short release. Where the recording is shorter than a note, the note
 * is as long as the recording.
 */
export function sampler(clip: Clip, root: string = "C4", options: { readonly release?: number; readonly volume?: number } = {}): Instrument {
  const base = noteNumber(root), release = options.release ?? 0.05, volume = options.volume ?? 1;
  return Object.freeze({
    kind: "notes" as const,
    note: remembering((name, seconds) => {
      const pitched = clip.pitch(noteNumber(name) - base).gain(volume);
      return pitched.trim(0, Math.min(pitched.seconds, seconds)).fade(0, Math.min(release, seconds / 2));
    }),
  });
}

/** An attack, a decay to the sustain level, and a release after the note's length, in seconds (sustain 0 … 1). */
export interface Shape { readonly attack?: number; readonly decay?: number; readonly sustain?: number; readonly release?: number }

/** A shape's points for a note held \`held\` seconds, as levels 0 … 1: the attack from 0, the release to 0. */
function shapePoints(shape: Required<Shape>, held: number): [number, number][] {
  const { attack, decay, sustain, release } = shape;
  const h = Math.max(attack + decay, held);
  return [[0, 0], [attack, 1], [attack + decay, sustain], [h, sustain], [h + release, 0]];
}
const full = (s: Shape | undefined, d: Required<Shape>): Required<Shape> => ({ attack: s?.attack ?? d.attack, decay: s?.decay ?? d.decay, sustain: s?.sustain ?? d.sustain, release: s?.release ?? d.release });

/** A synth's filter: its type, the cutoff it rests at, its resonance, and how many octaves above it a note's envelope opens it. */
export interface SynthFilter {
  readonly type?: "lowpass" | "highpass" | "bandpass";
  readonly cutoff: number;
  readonly resonance?: number;
  /** Octaves above the cutoff at the envelope's top (0: the filter does not move). */
  readonly amount?: number;
  /** The filter's own attack, decay, sustain and release, as a note's loudness has. */
  readonly envelope?: Shape;
}

export interface SynthOptions extends Shape {
  readonly wave?: "sine" | "square" | "triangle" | "saw";
  readonly volume?: number;
  /** Copies of each note (1 to 16), \`detune\` cents apart from lowest to highest, \`width\` 0 … 1 across left and right. */
  readonly voices?: number;
  readonly detune?: number;
  readonly width?: number;
  readonly filter?: SynthFilter;
  /** Saturation after the filter, dB of push (\`Clip.drive\`). */
  readonly drive?: number;
  /** Semitones each note slides up from (a negative number: from below) over \`glideTime\` seconds. */
  readonly glide?: number;
  readonly glideTime?: number;
}

/**
 * An instrument made of tones: \`wave\` ("sine", "square", "triangle", "saw") shaped by an attack, a decay to the
 * sustain level, and a release after the note's length — a stack of detuned copies with \`voices\`, through a filter
 * that opens and closes with each note with \`filter\`, saturated with \`drive\`.
 */
export function synth(options: SynthOptions = {}): Instrument {
  const wave = options.wave ?? "square", volume = options.volume ?? 0.2;
  const amp = full(options, { attack: 0.005, decay: 0.08, sustain: 0.7, release: 0.06 });
  const f = options.filter, fshape = full(f?.envelope, { attack: 0.005, decay: 0.25, sustain: 0.2, release: 0.2 });
  const voices = options.voices ?? 1, detune = options.detune ?? (voices > 1 ? 20 : 0), width = options.width ?? 0;
  return Object.freeze({
    kind: "notes" as const,
    note: remembering((name, seconds, rate) => {
      const held = Math.max(amp.attack + amp.decay, seconds - amp.release), length = held + amp.release;
      const r = rate === undefined ? {} : { rate };
      const pitch = options.glide ? [[0, 440 * 2 ** ((noteNumber(name) + options.glide - 69) / 12)], [options.glideTime ?? 0.06, name]] as [number, number | string][] : name;
      let c = tone(pitch, length, { wave, volume, voices, detune, width, ...r });
      if (f) {
        const amount = f.amount ?? 0, base = f.cutoff;
        const cutoff = amount === 0 ? base : shapePoints(fshape, held).map(([t, level]) => [t, base * 2 ** (amount * level)] as [number, number]);
        c = c.filter(f.type ?? "lowpass", cutoff, { resonance: f.resonance ?? 0.1 });
      }
      if (options.drive) c = c.drive(options.drive);
      return c.envelope(...shapePoints(amp, held));
    }),
  });
}

/**
 * An FM instrument (\`fm()\`): \`ratio\` the modulator's pitch to the note's, \`index\` how bright a note starts, falling to
 * \`index × brightness\` over \`bright\` seconds — an electric piano (ratio 1), a bell (3.5), a bass (0.5).
 */
export function fmSynth(options: Shape & { readonly ratio?: number; readonly index?: number; readonly brightness?: number; readonly bright?: number; readonly feedback?: number; readonly volume?: number } = {}): Instrument {
  const amp = full(options, { attack: 0.002, decay: 1.2, sustain: 0.35, release: 0.3 });
  const ratio = options.ratio ?? 1, index = options.index ?? 3, after = index * (options.brightness ?? 0.2), bright = options.bright ?? 0.8, volume = options.volume ?? 0.25;
  return Object.freeze({
    kind: "notes" as const,
    note: remembering((name, seconds, rate) => {
      const held = Math.max(amp.attack + amp.decay, seconds - amp.release), length = held + amp.release;
      return fm(name, length, { ratio, index: [[0, index], [bright, after]], feedback: options.feedback ?? 0, volume, ...(rate === undefined ? {} : { rate }) }).envelope(...shapePoints(amp, held));
    }),
  });
}

/** A plucked-string instrument (\`pluck()\`): \`brightness\` 0 … 1, \`decay\` seconds; a note rings out its decay unless \`cut\`. */
export function strings(options: { readonly brightness?: number; readonly decay?: number; readonly volume?: number; readonly cut?: boolean } = {}): Instrument {
  const brightness = options.brightness ?? 0.55, decay = options.decay ?? 1.5, volume = options.volume ?? 0.3;
  return Object.freeze({
    kind: "notes" as const,
    note: remembering((name, seconds, rate) => {
      const length = options.cut ? seconds + 0.05 : Math.max(seconds + 0.05, Math.min(decay, 4));
      return pluck(name, length, { brightness, decay, volume, ...(rate === undefined ? {} : { rate }) }).fade(0, 0.05);
    }),
  });
}

/**
 * Instruments to start from, each a function that takes the same options as the instrument it is made with, over its
 * own: \`music.presets.supersaw({ volume: 0.1 })\`.
 */
export const presets = {
  /** Seven detuned saws through a filter that opens on each note: a trance lead, big chords. */
  supersaw: (o: SynthOptions = {}) => synth({ wave: "saw", voices: 7, detune: 28, width: 0.7, volume: 0.16, attack: 0.005, decay: 0.25, sustain: 0.8, release: 0.18, filter: { cutoff: 1800, amount: 2, resonance: 0.15, envelope: { decay: 0.35, sustain: 0.35 } }, ...o }),
  /** A slow, wide pad: five saws, the filter low and slowly opening. Give its track a chorus and the reverb. */
  pad: (o: SynthOptions = {}) => synth({ wave: "saw", voices: 5, detune: 18, width: 1, volume: 0.1, attack: 0.35, decay: 0.6, sustain: 0.85, release: 0.8, filter: { cutoff: 700, amount: 1.3, resonance: 0.1, envelope: { attack: 0.6, decay: 1.2, sustain: 0.5, release: 0.8 } }, ...o }),
  /** A round, punchy bass: two saws, the filter snapping shut after each note, a little drive. */
  bass: (o: SynthOptions = {}) => synth({ wave: "saw", voices: 2, detune: 8, volume: 0.32, attack: 0.002, decay: 0.12, sustain: 0.9, release: 0.04, filter: { cutoff: 180, amount: 2.6, resonance: 0.25, envelope: { decay: 0.18, sustain: 0.15, release: 0.05 } }, drive: 6, ...o }),
  /** A squelchy, resonant line (a 303's): one saw, the filter wide open on each note and shutting fast. */
  acid: (o: SynthOptions = {}) => synth({ wave: "saw", volume: 0.22, attack: 0.002, decay: 0.1, sustain: 0.8, release: 0.05, filter: { cutoff: 260, amount: 3.6, resonance: 0.82, envelope: { decay: 0.16, sustain: 0 } }, drive: 10, ...o }),
  /** A warm lead: two square waves a little apart, softened by a filter. */
  lead: (o: SynthOptions = {}) => synth({ wave: "square", voices: 2, detune: 12, width: 0.3, volume: 0.15, attack: 0.004, decay: 0.15, sustain: 0.7, release: 0.12, filter: { cutoff: 2200, amount: 1.2, resonance: 0.2, envelope: { decay: 0.25, sustain: 0.4 } }, ...o }),
  /** The old consoles' lead: a bare square wave. */
  chip: (o: SynthOptions = {}) => synth({ wave: "square", volume: 0.14, attack: 0.002, decay: 0.05, sustain: 0.8, release: 0.03, ...o }),
  /** An electric piano: FM at ratio 1, bright on the strike and mellowing. */
  keys: (o: Parameters<typeof fmSynth>[0] = {}) => fmSynth({ ratio: 1, index: 2.6, brightness: 0.25, bright: 0.6, volume: 0.22, decay: 1.4, sustain: 0.3, release: 0.35, ...o }),
  /** A bell: FM at ratio 3.5, long and shimmering. */
  bell: (o: Parameters<typeof fmSynth>[0] = {}) => fmSynth({ ratio: 3.5, index: 5, brightness: 0.08, bright: 1.6, volume: 0.16, decay: 2.5, sustain: 0, release: 1.2, ...o }),
  /** A plucked string, a little bright. */
  pluck: (o: Parameters<typeof strings>[0] = {}) => strings({ brightness: 0.6, decay: 1.4, ...o }),
};

/**
 * A drum kit made from nothing, a letter a drum: k kick, s snare, c clap, h closed hat, o open hat, t tom, r rim, x crash. At
 * 44 100 Hz (\`rate\`), so the hats keep their top; \`volume\` 0 … 1 over the whole kit (1).
 */
export function drums(options: { readonly rate?: number; readonly volume?: number } = {}): Kit {
  const rate = options.rate ?? 44100, v = options.volume ?? 1;
  const metal = (seconds: number) => [263, 400, 421, 474, 587, 845].map((hz) => tone(hz * 2.6, seconds, { wave: "square", volume: 0.16, rate })).reduce((a, b) => a.mix(b));
  const kick = tone([[0, 170], [0.025, 85], [0.3, 46]], 0.42, { volume: 0.95, rate }).envelope([0, 1], [0.08, 0.85], [0.42, 0])
    .mix(noise(0.006, { volume: 0.35, rate }).filter("highpass", 3000)).drive(5);
  const snare = tone([[0, 260], [0.04, 185]], 0.18, { wave: "triangle", volume: 0.6, rate }).envelope([0, 1], [0.15, 0])
    .mix(noise(0.28, { volume: 0.6, rate }).filter("highpass", 1400).filter("peak", 5000, { gain: 4 }).envelope([0, 1], [0.03, 0.55], [0.26, 0])).drive(4);
  const burst = (at: number) => ({ clip: noise(0.012, { volume: 0.6, rate }).envelope([0, 1], [0.012, 0.2]), at });
  const clap = mixdown([burst(0), burst(0.011), burst(0.023), { clip: noise(0.22, { volume: 0.5, rate }).envelope([0, 1], [0.22, 0]), at: 0.03 }], undefined, rate)
    .filter("bandpass", 1300, { resonance: 0.35 }).gain(1.6);
  const hat = (seconds: number) => metal(seconds).mix(noise(seconds, { volume: 0.4, rate })).filter("highpass", 7200).filter("highshelf", 10000, { gain: 3 }).envelope([0, 1], [seconds * 0.25, 0.4], [seconds, 0]);
  const tom = tone([[0, 190], [0.2, 120]], 0.4, { volume: 0.8, rate }).envelope([0, 1], [0.4, 0]).mix(noise(0.01, { volume: 0.2, rate }).filter("bandpass", 2500));
  const rim = tone(1700, 0.025, { wave: "triangle", volume: 0.5, rate }).mix(noise(0.012, { volume: 0.3, rate }).filter("highpass", 4000)).envelope([0, 1], [0.025, 0]);
  const crash = metal(2).mix(noise(2, { volume: 0.5, rate })).filter("highpass", 4500).filter("peak", 7500, { gain: 3 }).envelope([0, 1], [0.08, 0.5], [2, 0]);
  return kit({ k: kick.gain(v), s: snare.gain(v), c: clap.gain(v), h: hat(0.07).gain(0.55 * v), o: hat(0.4).gain(0.5 * v), t: tom.gain(v), r: rim.gain(v), x: crash.gain(0.45 * v) });
}

/** A kit: a clip a letter, played by a pattern's letters ("kh" plays k and h together). */
export function kit(hits: Readonly<Record<string, Clip>>): Kit {
  for (const k of Object.keys(hits)) if (k.length !== 1 || k === "." || k === "-" || k === "|") throw new Error(\`A kit's sounds are named by one letter each, not \${JSON.stringify(k)}.\`);
  return Object.freeze({ kind: "kit" as const, hits: Object.freeze({ ...hits }) });
}

/* ── Patterns: what is written, and what writes it ── */

/** A pattern: steps a word each, as one text or a text a bar. */
export type Pattern = string | readonly string[];

/** A pattern's steps, the "|" left out. */
const wordsOf = (p: Pattern): string[] => (typeof p === "string" ? p : p.join(" ")).split(/\\s+/).filter((w) => w !== "" && w !== "|");

/** A step's sounds and how loud: "C4+E4@0.6" is C4 and E4 at 0.6; "kh" k and h at 1. */
function velocityOf(word: string, step: number): { body: string; velocity: number } {
  const at = word.indexOf("@");
  if (at < 0) return { body: word, velocity: 1 };
  const body = word.slice(0, at), v = Number(word.slice(at + 1));
  if (body === "" || body === "-" || body === "." || !(v >= 0 && v <= 4)) throw new Error(\`Step \${step + 1}: "@" follows a note, a chord or a kit's letters, with how loud they play, 0 to 4 (1 as written): "C4@0.6", "kh@1.3" — not \${JSON.stringify(word)}.\`);
  return { body, velocity: v };
}

const NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
/** A note's name from its number: 60 is "C4". Sharps, not flats. */
function nameOf(n: number): string {
  const octave = Math.floor(n / 12) - 1;
  if (octave < -1 || octave > 9) throw new Error(\`A note goes from C-1 to B9: this one would be \${NAMES[((n % 12) + 12) % 12]}\${octave}.\`);
  return NAMES[((n % 12) + 12) % 12] + octave;
}

/** Each note of a step moved by a function of its number; holds, rests, kit letters and "@" kept. */
const eachNote = (p: Pattern, move: (n: number) => number): string[] => wordsOf(p).map((w) => w.replace(/[A-Ga-g][#b]?-?\\d/g, (name) => nameOf(move(noteNumber(name)))));

/** A pattern \`semitones\` up (or down: a negative number): \`transpose(tune, 12)\` is the tune an octave up. A text a bar stays a text a bar. */
export function transpose(p: Pattern, semitones: number): Pattern {
  if (!Number.isInteger(semitones)) throw new Error(\`transpose() moves by whole semitones, not \${semitones}.\`);
  if (semitones === 0) return p;
  return typeof p === "string" ? eachNote(p, (n) => n + semitones).join(" ") : p.map((bar) => eachNote(bar, (n) => n + semitones).join(" "));
}

/** A pattern with each step \`by\` steps long — eighths written as sixteenths with \`stretch(p, 2)\`. A text a bar stays a text a bar. */
export function stretch(p: Pattern, by: number): Pattern {
  if (!Number.isInteger(by) || by < 1) throw new Error(\`stretch() makes each step a whole number of steps long, 1 or more — not \${by}.\`);
  const one = (text: string) => wordsOf(text).map((w) => [w, ...Array.from({ length: by - 1 }, () => (w.startsWith(".") ? "." : "-"))].join(" ")).join(" ");
  return typeof p === "string" ? one(p) : p.map(one);
}

/** A pattern \`n\` times over, as one text. */
export function repeat(p: Pattern, n: number): string {
  if (!Number.isInteger(n) || n < 1) throw new Error(\`repeat() plays a pattern a whole number of times, 1 or more — not \${n}.\`);
  return Array.from({ length: n }, () => wordsOf(p).join(" ")).join(" ");
}

/** A kit's bar: the steps (from 0) each letter plays on, \`steps\` steps long — \`beat({ k: [0, 8], s: [4, 12] })\`. */
export function beat(hits: Readonly<Record<string, readonly number[]>>, steps: number = 16): string {
  for (const [k, at] of Object.entries(hits)) for (const s of at) if (!Number.isInteger(s) || s < 0 || s >= steps) throw new Error(\`beat(): \${k} on step \${s}, of steps 0 to \${steps - 1}.\`);
  return Array.from({ length: steps }, (_, i) => Object.keys(hits).filter((k) => hits[k].includes(i)).join("") || ".").join(" ");
}

/** A chord's notes above its root, by what follows the root's name. */
const QUALITIES: Readonly<Record<string, readonly number[]>> = {
  "": [0, 4, 7], m: [0, 3, 7], dim: [0, 3, 6], aug: [0, 4, 8], "+": [0, 4, 8], sus2: [0, 2, 7], sus4: [0, 5, 7], sus: [0, 5, 7], "5": [0, 7],
  "6": [0, 4, 7, 9], m6: [0, 3, 7, 9], "7": [0, 4, 7, 10], maj7: [0, 4, 7, 11], M7: [0, 4, 7, 11], m7: [0, 3, 7, 10], dim7: [0, 3, 6, 9],
  m7b5: [0, 3, 6, 10], "7sus4": [0, 5, 7, 10], "9": [0, 4, 7, 10, 14], maj9: [0, 4, 7, 11, 14], m9: [0, 3, 7, 10, 14], add9: [0, 4, 7, 14], madd9: [0, 3, 7, 14],
};

/** A chord's notes as numbers, lowest first. */
function chordNumbers(symbol: string, octave: number, inversion: number): number[] {
  const m = /^([A-G][#b]?)([^/]*)(?:\\/([A-G][#b]?))?$/.exec(symbol);
  const steps = m ? QUALITIES[m[2]] : undefined;
  if (!m || !steps) throw new Error(\`A chord is a root and what kind — "Am", "C", "G7", "Fmaj7", "Dm7", "Esus4", "Bdim", "C/E" — not \${JSON.stringify(symbol)}. The kinds: \${Object.keys(QUALITIES).map((q) => \`"\${q}"\`).join(", ")}.\`);
  if (!Number.isInteger(inversion) || inversion < 0 || inversion >= steps.length) throw new Error(\`\${symbol} has \${steps.length} notes: its inversion is 0 to \${steps.length - 1}, not \${inversion}.\`);
  const root = noteNumber(m[1] + octave);
  const notes = steps.map((s) => root + s);
  for (let k = 0; k < inversion; k++) notes.push(notes.shift()! + 12);
  if (m[3]) {
    // Over another bass: that note, below the rest.
    let bass = noteNumber(m[3] + octave);
    while (bass >= notes[0]) bass -= 12;
    notes.unshift(bass);
  }
  return notes;
}

/**
 * A chord's notes, as a step plays them: \`chord("Am")\` is "A4+C5+E5", its root in octave 4 (\`octave\`); \`inversion\`
 * moves its lowest notes up an octave, one each — \`chord("E", 3, 1)\` is "G#3+B3+E4". "C/E" is C over an E below it.
 */
export function chord(symbol: string, octave: number = 4, inversion: number = 0): string {
  return chordNumbers(symbol, octave, inversion).map(nameOf).join("+");
}

/** Each chord's notes as numbers, lowest first: the ones written, or the symbol's at \`octave\`. */
const notesOf = (c: string, octave: number): number[] => (/\\d/.test(c) ? c.split("+").map(noteNumber).sort((a, b) => a - b) : chordNumbers(c, octave, 0));

/**
 * A chord played as \`template\` says: its steps name the chord's notes by number, 1 the lowest — "1 3 2 3", "1+2+3 - - -"
 * — past the last, round again an octave up (in a three-note chord, 4 is 1 an octave up); each ^ after a number takes it
 * an octave higher, each _ an octave lower ("1__" the root two octaves down, for a bass). "-", "." and "@" as in any
 * pattern. \`notes\` is a chord's notes ("A3+C4+E4") or its name ("Am", with its root in octave \`octave\`).
 */
export function over(notes: string, template: Pattern, octave: number = 4): string {
  const n = notesOf(notes, octave);
  return wordsOf(template).map((w, s) => {
    const { body, velocity } = velocityOf(w, s);
    if (body === "-" || body === ".") return w;
    const named = body.split("+").map((d) => {
      const m = /^(\\d+)([\\^_]*)$/.exec(d);
      if (!m || Number(m[1]) < 1) throw new Error(\`Step \${s + 1} of a chord's template: its notes are numbers from 1, the lowest, with ^ or _ for an octave up or down — "1", "3^", "1__" — not \${JSON.stringify(d)}.\`);
      const k = Number(m[1]) - 1, up = Math.floor(k / n.length) + (m[2].match(/\\^/g)?.length ?? 0) - (m[2].match(/_/g)?.length ?? 0);
      return nameOf(n[k % n.length] + 12 * up);
    });
    return named.join("+") + (velocity === 1 ? "" : \`@\${velocity}\`);
  }).join(" ");
}

/**
 * A progression played as \`template\` says, a template a chord: \`chords("Am Am E Am Dm C E Am", "1_ 1 2 3")\` — as
 * \`over\` plays one chord. Each chord's root in octave \`octave\` (4); \`lead: true\` turns each chord after the first to
 * the inversion nearest the one before (its notes move least), as a player's hands do. A text a chord.
 */
export function chords(progression: string | readonly string[], template: Pattern, options: { readonly octave?: number; readonly lead?: boolean } = {}): string[] {
  const octave = options.octave ?? 4, list = wordsOf(progression);
  let before: number[] | null = null;
  return list.map((c) => {
    let n = notesOf(c, octave);
    if (options.lead && before && !/\\d/.test(c)) {
      // Each inversion, an octave either side: the one whose notes are nearest those before.
      const prev: number[] = before, mean = prev.reduce((a, b) => a + b, 0) / prev.length;
      let best = n, cost = Infinity;
      for (let inv = 0; inv < n.length; inv++) for (const shift of [-12, 0, 12]) {
        const cand = chordNumbers(c, octave, inv).map((x) => x + shift);
        const d = cand.length === prev.length ? cand.reduce((s, x, i) => s + Math.abs(x - prev[i]), 0) : Math.abs(cand.reduce((a, b) => a + b, 0) / cand.length - mean) * cand.length;
        if (d < cost) { cost = d; best = cand; }
      }
      n = best;
    }
    before = n;
    return over(n.map(nameOf).join("+"), template);
  });
}

/** Seconds \`n\` bars last at \`bpm\` as a song plays it (its bar a whole number of frames): how long to make a riser. */
export function bars(bpm: number, n: number = 1, beats: number = 4): number {
  return n * Math.max(1, Math.round((60 / bpm) * beats / FRAME)) * FRAME;
}

/**
 * What makes a part breathe with the beat, as a mix does under a kick: down to \`1 − depth\` on each beat (\`beat\`
 * seconds apart, from the clip's start) and back over \`release\` of a beat — a part's fx, or a section's:
 * \`{ fx: music.pump(music.bars(143) / 4) }\`.
 */
export function pump(beat: number, depth: number = 0.45, release: number = 0.55): (clip: Clip) => Clip {
  if (!(beat > 0) || !(depth >= 0 && depth <= 1) || !(release > 0 && release <= 1)) throw new Error("pump() takes seconds a beat, how deep (0 … 1) and how long it takes to come back, as a part of a beat (0 … 1).");
  return (c) => {
    const points: [number, number][] = [];
    for (let t = 0; t < c.seconds; t += beat) points.push([t, 1 - depth], [Math.min(c.seconds, t + release * beat), 1], [Math.min(c.seconds, t + beat - 0.004), 1]);
    points.push([c.seconds, 1]);
    return c.envelope(...points);
  };
}

/* ── Sounds between sections ── */

/** Noise rising for \`seconds\` through a filter opening, loudest at the end: what leads into a drop. */
export function riser(seconds: number, options: { readonly volume?: number; readonly rate?: number } = {}): Clip {
  const rate = options.rate ?? 44100, v = options.volume ?? 0.5, s = seconds;
  const swept = noise(s, { volume: v, rate }).filter("bandpass", [[0, 350], [s * 0.6, 1800], [s, 9000]], { resonance: 0.55 });
  const lift = tone([[0, 220], [s, 880]], s, { wave: "saw", voices: 3, detune: 25, width: 0.8, volume: v * 0.25, rate }).filter("lowpass", [[0, 500], [s, 6000]]);
  return swept.mix(lift).envelope([0, 0], [s * 0.5, 0.25], [s * 0.9, 0.85], [s, 1]).fade(0, 0.01);
}

/** A boom to land on: a falling sine under a burst of noise, ringing \`seconds\` (1.5). */
export function impact(options: { readonly seconds?: number; readonly volume?: number; readonly rate?: number } = {}): Clip {
  const rate = options.rate ?? 44100, v = options.volume ?? 0.8, s = options.seconds ?? 1.5;
  return tone([[0, 90], [0.4, 38], [s, 30]], s, { volume: v, rate }).envelope([0, 1], [0.15, 0.7], [s, 0])
    .mix(noise(s, { volume: v * 0.5, rate }).filter("lowpass", [[0, 6000], [s, 300]]).envelope([0, 1], [0.05, 0.4], [s, 0])).drive(3);
}

/** How a track or a part is heard. */
export interface PartOptions {
  /** Where it is heard, −1 left to 1 right; 0, the middle, when left out. */
  readonly pan?: number;
  /** How loud, 1 as the instrument plays. */
  readonly volume?: number;
  /** What it goes through: its whole part in \`render\`, each note on its own in \`play\`. */
  readonly fx?: (clip: Clip) => Clip;
  /** How much of it goes to the song's reverb in \`render\`, 0 … 1 (0). */
  readonly reverb?: number;
}

/** What an instrument plays, step by step. */
export interface Track {
  readonly instrument: Instrument | Kit;
  readonly steps: readonly string[];
  /** Where it is heard, −1 left to 1 right; 0, the middle, when left out. */
  readonly pan: number;
  /** How loud, 1 as the instrument plays. */
  readonly volume: number;
  /** What the track goes through: its whole part in \`render\`, each note on its own in \`play\`. */
  readonly fx?: (clip: Clip) => Clip;
  /** How much of it goes to the song's reverb in \`render\`, 0 … 1 (0). */
  readonly reverb: number;
}

/** A part's options checked, and its defaults filled in. */
function heard(options: PartOptions, what: string): { pan: number; volume: number; reverb: number; fx?: (clip: Clip) => Clip } {
  const pan = options.pan ?? 0, volume = options.volume ?? 1, reverb = options.reverb ?? 0;
  if (!(pan >= -1 && pan <= 1)) throw new Error(\`A \${what}'s pan is −1 (left) to 1 (right), not \${pan}.\`);
  if (!(volume >= 0)) throw new Error(\`A \${what}'s volume is 0 or more, not \${volume}.\`);
  if (!(reverb >= 0 && reverb <= 1)) throw new Error(\`A \${what}'s reverb is 0 to 1, not \${reverb}.\`);
  return { pan, volume, reverb, ...(options.fx ? { fx: options.fx } : {}) };
}

/**
 * A pattern for an instrument: steps a word each — a note or notes joined by +, "-" to hold, "." to rest, "|" for the
 * eye; "@" after a step's notes says how loud, "C4@0.6". \`pan\`: where it is heard, −1 left to 1 right (a panned track's
 * notes have two channels); \`volume\`: 1 as the instrument plays; \`fx\`: what the track goes through —
 * \`(c) => c.delay(0.21).chorus()\` — its whole part when the song is rendered (as a mixer's insert), each note on its own
 * when it is played note by note; \`reverb\`: how much goes to the song's reverb when it is rendered, 0 … 1.
 */
export function track(instrument: Instrument | Kit, pattern: Pattern, options: PartOptions = {}): Track {
  return Object.freeze({ instrument, steps: Object.freeze(wordsOf(pattern)), ...heard(options, "track") });
}

/** An instrument and how it is heard, which a song's sections give its notes: \`arrange\`. */
export interface Part extends Omit<Track, "steps"> { readonly kind: "part" }

/** An instrument as a part of a song made of sections (\`arrange\`), heard as \`track\` says. */
export function part(instrument: Instrument | Kit, options: PartOptions = {}): Part {
  return Object.freeze({ kind: "part" as const, instrument, ...heard(options, "part") });
}

/** How long a section lasts, as its effects need it for their points: seconds, its bars, and seconds a bar. */
export interface SectionTime { readonly seconds: number; readonly bars: number; readonly bar: number }

/** What a section is and does, besides its notes. */
export interface SectionOptions {
  /** What \`song.sections\` calls it. */
  readonly name?: string;
  /**
   * What a part goes through in this section only, given how long the section is — a filter opening over a build:
   * \`{ pad: (c, t) => c.filter("lowpass", [[0, 400], [t.seconds, 8000]]) }\`. Its notes from this section, tails and
   * all, before the part's own \`fx\`. Mixed by \`render\` only: a song with one is not played note by note.
   */
  readonly fx?: Readonly<Record<string, (clip: Clip, time: SectionTime) => Clip>>;
  /** How loud a part is in this section only, 1 as it is. */
  readonly volume?: Readonly<Record<string, number>>;
}

/** Bars of a song: what each part plays in them. */
export interface Section {
  readonly kind: "section";
  readonly name: string;
  readonly bars: number;
  readonly parts: Readonly<Record<string, Pattern>>;
  readonly fx: Readonly<Record<string, (clip: Clip, time: SectionTime) => Clip>>;
  readonly volume: Readonly<Record<string, number>>;
  /** This section with some parts written again — null: that part rests — and these options over its own. */
  with(parts: Readonly<Record<string, Pattern | null>>, options?: SectionOptions): Section;
}

/**
 * \`bars\` bars of a song (\`arrange\`), and what each part plays in them, by the part's name: \`{ lead: tune, drums: beat }\`.
 * A pattern shorter than the section plays again until it is filled, so a bar of drums fills eight; a part not named
 * rests. \`options\`: its name, a part's effects or volume for this section only.
 */
export function section(bars: number, parts: Readonly<Record<string, Pattern>>, options: SectionOptions = {}): Section {
  if (!Number.isInteger(bars) || bars < 1) throw new Error(\`A section is a whole number of bars, 1 or more — not \${bars}.\`);
  for (const [k, v] of Object.entries(options.volume ?? {})) if (!(v >= 0)) throw new Error(\`A section's volume for \${k} is 0 or more, not \${v}.\`);
  const made: Section = Object.freeze({
    kind: "section" as const, name: options.name ?? "", bars,
    parts: Object.freeze({ ...parts }), fx: Object.freeze({ ...(options.fx ?? {}) }), volume: Object.freeze({ ...(options.volume ?? {}) }),
    with(changes: Readonly<Record<string, Pattern | null>>, more: SectionOptions = {}): Section {
      const next: Record<string, Pattern> = { ...parts };
      for (const [k, p] of Object.entries(changes)) { if (p === null) delete next[k]; else next[k] = p; }
      return section(bars, next, { name: more.name ?? made.name, fx: { ...made.fx, ...(more.fx ?? {}) }, volume: { ...made.volume, ...(more.volume ?? {}) } });
    },
  });
  return made;
}

/** A song's tempo and grid. */
export interface SongOptions {
  readonly bpm: number;
  /** Steps a beat (4: sixteenths). */
  readonly steps?: number;
  /** Beats a bar (4). */
  readonly beats?: number;
  /** How late every second step starts, as a part of a step: 0 straight (as it is when left out), 1/3 a triplet's lilt. */
  readonly swing?: number;
}

/** Where a song's section is: from bar \`bar\` (0 the first) for \`bars\`, from frame \`frame\`. */
export interface SongSection { readonly name: string; readonly bar: number; readonly bars: number; readonly frame: number }

/** Steps of a track that belong to one section, and what that section does to them. */
interface Piece { readonly from: number; readonly to: number; readonly volume: number; readonly fx?: (clip: Clip, time: SectionTime) => Clip; readonly time: SectionTime }
const piecesOf = new WeakMap<Track, readonly Piece[]>();
/** A song of sections' parts, by name, and the track each became: what \`stems\` cuts. */
const partsOf = new WeakMap<Song, readonly { readonly name: string; readonly track: Track }[]>();

/**
 * A song made of sections, one after another: \`parts\` names each instrument and how it is heard; each section says
 * what the parts play in it. A section can be written once and played again — \`arrange(o, parts, intro, verse, verse,
 * chorus)\` — or played again changed: \`verse.with({ lead: transpose(tune, 12) })\`.
 */
export function arrange(options: SongOptions, parts: Readonly<Record<string, Part>>, ...sections: readonly Section[]): Song {
  const { perBar, barFrames } = grid(options);
  if (sections.length === 0) throw new Error("arrange() takes the song's sections, one at least.");
  const names = Object.keys(parts);
  for (const s of sections) for (const k of [...Object.keys(s.parts), ...Object.keys(s.fx), ...Object.keys(s.volume)]) {
    if (!(k in parts)) throw new Error(\`A section\${s.name ? \` (\${s.name})\` : ""} names \${JSON.stringify(k)}, which is no part of the song: its parts are \${names.join(", ")}.\`);
  }
  const tracks = names.map((k) => {
    const steps: string[] = [], pieces: Piece[] = [];
    for (const s of sections) {
      const length = s.bars * perBar, from = steps.length, p = s.parts[k];
      if (p === undefined) for (let i = 0; i < length; i++) steps.push(".");
      else {
        const words = wordsOf(p);
        if (words.length === 0 || length % words.length !== 0) throw new Error(\`\${k}\${s.name ? \` in \${s.name}\` : ""}: a pattern of \${words.length} steps does not fill \${s.bars} bar\${s.bars === 1 ? "" : "s"} of \${perBar} steps evenly.\`);
        for (let i = 0; i < length; i++) steps.push(words[i % words.length]);
      }
      const fx = k in s.fx ? s.fx[k] : undefined, volume = s.volume[k] ?? 1;
      if (fx || volume !== 1) pieces.push({ from, to: from + length, volume, ...(fx ? { fx } : {}), time: { seconds: s.bars * barFrames * FRAME, bars: s.bars, bar: barFrames * FRAME } });
    }
    const t = track(parts[k].instrument, steps, parts[k]);
    if (pieces.length) piecesOf.set(t, pieces);
    return t;
  });
  let bar = 0;
  const placedSections = sections.map((s) => { const at = { name: s.name, bar, bars: s.bars, frame: bar * barFrames }; bar += s.bars; return Object.freeze(at); });
  const made = compose(options, tracks, placedSections);
  partsOf.set(made, names.map((k, i) => ({ name: k, track: tracks[i] })));
  return made;
}

/** A clip as a track plays it note by note: through its fx, at its volume and its pan, made once a clip a track. */
function placed(t: Track, made: Map<Clip, Clip>, c: Clip): Clip {
  if (t.pan === 0 && t.volume === 1 && !t.fx) return c;
  let p = made.get(c);
  if (!p) {
    p = t.fx ? t.fx(c) : c;
    if (t.volume !== 1) p = p.gain(t.volume);
    if (t.pan !== 0) p = p.pan(t.pan);
    made.set(c, p);
  }
  return p;
}

/** What a song's notes are, kept for render, which makes them again at its own rate; \`piece\`, the section whose effects it goes through. */
interface Score { readonly at: number; readonly track: Track; readonly made: Map<Clip, Clip>; readonly velocity: number; readonly piece?: Piece; readonly name?: string; readonly seconds?: number; readonly hit?: Clip }
const scores = new WeakMap<object, readonly Score[]>();

/** A song, when the script is built: the tables \`play\` reads, and what it takes. */
export interface Song {
  /**
   * Frames a step lasts: a bar is a whole number of frames, a step need not be (2.5 for sixteenths at 143 beats a
   * minute). Played note by note, a note starts on the frame nearest its time — within the 21 ms the game's own
   * mixer starts a sound in anyway; rendered, exactly on it.
   */
  readonly stepFrames: number;
  /** Frames a bar lasts, a whole number. */
  readonly barFrames: number;
  /** Beats a bar. */
  readonly beats: number;
  /** The tempo it plays at: the nearest to the one asked for whose bar is a whole number of frames. */
  readonly bpm: number;
  /** Steps, the longest track's. */
  readonly steps: number;
  /** Its sections, made by \`arrange\`, in the order they play (none for a song of tracks). */
  readonly sections: readonly SongSection[];
  /** Frames it lasts, its last note's release included. */
  readonly frames: number;
  readonly seconds: number;
  /** Each clip the song plays, once. */
  readonly clips: readonly Clip[];
  /** Each note in the order they start: the frame it starts on, from 0, and which of \`clips\` it is. */
  readonly at: readonly number[];
  readonly which: readonly number[];
  /** The most notes sounding at once: \`play\` refuses a song of more than 32 (\`render\` has no limit). */
  readonly voices: number;
}

/** A song's grid: steps a bar, and frames a bar and a step. */
function grid(options: SongOptions): { perBar: number; barFrames: number; stepFrames: number } {
  const perBeat = options.steps ?? 4, beats = options.beats ?? 4, swing = options.swing ?? 0;
  if (!(options.bpm > 0) || !(perBeat > 0) || !(beats > 0)) throw new Error("A song takes a tempo, { bpm: 120 }, steps a beat (4 by default) and beats a bar (4).");
  if (!(swing >= 0 && swing < 1)) throw new Error(\`A song's swing is 0 (straight) to under 1 (a step late), not \${swing}.\`);
  const barFrames = Math.max(1, Math.round((60 / options.bpm) * beats / FRAME));
  return { perBar: perBeat * beats, barFrames, stepFrames: barFrames / (beats * perBeat) };
}

/**
 * Tracks played together from their first step: \`bpm\` beats a minute, \`steps\` steps a beat (4 by default), \`swing\`
 * every second step late. Played note by note (\`play\`), a song is refused when more than 32 notes would sound at once;
 * rendered, it has no limit. A song of sections: \`arrange\`.
 */
export function song(options: SongOptions, ...tracks: readonly Track[]): Song {
  return compose(options, tracks, []);
}

function compose(options: SongOptions, tracks: readonly Track[], sections: readonly SongSection[]): Song {
  const { barFrames, stepFrames } = grid(options), beats = options.beats ?? 4, swing = options.swing ?? 0;
  const stepSeconds = stepFrames * FRAME;
  // Where step s starts, in frames: every second step \`swing\` of a step late.
  const time = (s: number) => (s + (s % 2 === 1 ? swing : 0)) * stepFrames;
  const score: Score[] = [];
  let steps = 0, effects = false;
  for (const t of tracks) {
    const ws = t.steps, made = new Map<Clip, Clip>(), pieces = piecesOf.get(t) ?? [];
    if (pieces.some((p) => p.fx)) effects = true;
    steps = Math.max(steps, ws.length);
    let k = 0;
    ws.forEach((w, s) => {
      while (k < pieces.length && pieces[k].to <= s) k++;
      const piece = k < pieces.length && pieces[k].from <= s ? pieces[k] : undefined;
      const { body, velocity: v } = velocityOf(w, s);
      if (body === "-" || body === ".") return;
      const velocity = v * (piece?.volume ?? 1), into = piece ? { piece } : {};
      if (t.instrument.kind === "kit") {
        for (const letter of body) {
          const hit = t.instrument.hits[letter];
          if (!hit) throw new Error(\`Step \${s + 1}: the kit has no \${JSON.stringify(letter)} (it has \${Object.keys(t.instrument.hits).join(", ")}).\`);
          score.push({ at: time(s), track: t, made, velocity, ...into, hit });
        }
        return;
      }
      // A note lasts its step and every "-" after it.
      let length = 1;
      while (s + length < ws.length && ws[s + length] === "-") length++;
      const seconds = swing === 0 ? length * stepSeconds : (time(s + length) - time(s)) * FRAME;
      for (const name of body.split("+")) {
        noteNumber(name);
        score.push({ at: time(s), track: t, made, velocity, ...into, name, seconds });
      }
    });
  }
  score.sort((a, b) => a.at - b.at);
  const base = (n: Score) => n.hit ?? (n.track.instrument as Instrument).note(n.name!, n.seconds!);
  // The tables \`play\` reads, made when they are first read: a song only rendered never makes its notes for the game.
  let table: { clips: readonly Clip[]; at: readonly number[]; which: readonly number[]; voices: number; peakStep: number; frames: number } | null = null;
  const tables = () => {
    if (table) return table;
    const notes = score.map((n) => ({ at: Math.round(n.at), clip: placed(n.track, n.made, n.velocity === 1 ? base(n) : base(n).gain(n.velocity)) }));
    // How many sound at once: at each note's start, those started before it and not yet over.
    let voices = 0, peakStep = 0;
    notes.forEach((n, k) => {
      let sounding = 0;
      for (let j = 0; j <= k; j++) if (notes[j].at + notes[j].clip.seconds / FRAME > n.at) sounding++;
      if (sounding > voices) { voices = sounding; peakStep = Math.round(n.at / stepFrames) + 1; }
    });
    const clips: Clip[] = [];
    const which = notes.map((n) => { let k = clips.indexOf(n.clip); if (k < 0) { clips.push(n.clip); k = clips.length - 1; } return k; });
    const frames = Math.max(Math.round(steps * stepFrames), ...notes.map((n) => n.at + Math.ceil(n.clip.seconds / FRAME)));
    table = { clips: Object.freeze(clips), at: Object.freeze(notes.map((n) => n.at)), which: Object.freeze(which), voices, peakStep, frames };
    return table;
  };
  // What the game plays note by note: refused, when it is read, if more than 32 would sound at once (render has no limit).
  const playable = () => {
    if (effects) throw new Error("A section of this song puts a part through effects of its own, which only music.render mixes: render the song, or give the part those effects for the whole song.");
    const t = tables();
    if (t.voices > VOICES) throw new Error(\`At step \${t.peakStep}, \${t.voices} notes would sound at once; the game plays \${VOICES} note by note. Shorten notes or thin the chords — or music.render the song, one sound however many it mixes.\`);
    return t;
  };
  const made: Song = Object.freeze({
    stepFrames, barFrames, beats, bpm: (60 * beats) / (barFrames * FRAME), steps, sections: Object.freeze([...sections]),
    get frames() { return tables().frames; },
    get seconds() { return tables().frames * FRAME; },
    get clips() { return playable().clips; },
    get at() { return playable().at; },
    get which() { return playable().which; },
    get voices() { return tables().voices; },
  });
  scores.set(made, score);
  return made;
}

/** The General MIDI drums, by number, as \`drums()\` has them: kicks k, snares s, the clap c, hats h and o, toms t, the rim r, crashes x. */
const GM_DRUMS: Readonly<Record<number, string>> = {
  35: "k", 36: "k", 37: "r", 38: "s", 40: "s", 39: "c", 42: "h", 44: "h", 51: "h", 53: "h", 59: "h", 46: "o",
  41: "t", 43: "t", 45: "t", 47: "t", 48: "t", 50: "t", 49: "x", 52: "x", 55: "x", 57: "x",
};

/** How imported notes are made a song: its grid, and which kit letter a drum's number plays. */
export interface MidiOptions extends Omit<SongOptions, "bpm"> {
  /** Beats a minute: the file's own when left out. */
  readonly bpm?: number;
  /** A drum's MIDI number to a kit's letter, over General MIDI's (36 "k", 38 "s", 42 "h", 46 "o", 49 "x", …). */
  readonly drums?: Readonly<Record<number, string>>;
}

/**
 * A song of imported notes (\`import tune from "./tune.notes"\`): each track \`parts\` names — by its name, or its place
 * in \`tune.tracks\` from 0 — played by an instrument, a kit (the drums by their General MIDI numbers) or a \`part\`;
 * the tracks not named are left out. Each note starts on the step nearest its time and lasts the steps nearest its
 * length (\`steps\` a beat, 4: sixteenths); how hard it was struck is how loud it plays, 100 as written. A track whose
 * notes overlap becomes several, so the song can hold them. At the file's first tempo unless \`bpm\` says.
 */
export function midi(notes: Notes, parts: Readonly<Record<string, Instrument | Kit | Part>>, options: MidiOptions = {}): Song {
  const perBeat = options.steps ?? 4, map = { ...GM_DRUMS, ...(options.drums ?? {}) };
  const names = notes.tracks.map((t) => t.name);
  const tracks: Track[] = [];
  for (const [key, given] of Object.entries(parts)) {
    const index = names.indexOf(key) >= 0 ? names.indexOf(key) : /^\\d+$/.test(key) ? Number(key) : -1;
    const source = notes.tracks[index];
    if (!source) throw new Error(\`The notes have no track \${JSON.stringify(key)}: their tracks are \${names.map((n) => JSON.stringify(n)).join(", ")} (or 0 to \${names.length - 1}).\`);
    const instrument = given.kind === "part" ? given.instrument : given, how = given.kind === "part" ? given : {};
    const kit = instrument.kind === "kit" ? instrument : null;
    // Voices: steps that each hold one chord at a time; a note joins a chord struck with it, or the first voice free.
    type Word = { sounds: string[]; velocity: number; length: number };
    const voices: { words: Map<number, Word>; end: number; last: number }[] = [];
    const placed = source.notes.map((n) => {
      const from = Math.round(n.at * perBeat);
      return { from, length: kit ? 1 : Math.max(1, Math.round((n.at + n.beats) * perBeat) - from), sound: kit ? map[n.pitch] : nameOf(n.pitch), velocity: Math.max(0.05, Math.round((n.velocity / 100) * 20) / 20) };
    }).filter((n) => n.sound !== undefined && (!kit || n.sound in kit.hits)).sort((a, b) => a.from - b.from || b.length - a.length);
    for (const n of placed) {
      let voice = voices.find((v) => { const w = v.words.get(v.last); return v.last === n.from && w !== undefined && w.length === n.length && w.velocity === n.velocity; });
      if (voice) { const w = voice.words.get(n.from)!; if (!w.sounds.includes(n.sound)) w.sounds.push(n.sound); continue; }
      voice = voices.find((v) => v.end <= n.from);
      if (!voice) { voice = { words: new Map(), end: 0, last: -1 }; voices.push(voice); }
      voice.words.set(n.from, { sounds: [n.sound], velocity: n.velocity, length: n.length });
      voice.end = n.from + n.length;
      voice.last = n.from;
    }
    for (const v of voices) {
      const steps: string[] = Array.from({ length: v.end }, () => ".");
      for (const [at, w] of v.words) {
        steps[at] = (kit ? w.sounds.join("") : w.sounds.join("+")) + (w.velocity === 1 ? "" : \`@\${w.velocity}\`);
        if (!kit) for (let k = 1; k < w.length; k++) steps[at + k] = "-";
      }
      tracks.push(track(instrument, steps, how));
    }
  }
  return compose({ ...options, bpm: options.bpm ?? notes.bpm, beats: options.beats ?? notes.beats }, tracks, []);
}

/** The song's reverb in \`render\`, as \`Clip.reverb\` takes it, the dry part left out. */
export interface ReverbOptions { readonly decay?: number; readonly damping?: number; readonly predelay?: number; readonly width?: number }

/**
 * A song mixed into one clip when the script is built: every note exactly in time, one sound playing. Mixed as a
 * mixing desk does: each track's notes made again at \`rate\` (44 100 when left out: what the ear hears up to 20 kHz; a
 * note played in the game note by note is made at 22 050, to keep the map small) into its own part, through a
 * section's effects where it has them, then its \`fx\`, at its volume, to its side; what each track sends (its \`reverb\`)
 * into one reverb shared by them all (\`reverb\`, its room); the whole through \`master\` —
 * \`(mix) => mix.compress({ threshold: -14, ratio: 2 })\` — and last a limiter (\`Clip.limit\`) so it never goes over
 * −1.5 dB however the parts add, between the samples too: \`limit: false\` leaves it as mixed, \`{ ceiling, release }\` sets it. A long clip a
 * program plays goes in the map as Ogg Vorbis, two channels when it has two.
 */
export function render(s: Song, options: { readonly rate?: number; readonly limit?: boolean | { readonly ceiling?: number; readonly release?: number }; readonly reverb?: ReverbOptions; readonly master?: (mix: Clip) => Clip } = {}): Clip {
  const rate = options.rate ?? 44100, score = scores.get(s), least = s.steps * s.stepFrames * FRAME;
  let mixed: Clip;
  if (!score) {
    // (A song from elsewhere, without its score: its own clips, at their rate.)
    mixed = mixdown(s.at.map((at, k) => ({ clip: s.clips[s.which[k]], at: at * FRAME })), s.seconds, rate);
  } else {
    const parts: { clip: Clip; at: number }[] = [], sends: { clip: Clip; at: number }[] = [];
    const byTrack = new Map<Track, Score[]>();
    for (const n of score) { const list = byTrack.get(n.track); if (list) list.push(n); else byTrack.set(n.track, [n]); }
    for (const [t, notes] of byTrack) {
      const clipOf = (n: Score) => { const c = n.hit ?? (t.instrument as Instrument).note(n.name!, n.seconds!, rate); return n.velocity === 1 ? c : c.gain(n.velocity); };
      // The notes as they are, and each section's that has effects of its own mixed apart and through them.
      const entries: { clip: Clip; at: number }[] = [], apart = new Map<Piece, Score[]>();
      for (const n of notes) {
        if (n.piece?.fx) { const list = apart.get(n.piece); if (list) list.push(n); else apart.set(n.piece, [n]); }
        else entries.push({ clip: clipOf(n), at: n.at * FRAME });
      }
      for (const [p, list] of apart) {
        const from = p.from * s.stepFrames;
        const sub = mixdown(list.map((n) => ({ clip: clipOf(n), at: (n.at - from) * FRAME })), p.time.seconds, rate);
        entries.push({ clip: p.fx!(sub, p.time), at: from * FRAME });
      }
      let part = mixdown(entries, least, rate);
      if (t.fx) part = t.fx(part);
      if (t.volume !== 1) part = part.gain(t.volume);
      if (t.pan !== 0) part = part.pan(t.pan);
      parts.push({ clip: part, at: 0 });
      if (t.reverb > 0) sends.push({ clip: part.gain(t.reverb), at: 0 });
    }
    if (sends.length) {
      const r = options.reverb ?? {};
      parts.push({ clip: mixdown(sends, least, rate).reverb({ decay: r.decay ?? 0.7, damping: r.damping ?? 0.45, predelay: r.predelay ?? 0.02, width: r.width ?? 1, mix: 1, dry: 0 }), at: 0 });
    }
    mixed = mixdown(parts, least, rate);
  }
  if (options.master) mixed = options.master(mixed);
  const limit = options.limit ?? true;
  return limit === false ? mixed : mixed.limit(limit === true ? {} : limit);
}

/* ── Music that follows the game: a song cut into pieces, played piece by piece ── */

/** How a song of sections is cut for the game to play piece by piece (\`stems\`). */
export interface StemsOptions {
  /**
   * Which parts each layer holds, by name — \`{ drums: ["kit", "hats"], bass: ["bass"], melody: ["lead", "saw"] }\` — a
   * layer the game can turn on and off where a piece begins. A part in no layer is left out.
   */
  readonly layers: Readonly<Record<string, readonly string[]>>;
  /**
   * Beats a piece: where the game can go to another section or turn a layer on or off (a bar's beats when left out).
   * Two in a bar of four halves the wait for a change, for about half as much map again and more sounds at once.
   */
  readonly every?: number;
  /** Samples a second (44 100). */
  readonly rate?: number;
  /** The reverb's room, as \`render\` takes it. */
  readonly reverb?: ReverbOptions;
  /** What each piece's clip goes through last — an EQ, not a compressor: each is on its own, the game adds them up. */
  readonly master?: (clip: Clip) => Clip;
  /** The loudest the pieces may add up to as the song plays through, every layer on (0.84, −1.5 dB). */
  readonly peak?: number;
  /**
   * Seconds a piece's clip rings on after its notes end (2), its echoes and reverb faded out over the last of them: the
   * pieces after it cover the rest, and a shorter clip is a smaller map. A layer's last piece keeps all of its tail.
   */
  readonly tail?: number;
  /** The Ogg Vorbis quality of the pieces' clips (4: a little smaller than a song's 5, as many play at once). */
  readonly quality?: number;
  /**
   * Sounds to play on the next beat when the game asks (\`band.sting\`): a crash for a cleared line, a hit for a boss.
   * Turned down with the pieces, which leave room for one on any beat.
   */
  readonly stingers?: Readonly<Record<string, Clip>>;
}

/** A song cut into pieces for the game to play piece by piece, with \`conduct\` and a \`Band\`: made when the script is built. */
export interface Stems {
  readonly kind: "stems";
  /** Frames a bar lasts. */
  readonly barFrames: number;
  readonly bpm: number;
  /** Beats a bar, and beats a piece. */
  readonly beats: number;
  readonly every: number;
  /** Frames each beat of a piece lasts, whole frames (beats of a bar not a whole number of frames take turns). */
  readonly waits: readonly number[];
  /** The layers' names, in the order \`band.on\` has them. */
  readonly layers: readonly string[];
  /** The sections, in the order the song plays them: their names and how many bars. */
  readonly sections: readonly SongSection[];
  /**
   * Section \`s\`'s piece \`p\` in layer \`l\`: its notes, their tails and echoes and reverb with them, or null where it plays
   * none. A section of \`bars\` bars has bars × beats / every pieces.
   */
  readonly pieces: readonly (readonly (readonly (Clip | null)[])[])[];
  readonly stingers: readonly Clip[];
  /** A section's place in \`sections\`, by its name: \`band.go(stems.section("drop"))\`. */
  section(name: string): number;
  /** A layer's place in \`layers\`, by its name: \`band.mute(stems.layer("drums"))\`. */
  layer(name: string): number;
  /** A stinger's place, by its name: \`band.sting(stems.stinger("crash"))\`. */
  stinger(name: string): number;
  /** The most clips sounding at once as the song plays through, every layer on: of the game's 32, what is left for the rest. */
  readonly voices: number;
  /** The pieces added up as the game plays the song through, every layer on, each on its frame: to hear it, or compare. */
  readonly playthrough: Clip;
}

/**
 * A song of sections (\`arrange\`) cut into pieces — a bar each, or \`every\` beats — a clip each piece of each layer, for
 * music that follows the game: where each piece begins the program says which section plays and which layers (\`Band\`,
 * \`conduct\`), and a stinger plays on the next beat. A piece's clip holds the notes that start in it, with their tails,
 * echoes and reverb, so it overlaps the next and nothing is cut off, whichever comes after it; a piece the same as
 * another is the same clip, one file in the map. Each layer is mixed as \`render\` mixes the song, but with no master
 * and no limiter between the parts — the game adds the clips up — so all of them are turned down together until the
 * song played through stays under \`peak\`.
 */
export function stems(s: Song, options: StemsOptions): Stems {
  const parts = partsOf.get(s), score = scores.get(s);
  if (!parts || !score) throw new Error("stems() cuts a song made of sections, by music.arrange.");
  const rate = options.rate ?? 44100, layers = Object.keys(options.layers), r = options.reverb ?? {}, tail = options.tail ?? 2;
  if (!(tail > 0)) throw new Error(\`stems()' tail is seconds after a piece, more than 0, not \${tail}.\`);
  if (layers.length === 0 || layers.length > 8) throw new Error(\`stems() takes one to eight layers, not \${layers.length}.\`);
  const beats = s.beats, every = options.every ?? beats, piece = (s.barFrames * every) / beats;
  if (!Number.isInteger(every) || every < 1 || every > beats || beats % every !== 0) throw new Error(\`stems() cuts every few beats of a bar's \${beats}, a number that divides it — not every \${every}.\`);
  if (!Number.isInteger(piece)) throw new Error(\`A piece of \${every} beats would be \${piece.toFixed(2)} frames: the game plays a sound on a frame. Make it a bar (every: \${beats}), or a tempo whose bar divides into whole frames.\`);
  const perBar = beats / every;
  const layerOf = new Map<Track, number>();
  layers.forEach((name, l) => {
    for (const p of options.layers[name]) {
      const found = parts.find((x) => x.name === p);
      if (!found) throw new Error(\`The layer \${name} names \${JSON.stringify(p)}, which is no part of the song: its parts are \${parts.map((x) => x.name).join(", ")}.\`);
      if (layerOf.has(found.track)) throw new Error(\`\${p} is in two layers: a part is in one at most.\`);
      layerOf.set(found.track, l);
    }
  });
  const pieceSeconds = piece * FRAME, total = s.sections.reduce((n, x) => n + x.bars, 0) * perBar;
  // The notes of each piece of each layer, by part.
  const cells: Map<Track, Score[]>[][] = Array.from({ length: total }, () => layers.map(() => new Map()));
  for (const n of score) {
    const l = layerOf.get(n.track);
    if (l === undefined) continue;
    const g = Math.min(total - 1, Math.floor((n.at + 1e-6) / piece));
    const m = cells[g][l], list = m.get(n.track);
    if (list) list.push(n); else m.set(n.track, [n]);
  }
  const clipOf = (t: Track, n: Score) => { const c = n.hit ?? (t.instrument as Instrument).note(n.name!, n.seconds!, rate); return n.velocity === 1 ? c : c.gain(n.velocity); };
  // Each layer's last piece with notes: it rings out whole, as the song ends.
  const last = layers.map((_, l) => { let g = total - 1; while (g > 0 && cells[g][l].size === 0) g--; return g; });
  // A piece of a layer, mixed: each part's notes from where it begins, through what the part goes through, and the reverb.
  const raw: (Clip | null)[][] = cells.map((byLayer, g) => byLayer.map((m, l) => {
    const out: { clip: Clip; at: number }[] = [], sends: { clip: Clip; at: number }[] = [];
    // Where the piece's last note ends, its release and all: a riser four bars long is kept whole.
    let end = pieceSeconds;
    for (const [t, notes] of m) for (const n of notes) end = Math.max(end, (n.at - g * piece) * FRAME + clipOf(t, n).seconds);
    for (const [t, notes] of m) {
      const plain = notes.filter((n) => !n.piece?.fx), apart = notes.filter((n) => n.piece?.fx);
      const entries: { clip: Clip; at: number }[] = plain.map((n) => ({ clip: clipOf(t, n), at: (n.at - g * piece) * FRAME }));
      if (apart.length) {
        // A section's effects take the whole section: this piece's notes where they fall in it, then the piece cut out.
        const p = apart[0].piece!, from = p.from * s.stepFrames, into = (g * piece - from) * FRAME;
        const whole = p.fx!(mixdown(apart.map((n) => ({ clip: clipOf(t, n), at: (n.at - from) * FRAME })), undefined, rate), p.time);
        entries.push({ clip: whole.trim(into, whole.seconds), at: 0 });
      }
      let part = mixdown(entries, undefined, rate);
      if (t.fx) part = t.fx(part);
      if (t.volume !== 1) part = part.gain(t.volume);
      if (t.pan !== 0) part = part.pan(t.pan);
      out.push({ clip: part, at: 0 });
      if (t.reverb > 0) sends.push({ clip: part.gain(t.reverb), at: 0 });
    }
    if (out.length === 0) return null;
    if (sends.length) out.push({ clip: mixdown(sends, undefined, rate).reverb({ decay: r.decay ?? 0.7, damping: r.damping ?? 0.45, predelay: r.predelay ?? 0.02, width: r.width ?? 1, mix: 1, dry: 0 }), at: 0 });
    let mixed = mixdown(out, undefined, rate);
    if (options.master) mixed = options.master(mixed);
    // What rings on after the piece's notes, kept for \`tail\` seconds and faded over the last of them — the pieces
    // after cover the rest — but all of it after the layer's last piece.
    const keep = end + tail;
    return g < last[l] && mixed.seconds > keep ? mixed.trim(0, keep).fade(0, Math.min(1, tail / 2)) : mixed;
  }));
  // All of them turned down together, as the song plays through.
  const placed: { clip: Clip; at: number; g: number; l: number }[] = [];
  raw.forEach((byLayer, g) => byLayer.forEach((c, l) => { if (c) placed.push({ clip: c, at: g * pieceSeconds, g, l }); }));
  if (placed.length === 0) throw new Error("stems(): the layers play no notes.");
  // The stingers may play on any beat: turned down with the pieces, and room left for them over the loudest.
  const waits = Array.from({ length: every }, (_, j) => Math.round(((j + 1) * piece) / every) - Math.round((j * piece) / every));
  const stingerNames = Object.keys(options.stingers ?? {});
  const lines: number[] = [];
  for (let g = 0; g < total; g++) { let at = g * piece; for (const w of waits) { lines.push(at * FRAME); at += w; } }
  const fitted = together(placed, { peak: options.peak ?? 0.84, over: stingerNames.map((k) => ({ clip: options.stingers![k], at: lines })) });
  const grid: (Clip | null)[][] = raw.map((byLayer) => byLayer.map(() => null));
  const quality = options.quality ?? 4;
  placed.forEach((p, k) => { grid[p.g][p.l] = fitted[k].ogg(quality); });
  const stingers = stingerNames.map((_, k) => fitted[placed.length + k]);
  let start = 0;
  const pieces = s.sections.map((sec) => { const n = sec.bars * perBar, rows = grid.slice(start, start + n).map((row) => Object.freeze(row)); start += n; return Object.freeze(rows); });
  const lookup = (what: string, list: readonly string[], name: string) => {
    const k = list.indexOf(name);
    if (k < 0) throw new Error(\`There is no \${what} \${JSON.stringify(name)}: there are \${list.map((x) => JSON.stringify(x)).join(", ") || "none"}.\`);
    return k;
  };
  let voices = -1;
  return Object.freeze({
    kind: "stems" as const, barFrames: s.barFrames, bpm: s.bpm, beats, every, waits: Object.freeze(waits),
    layers: Object.freeze(layers), sections: s.sections, pieces: Object.freeze(pieces), stingers: Object.freeze(stingers),
    section: (name: string) => lookup("section", s.sections.map((x) => x.name), name),
    layer: (name: string) => lookup("layer", layers, name),
    stinger: (name: string) => lookup("stinger", stingerNames, name),
    get playthrough() {
      return mixdown(placed.map((p) => ({ clip: grid[p.g][p.l]!, at: p.at })));
    },
    get voices() {
      if (voices < 0) {
        voices = 0;
        for (const p of placed) { let n = 0; for (const q of placed) if (q.at <= p.at && q.at + q.clip.seconds > p.at) n++; voices = Math.max(voices, n); }
      }
      return voices;
    },
  });
}

/**
 * The music as the game steers it: which section plays, which piece of it, which layers. Make one inside the program
 * that steers the music and hand it to \`conduct\`, which plays a piece where each begins as it says:
 *
 *   import { music, Band } from "trigscript/music";
 *   const band = new Band();
 *   start(music.conduct(stems, band));
 *   band.go(stems.section("drop"));        // where the next piece begins
 *   band.mute(stems.layer("drums"));
 *   band.sting(stems.stinger("crash"));    // on the next beat
 *
 * With nothing said, the song plays through its sections in order and starts again.
 */
export class Band {
  /** The section playing, its place in \`stems.sections\`; the piece of it (a bar, unless \`stems.every\` says), from 0; the beat of the piece. */
  section = 0;
  piece = 0;
  beat = 0;
  /** Pieces played since it started. */
  count = 0;
  /** The game's frame the beat playing began on: how far into the beat it is, for what moves with the music. */
  at = 0;
  /** The section to go to, and whether where the next piece begins (\`go\`) or when this section ends (\`queue\`); −1 for none. */
  next = -1;
  now = false;
  /** Whether a section plays again when it ends, instead of going on to the next. */
  loop = false;
  /** Which layers play, by their place in \`stems.layers\`. */
  on = [true, true, true, true, true, true, true, true];
  /** A stinger to play on the next beat, by its place; −1 for none. */
  stung = -1;
  /** Whether it plays: false stops it where the next piece would begin (what sounds rings out). */
  playing = true;

  /** Go to a section where the next piece begins, from its first piece. */
  go(section: number) {
    this.next = section;
    this.now = true;
  }
  /** Go to a section when the one playing ends. */
  queue(section: number) {
    this.next = section;
    this.now = false;
  }
  /** Turn a layer off, or on, from where the next piece begins. */
  mute(layer: number) {
    this.on[layer] = false;
  }
  unmute(layer: number) {
    this.on[layer] = true;
  }
  /** Play a stinger on the next beat. */
  sting(stinger: number) {
    this.stung = stinger;
  }
  /** Stop where the next piece would begin. */
  stop() {
    this.playing = false;
  }
}

/** Play \`stems\` as \`band\` says, beat by beat, until it stops: \`start(music.conduct(stems, band))\` beside the program. */
export const conduct = game(async (s: Stems, band: Band) => {
  band.playing = true;
  band.beat = 0;
  while (band.playing || band.beat > 0) {
    band.at = memory.game.frame;
    if (band.beat === 0) {
      // Where a piece begins: where to be, then the piece's clip of each layer that is on. (Which clip, by test: a
      // clip is no value a program holds.)
      if (band.next >= 0 && (band.now || band.piece === 0)) {
        band.section = band.next;
        band.piece = 0;
        band.next = -1;
      }
      for (let k = 0; k < s.sections.length; k++) if (band.section === k) {
        for (let p = 0; p < s.pieces[k].length; p++) if (band.piece === p) {
          for (let l = 0; l < s.layers.length; l++) if (s.pieces[k][p][l]) if (band.on[l]) playWav(s.pieces[k][p][l]!, 0);
        }
      }
    }
    for (let j = 0; j < s.stingers.length; j++) if (band.stung === j) playWav(s.stingers[j], 0);
    band.stung = -1;
    for (let j = 0; j < s.every; j++) if (band.beat === j) await sleep(frames(s.waits[j]));
    band.beat++;
    if (band.beat >= s.every) {
      band.beat = 0;
      band.count++;
      band.piece++;
      // A section ended: again, or on to the next (after the last, the first).
      for (let k = 0; k < s.sections.length; k++) if (band.section === k) if (band.piece >= s.pieces[k].length) {
        band.piece = 0;
        if (!band.loop) band.section = k + 1 < s.sections.length ? k + 1 : 0;
      }
      if (!band.playing) band.beat = 0;
    }
  }
});

/**
 * Play a song, note by note, inside an async program: \\\`await music.play(song)\\\` resolves at its end, or
 * \\\`start(music.play(song))\\\` plays it beside the program.
 */
export const play = game(async (s: Song) => {
  const at = s.at;
  const which = s.which;
  let i = 0;
  let now = 0;
  while (i < at.length) {
    if (at[i] > now) {
      await sleep(frames(at[i] - now));
      now = at[i];
    }
    const k = which[i];
    // Which clip, by its number: a test a clip (a loop over a length known when the script is built is unrolled, and
    // the clips stay the song's, known when it is built — a clip is no value a program holds).
    for (let j = 0; j < s.clips.length; j++) if (k === j) playWav(s.clips[j], 0);
    i++;
  }
  if (s.frames > now) await sleep(frames(s.frames - now));
});

/** Play a song again and again; start it beside a program: \\\`start(music.loop(song))\\\`. */
export const loop = game(async (s: Song) => {
  // (\\\`play\\\` written out again, so that the wait at the end of each turn is where the loop shows it — at least a frame,
  // so that a song with nothing left at its end does not turn round within one frame for ever.)
  const at = s.at;
  const which = s.which;
  while (true) {
    let i = 0;
    let now = 0;
    while (i < at.length) {
      if (at[i] > now) {
        await sleep(frames(at[i] - now));
        now = at[i];
      }
      const k = which[i];
      for (let j = 0; j < s.clips.length; j++) if (k === j) playWav(s.clips[j], 0);
      i++;
    }
    await sleep(frames(Math.max(s.frames - now, 1)));
  }
});

/** Everything above as one name: import { music } from "trigscript/music"; music.play(song). */
export const music = {
  sampler, synth, fmSynth, strings, presets, drums, kit, track, song, render, play, loop,
  part, section, arrange, transpose, stretch, repeat, beat, chord, over, chords, bars, pump, riser, impact, midi, stems, conduct,
};
`,random:`/**
 * Chance: the standard library's "trigscript/random" (TrigScript 4).
 *
 *   import { chance, range, pick, shuffle, weighted, Random } from "trigscript/random";
 *
 *   if (chance(25)) dropLoot();                       // one time in four
 *   const lane = range(1, 3);                         // 1, 2 or 3
 *   const boss = pick(BOSSES);                        // any one of a list
 *   shuffle(order);                                   // an array of the program, in place
 *   const tier = weighted([70, 25, 5]);               // 0 most of the time, 2 rarely
 *
 *   const rng = new Random(seed);                     // the same numbers every time for the same seed
 *   const x = rng.range(0, 63);
 *
 * The functions use the game's own random numbers, which every player's game draws alike, so nothing goes out of step
 * in a game of several players. \`Random\` is a generator of your own (xorshift), seeded: the same seed gives the same
 * numbers, game after game — a level made from a seed, a save code that holds one.
 */
import { random } from "trigscript";

/** True \`percent\` times in a hundred (25: one time in four). */
export function chance(percent: number): boolean {
  return random(100) < percent;
}

/** A whole number from \`min\` to \`max\`, both included. */
export function range(min: number, max: number): number {
  return min + random(max - min + 1);
}

/** The total of \`count\` dice of \`sides\` sides each (3, 6: from 3 to 18). */
export function dice(count: number, sides: number): number {
  let total = 0;
  let i = 0;
  while (i < count) { total += 1 + random(sides); i++; }
  return total;
}

/** One of a list, any one alike; a list the script has, or an array of the program (the first's 0 when it is empty). */
export function pick<T>(items: readonly T[]): T {
  return items[random(items.length)];
}

/** The place of one of the weights, each as likely as its share of their total: [70, 25, 5] gives 0 most of the time. */
export function weighted(weights: readonly number[]): number {
  let total = 0;
  for (const w of weights) total += w;
  let roll = random(total);
  let i = 0;
  while (i < weights.length) {
    if (roll < weights[i]) return i;
    roll -= weights[i];
    i++;
  }
  return weights.length - 1;
}

/** An array of the program in a random order, in place (Fisher–Yates: every order alike). */
export function shuffle<T>(items: T[]) {
  let i = items.length - 1;
  while (i > 0) {
    const j = random(i + 1);
    const held = items[i];
    items[i] = items[j];
    items[j] = held;
    i--;
  }
}

/**
 * A generator of random numbers of your own, seeded: the same seed gives the same numbers, in the game and when the
 * script is tested. Make it in the program (\`const rng = new Random(1234)\`).
 */
export class Random {
  state: number;

  /** Seeded with any whole number (0 is taken as 1). */
  constructor(seed: number) {
    this.state = seed === 0 ? 1 : seed;
  }

  /** The next number, from 0 to 2 147 483 647. */
  next(): number {
    let x = this.state;
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    this.state = x;
    return x & 0x7fffffff;
  }

  /** A whole number from 0 to n − 1. */
  int(n: number): number {
    return this.next() % n;
  }

  /** A whole number from \`min\` to \`max\`, both included. */
  range(min: number, max: number): number {
    return min + this.int(max - min + 1);
  }

  /** True \`percent\` times in a hundred. */
  chance(percent: number): boolean {
    return this.int(100) < percent;
  }

  /** One of a list, any one alike. */
  pick<T>(items: readonly T[]): T {
    return items[this.int(items.length)];
  }

  /** An array of the program in a random order, in place. */
  shuffle<T>(items: T[]) {
    let i = items.length - 1;
    while (i > 0) {
      const j = this.int(i + 1);
      const held = items[i];
      items[i] = items[j];
      items[j] = held;
      i--;
    }
  }
}
`,screen:`/**
 * Pixel screens: the standard library's "trigscript/screen" (TrigScript 4).
 *
 *   import { Screen, ScreenView, sprite } from "trigscript/screen";
 *
 *   const SHIP = sprite([".1.", "111", "1.1"]);
 *
 *   program(async () => {
 *     const screen = new Screen(4, 4, 24, 16);   // 24 × 16 pixels, its corner on tile (4, 4)
 *     let x = 10;
 *     while (true) {
 *       screen.clear();
 *       screen.rect(0, 15, 24, 1, 5);           // the ground, in colour 5
 *       screen.blit(SHIP, x, 12);
 *       screen.number(score, 1, 1, 2);          // digits 3 × 5 pixels, in colour 2
 *       screen.present();                       // on the map, and so on the minimap (screen.reveal(P1) once first)
 *       await nextFrame();
 *     }
 *   });
 *
 * A screen is a grid of pixels, each 0 (empty) or a colour from 1 to 7; drawing changes the grid, and \`present()\`
 * shows it: a pixel is a unit on the map, owned by the player whose colour it is, so the minimap shows the picture —
 * neighbouring pixels of one colour join into a solid block there. Only the pixels that changed since the last
 * \`present()\` are made or taken away, and only the pixels drawn since are looked at, so a still picture costs nothing to
 * show. Draw through the methods (\`set\`, \`clear\`, \`rect\`, …): a pixel written into \`pixels\` directly is not seen. The same grid can be shown in a
 * player's text lines too, as squares (\`ScreenView\` in a \`ui.lines\` view): one game, two screens, as the Tetris probe has it.
 *
 * A player sees the pixels only where they have vision: \`screen.reveal(P1)\` once gives them Map Revealers over it.
 *
 * Two looks (the constructor's last argument): "dots", Overlords, which fly — the minimap draws each as a dot with a gap
 * round it, the screen may be over Space; and "solid", Pylons, which the minimap draws as their whole two-tile
 * footprint, so pixels side by side are one block — on buildable ground (probes/lib/screen-map.mts --ground).
 *
 * What the map needs, found playing the unit-pixel probe in StarCraft: Remastered (2026-10-16): the owners of the
 * pixels (P3, P4, P5, P1, P6, P7, P8 below; their colours are theirs on the map, so give them the colours of TEXT_COLORS) must not
 * be computers — a computer moves its own units — and Remastered will not start a game without a computer, so one slot
 * (P2 here) is a computer that owns no pixel. A pixel is an Overlord, which sits on any ground and on nothing else; keep
 * the screen's tiles clear of buildings. A Pylon needs buildable ground, and none of the map's own units in the way. About 80 pixels made and taken away in a frame did not slow the game.
 */
import { centerLocation, createUnit, removeUnitAt, reserveLocation, textColors, units, P1, P3, P4, P5, P6, P7, P8, type Player } from "trigscript";

/**
 * Whose units show colours 1 to 7 on the map, in the order of TEXT_COLORS: give each player that colour in the map
 * (cyan, yellow, purple, green, red, blue, orange). Green is P1's — your own units are green on the minimap anyway.
 * Not computers.
 */
export const OWNERS: readonly Player[] = [P3, P4, P5, P1, P6, P7, P8];
/** The same colours in the text lines (\`ScreenView\`), 0 an empty square: cyan, yellow, purple, green, red, blue, orange. */
export const TEXT_COLORS: readonly number[] = [0, textColors.cyan, textColors.yellow, textColors.purple, textColors.green, textColors.red, textColors.blue, textColors.orange];

/** Where each pixel's unit is made: a location the map does not use, taken when the script is built. */
const SPOT = reserveLocation("screen: where each pixel is made");

/** A picture known when the script is built, to \`blit\` onto a screen: its size, and its pixels a row at a time (0 is see-through). */
export interface Sprite { readonly width: number; readonly height: number; readonly cells: readonly number[] }

/**
 * A sprite from rows of text, when the script is built: "1" … "7" a pixel of that colour, anything else see-through.
 *
 *   const SHIP = sprite([".1.", "111", "1.1"]);
 */
export function sprite(rows: readonly string[]): Sprite {
  const width = Math.max(0, ...rows.map((r) => r.length));
  const cells: number[] = [];
  for (const row of rows) for (let x = 0; x < width; x++) { const c = Number(row[x]); cells.push(c >= 1 && c <= 7 ? c : 0); }
  return { width, height: rows.length, cells };
}

/** The digits 0 to 9, three pixels wide and five high, for \`number()\`: each fifteen pixels, a row at a time. */
const DIGITS: readonly number[] = [
  "111101101101111", "010110010010111", "111001111100111", "111001111001111", "101101111001001",
  "111100111001111", "111100111101111", "111001001010010", "111101111101111", "111101111001111",
].flatMap((d) => d.split("").map(Number));

/** The most pixels a screen has: 32 × 32 at two tiles a pixel covers a 64 × 64 map, 64 × 32 half of a 128 × 128 one. */
export const MAX_PIXELS = 2048;

export class Screen {
  /** The picture being drawn: a colour a pixel, a row at a time (the first width × height of them). */
  pixels: number[] = new Array(MAX_PIXELS).fill(0);
  /** What the map shows now: the picture as it was at the last \`present()\`. */
  shown: number[] = new Array(MAX_PIXELS).fill(0);
  /** The pixels drawn a colour they were not since the last \`present()\`, in order: each one's place and its x and y. */
  drawnAt: number[] = new Array(MAX_PIXELS).fill(0);
  drawnX: number[] = new Array(MAX_PIXELS).fill(0);
  drawnY: number[] = new Array(MAX_PIXELS).fill(0);
  drawn = 0;
  /** More drawn than the list holds: \`present()\` looks at every pixel instead. */
  overflow = false;
  x: number;
  y: number;
  width: number;
  height: number;
  cell: number;
  /** The unit a pixel is: an Overlord ("dots"), or a Pylon ("solid"). */
  unit = 0;

  /**
   * A screen \`width\` × \`height\` pixels (MAX_PIXELS at most), its top left corner on tile (x, y) of the map, a pixel two
   * tiles across.
   * @param look "dots" (the default): a pixel is an Overlord, which the minimap draws as a dot, a gap round it — it flies,
   *   so the screen may be over anything, Space too. "solid": a pixel is a Pylon, which the minimap draws as its whole
   *   footprint, two tiles square, so pixels side by side are one block — it needs buildable ground under the screen,
   *   and gives its owner Protoss supply. (Overlords a tile apart do not fit: the game will not place most of them.)
   */
  constructor(x: number, y: number, width: number, height: number, look: "dots" | "solid" = "dots") {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.cell = 64;
    this.unit = look === "solid" ? units.ProtossPylon : units.ZergOverlord;
  }

  /** Every pixel the colour (0, empty, unless it says). */
  clear(color: number = 0) {
    let i = 0;
    let y = 0;
    while (y < this.height) {
      let x = 0;
      while (x < this.width) { this.put(i, x, y, color); i++; x++; }
      y++;
    }
  }

  /** One pixel; nothing happens outside the screen. */
  set(x: number, y: number, color: number) {
    if (x >= 0 && y >= 0 && x < this.width && y < this.height) this.put(y * this.width + x, x, y, color);
  }

  /** A pixel written, and listed for \`present()\` when its colour changed. */
  private put(i: number, x: number, y: number, color: number) {
    if (this.pixels[i] === color) return;
    this.pixels[i] = color;
    if (this.drawn < MAX_PIXELS) {
      this.drawnAt[this.drawn] = i;
      this.drawnX[this.drawn] = x;
      this.drawnY[this.drawn] = y;
      this.drawn++;
    } else this.overflow = true;
  }

  /** The colour of a pixel; 0 outside the screen. */
  get(x: number, y: number): number {
    if (x >= 0 && y >= 0 && x < this.width && y < this.height) return this.pixels[y * this.width + x];
    return 0;
  }

  /** A filled rectangle, its top left at (x, y); what is outside the screen is left out. */
  rect(x: number, y: number, width: number, height: number, color: number) {
    let j = 0;
    while (j < height) {
      let i = 0;
      while (i < width) { this.set(x + i, y + j, color); i++; }
      j++;
    }
  }

  /** A line from (x0, y0) to (x1, y1), both ends drawn. */
  line(x0: number, y0: number, x1: number, y1: number, color: number) {
    const dx = Math.abs(x1 - x0);
    const dy = -Math.abs(y1 - y0);
    const sx = x0 < x1 ? 1 : -1;
    const sy = y0 < y1 ? 1 : -1;
    let err = dx + dy;
    let x = x0;
    let y = y0;
    while (true) {
      this.set(x, y, color);
      if (x === x1 && y === y1) break;
      const e2 = 2 * err;
      if (e2 >= dy) { err += dy; x += sx; }
      if (e2 <= dx) { err += dx; y += sy; }
    }
  }

  /** A sprite with its top left at (x, y): its see-through pixels leave what is under them. */
  blit(s: Sprite, x: number, y: number) {
    let k = 0;
    let j = 0;
    while (j < s.height) {
      let i = 0;
      while (i < s.width) {
        const c = s.cells[k];
        if (c !== 0) this.set(x + i, y + j, c);
        k++;
        i++;
      }
      j++;
    }
  }

  /** A whole number's digits, 3 × 5 pixels each with a pixel between, its top left at (x, y): a score on the minimap. */
  number(n: number, x: number, y: number, color: number) {
    let rest = n < 0 ? -n : n;
    let count = 1;
    let probe = rest;
    while (probe >= 10) { probe = Math.floor(probe / 10); count++; }
    let place = x + (count - 1) * 4;
    while (true) {
      const d = rest % 10;
      let k = 0;
      while (k < 15) {
        if (DIGITS[d * 15 + k] === 1) this.set(place + (k % 3), y + Math.floor(k / 3), color);
        k++;
      }
      rest = Math.floor(rest / 10);
      place -= 4;
      if (rest === 0) break;
    }
  }

  /**
   * Let a player see the screen: Map Revealers of theirs over it, for the rest of the game. Without them its pixels,
   * owned by other players, are hidden by the fog of war — on the map and on the minimap. Once, before the first
   * \`present()\`.
   * @param player Who sees it: P1 … P8, known when the script is built.
   */
  reveal(player: Player) {
    // A Map Revealer sees ten tiles round; one every six tiles leaves no gap.
    const right = this.x * 32 + this.width * this.cell;
    const bottom = this.y * 32 + this.height * this.cell;
    let py = this.y * 32 + 96;
    while (py < bottom + 96) {
      let px = this.x * 32 + 96;
      while (px < right + 96) {
        centerLocation(SPOT, px, py, 32, 32);
        createUnit(player, units.MapRevealer, 1, SPOT);
        px += 192;
      }
      py += 192;
    }
  }

  /**
   * The picture on the map: each pixel that changed since the last time taken away and made again in its colour. Only
   * the pixels drawn since are looked at (one drawn and drawn back is passed over), unless more were drawn than the list
   * holds.
   */
  present() {
    if (this.overflow) {
      let i = 0;
      let y = 0;
      while (y < this.height) {
        let x = 0;
        while (x < this.width) { this.show(i, x, y); i++; x++; }
        y++;
      }
      this.overflow = false;
    } else {
      for (let k = 0; k < this.drawn; k++) this.show(this.drawnAt[k], this.drawnX[k], this.drawnY[k]);
    }
    this.drawn = 0;
  }

  /** One pixel on the map as it is in the picture, when it is not already. */
  private show(i: number, x: number, y: number) {
    const now = this.pixels[i];
    const was = this.shown[i];
    if (now === was) return;
    const half = this.cell >> 1;
    centerLocation(SPOT, this.x * 32 + x * this.cell + half, this.y * 32 + y * this.cell + half, 32, 32);
    OWNERS.forEach((owner, k) => { if (was === k + 1) removeUnitAt(owner, this.unit, 1, SPOT); });
    OWNERS.forEach((owner, k) => { if (now === k + 1) createUnit(owner, this.unit, 1, SPOT); });
    this.shown[i] = now;
  }
}

/**
 * A screen in the text lines, a square a pixel — filled in its colour, or empty — a line a row. For a \`ui.lines\` view:
 * \`<ScreenView screen={screen} width={10} height={8} />\`, the screen's size known when the script is built. Eleven lines
 * show at once, sixty squares across.
 */
export function ScreenView({ screen, width, height }: { screen: Screen; width: number; height: number }) {
  return <>{UP_TO_60.map((y) => y < height && <line>{UP_TO_60.map((x) => x < width && <cell color={TEXT_COLORS[screen.pixels[y * width + x]]} />)}</line>)}</>;
}

/** 0 … 59: the places a view's rows and columns are counted over, the ones past its size left out when the script is built. */
const UP_TO_60: readonly number[] = Array.from({ length: 60 }, (_, i) => i);
`,signals:`/**
 * Events of your own: the standard library's "trigscript/signals" (TrigScript 4).
 *
 *   import { Signal } from "trigscript/signals";
 *
 *   const waveCleared = new Signal<number>();
 *
 *   program(async () => {
 *     waveCleared.on((wave) => setResources(P1, "add", 100 * wave, "ore"));
 *     waveCleared.once((wave) => print(\`First wave down!\`));
 *     const id = waveCleared.on((wave) => print(\`Wave \${wave} cleared\`));
 *     …
 *     waveCleared.emit(3);       // every handler, in the order they were added
 *     waveCleared.off(id);
 *   });
 *
 * A signal lets one part of a map say that something happened without knowing who listens: the shop, the score and the
 * music each add a handler, and the wave code only emits. What it carries is one value of the type it is made with —
 * a number, a boolean, a text or a unit (\`new Signal<Unit>()\`). Its handlers are functions kept as values: they may use
 * what the block they were written in has, and they run to their end, one after another, within the frame.
 *
 * Make a signal inside the program that uses it (\`const s = new Signal<number>()\` at its top): a signal is variables
 * of a program, as anything a program writes is.
 */

export class Signal<T> {
  /** The handlers, by the number \`on\` gave; one taken off is undefined, and its place is given to the next one added. */
  handlers: (((value: T) => void) | undefined)[] = [];
  /** Which handlers go once they have run once. */
  onceOnly: boolean[] = [];

  /**
   * Add a handler: it runs at every \`emit\`, handed the value.
   * @returns Its number, for \`off\`.
   */
  on(handler: (value: T) => void): number {
    return this.add(handler, false);
  }

  /** Add a handler that runs at the next \`emit\` only. @returns Its number, for \`off\` before then. */
  once(handler: (value: T) => void): number {
    return this.add(handler, true);
  }

  /** Take a handler off, by the number \`on\` or \`once\` gave. */
  off(id: number) {
    if (id >= 0 && id < this.handlers.length) this.handlers[id] = undefined;
  }

  /** Run every handler, in the order they were added, each handed \`value\`. */
  emit(value: T) {
    let i = 0;
    while (i < this.handlers.length) {
      const h = this.handlers[i];
      if (h) {
        if (this.onceOnly[i]) this.handlers[i] = undefined;
        h(value);
      }
      i++;
    }
  }

  /** How many handlers it has. */
  count(): number {
    let n = 0;
    for (const h of this.handlers) if (h) n++;
    return n;
  }

  /** Take every handler off. */
  clear() {
    let i = 0;
    while (i < this.handlers.length) { this.handlers[i] = undefined; i++; }
  }

  private add(handler: (value: T) => void, once: boolean): number {
    // A place one was taken off from, or a new one at the end.
    let i = 0;
    while (i < this.handlers.length) {
      if (!this.handlers[i]) {
        this.handlers[i] = handler;
        this.onceOnly[i] = once;
        return i;
      }
      i++;
    }
    this.handlers.push(handler);
    this.onceOnly.push(once);
    return this.handlers.length - 1;
  }
}
`,timers:`/**
 * Time in a program: the standard library's "trigscript/timers" (TrigScript 4).
 *
 *   import { every, after, Cooldown, Countdown, SECOND } from "trigscript/timers";
 *
 *   program(async () => {
 *     const spawner = every(10 * SECOND, (n) => spawnWave(n));   // every ten seconds, the wave's number handed over
 *     after(3 * SECOND, () => print("Go!"));
 *     const shot = new Cooldown(12);
 *     while (true) {
 *       if (keyPressed(P1, "Space") && shot.use()) fire();
 *       if (boss.hp <= 0) spawner.cancel();
 *       await nextFrame();
 *     }
 *   });
 *
 *   for await (const b of over(bullets, { per: 50 })) b.x += b.dx;   // fifty a frame, on to the next frame after each fifty
 *
 * Time is counted in frames of the game, 24 a second on Fastest (\`SECOND\`). \`every\` and \`after\` run their function in a
 * task beside the program, so the program goes on at once; the Task they give back stops it (\`cancel()\`) and says
 * whether it still runs (\`running\`). Their function is kept for the task, with what it uses of the block it was written
 * in — written in a loop, each turn's is its own, as JavaScript has it — and it runs to its end within the frame (it
 * does not wait). Sixteen of one \`every\` or \`after\` written once can run at a time. \`Cooldown\`, \`Countdown\` and
 * \`Stopwatch\` read the game's frame counter: no task, nothing to stop.
 */
import { game, start, sleep, frames, nextFrame, memory, type Task } from "trigscript";

/** Frames a second of game time on Fastest, the speed a map is played at. */
export const SECOND = 24;

/** The frames of game time since the game began. */
export function now(): number {
  return memory.game.frame;
}

const repeating = game(async (period: number, fn: (count: number) => void, times: number) => {
  let count = 0;
  while (times <= 0 || count < times) {
    await sleep(frames(period < 1 ? 1 : period));
    count++;
    fn(count);
  }
});

const later = game(async (delay: number, fn: () => void) => {
  await sleep(frames(delay < 1 ? 1 : delay));
  fn();
});

/**
 * Run \`fn\` every \`period\` frames, from \`period\` frames from now: forever, or \`times\` times. It is handed how many times
 * it has run, 1 the first time.
 * @param period Frames between one run and the next (24 a second).
 * @param fn What to run; it runs to its end within the frame.
 * @param times How many times, or 0 (the default) for as long as the game lasts.
 * @returns The task: \`cancel()\` stops it.
 */
export const every = game((period: number, fn: (count: number) => void, times: number = 0): Task => start(repeating(period, fn, times)));

/**
 * Run \`fn\` once, \`delay\` frames from now.
 * @param delay Frames from now (24 a second).
 * @param fn What to run; it runs to its end within the frame.
 * @returns The task: \`cancel()\` before then and it never runs.
 */
export const after = game((delay: number, fn: () => void): Task => start(later(delay, fn)));

/**
 * The elements of \`list\`, \`per\` of them a frame: a loop spread over frames, for work that need not be done in one —
 * a thousand bullets moved, a map's cells looked at. What a frame costs stays what \`per\` turns cost.
 *
 *   for await (const b of over(bullets, { per: 50 })) b.x += b.dx;
 *
 * It reads the list's length as it goes, as \`for…of\` does: what is pushed meanwhile is reached too, and an element
 * removed before it is reached moves the rest up, so one is passed over, as with an index. Each element is the list's
 * own: what is written to it stays. The loop goes on to the next frame only between elements, never after the last.
 * @param list The array to walk.
 * @param options \`per\`: how many elements a frame (1 at least).
 */
export async function* over<T>(list: T[], options: { per: number }) {
  const per = options.per < 1 ? 1 : options.per;
  let n = 0;
  for (let i = 0; i < list.length; i++) {
    yield list[i];
    n++;
    if (n >= per && i + 1 < list.length) {
      n = 0;
      await nextFrame();
    }
  }
}

/**
 * 0, 1, … \`count\` − 1, \`per\` of them a frame: \`over\` for a count rather than an array.
 *
 *   for await (const y of spread(96, { per: 8 })) drawRow(y);   // twelve frames for 96 rows
 * @param count How many numbers, from 0.
 * @param options \`per\`: how many a frame (1 at least).
 */
export async function* spread(count: number, options: { per: number }) {
  const per = options.per < 1 ? 1 : options.per;
  let n = 0;
  for (let i = 0; i < count; i++) {
    yield i;
    n++;
    if (n >= per && i + 1 < count) {
      n = 0;
      await nextFrame();
    }
  }
}

/**
 * Something that can be done once every so many frames: a weapon's reload, a spell's cooldown.
 *
 *   const blink = new Cooldown(5 * SECOND);
 *   if (keyPressed(P1, "B") && blink.use()) teleport();
 */
export class Cooldown {
  period: number;
  until = 0;

  /** Ready at once, then once every \`period\` frames. */
  constructor(period: number) {
    this.period = period;
  }

  /** Whether it is ready now. */
  ready(): boolean {
    return now() >= this.until;
  }

  /** If it is ready, use it — it is ready again \`period\` frames from now — and say true; else false. */
  use(): boolean {
    if (now() < this.until) return false;
    this.until = now() + this.period;
    return true;
  }

  /** Frames until it is ready again: 0 when it is. */
  left(): number {
    return this.until > now() ? this.until - now() : 0;
  }

  /** Ready again at once. */
  reset() {
    this.until = 0;
  }
}

/**
 * A length of time that runs down while the game runs: a round's clock, a bomb's fuse.
 *
 *   const round = new Countdown(90 * SECOND);
 *   ui.lines(P1, () => <line>{clock(round.left())}</line>);
 *   await until(() => round.done());
 */
export class Countdown {
  end = 0;

  /** Running, done \`length\` frames from now (0: done already). */
  constructor(length: number = 0) {
    this.end = now() + length;
  }

  /** Start again, done \`length\` frames from now. */
  restart(length: number) {
    this.end = now() + length;
  }

  /** Frames left: 0 once it is done. */
  left(): number {
    return this.end > now() ? this.end - now() : 0;
  }

  /** Whether it has run out. */
  done(): boolean {
    return now() >= this.end;
  }

  /** More time, or less (a number below zero). */
  add(frames: number) {
    this.end += frames;
  }
}

/** How long since it was made, or last reset: a lap's time, a survival score. */
export class Stopwatch {
  from = 0;

  constructor() {
    this.from = now();
  }

  /** Frames since it started. */
  elapsed(): number {
    return now() - this.from;
  }

  /** From 0 again. */
  reset() {
    this.from = now();
  }
}
`,ui:`/**
 * A kit for the game's text lines: the standard library's "trigscript/ui" (TrigScript 4).
 *
 *   import { Meter, Panel, MenuList, DialogBox, choose, say, clock } from "trigscript/ui";
 *
 *   const ITEMS = ["Marine (50)", "Medic (75)", "Leave"];
 *   const shop = { selected: 0, open: false };
 *   const talk = { speaker: "", text: "", open: false };
 *
 *   program(async () => {
 *     ui.lines(P1, () => (
 *       <>
 *         <Panel title={\`Wave \${wave}  \${clock(elapsed)}\`}>
 *           <Meter label="Base" value={baseHp} max={1500} />
 *         </Panel>
 *         {shop.open && <MenuList items={ITEMS} selected={shop.selected} />}
 *         <DialogBox box={talk} />
 *       </>
 *     ));
 *     await say(P1, talk, "Raynor", "Hold the bridge until dawn.");
 *     const pick = await choose(P1, ITEMS.length, shop);
 *   });
 *
 * The text lines are one player's: a view is shown to that player only, rebuilt when what it reads changes (a function
 * it calls included) and shown again once a second as it was, so a menu, a dialog and a meter cost nothing while nothing
 * changes. Give a player one \`ui.lines\` and
 * put everything in it, as the example does: the components are pieces of one view, and the state they show is a
 * record of yours (\`shop\`, \`talk\`) that the functions here change.
 *
 * What the text lines can show, played in StarCraft: Remastered (the UI spike, 2026-10-16): eleven lines; colour codes
 * take no width; ■ □ ● are one width; after grey on a line every later colour code is ignored, so grey goes last.
 */
import { keyPressed, nextFrame, sleep, frames, game, textColors, type Player, type TextColor } from "trigscript";

/** Frames a second of game time on Fastest, the speed a map is played at. */
const PER_SECOND = 24;

/** "1:05": frames of game time as minutes and seconds (24 frames a second, on Fastest). */
export function clock(frames: number): string {
  const seconds = Math.floor(frames / PER_SECOND);
  return \`\${Math.floor(seconds / 60)}:\${String(seconds % 60).padStart(2, "0")}\`;
}

/** "12,345": a whole number with its thousands marked. */
export function thousands(n: number): string {
  let rest = n < 0 ? -n : n;
  let out = "";
  while (rest >= 1000) {
    out = \`,\${String(rest % 1000).padStart(3, "0")}\${out}\`;
    rest = Math.floor(rest / 1000);
  }
  return \`\${n < 0 ? "-" : ""}\${rest}\${out}\`;
}

/**
 * A labelled bar on a line of its own — "Base ■■■■■■□□□□ 900/1500" — green above half, yellow above a quarter, red below.
 * @param label What the bar is of.
 * @param value How much there is.
 * @param max How much there can be.
 * @param width How many squares the bar is (10 unless it says).
 */
export function Meter({ label, value, max, width }: { label: string; value: number; max: number; width?: number }) {
  return (
    <line>
      {label} <bar value={value} max={max} width={width ?? 10} color={value * 2 > max ? textColors.green : value * 4 > max ? textColors.yellow : textColors.red} /> {value}/{max}
    </line>
  );
}

/**
 * A title over what is inside it: "-- Wave 3 --" in its colour (yellow unless it says), then the lines inside.
 * @param title The title.
 * @param color The title's colour.
 */
export function Panel({ title, children, color }: { title: string; children?: Children; color?: TextColor }) {
  return (
    <>
      <line color={color ?? "yellow"}>-- {title} --</line>
      <line>{children}</line>
    </>
  );
}

/**
 * A menu's lines: each item on a line of its own, the one at \`selected\` marked "> " and in its colour (cyan unless it
 * says). \`items\` is a list the script has, or an array of texts of the program.
 */
export function MenuList({ items, selected, color }: { items: readonly string[]; selected: number; color?: TextColor }) {
  return (
    <>
      {items.map((item, i) => (
        <line color={i === selected ? (color ?? "cyan") : "white"}>
          {i === selected ? "> " : "  "}
          {item}
        </line>
      ))}
    </>
  );
}

/**
 * Let a player choose one of \`count\` things: the menu opens (\`menu.open\`), W and S (or Up and Down) move
 * \`menu.selected\` (round from the last to the first), and Space chooses — the place chosen, once it is. (Not Enter:
 * in a game of several players Enter opens the chat.) Show it with \`MenuList\`, in the
 * player's \`ui.lines\`: \`{shop.open && <MenuList items={ITEMS} selected={shop.selected} />}\`.
 * @param player Who chooses: P1 … P8, known when the script is built.
 * @param count How many things there are to choose from.
 * @param menu The record a view shows: which is marked, and whether the menu is open.
 */
export const choose = game(async (player: Player, count: number, menu: { selected: number; open: boolean }): Promise<number> => {
  menu.open = true;
  while (true) {
    if (keyPressed(player, "W") || keyPressed(player, "Up")) menu.selected = (menu.selected + count - 1) % count;
    if (keyPressed(player, "S") || keyPressed(player, "Down")) menu.selected = (menu.selected + 1) % count;
    if (keyPressed(player, "Space")) break;
    await nextFrame();
  }
  menu.open = false;
  return menu.selected;
});

/**
 * A text put into \`into.text\` a character at a time, one every \`every\` frames (2 unless it says): a view that shows
 * \`into.text\` shows it being typed. Done when the whole text is there.
 */
export const typewriter = game(async (into: { text: string }, text: string, every: number = 2) => {
  let n = 0;
  while (n < text.length) {
    n++;
    into.text = text.slice(0, n);
    await sleep(frames(every));
  }
});

/**
 * Someone says something to a player: the dialog opens (\`box.open\`), the speaker's name and the words typed in, and it
 * closes when the player presses Space. Show it with \`DialogBox\`.
 * @param player Who reads it: P1 … P8, known when the script is built.
 * @param box The record a view shows.
 * @param speaker Who speaks.
 * @param text What they say.
 */
export const say = game(async (player: Player, box: { speaker: string; text: string; open: boolean }, speaker: string, text: string) => {
  box.open = true;
  box.speaker = speaker;
  box.text = "";
  await typewriter(box, text);
  while (!keyPressed(player, "Space")) await nextFrame();
  box.open = false;
});

/** A dialog's lines while it is open: the speaker in yellow, the words, and what to press (Space). Nothing while it is closed. */
export function DialogBox({ box }: { box: { speaker: string; text: string; open: boolean } }) {
  return box.open ? (
    <>
      <line color="yellow">{box.speaker}</line>
      <line>{box.text}</line>
      <line color="grey">(Space)</line>
    </>
  ) : null;
}

/** A line at the end of a log that keeps the last \`keep\` (6 unless it says), the oldest taken off the front. */
export const log = game((lines: string[], text: string, keep: number = 6) => {
  lines.push(text);
  while (lines.length > keep) lines.shift();
});

/** A log's lines, oldest first, each in its colour (white unless it says). */
export function LogLines({ lines, color }: { lines: readonly string[]; color?: TextColor }) {
  return <>{lines.map((text) => <line color={color ?? "white"}>{text}</line>)}</>;
}
`},hi={cutscene:`.ts`,fog:`.ts`,math:`.ts`,music:`.ts`,random:`.ts`,screen:`.tsx`,signals:`.ts`,timers:`.ts`,ui:`.tsx`},gi=mi,_i=hi,vi=/^[a-z][a-z0-9-]{0,39}$/,yi=/^(?:[A-Za-z0-9_\-.]+\/)*[A-Za-z0-9_\-.]+\.tsx?$/,bi=(e,t)=>`${fi}/${e}/${t}`;function xi(e,t,n=[]){if(!vi.test(e))return`"${e}" is not a library id: lower-case letters, digits and "-", starting with a letter.`;if(n.includes(e))return`"${e}" is a name TrigScript keeps for itself.`;let r=Object.keys(t);if(r.length===0)return`The library "${e}" has no modules.`;for(let e of r){if(!yi.test(e)||e.split(`/`).some(e=>e===`.`||e===`..`))return`"${e}" is not a module path of a library: folders with "/", ending in .ts or .tsx.`;if(/\.test\.ts$/i.test(e))return`"${e}" is a test file: a library's tests stay in its own repository, since a script would run them with its own.`;if(typeof t[e]!=`string`)return`The module "${e}" has no source.`}return null}var Si=/(?:\bfrom|\bimport)\s*\(?\s*["']([^"']+)["']/g;function Ci(e,t){let n=new Map;for(let[e,r]of Object.entries(t))for(let[t,i]of Object.entries(r))n.set(bi(e,t),i);let r=new Set(n.keys()),i={},a=new Set,o=e=>{e in i||(i[e]=n.get(e),a.add(e.slice(fi.length+1).split(`/`)[0]),s(e,i[e]))},s=(e,t)=>{for(let n of t.matchAll(Si)){let t=n[1],i=t.startsWith(`.`)?e?di(r,e,t):null:pi(r,t);i&&o(i)}};for(let t of e)s(null,t);return{files:i,used:[...a].sort()}}r.PlayWav,r.DisplayText,r.CenterView,r.MinimapPing,r.SetMissionObjectives;var wi=65536;Ti(4096/(2*Math.PI));function Ti(e){return Math.round(e*wi)|0}new Set(ot),new Set(ot);var Ei={slots:[0,1,2,3,4,5,6,7],forces:[0,0,0,0,0,0,0,0]};[`@heap.top`,`@heap.said`].map(e=>({id:e,name:`(heap)`,kind:`number`,shared:!0,routed:!0,global:!0,at:{file:``,line:0,column:0}}));var Di=5808996,Y=e=>(e-Di)/4;Y(5885096),Y(5318276),Y(6621616),Y(6456504),Y(6637696),Y(6638240),Y(5763288),Y(6456312),Y(5823584),Y(6865220),Y(7134656),Y(7134660),Y(7134664),Y(6456460),Y(6456488),Y(6556504),Y(6556512),Y(5762784);var Oi=5808996,ki=e=>(e-Oi)/4;ki(5885096),ki(6621616),ki(5823584),ki(6693712),ki(6688256),ki(6698912);var X=(e,t)=>{let n=e>>2,r=8*(e&3);return{dword:n,mask:t===4?4294967295:(2**(8*t)-1)*2**r>>>0,shift:r}};X(165,1),X(76,1),X(77,1),X(100,2),X(40,2),X(42,2),X(143,1),X(85,1),X(208,2),X(277,1),X(278,1),X(279,1),X(280,1),X(281,1),X(282,1),X(292,1),X(172,2),X(142,1),X(276,1),X(56,4),X(162,2),X(147,1),X(135,1),X(274,2);var Ai=`@ev.madeN`,ji=`@ev.goneN`,Mi=`@ev.turnedN`,Ni=`@ev.changedN`,Pi=`@ev.e`,Fi=`@ev.wf`,Ii=`@ev.be`,Li=`@ev.touch`,Ri=`@ev.own`,zi={file:``,line:0,column:0};[Ai,ji,Mi,Ni,Pi,Ii,Fi,Li,Ri].map(e=>({id:e,name:`(events)`,kind:`number`,shared:!0,...e===Fi?{}:{routed:!0},global:!0,at:zi})),X(144,1),ki(6456312),ki(5318276),ki(6456504),ki(5861948),ki(6637696),ki(6638240),ki(5763288),Ei.slots;var Bi=e=>e.kind===`unit`||e.kind===`text`&&e.text!==`id`?3:1;new Set(ot);var Vi=4;function Hi(e,t,n){let r=n??Ui(e);return 1+t.arrays.length*Vi+t.vars.reduce((e,t)=>e+(r.get(t)??1),0)}function Ui(e){let t=new Map;for(let n of xt(e.body))t.set(n.id,Bi(n));for(let n of e.functions??[])for(let e of[...n.params,...n.result?[n.result.decl]:[],...xt(n.body)])t.set(e.id,Bi(e));return t}function Wi(e){let t=0;for(let n of e){if(!n.functions?.some(e=>e.recursive))continue;let e=Ui(n);_t(n.functions,r=>{r.saves&&(t=Math.max(t,Hi(n,r.saves,e)))})}return t}r.SetMissionObjectives,r.Transmission,r.LeaderboardControl,r.LeaderboardControlAt,r.LeaderboardResources,r.LeaderboardKills,r.LeaderboardPoints,r.LeaderboardGoalControl,r.LeaderboardGoalControlAt,r.LeaderboardGoalResources,r.LeaderboardGoalKills,r.LeaderboardGoalPoints,r.LeaderboardGreed,r.CreateUnit,r.CreateUnitWithProperties,r.KillUnitAt,r.RemoveUnitAt,r.GiveUnits;var Z=e=>e;function Gi(e,t){let n=0;for(let r=t;r<e.length;r++)if(e[r]===`{`)n++;else if(e[r]===`}`&&--n===0)return r;return-1}function Ki(e){let t=new Map,n=0;for(;n<e.length;){for(;n<e.length&&/\s/.test(e[n]);)n++;let r=e.indexOf(`{`,n);if(r<0)break;let i=e.slice(n,r).trim(),a=Gi(e,r);if(a<0)break;t.set(i,e.slice(r+1,a)),n=a+1}return t}function qi(e,t){let n=/^\s*(\w+)\s*(?:,\s*(plural|select)\s*,([\s\S]*)|\|[^{}]*)?$/.exec(e);if(!n)return`{${e}}`;let r=t[n[1]];if(!n[2])return r===void 0?`{${e}}`:String(r);let i=Ki(n[3]);if(n[2]===`plural`){let e=Number(r);return Ji((i.get(`=${e}`)??(e===1?i.get(`one`):void 0)??i.get(`other`)??``).replace(/#/g,String(e)),t)}return Ji(i.get(String(r))??i.get(`other`)??``,t)}function Ji(e,t){let n=``;for(let r=0;r<e.length;){if(e[r]!==`{`){n+=e[r++];continue}let i=Gi(e,r);if(i<0){n+=e.slice(r);break}n+=qi(e.slice(r+1,i),t),r=i+1}return n}var Yi=(e,t)=>t?Ji(e,t):e.includes(`{`)?Ji(e,{}):e,Xi=`main.ts`;function Zi(e,t=Yi){return e.kind===`unit`?t(`a unit of the game, or none — checked before every use: once the unit is gone it reads 0 and takes no write`):e.kind===`boolean`?t(`a boolean`):e.kind===`text`?t("a text — `length`, `s[i]` and `slice` count characters (code points), and a made text holds 1 023 bytes"):e.bits?t(`a u{bits} number (0 … {max}, stopping at either end)`,{bits:e.bits,max:2**e.bits-1}):e.unsigned?t("a u32 number (0 … 4 294 967 295, wrapping at either end as `x >>> 0` does)"):e.fixed?t(`a fixed number (−32 768 … 32 767.99998, in steps of 1/65 536): a number with a fraction`):t("a number (−2 147 483 648 … 2 147 483 647, whole, wrapping at either end as `x | 0` does)")}function Q(e){return e.replace(/\\/g,`/`).replace(/^(\.\/)+/,``).replace(/\/+/g,`/`)}new TextDecoder(`latin1`),new TextEncoder;var Qi=e=>`refused`in e,$i=import.meta.url,ea=`[A-Za-z_$][\\w$]*`;function ta(e,t){let n=[],r=RegExp(`(^|[^\\w$.])(${t.replace(/[$]/g,`\\$&`)})\\.(${ea})`,`g`),i=[0];for(let t=0;t<e.length;t++)e[t]===`
`&&i.push(t+1);let a=e=>{let t=0,n=i.length-1;for(;t<n;){let r=t+n+1>>1;i[r]<=e?t=r:n=r-1}return t};for(let t of e.matchAll(r)){let e=t.index+t[1].length,r=e+t[2].length+1,o=a(e);n.push({key:t[3],line:o+1,column:r-i[o]+1,endColumn:r-i[o]+1+t[3].length})}return n}function na(e,t){let n=[],r=new Map(e.entries.map(e=>[e.value,e.keys]));for(let e of t.entries){let t=r.get(e.value);if(!t)continue;let i=t.filter(t=>!e.keys.includes(t)),a=e.keys.filter(e=>!t.includes(e));i.forEach((t,r)=>n.push({value:e.value,from:t,to:a[r]??a[0]??e.keys[0]}))}return n}function ra(e,t,n){let r=new Set;for(let n of e)n.object===t&&r.add(n.key);return n.filter(e=>r.has(e.from))}function ia(e,t,n,r){let i=new Map(r.map(e=>[e.from,e.to])),a=0,o={};for(let[r,s]of Object.entries(e)){let e=t.filter(e=>Q(e.file)===Q(r)&&e.object===n&&i.has(e.key));if(e.length===0){o[Q(r)]=s;continue}let c=s.split(`
`);for(let t of[...e].sort((e,t)=>t.line-e.line||t.column-e.column)){let e=c[t.line-1];if(e===void 0||t.endLine!==t.line)continue;let n=t.quoted?JSON.stringify(i.get(t.key)):i.get(t.key);c[t.line-1]=e.slice(0,t.column-1)+n+e.slice(t.endColumn-1),a++}o[Q(r)]=c.join(`
`)}return{files:o,count:a}}var aa=`https://cdn.jsdelivr.net/gh/scm-js/plugin-trigscript@monaco-0.56.0-2/dist`,oa=`monacoDist`,sa=null,ca=null;function la(e){let t=new Blob([`import ${JSON.stringify(e)};\n`],{type:`text/javascript`});return new Worker(URL.createObjectURL(t),{type:`module`})}function ua(e){let t=e.typescript??e.languages.typescript;if(!t?.typescriptDefaults)throw Error(`Monaco loaded without its TypeScript language service.`);return t}var da=100;function fa(e){let t=ua(e);t.typescriptDefaults.setCompilerOptions({strict:!0,target:t.ScriptTarget.ESNext,module:t.ModuleKind.ESNext,moduleResolution:da,lib:[`lib.es2023.d.ts`],noEmit:!0,types:[]}),t.typescriptDefaults.setEagerModelSync(!0),t.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!1,noSyntaxValidation:!1}),e.editor.defineTheme(`scm`,{base:`vs-dark`,inherit:!0,rules:[{token:`comment`,foreground:`5d6675`,fontStyle:`italic`},{token:`keyword`,foreground:`e6b95c`},{token:`string`,foreground:`4fd1c5`},{token:`number`,foreground:`f4d08a`},{token:`type.identifier`,foreground:`8fd3ff`},{token:`identifier`,foreground:`dde2ea`},{token:`delimiter`,foreground:`99a2b3`},{token:`operator`,foreground:`99a2b3`}],colors:{"editor.background":`#0a0c10`,"editor.foreground":`#dde2ea`,"editor.lineHighlightBackground":`#12151b`,"editor.lineHighlightBorder":`#12151b`,"editorLineNumber.foreground":`#5d6675`,"editorLineNumber.activeForeground":`#99a2b3`,"editor.selectionBackground":`#2b4f80`,"editor.inactiveSelectionBackground":`#222732`,"editorCursor.foreground":`#e6b95c`,"editorIndentGuide.background1":`#222732`,"editorIndentGuide.activeBackground1":`#353c4b`,"editorWidget.background":`#191d25`,"editorWidget.border":`#2c3341`,"editorSuggestWidget.background":`#191d25`,"editorSuggestWidget.border":`#2c3341`,"editorSuggestWidget.selectedBackground":`#2b4f80`,"editorHoverWidget.background":`#191d25`,"editorHoverWidget.border":`#2c3341`,"editorError.foreground":`#d9534f`,"editorWarning.foreground":`#e0a545`,"scrollbarSlider.background":`#353c4b80`,"scrollbarSlider.hoverBackground":`#3b4453a0`,"editorGutter.background":`#0a0c10`,"minimap.background":`#0a0c10`,focusBorder:`#3a68a8`,"widget.shadow":`#000000a0`,"input.background":`#0a0c10`,"input.foreground":`#dde2ea`,"input.border":`#2c3341`,"quickInput.background":`#191d25`,"quickInput.foreground":`#dde2ea`,"quickInputList.focusBackground":`#2b4f80`,"quickInputList.focusForeground":`#dde2ea`,"list.hoverBackground":`#222732`,"list.highlightForeground":`#e6b95c`,"list.focusHighlightForeground":`#f4d08a`,"pickerGroup.border":`#2c3341`,"pickerGroup.foreground":`#99a2b3`,"keybindingLabel.background":`#222732`,"keybindingLabel.foreground":`#dde2ea`,"keybindingLabel.border":`#3b4453`,"keybindingLabel.bottomBorder":`#3b4453`,"menu.background":`#191d25`,"menu.foreground":`#dde2ea`,"menu.selectionBackground":`#2b4f80`,"menu.selectionForeground":`#dde2ea`,"menu.separatorBackground":`#2c3341`,"menu.border":`#3b4453`}})}function pa(t=aa){let n=t.replace(/\/+$/,``);return sa&&ca!==n||(sa??=(async()=>{ca=n,globalThis.MonacoEnvironment={getWorker:(e,t)=>la(`${n}/${t===`typescript`||t===`javascript`?`ts.worker.js`:`editor.worker.js`}`)};let t=`${n}/monaco.js`,r=await e(()=>import(t),[]);return fa(r),r})().catch(e=>{throw sa=null,ca=null,e})),sa}function ma(e,t,n={}){ua(e).typescriptDefaults.setExtraLibs([{content:t,filePath:`file:///${Br}`},...Object.entries(gi).map(([e,t])=>({content:t,filePath:`file:///node_modules/${Ae}/${e}${_i[e]??`.ts`}`})),...Object.entries(n).filter(([e])=>e!==Ae).flatMap(([e,t])=>Object.entries(t).map(([t,n])=>({content:n,filePath:`file:///node_modules/${e}/${t}`})))])}var ha=(e,t)=>e.Uri.parse(`file:///${Q(t)}`),ga=e=>Q(e.path.replace(/^\/+/,``)),_a=`trigscript-build-time`,va=Yi;function ya(e){va=e}var ba=()=>[],xa=!1;function Sa(e,t){ba=t,!xa&&(xa=!0,e.languages.registerHoverProvider(`typescript`,{async provideHover(t,n){if(t.uri.scheme!==`file`)return null;let r=t.getWordAtPosition(n);if(!r)return null;let i=await(await(await ua(e).getTypeScriptWorker())(t.uri)).getDefinitionAtPosition(t.uri.toString(),t.getOffsetAt(n));for(let t of i??[]){let i=e.editor.getModel(e.Uri.parse(t.fileName));if(!i)continue;let a=i.getPositionAt(t.textSpan.start),o=ga(i.uri),s=ba().find(e=>e.at&&Q(e.at.file)===o&&e.at.line===a.lineNumber&&e.at.column===a.column);if(s)return{range:new e.Range(n.lineNumber,r.startColumn,n.lineNumber,r.endColumn),contents:[{value:s.shared?va(`**{name}** is a variable of the program: {what}, one value shared by every player the program runs for. It lives in the game while the map is played.`,{name:s.name,what:Zi(s,va)}):va(`**{name}** is a variable of the program: {what}. It lives in the game while the map is played.`,{name:s.name,what:Zi(s,va)})}]}}return null}}))}var Ca=()=>[],wa=null;function Ta(e,t){if(Ca=t,wa){wa.fire();return}let n=new e.Emitter;wa=n,e.languages.registerInlayHintsProvider(`typescript`,{onDidChangeInlayHints:n.event,provideInlayHints(t,n){if(t.uri.scheme!==`file`)return null;let r=ga(t.uri);return{hints:Ca().filter(e=>Q(e.file)===r&&e.line>=n.startLineNumber&&e.line<=n.endLineNumber&&e.line<=t.getLineCount()).map(n=>({position:{lineNumber:n.line,column:t.getLineMaxColumn(n.line)},label:n.label,kind:e.languages.InlayHintKind.Type,paddingLeft:!0,tooltip:n.note})),dispose(){}}}})}function Ea(){wa?.fire()}var Da=()=>null,Oa=!1,ka=`trigscript`;function Aa(e,t){Da=t,!Oa&&(Oa=!0,e.languages.registerLinkProvider(`typescript`,{provideLinks(t){let n=Da();return!n||t.uri.scheme!==`file`?{links:[]}:{links:ta(t.getValue(),n.object).filter(e=>n.byKey.has(e.key)).map(t=>({range:new e.Range(t.line,t.column,t.line,t.endColumn),url:e.Uri.from({scheme:ka,path:`/location/${n.byKey.get(t.key).index}`}),tooltip:va(`Show on the map`)}))}}}),e.editor.registerLinkOpener({open(e){if(e.scheme!==ka)return!1;let t=/^\/location\/(\d+)$/.exec(e.path),n=Da();if(!t||!n)return!0;let r=Number(t[1]),i=[...n.byKey.values()].find(e=>e.index===r);return i&&n.open(i),!0}}),e.languages.registerHoverProvider(`typescript`,{provideHover(t,n){let r=Da();if(!r||t.uri.scheme!==`file`)return null;let i=t.getWordAtPosition(n);if(!i||!t.getLineContent(n.lineNumber).slice(0,i.startColumn-1).endsWith(`${r.object}.`))return null;let a=r.byKey.get(i.word);return a?{range:new e.Range(n.lineNumber,i.startColumn,n.lineNumber,i.endColumn),contents:[{value:va(`**{name}** — location {n}: {w} × {h} tiles at {x}, {y}. Ctrl+click to show it on the map.`,{name:a.name,n:a.index+1,w:a.w,h:a.h,x:a.x,y:a.y})}]}:null}}))}function ja(e,t,n,r=[]){for(let i of Object.keys(t)){let t=e.editor.getModel(ha(e,i));t&&e.editor.setModelMarkers(t,`trigscript`,[...n.filter(e=>e.source!==`typescript`&&Q(e.file)===Q(i)).map(t=>({severity:e.MarkerSeverity.Error,message:t.message,startLineNumber:t.line,startColumn:t.column,endLineNumber:t.endLine,endColumn:t.endColumn})),...r.filter(e=>Q(e.file)===Q(i)&&e.line>=1&&e.line<=t.getLineCount()).map(n=>({severity:e.MarkerSeverity.Warning,message:n.message,startLineNumber:n.line,startColumn:t.getLineFirstNonWhitespaceColumn(n.line)||1,endLineNumber:n.line,endColumn:t.getLineMaxColumn(n.line)}))])}}var Ma=`trigscript-test`;function Na(e){for(let t of e.editor.getModels())t.uri.scheme===`file`&&t.uri.path.endsWith(`.ts`)&&t.dispose()}function Pa(e){Na(e);let t=ua(e).typescriptDefaults;t.setCompilerOptions(t.getCompilerOptions())}function Fa(e,t,n,r,i,a,o){Na(e);let s=new Map,c=new Map,l=new Map,u=new Map,d=new Map,f=[],p=new Map,m=(t,n)=>{let r=e.editor.createModel(n,`typescript`,ha(e,t));return s.set(t,r),c.set(t,r.onDidChangeContent(()=>i(t,r.getValue()))),r},h=new Map;for(let[e,t]of Object.entries(n))Tr(e)?h.set(Q(e),t):m(Q(e),t);let g=Q(r);s.has(g)||(g=[...s.keys()][0]);let _=e.editor.create(t,{model:s.get(g)??null,theme:`scm`,automaticLayout:!0,fontFamily:`"Cascadia Mono", "JetBrains Mono", ui-monospace, Consolas, Menlo, monospace`,fontSize:12.5,lineHeight:18,minimap:{enabled:!1},glyphMargin:!0,lineDecorationsWidth:16,scrollBeyondLastLine:!1,renderLineHighlight:`line`,tabSize:2,insertSpaces:!0,wordWrap:`off`,fixedOverflowWidgets:!0,padding:{top:8,bottom:8},quickSuggestions:{other:!0,strings:!0,comments:!1},suggest:{showWords:!1}});_.onMouseDown(t=>{if(t.target.type!==e.editor.MouseTargetType.GUTTER_GLYPH_MARGIN)return;let n=t.target.position?.lineNumber,r=f.find(e=>Q(e.file)===g&&e.line===n);r?a?.(r.id):n&&o?.(g,n)});let v=e=>{let t=Q(e),n=s.get(t);if(!n||t===g)return;p.set(g,_.saveViewState()),g=t,_.setModel(n);let r=p.get(t);r&&_.restoreViewState(r)};return{editor:_,active:()=>g,show:v,files:()=>({...Object.fromEntries(h),...Object.fromEntries([...s].map(([e,t])=>[e,t.getValue()]))}),add(e,t){let n=Q(e);if(!(s.has(n)||h.has(n))){if(Tr(n)){h.set(n,t),i(n,t);return}m(n,t),i(n,t),v(n)}},remove(e){let t=Q(e);if(h.delete(t))return;let n=s.get(t);if(n){if(t===g){let e=[...s.keys()].find(e=>e!==t);e&&v(e)}c.get(t)?.dispose(),c.delete(t),s.delete(t),p.delete(t),l.delete(t),u.delete(t),d.delete(t),n.dispose()}},rename(e,t){let n=Q(e),r=Q(t),i=h.get(n);if(i!==void 0){!h.has(r)&&!s.has(r)&&(h.delete(n),h.set(r,i));return}let a=s.get(n);if(!a||s.has(r))return;let o=a.getValue(),f=n===g,v=f?_.saveViewState():p.get(n)??null;c.get(n)?.dispose(),c.delete(n),s.delete(n),p.delete(n),l.delete(n),u.delete(n),d.delete(n),f&&_.setModel(null),a.dispose();let y=m(r,o);p.set(r,v),f&&(g=r,_.setModel(y),v&&_.restoreViewState(v))},set(e,t){if(h.has(Q(e))){h.set(Q(e),t);return}let n=s.get(Q(e));n&&n.getValue()!==t&&n.setValue(t)},insert(t){let n=_.getSelection()??new e.Selection(1,1,1,1);_.executeEdits(`trigscript`,[{range:n,text:t,forceMoveMarkers:!0}]),_.focus()},cursor(){return{file:g,line:_.getPosition()?.lineNumber??1}},setTests(t,n){f=t;for(let[r,i]of s){let a=i.getLineCount(),o=[...t.filter(e=>Q(e.file)===r&&e.line>=1&&e.line<=a).map(t=>({range:new e.Range(t.line,1,t.line,1),options:{glyphMarginClassName:`${Ma} ${Ma}-${t.state}`,glyphMarginHoverMessage:{value:t.title},stickiness:e.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges}})),...n.filter(e=>Q(e.file)===r&&e.line>=1&&e.line<=a).map(t=>({range:new e.Range(t.line,i.getLineMaxColumn(t.line),t.line,i.getLineMaxColumn(t.line)),options:{after:{content:`  ${t.text}`,inlineClassName:`${Ma}-note`},...t.hover?{hoverMessage:{value:t.hover}}:{},showIfCollapsed:!0,stickiness:e.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges}}))];u.set(r,i.deltaDecorations(u.get(r)??[],o))}},decorate(t){for(let[n,r]of s){let i=t.filter(e=>Q(e.file)===n).map(t=>({range:new e.Range(t.line,t.column,t.endLine,t.endColumn),options:{inlineClassName:_a,hoverMessage:{value:va(`Computed when the script is built, not in the game.`)},stickiness:e.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges}}));l.set(n,r.deltaDecorations(l.get(n)??[],i))}},setDebug(t){let n=(e,t,n)=>e&&Q(e.file)===t&&e.line>=1&&e.line<=n;for(let[r,i]of s){let a=i.getLineCount(),o=t.breakpoints.filter(e=>n(e,r,a)).map(t=>({range:new e.Range(t.line,1,t.line,1),options:{glyphMarginClassName:`trigscript-bp`,glyphMarginHoverMessage:{value:va(`Breakpoint: the debugger's Continue stops before this line runs (a test's line: at the end of the frame it asks for). Click to take it away.`)},stickiness:e.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges}}));t.test&&n(t.test,r,t.test.line)&&t.test.line<=a&&!(t.at&&Q(t.at.file)===r&&t.at.line===t.test.line)&&o.push({range:new e.Range(t.test.line,1,t.test.line,1),options:{isWholeLine:!0,className:`trigscript-debug-test`,linesDecorationsClassName:`trigscript-debug-test-arrow`}}),t.at&&n(t.at,r,a)&&o.push({range:new e.Range(t.at.line,1,t.at.line,1),options:{isWholeLine:!0,className:`trigscript-debug-line`,linesDecorationsClassName:`trigscript-debug-arrow`}}),d.set(r,i.deltaDecorations(d.get(r)??[],o))}},dispose(){for(let e of c.values())e.dispose();_.dispose()}}}var Ia=`4.1.0`,La=`https://cdn.jsdelivr.net/npm/typescript@6.0.3/lib/typescript.js`,Ra=(e=aa)=>`${e.replace(/\/+$/,``)}/lib.d.ts`,za=(e=aa)=>e===aa?`https://cdn.jsdelivr.net/gh/scm-js/plugin-trigscript@v${Ia}/dist/compiler.js`:`${e.replace(/\/+$/,``)}/compiler.js`,Ba=(e=aa)=>e===aa?`https://cdn.jsdelivr.net/gh/scm-js/plugin-trigscript@v${Ia}/dist/gametest.js`:`${e.replace(/\/+$/,``)}/gametest.js`,Va=(e=aa)=>e===aa?`https://cdn.jsdelivr.net/gh/scm-js/plugin-trigscript@v${Ia}/dist/allowlist.json`:`${e.replace(/\/+$/,``)}/allowlist.json`,Ha=(e=aa)=>e===aa?`https://cdn.jsdelivr.net/gh/scm-js/plugin-trigscript@v${Ia}/dist/vorbis.wasm`:`${e.replace(/\/+$/,``)}/vorbis.wasm`,Ua=(e=aa)=>$i.startsWith(`blob:`)&&!Ya?$i:za(e),Wa=15e3,Ga=6e4,Ka=`
importScripts(${JSON.stringify(La)});
let loading = null;
let lib = null;
self.onmessage = async (e) => {
  const { id, moduleUrl, libUrl, vorbisUrl, files, names, tests, own, entries, libraries, build } = e.data;
  try {
    if (!loading) loading = import(moduleUrl);
    let mod;
    try { mod = await loading; } catch (err) { loading = null; postMessage({ id, error: String((err && err.message) || err), fatal: true }); return; }
    // The plugin fetched as one bundle is a blob too, but one that exports the plugin and not the compiler.
    if (typeof mod.compileScript !== "function") { loading = null; postMessage({ id, error: "the module has no compiler in it", fatal: true }); return; }
    // A build of a map of our own: the compile's programs into the scenario's bytes, no TypeScript needed.
    if (build) {
      if (typeof mod.buildOwnMap !== "function") throw new Error("This compiler bundle cannot build a map of its own: update the plugin.");
      postMessage({ id, result: mod.buildOwnMap(build) });
      return;
    }
    if (lib === null) {
      const r = await fetch(libUrl);
      if (!r.ok) throw new Error("Could not load the standard library from " + libUrl + " (" + r.status + ").");
      lib = await r.text();
    }
    // A check names the script's clips and makes none of them; a build makes them, the long ones encoded below.
    const result = mod.compileScript(self.ts, files, names, { lib, tests, sounds: Boolean(vorbisUrl), own, entries, libraries });
    // A build's long clips encoded as Ogg Vorbis; a check's left as names, their samples not sent.
    if (typeof mod.finishSounds === "function") {
      const encoder = vorbisUrl && result.sounds.some((s) => s.vorbis) ? await mod.loadVorbis(vorbisUrl) : null;
      mod.finishSounds(result.sounds, encoder);
    }
    postMessage({ id, result });
  } catch (err) {
    postMessage({ id, error: String((err && err.message) || err) });
  }
};
`,qa=class extends Error{constructor(e){super(`The compiler could not start (${e}). It is tried again on the next check.`),this.name=`CompilerUnavailable`}},Ja=null,Ya=!1,Xa=null,Za=0,Qa=new Map,$a=3e4,eo=null,to=0;function no(){eo!==null&&(clearTimeout(eo),eo=null)}function ro(){!Ja||to>0||Qa.size>0||(no(),eo=setTimeout(()=>{eo=null,!(!Ja||to>0||Qa.size>0)&&(Ja.terminate(),Ja=null)},$a))}function io(){to++,no();let e=!1;return()=>{e||(e=!0,to--,ro())}}function ao(e){for(let[t,n]of Qa)Qa.delete(t),clearTimeout(n.timer),n.reject(Error(e))}var oo=`retry by the bundle`;function so(e){if(Ja?.terminate(),Ja=null,$i.startsWith(`blob:`)&&!Ya){Ya=!0,ao(oo);return}Xa={reason:e,at:Date.now()};for(let[t,n]of Qa)Qa.delete(t),clearTimeout(n.timer),n.reject(new qa(e))}function co(e,t){let n=Qa.get(e);n&&(Qa.delete(e),Ja?.terminate(),Ja=null,ao(`The compile was stopped.`),n.reject(Error(n.build?`The build did not finish in ${t/1e3} seconds.`:`The script did not finish in ${t/1e3} seconds. Is there an endless loop outside program()?`)))}function lo(){if(Xa){if(Date.now()-Xa.at<5e3)throw new qa(Xa.reason);Xa=null}if(no(),Ja)return Ja;try{if(typeof Worker>`u`)throw Error(`this browser has no workers`);Ja=new Worker(URL.createObjectURL(new Blob([Ka],{type:`text/javascript`})))}catch(e){throw Xa={reason:e.message,at:Date.now()},new qa(Xa.reason)}return Ja.onmessage=e=>{let t=e.data;if(t.fatal){so(`${t.error??`the compiler module did not load`}`);return}let n=Qa.get(t.id);n&&(Qa.delete(t.id),clearTimeout(n.timer),t.result?n.resolve(t.result):n.reject(Error(t.error??`Compile failed.`)),ro())},Ja.onerror=e=>so(e.message||`the worker's scripts did not load`),Ja}var uo=class extends Error{constructor(){super(`A newer compile replaced this one.`),this.name=`CompileSuperseded`}};function fo(e,t=aa){let n;try{n=lo()}catch(e){return Promise.reject(e)}let r=++Za;for(let[e,t]of Qa)t.build||(Qa.delete(e),clearTimeout(t.timer),t.reject(new uo));return new Promise((i,a)=>{let o=e.sounds?Ga:Wa;Qa.set(r,{resolve:e=>i(e),reject:a,timer:setTimeout(()=>co(r,o),o),build:!1});let s={id:r,moduleUrl:Ua(t),libUrl:Ra(t),files:e.files,names:e.names,...e.tests?{tests:e.tests}:{},...e.sounds?{vorbisUrl:Ha(t)}:{},...e.own?{own:e.own}:{},...e.entries?{entries:e.entries}:{},...e.libraries?{libraries:e.libraries}:{}};n.postMessage(s)}).catch(n=>{if(n.message===oo)return fo(e,t);throw n})}function po(e,t=aa){let n;try{n=lo()}catch(e){return Promise.reject(e)}let r=++Za;return new Promise((i,a)=>{let o=Ga;Qa.set(r,{resolve:e=>i(e),reject:a,timer:setTimeout(()=>co(r,o),o),build:!0});let s={id:r,moduleUrl:Ua(t),libUrl:Ra(t),build:e};n.postMessage(s)}).catch(n=>{if(n.message===oo)return po(e,t);throw n})}function mo(e,t){let n=t-e.base;return n<0?!1:e.stride?n%e.stride<e.width&&Math.floor(n/e.stride)<(e.count??1):n<e.width}var ho=8,go=new WeakMap;function _o(e){let t=go.get(e);if(t)return t;t=new Map;for(let n of e.entries){let e=n.base+(n.stride?n.stride*((n.count??1)-1):0)+n.width;for(let r=n.base>>>ho;r<=e-1>>>ho;r++){let e=t.get(r);e?e.push(n):t.set(r,[n])}}return go.set(e,t),t}var vo={ends:3,ignored:2,allowed:1,unknown:0};function yo(e,t,n){let r={verdict:`unknown`,entry:null},i={verdict:`unknown`,entry:null};for(let a of _o(e).get(t>>>ho)??[]){if(!mo(a,t))continue;let e=n?a.write:a.read,o=a.from===`dump`?i:r;(o.entry===null||vo[e]>vo[o.verdict])&&(o.verdict=e,o.entry=a)}return r.entry&&r.verdict!==`unknown`?r:i.entry?i:r.entry?r:{verdict:e.outside?.verdict??`unknown`,entry:null}}function bo(e){let t=/EUD\s*ERROR\s*:?\s*(?:0x)?([0-9a-f]{1,8})\b/i.exec(e)??/^\s*(?:0x)?([0-9a-f]{1,8})\s*$/i.exec(e);return t?~parseInt(t[1],16)>>>0:null}function xo(e){return`0x${(~e>>>0).toString(16).toUpperCase().padStart(8,`0`)}`}var So=e=>`0x${e.toString(16)}`,Co={base:5885096,stride:336,count:1700},wo=[[0,4,`previous unit`],[4,4,`next unit`],[8,4,`hit points`],[12,4,`sprite`],[16,4,`move target position`],[20,4,`move target unit`],[24,4,`next waypoint`],[28,4,`next target waypoint`],[32,1,`movement flags`],[33,1,`facing direction`],[34,1,`turn radius`],[35,1,`velocity direction`],[36,2,`flingy`],[38,1,`unknown 0x26`],[39,1,`movement type`],[40,2,`x`],[42,2,`y`],[44,4,`halt x`],[48,4,`halt y`],[52,4,`top speed`],[56,4,`speed 1`],[60,4,`speed 2`],[64,4,`current speed`],[68,2,`acceleration`],[70,1,`direction 2`],[71,1,`velocity direction 2`],[72,4,`unknown 0x48`],[76,1,`owner`],[77,1,`order`],[78,1,`order state`],[79,1,`order signal`],[80,2,`order unit type`],[82,2,`unknown 0x52`],[84,1,`order timer`],[85,1,`ground weapon cooldown`],[86,1,`air weapon cooldown`],[87,1,`spell cooldown`],[88,4,`order target position`],[92,4,`order target unit`],[96,4,`shields`],[100,2,`unit type`],[102,2,`unknown 0x66`],[104,4,`previous unit of its player`],[108,4,`next unit of its player`],[112,4,`subunit`],[116,4,`order queue head`],[120,4,`order queue tail`],[124,4,`auto target unit`],[128,4,`connected unit`],[132,1,`order queue count`],[133,1,`order queue timer`],[134,1,`unknown 0x86`],[135,1,`attack notify timer`],[136,2,`previous unit type`],[138,1,`last event timer`],[139,1,`last event colour`],[140,2,`unused 0x8c`],[142,1,`rank increase`],[143,1,`kills`],[144,1,`last attacking player`],[145,1,`secondary order timer`],[146,1,`AI action flag`],[147,1,`user action flags`],[148,2,`button set`],[150,1,`cloaked`],[151,1,`movement state`],[152,10,`build queue`],[162,2,`energy`],[164,1,`build queue slot`],[165,1,`unique id`],[166,1,`secondary order`],[167,1,`building overlay state`],[168,2,`hit point gain`],[170,2,`shield gain`],[172,2,`remaining build time`],[174,2,`previous hit points`],[176,16,`loaded units`],[192,16,`what its type keeps (mines, interceptors, nuke…)`],[208,12,`what a building keeps (resources, …)`],[220,4,`status flags`],[224,1,`resource type`],[225,1,`wireframe randomiser`],[226,1,`secondary order state`],[227,1,`recent order timer`],[228,4,`visibility`],[232,4,`secondary order position`],[236,4,`unit being built`],[240,4,`previous burrowed unit`],[244,4,`next burrowed unit`],[248,8,`rally point`],[256,4,`path`],[260,1,`pathing collision interval`],[261,1,`pathing flags`],[262,1,`unused 0x106`],[263,1,`being healed`],[264,8,`contour bounds`],[272,2,`remove timer`],[274,2,`defensive matrix hit points`],[276,1,`defensive matrix timer`],[277,1,`stim timer`],[278,1,`ensnare timer`],[279,1,`lockdown timer`],[280,1,`irradiate timer`],[281,1,`stasis timer`],[282,1,`plague timer`],[283,1,`storm timer`],[284,4,`irradiated by`],[288,1,`irradiating player`],[289,1,`parasites`],[290,1,`cycle counter`],[291,1,`blind`],[292,1,`maelstrom timer`],[293,1,`unused 0x125`],[294,1,`acid spore count`],[295,9,`acid spore timers`],[304,2,`3×3 attack sequence`],[306,2,`unused 0x132`],[308,4,`computer player's data`],[312,2,`air strength`],[314,2,`ground strength`],[316,16,`unit finder bounds`],[332,4,`repulse`]];function To(e){let t=wo.find(([t,n])=>e>=t&&e<t+n);return t?e===t[0]?t[2]:`${t[2]} (+${e-t[0]})`:`+${So(e)}`}var Eo=[{name:`deaths`,base:5808996,stride:4,count:2736,row:e=>`of unit type ${Math.floor(e/12)} for P${e%12+1}`},{name:`kills`,base:5798052,stride:4,count:2736,row:e=>`of unit type ${Math.floor(e/12)} for P${e%12+1}`},{name:`minerals`,base:5763312,stride:4,count:12,row:e=>`of P${e+1}`},{name:`gas`,base:5763360,stride:4,count:12,row:e=>`of P${e+1}`},{name:`switches`,base:5823552,stride:4,count:8,row:e=>`${32*e+1} to ${32*e+32}`},{name:`locations`,base:5823584,stride:20,count:255,row:e=>`location ${e+1}`},{name:`text lines`,base:6556512,stride:218,count:13,row:e=>`line ${e+1}`},{name:`keys of the local machine`,base:5859864,stride:1,count:256},{name:`mouse buttons of the local machine`,base:7134656,stride:4,count:1},{name:`mouse position of the local machine`,base:7134660,stride:8,count:1},{name:`current player`,base:6621616,stride:4,count:1}];function Do(e,t){let n=e-Co.base;if(n>=0&&n<Co.stride*Co.count){let e=n%Co.stride;return`the unit table: slot ${Math.floor(n/Co.stride)} of ${Co.count.toLocaleString(`en`)}, ${To(e)} (+${So(e)})`}for(let t of Eo){let n=e-t.base;if(n<0||n>=t.stride*t.count)continue;let r=Math.floor(n/t.stride),i=n%t.stride;return`${t.name}${t.row?`, ${t.row(r)}`:``}${t.stride>4&&i?` (+${i})`:``}`}let r=En.find(t=>e>=t.base&&e<t.base+t.width);if(r)return`memory.${r.path.join(`.`)}`;for(let[t,n]of Object.entries(wt))for(let r of n){let n=r.width===`bit`?4:r.width,i=e-r.base;if(i<0||i%r.stride>=n)continue;let a=Math.floor(i/r.stride);if(a<(r.keyed?12:Oo[t]))return`stats(): the ${t} table's ${r.name}, entry ${a}`}let i=t?.entries.find(t=>!/^0x[0-9a-f]+$/i.test(t.name)&&ko(t,e));return i?i.name:`no table TrigScript knows`}var Oo={unit:228,weapon:130,upgrade:61,tech:44,player:12};function ko(e,t){let n=t-e.base;return n<0?!1:e.stride?n%e.stride<e.width&&Math.floor(n/e.stride)<(e.count??1):n<e.width}function Ao(e,t,n){let r=e&-4,i=e-Co.base,a=i>=0&&i<Co.stride*Co.count?i%Co.stride&-4:null,o=new Map,s={exact:0,field:0};for(let e of t){let t=null;if(e.address===r)t=`exact`;else if(a!==null){let n=e.address-Co.base;n>=0&&n<Co.stride*Co.count&&n%Co.stride===a&&(t=`field`)}if(!t)continue;if(e.file===null||e.line===null){s[t]+=e.times;continue}let n=`${e.file}:${e.line}`,i=o.get(n);i?(i.times+=e.times,t===`exact`&&(i.match=`exact`),e.write?i.write=!0:i.read=!0):o.set(n,{file:e.file,line:e.line,match:t,read:!e.write,write:e.write,times:e.times})}let c=[...o.values()].sort((e,t)=>(e.match===t.match?0:e.match===`exact`?-1:1)||t.times-e.times||e.file.localeCompare(t.file)||e.line-t.line),l=n?yo(n,e,!1):null,u=n?yo(n,e,!0):null,d=[...new Set([...l?.entry?.evidence??[],...u?.entry?.evidence??[]])];return n&&!l?.entry&&!u?.entry&&n.outside&&d.push(...n.outside.evidence),{code:xo(e),address:e,place:Do(e,n),read:l?.verdict??`unknown`,write:u?.verdict??`unknown`,evidence:d,lines:c,unlined:s}}function jo(e,t){return e.used?.add(t),t}function Mo(e,t,n){let r=Cn(e,t);return r?ke(jo(n,e.object),r.keys[0]):String(t)}function No(e,t){return t>=0&&t<12?jo(e,`P${t+1}`):t===a.CurrentPlayer?jo(e,`CurrentPlayer`):t===a.AllPlayers?jo(e,`AllPlayers`):Mo(e.names.players,t,e)}function Po(e,t,n){switch(e){case`player`:return No(n,t);case`unit`:return Mo(n.names.units,t,n);case`location`:return Mo(n.names.locations,t,n);case`switch`:return Mo(n.names.switches,t,n);case`aiScript`:{let e=Cn(n.names.aiScripts,t);return e?ke(jo(n,n.names.aiScripts.object),e.keys[0]):JSON.stringify(me(t))}case`text`:case`wav`:return JSON.stringify(n.string(t)??``);case`count`:return t===0?`"All"`:String(t);case`number`:case`amount`:case`duration`:case`percent`:case`cuwp`:case`slot`:return String(t);default:{let n=we(e,t);return n?JSON.stringify(n):String(t)}}}function Fo(e,t,n){return t?`${jo(n,`disabled`)}(${e})`:e}function Io(e,t){let n=oe(e.type),r=ye(e.type),i=(e.flags&g.Disabled)!==0;if(!n||!r||r===`briefing`){let n=e;return Fo(`${jo(t,`condition`)}(${on.map(e=>n[e]).join(`, `)})`,i,t)}let a=De(n).map(n=>Po(n.arg.kind,e[n.arg.field],t));return Fo(`${jo(t,r)}(${a.join(`, `)})`,i,t)}function Lo(e,t){let n=se(e.type),r=be(e.type),i=(e.flags&_.Disabled)!==0,a=e;if(!n||!r)return Fo(`${jo(t,`action`)}(${sn.map(e=>a[e]).join(`, `)})`,i,t);let o=[];for(let e of De(n)){if(e.arg.kind===`textFlags`){a.flags&_.AlwaysDisplay||o.push(`false`);continue}o.push(Po(e.arg.kind,a[e.arg.field],t))}return Fo(`${jo(t,r)}(${o.join(`, `)})`,i,t)}function Ro(e){return e.length?`[\n${e.map(e=>`  ${e},`).join(`
`)}\n]`:`[]`}function zo(e,t){let n=[];e.players.forEach((e,r)=>{e&&n.push(No(t,r))});let r=U.reduce((e,[t])=>e|t,0),i=U.filter(([t])=>e.flags&t).map(([,e])=>`${e}: true`);e.flags&~r&&i.push(`flags: 0x${(e.flags&~r).toString(16)}`);let a=[n.length===1?n[0]:`[${n.join(`, `)}]`,Ro(e.conditions.map(e=>Io(e,t))),Ro(e.actions.map(e=>Lo(e,t)))];return i.length&&a.push(`{ ${i.join(`, `)} }`),`${jo(t,`trigger`)}(${a.join(`, `)});`}var Bo=`// TrigScript — built into a block of the map's trigger list.
// Each trigger(players, conditions, actions, options?) call becomes one trigger, in order.
`;function Vo(e,t,n={}){let r=n.header??Bo,i=new Set,a=e.length?e.map(e=>zo(e,{...t,used:i})).join(`

`)+`
`:``;return[r,n.imports&&i.size?`import { ${[...i].sort().join(`, `)} } from "${Ae}";\n`:``,a].filter(e=>e!==``).join(`
`)}var Ho=`trigscript\\`,Uo=`${Ho}build.json`;`${Ho}${Xi}`;var Wo=`${Ho}settings.json`,Go={heapCells:Ze,stackDepth:nt,testsGuardBuild:!1};function Ko(e){let t=is(e,Wo);if(!t)return{...Go};try{let e=JSON.parse(Jo.decode(t));return{heapCells:tt(e?.heapCells),stackDepth:at(e?.stackDepth),testsGuardBuild:e?.testsGuardBuild===!0}}catch{return{...Go}}}function qo(e,t){let n={},r=tt(t.heapCells),i=at(t.stackDepth);return r!==Go.heapCells&&(n.heapCells=r),i!==Go.stackDepth&&(n.stackDepth=i),t.testsGuardBuild===!0&&(n.testsGuardBuild=!0),as(e,Wo,Object.keys(n).length?Yo.encode(JSON.stringify(n,null,2)):null)}var Jo=new TextDecoder,Yo=new TextEncoder,Xo=e=>e.replace(/\//g,`\\`).toLowerCase();function Zo(e){return Xo(e).startsWith(Xo(Ho))}var Qo=e=>/^staredit\\wav\\trigscript-(?:[0-9a-f]{8}|[0-9a-f]{16})\.(wav|ogg)$/.test(Xo(e));function $o(e,t){let n=new Map;for(let[t,r]of e)Qo(t)||n.set(t,r);for(let r of t){let t=[...e].find(([e])=>Xo(e)===Xo(r.path))?.[1]??r.bytes;if(!t)throw Error(`The sound ${r.path} was not encoded: compile it as a build (with its sounds) before installing it.`);n.set(r.path,t)}return n}function es(e){return`${Ho}${Q(e).replace(/\//g,`\\`)}`}function ts(e){if(!Zo(e)||ls(e))return null;let t=e.replace(/\//g,`\\`).slice(11);return ns.test(t)?t.replace(/\\/g,`/`):null}var ns=/\.(?:tsx?|video|image|sound|notes)$/i,rs=/^(?:[A-Za-z0-9_\-.]+\/)*[A-Za-z0-9_\-.]+\.(?:tsx?|video|image|sound|notes)$/;function is(e,t){let n=Xo(t);for(let[t,r]of e)if(Xo(t)===n)return r}function as(e,t,n){let r=new Map(e),i=Xo(t);for(let e of r.keys())Xo(e)===i&&r.delete(e);return n&&r.set(t,n),r}function os(e){let t={};for(let[n,r]of e){let e=ts(n);e&&(t[e]=Jo.decode(r))}return t}var ss=`${Ho}@libraries\\`,cs=`library.json`,ls=e=>Xo(e).startsWith(Xo(ss));function us(e){let t={};for(let[n,r]of e){if(!ls(n))continue;let[e,...i]=n.replace(/\//g,`\\`).slice(ss.length).split(`\\`);if(!vi.test(e)||i.length===0)continue;let a=i.join(`/`),o=t[e]??={id:e,label:e,version:``,modules:{}};if(a===cs)try{let e=JSON.parse(Jo.decode(r));typeof e?.label==`string`&&e.label&&(o.label=e.label),typeof e?.version==`string`&&(o.version=e.version)}catch{}else yi.test(a)&&(o.modules[a]=Jo.decode(r))}for(let e of Object.keys(t))Object.keys(t[e].modules).length===0&&delete t[e];return t}function ds(e,t){let n=new Map,r=new Map;for(let[t,i]of e)ls(t)?r.set(Xo(t),i):n.set(t,i);let i=(e,t)=>{let i=r.get(Xo(e));n.set(e,i&&Jo.decode(i)===t?i:Yo.encode(t))};for(let e of Object.values(t)){let t=`${ss}${e.id}\\`;i(`${t}${cs}`,JSON.stringify({label:e.label,version:e.version},null,2));for(let[n,r]of Object.entries(e.modules))i(`${t}${n.replace(/\//g,`\\`)}`,r)}return n}function fs(e){return Object.fromEntries(Object.values(e).map(e=>[e.id,e.modules]))}function ps(e,t){let n=new Map;for(let[t,r]of e)ts(t)||n.set(t,r);for(let[e,r]of Object.entries(t))n.set(es(e),Yo.encode(r));return n}function ms(e){let t=is(e,Uo);if(!t)return null;try{let e=JSON.parse(Jo.decode(t));if(e.version!==2||typeof e.start!=`number`||typeof e.count!=`number`||typeof e.hash!=`string`)return null;let n=typeof e.programs==`number`&&e.programs>=0?{programs:Math.floor(e.programs)}:{},r=Array.isArray(e.sources)?e.sources.map(e=>e&&typeof e==`object`&&typeof e.file==`string`&&typeof e.line==`number`?{file:e.file,line:e.line}:null):[],i=Array.isArray(e.files)?e.files.filter(e=>typeof e==`string`):[],a=Array.isArray(e.records)&&e.records.length===e.count&&e.records.every(e=>typeof e==`string`)?e.records:void 0;return{version:2,...n,start:e.start,count:e.count,hash:e.hash,sources:r,files:i,sourceHash:typeof e.sourceHash==`string`?e.sourceHash:``,...a?{records:a}:{}}}catch{return null}}function hs(e,t){return as(e,Uo,t?Yo.encode(JSON.stringify(t)):null)}function gs(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e[n],t=Math.imul(t,16777619)>>>0;return t.toString(16).padStart(8,`0`)}function _s(e){return`${e.length}:${gs(C(e))}`}function vs(e){return gs(C([e]))}function ys(e){return gs(Yo.encode(e))}function bs(e){return ys(Object.keys(e).map(Q).sort().map(t=>`${t}\0${e[t]??``}\0`).join(``))}function xs(e,t={}){let n=Object.values(t);if(n.length===0)return bs(e);let r={...e};for(let e of n)for(let[t,n]of Object.entries(e.modules))r[bi(e.id,t)]=n;return bs(r)}function Ss(e,t){let{start:n,count:r}=t,i=n=>n>=0&&n+r<=e.length&&_s(e.slice(n,n+r))===t.hash;if(i(n))return{start:n,count:r,sources:t.sources};if(r===0)return{start:Math.min(n,e.length),count:r,sources:t.sources};for(let a=0;a+r<=e.length;a++)if(a!==n&&i(a))return{start:a,count:r,sources:t.sources};return null}function Cs(e,t){if(!t.records)return null;let n={unchanged:[],changed:[]};for(let r=0;r<t.count;r++){let i=t.start+r;if(i>=e.length)break;(vs(e[i])===t.records[r]?n.unchanged:n.changed).push(i)}return n.unchanged.length?n:null}function ws(e,t){let n=os(t),r=Object.keys(n).length?n:null,i=us(t),a=ms(t),o=e&&a?Ss(e,a):null,s=r!==null&&(!a||a.sourceHash!==xs(r,i)),c=!!a&&!o,l=c&&e?Cs(e,a):null;return{files:r,source:r?.[`main.ts`]??null,manifest:a,block:o,stale:c,edited:l?{unchanged:l.unchanged.length,changed:l.changed.length}:null,unbuilt:s,programs:a?.programs??0,libraries:Object.values(i).map(({id:e,label:t,version:n})=>({id:e,label:t,version:n}))}}function Ts(e,t){let n=ms(t);if(!n)return null;let r=Ss(e,n);return!r||r.start===n.start?null:hs(t,{...n,start:r.start})}function Es(e,t){let n=new Map;return r=>{if(r===0)return 0;let i=n.get(r);if(i!==void 0)return i;let a=e.strings[r-1],o=a?`index`in a?a.index:t(a.text):0;return n.set(r,o),o}}function Ds(e,t){let n=Es(e,t);return e.triggers.map(e=>{let t=w(e);for(let e of t.actions)e.text=n(e.text),e.wav=n(e.wav);return t})}function Os(e,t,n,r,i,a={}){let o=Ds(r,i),s=ws(e,t),c,l,u,d,f=a.replaceStale&&s.stale&&s.manifest?Cs(e,s.manifest):null;if(a.takeOver)c=0,l=[],u=[];else if(s.block)c=s.block.start,l=e.slice(0,c),u=e.slice(c+s.block.count);else if(f){c=s.manifest.start;let t=Math.min(e.length,c+s.manifest.count);l=e.slice(0,c),u=[...f.changed.map(t=>e[t]),...e.slice(t)],d={removed:f.unchanged.length,kept:f.changed.length}}else c=e.length,l=e.slice(),u=[];let p={version:2,programs:r.ir.length,start:c,count:o.length,hash:_s(o),sources:r.sources,files:Object.keys(n).map(Q).sort(),sourceHash:xs(n,a.libraries??us(t)),records:o.map(vs)},m=a.keepFiles?t:a.libraries?ds(ps(t,n),a.libraries):ps(t,n);return{list:[...l,...o,...u],extras:$o(hs(m,p),r.sounds??[]),block:{start:c,count:o.length,sources:p.sources},...d?{replaced:d}:{}}}function ks(e,t,n){let r=null,i=Q(t);return e.sources.forEach((t,a)=>{t&&Q(t.file)===i&&t.line<=n&&(r=e.start+a)}),r}var As=5808996,js=`TRIGSCRIPT-VARS `,Ms=`TRIGSCRIPT-PROGRAM `,Ns=e=>/^TRIGSCRIPT-[A-Z]+ /.test(e);function Ps(e){let t=null,n=[];for(let r of e)r.startsWith(js)?t=JSON.parse(r.slice(16)):r.startsWith(Ms)&&n.push(JSON.parse(r.slice(19)));return!t||n.length!==t.programs?null:{heap:t.heap,...t.cells==null?{}:{cells:t.cells},strings:t.strings,programs:n.sort((e,t)=>e.index-t.index)}}function Fs(e,t,n){return e.cells==null?e.heap==null?null:e.heap+4*(t+n):e.cells+72*(t+n)}var Is=65536,Ls=new TextDecoder;function Rs(e,t,n=0,r){let i=t.programs.find(e=>(typeof n==`number`?e.index===n:e.name===n)&&(r===void 0||e.owners.includes(r)));if(!i){let e=[...new Set(t.programs.map(e=>e.name).filter(Boolean))];throw Error(typeof n==`number`?`There is no program ${n}: the script has ${t.programs.length}.`:`There is no program named "${n}"${r===void 0?``:` that runs for P${r+1}`}. ${e.length?`Named: ${e.join(`, `)}.`:`A program is named by its option: program(() => { … }, { name: "waves" }).`}`)}let a=r??i.owners[0]??0,{m:o,u8:s}=e,c=(e,t,n=4)=>e==null?0:o.getUint32(t?e+n*a:e,!0),l=(e,t)=>t.kind===`boolean`?e!==0:t.bits||t.unsigned?e>>>0:e|0,u=e=>{let t=e;for(;t<s.length&&t-e<Is&&s[t]!==0;)t++;return Ls.decode(s.subarray(e,t))},d=(e,t)=>{let n=c(t,e.rowed,e.stride);return n&&e.epd?As+4*n>>>0:n},f=e=>{if(e.text===`made`){let t=d(e,e.cells.addr);return t?u(t):``}let n=c(e.cells.value,e.rowed,e.stride)+(e.textBase??0);return n?u(t.strings+o.getUint32(t.strings+4*n,!0)):``},p=t=>{if(t.kind===`unit`){let n=d(t,t.cells.ptr),r=c(t.cells.uid,t.rowed,t.stride);return n?e.unitAt(n,t.epd?r<<8:r):null}return t.kind===`text`?f(t):l(c(t.cells.value,t.rowed,t.stride),t)},m=e=>{if(e.dynamic){if(t.heap==null&&t.cells==null)return[];let n=c(e.ptr,e.rowed,e.stride),r=Math.min(c(e.len,e.rowed,e.stride),Is);return Array.from({length:r},(r,i)=>l(o.getUint32(Fs(t,n,i),!0),e))}if(e.at==null)return Array(e.length).fill(l(0,e));let n=e.rowed?a*e.length:0,r=e.stride??4;return Array.from({length:e.length},(t,i)=>l(o.getUint32(e.at+r*(n+i),!0),e))},h=(e,t)=>e===t||e.startsWith(`${t}#`),g=(e,t)=>{let n;for(let r of e)h(r.id,t)&&(n=r);return n},_=e=>{let t=g(i.vars.filter(e=>e.kind===`number`||e.kind===`boolean`),e);if(t)return p(t);let n=g(i.vars.filter(e=>e.kind===`text`),e);if(n)return f(n);let r=g(i.arrays,e);if(r)return m(r);let a=g(i.vars.filter(e=>e.kind===`unit`),e);if(a)return p(a);let o=t=>t.startsWith(`${e}.`)?t.slice(e.length+1).split(`#`)[0]:null,s={};for(let e of i.vars){let t=o(e.id);t&&e.kind!==`unit`&&!(e.kind!==`text`&&t.includes(` (`))&&(s[t]=p(e))}if(Object.keys(s).length)return s;let c=[];for(let e of i.arrays){let t=o(e.id);t&&m(e).forEach((e,n)=>{(c[n]??={})[t]=e})}return c.length?c:void 0};return new Proxy({},{get:(e,t)=>typeof t==`string`?_(t):void 0,has:(e,t)=>typeof t==`string`&&_(t)!==void 0})}function zs(e){let t=null,n=[];for(let r of e)r.startsWith(`TRIGSCRIPT-MAP `)?t=JSON.parse(r.slice(15)):r.startsWith(`TRIGSCRIPT-ROWS `)&&n.push(...JSON.parse(r.slice(16)));return t&&n.length===t.count?{payload:t.payload,triggers:n}:null}function Bs(e,t){return e.map(e=>{let n=t.map(t=>{let n=t.result,r=t.error??n?.error??null,i=n?.results.find(t=>t.id===e);return{player:t.player,r:r||!i?{id:e,status:`failed`,message:r??`the test did not run at this computer`,printed:[],events:[],frames:0,ms:0}:i}}),r=n.find(e=>e.r.status===`failed`),i=n[0].r,a=Math.max(...n.map(e=>e.r.ms));if(!r)return{...i,ms:a};let o=n.every(e=>e.r.status===`failed`&&e.r.message===r.r.message);return{...r.r,ms:a,message:o?r.r.message:`at P${r.player+1}'s computer: ${r.r.message}`}})}function Vs(e){return e<1e3?String(e):e<1e6?`${(e/1e3).toFixed(+(e<1e4))}k`:`${(e/1e6).toFixed(1)}M`}function Hs(e){return e<.1?e.toFixed(3):e<1?e.toFixed(2):e<10?e.toFixed(1):e.toFixed(0)}function Us(e){let t=new Map;for(let{id:n,cost:r}of e)for(let e of r.lines){let r=`${e.file}:${e.line}`,i=t.get(r);(!i||(e.ms&&i.ms?e.ms.peak>i.ms.peak:e.peak>i.peak))&&t.set(r,{...e,test:n})}return[...t.values()]}var Ws=36.6;function Gs(e){let t={kind:`folder`,name:``,path:``,children:[]};for(let n of e.map(Q)){let e=n.split(`/`),r=t;for(let[t,n]of e.slice(0,-1).entries()){let i=r.children.find(e=>e.kind===`folder`&&e.name===n);i||(i={kind:`folder`,name:n,path:e.slice(0,t+1).join(`/`),children:[]},r.children.push(i)),r=i}r.children.push({kind:`file`,name:e[e.length-1],path:n})}let n=e=>{e.children.sort((e,t)=>e.kind===t.kind?e.path===`main.ts`?-1:t.path===`main.ts`?1:e.name.localeCompare(t.name):e.kind===`folder`?-1:1);for(let t of e.children)t.kind===`folder`&&n(t)};return n(t),t.children}var Ks=e=>e.split(`/`).slice(0,-1).join(`/`),qs=(e,t)=>e.filter(e=>e.startsWith(`${t}/`)),Js=/^(?:[A-Za-z0-9_\-.]+\/)*[A-Za-z0-9_\-.]+$/,Ys=e=>Js.test(e)&&!e.split(`/`).some(e=>e===`.`||e===`..`);function Xs(e){let t=new Map;for(let n of e){let e=n.split(`/`).pop();t.set(e,[...t.get(e)??[],n])}let n=new Map;for(let[e,r]of t)for(let t of r)n.set(t,r.length>1?{label:e,folder:Ks(t)||`.`}:{label:e});return n}var Zs=/[A-Za-z0-9_$]/;function Qs(e){let t=[],n=``,r=``,i=e=>{r=n,n=e},a=0,o=e.length;for(;a<o;){let s=e[a];if(s===`/`&&e[a+1]===`/`){let t=e.indexOf(`
`,a);a=t<0?o:t;continue}if(s===`/`&&e[a+1]===`*`){let t=e.indexOf(`*/`,a+2);a=t<0?o:t+2;continue}if(s===`"`||s===`'`){let c=a+1;for(;c<o&&e[c]!==s&&e[c]!==`
`;)c+=e[c]===`\\`?2:1;(n===`from`||n===`import`||n===`(`&&(r===`import`||r===`require`))&&e[c]===s&&t.push({text:e.slice(a+1,c),start:a+1,end:c}),i(`string`),a=c+1;continue}if(s==="`"){let t=a+1,n=0;for(;t<o;){if(e[t]===`\\`){t+=2;continue}if(n===0&&e[t]==="`")break;if(e[t]===`$`&&e[t+1]===`{`){n++,t+=2;continue}n>0&&e[t]===`{`&&n++,n>0&&e[t]===`}`&&n--,t++}i(`string`),a=t+1;continue}if(Zs.test(s)){let t=a+1;for(;t<o&&Zs.test(e[t]);)t++;i(e.slice(a,t)),a=t;continue}/\s/.test(s)||i(s),a++}return t}function $s(e,t){let n=Ks(e).split(`/`).filter(Boolean),r=t.split(`/`),i=0;for(;i<n.length&&i<r.length-1&&n[i]===r[i];)i++;let a=n.length-i,o=r.slice(i).join(`/`);return a===0?`./${o}`:`${`../`.repeat(a)}${o}`}function ec(e,t,n){let r=$s(e,t);return/\.ts$/.test(n)?r:/\.js$/.test(n)?r.replace(/\.ts$/,`.js`):/\/index\.ts$/.test(t)&&!/(^|\/)index$/.test(n)&&r!==`./index.ts`?r.replace(/\/index\.ts$/,``):r.replace(/\.ts$/,``)}function tc(e,t,n){let r=new Map;if(t===n)return r;if(e.includes(t))r.set(t,n);else for(let i of qs(e,t))r.set(i,`${n}${i.slice(t.length)}`);return r}function nc(e,t,n=Yi){if(t.has(`main.ts`))return n(`{file} is where the script starts: it stays where it is.`,{file:Xi});let r=new Set(e.filter(e=>!t.has(e)));for(let e of t.values())if(r.has(e))return n(`There is already a {name}.`,{name:e});return null}function rc(e,t){let n=new Set(Object.keys(e).map(Q)),r={},i=[],a=0;for(let[o,s]of Object.entries(e)){let e=Q(o),c=t.get(e)??e,l=s;for(let r of Qs(s).reverse()){let i=di(n,e,r.text);if(!i)continue;let o=t.get(i)??i;if(c===e&&o===i)continue;let s=ec(c,o,r.text);s!==r.text&&(l=l.slice(0,r.start)+s+l.slice(r.end),a++)}l!==s&&i.push(c),r[c]=l}return{files:r,imports:a,edited:i}}var ic={list:[],results:new Map,only:[]};function ac(e,t){if(!t)return ic;let n=new Set(t.list.map(e=>e.id)),r=new Map([...e.results].filter(([e])=>n.has(e)));for(let e of t.results)r.set(e.id,e);return{list:t.list,results:r,only:t.only}}function oc(e,t){let n={total:0,passed:0,failed:0,skipped:0,notRun:0};for(let r of e.list){if(r.kind!==`test`||t&&!t(r))continue;n.total++;let i=e.results.get(r.id);i?n[i.status]++:n.notRun++}return n}var sc=e=>e.failed?`failed`:e.total===0||e.notRun===e.total?`none`:e.passed?`passed`:e.skipped?`skipped`:`none`,cc=e=>t=>t.id===e.id||t.id.startsWith(`${e.id} > `);function lc(e,t){return t.kind===`suite`?sc(oc(e,cc(t))):e.results.get(t.id)?.status??`none`}var uc={none:Z(`Not run yet`),passed:Z(`Passed`),failed:Z(`Failed`),skipped:Z(`Skipped`),running:Z(`Running…`)};function dc(e,t=Yi){return e.list.map(n=>{let r=lc(e,n),i=e.results.get(n.id);return{file:n.file,line:n.line,state:r,id:n.id,title:`${t(uc[r])}${i?.status===`failed`&&i.message?`: ${i.message}`:``} — ${n.kind===`suite`?t(`click to run these tests`):t(`click to run this test`)}`}})}function fc(e,t=Yi){let n=[];for(let r of e.list){let i=e.results.get(r.id);if(i?.status!==`failed`)continue;let a=i.at??{file:r.file,line:r.line},o=i.expected!==void 0||i.actual!==void 0?`**${r.name}**\n\n${t(`Expected:`)} \`${i.expected??`—`}\`\n\n${t(`Got:`)} \`${i.actual??`—`}\``:`**${r.name}**\n\n${i.message??t(`failed`)}`;n.push({file:a.file,line:a.line,text:i.message??t(`failed`),hover:o})}return n}function pc(e,t=Yi){let n=[];for(let r of e.list){let i=e.results.get(r.id);r.kind===`test`&&i?.status===`failed`&&n.push({file:r.file,line:r.line,message:t(`The test "{name}" fails: {message}`,{name:r.name,message:i.message??t(`failed`)})})}for(let r of e.only)n.push({file:r.file,line:r.line,message:t(`An only is left in: the other tests of this file do not run.`)});return n}function mc(e){let t=[...new Set(e.map(e=>e.file))],n=t=>{let n=e.filter(e=>e.file===t),r=e=>n.filter(t=>t.path.length===e.length&&t.path.every((t,n)=>t===e[n])).map(t=>({kind:t.kind,info:t,children:t.kind===`suite`?r([...e,t.name]):[]}));return r([])},r=e=>e.map(e=>e.kind===`folder`?{kind:`folder`,name:e.name,path:e.path,children:r(e.children)}:{kind:`file`,name:e.name,path:e.path,children:n(e.path)});return r(Gs(t))}function hc(e){return e.kind===`test`||e.kind===`suite`?[e.info.id]:e.children.flatMap(hc)}function gc(e){let t=[...new Set(e)].sort((e,t)=>e-t),n=[];for(let e=0;e<t.length;e++){let r=e;for(;r+1<t.length&&t[r+1]===t[r]+1;)r++;n.push(r-e>=2?`P${t[e]+1}–P${t[r]+1}`:t.slice(e,r+1).map(e=>`P${e+1}`).join(`, `)),e=r}return n.join(`, `)}function _c(e){let t=[],n=new Map;for(let r of e){let e=`${r.frame}|${r.file??``}|${r.line??0}|${r.text}`,i=n.get(e);if(i){i.players.includes(r.player)||i.players.push(r.player);continue}let a={...r,players:[r.player]};n.set(e,a),t.push(a)}return t}function vc(e,t=Yi){return e.total===0?null:e.failed?{text:e.passed?t(`{failed} failed, {passed} passed`,{failed:e.failed,passed:e.passed}):t(`{failed} failed`,{failed:e.failed}),failed:!0}:e.notRun===e.total?{text:t(`{n, plural, one {# test} other {# tests}}`,{n:e.total}),failed:!1}:{text:[t(`{n} passed`,{n:e.passed}),e.skipped?t(`{n} skipped`,{n:e.skipped}):``,e.notRun?t(`{n} not run`,{n:e.notRun}):``].filter(Boolean).join(`, `),failed:!1}}var yc=`scm-sim.engine`,bc=214,xc=5,Sc=6,Cc=e=>e.id.replace(/^.*?::/,``);function wc(e){let t=/\bat (?:([^\s:]+\.ts):)?(\d+):(\d+)\b/.exec(e);return t?{file:t[1]??`main.ts`,line:Number(t[2]),column:Number(t[3])}:null}function Tc(e){let t=e[0];return t?`${t.file}:${t.line} — ${t.message.split(`
`)[0]}${e.length>1?` (and ${e.length-1} more)`:``}`:`The script has errors.`}var Ec=class extends Error{contribution;constructor(e,t){super(`${e.label}: ${t}`),this.contribution=e}};function Dc(e){let t=/, line (\d+)(?: of (\S+))?$/.exec(e);return t?{reason:e.slice(0,t.index),line:Number(t[1]),file:t[2]??null}:{reason:e,line:null,file:null}}var Oc=`TrigScript`,kc=`magenta`;function Ac(e){let t=new Map;for(let n of e.document.extras.list()){if(!Zo(n)&&!Qo(n))continue;let r=e.document.extras.get(n);r&&t.set(n,r)}return t}function jc(e,t,n){for(let r of t.keys())n.has(r)||e.document.extras.remove(r);for(let[r,i]of n)t.get(r)!==i&&e.document.extras.set(r,i)}var Mc=class{api;claim;compiler;builder;ownListeners=new Set;contributions=new Map;provided=new Map;libraryListeners=new Set;lastManifest;lastArtifact=null;variableMaps=0;t;constructor(e,t,n=fo,r=po){this.api=e,this.compiler=n,this.builder=r;let i=e.i18n?(t,n)=>e.i18n.t(t,n):Yi;this.t=i,this.claim=e.triggers.claim({label:Z(`the TrigScript block`),badge:Z(`script`),locate:t=>{let n=ms(Ac(e));return n?Ss(t,n):null},describe:(e,t)=>{let n=this.sourceOf(e,t);return n?i(`This trigger is generated by the map's TrigScript ({file}, line {line}). Edit the source instead; applying the script (saving the map does it) replaces the whole block.`,{file:n.file,line:n.line}):i(`This trigger is generated by the map's TrigScript. Edit the source instead; applying the script (saving the map does it) replaces the whole block.`)},open:(e,n)=>{let r=this.sourceOf(e,n);t(r?.file,r?.line)},openLabel:Z(`Open TrigScript`)})}sourceOf(e,t){let n=ms(Ac(this.api)),r=n?Ss(t,n):null;return r?r.sources[e-r.start]??null:null}dist(){return this.api.storage.get(oa,aa)}state(){return this.api.document.isOpen()?ws(this.api.triggers.list(),Ac(this.api)):null}engine(){return this.api.services.get(yc)}watchEngine(e){return this.api.services.watch(yc,t=>e(t))}attach(){let e=this.api.document.buildSteps?.before({id:`apply`,label:Oc,applies:()=>this.api.document.isOpen()&&Ac(this.api).size>0,run:()=>this.bringUpToDate()}),t=this.api.document.buildSteps?.add({id:`build`,label:Oc,applies:()=>this.hasPrograms()||this.contributionsApply(),run:e=>this.buildOwn(e)});return{dispose:()=>{e?.dispose(),t?.dispose()}}}contribute(e){return this.contributions.set(e.id,e),{dispose:()=>{this.contributions.get(e.id)===e&&this.contributions.delete(e.id)}}}contributionsApply(){if(!this.api.document.isOpen())return!1;for(let e of this.contributions.values())if(e.applies())return!0;return!1}buildService(e){return{versions:{plugin:e},contribute:e=>this.contribute(e),onBuild:e=>this.onBuild(e),check:(e,t)=>this.check(e,t),provideLibrary:e=>this.provideLibrary(e)}}provideLibrary(e){let t=Object.fromEntries(Object.entries(e.modules??{}).map(([e,t])=>[e.replace(/\\/g,`/`).replace(/^\.\//,``),t])),n=xi(e.id,t,[Ae]);if(n)throw Error(n);let r={id:e.id,label:e.label||e.id,version:String(e.version??``),modules:t};return this.provided.set(r.id,r),this.librariesChanged(),{dispose:()=>{this.provided.get(r.id)===r&&(this.provided.delete(r.id),this.librariesChanged())}}}onLibraries(e){return this.libraryListeners.add(e),{dispose:()=>{this.libraryListeners.delete(e)}}}librariesChanged(){for(let e of this.libraryListeners)e()}mapLibraries(){return this.api.document.isOpen()?us(Ac(this.api)):{}}libraries(){return{...Object.fromEntries(this.provided),...this.mapLibraries()}}librariesFor(e){let t=this.libraries(),{used:n}=Ci(Object.values(e),fs(t));return Object.fromEntries(n.map(e=>[e,t[e]]))}libraryStatus(){let e=this.mapLibraries();return[...new Set([...Object.keys(e),...this.provided.keys()])].sort().map(t=>{let n=e[t],r=this.provided.get(t),i=!!n&&!!r&&(n.version!==r.version||xs({},{[t]:n})!==xs({},{[t]:r}));return{id:t,label:(n??r).label,version:n?.version??null,provided:r?.version??null,update:i}})}updateLibraries(e){if(!this.api.document.isOpen())return[];let t=this.libraryStatus().filter(t=>t.update&&(!e||e.includes(t.id))).map(e=>e.id);if(t.length===0)return[];let n=Ac(this.api),r=us(n);for(let e of t)r[e]=this.provided.get(e);return jc(this.api,n,ds(n,r)),this.librariesChanged(),t}async check(e,t){let n=this.names(),r=t[0]??Object.keys(e)[0]??`main.ts`;if(!n)return{problems:[{file:r,line:1,column:1,message:this.t(`No map is open.`)}],programs:0};let i=this.ownCheck(),a=fs(this.librariesFor(e)),o=await this.compiler({files:{[Xi]:``,...e},names:n.names,entries:t,...i?{own:i}:{},...Object.keys(a).length?{libraries:a}:{}},this.dist()),s=o.diagnostics.map(e=>({file:e.file,line:e.line,column:e.column,message:e.message}));if(o.ok&&o.triggers.length&&s.push({file:r,line:1,column:1,message:this.t(`A contribution holds programs only: its trigger() calls are not written into the map.`)}),o.ok&&o.ownRefusal){let e=Dc(o.ownRefusal);s.push({file:e.file??r,line:e.line??1,column:1,message:this.t(`TrigScript does not take this yet ({reason}).`,{reason:e.reason})})}return{problems:s,programs:o.ir.length}}async collectContributions(e){let t={},n=[],r=new Map;for(let i of this.contributions.values()){if(!i.applies())continue;let a;try{a=await i.collect(e)}catch(e){throw new Ec(i,e instanceof Error?e.message:String(e))}for(let[e,n]of Object.entries(a.files)){if(!e.startsWith(`${i.id}/`))throw new Ec(i,this.t(`{label} brought the file {file}, which is not under its own folder ({folder}/).`,{label:i.label,file:e,folder:i.id}));t[e]=n,r.set(e,i)}n.push(...a.entries)}return{files:t,entries:n,of:r}}hasPrograms(){return this.api.document.isOpen()?(ms(Ac(this.api))?.programs??0)>0:!1}whyNotBuilt(){return this.api.document.isOpen()&&this.api.document.extras.get(`magenta\\magenta.json`)!==null&&!this.contributions.has(kc)?this.t(`Magenta's triggers are in this map, and this Magenta builds them through eudplib, which rewrites the part of the map TrigScript's programs go into. Update Magenta to the version that builds with TrigScript, or keep the two in different maps.`):null}ownCheck(){let e=this.api.document.scenario();if(!e)return null;let t=e.playerTypes.slice(0,8);return{players:{slots:t.flatMap((e,t)=>e===Sc||e===xc?[t]:[]),forces:e.forces.playerForce.slice(0,8)},humans:t.flatMap((e,t)=>e===Sc?[t]:[]),width:e.width*32,height:e.height*32}}async buildOwn(e){let t=Date.now(),n=[`trigscript`],r=[],i=e=>{for(let t of this.ownListeners)t(e)},a=e=>{r.push(e),i({kind:`log`,line:e})};i({kind:`start`,purpose:e.purpose,contributors:n});let o=`trigscript`;try{let s=this.state(),c=this.whyNotBuilt();if(c)throw Error(c);let l=await this.collectContributions(e);for(let e of new Set(l.of.values()))n.push(e.id);if(!s?.files&&!l.entries.length)throw Error(this.t(`The map has no script.`));let u=this.names();if(!u)throw Error(this.t(`No map is open.`));let d=this.settings().testsGuardBuild,f=null;if(s?.files){let e=this.lastArtifact,t=e&&e.context===u.context&&e.document===this.documentId()&&xs(e.files,e.libraries)===xs(s.files,us(Ac(this.api)))&&(!d||!e.compiled.tests||e.compiled.tests.results.length>0)?e:await this.prepare(s.files,u,d?{world:this.world()}:void 0);if(!t.compiled.ok)throw Error(Tc(t.compiled.diagnostics));d&&this.guardTests(t.compiled),f=t.compiled}if(l.entries.length){let e={...s?.files??{"main.ts":``},...l.files},t=fs(this.librariesFor(e));if(f=await this.compiler({files:e,names:u.names,entries:l.entries,...Object.keys(t).length?{libraries:t}:{}},this.dist()),!f.ok){let e=f.diagnostics[0],t=e&&l.of.get(e.file);throw t?(o=t.id,Error(`${t.label}: ${Tc(f.diagnostics)}`)):Error(Tc(f.diagnostics))}if(f.sources.filter(e=>e&&l.of.has(e.file)).length){let e=l.of.get(f.sources.find(e=>e&&l.of.has(e.file)).file);throw o=e.id,Error(this.t(`{label} brought trigger() calls, and a contribution holds programs only.`,{label:e.label}))}}let p=await this.api.document.sections.chkOf(e.map),{heapCells:m,stackDepth:h}=this.settings();a(l.entries.length?this.t(`Built by TrigScript: {n, plural, one {# program} other {# programs}} laid out into the map, {contributors} among them`,{n:f.ir.length,contributors:[...new Set(l.of.values())].map(e=>e.label).join(`, `)}):this.t(`Built by TrigScript: {n, plural, one {# program} other {# programs}} laid out into the map`,{n:f.ir.length}));let g=await this.builder({chk:p,compiled:{ir:f.ir,strings:f.strings,input:f.input,triggers:[]},settings:{heapCells:m,stackDepth:h},...this.variableMaps?{maps:!0}:{}},this.dist());if(Qi(g)){let e=Dc(g.refused),t=e.file?l.of.get(e.file):void 0;throw t?(o=t.id,Error(this.t(`{label}: TrigScript does not take this yet ({reason}).`,{label:t.label,reason:g.refused}))):Error(this.t(`The programs were not built: TrigScript does not take this yet ({reason}).`,{reason:g.refused}))}for(let e of g.lines)a(e);for(let e of g.maps?.lines??[])a(e);for(let e of g.warnings)i({kind:`warning`,message:e});return i({kind:`done`,purpose:e.purpose,contributors:n,log:r.join(`
`),chkBytes:g.chk.length,ms:Date.now()-t}),g.chk}catch(t){let a=t instanceof Error?t.message:String(t);throw t instanceof Ec&&(o=t.contribution.id),i({kind:`failed`,purpose:e.purpose,contributors:n,from:o,message:a,log:r.join(`
`)}),t}}async bringUpToDate(){let e=this.state();if(!e?.files||!e.unbuilt)return;if(e.stale)throw Error(this.t(`The script's triggers were edited or removed outside the script, so it was not applied. Open Triggers ▸ TrigScript… and press Apply to choose what becomes of them.`));this.settings().testsGuardBuild&&this.guardTests((await this.prepare(e.files,this.names(),{world:this.world()})).compiled);let t=await this.build(e.files);if(t.refused===`errors`)throw Error(Tc(t.compiled.diagnostics));if(t.refused)throw Error(this.t(`The map changed while the script was compiling; save again.`))}world(){let e=this.api.document.scenario();if(!e)return{};let t={};for(let e of this.api.settings.unitTypes())t[e.id]={hp:e.hitPoints,shields:e.shields};let n=(e,t,n)=>n?Math.max(1,Math.ceil(e*Math.min(100,t)/100)):e,r=e.units.filter(e=>e.unitId!==bc).map(e=>{let r=t[e.unitId]??{},i=r.hp??1,a=r.shields??0;return{type:e.unitId,owner:e.owner,x:e.x,y:e.y,maxHp:i,hp:n(i,e.hitPointsPercent,!!(e.validStates&2)),maxShields:a,shields:a?n(a,e.shieldPercent,!!(e.validStates&4)):0,resources:e.resourceAmount,...e.validStates&64?{cloaked:!!(e.stateFlags&1),burrowed:!!(e.stateFlags&2),hallucinated:!!(e.stateFlags&8),invincible:!!(e.stateFlags&16)}:{}}}),i={};e.locations.forEach((e,t)=>{(e.right>e.left||e.bottom>e.top)&&(i[t+1]={left:e.left,top:e.top,right:e.right,bottom:e.bottom})});let a=e.playerTypes.slice(0,8).flatMap((e,t)=>e===Sc||e===xc?[t]:[]),o=Object.fromEntries(e.forces.playerForce.slice(0,8).map((e,t)=>[t,e])),s=(e.cuwp??[]).map(e=>{let t=t=>(e.validProperties&t)===0?void 0:(e.stateFlags&t)!==0;return{hpPercent:e.validFields&2?e.hitPointsPercent:void 0,shieldPercent:e.validFields&4?e.shieldsPercent:void 0,energyPercent:e.validFields&8?e.energyPercent:void 0,resources:e.validFields&16?e.resources:void 0,cloaked:t(1),burrowed:t(2),hallucinated:t(8),invincible:t(16)}}),c=e.playerTypes.slice(0,8).flatMap((e,t)=>e===xc?[t]:[]),l=this.settings();return{units:r,locations:i,...a.length?{players:a,forces:o,computers:c}:{},unitStats:t,properties:s,heapCells:l.heapCells,stackDepth:l.stackDepth}}guardTests(e){let t=(e.tests?.results??[]).filter(e=>e.status===`failed`);if(t.length===0)return;let n=t[0];throw Error(`Not built: ${t.length===1?`a test fails`:`${t.length} tests fail`} — ${Cc(n)}: ${n.message??`failed`}. (The script's settings make a failing test refuse the build.)`)}async withVariableMap(e){this.variableMaps++;try{return await e()}finally{this.variableMaps--}}onBuild(e){return this.ownListeners.add(e),{dispose:()=>{this.ownListeners.delete(e)}}}names(){let e=this.api,t=e.document.info();if(!t)return null;let n=new Map(e.settings.unitTypes().map(e=>[e.id,e.customName])),r=[...new Set(e.query.locationsIn({x0:0,y0:0,x1:t.width,y1:t.height}))].sort((e,t)=>e-t),i=e.triggers.switchNames(),a=xn({forceNames:e.settings.forces().map(e=>e.name||null),locations:r.map(t=>({index:t,name:e.names.location(t)})),switchNames:i,unitCustomName:e=>n.get(e)||null,sounds:(e.settings.sounds?.()??[]).map(e=>({stringIndex:e.stringIndex,path:e.path}))}),o=ci(a);return{names:a,decls:o,context:ys(o)}}documentId(){let e=this.api.document;return typeof e.id==`function`?e.id():null}declarations(e={}){let t=this.names();return t?e.compact?ci(t.names,{compact:!0}):t.decls:``}filesOf(e){return typeof e==`string`?{...this.state()?.files??{},[Xi]:e}:{...e}}async compile(e){return(await this.prepare(e)).compiled}async prepare(e,t=this.names(),n,r=!1){if(!t)throw Error(`No map is open.`);let i=this.filesOf(e),a=this.documentId(),o=bs(this.state()?.files??{}),s=this.ownCheck(),c=this.librariesFor(i),l=fs(c),u={files:i,compiled:await this.compiler({files:i,names:t.names,...n?{tests:n}:{},...r?{sounds:r}:{},...s?{own:s}:{},...Object.keys(l).length?{libraries:l}:{}},this.dist()),document:a,context:t.context,archived:o,libraries:c};return this.lastArtifact=u,u}install(e,t={}){let{compiled:n,files:r,libraries:i}=e,a=e=>({compiled:n,block:null,refused:e});if(!this.api.document.isOpen())return a(`closed`);if(this.documentId()!==e.document)return a(`switched`);let o=this.names();if(!o||o.context!==e.context)return a(`changed`);if(!n.ok)return a(`errors`);let s=bs(this.state()?.files??{})!==e.archived,c=null,l,u=JSON.stringify(this.libraryStatus());if(this.api.document.update(`Apply TrigScript`,e=>{let a=Ac(this.api),o=Os(e.triggers.list(),a,r,n,t=>e.strings.intern(t),{...t,keepFiles:s,libraries:i});e.triggers.set(o.list),jc(this.api,a,o.extras),c=o.block,l=o.replaced}),this.claim.refresh(),JSON.stringify(this.libraryStatus())!==u&&this.librariesChanged(),c){let e=c,t=n.ir.length,r=t?` ${t} program${t===1?``:`s`} will be built into the saved map (StarCraft: Remastered).`:``;this.api.ui.status((e.count===0?`Applied: the script defines no triggers.`:`Applied ${e.count} trigger${e.count===1?``:`s`} → #${e.start+1}–#${e.start+e.count}.`)+r)}return{compiled:n,block:c,...l?{replaced:l}:{}}}async build(e,t={}){for(let n=0;;n++){let r=this.install(await this.prepare(e,void 0,void 0,!0),t);if(r.refused!==`changed`||n>=2)return r}}print(e,t){return Vo(e,{names:this.names()?.names??xn(),string:e=>this.api.names.string(e)},t)}simulate(e,t,n={}){let r=Le(e,t,{player:n.player,strings:e=>this.api.names.string(e)}),i=[];return r.switches.forEach((e,t)=>{e&&i.push(t)}),{cycles:r.cycle,events:r.events,switches:i}}triggerAt(e,t){let n=this.state();return n?.block&&!n.stale?ks(n.block,e,t):null}settings(){return this.api.document.isOpen()?Ko(Ac(this.api)):{...Go}}writeSettings(e){if(!this.api.document.isOpen())return;let t=Ac(this.api);jc(this.api,t,qo(t,e))}writeFiles(e){if(!this.api.document.isOpen())return;let t=Ac(this.api);jc(this.api,t,ps(t,e))}handTriggers(){let e=this.api.triggers.list(),t=this.state()?.block??null;return t?{before:e.slice(0,t.start),after:e.slice(t.start+t.count)}:{before:e,after:[]}}relocate(){if(!this.api.document.isOpen())return;let e=Ac(this.api),t=Ts(this.api.triggers.list(),e);t&&jc(this.api,e,t)}manifestChanged(){let e=Nc(this.api),t=e!==this.lastManifest;return this.lastManifest=e,t}};function Nc(e){for(let[t,n]of Ac(e))if(t.toLowerCase().endsWith(`build.json`))return n;return null}var Pc={play:`eb2c`,check:`eab2`,beaker:`ea79`,target:`ebf8`,ellipsis:`ea7c`,"new-file":`ea7f`,"new-folder":`ea80`,"device-camera-video":`ead9`,"file-media":`eaea`,unmute:`eb75`,music:`ec1b`,"debug-pause":`ead1`,folder:`ea83`,"folder-opened":`eaf7`,edit:`ea73`,trash:`ea81`,close:`ea76`,error:`ea87`,warning:`ea6c`,info:`ea74`,"chevron-down":`eab4`,"chevron-right":`eab6`,"screen-full":`eb4c`,"multiple-windows":`eb23`,sync:`ea77`,loading:`eb19`,pass:`eba4`,"symbol-variable":`ea88`,"symbol-method":`ea8c`,"clear-all":`eabf`,"circle-filled":`ea71`,package:`eb29`,files:`eaf0`,filter:`eaf1`,"run-all":`eb9e`,"run-errors":`ebde`,"circle-outline":`eabc`,"circle-slash":`eabd`,"pass-filled":`ebb3`,"debug-alt":`eb91`,"debug-continue":`eacf`,"debug-reverse-continue":`eb8e`,"debug-step-over":`ead6`,"debug-step-back":`eb8f`,"debug-stop":`ead7`,"debug-restart":`ead2`,"debug-line-by-line":`ebd0`,"arrow-left":`ea9b`,"arrow-right":`ea9c`,eye:`ea70`,game:`ec17`},Fc={sidebar:!0,sidebarWidth:180,panel:!1,panelHeight:180,panelView:`problems`},Ic={sidebar:!0,sidebarWidth:136,panel:!1,panelHeight:130,panelView:`problems`},Lc=100,Rc=420,zc=64,Bc=`
.tsd { position: relative; display: flex; flex-direction: column; flex: 1; min-height: 0; min-width: 0; background: var(--bg-0); color: var(--text); font-family: var(--font-ui); font-size: var(--fs-md); user-select: none; }
.tsd button { font: inherit; color: inherit; }
.tsd-i { display: inline-block; flex: none; font: normal normal normal 16px/1 codicon; text-align: center; -webkit-font-smoothing: antialiased; }
.tsd:not(.tsd-ready) .tsd-i { visibility: hidden; }
${Object.entries(Pc).map(([e,t])=>`.tsd-i-${e}::before { content: "\\${t}"; }`).join(`
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
.tsd-row .tsd-game { display: inline-flex; flex: none; margin-left: -2px; border-radius: 50%; }
.tsd-row .tsd-game-differs { box-shadow: 0 0 0 1px var(--danger); }
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
`;function Vc(e){let{el:t}=e,n=e.t??Yi,r={...e.layout},i=(e,n=!1)=>t(`span`,{className:`tsd-i tsd-i-${e}${n?` tsd-spin`:``}`,ariaHidden:`true`}),a=e=>{let n=e.icon,r=!1,a=i(n),o=t(`button`,{type:`button`,className:`tsd-icon-button`,title:e.title,ariaLabel:e.title,onClick:t=>{t.stopPropagation(),e.run()}},a);return{element:o,set(e){e.icon&&(n=e.icon),e.busy!==void 0&&(r=e.busy),e.disabled!==void 0&&(o.disabled=e.disabled),e.title!==void 0&&(o.title=e.title,o.ariaLabel=e.title),a.className=r?`tsd-i tsd-i-loading tsd-spin`:`tsd-i tsd-i-${n}`}}},o=t(`div`,{className:`tsd-tabs`,role:`tablist`}),s=t(`div`,{className:`tsd-actions`}),c=t(`div`,{className:`tsd-editor`}),l=t(`div`,{className:`tsd-sections`}),u=t(`div`,{className:`tsd-sidebar-title`},n(`Explorer`)),d=t(`div`,{className:`tsd-sidebar-body`},l),f=t(`div`,{className:`tsd-sidebar`},u,d),p=t(`div`,{className:`tsd-activity`,role:`tablist`,ariaLabel:n(`Views`),hidden:!0}),m=t(`div`,{className:`tsd-sash tsd-sash-v`}),h=t(`div`,{className:`tsd-panel-tabs`,role:`tablist`}),g=t(`div`,{className:`tsd-panel-actions`}),_=t(`div`,{className:`tsd-view`}),v=t(`div`,{className:`tsd-sash tsd-sash-h`}),y=t(`div`,{className:`tsd-panel-area`},t(`div`,{className:`tsd-panel-head`},h,g),_),b=t(`div`,{className:`tsd-status-left`}),x=t(`div`,{className:`tsd-status-right`}),S=t(`div`,{className:`tsd-notifications`}),C=t(`div`,{className:`tsd-main`},t(`div`,{className:`tsd-titlebar`},o,s),c,v,y),w=t(`div`,{className:e.compact?`tsd tsd-compact`:`tsd`},t(`div`,{className:`tsd-body`},p,f,m,C),t(`div`,{className:`tsd-statusbar`,role:`status`},b,x),S),T=()=>{f.hidden=m.hidden=!r.sidebar,f.style.width=`${r.sidebarWidth}px`,y.hidden=v.hidden=!r.panel,y.style.height=`${r.panelHeight}px`},E=()=>e.onLayout({...r}),D=(e,t,n)=>{e.addEventListener(`pointerdown`,r=>{if(r.button!==0)return;r.preventDefault();let i=t(),a=r.clientX,o=r.clientY;e.setPointerCapture(r.pointerId),e.classList.add(`tsd-dragging`);let s=e=>{n(i,e.clientX-a,e.clientY-o),T()},c=()=>{e.classList.remove(`tsd-dragging`),e.removeEventListener(`pointermove`,s),e.removeEventListener(`pointerup`,c),e.removeEventListener(`pointercancel`,c),E()};e.addEventListener(`pointermove`,s),e.addEventListener(`pointerup`,c),e.addEventListener(`pointercancel`,c)})};D(m,()=>r.sidebarWidth,(e,t)=>{r.sidebarWidth=Math.max(Lc,Math.min(Rc,Math.min(w.clientWidth-200,e+t)))}),D(v,()=>r.panelHeight,(e,t,n)=>{r.panelHeight=Math.max(zc,Math.min(C.clientHeight-120,e-n))});let O=new Map,k=e=>{let n=O.get(e)??O.get(`explorer`);if(n){r.sidebarView=n.id;for(let[e,t]of O)t.button.classList.toggle(`tsd-active`,e===n.id&&r.sidebar),t.button.ariaSelected=String(e===n.id&&r.sidebar);u.replaceChildren(t(`span`,{className:`tsd-grow`},n.title),...n.actions),d.replaceChildren(n.body)}},A=(e,n)=>{let o=t(`span`,{className:`tsd-badge`,hidden:!0}),s=t(`button`,{type:`button`,role:`tab`,title:e.title,ariaLabel:e.title,onClick:()=>{r.sidebar&&r.sidebarView===e.id?r.sidebar=!1:(r.sidebar=!0,r.sidebarView=e.id),T(),k(r.sidebarView??`explorer`),E()}},i(e.icon),o),c={id:e.id,title:e.title,body:n,actions:(e.actions??[]).map(e=>a(e).element),button:s,badge:o};return O.set(e.id,c),p.append(s),p.hidden=O.size<2,c};A({id:`explorer`,title:n(`Explorer`),icon:`files`},l);let j=new Map,M=a({icon:`close`,title:n(`Hide the panel (Ctrl+J)`),run:()=>F()}),N=(e,t=!0)=>{let n=j.has(e)?e:[...j.keys()][0];if(!n)return;r.panelView=n;for(let[e,t]of j)t.tab.classList.toggle(`tsd-active`,e===n),t.tab.ariaSelected=String(e===n);let i=j.get(n);_.replaceChildren(i.body),g.replaceChildren(...i.actions,M.element),r.panel&&t&&i.onShow?.()},P=e=>{r.panel=!0,T(),N(e??r.panelView),E()},F=e=>{if(r.panel&&(e===void 0||e===r.panelView)){r.panel=!1,T(),E();return}P(e)},ee=null,te=(e,n,r)=>{ee?.();let i=document.activeElement instanceof HTMLElement?document.activeElement:null,a=t(`div`,{className:`tsd-menu`,role:`menu`}),o=()=>{ee===o&&(ee=null,a.remove(),document.removeEventListener(`pointerdown`,s,!0))},s=e=>{e.target instanceof Node&&a.contains(e.target)||o()};for(let e of n){if(!e){a.append(t(`hr`));continue}a.append(t(`button`,{type:`button`,role:`menuitem`,disabled:!!e.disabled,onClick:()=>{o(),e.run()}},t(`span`,{className:`tsd-grow`},e.label),e.keys?t(`span`,{className:`tsd-keys`},e.keys):void 0))}a.addEventListener(`keydown`,e=>{let t=[...a.querySelectorAll(`button:not(:disabled)`)],n=t.indexOf(document.activeElement);e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o(),i?.focus()):e.key===`ArrowDown`?(e.preventDefault(),t[(n+1)%t.length]?.focus()):e.key===`ArrowUp`&&(e.preventDefault(),t[(n-1+t.length)%t.length]?.focus())}),w.append(a);let c=e.getBoundingClientRect(),l=w.getBoundingClientRect();a.style.top=`${Math.max(4,Math.min((r?r.y:c.bottom+2)-l.top,l.height-a.offsetHeight-4))}px`,a.style.left=`${Math.max(4,Math.min(r?r.x-l.left:c.right-l.left-a.offsetWidth,l.width-a.offsetWidth-4))}px`,ee=o,document.addEventListener(`pointerdown`,s,!0),a.querySelector(`button:not(:disabled)`)?.focus()},I=new Map,ne=e=>{let t=I.get(e);t&&(t.timer!==null&&clearTimeout(t.timer),t.element.remove(),I.delete(e))};return T(),k(`explorer`),{root:w,editorHost:c,ready:()=>w.classList.add(`tsd-ready`),icon:e=>i(e),iconButton:a,setTabs(r,i){o.replaceChildren(...r.map(r=>{let o=r.id===i,s=t(`div`,{className:o?`tsd-tab tsd-active`:`tsd-tab`,role:`tab`,ariaSelected:String(o),title:r.title??r.label,onClick:()=>e.onTabSelect(r.id),onAuxClick:t=>{t.button===1&&r.closable&&(t.preventDefault(),e.onTabClose(r.id))}},t(`span`,{className:`tsd-ts`},`TS`),t(`span`,{className:r.problems?`tsd-problem`:void 0},r.problems?`${r.label} ${r.problems}`:r.label),r.about?t(`span`,{className:`tsd-about`},r.about):void 0,r.closable?a({icon:`close`,title:n(`Close`),run:()=>e.onTabClose(r.id)}).element:t(`span`,{className:`tsd-pad`}));return o&&queueMicrotask(()=>s.scrollIntoView({block:`nearest`,inline:`nearest`})),s}))},action(e){let t=a(e);return s.append(t.element),t},section(e){let n=t(`div`,{className:`tsd-section-body`}),r=i(`chevron-down`),o=t(`div`,{className:`tsd-section`}),s=t(`div`,{className:`tsd-section-head`,role:`button`,tabIndex:0,ariaExpanded:`true`},r,t(`span`,{className:`tsd-grow`},e.title),...(e.actions??[]).map(e=>a(e).element)),c=e=>{o.classList.toggle(`tsd-collapsed`,e),r.className=`tsd-i tsd-i-${e?`chevron-right`:`chevron-down`}`,s.ariaExpanded=String(!e)};return s.addEventListener(`click`,()=>c(!o.classList.contains(`tsd-collapsed`))),s.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),s.click())}),o.append(s,n),l.append(o),{body:n,setHidden:e=>{o.hidden=e},expand:()=>c(!1)}},sidebarView(e){let n=t(`div`,{className:`tsd-sections`}),i=A(e,n);return r.sidebarView===e.id&&k(e.id),{body:n,badge(e,t){i.badge.hidden=!e,i.badge.textContent=e?String(e):``,i.badge.classList.toggle(`tsd-error`,t===`error`)},show(){r.sidebar=!0,T(),k(e.id),E()}}},toggleSidebar(e){r.sidebar=e??!r.sidebar,T(),k(r.sidebarView??`explorer`),E()},view(e){let n=t(`span`,{className:`tsd-badge`,hidden:!0}),i=t(`button`,{type:`button`,className:`tsd-panel-tab`,role:`tab`,onClick:()=>P(e.id)},e.title,n),o=t(`div`);return j.set(e.id,{tab:i,badge:n,body:o,actions:(e.actions??[]).map(e=>a(e).element),onShow:e.onShow}),h.append(i),(j.size===1||e.id===r.panelView)&&N(e.id,!1),{body:o,badge:e=>{n.hidden=!e,n.textContent=e?String(e):``}}},showPanel:P,togglePanel:F,growPanel(e){let t=Math.max(zc,C.clientHeight-120),n=Math.min(t,Math.max(r.panelHeight,e));n!==r.panelHeight&&(r.panelHeight=n,T(),E())},statusItem(e){let n=t(`span`,{hidden:!0,style:`display: contents`});return(e===`left`?b:x).append(n),{set(e){if(n.hidden=!e,!e){n.replaceChildren();return}let r=e.kind?` tsd-${e.kind}`:``,a=[e.busy?i(`loading`,!0):e.icon?i(e.icon):void 0,e.text?t(`span`,void 0,e.text):void 0];n.replaceChildren(e.onClick?t(`button`,{type:`button`,className:`tsd-status-item${r}`,title:e.title??``,onClick:e.onClick},...a):t(`span`,{className:`tsd-status-item tsd-shrink${r}`,title:e.title??e.text},...a))}}},notify:e=>{ne(e.key);let r=t(`div`,{className:`tsd-notification`,role:e.kind===`error`?`alert`:`status`},t(`div`,{className:`tsd-notification-row`},i(e.kind===`warn`?`warning`:e.kind),t(`span`,{className:`tsd-text`},e.text),a({icon:`close`,title:n(`Dismiss`),run:()=>ne(e.key)}).element),e.actions?.length?t(`div`,{className:`tsd-notification-actions`},...e.actions.map(n=>t(`button`,{type:`button`,className:n.primary?`tsd-button tsd-primary`:`tsd-button`,onClick:()=>{n.keep||ne(e.key),n.run()}},n.label))):void 0);S.append(r),I.set(e.key,{element:r,timer:e.timeout?setTimeout(()=>ne(e.key),e.timeout):null})},dismiss:ne,menu:te,dispose(){ee?.();for(let e of[...I.keys()])ne(e)}}}var Hc=e=>`${e.file}:${e.line}`,Uc=5885096,Wc=336,Gc=class{rec;map;memory;view;at={k:0,s:0};done=0;placeOf;constructor(e,t){this.rec=e,this.map=t,this.memory=e.memory.bytes.slice(),this.view=new DataView(this.memory.buffer),this.placeOf=t=>{let n=e.stepLine[t];return n>=0?e.lines[n]??null:null},e.frames&&this.moveTo({k:0,s:e.frameSteps[0]})}get where(){return{...this.at}}get frames(){return this.rec.frames}frame(e=this.at.k){return this.rec.first+e}frameStart(e){return this.rec.frameSteps[e]}frameEnd(e){return this.rec.frameSteps[e+1]}atEnd(){return this.at.s>=this.frameEnd(this.at.k)}get known(){return!this.rec.cut||this.frame()<this.rec.cut.frame}line(){return this.atEnd()?null:this.placeOf(this.at.s)}testLine(e=this.at.k){let t=this.rec.testFileOf[e],n=this.rec.testLine[e];return t>=0&&n>0?{file:this.rec.testFile[t],line:n}:null}moveTo(e){let t=Math.max(0,Math.min(e.k,this.rec.frames-1)),n=Math.max(this.frameStart(t),Math.min(e.s,this.frameEnd(t))),r=this.rec.stepWrites[n],i=this.rec.writes,a=this.rec.memory.at,o=this.view;for(;this.done<r;){let e=3*this.done++;o.setUint32(i[e]-a,i[e+2],!0)}for(;this.done>r;){let e=3*--this.done;o.setUint32(i[e]-a,i[e+1],!0)}this.at={k:t,s:n}}visible(e,t){return t||this.rec.stepLine[e]>=0}stepForward(e=!1){let{k:t,s:n}=this.at;for(let r=n+1;r<this.frameEnd(t);r++)if(this.visible(r,e)){this.moveTo({k:t,s:r});return}if(n<this.frameEnd(t)){this.moveTo({k:t,s:this.frameEnd(t)});return}if(!(t+1>=this.rec.frames)){for(let n=this.frameStart(t+1);n<this.frameEnd(t+1);n++)if(this.visible(n,e)){this.moveTo({k:t+1,s:n});return}this.moveTo({k:t+1,s:this.frameEnd(t+1)})}}stepBack(e=!1){let{k:t,s:n}=this.at;for(let r=n-1;r>=this.frameStart(t);r--)if(this.visible(r,e)){this.moveTo({k:t,s:r});return}t>0?this.moveTo({k:t-1,s:this.frameEnd(t-1)}):this.moveTo({k:0,s:this.frameStart(0)})}nextFrame(){let{k:e,s:t}=this.at;t<this.frameEnd(e)?this.moveTo({k:e,s:this.frameEnd(e)}):e+1<this.rec.frames&&this.moveTo({k:e+1,s:this.frameEnd(e+1)})}prevFrame(){let{k:e}=this.at;e>0?this.moveTo({k:e-1,s:this.frameEnd(e-1)}):this.moveTo({k:0,s:this.frameStart(0)})}toFrame(e){this.moveTo({k:e,s:this.frameEnd(Math.max(0,Math.min(e,this.rec.frames-1)))})}watched(e){let t=new Map;if(!this.map)return t;for(let n of this.map.programs)for(let r of e){let[e,i]=r.includes(`.`)?r.split(`.`,2):[null,r];if(e===null||e===(n.name??String(n.index)))for(let[e]of this.cellsOf(n,i))t.set(e,r)}return t}cellsOf(e,t){let n=new Map;for(let r of e.vars)if(qc(r.id)===t){for(let e of Object.values(r.cells))if(e!=null)for(let t=0;t<(r.rowed?12:1);t++)n.set(e+(r.stride??4)*t,!0)}for(let r of e.arrays)if(qc(r.id)===t)for(let[e]of this.arrayCells(r))n.set(e,!0);return n}arrayCells(e){let t=new Map,n=e.rowed?12:1,r=e.stride??4;if(!e.dynamic&&e.at!=null)for(let i=0;i<Math.min(e.length*n,4096);i++)t.set(e.at+r*i,!0);if(e.dynamic){for(let i of[e.ptr,e.len])if(i!=null)for(let e=0;e<n;e++)t.set(i+r*e,!0);for(let i=0;i<n;i++){let n=e.ptr==null?0:this.read32(e.ptr+r*i),a=e.len==null?0:this.read32(e.len+r*i);if(n)for(let e=0;e<Math.min(a,4096);e++){let r=this.map?Fs(this.map,n,e):null;r!==null&&t.set(r,!0)}}}return t}read32(e){let t=e-this.rec.memory.at;return t>=0&&t+4<=this.memory.length?this.view.getUint32(t,!0):0}continueForward(e,t=[]){return this.run(1,e,t)}continueBack(e,t=[]){return this.run(-1,e,t)}run(e,t,n){let r=this.rec,i=this.watched(n),a=r.writes,o=e=>{for(let t=r.stepWrites[e];t<r.stepWrites[e+1];t++){let e=i.get(a[3*t]);if(e)return e}return null},{k:s,s:c}=this.at,l={k:s,s:c},u=()=>e>0?c<this.frameEnd(s)?(c++,c-1):s+1>=r.frames?NaN:(s++,c=this.frameStart(s),null):c>this.frameStart(s)?(c--,c):s===0?NaN:(s--,c=this.frameEnd(s),null);for(;;){let n=u();if(Number.isNaN(n))break;let r=e<0&&n!==null&&s===l.k&&n+1===l.s,a=n!==null&&i.size&&!r?o(n):null;if(a&&n!==null){this.moveTo({k:s,s:n});let e=this.watchText(a);this.moveTo({k:s,s:n+1});let t=this.watchText(a);if(e!==t)return{kind:`watch`,name:a,before:e,after:t}}if(c<this.frameEnd(s)){let e=this.placeOf(c);if(e&&t.has(Hc(e)))return this.moveTo({k:s,s:c}),{kind:`breakpoint`,place:e}}else{let e=this.testLine(s);if(e&&t.has(Hc(e)))return this.moveTo({k:s,s:c}),{kind:`breakpoint`,place:e}}}return e>0?(this.moveTo({k:r.frames-1,s:this.frameEnd(r.frames-1)}),{kind:`end`}):(this.moveTo({k:0,s:this.frameStart(0)}),{kind:`start`})}watchText(e){let[t,n]=e.includes(`.`)?e.split(`.`,2):[null,e];for(let e of this.programs()){if(t!==null&&!e.label.startsWith(t))continue;let r=e.values.find(e=>e.name===n);if(r)return Yc(r.value)}return`?`}reader(){let e=this.rec.memory.at,t=this.memory,n=this.view,r=(n,r)=>n>=e&&n+r<=e+t.length;return{m:{getUint32:t=>r(t,4)?n.getUint32(t-e,!0):0,getInt32:t=>r(t,4)?n.getInt32(t-e,!0):0,getUint16:t=>r(t,2)?n.getUint16(t-e,!0):0,getInt16:t=>r(t,2)?n.getInt16(t-e,!0):0,getUint8:n=>r(n,1)?t[n-e]:0,getInt8:n=>r(n,1)?t[n-e]<<24>>24:0},u8:new Proxy(t,{get(t,n){if(typeof n==`string`&&/^\d+$/.test(n)){let r=Number(n);return r>=e&&r<e+t.length?t[r-e]:0}if(n===`length`)return e+t.length;if(n===`subarray`)return(n,r)=>t.subarray(Math.max(0,n-e),Math.max(0,r-e));let r=Reflect.get(t,n,t);return typeof r==`function`?r.bind(t):r}}),unitAt:e=>e?{unitSlot:Math.round((e-Uc)/Wc)}:null}}programs(){let e=this.map;if(!e)return[];let t=[],n=this.reader();for(let r of e.programs)for(let i of r.perPlayer?r.owners:[void 0]){let a=`${r.name??`program ${r.index}`}${i===void 0?``:` (P${i+1})`}`,o;try{o=Rs(n,e,r.name??r.index,i)}catch{continue}let s=[...new Set([...r.vars.filter(e=>!Kc(e)).map(e=>e.id),...r.arrays.map(e=>e.id)].map(qc))],c=[];for(let e of s){let t;try{t=Jc(o[e])}catch{t=`?`}c.push({name:e,value:t})}t.push({label:a,values:c})}return t}frameLines(){let e=this.map,{k:t,s:n}=this.at,r=new Map,i=this.cellOwners(),a=this.rec.writes;for(let o=this.frameStart(t);o<n;o++){let t=this.placeOf(o);if(!t)continue;let n=r.get(Hc(t));if(n||(n={place:t,steps:0,names:new Set},r.set(Hc(t),n)),n.steps++,e)for(let e=this.rec.stepWrites[o];e<this.rec.stepWrites[o+1];e++){let t=i.get(a[3*e]);t&&n.names.add(t)}}return[...r.values()].map(e=>({place:e.place,steps:e.steps,names:[...e.names]}))}cellOwners(){let e=new Map;for(let t of this.map?.programs??[]){for(let n of t.vars)if(!Kc(n)){for(let t of Object.values(n.cells))if(t!=null)for(let r=0;r<(n.rowed?12:1);r++)e.set(t+4*r,qc(n.id))}for(let n of t.arrays)for(let[t]of this.arrayCells(n))e.set(t,qc(n.id))}return e}frameCosts(){let e=this.rec,t=new Int32Array(e.frames);for(let n=0;n<e.frames;n++)for(let r=e.frameSteps[n];r<e.frameSteps[n+1];r++)e.stepLine[r]>=0&&(t[n]+=e.stepRecords[r]);return t}hits(e){let t=this.rec,n=[],r=t.lines.findIndex(t=>t.file===e.file&&t.line===e.line);for(let i=0;i<t.frames;i++){let a=!1;if(r>=0)for(let e=t.frameSteps[i];e<t.frameSteps[i+1]&&!a;e++)a=t.stepLine[e]===r;let o=this.testLine(i);!a&&o&&o.file===e.file&&o.line===e.line&&(a=!0),a&&n.push(i)}return n}shown(e=13){let t=this.frame();return this.rec.shown.filter(e=>e.frame<=t).slice(-e)}};function Kc(e){return/^\$|^_/.test(e.id)}var qc=e=>e.replace(/#\d+$/,``).split(`.`)[0];function Jc(e){return typeof e!=`object`||!e||`unitSlot`in e?e:JSON.parse(JSON.stringify(e))}function Yc(e,t=80){let n=e==null?String(e):typeof e==`string`?JSON.stringify(e):typeof e==`object`?`unitSlot`in e?`unit ${e.unitSlot}`:Array.isArray(e)?`[${e.map(e=>Yc(e,t)).join(`, `)}]`:`{ ${Object.entries(e).map(([e,n])=>`${e}: ${Yc(n,t)}`).join(`, `)} }`:String(e);return n.length>t?`${n.slice(0,t-1)}…`:n}var Xc=`
.tsd .tsd-debug:focus { outline: none; }
.tsd .tsd-debug { box-sizing: border-box; height: 100%; display: flex; flex-direction: column; min-height: 0; font-size: var(--fs-md); }
.tsd .tsd-debug-bar { flex: none; display: flex; align-items: center; gap: 2px; padding: 2px 8px; border-bottom: 1px solid var(--border); white-space: nowrap; overflow: hidden; }
.tsd .tsd-debug-bar .tsd-icon-button { display: inline-flex; }
.tsd .tsd-debug-bar .tsd-sep { width: 1px; height: 16px; margin: 0 6px; background: var(--border); }
.tsd .tsd-debug-bar .tsd-where { margin-left: 8px; font-family: var(--font-mono); font-size: var(--fs-sm); color: var(--text); }
.tsd .tsd-debug-bar .tsd-why { margin-left: 10px; overflow: hidden; text-overflow: ellipsis; color: var(--text-dim); font-size: var(--fs-sm); }
.tsd .tsd-debug-bar .tsd-why.tsd-failed { color: var(--danger); }
.tsd .tsd-debug-bar label { display: inline-flex; align-items: center; gap: 4px; margin-left: auto; padding-left: 10px; color: var(--text-dim); font-size: var(--fs-sm); cursor: pointer; }
.tsd .tsd-debug-time { flex: none; height: 40px; margin: 4px 8px 2px; cursor: ew-resize; touch-action: none; }
.tsd .tsd-debug-time svg { display: block; width: 100%; height: 100%; }
.tsd .tsd-debug-time .cost { fill: var(--teal); fill-opacity: 0.3; stroke: var(--teal); stroke-width: 1px; vector-effect: non-scaling-stroke; }
.tsd .tsd-debug-time .hit { fill: var(--danger); }
.tsd .tsd-debug-time .said { fill: var(--gold); }
.tsd .tsd-debug-time .cut { fill: var(--text-faint); fill-opacity: 0.25; }
.tsd .tsd-debug-time .now { fill: var(--text); }
.tsd .tsd-debug-time .end { fill: var(--danger); fill-opacity: 0.6; }
.tsd .tsd-debug-cols { flex: 1; min-height: 0; display: flex; border-top: 1px solid var(--border); }
.tsd .tsd-debug-col { flex: 1 1 0; min-width: 0; overflow: auto; border-right: 1px solid var(--border); }
.tsd .tsd-debug-col:last-child { border-right: none; }
.tsd .tsd-debug-col h5 { position: sticky; top: 0; z-index: 1; margin: 0; padding: 3px 10px; background: var(--bg-1); font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--text-dim); }
.tsd .tsd-debug-col ul { margin: 0; padding: 2px 0; list-style: none; }
.tsd .tsd-debug-col li { display: flex; align-items: baseline; gap: 6px; padding: 1px 10px; line-height: 18px; white-space: nowrap; }
.tsd .tsd-debug-col li.tsd-click { cursor: pointer; }
.tsd .tsd-debug-col li.tsd-click:hover { background: var(--bg-3); }
.tsd .tsd-debug-col li.tsd-here { background: var(--bg-4); }
.tsd .tsd-debug-col li.tsd-dim { color: var(--text-faint); }
.tsd .tsd-debug-col li.tsd-program { padding-top: 4px; color: var(--text-dim); font-size: var(--fs-sm); }
.tsd .tsd-debug-col .k { flex: none; color: var(--text-dim); font-family: var(--font-mono); font-size: var(--fs-sm); }
.tsd .tsd-debug-col .v { flex: 0 1 auto; min-width: 0; overflow: hidden; text-overflow: ellipsis; font-family: var(--font-mono); font-size: var(--fs-sm); color: var(--text); }
.tsd .tsd-debug-col .v.tsd-changed { color: var(--gold); }
.tsd .tsd-debug-col .n { flex: none; margin-left: auto; color: var(--text-faint); font-size: var(--fs-sm); }
.tsd .tsd-debug-col li .tsd-icon-button { visibility: hidden; flex: none; }
.tsd .tsd-debug-col li:hover .tsd-icon-button, .tsd .tsd-debug-col li .tsd-icon-button.tsd-on { visibility: visible; }
.tsd .tsd-debug-col .tsd-icon-button.tsd-on { color: var(--gold); }
.tsd .tsd-debug-col .tsd-empty { padding: 6px 10px; color: var(--text-faint); white-space: normal; line-height: 1.45; }
.tsd .tsd-debug-game { flex: 1.3 1 0; display: flex; flex-direction: column; overflow: hidden; }
.tsd .tsd-debug-game .tsd-view { position: relative; flex: 1; min-height: 0; background: #000; }
.tsd .tsd-debug-overlay { position: absolute; z-index: 4; display: none; background: #000; }
.tsd .tsd-debug-overlay > div, .tsd .tsd-debug-overlay iframe { display: block; width: 100%; height: 100%; border: 0; }
.tsd .tsd-debug-game .tsd-shown { flex: none; max-height: 40%; overflow: auto; padding: 2px 10px; font-family: var(--font-mono); font-size: var(--fs-sm); color: var(--text-dim); }
.tsd .tsd-debug-game .tsd-shown div { white-space: pre-wrap; }
.trigscript-debug-line { background: rgba(214, 178, 74, 0.18); }
.trigscript-debug-arrow::before { content: "\\eb89"; font: normal normal normal 14px/18px codicon; color: var(--gold); padding-left: 2px; }
.trigscript-debug-test { background: rgba(78, 201, 176, 0.12); }
.trigscript-debug-test-arrow::before { content: "\\eb8a"; font: normal normal normal 14px/18px codicon; color: var(--teal); padding-left: 2px; }
.trigscript-bp { cursor: pointer; }
.trigscript-bp::before { content: "\\ea71"; font: normal normal normal 14px/18px codicon; color: #e51400; }
.trigscript-debug-hint { color: var(--gold) !important; opacity: 0.9; }
`,Zc=`http://www.w3.org/2000/svg`,Qc=340,$c=60,el=class{breakpoints=new Set;watch=[];everyStep=!1;session=null;d;body;bar;time;cols;root;varsCol;stepsCol;gameCol;viewBox;shownBox;overlay;placing=0;placed=``;constructor(e){this.d=e;let{el:t,t:n,shell:r}=e,i=r.view({id:`debug`,title:n(`Debug`)});this.body=i.body,this.bar=t(`div`,{className:`tsd-debug-bar`}),this.time=t(`div`,{className:`tsd-debug-time`}),this.cols=t(`div`,{className:`tsd-debug-cols`}),this.varsCol=t(`div`,{className:`tsd-debug-col`}),this.stepsCol=t(`div`,{className:`tsd-debug-col`}),this.viewBox=t(`div`),this.shownBox=t(`div`,{className:`tsd-shown`,title:n(`The text lines up to this frame`)}),this.gameCol=t(`div`,{className:`tsd-debug-col tsd-debug-game`},t(`h5`,{},n(`The game`)),this.viewBox,this.shownBox),this.overlay=t(`div`,{className:`tsd-debug-overlay`}),r.root.append(this.overlay),this.root=t(`div`,{className:`tsd-debug`,tabIndex:-1},this.bar,this.time,this.cols),this.body.append(this.root),this.time.addEventListener(`pointerdown`,e=>{if(!this.session)return;e.preventDefault(),this.root.focus({preventScroll:!0}),this.time.setPointerCapture(e.pointerId),this.scrub(e);let t=e=>this.scrub(e),n=()=>{this.time.removeEventListener(`pointermove`,t),this.time.removeEventListener(`pointerup`,n)};this.time.addEventListener(`pointermove`,t),this.time.addEventListener(`pointerup`,n)}),this.render()}get active(){return this.session!==null}gameHost(){let e=this.d.el(`div`);return this.overlay.replaceChildren(e),e}place=()=>{this.placing=0;let e=this.session;if(!e||!e.view||typeof e.view==`string`){this.overlay.style.display=`none`,this.placed=``;return}let t=this.d.shell.root,n=this.viewBox,r=n.isConnected?n.getBoundingClientRect():null,i=`none`;if(r){let e=r.left,a=r.top,o=r.right,s=r.bottom;for(let r=n.parentElement;r&&r!==t;r=r.parentElement){if(getComputedStyle(r).overflow===`visible`)continue;let t=r.getBoundingClientRect();e=Math.max(e,t.left),a=Math.max(a,t.top),o=Math.min(o,t.right),s=Math.min(s,t.bottom)}let c=t.getBoundingClientRect();o-e>0&&s-a>0&&(i=`${Math.round(e-c.left)},${Math.round(a-c.top)},${Math.round(o-e)},${Math.round(s-a)}`)}if(i!==this.placed){if(this.placed=i,i===`none`)this.overlay.style.display=`none`;else{let[e,t,n,r]=i.split(`,`);Object.assign(this.overlay.style,{display:`block`,left:`${e}px`,top:`${t}px`,width:`${n}px`,height:`${r}px`})}}this.placing=requestAnimationFrame(this.place)};start(e){let t=e.view&&typeof e.view!=`string`?e.view.element:null;this.end(t);let n=new Gc(e.recording,e.variables);this.session={...e,cursor:n,costs:n.frameCosts(),last:new Map,stop:null,picture:{timer:null,asked:-1,shown:-1}};let{el:r,t:i}=this.d;this.viewBox.replaceChildren(...t?[]:[r(`div`,{className:`tsd-empty`},typeof e.view==`string`?e.view:i(`No picture of the game here.`))]),this.viewBox.className=t?`tsd-view`:``,t||this.overlay.replaceChildren(),t&&!this.placing&&(this.placing=requestAnimationFrame(this.place)),this.cols.replaceChildren(this.varsCol,this.stepsCol,this.gameCol),e.recording.result.status===`failed`&&e.recording.frames?n.toFrame(e.recording.frames-1):this.firstLine(),this.d.shell.showPanel(`debug`),this.d.shell.growPanel(Qc),this.moved()}end(e=null){e||(this.overlay.replaceChildren(),this.overlay.style.display=`none`,this.placed=``),this.placing&&=(cancelAnimationFrame(this.placing),0);let t=this.session;t&&(t.picture.timer&&clearTimeout(t.picture.timer),t.pictures?.close(),t.view&&typeof t.view!=`string`&&t.view.element!==e&&t.view.dispose(),this.viewBox.replaceChildren(),this.session=null,this.render(),this.d.changed())}toggleBreakpoint(e,t){let n=`${e}:${t}`;this.breakpoints.delete(n)||this.breakpoints.add(n),this.d.changed(),this.session&&this.renderTime()}toggleWatch(e){let t=this.watch.indexOf(e);t>=0?this.watch.splice(t,1):this.watch.push(e),this.render()}continueForward(){this.go(e=>e.continueForward(this.breakpoints,this.watch))}continueBack(){this.go(e=>e.continueBack(this.breakpoints,this.watch))}stepForward(){this.go(e=>(e.stepForward(this.everyStep),null))}stepBack(){this.go(e=>(e.stepBack(this.everyStep),null))}nextFrame(){this.go(e=>(e.nextFrame(),null))}prevFrame(){this.go(e=>(e.prevFrame(),null))}restart(){this.go(()=>(this.firstLine(),null))}firstLine(){let e=this.session.cursor;if(e.moveTo({k:0,s:e.frameStart(0)}),!this.everyStep)for(;!e.line();){let t=e.where;e.stepForward(!1);let n=e.where;if(n.k===t.k&&n.s===t.s){e.moveTo({k:0,s:e.frameStart(0)});return}}}go(e){let t=this.session;t&&(t.stop=e(t.cursor),this.moved())}scrub(e){let t=this.session;if(!t||!t.recording.frames)return;let n=this.time.getBoundingClientRect(),r=Math.floor((e.clientX-n.left)/Math.max(1,n.width)*t.recording.frames);t.cursor.toFrame(Math.max(0,Math.min(t.recording.frames-1,r))),t.stop=null,this.moved()}moved(){let e=this.session;if(!e)return;let t=e.cursor.line()??e.cursor.testLine();t&&this.d.reveal(t.file,t.line),this.render(),this.d.changed(),this.askPicture()}marks(){let e=[...this.breakpoints].map(e=>{let t=e.lastIndexOf(`:`);return{file:e.slice(0,t),line:Number(e.slice(t+1))}}),t=this.session;return!t||!this.current()?{breakpoints:e,at:null,test:null}:{breakpoints:e,at:t.cursor.line(),test:t.cursor.testLine()}}hints(){let e=this.session;if(!e||!this.current()||!e.cursor.known)return[];let{t}=this.d,n=new Map;for(let t of e.cursor.programs())for(let e of t.values)n.has(e.name)||n.set(e.name,Yc(e.value,40));return e.cursor.frameLines().map(r=>{let i=r.names.map(e=>`${e} = ${n.get(e)??`?`}`);return r.steps>1&&i.push(`×${r.steps}`),i.length?{file:r.place.file,line:r.place.line,label:i.join(`  `),note:t(`What this line wrote in frame {frame}, as it stands at the debugger's cursor; ×n: how many times it ran in the frame so far.`,{frame:e.cursor.frame()})}:null}).filter(e=>e!==null)}current(){let e=this.session;return!!e&&Object.keys(e.files).length>0&&this.filesNow!==null&&Object.entries(e.files).every(([e,t])=>this.filesNow[e]===t)}filesNow=null;setFiles(e){let t=this.current();this.filesNow=e,this.session&&t!==this.current()&&(this.render(),this.d.changed())}askPicture(){let e=this.session;!e||!e.pictures||!e.view||typeof e.view==`string`||(e.picture.timer&&clearTimeout(e.picture.timer),e.picture.timer=setTimeout(()=>{e.picture.timer=null;let t=e.cursor,n=t.atEnd()?t.frame():t.frame()-1;n===e.picture.shown||n===e.picture.asked||e.pictures.closed||(e.picture.asked=n,e.pictures.picture(n).then(t=>{this.session!==e||typeof e.view==`string`||!e.view||(e.picture.asked=-1,e.picture.shown=t.frame,e.view.show(t),this.askPicture())},t=>{e.picture.asked=-1,this.session===e&&this.d.setStatus(`error`,this.d.t(`No picture of the game: {message}`,{message:t.message}))}))},$c))}button(e,t,n,r=!1){let i=this.d.shell.iconButton({icon:e,title:t,run:n});return i.set({disabled:r}),i.element}render(){let e=this.root.contains(document.activeElement);this.draw(),e&&!this.root.contains(document.activeElement)&&this.root.focus({preventScroll:!0})}draw(){let{el:e,t}=this.d,n=this.session;if(!n){this.bar.replaceChildren(e(`span`,{className:`tsd-why`},t(`No test is being debugged. Debug one from its row in the Testing view (the bug icon) or with Debug Test at Cursor: it runs once in the game with everything it did written down, and here you walk it, forwards and back.`))),this.time.replaceChildren(),this.cols.replaceChildren();return}this.cols.childElementCount!==3&&this.cols.replaceChildren(this.varsCol,this.stepsCol,this.gameCol);let r=n.cursor,i=n.recording,a=!i.frames,o=this.current()?n.stop?.kind===`breakpoint`?{text:t(`Stopped at the breakpoint on line {line}.`,{line:n.stop.place.line}),failed:!1}:n.stop?.kind===`watch`?{text:t(`{name} changed: {before} → {after}`,{name:n.stop.name,before:n.stop.before,after:n.stop.after}),failed:!1}:n.stop?.kind===`start`?{text:t(`The start of the run.`),failed:!1}:n.stop?.kind===`end`?{text:i.result.status===`failed`?t(`The end of the run: {message}`,{message:i.result.message??t(`the test failed`)}):t(`The end of the run: the test passed.`),failed:i.result.status===`failed`}:i.cut&&!r.known?{text:t(`The record stops at frame {frame} ({why}): the variables are not known past it.`,{frame:i.cut.frame,why:i.cut.why}),failed:!0}:i.result.status===`failed`?{text:t(`{test} failed: {message}`,{test:i.test.name,message:i.result.message??``}),failed:!0}:{text:t(`{test} passed.`,{test:i.test.name}),failed:!1}:{text:t(`The script changed since this run: its lines may have moved. Debug the test again to walk the script as it is.`),failed:!0},s=r.line(),c=a?t(`no frames`):`${t(`frame {frame}`,{frame:r.frame()})}  ${(r.frame()/24).toFixed(2)} s  ${s?`${s.file}:${s.line}`:r.atEnd()?t(`end of frame`):t(`the build's own triggers`)}`,l=e(`input`,{type:`checkbox`,checked:this.everyStep});l.addEventListener(`change`,()=>{this.everyStep=l.checked,this.render()}),this.bar.replaceChildren(this.button(`debug-reverse-continue`,t(`Continue backwards (F6): to the breakpoint or the change of a watched variable before this, or the start`),()=>this.continueBack(),a),this.button(`debug-step-back`,t(`Back a line (Shift+F10)`),()=>this.stepBack(),a),this.button(`debug-step-over`,t(`On a line (F10)`),()=>this.stepForward(),a),this.button(`debug-continue`,t(`Continue (F5): to the next breakpoint or change of a watched variable, or the end`),()=>this.continueForward(),a),e(`span`,{className:`tsd-sep`}),this.button(`arrow-left`,t(`Back a frame (Shift+F11)`),()=>this.prevFrame(),a),this.button(`arrow-right`,t(`On a frame (F11): to the end of this one`),()=>this.nextFrame(),a),this.button(`debug-restart`,t(`To the start of the run`),()=>this.restart(),a),this.button(`debug-stop`,t(`Stop debugging (Shift+F5)`),()=>this.end()),e(`span`,{className:`tsd-where`},c),e(`span`,{className:o.failed?`tsd-why tsd-failed`:`tsd-why`,title:o.text},o.text),e(`label`,{title:t(`Stop at every step, the build's own triggers and what the game wrote by itself included, not only at the script's lines`)},l,t(`Every step`))),this.renderTime(),this.renderCols()}renderTime(){let e=this.session;if(!e)return;let t=e.recording,n=Math.max(t.frames,1),r=e.cursor,i=document.createElementNS(Zc,`svg`);i.setAttribute(`viewBox`,`0 0 ${n} 100`),i.setAttribute(`preserveAspectRatio`,`none`);let a=(e,t,n,r,a,o)=>{let s=document.createElementNS(Zc,`rect`);if(s.setAttribute(`x`,String(e)),s.setAttribute(`y`,String(t)),s.setAttribute(`width`,String(n)),s.setAttribute(`height`,String(r)),s.setAttribute(`class`,a),o){let e=document.createElementNS(Zc,`title`);e.textContent=o,s.append(e)}i.append(s)},o=Math.max(1,...e.costs),s=document.createElementNS(Zc,`path`),c=[];e.costs.forEach((e,t)=>{let n=(100-e/o*70).toFixed(2);c.push(`${t},${n} ${t+1},${n}`)}),s.setAttribute(`d`,`M0,100 L${c.join(` L`)} L${n},100 Z`),s.setAttribute(`class`,`cost`),i.append(s);let{t:l}=this.d;if(t.cut){let e=t.cut.frame-t.first;a(e,0,n-e,100,`cut`,l(`Not recorded past frame {frame}: {why}`,{frame:t.cut.frame,why:t.cut.why}))}let u=Math.max(n/600,.6);for(let e of this.marks().breakpoints)for(let n of r.hits(e))a(n,0,u,14,`hit`,l(`Line {line} runs in frame {frame}`,{line:e.line,frame:t.first+n}));for(let e of t.shown)a(e.frame-t.first,88,u,12,`said`,e.text);t.result.status===`failed`&&a(n-u,0,u,100,`end`,t.result.message??``),a(r.where.k,0,Math.max(u,n/300),100,`now`);let d=document.createElementNS(Zc,`title`);d.textContent=l(`Frames {from} to {to}: the script's conditions and actions a frame ({peak} at the most). Red: a breakpoint's line runs; gold: a line of text was shown. Click or drag to go to a frame.`,{from:t.first,to:t.first+t.frames-1,peak:Vs(o)}),i.prepend(d),this.time.replaceChildren(i)}renderCols(){let{el:e,t}=this.d,n=this.session,r=n.cursor,i=n.recording,a=this.varsCol;a.replaceChildren(e(`h5`,{},t(`Variables`)));let o=e(`ul`),s=new Map;if(!r.known)o.append(e(`li`,{className:`tsd-empty`},t(`Not known here: the record stops at frame {frame}.`,{frame:i.cut.frame})));else{let i=r.programs();if(this.watch.length){o.append(e(`li`,{className:`tsd-program`},t(`Watched`)));for(let e of this.watch)o.append(this.varRow(e,r.watchText(e),n.last.get(`watch:${e}`),!0,()=>this.toggleWatch(e)));for(let e of this.watch)s.set(`watch:${e}`,r.watchText(e))}i.length||o.append(e(`li`,{className:`tsd-empty`},t(`The build did not say where the programs' variables are.`)));for(let t of i){o.append(e(`li`,{className:`tsd-program`},t.label));for(let e of t.values){let r=Yc(e.value,400),a=`${t.label}:${e.name}`;s.set(a,r);let c=i.filter(t=>t.values.some(t=>t.name===e.name)).length>1?`${t.label.split(` `)[0]}.${e.name}`:e.name;o.append(this.varRow(e.name,r,n.last.get(a),this.watch.includes(c),()=>this.toggleWatch(c)))}}}n.last=s,a.append(o);let c=this.stepsCol;c.replaceChildren(e(`h5`,{},t(`Frame {frame}`,{frame:r.frame()})));let l=e(`ul`),u=r.where.k,d=r.frameStart(u),f=r.frameEnd(u);for(let a=d;a<Math.min(f,d+400);a++){let o=i.stepLine[a],s=r.placeOf(a);if(!this.everyStep&&o===-1&&i.stepWrites[a+1]===i.stepWrites[a])continue;let c=s?`${s.file===`main.ts`?``:`${s.file} `}${t(`line {line}`,{line:s.line})}`:t(o===-3?`the test`:o===-4?`the game itself`:`the build's own triggers`),d=i.stepWrites[a+1]-i.stepWrites[a],f=e(`li`,{className:`tsd-click${a===r.where.s?` tsd-here`:``}${s?``:` tsd-dim`}`,onClick:()=>{r.moveTo({k:u,s:a}),n.stop=null,this.moved()}},e(`span`,{className:`k`},c),e(`span`,{className:`v`},d?t(`{n, plural, one {# write} other {# writes}}`,{n:d}):``),e(`span`,{className:`n`,title:t(`conditions and actions`)},String(i.stepRecords[a])));l.append(f)}f-d>400&&l.append(e(`li`,{className:`tsd-dim`},t(`… and {n} more steps`,{n:f-d-400}))),l.append(e(`li`,{className:`tsd-click${r.atEnd()?` tsd-here`:``} tsd-dim`,onClick:()=>{r.moveTo({k:u,s:f}),n.stop=null,this.moved()}},e(`span`,{className:`k`},t(`end of frame`)),e(`span`,{className:`n`},String(n.costs[u]??0)))),c.append(l);let p=r.shown();this.shownBox.replaceChildren(...p.length?p.map(t=>e(`div`,{},`${t.frame}  ${t.text}`)):[e(`div`,{},t(`Nothing shown yet.`))])}varRow(e,t,n,r,i){let{el:a,t:o}=this.d,s=this.d.shell.iconButton({icon:`eye`,title:o(r?`Stop watching {name}`:`Watch {name}: Continue stops where it changes`,{name:e}),run:i});return r&&s.element.classList.add(`tsd-on`),a(`li`,{title:t},a(`span`,{className:`k`},e),a(`span`,{className:n!==void 0&&n!==t?`v tsd-changed`:`v`},t),s.element)}},tl=e=>e.toString(16).padStart(2,`0`);function nl(e){if(!e||e.length<4)return`av01.0.08M.08`;let t=e[1]>>5,n=e[1]&31,r=e[2]>>7?`H`:`M`,i=e[2]>>6&1,a=e[2]>>5&1,o=i?a?12:10:8;return`av01.${t}.${String(n).padStart(2,`0`)}${r}.${String(o).padStart(2,`0`)}`}var rl=e=>e&&e.length>=4?`avc1.${tl(e[1])}${tl(e[2])}${tl(e[3])}`:`avc1.42001f`;function il(e,t=`hvc1`){if(!e||e.length<13)return`${t}.1.6.L93.B0`;let n=[``,`A`,`B`,`C`][e[1]>>6],r=e[1]>>5&1?`H`:`L`,i=e[1]&31,a=(e[2]<<24|e[3]<<16|e[4]<<8|e[5])>>>0,o=0;for(let e=0;e<32;e++)o=o<<1|a&1,a>>>=1;let s=[...e.subarray(6,12)];for(;s.length&&s[s.length-1]===0;)s.pop();return[`${t}.${n}${i}`,(o>>>0).toString(16),`${r}${e[12]}`,...s.map(e=>e.toString(16))].join(`.`)}var al=440786851,ol=408125543,sl=357149030,cl=2807729,ll=374648427,ul=174,dl=215,fl=131,pl=134,ml=25506,hl=224,gl=176,_l=186,vl=2352003,yl=524531317,bl=231,xl=163,Sl=160,Cl=161,wl=new Set([ol,sl,ll,ul,hl,yl,Sl]);function Tl(e){let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=0,r=t=>{if(n>=e.length)return null;let r=e[n],i=1;for(;i<=8&&!(r&128>>i-1);)i++;if(i>8||n+i>e.length)return null;let a=t?r:r&255>>i;for(let t=1;t<i;t++)a=a*256+e[n+t];let o=!t&&a===2**(7*i)-1;return n+=i,o?-1:a},i=(t,n)=>{let r=0;for(let i=0;i<n;i++)r=r*256+e[t+i];return r};if(t.byteLength<4||t.getUint32(0)!==al)return null;let a=1e6,o=[],s=null,c=-1,l=0,u=[],d=(i,o,s)=>{let d=n;n=i;let f=r(!1);if(f===null||f!==c){n=d;return}let p=t.getInt16(n),m=e[n+2];if(n+=3,m&6){n=d;return}u.push({data:e.subarray(n,o),time:Math.round((l+p)*a/1e3),key:s??!!(m&128)}),n=d};for(;n<e.length;){let t=n,u=r(!0),f=r(!1);if(u===null||f===null)break;let p=f<0?e.length:Math.min(e.length,n+f);if(wl.has(u)){if(u===ul&&(s={number:0,type:0,codec:``,width:0,height:0,duration:0},o.push(s)),u===yl&&c<0){let e=o.find(e=>e.type===1);if(!e)return null;c=e.number}continue}if(u===cl?a=i(n,f):s&&u===dl?s.number=i(n,f):s&&u===fl?s.type=i(n,f):s&&u===pl?s.codec=new TextDecoder().decode(e.subarray(n,p)):s&&u===ml?s.priv=e.subarray(n,p):s&&u===gl?s.width=i(n,f):s&&u===_l?s.height=i(n,f):s&&u===vl?s.duration=i(n,f):u===bl?l=i(n,f):u===xl?d(n,p,null):u===Cl&&d(n,p,!1),p<=t)break;n=p}let f=o.find(e=>e.number===c);if(!f||!u.length)return null;let p=f.codec===`V_VP8`?`vp8`:f.codec===`V_VP9`?`vp09.00.10.08`:f.codec===`V_AV1`?nl(f.priv):f.codec===`V_MPEG4/ISO/AVC`?rl(f.priv):f.codec===`V_MPEGH/ISO/HEVC`?il(f.priv):null;if(!p)return null;u[0].key=!0;let m=u.reduce((e,t)=>Math.max(e,t.time),0);return{codec:p,...f.priv&&p!==`vp8`&&!p.startsWith(`vp09`)?{description:f.priv}:{},width:f.width,height:f.height,samples:u,end:m+Math.round(f.duration/1e3)}}function El(e){let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=t=>String.fromCharCode(e[t+4],e[t+5],e[t+6],e[t+7]),r=(e,r)=>{let i=[];for(let a=e;a+8<=r;){let e=t.getUint32(a),o=a+8;if(e===1?(e=Number(t.getBigUint64(a+8)),o=a+16):e===0&&(e=r-a),e<8||a+e>r)break;i.push({type:n(a),body:o,end:a+e}),a+=e}return i},i=(e,t,n)=>r(e,t).find(e=>e.type===n);if(e.length<12||![`ftyp`,`moov`,`mdat`,`wide`,`free`,`skip`].includes(n(0)))return null;let a=i(0,e.length,`moov`);if(!a)return null;for(let o of r(a.body,a.end).filter(e=>e.type===`trak`)){let a=i(o.body,o.end,`mdia`),s=a&&i(a.body,a.end,`hdlr`);if(!a||!s||n(s.body+4)!==`vide`)continue;let c=i(a.body,a.end,`mdhd`),l=t.getUint32(c.body+(e[c.body]===1?20:12)),u=i(a.body,a.end,`minf`),d=u&&i(u.body,u.end,`stbl`);if(!d)return null;let f=e=>i(d.body,d.end,e),p=f(`stsd`);if(!p)return null;let m=p.body+8,h=n(m),g=t.getUint16(m+32),_=t.getUint16(m+34),v=r(m+86,m+t.getUint32(m)),y=t=>{let n=v.find(e=>e.type===t);return n?e.subarray(n.body,n.end):void 0},b=h===`avc1`||h===`avc3`?rl(y(`avcC`)):h===`hvc1`||h===`hev1`?il(y(`hvcC`),h):h===`av01`?nl(y(`av1C`)):h===`vp09`?`vp09.00.10.08`:h===`vp08`?`vp8`:null;if(!b)return null;let x=y(`avcC`)??y(`hvcC`)??y(`av1C`),S=f(`stsz`),C=t.getUint32(S.body+4),w=t.getUint32(S.body+8),T=Array.from({length:w},(e,n)=>C||t.getUint32(S.body+12+4*n)),E=f(`stco`),D=f(`co64`),O=E?Array.from({length:t.getUint32(E.body+4)},(e,n)=>t.getUint32(E.body+8+4*n)):D?Array.from({length:t.getUint32(D.body+4)},(e,n)=>Number(t.getBigUint64(D.body+8+8*n))):[],k=f(`stsc`),A=Array.from({length:t.getUint32(k.body+4)},(e,n)=>({first:t.getUint32(k.body+8+12*n)-1,per:t.getUint32(k.body+12+12*n)})),j=f(`stts`),M=[];for(let e=0,n=t.getUint32(j.body+4);e<n;e++)for(let n=0,r=t.getUint32(j.body+8+8*e);n<r;n++)M.push(t.getUint32(j.body+12+8*e));let N=f(`ctts`),P=[];if(N)for(let e=0,n=t.getUint32(N.body+4);e<n;e++)for(let n=0,r=t.getUint32(N.body+8+8*e);n<r;n++)P.push(t.getInt32(N.body+12+8*e));let F=f(`stss`),ee=F?new Set(Array.from({length:t.getUint32(F.body+4)},(e,n)=>t.getUint32(F.body+8+4*n)-1)):null,te=i(o.body,o.end,`edts`),I=te&&i(te.body,te.end,`elst`),ne=I?e[I.body]===1?Number(t.getBigInt64(I.body+16)):t.getInt32(I.body+12):0,re=[],L=0,ie=0,ae=0;for(let t=0;t<O.length&&L<w;t++){let n=[...A].reverse().find(e=>e.first<=t),r=O[t];for(let t=0;t<n.per&&L<w;t++,L++){let t=ie+(P[L]??0)-Math.max(0,ne);re.push({data:e.subarray(r,r+T[L]),time:Math.round(t*1e6/l),key:!ee||ee.has(L)}),ae=Math.max(ae,Math.round((t+(M[L]??0))*1e6/l)),r+=T[L],ie+=M[L]??0}}return re.length?{codec:b,...x?{description:x}:{},width:g,height:_,samples:re,end:ae}:null}return null}function Dl(e){try{return Tl(e)??El(e)}catch{return null}}async function Ol(e,t,n){let r=globalThis;if(!r.VideoDecoder||!r.EncodedVideoChunk)return!1;let i={codec:e.codec,codedWidth:e.width,codedHeight:e.height,...e.description?{description:e.description}:{}};try{if(!(await r.VideoDecoder.isConfigSupported(i)).supported)return!1}catch{return!1}let a=null,o=new r.VideoDecoder({output:e=>{try{t(e)}catch(t){a=t,e.close()}},error:e=>{a=e}});o.configure(i);try{for(let t of e.samples){if(n.aborted)throw new DOMException(`cancelled`,`AbortError`);if(a)throw a;for(o.decode(new r.EncodedVideoChunk({type:t.key?`key`:`delta`,timestamp:t.time,data:t.data}));o.decodeQueueSize>4;)await new Promise(e=>setTimeout(e,1))}if(await o.flush(),a)throw a;return!0}finally{o.state!==`closed`&&o.close()}}var kl=e=>e.type.startsWith(`audio/`)||/\.(wav|mp3|ogg|oga|flac|m4a|aac|opus)$/i.test(e.name);async function Al(e,t){let n=await e.arrayBuffer(),r=await new OfflineAudioContext(1,1,44100).decodeAudioData(n),i=Math.max(1,Math.ceil(r.duration*t)),a=new OfflineAudioContext(1,i,t),o=a.createBufferSource();return o.buffer=r,o.connect(a.destination),o.start(),(await a.startRendering()).getChannelData(0).slice()}function jl(e,t,n=-1){let r=e.width=512,i=e.height=96,a=e.getContext(`2d`);a.fillStyle=`#222`,a.fillRect(0,0,r,i),a.fillStyle=`#9cc8ff`;let o=t.length/r;for(let e=0;e<r;e++){let n=0,r=0;for(let i=Math.floor(e*o);i<Math.floor((e+1)*o);i++)n=Math.min(n,t[i]),r=Math.max(r,t[i]);a.fillRect(e,i/2*(1-Math.min(1,r)),1,Math.max(1,i/2*(Math.min(1,r)-Math.max(-1,n))))}n>=0&&(a.fillStyle=`#ffd75e`,a.fillRect(Math.round(n*r),0,1,i))}var Ml=`width: 100%; max-width: 512px; height: 96px; display: block; margin: 0 auto 8px; background: #222;`;function Nl(e,t,n){let r=null,i=null,a=0,o=()=>{i?.stop(),i=null,cancelAnimationFrame(a),jl(n,e)};return{play:()=>{o(),r??=new AudioContext;let s=r.createBuffer(1,Math.max(1,e.length),t);s.copyToChannel(Float32Array.from(e),0),i=r.createBufferSource(),i.buffer=s,i.connect(r.destination);let c=r.currentTime,l=i;i.onended=()=>{i===l&&o()},i.start();let u=()=>{!r||i!==l||(jl(n,e,(r.currentTime-c)/s.duration),a=requestAnimationFrame(u))};u()},stop:o,close:()=>{o(),r?.close()}}}async function Pl(e,t,n,r,i){let a=e.ui.widgets,o=e.ui.el,s=22050,c;try{c=await Al(n,s)}catch(r){return await e.ui.alert(t(`{name} could not be opened: {message}`,{name:n.name,message:r.message})),null}let l=o(`canvas`,{});l.setAttribute(`style`,Ml);let u=a.hint(``),d=a.hint(``),f=a.text({value:`${i}.sound`}),p=Nl(c,s,l),m=()=>{let e=Math.round(c.length/2/1024*1.4);u.textContent=t(`{seconds} seconds at {rate} Hz, about {kb} KB in the map.`,{seconds:(c.length/s).toFixed(2),rate:s.toLocaleString(),kb:e.toLocaleString()})},h=a.select([{value:`11025`,label:t(`11 kHz (smallest)`)},{value:`22050`,label:t(`22 kHz`)},{value:`44100`,label:t(`44 kHz (largest)`)}],{value:String(s),onChange:e=>{(async()=>{s=Number(e),p.close(),c=await Al(n,s),p=Nl(c,s,l),jl(l,c),m()})()}}),g=null;return await new Promise(i=>{e.ui.dialog({title:t(`Import Sound`),size:`md`,mount(e){return e.append(l,a.row(a.button(t(`Play`),{onClick:()=>p.play()}),a.button(t(`Stop`),{onClick:()=>p.stop()})),a.form([{label:t(`Rate`),field:h},{label:t(`File`),field:f}]),u,a.hint(t(`Kept in mono, as the game's own sounds are. A program plays it with playWav(); clips made from it — trim, gain, pitch — are made when the script is built.`)),d),jl(l,c),m(),()=>{p.close(),i()}},buttons:[{label:t(`Cancel`)},{label:t(`Import`),primary:!0,run:()=>{let e=f.value.trim().replace(/\\/g,`/`).replace(/^\/+/,``);if(e.toLowerCase().endsWith(`.sound`)||(e+=`.sound`),!/^[A-Za-z0-9_\-./]+$/.test(e)||e.split(`/`).some(e=>e===`.`||e===`..`||e===``))return d.textContent=t(`A file name is letters, digits, _ - and ., folders with /.`),!1;if(r(e))return d.textContent=t(`There is already a {name}.`,{name:e}),!1;try{g={path:e,text:pr({rate:s,samples:c,source:n.name})}}catch(e){return d.textContent=t(`Not imported: {message}`,{message:e.message}),!1}return!0}}]})}),g}function Fl(e,t,n,r){let i;try{i=mr(r)}catch(t){e.ui.alert(`${n}: ${t.message}`);return}let a=e.ui.widgets,o=e.ui.el,s=o(`canvas`,{});s.setAttribute(`style`,Ml);let c=Nl(i.samples,i.rate,s),l=(n.split(`/`).pop()??n).replace(/\.sound$/i,``).replace(/[^A-Za-z0-9]+(.)?/g,(e,t)=>t?t.toUpperCase():``).replace(/^[^A-Za-z_]+/,``)||`sound`;e.ui.dialog({title:n,size:`md`,mount(e){return e.append(s,a.row(a.button(t(`Play`),{onClick:()=>c.play()}),a.button(t(`Stop`),{onClick:()=>c.stop()})),a.hint(t(`{seconds} seconds at {rate} Hz{from}. Import it with import {name} from "./{file}", play it with playWav({name}).`,{seconds:(i.frames/i.rate).toFixed(2),rate:i.rate.toLocaleString(),from:i.source?` · ${i.source}`:``,name:l,file:n.split(`/`).pop()??n}))),jl(s,i.samples),()=>c.close()}})}var Il=e=>/\.midi?$/i.test(e.name)||e.type===`audio/midi`||e.type===`audio/x-midi`,Ll=[`#9cc8ff`,`#ffd75e`,`#8ee08e`,`#ff9c9c`,`#d4a8ff`,`#7fe0d8`,`#ffb86b`,`#c8c8c8`],Rl=`width: 100%; max-width: 640px; height: 160px; display: block; margin: 0 auto 8px; background: #222;`;function zl(e,t,n,r=-1){let i=e.width=640,a=e.height=160,o=e.getContext(`2d`);o.fillStyle=`#222`,o.fillRect(0,0,i,a);let s=t.tracks.flatMap((e,t)=>n(t)?e.notes:[]);if(s.length===0)return;let c=Math.max(...s.map(e=>e.at+e.beats)),l=Math.min(...s.map(e=>e.pitch)),u=Math.max(...s.map(e=>e.pitch)),d=e=>e/c*i,f=a/(u-l+1);t.tracks.forEach((e,t)=>{if(n(t)){o.fillStyle=Ll[t%Ll.length];for(let t of e.notes)o.fillRect(d(t.at),a-(t.pitch-l+1)*f,Math.max(1,d(t.beats)-.5),Math.max(1,f-.5))}}),r>=0&&(o.fillStyle=`#fff`,o.fillRect(Math.round(d(r)),0,1,a))}function Bl(e,t,n){let r=null,i=0,a=0,o=!1,s=60/e.bpm,c=()=>{o=!1,cancelAnimationFrame(i),r?.close(),r=null,zl(n,e,t)};return{play:()=>{c(),r=new AudioContext;let l=r.createGain();l.gain.value=.15,l.connect(r.destination),a=r.currentTime+.1;let u=0;e.tracks.forEach((e,n)=>{if(t(n))for(let t of e.notes){let n=a+t.at*s,i=Math.max(.03,Math.min(t.beats*s,4)),o=r.createOscillator(),c=r.createGain();o.type=e.channel===10?`square`:`sine`,o.frequency.value=e.channel===10?80+t.pitch%12*40:440*2**((t.pitch-69)/12);let d=t.velocity/127*(e.channel===10?.4:.5),f=e.channel===10?.04:i;c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(d,n+.005),c.gain.setValueAtTime(d,n+Math.max(.006,f-.03)),c.gain.linearRampToValueAtTime(0,n+f),o.connect(c).connect(l),o.start(n),o.stop(n+f+.01),u=Math.max(u,t.at+t.beats)}}),o=!0;let d=r,f=()=>{if(!o||r!==d)return;let l=(d.currentTime-a)/s;if(l>u){c();return}zl(n,e,t,Math.max(0,l)),i=requestAnimationFrame(f)};f()},stop:c}}function Vl(e,t){let n=t.tracks.reduce((e,t)=>e+t.notes.length,0),r=Math.max(0,...t.tracks.flatMap(e=>e.notes.map(e=>e.at+e.beats))),i=Math.round(r*60/t.bpm);return e(`{tracks} tracks, {notes} notes, {bpm} beats a minute ({time}).`,{tracks:t.tracks.length,notes:n.toLocaleString(),bpm:Math.round(t.bpm*100)/100,time:`${Math.floor(i/60)}:${String(i%60).padStart(2,`0`)}`})+(t.tempoChanges?` `+e(`The tempo changes later in the file; a song plays at the first.`):``)}function Hl(e,t,n){let r=e.ui.el,i=(e,t)=>(e.setAttribute(`style`,t),e);return i(r(`ul`,{},...n.tracks.map((e,n)=>r(`li`,{},i(r(`span`,{}),`display: inline-block; width: 10px; height: 10px; margin-right: 6px; background: ${Ll[n%Ll.length]};`),e.channel===10?t(`{name} — the drums, {n} notes`,{name:e.name,n:e.notes.length}):t(`{name} — channel {channel}, instrument {program}, {n} notes`,{name:e.name,channel:e.channel,program:e.program,n:e.notes.length})))),`list-style: none; padding: 0; margin: 0 0 8px; font-size: 12px; max-height: 140px; overflow: auto;`)}async function Ul(e,t,n,r,i){let a=e.ui.widgets,o=e.ui.el,s;try{s=xr(new Uint8Array(await n.arrayBuffer()),n.name)}catch(r){return await e.ui.alert(t(`{name} could not be opened: {message}`,{name:n.name,message:r.message})),null}let c=o(`canvas`,{});c.setAttribute(`style`,Rl);let l=a.hint(``),u=a.text({value:`${i}.notes`}),d=Bl(s,()=>!0,c),f=null;return await new Promise(n=>{e.ui.dialog({title:t(`Import MIDI`),size:`md`,mount(r){return r.append(c,a.row(a.button(t(`Play`),{onClick:()=>d.play()}),a.button(t(`Stop`),{onClick:()=>d.stop()})),Hl(e,t,s),a.form([{label:t(`File`),field:u}]),a.hint(Vl(t,s)),a.hint(t(`The notes are kept, not the sounds: music.midi(notes, { Piano: keys }) plays each track you name with an instrument of the music library.`)),l),zl(c,s,()=>!0),()=>{d.stop(),n()}},buttons:[{label:t(`Cancel`)},{label:t(`Import`),primary:!0,run:()=>{let e=u.value.trim().replace(/\\/g,`/`).replace(/^\/+/,``);return e.toLowerCase().endsWith(`.notes`)||(e+=`.notes`),!/^[A-Za-z0-9_\-./]+$/.test(e)||e.split(`/`).some(e=>e===`.`||e===`..`||e===``)?(l.textContent=t(`A file name is letters, digits, _ - and ., folders with /.`),!1):r(e)?(l.textContent=t(`There is already a {name}.`,{name:e}),!1):(f={path:e,text:Sr(s)},!0)}}]})}),f}function Wl(e,t,n,r){let i;try{i=Cr(r)}catch(t){e.ui.alert(`${n}: ${t.message}`);return}let a=e.ui.widgets,o=e.ui.el,s=o(`canvas`,{});s.setAttribute(`style`,Rl);let c=Bl(i,()=>!0,s),l=(n.split(`/`).pop()??n).replace(/\.notes$/i,``).replace(/[^A-Za-z0-9]+(.)?/g,(e,t)=>t?t.toUpperCase():``).replace(/^[^A-Za-z_]+/,``)||`notes`;e.ui.dialog({title:n,size:`md`,mount(r){return r.append(s,a.row(a.button(t(`Play`),{onClick:()=>c.play()}),a.button(t(`Stop`),{onClick:()=>c.stop()})),Hl(e,t,i),a.hint(Vl(t,i)+(i.source?` · ${i.source}`:``)),a.hint(t(`Import it with import {name} from "./{file}", make a song of it with music.midi({name}, { "{track}": music.presets.keys() }).`,{name:l,file:n.split(`/`).pop()??n,track:i.tracks[0]?.name??`Track 1`}))),zl(s,i,()=>!0),()=>c.stop()}})}function Gl(e,t,n,r,i,a){let o=Math.max(1,Math.min(8,Math.floor(Math.min(t/r,n/i))));a.width=r*o,a.height=i*o;let s=a.getContext(`2d`,{willReadFrequently:!0});s.imageSmoothingEnabled=!0,s.imageSmoothingQuality=`high`,s.drawImage(e,0,0,r*o,i*o);let c=s.getImageData(0,0,r*o,i*o).data,l=new Uint8Array(r*i),u=r*o*4;for(let e=0;e<i;e++)for(let t=0;t<r;t++){let n=0;for(let r=0;r<o;r++)for(let i=0;i<o;i++){let a=(e*o+r)*u+(t*o+i)*4;n+=.299*c[a]+.587*c[a+1]+.114*c[a+2]}l[e*r+t]=Math.round(n/(o*o))}return l}function Kl(e,t,n,r,i,a){let o=Math.max(1,Math.min(8,Math.floor(Math.min(t/r,n/i))));a.width=r*o,a.height=i*o;let s=a.getContext(`2d`,{willReadFrequently:!0});s.clearRect(0,0,r*o,i*o),s.imageSmoothingEnabled=!0,s.imageSmoothingQuality=`high`,s.drawImage(e,0,0,r*o,i*o);let c=s.getImageData(0,0,r*o,i*o).data,l=new Uint8Array(r*i*4),u=r*o*4;for(let e=0;e<i;e++)for(let t=0;t<r;t++){let n=0,i=0,a=0,s=0;for(let r=0;r<o;r++)for(let l=0;l<o;l++){let d=(e*o+r)*u+(t*o+l)*4,f=c[d+3];n+=c[d]*f,i+=c[d+1]*f,a+=c[d+2]*f,s+=f}let d=(e*r+t)*4;l[d]=s?Math.round(n/s):0,l[d+1]=s?Math.round(i/s):0,l[d+2]=s?Math.round(a/s):0,l[d+3]=Math.round(s/(o*o))}return l}async function ql(e){let t=document.createElement(`canvas`);if(e.type.startsWith(`image/`)){let n=await createImageBitmap(e);return{kind:`image`,name:e.name,width:n.width,height:n.height,duration:0,grey:async(e,r,i)=>Gl(n,n.width,n.height,r,i,t),rgba:async(e,r)=>Kl(n,n.width,n.height,e,r,t),close:()=>n.close()}}let n=URL.createObjectURL(e),r=document.createElement(`video`);r.muted=!0,r.playsInline=!0,r.preload=`auto`,r.src=n,await new Promise((e,t)=>{r.onloadeddata=()=>e(),r.onerror=()=>t(Error(r.error?.message||`the browser cannot play this file`))});let i=e=>new Promise(t=>{if(Math.abs(r.currentTime-e)<1e-4){t();return}r.onseeked=()=>t(),r.currentTime=e});return{kind:`video`,name:e.name,width:r.videoWidth,height:r.videoHeight,duration:r.duration,file:e,grey:async(e,n,a)=>(await i(Math.min(e,Math.max(0,r.duration-.001))),Gl(r,r.videoWidth,r.videoHeight,n,a,t)),close:()=>{r.pause(),r.removeAttribute(`src`),r.load(),URL.revokeObjectURL(n)},element:r,canvas:t}}async function Jl(e,t,n,r,i,a){return await Yl(e,t,n,r,i,a)??Xl(e,t,n,r,i,a)}async function Yl(e,t,n,r,i,a){if(!e.file)return null;let o=Dl(new Uint8Array(await e.file.arrayBuffer()));if(!o)return null;let{canvas:s}=e,c=Math.max(1,Math.floor(Math.max(e.duration*1e3,o.end/1e3)/r)),l=Array(c),u=null,d=0;if(!await Ol(o,e=>{let a,o;try{o=e.timestamp/1e3,a=Gl(e,e.displayWidth,e.displayHeight,t,n,s)}finally{e.close()}for(;d<c&&d*r<o;d++)l[d]=u&&d*r-u.t<=o-d*r?u.grey:a;u={t:o,grey:a},i(d,c)},a)||!u)return null;for(;d<c;d++)l[d]=u.grey;return l}async function Xl(e,t,n,r,i,a){let{element:o,canvas:s}=e,c=Math.max(1,Math.floor(e.duration*1e3/r)),l=Array(c),u=new Uint8Array(c),d=()=>{if(a.aborted)throw new DOMException(`cancelled`,`AbortError`)},f=globalThis.VideoFrame,p=o.requestVideoFrameCallback?.bind(o),m=1e3/30;p&&f&&(await e.grey(0,t,n),o.playbackRate=2,await new Promise((e,d)=>{let h=0,g=0,_=0,v=()=>{if(a.aborted){o.pause(),d(new DOMException(`cancelled`,`AbortError`));return}let e=new f(o),y,b;try{y=e.timestamp/1e3,e.duration&&(m=e.duration/1e3),b=Gl(e,e.displayWidth,e.displayHeight,t,n,s)}finally{e.close()}for(let e=Math.max(0,Math.ceil((y-m/2)/r));e<c&&e*r<y+m/2;e++)l[e]=b,u[e]=1;let x=Math.min(c,Math.floor(y/r));for(;_<x;_++)h++,u[_]||g++;h>=48&&(g>h/10&&o.playbackRate>.25&&(o.playbackRate/=2),h=0,g=0),i(x,c),p(v)};o.onended=()=>e(),p(v),o.play().catch(e=>d(e instanceof Error?e:Error(String(e))))}),o.pause());let h=[];for(let e=0;e<c;e++)u[e]||h.push(e);for(let[a,o]of h.entries())d(),l[o]=await e.grey((o*r+m/2-.5)/1e3,t,n),i(c-h.length+a+1,c);return l}var Zl=(e,t,n)=>{let r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e[i]>=t===n?0:1;return r};function Ql(e,t,n,r,i){e.width=n,e.height=r;let a=e.getContext(`2d`),o=a.createImageData(n,r);for(let e=0;e<n*r;e++){let n=t[e]===1,r=i&&i[e]!==t[e],a=n?236:70;o.data[e*4]=r?230:a,o.data[e*4+1]=r?n?120:90:a,o.data[e*4+2]=r?n?120:90:a+6,o.data[e*4+3]=255}a.putImageData(o,0,0)}function $l(e,t,n,r,i=!1){e.width=n,e.height=r;let a=e.getContext(`2d`),o=a.createImageData(n,r);if(o.data.set(t),i)for(let e=0;e<t.length;e+=4)o.data[e]=o.data[e+1]=o.data[e+2]=Math.round(.299*t[e]+.587*t[e+1]+.114*t[e+2]);a.putImageData(o,0,0)}var eu=`image-rendering: pixelated; width: 100%; max-width: 512px; background: #222; display: block; margin: 0 auto 8px;`;function tu(e){return e.replace(/\.[^.]*$/,``).toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)||`video`}function nu(e,t){return`// ${t}, imported as rows of tiles: # is ink. fog.picture(…) draws it: import heart from "./heart";\nexport default [\n${e.map(e=>`  ${JSON.stringify(e)},`).join(`
`)}\n] as const;\n`}async function ru(e,t,n){let r=n.file??(await e.ui.pickFiles({accept:`video/*,image/*,.mkv,.webm,.mp4,.mov,.gif,audio/*,.wav,.mp3,.ogg,.oga,.flac,.m4a,.aac,.opus,.mid,.midi,audio/midi,audio/x-midi`}))[0];if(!r)return null;if(Il(r)){let i=await Ul(e,t,r,n.taken,tu(r.name));return i?{...i,kind:`notes`}:null}if(kl(r)){let i=await Pl(e,t,r,n.taken,tu(r.name));return i?{...i,kind:`sound`}:null}let i;try{i=await ql(r)}catch(n){return await e.ui.alert(t(`{name} could not be opened: {message}`,{name:r.name,message:n.message})),null}let a=e.ui.widgets,o=e.ui.el,s=i.kind===`image`?`color`:`rows`,c=()=>s!==`rows`,l=e=>Math.max(1,Math.min(c()?Vn:256,Math.round(e))),u=Math.min(1,256/Math.max(i.width,i.height,1)),d=()=>c()?l(i.width*u):l(Math.min(n.mapWidth,256)),f=e=>c()?l(i.height*u):l(Math.min(n.mapHeight,e*i.height/Math.max(1,i.width))),p=d(),m=f(p),h=128,g=!1,_=0,v=null,y=null,b=o(`canvas`,{});b.setAttribute(`style`,eu);let x=a.hint(``),S=a.hint(``),C=a.progressBar();C.style.display=`none`;let w=tu(i.name),T=()=>i.kind===`video`?`.video`:c()?`.image`:`.ts`,E=a.text({value:`${w}${T()}`}),D=()=>Math.max(1,Math.floor(i.duration*1e3/42)),O=()=>{let e=Math.round(i.duration);x.textContent=i.kind===`video`?t(`{w} × {h} tiles, {n} frames at the game's speed on Fastest ({time}).`,{w:p,h:m,n:D().toLocaleString(),time:`${Math.floor(e/60)}:${String(e%60).padStart(2,`0`)}`}):c()?t(`{w} × {h} pixels, a tile each when the fog draws them.`,{w:p,h:m}):t(`{w} × {h} tiles.`,{w:p,h:m})},k=()=>{c()?y&&$l(b,y,p,m,s===`grey`):v&&Ql(b,Zl(v,h,g),p,m)},A=0,j=async()=>{let e=++A;if(c()){let t=await i.rgba(p,m);if(e!==A)return;y=t}else{let t=await i.grey(_,p,m);if(e!==A)return;v=t}k(),O()},M=(e,t)=>a.number({value:e,min:1,max:c()?Vn:256,step:1,onChange:e=>{t(l(e)),j()}}),N=(e,t,n,r,i)=>{let a=o(`input`,{type:`range`});return Object.assign(a,{min:String(e),max:String(t),step:String(r),value:String(n)}),a.style.width=`100%`,a.addEventListener(`input`,()=>i(Number(a.value))),a},P=M(p,e=>{p=e}),F=M(m,e=>{m=e}),ee=a.form([{label:t(`Threshold`),field:N(1,255,h,1,e=>{h=e,k()})},{label:t(`Ink`),field:a.select([{value:`light`,label:t(`Light parts`)},{value:`dark`,label:t(`Dark parts`)}],{value:`light`,onChange:e=>{g=e===`dark`,k()}})}]),te=a.hint(``),I=()=>{ee.style.display=c()?`none`:``,P.max=F.max=String(c()?Vn:256),te.textContent=i.kind===`video`?t(`Light tiles are the ink: what fog.light lights. A video's frames are taken at the game's speed on Fastest, a frame of it each frame of the game.`):c()?t(`The pixels are kept for the script to work on when it is built — crop, scale, flip, threshold — and draw: fog.picture(logo.threshold(128)).`):t(`Light tiles are the ink: what fog.light lights. The rows are a .ts file to edit, which fog.picture takes.`)},ne=a.select([{value:`color`,label:t(`Pixels in colour (.image)`)},{value:`grey`,label:t(`Pixels in grey (.image)`)},{value:`rows`,label:t(`Rows of ink to edit (.ts)`)}],{value:s,onChange:e=>{s=e,p=d(),m=f(p),P.value=String(p),F.value=String(m),E.value=E.value.replace(/\.(?:image|ts)$/i,``)+T(),I(),j()}});I();let re=new AbortController,L=null;return await new Promise(r=>{e.ui.dialog({title:i.kind===`video`?t(`Import Video`):t(`Import Image`),size:`md`,mount(e){return e.append(b,...i.kind===`video`?[a.form([{label:t(`Frame`),field:N(0,Math.max(0,i.duration-.05),0,.01,e=>{_=e,j()})}])]:[],...i.kind===`image`?[a.form([{label:t(`Keep as`),field:ne}])]:[],a.form([{label:t(`Tiles across`),field:P},{label:t(`Tiles down`),field:F}]),ee,a.form([{label:t(`File`),field:E}]),x,te,C,S),j(),()=>{re.abort(),i.close(),r()}},buttons:[{label:t(`Cancel`)},{label:t(`Import`),primary:!0,run:async()=>{let e=E.value.trim().replace(/\\/g,`/`).replace(/^\/+/,``),r=T();if(e.toLowerCase().endsWith(r)||(e+=r),!/^[A-Za-z0-9_\-./]+$/.test(e)||e.split(`/`).some(e=>e===`.`||e===`..`||e===``))return S.textContent=t(`A file name is letters, digits, _ - and ., folders with /.`),!1;if(n.taken(e))return S.textContent=t(`There is already a {name}.`,{name:e}),!1;if(i.kind===`image`&&c())return L={path:e,text:Wn({width:p,height:m,rgba:await i.rgba(p,m),grey:s===`grey`,source:i.name}),kind:`image`},!0;if(i.kind===`image`){let t=Zl(await i.grey(0,p,m),h,g),n=Array.from({length:m},(e,n)=>Array.from({length:p},(e,r)=>t[n*p+r]?`#`:`.`).join(``));return L={path:e,text:nu(n,i.name),kind:`rows`},!0}C.style.display=``;let a=performance.now();try{let n=await Jl(i,p,m,42,(e,n)=>{C.set(e/n),S.textContent=t(`Decoding: frame {done} of {total}…`,{done:e.toLocaleString(),total:n.toLocaleString()})},re.signal),r=Ar({width:p,height:m,frameMs:42,frames:n.map(e=>Zl(e,h,g)),source:i.name});return L={path:e,text:r,kind:`video`},S.textContent=t(`{n} frames in {seconds} s, {kb} KB.`,{n:n.length.toLocaleString(),seconds:((performance.now()-a)/1e3).toFixed(0),kb:Math.round(r.length/1024).toLocaleString()}),!0}catch(e){return e.name===`AbortError`||(S.textContent=t(`Not imported: {message}`,{message:e.message}),C.style.display=`none`,!1)}}}]})}),L}function iu(e,t,n,r){let i;try{i=jr(r)}catch(t){e.ui.alert(`${n}: ${t.message}`);return}let a=e.ui.widgets,o=e.ui.el,s=kn(Bt),c=o(`canvas`,{});c.setAttribute(`style`,eu);let l=a.hint(``),u=0,d=!1,f=null,p=o(`input`,{type:`range`});Object.assign(p,{min:`0`,max:String(Math.max(0,i.length-1)),step:`1`,value:`0`}),p.style.width=`100%`;let m=()=>{let e=i.tiles(u),n=t(`Frame {n} of {total}`,{n:(u+1).toLocaleString(),total:i.length.toLocaleString()});if(d){let r=An(e,i.width,i.height,s);Ql(c,jn(r,i.width,i.height,s),i.width,i.height,e),n+=` · ${t(`{n} brushes`,{n:r.length})}`}else Ql(c,e,i.width,i.height);l.textContent=n,p.value=String(u)};p.addEventListener(`input`,()=>{u=Number(p.value),m()});let h=()=>{f!==null&&(clearInterval(f),f=null)},g=a.button(t(`Play`),{onClick:()=>{if(f!==null){h(),g.textContent=t(`Play`);return}g.textContent=t(`Pause`),f=window.setInterval(()=>{u=(u+1)%Math.max(1,i.length),m()},i.frameMs)}}),_=Math.round(i.length*i.frameMs/1e3);e.ui.dialog({title:n,size:`md`,mount(e){return e.append(c,p,a.row(g,a.select([{value:`tiles`,label:t(`The video`)},{value:`fog`,label:t(`As the fog draws it`)}],{value:`tiles`,onChange:e=>{d=e===`fog`,m()}})),l,a.hint(t(`{w} × {h} tiles, {n} frames of {ms} ms ({time}){from}. Import it with import name from "./{file}".`,{w:i.width,h:i.height,n:i.length.toLocaleString(),ms:i.frameMs,time:`${Math.floor(_/60)}:${String(_%60).padStart(2,`0`)}`,from:i.source?` · ${i.source}`:``,file:n.split(`/`).pop()??n}))),m(),h}})}function au(e,t,n,r){let i;try{i=Gn(r)}catch(t){e.ui.alert(`${n}: ${t.message}`);return}let a=nr(i),o=e.ui.widgets,s=e.ui.el,c=kn(Bt),l=s(`canvas`,{});l.setAttribute(`style`,eu);let u=o.hint(``),d=(n.split(`/`).pop()??n).replace(/\.image$/i,``).replace(/[^A-Za-z0-9]+(.)?/g,(e,t)=>t?t.toUpperCase():``).replace(/^[^A-Za-z_]+/,``)||`image`,f=`pixels`,p=128,m=!1,h=s(`input`,{type:`range`});Object.assign(h,{min:`1`,max:`255`,step:`1`,value:String(p)}),h.style.width=`100%`;let g=()=>{if(h.disabled=f!==`threshold`,_.disabled=f!==`threshold`,f===`pixels`){$l(l,i.rgba,i.width,i.height),u.textContent=``;return}let e=m?`{ ink: "dark" }`:``,n=Number(f.replace(`halftone`,``)),r=n?a.halftone(n):a.threshold(p,{ink:m?`dark`:`light`}),o=n?`${d}.halftone(${n})`:`${d}.threshold(${p}${e?`, ${e}`:``})`,s=Uint8Array.from(r.join(``),e=>+(e===`#`)),g=n?r.brushes:An(s,i.width,i.height,c);Ql(l,jn(g,i.width,i.height,c),i.width,i.height,s),u.textContent=`fog.picture(${o}) · ${t(`{n} brushes`,{n:g.length})}`};h.addEventListener(`input`,()=>{p=Number(h.value),g()});let _=o.select([{value:`light`,label:t(`Light parts`)},{value:`dark`,label:t(`Dark parts`)}],{value:`light`,onChange:e=>{m=e===`dark`,g()}});e.ui.dialog({title:n,size:`md`,mount(e){e.append(l,o.form([{label:t(`Show`),field:o.select([{value:`pixels`,label:t(`The image`)},{value:`threshold`,label:t(`Threshold, as the fog draws it`)},...[4,6,8].map(e=>({value:`halftone${e}`,label:t(`Halftone, {w} × {h} cells, as the fog draws it`,{w:e,h:e+1})}))],{value:f,onChange:e=>{f=e,g()}})},{label:t(`Threshold`),field:h},{label:t(`Ink`),field:_}]),u,o.hint(t(`{w} × {h} pixels{from}. Import it with import {name} from "./{file}".`,{w:i.width,h:i.height,from:i.source?` · ${i.source}`:``,name:d,file:n.split(`/`).pop()??n}))),g()}})}var ou=`// TrigScript: ordinary TypeScript that runs when you build. Every trigger() call becomes
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
// A map with a program is built by TrigScript itself when you save it, and needs
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
`,su=`import { trigger, units, locations, P1 } from "trigscript";

// Helpers this file exports are imported by main.ts: import { … } from "./name";
`,cu=`import { test, expect, units, locations, P1 } from "trigscript";

// A test runs here, in the simulator, after every change that compiles: never in the game, and it costs the map nothing.
// sim is a world of its own for each test: the map's placed units and locations, and the script's programs at frame 0.
test("the script runs for a second", (sim) => {
  sim.seconds(1);
  expect(sim.frame).toBe(24);
});
`,lu=214,uu=5,du=6,fu=200,pu=e=>e.split(`
`).filter(e=>!Ns(e)).join(`
`),mu=20,hu=350,gu=2e3,_u=1e4,vu=8e3,yu=2e3,bu=5e5,xu=1e4,Su=.3,Cu=3e3,wu=3,Tu=typeof navigator<`u`&&/Mac|iPhone|iPad/.test(navigator.platform)?`Cmd`:`Ctrl`,Eu=`${Bc}
.tsd .tsd-settings { box-sizing: border-box; height: 100%; overflow: auto; padding: 8px 20px 12px; font-size: var(--fs-md); }
.tsd .tsd-settings > * { max-width: 680px; }
.tsd .tsd-settings h4 { margin: 0 0 4px; font-size: var(--fs-md); font-weight: 600; }
.tsd .tsd-settings p { margin: 0 0 8px; color: var(--text-dim); line-height: 1.45; }
.tsd .tsd-settings .row { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
.tsd .tsd-settings input { width: 110px; padding: 2px 6px; font: inherit; font-family: var(--font-mono); color: var(--text); background: var(--bg-1); border: 1px solid var(--border); border-radius: 2px; }
.tsd .tsd-settings input:focus { outline: 1px solid var(--teal); outline-offset: -1px; }
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
.tsd .tsd-test-passed, .tsd .tsd-list .tsd-i.tsd-test-passed { color: var(--ok); }
.tsd .tsd-test-failed { color: var(--danger); }
.tsd .tsd-test-none, .tsd .tsd-test-skipped, .tsd .tsd-list .tsd-i.tsd-test-none, .tsd .tsd-list .tsd-i.tsd-test-skipped { color: var(--text-faint); }
.${Ma} { cursor: pointer; font: normal normal normal 14px/18px codicon; text-align: center; color: var(--text-faint); }
.${Ma}::before { content: "\\eabc"; }
.${Ma}-passed { color: var(--ok); }
.${Ma}-passed::before { content: "\\eba4"; }
.${Ma}-failed { color: var(--danger); }
.${Ma}-failed::before { content: "\\ea87"; }
.${Ma}-skipped::before { content: "\\eabd"; }
.${Ma}-note { color: var(--danger); font-style: italic; opacity: 0.9; }
.tsd .tsd-list li.tsd-cost { align-items: center; }
.tsd .tsd-cost-graph { flex: 1 1 auto; min-width: 0; max-width: 480px; height: 36px; }
.tsd .tsd-cost-graph path { fill: var(--teal); fill-opacity: 0.35; stroke: var(--teal); stroke-width: 1px; vector-effect: non-scaling-stroke; }
.${_a} { text-decoration: underline dotted rgba(153, 162, 179, 0.55); text-underline-offset: 3px; }
${Xc}`;function Du(e,t){return e.owners.map(e=>e===a.AllPlayers?t(`all players`):e>=a.Force1&&e<=a.Force4?t(`Force {n}`,{n:e-a.Force1+1}):`P${e+1}`).join(`, `)}function Ou(e){let t=se(e.action.type)?.name??`Action ${e.action.type}`;return e.text===void 0?t:`${t} — ${e.text}`}var $=null;function ku(e){if(!$?.isOpen())return;let t=$.cursor(),n=$.mode===`panel`;$.close(),$=null,Au(e,{dock:n,file:t?.file,line:t?.line})}function Au(e,t={}){let n=e.api;if($?.isOpen()){let e=t.dock===void 0?null:t.dock?`panel`:`dialog`;if((!e||e===$.mode)&&!t.pick){$.reveal(t.file,t.line);return}let n=$.cursor(),r=$.mode;$.close(),$=null,t.file===void 0&&n&&(t={...t,file:n.file,line:n.line}),t.dock===void 0&&(t={...t,dock:r===`panel`})}if(!n.document.isOpen()){n.ui.toast({kind:`info`,title:n.i18n.t(`Open or create a map first.`)});return}let r=t.dock?`panel`:`dialog`,i=ju(e,t,r);if(r===`dialog`){let e=n.ui.dialog({title:`TrigScript`,size:`full`,tall:!0,flush:!0,buttons:[],keepOpenOnEscape:e=>e instanceof Node&&i.root.contains(e),mount(e,t){return e.append(i.root),i.attach(()=>t.close())}});$={mode:r,isOpen:()=>e.isOpen(),close:()=>e.close(),reveal:i.reveal,cursor:i.cursor}}else{let e=n.ui.panel({title:`TrigScript`,width:760,height:540,resizable:!0,flush:!0,mount(e,t){return e.append(i.root),i.attach(()=>t.close())}});$={mode:r,isOpen:()=>e.isOpen(),close:()=>e.close(),reveal:i.reveal,cursor:i.cursor}}}function ju(e,t,n){let r=e.api,i=r.ui.el,a=r.ui.widgets,o=(e,t)=>r.i18n.t(e,t);ya(o);let s=e.state(),c=s?.files??{"main.ts":ou},l=!s?.files,u=e.names(),d=null,f=null,p=null,m=!1,h=!1,g=!1,_=!1,v=[],y=null,b=null,x=null,S=!1,C=!1,w=[],T=!1,E=n===`panel`?`layout.panel`:`layout.dialog`,D=Vc({el:i,compact:n===`panel`,layout:{...n===`panel`?Ic:Fc,...r.storage.get(E,{})},onLayout:e=>{r.storage.set(E,e)},onTabSelect:e=>Ne(e),onTabClose:e=>Pe(e),t:o}),O=D.root;O.prepend(i(`style`,void 0,Eu));let k=D.editorHost,A=D.action({icon:`play`,title:o(`Play (F5): apply the script, build the map as Save would and start it in the game through Test Map`),run:()=>{Rt()}}),j=D.action({icon:`beaker`,title:o(`Simulate ({mod}+F5): run the script's triggers and programs for {frames} frames ({seconds} seconds of the game) in a built-in interpreter and list what happened`,{mod:Tu,frames:480,seconds:20}),run:()=>{Ht()}}),M=D.action({icon:`check`,title:o(`Apply ({mod}+Shift+B): run the script and write its triggers into the map now. Saving and testing the map do this by themselves; programs are built into the saved file, not into the trigger list`,{mod:Tu}),run:()=>{Lt()}}),N=D.action({icon:`target`,title:o(`Pick from map: click a location or a unit on the map to put its name at the cursor`),run:()=>{Wt()}});D.action(n===`dialog`?{icon:`multiple-windows`,title:o(`Beside the map: open the script as a panel, so the map stays in reach`),run:()=>Ut()}:{icon:`screen-full`,title:o(`In a window: open the script full-screen`),run:()=>Ut()});let P=D.action({icon:`ellipsis`,title:o(`More actions…`),run:()=>D.menu(P.element,[fn(`save`),null,...[`import`,`newFile`,`newFolder`,`importVideo`].map(fn),null,...[`runTests`,`runFailedTests`,`runTestsInGame`].map(fn),null,fn(`findEudError`),null,...[`problems`,`output`,`panel`,`explorer`,`testing`].map(fn),null,fn(`settings`),null,{label:o(`Command Palette…`),keys:`F1`,disabled:!m,run:()=>pn()}])}),F=i(`ul`,{className:`tsd-rows`});D.section({title:o(`Script`),actions:[{icon:`new-file`,title:o(`New file…: main.ts imports it with import { … } from "./name"`),run:()=>{qt()}},{icon:`new-folder`,title:o(`New folder…: a folder is there while a file is in it, so its first file is asked for next`),run:()=>{Yt()}},{icon:`device-camera-video`,title:o(`Import Video…: a video, a picture, a sound or a MIDI file as a file of the script`),run:()=>{Jt()}}]}).body.append(F);let ee=i(`ul`,{className:`tsd-rows`}),te=D.section({title:o(`Programs`)});te.body.append(ee),te.setHidden(!0);let I=D.view({id:`problems`,title:o(`Problems`)}),ne=i(`pre`,{className:`tsd-output`}),re=D.view({id:`output`,title:o(`Output`),onShow:()=>ke(!0),actions:[{icon:`clear-all`,title:o(`Clear the output`),run:()=>{De=[],ke()}}]}),L=D.view({id:`simulate`,title:o(`Simulate`)}),ie=D.view({id:`tests`,title:o(`Test Results`)}),ae=D.view({id:`settings`,title:o(`Settings`),onShow:()=>ce()}),oe=i(`ul`,{className:`tsd-rows`}),se=D.sidebarView({id:`testing`,title:o(`Testing`),icon:`beaker`,actions:[{icon:`run-all`,title:o(`Run all tests`),run:()=>{yt()}},{icon:`run-errors`,title:o(`Run the tests that failed`),run:()=>{bt()}},{icon:`target`,title:o(`Run all tests in the game (the lifted game of the scm-sim plugin): each gets a second mark`),run:()=>{ct()}},{icon:`filter`,title:o(`Show only the tests that fail`),run:()=>{be=!be,Xe()}}]});se.body.append(oe);let R=new el({t:o,el:i,shell:D,reveal:(e,t)=>{d&&(Ne(e),d.editor.revealLineInCenterIfOutsideViewport(t))},changed:()=>{d?.setDebug(R.marks()),Ea()},setStatus:(e,t,n)=>W(e,t,n)});function ce(){let t=r.document.isOpen(),n=e.settings(),a=e=>e.toLocaleString(`en-US`),s=e=>e*4>=1<<20?`${(e*4/(1<<20)).toFixed(e*4%(1<<20)?1:0)} MB`:`${Math.round(e*4/1024)} KB`,c=r=>{let s=n[r.key],c=i(`input`,{type:`number`,min:String(r.min),max:String(r.max),step:String(r.step),value:String(s),disabled:!t}),l=i(`button`,{type:`button`,disabled:!t||s===r.normal},o(`Default ({n})`,{n:a(r.normal)})),u=t=>{let n=r.fit(typeof t==`number`&&Number.isFinite(t)?t:r.normal);n!==e.settings()[r.key]&&(e.writeSettings({...e.settings(),[r.key]:n}),b=null,St()),ce()};return c.addEventListener(`change`,()=>u(c.value===``?r.normal:Number(c.value))),c.addEventListener(`keydown`,e=>{e.stopPropagation(),e.key===`Enter`&&c.blur()}),l.addEventListener(`click`,()=>u(r.normal)),i(`div`,{className:`row`},c,i(`span`,{className:`now`},r.said(s)),l)},l=()=>{let r=i(`input`,{type:`checkbox`,checked:n.testsGuardBuild,disabled:!t});return r.style.width=`auto`,r.addEventListener(`change`,()=>{e.writeSettings({...e.settings(),testsGuardBuild:r.checked}),ce()}),i(`label`,{className:`row`},r,i(`span`,{},o(`A failing test refuses the build`)))},u=y?.ok?Wi(y.ir):0;ae.body.replaceChildren(i(`div`,{className:`tsd-settings`},i(`h4`,{},o(`Memory for arrays that grow`)),i(`p`,{},o(`Arrays a program pushes to share one pool of cells; this is its size. A single array can reach between a quarter and a half of it. When the pool runs out, nothing more is pushed and the game says so once.`)),c({key:`heapCells`,min:Qe,max:$e,step:1024,normal:Ze,fit:tt,said:e=>o(`cells — {size} while the map is played`,{size:s(e<=65536?e*19:e)})}),i(`p`,{},o(`{min} to {max} cells. Up to {most}, a cell is 76 bytes while the map is played: four for texts, and 72 for the arrays' own cells, which a loop reads and writes in a few steps. Past that, arrays share the texts' four bytes and a read takes about three times as long. A larger pool does not slow the game and hardly grows the saved file. Kept in the map, so it builds the same on any computer.`,{min:a(Qe),max:a($e),most:a(et)})),i(`h4`,{},o(`Recursion depth`)),i(`p`,{},o(`How many calls deep a function that calls itself may go. Around each such call the function's variables are kept on a stack, which is only in the built map when some function calls itself. A call past the limit stops the program, and the game says where; Simulate stops at the same call.`)),c({key:`stackDepth`,min:16,max:rt,step:256,normal:nt,fit:at,said:e=>{if(!u)return o(`calls deep — no function of this script calls itself`);let t=u*e;return t>1048576?o(`calls deep — {frame} cells a call here, {size} while the map is played: more than the {max} a map may use, and it will not build`,{frame:u,size:s(t),max:s(it)}):o(`calls deep — {frame} cells a call here, {size} while the map is played`,{frame:u,size:s(t)})}}),i(`p`,{},o(`{min} to {max} calls. The limit costs nothing until it is reached, but each call deep keeps and brings back every variable of its function, so thousands of calls within one frame make the game stutter. Kept in the map, like the pool above.`,{min:a(16),max:a(rt)})),i(`h4`,{},o(`Tests`)),i(`p`,{},o(`The script's test() blocks run in the simulator after every compile that goes through. A failing test is a warning. With this on it also refuses the build: Save, Test Map and an export then say which test fails and write the map without the script applied again.`)),l()))}let le=D.statusItem(`left`),ue=D.statusItem(`left`),de=D.statusItem(`left`),fe=D.statusItem(`left`),pe=D.statusItem(`left`),me=D.statusItem(`left`),he=D.statusItem(`right`),ge=D.statusItem(`right`),_e=D.statusItem(`right`),ve=D.statusItem(`right`),z=ic,ye=null,be=!1,xe=!1,B=!1,Se=new Map,Ce=null,we=null,Te=null,Ee=null,V=[Q(t.file??`main.ts`)],De=[],H=null,Oe=0,ke=(e=!1)=>{if(De.length===0){re.body.replaceChildren(i(`div`,{className:`tsd-empty`},o(`What Apply, Play and the builds of the programs report is kept here.`)));return}let t=re.body.parentElement,n=e||!t||t.scrollHeight-t.scrollTop-t.clientHeight<24;ne.textContent=De.join(`
`),ne.parentElement!==re.body&&re.body.replaceChildren(ne),t&&n&&(t.scrollTop=t.scrollHeight)},U=(e,t=!0)=>{De.push(t?`[${new Date().toLocaleTimeString()}] ${e}`:e),De.length>gu&&(De=De.slice(-2e3)),ke()},Ae=null,je=null,W=(e,t,n)=>{C||(je!==null&&(clearTimeout(je),je=null),e===`busy`||e===`ok`?(Ae={kind:e,text:t},D.dismiss(`status`),e===`ok`&&(je=setTimeout(()=>{je=null,Ae=null,J()},_u))):(Ae=null,D.notify({key:`status`,kind:e===`error`?`error`:`info`,text:t,timeout:n??(e===`info`?vu:void 0)})),e!==`busy`&&U(t),J())},G=(e,t,n=1)=>{d&&(Ne(e),d.editor.revealLineInCenter(t),d.editor.setPosition({lineNumber:t,column:n}),d.editor.focus())},Me=e=>e?Object.keys(c).length>1?`${e.file}:${e.line}`:o(`Ln {line}`,{line:e.line}):`?`,Ne=e=>{if(!d)return;let t=Q(e);if(c[t]!==void 0){if(Tr(t)){(Er(t)?au:Dr(t)?Fl:Or(t)?Wl:iu)(r,o,t,c[t]);return}V.includes(t)||V.push(t),d.show(t),He(),d.editor.focus()}},Pe=e=>{if(!d||V.length<2)return;let t=V.indexOf(e);t<0||(V.splice(t,1),d.active()===e&&d.show(V[Math.min(t,V.length-1)]),He(),d.editor.focus())},Ie=`explorer.collapsed`,Le=new Set(r.storage.get(Ie,[])),Re=e=>{Le=e,r.storage.set(Ie,[...e])},K=null,ze=(e,t)=>{let n=()=>K!==null&&Ks(K)!==t&&K!==t&&!`${t}/`.startsWith(`${K}/`);e.addEventListener(`dragover`,t=>{n()&&(t.preventDefault(),t.stopPropagation(),e.classList.add(`tsd-drop`))}),e.addEventListener(`dragleave`,()=>e.classList.remove(`tsd-drop`)),e.addEventListener(`drop`,r=>{if(e.classList.remove(`tsd-drop`),!n()||K===null)return;r.preventDefault(),r.stopPropagation();let i=K.split(`/`).pop();Zt(K,t?`${t}/${i}`:i)})},Be=(e,t)=>{e.draggable=!0,e.addEventListener(`dragstart`,n=>{K=t,n.dataTransfer?.setData(`text/plain`,t),n.dataTransfer&&(n.dataTransfer.effectAllowed=`move`),e.classList.add(`tsd-dragged`)}),e.addEventListener(`dragend`,()=>{K=null,e.classList.remove(`tsd-dragged`)})};ze(F,``);let Ve=e=>!K&&!!e.dataTransfer&&[...e.dataTransfer.types].includes(`Files`);F.addEventListener(`dragover`,e=>{Ve(e)&&(e.preventDefault(),F.classList.add(`tsd-drop`))}),F.addEventListener(`dragleave`,()=>F.classList.remove(`tsd-drop`)),F.addEventListener(`drop`,e=>{if(F.classList.remove(`tsd-drop`),!Ve(e))return;e.preventDefault();let t=[...e.dataTransfer?.files??[]].find(e=>/^(video|image)\//.test(e.type)||/\.(mkv|webm|mp4|mov|gif)$/i.test(e.name)||kl(e)||Il(e));t&&Jt(t)});let He=()=>{let e=d?.active()??V[0]??`main.ts`,t=Object.keys(c),n=new Map;for(let e of v){let t=Q(e.file);n.set(t,(n.get(t)??0)+1)}V=V.filter(e=>c[e]!==void 0),V.includes(e)||V.push(e);let r=Xs(V);D.setTabs(V.map(e=>({id:e,label:r.get(e)?.label??e,about:r.get(e)?.folder,title:e,problems:n.get(e),closable:V.length>1})),e);let a=new Set(t.flatMap(e=>{let t=e.split(`/`).slice(0,-1);return t.map((e,n)=>t.slice(0,n+1).join(`/`))}));[...Le].some(e=>!a.has(e))&&Re(new Set([...Le].filter(e=>a.has(e))));let s=[],l=e=>`${20+e*12}px`,u=(r,a)=>{for(let d of r){if(d.kind===`folder`){let e=!Le.has(d.path),r=qs(t,d.path).reduce((e,t)=>e+(n.get(t)??0),0),c=()=>{let t=new Set(Le);e?t.add(d.path):t.delete(d.path),Re(t),He()},l=()=>[{label:o(`New File…`),run:()=>{qt(d.path)}},{label:o(`New Folder…`),run:()=>{Yt(d.path)}},null,{label:o(`Rename…`),run:()=>{$t(d.path)}},{label:o(`Remove…`),run:()=>{nn(d.path)}}],f=i(`li`,{className:`tsd-row tsd-folder`,title:d.path,role:`button`,ariaExpanded:String(e),onClick:c},D.icon(e?`chevron-down`:`chevron-right`),i(`span`,{className:r?`tsd-name tsd-problem`:`tsd-name`},d.name),i(`span`,{className:`tsd-row-actions`},D.iconButton({icon:`new-file`,title:o(`New file in {folder}…`,{folder:d.path}),run:()=>{qt(d.path)}}).element,D.iconButton({icon:`edit`,title:o(`Rename or move…`),run:()=>{$t(d.path)}}).element,D.iconButton({icon:`trash`,title:o(`Remove…`),run:()=>{nn(d.path)}}).element,r?i(`span`,{className:`tsd-count`},String(r)):void 0));f.style.paddingLeft=`${6+a*12}px`,f.addEventListener(`contextmenu`,e=>{e.preventDefault(),D.menu(f,l(),{x:e.clientX,y:e.clientY})}),Be(f,d.path),ze(f,d.path),s.push(f),e&&u(d.children,a+1);continue}let r=d.path,f=r===Xi,p=i(`li`,{className:r===e?`tsd-row tsd-active`:`tsd-row`,title:Tr(r)?`${r}\n${Nr(r,c[r])}`:r,onClick:()=>Ne(r)},Tr(r)?D.icon(Er(r)?`file-media`:Dr(r)?`unmute`:Or(r)?`music`:`device-camera-video`):i(`span`,{className:`tsd-ts`},`TS`),i(`span`,{className:n.has(r)?`tsd-name tsd-problem`:`tsd-name`},d.name),i(`span`,{className:`tsd-row-actions`},f?void 0:D.iconButton({icon:`edit`,title:o(`Rename or move…`),run:()=>{Qt(r)}}).element,f?void 0:D.iconButton({icon:`trash`,title:o(`Remove…`),run:()=>{tn(r)}}).element,n.has(r)?i(`span`,{className:`tsd-count`},String(n.get(r))):void 0));p.style.paddingLeft=l(a),f||(p.addEventListener(`contextmenu`,e=>{e.preventDefault(),D.menu(p,[{label:o(`Rename…`),run:()=>{Qt(r)}},{label:o(`Remove…`),run:()=>{tn(r)}}],{x:e.clientX,y:e.clientY})}),Be(p,r)),ze(p,Ks(r)),s.push(p)}};u(Gs(t),0),F.replaceChildren(...s)},Ue=e=>e.kind===`number`?e.bits?`u${e.bits}`:e.unsigned?`u32`:`number`:e.kind===`unit`?`Unit`:e.kind===`text`?`string`:`boolean`,We=()=>{let e=x?.programs??[];te.setHidden(e.length===0),ee.replaceChildren(...e.flatMap((e,t)=>[i(`li`,{className:`tsd-row`,title:o(`{name}, run as {owner}`,{name:e.name??o(`Program {n}`,{n:t+1}),owner:Du(e,o)}),onClick:()=>G(e.source.file,e.source.line)},D.icon(`symbol-method`),i(`span`,{className:`tsd-name`},e.name??o(`program {n}`,{n:t+1})),i(`span`,{className:`tsd-about`},`${Du(e,o)}${e.perPlayer?` · ${o(`per player`)}`:``}`)),...(x?.variables??[]).filter(e=>e.program===t).map(t=>i(`li`,{className:`tsd-row tsd-child`,title:`${t.name}: ${Ue(t)}${t.shared?o(`, one value shared by every player`):e.perPlayer?o(`, one per player`):``}`,onClick:()=>G(t.at.file,t.at.line,t.at.column)},D.icon(`symbol-variable`),i(`span`,{className:`tsd-name`},t.name),i(`span`,{className:`tsd-about`},`${Ue(t)}${t.shared?` · ${o(`shared`)}`:``}`)))]))},Ge=()=>{let e=y?.ownRefusal;if(!e||!y?.programs.length)return[];let t=/, line (\d+)(?: of (\S+))?$/.exec(e),n=t?e.slice(0,t.index):e,r=o(`The programs will not be built: TrigScript does not take this yet ({reason}). The map is saved without them.`,{reason:n});return[{file:t?.[2]??`main.ts`,line:t?Number(t[1]):1,message:r,source:`build`}]},Ke=()=>[...pc(z,o),...Ge()],qe=()=>{let e=Ke(),t=dt(),n=Ee?.answer;if(I.badge(v.length+e.length+t.length),v.length+e.length+t.length===0){I.body.replaceChildren(i(`div`,{className:`tsd-empty`},m?o(y?`No problems have been detected in the script.`:`Checking…`):``));return}I.body.replaceChildren(i(`ul`,{className:`tsd-list`},...v.map(e=>i(`li`,{title:e.message,onClick:()=>G(e.file,e.line,e.column)},D.icon(`error`),i(`span`,{className:`msg`},e.message.split(`
`)[0]),i(`span`,{className:`src`},e.source===`typescript`?o(`types`):e.source===`script`?o(`script`):o(`compiler`)),i(`span`,{className:`where`},o(`{file} [Ln {line}, Col {column}]`,{file:e.file,line:e.line,column:e.column})))),...n?t.map(e=>i(`li`,{title:ft(n,e),onClick:()=>G(e.file,e.line)},D.icon(`error`),i(`span`,{className:`msg`},`EUD ERROR ${n.code}: ${n.place}`),i(`span`,{className:`src`},o(`game`)),i(`span`,{className:`where`},o(`{file} [Ln {line}]`,{file:e.file,line:e.line})))):[],...e.map(e=>i(`li`,{className:`tsd-warning`,title:e.message,onClick:()=>G(e.file,e.line)},D.icon(`warning`),i(`span`,{className:`msg`},e.message),i(`span`,{className:`src`},e.source===`build`?o(`build`):o(`tests`)),i(`span`,{className:`where`},o(`{file} [Ln {line}]`,{file:e.file,line:e.line}))))))},Je={none:`circle-outline`,passed:`pass`,failed:`error`,skipped:`circle-slash`,running:`loading`},Ye=e=>{let t=D.icon(Je[e]);return t.classList.add(`tsd-test-${e}`),e===`running`&&t.classList.add(`tsd-spin`),t},Xe=()=>{let e=oc(z);se.badge(e.failed||null,`error`);let t=vc(e,o);if(ue.set(m&&t?{icon:B?`loading`:t.failed?`error`:`beaker`,busy:B,text:t.text,kind:t.failed?`error`:void 0,title:o(xe?`{n, plural, one {# test} other {# tests}}; running them all takes a while, so only the open file's run after a change. Click for the Testing view`:`{n, plural, one {# test} other {# tests}}. Click for the Testing view`,{n:e.total}),onClick:()=>se.show()}:null),z.list.length===0){oe.replaceChildren(i(`li`,{className:`tsd-empty`},o(`The script has no tests yet. A test is a test(name, (sim) => { … }) imported from "trigscript", in any file or in one named *.test.ts: it runs here, in the simulator, after every change that compiles.`)));return}let n=[],r=e=>e.kind===`test`?lc(z,e.info)===`failed`:e.children.some(r),a=(e,t)=>{for(let s of e){if(be&&!r(s))continue;let e=hc(s),c=B?`running`:s.kind===`test`||s.kind===`suite`?lc(z,s.info):sc(oc(z,t=>e.some(e=>t.id===e||t.id.startsWith(`${e} > `)))),l=s.kind===`folder`||s.kind===`file`?s.name:s.info.name,u=s.kind===`test`?z.results.get(s.info.id):void 0,d=i(`li`,{className:s.kind===`test`&&s.info.id===ye?`tsd-row tsd-active`:`tsd-row`,title:u?.message??l,onClick:()=>{if(s.kind!==`folder`){if(s.kind===`file`){Ne(s.path);return}s.kind===`test`&&(ye=s.info.id,D.showPanel(`tests`),vt(),Xe()),G(s.info.file,s.info.line)}}},Ye(c),s.kind===`test`&&Se.has(s.info.id)?ot(Se.get(s.info.id),u):void 0,i(`span`,{className:c===`failed`?`tsd-name tsd-problem`:`tsd-name`},l),u&&u.status!==`skipped`?i(`span`,{className:`tsd-about`},o(`{ms} ms`,{ms:u.ms})):void 0,i(`span`,{className:`tsd-row-actions`},D.iconButton({icon:`play`,title:s.kind===`test`?o(`Run this test`):o(`Run these tests`),run:()=>{yt(s.kind===`file`?{files:[s.path]}:{ids:e})}}).element,s.kind===`test`?D.iconButton({icon:`debug-alt`,title:o(`Debug this test in the game: run it once with everything it did written down, then walk it forwards and back`),run:()=>{lt(s.info.id)}}).element:void 0));d.style.paddingLeft=`${10+t*12}px`,n.push(d),a(s.children,t+1)}};a(mc(z.list),0),n.length===0&&n.push(i(`li`,{className:`tsd-empty`},o(`No test fails.`))),oe.replaceChildren(...n)},ot=(e,t)=>{let n=e.status===`failed`?`failed`:e.status===`passed`?`passed`:`skipped`,r=t&&t.status!==`skipped`&&e.status!==`skipped`&&t.status!==e.status;return i(`span`,{className:r?`tsd-game tsd-game-differs`:`tsd-game`,title:r?o(`In the game: {status}. The simulator and the game disagree: the game is right, so the simulator is wrong here (or the test leans on something it does differently).`,{status:e.status===`failed`?e.message??o(`failed`):o(`passed`)}):e.status===`failed`?o(`In the game: {message}`,{message:e.message??o(`failed`)}):e.status===`skipped`?e.message??o(`In the game: not run`):o(`In the game: passed`)},Ye(n))},st=async(t,n)=>{let i=e.engine();if(!i?.present||!i.test||n===`debug`&&!i.debug)return W(`error`,o(n===`debug`?`Debugging in the game needs the scm-sim plugin (0.11 or newer) on scmjs.dev: install, update or turn it on under Plugins ▸ Manage Plugins….`:`Running tests in the game needs the scm-sim plugin (0.11 or newer) on scmjs.dev: install or turn it on under Plugins ▸ Manage Plugins….`)),null;let a=e=>o(n===`debug`?`Not debugged in the game: {message}`:n===`trace`?`Not looked up in the game: {message}`:`Not run in the game: {message}`,{message:e}),s=await i.status();if(!s.available)return W(`error`,a(s.reason??o(`the engine cannot run a game now`))),null;if(!s.tests)return W(`error`,o(`Not run in the game: the engine's page is from before tests in the game. Reload the editor and try again.`)),null;if(n===`debug`&&!s.debug)return W(`error`,o(`Not debugged: the engine's page is from before the debugger. Reload the editor and try again.`)),null;if(!await Lt()||C)return null;let l=await Ft({world:e.world(),...t});if(!l||C)return null;if(!l.compiled.ok)return W(`error`,o(n===`trace`?`Not looked up: {n, plural, one {# problem} other {# problems}} in the script.`:`Tests not run: {n, plural, one {# problem} other {# problems}} in the script.`,{n:l.compiled.diagnostics.length}),vu),D.showPanel(`problems`),null;if(!l.compiled.modules&&n!==`trace`)return W(`info`,o(`The script has no tests.`)),null;if(!l.compiled.ir.length)return W(`info`,o(n===`trace`?`The script has no program, so nothing of it is built into the map and no line of it can touch the game's memory: an EUD error came from the map's other triggers.`:`Tests run in the game only for a script with a program: without one, nothing of the script is built into the map.`)),null;let u=e.names()?.names;if(!u)return W(`error`,o(`No map is open.`)),null;W(`busy`,o(`Building the map…`));let d={...c},f=[],p=e.onBuild(e=>{e.kind===`log`?f.push(e.line):e.kind===`done`&&!f.length&&f.push(...e.log.split(`
`))}),m=await e.withVariableMap(()=>r.document.export({format:`scx`})).finally(()=>p.dispose());if(!m||C)return m||W(`error`,o(`No map is open.`)),null;let h=Ps(f),g=zs(f);return we??=fetch(Ba(e.dist())).then(e=>{if(!e.ok)throw Error(`gametest.js: ${e.status}`);return e.text()}),{engine:i,status:s,a:l,names:u,variables:h,triggers:g,module:await we.catch(e=>{throw we=null,e}),bytes:new Uint8Array(await m.arrayBuffer()),built:d}},ct=async(e={})=>{if(!(!d||B||g||S||!m)){B=!0,Xe();try{let t=await st(e,`tests`);if(!t||C)return;let{engine:n,status:r,a:i,names:a,variables:s,triggers:l,module:u,bytes:d}=t;W(`busy`,o(`Running the tests in the game…`));let f=await n.test(d,u,{modules:i.compiled.modules,names:a,files:e.files,ids:e.ids,variables:s,triggers:l});if(C)return;if(f.error){W(`error`,o(`Not run in the game: {message}`,{message:f.error}));return}let p=new Map;for(let t of z.list){if(t.kind!==`test`||!t.players||e.files&&!e.files.includes(t.file)||e.ids&&!e.ids.some(e=>t.id===e||t.id.startsWith(`${e} > `)))continue;let n=t.players.join(`,`),r=p.get(n)??{players:t.players,ids:[]};r.ids.push(t.id),p.set(n,r)}let m=[];if(p.size&&(!n.testCopies||!r.copies)){let e=o(`Not run: a test of several players runs a copy of the game for each, which needs memory shared between them. This browser does not allow that on the engine's page (Chrome and Edge from version 137 do).`);for(let t of p.values())for(let n of t.ids)m.push({id:n,status:`skipped`,message:e,printed:[],events:[],frames:0,ms:0})}else for(let e of p.values()){W(`busy`,o(`Running a test of {n} players in the game: a copy of the game for each…`,{n:e.players.length}));let t=await n.testCopies(d,u,{modules:i.compiled.modules,names:a,ids:e.ids,variables:s,triggers:l},{players:e.players,triggers:l});if(C)return;f.results.push(...Bs(e.ids,t))}let h=f.results.filter(e=>e.status!==`skipped`),g=new Set(h.map(e=>e.id));Se=new Map([...Se].filter(([e])=>!g.has(e)&&z.list.some(t=>t.id===e)));for(let e of h)Se.set(e.id,e);for(let e of m)Se.set(e.id,e);Ce={...c},Ea();let _=h.filter(e=>e.status===`failed`),v=h.filter(e=>{let t=z.results.get(e.id);return t&&t.status!==`skipped`&&t.status!==e.status});_.length&&(ye=_[0].id,D.showPanel(`tests`));let y=o(`In the game: {passed} of {n, plural, one {# test} other {# tests}} passed.`,{passed:h.length-_.length,n:h.length}),b=m.length?`${y} ${o(`{n, plural, one {# test of several players was} other {# tests of several players were}} not run: this browser cannot run copies of the game.`,{n:m.length})}`:y;W(_.length||v.length?`error`:m.length?`info`:`ok`,v.length?`${b} ${o(`The simulator disagrees on {n, plural, one {# test} other {# tests}}.`,{n:v.length})}`:b,vu)}catch(e){W(`error`,o(`Not run in the game: {message}`,{message:e.message}))}finally{B=!1,J()}}},lt=async e=>{if(!d||B||g||S||!m)return;let t=z.list.find(t=>t.id===e);if(!t||t.kind!==`test`){W(`info`,o(`There is no test at the cursor.`));return}if(t.players){W(`info`,o(`“{test}” is a test of several players: the debugger runs one game, and a test of several players runs as a copy of the game for each. Not yet.`,{test:t.name}));return}B=!0,Xe();try{let n=await st({ids:[e]},`debug`);if(!n||C)return;let{engine:r,a:i,names:a,variables:s,triggers:l,module:u,bytes:d,built:f}=n;W(`busy`,o(`Running “{test}” in the game, writing down everything it does…`,{test:t.name}));let p=await r.debug(d,u,{modules:i.compiled.modules,names:a,variables:s,triggers:l,test:e});if(C){p.close();return}let m=p.recording,h=null;if(r.view)try{let e=R.gameHost(),t=r.view(e);if(typeof t.debug==`function`&&typeof t.show==`function`){let n=await t.debug(d).then(()=>null,e=>e.message);n?(t.dispose(),h=n):(t.onError?.(e=>W(`error`,o(`No picture of the game: {message}`,{message:e}))),h={element:e,show:e=>t.show(e),dispose:()=>t.dispose()})}else t.dispose(),h=o(`The scm-sim plugin's view is from before the debugger: update the plugin for a picture of the game.`)}catch(e){h=e.message}R.start({recording:m,variables:s,pictures:p,view:h,files:f}),R.setFiles(c);let g=m.result;W(g.status===`failed`?`error`:`ok`,g.status===`failed`?o(`Debugging “{test}”: it failed in the game at frame {frame}. The debugger stands there; step back to see how it came to that.`,{test:t.name,frame:m.first+m.frames-1}):o(`Debugging “{test}”: {frames, plural, one {# frame} other {# frames}} in the game, recorded in {ms} ms.`,{test:t.name,frames:m.frames,ms:m.ms}),vu)}catch(e){W(`error`,o(`Not debugged in the game: {message}`,{message:e.message}))}finally{B=!1,J()}},q=()=>{let e=d?.cursor(),t=e?z.list.filter(t=>t.kind===`test`&&t.file===Q(e.file)&&t.line<=e.line).sort((e,t)=>t.line-e.line)[0]:void 0;if(!t){W(`info`,o(`There is no test at the cursor.`));return}lt(t.id)},ut=()=>{if(!Ce)return[];let e=Ce;return Us([...Se.values()].flatMap(e=>e.cost?[{id:e.id,cost:e.cost}]:[])).filter(t=>(t.ms?t.ms.peak>=Su:t.peak>=xu)&&e[Q(t.file)]===c[Q(t.file)]).map(e=>e.ms?{file:e.file,line:e.line,label:o(`{ms} ms a frame`,{ms:Hs(e.ms.peak)}),note:o(`In the game, this line took {ms} ms of Remastered's time in one frame at the most ({n} conditions and actions): frame {frame} of the test “{test}”, which it ran in for {frames, plural, one {# frame} other {# frames}}. On a fast computer Remastered ran {smooth} ms of triggers a frame with no flicker seen, and slows past {most} ms; a slower computer gets there sooner. This is {share} of the {smooth} ms.`,{ms:Hs(e.ms.peak),n:e.peak.toLocaleString(),frame:e.ms.peakFrame,test:Cc({id:e.test}),frames:e.frames,smooth:15,most:Math.round(Ws),share:gt(e.ms.peak)})}:{file:e.file,line:e.line,label:o(`{n} a frame`,{n:Vs(e.peak)}),note:o(`In the game, this line ran {n} conditions and actions in one frame at the most: frame {frame} of the test “{test}”, which it ran in for {frames, plural, one {# frame} other {# frames}}. On a fast computer Remastered ran 500 thousand a frame with no visible effect; its screen flickers from a million and the game slows at 5 million. This is {share} of the 500 thousand.`,{n:e.peak.toLocaleString(),frame:e.peakFrame,test:Cc({id:e.test}),frames:e.frames,share:ht(e.peak)})})},dt=()=>{if(!Ee)return[];let e=Ee.files;return Ee.answer.lines.filter(t=>e[Q(t.file)]===c[Q(t.file)])},ft=(e,t)=>{let n=t.read&&t.write?o(`reads and writes`):t.write?o(`writes`):o(`reads`),r=t.write?e.write:e.read,i=o(r===`ends`?`Remastered ends the game on this.`:r===`ignored`?`Remastered does nothing with this.`:r===`allowed`?`Remastered was seen to allow this, so the game that ended did something else to it.`:`This has not been seen in Remastered.`);return t.match===`exact`?o(`In the game, this line {did} {place} ({times, plural, one {# time} other {# times}}). {said}`,{did:n,place:e.place,times:t.times,said:i}):o(`In the game, this line {did} the same field of another unit ({times, plural, one {# time} other {# times}}): a unit sits elsewhere in the table from one game to the next. {said}`,{did:n,times:t.times,said:i})},pt=()=>{let e=Ee?.answer;return e?dt().map(t=>({file:t.file,line:t.line,label:`EUD ERROR ${e.code}`,note:ft(e,t)})):[]},mt=async()=>{if(!d||B||g||S||!m)return;let t=await r.ui.prompt(o(`The code Remastered showed when the game ended (EUD ERROR: 0x…):`),{title:`TrigScript`,value:``,placeholder:`EUD ERROR: 0xFFA632E3`});if(t===null||C)return;let n=bo(t);if(n===null){W(`error`,o(`“{text}” is not an EUD error code: Remastered shows one as EUD ERROR: 0x and eight digits.`,{text:t.trim()}));return}B=!0,Xe();try{let t=await st({},`trace`);if(!t||C)return;let{engine:r,a:i,names:a,variables:s,triggers:c,module:l,bytes:u,built:d}=t;if(!c){W(`error`,o(`Not looked up: the build did not say where its triggers are. Save once more.`));return}W(`busy`,o(`Playing the map in the game, writing down what each line reads and writes…`)),Te??=fetch(Va(e.dist())).then(e=>{if(!e.ok)throw Error(`allowlist.json: ${e.status}`);return e.json()});let[f,p]=await Promise.all([r.test(u,l,{modules:i.compiled.modules??[],names:a,variables:s,triggers:c,trace:!0,play:Cu}),Te.catch(()=>{Te=null})]);if(C)return;if(f.error){W(`error`,o(`Not looked up in the game: {message}`,{message:f.error}));return}if(!f.trace){W(`error`,o(`Not looked up in the game: {message}`,{message:f.traceError??o(`the engine's page sent back no trace`)}));return}let m=Ao(n,f.trace.rows,p);Ee={files:d,answer:m},U(o(`EUD ERROR {code}: {place}, at 0x{address}.`,{code:m.code,place:m.place,address:m.address.toString(16)}));for(let e of m.lines)U(`  ${e.file}:${e.line} — ${ft(m,e)}`,!1);let h=f.results.filter(e=>e.status!==`skipped`).length,g=m.lines.slice(0,3).map(e=>`${e.file}:${e.line}`).join(`, `)+(m.lines.length>3?`…`:``),_=m.lines.some(e=>e.match===`exact`),v=o(`EUD ERROR {code} is {place}.`,{code:m.code,place:m.place}),y=m.lines.length?o(_?`{n, plural, one {# line touched it} other {# lines touched it}} in the game: {where}.`:`No line touched that very unit, but {n, plural, one {# line touches} other {# lines touch}} the same field of other units, and a unit sits elsewhere in the table from one game to the next: {where}.`,{n:m.lines.length,where:g}):m.unlined.exact+m.unlined.field?o(`No line of the script touched it: the build's own triggers did ({n, plural, one {# time} other {# times}}).`,{n:m.unlined.exact+m.unlined.field}):h?o(`Nothing touched it in {frames} frames of the map played with nobody at it, nor in {tests, plural, one {# test} other {# tests}}: the line that did is one this run did not reach. A test that gets there will find it.`,{frames:Cu.toLocaleString(),tests:h}):o(`Nothing touched it in {frames} frames of the map played with nobody at it: the line that did is one this run did not reach. A test that gets there will find it.`,{frames:Cu.toLocaleString()});W(m.lines.length?`error`:`info`,`${v} ${y}`);let b=m.lines[0];b&&G(b.file,b.line),Ea()}catch(e){W(`error`,o(`Not looked up in the game: {message}`,{message:e.message}))}finally{B=!1,J()}},ht=e=>`${(e/bu*100).toFixed(+(e<bu/10))}%`,gt=e=>`${(e/15*100).toFixed(+(e<15/10))}%`,_t=e=>{let t=e.ms?.perFrame??e.perFrame,n=e.ms?.peak??e.peak,r=`http://www.w3.org/2000/svg`,i=Math.max(t.length,2),a=e.ms?Math.max(n,.001):Math.max(n,1),s=document.createElementNS(r,`svg`);s.setAttribute(`class`,`tsd-cost-graph`),s.setAttribute(`viewBox`,`0 0 ${i-1} 100`),s.setAttribute(`preserveAspectRatio`,`none`);let c=t.map((e,t)=>`${t},${(100-e/a*96).toFixed(2)}`),l=document.createElementNS(r,`path`);l.setAttribute(`d`,`M0,100 L${c.join(` L`)} L${t.length-1},100 Z`),s.append(l);let u=document.createElementNS(r,`title`);return u.textContent=e.ms?o(`Remastered's time a frame, frame {from} to {to}: {ms} ms at the most, at frame {frame}`,{from:e.from,to:e.from+t.length-1,ms:Hs(e.ms.peak),frame:e.ms.peakFrame}):o(`Conditions and actions a frame, frame {from} to {to}: {peak} at the most, at frame {frame}`,{from:e.from,to:e.from+e.perFrame.length-1,peak:e.peak.toLocaleString(),frame:e.peakFrame}),s.append(u),s},vt=()=>{let e=z.list.filter(e=>e.kind===`test`&&z.results.get(e.id)?.status===`failed`);ie.badge(e.length);let t=z.list.find(e=>e.id===ye)??e[0]??z.list.find(e=>e.kind===`test`&&z.results.has(e.id)),n=t?z.results.get(t.id):void 0;if(!t||!n){ie.body.replaceChildren(i(`div`,{className:`tsd-empty`},z.list.length?o(`No test has run yet: they run after a change that compiles, or from the Testing view.`):o(`The script has no tests.`)));return}let r=i(`ul`,{className:`tsd-list`}),a=n.at??{file:t.file,line:t.line};r.append(i(`li`,{title:o(`Go to the test`),onClick:()=>G(t.file,t.line)},Ye(n.status===`failed`?`failed`:n.status===`passed`?`passed`:`skipped`),i(`span`,{className:`msg`},Cc(t)),i(`span`,{className:`src`},n.status===`skipped`?o(`skipped`):o(`{frames, plural, one {# frame} other {# frames}} · {ms} ms`,{frames:n.frames,ms:n.ms})),i(`span`,{className:`where`},Me({file:t.file,line:t.line})))),n.status===`failed`&&(r.append(i(`li`,{className:`tsd-fault`,title:o(`Go to where it failed`),onClick:()=>G(a.file,a.line,a.column??1)},i(`span`,{className:`frame`},o(`failed`)),i(`span`,{className:`msg`},n.message??o(`failed`)),i(`span`,{className:`where`},Me({file:a.file,line:a.line})))),n.expected!==void 0&&r.append(i(`li`,{className:`tsd-plain`},i(`span`,{className:`frame`},o(`expected`)),i(`span`,{className:`msg`},n.expected))),n.actual!==void 0&&r.append(i(`li`,{className:`tsd-plain`},i(`span`,{className:`frame`},o(`got`)),i(`span`,{className:`msg`},n.actual))));let s=Se.get(t.id);if(s&&s.status!==`skipped`){let e=s.at??{file:t.file,line:t.line};r.append(i(`li`,{className:s.status===`failed`?`tsd-fault`:`tsd-plain`,title:o(`Go to where it failed in the game`),onClick:()=>G(e.file,e.line,e.column??1)},i(`span`,{className:`frame`},o(`in the game`)),i(`span`,{className:`msg`},s.status===`failed`?s.message??o(`failed`):o(`passed`)),i(`span`,{className:`where`},s.status===`failed`?Me({file:e.file,line:e.line}):o(`{frames, plural, one {# frame} other {# frames}} · {ms} ms`,{frames:s.frames,ms:s.ms})))),s.status===`failed`&&s.actual!==void 0&&r.append(i(`li`,{className:`tsd-plain`},i(`span`,{className:`frame`},o(`got`)),i(`span`,{className:`msg`},s.actual)));let n=s.cost;if(n){let e=n.perFrame.filter(e=>e>0),t=e.length?Math.round(e.reduce((e,t)=>e+t,0)/e.length):0,a=n.other.slice(3),s=a.length?Math.round(a.reduce((e,t)=>e+t,0)/a.length):0;if(n.ms){let e=n.ms.perFrame.filter(e=>e>0),a=e.length?e.reduce((e,t)=>e+t,0)/e.length:0,s=n.ms.other.slice(3),c=s.length?s.reduce((e,t)=>e+t,0)/s.length:0;r.append(i(`li`,{className:`tsd-plain`,title:o(`Counted in the lifted game and weighed by what Remastered was measured spending on each trigger, condition and action on a fast computer (Ryzen 9 7900X): the script's own triggers and the variables they go through, {average} conditions and actions a frame on average and {peak} at the most. The map's other triggers are apart: {ms} ms a frame. Remastered slows past {most} ms of triggers a frame there, and a slower computer sooner.`,{average:t.toLocaleString(),peak:n.peak.toLocaleString(),ms:Hs(c),most:Math.round(Ws)})},i(`span`,{className:`frame`},o(`cost`)),i(`span`,{className:`msg`},o(`{average} ms a frame on average, {peak} ms at the most (frame {frame}): {share} of the {smooth} ms of triggers a frame Remastered ran with no flicker seen`,{average:Hs(a),peak:Hs(n.ms.peak),frame:n.ms.peakFrame,share:gt(n.ms.peak),smooth:15}))))}else r.append(i(`li`,{className:`tsd-plain`,title:o(`Counted in the lifted game: the script's own triggers and the variables they go through. The map's other triggers are apart: {n} a frame.`,{n:s.toLocaleString()})},i(`span`,{className:`frame`},o(`cost`)),i(`span`,{className:`msg`},o(`{average} conditions and actions a frame on average, {peak} at the most (frame {frame}): {share} of the 500 thousand a frame Remastered has run with no visible effect`,{average:t.toLocaleString(),peak:n.peak.toLocaleString(),frame:n.peakFrame,share:ht(n.peak)}))));n.perFrame.length>1&&r.append(i(`li`,{className:`tsd-plain tsd-cost`},i(`span`,{className:`frame`}),_t(n)));for(let e of n.lines.slice(0,wu))r.append(i(`li`,{title:o(`Go to the line`),onClick:()=>G(e.file,e.line)},i(`span`,{className:`frame`}),i(`span`,{className:`msg note`},e.ms?o(`{ms} ms a frame at the most (frame {frame}), in {frames, plural, one {# frame} other {# frames}}`,{ms:Hs(e.ms.peak),frame:e.ms.peakFrame,frames:e.frames}):o(`{peak} a frame at the most (frame {frame}), in {frames, plural, one {# frame} other {# frames}}`,{peak:e.peak.toLocaleString(),frame:e.peakFrame,frames:e.frames})),i(`span`,{className:`where`},Me({file:e.file,line:e.line}))))}}let c=[];for(let e of n.printed){let t=c[c.length-1];t?.line===e?t.times++:c.push({line:e,times:1})}for(let{line:e,times:t}of c)r.append(i(`li`,{className:`tsd-plain`},i(`span`,{className:`frame`},o(`printed`)),i(`span`,{className:`msg`},e),t>1?i(`span`,{className:`src`},`×${t}`):void 0));let l=new Set(n.events.map(e=>e.player)).size>1,u=_c(n.events);for(let e of u.slice(0,fu))r.append(i(`li`,{onClick:()=>{e.file&&e.line&&G(e.file,e.line)}},i(`span`,{className:`frame`},o(`frame {n}`,{n:e.frame})),i(`span`,{className:`msg note`},`${l?`${gc(e.players)} · `:``}${e.text}`),i(`span`,{className:`where`},e.file&&e.line?Me({file:e.file,line:e.line}):``)));u.length>fu&&r.append(i(`li`,{className:`tsd-plain`},i(`span`,{className:`frame`},`…`),i(`span`,{className:`msg`},o(`and {n} more`,{n:u.length-fu})))),ie.body.replaceChildren(r)},yt=async(t={})=>{if(!(!d||B)){B=!0,Xe();try{let n=await Ft({world:e.world(),...t});if(!n||C)return;if(!n.compiled.ok){W(`error`,o(`Tests not run: {n, plural, one {# problem} other {# problems}} in the script.`,{n:n.compiled.diagnostics.length}),vu),D.showPanel(`problems`);return}let r=n.compiled.tests?.results.filter(e=>e.status!==`skipped`)??[],i=r.filter(e=>e.status===`failed`);if(r.length===0){W(`info`,z.list.length?o(`No test ran.`):o(`The script has no tests.`));return}i.length&&(ye=i[0].id,D.showPanel(`tests`)),W(i.length?`error`:`ok`,i.length?o(`{failed} of {n, plural, one {# test} other {# tests}} failed: {name} — {message}`,{failed:i.length,n:r.length,name:Cc(i[0]),message:i[0].message??o(`failed`)}):o(`{n, plural, one {# test} other {# tests}} passed.`,{n:r.length}),vu)}finally{B=!1,J()}}},bt=()=>{let e=z.list.filter(e=>e.kind===`test`&&z.results.get(e.id)?.status===`failed`).map(e=>e.id);return e.length===0?(W(`info`,o(`No test has failed.`)),Promise.resolve()):yt({ids:e})},xt=()=>{let e=d?.cursor(),t=e?z.list.filter(t=>t.file===Q(e.file)&&t.line<=e.line).sort((e,t)=>t.line-e.line)[0]:void 0;return t?yt({ids:[t.id]}):(W(`info`,o(`There is no test at the cursor.`)),Promise.resolve())},St=()=>{if(!b){L.body.replaceChildren(i(`div`,{className:`tsd-empty`},o(`Simulate ({mod}+F5) runs the script's first {seconds} seconds in a built-in interpreter and lists what happened. A change to the script clears the list.`,{mod:Tu,seconds:20})));return}let{sim:e,programs:t,result:n}=b,r=i(`ul`,{className:`tsd-list`});r.append(i(`li`,{className:`tsd-plain`},i(`span`,{className:`msg note`},o(`{frames} frames ({seconds} s) for {players}, from the map's placed units. Units are made, given, moved, killed and counted, but nothing walks or fights; scores and the countdown read 0; wait takes no time.`,{frames:480,seconds:20,players:e.game.players.slots.map(e=>`P${e+1}`).join(`, `)}))));let a=new Map;for(let e of t?.faults??[]){let t=`${e.at.file}:${e.at.line}:${e.at.column}:${e.message.replace(/\d+/g,`#`)}`,n=a.get(t);n?n.times++:a.set(t,{first:e,times:1})}for(let{first:e,times:t}of[...a.values()].slice(0,mu))r.append(i(`li`,{className:`tsd-fault`,title:e.message,onClick:()=>G(e.at.file,e.at.line,e.at.column)},i(`span`,{className:`frame`},o(`frame {n}`,{n:e.frame})),D.icon(`error`),i(`span`,{className:`msg`},t>1?o(`{message} (and {n, plural, one {# more time} other {# more times}} at this line)`,{message:e.message,n:t-1}):e.message),i(`span`,{className:`where`},Me({file:e.at.file,line:e.at.line}))));a.size>mu&&r.append(i(`li`,{className:`tsd-plain`},i(`span`,{className:`frame`},`…`),i(`span`,{className:`msg`},o(`and {n} more lines with a fault`,{n:a.size-mu}))));let s=e.game.players.slots.length>1,c=_c([...e.events.map((e,t)=>{let r=n.sources[e.trigger];return{frame:e.cycle,order:t,player:e.player,text:Ou(e),file:r?.file,line:r?.line,column:1,title:o(`Trigger #{n}`,{n:e.trigger+1})}}),...(t?.events??[]).map((t,n)=>({frame:t.frame,order:e.events.length+n,player:t.player,text:Ou(t),file:t.at.file,line:t.at.line,column:t.at.column,title:o(`Program {n}`,{n:t.program+1})}))].sort((e,t)=>e.frame-t.frame||e.order-t.order)).map(e=>({line:()=>i(`li`,{title:e.title,onClick:()=>{e.file&&e.line&&G(e.file,e.line,e.column)}},i(`span`,{className:`frame`},o(`frame {n}`,{n:e.frame})),i(`span`,{className:`msg`},`${s?`${gc(e.players)} · `:``}${e.text}`),i(`span`,{className:`where`},e.file&&e.line?Me({file:e.file,line:e.line}):`?`))}));c.length===0&&r.append(i(`li`,{className:`tsd-plain`},i(`span`,{className:`frame`},`—`),i(`span`,{className:`msg`},o(`No actions ran in {frames} frames.`,{frames:480}))));for(let e of c.slice(0,fu))r.append(e.line());c.length>fu&&r.append(i(`li`,{className:`tsd-plain`},i(`span`,{className:`frame`},`…`),i(`span`,{className:`msg`},o(`and {n} more actions`,{n:c.length-fu}))));let l=new Set;for(let e of n.variables){if(l.has(e.name))continue;l.add(e.name);let n=e=>e===void 0?`?`:typeof e==`boolean`?e?`true`:`false`:String(e),a=t?.runs.filter(t=>t.index===e.program)??[],s=a.length>1&&!e.shared?a.map(t=>`P${t.player+1} ${n(t.value(e.name))}`).join(` · `):n(t?.value(e.name,e.program));r.append(i(`li`,{title:o(`The variable's value when the run ended`),onClick:()=>G(e.at.file,e.at.line,e.at.column)},i(`span`,{className:`frame`},o(`after`)),i(`span`,{className:`msg`},`${e.name} = ${s}`),i(`span`,{className:`where`},Ue(e))))}L.body.replaceChildren(r)},Ct=``,wt=(t=!1)=>{let n=e.state();if(!n?.stale){Ct=``,D.dismiss(`stale`);return}let r=n.edited??null,i=JSON.stringify([r,T]);if(!t&&i===Ct)return;if(Ct=i,!r){D.notify({key:`stale`,kind:`warn`,text:o(`The script's triggers were edited or removed outside the script. They stay as hand-made triggers; the next Apply appends a fresh block. Saving the map does not apply the script until this is settled.`)});return}let a=o(`The script's triggers were edited outside the script: {unchanged, plural, one {# trigger is} other {# triggers are}} still the script's, {changed, plural, one {# trigger was} other {# triggers were}} changed.`,{unchanged:r.unchanged,changed:r.changed}),s=T?o(`The next Apply leaves them all as hand-made triggers and appends a fresh block.`):o(`The next Apply replaces the {unchanged} and keeps the {changed, plural, one {# edited one} other {# edited ones}} as hand-made triggers right after the new block.`,{unchanged:r.unchanged,changed:r.changed});D.notify({key:`stale`,kind:`warn`,text:`${a} ${s}`,actions:[{label:o(T?`Replace instead`:`Append instead`),keep:!0,run:()=>{T=!T,J()}},{label:o(`Apply`),primary:!0,run:()=>{Lt()}}]})},Tt=``,Et=()=>{let t=e.libraryStatus().filter(e=>e.update);if(t.length===0){Tt=``,D.dismiss(`libraries`);return}let n=JSON.stringify(t);if(n===Tt)return;Tt=n;let r=t.map(e=>o(`{label} {version} (installed: {provided})`,{label:e.label,version:e.version||`?`,provided:e.provided||`?`})).join(`, `);D.notify({key:`libraries`,kind:`info`,text:o(`The map builds with its own copy of {n, plural, one {a library} other {# libraries}}, and the plugin installed here has another version: {list}. The copy stays until you update it.`,{n:t.length,list:r}),actions:[{label:o(`Keep the map's copy`),run:()=>{}},{label:t.length===1?o(`Update`):o(`Update all`),primary:!0,run:()=>{e.updateLibraries(t.map(e=>e.id))}}]})},Dt=()=>w.flatMap(e=>e.list.map(t=>`${e.object}.${t.from} → ${e.object}.${t.to}`)),Ot=``,kt=(e=!1)=>{let t=Dt();if(t.length===0){Ot=``,D.dismiss(`renames`);return}let n=t.join(`
`);!e&&n===Ot||(Ot=n,D.notify({key:`renames`,kind:`info`,text:o(`The map renamed {n, plural, one {something the script names} other {# things the script names}}: {list}.`,{n:t.length,list:t.join(`, `)}),actions:[{label:o(`Leave`),run:()=>{w=[],J()}},{label:o(`Update references`),primary:!0,run:()=>{Gt()}}]}))},At=()=>{let e=d?.editor.getPosition();ve.set(e?{text:o(`Ln {line}, Col {column}`,{line:e.lineNumber,column:e.column}),title:o(`Go to line…`),onClick:()=>{d?.editor.focus(),d?.editor.trigger(`trigscript`,`editor.action.gotoLine`,null)}}:null)},J=()=>{let t=v.length;A.set({disabled:!m||g||S,busy:S}),j.set({disabled:!m||g||t>0}),M.set({disabled:!m||g,busy:g&&!S}),N.set({disabled:!m||_,busy:_});let n=e.state(),r=n?.block??null,i=n?.stale??!1,a=x?x.programs.length:n?.programs??0;le.set(m?{icon:t?`error`:`pass`,text:String(t),kind:t?`error`:void 0,title:t?o(`{n, plural, one {# problem} other {# problems}}`,{n:t}):o(y?`No problems`:`Checking…`),onClick:()=>D.togglePanel(`problems`)}:null),de.set(i?null:r&&!n?.unbuilt?{icon:`check`,text:o(`{n, plural, one {# trigger} other {# triggers}} at #{start}`,{n:r.count,start:r.start+1}),title:o(`The script's triggers are in the map's trigger list, from #{start}. Click to apply the script again`,{start:r.start+1}),onClick:()=>{Lt()}}:{icon:`circle-filled`,text:o(r?`Changes not applied`:`Not applied yet`),title:o(r?`The script changed since it was applied: saving or testing the map applies the script by itself. Click to apply it now ({mod}+Shift+B)`:`The script's triggers are not in the map yet: saving or testing the map applies the script by itself. Click to apply it now ({mod}+Shift+B)`,{mod:Tu}),onClick:()=>{Lt()}}),fe.set(i?{icon:`warning`,kind:`warn`,text:o(`Triggers edited outside the script`),title:o(`What the next Apply does about it`),onClick:()=>wt(!0)}:null);let s=Dt().length;pe.set(s?{icon:`sync`,kind:`warn`,text:o(`{n} renamed`,{n:s}),title:o(`The map renamed things the script names`),onClick:()=>kt(!0)}:null),me.set(Ae?{text:Ae.text,busy:Ae.kind===`busy`}:!m&&!h?{text:o(`Loading the editor…`),busy:!0}:null);let l=H?.kind===`ok`&&H.of!==c;he.set(H?{text:l?`${H.text} · ${o(`edited since`)}`:H.text,busy:H.kind===`busy`,icon:H.kind===`error`?`error`:`package`,kind:H.kind===`error`?`error`:l?`warn`:void 0,title:o(`{what}. Click for its log`,{what:l?o(`The script changed since this build: the programs in the saved map are the older ones until the next Save`):H.title??o(`The last build of the programs`)}),onClick:()=>D.showPanel(`output`)}:null);let u=a>0?e.whyNotBuilt():null;ge.set(a===0?null:u?{kind:`warn`,icon:`warning`,text:o(`not built: Magenta's triggers`),title:u}:{icon:`package`,text:o(`built by TrigScript`),title:o(`The programs are laid out into the map by TrigScript itself when it is saved or tested: nothing to install, and the map is built in under a second`)}),_e.set(a?{text:o(`{n, plural, one {# program} other {# programs}} · Remastered`,{n:a}),title:o(`Programs are built into the saved map, which then needs StarCraft: Remastered. Click for the programs and their variables`),onClick:()=>{D.toggleSidebar(!0),te.expand()}}:null),He(),We(),qe(),Xe(),vt(),St(),wt(),kt(),Et()},jt=(e,t)=>{v=e.diagnostics,y=e,e.ok&&(x={programs:e.programs,variables:e.variables}),b=null,e.ok&&(z=ac(z,e.tests)),e.ok&&e.tests&&t&&!t.files&&!t.ids&&(xe=e.tests.ms>yu),ye&&!z.results.has(ye)&&(ye=null),d&&f&&(ja(f,c,v,Ke()),d.setTests(dc(z,o),fc(z,o)),d.decorate(e.buildTime),Ea()),J()},Mt=()=>({world:e.world(),...xe?{files:[d?.active()??`main.ts`]}:{}}),Nt=()=>{if(!u)return null;let e=r.document.scenario();if(!e)return null;let t=new Map;for(let n of u.names.locations.entries){let r=n.value-1,i=e.locations[r];if(!i)continue;let a=Math.min(i.left,i.right),o=Math.max(i.left,i.right),s=Math.min(i.top,i.bottom),c=Math.max(i.top,i.bottom);t.set(n.keys[0],{index:r,name:n.keys[1]??n.keys[0],x:Math.floor(a/32),y:Math.floor(s/32),w:Math.max(1,Math.round((o-a)/32)),h:Math.max(1,Math.round((c-s)/32))})}return{object:u.names.locations.object,byKey:t,open:e=>{r.view.goTo({kind:`location`,index:e.index}),r.view.flash({locations:[e.index],kind:`attention`})}}},Pt=()=>{p!==null&&clearTimeout(p),p=setTimeout(()=>{if(p=null,C||!u)return;let t=Mt();e.prepare(c,u,t).then(e=>{C||jt(e.compiled,t)},e=>{!C&&!(e instanceof uo)&&W(`error`,o(`Compiler: {message}`,{message:e.message}))})},hu)},Ft=async(t=Mt(),n=!1)=>{p!==null&&(clearTimeout(p),p=null);for(let r=0;r<3;r++){if(C||!u)return null;try{let r=await e.prepare(c,u,t,n);return jt(r.compiled,t),r}catch(e){if(e instanceof uo)continue;return W(`error`,o(`Compiler: {message}`,{message:e.message})),null}}return null},It=e=>{switch(e){case`closed`:return o(`Not applied: the map closed.`);case`switched`:return o(`Not applied: another map is in front now.`);case`changed`:return o(`Not applied: the map changed while the script was running. Apply again.`);default:return o(`Not applied.`)}},Lt=async(t=!1)=>{if(g||!m)return!1;g=!0,W(`busy`,o(`Running the script…`));try{for(let n=0;;n++){let r=await Ft(Mt(),!0);if(!r||C)return!1;if(!r.compiled.ok||v.length){let e=v.length||r.compiled.diagnostics.length;return W(`error`,o(`Not applied: {n, plural, one {# problem} other {# problems}} in the script.`,{n:e}),vu),D.showPanel(`problems`),!1}let i=e.state()?.stale??!1;W(`busy`,o(`Writing the triggers…`));let a=e.install(r,{takeOver:t,replaceStale:i&&!T});if(a.block){let e=a.block,t=r.compiled.ir.length,n=e.count===0?o(t?`Applied: the script defines no triggers.`:`Applied: the script defines no triggers; its block is empty.`):a.replaced?o(`Applied {n, plural, one {# trigger} other {# triggers}} → #{first}–#{last} (replaced the previous block's {removed, plural, one {# unchanged trigger} other {# unchanged triggers}}; {kept, plural, one {# edited one} other {# edited ones}} kept after it).`,{n:e.count,first:e.start+1,last:e.start+e.count,removed:a.replaced.removed,kept:a.replaced.kept}):o(i?`Applied {n, plural, one {# trigger} other {# triggers}} → #{first}–#{last} (appended: the previous block had been edited outside the script).`:`Applied {n, plural, one {# trigger} other {# triggers}} → #{first}–#{last}.`,{n:e.count,first:e.start+1,last:e.start+e.count}),s=t?` ${o(`{n, plural, one {The program is} other {The # programs are}} built into the map when it is saved or tested.`,{n:t})}`:``;return W(`ok`,n+s),!0}if(a.refused===`changed`&&n<2){W(`busy`,o(`The map changed while the script ran; running it again…`));continue}return W(`error`,It(a.refused)),!1}}finally{g=!1,J()}},Rt=async()=>{if(g||S||!m)return;S=!0,J();let t=null,n=e.onBuild(e=>{e.kind===`failed`&&(t=e.from&&e.from!==`trigscript`?`${e.from}: ${e.message}`:e.message)});try{if(!await Lt()||C)return;W(`busy`,o(`Building the map…`));let e=await r.document.export({format:`scx`});if(!e){W(`error`,o(`No map is open.`));return}if(t){W(`error`,o(`Not tested: {message}`,{message:t}));return}let n=new Uint8Array(await e.arrayBuffer()),i=await r.document.test(n,e.name),a=Math.round(n.length/1024);W(i?`ok`:`info`,i?.launched?o(`Started the game with {path} ({kb} KB).`,{path:i.path,kb:a}):i?i.message?o(`Written to {path} ({kb} KB) — {message}.`,{path:i.path,kb:a,message:i.message}):o(`Written to {path} ({kb} KB).`,{path:i.path,kb:a}):o(`The map is built, but this browser has no test folder yet: pick one once under Tools ▸ Test Map…, which builds the map the same way.`))}catch(e){W(`error`,o(`Not tested: {message}`,{message:e.message}))}finally{n.dispose(),S=!1,J()}},zt=e=>{if(!(C||e.kind!==`log`&&e.kind!==`warning`&&!e.contributors.includes(`trigscript`))){if(e.kind===`warning`){U(o(`Build warning: {message}`,{message:e.message}),!1),D.notify({key:`build-warning:${e.message}`,kind:`warn`,text:e.message,actions:[{label:o(`Show the log`),run:()=>D.showPanel(`output`)}]});return}if(e.kind===`start`){Oe=0,D.dismiss(`build`),H={kind:`busy`,text:e.purpose===`test`?o(`Building for Test Map…`):e.purpose===`save`?o(`Building for Save…`):o(`Building for an export…`),of:c},U(e.purpose===`test`?o(`Building the programs for Test Map`):e.purpose===`save`?o(`Building the programs for Save`):o(`Building the programs for an export`));let t=oc(z).failed;t&&U(o(`{n, plural, one {A test fails} other {# tests fail}}: see the Testing view.`,{n:t}),!1)}else if(e.kind===`log`)Oe++,Ns(e.line)||U(e.line,!1);else if(e.kind===`done`){!Oe&&e.log&&U(pu(e.log),!1);let t=Math.round(e.chkBytes/1024),n=e.ms<1e3?o(`{ms} ms`,{ms:e.ms}):o(`{seconds} s`,{seconds:(e.ms/1e3).toFixed(1)});H={kind:`ok`,text:o(`Built {kb} KB · {took}`,{kb:t,took:n}),of:H?.of??c},U(o(`Built: {kb} KB of scenario in {took}`,{kb:t,took:n}))}else{!Oe&&e.log&&U(pu(e.log),!1);let t=e.purpose===`save`;H={kind:`error`,text:o(t?`Saved without its programs`:`Build failed`),of:H?.of??c,...t?{title:o(`The map was saved with the script in it, but its programs were not built, so they do not run in the game. Fix the error and save again`)}:{}},U(o(`Build failed: {message}`,{message:e.message})),D.notify({key:`build`,kind:`error`,text:o(t?`The map was saved without its programs, which were not built: {message}`:`The programs were not built: {message}`,{message:e.message}),actions:[{label:o(`Show the log`),run:()=>D.showPanel(`output`)}]});let n=wc(e.message);n&&(v=[...v,{file:n.file,line:n.line,column:n.column,endLine:n.line,endColumn:n.column+1,message:e.message,source:`compiler`}],d&&f&&ja(f,c,v),G(n.file,n.line,n.column))}J()}},Bt=async()=>{if(!d||!u)return;let{before:t,after:n}=e.handTriggers();if(t.length+n.length===0){W(`info`,o(`There are no hand-made triggers to import.`));return}let i={names:u.names,string:e=>r.names.string(e)},a=c[`main.ts`]??``,s=a.trim()===``||a===ou?Vo([...t,...n],i,{imports:!0}):[t.length?Vo(t,i,{header:``}).trimStart():``,a.replace(/\s+$/,``)+`
`,n.length?Vo(n,i,{header:``}).trimStart():``].filter(e=>e!==``).join(`
`);d.set(Xi,s),Ne(Xi),c={...c,[Xi]:s};let l=await Lt(!0)!==!1,f=t.length+n.length;l&&W(`ok`,o(`Imported {n, plural, one {# hand-made trigger} other {# hand-made triggers}}; every trigger is now generated by the script.`,{n:f}))},Vt=()=>{let e=r.document.scenario();if(!e)return{};let t=new Map,n=e=>{let n=t.get(e);if(!n){let i=r.settings?.unitType(e);n={hp:i?.hitPoints??1,shields:i?.shields??0},t.set(e,n)}return n},i=(e,t,n)=>n?Math.max(1,Math.ceil(e*Math.min(100,t)/100)):e,a=e.units.filter(e=>e.unitId!==lu).map(e=>{let t=n(e.unitId);return{type:e.unitId,owner:e.owner,x:e.x,y:e.y,maxHp:t.hp,hp:i(t.hp,e.hitPointsPercent,!!(e.validStates&2)),maxShields:t.shields,shields:t.shields?i(t.shields,e.shieldPercent,!!(e.validStates&4)):0,resources:e.resourceAmount,...e.validStates&64?{cloaked:!!(e.stateFlags&1),burrowed:!!(e.stateFlags&2),hallucinated:!!(e.stateFlags&8),invincible:!!(e.stateFlags&16)}:{}}}),o={};e.locations.forEach((e,t)=>{(e.right>e.left||e.bottom>e.top)&&(o[t+1]={left:e.left,top:e.top,right:e.right,bottom:e.bottom})});let s=e.playerTypes.slice(0,8).flatMap((e,t)=>e===du||e===uu?[t]:[]),c=Object.fromEntries(e.forces.playerForce.slice(0,8).map((e,t)=>[t,e])),l=t=>{let n=e.cuwp?.[t-1];if(!n)return;let r=e=>(n.validProperties&e)===0?void 0:(n.stateFlags&e)!==0;return{hpPercent:n.validFields&2?n.hitPointsPercent:void 0,shieldPercent:n.validFields&4?n.shieldsPercent:void 0,energyPercent:n.validFields&8?n.energyPercent:void 0,resources:n.validFields&16?n.resources:void 0,cloaked:r(1),burrowed:r(2),hallucinated:r(8),invincible:r(16)}},u=e.playerTypes.slice(0,8).flatMap((e,t)=>e===uu?[t]:[]);return{units:a,locations:o,...s.length?{players:s,forces:c,computers:u}:{},unitStats:e=>n(e),properties:l}},Ht=async()=>{let t=(await Ft())?.compiled;if(t){if(!t.ok){W(`error`,o(`Not simulated: {n, plural, one {# problem} other {# problems}} in the script.`,{n:t.diagnostics.length}),vu),D.showPanel(`problems`);return}try{let{unitStats:n,...r}=Vt(),i=t.programs[0]?.owner,a=i!==void 0&&i<12&&(!r.players||r.players.includes(i))?i:r.players?.[0]??i,s=new Fe(t.triggers,{strings:t.strings,player:a,unitStats:n,everyFrame:t.ir.length>0,...r}),c=t.ir.length?new rn(t.ir,{world:s,strings:t.strings,player:a,heapCells:e.settings().heapCells,stackDepth:e.settings().stackDepth,unitStats:n}):null;for(let e=0;e<480;e++)s.tick()&&c?.step();b={sim:s,programs:c,result:t};let l=s.events.length+(c?.events.length??0),u=t.input?` ${o(`Keys, clicks, the mouse and chat are not simulated: they read as nothing.`)}`:``,d=c?.faults.length??0,f=d?` ${o(`{n, plural, one {# fault} other {# faults}}: an array read or written past its end, or out of memory — first in the list.`,{n:d})}`:``,p=s.game.players.slots.map(e=>`P${e+1}`).join(`, `);W(`ok`,`${o(`Simulated {frames} frames for {who}: {n, plural, one {# action} other {# actions}} ran.`,{frames:480,who:p,n:l})}${f}${u}`),D.showPanel(`simulate`)}catch(e){W(`error`,o(`Simulation stopped: {message}`,{message:e.message}))}}},Ut=()=>{let t=d?.cursor();Au(e,{dock:n===`dialog`,file:t?.file,line:t?.line})},Wt=async()=>{if(!(!d||!u||_)){if(n===`dialog`){let t=d.cursor();Au(e,{dock:!0,file:t.file,line:t.line,pick:!0});return}_=!0,J();try{let e=await r.ui.pickObject({prompt:o(`Click a location or a unit for the script`)});if(C||!e||!d)return;let t=r.document.scenario(),n=e.kind===`unit`?u.names.units:u.names.locations,i=e.kind===`unit`?t?.units[e.index]?.unitId:e.index+1,a=i===void 0?void 0:Cn(n,i);if(!a){W(`info`,e.kind===`unit`?o(`That unit's type has no name in the script's tables.`):o(`That location is not in the script's tables yet; try again after the map's names refresh.`));return}d.insert(`${n.object}.${a.keys[0]}`),W(`ok`,o(`Inserted {name}.`,{name:`${n.object}.${a.keys[0]}`}))}finally{_=!1,J()}}},Gt=async()=>{if(!d)return;let t=await Ft();if(!t||C||!d)return;let n=c,r=0;for(let e of w){let i=ia(n,t.compiled.refs,e.object,e.list);n=i.files,r+=i.count}for(let[e,t]of Object.entries(n))t!==c[e]&&d.set(e,t);c=n,w=[],e.writeFiles(c),W(`ok`,o(`Updated {n, plural, one {# reference} other {# references}}.`,{n:r})),Pt()},Kt=async(e,t,n=``,i=`.ts`)=>{for(;;){let a=await r.ui.prompt(e,{title:`TrigScript`,value:t,placeholder:`helpers.ts`});if(a===null)return null;let s=Q(a.trim());if(s&&n&&(s=`${n}/${s}`),s&&!/\.(?:tsx?|video|image|sound|notes)$/i.test(s)&&(s+=i),!rs.test(s)||s.split(`/`).some(e=>e===`.`||e===`..`)){t=a,e=o(`A file name is letters, digits, _ - and ., folders with /, ending in .ts.`);continue}if(c[s]!==void 0){t=a,e=o(`There is already a {name}.`,{name:s});continue}return s}},qt=async(e=``)=>{if(!d)return;let t=d.active(),n=/(^|\/)tests?$/i.test(e)?`${(t.split(`/`).pop()??`main.ts`).replace(/(\.test)?\.ts$/i,``)}.test.ts`:`helpers.ts`,r=await Kt(e?o(`Name of the new file in {folder}/:`,{folder:e}):o(`Name of the new file (folder/name.ts puts it in a folder):`),n,e);if(r){if(e&&Le.has(e)){let t=new Set(Le);t.delete(e),Re(t)}d.add(r,an(r)?cu:su),Ne(r)}},Jt=async e=>{if(!d)return;let t=r.document.info(),n=await ru(r,o,{mapWidth:t?.width??128,mapHeight:t?.height??128,taken:e=>c[Q(e)]!==void 0,file:e});if(!n||!d||C)return;if(d.add(n.path,n.text),n.kind===`rows`){Ne(n.path);return}He();let i=(n.path.split(`/`).pop()??n.path).replace(/\.(?:video|image|sound|notes)$/i,``).replace(/[^A-Za-z0-9]+(.)?/g,(e,t)=>t?t.toUpperCase():``).replace(/^[^A-Za-z_]+/,``)||n.kind;W(`ok`,n.kind===`notes`?o(`{path} is in the script: import {name} from "./{path}"; then music.midi({name}, { … }) makes a song of its tracks.`,{path:n.path,name:i}):n.kind===`sound`?o(`{path} is in the script: import {name} from "./{path}"; then playWav({name}) plays it inside a program.`,{path:n.path,name:i}):n.kind===`image`?o(`{path} is in the script: import {name} from "./{path}"; then fog.picture({name}.threshold(128)) makes a picture of it.`,{path:n.path,name:i}):o(`{path} is in the script: import {name} from "./{path}"; then await fog.play(P1, {name}) plays it.`,{path:n.path,name:i}))},Yt=async(e=``)=>{if(!d)return;let t=e?o(`Name of the new folder in {folder}/:`,{folder:e}):o(`Name of the new folder:`),n=`tests`;for(;;){let i=await r.ui.prompt(t,{title:`TrigScript`,value:n,placeholder:`tests`});if(i===null)return;let a=Q(i.trim()).replace(/\/+$/,``);if(!Ys(a)){n=i,t=o(`A folder name is letters, digits, _ - and ., folders inside it with /.`);continue}await qt(e?`${e}/${a}`:a);return}},Xt=(t,n=!1)=>{if(!d||t.size===0)return;let r=nc(Object.keys(c),t,o);if(r){W(`error`,r);return}let i=rc(c,t);c=i.files;for(let[e,n]of t)d.rename(e,n);for(let e of i.edited)d.set(e,i.files[e]);V=V.map(e=>t.get(e)??e),e.writeFiles(c),He(),Pt();let[[a,s]]=[...t],l=t.size===1?o(`{from} is now {to}`,{from:a,to:s}):o(`{n} files moved`,{n:t.size}),u=i.imports?o(`{what}; {n, plural, one {# import} other {# imports}} rewritten.`,{what:l,n:i.imports}):`${l}.`;if(U(u),n){D.dismiss(`move`);return}let f=new Map([...t].map(([e,t])=>[t,e]));D.notify({key:`move`,kind:`info`,text:u,timeout:vu*2,actions:[{label:o(`Undo`),run:()=>Xt(f,!0)}]})},Zt=(e,t)=>{!d||e===t||Xt(tc(Object.keys(c),e,t))},Qt=async e=>{if(!d||e===`main.ts`)return;let t=await Kt(o(`Rename {path} to (a folder before the name moves it):`,{path:e}),e,``,Tr(e)?Er(e)?`.image`:Dr(e)?`.sound`:Or(e)?`.notes`:`.video`:`.ts`);t&&Zt(e,t)},$t=async e=>{if(!d)return;let t=o(`Rename the folder {folder} to (its files go with it, and the imports follow):`,{folder:e}),n=e;for(;;){let i=await r.ui.prompt(t,{title:`TrigScript`,value:n,placeholder:e});if(i===null)return;let a=Q(i.trim()).replace(/\/+$/,``);if(!Ys(a)){n=i,t=o(`A folder name is letters, digits, _ - and ., folders inside it with /.`);continue}if(a===e)return;let s=tc(Object.keys(c),e,a),l=nc(Object.keys(c),s,o);if(l){n=i,t=l;continue}if(Le.has(e)){let t=new Set(Le);t.delete(e),t.add(a),Re(t)}Xt(s);return}},en=t=>{if(!d)return;let n={...c};for(let e of t)d.remove(e),delete n[e];c=n,e.writeFiles(c),He(),Pt()},tn=async e=>{!d||e===`main.ts`||await r.ui.confirm(o(`Remove {path} from the script? Its text is not kept anywhere else.`,{path:e}),{title:`TrigScript`,confirmLabel:o(`Remove`),danger:!0})&&en([e])},nn=async e=>{if(!d)return;let t=qs(Object.keys(c),e);t.includes(`main.ts`)||await r.ui.confirm(o(`Remove the folder {folder} and {n, plural, one {the file} other {the # files}} in it? Their text is not kept anywhere else.`,{folder:e,n:t.length}),{title:`TrigScript`,confirmLabel:o(`Remove`),danger:!0})&&en(t)},on=()=>{if(C)return;let t=u;if(u=e.names(),t&&u)for(let e of[`locations`,`switches`]){let n=u.names[e].object,r=ra(y?.refs??[],n,na(t.names[e],u.names[e]));if(r.length===0)continue;let i=w.find(e=>e.object===n);i?i.list=[...i.list.filter(e=>!r.some(t=>t.value===e.value)),...r]:w.push({object:n,list:r})}f&&u&&ma(f,u.decls,fs(e.libraries())),J(),Pt()},sn=()=>{C||(f&&u&&ma(f,u.decls,fs(e.libraries())),J(),Pt())},cn=(e,t)=>{t?G(e??`main.ts`,t):e&&Ne(e)},ln=()=>R.active,un=[{id:`debugContinue`,label:o(`Debug: Continue`),key:{code:`F5`},when:ln,run:()=>R.continueForward()},{id:`debugContinueBack`,label:o(`Debug: Continue Backwards`),key:{code:`F6`},when:ln,run:()=>R.continueBack()},{id:`debugStep`,label:o(`Debug: On a Line`),key:{code:`F10`},when:ln,run:()=>R.stepForward()},{id:`debugStepBack`,label:o(`Debug: Back a Line`),key:{code:`F10`,shift:!0},when:ln,run:()=>R.stepBack()},{id:`debugFrame`,label:o(`Debug: On a Frame`),key:{code:`F11`},when:ln,run:()=>R.nextFrame()},{id:`debugFrameBack`,label:o(`Debug: Back a Frame`),key:{code:`F11`,shift:!0},when:ln,run:()=>R.prevFrame()},{id:`debugStop`,label:o(`Debug: Stop`),key:{code:`F5`,shift:!0},when:ln,run:()=>R.end()},{id:`debugTestAtCursor`,label:o(`Debug Test at Cursor in the Game`),context:!0,run:()=>q()},{id:`toggleBreakpoint`,label:o(`Toggle Breakpoint`),key:{code:`F9`},run:()=>{let e=d?.cursor();e&&R.toggleBreakpoint(Q(e.file),e.line)}},{id:`save`,label:o(`Save the Map`),key:{code:`KeyS`,mod:!0},run:()=>{r.document.save()}},{id:`test`,label:o(`Play the Map`),key:{code:`F5`},run:()=>{Rt()}},{id:`runTests`,label:o(`Run All Tests`),run:()=>{yt()}},{id:`runTestsInGame`,label:o(`Run All Tests in the Game`),run:()=>{ct()}},{id:`findEudError`,label:o(`Find an EUD Error…`),run:()=>{mt()}},{id:`runTestAtCursor`,label:o(`Run Test at Cursor`),context:!0,run:()=>{xt()}},{id:`runFailedTests`,label:o(`Run Failed Tests`),run:()=>{bt()}},{id:`testing`,label:o(`Show Testing`),run:()=>se.show()},{id:`simulate`,label:o(`Simulate`),key:{code:`F5`,mod:!0},run:()=>{Ht()}},{id:`apply`,label:o(`Apply the Script to the Map`),key:{code:`KeyB`,mod:!0,shift:!0},run:()=>{Lt()}},{id:`pick`,label:o(`Pick a Location or Unit from the Map`),context:!0,run:()=>{Wt()}},{id:`import`,label:o(`Import the Map's Triggers`),run:()=>{Bt()}},{id:`newFile`,label:o(`New File…`),run:()=>{qt()}},{id:`newFolder`,label:o(`New Folder…`),run:()=>{Yt()}},{id:`importVideo`,label:o(`Import Video…`),run:()=>{Jt()}},{id:`mode`,label:o(n===`dialog`?`Open Beside the Map`:`Open in a Window`),run:()=>Ut()},{id:`problems`,label:o(`Show Problems`),key:{code:`KeyM`,mod:!0,shift:!0},run:()=>D.togglePanel(`problems`)},{id:`output`,label:o(`Show Output`),key:{code:`KeyU`,mod:!0,shift:!0},run:()=>D.togglePanel(`output`)},{id:`settings`,label:o(`Open Settings`),key:{code:`Comma`,mod:!0},run:()=>{D.showPanel(`settings`),ce()}},{id:`panel`,label:o(`Toggle Panel`),key:{code:`KeyJ`,mod:!0},run:()=>D.togglePanel()},{id:`explorer`,label:o(`Toggle Explorer`),key:{code:`KeyB`,mod:!0},run:()=>D.toggleSidebar()}],dn=e=>e.key?`${e.key.mod?`${Tu}+`:``}${e.key.shift?`Shift+`:``}${e.key.code.replace(/^Key/,``)}`:void 0,fn=e=>{let t=un.find(t=>t.id===e);return{label:t.label,keys:dn(t),disabled:!m,run:t.run}},pn=()=>{d?.editor.focus(),d?.editor.trigger(`trigscript`,`editor.action.quickCommand`,null)},mn=e=>{if(e.altKey)return;let t=e.ctrlKey||e.metaKey,n=t&&e.shiftKey&&e.code===`KeyP`||!t&&!e.shiftKey&&e.code===`F1`?{run:pn}:un.find(n=>n.key&&n.key.code===e.code&&!!n.key.mod===t&&!!n.key.shift===e.shiftKey&&(!n.when||n.when()));n&&(e.preventDefault(),e.stopPropagation(),m&&n.run())};return O.addEventListener(`keydown`,mn,!0),{root:O,attach:n=>{J();let i=a.busy(k,o(`Loading the editor…`)),s=io(),g=[e.onBuild(zt),e.onLibraries(sn),r.events.on(`settings`,on),r.events.on(`locations`,on),r.events.on(`triggers`,on),r.events.on(`document`,()=>n())];return pa(e.dist()).then(n=>{if(C)return;f=n,u&&ma(n,u.decls,fs(e.libraries())),Sa(n,()=>y?.variables??[]),Ta(n,()=>[...y?.hints??[],...ut(),...pt(),...R.hints()]),Aa(n,Nt),i.done(),D.ready(),d=Fa(n,k,c,t.file??`main.ts`,(t,n)=>{c={...c,[t]:n},e.writeFiles(c),R.setFiles(c),Pt()},e=>{yt({ids:[e]})},(e,t)=>R.toggleBreakpoint(e,t)),R.setFiles(c),d.setDebug(R.marks());let r=d.editor;for(let e of un)r.addAction({id:`trigscript.${e.id}`,label:`TrigScript: ${e.label}`,keybindings:e.key&&!e.when?[(e.key.mod?n.KeyMod.CtrlCmd:0)|(e.key.shift?n.KeyMod.Shift:0)|n.KeyCode[e.key.code]]:void 0,...e.context?{contextMenuGroupId:`navigation`,contextMenuOrder:9}:{},run:()=>e.run()});r.onDidChangeCursorPosition(At),r.onDidChangeModel(()=>{He(),At()}),g.push(n.editor.registerEditorOpener({openCodeEditor(e,t,n){let r=Q(t.path.replace(/^\/+/,``));if(t.scheme!==`file`||c[r]===void 0)return!1;let i=n?`startLineNumber`in n?n.startLineNumber:n.lineNumber:1,a=n?`startColumn`in n?n.startColumn:n.column:1;return G(r,i,a),!0}})),At(),l&&e.writeFiles(c),cn(t.file,t.line),d.editor.focus(),m=!0,J(),Pt(),t.pick&&Wt()},e=>{C||(i.done(),h=!0,W(`error`,o(`The editor failed to load: {message}`,{message:e.message})))}),()=>{C=!0,i.done(),p!==null&&clearTimeout(p),je!==null&&clearTimeout(je),O.removeEventListener(`keydown`,mn,!0),R.end(),D.dispose(),d?.dispose(),d=null,f&&Pa(f),s();for(let e of g)e.dispose();$&&!$.isOpen()&&($=null)}},reveal:cn,cursor:()=>d?.cursor()??null}}var Mu={"**{name}** is a variable of the program: {what}, one value shared by every player the program runs for. It lives in the game while the map is played.":`**{name}**: 프로그램의 변수 — {what}. 프로그램이 실행되는 모든 플레이어가 한 값을 공유합니다. 맵을 플레이하는 동안 게임 안에 있습니다.`,"**{name}** is a variable of the program: {what}. It lives in the game while the map is played.":`**{name}**: 프로그램의 변수 — {what}. 맵을 플레이하는 동안 게임 안에 있습니다.`,"**{name}** — location {n}: {w} × {h} tiles at {x}, {y}. Ctrl+click to show it on the map.":`**{name}** — 로케이션 {n}: {x}, {y}에 {w} × {h} 타일. Ctrl+클릭하면 맵에서 보여 줍니다.`,", one per player":`, 플레이어마다 하나`,", one value shared by every player":`, 모든 플레이어가 한 값을 공유`,"A failing test refuses the build":`테스트가 실패하면 빌드하지 않음`,"A file name is letters, digits, _ - and ., folders with /, ending in .ts.":`파일 이름은 문자, 숫자, _ - . 로 이루어지고, 폴더는 /로 나누며, .ts로 끝나야 합니다.`,"A folder name is letters, digits, _ - and ., folders inside it with /.":`폴더 이름은 문자, 숫자, _ - . 로 이루어지고, 안쪽 폴더는 /로 나눕니다.`,"An only is left in: the other tests of this file do not run.":`only가 남아 있습니다: 이 파일의 다른 테스트는 실행되지 않습니다.`,"Append instead":`대신 추가`,"Applied {n, plural, one {# trigger} other {# triggers}} → #{first}–#{last} (appended: the previous block had been edited outside the script).":`트리거 {n}개 적용 → #{first}–#{last} (뒤에 추가함: 이전 블록이 스크립트 밖에서 편집되었습니다).`,"Applied {n, plural, one {# trigger} other {# triggers}} → #{first}–#{last} (replaced the previous block's {removed, plural, one {# unchanged trigger} other {# unchanged triggers}}; {kept, plural, one {# edited one} other {# edited ones}} kept after it).":`트리거 {n}개 적용 → #{first}–#{last} (이전 블록의 바뀌지 않은 트리거 {removed}개를 교체했고, 편집된 {kept}개는 그 뒤에 남겼습니다).`,"Applied {n, plural, one {# trigger} other {# triggers}} → #{first}–#{last}.":`트리거 {n}개 적용 → #{first}–#{last}.`,"Applied: the script defines no triggers.":`적용됨: 스크립트에 트리거가 없습니다.`,"Applied: the script defines no triggers; its block is empty.":`적용됨: 스크립트에 트리거가 없어 블록이 비어 있습니다.`,Apply:`적용`,"Apply ({mod}+Shift+B): run the script and write its triggers into the map now. Saving and testing the map do this by themselves; programs are built into the saved file, not into the trigger list":`적용 ({mod}+Shift+B): 스크립트를 실행해 지금 트리거를 맵에 씁니다. 맵을 저장하거나 테스트하면 저절로 이렇게 됩니다. 프로그램은 트리거 목록이 아니라 저장된 파일에 빌드됩니다`,"Apply the Script to the Map":`스크립트를 맵에 적용`,"Arrays a program pushes to share one pool of cells; this is its size. A single array can reach between a quarter and a half of it. When the pool runs out, nothing more is pushed and the game says so once.":`프로그램이 push하는 배열들은 하나의 셀 풀을 함께 씁니다. 이 값이 그 크기입니다. 배열 하나는 풀의 4분의 1에서 2분의 1까지 쓸 수 있습니다. 풀이 바닥나면 더 이상 push되지 않고, 게임이 한 번 알려 줍니다.`,"Beside the map: open the script as a panel, so the map stays in reach":`맵 옆에: 스크립트를 패널로 열어 맵을 계속 다룰 수 있게 합니다`,"Build failed":`빌드 실패`,"Build failed: {message}":`빌드 실패: {message}`,"Build warning: {message}":`빌드 경고: {message}`,"Building for Save…":`저장용으로 빌드 중…`,"Building for Test Map…":`맵 테스트용으로 빌드 중…`,"Building for an export…":`내보내기용으로 빌드 중…`,"Building the map…":`맵 빌드 중…`,"Building the programs for Save":`저장용으로 프로그램 빌드`,"Building the programs for Test Map":`맵 테스트용으로 프로그램 빌드`,"Building the programs for an export":`내보내기용으로 프로그램 빌드`,"Built {kb} KB · {took}":`빌드됨 {kb} KB · {took}`,"Built: {kb} KB of scenario in {took}":`빌드됨: 시나리오 {kb} KB, {took}`,"{seconds} s":`{seconds}초`,"Changes not applied":`변경 사항 적용 안 됨`,"Checking…":`확인하는 중…`,"Clear the output":`출력 지우기`,"Click a location or a unit for the script":`스크립트에 넣을 로케이션이나 유닛을 클릭하세요`,Close:`닫기`,"Command Palette…":`명령 팔레트…`,"Compiler: {message}":`컴파일러: {message}`,"Computed when the script is built, not in the game.":`게임 안이 아니라 스크립트를 빌드할 때 계산됩니다.`,"Default ({n})":`기본값 ({n})`,Dismiss:`닫기`,"Expected:":`예상:`,Explorer:`탐색기`,Failed:`실패`,"Force {n}":`세력 {n}`,"Go to line…":`줄로 이동…`,"Go to the test":`테스트로 이동`,"Go to where it failed":`실패한 곳으로 이동`,"Got:":`실제:`,"Hide the panel (Ctrl+J)":`패널 숨기기 (Ctrl+J)`,"How many calls deep a function that calls itself may go. Around each such call the function's variables are kept on a stack, which is only in the built map when some function calls itself. A call past the limit stops the program, and the game says where; Simulate stops at the same call.":`자기 자신을 호출하는 함수가 몇 단계까지 호출할 수 있는지입니다. 그런 호출마다 함수의 변수가 스택에 보관되며, 스택은 자기 자신을 호출하는 함수가 있을 때만 빌드된 맵에 들어갑니다. 한도를 넘는 호출은 프로그램을 멈추고 게임이 그 위치를 알려 줍니다. 시뮬레이션도 같은 호출에서 멈춥니다.`,"Import the Map's Triggers":`맵의 트리거 가져오기`,"Imported {n, plural, one {# hand-made trigger} other {# hand-made triggers}}; every trigger is now generated by the script.":`직접 만든 트리거 {n}개를 가져왔습니다. 이제 모든 트리거를 스크립트가 만듭니다.`,"In a window: open the script full-screen":`창으로: 스크립트를 전체 화면으로 엽니다`,"Inserted {name}.":`{name|을} 넣었습니다.`,"Keys, clicks, the mouse and chat are not simulated: they read as nothing.":`키, 클릭, 마우스, 채팅은 시뮬레이션되지 않으며 아무것도 없는 것으로 읽힙니다.`,Leave:`그대로 두기`,"Ln {line}":`{line}행`,"Ln {line}, Col {column}":`{line}행, {column}열`,"Loading the editor…":`편집기를 불러오는 중…`,"Memory for arrays that grow":`늘어나는 배열의 메모리`,"More actions…":`추가 작업…`,"Name of the new file (folder/name.ts puts it in a folder):":`새 파일의 이름 (폴더/이름.ts로 쓰면 폴더에 넣습니다):`,"Name of the new file in {folder}/:":`{folder}/에 만들 새 파일의 이름:`,"Name of the new folder in {folder}/:":`{folder}/에 만들 새 폴더의 이름:`,"Name of the new folder:":`새 폴더의 이름:`,"New File…":`새 파일…`,"New Folder…":`새 폴더…`,"New file in {folder}…":`{folder}에 새 파일…`,'New file…: main.ts imports it with import { … } from "./name"':`새 파일…: main.ts에서 import { … } from "./name"으로 가져옵니다`,"New folder…: a folder is there while a file is in it, so its first file is asked for next":`새 폴더…: 폴더는 안에 파일이 있을 때만 존재하므로, 이어서 첫 파일 이름을 묻습니다`,"No actions ran in {frames} frames.":`{frames}프레임 동안 실행된 액션이 없습니다.`,"No map is open.":`열린 맵이 없습니다.`,"No problems":`문제 없음`,"No problems have been detected in the script.":`스크립트에서 발견된 문제가 없습니다.`,"No test fails.":`실패하는 테스트가 없습니다.`,"No test has failed.":`실패한 테스트가 없습니다.`,"No test has run yet: they run after a change that compiles, or from the Testing view.":`아직 실행된 테스트가 없습니다. 테스트는 컴파일되는 변경 뒤에, 또는 테스트 보기에서 실행됩니다.`,"No test ran.":`실행된 테스트가 없습니다.`,"Not applied yet":`아직 적용 안 됨`,"Not applied.":`적용되지 않음.`,"Not applied: another map is in front now.":`적용되지 않음: 이제 다른 맵이 앞에 있습니다.`,"Not applied: the map changed while the script was running. Apply again.":`적용되지 않음: 스크립트가 실행되는 동안 맵이 바뀌었습니다. 다시 적용하세요.`,"Not applied: the map closed.":`적용되지 않음: 맵이 닫혔습니다.`,"Not applied: {n, plural, one {# problem} other {# problems}} in the script.":`적용되지 않음: 스크립트에 문제가 {n}개 있습니다.`,"Not run yet":`아직 실행 안 됨`,"Not simulated: {n, plural, one {# problem} other {# problems}} in the script.":`시뮬레이션하지 않음: 스크립트에 문제가 {n}개 있습니다.`,"Not tested: {message}":`테스트하지 않음: {message}`,"Open Beside the Map":`맵 옆에 열기`,"Open Settings":`설정 열기`,"Open TrigScript":`TrigScript 열기`,"Open in a Window":`창으로 열기`,"Open or create a map first.":`먼저 맵을 열거나 만드세요.`,Output:`출력`,Passed:`통과`,"Pick a Location or Unit from the Map":`맵에서 로케이션이나 유닛 고르기`,"Pick from map: click a location or a unit on the map to put its name at the cursor":`맵에서 고르기: 맵에서 로케이션이나 유닛을 클릭하면 그 이름이 커서 위치에 들어갑니다`,"Play (F5): apply the script, build the map as Save would and start it in the game through Test Map":`플레이 (F5): 스크립트를 적용하고, 저장할 때처럼 맵을 빌드해 맵 테스트로 게임에서 시작합니다`,"Play the Map":`맵 플레이`,Problems:`문제`,"Program {n}":`프로그램 {n}`,Programs:`프로그램`,"Programs are built into the saved map, which then needs StarCraft: Remastered. Click for the programs and their variables":`프로그램은 저장된 맵에 빌드되며, 그 맵은 StarCraft: Remastered가 있어야 합니다. 클릭하면 프로그램과 변수를 봅니다`,"Recursion depth":`재귀 깊이`,Remove:`제거`,"Remove the folder {folder} and {n, plural, one {the file} other {the # files}} in it? Their text is not kept anywhere else.":`폴더 {folder|과} 그 안의 파일 {n}개를 제거할까요? 그 내용은 다른 곳에 남지 않습니다.`,"Remove {path} from the script? Its text is not kept anywhere else.":`스크립트에서 {path|을} 제거할까요? 그 내용은 다른 곳에 남지 않습니다.`,"Remove…":`제거…`,"Rename or move…":`이름 바꾸기 또는 이동…`,"Rename the folder {folder} to (its files go with it, and the imports follow):":`폴더 {folder}의 새 이름 (안의 파일이 함께 옮겨지고 import도 따라 바뀝니다):`,"Rename {path} to (a folder before the name moves it):":`{path}의 새 이름 (이름 앞에 폴더를 쓰면 옮깁니다):`,"Rename…":`이름 바꾸기…`,"Replace instead":`대신 교체`,"Run All Tests":`모든 테스트 실행`,"Run Failed Tests":`실패한 테스트 실행`,"Run Test at Cursor":`커서 위치의 테스트 실행`,"Run all tests":`모든 테스트 실행`,"Run the tests that failed":`실패한 테스트 실행`,"Run these tests":`이 테스트들 실행`,"Run this test":`이 테스트 실행`,"Running the script…":`스크립트 실행 중…`,"Running…":`실행 중…`,"Save the Map":`맵 저장`,"Saved without its programs":`프로그램 없이 저장됨`,Script:`스크립트`,Settings:`설정`,"Show Output":`출력 보기`,"Show Problems":`문제 보기`,"Show Testing":`테스트 보기`,"Show on the map":`맵에서 보기`,"Show only the tests that fail":`실패하는 테스트만 보기`,"Show the log":`로그 보기`,Simulate:`시뮬레이션`,"Simulate ({mod}+F5) runs the script's first {seconds} seconds in a built-in interpreter and lists what happened. A change to the script clears the list.":`시뮬레이션({mod}+F5)은 스크립트의 처음 {seconds}초를 내장 인터프리터에서 실행하고 일어난 일을 나열합니다. 스크립트를 바꾸면 목록이 지워집니다.`,"Simulate ({mod}+F5): run the script's triggers and programs for {frames} frames ({seconds} seconds of the game) in a built-in interpreter and list what happened":`시뮬레이션 ({mod}+F5): 스크립트의 트리거와 프로그램을 내장 인터프리터에서 {frames}프레임(게임 시간 {seconds}초) 동안 실행하고 일어난 일을 나열합니다`,"Simulated {frames} frames for {who}: {n, plural, one {# action} other {# actions}} ran.":`{who}, {frames}프레임 시뮬레이션: 액션 {n}개가 실행되었습니다.`,"Simulation stopped: {message}":`시뮬레이션 중단: {message}`,Skipped:`건너뜀`,"Started the game with {path} ({kb} KB).":`{path|으로} 게임을 시작했습니다 ({kb} KB).`,"Test Results":`테스트 결과`,Testing:`테스트`,Tests:`테스트`,"Tests not run: {n, plural, one {# problem} other {# problems}} in the script.":`테스트를 실행하지 않음: 스크립트에 문제가 {n}개 있습니다.`,"That location is not in the script's tables yet; try again after the map's names refresh.":`그 로케이션은 아직 스크립트의 표에 없습니다. 맵의 이름이 갱신된 뒤 다시 해 보세요.`,"That unit's type has no name in the script's tables.":`그 유닛의 종류는 스크립트의 표에 이름이 없습니다.`,"The editor failed to load: {message}":`편집기를 불러오지 못했습니다: {message}`,"The last build of the programs":`프로그램의 마지막 빌드`,"The map changed while the script ran; running it again…":`스크립트가 실행되는 동안 맵이 바뀌었습니다. 다시 실행하는 중…`,"The map changed while the script was compiling; save again.":`스크립트를 컴파일하는 동안 맵이 바뀌었습니다. 다시 저장하세요.`,"The map is built, but this browser has no test folder yet: pick one once under Tools ▸ Test Map…, which builds the map the same way.":`맵은 빌드되었지만 이 브라우저에는 아직 테스트 폴더가 없습니다. 도구 ▸ 맵 테스트…에서 한 번 골라 두세요. 거기서도 맵을 똑같이 빌드합니다.`,"The map renamed things the script names":`맵에서 스크립트가 쓰는 이름이 바뀌었습니다`,"The map renamed {n, plural, one {something the script names} other {# things the script names}}: {list}.":`맵에서 스크립트가 쓰는 이름 {n}개가 바뀌었습니다: {list}.`,"The map was saved with the script in it, but its programs were not built, so they do not run in the game. Fix the error and save again":`맵은 스크립트를 담아 저장되었지만 프로그램이 빌드되지 않아 게임에서 실행되지 않습니다. 오류를 고치고 다시 저장하세요`,"The map was saved without its programs, which were not built: {message}":`프로그램이 빌드되지 않아 맵이 프로그램 없이 저장되었습니다: {message}`,"The next Apply leaves them all as hand-made triggers and appends a fresh block.":`다음 적용은 모두 직접 만든 트리거로 남겨 두고 새 블록을 뒤에 추가합니다.`,"The next Apply replaces the {unchanged} and keeps the {changed, plural, one {# edited one} other {# edited ones}} as hand-made triggers right after the new block.":`다음 적용은 {unchanged}개를 바꾸고, 편집된 {changed}개는 새 블록 바로 뒤에 직접 만든 트리거로 남깁니다.`,"The programs were not built: {message}":`프로그램이 빌드되지 않았습니다: {message}`,"The script changed since it was applied: saving or testing the map applies the script by itself. Click to apply it now ({mod}+Shift+B)":`적용한 뒤 스크립트가 바뀌었습니다. 맵을 저장하거나 테스트하면 스크립트가 저절로 적용됩니다. 클릭하면 지금 적용합니다 ({mod}+Shift+B)`,"The script changed since this build: the programs in the saved map are the older ones until the next Save":`이 빌드 뒤에 스크립트가 바뀌었습니다. 다음에 저장할 때까지 저장된 맵의 프로그램은 이전 것입니다`,'The script has no tests yet. A test is a test(name, (sim) => { … }) imported from "trigscript", in any file or in one named *.test.ts: it runs here, in the simulator, after every change that compiles.':`스크립트에 아직 테스트가 없습니다. 테스트는 "trigscript"에서 가져온 test(name, (sim) => { … })로, 아무 파일이나 *.test.ts라는 이름의 파일에 씁니다. 컴파일되는 변경이 있을 때마다 여기 시뮬레이터에서 실행됩니다.`,"The script has no tests.":`스크립트에 테스트가 없습니다.`,"The script's test() blocks run in the simulator after every compile that goes through. A failing test is a warning. With this on it also refuses the build: Save, Test Map and an export then say which test fails and write the map without the script applied again.":`스크립트의 test() 블록은 컴파일이 성공할 때마다 시뮬레이터에서 실행됩니다. 실패한 테스트는 경고입니다. 이 설정을 켜면 빌드도 거부합니다. 이때 저장, 맵 테스트, 내보내기는 어느 테스트가 실패하는지 알리고 스크립트를 다시 적용하지 않은 채 맵을 씁니다.`,"The script's triggers are in the map's trigger list, from #{start}. Click to apply the script again":`스크립트의 트리거가 맵의 트리거 목록 #{start}부터 들어 있습니다. 클릭하면 스크립트를 다시 적용합니다`,"The script's triggers are not in the map yet: saving or testing the map applies the script by itself. Click to apply it now ({mod}+Shift+B)":`스크립트의 트리거가 아직 맵에 없습니다. 맵을 저장하거나 테스트하면 스크립트가 저절로 적용됩니다. 클릭하면 지금 적용합니다 ({mod}+Shift+B)`,"The script's triggers were edited or removed outside the script, so it was not applied. Open Triggers ▸ TrigScript… and press Apply to choose what becomes of them.":`스크립트의 트리거가 스크립트 밖에서 편집되거나 제거되어 스크립트를 적용하지 않았습니다. 트리거 ▸ TrigScript…를 열고 적용을 눌러 그 트리거를 어떻게 할지 고르세요.`,"The script's triggers were edited or removed outside the script. They stay as hand-made triggers; the next Apply appends a fresh block. Saving the map does not apply the script until this is settled.":`스크립트의 트리거가 스크립트 밖에서 편집되거나 제거되었습니다. 그 트리거는 직접 만든 트리거로 남고, 다음 적용은 새 블록을 뒤에 추가합니다. 이 문제가 정리될 때까지 맵을 저장해도 스크립트가 적용되지 않습니다.`,"The script's triggers were edited outside the script: {unchanged, plural, one {# trigger is} other {# triggers are}} still the script's, {changed, plural, one {# trigger was} other {# triggers were}} changed.":`스크립트의 트리거가 스크립트 밖에서 편집되었습니다. 트리거 {unchanged}개는 여전히 스크립트의 것이고, {changed}개는 바뀌었습니다.`,'The test "{name}" fails: {message}':`테스트 "{name}" 실패: {message}`,"The variable's value when the run ended":`실행이 끝났을 때 변수의 값`,"There are no hand-made triggers to import.":`가져올 직접 만든 트리거가 없습니다.`,"There is already a {name}.":`{name|이} 이미 있습니다.`,"There is no test at the cursor.":`커서 위치에 테스트가 없습니다.`,"This trigger is generated by the map's TrigScript ({file}, line {line}). Edit the source instead; applying the script (saving the map does it) replaces the whole block.":`이 트리거는 맵의 TrigScript가 만든 것입니다 ({file}, {line}행). 대신 소스를 편집하세요. 스크립트를 적용하면(맵을 저장할 때 적용됩니다) 블록 전체가 바뀝니다.`,"This trigger is generated by the map's TrigScript. Edit the source instead; applying the script (saving the map does it) replaces the whole block.":`이 트리거는 맵의 TrigScript가 만든 것입니다. 대신 소스를 편집하세요. 스크립트를 적용하면(맵을 저장할 때 적용됩니다) 블록 전체가 바뀝니다.`,"Toggle Explorer":`탐색기 전환`,"Toggle Panel":`패널 전환`,"TrigScript beside the map":`맵 옆에 TrigScript`,"TrigScript: build":`TrigScript: 빌드`,"TrigScript: compile":`TrigScript: 컴파일`,"TrigScript: declarations":`TrigScript: 선언`,"TrigScript: print records as script":`TrigScript: 레코드를 스크립트로 출력`,"TrigScript: simulate records":`TrigScript: 레코드 시뮬레이션`,"TrigScript: state":`TrigScript: 상태`,"TrigScript: trigger at a source line":`TrigScript: 소스 줄의 트리거`,"TrigScript…":`TrigScript…`,"Trigger #{n}":`트리거 #{n}`,"Triggers edited outside the script":`스크립트 밖에서 편집된 트리거`,Undo:`실행 취소`,"Update references":`참조 업데이트`,"Updated {n, plural, one {# reference} other {# references}}.":`참조 {n}개를 업데이트했습니다.`,Views:`보기`,"What Apply, Play and the builds of the programs report is kept here.":`적용, 플레이, 프로그램 빌드가 알리는 내용이 여기에 남습니다.`,"What the next Apply does about it":`다음 적용이 이를 어떻게 처리하는지`,"Writing the triggers…":`트리거 쓰는 중…`,"Written to {path} ({kb} KB) — {message}.":`{path}에 썼습니다 ({kb} KB) — {message}.`,"Written to {path} ({kb} KB).":`{path}에 썼습니다 ({kb} KB).`,"a boolean":`불리언`,"a number (−2 147 483 648 … 2 147 483 647, whole, wrapping at either end as `x | 0` does)":"숫자 (−2 147 483 648 … 2 147 483 647, 정수, `x | 0`처럼 양 끝에서 넘어가면 반대쪽으로 돌아감)","a text — `length`, `s[i]` and `slice` count characters (code points), and a made text holds 1 023 bytes":"텍스트 — `length`, `s[i]`, `slice`는 문자(코드 포인트) 단위로 세며, 만든 텍스트는 1 023바이트까지 담습니다","a u32 number (0 … 4 294 967 295, wrapping at either end as `x >>> 0` does)":"u32 숫자 (0 … 4 294 967 295, `x >>> 0`처럼 양 끝에서 넘어가면 반대쪽으로 돌아감)","a fixed number (−32 768 … 32 767.99998, in steps of 1/65 536): a number with a fraction":`fixed 숫자 (−32 768 … 32 767.99998, 1/65 536 단위): 소수가 있는 숫자`,"a unit of the game, or none — checked before every use: once the unit is gone it reads 0 and takes no write":`게임의 유닛 또는 없음 — 쓸 때마다 확인합니다. 유닛이 사라지면 0으로 읽히고 쓰기는 무시됩니다`,"a u{bits} number (0 … {max}, stopping at either end)":`u{bits} 숫자 (0 … {max}, 양 끝에서 멈춤)`,after:`종료 후`,"all players":`모든 플레이어`,"and {n} more":`외 {n}개`,"and {n} more actions":`액션 {n}개 더`,"and {n} more lines with a fault":`오류가 있는 줄 {n}개 더`,"calls deep — no function of this script calls itself":`단계 — 이 스크립트에는 자기 자신을 호출하는 함수가 없습니다`,"calls deep — {frame} cells a call here, {size} while the map is played":`단계 — 여기서는 호출당 {frame}셀, 맵을 플레이하는 동안 {size}`,"calls deep — {frame} cells a call here, {size} while the map is played: more than the {max} a map may use, and it will not build":`단계 — 여기서는 호출당 {frame}셀, 맵을 플레이하는 동안 {size}: 맵이 쓸 수 있는 {max}보다 많아서 빌드되지 않습니다`,"cells — {size} while the map is played":`셀 — 맵을 플레이하는 동안 {size}`,"click to run these tests":`클릭하면 이 테스트들을 실행합니다`,"click to run this test":`클릭하면 이 테스트를 실행합니다`,compiler:`컴파일러`,"edited since":`이후 편집됨`,expected:`예상`,failed:`실패`,"frame {n}":`{n}프레임`,got:`실제`,"per player":`플레이어별`,printed:`출력`,"program {n}":`프로그램 {n}`,script:`스크립트`,shared:`공유`,skipped:`건너뜀`,tests:`테스트`,"the TrigScript block":`TrigScript 블록`,types:`타입`,"{failed} failed":`{failed}개 실패`,"{failed} failed, {passed} passed":`{failed}개 실패, {passed}개 통과`,"{failed} of {n, plural, one {# test} other {# tests}} failed: {name} — {message}":`테스트 {n}개 중 {failed}개 실패: {name} — {message}`,"{file} [Ln {line}, Col {column}]":`{file} [{line}행, {column}열]`,"{file} [Ln {line}]":`{file} [{line}행]`,"{file} is where the script starts: it stays where it is.":`{file}에서 스크립트가 시작하므로 그 자리에 있어야 합니다.`,"{frames, plural, one {# frame} other {# frames}} · {ms} ms":`{frames}프레임 · {ms}ms`,"{frames} frames ({seconds} s) for {players}, from the map's placed units. Units are made, given, moved, killed and counted, but nothing walks or fights; scores and the countdown read 0; wait takes no time.":`{players}, {frames}프레임({seconds}초), 맵에 배치된 유닛에서 시작. 유닛은 생성, 넘겨주기, 이동, 죽이기, 세기가 되지만 걷거나 싸우지는 않습니다. 점수와 카운트다운은 0으로 읽히고, wait는 시간이 걸리지 않습니다.`,"{from} is now {to}":`{from} → {to}`,"{message} (and {n, plural, one {# more time} other {# more times}} at this line)":`{message} (이 줄에서 {n}번 더)`,"{min} to {max} calls. The limit costs nothing until it is reached, but each call deep keeps and brings back every variable of its function, so thousands of calls within one frame make the game stutter. Kept in the map, like the pool above.":`{min}–{max}단계. 한도는 닿기 전까지는 비용이 없지만, 한 단계 깊어질 때마다 함수의 모든 변수를 보관했다가 되돌리므로 한 프레임 안에 수천 번 호출하면 게임이 끊깁니다. 위의 풀처럼 맵에 저장됩니다.`,"{min} to {max} cells. Up to {most}, a cell is 76 bytes while the map is played: four for texts, and 72 for the arrays' own cells, which a loop reads and writes in a few steps. Past that, arrays share the texts' four bytes and a read takes about three times as long. A larger pool does not slow the game and hardly grows the saved file. Kept in the map, so it builds the same on any computer.":`{min}–{max}셀. {most}셀까지는 맵을 플레이하는 동안 셀마다 76바이트입니다. 텍스트에 4바이트, 배열 자신의 셀에 72바이트이며, 루프는 이 셀을 몇 단계 만에 읽고 씁니다. 그보다 크면 배열이 텍스트의 4바이트 셀을 함께 쓰고, 읽기가 세 배쯤 오래 걸립니다. 풀이 커도 게임이 느려지지 않고 저장 파일도 거의 커지지 않습니다. 맵에 저장되므로 어느 컴퓨터에서나 똑같이 빌드됩니다.`,"{ms} ms":`{ms}ms`,"{n, plural, one {# fault} other {# faults}}: an array read or written past its end, or out of memory — first in the list.":`오류 {n}개: 배열의 끝을 넘어 읽거나 썼거나 메모리가 부족합니다 — 목록 맨 위에 있습니다.`,"{n, plural, one {# problem} other {# problems}}":`문제 {n}개`,"{n, plural, one {# program} other {# programs}} · Remastered":`프로그램 {n}개 · Remastered`,"{n, plural, one {# test} other {# tests}}":`테스트 {n}개`,"{n, plural, one {# test} other {# tests}} passed.":`테스트 {n}개 통과.`,"{n, plural, one {# test} other {# tests}}. Click for the Testing view":`테스트 {n}개. 클릭하면 테스트 보기를 엽니다`,"{n, plural, one {# test} other {# tests}}; running them all takes a while, so only the open file's run after a change. Click for the Testing view":`테스트 {n}개. 모두 실행하는 데 시간이 걸려서, 변경 후에는 열린 파일의 테스트만 실행됩니다. 클릭하면 테스트 보기를 엽니다`,"{n, plural, one {# trigger} other {# triggers}} at #{start}":`#{start}부터 트리거 {n}개`,"{n, plural, one {A test fails} other {# tests fail}}: see the Testing view.":`테스트 {n}개가 실패합니다: 테스트 보기를 확인하세요.`,"{n, plural, one {The program is} other {The # programs are}} built into the map when it is saved or tested.":`프로그램 {n}개는 맵을 저장하거나 테스트할 때 맵에 빌드됩니다.`,"{name}, run as {owner}":`{name}, {owner|으로} 실행`,"{n} files moved":`파일 {n}개 이동함`,"{n} not run":`{n}개 실행 안 됨`,"{n} passed":`{n}개 통과`,"{n} renamed":`이름 {n}개 바뀜`,"{n} skipped":`{n}개 건너뜀`,"{what}. Click for its log":`{what}. 클릭하면 로그를 봅니다`,"{what}; {n, plural, one {# import} other {# imports}} rewritten.":`{what}. import {n}개를 고쳐 썼습니다.`,"Run all tests in the game (the lifted game of the scm-sim plugin): each gets a second mark":`모든 테스트를 게임에서 실행합니다(scm-sim 플러그인의 옮겨 온 게임). 테스트마다 두 번째 표시가 붙습니다`,"In the game: {status}. The simulator and the game disagree: the game is right, so the simulator is wrong here (or the test leans on something it does differently).":`게임에서: {status}. 시뮬레이터와 게임의 결과가 다릅니다. 게임이 옳으므로 여기서는 시뮬레이터가 틀렸습니다(또는 테스트가 둘이 다르게 하는 일에 기대고 있습니다).`,passed:`통과`,"In the game: {message}":`게임에서: {message}`,"In the game: passed":`게임에서: 통과`,"Not run: a test of several players runs a copy of the game for each, which needs memory shared between them. This browser does not allow that on the engine's page (Chrome and Edge from version 137 do).":`실행하지 않음: 여러 플레이어의 테스트는 플레이어마다 게임을 하나씩 실행하며, 이 게임들은 메모리를 공유해야 합니다. 이 브라우저는 엔진 페이지에서 이를 허용하지 않습니다(Chrome과 Edge는 137 버전부터 허용합니다).`,"Running a test of {n} players in the game: a copy of the game for each…":`{n}명의 플레이어 테스트를 게임에서 실행하는 중: 플레이어마다 게임을 하나씩…`,"{n, plural, one {# test of several players was} other {# tests of several players were}} not run: this browser cannot run copies of the game.":`여러 플레이어의 테스트 {n}개를 실행하지 않았습니다: 이 브라우저는 게임을 여러 개 실행할 수 없습니다.`,"In the game: not run":`게임에서: 실행하지 않음`,"Running tests in the game needs the scm-sim plugin (0.11 or newer) on scmjs.dev: install or turn it on under Plugins ▸ Manage Plugins….":`테스트를 게임에서 실행하려면 scmjs.dev에서 scm-sim 플러그인(0.11 이상)이 필요합니다. 플러그인 ▸ 플러그인 관리…에서 설치하거나 켜세요.`,"Not run in the game: {message}":`게임에서 실행하지 못함: {message}`,"the engine cannot run a game now":`엔진이 지금 게임을 실행할 수 없습니다`,"Not run in the game: the engine's page is from before tests in the game. Reload the editor and try again.":`게임에서 실행하지 못함: 엔진 페이지가 게임 속 테스트보다 오래된 판입니다. 편집기를 새로 고친 뒤 다시 시도하세요.`,"Tests run in the game only for a script with a program: without one, nothing of the script is built into the map.":`테스트는 프로그램이 있는 스크립트만 게임에서 실행됩니다. 프로그램이 없으면 스크립트의 어떤 것도 맵에 빌드되지 않습니다.`,"Running the tests in the game…":`게임에서 테스트를 실행하는 중…`,"In the game: {passed} of {n, plural, one {# test} other {# tests}} passed.":`게임에서: 테스트 {n}개 중 {passed}개 통과.`,"The simulator disagrees on {n, plural, one {# test} other {# tests}}.":`테스트 {n}개에서 시뮬레이터의 결과가 다릅니다.`,"Go to where it failed in the game":`게임에서 실패한 곳으로 이동`,"in the game":`게임에서`,"Run All Tests in the Game":`게임에서 모든 테스트 실행`,"{n} a frame":`프레임당 {n}`,"{ms} ms a frame":`프레임당 {ms}ms`,"In the game, this line took {ms} ms of Remastered's time in one frame at the most ({n} conditions and actions): frame {frame} of the test “{test}”, which it ran in for {frames, plural, one {# frame} other {# frames}}. On a fast computer Remastered ran {smooth} ms of triggers a frame with no flicker seen, and slows past {most} ms; a slower computer gets there sooner. This is {share} of the {smooth} ms.":`게임에서 이 줄은 한 프레임에 리마스터의 시간을 최대 {ms}ms 썼습니다 (조건과 액션 {n}개): 테스트 “{test}”의 {frame}번째 프레임이며, 그 테스트에서 이 줄이 실행된 프레임은 {frames}개입니다. 빠른 컴퓨터에서 리마스터는 프레임당 트리거 {smooth}ms까지 깜빡임 없이 실행했고, {most}ms를 넘으면 게임이 느려집니다. 느린 컴퓨터는 더 일찍 그렇게 됩니다. 이는 {smooth}ms 중 {share}입니다.`,"Remastered's time a frame, frame {from} to {to}: {ms} ms at the most, at frame {frame}":`프레임당 리마스터의 시간, {from}–{to}번째 프레임: {frame}번째 프레임에서 최대 {ms}ms`,"{average} ms a frame on average, {peak} ms at the most (frame {frame}): {share} of the {smooth} ms of triggers a frame Remastered ran with no flicker seen":`프레임당 평균 {average}ms, 최대 {peak}ms ({frame}번째 프레임): 리마스터가 깜빡임 없이 실행한 프레임당 트리거 {smooth}ms 중 {share}`,"{ms} ms a frame at the most (frame {frame}), in {frames, plural, one {# frame} other {# frames}}":`프레임당 최대 {ms}ms ({frame}번째 프레임), {frames}개 프레임에서 실행`,"In the game, this line ran {n} conditions and actions in one frame at the most: frame {frame} of the test “{test}”, which it ran in for {frames, plural, one {# frame} other {# frames}}. On a fast computer Remastered ran 500 thousand a frame with no visible effect; its screen flickers from a million and the game slows at 5 million. This is {share} of the 500 thousand.":`게임에서 이 줄은 한 프레임에 조건과 액션을 최대 {n}개 실행했습니다: 테스트 “{test}”의 {frame}번째 프레임이며, 그 테스트에서 이 줄이 실행된 프레임은 {frames}개입니다. 빠른 컴퓨터에서 리마스터는 프레임당 50만 개에서 눈에 띄는 영향이 없었고, 백만 개부터 화면이 깜박이며 5백만 개에서 게임이 느려졌습니다. 이것은 50만 개 중 {share}입니다.`,"Conditions and actions a frame, frame {from} to {to}: {peak} at the most, at frame {frame}":`프레임당 조건과 액션, {from}–{to}번째 프레임: {frame}번째 프레임에서 최대 {peak}개`,cost:`비용`,"{average} conditions and actions a frame on average, {peak} at the most (frame {frame}): {share} of the 500 thousand a frame Remastered has run with no visible effect":`프레임당 조건과 액션 평균 {average}개, 최대 {peak}개 ({frame}번째 프레임): 리마스터가 눈에 띄는 영향 없이 실행한 프레임당 50만 개 중 {share}`,"Go to the line":`그 줄로 이동`,"{peak} a frame at the most (frame {frame}), in {frames, plural, one {# frame} other {# frames}}":`프레임당 최대 {peak}개 ({frame}번째 프레임), {frames}개 프레임에서 실행`,Debug:`디버그`,"The text lines up to this frame":`이 프레임까지의 텍스트 줄`,"The game":`게임`,"No picture of the game here.":`여기에는 게임 화면이 없습니다.`,"What this line wrote in frame {frame}, as it stands at the debugger's cursor; ×n: how many times it ran in the frame so far.":`{frame}번째 프레임에서 이 줄이 쓴 값으로, 디버거 커서 위치 기준입니다. ×n: 이 프레임에서 지금까지 실행된 횟수.`,"No picture of the game: {message}":`게임 화면 없음: {message}`,"No test is being debugged. Debug one from its row in the Testing view (the bug icon) or with Debug Test at Cursor: it runs once in the game with everything it did written down, and here you walk it, forwards and back.":`디버그 중인 테스트가 없습니다. 테스트 보기에서 테스트 줄의 벌레 아이콘이나 '커서 위치의 테스트를 게임에서 디버그'로 시작하세요. 테스트가 게임에서 한 번 실행되면서 한 일이 모두 기록되고, 여기서 그 기록을 앞뒤로 따라갈 수 있습니다.`,"The script changed since this run: its lines may have moved. Debug the test again to walk the script as it is.":`이 실행 이후 스크립트가 바뀌어 줄 위치가 달라졌을 수 있습니다. 지금의 스크립트를 따라가려면 테스트를 다시 디버그하세요.`,"Stopped at the breakpoint on line {line}.":`{line}번째 줄의 중단점에서 멈췄습니다.`,"{name} changed: {before} → {after}":`{name} 바뀜: {before} → {after}`,"The end of the run: {message}":`실행의 끝: {message}`,"the test failed":`테스트 실패`,"The start of the run.":`실행의 처음.`,"The end of the run: the test passed.":`실행의 끝: 테스트 통과.`,"The record stops at frame {frame} ({why}): the variables are not known past it.":`기록이 {frame}번째 프레임에서 끝납니다({why}). 그 뒤의 변수 값은 알 수 없습니다.`,"{test} failed: {message}":`{test} 실패: {message}`,"{test} passed.":`{test} 통과.`,"no frames":`프레임 없음`,"frame {frame}":`{frame}번째 프레임`,"end of frame":`프레임 끝`,"Continue backwards (F6): to the breakpoint or the change of a watched variable before this, or the start":`뒤로 계속 (F6): 이전의 중단점이나 조사식 변수가 바뀐 곳, 없으면 처음으로`,"Back a line (Shift+F10)":`한 줄 뒤로 (Shift+F10)`,"On a line (F10)":`한 줄 앞으로 (F10)`,"Continue (F5): to the next breakpoint or change of a watched variable, or the end":`계속 (F5): 다음 중단점이나 조사식 변수가 바뀌는 곳, 없으면 끝으로`,"Back a frame (Shift+F11)":`한 프레임 뒤로 (Shift+F11)`,"On a frame (F11): to the end of this one":`한 프레임 앞으로 (F11): 이 프레임의 끝으로`,"To the start of the run":`실행의 처음으로`,"Stop debugging (Shift+F5)":`디버깅 중지 (Shift+F5)`,"Every step":`모든 단계`,"Not recorded past frame {frame}: {why}":`{frame}번째 프레임 이후는 기록되지 않음: {why}`,"Line {line} runs in frame {frame}":`{line}번째 줄이 {frame}번째 프레임에서 실행됨`,"Frames {from} to {to}: the script's conditions and actions a frame ({peak} at the most). Red: a breakpoint's line runs; gold: a line of text was shown. Click or drag to go to a frame.":`{from}~{to}번째 프레임: 프레임당 스크립트의 조건과 액션 수 (최대 {peak}개). 빨간색: 중단점 줄이 실행됨, 금색: 텍스트 줄이 표시됨. 클릭하거나 끌어서 프레임으로 이동합니다.`,Variables:`변수`,"Not known here: the record stops at frame {frame}.":`여기서는 알 수 없습니다: 기록이 {frame}번째 프레임에서 끝납니다.`,Watched:`조사식`,"The build did not say where the programs' variables are.":`빌드가 프로그램 변수의 위치를 알려 주지 않았습니다.`,"Frame {frame}":`{frame}번째 프레임`,"line {line}":`{line}번째 줄`,"the test":`테스트`,"the game itself":`게임 자체`,"{n, plural, one {# write} other {# writes}}":`쓰기 {n}회`,"conditions and actions":`조건과 액션`,"… and {n} more steps":`… 외 {n}단계`,"Nothing shown yet.":`아직 표시된 것이 없습니다.`,"Stop watching {name}":`{name} 조사식 해제`,"Watch {name}: Continue stops where it changes":`{name} 조사: 계속하면 값이 바뀌는 곳에서 멈춥니다`,"Debug this test in the game: run it once with everything it did written down, then walk it forwards and back":`이 테스트를 게임에서 디버그: 한 일을 모두 기록하며 한 번 실행한 뒤, 앞뒤로 따라갑니다`,"Debugging in the game needs the scm-sim plugin (0.11 or newer) on scmjs.dev: install, update or turn it on under Plugins ▸ Manage Plugins….":`게임에서 디버그하려면 scmjs.dev의 scm-sim 플러그인(0.11 이상)이 필요합니다. 플러그인 ▸ 플러그인 관리…에서 설치하거나 업데이트하거나 켜세요.`,"Not debugged in the game: {message}":`게임에서 디버그하지 못함: {message}`,"Not debugged: the engine's page is from before the debugger. Reload the editor and try again.":`디버그하지 못함: 엔진 페이지가 디버거 이전 버전입니다. 편집기를 새로 고친 뒤 다시 시도하세요.`,"“{test}” is a test of several players: the debugger runs one game, and a test of several players runs as a copy of the game for each. Not yet.":`“{test}”는 여러 플레이어의 테스트입니다. 디버거는 게임 하나를 실행하지만, 여러 플레이어의 테스트는 플레이어마다 게임 사본을 하나씩 실행합니다. 아직 지원하지 않습니다.`,"Running “{test}” in the game, writing down everything it does…":`“{test}”를 게임에서 실행하며 하는 일을 모두 기록하는 중…`,"The scm-sim plugin's view is from before the debugger: update the plugin for a picture of the game.":`scm-sim 플러그인의 보기가 디버거 이전 버전입니다. 게임 화면을 보려면 플러그인을 업데이트하세요.`,"Debugging “{test}”: it failed in the game at frame {frame}. The debugger stands there; step back to see how it came to that.":`“{test}” 디버그 중: 게임에서 {frame}번째 프레임에 실패했습니다. 디버거가 그곳에 있습니다. 뒤로 가며 어떻게 그렇게 됐는지 보세요.`,"Debugging “{test}”: {frames, plural, one {# frame} other {# frames}} in the game, recorded in {ms} ms.":`“{test}” 디버그 중: 게임에서 {frames}개 프레임, {ms}ms에 기록했습니다.`,"Debug: Continue":`디버그: 계속`,"Debug: Continue Backwards":`디버그: 뒤로 계속`,"Debug: On a Line":`디버그: 한 줄 앞으로`,"Debug: Back a Line":`디버그: 한 줄 뒤로`,"Debug: On a Frame":`디버그: 한 프레임 앞으로`,"Debug: Back a Frame":`디버그: 한 프레임 뒤로`,"Debug: Stop":`디버그: 중지`,"Debug Test at Cursor in the Game":`커서 위치의 테스트를 게임에서 디버그`,"Toggle Breakpoint":`중단점 설정/해제`,"Breakpoint: the debugger's Continue stops before this line runs (a test's line: at the end of the frame it asks for). Click to take it away.":`중단점: 디버거에서 계속하면 이 줄이 실행되기 전에 멈춥니다(테스트의 줄이면 그 줄이 요청한 프레임의 끝에서). 클릭하면 없어집니다.`,game:`게임`,"Not looked up in the game: {message}":`게임에서 찾지 못함: {message}`,"Not looked up: {n, plural, one {# problem} other {# problems}} in the script.":`찾지 않음: 스크립트에 문제가 {n}개 있습니다.`,"The script has no program, so nothing of it is built into the map and no line of it can touch the game's memory: an EUD error came from the map's other triggers.":`스크립트에 프로그램이 없어 맵에 빌드되는 것이 없고, 어떤 줄도 게임의 메모리에 닿을 수 없습니다. EUD 오류는 맵의 다른 트리거에서 났습니다.`,"reads and writes":`읽고 씁니다`,writes:`씁니다`,reads:`읽습니다`,"Remastered ends the game on this.":`리마스터는 이때 게임을 끝냅니다.`,"Remastered does nothing with this.":`리마스터는 이것으로 아무것도 하지 않습니다.`,"Remastered was seen to allow this, so the game that ended did something else to it.":`리마스터가 이를 허용하는 것이 확인되었으므로, 끝난 게임은 여기에 다른 일을 했습니다.`,"This has not been seen in Remastered.":`리마스터에서 확인된 적이 없습니다.`,"In the game, this line {did} {place} ({times, plural, one {# time} other {# times}}). {said}":`게임에서 이 줄은 {place}을(를) {did} ({times}번). {said}`,"In the game, this line {did} the same field of another unit ({times, plural, one {# time} other {# times}}): a unit sits elsewhere in the table from one game to the next. {said}":`게임에서 이 줄은 다른 유닛의 같은 필드를 {did} ({times}번). 유닛이 테이블에서 놓이는 자리는 게임마다 다릅니다. {said}`,"The code Remastered showed when the game ended (EUD ERROR: 0x…):":`게임이 끝날 때 리마스터가 보여 준 코드 (EUD ERROR: 0x…):`,"“{text}” is not an EUD error code: Remastered shows one as EUD ERROR: 0x and eight digits.":`“{text}”은(는) EUD 오류 코드가 아닙니다. 리마스터는 EUD ERROR: 0x 뒤에 여덟 자리로 보여 줍니다.`,"Playing the map in the game, writing down what each line reads and writes…":`게임에서 맵을 플레이하며 각 줄이 읽고 쓰는 것을 기록하는 중…`,"the engine's page sent back no trace":`엔진 페이지가 기록을 돌려주지 않았습니다`,"EUD ERROR {code}: {place}, at 0x{address}.":`EUD ERROR {code}: {place}, 주소 0x{address}.`,"EUD ERROR {code} is {place}.":`EUD ERROR {code}은(는) {place}입니다.`,"{n, plural, one {# line touched it} other {# lines touched it}} in the game: {where}.":`게임에서 {n}개 줄이 여기에 닿았습니다: {where}.`,"No line touched that very unit, but {n, plural, one {# line touches} other {# lines touch}} the same field of other units, and a unit sits elsewhere in the table from one game to the next: {where}.":`그 유닛에 닿은 줄은 없지만, {n}개 줄이 다른 유닛의 같은 필드에 닿습니다. 유닛이 테이블에서 놓이는 자리는 게임마다 다릅니다: {where}.`,"Nothing touched it in {frames} frames of the map played with nobody at it, nor in {tests, plural, one {# test} other {# tests}}: the line that did is one this run did not reach. A test that gets there will find it.":`아무도 없이 맵을 {frames} 프레임 플레이하고 테스트 {tests}개를 돌리는 동안 아무것도 닿지 않았습니다. 닿은 줄은 이번 실행이 이르지 못한 줄입니다. 거기까지 가는 테스트가 있으면 찾을 수 있습니다.`,"Nothing touched it in {frames} frames of the map played with nobody at it: the line that did is one this run did not reach. A test that gets there will find it.":`아무도 없이 맵을 {frames} 프레임 플레이하는 동안 아무것도 닿지 않았습니다. 닿은 줄은 이번 실행이 이르지 못한 줄입니다. 거기까지 가는 테스트가 있으면 찾을 수 있습니다.`,"Find an EUD Error…":`EUD 오류 찾기…`,"Import Video…: a video, a picture, a sound or a MIDI file as a file of the script":`동영상 가져오기…: 동영상, 그림, 소리 또는 MIDI 파일을 스크립트 파일로 만듭니다`,'{path} is in the script: import {name} from "./{path}"; then await fog.play(P1, {name}) plays it.':`{path}이(가) 스크립트에 들어갔습니다: import {name} from "./{path}"; 다음 await fog.play(P1, {name})로 재생합니다.`,"Import Video…":`동영상 가져오기…`,"{name} could not be opened: {message}":`{name}을(를) 열 수 없습니다: {message}`,"{w} × {h} tiles, {n} frames at the game's speed on Fastest ({time}).":`{w} × {h} 타일, 가장 빠름 게임 속도로 {n} 프레임 ({time}).`,"{w} × {h} tiles.":`{w} × {h} 타일.`,"Import Video":`동영상 가져오기`,"Import Image":`그림 가져오기`,Frame:`프레임`,"Tiles across":`가로 타일`,"Tiles down":`세로 타일`,Threshold:`기준 밝기`,Ink:`잉크`,"Light parts":`밝은 부분`,"Dark parts":`어두운 부분`,File:`파일`,"Light tiles are the ink: what fog.light lights. A video's frames are taken at the game's speed on Fastest, a frame of it each frame of the game.":`밝은 타일이 잉크입니다: fog.light가 밝히는 곳입니다. 동영상의 프레임은 가장 빠름 게임 속도로 뽑아, 게임 한 프레임마다 한 프레임씩 씁니다.`,Cancel:`취소`,Import:`가져오기`,"A file name is letters, digits, _ - and ., folders with /.":`파일 이름은 문자, 숫자, _ - . 로 이루어지고, 폴더는 /로 나눕니다.`,"Decoding: frame {done} of {total}…":`디코딩 중: {total} 프레임 중 {done}…`,"{n} frames in {seconds} s, {kb} KB.":`{n} 프레임, {seconds}초, {kb} KB.`,"Not imported: {message}":`가져오지 못했습니다: {message}`,"Frame {n} of {total}":`{total} 프레임 중 {n}`,"{n} brushes":`브러시 {n}개`,Play:`재생`,Pause:`일시 정지`,"The video":`동영상`,"As the fog draws it":`안개가 그리는 모습`,'{w} × {h} tiles, {n} frames of {ms} ms ({time}){from}. Import it with import name from "./{file}".':`{w} × {h} 타일, {ms} ms 프레임 {n}개 ({time}){from}. import name from "./{file}"로 가져옵니다.`,"Keep as":`저장 형식`,"Pixels in colour (.image)":`컬러 픽셀 (.image)`,"Pixels in grey (.image)":`회색 픽셀 (.image)`,"Rows of ink to edit (.ts)":`편집할 잉크 줄 (.ts)`,"{w} × {h} pixels, a tile each when the fog draws them.":`{w} × {h} 픽셀, 안개가 그릴 때 픽셀 하나가 타일 하나입니다.`,"The pixels are kept for the script to work on when it is built — crop, scale, flip, threshold — and draw: fog.picture(logo.threshold(128)).":`픽셀을 그대로 저장해, 스크립트가 빌드할 때 다루고(crop, scale, flip, threshold) 그릴 수 있습니다: fog.picture(logo.threshold(128)).`,"Light tiles are the ink: what fog.light lights. The rows are a .ts file to edit, which fog.picture takes.":`밝은 타일이 잉크입니다: fog.light가 밝히는 곳입니다. 줄은 편집할 수 있는 .ts 파일이 되고, fog.picture가 받습니다.`,'{path} is in the script: import {name} from "./{path}"; then fog.picture({name}.threshold(128)) makes a picture of it.':`{path}이(가) 스크립트에 들어갔습니다: import {name} from "./{path}"; 다음 fog.picture({name}.threshold(128))로 그림을 만듭니다.`,Show:`보기`,"The image":`그림`,"Threshold, as the fog draws it":`임계값, 안개가 그리는 모습`,"Halftone, {w} × {h} cells, as the fog draws it":`하프톤, {w} × {h} 칸, 안개가 그리는 모습`,'{w} × {h} pixels{from}. Import it with import {name} from "./{file}".':`{w} × {h} 픽셀{from}. import {name} from "./{file}"로 가져옵니다.`,'{path} is in the script: import {name} from "./{path}"; then playWav({name}) plays it inside a program.':`{path}이(가) 스크립트에 들어갔습니다: import {name} from "./{path}"; 다음 program 안에서 playWav({name})로 재생합니다.`,"{seconds} seconds at {rate} Hz, about {kb} KB in the map.":`{seconds}초, {rate} Hz, 맵에서 약 {kb} KB.`,"11 kHz (smallest)":`11 kHz (가장 작음)`,"22 kHz":`22 kHz`,"44 kHz (largest)":`44 kHz (가장 큼)`,"Import Sound":`소리 가져오기`,Stop:`정지`,Rate:`샘플링 속도`,"Kept in mono, as the game's own sounds are. A program plays it with playWav(); clips made from it — trim, gain, pitch — are made when the script is built.":`게임의 소리처럼 모노로 저장합니다. program에서 playWav()로 재생하고, 이것으로 만든 클립(trim, gain, pitch)은 스크립트를 빌드할 때 만들어집니다.`,'{seconds} seconds at {rate} Hz{from}. Import it with import {name} from "./{file}", play it with playWav({name}).':`{seconds}초, {rate} Hz{from}. import {name} from "./{file}"로 가져오고 playWav({name})로 재생합니다.`,'{path} is in the script: import {name} from "./{path}"; then music.midi({name}, { … }) makes a song of its tracks.':`{path}이(가) 스크립트에 들어갔습니다. import {name} from "./{path}"로 가져오면 music.midi({name}, { … })가 그 트랙들로 곡을 만듭니다.`,"{tracks} tracks, {notes} notes, {bpm} beats a minute ({time}).":`트랙 {tracks}개, 음표 {notes}개, 분당 {bpm}박 ({time}).`,"The tempo changes later in the file; a song plays at the first.":`파일 뒤쪽에서 템포가 바뀝니다. 곡은 처음 템포로 재생됩니다.`,"{name} — the drums, {n} notes":`{name} — 드럼, 음표 {n}개`,"{name} — channel {channel}, instrument {program}, {n} notes":`{name} — 채널 {channel}, 악기 {program}, 음표 {n}개`,"Import MIDI":`MIDI 가져오기`,"The notes are kept, not the sounds: music.midi(notes, { Piano: keys }) plays each track you name with an instrument of the music library.":`소리가 아니라 음표를 저장합니다. music.midi(notes, { Piano: keys })는 이름을 준 트랙마다 음악 라이브러리의 악기로 연주합니다.`,'Import it with import {name} from "./{file}", make a song of it with music.midi({name}, { "{track}": music.presets.keys() }).':`import {name} from "./{file}"로 가져오고 music.midi({name}, { "{track}": music.presets.keys() })로 곡을 만듭니다.`,"The map has no script.":`맵에 스크립트가 없습니다.`,"built by TrigScript":`TrigScript가 빌드`,build:`빌드`,"the build's own triggers":`빌드 자체의 트리거`,"Stop at every step, the build's own triggers and what the game wrote by itself included, not only at the script's lines":`스크립트의 줄뿐 아니라 빌드 자체의 트리거와 게임이 스스로 쓴 것까지 모든 단계에서 멈춥니다`,"The programs will not be built: TrigScript does not take this yet ({reason}). The map is saved without them.":`프로그램이 빌드되지 않습니다: TrigScript가 아직 이것을 받지 못합니다({reason}). 맵은 프로그램 없이 저장됩니다.`,"Not looked up: the build did not say where its triggers are. Save once more.":`찾지 않음: 빌드가 트리거의 위치를 알려 주지 않았습니다. 한 번 더 저장하세요.`,"No line of the script touched it: the build's own triggers did ({n, plural, one {# time} other {# times}}).":`스크립트의 어떤 줄도 닿지 않았습니다. 빌드 자체의 트리거가 닿았습니다 ({n}번).`,"Counted in the lifted game and weighed by what Remastered was measured spending on each trigger, condition and action on a fast computer (Ryzen 9 7900X): the script's own triggers and the variables they go through, {average} conditions and actions a frame on average and {peak} at the most. The map's other triggers are apart: {ms} ms a frame. Remastered slows past {most} ms of triggers a frame there, and a slower computer sooner.":`리프트한 게임에서 센 수에, 빠른 컴퓨터(Ryzen 9 7900X)에서 리마스터가 트리거, 조건, 액션마다 쓰는 시간을 잰 값을 곱한 것입니다: 스크립트 자신의 트리거와 그 트리거가 거치는 변수, 프레임당 조건과 액션 평균 {average}개, 최대 {peak}개. 맵의 다른 트리거는 따로입니다: 프레임당 {ms}ms. 그 컴퓨터에서 리마스터는 프레임당 트리거가 {most}ms를 넘으면 느려지고, 느린 컴퓨터는 더 일찍 느려집니다.`,"Counted in the lifted game: the script's own triggers and the variables they go through. The map's other triggers are apart: {n} a frame.":`리프트한 게임에서 센 수입니다: 스크립트 자신의 트리거와 그 트리거가 거치는 변수. 맵의 다른 트리거는 따로입니다: 프레임당 {n}개.`,"The programs are laid out into the map by TrigScript itself when it is saved or tested: nothing to install, and the map is built in under a second":`맵을 저장하거나 테스트할 때 TrigScript가 직접 프로그램을 맵에 배치합니다: 설치할 것이 없고, 1초 안에 빌드됩니다`,"not built: Magenta's triggers":`빌드 안 함: Magenta의 트리거`,"Built by TrigScript: {n, plural, one {# program} other {# programs}} laid out into the map":`TrigScript가 빌드: 프로그램 {n}개를 맵에 배치`,"The programs were not built: TrigScript does not take this yet ({reason}).":`프로그램이 빌드되지 않았습니다: TrigScript가 아직 이것을 받지 못합니다({reason}).`,"A contribution holds programs only: its trigger() calls are not written into the map.":`기여는 프로그램만 담습니다: 그 안의 trigger() 호출은 맵에 쓰이지 않습니다.`,"TrigScript does not take this yet ({reason}).":`TrigScript가 아직 이것을 받지 못합니다({reason}).`,"{label} brought the file {file}, which is not under its own folder ({folder}/).":`{label}이(가) 가져온 파일 {file}은(는) 자기 폴더({folder}/) 아래에 있지 않습니다.`,"Magenta's triggers are in this map, and this Magenta builds them through eudplib, which rewrites the part of the map TrigScript's programs go into. Update Magenta to the version that builds with TrigScript, or keep the two in different maps.":`이 맵에 Magenta의 트리거가 있고, 이 Magenta는 eudplib로 빌드하는데 그 빌드가 TrigScript의 프로그램이 들어가는 맵의 부분을 다시 씁니다. TrigScript로 빌드하는 Magenta로 업데이트하거나, 둘을 다른 맵에 두세요.`,"{label} brought trigger() calls, and a contribution holds programs only.":`{label}이(가) trigger() 호출을 가져왔지만, 기여는 프로그램만 담습니다.`,"Built by TrigScript: {n, plural, one {# program} other {# programs}} laid out into the map, {contributors} among them":`TrigScript가 빌드: 프로그램 {n}개를 맵에 배치, 그중 {contributors}의 것 포함`,"{label}: TrigScript does not take this yet ({reason}).":`{label}: TrigScript가 아직 이것을 받지 못합니다({reason}).`,"{label} {version} (installed: {provided})":`{label} {version} (설치된 버전: {provided})`,"The map builds with its own copy of {n, plural, one {a library} other {# libraries}}, and the plugin installed here has another version: {list}. The copy stays until you update it.":`이 맵은 라이브러리 {n}개를 맵 안의 사본으로 빌드하는데, 여기에 설치된 플러그인은 다른 버전입니다: {list}. 업데이트하기 전까지 사본은 그대로 남습니다.`,"Keep the map's copy":`맵의 사본 유지`,Update:`업데이트`,"Update all":`모두 업데이트`,"TrigScript: libraries":`TrigScript: 라이브러리`,"TrigScript: update libraries":`TrigScript: 라이브러리 업데이트`};function Nu(e){e.i18n.register({ko:Mu});let t=new Mc(e,(e,n)=>Au(t,{file:e,line:n}));e.events.on(`language`,()=>ku(t)),e.events.on(`triggers`,()=>{t.relocate(),t.manifestChanged()&&t.claim.refresh()}),e.events.on(`file`,()=>{t.manifestChanged()&&t.claim.refresh()}),e.events.on(`document`,()=>{t.manifestChanged(),t.claim.refresh()}),e.commands.register({id:`open`,title:Z(`TrigScript…`),enabled:()=>e.document.isOpen(),run:e=>Au(t,Pu(e)?{file:Fu(e.file),line:Iu(e.line),dock:e.dock===!0||e.dock!==!1&&void 0}:{})}),e.commands.register({id:`dock`,title:Z(`TrigScript beside the map`),enabled:()=>e.document.isOpen(),run:()=>Au(t,{dock:!0})}),e.menu.add(`Triggers`,{label:Z(`TrigScript…`),after:`Text Trigger Editor…`,enabled:()=>e.document.isOpen(),command:`open`}),e.menu.add(`Triggers`,{label:Z(`TrigScript beside the map`),after:`TrigScript…`,enabled:()=>e.document.isOpen(),command:`dock`}),e.commands.register({id:`state`,title:Z(`TrigScript: state`),run:()=>t.state()}),e.commands.register({id:`declarations`,title:Z(`TrigScript: declarations`),run:e=>t.declarations({compact:Pu(e)&&e.compact===!0})}),e.commands.register({id:`compile`,title:Z(`TrigScript: compile`),run:e=>t.compile(Ru(e))}),e.commands.register({id:`build`,title:Z(`TrigScript: build`),run:(e,n)=>t.build(Ru(e),{takeOver:Pu(n)&&n.takeOver===!0,replaceStale:Pu(n)&&n.replaceStale===!0})}),e.commands.register({id:`print`,title:Z(`TrigScript: print records as script`),run:(e,n)=>t.print(Lu(e),Pu(n)?{imports:n.imports===!0,header:Fu(n.header)}:void 0)}),e.commands.register({id:`simulate`,title:Z(`TrigScript: simulate records`),run:(e,n,r)=>t.simulate(Lu(e),Math.max(1,Math.round(Number(n)||30)),{player:Pu(r)&&typeof r.player==`number`?r.player:void 0})}),e.commands.register({id:`libraries`,title:Z(`TrigScript: libraries`),run:()=>t.libraryStatus()}),e.commands.register({id:`updateLibraries`,title:Z(`TrigScript: update libraries`),run:e=>t.updateLibraries(Array.isArray(e)?e.filter(e=>typeof e==`string`):void 0)}),e.commands.register({id:`triggerAt`,title:Z(`TrigScript: trigger at a source line`),run:(e,n)=>t.triggerAt(Fu(e)??`main.ts`,Number(n)||0)});let n=t.attach(),r=e.services.provide(`build`,t.buildService(Ia),{version:2});return()=>{r.dispose(),n.dispose()}}var Pu=e=>typeof e==`object`&&!!e,Fu=e=>typeof e==`string`?e:void 0,Iu=e=>typeof e==`number`?e:void 0,Lu=e=>Array.isArray(e)?e:[],Ru=e=>Pu(e)?Object.fromEntries(Object.entries(e).filter(([,e])=>typeof e==`string`)):String(e??``);export{Nu as default};