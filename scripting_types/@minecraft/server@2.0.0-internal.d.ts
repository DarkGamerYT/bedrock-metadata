// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @internal
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server",
 *     "version": "2.0.0-internal"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
export enum AimAssistTargetMode {
    Angle = "Angle",
    Distance = "Distance",
}

export enum BlockComponentTypes {
    FluidContainer = "minecraft:fluid_container",
    Inventory = "minecraft:inventory",
    Piston = "minecraft:piston",
    RecordPlayer = "minecraft:record_player",
    Sign = "minecraft:sign",
}

export enum BlockPistonState {
    Expanded = "Expanded",
    Expanding = "Expanding",
    Retracted = "Retracted",
    Retracting = "Retracting",
}

export enum BlockVolumeIntersection {
    Disjoint = 0,
    Contains = 1,
    Intersects = 2,
}

export enum ButtonState {
    Pressed = "Pressed",
    Released = "Released",
}

export enum CommandPermissionLevel {
    Any = 0,
    GameDirectors = 1,
    Admin = 2,
    Host = 3,
    Owner = 4,
}

export enum CompoundBlockVolumeAction {
    Add = 0,
    Subtract = 1,
}

export enum CompoundBlockVolumePositionRelativity {
    Relative = 0,
    Absolute = 1,
}

export enum CustomCommandErrorReason {
    AlreadyRegistered = "AlreadyRegistered",
    EnumDependencyMissing = "EnumDependencyMissing",
    NamespaceMismatch = "NamespaceMismatch",
    ParameterLimit = "ParameterLimit",
    RegistryInvalid = "RegistryInvalid",
    RegistryReadOnly = "RegistryReadOnly",
}

export enum CustomCommandParamType {
    Boolean = 0,
    Integer = 1,
    Float = 2,
    String = 3,
    EntitySelector = 4,
    PlayerSelector = 5,
    Location = 6,
    BlockType = 7,
    ItemType = 8,
    Enum = 9,
}

export enum CustomCommandSource {
    Block = "Block",
    Entity = "Entity",
    NPCDialogue = "NPCDialogue",
    Server = "Server",
}

export enum CustomCommandStatus {
    Success = 0,
    Failure = 1,
}

export enum CustomComponentNameErrorReason {
    NoNamespace = 1,
    DisallowedNamespace = 2,
}

export enum Difficulty {
    Easy = "Easy",
    Hard = "Hard",
    Normal = "Normal",
    Peaceful = "Peaceful",
}

export enum Direction {
    Down = "Down",
    East = "East",
    North = "North",
    South = "South",
    Up = "Up",
    West = "West",
}

export enum DisplaySlotId {
    BelowName = "BelowName",
    List = "List",
    Sidebar = "Sidebar",
}

export enum DyeColor {
    Black = "Black",
    Blue = "Blue",
    Brown = "Brown",
    Cyan = "Cyan",
    Gray = "Gray",
    Green = "Green",
    LightBlue = "LightBlue",
    Lime = "Lime",
    Magenta = "Magenta",
    Orange = "Orange",
    Pink = "Pink",
    Purple = "Purple",
    Red = "Red",
    Silver = "Silver",
    White = "White",
    Yellow = "Yellow",
}

export enum EasingType {
    InBack = "InBack",
    InBounce = "InBounce",
    InCirc = "InCirc",
    InCubic = "InCubic",
    InElastic = "InElastic",
    InExpo = "InExpo",
    InOutBack = "InOutBack",
    InOutBounce = "InOutBounce",
    InOutCirc = "InOutCirc",
    InOutCubic = "InOutCubic",
    InOutElastic = "InOutElastic",
    InOutExpo = "InOutExpo",
    InOutQuad = "InOutQuad",
    InOutQuart = "InOutQuart",
    InOutQuint = "InOutQuint",
    InOutSine = "InOutSine",
    InQuad = "InQuad",
    InQuart = "InQuart",
    InQuint = "InQuint",
    InSine = "InSine",
    Linear = "Linear",
    OutBack = "OutBack",
    OutBounce = "OutBounce",
    OutCirc = "OutCirc",
    OutCubic = "OutCubic",
    OutElastic = "OutElastic",
    OutExpo = "OutExpo",
    OutQuad = "OutQuad",
    OutQuart = "OutQuart",
    OutQuint = "OutQuint",
    OutSine = "OutSine",
    Spring = "Spring",
}

export enum EnchantmentSlot {
    ArmorFeet = "ArmorFeet",
    ArmorHead = "ArmorHead",
    ArmorLegs = "ArmorLegs",
    ArmorTorso = "ArmorTorso",
    Axe = "Axe",
    Bow = "Bow",
    CarrotStick = "CarrotStick",
    CosmeticHead = "CosmeticHead",
    Crossbow = "Crossbow",
    Elytra = "Elytra",
    FishingRod = "FishingRod",
    Flintsteel = "Flintsteel",
    Hoe = "Hoe",
    Pickaxe = "Pickaxe",
    Shears = "Shears",
    Shield = "Shield",
    Shovel = "Shovel",
    Spear = "Spear",
    Sword = "Sword",
}

export enum EntityComponentTypes {
    AddRider = "minecraft:addrider",
    Ageable = "minecraft:ageable",
    Breathable = "minecraft:breathable",
    CanClimb = "minecraft:can_climb",
    CanFly = "minecraft:can_fly",
    CanPowerJump = "minecraft:can_power_jump",
    Color = "minecraft:color",
    Color2 = "minecraft:color2",
    CursorInventory = "minecraft:cursor_inventory",
    Equippable = "minecraft:equippable",
    FireImmune = "minecraft:fire_immune",
    FloatsInLiquid = "minecraft:floats_in_liquid",
    FlyingSpeed = "minecraft:flying_speed",
    FrictionModifier = "minecraft:friction_modifier",
    Healable = "minecraft:healable",
    Health = "minecraft:health",
    Inventory = "minecraft:inventory",
    IsBaby = "minecraft:is_baby",
    IsCharged = "minecraft:is_charged",
    IsChested = "minecraft:is_chested",
    IsDyeable = "minecraft:is_dyeable",
    IsHiddenWhenInvisible = "minecraft:is_hidden_when_invisible",
    IsIgnited = "minecraft:is_ignited",
    IsIllagerCaptain = "minecraft:is_illager_captain",
    IsSaddled = "minecraft:is_saddled",
    IsShaking = "minecraft:is_shaking",
    IsSheared = "minecraft:is_sheared",
    IsStackable = "minecraft:is_stackable",
    IsStunned = "minecraft:is_stunned",
    IsTamed = "minecraft:is_tamed",
    Item = "minecraft:item",
    LavaMovement = "minecraft:lava_movement",
    Leashable = "minecraft:leashable",
    MarkVariant = "minecraft:mark_variant",
    Movement = "minecraft:movement",
    MovementAmphibious = "minecraft:movement.amphibious",
    MovementBasic = "minecraft:movement.basic",
    MovementFly = "minecraft:movement.fly",
    MovementGeneric = "minecraft:movement.generic",
    MovementGlide = "minecraft:movement.glide",
    MovementHover = "minecraft:movement.hover",
    MovementJump = "minecraft:movement.jump",
    MovementSkip = "minecraft:movement.skip",
    MovementSway = "minecraft:movement.sway",
    NavigationClimb = "minecraft:navigation.climb",
    NavigationFloat = "minecraft:navigation.float",
    NavigationFly = "minecraft:navigation.fly",
    NavigationGeneric = "minecraft:navigation.generic",
    NavigationHover = "minecraft:navigation.hover",
    NavigationWalk = "minecraft:navigation.walk",
    Npc = "minecraft:npc",
    OnFire = "minecraft:onfire",
    Projectile = "minecraft:projectile",
    PushThrough = "minecraft:push_through",
    Rideable = "minecraft:rideable",
    Riding = "minecraft:riding",
    Scale = "minecraft:scale",
    SkinId = "minecraft:skin_id",
    Strength = "minecraft:strength",
    Tameable = "minecraft:tameable",
    TameMount = "minecraft:tamemount",
    TypeFamily = "minecraft:type_family",
    UnderwaterMovement = "minecraft:underwater_movement",
    Variant = "minecraft:variant",
    WantsJockey = "minecraft:wants_jockey",
}

export enum EntityDamageCause {
    anvil = "anvil",
    blockExplosion = "blockExplosion",
    campfire = "campfire",
    charging = "charging",
    contact = "contact",
    drowning = "drowning",
    entityAttack = "entityAttack",
    entityExplosion = "entityExplosion",
    fall = "fall",
    fallingBlock = "fallingBlock",
    fire = "fire",
    fireTick = "fireTick",
    fireworks = "fireworks",
    flyIntoWall = "flyIntoWall",
    freezing = "freezing",
    lava = "lava",
    lightning = "lightning",
    maceSmash = "maceSmash",
    magic = "magic",
    magma = "magma",
    none = "none",
    override = "override",
    piston = "piston",
    projectile = "projectile",
    ramAttack = "ramAttack",
    selfDestruct = "selfDestruct",
    sonicBoom = "sonicBoom",
    soulCampfire = "soulCampfire",
    stalactite = "stalactite",
    stalagmite = "stalagmite",
    starve = "starve",
    suffocation = "suffocation",
    temperature = "temperature",
    thorns = "thorns",
    void = "void",
    wither = "wither",
}

export enum EntityInitializationCause {
    Born = "Born",
    Event = "Event",
    Loaded = "Loaded",
    Spawned = "Spawned",
    Transformed = "Transformed",
}

export enum EntitySpawnCategory {
    Ambient = "Ambient",
    Axolotls = "Axolotls",
    Creature = "Creature",
    Misc = "Misc",
    Monster = "Monster",
    UndergroundWaterCreature = "UndergroundWaterCreature",
    WaterAmbient = "WaterAmbient",
    WaterCreature = "WaterCreature",
}

export enum EntitySpawnReason {
    Breeding = "Breeding",
    Bucket = "Bucket",
    ChunkGeneration = "ChunkGeneration",
    Command = "Command",
    Conversion = "Conversion",
    DimensionTravel = "DimensionTravel",
    Dispenser = "Dispenser",
    Event = "Event",
    Jockey = "Jockey",
    Load = "Load",
    MobSummoned = "MobSummoned",
    Natural = "Natural",
    Patrol = "Patrol",
    Reinforcement = "Reinforcement",
    SpawnEgg = "SpawnEgg",
    Spawner = "Spawner",
    Structure = "Structure",
    TrialSpawner = "TrialSpawner",
    Triggered = "Triggered",
}

export enum EquipmentSlot {
    Body = "Body",
    Chest = "Chest",
    Feet = "Feet",
    Head = "Head",
    Legs = "Legs",
    Mainhand = "Mainhand",
    Offhand = "Offhand",
}

export enum FluidType {
    Lava = "Lava",
    Potion = "Potion",
    PowderSnow = "PowderSnow",
    Water = "Water",
}

export enum GameMode {
    adventure = "adventure",
    creative = "creative",
    spectator = "spectator",
    survival = "survival",
}

export enum GameRule {
    CommandBlockOutput = "commandBlockOutput",
    CommandBlocksEnabled = "commandBlocksEnabled",
    DoDayLightCycle = "doDayLightCycle",
    DoEntityDrops = "doEntityDrops",
    DoFireTick = "doFireTick",
    DoImmediateRespawn = "doImmediateRespawn",
    DoInsomnia = "doInsomnia",
    DoLimitedCrafting = "doLimitedCrafting",
    DoMobLoot = "doMobLoot",
    DoMobSpawning = "doMobSpawning",
    DoTileDrops = "doTileDrops",
    DoWeatherCycle = "doWeatherCycle",
    DrowningDamage = "drowningDamage",
    FallDamage = "fallDamage",
    FireDamage = "fireDamage",
    FreezeDamage = "freezeDamage",
    FunctionCommandLimit = "functionCommandLimit",
    KeepInventory = "keepInventory",
    LocatorBar = "locatorBar",
    MaxCommandChainLength = "maxCommandChainLength",
    MobGriefing = "mobGriefing",
    NaturalRegeneration = "naturalRegeneration",
    PlayersSleepingPercentage = "playersSleepingPercentage",
    ProjectilesCanBreakBlocks = "projectilesCanBreakBlocks",
    Pvp = "pvp",
    RandomTickSpeed = "randomTickSpeed",
    RecipesUnlock = "recipesUnlock",
    RespawnBlocksExplode = "respawnBlocksExplode",
    SendCommandFeedback = "sendCommandFeedback",
    ShowBorderEffect = "showBorderEffect",
    ShowCoordinates = "showCoordinates",
    ShowDaysPlayed = "showDaysPlayed",
    ShowDeathMessages = "showDeathMessages",
    ShowRecipeMessages = "showRecipeMessages",
    ShowTags = "showTags",
    SpawnRadius = "spawnRadius",
    TntExplodes = "tntExplodes",
    TntExplosionDropDecay = "tntExplosionDropDecay",
}

export enum GraphicsMode {
    Deferred = "Deferred",
    Fancy = "Fancy",
    RayTraced = "RayTraced",
    Simple = "Simple",
}

export enum HudElement {
    PaperDoll = 0,
    Armor = 1,
    ToolTips = 2,
    TouchControls = 3,
    Crosshair = 4,
    Hotbar = 5,
    Health = 6,
    ProgressBar = 7,
    Hunger = 8,
    AirBubbles = 9,
    HorseHealth = 10,
    StatusEffects = 11,
    ItemText = 12,
}

export enum HudVisibility {
    Hide = 0,
    Reset = 1,
}

export enum InputButton {
    Jump = "Jump",
    Sneak = "Sneak",
}

export enum InputMode {
    Gamepad = "Gamepad",
    KeyboardAndMouse = "KeyboardAndMouse",
    MotionController = "MotionController",
    Touch = "Touch",
}

export enum InputPermissionCategory {
    Camera = 1,
    Movement = 2,
    LateralMovement = 4,
    Sneak = 5,
    Jump = 6,
    Mount = 7,
    Dismount = 8,
    MoveForward = 9,
    MoveBackward = 10,
    MoveLeft = 11,
    MoveRight = 12,
}

export enum ItemComponentTypes {
    Compostable = "minecraft:compostable",
    Cooldown = "minecraft:cooldown",
    Durability = "minecraft:durability",
    Dyeable = "minecraft:dyeable",
    Enchantable = "minecraft:enchantable",
    Food = "minecraft:food",
    Potion = "minecraft:potion",
}

export enum ItemLockMode {
    inventory = "inventory",
    none = "none",
    slot = "slot",
}

export enum LiquidType {
    Water = "Water",
}

export enum MemoryTier {
    SuperLow = 0,
    Low = 1,
    Mid = 2,
    High = 3,
    SuperHigh = 4,
}

export enum MoonPhase {
    FullMoon = 0,
    WaningGibbous = 1,
    FirstQuarter = 2,
    WaningCrescent = 3,
    NewMoon = 4,
    WaxingCrescent = 5,
    LastQuarter = 6,
    WaxingGibbous = 7,
}

export enum NamespaceNameErrorReason {
    DisallowedNamespace = "DisallowedNamespace",
    NoNamespace = "NoNamespace",
}

export enum ObjectiveSortOrder {
    Ascending = 0,
    Descending = 1,
}

export enum PaletteColor {
    White = 0,
    Orange = 1,
    Magenta = 2,
    LightBlue = 3,
    Yellow = 4,
    Lime = 5,
    Pink = 6,
    Gray = 7,
    Silver = 8,
    Cyan = 9,
    Purple = 10,
    Blue = 11,
    Brown = 12,
    Green = 13,
    Red = 14,
    Black = 15,
}

export enum PlatformType {
    Console = "Console",
    Desktop = "Desktop",
    Mobile = "Mobile",
}

export enum ScoreboardIdentityType {
    Entity = "Entity",
    FakePlayer = "FakePlayer",
    Player = "Player",
}

export enum ScriptEventSource {
    Block = "Block",
    Entity = "Entity",
    NPCDialogue = "NPCDialogue",
    Server = "Server",
}

export enum SignSide {
    Back = "Back",
    Front = "Front",
}

export enum StructureAnimationMode {
    Blocks = "Blocks",
    Layers = "Layers",
    None = "None",
}

export enum StructureMirrorAxis {
    None = "None",
    X = "X",
    XZ = "XZ",
    Z = "Z",
}

export enum StructureRotation {
    None = "None",
    Rotate180 = "Rotate180",
    Rotate270 = "Rotate270",
    Rotate90 = "Rotate90",
}

export enum StructureSaveMode {
    Memory = "Memory",
    World = "World",
}

export enum TimeOfDay {
    Day = 1000,
    Noon = 6000,
    Sunset = 12000,
    Night = 13000,
    Midnight = 18000,
    Sunrise = 23000,
}

export enum TintMethod {
    BirchFoliage = "BirchFoliage",
    DefaultFoliage = "DefaultFoliage",
    DryFoliage = "DryFoliage",
    EvergreenFoliage = "EvergreenFoliage",
    Grass = "Grass",
    None = "None",
    Water = "Water",
}

export enum WatchdogTerminateReason {
    Hang = "Hang",
    StackOverflow = "StackOverflow",
}

export enum WeatherType {
    Clear = "Clear",
    Rain = "Rain",
    Thunder = "Thunder",
}

export type BlockComponentReturnType<T extends string> = T extends keyof BlockComponentTypeMap
    ? BlockComponentTypeMap[T]
    : BlockComponent;

export type BlockComponentTypeMap = {
    destruction_particles: BlockDestructionParticlesComponent;
    fluid_container: BlockFluidContainerComponent;
    inventory: BlockInventoryComponent;
    map_color: BlockMapColorComponent;
    piston: BlockPistonComponent;
    record_player: BlockRecordPlayerComponent;
    sign: BlockSignComponent;
    "minecraft:destruction_particles": BlockDestructionParticlesComponent;
    "minecraft:fluid_container": BlockFluidContainerComponent;
    "minecraft:inventory": BlockInventoryComponent;
    "minecraft:map_color": BlockMapColorComponent;
    "minecraft:piston": BlockPistonComponent;
    "minecraft:record_player": BlockRecordPlayerComponent;
    "minecraft:sign": BlockSignComponent;
}

export type EntityComponentReturnType<T extends string> = T extends keyof EntityComponentTypeMap
    ? EntityComponentTypeMap[T]
    : EntityComponent;

export type EntityComponentTypeMap = {
    addrider: EntityAddRiderComponent;
    ageable: EntityAgeableComponent;
    breathable: EntityBreathableComponent;
    can_climb: EntityCanClimbComponent;
    can_fly: EntityCanFlyComponent;
    can_power_jump: EntityCanPowerJumpComponent;
    color: EntityColorComponent;
    color2: EntityColor2Component;
    cursor_inventory: PlayerCursorInventoryComponent;
    equippable: EntityEquippableComponent;
    fire_immune: EntityFireImmuneComponent;
    floats_in_liquid: EntityFloatsInLiquidComponent;
    flying_speed: EntityFlyingSpeedComponent;
    friction_modifier: EntityFrictionModifierComponent;
    healable: EntityHealableComponent;
    health: EntityHealthComponent;
    inventory: EntityInventoryComponent;
    is_baby: EntityIsBabyComponent;
    is_charged: EntityIsChargedComponent;
    is_chested: EntityIsChestedComponent;
    is_dyeable: EntityIsDyeableComponent;
    is_hidden_when_invisible: EntityIsHiddenWhenInvisibleComponent;
    is_ignited: EntityIsIgnitedComponent;
    is_illager_captain: EntityIsIllagerCaptainComponent;
    is_saddled: EntityIsSaddledComponent;
    is_shaking: EntityIsShakingComponent;
    is_sheared: EntityIsShearedComponent;
    is_stackable: EntityIsStackableComponent;
    is_stunned: EntityIsStunnedComponent;
    is_tamed: EntityIsTamedComponent;
    item: EntityItemComponent;
    lava_movement: EntityLavaMovementComponent;
    leashable: EntityLeashableComponent;
    mark_variant: EntityMarkVariantComponent;
    movement: EntityMovementComponent;
    "movement.amphibious": EntityMovementAmphibiousComponent;
    "movement.basic": EntityMovementBasicComponent;
    "movement.fly": EntityMovementFlyComponent;
    "movement.generic": EntityMovementGenericComponent;
    "movement.glide": EntityMovementGlideComponent;
    "movement.hover": EntityMovementHoverComponent;
    "movement.jump": EntityMovementJumpComponent;
    "movement.skip": EntityMovementSkipComponent;
    "movement.sway": EntityMovementSwayComponent;
    "navigation.climb": EntityNavigationClimbComponent;
    "navigation.float": EntityNavigationFloatComponent;
    "navigation.fly": EntityNavigationFlyComponent;
    "navigation.generic": EntityNavigationGenericComponent;
    "navigation.hover": EntityNavigationHoverComponent;
    "navigation.walk": EntityNavigationWalkComponent;
    npc: EntityNpcComponent;
    onfire: EntityOnFireComponent;
    projectile: EntityProjectileComponent;
    push_through: EntityPushThroughComponent;
    rideable: EntityRideableComponent;
    riding: EntityRidingComponent;
    scale: EntityScaleComponent;
    skin_id: EntitySkinIdComponent;
    strength: EntityStrengthComponent;
    tameable: EntityTameableComponent;
    tamemount: EntityTameMountComponent;
    type_family: EntityTypeFamilyComponent;
    underwater_movement: EntityUnderwaterMovementComponent;
    variant: EntityVariantComponent;
    wants_jockey: EntityWantsJockeyComponent;
    "minecraft:addrider": EntityAddRiderComponent;
    "minecraft:ageable": EntityAgeableComponent;
    "minecraft:breathable": EntityBreathableComponent;
    "minecraft:can_climb": EntityCanClimbComponent;
    "minecraft:can_fly": EntityCanFlyComponent;
    "minecraft:can_power_jump": EntityCanPowerJumpComponent;
    "minecraft:color": EntityColorComponent;
    "minecraft:color2": EntityColor2Component;
    "minecraft:cursor_inventory": PlayerCursorInventoryComponent;
    "minecraft:equippable": EntityEquippableComponent;
    "minecraft:fire_immune": EntityFireImmuneComponent;
    "minecraft:floats_in_liquid": EntityFloatsInLiquidComponent;
    "minecraft:flying_speed": EntityFlyingSpeedComponent;
    "minecraft:friction_modifier": EntityFrictionModifierComponent;
    "minecraft:healable": EntityHealableComponent;
    "minecraft:health": EntityHealthComponent;
    "minecraft:inventory": EntityInventoryComponent;
    "minecraft:is_baby": EntityIsBabyComponent;
    "minecraft:is_charged": EntityIsChargedComponent;
    "minecraft:is_chested": EntityIsChestedComponent;
    "minecraft:is_dyeable": EntityIsDyeableComponent;
    "minecraft:is_hidden_when_invisible": EntityIsHiddenWhenInvisibleComponent;
    "minecraft:is_ignited": EntityIsIgnitedComponent;
    "minecraft:is_illager_captain": EntityIsIllagerCaptainComponent;
    "minecraft:is_saddled": EntityIsSaddledComponent;
    "minecraft:is_shaking": EntityIsShakingComponent;
    "minecraft:is_sheared": EntityIsShearedComponent;
    "minecraft:is_stackable": EntityIsStackableComponent;
    "minecraft:is_stunned": EntityIsStunnedComponent;
    "minecraft:is_tamed": EntityIsTamedComponent;
    "minecraft:item": EntityItemComponent;
    "minecraft:lava_movement": EntityLavaMovementComponent;
    "minecraft:leashable": EntityLeashableComponent;
    "minecraft:mark_variant": EntityMarkVariantComponent;
    "minecraft:movement": EntityMovementComponent;
    "minecraft:movement.amphibious": EntityMovementAmphibiousComponent;
    "minecraft:movement.basic": EntityMovementBasicComponent;
    "minecraft:movement.fly": EntityMovementFlyComponent;
    "minecraft:movement.generic": EntityMovementGenericComponent;
    "minecraft:movement.glide": EntityMovementGlideComponent;
    "minecraft:movement.hover": EntityMovementHoverComponent;
    "minecraft:movement.jump": EntityMovementJumpComponent;
    "minecraft:movement.skip": EntityMovementSkipComponent;
    "minecraft:movement.sway": EntityMovementSwayComponent;
    "minecraft:navigation.climb": EntityNavigationClimbComponent;
    "minecraft:navigation.float": EntityNavigationFloatComponent;
    "minecraft:navigation.fly": EntityNavigationFlyComponent;
    "minecraft:navigation.generic": EntityNavigationGenericComponent;
    "minecraft:navigation.hover": EntityNavigationHoverComponent;
    "minecraft:navigation.walk": EntityNavigationWalkComponent;
    "minecraft:npc": EntityNpcComponent;
    "minecraft:onfire": EntityOnFireComponent;
    "minecraft:projectile": EntityProjectileComponent;
    "minecraft:push_through": EntityPushThroughComponent;
    "minecraft:rideable": EntityRideableComponent;
    "minecraft:riding": EntityRidingComponent;
    "minecraft:scale": EntityScaleComponent;
    "minecraft:skin_id": EntitySkinIdComponent;
    "minecraft:strength": EntityStrengthComponent;
    "minecraft:tameable": EntityTameableComponent;
    "minecraft:tamemount": EntityTameMountComponent;
    "minecraft:type_family": EntityTypeFamilyComponent;
    "minecraft:underwater_movement": EntityUnderwaterMovementComponent;
    "minecraft:variant": EntityVariantComponent;
    "minecraft:wants_jockey": EntityWantsJockeyComponent;
}

export type ItemComponentReturnType<T extends string> = T extends keyof ItemComponentTypeMap
    ? ItemComponentTypeMap[T]
    : ItemComponent;

export type ItemComponentTypeMap = {
    compostable: ItemCompostableComponent;
    cooldown: ItemCooldownComponent;
    durability: ItemDurabilityComponent;
    dyeable: ItemDyeableComponent;
    enchantable: ItemEnchantableComponent;
    food: ItemFoodComponent;
    potion: ItemPotionComponent;
    "minecraft:compostable": ItemCompostableComponent;
    "minecraft:cooldown": ItemCooldownComponent;
    "minecraft:durability": ItemDurabilityComponent;
    "minecraft:dyeable": ItemDyeableComponent;
    "minecraft:enchantable": ItemEnchantableComponent;
    "minecraft:food": ItemFoodComponent;
    "minecraft:potion": ItemPotionComponent;
}

export class AimAssistCategory {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly defaultBlockPriority: number;
    /**
     * @throws This property can throw errors.
     */
    readonly defaultEntityPriority: number;
    readonly identifier: string;
    /**
     * @throws This function can throw errors.
     */
    getBlockPriorities(): Record<string, number>;
    /**
     * @throws This function can throw errors.
     */
    getEntityPriorities(): Record<string, number>;
}

export class AimAssistCategorySettings {
    defaultBlockPriority: number;
    defaultEntityPriority: number;
    readonly identifier: string;
    constructor(identifier: string);
    getBlockPriorities(): Record<string, number>;
    getEntityPriorities(): Record<string, number>;
    setBlockPriorities(blockPriorities: Record<string, number>): void;
    setEntityPriorities(entityPriorities: Record<string, number>): void;
}

export class AimAssistPreset {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly defaultItemSettings?: string;
    /**
     * @throws This property can throw errors.
     */
    readonly handSettings?: string;
    readonly identifier: string;
    /**
     * @throws This function can throw errors.
     */
    getExcludedTargets(): string[];
    /**
     * @throws This function can throw errors.
     */
    getItemSettings(): Record<string, string>;
    /**
     * @throws This function can throw errors.
     */
    getLiquidTargetingItems(): string[];
}

export class AimAssistPresetSettings {
    defaultItemSettings?: string;
    handSettings?: string;
    readonly identifier: string;
    constructor(identifier: string);
    getExcludedTargets(): string[] | undefined;
    getItemSettings(): Record<string, string>;
    getLiquidTargetingItems(): string[] | undefined;
    setExcludedTargets(targets?: string[]): void;
    setItemSettings(itemSettings: Record<string, string>): void;
    setLiquidTargetingItems(items?: string[]): void;
}

export class AimAssistRegistry {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     */
    addCategory(category: AimAssistCategorySettings): AimAssistCategory;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     */
    addPreset(preset: AimAssistPresetSettings): AimAssistPreset;
    getCategories(): AimAssistCategory[];
    getCategory(categoryId: string): AimAssistCategory | undefined;
    getPreset(presetId: string): AimAssistPreset | undefined;
    getPresets(): AimAssistPreset[];
}

export class BiomeType {
    private constructor();
    readonly id: string;
}

export class BiomeTypes {
    private constructor();
    static get(typeName: string): BiomeType | undefined;
    static getAll(): BiomeType[];
}

export class Block {
    private constructor();
    readonly dimension: Dimension;
    /**
     * @throws This property can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isAir: boolean;
    /**
     * @throws This property can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isLiquid: boolean;
    /**
     * @throws This property can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isSolid: boolean;
    readonly isValid: boolean;
    /**
     * @throws This property can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isWaterlogged: boolean;
    /**
     * @throws This property can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly localizationKey: string;
    /**
     * @throws This property can throw errors.
     */
    readonly location: Vector3;
    /**
     * @throws This property can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly permutation: BlockPermutation;
    /**
     * @throws This property can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly "type": BlockType;
    /**
     * @throws This property can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly typeId: string;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    above(steps?: number): Block | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    below(steps?: number): Block | undefined;
    bottomCenter(): Vector3;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    canBeDestroyedByLiquidSpread(liquidType: LiquidType): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    canContainLiquid(liquidType: LiquidType): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    canPlace(blockToPlace: BlockPermutation | BlockType | string, faceToPlaceOn?: Direction): boolean;
    center(): Vector3;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    east(steps?: number): Block | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getComponent<T extends string>(componentId: T): BlockComponentReturnType<T> | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getItemStack(amount?: number, withData?: boolean): ItemStack | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getMapColor(): RGBA;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getRedstonePower(): number | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getTags(): string[];
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    hasTag(tag: string): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    isLiquidBlocking(liquidType: LiquidType): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    liquidCanFlowFromDirection(liquidType: LiquidType, flowDirection: Direction): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    liquidSpreadCausesSpawn(liquidType: LiquidType): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    matches(blockName: string, states?: Record<string, boolean | number | string>): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    north(steps?: number): Block | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    offset(offset: Vector3): Block | undefined;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setPermutation(permutation: BlockPermutation): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setType(blockType: BlockType | string): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setWaterlogged(isWaterlogged: boolean): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    south(steps?: number): Block | undefined;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    trySetPermutation(permutation: BlockPermutation): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    west(steps?: number): Block | undefined;
}

export class BlockBoundingBoxUtils {
    private constructor();
    static createValid(min: Vector3, max: Vector3): BlockBoundingBox;
    static dilate(box: BlockBoundingBox, size: Vector3): BlockBoundingBox;
    static equals(box: BlockBoundingBox, other: BlockBoundingBox): boolean;
    static expand(box: BlockBoundingBox, other: BlockBoundingBox): BlockBoundingBox;
    static getCenter(box: BlockBoundingBox): Vector3;
    static getIntersection(box: BlockBoundingBox, other: BlockBoundingBox): BlockBoundingBox | undefined;
    static getSpan(box: BlockBoundingBox): Vector3;
    static intersects(box: BlockBoundingBox, other: BlockBoundingBox): boolean;
    static isInside(box: BlockBoundingBox, pos: Vector3): boolean;
    static isValid(box: BlockBoundingBox): boolean;
    static translate(box: BlockBoundingBox, delta: Vector3): BlockBoundingBox;
}

// @ts-ignore
export class BlockComponent extends Component {
    private constructor();
    readonly block: Block;
}

// @ts-ignore
export class BlockComponentEntityFallOnEvent extends BlockEvent {
    private constructor();
    readonly entity?: Entity;
    readonly fallDistance: number;
}

// @ts-ignore
export class BlockComponentOnPlaceEvent extends BlockEvent {
    private constructor();
    readonly previousBlock: BlockPermutation;
}

// @ts-ignore
export class BlockComponentPlayerDestroyEvent extends BlockEvent {
    private constructor();
    readonly destroyedBlockPermutation: BlockPermutation;
    readonly player?: Player;
}

// @ts-ignore
export class BlockComponentPlayerInteractEvent extends BlockEvent {
    private constructor();
    readonly face: Direction;
    readonly faceLocation?: Vector3;
    readonly player?: Player;
}

// @ts-ignore
export class BlockComponentPlayerPlaceBeforeEvent extends BlockEvent {
    private constructor();
    cancel: boolean;
    readonly face: Direction;
    permutationToPlace: BlockPermutation;
    readonly player?: Player;
}

// @ts-ignore
export class BlockComponentRandomTickEvent extends BlockEvent {
    private constructor();
}

export class BlockComponentRegistry {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * This function can be called in early-execution mode.
     *
     * {@link BlockCustomComponentAlreadyRegisteredError}
     *
     * {@link BlockCustomComponentReloadNewComponentError}
     *
     * {@link BlockCustomComponentReloadNewEventError}
     *
     * {@link BlockCustomComponentReloadVersionError}
     *
     * {@link CustomComponentInvalidRegistryError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerCustomComponent(name: string, customComponent: BlockCustomComponent): void;
}

// @ts-ignore
export class BlockComponentStepOffEvent extends BlockEvent {
    private constructor();
    readonly entity?: Entity;
}

// @ts-ignore
export class BlockComponentStepOnEvent extends BlockEvent {
    private constructor();
    readonly entity?: Entity;
}

// @ts-ignore
export class BlockComponentTickEvent extends BlockEvent {
    private constructor();
}

// @ts-ignore
export class BlockCustomComponentInstance extends BlockComponent {
    private constructor();
}

// @ts-ignore
export class BlockDestructionParticlesComponent extends BlockComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly texture: string;
    /**
     * @throws This property can throw errors.
     */
    readonly tintMethod: TintMethod;
}

export class BlockEvent {
    private constructor();
    readonly block: Block;
    readonly dimension: Dimension;
}

// @ts-ignore
export class BlockExplodeAfterEvent extends BlockEvent {
    private constructor();
    readonly explodedBlockPermutation: BlockPermutation;
    readonly source?: Entity;
}

export class BlockExplodeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: BlockExplodeAfterEvent) => void): (arg0: BlockExplodeAfterEvent) => void;
    unsubscribe(callback: (arg0: BlockExplodeAfterEvent) => void): void;
}

// @ts-ignore
export class BlockFluidContainerComponent extends BlockComponent {
    private constructor();
    fillLevel: number;
    fluidColor: RGBA;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    addDye(dye: ItemType): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    getFluidType(): FluidType;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setFluidType(fluidType: FluidType): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setPotion(itemStack: ItemStack): void;
}

// @ts-ignore
export class BlockInventoryComponent extends BlockComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly container?: Container;
}

export class BlockLocationIterator implements Iterable<Vector3> {
    private constructor();
    [Symbol.iterator](): Iterator<Vector3>;
    next(): IteratorResult<Vector3>;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    isValid(): boolean;
}

// @ts-ignore
export class BlockMapColorComponent extends BlockComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly color: RGBA;
    readonly tintedColor: RGBA;
    /**
     * @throws This property can throw errors.
     */
    readonly tintMethod: TintMethod;
}

export class BlockPermutation {
    private constructor();
    readonly "type": BlockType;
    /**
     * @throws This function can throw errors.
     */
    canBeDestroyedByLiquidSpread(liquidType: LiquidType): boolean;
    /**
     * @throws This function can throw errors.
     */
    canContainLiquid(liquidType: LiquidType): boolean;
    getAllStates(): Record<string, boolean | number | string>;
    getItemStack(amount?: number): ItemStack | undefined;
    getState(stateName: string): boolean | number | string | undefined;
    getTags(): string[];
    hasTag(tag: string): boolean;
    /**
     * @throws This function can throw errors.
     */
    isLiquidBlocking(liquidType: LiquidType): boolean;
    /**
     * @throws This function can throw errors.
     */
    liquidSpreadCausesSpawn(liquidType: LiquidType): boolean;
    matches(blockName: string, states?: Record<string, boolean | number | string>): boolean;
    /**
     * @throws This function can throw errors.
     */
    withState(name: string, value: boolean | number | string): BlockPermutation;
    /**
     * @throws This function can throw errors.
     */
    static resolve(blockName: string, states?: Record<string, boolean | number | string>): BlockPermutation;
}

// @ts-ignore
export class BlockPistonComponent extends BlockComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly isMoving: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly state: BlockPistonState;
    /**
     * @throws This function can throw errors.
     */
    getAttachedBlocks(): Block[];
    /**
     * @throws This function can throw errors.
     */
    getAttachedBlocksLocations(): Vector3[];
}

// @ts-ignore
export class BlockRecordPlayerComponent extends BlockComponent {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    ejectRecord(): void;
    /**
     * @throws This function can throw errors.
     */
    getRecord(): ItemStack | undefined;
    /**
     * @throws This function can throw errors.
     */
    isPlaying(): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    pauseRecord(): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    playRecord(): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setRecord(recordItemType?: ItemType | string, startPlaying?: boolean): void;
}

// @ts-ignore
export class BlockSignComponent extends BlockComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly isWaxed: boolean;
    /**
     * @throws This function can throw errors.
     */
    getRawText(side?: SignSide): RawText | undefined;
    /**
     * @throws This function can throw errors.
     */
    getText(side?: SignSide): string | undefined;
    /**
     * @throws This function can throw errors.
     */
    getTextDyeColor(side?: SignSide): DyeColor | undefined;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setText(message: RawMessage | RawText | string, side?: SignSide): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setTextDyeColor(color?: DyeColor, side?: SignSide): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setWaxed(waxed: boolean): void;
}

export class BlockStates {
    private constructor();
    static get(stateName: string): BlockStateType | undefined;
    static getAll(): BlockStateType[];
}

export class BlockStateType {
    private constructor();
    readonly id: string;
    readonly validValues: (boolean | number | string)[];
}

export class BlockType {
    private constructor();
    readonly id: string;
}

export class BlockTypes {
    private constructor();
    static get(typeName: string): BlockType | undefined;
    static getAll(): BlockType[];
}

// @ts-ignore
export class BlockVolume extends BlockVolumeBase {
    "from": Vector3;
    to: Vector3;
    constructor(from: Vector3, to: Vector3);
    doesLocationTouchFaces(pos: Vector3): boolean;
    doesVolumeTouchFaces(other: BlockVolume): boolean;
    intersects(other: BlockVolume): BlockVolumeIntersection;
}

export class BlockVolumeBase {
    private constructor();
    getBlockLocationIterator(): BlockLocationIterator;
    /**
     * @throws This function can throw errors.
     */
    getBoundingBox(): BlockBoundingBox;
    getCapacity(): number;
    /**
     * @throws This function can throw errors.
     */
    getMax(): Vector3;
    /**
     * @throws This function can throw errors.
     */
    getMin(): Vector3;
    getSpan(): Vector3;
    isInside(location: Vector3): boolean;
    translate(delta: Vector3): void;
}

// @ts-ignore
export class ButtonPushAfterEvent extends BlockEvent {
    private constructor();
    readonly source: Entity;
}

export class ButtonPushAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: ButtonPushAfterEvent) => void): (arg0: ButtonPushAfterEvent) => void;
    unsubscribe(callback: (arg0: ButtonPushAfterEvent) => void): void;
}

export class Camera {
    private constructor();
    readonly isValid: boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    clear(): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    fade(fadeCameraOptions?: CameraFadeOptions): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setCamera(
        cameraPreset: string,
        setOptions?: 
            | CameraDefaultOptions
            | CameraFixedBoomOptions
            | CameraSetFacingOptions
            | CameraSetLocationOptions
            | CameraSetPosOptions
            | CameraSetRotOptions
            | CameraTargetOptions,
    ): void;
}

export class ChatSendAfterEvent {
    private constructor();
    readonly message: string;
    readonly sender: Player;
    readonly targets?: Player[];
}

export class ChatSendAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: ChatSendAfterEvent) => void): (arg0: ChatSendAfterEvent) => void;
    unsubscribe(callback: (arg0: ChatSendAfterEvent) => void): void;
}

export class ChatSendBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly message: string;
    readonly sender: Player;
    readonly targets?: Player[];
}

export class ChatSendBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg0: ChatSendBeforeEvent) => void): (arg0: ChatSendBeforeEvent) => void;
    unsubscribe(callback: (arg0: ChatSendBeforeEvent) => void): void;
}

// @ts-ignore
export class ClientSystemInfo extends SystemInfo {
    private constructor();
    readonly maxRenderDistance: number;
    readonly platformType: PlatformType;
}

export class CommandResult {
    private constructor();
    readonly successCount: number;
}

export class Component {
    private constructor();
    readonly isValid: boolean;
    readonly typeId: string;
}

export class CompoundBlockVolume {
    readonly capacity: number;
    readonly items: CompoundBlockVolumeItem[];
    readonly itemsAbsolute: CompoundBlockVolumeItem[];
    readonly volumeCount: number;
    constructor(origin?: Vector3);
    clear(): void;
    getBlockLocationIterator(): BlockLocationIterator;
    getBoundingBox(): BlockBoundingBox;
    getMax(): Vector3;
    getMin(): Vector3;
    getOrigin(): Vector3;
    isEmpty(): boolean;
    isInside(worldLocation: Vector3): boolean;
    peekLastVolume(forceRelativity?: CompoundBlockVolumePositionRelativity): CompoundBlockVolumeItem | undefined;
    popVolume(): boolean;
    pushVolume(item: CompoundBlockVolumeItem): void;
    replaceOrAddLastVolume(item: CompoundBlockVolumeItem): boolean;
    setOrigin(position: Vector3, preserveExistingVolumes?: boolean): void;
    translateOrigin(delta: Vector3, preserveExistingVolumes?: boolean): void;
}

export class Container {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly emptySlotsCount: number;
    readonly isValid: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly size: number;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    addItem(itemStack: ItemStack): ItemStack | undefined;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    clearAll(): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    contains(itemStack: ItemStack): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    find(itemStack: ItemStack): number;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    firstEmptySlot(): number;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    firstItem(): number;
    /**
     * @throws This function can throw errors.
     */
    getItem(slot: number): ItemStack | undefined;
    /**
     * @throws This function can throw errors.
     */
    getSlot(slot: number): ContainerSlot;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    moveItem(fromSlot: number, toSlot: number, toContainer: Container): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    reverseFind(itemStack: ItemStack): number;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setItem(slot: number, itemStack?: ItemStack): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    transferItem(fromSlot: number, toContainer: Container): ItemStack | undefined;
}

export class ContainerSlot {
    private constructor();
    amount: number;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    readonly isStackable: boolean;
    readonly isValid: boolean;
    keepOnDeath: boolean;
    lockMode: ItemLockMode;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    readonly maxAmount: number;
    nameTag?: string;
    /**
     * @throws This property can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidContainerSlotError}
     */
    readonly "type": ItemType;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    readonly typeId: string;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    clearDynamicProperties(): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getCanDestroy(): string[];
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getCanPlaceOn(): string[];
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getDynamicPropertyIds(): string[];
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getItem(): ItemStack | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getLore(): string[];
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getTags(): string[];
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    hasItem(): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    hasTag(tag: string): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3>): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link InvalidContainerSlotError}
     */
    setItem(itemStack?: ItemStack): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     */
    setLore(loreList?: string[]): void;
}

export class CustomCommandOrigin {
    private constructor();
    readonly initiator?: Entity;
    readonly sourceBlock?: Block;
    readonly sourceEntity?: Entity;
    readonly sourceType: CustomCommandSource;
}

export class CustomCommandRegistry {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     *
     * {@link CustomCommandError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerCommand(
        customCommand: CustomCommand,
        callback: (origin: CustomCommandOrigin, ...args: any[]) => CustomCommandResult | undefined,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     *
     * {@link CustomCommandError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerEnum(name: string, values: string[]): void;
}

export class CustomComponentParameters {
    private constructor();
    readonly params: unknown;
}

export class DataDrivenEntityTriggerAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly eventId: string;
    getModifiers(): DefinitionModifier[];
}

export class DataDrivenEntityTriggerAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg0: DataDrivenEntityTriggerAfterEvent) => void;
    unsubscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void): void;
}

export class Dimension {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly heightRange: minecraftcommon.NumberRange;
    readonly id: string;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link UnloadedChunksError}
     */
    containsBlock(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link UnloadedChunksError}
     */
    fillBlocks(
        volume: BlockVolumeBase | CompoundBlockVolume,
        block: BlockPermutation | BlockType | string,
        options?: BlockFillOptions,
    ): ListBlockVolume;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     */
    findClosestBiome(pos: Vector3, biomeToFind: BiomeType | string, options?: BiomeSearchOptions): Vector3 | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getBlock(location: Vector3): Block | undefined;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    getBlockAbove(location: Vector3, options?: BlockRaycastOptions): Block | undefined;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    getBlockBelow(location: Vector3, options?: BlockRaycastOptions): Block | undefined;
    /**
     * @throws This function can throw errors.
     */
    getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link UnloadedChunksError}
     */
    getBlocks(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): ListBlockVolume;
    /**
     * @throws This function can throw errors.
     */
    getEntities(options?: EntityQueryOptions): Entity[];
    getEntitiesAtBlockLocation(location: Vector3): Entity[];
    /**
     * @throws This function can throw errors.
     */
    getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[];
    /**
     * @throws This function can throw errors.
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    getTopmostBlock(locationXZ: VectorXZ, minHeight?: number): Block | undefined;
    getWeather(): WeatherType;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    placeFeature(featureName: string, location: Vector3, shouldThrow?: boolean): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    placeFeatureRule(featureRuleName: string, location: Vector3): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link CommandError}
     */
    runCommand(commandString: string): CommandResult;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setBlockPermutation(location: Vector3, permutation: BlockPermutation): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setBlockType(location: Vector3, blockType: BlockType | string): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setWeather(weatherType: WeatherType, duration?: number): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    spawnEntity(identifier: EntityType | string, location: Vector3, options?: SpawnEntityOptions): Entity;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    spawnItem(itemStack: ItemStack, location: Vector3): Entity;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
}

export class DimensionType {
    private constructor();
    readonly typeId: string;
}

export class DimensionTypes {
    private constructor();
    static get(dimensionTypeId: string): DimensionType | undefined;
    static getAll(): DimensionType[];
}

export class Effect {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly amplifier: number;
    /**
     * @throws This property can throw errors.
     */
    readonly displayName: string;
    /**
     * @throws This property can throw errors.
     */
    readonly duration: number;
    readonly isValid: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly typeId: string;
}

export class EffectAddAfterEvent {
    private constructor();
    readonly effect: Effect;
    readonly entity: Entity;
}

export class EffectAddAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: EffectAddAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EffectAddAfterEvent) => void;
    unsubscribe(callback: (arg0: EffectAddAfterEvent) => void): void;
}

export class EffectAddBeforeEvent {
    private constructor();
    cancel: boolean;
    duration: number;
    readonly effectType: string;
    readonly entity: Entity;
}

export class EffectAddBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg0: EffectAddBeforeEvent) => void): (arg0: EffectAddBeforeEvent) => void;
    unsubscribe(callback: (arg0: EffectAddBeforeEvent) => void): void;
}

export class EffectType {
    private constructor();
    getName(): string;
}

export class EffectTypes {
    private constructor();
    static get(identifier: string): EffectType | undefined;
    static getAll(): EffectType[];
}

export class EnchantmentType {
    readonly id: string;
    readonly maxLevel: number;
    /**
 * @throws This function can throw errors.
 */
constructor(enchantmentType: string);
}

export class EnchantmentTypes {
    private constructor();
    static get(enchantmentId: string): EnchantmentType | undefined;
    static getAll(): EnchantmentType[];
}

export class Entity {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly dimension: Dimension;
    readonly id: string;
    /**
     * @throws This property can throw errors.
     */
    readonly isClimbing: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly isFalling: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly isInWater: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly isOnGround: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly isSleeping: boolean;
    isSneaking: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly isSprinting: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly isSwimming: boolean;
    readonly isValid: boolean;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidEntityError}
     */
    readonly localizationKey: string;
    /**
     * @throws This property can throw errors.
     */
    readonly location: Vector3;
    nameTag: string;
    readonly scoreboardIdentity?: ScoreboardIdentity;
    /**
     * @throws This property can throw errors.
     */
    readonly target?: Entity;
    readonly typeId: string;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): Effect | undefined;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    addTag(tag: string): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    applyImpulse(vector: Vector3): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    applyKnockback(horizontalForce: VectorXZ, verticalStrength: number): void;
    /**
     * @throws This function can throw errors.
     */
    clearDynamicProperties(): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    clearVelocity(): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    extinguishFire(useEffects?: boolean): boolean;
    /**
     * @throws This function can throw errors.
     */
    getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getComponent<T extends string>(componentId: T): EntityComponentReturnType<T> | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getComponents(): EntityComponent[];
    /**
     * @throws This function can throw errors.
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @throws This function can throw errors.
     */
    getDynamicPropertyIds(): string[];
    /**
     * @throws This function can throw errors.
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @throws This function can throw errors.
     */
    getEffect(effectType: EffectType | string): Effect | undefined;
    /**
     * @throws This function can throw errors.
     */
    getEffects(): Effect[];
    /**
     * @throws This function can throw errors.
     */
    getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[];
    /**
     * @throws This function can throw errors.
     */
    getHeadLocation(): Vector3;
    /**
     * @throws This function can throw errors.
     */
    getProperty(identifier: string): boolean | number | string | undefined;
    /**
     * @throws This function can throw errors.
     */
    getRotation(): Vector2;
    /**
     * @throws This function can throw errors.
     */
    getTags(): string[];
    /**
     * @throws This function can throw errors.
     */
    getVelocity(): Vector3;
    /**
     * @throws This function can throw errors.
     */
    getViewDirection(): Vector3;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    hasComponent(componentId: string): boolean;
    /**
     * @throws This function can throw errors.
     */
    hasTag(tag: string): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    kill(): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    lookAt(targetLocation: Vector3): void;
    /**
     * @throws This function can throw errors.
     */
    matches(options: EntityQueryOptions): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    playAnimation(animationName: string, options?: PlayAnimationOptions): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    remove(): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    removeEffect(effectType: EffectType | string): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    removeTag(tag: string): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     */
    resetProperty(identifier: string): boolean | number | string;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link CommandError}
     *
     * {@link InvalidEntityError}
     */
    runCommand(commandString: string): CommandResult;
    /**
     * @throws This function can throw errors.
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3>): void;
    /**
     * @throws This function can throw errors.
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setOnFire(seconds: number, useEffects?: boolean): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setProperty(identifier: string, value: boolean | number | string): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setRotation(rotation: Vector2): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    teleport(location: Vector3, teleportOptions?: TeleportOptions): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    triggerEvent(eventName: string): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean;
}

// @ts-ignore
export class EntityAddRiderComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly entityType: string;
    /**
     * @throws This property can throw errors.
     */
    readonly spawnEvent: string;
}

// @ts-ignore
export class EntityAgeableComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly duration: number;
    /**
     * @throws This property can throw errors.
     */
    readonly growUp: Trigger;
    /**
     * @throws This property can throw errors.
     */
    readonly transformToItem: string;
    /**
     * @throws This function can throw errors.
     */
    getDropItems(): string[];
    /**
     * @throws This function can throw errors.
     */
    getFeedItems(): EntityDefinitionFeedItem[];
}

// @ts-ignore
export class EntityAttributeComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly currentValue: number;
    /**
     * @throws This property can throw errors.
     */
    readonly defaultValue: number;
    /**
     * @throws This property can throw errors.
     */
    readonly effectiveMax: number;
    /**
     * @throws This property can throw errors.
     */
    readonly effectiveMin: number;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    resetToDefaultValue(): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    resetToMaxValue(): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    resetToMinValue(): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setCurrentValue(value: number): boolean;
}

// @ts-ignore
export class EntityBaseMovementComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly maxTurn: number;
}

// @ts-ignore
export class EntityBreathableComponent extends EntityComponent {
    private constructor();
    airSupply: number;
    /**
     * @throws This property can throw errors.
     */
    readonly breathesAir: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly breathesLava: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly breathesSolids: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly breathesWater: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly canBreathe: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly generatesBubbles: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly inhaleTime: number;
    /**
     * @throws This property can throw errors.
     */
    readonly suffocateTime: number;
    /**
     * @throws This property can throw errors.
     */
    readonly totalSupply: number;
    /**
     * @throws This function can throw errors.
     */
    getBreatheBlocks(): BlockPermutation[];
    /**
     * @throws This function can throw errors.
     */
    getNonBreatheBlocks(): BlockPermutation[];
}

// @ts-ignore
export class EntityCanClimbComponent extends EntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityCanFlyComponent extends EntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityCanPowerJumpComponent extends EntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityColor2Component extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly value: PaletteColor;
}

// @ts-ignore
export class EntityColorComponent extends EntityComponent {
    private constructor();
    value: number;
}

// @ts-ignore
export class EntityComponent extends Component {
    private constructor();
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidEntityError}
     */
    readonly entity: Entity;
}

export class EntityDefinitionFeedItem {
    private constructor();
    readonly growth: number;
    readonly item: string;
}

export class EntityDieAfterEvent {
    private constructor();
    readonly damageSource: EntityDamageSource;
    readonly deadEntity: Entity;
}

export class EntityDieAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: EntityDieAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityDieAfterEvent) => void;
    unsubscribe(callback: (arg0: EntityDieAfterEvent) => void): void;
}

// @ts-ignore
export class EntityEquippableComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This function can throw errors.
     */
    getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined;
    /**
     * @throws This function can throw errors.
     */
    getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean;
}

// @ts-ignore
export class EntityFireImmuneComponent extends EntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityFloatsInLiquidComponent extends EntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityFlyingSpeedComponent extends EntityComponent {
    private constructor();
    value: number;
}

// @ts-ignore
export class EntityFrictionModifierComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly value: number;
}

// @ts-ignore
export class EntityHealableComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly forceUse: boolean;
    /**
     * @throws This function can throw errors.
     */
    getFeedItems(): FeedItem[];
}

export class EntityHealthChangedAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly newValue: number;
    readonly oldValue: number;
}

export class EntityHealthChangedAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: EntityHealthChangedAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHealthChangedAfterEvent) => void;
    unsubscribe(callback: (arg0: EntityHealthChangedAfterEvent) => void): void;
}

// @ts-ignore
export class EntityHealthComponent extends EntityAttributeComponent {
    private constructor();
}

export class EntityHitBlockAfterEvent {
    private constructor();
    readonly blockFace: Direction;
    readonly damagingEntity: Entity;
    readonly hitBlock: Block;
    readonly hitBlockPermutation: BlockPermutation;
}

export class EntityHitBlockAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: EntityHitBlockAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHitBlockAfterEvent) => void;
    unsubscribe(callback: (arg0: EntityHitBlockAfterEvent) => void): void;
}

export class EntityHitEntityAfterEvent {
    private constructor();
    readonly damagingEntity: Entity;
    readonly hitEntity: Entity;
}

export class EntityHitEntityAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: EntityHitEntityAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHitEntityAfterEvent) => void;
    unsubscribe(callback: (arg0: EntityHitEntityAfterEvent) => void): void;
}

export class EntityHurtAfterEvent {
    private constructor();
    readonly damage: number;
    readonly damageSource: EntityDamageSource;
    readonly hurtEntity: Entity;
}

export class EntityHurtAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: EntityHurtAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHurtAfterEvent) => void;
    unsubscribe(callback: (arg0: EntityHurtAfterEvent) => void): void;
}

// @ts-ignore
export class EntityInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly additionalSlotsPerStrength: number;
    /**
     * @throws This property can throw errors.
     */
    readonly canBeSiphonedFrom: boolean;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidEntityError}
     */
    readonly container: Container;
    /**
     * @throws This property can throw errors.
     */
    readonly containerType: string;
    /**
     * @throws This property can throw errors.
     */
    readonly inventorySize: number;
    /**
     * @throws This property can throw errors.
     */
    readonly "private": boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly restrictToOwner: boolean;
}

// @ts-ignore
export class EntityIsBabyComponent extends EntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityIsChargedComponent extends EntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityIsChestedComponent extends EntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityIsDyeableComponent extends EntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityIsHiddenWhenInvisibleComponent extends EntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityIsIgnitedComponent extends EntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityIsIllagerCaptainComponent extends EntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityIsSaddledComponent extends EntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityIsShakingComponent extends EntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityIsShearedComponent extends EntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityIsStackableComponent extends EntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityIsStunnedComponent extends EntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityIsTamedComponent extends EntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityItemComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly itemStack: ItemStack;
}

export class EntityIterator implements Iterable<Entity> {
    private constructor();
    [Symbol.iterator](): Iterator<Entity>;
    next(): IteratorResult<Entity>;
}

// @ts-ignore
export class EntityLavaMovementComponent extends EntityAttributeComponent {
    private constructor();
}

// @ts-ignore
export class EntityLeashableComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly canBeStolen: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly hardDistance: number;
    /**
     * @throws This property can throw errors.
     */
    readonly isLeashed: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly leashHolder?: Entity;
    /**
     * @throws This property can throw errors.
     */
    readonly leashHolderEntityId?: string;
    /**
     * @throws This property can throw errors.
     */
    readonly maxDistance: number;
    /**
     * @throws This property can throw errors.
     */
    readonly softDistance: number;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    leashTo(leashHolder: Entity): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    unleash(): void;
}

export class EntityLoadAfterEvent {
    private constructor();
    entity: Entity;
}

export class EntityLoadAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: EntityLoadAfterEvent) => void): (arg0: EntityLoadAfterEvent) => void;
    unsubscribe(callback: (arg0: EntityLoadAfterEvent) => void): void;
}

// @ts-ignore
export class EntityMarkVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly value: number;
}

// @ts-ignore
export class EntityMovementAmphibiousComponent extends EntityBaseMovementComponent {
    private constructor();
}

// @ts-ignore
export class EntityMovementBasicComponent extends EntityBaseMovementComponent {
    private constructor();
}

// @ts-ignore
export class EntityMovementComponent extends EntityAttributeComponent {
    private constructor();
}

// @ts-ignore
export class EntityMovementFlyComponent extends EntityBaseMovementComponent {
    private constructor();
}

// @ts-ignore
export class EntityMovementGenericComponent extends EntityBaseMovementComponent {
    private constructor();
}

// @ts-ignore
export class EntityMovementGlideComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly speedWhenTurning: number;
    /**
     * @throws This property can throw errors.
     */
    readonly startSpeed: number;
}

// @ts-ignore
export class EntityMovementHoverComponent extends EntityBaseMovementComponent {
    private constructor();
}

// @ts-ignore
export class EntityMovementJumpComponent extends EntityBaseMovementComponent {
    private constructor();
}

// @ts-ignore
export class EntityMovementSkipComponent extends EntityBaseMovementComponent {
    private constructor();
}

// @ts-ignore
export class EntityMovementSwayComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly swayAmplitude: number;
    /**
     * @throws This property can throw errors.
     */
    readonly swayFrequency: number;
}

// @ts-ignore
export class EntityNavigationClimbComponent extends EntityNavigationComponent {
    private constructor();
}

// @ts-ignore
export class EntityNavigationComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly avoidDamageBlocks: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly avoidPortals: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly avoidSun: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly avoidWater: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly canBreach: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly canBreakDoors: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly canFloat: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly canJump: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly canOpenDoors: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly canOpenIronDoors: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly canPassDoors: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly canPathFromAir: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly canPathOverLava: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly canPathOverWater: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly canSink: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly canSwim: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly canWalk: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly canWalkInLava: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly isAmphibious: boolean;
}

// @ts-ignore
export class EntityNavigationFloatComponent extends EntityNavigationComponent {
    private constructor();
}

// @ts-ignore
export class EntityNavigationFlyComponent extends EntityNavigationComponent {
    private constructor();
}

// @ts-ignore
export class EntityNavigationGenericComponent extends EntityNavigationComponent {
    private constructor();
}

// @ts-ignore
export class EntityNavigationHoverComponent extends EntityNavigationComponent {
    private constructor();
}

// @ts-ignore
export class EntityNavigationWalkComponent extends EntityNavigationComponent {
    private constructor();
}

// @ts-ignore
export class EntityNpcComponent extends EntityComponent {
    private constructor();
    defaultScene: string;
    name: string;
    skinIndex: number;
}

// @ts-ignore
export class EntityOnFireComponent extends EntityComponent {
    private constructor();
    readonly onFireTicksRemaining: number;
}

// @ts-ignore
export class EntityProjectileComponent extends EntityComponent {
    private constructor();
    airInertia: number;
    catchFireOnHurt: boolean;
    critParticlesOnProjectileHurt: boolean;
    destroyOnProjectileHurt: boolean;
    gravity: number;
    hitEntitySound?: string;
    hitGroundSound?: string;
    hitParticle?: string;
    lightningStrikeOnHit: boolean;
    liquidInertia: number;
    onFireTime: number;
    owner?: Entity;
    shouldBounceOnHit: boolean;
    stopOnHit: boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    shoot(velocity: Vector3, options?: ProjectileShootOptions): void;
}

// @ts-ignore
export class EntityPushThroughComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly value: number;
}

export class EntityRemoveAfterEvent {
    private constructor();
    readonly removedEntityId: string;
    readonly typeId: string;
}

export class EntityRemoveAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: EntityRemoveAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityRemoveAfterEvent) => void;
    unsubscribe(callback: (arg0: EntityRemoveAfterEvent) => void): void;
}

export class EntityRemoveBeforeEvent {
    private constructor();
    readonly removedEntity: Entity;
}

export class EntityRemoveBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): (arg0: EntityRemoveBeforeEvent) => void;
    unsubscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): void;
}

// @ts-ignore
export class EntityRideableComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly controllingSeat: number;
    /**
     * @throws This property can throw errors.
     */
    readonly crouchingSkipInteract: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly interactText: string;
    /**
     * @throws This property can throw errors.
     */
    readonly passengerMaxWidth: number;
    /**
     * @throws This property can throw errors.
     */
    readonly pullInEntities: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly riderCanInteract: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly seatCount: number;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    addRider(rider: Entity): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    ejectRider(rider: Entity): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    ejectRiders(): void;
    /**
     * @throws This function can throw errors.
     */
    getFamilyTypes(): string[];
    /**
     * @throws This function can throw errors.
     */
    getRiders(): Entity[];
    /**
     * @throws This function can throw errors.
     */
    getSeats(): Seat[];
}

// @ts-ignore
export class EntityRidingComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly entityRidingOn: Entity;
}

// @ts-ignore
export class EntityScaleComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly value: number;
}

// @ts-ignore
export class EntitySkinIdComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly value: number;
}

export class EntitySpawnAfterEvent {
    private constructor();
    readonly cause: EntityInitializationCause;
    entity: Entity;
}

export class EntitySpawnAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: EntitySpawnAfterEvent) => void): (arg0: EntitySpawnAfterEvent) => void;
    unsubscribe(callback: (arg0: EntitySpawnAfterEvent) => void): void;
}

export class EntitySpawnCallbackArgs {
    private constructor();
    readonly dimensionLocation: DimensionLocation;
    readonly spawnReason: EntitySpawnReason;
    readonly spawnType: EntitySpawnType;
}

export class EntitySpawnType {
    private constructor();
    readonly entityId: string;
    readonly height: number;
    readonly isImmuneFire: boolean;
    readonly isSummonable: boolean;
    readonly spawnCategory: EntitySpawnCategory;
    readonly width: number;
    getSpawnAABB(position: Vector3): BlockBoundingBox;
    isBlockDangerous(block: Block): boolean;
}

// @ts-ignore
export class EntityStrengthComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly max: number;
    /**
     * @throws This property can throw errors.
     */
    readonly value: number;
}

// @ts-ignore
export class EntityTameableComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly getTameItems: ItemStack[];
    /**
     * @throws This property can throw errors.
     */
    readonly isTamed: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly probability: number;
    /**
     * @throws This property can throw errors.
     */
    readonly tamedToPlayer?: Player;
    /**
     * @throws This property can throw errors.
     */
    readonly tamedToPlayerId?: string;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    tame(player: Player): boolean;
}

// @ts-ignore
export class EntityTameMountComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly isTamed: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly isTamedToPlayer: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly tamedToPlayer?: Player;
    /**
     * @throws This property can throw errors.
     */
    readonly tamedToPlayerId?: string;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    tame(showParticles: boolean): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    tameToPlayer(showParticles: boolean, player: Player): boolean;
}

export class EntityType {
    private constructor();
    readonly id: string;
}

// @ts-ignore
export class EntityTypeFamilyComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This function can throw errors.
     */
    getTypeFamilies(): string[];
    /**
     * @throws This function can throw errors.
     */
    hasTypeFamily(typeFamily: string): boolean;
}

export class EntityTypeIterator implements Iterable<EntityType> {
    private constructor();
    [Symbol.iterator](): Iterator<EntityType>;
    next(): IteratorResult<EntityType>;
}

export class EntityTypes {
    private constructor();
    static get(identifier: string): EntityType | undefined;
    static getAll(): EntityType[];
}

// @ts-ignore
export class EntityUnderwaterMovementComponent extends EntityAttributeComponent {
    private constructor();
}

// @ts-ignore
export class EntityVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly value: number;
}

// @ts-ignore
export class EntityWantsJockeyComponent extends EntityComponent {
    private constructor();
}

export class ExplosionAfterEvent {
    private constructor();
    readonly dimension: Dimension;
    readonly source?: Entity;
    getImpactedBlocks(): Block[];
}

export class ExplosionAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: ExplosionAfterEvent) => void): (arg0: ExplosionAfterEvent) => void;
    unsubscribe(callback: (arg0: ExplosionAfterEvent) => void): void;
}

// @ts-ignore
export class ExplosionBeforeEvent extends ExplosionAfterEvent {
    private constructor();
    cancel: boolean;
    setImpactedBlocks(blocks: Block[]): void;
}

export class ExplosionBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg0: ExplosionBeforeEvent) => void): (arg0: ExplosionBeforeEvent) => void;
    unsubscribe(callback: (arg0: ExplosionBeforeEvent) => void): void;
}

export class FeedItem {
    private constructor();
    readonly healAmount: number;
    readonly item: string;
    getEffects(): FeedItemEffect[];
}

export class FeedItemEffect {
    private constructor();
    readonly amplifier: number;
    readonly chance: number;
    readonly duration: number;
    readonly name: string;
}

export class FilterGroup {
    private constructor();
}

export class FluidContainer {
    private constructor();
}

export class GameRuleChangeAfterEvent {
    private constructor();
    readonly rule: GameRule;
    readonly value: boolean | number;
}

export class GameRuleChangeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: GameRuleChangeAfterEvent) => void): (arg0: GameRuleChangeAfterEvent) => void;
    unsubscribe(callback: (arg0: GameRuleChangeAfterEvent) => void): void;
}

export class GameRules {
    private constructor();
    commandBlockOutput: boolean;
    commandBlocksEnabled: boolean;
    doDayLightCycle: boolean;
    doEntityDrops: boolean;
    doFireTick: boolean;
    doImmediateRespawn: boolean;
    doInsomnia: boolean;
    doLimitedCrafting: boolean;
    doMobLoot: boolean;
    doMobSpawning: boolean;
    doTileDrops: boolean;
    doWeatherCycle: boolean;
    drowningDamage: boolean;
    fallDamage: boolean;
    fireDamage: boolean;
    freezeDamage: boolean;
    functionCommandLimit: number;
    keepInventory: boolean;
    locatorBar: boolean;
    maxCommandChainLength: number;
    mobGriefing: boolean;
    naturalRegeneration: boolean;
    playersSleepingPercentage: number;
    projectilesCanBreakBlocks: boolean;
    pvp: boolean;
    randomTickSpeed: number;
    recipesUnlock: boolean;
    respawnBlocksExplode: boolean;
    sendCommandFeedback: boolean;
    showBorderEffect: boolean;
    showCoordinates: boolean;
    showDaysPlayed: boolean;
    showDeathMessages: boolean;
    showRecipeMessages: boolean;
    showTags: boolean;
    spawnRadius: number;
    tntExplodes: boolean;
    tntExplosionDropDecay: boolean;
}

export class InputInfo {
    private constructor();
    /**
     * @throws This property can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    readonly lastInputModeUsed: InputMode;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidEntityError}
     */
    readonly touchOnlyAffectsHotbar: boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    getButtonState(button: InputButton): ButtonState;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getMovementVector(): Vector2;
}

export class ItemCompleteUseAfterEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemCompleteUseAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: ItemCompleteUseAfterEvent) => void): (arg0: ItemCompleteUseAfterEvent) => void;
    unsubscribe(callback: (arg0: ItemCompleteUseAfterEvent) => void): void;
}

export class ItemCompleteUseEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Player;
}

// @ts-ignore
export class ItemComponent extends Component {
    private constructor();
}

export class ItemComponentBeforeDurabilityDamageEvent {
    private constructor();
    readonly attackingEntity: Entity;
    durabilityDamage: number;
    readonly hitEntity: Entity;
    itemStack?: ItemStack;
}

// @ts-ignore
export class ItemComponentCompleteUseEvent extends ItemCompleteUseEvent {
    private constructor();
}

export class ItemComponentConsumeEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Entity;
}

export class ItemComponentHitEntityEvent {
    private constructor();
    readonly attackingEntity: Entity;
    readonly hadEffect: boolean;
    readonly hitEntity: Entity;
    readonly itemStack?: ItemStack;
}

export class ItemComponentMineBlockEvent {
    private constructor();
    readonly block: Block;
    readonly itemStack?: ItemStack;
    readonly minedBlockPermutation: BlockPermutation;
    readonly source: Entity;
}

export class ItemComponentRegistry {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * This function can be called in early-execution mode.
     *
     * {@link CustomComponentInvalidRegistryError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link ItemCustomComponentAlreadyRegisteredError}
     *
     * {@link ItemCustomComponentReloadNewComponentError}
     *
     * {@link ItemCustomComponentReloadNewEventError}
     *
     * {@link ItemCustomComponentReloadVersionError}
     *
     * {@link NamespaceNameError}
     */
    registerCustomComponent(name: string, itemCustomComponent: ItemCustomComponent): void;
}

export class ItemComponentUseEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly source: Player;
}

// @ts-ignore
export class ItemComponentUseOnEvent extends ItemUseOnEvent {
    private constructor();
    readonly source: Entity;
    readonly usedOnBlockPermutation: BlockPermutation;
}

// @ts-ignore
export class ItemCompostableComponent extends ItemComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly compostingChance: number;
}

// @ts-ignore
export class ItemCooldownComponent extends ItemComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly cooldownCategory: string;
    /**
     * @throws This property can throw errors.
     */
    readonly cooldownTicks: number;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    getCooldownTicksRemaining(player: Player): number;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    isCooldownCategory(cooldownCategory: string): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    startCooldown(player: Player): void;
}

// @ts-ignore
export class ItemCustomComponentInstance extends ItemComponent {
    private constructor();
}

// @ts-ignore
export class ItemDurabilityComponent extends ItemComponent {
    private constructor();
    damage: number;
    /**
     * @throws This property can throw errors.
     */
    readonly maxDurability: number;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    getDamageChance(unbreakingEnchantmentLevel?: number): number;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    getDamageChanceRange(): minecraftcommon.NumberRange;
}

// @ts-ignore
export class ItemDyeableComponent extends ItemComponent {
    private constructor();
    color?: RGB;
    /**
     * @throws This property can throw errors.
     */
    readonly defaultColor?: RGB;
}

// @ts-ignore
export class ItemEnchantableComponent extends ItemComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly slots: EnchantmentSlot[];
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeNotCompatibleError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    addEnchantment(enchantment: Enchantment): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeNotCompatibleError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    addEnchantments(enchantments: Enchantment[]): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    canAddEnchantment(enchantment: Enchantment): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    getEnchantment(enchantmentType: EnchantmentType | string): Enchantment | undefined;
    /**
     * @throws This function can throw errors.
     */
    getEnchantments(): Enchantment[];
    /**
     * @throws This function can throw errors.
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    hasEnchantment(enchantmentType: EnchantmentType | string): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    removeAllEnchantments(): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    removeEnchantment(enchantmentType: EnchantmentType | string): void;
}

// @ts-ignore
export class ItemFoodComponent extends ItemComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly canAlwaysEat: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly nutrition: number;
    /**
     * @throws This property can throw errors.
     */
    readonly saturationModifier: number;
    /**
     * @throws This property can throw errors.
     */
    readonly usingConvertsTo: string;
}

// @ts-ignore
export class ItemPotionComponent extends ItemComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly potionEffectType: PotionEffectType;
    /**
     * @throws This property can throw errors.
     */
    readonly potionLiquidType: PotionLiquidType;
    /**
     * @throws This property can throw errors.
     */
    readonly potionModifierType: PotionModifierType;
}

export class ItemReleaseUseAfterEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemReleaseUseAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): (arg0: ItemReleaseUseAfterEvent) => void;
    unsubscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): void;
}

export class ItemStack {
    amount: number;
    readonly isStackable: boolean;
    keepOnDeath: boolean;
    /**
     * @throws This property can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    readonly localizationKey: string;
    lockMode: ItemLockMode;
    readonly maxAmount: number;
    nameTag?: string;
    readonly "type": ItemType;
    readonly typeId: string;
    /**
 * @throws This function can throw errors.
 */
constructor(itemType: ItemType | string, amount?: number);
    clearDynamicProperties(): void;
    clone(): ItemStack;
    getCanDestroy(): string[];
    getCanPlaceOn(): string[];
    getComponent<T extends string>(componentId: T): ItemComponentReturnType<T> | undefined;
    getComponents(): ItemComponent[];
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    getDynamicPropertyIds(): string[];
    getDynamicPropertyTotalByteCount(): number;
    getLore(): string[];
    getTags(): string[];
    hasComponent(componentId: string): boolean;
    hasTag(tag: string): boolean;
    isStackableWith(itemStack: ItemStack): boolean;
    matches(itemName: string, states?: Record<string, boolean | number | string>): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /**
     * @throws This function can throw errors.
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3>): void;
    /**
     * @throws This function can throw errors.
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setLore(loreList?: string[]): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    static createPotion(options: PotionOptions): ItemStack;
}

export class ItemStartUseAfterEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemStartUseAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: ItemStartUseAfterEvent) => void): (arg0: ItemStartUseAfterEvent) => void;
    unsubscribe(callback: (arg0: ItemStartUseAfterEvent) => void): void;
}

export class ItemStartUseOnAfterEvent {
    private constructor();
    readonly block: Block;
    readonly blockFace: Direction;
    readonly itemStack?: ItemStack;
    readonly source: Player;
}

export class ItemStartUseOnAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): (arg0: ItemStartUseOnAfterEvent) => void;
    unsubscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): void;
}

export class ItemStopUseAfterEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemStopUseAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: ItemStopUseAfterEvent) => void): (arg0: ItemStopUseAfterEvent) => void;
    unsubscribe(callback: (arg0: ItemStopUseAfterEvent) => void): void;
}

export class ItemStopUseOnAfterEvent {
    private constructor();
    readonly block: Block;
    readonly itemStack?: ItemStack;
    readonly source: Player;
}

export class ItemStopUseOnAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): (arg0: ItemStopUseOnAfterEvent) => void;
    unsubscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): void;
}

export class ItemType {
    private constructor();
    readonly id: string;
}

export class ItemTypes {
    private constructor();
    static get(itemId: string): ItemType | undefined;
    static getAll(): ItemType[];
}

export class ItemUseAfterEvent {
    private constructor();
    itemStack: ItemStack;
    readonly source: Player;
}

export class ItemUseAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: ItemUseAfterEvent) => void): (arg0: ItemUseAfterEvent) => void;
    unsubscribe(callback: (arg0: ItemUseAfterEvent) => void): void;
}

// @ts-ignore
export class ItemUseBeforeEvent extends ItemUseAfterEvent {
    private constructor();
    cancel: boolean;
}

export class ItemUseBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg0: ItemUseBeforeEvent) => void): (arg0: ItemUseBeforeEvent) => void;
    unsubscribe(callback: (arg0: ItemUseBeforeEvent) => void): void;
}

export class ItemUseOnEvent {
    private constructor();
    readonly block: Block;
    readonly blockFace: Direction;
    readonly faceLocation: Vector3;
    readonly itemStack: ItemStack;
}

// @ts-ignore
export class LeverActionAfterEvent extends BlockEvent {
    private constructor();
    readonly isPowered: boolean;
    readonly player: Player;
}

export class LeverActionAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: LeverActionAfterEvent) => void): (arg0: LeverActionAfterEvent) => void;
    unsubscribe(callback: (arg0: LeverActionAfterEvent) => void): void;
}

// @ts-ignore
export class ListBlockVolume extends BlockVolumeBase {
    constructor(locations: Vector3[]);
    add(locations: Vector3[]): void;
    remove(locations: Vector3[]): void;
}

export class MessageReceiveAfterEvent {
    private constructor();
    readonly id: string;
    readonly message: string;
    readonly player: Player;
}

export class MolangVariableMap {
    /**
     * @throws This function can throw errors.
     */
    setColorRGB(variableName: string, color: RGB): void;
    /**
     * @throws This function can throw errors.
     */
    setColorRGBA(variableName: string, color: RGBA): void;
    /**
     * @throws This function can throw errors.
     */
    setFloat(variableName: string, number: number): void;
    /**
     * @throws This function can throw errors.
     */
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): void;
    /**
     * @throws This function can throw errors.
     */
    setVector3(variableName: string, vector: Vector3): void;
}

export class ObstructionCallbackArgs {
    private constructor();
    readonly dimension: Dimension;
    readonly entity: Entity;
    readonly spawnType: EntitySpawnType;
}

// @ts-ignore
export class PistonActivateAfterEvent extends BlockEvent {
    private constructor();
    readonly isExpanding: boolean;
    readonly piston: BlockPistonComponent;
}

export class PistonActivateAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: PistonActivateAfterEvent) => void): (arg0: PistonActivateAfterEvent) => void;
    unsubscribe(callback: (arg0: PistonActivateAfterEvent) => void): void;
}

// @ts-ignore
export class Player extends Entity {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly camera: Camera;
    /**
     * @throws This property can throw errors.
     */
    readonly clientSystemInfo: ClientSystemInfo;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidEntityError}
     */
    readonly graphicsMode: GraphicsMode;
    readonly inputInfo: InputInfo;
    readonly inputPermissions: PlayerInputPermissions;
    /**
     * @throws This property can throw errors.
     */
    readonly isEmoting: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly isFlying: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly isGliding: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly isJumping: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly level: number;
    /**
     * @throws This property can throw errors.
     */
    readonly name: string;
    /**
     * @throws This property can throw errors.
     */
    readonly onScreenDisplay: ScreenDisplay;
    selectedSlotIndex: number;
    /**
     * @throws This property can throw errors.
     */
    readonly totalXpNeededForNextLevel: number;
    /**
     * @throws This property can throw errors.
     */
    readonly xpEarnedAtCurrentLevel: number;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    addExperience(amount: number): number;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    addLevels(amount: number): number;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    clearPropertyOverridesForEntity(targetEntity: Entity): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    eatItem(itemStack: ItemStack): void;
    getAimAssist(): PlayerAimAssist;
    /**
     * @throws This function can throw errors.
     */
    getGameMode(): GameMode;
    /**
     * @throws This function can throw errors.
     */
    getItemCooldown(cooldownCategory: string): number;
    /**
     * @throws This function can throw errors.
     */
    getSpawnPoint(): DimensionLocation | undefined;
    /**
     * @throws This function can throw errors.
     */
    getTotalXp(): number;
    /**
     * @throws This function can throw errors.
     */
    isOp(): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    playSound(soundId: string, soundOptions?: PlayerSoundOptions): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    postClientMessage(id: string, value: string): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    removePropertyOverrideForEntity(targetEntity: Entity, identifier: string): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    resetLevel(): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setGameMode(gameMode?: GameMode): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setOp(isOp: boolean): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setPropertyOverrideForEntity(targetEntity: Entity, identifier: string, value: boolean | number | string): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setSpawnPoint(spawnPoint?: DimensionLocation): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    startItemCooldown(cooldownCategory: string, tickDuration: number): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    stopMusic(): void;
}

export class PlayerAimAssist {
    private constructor();
    readonly settings?: PlayerAimAssistSettings;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link NamespaceNameError}
     */
    set(settings?: PlayerAimAssistSettings): void;
}

// @ts-ignore
export class PlayerBreakBlockAfterEvent extends BlockEvent {
    private constructor();
    readonly brokenBlockPermutation: BlockPermutation;
    readonly itemStackAfterBreak?: ItemStack;
    readonly itemStackBeforeBreak?: ItemStack;
    readonly player: Player;
}

export class PlayerBreakBlockAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: PlayerBreakBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerBreakBlockAfterEvent) => void;
    unsubscribe(callback: (arg0: PlayerBreakBlockAfterEvent) => void): void;
}

// @ts-ignore
export class PlayerBreakBlockBeforeEvent extends BlockEvent {
    private constructor();
    cancel: boolean;
    itemStack?: ItemStack;
    readonly player: Player;
}

export class PlayerBreakBlockBeforeEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: PlayerBreakBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerBreakBlockBeforeEvent) => void;
    unsubscribe(callback: (arg0: PlayerBreakBlockBeforeEvent) => void): void;
}

export class PlayerButtonInputAfterEvent {
    private constructor();
    readonly button: InputButton;
    readonly newButtonState: ButtonState;
    readonly player: Player;
}

export class PlayerButtonInputAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: PlayerButtonInputAfterEvent) => void,
        options?: InputEventOptions,
    ): (arg0: PlayerButtonInputAfterEvent) => void;
    unsubscribe(callback: (arg0: PlayerButtonInputAfterEvent) => void): void;
}

// @ts-ignore
export class PlayerCursorInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly item?: ItemStack;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    clear(): void;
}

export class PlayerDimensionChangeAfterEvent {
    private constructor();
    readonly fromDimension: Dimension;
    readonly fromLocation: Vector3;
    readonly player: Player;
    readonly toDimension: Dimension;
    readonly toLocation: Vector3;
}

export class PlayerDimensionChangeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: PlayerDimensionChangeAfterEvent) => void): (arg0: PlayerDimensionChangeAfterEvent) => void;
    unsubscribe(callback: (arg0: PlayerDimensionChangeAfterEvent) => void): void;
}

export class PlayerEmoteAfterEvent {
    private constructor();
    readonly personaPieceId: string;
    readonly player: Player;
}

export class PlayerEmoteAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): (arg0: PlayerEmoteAfterEvent) => void;
    unsubscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): void;
}

export class PlayerGameModeChangeAfterEvent {
    private constructor();
    readonly fromGameMode: GameMode;
    readonly player: Player;
    readonly toGameMode: GameMode;
}

export class PlayerGameModeChangeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): (arg0: PlayerGameModeChangeAfterEvent) => void;
    unsubscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): void;
}

export class PlayerGameModeChangeBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly fromGameMode: GameMode;
    readonly player: Player;
    toGameMode: GameMode;
}

export class PlayerGameModeChangeBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg0: PlayerGameModeChangeBeforeEvent) => void): (arg0: PlayerGameModeChangeBeforeEvent) => void;
    unsubscribe(callback: (arg0: PlayerGameModeChangeBeforeEvent) => void): void;
}

export class PlayerInputModeChangeAfterEvent {
    private constructor();
    readonly newInputModeUsed: InputMode;
    readonly player: Player;
    readonly previousInputModeUsed: InputMode;
}

export class PlayerInputModeChangeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: PlayerInputModeChangeAfterEvent) => void): (arg0: PlayerInputModeChangeAfterEvent) => void;
    unsubscribe(callback: (arg0: PlayerInputModeChangeAfterEvent) => void): void;
}

export class PlayerInputPermissionCategoryChangeAfterEvent {
    private constructor();
    readonly category: InputPermissionCategory;
    readonly enabled: boolean;
    readonly player: Player;
}

export class PlayerInputPermissionCategoryChangeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void): (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void;
    unsubscribe(callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void): void;
}

export class PlayerInputPermissions {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    isPermissionCategoryEnabled(permissionCategory: InputPermissionCategory): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setPermissionCategory(permissionCategory: InputPermissionCategory, isEnabled: boolean): void;
}

export class PlayerInteractWithBlockAfterEvent {
    private constructor();
    readonly beforeItemStack?: ItemStack;
    readonly block: Block;
    readonly blockFace: Direction;
    readonly faceLocation: Vector3;
    readonly isFirstEvent: boolean;
    readonly itemStack?: ItemStack;
    readonly player: Player;
}

export class PlayerInteractWithBlockAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: PlayerInteractWithBlockAfterEvent) => void): (arg0: PlayerInteractWithBlockAfterEvent) => void;
    unsubscribe(callback: (arg0: PlayerInteractWithBlockAfterEvent) => void): void;
}

export class PlayerInteractWithBlockBeforeEvent {
    private constructor();
    readonly block: Block;
    readonly blockFace: Direction;
    cancel: boolean;
    readonly faceLocation: Vector3;
    readonly isFirstEvent: boolean;
    readonly itemStack?: ItemStack;
    readonly player: Player;
}

export class PlayerInteractWithBlockBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg0: PlayerInteractWithBlockBeforeEvent) => void): (arg0: PlayerInteractWithBlockBeforeEvent) => void;
    unsubscribe(callback: (arg0: PlayerInteractWithBlockBeforeEvent) => void): void;
}

export class PlayerInteractWithEntityAfterEvent {
    private constructor();
    readonly beforeItemStack?: ItemStack;
    readonly itemStack?: ItemStack;
    readonly player: Player;
    readonly target: Entity;
}

export class PlayerInteractWithEntityAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent) => void): (arg0: PlayerInteractWithEntityAfterEvent) => void;
    unsubscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent) => void): void;
}

export class PlayerInteractWithEntityBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly itemStack?: ItemStack;
    readonly player: Player;
    readonly target: Entity;
}

export class PlayerInteractWithEntityBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg0: PlayerInteractWithEntityBeforeEvent) => void): (arg0: PlayerInteractWithEntityBeforeEvent) => void;
    unsubscribe(callback: (arg0: PlayerInteractWithEntityBeforeEvent) => void): void;
}

export class PlayerIterator implements Iterable<Player> {
    private constructor();
    [Symbol.iterator](): Iterator<Player>;
    next(): IteratorResult<Player>;
}

export class PlayerJoinAfterEvent {
    private constructor();
    readonly playerId: string;
    readonly playerName: string;
}

export class PlayerJoinAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: PlayerJoinAfterEvent) => void): (arg0: PlayerJoinAfterEvent) => void;
    unsubscribe(callback: (arg0: PlayerJoinAfterEvent) => void): void;
}

export class PlayerLeaveAfterEvent {
    private constructor();
    readonly playerId: string;
    readonly playerName: string;
}

export class PlayerLeaveAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): (arg0: PlayerLeaveAfterEvent) => void;
    unsubscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): void;
}

export class PlayerLeaveBeforeEvent {
    private constructor();
    readonly player: Player;
}

export class PlayerLeaveBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): (arg0: PlayerLeaveBeforeEvent) => void;
    unsubscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): void;
}

// @ts-ignore
export class PlayerPlaceBlockAfterEvent extends BlockEvent {
    private constructor();
    readonly player: Player;
}

export class PlayerPlaceBlockAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: PlayerPlaceBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerPlaceBlockAfterEvent) => void;
    unsubscribe(callback: (arg0: PlayerPlaceBlockAfterEvent) => void): void;
}

// @ts-ignore
export class PlayerPlaceBlockBeforeEvent extends BlockEvent {
    private constructor();
    cancel: boolean;
    readonly face: Direction;
    readonly faceLocation: Vector3;
    readonly permutationBeingPlaced: BlockPermutation;
    readonly player: Player;
}

export class PlayerPlaceBlockBeforeEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: PlayerPlaceBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerPlaceBlockBeforeEvent) => void;
    unsubscribe(callback: (arg0: PlayerPlaceBlockBeforeEvent) => void): void;
}

export class PlayerSpawnAfterEvent {
    private constructor();
    initialSpawn: boolean;
    player: Player;
}

export class PlayerSpawnAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): (arg0: PlayerSpawnAfterEvent) => void;
    unsubscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): void;
}

export class PotionEffectType {
    private constructor();
    readonly id: string;
}

export class PotionLiquidType {
    private constructor();
    readonly id: string;
}

export class PotionModifierType {
    private constructor();
    readonly id: string;
}

export class Potions {
    private constructor();
    static getPotionEffectType(potionEffectId: string): PotionEffectType | undefined;
    static getPotionLiquidType(potionLiquidId: string): PotionLiquidType | undefined;
    static getPotionModifierType(potionModifierId: string): PotionModifierType | undefined;
}

// @ts-ignore
export class PressurePlatePopAfterEvent extends BlockEvent {
    private constructor();
    readonly previousRedstonePower: number;
    readonly redstonePower: number;
}

export class PressurePlatePopAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): (arg0: PressurePlatePopAfterEvent) => void;
    unsubscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): void;
}

// @ts-ignore
export class PressurePlatePushAfterEvent extends BlockEvent {
    private constructor();
    readonly previousRedstonePower: number;
    readonly redstonePower: number;
    readonly source: Entity;
}

export class PressurePlatePushAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): (arg0: PressurePlatePushAfterEvent) => void;
    unsubscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): void;
}

export class ProjectileHitBlockAfterEvent {
    private constructor();
    readonly dimension: Dimension;
    readonly hitVector: Vector3;
    readonly location: Vector3;
    readonly projectile: Entity;
    readonly source?: Entity;
    getBlockHit(): BlockHitInformation;
}

export class ProjectileHitBlockAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): (arg0: ProjectileHitBlockAfterEvent) => void;
    unsubscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): void;
}

export class ProjectileHitEntityAfterEvent {
    private constructor();
    readonly dimension: Dimension;
    readonly hitVector: Vector3;
    readonly location: Vector3;
    readonly projectile: Entity;
    readonly source?: Entity;
    getEntityHit(): EntityHitInformation;
}

export class ProjectileHitEntityAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): (arg0: ProjectileHitEntityAfterEvent) => void;
    unsubscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): void;
}

export class Scoreboard {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    addObjective(objectiveId: string, displayName?: string): ScoreboardObjective;
    clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective | undefined;
    getObjective(objectiveId: string): ScoreboardObjective | undefined;
    getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions | undefined;
    getObjectives(): ScoreboardObjective[];
    getParticipants(): ScoreboardIdentity[];
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    removeObjective(objectiveId: ScoreboardObjective | string): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setObjectiveAtDisplaySlot(
        displaySlotId: DisplaySlotId,
        objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,
    ): ScoreboardObjective | undefined;
}

export class ScoreboardIdentity {
    private constructor();
    readonly displayName: string;
    readonly id: number;
    readonly isValid: boolean;
    readonly "type": ScoreboardIdentityType;
    /**
     * @throws This function can throw errors.
     */
    getEntity(): Entity | undefined;
}

export class ScoreboardObjective {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly displayName: string;
    /**
     * @throws This property can throw errors.
     */
    readonly id: string;
    readonly isValid: boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number;
    /**
     * @throws This function can throw errors.
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @throws This function can throw errors.
     */
    getScore(participant: Entity | ScoreboardIdentity | string): number | undefined;
    /**
     * @throws This function can throw errors.
     */
    getScores(): ScoreboardScoreInfo[];
    /**
     * @throws This function can throw errors.
     */
    hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setScore(participant: Entity | ScoreboardIdentity | string, score: number): void;
}

export class ScoreboardScoreInfo {
    private constructor();
    readonly participant: ScoreboardIdentity;
    readonly score: number;
}

export class ScreenDisplay {
    private constructor();
    readonly isValid: boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link InvalidEntityError}
     */
    getHiddenHudElements(): HudElement[];
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link InvalidEntityError}
     */
    hideAllExcept(hudElements?: HudElement[]): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link InvalidEntityError}
     */
    isForcedHidden(hudElement: HudElement): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link InvalidEntityError}
     */
    resetHudElementsVisibility(): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     */
    setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link InvalidEntityError}
     */
    setHudVisibility(visible: HudVisibility, hudElements?: HudElement[]): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     */
    setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     */
    updateSubtitle(subtitle: (RawMessage | string)[] | RawMessage | string): void;
}

export class ScriptEventCommandMessageAfterEvent {
    private constructor();
    readonly id: string;
    readonly initiator?: Entity;
    readonly message: string;
    readonly sourceBlock?: Block;
    readonly sourceEntity?: Entity;
    readonly sourceType: ScriptEventSource;
}

export class ScriptEventCommandMessageAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: ScriptEventCommandMessageAfterEvent) => void,
        options?: ScriptEventMessageFilterOptions,
    ): (arg0: ScriptEventCommandMessageAfterEvent) => void;
    unsubscribe(callback: (arg0: ScriptEventCommandMessageAfterEvent) => void): void;
}

export class Seat {
    private constructor();
    readonly lockRiderRotation: number;
    readonly maxRiderCount: number;
    readonly minRiderCount: number;
    readonly position: Vector3;
    readonly seatRotation: number;
}

export class ServerMessageAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: MessageReceiveAfterEvent) => void): (arg0: MessageReceiveAfterEvent) => void;
    unsubscribe(callback: (arg0: MessageReceiveAfterEvent) => void): void;
}

export class ShutdownBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg0: ShutdownEvent) => void): (arg0: ShutdownEvent) => void;
    unsubscribe(callback: (arg0: ShutdownEvent) => void): void;
}

export class ShutdownEvent {
    private constructor();
}

export class SpawnRulesRegistry {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     *
     * {@link SpawnRulesInvalidRegistryError}
     */
    registerEntitySpawnCallback(id: string, callback: (arg0: EntitySpawnCallbackArgs) => boolean): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     *
     * {@link SpawnRulesInvalidRegistryError}
     */
    registerObstructionCallback(id: string, callback: (arg0: ObstructionCallbackArgs) => boolean): void;
}

export class StartupBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg0: StartupEvent) => void): (arg0: StartupEvent) => void;
    unsubscribe(callback: (arg0: StartupEvent) => void): void;
}

export class StartupEvent {
    private constructor();
    readonly blockComponentRegistry: BlockComponentRegistry;
    readonly customCommandRegistry: CustomCommandRegistry;
    readonly itemComponentRegistry: ItemComponentRegistry;
    getSpawnRulesRegistry(): SpawnRulesRegistry;
}

export class Structure {
    private constructor();
    readonly id: string;
    readonly isValid: boolean;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidStructureError}
     */
    readonly size: Vector3;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    getBlockPermutation(location: Vector3): BlockPermutation | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    getIsWaterlogged(location: Vector3): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    saveAs(identifier: string, saveMode?: StructureSaveMode): Structure;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link InvalidStructureError}
     */
    saveToWorld(): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    setBlockPermutation(location: Vector3, blockPermutation?: BlockPermutation, waterlogged?: boolean): void;
}

export class StructureManager {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): Structure;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    createFromWorld(
        identifier: string,
        dimension: Dimension,
        from: Vector3,
        to: Vector3,
        options?: StructureCreateOptions,
    ): Structure;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    delete(structure: string | Structure): boolean;
    get(identifier: string): Structure | undefined;
    getWorldStructureIds(): string[];
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    place(structure: string | Structure, dimension: Dimension, location: Vector3, options?: StructurePlaceOptions): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link PlaceJigsawError}
     */
    placeJigsaw(
        pool: string,
        targetJigsaw: string,
        maxDepth: number,
        dimension: Dimension,
        location: Vector3,
        options?: JigsawPlaceOptions,
    ): BlockBoundingBox;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link PlaceJigsawError}
     */
    placeJigsawStructure(
        identifier: string,
        dimension: Dimension,
        location: Vector3,
        options?: JigsawStructurePlaceOptions,
    ): BlockBoundingBox;
}

export class System {
    private constructor();
    readonly afterEvents: SystemAfterEvents;
    readonly beforeEvents: SystemBeforeEvents;
    readonly currentTick: number;
    readonly isEditorWorld: boolean;
    readonly serverSystemInfo: SystemInfo;
    clearJob(jobId: number): void;
    clearRun(runId: number): void;
    run(callback: () => void): number;
    runInterval(callback: () => void, tickInterval?: number): number;
    runJob(generator: Generator<void, void, void>): number;
    runTimeout(callback: () => void, tickDelay?: number): number;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     */
    sendScriptEvent(id: string, message: string): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can be called in early-execution mode.
     *
     * {@link minecraftcommon.EngineError}
     */
    waitTicks(ticks: number): Promise<void>;
}

export class SystemAfterEvents {
    private constructor();
    readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;
}

export class SystemBeforeEvents {
    private constructor();
    readonly shutdown: ShutdownBeforeEventSignal;
    readonly startup: StartupBeforeEventSignal;
    readonly watchdogTerminate: WatchdogTerminateBeforeEventSignal;
}

export class SystemInfo {
    private constructor();
    readonly memoryTier: MemoryTier;
}

// @ts-ignore
export class TargetBlockHitAfterEvent extends BlockEvent {
    private constructor();
    readonly hitVector: Vector3;
    readonly previousRedstonePower: number;
    readonly redstonePower: number;
    readonly source: Entity;
}

export class TargetBlockHitAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): (arg0: TargetBlockHitAfterEvent) => void;
    unsubscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): void;
}

export class Trigger {
    eventName: string;
    constructor(eventName: string);
}

// @ts-ignore
export class TripWireTripAfterEvent extends BlockEvent {
    private constructor();
    readonly isPowered: boolean;
    readonly sources: Entity[];
}

export class TripWireTripAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: TripWireTripAfterEvent) => void): (arg0: TripWireTripAfterEvent) => void;
    unsubscribe(callback: (arg0: TripWireTripAfterEvent) => void): void;
}

export class WatchdogTerminateBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly terminateReason: WatchdogTerminateReason;
}

export class WatchdogTerminateBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): (arg0: WatchdogTerminateBeforeEvent) => void;
    unsubscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): void;
}

export class WeatherChangeAfterEvent {
    private constructor();
    readonly dimension: string;
    readonly newWeather: WeatherType;
    readonly previousWeather: WeatherType;
}

export class WeatherChangeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: WeatherChangeAfterEvent) => void): (arg0: WeatherChangeAfterEvent) => void;
    unsubscribe(callback: (arg0: WeatherChangeAfterEvent) => void): void;
}

export class WeatherChangeBeforeEvent {
    private constructor();
    cancel: boolean;
    duration: number;
    newWeather: WeatherType;
    readonly previousWeather: WeatherType;
}

export class WeatherChangeBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg0: WeatherChangeBeforeEvent) => void): (arg0: WeatherChangeBeforeEvent) => void;
    unsubscribe(callback: (arg0: WeatherChangeBeforeEvent) => void): void;
}

export class World {
    private constructor();
    readonly afterEvents: WorldAfterEvents;
    readonly beforeEvents: WorldBeforeEvents;
    readonly gameRules: GameRules;
    readonly isHardcore: boolean;
    readonly scoreboard: Scoreboard;
    readonly structureManager: StructureManager;
    broadcastClientMessage(id: string, value: string): void;
    clearDynamicProperties(): void;
    getAbsoluteTime(): number;
    getAimAssist(): AimAssistRegistry;
    /**
     * @throws This function can throw errors.
     */
    getAllPlayers(): Player[];
    getDay(): number;
    getDefaultSpawnLocation(): Vector3;
    getDifficulty(): Difficulty;
    /**
     * @throws This function can throw errors.
     */
    getDimension(dimensionId: string): Dimension;
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    getDynamicPropertyIds(): string[];
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @throws This function can throw errors.
     */
    getEntity(id: string): Entity | undefined;
    getMoonPhase(): MoonPhase;
    /**
     * @throws This function can throw errors.
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    getTimeOfDay(): number;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @throws This function can throw errors.
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    setAbsoluteTime(absoluteTime: number): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setDefaultSpawnLocation(spawnLocation: Vector3): void;
    setDifficulty(difficulty: Difficulty): void;
    /**
     * @throws This function can throw errors.
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3>): void;
    /**
     * @throws This function can throw errors.
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setTimeOfDay(timeOfDay: number | TimeOfDay): void;
    stopMusic(): void;
}

export class WorldAfterEvents {
    private constructor();
    readonly blockExplode: BlockExplodeAfterEventSignal;
    readonly buttonPush: ButtonPushAfterEventSignal;
    readonly chatSend: ChatSendAfterEventSignal;
    readonly dataDrivenEntityTrigger: DataDrivenEntityTriggerAfterEventSignal;
    readonly effectAdd: EffectAddAfterEventSignal;
    readonly entityDie: EntityDieAfterEventSignal;
    readonly entityHealthChanged: EntityHealthChangedAfterEventSignal;
    readonly entityHitBlock: EntityHitBlockAfterEventSignal;
    readonly entityHitEntity: EntityHitEntityAfterEventSignal;
    readonly entityHurt: EntityHurtAfterEventSignal;
    readonly entityLoad: EntityLoadAfterEventSignal;
    readonly entityRemove: EntityRemoveAfterEventSignal;
    readonly entitySpawn: EntitySpawnAfterEventSignal;
    readonly explosion: ExplosionAfterEventSignal;
    readonly gameRuleChange: GameRuleChangeAfterEventSignal;
    readonly itemCompleteUse: ItemCompleteUseAfterEventSignal;
    readonly itemReleaseUse: ItemReleaseUseAfterEventSignal;
    readonly itemStartUse: ItemStartUseAfterEventSignal;
    readonly itemStartUseOn: ItemStartUseOnAfterEventSignal;
    readonly itemStopUse: ItemStopUseAfterEventSignal;
    readonly itemStopUseOn: ItemStopUseOnAfterEventSignal;
    readonly itemUse: ItemUseAfterEventSignal;
    readonly leverAction: LeverActionAfterEventSignal;
    readonly messageReceive: ServerMessageAfterEventSignal;
    readonly pistonActivate: PistonActivateAfterEventSignal;
    readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal;
    readonly playerButtonInput: PlayerButtonInputAfterEventSignal;
    readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal;
    readonly playerEmote: PlayerEmoteAfterEventSignal;
    readonly playerGameModeChange: PlayerGameModeChangeAfterEventSignal;
    readonly playerInputModeChange: PlayerInputModeChangeAfterEventSignal;
    readonly playerInputPermissionCategoryChange: PlayerInputPermissionCategoryChangeAfterEventSignal;
    readonly playerInteractWithBlock: PlayerInteractWithBlockAfterEventSignal;
    readonly playerInteractWithEntity: PlayerInteractWithEntityAfterEventSignal;
    readonly playerJoin: PlayerJoinAfterEventSignal;
    readonly playerLeave: PlayerLeaveAfterEventSignal;
    readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal;
    readonly playerSpawn: PlayerSpawnAfterEventSignal;
    readonly pressurePlatePop: PressurePlatePopAfterEventSignal;
    readonly pressurePlatePush: PressurePlatePushAfterEventSignal;
    readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal;
    readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal;
    readonly targetBlockHit: TargetBlockHitAfterEventSignal;
    readonly tripWireTrip: TripWireTripAfterEventSignal;
    readonly weatherChange: WeatherChangeAfterEventSignal;
    readonly worldLoad: WorldLoadAfterEventSignal;
}

export class WorldBeforeEvents {
    private constructor();
    readonly chatSend: ChatSendBeforeEventSignal;
    readonly effectAdd: EffectAddBeforeEventSignal;
    readonly entityRemove: EntityRemoveBeforeEventSignal;
    readonly explosion: ExplosionBeforeEventSignal;
    readonly itemUse: ItemUseBeforeEventSignal;
    readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal;
    readonly playerGameModeChange: PlayerGameModeChangeBeforeEventSignal;
    readonly playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal;
    readonly playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal;
    readonly playerLeave: PlayerLeaveBeforeEventSignal;
    readonly playerPlaceBlock: PlayerPlaceBlockBeforeEventSignal;
    readonly weatherChange: WeatherChangeBeforeEventSignal;
}

export class WorldLoadAfterEvent {
    private constructor();
}

export class WorldLoadAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: WorldLoadAfterEvent) => void): (arg0: WorldLoadAfterEvent) => void;
    unsubscribe(callback: (arg0: WorldLoadAfterEvent) => void): void;
}

export interface BiomeSearchOptions {
    boundingSize?: Vector3;
}

export interface BlockBoundingBox {
    max: Vector3;
    min: Vector3;
}

export interface BlockCustomComponent {
    beforeOnPlayerPlace?: (arg0: BlockComponentPlayerPlaceBeforeEvent, arg1: CustomComponentParameters) => void;
    onEntityFallOn?: (arg0: BlockComponentEntityFallOnEvent, arg1: CustomComponentParameters) => void;
    onPlace?: (arg0: BlockComponentOnPlaceEvent, arg1: CustomComponentParameters) => void;
    onPlayerDestroy?: (arg0: BlockComponentPlayerDestroyEvent, arg1: CustomComponentParameters) => void;
    onPlayerInteract?: (arg0: BlockComponentPlayerInteractEvent, arg1: CustomComponentParameters) => void;
    onRandomTick?: (arg0: BlockComponentRandomTickEvent, arg1: CustomComponentParameters) => void;
    onStepOff?: (arg0: BlockComponentStepOffEvent, arg1: CustomComponentParameters) => void;
    onStepOn?: (arg0: BlockComponentStepOnEvent, arg1: CustomComponentParameters) => void;
    onTick?: (arg0: BlockComponentTickEvent, arg1: CustomComponentParameters) => void;
}

export interface BlockEventOptions {
    blockTypes?: string[];
    permutations?: BlockPermutation[];
}

export interface BlockFillOptions {
    blockFilter?: BlockFilter;
    ignoreChunkBoundErrors?: boolean;
}

export interface BlockFilter {
    excludePermutations?: BlockPermutation[];
    excludeTags?: string[];
    excludeTypes?: string[];
    includePermutations?: BlockPermutation[];
    includeTags?: string[];
    includeTypes?: string[];
}

export interface BlockHitInformation {
    block: Block;
    face: Direction;
    faceLocation: Vector3;
}

export interface BlockRaycastHit {
    block: Block;
    face: Direction;
    faceLocation: Vector3;
}

// @ts-ignore
export interface BlockRaycastOptions extends BlockFilter {
    includeLiquidBlocks?: boolean;
    includePassableBlocks?: boolean;
    maxDistance?: number;
}

export interface CameraDefaultOptions {
    easeOptions: CameraEaseOptions;
}

export interface CameraEaseOptions {
    easeTime?: number;
    easeType?: EasingType;
}

export interface CameraFadeOptions {
    fadeColor?: RGB;
    fadeTime?: CameraFadeTimeOptions;
}

export interface CameraFadeTimeOptions {
    fadeInTime: number;
    fadeOutTime: number;
    holdTime: number;
}

export interface CameraFixedBoomOptions {
    entityOffset?: Vector3;
    viewOffset?: Vector2;
}

export interface CameraSetFacingOptions {
    easeOptions?: CameraEaseOptions;
    facingEntity: Entity;
    location?: Vector3;
}

export interface CameraSetLocationOptions {
    easeOptions?: CameraEaseOptions;
    location: Vector3;
}

export interface CameraSetPosOptions {
    easeOptions?: CameraEaseOptions;
    facingLocation: Vector3;
    location?: Vector3;
}

export interface CameraSetRotOptions {
    easeOptions?: CameraEaseOptions;
    location?: Vector3;
    rotation: Vector2;
}

export interface CameraTargetOptions {
    offsetFromTargetCenter?: Vector3;
    targetEntity: Entity;
}

export interface CompoundBlockVolumeItem {
    action?: CompoundBlockVolumeAction;
    locationRelativity?: CompoundBlockVolumePositionRelativity;
    volume: BlockVolume;
}

export interface CustomCommand {
    description: string;
    mandatoryParameters?: CustomCommandParameter[];
    name: string;
    optionalParameters?: CustomCommandParameter[];
    permissionLevel: CommandPermissionLevel;
}

export interface CustomCommandParameter {
    name: string;
    type: CustomCommandParamType;
}

export interface CustomCommandResult {
    message?: string;
    status: CustomCommandStatus;
}

export interface DefinitionModifier {
    addedComponentGroups: string[];
    removedComponentGroups: string[];
    triggers: Trigger[];
}

export interface DimensionLocation {
    dimension: Dimension;
    x: number;
    y: number;
    z: number;
}

export interface Enchantment {
    level: number;
    type: EnchantmentType;
}

export interface EntityApplyDamageByProjectileOptions {
    damagingEntity?: Entity;
    damagingProjectile: Entity;
}

export interface EntityApplyDamageOptions {
    cause: EntityDamageCause;
    damagingEntity?: Entity;
}

export interface EntityDamageSource {
    cause: EntityDamageCause;
    damagingEntity?: Entity;
    damagingProjectile?: Entity;
}

export interface EntityDataDrivenTriggerEventOptions {
    entities?: Entity[];
    entityTypes?: string[];
    eventTypes?: string[];
}

export interface EntityEffectOptions {
    amplifier?: number;
    showParticles?: boolean;
}

export interface EntityEventOptions {
    entities?: Entity[];
    entityTypes?: string[];
}

export interface EntityFilter {
    excludeFamilies?: string[];
    excludeGameModes?: GameMode[];
    excludeNames?: string[];
    excludeTags?: string[];
    excludeTypes?: string[];
    families?: string[];
    gameMode?: GameMode;
    maxHorizontalRotation?: number;
    maxLevel?: number;
    maxVerticalRotation?: number;
    minHorizontalRotation?: number;
    minLevel?: number;
    minVerticalRotation?: number;
    name?: string;
    propertyOptions?: EntityQueryPropertyOptions[];
    scoreOptions?: EntityQueryScoreOptions[];
    tags?: string[];
    type?: string;
}

export interface EntityHitInformation {
    entity?: Entity;
}

// @ts-ignore
export interface EntityQueryOptions extends EntityFilter {
    closest?: number;
    farthest?: number;
    location?: Vector3;
    maxDistance?: number;
    minDistance?: number;
    volume?: Vector3;
}

export interface EntityQueryPropertyOptions {
    exclude?: boolean;
    propertyId: string;
    value?: 
        | boolean
        | string
        | EqualsComparison
        | GreaterThanComparison
        | GreaterThanOrEqualsComparison
        | LessThanComparison
        | LessThanOrEqualsComparison
        | NotEqualsComparison
        | RangeComparison;
}

export interface EntityQueryScoreOptions {
    exclude?: boolean;
    maxScore?: number;
    minScore?: number;
    objective?: string;
}

export interface EntityRaycastHit {
    distance: number;
    entity: Entity;
}

// @ts-ignore
export interface EntityRaycastOptions extends EntityFilter {
    ignoreBlockCollision?: boolean;
    includeLiquidBlocks?: boolean;
    includePassableBlocks?: boolean;
    maxDistance?: number;
}

export interface EqualsComparison {
    equals: boolean | number | string;
}

export interface ExplosionOptions {
    allowUnderwater?: boolean;
    breaksBlocks?: boolean;
    causesFire?: boolean;
    source?: Entity;
}

export interface GreaterThanComparison {
    greaterThan: number;
}

export interface GreaterThanOrEqualsComparison {
    greaterThanOrEquals: number;
}

export interface InputEventOptions {
    buttons?: InputButton[];
    state?: ButtonState;
}

export interface ItemCustomComponent {
    onBeforeDurabilityDamage?: (arg0: ItemComponentBeforeDurabilityDamageEvent, arg1: CustomComponentParameters) => void;
    onCompleteUse?: (arg0: ItemComponentCompleteUseEvent, arg1: CustomComponentParameters) => void;
    onConsume?: (arg0: ItemComponentConsumeEvent, arg1: CustomComponentParameters) => void;
    onHitEntity?: (arg0: ItemComponentHitEntityEvent, arg1: CustomComponentParameters) => void;
    onMineBlock?: (arg0: ItemComponentMineBlockEvent, arg1: CustomComponentParameters) => void;
    onUse?: (arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) => void;
    onUseOn?: (arg0: ItemComponentUseOnEvent, arg1: CustomComponentParameters) => void;
}

export interface JigsawPlaceOptions {
    includeEntities?: boolean;
    keepJigsaws?: boolean;
}

export interface JigsawStructurePlaceOptions {
    ignoreStartHeight?: boolean;
    includeEntities?: boolean;
    keepJigsaws?: boolean;
}

export interface LessThanComparison {
    lessThan: number;
}

export interface LessThanOrEqualsComparison {
    lessThanOrEquals: number;
}

export interface MusicOptions {
    fade?: number;
    loop?: boolean;
    volume?: number;
}

export interface NotEqualsComparison {
    notEquals: boolean | number | string;
}

export interface PlayAnimationOptions {
    blendOutTime?: number;
    controller?: string;
    nextState?: string;
    players?: string[];
    stopExpression?: string;
}

export interface PlayerAimAssistSettings {
    distance?: number;
    presetId: string;
    targetMode?: AimAssistTargetMode;
    viewAngle?: Vector2;
}

export interface PlayerSoundOptions {
    location?: Vector3;
    pitch?: number;
    volume?: number;
}

export interface PotionOptions {
    effect: PotionEffectType | string;
    liquid?: PotionLiquidType | string;
    modifier?: PotionModifierType | string;
}

export interface ProjectileShootOptions {
    uncertainty?: number;
}

export interface RangeComparison {
    lowerBound: number;
    upperBound: number;
}

export interface RawMessage {
    rawtext?: RawMessage[];
    score?: RawMessageScore;
    text?: string;
    translate?: string;
    with?: string[] | RawMessage;
}

export interface RawMessageScore {
    name?: string;
    objective?: string;
}

export interface RawText {
    rawtext?: RawMessage[];
}

export interface RGB {
    blue: number;
    green: number;
    red: number;
}

// @ts-ignore
export interface RGBA extends RGB {
    alpha: number;
}

export interface ScoreboardObjectiveDisplayOptions {
    objective: ScoreboardObjective;
    sortOrder?: ObjectiveSortOrder;
}

export interface ScriptEventMessageFilterOptions {
    namespaces: string[];
}

export interface SpawnEntityOptions {
    initialPersistence?: boolean;
    initialRotation?: number;
    spawnEvent?: string;
}

export interface StructureCreateOptions {
    includeBlocks?: boolean;
    includeEntities?: boolean;
    saveMode?: StructureSaveMode;
}

export interface StructurePlaceOptions {
    animationMode?: StructureAnimationMode;
    animationSeconds?: number;
    includeBlocks?: boolean;
    includeEntities?: boolean;
    integrity?: number;
    integritySeed?: string;
    mirror?: StructureMirrorAxis;
    rotation?: StructureRotation;
    waterlogged?: boolean;
}

export interface TeleportOptions {
    checkForBlocks?: boolean;
    dimension?: Dimension;
    facingLocation?: Vector3;
    keepVelocity?: boolean;
    rotation?: Vector2;
}

export interface TitleDisplayOptions {
    fadeInDuration: number;
    fadeOutDuration: number;
    stayDuration: number;
    subtitle?: (RawMessage | string)[] | RawMessage | string;
}

export interface Vector2 {
    x: number;
    y: number;
}

export interface Vector3 {
    x: number;
    y: number;
    z: number;
}

export interface VectorXZ {
    x: number;
    z: number;
}

export interface WorldSoundOptions {
    pitch?: number;
    volume?: number;
}

// @ts-ignore
export class BlockCustomComponentAlreadyRegisteredError extends Error {
    private constructor();
}

// @ts-ignore
export class BlockCustomComponentReloadNewComponentError extends Error {
    private constructor();
}

// @ts-ignore
export class BlockCustomComponentReloadNewEventError extends Error {
    private constructor();
}

// @ts-ignore
export class BlockCustomComponentReloadVersionError extends Error {
    private constructor();
}

// @ts-ignore
export class CommandError extends Error {
    private constructor();
}

// @ts-ignore
export class CustomCommandError extends Error {
    private constructor();
    readonly reason: CustomCommandErrorReason;
}

// @ts-ignore
export class CustomComponentInvalidRegistryError extends Error {
    private constructor();
}

// @ts-ignore
export class CustomComponentNameError extends Error {
    private constructor();
    readonly reason: CustomComponentNameErrorReason;
}

// @ts-ignore
export class EnchantmentLevelOutOfBoundsError extends Error {
    private constructor();
}

// @ts-ignore
export class EnchantmentTypeNotCompatibleError extends Error {
    private constructor();
}

// @ts-ignore
export class EnchantmentTypeUnknownIdError extends Error {
    private constructor();
}

// @ts-ignore
export class InvalidContainerError extends Error {
    private constructor();
}

// @ts-ignore
export class InvalidContainerSlotError extends Error {
    private constructor();
}

// @ts-ignore
export class InvalidEntityError extends Error {
    private constructor();
    readonly id: string;
    readonly "type": string;
}

// @ts-ignore
export class InvalidIteratorError extends Error {
    private constructor();
}

// @ts-ignore
export class InvalidStructureError extends Error {
    private constructor();
}

// @ts-ignore
export class ItemCustomComponentAlreadyRegisteredError extends Error {
    private constructor();
}

// @ts-ignore
export class ItemCustomComponentReloadNewComponentError extends Error {
    private constructor();
}

// @ts-ignore
export class ItemCustomComponentReloadNewEventError extends Error {
    private constructor();
}

// @ts-ignore
export class ItemCustomComponentReloadVersionError extends Error {
    private constructor();
}

// @ts-ignore
export class LocationInUnloadedChunkError extends Error {
    private constructor();
}

// @ts-ignore
export class LocationOutOfWorldBoundariesError extends Error {
    private constructor();
}

// @ts-ignore
export class NamespaceNameError extends Error {
    private constructor();
    readonly reason: NamespaceNameErrorReason;
}

// @ts-ignore
export class PlaceJigsawError extends Error {
    private constructor();
}

// @ts-ignore
export class RawMessageError extends Error {
    private constructor();
}

// @ts-ignore
export class SpawnRulesInvalidRegistryError extends Error {
    private constructor();
}

// @ts-ignore
export class UnloadedChunksError extends Error {
    private constructor();
}

export const HudElementsCount = 13;
export const HudVisibilityCount = 2;
export const isInternal = true;
export const MoonPhaseCount = 8;
export const TicksPerDay = 24000;
export const TicksPerSecond = 20;
export const system: System;
export const world: World;