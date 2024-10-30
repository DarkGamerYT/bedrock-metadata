// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server",
 *     "version": "1.16.0"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
export enum BlockComponentTypes {
    FluidContainer = "minecraft:fluidContainer",
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

export enum CustomComponentNameErrorReason {
    NoNamespace = 1,
    DisallowedNamespace = 2,
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
    GroundOffset = "minecraft:ground_offset",
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
    suicide = "suicide",
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

export enum EquipmentSlot {
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

export enum InputPermissionCategory {
    Camera = 1,
    Movement = 2,
}

export enum ItemComponentTypes {
    Cooldown = "minecraft:cooldown",
    Durability = "minecraft:durability",
    Enchantable = "minecraft:enchantable",
    Food = "minecraft:food",
}

export enum ItemLockMode {
    inventory = "inventory",
    none = "none",
    slot = "slot",
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

export enum WeatherType {
    Clear = "Clear",
    Rain = "Rain",
    Thunder = "Thunder",
}

export class Block {
    private constructor();
    readonly dimension: Dimension;
    readonly isAir: boolean;
    readonly isLiquid: boolean;
    readonly location: Vector3;
    readonly permutation: BlockPermutation;
    readonly "type": BlockType;
    readonly typeId: string;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    above(steps?: number): Block | undefined;
    below(steps?: number): Block | undefined;
    bottomCenter(): Vector3;
    center(): Vector3;
    east(steps?: number): Block | undefined;
    getComponent(componentId: string): BlockComponent | undefined;
    getItemStack(amount?: number, withData?: boolean): ItemStack | undefined;
    getRedstonePower(): number | undefined;
    getTags(): string[];
    hasTag(tag: string): boolean;
    isValid(): boolean;
    matches(blockName: string, states?: Record<string, boolean | number | string>): boolean;
    north(steps?: number): Block | undefined;
    offset(offset: Vector3): Block | undefined;
    setPermutation(permutation: BlockPermutation): void;
    setType(blockType: BlockType | string): void;
    south(steps?: number): Block | undefined;
    west(steps?: number): Block | undefined;
}

export class BlockComponent extends Component {
    private constructor();
    readonly block: Block;
}

export class BlockComponentEntityFallOnEvent extends BlockEvent {
    private constructor();
    readonly entity?: Entity;
    readonly fallDistance: number;
}

export class BlockComponentOnPlaceEvent extends BlockEvent {
    private constructor();
    readonly previousBlock: BlockPermutation;
}

export class BlockComponentPlayerDestroyEvent extends BlockEvent {
    private constructor();
    readonly destroyedBlockPermutation: BlockPermutation;
    readonly player?: Player;
}

export class BlockComponentPlayerInteractEvent extends BlockEvent {
    private constructor();
    readonly face: Direction;
    readonly faceLocation?: Vector3;
    readonly player?: Player;
}

export class BlockComponentPlayerPlaceBeforeEvent extends BlockEvent {
    private constructor();
    cancel: boolean;
    readonly face: Direction;
    permutationToPlace: BlockPermutation;
    readonly player?: Player;
}

export class BlockComponentRandomTickEvent extends BlockEvent {
    private constructor();
}

export class BlockComponentRegistry {
    private constructor();
    registerCustomComponent(name: string, customComponent: BlockCustomComponent): void;
}

export class BlockComponentStepOffEvent extends BlockEvent {
    private constructor();
    readonly entity?: Entity;
}

export class BlockComponentStepOnEvent extends BlockEvent {
    private constructor();
    readonly entity?: Entity;
}

export class BlockComponentTickEvent extends BlockEvent {
    private constructor();
}

export class BlockEvent {
    private constructor();
    readonly block: Block;
    readonly dimension: Dimension;
}

export class BlockExplodeAfterEvent extends BlockEvent {
    private constructor();
    readonly explodedBlockPermutation: BlockPermutation;
    readonly source?: Entity;
}

export class BlockExplodeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: BlockExplodeAfterEvent) => void): (arg: BlockExplodeAfterEvent) => void;
    unsubscribe(callback: (arg: BlockExplodeAfterEvent) => void): void;
}

export class BlockFluidContainerComponent extends BlockComponent {
    private constructor();
    fillLevel: number;
    fluidColor: RGBA;
    addDye(dye: ItemType): void;
    getFluidType(): FluidType;
    setFluidType(fluidType: FluidType): void;
    setPotion(itemStack: ItemStack): void;
}

export class BlockInventoryComponent extends BlockComponent {
    private constructor();
    readonly container?: Container;
}

export class BlockLocationIterator implements Iterable<Vector3> {
    private constructor();
    [Symbol.iterator](): Iterator<Vector3>;
    next(): IteratorResult<Vector3>;
}

export class BlockPermutation {
    private constructor();
    readonly "type": BlockType;
    getAllStates(): Record<string, boolean | number | string>;
    getItemStack(amount?: number): ItemStack | undefined;
    getState(stateName: string): boolean | number | string | undefined;
    getTags(): string[];
    hasTag(tag: string): boolean;
    matches(blockName: string, states?: Record<string, boolean | number | string>): boolean;
    withState(name: string, value: boolean | number | string): BlockPermutation;
    static resolve(blockName: string, states?: Record<string, boolean | number | string>): BlockPermutation;
}

export class BlockPistonComponent extends BlockComponent {
    private constructor();
    readonly isMoving: boolean;
    readonly state: BlockPistonState;
    getAttachedBlocks(): Block[];
    getAttachedBlocksLocations(): Vector3[];
}

export class BlockRecordPlayerComponent extends BlockComponent {
    private constructor();
    ejectRecord(): void;
    getRecord(): ItemStack | undefined;
    isPlaying(): boolean;
    pauseRecord(): void;
    playRecord(): void;
    setRecord(recordItemType?: ItemType | string, startPlaying?: boolean): void;
}

export class BlockSignComponent extends BlockComponent {
    private constructor();
    readonly isWaxed: boolean;
    getRawText(side?: SignSide): RawText | undefined;
    getText(side?: SignSide): string | undefined;
    getTextDyeColor(side?: SignSide): DyeColor | undefined;
    setText(message: RawMessage | RawText | string, side?: SignSide): void;
    setTextDyeColor(color?: DyeColor, side?: SignSide): void;
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
    getCapacity(): number;
    getMax(): Vector3;
    getMin(): Vector3;
    getSpan(): Vector3;
    isInside(location: Vector3): boolean;
    translate(delta: Vector3): void;
}

export class ButtonPushAfterEvent extends BlockEvent {
    private constructor();
    readonly source: Entity;
}

export class ButtonPushAfterEventSignal extends IButtonPushAfterEventSignal {
    private constructor();
}

export class Camera {
    private constructor();
    clear(): void;
    fade(fadeCameraOptions?: CameraFadeOptions): void;
    setCamera(
        cameraPreset: string,
        setOptions?: 
            | CameraDefaultOptions
            | CameraSetFacingOptions
            | CameraSetLocationOptions
            | CameraSetPosOptions
            | CameraSetRotOptions,
    ): void;
}

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
    readonly typeId: string;
    isValid(): boolean;
}

export class Container {
    private constructor();
    readonly emptySlotsCount: number;
    readonly size: number;
    addItem(itemStack: ItemStack): ItemStack | undefined;
    clearAll(): void;
    getItem(slot: number): ItemStack | undefined;
    getSlot(slot: number): ContainerSlot;
    isValid(): boolean;
    moveItem(fromSlot: number, toSlot: number, toContainer: Container): void;
    setItem(slot: number, itemStack?: ItemStack): void;
    swapItems(slot: number, otherSlot: number, otherContainer: Container): void;
    transferItem(fromSlot: number, toContainer: Container): ItemStack | undefined;
}

export class ContainerSlot {
    private constructor();
    amount: number;
    readonly isStackable: boolean;
    keepOnDeath: boolean;
    lockMode: ItemLockMode;
    readonly maxAmount: number;
    nameTag?: string;
    readonly "type": ItemType;
    readonly typeId: string;
    clearDynamicProperties(): void;
    getCanDestroy(): string[];
    getCanPlaceOn(): string[];
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    getDynamicPropertyIds(): string[];
    getDynamicPropertyTotalByteCount(): number;
    getItem(): ItemStack | undefined;
    getLore(): string[];
    getTags(): string[];
    hasItem(): boolean;
    hasTag(tag: string): boolean;
    isStackableWith(itemStack: ItemStack): boolean;
    isValid(): boolean;
    setCanDestroy(blockIdentifiers?: string[]): void;
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    setItem(itemStack?: ItemStack): void;
    setLore(loreList?: string[]): void;
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
        callback: (arg: DataDrivenEntityTriggerAfterEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg: DataDrivenEntityTriggerAfterEvent) => void;
    unsubscribe(callback: (arg: DataDrivenEntityTriggerAfterEvent) => void): void;
}

export class Dimension {
    private constructor();
    readonly heightRange: minecraftcommon.NumberRange;
    readonly id: string;
    createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): boolean;
    getBlock(location: Vector3): Block | undefined;
    getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    getEntities(options?: EntityQueryOptions): Entity[];
    getEntitiesAtBlockLocation(location: Vector3): Entity[];
    getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[];
    getPlayers(options?: EntityQueryOptions): Player[];
    getTopmostBlock(locationXZ: VectorXZ, minHeight?: number): Block | undefined;
    playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void;
    runCommand(commandString: string): CommandResult;
    runCommandAsync(commandString: string): Promise<CommandResult>;
    setBlockPermutation(location: Vector3, permutation: BlockPermutation): void;
    setBlockType(location: Vector3, blockType: BlockType | string): void;
    setWeather(weatherType: WeatherType, duration?: number): void;
    spawnEntity(identifier: string, location: Vector3): Entity;
    spawnItem(itemStack: ItemStack, location: Vector3): Entity;
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
    readonly amplifier: number;
    readonly displayName: string;
    readonly duration: number;
    readonly typeId: string;
    isValid(): boolean;
}

export class EffectAddAfterEvent {
    private constructor();
    readonly effect: Effect;
    readonly entity: Entity;
}

export class EffectAddAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg: EffectAddAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EffectAddAfterEvent) => void;
    unsubscribe(callback: (arg: EffectAddAfterEvent) => void): void;
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
    subscribe(callback: (arg: EffectAddBeforeEvent) => void): (arg: EffectAddBeforeEvent) => void;
    unsubscribe(callback: (arg: EffectAddBeforeEvent) => void): void;
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
    constructor(enchantmentType: string);
}

export class EnchantmentTypes {
    private constructor();
    static get(enchantmentId: string): EnchantmentType | undefined;
    static getAll(): EnchantmentType[];
}

export class Entity {
    private constructor();
    readonly dimension: Dimension;
    readonly id: string;
    readonly isClimbing: boolean;
    readonly isFalling: boolean;
    readonly isInWater: boolean;
    readonly isOnGround: boolean;
    readonly isSleeping: boolean;
    isSneaking: boolean;
    readonly isSprinting: boolean;
    readonly isSwimming: boolean;
    readonly location: Vector3;
    nameTag: string;
    readonly scoreboardIdentity?: ScoreboardIdentity;
    readonly typeId: string;
    addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): Effect | undefined;
    addTag(tag: string): boolean;
    applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean;
    applyImpulse(vector: Vector3): void;
    applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void;
    clearDynamicProperties(): void;
    clearVelocity(): void;
    extinguishFire(useEffects?: boolean): boolean;
    getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    getComponent(componentId: string): EntityComponent | undefined;
    getComponents(): EntityComponent[];
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    getDynamicPropertyIds(): string[];
    getDynamicPropertyTotalByteCount(): number;
    getEffect(effectType: EffectType | string): Effect | undefined;
    getEffects(): Effect[];
    getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[];
    getHeadLocation(): Vector3;
    getProperty(identifier: string): boolean | number | string | undefined;
    getRotation(): Vector2;
    getTags(): string[];
    getVelocity(): Vector3;
    getViewDirection(): Vector3;
    hasComponent(componentId: string): boolean;
    hasTag(tag: string): boolean;
    isValid(): boolean;
    kill(): boolean;
    matches(options: EntityQueryOptions): boolean;
    playAnimation(animationName: string, options?: PlayAnimationOptions): void;
    remove(): void;
    removeEffect(effectType: EffectType | string): boolean;
    removeTag(tag: string): boolean;
    resetProperty(identifier: string): boolean | number | string;
    runCommand(commandString: string): CommandResult;
    runCommandAsync(commandString: string): Promise<CommandResult>;
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    setOnFire(seconds: number, useEffects?: boolean): boolean;
    setProperty(identifier: string, value: boolean | number | string): void;
    setRotation(rotation: Vector2): void;
    teleport(location: Vector3, teleportOptions?: TeleportOptions): void;
    triggerEvent(eventName: string): void;
    tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean;
}

export class EntityAddRiderComponent extends EntityComponent {
    private constructor();
    readonly entityType: string;
    readonly spawnEvent: string;
}

export class EntityAgeableComponent extends EntityComponent {
    private constructor();
    readonly duration: number;
    readonly growUp: Trigger;
    readonly transformToItem: string;
    getDropItems(): string[];
    getFeedItems(): EntityDefinitionFeedItem[];
}

export class EntityAttributeComponent extends EntityComponent {
    private constructor();
    readonly currentValue: number;
    readonly defaultValue: number;
    readonly effectiveMax: number;
    readonly effectiveMin: number;
    resetToDefaultValue(): void;
    resetToMaxValue(): void;
    resetToMinValue(): void;
    setCurrentValue(value: number): boolean;
}

export class EntityBaseMovementComponent extends EntityComponent {
    private constructor();
    readonly maxTurn: number;
}

export class EntityBreathableComponent extends EntityComponent {
    private constructor();
    readonly breathesAir: boolean;
    readonly breathesLava: boolean;
    readonly breathesSolids: boolean;
    readonly breathesWater: boolean;
    readonly generatesBubbles: boolean;
    readonly inhaleTime: number;
    readonly suffocateTime: number;
    readonly totalSupply: number;
    getBreatheBlocks(): BlockPermutation[];
    getNonBreatheBlocks(): BlockPermutation[];
}

export class EntityCanClimbComponent extends EntityComponent {
    private constructor();
}

export class EntityCanFlyComponent extends EntityComponent {
    private constructor();
}

export class EntityCanPowerJumpComponent extends EntityComponent {
    private constructor();
}

export class EntityColor2Component extends EntityComponent {
    private constructor();
    readonly value: PaletteColor;
}

export class EntityColorComponent extends EntityComponent {
    private constructor();
    value: number;
}

export class EntityComponent extends Component {
    private constructor();
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
        callback: (arg: EntityDieAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityDieAfterEvent) => void;
    unsubscribe(callback: (arg: EntityDieAfterEvent) => void): void;
}

export class EntityEquippableComponent extends EntityComponent {
    private constructor();
    getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined;
    getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot;
    setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean;
}

export class EntityFireImmuneComponent extends EntityComponent {
    private constructor();
}

export class EntityFloatsInLiquidComponent extends EntityComponent {
    private constructor();
}

export class EntityFlyingSpeedComponent extends EntityComponent {
    private constructor();
    value: number;
}

export class EntityFrictionModifierComponent extends EntityComponent {
    private constructor();
    value: number;
}

export class EntityGroundOffsetComponent extends EntityComponent {
    private constructor();
    value: number;
}

export class EntityHealableComponent extends EntityComponent {
    private constructor();
    readonly forceUse: boolean;
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
        callback: (arg: EntityHealthChangedAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHealthChangedAfterEvent) => void;
    unsubscribe(callback: (arg: EntityHealthChangedAfterEvent) => void): void;
}

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
        callback: (arg: EntityHitBlockAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHitBlockAfterEvent) => void;
    unsubscribe(callback: (arg: EntityHitBlockAfterEvent) => void): void;
}

export class EntityHitEntityAfterEvent {
    private constructor();
    readonly damagingEntity: Entity;
    readonly hitEntity: Entity;
}

export class EntityHitEntityAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg: EntityHitEntityAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHitEntityAfterEvent) => void;
    unsubscribe(callback: (arg: EntityHitEntityAfterEvent) => void): void;
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
        callback: (arg: EntityHurtAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHurtAfterEvent) => void;
    unsubscribe(callback: (arg: EntityHurtAfterEvent) => void): void;
}

export class EntityInventoryComponent extends EntityComponent {
    private constructor();
    readonly additionalSlotsPerStrength: number;
    readonly canBeSiphonedFrom: boolean;
    readonly container?: Container;
    readonly containerType: string;
    readonly inventorySize: number;
    readonly "private": boolean;
    readonly restrictToOwner: boolean;
}

export class EntityIsBabyComponent extends EntityComponent {
    private constructor();
}

export class EntityIsChargedComponent extends EntityComponent {
    private constructor();
}

export class EntityIsChestedComponent extends EntityComponent {
    private constructor();
}

export class EntityIsDyeableComponent extends EntityComponent {
    private constructor();
}

export class EntityIsHiddenWhenInvisibleComponent extends EntityComponent {
    private constructor();
}

export class EntityIsIgnitedComponent extends EntityComponent {
    private constructor();
}

export class EntityIsIllagerCaptainComponent extends EntityComponent {
    private constructor();
}

export class EntityIsSaddledComponent extends EntityComponent {
    private constructor();
}

export class EntityIsShakingComponent extends EntityComponent {
    private constructor();
}

export class EntityIsShearedComponent extends EntityComponent {
    private constructor();
}

export class EntityIsStackableComponent extends EntityComponent {
    private constructor();
}

export class EntityIsStunnedComponent extends EntityComponent {
    private constructor();
}

export class EntityIsTamedComponent extends EntityComponent {
    private constructor();
}

export class EntityItemComponent extends EntityComponent {
    private constructor();
    readonly itemStack: ItemStack;
}

export class EntityLavaMovementComponent extends EntityAttributeComponent {
    private constructor();
}

export class EntityLeashableComponent extends EntityComponent {
    private constructor();
    readonly canBeStolen: boolean;
    readonly hardDistance: number;
    readonly isLeashed: boolean;
    readonly leashHolder?: Entity;
    readonly leashHolderEntityId?: string;
    readonly maxDistance: number;
    readonly softDistance: number;
    leashTo(leashHolder: Entity): void;
    unleash(): void;
}

export class EntityLoadAfterEvent {
    private constructor();
    entity: Entity;
}

export class EntityLoadAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: EntityLoadAfterEvent) => void): (arg: EntityLoadAfterEvent) => void;
    unsubscribe(callback: (arg: EntityLoadAfterEvent) => void): void;
}

export class EntityMarkVariantComponent extends EntityComponent {
    private constructor();
    value: number;
}

export class EntityMovementAmphibiousComponent extends EntityBaseMovementComponent {
    private constructor();
}

export class EntityMovementBasicComponent extends EntityBaseMovementComponent {
    private constructor();
}

export class EntityMovementComponent extends EntityAttributeComponent {
    private constructor();
}

export class EntityMovementFlyComponent extends EntityBaseMovementComponent {
    private constructor();
}

export class EntityMovementGenericComponent extends EntityBaseMovementComponent {
    private constructor();
}

export class EntityMovementGlideComponent extends EntityBaseMovementComponent {
    private constructor();
    readonly speedWhenTurning: number;
    readonly startSpeed: number;
}

export class EntityMovementHoverComponent extends EntityBaseMovementComponent {
    private constructor();
}

export class EntityMovementJumpComponent extends EntityBaseMovementComponent {
    private constructor();
}

export class EntityMovementSkipComponent extends EntityBaseMovementComponent {
    private constructor();
}

export class EntityMovementSwayComponent extends EntityBaseMovementComponent {
    private constructor();
    readonly swayAmplitude: number;
    readonly swayFrequency: number;
}

export class EntityNavigationClimbComponent extends EntityNavigationComponent {
    private constructor();
}

export class EntityNavigationComponent extends EntityComponent {
    private constructor();
    readonly avoidDamageBlocks: boolean;
    readonly avoidPortals: boolean;
    readonly avoidSun: boolean;
    readonly avoidWater: boolean;
    readonly canBreach: boolean;
    readonly canBreakDoors: boolean;
    readonly canFloat: boolean;
    readonly canJump: boolean;
    readonly canOpenDoors: boolean;
    readonly canOpenIronDoors: boolean;
    readonly canPassDoors: boolean;
    readonly canPathFromAir: boolean;
    readonly canPathOverLava: boolean;
    readonly canPathOverWater: boolean;
    readonly canSink: boolean;
    readonly canSwim: boolean;
    readonly canWalk: boolean;
    readonly canWalkInLava: boolean;
    readonly isAmphibious: boolean;
}

export class EntityNavigationFloatComponent extends EntityNavigationComponent {
    private constructor();
}

export class EntityNavigationFlyComponent extends EntityNavigationComponent {
    private constructor();
}

export class EntityNavigationGenericComponent extends EntityNavigationComponent {
    private constructor();
}

export class EntityNavigationHoverComponent extends EntityNavigationComponent {
    private constructor();
}

export class EntityNavigationWalkComponent extends EntityNavigationComponent {
    private constructor();
}

export class EntityOnFireComponent extends EntityComponent {
    private constructor();
    readonly onFireTicksRemaining: number;
}

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
    shoot(velocity: Vector3, options?: ProjectileShootOptions): void;
}

export class EntityPushThroughComponent extends EntityComponent {
    private constructor();
    value: number;
}

export class EntityRemoveAfterEvent {
    private constructor();
    readonly removedEntityId: string;
    readonly typeId: string;
}

export class EntityRemoveAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg: EntityRemoveAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityRemoveAfterEvent) => void;
    unsubscribe(callback: (arg: EntityRemoveAfterEvent) => void): void;
}

export class EntityRemoveBeforeEvent {
    private constructor();
    readonly removedEntity: Entity;
}

export class EntityRemoveBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg: EntityRemoveBeforeEvent) => void): (arg: EntityRemoveBeforeEvent) => void;
    unsubscribe(callback: (arg: EntityRemoveBeforeEvent) => void): void;
}

export class EntityRideableComponent extends EntityComponent {
    private constructor();
    readonly controllingSeat: number;
    readonly crouchingSkipInteract: boolean;
    readonly interactText: string;
    readonly passengerMaxWidth: number;
    readonly pullInEntities: boolean;
    readonly riderCanInteract: boolean;
    readonly seatCount: number;
    addRider(rider: Entity): boolean;
    ejectRider(rider: Entity): void;
    ejectRiders(): void;
    getFamilyTypes(): string[];
    getRiders(): Entity[];
    getSeats(): Seat[];
}

export class EntityRidingComponent extends EntityComponent {
    private constructor();
    readonly entityRidingOn: Entity;
}

export class EntityScaleComponent extends EntityComponent {
    private constructor();
    value: number;
}

export class EntitySkinIdComponent extends EntityComponent {
    private constructor();
    value: number;
}

export class EntitySpawnAfterEvent {
    private constructor();
    readonly cause: EntityInitializationCause;
    entity: Entity;
}

export class EntitySpawnAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: EntitySpawnAfterEvent) => void): (arg: EntitySpawnAfterEvent) => void;
    unsubscribe(callback: (arg: EntitySpawnAfterEvent) => void): void;
}

export class EntityStrengthComponent extends EntityComponent {
    private constructor();
    readonly max: number;
    readonly value: number;
}

export class EntityTameableComponent extends EntityComponent {
    private constructor();
    readonly getTameItems: ItemStack[];
    readonly isTamed: boolean;
    readonly probability: number;
    readonly tamedToPlayer?: Player;
    readonly tamedToPlayerId?: string;
    tame(player: Player): boolean;
}

export class EntityTameMountComponent extends EntityComponent {
    private constructor();
    readonly isTamed: boolean;
    readonly isTamedToPlayer: boolean;
    readonly tamedToPlayer?: Player;
    readonly tamedToPlayerId?: string;
    tame(showParticles: boolean): void;
    tameToPlayer(showParticles: boolean, player: Player): boolean;
}

export class EntityType {
    private constructor();
    readonly id: string;
}

export class EntityTypeFamilyComponent extends EntityComponent {
    private constructor();
    getTypeFamilies(): string[];
    hasTypeFamily(typeFamily: string): boolean;
}

export class EntityTypes {
    private constructor();
    static get(identifier: string): EntityType | undefined;
    static getAll(): EntityType[];
}

export class EntityUnderwaterMovementComponent extends EntityAttributeComponent {
    private constructor();
}

export class EntityVariantComponent extends EntityComponent {
    private constructor();
    readonly value: number;
}

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
    subscribe(callback: (arg: ExplosionAfterEvent) => void): (arg: ExplosionAfterEvent) => void;
    unsubscribe(callback: (arg: ExplosionAfterEvent) => void): void;
}

export class ExplosionBeforeEvent extends ExplosionAfterEvent {
    private constructor();
    cancel: boolean;
    setImpactedBlocks(blocks: Block[]): void;
}

export class ExplosionBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg: ExplosionBeforeEvent) => void): (arg: ExplosionBeforeEvent) => void;
    unsubscribe(callback: (arg: ExplosionBeforeEvent) => void): void;
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
    subscribe(callback: (arg: GameRuleChangeAfterEvent) => void): (arg: GameRuleChangeAfterEvent) => void;
    unsubscribe(callback: (arg: GameRuleChangeAfterEvent) => void): void;
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

export class IButtonPushAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: ButtonPushAfterEvent) => void): (arg: ButtonPushAfterEvent) => void;
    unsubscribe(callback: (arg: ButtonPushAfterEvent) => void): void;
}

export class ILeverActionAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: LeverActionAfterEvent) => void): (arg: LeverActionAfterEvent) => void;
    unsubscribe(callback: (arg: LeverActionAfterEvent) => void): void;
}

export class IPlayerJoinAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: PlayerJoinAfterEvent) => void): (arg: PlayerJoinAfterEvent) => void;
    unsubscribe(callback: (arg: PlayerJoinAfterEvent) => void): void;
}

export class IPlayerLeaveAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: PlayerLeaveAfterEvent) => void): (arg: PlayerLeaveAfterEvent) => void;
    unsubscribe(callback: (arg: PlayerLeaveAfterEvent) => void): void;
}

export class IPlayerSpawnAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: PlayerSpawnAfterEvent) => void): (arg: PlayerSpawnAfterEvent) => void;
    unsubscribe(callback: (arg: PlayerSpawnAfterEvent) => void): void;
}

export class ItemCompleteUseAfterEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemCompleteUseAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemCompleteUseAfterEvent) => void): (arg: ItemCompleteUseAfterEvent) => void;
    unsubscribe(callback: (arg: ItemCompleteUseAfterEvent) => void): void;
}

export class ItemCompleteUseEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Player;
}

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
    registerCustomComponent(name: string, itemCustomComponent: ItemCustomComponent): void;
}

export class ItemComponentUseEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly source: Player;
}

export class ItemComponentUseOnEvent extends ItemUseOnEvent {
    private constructor();
    readonly source: Entity;
    readonly usedOnBlockPermutation: BlockPermutation;
}

export class ItemCooldownComponent extends ItemComponent {
    private constructor();
    readonly cooldownCategory: string;
    readonly cooldownTicks: number;
    getCooldownTicksRemaining(player: Player): number;
    isCooldownCategory(cooldownCategory: string): boolean;
    startCooldown(player: Player): void;
}

export class ItemDurabilityComponent extends ItemComponent {
    private constructor();
    damage: number;
    readonly maxDurability: number;
    getDamageChance(unbreakingEnchantmentLevel?: number): number;
    getDamageChanceRange(): minecraftcommon.NumberRange;
}

export class ItemEnchantableComponent extends ItemComponent {
    private constructor();
    readonly slots: EnchantmentSlot[];
    addEnchantment(enchantment: Enchantment): void;
    addEnchantments(enchantments: Enchantment[]): void;
    canAddEnchantment(enchantment: Enchantment): boolean;
    getEnchantment(enchantmentType: EnchantmentType | string): Enchantment | undefined;
    getEnchantments(): Enchantment[];
    hasEnchantment(enchantmentType: EnchantmentType | string): boolean;
    removeAllEnchantments(): void;
    removeEnchantment(enchantmentType: EnchantmentType | string): void;
}

export class ItemFoodComponent extends ItemComponent {
    private constructor();
    readonly canAlwaysEat: boolean;
    readonly nutrition: number;
    readonly saturationModifier: number;
    readonly usingConvertsTo: string;
}

export class ItemReleaseUseAfterEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemReleaseUseAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemReleaseUseAfterEvent) => void): (arg: ItemReleaseUseAfterEvent) => void;
    unsubscribe(callback: (arg: ItemReleaseUseAfterEvent) => void): void;
}

export class ItemStack {
    amount: number;
    readonly isStackable: boolean;
    keepOnDeath: boolean;
    lockMode: ItemLockMode;
    readonly maxAmount: number;
    nameTag?: string;
    readonly "type": ItemType;
    readonly typeId: string;
    constructor(itemType: ItemType | string, amount?: number);
    clearDynamicProperties(): void;
    clone(): ItemStack;
    getCanDestroy(): string[];
    getCanPlaceOn(): string[];
    getComponent(componentId: string): ItemComponent | undefined;
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
    setCanDestroy(blockIdentifiers?: string[]): void;
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    setLore(loreList?: string[]): void;
}

export class ItemStartUseAfterEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemStartUseAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemStartUseAfterEvent) => void): (arg: ItemStartUseAfterEvent) => void;
    unsubscribe(callback: (arg: ItemStartUseAfterEvent) => void): void;
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
    subscribe(callback: (arg: ItemStartUseOnAfterEvent) => void): (arg: ItemStartUseOnAfterEvent) => void;
    unsubscribe(callback: (arg: ItemStartUseOnAfterEvent) => void): void;
}

export class ItemStopUseAfterEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemStopUseAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemStopUseAfterEvent) => void): (arg: ItemStopUseAfterEvent) => void;
    unsubscribe(callback: (arg: ItemStopUseAfterEvent) => void): void;
}

export class ItemStopUseOnAfterEvent {
    private constructor();
    readonly block: Block;
    readonly itemStack?: ItemStack;
    readonly source: Player;
}

export class ItemStopUseOnAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemStopUseOnAfterEvent) => void): (arg: ItemStopUseOnAfterEvent) => void;
    unsubscribe(callback: (arg: ItemStopUseOnAfterEvent) => void): void;
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
    subscribe(callback: (arg: ItemUseAfterEvent) => void): (arg: ItemUseAfterEvent) => void;
    unsubscribe(callback: (arg: ItemUseAfterEvent) => void): void;
}

export class ItemUseBeforeEvent extends ItemUseAfterEvent {
    private constructor();
    cancel: boolean;
}

export class ItemUseBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemUseBeforeEvent) => void): (arg: ItemUseBeforeEvent) => void;
    unsubscribe(callback: (arg: ItemUseBeforeEvent) => void): void;
}

export class ItemUseOnAfterEvent {
    private constructor();
    readonly block: Block;
    readonly blockFace: Direction;
    readonly faceLocation: Vector3;
    readonly itemStack: ItemStack;
    readonly source: Player;
}

export class ItemUseOnAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemUseOnAfterEvent) => void): (arg: ItemUseOnAfterEvent) => void;
    unsubscribe(callback: (arg: ItemUseOnAfterEvent) => void): void;
}

export class ItemUseOnBeforeEvent extends ItemUseOnAfterEvent {
    private constructor();
    cancel: boolean;
}

export class ItemUseOnBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemUseOnBeforeEvent) => void): (arg: ItemUseOnBeforeEvent) => void;
    unsubscribe(callback: (arg: ItemUseOnBeforeEvent) => void): void;
}

export class ItemUseOnEvent {
    private constructor();
    readonly block: Block;
    readonly blockFace: Direction;
    readonly faceLocation: Vector3;
    readonly itemStack: ItemStack;
}

export class LeverActionAfterEvent extends BlockEvent {
    private constructor();
    readonly isPowered: boolean;
    readonly player: Player;
}

export class LeverActionAfterEventSignal extends ILeverActionAfterEventSignal {
    private constructor();
}

export class ListBlockVolume extends BlockVolumeBase {
    constructor(locations: Vector3[]);
    add(locations: Vector3[]): void;
    remove(locations: Vector3[]): void;
}

export class MinecraftDimensionTypes {
    private constructor();
}

export class MolangVariableMap {
    setColorRGB(variableName: string, color: RGB): void;
    setColorRGBA(variableName: string, color: RGBA): void;
    setFloat(variableName: string, number: number): void;
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): void;
    setVector3(variableName: string, vector: Vector3): void;
}

export class PistonActivateAfterEvent extends BlockEvent {
    private constructor();
    readonly isExpanding: boolean;
    readonly piston: BlockPistonComponent;
}

export class PistonActivateAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: PistonActivateAfterEvent) => void): (arg: PistonActivateAfterEvent) => void;
    unsubscribe(callback: (arg: PistonActivateAfterEvent) => void): void;
}

export class Player extends Entity {
    private constructor();
    readonly camera: Camera;
    readonly clientSystemInfo: ClientSystemInfo;
    readonly inputPermissions: PlayerInputPermissions;
    readonly isEmoting: boolean;
    readonly isFlying: boolean;
    readonly isGliding: boolean;
    readonly isJumping: boolean;
    readonly level: number;
    readonly name: string;
    readonly onScreenDisplay: ScreenDisplay;
    selectedSlotIndex: number;
    readonly totalXpNeededForNextLevel: number;
    readonly xpEarnedAtCurrentLevel: number;
    addExperience(amount: number): number;
    addLevels(amount: number): number;
    getGameMode(): GameMode;
    getItemCooldown(cooldownCategory: string): number;
    getSpawnPoint(): DimensionLocation | undefined;
    getTotalXp(): number;
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    playSound(soundId: string, soundOptions?: PlayerSoundOptions): void;
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    resetLevel(): void;
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    setGameMode(gameMode?: GameMode): void;
    setSpawnPoint(spawnPoint?: DimensionLocation): void;
    startItemCooldown(cooldownCategory: string, tickDuration: number): void;
    stopMusic(): void;
}

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
        callback: (arg: PlayerBreakBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg: PlayerBreakBlockAfterEvent) => void;
    unsubscribe(callback: (arg: PlayerBreakBlockAfterEvent) => void): void;
}

export class PlayerBreakBlockBeforeEvent extends BlockEvent {
    private constructor();
    cancel: boolean;
    itemStack?: ItemStack;
    readonly player: Player;
}

export class PlayerBreakBlockBeforeEventSignal {
    private constructor();
    subscribe(
        callback: (arg: PlayerBreakBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg: PlayerBreakBlockBeforeEvent) => void;
    unsubscribe(callback: (arg: PlayerBreakBlockBeforeEvent) => void): void;
}

export class PlayerCursorInventoryComponent extends EntityComponent {
    private constructor();
    readonly item?: ItemStack;
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
    subscribe(callback: (arg: PlayerDimensionChangeAfterEvent) => void): (arg: PlayerDimensionChangeAfterEvent) => void;
    unsubscribe(callback: (arg: PlayerDimensionChangeAfterEvent) => void): void;
}

export class PlayerEmoteAfterEvent {
    private constructor();
    readonly personaPieceId: string;
    readonly player: Player;
}

export class PlayerEmoteAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: PlayerEmoteAfterEvent) => void): (arg: PlayerEmoteAfterEvent) => void;
    unsubscribe(callback: (arg: PlayerEmoteAfterEvent) => void): void;
}

export class PlayerGameModeChangeAfterEvent {
    private constructor();
    readonly fromGameMode: GameMode;
    readonly player: Player;
    readonly toGameMode: GameMode;
}

export class PlayerGameModeChangeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: PlayerGameModeChangeAfterEvent) => void): (arg: PlayerGameModeChangeAfterEvent) => void;
    unsubscribe(callback: (arg: PlayerGameModeChangeAfterEvent) => void): void;
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
    subscribe(callback: (arg: PlayerGameModeChangeBeforeEvent) => void): (arg: PlayerGameModeChangeBeforeEvent) => void;
    unsubscribe(callback: (arg: PlayerGameModeChangeBeforeEvent) => void): void;
}

export class PlayerInputPermissionCategoryChangeAfterEvent {
    private constructor();
    readonly category: InputPermissionCategory;
    readonly enabled: boolean;
    readonly player: Player;
}

export class PlayerInputPermissionCategoryChangeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: PlayerInputPermissionCategoryChangeAfterEvent) => void): (arg: PlayerInputPermissionCategoryChangeAfterEvent) => void;
    unsubscribe(callback: (arg: PlayerInputPermissionCategoryChangeAfterEvent) => void): void;
}

export class PlayerInputPermissions {
    private constructor();
    cameraEnabled: boolean;
    movementEnabled: boolean;
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
    subscribe(callback: (arg: PlayerInteractWithBlockAfterEvent) => void): (arg: PlayerInteractWithBlockAfterEvent) => void;
    unsubscribe(callback: (arg: PlayerInteractWithBlockAfterEvent) => void): void;
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
    subscribe(callback: (arg: PlayerInteractWithBlockBeforeEvent) => void): (arg: PlayerInteractWithBlockBeforeEvent) => void;
    unsubscribe(callback: (arg: PlayerInteractWithBlockBeforeEvent) => void): void;
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
    subscribe(callback: (arg: PlayerInteractWithEntityAfterEvent) => void): (arg: PlayerInteractWithEntityAfterEvent) => void;
    unsubscribe(callback: (arg: PlayerInteractWithEntityAfterEvent) => void): void;
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
    subscribe(callback: (arg: PlayerInteractWithEntityBeforeEvent) => void): (arg: PlayerInteractWithEntityBeforeEvent) => void;
    unsubscribe(callback: (arg: PlayerInteractWithEntityBeforeEvent) => void): void;
}

export class PlayerJoinAfterEvent {
    private constructor();
    readonly playerId: string;
    readonly playerName: string;
}

export class PlayerJoinAfterEventSignal extends IPlayerJoinAfterEventSignal {
    private constructor();
}

export class PlayerLeaveAfterEvent {
    private constructor();
    readonly playerId: string;
    readonly playerName: string;
}

export class PlayerLeaveAfterEventSignal extends IPlayerLeaveAfterEventSignal {
    private constructor();
}

export class PlayerLeaveBeforeEvent {
    private constructor();
    readonly player: Player;
}

export class PlayerLeaveBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg: PlayerLeaveBeforeEvent) => void): (arg: PlayerLeaveBeforeEvent) => void;
    unsubscribe(callback: (arg: PlayerLeaveBeforeEvent) => void): void;
}

export class PlayerPlaceBlockAfterEvent extends BlockEvent {
    private constructor();
    readonly player: Player;
}

export class PlayerPlaceBlockAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg: PlayerPlaceBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg: PlayerPlaceBlockAfterEvent) => void;
    unsubscribe(callback: (arg: PlayerPlaceBlockAfterEvent) => void): void;
}

export class PlayerSpawnAfterEvent {
    private constructor();
    initialSpawn: boolean;
    player: Player;
}

export class PlayerSpawnAfterEventSignal extends IPlayerSpawnAfterEventSignal {
    private constructor();
}

export class PressurePlatePopAfterEvent extends BlockEvent {
    private constructor();
    readonly previousRedstonePower: number;
    readonly redstonePower: number;
}

export class PressurePlatePopAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: PressurePlatePopAfterEvent) => void): (arg: PressurePlatePopAfterEvent) => void;
    unsubscribe(callback: (arg: PressurePlatePopAfterEvent) => void): void;
}

export class PressurePlatePushAfterEvent extends BlockEvent {
    private constructor();
    readonly previousRedstonePower: number;
    readonly redstonePower: number;
    readonly source: Entity;
}

export class PressurePlatePushAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: PressurePlatePushAfterEvent) => void): (arg: PressurePlatePushAfterEvent) => void;
    unsubscribe(callback: (arg: PressurePlatePushAfterEvent) => void): void;
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
    subscribe(callback: (arg: ProjectileHitBlockAfterEvent) => void): (arg: ProjectileHitBlockAfterEvent) => void;
    unsubscribe(callback: (arg: ProjectileHitBlockAfterEvent) => void): void;
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
    subscribe(callback: (arg: ProjectileHitEntityAfterEvent) => void): (arg: ProjectileHitEntityAfterEvent) => void;
    unsubscribe(callback: (arg: ProjectileHitEntityAfterEvent) => void): void;
}

export class Scoreboard {
    private constructor();
    addObjective(objectiveId: string, displayName?: string): ScoreboardObjective;
    clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective | undefined;
    getObjective(objectiveId: string): ScoreboardObjective | undefined;
    getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions | undefined;
    getObjectives(): ScoreboardObjective[];
    getParticipants(): ScoreboardIdentity[];
    removeObjective(objectiveId: ScoreboardObjective | string): boolean;
    setObjectiveAtDisplaySlot(
        displaySlotId: DisplaySlotId,
        objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,
    ): ScoreboardObjective | undefined;
}

export class ScoreboardIdentity {
    private constructor();
    readonly displayName: string;
    readonly id: number;
    readonly "type": ScoreboardIdentityType;
    getEntity(): Entity | undefined;
    isValid(): boolean;
}

export class ScoreboardObjective {
    private constructor();
    readonly displayName: string;
    readonly id: string;
    addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number;
    getParticipants(): ScoreboardIdentity[];
    getScore(participant: Entity | ScoreboardIdentity | string): number | undefined;
    getScores(): ScoreboardScoreInfo[];
    hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    isValid(): boolean;
    removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    setScore(participant: Entity | ScoreboardIdentity | string, score: number): void;
}

export class ScoreboardScoreInfo {
    private constructor();
    readonly participant: ScoreboardIdentity;
    readonly score: number;
}

export class ScreenDisplay {
    private constructor();
    getHiddenHudElements(): HudElement[];
    hideAllExcept(hudElements?: HudElement[]): void;
    isForcedHidden(hudElement: HudElement): boolean;
    isValid(): boolean;
    resetHudElements(): void;
    setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;
    setHudVisibility(visible: HudVisibility, hudElements?: HudElement[]): void;
    setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void;
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
        callback: (arg: ScriptEventCommandMessageAfterEvent) => void,
        options?: ScriptEventMessageFilterOptions,
    ): (arg: ScriptEventCommandMessageAfterEvent) => void;
    unsubscribe(callback: (arg: ScriptEventCommandMessageAfterEvent) => void): void;
}

export class Seat {
    private constructor();
    readonly lockRiderRotation: number;
    readonly maxRiderCount: number;
    readonly minRiderCount: number;
    readonly position: Vector3;
    readonly seatRotation: number;
}

export class Structure {
    private constructor();
    readonly id: string;
    readonly size: Vector3;
    getBlockPermutation(location: Vector3): BlockPermutation | undefined;
    getIsWaterlogged(location: Vector3): boolean;
    isValid(): boolean;
    saveAs(identifier: string, saveMode?: StructureSaveMode): Structure;
    saveToWorld(): void;
    setBlockPermutation(location: Vector3, blockPermutation?: BlockPermutation): void;
}

export class StructureManager {
    private constructor();
    createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): Structure;
    createFromWorld(
        identifier: string,
        dimension: Dimension,
        from: Vector3,
        to: Vector3,
        options?: StructureCreateOptions,
    ): Structure;
    delete(structure: string | Structure): boolean;
    get(identifier: string): Structure | undefined;
    getWorldStructureIds(): string[];
    place(structure: string | Structure, dimension: Dimension, location: Vector3, options?: StructurePlaceOptions): void;
}

export class System {
    private constructor();
    readonly afterEvents: SystemAfterEvents;
    readonly currentTick: number;
    readonly serverSystemInfo: SystemInfo;
    clearJob(jobId: number): void;
    clearRun(runId: number): void;
    run(callback: () => void): number;
    runInterval(callback: () => void, tickInterval?: number): number;
    runJob(generator: Generator<void, void, void>): number;
    runTimeout(callback: () => void, tickDelay?: number): number;
    waitTicks(ticks: number): Promise<void>;
}

export class SystemAfterEvents {
    private constructor();
    readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;
}

export class SystemInfo {
    private constructor();
    readonly memoryTier: MemoryTier;
}

export class TargetBlockHitAfterEvent extends BlockEvent {
    private constructor();
    readonly hitVector: Vector3;
    readonly previousRedstonePower: number;
    readonly redstonePower: number;
    readonly source: Entity;
}

export class TargetBlockHitAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: TargetBlockHitAfterEvent) => void): (arg: TargetBlockHitAfterEvent) => void;
    unsubscribe(callback: (arg: TargetBlockHitAfterEvent) => void): void;
}

export class Trigger {
    eventName: string;
    constructor(eventName: string);
}

export class TripWireTripAfterEvent extends BlockEvent {
    private constructor();
    readonly isPowered: boolean;
    readonly sources: Entity[];
}

export class TripWireTripAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: TripWireTripAfterEvent) => void): (arg: TripWireTripAfterEvent) => void;
    unsubscribe(callback: (arg: TripWireTripAfterEvent) => void): void;
}

export class WeatherChangeAfterEvent {
    private constructor();
    readonly dimension: string;
    readonly newWeather: WeatherType;
    readonly previousWeather: WeatherType;
}

export class WeatherChangeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: WeatherChangeAfterEvent) => void): (arg: WeatherChangeAfterEvent) => void;
    unsubscribe(callback: (arg: WeatherChangeAfterEvent) => void): void;
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
    subscribe(callback: (arg: WeatherChangeBeforeEvent) => void): (arg: WeatherChangeBeforeEvent) => void;
    unsubscribe(callback: (arg: WeatherChangeBeforeEvent) => void): void;
}

export class World {
    private constructor();
    readonly afterEvents: WorldAfterEvents;
    readonly beforeEvents: WorldBeforeEvents;
    readonly gameRules: GameRules;
    readonly isHardcore: boolean;
    readonly scoreboard: Scoreboard;
    readonly structureManager: StructureManager;
    clearDynamicProperties(): void;
    getAbsoluteTime(): number;
    getAllPlayers(): Player[];
    getDay(): number;
    getDefaultSpawnLocation(): Vector3;
    getDimension(dimensionId: string): Dimension;
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    getDynamicPropertyIds(): string[];
    getDynamicPropertyTotalByteCount(): number;
    getEntity(id: string): Entity | undefined;
    getMoonPhase(): MoonPhase;
    getPlayers(options?: EntityQueryOptions): Player[];
    getTimeOfDay(): number;
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void;
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    setAbsoluteTime(absoluteTime: number): void;
    setDefaultSpawnLocation(spawnLocation: Vector3): void;
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    setTimeOfDay(timeOfDay: number | TimeOfDay): void;
    stopMusic(): void;
}

export class WorldAfterEvents {
    private constructor();
    readonly blockExplode: BlockExplodeAfterEventSignal;
    readonly buttonPush: ButtonPushAfterEventSignal;
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
    readonly itemUseOn: ItemUseOnAfterEventSignal;
    readonly leverAction: LeverActionAfterEventSignal;
    readonly pistonActivate: PistonActivateAfterEventSignal;
    readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal;
    readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal;
    readonly playerEmote: PlayerEmoteAfterEventSignal;
    readonly playerGameModeChange: PlayerGameModeChangeAfterEventSignal;
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
    readonly worldInitialize: WorldInitializeAfterEventSignal;
}

export class WorldBeforeEvents {
    private constructor();
    readonly effectAdd: EffectAddBeforeEventSignal;
    readonly entityRemove: EntityRemoveBeforeEventSignal;
    readonly explosion: ExplosionBeforeEventSignal;
    readonly itemUse: ItemUseBeforeEventSignal;
    readonly itemUseOn: ItemUseOnBeforeEventSignal;
    readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal;
    readonly playerGameModeChange: PlayerGameModeChangeBeforeEventSignal;
    readonly playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal;
    readonly playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal;
    readonly playerLeave: PlayerLeaveBeforeEventSignal;
    readonly weatherChange: WeatherChangeBeforeEventSignal;
    readonly worldInitialize: WorldInitializeBeforeEventSignal;
}

export class WorldInitializeAfterEvent {
    private constructor();
}

export class WorldInitializeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: WorldInitializeAfterEvent) => void): (arg: WorldInitializeAfterEvent) => void;
    unsubscribe(callback: (arg: WorldInitializeAfterEvent) => void): void;
}

export class WorldInitializeBeforeEvent {
    private constructor();
    readonly blockComponentRegistry: BlockComponentRegistry;
    readonly itemComponentRegistry: ItemComponentRegistry;
}

export class WorldInitializeBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg: WorldInitializeBeforeEvent) => void): (arg: WorldInitializeBeforeEvent) => void;
    unsubscribe(callback: (arg: WorldInitializeBeforeEvent) => void): void;
}

export interface BlockCustomComponent {
    beforeOnPlayerPlace?: (arg: BlockComponentPlayerPlaceBeforeEvent) => void;
    onEntityFallOn?: (arg: BlockComponentEntityFallOnEvent) => void;
    onPlace?: (arg: BlockComponentOnPlaceEvent) => void;
    onPlayerDestroy?: (arg: BlockComponentPlayerDestroyEvent) => void;
    onPlayerInteract?: (arg: BlockComponentPlayerInteractEvent) => void;
    onRandomTick?: (arg: BlockComponentRandomTickEvent) => void;
    onStepOff?: (arg: BlockComponentStepOffEvent) => void;
    onStepOn?: (arg: BlockComponentStepOnEvent) => void;
    onTick?: (arg: BlockComponentTickEvent) => void;
}

export interface BlockEventOptions {
    blockTypes?: string[];
    permutations?: BlockPermutation[];
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

export interface DefinitionModifier {
    addedComponentGroups: string[];
    removedComponentGroups: string[];
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

export interface ItemCustomComponent {
    onBeforeDurabilityDamage?: (arg: ItemComponentBeforeDurabilityDamageEvent) => void;
    onCompleteUse?: (arg: ItemComponentCompleteUseEvent) => void;
    onConsume?: (arg: ItemComponentConsumeEvent) => void;
    onHitEntity?: (arg: ItemComponentHitEntityEvent) => void;
    onMineBlock?: (arg: ItemComponentMineBlockEvent) => void;
    onUse?: (arg: ItemComponentUseEvent) => void;
    onUseOn?: (arg: ItemComponentUseOnEvent) => void;
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

export interface PlayerSoundOptions {
    location?: Vector3;
    pitch?: number;
    volume?: number;
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

export class BlockCustomComponentAlreadyRegisteredError {
    private constructor();
}

export class BlockCustomComponentReloadNewComponentError {
    private constructor();
}

export class BlockCustomComponentReloadNewEventError {
    private constructor();
}

export class BlockCustomComponentReloadVersionError {
    private constructor();
}

export class CommandError {
    private constructor();
}

export class CustomComponentInvalidRegistryError {
    private constructor();
}

export class CustomComponentNameError {
    private constructor();
    readonly reason: CustomComponentNameErrorReason;
}

export class EnchantmentLevelOutOfBoundsError {
    private constructor();
}

export class EnchantmentTypeNotCompatibleError {
    private constructor();
}

export class EnchantmentTypeUnknownIdError {
    private constructor();
}

export class InvalidContainerSlotError {
    private constructor();
}

export class InvalidIteratorError {
    private constructor();
}

export class InvalidStructureError {
    private constructor();
}

export class ItemCustomComponentAlreadyRegisteredError {
    private constructor();
}

export class ItemCustomComponentReloadNewComponentError {
    private constructor();
}

export class ItemCustomComponentReloadNewEventError {
    private constructor();
}

export class ItemCustomComponentReloadVersionError {
    private constructor();
}

export class LocationInUnloadedChunkError {
    private constructor();
}

export class LocationOutOfWorldBoundariesError {
    private constructor();
}

export const HudElementsCount = 13;
export const HudVisibilityCount = 2;
export const MoonPhaseCount = 8;
export const TicksPerSecond = 20;
export const system: System;
export const world: World;