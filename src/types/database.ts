/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum MapLocationType {
	None = 'None',
	Marker = 'Marker',
	Npc = 'Npc',
	LootContainer = 'LootContainer',
	ExplorationVolume = 'ExplorationVolume',
	PentashieldKey = 'PentashieldKey',
	SecretDoor = 'SecretDoor',
	InteractionTarget = 'InteractionTarget',
	IntelPoint = 'IntelPoint',
	GoToTarget = 'GoToTarget',
	ResourceNode = 'ResourceNode',
	Vehicle = 'Vehicle',
	DeepDesertSubMap = 'DeepDesertSubMap',
	ContractGotoTarget = 'ContractGotoTarget',
}

export enum LocalizationField {
	ListingTitle = 'ListingTitle',
	ListingDescription = 'ListingDescription',
	DetailsTitle = 'DetailsTitle',
	DetailsDescription = 'DetailsDescription',
}

export enum Language {
	En = 'En',
	De = 'De',
}

export enum EntityType {
	None = 'None',
	Unknown = 'Unknown',
	Any = 'Any',
	Item = 'Item',
	Recipe = 'Recipe',
	TechTree = 'TechTree',
	BuildableUnlockableSet = 'BuildableUnlockableSet',
	Placeable = 'Placeable',
	Npc = 'Npc',
	Faction = 'Faction',
	Contract = 'Contract',
	Dialogue = 'Dialogue',
	JourneyStory = 'JourneyStory',
	LootContainer = 'LootContainer',
	LootSpawner = 'LootSpawner',
	Skill = 'Skill',
	Research = 'Research',
	LandsraadHouse = 'LandsraadHouse',
	LandsraadTask = 'LandsraadTask',
	Vehicle = 'Vehicle',
	World = 'World',
}

export enum EVehicleModuleType {
	None = 'None',
	Uninitialized = 'Uninitialized',
	Chassis = 'Chassis',
	BodyHull = 'BodyHull',
	CockpitHull = 'CockpitHull',
	Locomotion = 'Locomotion',
	Generator = 'Generator',
	Perk = 'Perk',
	UtilitySlot1 = 'UtilitySlot1',
	UtilitySlot2 = 'UtilitySlot2',
	Engine = 'Engine',
	Locomotion2 = 'Locomotion2',
	Locomotion3 = 'Locomotion3',
	Locomotion4 = 'Locomotion4',
	Locomotion5 = 'Locomotion5',
	Locomotion6 = 'Locomotion6',
	Locomotion7 = 'Locomotion7',
	Locomotion8 = 'Locomotion8',
	Locomotion9 = 'Locomotion9',
	Locomotion10 = 'Locomotion10',
	BodyHull2 = 'BodyHull2',
	BodyHull3 = 'BodyHull3',
	BodyHull4 = 'BodyHull4',
	BodyHull5 = 'BodyHull5',
	UtilitySlot3 = 'UtilitySlot3',
	UtilitySlot4 = 'UtilitySlot4',
	UtilitySlot5 = 'UtilitySlot5',
}

export enum EVectorQuantization {
	None = 'None',
	RoundWholeNumber = 'RoundWholeNumber',
	RoundOneDecimal = 'RoundOneDecimal',
	RoundTwoDecimals = 'RoundTwoDecimals',
}

export enum ETickingGroup {
	None = 'None',
	TGPrePhysics = 'TG_PrePhysics',
	TGStartPhysics = 'TG_StartPhysics',
	TGDuringPhysics = 'TG_DuringPhysics',
	TGEndPhysics = 'TG_EndPhysics',
	TGPostPhysics = 'TG_PostPhysics',
	TGPostUpdateWork = 'TG_PostUpdateWork',
	TGLastDemotable = 'TG_LastDemotable',
	TGNewlySpawned = 'TG_NewlySpawned',
	TG_MAX = 'TG_MAX',
}

export enum ESurfaceSnappingType {
	None = 'None',
	ToSurface = 'ToSurface',
	ToSurfaceNormal = 'ToSurfaceNormal',
	ToLowestSurfaceInArea = 'ToLowestSurfaceInArea',
	ToTopmostSurfaceInArea = 'ToTopmostSurfaceInArea',
}

export enum ESpawnActorCollisionHandlingMethod {
	None = 'None',
	Undefined = 'Undefined',
	AlwaysSpawn = 'AlwaysSpawn',
	AdjustIfPossibleButAlwaysSpawn = 'AdjustIfPossibleButAlwaysSpawn',
	AdjustIfPossibleButDontSpawnIfColliding = 'AdjustIfPossibleButDontSpawnIfColliding',
	DontSpawnIfColliding = 'DontSpawnIfColliding',
}

export enum ESkillType {
	None = 'None',
	Ability = 'Ability',
	Technique = 'Technique',
	Attribute = 'Attribute',
}

export enum ESkillTree {
	None = 'None',
	Hidden = 'Hidden',
	BeneGesserit = 'BeneGesserit',
	Mentat = 'Mentat',
	Trooper = 'Trooper',
	Swordmaster = 'Swordmaster',
	Planetologist = 'Planetologist',
	MAX = 'MAX',
}

export enum ES2SCull {
	None = 'None',
	Players = 'Players',
	DistanceOnly = 'DistanceOnly',
	Off = 'Off',
}

export enum ERotatorQuantization {
	None = 'None',
	ByteComponents = 'ByteComponents',
	ShortComponents = 'ShortComponents',
}

export enum ERangeBoundTypes {
	None = 'None',
	Exclusive = 'Exclusive',
	Inclusive = 'Inclusive',
	Open = 'Open',
}

export enum EObjectNeedsLoadFor {
	None = 'None',
	ClientAndServer = 'ClientAndServer',
	ClientOnly = 'ClientOnly',
	ServerOnly = 'ServerOnly',
	EditorOnly = 'EditorOnly',
}

export enum ENetRole {
	None = 'None',
	ROLENone = 'ROLE_None',
	ROLESimulatedProxy = 'ROLE_SimulatedProxy',
	ROLEAutonomousProxy = 'ROLE_AutonomousProxy',
	ROLEAuthority = 'ROLE_Authority',
	ROLE_MAX = 'ROLE_MAX',
}

export enum ENetDormancy {
	None = 'None',
	DORMNever = 'DORM_Never',
	DORMAwake = 'DORM_Awake',
	DORMDormantAll = 'DORM_DormantAll',
	DORMDormantPartial = 'DORM_DormantPartial',
	DORMInitial = 'DORM_Initial',
	DORM_MAX = 'DORM_MAX',
}

export enum EModularAiBehaviorState {
	None = 'None',
	Active = 'Active',
	Inactive = 'Inactive',
	InUse = 'InUse',
}

export enum ELootTableItemVariety {
	None = 'None',
	RandomItems = 'RandomItems',
	LockFirstRandomItem = 'LockFirstRandomItem',
	Unique = 'Unique',
}

export enum EJourneyNodeEventState {
	None = 'None',
	Hidden = 'Hidden',
	Revealed = 'Revealed',
	Completed = 'Completed',
}

export enum EHostilityType {
	None = 'None',
	Neutral = 'Neutral',
	Hostile = 'Hostile',
}

export enum EGameplayModOp {
	None = 'None',
	Additive = 'Additive',
	Multiplicitive = 'Multiplicitive',
	Division = 'Division',
	Override = 'Override',
	Max = 'Max',
}

export enum EDoorState {
	None = 'None',
	Opened = 'Opened',
	ClosedByPlayer = 'ClosedByPlayer',
	ClosedAutomatically = 'ClosedAutomatically',
}

export enum EDetailMode {
	None = 'None',
	DMLow = 'DM_Low',
	DMMedium = 'DM_Medium',
	DMHigh = 'DM_High',
	DM_MAX = 'DM_MAX',
}

export enum EDespawnConditionFlags {
	None = 'None',
	QuickResetEvent = 'QuickResetEvent',
	QuickResetEventCountdown = 'QuickResetEventCountdown',
	VictoryEvent = 'VictoryEvent',
	BlockDespawnInCombat = 'BlockDespawnInCombat',
	DebugCommand = 'DebugCommand',
}

export enum EContractConditionType {
	None = 'None',
	Invalid = 'Invalid',
	KillNumber = 'KillNumber',
	ClearArea = 'ClearArea',
	DeliverItemById = 'DeliverItemById',
	ReceiveItemById = 'ReceiveItemById',
	Interact = 'Interact',
	GoToLocation = 'GoToLocation',
	ScanObject = 'ScanObject',
	UseAbility = 'UseAbility',
	PlayerHasFlags = 'PlayerHasFlags',
	HandInContract = 'HandInContract',
	ContactIssuer = 'ContactIssuer',
	Exsanguination = 'Exsanguination',
	UseWeapon = 'UseWeapon',
}

export enum ECompositeConditionType {
	None = 'None',
	And = 'And',
	Or = 'Or',
}

export enum EComponentMobility {
	None = 'None',
	Static = 'Static',
	Stationary = 'Stationary',
	Movable = 'Movable',
}

export enum EComponentCreationMethod {
	None = 'None',
	Native = 'Native',
	SimpleConstructionScript = 'SimpleConstructionScript',
	UserConstructionScript = 'UserConstructionScript',
	Instance = 'Instance',
}

export enum EAutoReceiveInput {
	None = 'None',
	Disabled = 'Disabled',
	Player0 = 'Player0',
	Player1 = 'Player1',
	Player2 = 'Player2',
	Player3 = 'Player3',
	Player4 = 'Player4',
	Player5 = 'Player5',
	Player6 = 'Player6',
	Player7 = 'Player7',
}

export enum EAuthorityTransferState {
	None = 'None',
	AUTHTRANSFERNone = 'AUTHTRANSFER_None',
	AUTHTRANSFERTransferring = 'AUTHTRANSFER_Transferring',
	AUTHTRANSFERFixed = 'AUTHTRANSFER_Fixed',
	AUTHTRANSFERSerializing = 'AUTHTRANSFER_Serializing',
	AUTHTRANSFER_MAX = 'AUTHTRANSFER_MAX',
}

export enum EActorUpdateOverlapsMethod {
	None = 'None',
	UseConfigDefault = 'UseConfigDefault',
	AlwaysUpdate = 'AlwaysUpdate',
	OnlyUpdateMovable = 'OnlyUpdateMovable',
	NeverUpdate = 'NeverUpdate',
}

export enum BindingFlags {
	Default = 'Default',
	IgnoreCase = 'IgnoreCase',
	DeclaredOnly = 'DeclaredOnly',
	Instance = 'Instance',
	Static = 'Static',
	Public = 'Public',
	NonPublic = 'NonPublic',
	FlattenHierarchy = 'FlattenHierarchy',
	InvokeMethod = 'InvokeMethod',
	CreateInstance = 'CreateInstance',
	GetField = 'GetField',
	SetField = 'SetField',
	GetProperty = 'GetProperty',
	SetProperty = 'SetProperty',
	PutDispProperty = 'PutDispProperty',
	PutRefDispProperty = 'PutRefDispProperty',
	ExactBinding = 'ExactBinding',
	SuppressChangeType = 'SuppressChangeType',
	OptionalParamBinding = 'OptionalParamBinding',
	IgnoreReturn = 'IgnoreReturn',
	DoNotWrapExceptions = 'DoNotWrapExceptions',
}

export interface AISpawnAnimation {
	m_Animation?: SoftObjectProperty;
	bInvisibleOnSpawn?: boolean | null;
	bPauseAIBehaviorDuringAnim?: boolean | null;
	bPlayed?: boolean | null;
}

export interface ActorComponentTickFunction {
	tickGroup?: ETickingGroup;
	endTickGroup?: ETickingGroup;
	bTickEvenWhenPaused?: boolean | null;
	bCanEverTick?: boolean | null;
	bStartWithTickEnabled?: boolean | null;
	bAllowTickOnDedicatedServer?: boolean | null;
	bAllowAggregation?: boolean | null;
	bTickWithOwner?: boolean | null;
	/** @format int32 */
	priorityGroup?: number;
	/** @format float */
	priorityTime?: number;
	tickClass?: ObjectProperty;
	/** @format float */
	tickInterval?: number;
}

export interface ActorTickFunction {
	tickGroup?: ETickingGroup;
	endTickGroup?: ETickingGroup;
	bTickEvenWhenPaused?: boolean | null;
	bCanEverTick?: boolean | null;
	bStartWithTickEnabled?: boolean | null;
	bAllowTickOnDedicatedServer?: boolean | null;
	bAllowAggregation?: boolean | null;
	bTickWithOwner?: boolean | null;
	/** @format int32 */
	priorityGroup?: number;
	/** @format float */
	priorityTime?: number;
	tickClass?: ObjectProperty;
	/** @format float */
	tickInterval?: number;
}

export interface AlwaysSerializeAttribute {
	typeId?: any;
}

export interface ApiExcludeAttribute {
	typeId?: any;
}

export type AreaTagsBuilder = object;

export type AreaTagsData = object;

export interface AssetEntry {
	type?: string;
	name?: string;
	outer?: string;
	/** @format int32 */
	index?: number;
	class?: string;
	superStruct?: ObjectProperty;
	template?: ObjectProperty;
	rowStruct?: string;
	path?: string;
	classDefaultObject?: ObjectProperty;
	persistentLevel?: ObjectProperty;
	actors?: ObjectProperty[] | null;
	assetUserData?: ObjectProperty[] | null;
	fullJson?: string;
	/** @format byte */
	bitmapBytes?: string | null;
	data?: any[] | null;
	dataIndex?: DataIndex;
}

export interface AssetEntryLink {
	assetPath?: string;
	assetEntryName?: string;
	assetEntryType?: string;
	/** @format int32 */
	assetEntryIndex?: number;
}

export interface AttributeName {
	name?: string;
	percentBased?: boolean;
	higherIsBetter?: boolean;
}

export type AttributeNameMappings = object;

export interface AttributeValueModel {
	key?: string;
	attribute?: AttributeName;
	value?: any;
}

export interface BPAISpawnManagerC {
	primaryActorTick?: ActorTickFunction;
	bNetTemporary?: boolean | null;
	bOnlyRelevantToOwner?: boolean | null;
	bAlwaysRelevant?: boolean | null;
	bReplicateMovement?: boolean | null;
	bCallPreReplication?: boolean | null;
	bCallPreReplicationForReplay?: boolean | null;
	bHidden?: boolean | null;
	bTearOff?: boolean | null;
	bForceNetAddressable?: boolean | null;
	bExchangedRoles?: boolean | null;
	bNetLoadOnClient?: boolean | null;
	bNetUseOwnerRelevancy?: boolean | null;
	bRelevantForNetworkReplays?: boolean | null;
	bRelevantForLevelBounds?: boolean | null;
	bReplayRewindable?: boolean | null;
	bAllowTickBeforeBeginPlay?: boolean | null;
	bAutoDestroyWhenFinished?: boolean | null;
	bCanBeDamaged?: boolean | null;
	bBlockInput?: boolean | null;
	bCollideWhenPlacing?: boolean | null;
	bFindCameraComponentWhenViewTarget?: boolean | null;
	bGenerateOverlapEventsDuringLevelStreaming?: boolean | null;
	bIgnoresOriginShifting?: boolean | null;
	bEnableAutoLODGeneration?: boolean | null;
	bIsEditorOnlyActor?: boolean | null;
	bActorSeamlessTraveled?: boolean | null;
	bUseExtendedRelevancyTimeout?: boolean | null;
	bIgnoreLevelBoundsClamp?: boolean | null;
	bUsesFgl?: boolean | null;
	bIsActorPooled?: boolean | null;
	fglType?: ObjectProperty;
	entityId?: EntityId;
	/** @format int32 */
	m_DimensionIndex?: number;
	actorNeedsLoadFor?: EObjectNeedsLoadFor;
	layoutReplicator?: ReplicatorProxy;
	bReplicates?: boolean | null;
	bProxyReplicates?: boolean | null;
	bProxyHasInitialReplication?: boolean | null;
	s2sCull?: ES2SCull;
	bLostRelevancy?: boolean | null;
	bNoServerReplicates?: boolean | null;
	bCanBeInCluster?: boolean | null;
	bAllowReceiveTickEventOnDedicatedServer?: boolean | null;
	bReplicateUsingRegisteredSubObjectList?: boolean | null;
	bActorEnableCollision?: boolean | null;
	bActorIsBeingDestroyed?: boolean | null;
	bAsyncPhysicsTickEnabled?: boolean | null;
	updateOverlapsMethodDuringLevelStreaming?: EActorUpdateOverlapsMethod;
	defaultUpdateOverlapsMethodDuringLevelStreaming?: EActorUpdateOverlapsMethod;
	/** @format float */
	initialLifeSpan?: number;
	/** @format float */
	customTimeDilation?: number;
	remoteRole?: ENetRole;
	/** @format int32 */
	rayTracingGroupId?: number;
	attachmentReplication?: RepAttachment;
	replicatedMovement?: RepMovement;
	owner?: ObjectProperty;
	netDriverName?: string;
	role?: ENetRole;
	netDormancy?: ENetDormancy;
	spawnCollisionHandlingMethod?: ESpawnActorCollisionHandlingMethod;
	autoReceiveInput?: EAutoReceiveInput;
	/** @format int32 */
	inputPriority?: number;
	inputComponent?: ObjectProperty;
	/** @format float */
	netCullDistanceSquared?: number;
	/** @format float */
	viewTargetNetCullDistanceSquared?: number;
	/** @format int32 */
	netTag?: number;
	/** @format float */
	netUpdateFrequency?: number;
	/** @format float */
	minNetUpdateFrequency?: number;
	/** @format float */
	netPriority?: number;
	instigator?: ObjectProperty;
	children?: ObjectProperty[] | null;
	originalActor?: ObjectProperty;
	authorityTransferState?: EAuthorityTransferState;
	bActorIsWaitingForPersistence?: boolean | null;
	bActorBeingReplaced?: boolean | null;
	rootComponent?: ObjectProperty;
	layers?: string[] | null;
	parentComponent?: ObjectProperty;
	tags?: string[] | null;
	onTakeAnyDamage?: any;
	onTakePointDamage?: any;
	onTakeRadialDamage?: any;
	onActorBeginOverlap?: any;
	onActorEndOverlap?: any;
	onBeginCursorOver?: any;
	onEndCursorOver?: any;
	onClicked?: any;
	onReleased?: any;
	onInputTouchBegin?: any;
	onInputTouchEnd?: any;
	onInputTouchEnter?: any;
	onInputTouchLeave?: any;
	onActorHit?: any;
	onDestroyed?: any;
	onEndPlay?: any;
	instanceComponents?: ObjectProperty[] | null;
	blueprintCreatedComponents?: ObjectProperty[] | null;
	m_bGhostSpawningEnabled?: boolean | null;
	m_ModularAIBehaviorActors?: ObjectProperty[] | null;
	m_ModularAIBehaviors?: ModularAiBehaviorInstance[] | null;
	m_SpawnLocations?: ObjectProperty[] | null;
	m_CachedSpawnLocations?: ObjectProperty[] | null;
	m_StaticSpawnLocations?: ObjectProperty[] | null;
	m_CachedStaticSpawnLocations?: ObjectProperty[] | null;
	m_SpawnedLocations?: ObjectProperty[] | null;
	m_SpawnComponent?: ObjectProperty;
	m_WaveSpawnComponent?: ObjectProperty;
	m_bAutoDespawn?: boolean | null;
	m_DespawnConditionFlags?: EDespawnConditionFlags;
	m_NavInvokerVolume?: ObjectProperty;
	m_NavGrid?: ObjectProperty;
	m_EncounterActorComponent?: ObjectProperty;
	m_TriggerListenerComponent?: ObjectProperty;
	/** @format float */
	m_Radius?: number;
	m_CombatVolume?: ObjectProperty;
	m_OnControlStatusChangedDelegate?: any;
	m_OnTriggerSpawning?: any;
	m_OnNpcsBeginSpawningDelay?: any;
	m_OnNpcsBeginSpawning?: any;
	m_OnAllNpcsKilled?: any;
	m_OnCombatBegin?: any;
	m_OnIdleBegin?: any;
	m_OnSpawnerClearedEvent?: any;
	m_OnSingleNPCSpawnedEvent?: any;
	m_OnSingleNPCRemovedEvent?: any;
	m_DefaultSquadController?: ObjectProperty;
	/** @format float */
	m_QuickResetDespawnDelaySeconds?: number;
	m_OverriddenNPCAttributes?: OverriddenNPCAttribute[] | null;
	aiPopulationSpawn?: ObjectProperty;
}

export interface BPAIStaticSpawnLocationC {
	primaryActorTick?: ActorTickFunction;
	bNetTemporary?: boolean | null;
	bOnlyRelevantToOwner?: boolean | null;
	bAlwaysRelevant?: boolean | null;
	bReplicateMovement?: boolean | null;
	bCallPreReplication?: boolean | null;
	bCallPreReplicationForReplay?: boolean | null;
	bHidden?: boolean | null;
	bTearOff?: boolean | null;
	bForceNetAddressable?: boolean | null;
	bExchangedRoles?: boolean | null;
	bNetLoadOnClient?: boolean | null;
	bNetUseOwnerRelevancy?: boolean | null;
	bRelevantForNetworkReplays?: boolean | null;
	bRelevantForLevelBounds?: boolean | null;
	bReplayRewindable?: boolean | null;
	bAllowTickBeforeBeginPlay?: boolean | null;
	bAutoDestroyWhenFinished?: boolean | null;
	bCanBeDamaged?: boolean | null;
	bBlockInput?: boolean | null;
	bCollideWhenPlacing?: boolean | null;
	bFindCameraComponentWhenViewTarget?: boolean | null;
	bGenerateOverlapEventsDuringLevelStreaming?: boolean | null;
	bIgnoresOriginShifting?: boolean | null;
	bEnableAutoLODGeneration?: boolean | null;
	bIsEditorOnlyActor?: boolean | null;
	bActorSeamlessTraveled?: boolean | null;
	bUseExtendedRelevancyTimeout?: boolean | null;
	bIgnoreLevelBoundsClamp?: boolean | null;
	bUsesFgl?: boolean | null;
	bIsActorPooled?: boolean | null;
	fglType?: ObjectProperty;
	entityId?: EntityId;
	/** @format int32 */
	m_DimensionIndex?: number;
	actorNeedsLoadFor?: EObjectNeedsLoadFor;
	layoutReplicator?: ReplicatorProxy;
	bReplicates?: boolean | null;
	bProxyReplicates?: boolean | null;
	bProxyHasInitialReplication?: boolean | null;
	s2sCull?: ES2SCull;
	bLostRelevancy?: boolean | null;
	bNoServerReplicates?: boolean | null;
	bCanBeInCluster?: boolean | null;
	bAllowReceiveTickEventOnDedicatedServer?: boolean | null;
	bReplicateUsingRegisteredSubObjectList?: boolean | null;
	bActorEnableCollision?: boolean | null;
	bActorIsBeingDestroyed?: boolean | null;
	bAsyncPhysicsTickEnabled?: boolean | null;
	updateOverlapsMethodDuringLevelStreaming?: EActorUpdateOverlapsMethod;
	defaultUpdateOverlapsMethodDuringLevelStreaming?: EActorUpdateOverlapsMethod;
	/** @format float */
	initialLifeSpan?: number;
	/** @format float */
	customTimeDilation?: number;
	remoteRole?: ENetRole;
	/** @format int32 */
	rayTracingGroupId?: number;
	attachmentReplication?: RepAttachment;
	replicatedMovement?: RepMovement;
	owner?: ObjectProperty;
	netDriverName?: string;
	role?: ENetRole;
	netDormancy?: ENetDormancy;
	spawnCollisionHandlingMethod?: ESpawnActorCollisionHandlingMethod;
	autoReceiveInput?: EAutoReceiveInput;
	/** @format int32 */
	inputPriority?: number;
	inputComponent?: ObjectProperty;
	/** @format float */
	netCullDistanceSquared?: number;
	/** @format float */
	viewTargetNetCullDistanceSquared?: number;
	/** @format int32 */
	netTag?: number;
	/** @format float */
	netUpdateFrequency?: number;
	/** @format float */
	minNetUpdateFrequency?: number;
	/** @format float */
	netPriority?: number;
	instigator?: ObjectProperty;
	children?: ObjectProperty[] | null;
	originalActor?: ObjectProperty;
	authorityTransferState?: EAuthorityTransferState;
	bActorIsWaitingForPersistence?: boolean | null;
	bActorBeingReplaced?: boolean | null;
	rootComponent?: ObjectProperty;
	layers?: string[] | null;
	parentComponent?: ObjectProperty;
	tags?: string[] | null;
	onTakeAnyDamage?: any;
	onTakePointDamage?: any;
	onTakeRadialDamage?: any;
	onActorBeginOverlap?: any;
	onActorEndOverlap?: any;
	onBeginCursorOver?: any;
	onEndCursorOver?: any;
	onClicked?: any;
	onReleased?: any;
	onInputTouchBegin?: any;
	onInputTouchEnd?: any;
	onInputTouchEnter?: any;
	onInputTouchLeave?: any;
	onActorHit?: any;
	onDestroyed?: any;
	onEndPlay?: any;
	instanceComponents?: ObjectProperty[] | null;
	blueprintCreatedComponents?: ObjectProperty[] | null;
	m_SpawnLocations?: ObjectProperty[] | null;
	m_StaticSpawnLocations?: ObjectProperty[] | null;
	m_OnWaveStartAISpawn?: any;
	m_ContractTagsToAddOnSpawn?: GameplayTagContainer;
	m_SpawningAnimation?: AISpawnAnimation;
	m_bCanSnapToGroundOnSpawn?: boolean | null;
	m_ClientVisibilityTagQuery?: GameplayTagQuery;
	m_bInteractableDuringCombat?: boolean | null;
	m_PropSettings?: PropSettings;
	m_NPCType?: DataTableRowHandle;
	m_bOnlySpawnFromDescriptor?: boolean | null;
	info?: ObjectProperty;
	baseText?: TextProperty;
}

export interface BPAiSpawnLocationC {
	primaryActorTick?: ActorTickFunction;
	bNetTemporary?: boolean | null;
	bOnlyRelevantToOwner?: boolean | null;
	bAlwaysRelevant?: boolean | null;
	bReplicateMovement?: boolean | null;
	bCallPreReplication?: boolean | null;
	bCallPreReplicationForReplay?: boolean | null;
	bHidden?: boolean | null;
	bTearOff?: boolean | null;
	bForceNetAddressable?: boolean | null;
	bExchangedRoles?: boolean | null;
	bNetLoadOnClient?: boolean | null;
	bNetUseOwnerRelevancy?: boolean | null;
	bRelevantForNetworkReplays?: boolean | null;
	bRelevantForLevelBounds?: boolean | null;
	bReplayRewindable?: boolean | null;
	bAllowTickBeforeBeginPlay?: boolean | null;
	bAutoDestroyWhenFinished?: boolean | null;
	bCanBeDamaged?: boolean | null;
	bBlockInput?: boolean | null;
	bCollideWhenPlacing?: boolean | null;
	bFindCameraComponentWhenViewTarget?: boolean | null;
	bGenerateOverlapEventsDuringLevelStreaming?: boolean | null;
	bIgnoresOriginShifting?: boolean | null;
	bEnableAutoLODGeneration?: boolean | null;
	bIsEditorOnlyActor?: boolean | null;
	bActorSeamlessTraveled?: boolean | null;
	bUseExtendedRelevancyTimeout?: boolean | null;
	bIgnoreLevelBoundsClamp?: boolean | null;
	bUsesFgl?: boolean | null;
	bIsActorPooled?: boolean | null;
	fglType?: ObjectProperty;
	entityId?: EntityId;
	/** @format int32 */
	m_DimensionIndex?: number;
	actorNeedsLoadFor?: EObjectNeedsLoadFor;
	layoutReplicator?: ReplicatorProxy;
	bReplicates?: boolean | null;
	bProxyReplicates?: boolean | null;
	bProxyHasInitialReplication?: boolean | null;
	s2sCull?: ES2SCull;
	bLostRelevancy?: boolean | null;
	bNoServerReplicates?: boolean | null;
	bCanBeInCluster?: boolean | null;
	bAllowReceiveTickEventOnDedicatedServer?: boolean | null;
	bReplicateUsingRegisteredSubObjectList?: boolean | null;
	bActorEnableCollision?: boolean | null;
	bActorIsBeingDestroyed?: boolean | null;
	bAsyncPhysicsTickEnabled?: boolean | null;
	updateOverlapsMethodDuringLevelStreaming?: EActorUpdateOverlapsMethod;
	defaultUpdateOverlapsMethodDuringLevelStreaming?: EActorUpdateOverlapsMethod;
	/** @format float */
	initialLifeSpan?: number;
	/** @format float */
	customTimeDilation?: number;
	remoteRole?: ENetRole;
	/** @format int32 */
	rayTracingGroupId?: number;
	attachmentReplication?: RepAttachment;
	replicatedMovement?: RepMovement;
	owner?: ObjectProperty;
	netDriverName?: string;
	role?: ENetRole;
	netDormancy?: ENetDormancy;
	spawnCollisionHandlingMethod?: ESpawnActorCollisionHandlingMethod;
	autoReceiveInput?: EAutoReceiveInput;
	/** @format int32 */
	inputPriority?: number;
	inputComponent?: ObjectProperty;
	/** @format float */
	netCullDistanceSquared?: number;
	/** @format float */
	viewTargetNetCullDistanceSquared?: number;
	/** @format int32 */
	netTag?: number;
	/** @format float */
	netUpdateFrequency?: number;
	/** @format float */
	minNetUpdateFrequency?: number;
	/** @format float */
	netPriority?: number;
	instigator?: ObjectProperty;
	children?: ObjectProperty[] | null;
	originalActor?: ObjectProperty;
	authorityTransferState?: EAuthorityTransferState;
	bActorIsWaitingForPersistence?: boolean | null;
	bActorBeingReplaced?: boolean | null;
	rootComponent?: ObjectProperty;
	layers?: string[] | null;
	parentComponent?: ObjectProperty;
	tags?: string[] | null;
	onTakeAnyDamage?: any;
	onTakePointDamage?: any;
	onTakeRadialDamage?: any;
	onActorBeginOverlap?: any;
	onActorEndOverlap?: any;
	onBeginCursorOver?: any;
	onEndCursorOver?: any;
	onClicked?: any;
	onReleased?: any;
	onInputTouchBegin?: any;
	onInputTouchEnd?: any;
	onInputTouchEnter?: any;
	onInputTouchLeave?: any;
	onActorHit?: any;
	onDestroyed?: any;
	onEndPlay?: any;
	instanceComponents?: ObjectProperty[] | null;
	blueprintCreatedComponents?: ObjectProperty[] | null;
	m_SpawnLocations?: ObjectProperty[] | null;
	m_StaticSpawnLocations?: ObjectProperty[] | null;
	m_OnWaveStartAISpawn?: any;
	m_ContractTagsToAddOnSpawn?: GameplayTagContainer;
	m_SpawningAnimation?: AISpawnAnimation;
	m_bCanSnapToGroundOnSpawn?: boolean | null;
	m_ClientVisibilityTagQuery?: GameplayTagQuery;
	m_bInteractableDuringCombat?: boolean | null;
	m_PropSettings?: PropSettings;
	m_bIsStatic?: boolean | null;
	npcType?: DataTableRowHandle;
	m_IdleAnimation?: SoftObjectProperty;
	m_JobTags?: GameplayTagContainer;
	m_bAllowMultipleSpawns?: boolean | null;
	/** @format int32 */
	m_Priority?: number;
	m_EncounterActorComponent?: ObjectProperty;
	m_MetaTags?: GameplayTagContainer;
	arrow?: ObjectProperty;
}

export interface BPContractGoToTargetC {
	primaryActorTick?: ActorTickFunction;
	bNetTemporary?: boolean | null;
	bOnlyRelevantToOwner?: boolean | null;
	bAlwaysRelevant?: boolean | null;
	bReplicateMovement?: boolean | null;
	bCallPreReplication?: boolean | null;
	bCallPreReplicationForReplay?: boolean | null;
	bHidden?: boolean | null;
	bTearOff?: boolean | null;
	bForceNetAddressable?: boolean | null;
	bExchangedRoles?: boolean | null;
	bNetLoadOnClient?: boolean | null;
	bNetUseOwnerRelevancy?: boolean | null;
	bRelevantForNetworkReplays?: boolean | null;
	bRelevantForLevelBounds?: boolean | null;
	bReplayRewindable?: boolean | null;
	bAllowTickBeforeBeginPlay?: boolean | null;
	bAutoDestroyWhenFinished?: boolean | null;
	bCanBeDamaged?: boolean | null;
	bBlockInput?: boolean | null;
	bCollideWhenPlacing?: boolean | null;
	bFindCameraComponentWhenViewTarget?: boolean | null;
	bGenerateOverlapEventsDuringLevelStreaming?: boolean | null;
	bIgnoresOriginShifting?: boolean | null;
	bEnableAutoLODGeneration?: boolean | null;
	bIsEditorOnlyActor?: boolean | null;
	bActorSeamlessTraveled?: boolean | null;
	bUseExtendedRelevancyTimeout?: boolean | null;
	bIgnoreLevelBoundsClamp?: boolean | null;
	bUsesFgl?: boolean | null;
	bIsActorPooled?: boolean | null;
	fglType?: ObjectProperty;
	entityId?: EntityId;
	/** @format int32 */
	m_DimensionIndex?: number;
	actorNeedsLoadFor?: EObjectNeedsLoadFor;
	layoutReplicator?: ReplicatorProxy;
	bReplicates?: boolean | null;
	bProxyReplicates?: boolean | null;
	bProxyHasInitialReplication?: boolean | null;
	s2sCull?: ES2SCull;
	bLostRelevancy?: boolean | null;
	bNoServerReplicates?: boolean | null;
	bCanBeInCluster?: boolean | null;
	bAllowReceiveTickEventOnDedicatedServer?: boolean | null;
	bReplicateUsingRegisteredSubObjectList?: boolean | null;
	bActorEnableCollision?: boolean | null;
	bActorIsBeingDestroyed?: boolean | null;
	bAsyncPhysicsTickEnabled?: boolean | null;
	updateOverlapsMethodDuringLevelStreaming?: EActorUpdateOverlapsMethod;
	defaultUpdateOverlapsMethodDuringLevelStreaming?: EActorUpdateOverlapsMethod;
	/** @format float */
	initialLifeSpan?: number;
	/** @format float */
	customTimeDilation?: number;
	remoteRole?: ENetRole;
	/** @format int32 */
	rayTracingGroupId?: number;
	attachmentReplication?: RepAttachment;
	replicatedMovement?: RepMovement;
	owner?: ObjectProperty;
	netDriverName?: string;
	role?: ENetRole;
	netDormancy?: ENetDormancy;
	spawnCollisionHandlingMethod?: ESpawnActorCollisionHandlingMethod;
	autoReceiveInput?: EAutoReceiveInput;
	/** @format int32 */
	inputPriority?: number;
	inputComponent?: ObjectProperty;
	/** @format float */
	netCullDistanceSquared?: number;
	/** @format float */
	viewTargetNetCullDistanceSquared?: number;
	/** @format int32 */
	netTag?: number;
	/** @format float */
	netUpdateFrequency?: number;
	/** @format float */
	minNetUpdateFrequency?: number;
	/** @format float */
	netPriority?: number;
	instigator?: ObjectProperty;
	children?: ObjectProperty[] | null;
	originalActor?: ObjectProperty;
	authorityTransferState?: EAuthorityTransferState;
	bActorIsWaitingForPersistence?: boolean | null;
	bActorBeingReplaced?: boolean | null;
	rootComponent?: ObjectProperty;
	layers?: string[] | null;
	parentComponent?: ObjectProperty;
	tags?: string[] | null;
	onTakeAnyDamage?: any;
	onTakePointDamage?: any;
	onTakeRadialDamage?: any;
	onActorBeginOverlap?: any;
	onActorEndOverlap?: any;
	onBeginCursorOver?: any;
	onEndCursorOver?: any;
	onClicked?: any;
	onReleased?: any;
	onInputTouchBegin?: any;
	onInputTouchEnd?: any;
	onInputTouchEnter?: any;
	onInputTouchLeave?: any;
	onActorHit?: any;
	onDestroyed?: any;
	onEndPlay?: any;
	instanceComponents?: ObjectProperty[] | null;
	blueprintCreatedComponents?: ObjectProperty[] | null;
	contractContent?: ObjectProperty;
}

export interface BPContractInteractionTargetC {
	primaryActorTick?: ActorTickFunction;
	bNetTemporary?: boolean | null;
	bOnlyRelevantToOwner?: boolean | null;
	bAlwaysRelevant?: boolean | null;
	bReplicateMovement?: boolean | null;
	bCallPreReplication?: boolean | null;
	bCallPreReplicationForReplay?: boolean | null;
	bHidden?: boolean | null;
	bTearOff?: boolean | null;
	bForceNetAddressable?: boolean | null;
	bExchangedRoles?: boolean | null;
	bNetLoadOnClient?: boolean | null;
	bNetUseOwnerRelevancy?: boolean | null;
	bRelevantForNetworkReplays?: boolean | null;
	bRelevantForLevelBounds?: boolean | null;
	bReplayRewindable?: boolean | null;
	bAllowTickBeforeBeginPlay?: boolean | null;
	bAutoDestroyWhenFinished?: boolean | null;
	bCanBeDamaged?: boolean | null;
	bBlockInput?: boolean | null;
	bCollideWhenPlacing?: boolean | null;
	bFindCameraComponentWhenViewTarget?: boolean | null;
	bGenerateOverlapEventsDuringLevelStreaming?: boolean | null;
	bIgnoresOriginShifting?: boolean | null;
	bEnableAutoLODGeneration?: boolean | null;
	bIsEditorOnlyActor?: boolean | null;
	bActorSeamlessTraveled?: boolean | null;
	bUseExtendedRelevancyTimeout?: boolean | null;
	bIgnoreLevelBoundsClamp?: boolean | null;
	bUsesFgl?: boolean | null;
	bIsActorPooled?: boolean | null;
	fglType?: ObjectProperty;
	entityId?: EntityId;
	/** @format int32 */
	m_DimensionIndex?: number;
	actorNeedsLoadFor?: EObjectNeedsLoadFor;
	layoutReplicator?: ReplicatorProxy;
	bReplicates?: boolean | null;
	bProxyReplicates?: boolean | null;
	bProxyHasInitialReplication?: boolean | null;
	s2sCull?: ES2SCull;
	bLostRelevancy?: boolean | null;
	bNoServerReplicates?: boolean | null;
	bCanBeInCluster?: boolean | null;
	bAllowReceiveTickEventOnDedicatedServer?: boolean | null;
	bReplicateUsingRegisteredSubObjectList?: boolean | null;
	bActorEnableCollision?: boolean | null;
	bActorIsBeingDestroyed?: boolean | null;
	bAsyncPhysicsTickEnabled?: boolean | null;
	updateOverlapsMethodDuringLevelStreaming?: EActorUpdateOverlapsMethod;
	defaultUpdateOverlapsMethodDuringLevelStreaming?: EActorUpdateOverlapsMethod;
	/** @format float */
	initialLifeSpan?: number;
	/** @format float */
	customTimeDilation?: number;
	remoteRole?: ENetRole;
	/** @format int32 */
	rayTracingGroupId?: number;
	attachmentReplication?: RepAttachment;
	replicatedMovement?: RepMovement;
	owner?: ObjectProperty;
	netDriverName?: string;
	role?: ENetRole;
	netDormancy?: ENetDormancy;
	spawnCollisionHandlingMethod?: ESpawnActorCollisionHandlingMethod;
	autoReceiveInput?: EAutoReceiveInput;
	/** @format int32 */
	inputPriority?: number;
	inputComponent?: ObjectProperty;
	/** @format float */
	netCullDistanceSquared?: number;
	/** @format float */
	viewTargetNetCullDistanceSquared?: number;
	/** @format int32 */
	netTag?: number;
	/** @format float */
	netUpdateFrequency?: number;
	/** @format float */
	minNetUpdateFrequency?: number;
	/** @format float */
	netPriority?: number;
	instigator?: ObjectProperty;
	children?: ObjectProperty[] | null;
	originalActor?: ObjectProperty;
	authorityTransferState?: EAuthorityTransferState;
	bActorIsWaitingForPersistence?: boolean | null;
	bActorBeingReplaced?: boolean | null;
	rootComponent?: ObjectProperty;
	layers?: string[] | null;
	parentComponent?: ObjectProperty;
	tags?: string[] | null;
	onTakeAnyDamage?: any;
	onTakePointDamage?: any;
	onTakeRadialDamage?: any;
	onActorBeginOverlap?: any;
	onActorEndOverlap?: any;
	onBeginCursorOver?: any;
	onEndCursorOver?: any;
	onClicked?: any;
	onReleased?: any;
	onInputTouchBegin?: any;
	onInputTouchEnd?: any;
	onInputTouchEnter?: any;
	onInputTouchLeave?: any;
	onActorHit?: any;
	onDestroyed?: any;
	onEndPlay?: any;
	instanceComponents?: ObjectProperty[] | null;
	blueprintCreatedComponents?: ObjectProperty[] | null;
	contractContent?: ObjectProperty;
	interactableBase?: ObjectProperty;
}

export interface BPEcolabSecretDoorBooks01C {
	primaryActorTick?: ActorTickFunction;
	bNetTemporary?: boolean | null;
	bOnlyRelevantToOwner?: boolean | null;
	bAlwaysRelevant?: boolean | null;
	bReplicateMovement?: boolean | null;
	bCallPreReplication?: boolean | null;
	bCallPreReplicationForReplay?: boolean | null;
	bHidden?: boolean | null;
	bTearOff?: boolean | null;
	bForceNetAddressable?: boolean | null;
	bExchangedRoles?: boolean | null;
	bNetLoadOnClient?: boolean | null;
	bNetUseOwnerRelevancy?: boolean | null;
	bRelevantForNetworkReplays?: boolean | null;
	bRelevantForLevelBounds?: boolean | null;
	bReplayRewindable?: boolean | null;
	bAllowTickBeforeBeginPlay?: boolean | null;
	bAutoDestroyWhenFinished?: boolean | null;
	bCanBeDamaged?: boolean | null;
	bBlockInput?: boolean | null;
	bCollideWhenPlacing?: boolean | null;
	bFindCameraComponentWhenViewTarget?: boolean | null;
	bGenerateOverlapEventsDuringLevelStreaming?: boolean | null;
	bIgnoresOriginShifting?: boolean | null;
	bEnableAutoLODGeneration?: boolean | null;
	bIsEditorOnlyActor?: boolean | null;
	bActorSeamlessTraveled?: boolean | null;
	bUseExtendedRelevancyTimeout?: boolean | null;
	bIgnoreLevelBoundsClamp?: boolean | null;
	bUsesFgl?: boolean | null;
	bIsActorPooled?: boolean | null;
	fglType?: ObjectProperty;
	entityId?: EntityId;
	/** @format int32 */
	m_DimensionIndex?: number;
	actorNeedsLoadFor?: EObjectNeedsLoadFor;
	layoutReplicator?: ReplicatorProxy;
	bReplicates?: boolean | null;
	bProxyReplicates?: boolean | null;
	bProxyHasInitialReplication?: boolean | null;
	s2sCull?: ES2SCull;
	bLostRelevancy?: boolean | null;
	bNoServerReplicates?: boolean | null;
	bCanBeInCluster?: boolean | null;
	bAllowReceiveTickEventOnDedicatedServer?: boolean | null;
	bReplicateUsingRegisteredSubObjectList?: boolean | null;
	bActorEnableCollision?: boolean | null;
	bActorIsBeingDestroyed?: boolean | null;
	bAsyncPhysicsTickEnabled?: boolean | null;
	updateOverlapsMethodDuringLevelStreaming?: EActorUpdateOverlapsMethod;
	defaultUpdateOverlapsMethodDuringLevelStreaming?: EActorUpdateOverlapsMethod;
	/** @format float */
	initialLifeSpan?: number;
	/** @format float */
	customTimeDilation?: number;
	remoteRole?: ENetRole;
	/** @format int32 */
	rayTracingGroupId?: number;
	attachmentReplication?: RepAttachment;
	replicatedMovement?: RepMovement;
	owner?: ObjectProperty;
	netDriverName?: string;
	role?: ENetRole;
	netDormancy?: ENetDormancy;
	spawnCollisionHandlingMethod?: ESpawnActorCollisionHandlingMethod;
	autoReceiveInput?: EAutoReceiveInput;
	/** @format int32 */
	inputPriority?: number;
	inputComponent?: ObjectProperty;
	/** @format float */
	netCullDistanceSquared?: number;
	/** @format float */
	viewTargetNetCullDistanceSquared?: number;
	/** @format int32 */
	netTag?: number;
	/** @format float */
	netUpdateFrequency?: number;
	/** @format float */
	minNetUpdateFrequency?: number;
	/** @format float */
	netPriority?: number;
	instigator?: ObjectProperty;
	children?: ObjectProperty[] | null;
	originalActor?: ObjectProperty;
	authorityTransferState?: EAuthorityTransferState;
	bActorIsWaitingForPersistence?: boolean | null;
	bActorBeingReplaced?: boolean | null;
	rootComponent?: ObjectProperty;
	layers?: string[] | null;
	parentComponent?: ObjectProperty;
	tags?: string[] | null;
	onTakeAnyDamage?: any;
	onTakePointDamage?: any;
	onTakeRadialDamage?: any;
	onActorBeginOverlap?: any;
	onActorEndOverlap?: any;
	onBeginCursorOver?: any;
	onEndCursorOver?: any;
	onClicked?: any;
	onReleased?: any;
	onInputTouchBegin?: any;
	onInputTouchEnd?: any;
	onInputTouchEnter?: any;
	onInputTouchLeave?: any;
	onActorHit?: any;
	onDestroyed?: any;
	onEndPlay?: any;
	instanceComponents?: ObjectProperty[] | null;
	blueprintCreatedComponents?: ObjectProperty[] | null;
	m_bIsPawnInTheWay?: boolean | null;
	m_bHasBlueprintAnimation?: boolean | null;
	m_PivotComponent?: ObjectProperty;
	m_MeshContainerComponent?: ObjectProperty;
	m_PawnInTheWayBoxData?: OrientedBoxData;
	m_OpeningDoorAudioEvent?: ObjectProperty;
	m_ClosingDoorAudioEvent?: ObjectProperty;
	m_DoorState?: EDoorState;
	m_ClosedScale?: Vector;
	m_OpenedScale?: Vector;
}

export interface BPEcolabSecretDoorC {
	primaryActorTick?: ActorTickFunction;
	bNetTemporary?: boolean | null;
	bOnlyRelevantToOwner?: boolean | null;
	bAlwaysRelevant?: boolean | null;
	bReplicateMovement?: boolean | null;
	bCallPreReplication?: boolean | null;
	bCallPreReplicationForReplay?: boolean | null;
	bHidden?: boolean | null;
	bTearOff?: boolean | null;
	bForceNetAddressable?: boolean | null;
	bExchangedRoles?: boolean | null;
	bNetLoadOnClient?: boolean | null;
	bNetUseOwnerRelevancy?: boolean | null;
	bRelevantForNetworkReplays?: boolean | null;
	bRelevantForLevelBounds?: boolean | null;
	bReplayRewindable?: boolean | null;
	bAllowTickBeforeBeginPlay?: boolean | null;
	bAutoDestroyWhenFinished?: boolean | null;
	bCanBeDamaged?: boolean | null;
	bBlockInput?: boolean | null;
	bCollideWhenPlacing?: boolean | null;
	bFindCameraComponentWhenViewTarget?: boolean | null;
	bGenerateOverlapEventsDuringLevelStreaming?: boolean | null;
	bIgnoresOriginShifting?: boolean | null;
	bEnableAutoLODGeneration?: boolean | null;
	bIsEditorOnlyActor?: boolean | null;
	bActorSeamlessTraveled?: boolean | null;
	bUseExtendedRelevancyTimeout?: boolean | null;
	bIgnoreLevelBoundsClamp?: boolean | null;
	bUsesFgl?: boolean | null;
	bIsActorPooled?: boolean | null;
	fglType?: ObjectProperty;
	entityId?: EntityId;
	/** @format int32 */
	m_DimensionIndex?: number;
	actorNeedsLoadFor?: EObjectNeedsLoadFor;
	layoutReplicator?: ReplicatorProxy;
	bReplicates?: boolean | null;
	bProxyReplicates?: boolean | null;
	bProxyHasInitialReplication?: boolean | null;
	s2sCull?: ES2SCull;
	bLostRelevancy?: boolean | null;
	bNoServerReplicates?: boolean | null;
	bCanBeInCluster?: boolean | null;
	bAllowReceiveTickEventOnDedicatedServer?: boolean | null;
	bReplicateUsingRegisteredSubObjectList?: boolean | null;
	bActorEnableCollision?: boolean | null;
	bActorIsBeingDestroyed?: boolean | null;
	bAsyncPhysicsTickEnabled?: boolean | null;
	updateOverlapsMethodDuringLevelStreaming?: EActorUpdateOverlapsMethod;
	defaultUpdateOverlapsMethodDuringLevelStreaming?: EActorUpdateOverlapsMethod;
	/** @format float */
	initialLifeSpan?: number;
	/** @format float */
	customTimeDilation?: number;
	remoteRole?: ENetRole;
	/** @format int32 */
	rayTracingGroupId?: number;
	attachmentReplication?: RepAttachment;
	replicatedMovement?: RepMovement;
	owner?: ObjectProperty;
	netDriverName?: string;
	role?: ENetRole;
	netDormancy?: ENetDormancy;
	spawnCollisionHandlingMethod?: ESpawnActorCollisionHandlingMethod;
	autoReceiveInput?: EAutoReceiveInput;
	/** @format int32 */
	inputPriority?: number;
	inputComponent?: ObjectProperty;
	/** @format float */
	netCullDistanceSquared?: number;
	/** @format float */
	viewTargetNetCullDistanceSquared?: number;
	/** @format int32 */
	netTag?: number;
	/** @format float */
	netUpdateFrequency?: number;
	/** @format float */
	minNetUpdateFrequency?: number;
	/** @format float */
	netPriority?: number;
	instigator?: ObjectProperty;
	children?: ObjectProperty[] | null;
	originalActor?: ObjectProperty;
	authorityTransferState?: EAuthorityTransferState;
	bActorIsWaitingForPersistence?: boolean | null;
	bActorBeingReplaced?: boolean | null;
	rootComponent?: ObjectProperty;
	layers?: string[] | null;
	parentComponent?: ObjectProperty;
	tags?: string[] | null;
	onTakeAnyDamage?: any;
	onTakePointDamage?: any;
	onTakeRadialDamage?: any;
	onActorBeginOverlap?: any;
	onActorEndOverlap?: any;
	onBeginCursorOver?: any;
	onEndCursorOver?: any;
	onClicked?: any;
	onReleased?: any;
	onInputTouchBegin?: any;
	onInputTouchEnd?: any;
	onInputTouchEnter?: any;
	onInputTouchLeave?: any;
	onActorHit?: any;
	onDestroyed?: any;
	onEndPlay?: any;
	instanceComponents?: ObjectProperty[] | null;
	blueprintCreatedComponents?: ObjectProperty[] | null;
	m_bIsPawnInTheWay?: boolean | null;
	m_bHasBlueprintAnimation?: boolean | null;
	m_PivotComponent?: ObjectProperty;
	m_MeshContainerComponent?: ObjectProperty;
	m_PawnInTheWayBoxData?: OrientedBoxData;
	m_OpeningDoorAudioEvent?: ObjectProperty;
	m_ClosingDoorAudioEvent?: ObjectProperty;
	m_DoorState?: EDoorState;
	m_ClosedScale?: Vector;
	m_OpenedScale?: Vector;
}

export interface BPPentashieldKeyC {
	primaryActorTick?: ActorTickFunction;
	bNetTemporary?: boolean | null;
	bOnlyRelevantToOwner?: boolean | null;
	bAlwaysRelevant?: boolean | null;
	bReplicateMovement?: boolean | null;
	bCallPreReplication?: boolean | null;
	bCallPreReplicationForReplay?: boolean | null;
	bHidden?: boolean | null;
	bTearOff?: boolean | null;
	bForceNetAddressable?: boolean | null;
	bExchangedRoles?: boolean | null;
	bNetLoadOnClient?: boolean | null;
	bNetUseOwnerRelevancy?: boolean | null;
	bRelevantForNetworkReplays?: boolean | null;
	bRelevantForLevelBounds?: boolean | null;
	bReplayRewindable?: boolean | null;
	bAllowTickBeforeBeginPlay?: boolean | null;
	bAutoDestroyWhenFinished?: boolean | null;
	bCanBeDamaged?: boolean | null;
	bBlockInput?: boolean | null;
	bCollideWhenPlacing?: boolean | null;
	bFindCameraComponentWhenViewTarget?: boolean | null;
	bGenerateOverlapEventsDuringLevelStreaming?: boolean | null;
	bIgnoresOriginShifting?: boolean | null;
	bEnableAutoLODGeneration?: boolean | null;
	bIsEditorOnlyActor?: boolean | null;
	bActorSeamlessTraveled?: boolean | null;
	bUseExtendedRelevancyTimeout?: boolean | null;
	bIgnoreLevelBoundsClamp?: boolean | null;
	bUsesFgl?: boolean | null;
	bIsActorPooled?: boolean | null;
	fglType?: ObjectProperty;
	entityId?: EntityId;
	/** @format int32 */
	m_DimensionIndex?: number;
	actorNeedsLoadFor?: EObjectNeedsLoadFor;
	layoutReplicator?: ReplicatorProxy;
	bReplicates?: boolean | null;
	bProxyReplicates?: boolean | null;
	bProxyHasInitialReplication?: boolean | null;
	s2sCull?: ES2SCull;
	bLostRelevancy?: boolean | null;
	bNoServerReplicates?: boolean | null;
	bCanBeInCluster?: boolean | null;
	bAllowReceiveTickEventOnDedicatedServer?: boolean | null;
	bReplicateUsingRegisteredSubObjectList?: boolean | null;
	bActorEnableCollision?: boolean | null;
	bActorIsBeingDestroyed?: boolean | null;
	bAsyncPhysicsTickEnabled?: boolean | null;
	updateOverlapsMethodDuringLevelStreaming?: EActorUpdateOverlapsMethod;
	defaultUpdateOverlapsMethodDuringLevelStreaming?: EActorUpdateOverlapsMethod;
	/** @format float */
	initialLifeSpan?: number;
	/** @format float */
	customTimeDilation?: number;
	remoteRole?: ENetRole;
	/** @format int32 */
	rayTracingGroupId?: number;
	attachmentReplication?: RepAttachment;
	replicatedMovement?: RepMovement;
	owner?: ObjectProperty;
	netDriverName?: string;
	role?: ENetRole;
	netDormancy?: ENetDormancy;
	spawnCollisionHandlingMethod?: ESpawnActorCollisionHandlingMethod;
	autoReceiveInput?: EAutoReceiveInput;
	/** @format int32 */
	inputPriority?: number;
	inputComponent?: ObjectProperty;
	/** @format float */
	netCullDistanceSquared?: number;
	/** @format float */
	viewTargetNetCullDistanceSquared?: number;
	/** @format int32 */
	netTag?: number;
	/** @format float */
	netUpdateFrequency?: number;
	/** @format float */
	minNetUpdateFrequency?: number;
	/** @format float */
	netPriority?: number;
	instigator?: ObjectProperty;
	children?: ObjectProperty[] | null;
	originalActor?: ObjectProperty;
	authorityTransferState?: EAuthorityTransferState;
	bActorIsWaitingForPersistence?: boolean | null;
	bActorBeingReplaced?: boolean | null;
	rootComponent?: ObjectProperty;
	layers?: string[] | null;
	parentComponent?: ObjectProperty;
	tags?: string[] | null;
	onTakeAnyDamage?: any;
	onTakePointDamage?: any;
	onTakeRadialDamage?: any;
	onActorBeginOverlap?: any;
	onActorEndOverlap?: any;
	onBeginCursorOver?: any;
	onEndCursorOver?: any;
	onClicked?: any;
	onReleased?: any;
	onInputTouchBegin?: any;
	onInputTouchEnd?: any;
	onInputTouchEnter?: any;
	onInputTouchLeave?: any;
	onActorHit?: any;
	onDestroyed?: any;
	onEndPlay?: any;
	instanceComponents?: ObjectProperty[] | null;
	blueprintCreatedComponents?: ObjectProperty[] | null;
	m_NeededKey?: EInteractionKeyCode;
	m_PickupKeyAudioEvent?: ObjectProperty;
	m_AvailableKeyStartAudioEvent?: ObjectProperty;
	m_AvailableKeyStopAudioEvent?: ObjectProperty;
	m_InteractionsComponent?: ObjectProperty;
	lightColor?: LinearColor;
}

export interface BPPvEContentDescriptorC {
	primaryActorTick?: ActorTickFunction;
	bNetTemporary?: boolean | null;
	bOnlyRelevantToOwner?: boolean | null;
	bAlwaysRelevant?: boolean | null;
	bReplicateMovement?: boolean | null;
	bCallPreReplication?: boolean | null;
	bCallPreReplicationForReplay?: boolean | null;
	bHidden?: boolean | null;
	bTearOff?: boolean | null;
	bForceNetAddressable?: boolean | null;
	bExchangedRoles?: boolean | null;
	bNetLoadOnClient?: boolean | null;
	bNetUseOwnerRelevancy?: boolean | null;
	bRelevantForNetworkReplays?: boolean | null;
	bRelevantForLevelBounds?: boolean | null;
	bReplayRewindable?: boolean | null;
	bAllowTickBeforeBeginPlay?: boolean | null;
	bAutoDestroyWhenFinished?: boolean | null;
	bCanBeDamaged?: boolean | null;
	bBlockInput?: boolean | null;
	bCollideWhenPlacing?: boolean | null;
	bFindCameraComponentWhenViewTarget?: boolean | null;
	bGenerateOverlapEventsDuringLevelStreaming?: boolean | null;
	bIgnoresOriginShifting?: boolean | null;
	bEnableAutoLODGeneration?: boolean | null;
	bIsEditorOnlyActor?: boolean | null;
	bActorSeamlessTraveled?: boolean | null;
	bUseExtendedRelevancyTimeout?: boolean | null;
	bIgnoreLevelBoundsClamp?: boolean | null;
	bUsesFgl?: boolean | null;
	bIsActorPooled?: boolean | null;
	fglType?: ObjectProperty;
	entityId?: EntityId;
	/** @format int32 */
	m_DimensionIndex?: number;
	actorNeedsLoadFor?: EObjectNeedsLoadFor;
	layoutReplicator?: ReplicatorProxy;
	bReplicates?: boolean | null;
	bProxyReplicates?: boolean | null;
	bProxyHasInitialReplication?: boolean | null;
	s2sCull?: ES2SCull;
	bLostRelevancy?: boolean | null;
	bNoServerReplicates?: boolean | null;
	bCanBeInCluster?: boolean | null;
	bAllowReceiveTickEventOnDedicatedServer?: boolean | null;
	bReplicateUsingRegisteredSubObjectList?: boolean | null;
	bActorEnableCollision?: boolean | null;
	bActorIsBeingDestroyed?: boolean | null;
	bAsyncPhysicsTickEnabled?: boolean | null;
	updateOverlapsMethodDuringLevelStreaming?: EActorUpdateOverlapsMethod;
	defaultUpdateOverlapsMethodDuringLevelStreaming?: EActorUpdateOverlapsMethod;
	/** @format float */
	initialLifeSpan?: number;
	/** @format float */
	customTimeDilation?: number;
	remoteRole?: ENetRole;
	/** @format int32 */
	rayTracingGroupId?: number;
	attachmentReplication?: RepAttachment;
	replicatedMovement?: RepMovement;
	owner?: ObjectProperty;
	netDriverName?: string;
	role?: ENetRole;
	netDormancy?: ENetDormancy;
	spawnCollisionHandlingMethod?: ESpawnActorCollisionHandlingMethod;
	autoReceiveInput?: EAutoReceiveInput;
	/** @format int32 */
	inputPriority?: number;
	inputComponent?: ObjectProperty;
	/** @format float */
	netCullDistanceSquared?: number;
	/** @format float */
	viewTargetNetCullDistanceSquared?: number;
	/** @format int32 */
	netTag?: number;
	/** @format float */
	netUpdateFrequency?: number;
	/** @format float */
	minNetUpdateFrequency?: number;
	/** @format float */
	netPriority?: number;
	instigator?: ObjectProperty;
	children?: ObjectProperty[] | null;
	originalActor?: ObjectProperty;
	authorityTransferState?: EAuthorityTransferState;
	bActorIsWaitingForPersistence?: boolean | null;
	bActorBeingReplaced?: boolean | null;
	rootComponent?: ObjectProperty;
	layers?: string[] | null;
	parentComponent?: ObjectProperty;
	tags?: string[] | null;
	onTakeAnyDamage?: any;
	onTakePointDamage?: any;
	onTakeRadialDamage?: any;
	onActorBeginOverlap?: any;
	onActorEndOverlap?: any;
	onBeginCursorOver?: any;
	onEndCursorOver?: any;
	onClicked?: any;
	onReleased?: any;
	onInputTouchBegin?: any;
	onInputTouchEnd?: any;
	onInputTouchEnter?: any;
	onInputTouchLeave?: any;
	onActorHit?: any;
	onDestroyed?: any;
	onEndPlay?: any;
	instanceComponents?: ObjectProperty[] | null;
	blueprintCreatedComponents?: ObjectProperty[] | null;
	m_bSelectCompositionFromWorldDistributionTags?: boolean | null;
	m_GroupCompositionMaps?: ObjectProperty[] | null;
	m_FallbackGroupComposition?: ObjectProperty;
	m_ManagedSpawners?: ObjectProperty[] | null;
	m_ContentDescriptorTags?: GameplayTagContainer;
	m_WorldNpcTierOverride?: GameplayTag;
	m_WorldContentDistributionTags?: GameplayTagContainer;
	m_SelectedNpcComposition?: ObjectProperty;
	/** @format float */
	m_CooldownTimeMinutes?: number;
	m_bUseDefaultRespawnTimeFromSetting?: boolean | null;
	/** @format float */
	m_DespawnTimeSeconds?: number;
	m_DespawnTimer?: TimerHandle;
	m_RespawnTimer?: TimerHandle;
	m_DespawnConditionFlags?: EDespawnConditionFlags;
	m_LinkedLootSpawners?: SoftObjectProperty[] | null;
	m_CachedLinkedLootSpawners?: ObjectProperty[] | null;
}

export interface BPRoomDescriptorC {
	primaryActorTick?: ActorTickFunction;
	bNetTemporary?: boolean | null;
	bOnlyRelevantToOwner?: boolean | null;
	bAlwaysRelevant?: boolean | null;
	bReplicateMovement?: boolean | null;
	bCallPreReplication?: boolean | null;
	bCallPreReplicationForReplay?: boolean | null;
	bHidden?: boolean | null;
	bTearOff?: boolean | null;
	bForceNetAddressable?: boolean | null;
	bExchangedRoles?: boolean | null;
	bNetLoadOnClient?: boolean | null;
	bNetUseOwnerRelevancy?: boolean | null;
	bRelevantForNetworkReplays?: boolean | null;
	bRelevantForLevelBounds?: boolean | null;
	bReplayRewindable?: boolean | null;
	bAllowTickBeforeBeginPlay?: boolean | null;
	bAutoDestroyWhenFinished?: boolean | null;
	bCanBeDamaged?: boolean | null;
	bBlockInput?: boolean | null;
	bCollideWhenPlacing?: boolean | null;
	bFindCameraComponentWhenViewTarget?: boolean | null;
	bGenerateOverlapEventsDuringLevelStreaming?: boolean | null;
	bIgnoresOriginShifting?: boolean | null;
	bEnableAutoLODGeneration?: boolean | null;
	bIsEditorOnlyActor?: boolean | null;
	bActorSeamlessTraveled?: boolean | null;
	bUseExtendedRelevancyTimeout?: boolean | null;
	bIgnoreLevelBoundsClamp?: boolean | null;
	bUsesFgl?: boolean | null;
	bIsActorPooled?: boolean | null;
	fglType?: ObjectProperty;
	entityId?: EntityId;
	/** @format int32 */
	m_DimensionIndex?: number;
	actorNeedsLoadFor?: EObjectNeedsLoadFor;
	layoutReplicator?: ReplicatorProxy;
	bReplicates?: boolean | null;
	bProxyReplicates?: boolean | null;
	bProxyHasInitialReplication?: boolean | null;
	s2sCull?: ES2SCull;
	bLostRelevancy?: boolean | null;
	bNoServerReplicates?: boolean | null;
	bCanBeInCluster?: boolean | null;
	bAllowReceiveTickEventOnDedicatedServer?: boolean | null;
	bReplicateUsingRegisteredSubObjectList?: boolean | null;
	bActorEnableCollision?: boolean | null;
	bActorIsBeingDestroyed?: boolean | null;
	bAsyncPhysicsTickEnabled?: boolean | null;
	updateOverlapsMethodDuringLevelStreaming?: EActorUpdateOverlapsMethod;
	defaultUpdateOverlapsMethodDuringLevelStreaming?: EActorUpdateOverlapsMethod;
	/** @format float */
	initialLifeSpan?: number;
	/** @format float */
	customTimeDilation?: number;
	remoteRole?: ENetRole;
	/** @format int32 */
	rayTracingGroupId?: number;
	attachmentReplication?: RepAttachment;
	replicatedMovement?: RepMovement;
	owner?: ObjectProperty;
	netDriverName?: string;
	role?: ENetRole;
	netDormancy?: ENetDormancy;
	spawnCollisionHandlingMethod?: ESpawnActorCollisionHandlingMethod;
	autoReceiveInput?: EAutoReceiveInput;
	/** @format int32 */
	inputPriority?: number;
	inputComponent?: ObjectProperty;
	/** @format float */
	netCullDistanceSquared?: number;
	/** @format float */
	viewTargetNetCullDistanceSquared?: number;
	/** @format int32 */
	netTag?: number;
	/** @format float */
	netUpdateFrequency?: number;
	/** @format float */
	minNetUpdateFrequency?: number;
	/** @format float */
	netPriority?: number;
	instigator?: ObjectProperty;
	children?: ObjectProperty[] | null;
	originalActor?: ObjectProperty;
	authorityTransferState?: EAuthorityTransferState;
	bActorIsWaitingForPersistence?: boolean | null;
	bActorBeingReplaced?: boolean | null;
	rootComponent?: ObjectProperty;
	layers?: string[] | null;
	parentComponent?: ObjectProperty;
	tags?: string[] | null;
	onTakeAnyDamage?: any;
	onTakePointDamage?: any;
	onTakeRadialDamage?: any;
	onActorBeginOverlap?: any;
	onActorEndOverlap?: any;
	onBeginCursorOver?: any;
	onEndCursorOver?: any;
	onClicked?: any;
	onReleased?: any;
	onInputTouchBegin?: any;
	onInputTouchEnd?: any;
	onInputTouchEnter?: any;
	onInputTouchLeave?: any;
	onActorHit?: any;
	onDestroyed?: any;
	onEndPlay?: any;
	instanceComponents?: ObjectProperty[] | null;
	blueprintCreatedComponents?: ObjectProperty[] | null;
	m_bGhostSpawningEnabled?: boolean | null;
	m_ModularAIBehaviorActors?: ObjectProperty[] | null;
	m_ModularAIBehaviors?: ModularAiBehaviorInstance[] | null;
	m_SpawnLocations?: ObjectProperty[] | null;
	m_CachedSpawnLocations?: ObjectProperty[] | null;
	m_StaticSpawnLocations?: ObjectProperty[] | null;
	m_CachedStaticSpawnLocations?: ObjectProperty[] | null;
	m_SpawnedLocations?: ObjectProperty[] | null;
	m_SpawnComponent?: ObjectProperty;
	m_WaveSpawnComponent?: ObjectProperty;
	m_bAutoDespawn?: boolean | null;
	m_DespawnConditionFlags?: EDespawnConditionFlags;
	m_NavInvokerVolume?: ObjectProperty;
	m_NavGrid?: ObjectProperty;
	m_EncounterActorComponent?: ObjectProperty;
	m_TriggerListenerComponent?: ObjectProperty;
	/** @format float */
	m_Radius?: number;
	m_CombatVolume?: ObjectProperty;
	m_OnControlStatusChangedDelegate?: any;
	m_OnTriggerSpawning?: any;
	m_OnNpcsBeginSpawningDelay?: any;
	m_OnNpcsBeginSpawning?: any;
	m_OnAllNpcsKilled?: any;
	m_OnCombatBegin?: any;
	m_OnIdleBegin?: any;
	m_OnSpawnerClearedEvent?: any;
	m_OnSingleNPCSpawnedEvent?: any;
	m_OnSingleNPCRemovedEvent?: any;
	m_DefaultSquadController?: ObjectProperty;
	/** @format float */
	m_QuickResetDespawnDelaySeconds?: number;
	m_OverriddenNPCAttributes?: OverriddenNPCAttribute[] | null;
	aiPopulationSpawn?: ObjectProperty;
	textRender?: ObjectProperty;
	gatedContentComponent?: ObjectProperty;
	npcTotemTrigger?: ObjectProperty;
	aiReinforcement?: ObjectProperty;
}

export interface BPTerrainBlockActorC {
	primaryActorTick?: ActorTickFunction;
	bNetTemporary?: boolean | null;
	bOnlyRelevantToOwner?: boolean | null;
	bAlwaysRelevant?: boolean | null;
	bReplicateMovement?: boolean | null;
	bCallPreReplication?: boolean | null;
	bCallPreReplicationForReplay?: boolean | null;
	bHidden?: boolean | null;
	bTearOff?: boolean | null;
	bForceNetAddressable?: boolean | null;
	bExchangedRoles?: boolean | null;
	bNetLoadOnClient?: boolean | null;
	bNetUseOwnerRelevancy?: boolean | null;
	bRelevantForNetworkReplays?: boolean | null;
	bRelevantForLevelBounds?: boolean | null;
	bReplayRewindable?: boolean | null;
	bAllowTickBeforeBeginPlay?: boolean | null;
	bAutoDestroyWhenFinished?: boolean | null;
	bCanBeDamaged?: boolean | null;
	bBlockInput?: boolean | null;
	bCollideWhenPlacing?: boolean | null;
	bFindCameraComponentWhenViewTarget?: boolean | null;
	bGenerateOverlapEventsDuringLevelStreaming?: boolean | null;
	bIgnoresOriginShifting?: boolean | null;
	bEnableAutoLODGeneration?: boolean | null;
	bIsEditorOnlyActor?: boolean | null;
	bActorSeamlessTraveled?: boolean | null;
	bUseExtendedRelevancyTimeout?: boolean | null;
	bIgnoreLevelBoundsClamp?: boolean | null;
	bUsesFgl?: boolean | null;
	bIsActorPooled?: boolean | null;
	fglType?: ObjectProperty;
	entityId?: EntityId;
	/** @format int32 */
	m_DimensionIndex?: number;
	actorNeedsLoadFor?: EObjectNeedsLoadFor;
	layoutReplicator?: ReplicatorProxy;
	bReplicates?: boolean | null;
	bProxyReplicates?: boolean | null;
	bProxyHasInitialReplication?: boolean | null;
	s2sCull?: ES2SCull;
	bLostRelevancy?: boolean | null;
	bNoServerReplicates?: boolean | null;
	bCanBeInCluster?: boolean | null;
	bAllowReceiveTickEventOnDedicatedServer?: boolean | null;
	bReplicateUsingRegisteredSubObjectList?: boolean | null;
	bActorEnableCollision?: boolean | null;
	bActorIsBeingDestroyed?: boolean | null;
	bAsyncPhysicsTickEnabled?: boolean | null;
	updateOverlapsMethodDuringLevelStreaming?: EActorUpdateOverlapsMethod;
	defaultUpdateOverlapsMethodDuringLevelStreaming?: EActorUpdateOverlapsMethod;
	/** @format float */
	initialLifeSpan?: number;
	/** @format float */
	customTimeDilation?: number;
	remoteRole?: ENetRole;
	/** @format int32 */
	rayTracingGroupId?: number;
	attachmentReplication?: RepAttachment;
	replicatedMovement?: RepMovement;
	owner?: ObjectProperty;
	netDriverName?: string;
	role?: ENetRole;
	netDormancy?: ENetDormancy;
	spawnCollisionHandlingMethod?: ESpawnActorCollisionHandlingMethod;
	autoReceiveInput?: EAutoReceiveInput;
	/** @format int32 */
	inputPriority?: number;
	inputComponent?: ObjectProperty;
	/** @format float */
	netCullDistanceSquared?: number;
	/** @format float */
	viewTargetNetCullDistanceSquared?: number;
	/** @format int32 */
	netTag?: number;
	/** @format float */
	netUpdateFrequency?: number;
	/** @format float */
	minNetUpdateFrequency?: number;
	/** @format float */
	netPriority?: number;
	instigator?: ObjectProperty;
	children?: ObjectProperty[] | null;
	originalActor?: ObjectProperty;
	authorityTransferState?: EAuthorityTransferState;
	bActorIsWaitingForPersistence?: boolean | null;
	bActorBeingReplaced?: boolean | null;
	rootComponent?: ObjectProperty;
	layers?: string[] | null;
	parentComponent?: ObjectProperty;
	tags?: string[] | null;
	onTakeAnyDamage?: any;
	onTakePointDamage?: any;
	onTakeRadialDamage?: any;
	onActorBeginOverlap?: any;
	onActorEndOverlap?: any;
	onBeginCursorOver?: any;
	onEndCursorOver?: any;
	onClicked?: any;
	onReleased?: any;
	onInputTouchBegin?: any;
	onInputTouchEnd?: any;
	onInputTouchEnter?: any;
	onInputTouchLeave?: any;
	onActorHit?: any;
	onDestroyed?: any;
	onEndPlay?: any;
	instanceComponents?: ObjectProperty[] | null;
	blueprintCreatedComponents?: ObjectProperty[] | null;
	m_bIsPartOfWorldLayout?: boolean | null;
	m_bShouldLoadLodOnly?: boolean | null;
	m_bShouldOverrideSnapType?: boolean | null;
	m_SnapType?: ESurfaceSnappingType;
	m_bShouldOverrideAdditionalSnappingOffsetByZ?: boolean | null;
	/** @format float */
	m_AdditionalSnappingOffsetByZ?: number;
	m_SceneComponent?: ObjectProperty;
	m_bWasObjectLoaded?: boolean | null;
	m_bIsTerrainBlockEnabled?: boolean | null;
	m_TerrainBlockAsset?: ObjectProperty;
	m_SubLevelGroupsSettings?: KeyValuePairStringTerrainBlockTemplateSubLevelGroupSettings[] | null;
	m_SubContentBlocksSettings?: TerrainBlockTemplateSubLevelContentBlockSettings[] | null;
	m_bIsVistaOnly?: boolean | null;
	debugArea?: boolean;
	rootComponentFull?: SceneComponent;
}

export interface BPTerrainBlockActorCWrapper {
	primaryActorTick?: ActorTickFunction;
	bNetTemporary?: boolean | null;
	bOnlyRelevantToOwner?: boolean | null;
	bAlwaysRelevant?: boolean | null;
	bReplicateMovement?: boolean | null;
	bCallPreReplication?: boolean | null;
	bCallPreReplicationForReplay?: boolean | null;
	bHidden?: boolean | null;
	bTearOff?: boolean | null;
	bForceNetAddressable?: boolean | null;
	bExchangedRoles?: boolean | null;
	bNetLoadOnClient?: boolean | null;
	bNetUseOwnerRelevancy?: boolean | null;
	bRelevantForNetworkReplays?: boolean | null;
	bRelevantForLevelBounds?: boolean | null;
	bReplayRewindable?: boolean | null;
	bAllowTickBeforeBeginPlay?: boolean | null;
	bAutoDestroyWhenFinished?: boolean | null;
	bCanBeDamaged?: boolean | null;
	bBlockInput?: boolean | null;
	bCollideWhenPlacing?: boolean | null;
	bFindCameraComponentWhenViewTarget?: boolean | null;
	bGenerateOverlapEventsDuringLevelStreaming?: boolean | null;
	bIgnoresOriginShifting?: boolean | null;
	bEnableAutoLODGeneration?: boolean | null;
	bIsEditorOnlyActor?: boolean | null;
	bActorSeamlessTraveled?: boolean | null;
	bUseExtendedRelevancyTimeout?: boolean | null;
	bIgnoreLevelBoundsClamp?: boolean | null;
	bUsesFgl?: boolean | null;
	bIsActorPooled?: boolean | null;
	fglType?: ObjectProperty;
	entityId?: EntityId;
	/** @format int32 */
	m_DimensionIndex?: number;
	actorNeedsLoadFor?: EObjectNeedsLoadFor;
	layoutReplicator?: ReplicatorProxy;
	bReplicates?: boolean | null;
	bProxyReplicates?: boolean | null;
	bProxyHasInitialReplication?: boolean | null;
	s2sCull?: ES2SCull;
	bLostRelevancy?: boolean | null;
	bNoServerReplicates?: boolean | null;
	bCanBeInCluster?: boolean | null;
	bAllowReceiveTickEventOnDedicatedServer?: boolean | null;
	bReplicateUsingRegisteredSubObjectList?: boolean | null;
	bActorEnableCollision?: boolean | null;
	bActorIsBeingDestroyed?: boolean | null;
	bAsyncPhysicsTickEnabled?: boolean | null;
	updateOverlapsMethodDuringLevelStreaming?: EActorUpdateOverlapsMethod;
	defaultUpdateOverlapsMethodDuringLevelStreaming?: EActorUpdateOverlapsMethod;
	/** @format float */
	initialLifeSpan?: number;
	/** @format float */
	customTimeDilation?: number;
	remoteRole?: ENetRole;
	/** @format int32 */
	rayTracingGroupId?: number;
	attachmentReplication?: RepAttachment;
	replicatedMovement?: RepMovement;
	owner?: ObjectProperty;
	netDriverName?: string;
	role?: ENetRole;
	netDormancy?: ENetDormancy;
	spawnCollisionHandlingMethod?: ESpawnActorCollisionHandlingMethod;
	autoReceiveInput?: EAutoReceiveInput;
	/** @format int32 */
	inputPriority?: number;
	inputComponent?: ObjectProperty;
	/** @format float */
	netCullDistanceSquared?: number;
	/** @format float */
	viewTargetNetCullDistanceSquared?: number;
	/** @format int32 */
	netTag?: number;
	/** @format float */
	netUpdateFrequency?: number;
	/** @format float */
	minNetUpdateFrequency?: number;
	/** @format float */
	netPriority?: number;
	instigator?: ObjectProperty;
	children?: ObjectProperty[] | null;
	originalActor?: ObjectProperty;
	authorityTransferState?: EAuthorityTransferState;
	bActorIsWaitingForPersistence?: boolean | null;
	bActorBeingReplaced?: boolean | null;
	rootComponent?: ObjectProperty;
	layers?: string[] | null;
	parentComponent?: ObjectProperty;
	tags?: string[] | null;
	onTakeAnyDamage?: any;
	onTakePointDamage?: any;
	onTakeRadialDamage?: any;
	onActorBeginOverlap?: any;
	onActorEndOverlap?: any;
	onBeginCursorOver?: any;
	onEndCursorOver?: any;
	onClicked?: any;
	onReleased?: any;
	onInputTouchBegin?: any;
	onInputTouchEnd?: any;
	onInputTouchEnter?: any;
	onInputTouchLeave?: any;
	onActorHit?: any;
	onDestroyed?: any;
	onEndPlay?: any;
	instanceComponents?: ObjectProperty[] | null;
	blueprintCreatedComponents?: ObjectProperty[] | null;
	m_bIsPartOfWorldLayout?: boolean | null;
	m_bShouldLoadLodOnly?: boolean | null;
	m_bShouldOverrideSnapType?: boolean | null;
	m_SnapType?: ESurfaceSnappingType;
	m_bShouldOverrideAdditionalSnappingOffsetByZ?: boolean | null;
	/** @format float */
	m_AdditionalSnappingOffsetByZ?: number;
	m_SceneComponent?: ObjectProperty;
	m_bWasObjectLoaded?: boolean | null;
	m_bIsTerrainBlockEnabled?: boolean | null;
	m_TerrainBlockAsset?: TerrainBlockDataAsset;
	m_SubLevelGroupsSettings?: KeyValuePairStringTerrainBlockTemplateSubLevelGroupSettings[] | null;
	m_SubContentBlocksSettings?: TerrainBlockTemplateSubLevelContentBlockSettings[] | null;
	m_bIsVistaOnly?: boolean | null;
	debugArea?: boolean;
	rootComponentFull?: SceneComponent;
}

export interface BPWeldingTorchRangeInfoCardDataProviderC {
	m_LabelLocKey?: TextProperty;
	m_ItemIDAndValuePairs?: ItemIDAndInfoCardValuePair[] | null;
}

export interface BaseModel {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
}

export type Bounds3D = object;

export interface Box {
	min?: Vector;
	max?: Vector;
	isValid?: boolean | null;
}

export interface BuildableUnlockableSetModel {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	requiresLearning?: boolean;
	groupInTechTree?: boolean;
	buildables?: RelatedEntity[] | null;
}

export type BuildableUnlockableSetsBuilder = object;

export type BuildablesBuilder = object;

export type Builder = object;

export interface CalculatorItem {
	id?: string;
	url?: string;
	name?: string;
	iconPath?: string;
	recipes?: CalculatorRecipe[] | null;
	mainCategoryId?: string;
	subCategoryId?: string;
	/** @format float */
	volume?: number;
}

export interface CalculatorRecipe {
	ingredients?: CalculatorRecipeIngredient[] | null;
	/** @format int32 */
	waterAmount?: number;
	/** @format float */
	craftingTime?: number;
	outputs?: CalculatorRecipeOutput[] | null;
	crafters?: CalculatorRecipeCrafter[] | null;
	isRefining?: boolean;
}

export interface CalculatorRecipeCrafter {
	id?: string;
	name?: string;
	iconPath?: string;
	category?: string;
	/** @format int32 */
	tier?: number;
	mainCategoryId?: string;
}

export interface CalculatorRecipeIngredient {
	id?: string;
	/** @format int32 */
	quantity?: number;
}

export interface CalculatorRecipeOutput {
	id?: string;
	/** @format int32 */
	quantity?: number;
}

export interface Categories {
	/** @uniqueItems true */
	npcs?: Category[] | null;
	/** @uniqueItems true */
	contracts?: Category[] | null;
	/** @uniqueItems true */
	story?: Category[] | null;
	/** @uniqueItems true */
	research?: Category[] | null;
	/** @uniqueItems true */
	landsraad?: Category[] | null;
}

export interface Category {
	id?: string;
	parentId?: string;
	/** @uniqueItems true */
	children?: Category[] | null;
	/** @format int32 */
	entityCount?: number;
}

export interface CategoryDetails {
	name?: Record<string, string>;
	iconPath?: string;
}

export type CategoryEqualityComparer = object;

export type CdnClient = object;

export type CircleUtils = object;

export interface Color {
	/** @format int32 */
	b?: number;
	/** @format int32 */
	g?: number;
	/** @format int32 */
	r?: number;
	/** @format int32 */
	a?: number;
}

export type CombinedModel = {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	slots?: VehicleSlot[] | null;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	nodes?: ResearchNodeModel[] | null;
	/** @format int32 */
	intelSpentRequirement?: number;
	entity?: RelatedEntity;
	/** @format int32 */
	intelPointsCost?: number;
	/** @format int32 */
	additionalChargesIntelPointsCost?: number;
	/** @format int32 */
	additionalChargesCount?: number | null;
	/** @format int32 */
	recipeUses?: number | null;
	researchNodeType?: string;
	/** @format int32 */
	tier?: number;
	parents?: string[] | null;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	tag?: string;
	skillTree?: ESkillTree;
	skillType?: ESkillType;
	/** @format int32 */
	gridX?: number;
	/** @format int32 */
	gridY?: number;
	/** @uniqueItems true */
	preReqs?: string[] | null;
	/** @format int32 */
	maxLevel?: number;
	costPerlevel?: number[] | null;
	attributeBonuses?: SkillAttributeBonusModel[] | null;
	levelRequirements?: string[] | null;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	ingredients?: EntityQuantityModel[] | null;
	/** @format int32 */
	waterAmount?: number;
	/** @format float */
	craftingTime?: number;
	outputs?: EntityQuantityModel[] | null;
	requiredProductionTypes?: RelatedEntity[] | null;
	outputItem?: RelatedEntity;
	/** @uniqueItems true */
	toughtBySchematics?: RelatedEntity[] | null;
	/** @format int32 */
	totalIngredientsCount?: number;
	actionName?: string;
	researchCategory?: string;
	researchNode?: RelatedEntity;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	faction?: string;
	buildableTier?: string;
	buildableGroup?: string;
	/** @uniqueItems true */
	recipes?: RelatedEntity[] | null;
	ingredients?: EntityQuantityModel[] | null;
	productionTypes?: string[] | null;
	placeableStats?: PlaceableStats;
	/** @uniqueItems true */
	productionTypeIds?: string[] | null;
	/** @uniqueItems true */
	unlockedByPatents?: RelatedEntity[] | null;
	/** @format float */
	maxHealth?: number;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	hostilityType?: EHostilityType;
	sellsItems?: VendorItem[] | null;
	buysItems?: VendorItem[] | null;
	locations?: Record<string, Vector3[] | null>;
	isNamed?: boolean;
	/** @uniqueItems true */
	quests?: RelatedEntity[] | null;
	/** @uniqueItems true */
	contracts?: RelatedEntity[] | null;
	configId?: string;
	/** @uniqueItems true */
	moduleTags?: string[] | null;
	landsraadHouse?: RelatedEntity;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	root?: WorldModel2;
	parent?: WorldModel2;
	worldLevelWorldEntry?: EntryWorld;
	terrainBlocks?: PointF[][] | null;
	transform?: SimpleTransform;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	/** @format int32 */
	lifeSpanInSeconds?: number;
	/** @format int32 */
	lifeSpanAfterInteractionInSeconds?: number | null;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	uniqueReward?: RelatedEntity;
	mapMarkerIconPath?: string;
	npc?: NpcModel;
	mapMarkers?: MarkerLocationModel[] | null;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	reward?: EntityCountInt32;
	conditions?: LandsraadTaskConditionModel[] | null;
	/** @format int32 */
	controlPointContributionFactor?: number;
	/** @format float */
	controlPointRewardFactor?: number;
	/** @format int32 */
	taskComplexity?: number;
	/** @format int32 */
	goalAmount?: number;
	uiTitles?: Record<string, string | null>;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	children?: JourneyModel[] | null;
	completionCondition?: JourneyConditionModel;
	revealCondition?: JourneyConditionModel;
	itemRewards?: EntityQuantityModel[] | null;
	/** @format int32 */
	depth?: number;
	subNames?: string[] | null;
	/** @uniqueItems true */
	relatedEntities?: RelatedEntity[] | null;
	/** @uniqueItems true */
	allResearchNodeRewards?: RelatedEntity[] | null;
	xpRewardTags?: string[] | null;
	/** @format int64 */
	xpReward?: number;
	/** @format int64 */
	totalXpReward?: number;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	shortDescription?: string;
	isUnique?: boolean;
	itemTag?: string;
	/** @format int32 */
	tier?: number;
	tierIconPath?: string;
	/** @format int32 */
	lootPool?: number;
	excludeFromLootSystem?: boolean;
	/** @uniqueItems true */
	requiredForRecipe?: RelatedEntity[] | null;
	/** @uniqueItems true */
	requiredForBuilding?: RelatedEntity[] | null;
	/** @uniqueItems true */
	requiredForPlaceable?: RelatedEntity[] | null;
	/** @uniqueItems true */
	requiredForContract?: RelatedEntity[] | null;
	/** @uniqueItems true */
	createdByRecipe?: RelatedEntity[] | null;
	teachesRecipes?: EntityQuantityModel[] | null;
	isDefaultSchematic?: boolean;
	unlocksPlaceables?: RelatedEntity[] | null;
	soldBy?: VendorItem[] | null;
	canBeSoldTo?: VendorItem[] | null;
	action?: string;
	infoCard?: string;
	dropLocations?: ItemDropLocation[] | null;
	schematicDropLocations?: ItemDropLocation[] | null;
	heatmaps?: Record<string, string | null>;
	otherContainers?: ItemDropLocation[] | null;
	schematicOtherContainers?: ItemDropLocation[] | null;
	isSchematic?: boolean;
	schematicSoldBy?: VendorItem[] | null;
	/** @format int32 */
	baseBuyFromVendorPrice?: number;
	/** @format int32 */
	maxStackSize?: number;
	/** @format float */
	volume?: number;
	/** @format int32 */
	schematicBaseBuyFromVendorPrice?: number;
	mtxSources?: string[] | null;
	schematicOutputItem?: RelatedEntity;
	resourceNodeLocations?: ItemDropLocation[] | null;
	/** @uniqueItems true */
	landsraadRewardHouses?: RelatedEntity[] | null;
	attributeValues?: AttributeValueModel[] | null;
	appliesEffectsToTarget?: AttributeValueModel[] | null;
	appliesEffectsToAttacker?: AttributeValueModel[] | null;
	customization?: ItemCustomizationModel;
	rewardFrom?: EntityCountInt32[] | null;
	/** @format int32 */
	highestSellToVendorPrice?: number;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	nodes?: Record<string, DialogueNodeModel>;
	rootNodes?: DialogueNodeModel[] | null;
	/** @uniqueItems true */
	rootIds?: number[] | null;
	/** @uniqueItems true */
	setModuleTags?: string[] | null;
	/** @uniqueItems true */
	flagsToAdd?: string[] | null;
	npcs?: RelatedEntity[] | null;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	conditions?: ContractConditionModel[] | null;
	/** @uniqueItems true */
	contractTags?: string[] | null;
	targetNpcs?: RelatedEntity[] | null;
	chainId?: string;
	chainName?: string;
	isChainFinal?: boolean;
	/** @format int32 */
	chainOrder?: number | null;
	chainContracts?: RelatedEntity[] | null;
	contractCustomRewards?: ContractCustomRewardModel[] | null;
	/** @format int64 */
	xpReward?: number;
	itemRewards?: EntityCountInt32[] | null;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	requiresLearning?: boolean;
	groupInTechTree?: boolean;
	buildables?: RelatedEntity[] | null;
};

export type Config = object;

export interface ContractConditionDialoguesModel {
	npc?: RelatedEntity;
	texts?: string[] | null;
}

export interface ContractConditionModel {
	name?: string;
	contractItem?: ContractItem;
	conditionType?: EContractConditionType;
	/** @uniqueItems true */
	killNpcs?: RelatedEntity[] | null;
	/** @format int32 */
	number?: number;
	locations?: MapLocationModel[] | null;
	/** @uniqueItems true */
	dialogueNpcs?: RelatedEntity[] | null;
	contractDialogues?: ContractConditionDialoguesModel[] | null;
}

export interface ContractCustomRewardModel {
	name?: string;
	iconPath?: string;
}

export interface ContractGoToTargetModel {
	mapId?: string;
	name?: string;
	transform?: SimpleTransform;
	mapIcon?: MapIconModel;
	locationType?: MapLocationType;
	/** @uniqueItems true */
	tags?: string[] | null;
	location?: Vector3;
	mapMarkers?: MarkerLocationModel[] | null;
	gridCell?: string;
}

export interface ContractInteractionTargetModel {
	mapId?: string;
	name?: string;
	transform?: SimpleTransform;
	mapIcon?: MapIconModel;
	locationType?: MapLocationType;
	/** @uniqueItems true */
	tags?: string[] | null;
	location?: Vector3;
	mapMarkers?: MarkerLocationModel[] | null;
	gridCell?: string;
}

export interface ContractItem {
	entity?: RelatedEntity;
	/** @format int32 */
	quantity?: number;
	/** @format float */
	durability?: number;
}

export interface ContractModel {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	conditions?: ContractConditionModel[] | null;
	/** @uniqueItems true */
	contractTags?: string[] | null;
	targetNpcs?: RelatedEntity[] | null;
	chainId?: string;
	chainName?: string;
	isChainFinal?: boolean;
	/** @format int32 */
	chainOrder?: number | null;
	chainContracts?: RelatedEntity[] | null;
	contractCustomRewards?: ContractCustomRewardModel[] | null;
	/** @format int64 */
	xpReward?: number;
	itemRewards?: EntityCountInt32[] | null;
}

export type ContractsBuilder = object;

export interface CoordinateModel {
	/** @format double */
	x?: number;
	/** @format double */
	y?: number;
	/** @format double */
	z?: number;
}

export type CraftingCalculatorDataBuilder = object;

export interface DDLiveData {
	uniquesList?: LootSpawnerModel[] | null;
	/** @format int64 */
	nextCoriolisTime?: number | null;
}

export interface DDSubMapModel {
	mapId?: string;
	name?: string;
	transform?: SimpleTransform;
	mapIcon?: MapIconModel;
	locationType?: MapLocationType;
	/** @uniqueItems true */
	tags?: string[] | null;
	location?: Vector3;
	mapMarkers?: MarkerLocationModel[] | null;
	gridCell?: string;
	polygon?: PointF[] | null;
}

export interface DataIndex {
	path?: string;
	entries?: DataIndexEntry[] | null;
}

export interface DataIndexEntry {
	dataIndex?: DataIndex;
	/** @format int32 */
	index?: number;
	name?: string;
	type?: string;
	rowStruct?: string;
}

export interface DataTableRowHandle {
	dataTable?: ObjectProperty;
	rowName?: string;
}

export interface DataTableRowReference {
	dataTable?: ObjectProperty;
	rowName?: string;
}

export interface DeepDesertData {
	locations?: DeepDesertLocation[] | null;
	islands?: number[][][] | null;
	/** @format int32 */
	seed?: number;
	/** @format int64 */
	nextCoriolisTimeOCE?: number;
	/** @format int64 */
	lastCoriolisTimeOCE?: number;
}

export interface DeepDesertLocation {
	name?: string;
	mapIcon?: MapIconModel;
	location?: Vector3;
	gridCell?: string;
	loot?: EntityQuantityRangeModel[] | null;
	locationHint?: string;
}

export interface DeepDesertModel {
	/** @format int32 */
	coriolisWorldSeed?: number | null;
	/** @format int64 */
	lastCoriolisTime?: number;
	/** @format int64 */
	nextCoriolisTime?: number;
	terrainBlockSourceData?: WorldLayoutTerrainBlockArrayItem[] | null;
}

export interface DetailsContractResolver {
	dynamicCodeGeneration?: boolean;
	defaultMembersSearchFlags?: BindingFlags;
	serializeCompilerGeneratedMembers?: boolean;
	ignoreSerializableInterface?: boolean;
	ignoreSerializableAttribute?: boolean;
	ignoreIsSpecifiedMembers?: boolean;
	ignoreShouldSerializeMembers?: boolean;
	namingStrategy?: NamingStrategy;
}

export interface DewReaperStats {
	/** @format float */
	harvestYield?: number;
	/** @format double */
	harvestArea?: number;
}

export interface DialogueModel {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	nodes?: Record<string, DialogueNodeModel>;
	rootNodes?: DialogueNodeModel[] | null;
	/** @uniqueItems true */
	rootIds?: number[] | null;
	/** @uniqueItems true */
	setModuleTags?: string[] | null;
	/** @uniqueItems true */
	flagsToAdd?: string[] | null;
	npcs?: RelatedEntity[] | null;
}

export interface DialogueNodeModel {
	/** @format int32 */
	id?: number;
	model?: DialogueModel;
	/** @format int32 */
	nodeId?: number;
	text?: string;
	playerNode?: boolean;
	/** @uniqueItems true */
	linkIds?: number[] | null;
	/** @uniqueItems true */
	linkerIds?: number[] | null;
	/** @uniqueItems true */
	rootIds?: number[] | null;
	/** @uniqueItems true */
	connectedNodeIds?: number[] | null;
	linkedNodes?: DialogueNodeModel[] | null;
	linkerNodes?: DialogueNodeModel[] | null;
	rootNodes?: DialogueNodeModel[] | null;
	/** @uniqueItems true */
	setModuleTags?: string[] | null;
	/** @uniqueItems true */
	flagsToAdd?: string[] | null;
}

export type DialoguesBuilder = object;

export interface EInteractionKeyCode {
	name?: string;
}

export interface EItemTemplateID {
	name?: string;
}

export interface ELootContainerType {
	name?: string;
}

export interface EntityCount {
	entity?: RelatedEntity;
	count?: T_1;
}

export interface EntityCountInt32 {
	entity?: RelatedEntity;
	/** @format int32 */
	count?: number;
}

export interface EntityId {
	/** @format int64 */
	m_Id?: number;
}

export interface EntityQuantityModel {
	entity?: RelatedEntity;
	/** @format int32 */
	quantity?: number;
}

export interface EntityQuantityRangeModel {
	entity?: RelatedEntity;
	/** @format int32 */
	minQuantity?: number;
	/** @format int32 */
	maxQuantity?: number;
	/** @format float */
	probability?: number;
}

export interface EntryWorld {
	key?: string;
	value?: World;
	metadata?: AssetEntry;
}

export interface ExplorationVolumeModel {
	mapId?: string;
	name?: string;
	transform?: SimpleTransform;
	mapIcon?: MapIconModel;
	locationType?: MapLocationType;
	/** @uniqueItems true */
	tags?: string[] | null;
	location?: Vector3;
	mapMarkers?: MarkerLocationModel[] | null;
	gridCell?: string;
}

export type Extensions = object;

export interface FactionModel {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
}

export type FactionsBuilder = object;

export interface FakeModel {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
}

export interface FileDetails {
	fileName?: string;
	filePath?: string;
	/** @format int64 */
	fileSize?: number;
	/** @format date-time */
	dateModified?: string;
	/** @format date-time */
	dateCreated?: string;
	description?: string;
	fileVersion?: string;
	productName?: string;
	productVersion?: string;
	companyName?: string;
	copyright?: string;
	originalFilename?: string;
	internalName?: string;
	language?: string;
	/** @format int32 */
	fileMajorPart?: number;
	/** @format int32 */
	fileMinorPart?: number;
	/** @format int32 */
	fileBuildPart?: number;
	/** @format int32 */
	filePrivatePart?: number;
	isDebug?: boolean;
	isPatched?: boolean;
	isPreRelease?: boolean;
	isPrivateBuild?: boolean;
	isSpecialBuild?: boolean;
	fileType?: string;
	formattedFileSize?: string;
	version?: Version;
}

export type FileInfoHelper = object;

export interface FloatRange {
	lowerBound?: FloatRangeBound;
	upperBound?: FloatRangeBound;
}

export interface FloatRangeBound {
	type?: ERangeBoundTypes;
	/** @format float */
	value?: number;
}

export interface FootprintExtractor {
	/** @format float */
	meshMinX?: number;
	/** @format float */
	meshMaxX?: number;
	/** @format float */
	meshMinZ?: number;
	/** @format float */
	meshMaxZ?: number;
	/** @format float */
	cx?: number;
	/** @format float */
	cz?: number;
}

export type GameData = object;

export interface GameDb {
	mapLocations?: MapLocationModel[] | null;
	uiLocalizations?: UILocalizationsModel;
	buildableUnlockableSets?: BuildableUnlockableSetModel[] | null;
	buildableUnlockableSetsMap?: Record<string, BuildableUnlockableSetModel>;
	items?: ItemModel[] | null;
	itemsMap?: Record<string, ItemModel>;
	placeables?: PlaceableModel[] | null;
	placeablesMap?: Record<string, PlaceableModel>;
	recipes?: RecipeModel[] | null;
	recipesMap?: Record<string, RecipeModel>;
	researchCategories?: ResearchNodeModel[] | null;
	researchCategoriesMap?: Record<string, ResearchNodeModel>;
	npcs?: NpcModel[] | null;
	npcsMap?: Record<string, NpcModel>;
	factions?: FactionModel[] | null;
	factionsMap?: Record<string, FactionModel>;
	contracts?: ContractModel[] | null;
	contractsMap?: Record<string, ContractModel>;
	dialogues?: DialogueModel[] | null;
	dialoguesMap?: Record<string, DialogueModel>;
	journeys?: JourneyModel[] | null;
	journeysMap?: Record<string, JourneyModel>;
	lootContainers?: LootContainerModel[] | null;
	lootContainersMap?: Record<string, LootContainerModel>;
	skills?: SkillModel[] | null;
	skillsMap?: Record<string, SkillModel>;
	landsraadHouses?: LandsraadHouseModel[] | null;
	landsraadHousesMap?: Record<string, LandsraadHouseModel>;
	landsraadTasks?: LandsraadTaskModel[] | null;
	landsraadTasksMap?: Record<string, LandsraadTaskModel>;
	vehicles?: VehicleModel[] | null;
	vehiclesMap?: Record<string, VehicleModel>;
	worlds?: WorldModel2[] | null;
	worldsMap?: Record<string, WorldModel2>;
}

export interface GameplayAttribute {
	attributeName?: string;
	attribute?: string;
	attributeOwner?: ObjectProperty;
}

export interface GameplayTag {
	tagName?: string;
}

export interface GameplayTagContainer {
	gameplayTags?: GameplayTag[] | null;
	parentTags?: GameplayTag[] | null;
}

export interface GameplayTagDictionaryConverter {
	canRead?: boolean;
	canWrite?: boolean;
}

export interface GameplayTagQuery {
	/** @format int32 */
	tokenStreamVersion?: number;
	tagDictionary?: GameplayTag[] | null;
	queryTokenStream?: number[] | null;
	userDescription?: string;
	autoDescription?: string;
}

export type GridHelper = object;

export type IBaseAttribute = object;

export type IconsBuilder = object;

export type ImageProcessor = object;

export interface IncludeInDetailsAttribute {
	typeId?: any;
}

export interface IntelPointLocationModel {
	mapId?: string;
	name?: string;
	transform?: SimpleTransform;
	mapIcon?: MapIconModel;
	locationType?: MapLocationType;
	/** @uniqueItems true */
	tags?: string[] | null;
	location?: Vector3;
	mapMarkers?: MarkerLocationModel[] | null;
	gridCell?: string;
	/** @format int32 */
	intelPoints?: number;
}

export type ItemCategoryTreeBuilder = object;

export interface ItemCustomizationModel {
	swatchColors?: string[] | null;
}

export interface ItemDropLocation {
	name?: string;
	mapId?: string;
	/** @format int32 */
	x?: number;
	/** @format int32 */
	y?: number;
	/** @format int32 */
	z?: number;
	/** @format int32 */
	minQuantity?: number;
	/** @format int32 */
	maxQuantity?: number;
	/** @format float */
	probability?: number;
	parents?: string[] | null;
	areaLootTier?: string;
	ddLayout?: string;
	markers?: string[] | null;
	/** @uniqueItems true */
	tags?: string[] | null;
}

export interface ItemIDAndInfoCardValuePair {
	itemId?: EItemTemplateID;
	valueLocKey?: TextProperty;
	/** @format float */
	value?: number;
	/** @format int32 */
	numDecimals?: number;
	bHigherIsBetter?: boolean | null;
	/** @format float */
	maxStatValue?: number;
}

export interface ItemModel {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	shortDescription?: string;
	isUnique?: boolean;
	itemTag?: string;
	/** @format int32 */
	tier?: number;
	tierIconPath?: string;
	/** @format int32 */
	lootPool?: number;
	excludeFromLootSystem?: boolean;
	/** @uniqueItems true */
	requiredForRecipe?: RelatedEntity[] | null;
	/** @uniqueItems true */
	requiredForBuilding?: RelatedEntity[] | null;
	/** @uniqueItems true */
	requiredForPlaceable?: RelatedEntity[] | null;
	/** @uniqueItems true */
	requiredForContract?: RelatedEntity[] | null;
	/** @uniqueItems true */
	createdByRecipe?: RelatedEntity[] | null;
	teachesRecipes?: EntityQuantityModel[] | null;
	isDefaultSchematic?: boolean;
	unlocksPlaceables?: RelatedEntity[] | null;
	soldBy?: VendorItem[] | null;
	canBeSoldTo?: VendorItem[] | null;
	action?: string;
	infoCard?: string;
	dropLocations?: ItemDropLocation[] | null;
	schematicDropLocations?: ItemDropLocation[] | null;
	heatmaps?: Record<string, string | null>;
	otherContainers?: ItemDropLocation[] | null;
	schematicOtherContainers?: ItemDropLocation[] | null;
	isSchematic?: boolean;
	schematicSoldBy?: VendorItem[] | null;
	/** @format int32 */
	baseBuyFromVendorPrice?: number;
	/** @format int32 */
	maxStackSize?: number;
	/** @format float */
	volume?: number;
	/** @format int32 */
	schematicBaseBuyFromVendorPrice?: number;
	mtxSources?: string[] | null;
	schematicOutputItem?: RelatedEntity;
	resourceNodeLocations?: ItemDropLocation[] | null;
	/** @uniqueItems true */
	landsraadRewardHouses?: RelatedEntity[] | null;
	attributeValues?: AttributeValueModel[] | null;
	appliesEffectsToTarget?: AttributeValueModel[] | null;
	appliesEffectsToAttacker?: AttributeValueModel[] | null;
	customization?: ItemCustomizationModel;
	rewardFrom?: EntityCountInt32[] | null;
	/** @format int32 */
	highestSellToVendorPrice?: number;
}

export type ItemsBuilder = object;

export interface JourneyConditionDataModel {
	entityQuantity?: EntityQuantityModel;
	entity?: RelatedEntity;
	entities?: RelatedEntity[] | null;
	locations?: Record<string, Vector2[] | null>;
	requiredState?: EJourneyNodeEventState;
}

export interface JourneyConditionModel {
	children?: JourneyConditionModel[] | null;
	type?: string;
	compositeConditionType?: ECompositeConditionType;
	data?: JourneyConditionDataModel;
	rawData?: any;
}

export interface JourneyModel {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	children?: JourneyModel[] | null;
	completionCondition?: JourneyConditionModel;
	revealCondition?: JourneyConditionModel;
	itemRewards?: EntityQuantityModel[] | null;
	/** @format int32 */
	depth?: number;
	subNames?: string[] | null;
	/** @uniqueItems true */
	relatedEntities?: RelatedEntity[] | null;
	/** @uniqueItems true */
	allResearchNodeRewards?: RelatedEntity[] | null;
	xpRewardTags?: string[] | null;
	/** @format int64 */
	xpReward?: number;
	/** @format int64 */
	totalXpReward?: number;
}

export type JourneysBuilder = object;

export type JsonHelper = object;

export type KeyBuilder = object;

export interface KeyValuePairObjectPropertyObjectProperty {
	key?: ObjectProperty;
	value?: ObjectProperty;
}

export interface KeyValuePairObjectPropertyPSCPool {
	key?: ObjectProperty;
	value?: PSCPool;
}

export interface KeyValuePairStringTerrainBlockTemplateSubLevelGroupSettings {
	key?: string;
	value?: TerrainBlockTemplateSubLevelGroupSettings;
}

export interface LandsraadHouseModel {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	uniqueReward?: RelatedEntity;
	mapMarkerIconPath?: string;
	npc?: NpcModel;
	mapMarkers?: MarkerLocationModel[] | null;
}

export interface LandsraadTaskConditionModel {
	item?: RelatedEntity;
	/** @format int32 */
	quantity?: number;
	/** @format float */
	minDurability?: number;
	/** @format float */
	rewardFactor?: number;
	/** @format int32 */
	contributionFactor?: number;
	/** @format float */
	votingInfluenceFactor?: number;
	type?: string;
	/** @format int32 */
	numberToKill?: number;
	targetName?: string;
	/** @uniqueItems true */
	npcTags?: string[] | null;
	vehicle?: RelatedEntity;
	npcLocations?: NpcLocationModel[] | null;
	rewardTiers?: LandsraadTaskRewardWeeklyTiers[] | null;
}

export interface LandsraadTaskModel {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	reward?: EntityCountInt32;
	conditions?: LandsraadTaskConditionModel[] | null;
	/** @format int32 */
	controlPointContributionFactor?: number;
	/** @format float */
	controlPointRewardFactor?: number;
	/** @format int32 */
	taskComplexity?: number;
	/** @format int32 */
	goalAmount?: number;
	uiTitles?: Record<string, string | null>;
}

export interface LandsraadTaskRewardTier {
	/** @format int32 */
	tier?: number;
	/** @format int32 */
	rewardThreshold?: number;
	/** @format int32 */
	turnInCount?: number;
	/** @format float */
	rewardPerTurnIn?: number;
}

export interface LandsraadTaskRewardWeeklyTiers {
	/** @format int32 */
	week?: number;
	tiers?: LandsraadTaskRewardTier[] | null;
}

export type LanguageExtensions = object;

export interface LevelCollection {
	gameState?: ObjectProperty;
	netDriver?: ObjectProperty;
	demoNetDriver?: ObjectProperty;
	persistentLevel?: ObjectProperty;
	levels?: ObjectProperty[] | null;
}

export interface LinearColor {
	/** @format float */
	r?: number;
	/** @format float */
	g?: number;
	/** @format float */
	b?: number;
	/** @format float */
	a?: number;
}

export interface LocalizationAttribute {
	typeId?: any;
	defaultValue?: string;
	localizationKey?: string;
}

export interface LocalizationKeyAttribute {
	typeId?: any;
	key?: string;
}

export type Localizations = object;

export interface LocalizedEntryConverter {
	canRead?: boolean;
	canWrite?: boolean;
}

export type LocalizedEntryEqualityComparer = object;

export interface LocalizedEnumConverter {
	canRead?: boolean;
	canWrite?: boolean;
	/** @deprecated */
	camelCaseText?: boolean;
	namingStrategy?: NamingStrategy;
	allowIntegerValues?: boolean;
}

export interface LootContainerModel {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	/** @format int32 */
	lifeSpanInSeconds?: number;
	/** @format int32 */
	lifeSpanAfterInteractionInSeconds?: number | null;
}

export type LootContainersBuilder = object;

export interface LootDistributionSettingsRowBase {
	bIsEnabled?: boolean | null;
	/** @format int32 */
	priority?: number;
	requiredTags?: GameplayTagContainer;
	forbiddenTags?: GameplayTagContainer;
	lootContainerType?: ELootContainerType;
	lootTable?: SoftObjectProperty;
	lootWeightedTable?: SoftObjectProperty;
	/** @format int32 */
	minimumRespawnTimeInSec?: number;
	/** @format int32 */
	maximumRespawnTimeInSec?: number;
	bOverrideLifespanAfterInteractionIfShared?: boolean | null;
	lifespanAfterInteractionInSecOverrideIfShared?: FloatRange;
	bOverrideLifespanAfterInteractionIfInstanced?: boolean | null;
	lifespanAfterInteractionInSecOverrideIfInstanced?: FloatRange;
	containedWater?: FloatRange;
}

export interface LootEntryModel {
	entity?: RelatedEntity;
	/** @format float */
	chance?: number;
	/** @format int32 */
	minRolls?: number;
	/** @format int32 */
	maxRolls?: number;
}

export interface LootSpawnerModel {
	mapId?: string;
	name?: string;
	transform?: SimpleTransform;
	mapIcon?: MapIconModel;
	locationType?: MapLocationType;
	/** @uniqueItems true */
	tags?: string[] | null;
	location?: Vector3;
	mapMarkers?: MarkerLocationModel[] | null;
	gridCell?: string;
	lootContainerType?: RelatedEntity;
	lootTable?: string;
	weightedLootTable?: string;
	visibleLoot?: EntityQuantityRangeModel[] | null;
	locationHint?: string;
	parents?: string[] | null;
	everyWeek?: boolean;
}

export type LootSpawnersPostProcessor = object;

export interface LootStats {
	expectation?: Record<string, number | null>;
	variance?: Record<string, number | null>;
	probability?: Record<string, number | null>;
	minPositive?: Record<string, number | null>;
}

export interface LootTable {
	id?: string;
	entries?: LootTableEntry[] | null;
	items?: EntityQuantityRangeModel[] | null;
}

export interface LootTableEntry {
	itemId?: string;
	itemsQuery?: string;
	/** @uniqueItems true */
	requiredTags?: string[] | null;
	/** @uniqueItems true */
	forbiddenTags?: string[] | null;
	lootTable?: LootTable;
	weightedLootTable?: WeightedLootTable;
	variety?: ELootTableItemVariety;
	itemsQueryMatches?: string[] | null;
	/** @format float */
	percentageChance?: number;
	/** @format int32 */
	numRolls?: number;
}

export interface LootTableEntryBase {
	itemId?: string;
	itemsQuery?: string;
	/** @uniqueItems true */
	requiredTags?: string[] | null;
	/** @uniqueItems true */
	forbiddenTags?: string[] | null;
	lootTable?: LootTable;
	weightedLootTable?: WeightedLootTable;
	variety?: ELootTableItemVariety;
	itemsQueryMatches?: string[] | null;
}

export type MapActorsBuilder2 = object;

export interface MapIconModel {
	id?: string;
	iconPath?: string;
	x2IconPath?: string;
	/** @format int32 */
	width?: number;
	/** @format int32 */
	height?: number;
	filterTag?: string;
	name?: string;
}

export interface MapLocationModel {
	mapId?: string;
	name?: string;
	transform?: SimpleTransform;
	mapIcon?: MapIconModel;
	locationType?: MapLocationType;
	/** @uniqueItems true */
	tags?: string[] | null;
	location?: Vector3;
	mapMarkers?: MarkerLocationModel[] | null;
	gridCell?: string;
}

export type MapPolygonTransformer = object;

export type MapsBuilder = object;

export interface MarkerLocationModel {
	mapId?: string;
	name?: string;
	transform?: SimpleTransform;
	mapIcon?: MapIconModel;
	locationType?: MapLocationType;
	/** @uniqueItems true */
	tags?: string[] | null;
	location?: Vector3;
	mapMarkers?: MarkerLocationModel[] | null;
	gridCell?: string;
}

export interface MeshModel {
	/** @minLength 1 */
	meshPath: string;
	textures: MeshTextureModel[];
}

export type MeshProcessor = object;

export type MeshSampler = object;

export interface MeshTextureModel {
	slot?: string;
	type?: string;
	path?: string;
	colors?: Record<string, string | null>;
}

export interface MetadataModel {
	type?: string;
	name?: string;
	outer?: string;
	/** @format int32 */
	index?: number;
	class?: string;
	rowStruct?: string;
	path?: string;
}

export interface ModularAiBehaviorInstance {
	m_BehaviorAsset?: SoftObjectProperty;
	m_LevelObjects?: ObjectProperty[] | null;
	m_ActivationState?: EModularAiBehaviorState;
	m_Owner?: ObjectProperty;
}

export interface NamingStrategy {
	processDictionaryKeys?: boolean;
	processExtensionDataNames?: boolean;
	overrideSpecifiedNames?: boolean;
}

export interface NpcLocationModel {
	mapId?: string;
	name?: string;
	transform?: SimpleTransform;
	mapIcon?: MapIconModel;
	locationType?: MapLocationType;
	/** @uniqueItems true */
	tags?: string[] | null;
	location?: Vector3;
	mapMarkers?: MarkerLocationModel[] | null;
	gridCell?: string;
	npcId?: string;
	transformSource?: string;
}

export interface NpcModel {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	hostilityType?: EHostilityType;
	sellsItems?: VendorItem[] | null;
	buysItems?: VendorItem[] | null;
	locations?: Record<string, Vector3[] | null>;
	isNamed?: boolean;
	/** @uniqueItems true */
	quests?: RelatedEntity[] | null;
	/** @uniqueItems true */
	contracts?: RelatedEntity[] | null;
	configId?: string;
	/** @uniqueItems true */
	moduleTags?: string[] | null;
	landsraadHouse?: RelatedEntity;
}

export type NpcsBuilder = object;

export interface ObjectProperty {
	objectName?: string;
	objectPath?: string;
}

export interface ObjectPropertyDictionaryConverter {
	canRead?: boolean;
	canWrite?: boolean;
}

export interface OrientedBoxData {
	m_LocalOffset?: Vector;
	m_Extent?: Vector;
	m_LocalRotation?: Quat;
}

export interface OverriddenNPCAttribute {
	overridingGameplayAttribute?: GameplayAttribute;
	/** @format float */
	overridingValue?: number;
}

export interface PSCPool {
	freeElements?: PSCPoolElem[] | null;
}

export interface PSCPoolElem {
	psc?: ObjectProperty;
}

export interface PentashieldKeyModel {
	mapId?: string;
	name?: string;
	transform?: SimpleTransform;
	mapIcon?: MapIconModel;
	locationType?: MapLocationType;
	/** @uniqueItems true */
	tags?: string[] | null;
	location?: Vector3;
	mapMarkers?: MarkerLocationModel[] | null;
	gridCell?: string;
}

export interface PlaceableModel {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	faction?: string;
	buildableTier?: string;
	buildableGroup?: string;
	/** @uniqueItems true */
	recipes?: RelatedEntity[] | null;
	ingredients?: EntityQuantityModel[] | null;
	productionTypes?: string[] | null;
	placeableStats?: PlaceableStats;
	/** @uniqueItems true */
	productionTypeIds?: string[] | null;
	/** @uniqueItems true */
	unlockedByPatents?: RelatedEntity[] | null;
	/** @format float */
	maxHealth?: number;
}

export interface PlaceableStats {
	/** @format int32 */
	powerProduction?: number;
	/** @format int32 */
	powerConsumption?: number;
	/** @format int32 */
	inventoryMaxItemCount?: number;
	/** @format float */
	inventoryMaxItemVolume?: number;
	/** @format int32 */
	waterCapacity?: number;
	/** @format float */
	waterGenerationPerSecond?: number;
	/** @format int32 */
	capacity?: number;
	/** @format int32 */
	conversionYield?: number;
	/** @format float */
	conversionRate?: number;
	/** @format float */
	totalConversionTimeInSeconds?: number;
	/** @uniqueItems true */
	supportedFuelTypes?: RelatedEntity[] | null;
	/** @format float */
	maxHealth?: number;
	/** @format float */
	bloodWaterExtractionRate?: number;
	/** @format float */
	bloodWaterExtractionEfficiency?: number;
}

export type PlaceablesBuilder = object;

export type Pluralizer = object;

export interface PointF {
	isEmpty?: boolean;
	/** @format float */
	x?: number;
	/** @format float */
	y?: number;
}

export interface PropSettings {
	propMesh?: SoftObjectProperty;
	propSocket?: string;
	propTransform?: Transform;
}

export interface Quat {
	/** @format double */
	x?: number;
	/** @format double */
	y?: number;
	/** @format double */
	z?: number;
	/** @format double */
	w?: number;
}

export interface RecipeModel {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	ingredients?: EntityQuantityModel[] | null;
	/** @format int32 */
	waterAmount?: number;
	/** @format float */
	craftingTime?: number;
	outputs?: EntityQuantityModel[] | null;
	requiredProductionTypes?: RelatedEntity[] | null;
	outputItem?: RelatedEntity;
	/** @uniqueItems true */
	toughtBySchematics?: RelatedEntity[] | null;
	/** @format int32 */
	totalIngredientsCount?: number;
	actionName?: string;
	researchCategory?: string;
	researchNode?: RelatedEntity;
}

export type RecipesBuilder = object;

export type ReflectionHelpers = object;

export type RelatedEntity = {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	slots?: VehicleSlot[] | null;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	nodes?: ResearchNodeModel[] | null;
	/** @format int32 */
	intelSpentRequirement?: number;
	entity?: RelatedEntity;
	/** @format int32 */
	intelPointsCost?: number;
	/** @format int32 */
	additionalChargesIntelPointsCost?: number;
	/** @format int32 */
	additionalChargesCount?: number | null;
	/** @format int32 */
	recipeUses?: number | null;
	researchNodeType?: string;
	/** @format int32 */
	tier?: number;
	parents?: string[] | null;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	tag?: string;
	skillTree?: ESkillTree;
	skillType?: ESkillType;
	/** @format int32 */
	gridX?: number;
	/** @format int32 */
	gridY?: number;
	/** @uniqueItems true */
	preReqs?: string[] | null;
	/** @format int32 */
	maxLevel?: number;
	costPerlevel?: number[] | null;
	attributeBonuses?: SkillAttributeBonusModel[] | null;
	levelRequirements?: string[] | null;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	ingredients?: EntityQuantityModel[] | null;
	/** @format int32 */
	waterAmount?: number;
	/** @format float */
	craftingTime?: number;
	outputs?: EntityQuantityModel[] | null;
	requiredProductionTypes?: RelatedEntity[] | null;
	outputItem?: RelatedEntity;
	/** @uniqueItems true */
	toughtBySchematics?: RelatedEntity[] | null;
	/** @format int32 */
	totalIngredientsCount?: number;
	actionName?: string;
	researchCategory?: string;
	researchNode?: RelatedEntity;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	faction?: string;
	buildableTier?: string;
	buildableGroup?: string;
	/** @uniqueItems true */
	recipes?: RelatedEntity[] | null;
	ingredients?: EntityQuantityModel[] | null;
	productionTypes?: string[] | null;
	placeableStats?: PlaceableStats;
	/** @uniqueItems true */
	productionTypeIds?: string[] | null;
	/** @uniqueItems true */
	unlockedByPatents?: RelatedEntity[] | null;
	/** @format float */
	maxHealth?: number;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	hostilityType?: EHostilityType;
	sellsItems?: VendorItem[] | null;
	buysItems?: VendorItem[] | null;
	locations?: Record<string, Vector3[] | null>;
	isNamed?: boolean;
	/** @uniqueItems true */
	quests?: RelatedEntity[] | null;
	/** @uniqueItems true */
	contracts?: RelatedEntity[] | null;
	configId?: string;
	/** @uniqueItems true */
	moduleTags?: string[] | null;
	landsraadHouse?: RelatedEntity;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	root?: WorldModel2;
	parent?: WorldModel2;
	worldLevelWorldEntry?: EntryWorld;
	terrainBlocks?: PointF[][] | null;
	transform?: SimpleTransform;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	/** @format int32 */
	lifeSpanInSeconds?: number;
	/** @format int32 */
	lifeSpanAfterInteractionInSeconds?: number | null;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	uniqueReward?: RelatedEntity;
	mapMarkerIconPath?: string;
	npc?: NpcModel;
	mapMarkers?: MarkerLocationModel[] | null;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	reward?: EntityCountInt32;
	conditions?: LandsraadTaskConditionModel[] | null;
	/** @format int32 */
	controlPointContributionFactor?: number;
	/** @format float */
	controlPointRewardFactor?: number;
	/** @format int32 */
	taskComplexity?: number;
	/** @format int32 */
	goalAmount?: number;
	uiTitles?: Record<string, string | null>;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	children?: JourneyModel[] | null;
	completionCondition?: JourneyConditionModel;
	revealCondition?: JourneyConditionModel;
	itemRewards?: EntityQuantityModel[] | null;
	/** @format int32 */
	depth?: number;
	subNames?: string[] | null;
	/** @uniqueItems true */
	relatedEntities?: RelatedEntity[] | null;
	/** @uniqueItems true */
	allResearchNodeRewards?: RelatedEntity[] | null;
	xpRewardTags?: string[] | null;
	/** @format int64 */
	xpReward?: number;
	/** @format int64 */
	totalXpReward?: number;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	shortDescription?: string;
	isUnique?: boolean;
	itemTag?: string;
	/** @format int32 */
	tier?: number;
	tierIconPath?: string;
	/** @format int32 */
	lootPool?: number;
	excludeFromLootSystem?: boolean;
	/** @uniqueItems true */
	requiredForRecipe?: RelatedEntity[] | null;
	/** @uniqueItems true */
	requiredForBuilding?: RelatedEntity[] | null;
	/** @uniqueItems true */
	requiredForPlaceable?: RelatedEntity[] | null;
	/** @uniqueItems true */
	requiredForContract?: RelatedEntity[] | null;
	/** @uniqueItems true */
	createdByRecipe?: RelatedEntity[] | null;
	teachesRecipes?: EntityQuantityModel[] | null;
	isDefaultSchematic?: boolean;
	unlocksPlaceables?: RelatedEntity[] | null;
	soldBy?: VendorItem[] | null;
	canBeSoldTo?: VendorItem[] | null;
	action?: string;
	infoCard?: string;
	dropLocations?: ItemDropLocation[] | null;
	schematicDropLocations?: ItemDropLocation[] | null;
	heatmaps?: Record<string, string | null>;
	otherContainers?: ItemDropLocation[] | null;
	schematicOtherContainers?: ItemDropLocation[] | null;
	isSchematic?: boolean;
	schematicSoldBy?: VendorItem[] | null;
	/** @format int32 */
	baseBuyFromVendorPrice?: number;
	/** @format int32 */
	maxStackSize?: number;
	/** @format float */
	volume?: number;
	/** @format int32 */
	schematicBaseBuyFromVendorPrice?: number;
	mtxSources?: string[] | null;
	schematicOutputItem?: RelatedEntity;
	resourceNodeLocations?: ItemDropLocation[] | null;
	/** @uniqueItems true */
	landsraadRewardHouses?: RelatedEntity[] | null;
	attributeValues?: AttributeValueModel[] | null;
	appliesEffectsToTarget?: AttributeValueModel[] | null;
	appliesEffectsToAttacker?: AttributeValueModel[] | null;
	customization?: ItemCustomizationModel;
	rewardFrom?: EntityCountInt32[] | null;
	/** @format int32 */
	highestSellToVendorPrice?: number;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	nodes?: Record<string, DialogueNodeModel>;
	rootNodes?: DialogueNodeModel[] | null;
	/** @uniqueItems true */
	rootIds?: number[] | null;
	/** @uniqueItems true */
	setModuleTags?: string[] | null;
	/** @uniqueItems true */
	flagsToAdd?: string[] | null;
	npcs?: RelatedEntity[] | null;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	conditions?: ContractConditionModel[] | null;
	/** @uniqueItems true */
	contractTags?: string[] | null;
	targetNpcs?: RelatedEntity[] | null;
	chainId?: string;
	chainName?: string;
	isChainFinal?: boolean;
	/** @format int32 */
	chainOrder?: number | null;
	chainContracts?: RelatedEntity[] | null;
	contractCustomRewards?: ContractCustomRewardModel[] | null;
	/** @format int64 */
	xpReward?: number;
	itemRewards?: EntityCountInt32[] | null;
} & {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	requiresLearning?: boolean;
	groupInTechTree?: boolean;
	buildables?: RelatedEntity[] | null;
};

export type RelatedEntityComparer = object;

export interface RelatedEntityConverter {
	canRead?: boolean;
	canWrite?: boolean;
}

export type RelatedEntityEqualityComparer = object;

export type RelatedEntityExtensions = object;

export interface RelationAttribute {
	typeId?: any;
	entityType?: EntityType;
}

export type RelationExtensions = object;

export interface RepAttachment {
	attachParent?: ObjectProperty;
	locationOffset?: VectorNetQuantize100;
	relativeScale3D?: VectorNetQuantize100;
	rotationOffset?: Rotator;
	attachSocket?: string;
	attachComponent?: ObjectProperty;
}

export interface RepMovement {
	linearVelocity?: Vector;
	angularVelocity?: Vector;
	location?: Vector;
	rotation?: Rotator;
	bSimulatedPhysicSleep?: boolean | null;
	bRepPhysics?: boolean | null;
	/** @format int32 */
	serverFrame?: number;
	/** @format int32 */
	serverPhysicsHandle?: number;
	locationQuantizationLevel?: EVectorQuantization;
	velocityQuantizationLevel?: EVectorQuantization;
	rotationQuantizationLevel?: ERotatorQuantization;
}

export type ReplicatorProxy = object;

export interface ResearchNodeModel {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	nodes?: ResearchNodeModel[] | null;
	/** @format int32 */
	intelSpentRequirement?: number;
	entity?: RelatedEntity;
	/** @format int32 */
	intelPointsCost?: number;
	/** @format int32 */
	additionalChargesIntelPointsCost?: number;
	/** @format int32 */
	additionalChargesCount?: number | null;
	/** @format int32 */
	recipeUses?: number | null;
	researchNodeType?: string;
	/** @format int32 */
	tier?: number;
	parents?: string[] | null;
}

export type ResearchNodesBuilder = object;

export type ResourceHeatmapsBuilder = object;

export type ResourceHeatmapsData = object;

export interface ResourceNodeLocationModel {
	mapId?: string;
	name?: string;
	transform?: SimpleTransform;
	mapIcon?: MapIconModel;
	locationType?: MapLocationType;
	/** @uniqueItems true */
	tags?: string[] | null;
	location?: Vector3;
	mapMarkers?: MarkerLocationModel[] | null;
	gridCell?: string;
	resourceItemId?: string;
}

export type ResponseSerializer = object;

export interface Rotator {
	/** @format double */
	pitch?: number;
	/** @format double */
	yaw?: number;
	/** @format double */
	roll?: number;
}

export interface SceneComponent {
	primaryComponentTick?: ActorComponentTickFunction;
	componentTags?: string[] | null;
	assetUserData?: ObjectProperty[] | null;
	/** @format int32 */
	ucsSerializationIndex?: number;
	layoutReplicator?: ReplicatorProxy;
	componentNeedsLoadFor?: EObjectNeedsLoadFor;
	bIsClientOnly?: boolean | null;
	bNetAddressable?: boolean | null;
	bReplicateUsingRegisteredSubObjectList?: boolean | null;
	bReplicates?: boolean | null;
	bAutoActivate?: boolean | null;
	bIsActive?: boolean | null;
	bEditableWhenInherited?: boolean | null;
	bCanEverAffectNavigation?: boolean | null;
	bIsEditorOnly?: boolean | null;
	bUsesFgl?: boolean | null;
	creationMethod?: EComponentCreationMethod;
	onComponentActivated?: any;
	onComponentDeactivated?: any;
	/** @format float */
	netUpdateFrequency?: number;
	entityId?: EntityId;
	fglType?: ObjectProperty;
	physicsVolume?: ObjectProperty;
	attachParent?: ObjectProperty;
	attachSocketName?: string;
	attachChildren?: ObjectProperty[] | null;
	clientAttachedChildren?: ObjectProperty[] | null;
	relativeLocation?: Vector;
	relativeRotation?: Rotator;
	relativeScale3D?: Vector;
	componentVelocity?: Vector;
	bComponentToWorldUpdated?: boolean | null;
	bAbsoluteLocation?: boolean | null;
	bAbsoluteRotation?: boolean | null;
	bAbsoluteScale?: boolean | null;
	bVisible?: boolean | null;
	bShouldBeAttached?: boolean | null;
	bShouldSnapLocationWhenAttached?: boolean | null;
	bShouldSnapRotationWhenAttached?: boolean | null;
	bShouldSnapScaleWhenAttached?: boolean | null;
	bShouldUpdatePhysicsVolume?: boolean | null;
	bHiddenInGame?: boolean | null;
	bBoundsChangeTriggersStreamingDataRebuild?: boolean | null;
	bUseAttachParentBound?: boolean | null;
	bComputeFastLocalBounds?: boolean | null;
	bComputeBoundsOnceForGame?: boolean | null;
	bComputedBoundsOnceForGame?: boolean | null;
	bIsNotRenderAttachmentRoot?: boolean | null;
	mobility?: EComponentMobility;
	detailMode?: EDetailMode;
	physicsVolumeChangedDelegate?: any;
}

export interface SearchEntry {
	path?: string;
	name?: string;
	type?: string;
	iconPath?: string;
	additional?: string;
}

export type SearchIndex = object;

export interface SecretDoorLocationModel {
	mapId?: string;
	name?: string;
	transform?: SimpleTransform;
	mapIcon?: MapIconModel;
	locationType?: MapLocationType;
	/** @uniqueItems true */
	tags?: string[] | null;
	location?: Vector3;
	mapMarkers?: MarkerLocationModel[] | null;
	gridCell?: string;
}

export interface SetModuleLevelEvent {
	module?: GameplayTag;
}

export type SimpleCurveExtensions = object;

export type SimpleTransform = object;

export type SiteMapBuilder = object;

export interface SkillAttributeBonusModel {
	/** @format int32 */
	level?: number;
	attributeId?: string;
	/** @format float */
	value?: number;
	operation?: EGameplayModOp;
	name?: string;
	isPercentBased?: boolean;
	internalName?: string;
}

export interface SkillModel {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	tag?: string;
	skillTree?: ESkillTree;
	skillType?: ESkillType;
	/** @format int32 */
	gridX?: number;
	/** @format int32 */
	gridY?: number;
	/** @uniqueItems true */
	preReqs?: string[] | null;
	/** @format int32 */
	maxLevel?: number;
	costPerlevel?: number[] | null;
	attributeBonuses?: SkillAttributeBonusModel[] | null;
	levelRequirements?: string[] | null;
}

export type SkillsBuilder = object;

export interface SoftObjectPath {
	assetPath?: TopLevelAssetPath;
	subPathString?: string;
}

export interface SoftObjectProperty {
	assetPathName?: string;
	subPathString?: string;
}

export type SpoilerCleanup = object;

export interface StreamingLevels {
	streamingLevels_P?: ObjectProperty[] | null;
	streamingLevelSet?: ObjectProperty[] | null;
	levelStreamingObjectsWithVolumes?: ObjectProperty[] | null;
	loadedLevelMap?: KeyValuePairObjectPropertyObjectProperty[] | null;
}

export interface StreamingLevelsToConsider {
	streamingLevels?: ObjectProperty[] | null;
}

export interface StringDictionaryConverter {
	canRead?: boolean;
	canWrite?: boolean;
}

export interface SummaryContractResolver {
	dynamicCodeGeneration?: boolean;
	defaultMembersSearchFlags?: BindingFlags;
	serializeCompilerGeneratedMembers?: boolean;
	ignoreSerializableInterface?: boolean;
	ignoreSerializableAttribute?: boolean;
	ignoreIsSpecifiedMembers?: boolean;
	ignoreShouldSerializeMembers?: boolean;
	namingStrategy?: NamingStrategy;
}

export interface SummaryInDetailsContractResolver {
	dynamicCodeGeneration?: boolean;
	defaultMembersSearchFlags?: BindingFlags;
	serializeCompilerGeneratedMembers?: boolean;
	ignoreSerializableInterface?: boolean;
	ignoreSerializableAttribute?: boolean;
	ignoreIsSpecifiedMembers?: boolean;
	ignoreShouldSerializeMembers?: boolean;
	namingStrategy?: NamingStrategy;
}

export interface SummaryIncludeAttribute {
	typeId?: any;
}

export type SummaryMapper = object;

export type T_0 = object;

export type T_1 = object;

export interface TagArea {
	mapId?: string;
	tag?: string;
	data?: any[] | null;
	valid?: boolean;
}

export interface TagBehavior {
	/** @uniqueItems true */
	tags?: string[] | null;
	tagQuery?: string;
}

export type TagQueryEvaluator = object;

export interface TerrainBlockDataAsset {
	nativeClass?: ObjectProperty;
	m_Data?: TerrainBlockRow;
}

export interface TerrainBlockRow {
	settings?: TerrainBlockSetting;
	bCanBeRotated?: boolean | null;
	bIsFreeRotationAllowed?: boolean | null;
	baseLevel?: SoftObjectProperty;
	versions?: TerrainBlockTemplateRowBase[] | null;
}

export interface TerrainBlockSetting {
	tags?: GameplayTagContainer;
	snapType?: ESurfaceSnappingType;
	/** @format float */
	additionalSnappingOffsetByZ?: number;
	color?: Color;
	bIsEnabled?: boolean | null;
	bCanBeUsedToPlaceWorldGeneratorContent?: boolean | null;
}

export interface TerrainBlockSubLevelInstanceData {
	level?: SoftObjectProperty;
	relativeLocation?: Vector;
	originalLevelBounds?: Box;
	/** @format int32 */
	streamingDistance?: number;
	groupsNames?: string[] | null;
	lodsData?: TerrainBlockSubLevelInstanceLodData[] | null;
}

export interface TerrainBlockSubLevelInstanceLodData {
	lodLevel?: SoftObjectProperty;
	/** @format int32 */
	relativeStreamingDistance?: number;
	bExcludeOnConsole?: boolean | null;
}

export interface TerrainBlockTemplateRowBase {
	level?: SoftObjectProperty;
	overallBounds?: Box;
	subLevelsGroups?: KeyValuePairStringTerrainBlockTemplateSubLevelGroupSettings[] | null;
	subContentBlocksSettings?: TerrainBlockTemplateSubLevelContentBlockSettings[] | null;
	subLevels?: TerrainBlockSubLevelInstanceData[] | null;
}

export interface TerrainBlockTemplateSubLevelContentBlockSettings {
	alias?: string;
	groupsNames?: string[] | null;
	contentBlockActor?: SoftObjectPath;
	bShouldOverrideIsEnabled?: boolean | null;
	bIsEnabled?: boolean | null;
	bShouldOverrideTerrainBlockAsset?: boolean | null;
	terrainBlockAsset?: ObjectProperty;
	bShouldOverrideSubLevelsGroups?: boolean | null;
	subLevelsGroupsOverride?: TerrainBlockTemplateSubLevelGroupSettingsOverride[] | null;
}

export interface TerrainBlockTemplateSubLevelGroupSettings {
	bIsEnabled?: boolean | null;
}

export interface TerrainBlockTemplateSubLevelGroupSettingsOverride {
	alias?: string;
	groupName?: string;
	bShouldOverrideIsEnabled?: boolean | null;
	bIsEnabled?: boolean | null;
}

export interface TextProperty {
	namespace?: string;
	key?: string;
	sourceString?: string;
	localizedString?: string;
	cultureInvariantString?: string;
	tableId?: string;
	sourceFmt?: TextProperty;
	arguments?: Record<string, TextPropertyVariable>;
}

export interface TextPropertyVariable {
	/** @format int32 */
	type?: number;
	value?: TextProperty;
}

export interface TimerHandle {
	/** @format int64 */
	handle?: number;
}

export interface TopLevelAssetPath {
	packageName?: string;
	assetName?: string;
}

export interface Transform {
	rotation?: Quat;
	translation?: Vector;
	scale3D?: Vector;
}

export type TransformExtensions = object;

export interface TreeNode {
	value?: T_0;
	children?: TreeNode[] | null;
}

export type Triangle = object;

export interface UILocalizationsModel {
	languages: Record<string, string | null>;
	homePage: Record<string, string>;
	items: Record<string, string>;
	recipes: Record<string, string>;
	search: Record<string, string>;
	all: Record<string, string>;
}

export type UploadCounter = object;

export type Uploader = object;

export interface Vector {
	/** @format double */
	x?: number;
	/** @format double */
	y?: number;
	/** @format double */
	z?: number;
}

export type Vector2 = { x: number; y: number };

export type Vector3 = { x: number; y: number; z: number };

export interface Vector3Converter {
	canRead?: boolean;
	canWrite?: boolean;
}

export interface VectorNetQuantize100 {
	/** @format double */
	x?: number;
	/** @format double */
	y?: number;
	/** @format double */
	z?: number;
}

export interface VehicleLocationModel {
	mapId?: string;
	name?: string;
	transform?: SimpleTransform;
	mapIcon?: MapIconModel;
	locationType?: MapLocationType;
	/** @uniqueItems true */
	tags?: string[] | null;
	location?: Vector3;
	mapMarkers?: MarkerLocationModel[] | null;
	gridCell?: string;
	vehicleType?: string;
}

export interface VehicleModel {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	slots?: VehicleSlot[] | null;
}

export interface VehicleSlot {
	name?: string;
	isMandatory?: boolean;
	modules?: RelatedEntity[] | null;
	slotType?: EVehicleModuleType;
}

export interface VendorItem {
	entity?: RelatedEntity;
	/** @format float */
	percentToApplyOnBaseItemPrice?: number;
	/** @format int32 */
	stockAmount?: number | null;
	requiredTags?: string[] | null;
	isSchematic?: boolean;
}

export interface Version {
	/** @format int32 */
	major?: number;
	/** @format int32 */
	minor?: number;
	/** @format int32 */
	build?: number;
	/** @format int32 */
	revision?: number;
	/** @format int32 */
	majorRevision?: number;
	/** @format int32 */
	minorRevision?: number;
}

export interface WeightedLootTable {
	id?: string;
	entries?: WeightedLootTableEntry[] | null;
}

export interface WeightedLootTableEntry {
	itemId?: string;
	itemsQuery?: string;
	/** @uniqueItems true */
	requiredTags?: string[] | null;
	/** @uniqueItems true */
	forbiddenTags?: string[] | null;
	lootTable?: LootTable;
	weightedLootTable?: WeightedLootTable;
	variety?: ELootTableItemVariety;
	itemsQueryMatches?: string[] | null;
	/** @format int32 */
	minRolls?: number;
	/** @format int32 */
	maxRolls?: number;
	/** @format float */
	weight?: number;
}

export interface World {
	persistentLevel?: ObjectProperty;
	netDriver?: ObjectProperty;
	serverNetDriver?: ObjectProperty;
	clientNetDriver?: ObjectProperty;
	serverID?: any;
	lineBatcher?: ObjectProperty;
	persistentLineBatcher?: ObjectProperty;
	foregroundLineBatcher?: ObjectProperty;
	networkManager?: ObjectProperty;
	physicsCollisionHandler?: ObjectProperty;
	extraReferencedObjects?: ObjectProperty[] | null;
	perModuleDataObjects?: ObjectProperty[] | null;
	streamingLevels?: StreamingLevels;
	streamingLevelsToConsider?: StreamingLevelsToConsider;
	serverStreamingLevelsVisibility?: ObjectProperty;
	streamingLevelsPrefix?: string;
	currentLevelPendingVisibility?: ObjectProperty;
	currentLevelPendingInvisibility?: ObjectProperty;
	demoNetDriver?: ObjectProperty;
	myParticleEventManager?: ObjectProperty;
	defaultPhysicsVolume?: ObjectProperty;
	bAreConstraintsDirty?: boolean | null;
	navigationSystem?: ObjectProperty;
	authorityGameMode?: ObjectProperty;
	gameState?: ObjectProperty;
	sharedMapState?: ObjectProperty;
	aiSystem?: ObjectProperty;
	avoidanceManager?: ObjectProperty;
	levels?: ObjectProperty[] | null;
	levelCollections?: LevelCollection[] | null;
	owningGameInstance?: ObjectProperty;
	parameterCollectionInstances?: ObjectProperty[] | null;
	canvasForRenderingToTarget?: ObjectProperty;
	canvasForDrawMaterialToRenderTarget?: ObjectProperty;
	physicsField?: ObjectProperty;
	/** @format int32 */
	lwiLastAssignedUID?: number;
	componentsThatNeedPreEndOfFrameSync?: ObjectProperty[] | null;
	componentsThatNeedEndOfFrameUpdate?: ObjectProperty[] | null;
	componentsThatNeedEndOfFrameUpdate_OnGameThread?: ObjectProperty[] | null;
	worldComposition?: ObjectProperty;
	contentBundleManager?: ObjectProperty;
	pscPool?: WorldPSCPool;
}

export interface WorldLayoutTerrainBlockArrayItem {
	/** @format int32 */
	replicationID?: number;
	/** @format int32 */
	replicationKey?: number;
	/** @format int32 */
	mostRecentArrayReplicationKey?: number;
	location?: Vector;
	rotation?: Rotator;
	/** @format int32 */
	nameIndex?: number;
	assetName?: string;
	subLevelGroupsSettings?: TerrainBlockTemplateSubLevelGroupSettingsOverride[] | null;
	subContentBlocksSettings?: TerrainBlockTemplateSubLevelContentBlockSettings[] | null;
}

export interface WorldModel2 {
	/** @minLength 1 */
	id: string;
	entityType: EntityType;
	type?: string;
	name?: string;
	iconPath?: string;
	description?: string;
	mainCategoryId?: string;
	subCategoryId?: string;
	isDev?: boolean;
	isHidden?: boolean;
	subtitle?: string;
	/** @uniqueItems true */
	filterCategoryIds: string[];
	root?: WorldModel2;
	parent?: WorldModel2;
	worldLevelWorldEntry?: EntryWorld;
	terrainBlocks?: PointF[][] | null;
	transform?: SimpleTransform;
}

export interface WorldPSCPool {
	worldParticleSystemPools?: KeyValuePairObjectPropertyPSCPool[] | null;
}

export interface XpTableLevelModel {
	/** @format int32 */
	level?: number;
	/** @format float */
	xpNeeded?: number;
	/** @format float */
	skillPointsRewarded?: number;
	/** @format float */
	intelPointsRewarded?: number;
	/** @format float */
	totalXPNeeded?: number;
	/** @format float */
	totalSkillPointsRewarded?: number;
	/** @format float */
	totalIntelPointsRewarded?: number;
}

export type XpTablesBuilder = object;
