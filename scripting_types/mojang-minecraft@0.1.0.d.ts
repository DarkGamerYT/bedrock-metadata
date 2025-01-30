// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "mojang-minecraft",
 *     "version": "0.1.0"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
export enum Direction {
    down = 0,
    up = 1,
    north = 2,
    south = 3,
    west = 4,
    east = 5,
}

export enum EntityDamageCause {
    anvil = "anvil",
    blockExplosion = "block_explosion",
    campfire = "campfire",
    charging = "charging",
    contact = "contact",
    drowning = "drowning",
    entityAttack = "entity_attack",
    entityExplosion = "entity_explosion",
    fall = "fall",
    fallingBlock = "falling_block",
    fire = "fire",
    fireTick = "fire_tick",
    fireworks = "fireworks",
    flyIntoWall = "fly_into_wall",
    freezing = "freezing",
    lava = "lava",
    lightning = "lightning",
    maceSmash = "mace_smash",
    magic = "magic",
    magma = "magma",
    none = "none",
    override = "override",
    piston = "piston",
    projectile = "projectile",
    ramAttack = "ram_attack",
    selfDestruct = "self_destruct",
    sonicBoom = "sonic_boom",
    soulCampfire = "soul_campfire",
    stalactite = "stalactite",
    stalagmite = "stalagmite",
    starve = "starve",
    suffocation = "suffocation",
    temperature = "temperature",
    thorns = "thorns",
    void = "void",
    wither = "wither",
}

export enum GameMode {
    survival = 0,
    creative = 1,
    adventure = 2,
    spectator = 6,
}

export enum ScoreboardIdentityType {
    player = 1,
    entity = 2,
    fakePlayer = 3,
}

export class BeforeChatEvent extends ChatEvent {
    private constructor();
    cancel: boolean;
    targets: Player[];
}

export class BeforeChatEventSignal {
    private constructor();
    subscribe(callback: (arg: BeforeChatEvent) => void): (arg: BeforeChatEvent) => void;
    unsubscribe(callback: (arg: BeforeChatEvent) => void): void;
}

export class BeforeItemUseEvent extends ItemUseEvent {
    private constructor();
    cancel: boolean;
}

export class BeforeItemUseEventSignal {
    private constructor();
    subscribe(callback: (arg: BeforeItemUseEvent) => void): (arg: BeforeItemUseEvent) => void;
    unsubscribe(callback: (arg: BeforeItemUseEvent) => void): void;
}

export class BeforeItemUseOnEvent extends ItemUseOnEvent {
    private constructor();
    cancel: boolean;
}

export class BeforeItemUseOnEventSignal {
    private constructor();
    subscribe(callback: (arg: BeforeItemUseOnEvent) => void): (arg: BeforeItemUseOnEvent) => void;
    unsubscribe(callback: (arg: BeforeItemUseOnEvent) => void): void;
}

export class Block {
    private constructor();
    readonly dimension: Dimension;
    readonly id: string;
    readonly isEmpty: boolean;
    readonly location: BlockLocation;
    readonly permutation: BlockPermutation;
    readonly "type": BlockType;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    getComponent(componentName: string): BlockComponent | undefined;
    getTags(): string[];
    hasTag(tag: string): boolean;
    setPermutation(permutation: BlockPermutation): void;
    setType(blockType: BlockType): void;
}

export class BlockAreaSize {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number);
    equals(other: BlockAreaSize): boolean;
}

export class BlockComponent extends Component {
    private constructor();
    readonly location: BlockLocation;
}

export class BlockEvent {
    private constructor();
    readonly block: Block;
    readonly dimension: Dimension;
}

export class BlockInventoryComponent extends BlockComponent {
    private constructor();
    readonly container?: BlockInventoryComponentContainer;
}

export class BlockInventoryComponentContainer {
    private constructor();
    readonly emptySlotsCount: number;
    readonly size: number;
    addItem(itemStack: ItemStack): void;
    getItem(slot: number): ItemStack | undefined;
    setItem(slot: number, itemStack: ItemStack): void;
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
}

export class BlockLavaContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
}

export class BlockLiquidContainerComponent extends BlockComponent {
    private constructor();
    fillLevel: number;
}

export class BlockLocation {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number);
    above(): BlockLocation;
    blocksBetween(other: BlockLocation): BlockLocation[];
    equals(other: BlockLocation): boolean;
    offset(x: number, y: number, z: number): BlockLocation;
}

export class BlockPermutation {
    private constructor();
    readonly "type": BlockType;
    getAllProperties(): IBlockProperty[];
    getProperty(propertyName: string): IBlockProperty | undefined;
    getTags(): string[];
    hasTag(tag: string): boolean;
}

export class BlockPistonComponent extends BlockComponent {
    private constructor();
    readonly attachedBlocks: BlockLocation[];
    readonly isExpanded: boolean;
    readonly isExpanding: boolean;
    readonly isMoving: boolean;
    readonly isRetracted: boolean;
    readonly isRetracting: boolean;
}

export class BlockPotionContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    setPotionType(item: ItemStack): void;
}

export class BlockRaycastOptions {
    includeLiquidBlocks?: boolean;
    includePassableBlocks?: boolean;
    maxDistance?: number;
}

export class BlockRecordPlayerComponent {
    private constructor();
    clearRecord(): void;
    isPlaying(): boolean;
    setRecord(recordItemType: ItemType): void;
}

export class BlockSnowContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
}

export class BlockType {
    private constructor();
    readonly id: string;
    createDefaultBlockPermutation(): BlockPermutation;
}

export class BlockWaterContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    addDye(itemType: ItemType): void;
}

export class BoolBlockProperty extends IBlockProperty {
    private constructor();
    readonly validValues: boolean[];
    value: boolean;
}

export class ChatEvent {
    private constructor();
    message: string;
    sender: Player;
    sendToTargets: boolean;
    targets: Player[];
}

export class Color {
    alpha: number;
    blue: number;
    green: number;
    red: number;
    constructor(red: number, green: number, blue: number, alpha: number);
}

export class Component {
    private constructor();
    readonly id: string;
}

export class Container {
    private constructor();
    readonly emptySlotsCount: number;
    readonly size: number;
    addItem(itemStack: ItemStack): void;
    getItem(slot: number): ItemStack | undefined;
    setItem(slot: number, itemStack: ItemStack): void;
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
}

export class DataDrivenEntityTriggerEvent {
    private constructor();
    readonly entity: Entity;
    readonly id: string;
    readonly modifiers: DefinitionModifier[];
}

export class DataDrivenEntityTriggerEventSignal {
    private constructor();
    subscribe(
        callback: (arg: DataDrivenEntityTriggerEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg: DataDrivenEntityTriggerEvent) => void;
    unsubscribe(callback: (arg: DataDrivenEntityTriggerEvent) => void): void;
}

export class DefinitionModifier {
    readonly componentGroupsToAdd: string[];
    readonly componentGroupsToRemove: string[];
    triggers: Trigger[];
}

export class Dimension {
    private constructor();
    readonly id: string;
    createExplosion(location: Location, radius: number, explosionOptions: ExplosionOptions): void;
    getBlock(location: BlockLocation): Block;
    getBlockFromRay(location: Location, direction: Vector, options?: BlockRaycastOptions): Block | undefined;
    getEntities(options?: EntityQueryOptions): EntityIterator;
    getEntitiesAtBlockLocation(location: BlockLocation): Entity[];
    getEntitiesFromRay(location: Location, direction: Vector, options?: EntityRaycastOptions): Entity[];
    getPlayers(options?: EntityQueryOptions): PlayerIterator;
    isEmpty(location: BlockLocation): boolean;
    runCommand(commandString: string): any;
    spawnEntity(identifier: string, location: BlockLocation | Location): Entity;
    spawnItem(item: ItemStack, location: BlockLocation | Location): Entity;
    spawnParticle(effectName: string, location: Location, molangVariables: MolangVariableMap): void;
}

export class DynamicPropertiesDefinition {
    defineBoolean(identifier: string, defaultValue?: boolean): DynamicPropertiesDefinition;
    defineNumber(identifier: string, defaultValue?: number): DynamicPropertiesDefinition;
    defineString(identifier: string, maxLength: number, defaultValue?: string): DynamicPropertiesDefinition;
}

export class Effect {
    private constructor();
    readonly amplifier: number;
    readonly displayName: string;
    readonly duration: number;
}

export class EffectType {
    private constructor();
    getName(): string;
}

export class Entity {
    private constructor();
    readonly dimension: Dimension;
    readonly headLocation: Location;
    readonly id: string;
    isSneaking: boolean;
    readonly location: Location;
    nameTag: string;
    readonly rotation: XYRotation;
    target: Entity;
    readonly velocity: Vector;
    readonly viewVector: Vector;
    addEffect(effectType: EffectType, duration: number, amplifier?: number, showParticles?: boolean): void;
    addTag(tag: string): boolean;
    getBlockFromViewVector(options?: BlockRaycastOptions): Block | undefined;
    getComponent(componentId: string): IEntityComponent | undefined;
    getComponents(): IEntityComponent[];
    getDynamicProperty(identifier: string): boolean | number | Location | string | undefined;
    getEffect(effectType: EffectType): Effect | undefined;
    getEntitiesFromViewVector(options?: EntityRaycastOptions): Entity[];
    getTags(): string[];
    hasComponent(componentId: string): boolean;
    hasTag(tag: string): boolean;
    kill(): void;
    removeDynamicProperty(identifier: string): boolean;
    removeTag(tag: string): boolean;
    runCommand(commandString: string): any;
    setDynamicProperty(identifier: string, value: boolean | number | Location | string): void;
    setRotation(degreesX: number, degreesY: number): void;
    setVelocity(velocity: Vector): void;
    teleport(location: Location, dimension: Dimension, xRotation: number, yRotation: number, keepVelocity?: boolean): void;
    teleportFacing(location: Location, dimension: Dimension, facingLocation: Location, keepVelocity?: boolean): void;
    triggerEvent(eventName: string): void;
}

export class EntityAddRiderComponent extends IEntityComponent {
    private constructor();
    readonly entityType: string;
    readonly spawnEvent: string;
}

export class EntityAgeableComponent extends IEntityComponent {
    private constructor();
    readonly dropItems: string[];
    readonly duration: number;
    readonly feedItems: EntityDefinitionFeedItem[];
    readonly growUp: Trigger;
}

export class EntityAttributeComponent extends IEntityComponent {
    private constructor();
    readonly current: number;
    readonly value: number;
    resetToDefaultValue(): void;
    resetToMaxValue(): void;
    resetToMinValue(): void;
    setCurrent(value: number): boolean;
}

export class EntityBaseMovementComponent extends IEntityComponent {
    private constructor();
    readonly maxTurn: number;
}

export class EntityCanClimbComponent extends IEntityComponent {
    private constructor();
}

export class EntityCanFlyComponent extends IEntityComponent {
    private constructor();
}

export class EntityCanPowerJumpComponent extends IEntityComponent {
    private constructor();
}

export class EntityColorComponent extends IEntityComponent {
    private constructor();
    value: number;
}

export class EntityCreateEvent {
    private constructor();
    entity: Entity;
}

export class EntityCreateEventSignal {
    private constructor();
    subscribe(callback: (arg: EntityCreateEvent) => void): (arg: EntityCreateEvent) => void;
    unsubscribe(callback: (arg: EntityCreateEvent) => void): void;
}

export class EntityDataDrivenTriggerEventOptions {
    entities?: Entity[];
    entityTypes?: string[];
    eventTypes?: string[];
}

export class EntityDefinitionFeedItem {
    private constructor();
    readonly growth: number;
    readonly item: string;
}

export class EntityEventOptions {
    entities?: Entity[];
    entityTypes?: string[];
}

export class EntityFireImmuneComponent extends IEntityComponent {
    private constructor();
}

export class EntityFloatsInLiquidComponent extends IEntityComponent {
    private constructor();
}

export class EntityFlyingSpeedComponent extends IEntityComponent {
    private constructor();
    value: number;
}

export class EntityFrictionModifierComponent extends IEntityComponent {
    private constructor();
    value: number;
}

export class EntityGroundOffsetComponent extends IEntityComponent {
    private constructor();
    value: number;
}

export class EntityHealableComponent extends IEntityComponent {
    private constructor();
    readonly filters: FilterGroup;
    readonly forceUse: boolean;
    readonly items: FeedItem[];
}

export class EntityHealthComponent extends EntityAttributeComponent {
    private constructor();
}

export class EntityHitEvent {
    private constructor();
    readonly entity: Entity;
    readonly hitBlock?: Block;
    readonly hitEntity?: Entity;
}

export class EntityHitEventSignal {
    private constructor();
    subscribe(callback: (arg: EntityHitEvent) => void, options?: EntityEventOptions): (arg: EntityHitEvent) => void;
    unsubscribe(callback: (arg: EntityHitEvent) => void): void;
}

export class EntityHurtEvent {
    private constructor();
    readonly cause: string;
    readonly damage: number;
    readonly damagingEntity?: Entity;
    readonly hurtEntity: Entity;
    readonly projectile?: Entity;
}

export class EntityHurtEventSignal {
    private constructor();
    subscribe(callback: (arg: EntityHurtEvent) => void, options?: EntityEventOptions): (arg: EntityHurtEvent) => void;
    unsubscribe(callback: (arg: EntityHurtEvent) => void): void;
}

export class EntityInventoryComponent extends IEntityComponent {
    private constructor();
    readonly additionalSlotsPerStrength: number;
    readonly canBeSiphonedFrom: boolean;
    readonly container: InventoryComponentContainer;
    readonly containerType: string;
    readonly inventorySize: number;
    readonly "private": boolean;
    readonly restrictToOwner: boolean;
}

export class EntityIsBabyComponent extends IEntityComponent {
    private constructor();
}

export class EntityIsChargedComponent extends IEntityComponent {
    private constructor();
}

export class EntityIsChestedComponent extends IEntityComponent {
    private constructor();
}

export class EntityIsDyableComponent extends IEntityComponent {
    private constructor();
}

export class EntityIsHiddenWhenInvisibleComponent extends IEntityComponent {
    private constructor();
}

export class EntityIsIgnitedComponent extends IEntityComponent {
    private constructor();
}

export class EntityIsIllagerCaptainComponent extends IEntityComponent {
    private constructor();
}

export class EntityIsSaddledComponent extends IEntityComponent {
    private constructor();
}

export class EntityIsShakingComponent extends IEntityComponent {
    private constructor();
}

export class EntityIsShearedComponent extends IEntityComponent {
    private constructor();
}

export class EntityIsStackableComponent extends IEntityComponent {
    private constructor();
}

export class EntityIsStunnedComponent extends IEntityComponent {
    private constructor();
}

export class EntityIsTamedComponent extends IEntityComponent {
    private constructor();
}

export class EntityItemComponent extends IEntityComponent {
    private constructor();
    readonly itemStack: ItemStack;
}

export class EntityIterator implements Iterable<Entity> {
    private constructor();
    [Symbol.iterator](): Iterator<Entity>;
    next(): IteratorResult<Entity>;
}

export class EntityLavaMovementComponent extends EntityAttributeComponent {
    private constructor();
}

export class EntityMarkVariantComponent extends IEntityComponent {
    private constructor();
    value: number;
}

export class EntityMovementAmphibiousComponent extends IEntityComponent {
    private constructor();
    readonly maxTurn: number;
}

export class EntityMovementBasicComponent extends IEntityComponent {
    private constructor();
    readonly maxTurn: number;
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

export class EntityNavigationComponent extends IEntityComponent {
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

export class EntityPushThroughComponent extends IEntityComponent {
    private constructor();
    value: number;
}

export class EntityQueryOptions {
    closest?: number;
    excludeFamilies?: string[];
    excludeGameModes?: GameMode[];
    excludeNames?: string[];
    excludeTags?: string[];
    excludeTypes?: string[];
    families?: string[];
    farthest?: number;
    gameMode?: GameMode;
    location?: Location;
    maxDistance?: number;
    maxHorizontalRotation?: number;
    maxLevel?: number;
    maxVerticalRotation?: number;
    minDistance?: number;
    minHorizontalRotation?: number;
    minLevel?: number;
    minVerticalRotation?: number;
    name?: string;
    scoreOptions?: EntityQueryScoreOptions[];
    tags?: string[];
    "type"?: string;
    volume?: BlockAreaSize;
}

export class EntityQueryScoreOptions {
    exclude?: boolean;
    maxScore?: number;
    minScore?: number;
    objective?: string;
}

export class EntityRaycastOptions {
    maxDistance?: number;
}

export class EntityRideableComponent extends IEntityComponent {
    private constructor();
    readonly controllingSeat: number;
    readonly crouchingSkipInteract: boolean;
    readonly familyTypes: string[];
    readonly interactText: string;
    readonly pullInEntities: boolean;
    readonly riderCanInteract: boolean;
    readonly seatCount: number;
    readonly seats: Seat[];
    addRider(rider: Entity): boolean;
    ejectRider(rider: Entity): void;
    ejectRiders(): void;
}

export class EntityScaleComponent extends IEntityComponent {
    private constructor();
    value: number;
}

export class EntitySkinIdComponent extends IEntityComponent {
    private constructor();
    value: number;
}

export class EntityStrengthComponent extends IEntityComponent {
    private constructor();
    readonly max: number;
    readonly value: number;
}

export class EntityTameableComponent extends IEntityComponent {
    private constructor();
    readonly probability: number;
    readonly tameItems: string[];
    tame(): boolean;
}

export class EntityTameMountComponent extends IEntityComponent {
    private constructor();
    tame(showParticles: boolean): void;
}

export class EntityType {
    private constructor();
    readonly id: string;
}

export class EntityTypeIterator implements Iterable<EntityType> {
    private constructor();
    [Symbol.iterator](): Iterator<EntityType>;
    next(): IteratorResult<EntityType>;
}

export class EntityTypes {
    private constructor();
    static get(identifier: string): EntityType | undefined;
    static getAll(): EntityTypeIterator;
}

export class EntityUnderwaterMovementComponent extends EntityAttributeComponent {
    private constructor();
}

export class EntityVariantComponent extends IEntityComponent {
    private constructor();
    readonly value: number;
}

export class EntityWantsJockeyComponent extends IEntityComponent {
    private constructor();
}

export class Events {
    private constructor();
    readonly beforeChat: BeforeChatEventSignal;
    readonly beforeItemUse: BeforeItemUseEventSignal;
    readonly beforeItemUseOn: BeforeItemUseOnEventSignal;
    readonly dataDrivenEntityTriggerEvent: DataDrivenEntityTriggerEventSignal;
    readonly entityCreate: EntityCreateEventSignal;
    readonly entityHit: EntityHitEventSignal;
    readonly entityHurt: EntityHurtEventSignal;
    readonly itemCompleteCharge: ItemCompleteChargeEventSignal;
    readonly itemReleaseCharge: ItemReleaseChargeEventSignal;
    readonly itemStartCharge: ItemStartChargeEventSignal;
    readonly itemStopCharge: ItemStopChargeEventSignal;
    readonly itemUseOn: ItemUseOnEventSignal;
    readonly playerJoin: PlayerJoinEventSignal;
    readonly playerLeave: PlayerLeaveEventSignal;
    readonly tick: TickEventSignal;
    readonly weatherChange: WeatherChangeEventSignal;
    readonly worldInitialize: WorldInitializeEventSignal;
}

export class ExplosionOptions {
    allowUnderwater?: boolean;
    breaksBlocks?: boolean;
    causesFire?: boolean;
    source?: Entity;
}

export class FeedItem {
    private constructor();
    readonly effects: FeedItemEffect[];
    readonly healAmount: number;
    readonly item: string;
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

export class IBlockProperty {
    private constructor();
    readonly name: string;
}

export class IEntityComponent extends Component {
    private constructor();
}

export class IntBlockProperty extends IBlockProperty {
    private constructor();
    readonly validValues: number[];
    value: number;
}

export class InventoryComponentContainer {
    private constructor();
    readonly emptySlotsCount: number;
    readonly size: number;
    addItem(itemStack: ItemStack): void;
    getItem(slot: number): ItemStack | undefined;
    setItem(slot: number, itemStack: ItemStack): void;
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
}

export class ItemCompleteChargeEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemCompleteChargeEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemCompleteChargeEvent) => void): (arg: ItemCompleteChargeEvent) => void;
    unsubscribe(callback: (arg: ItemCompleteChargeEvent) => void): void;
}

export class ItemComponent extends Component {
    private constructor();
}

export class ItemCooldownComponent extends ItemComponent {
    private constructor();
    readonly cooldownCategory: string;
    readonly cooldownTicks: number;
    startCooldown(player: Player): void;
}

export class ItemDurabilityComponent extends ItemComponent {
    private constructor();
    damage: number;
    readonly damageRange: NumberRange;
    readonly maxDurability: number;
    getDamageChance(unbreakingEnchantmentLevel?: number): number;
}

export class ItemFoodComponent extends ItemComponent {
    private constructor();
    readonly canAlwaysEat: boolean;
    readonly nutrition: number;
    readonly saturationModifier: number;
    readonly usingConvertsTo: string;
}

export class ItemReleaseChargeEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemReleaseChargeEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemReleaseChargeEvent) => void): (arg: ItemReleaseChargeEvent) => void;
    unsubscribe(callback: (arg: ItemReleaseChargeEvent) => void): void;
}

export class Items {
    private constructor();
    static get(itemId: string): ItemType | undefined;
}

export class ItemStack {
    amount: number;
    data: number;
    readonly id: string;
    nameTag?: string;
    constructor(itemType: ItemType | string, amount?: number, data?: number);
    getComponent(componentId: string): ItemComponent | undefined;
    getComponents(): ItemComponent[];
    getLore(): string[];
    hasComponent(componentId: string): boolean;
    setLore(loreList?: string[]): void;
}

export class ItemStartChargeEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemStartChargeEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemStartChargeEvent) => void): (arg: ItemStartChargeEvent) => void;
    unsubscribe(callback: (arg: ItemStartChargeEvent) => void): void;
}

export class ItemStopChargeEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemStopChargeEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemStopChargeEvent) => void): (arg: ItemStopChargeEvent) => void;
    unsubscribe(callback: (arg: ItemStopChargeEvent) => void): void;
}

export class ItemType {
    private constructor();
    readonly id: string;
}

export class ItemUseEvent {
    private constructor();
    item: ItemStack;
    readonly source: Player;
}

export class ItemUseOnEvent {
    private constructor();
    readonly blockFace: Direction;
    readonly blockLocation: BlockLocation;
    item: ItemStack;
    readonly source: Player;
}

export class ItemUseOnEventSignal {
    private constructor();
    subscribe(callback: (arg: ItemUseOnEvent) => void): (arg: ItemUseOnEvent) => void;
    unsubscribe(callback: (arg: ItemUseOnEvent) => void): void;
}

export class Location {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number);
    equals(other: Location): boolean;
    isNear(other: Location, epsilon: number): boolean;
}

export class MinecraftBlockTypes {
    private constructor();
    static get(typeName: string): BlockType | undefined;
    static getAllBlockTypes(): BlockType[];
}

export class MinecraftDimensionTypes {
    private constructor();
}

export class MinecraftEffectTypes {
    private constructor();
}

export class MinecraftItemTypes {
    private constructor();
}

export class MolangVariableMap {
    setColorRGB(variableName: string, color: Color): void;
    setColorRGBA(variableName: string, color: Color): void;
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector): MolangVariableMap;
    setVector3(variableName: string, vector: Vector): MolangVariableMap;
}

export class MusicOptions {
    fade?: number;
    loop?: boolean;
    volume?: number;
}

export class NumberRange {
    private constructor();
    max: number;
    min: number;
    next(): number;
}

export class Player extends Entity {
    private constructor();
    readonly name: string;
    selectedSlot: number;
    getItemCooldown(cooldownCategory: string): number;
    playSound(soundId: string, soundOptions?: SoundOptions): void;
    postClientMessage(id: string, value: string): void;
    startItemCooldown(cooldownCategory: string, tickDuration: number): void;
}

export class PlayerInventoryComponentContainer {
    private constructor();
    readonly emptySlotsCount: number;
    readonly size: number;
    addItem(itemStack: ItemStack): void;
    getItem(slot: number): ItemStack | undefined;
    setItem(slot: number, itemStack: ItemStack): void;
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
}

export class PlayerIterator implements Iterable<Player> {
    private constructor();
    [Symbol.iterator](): Iterator<Player>;
    next(): IteratorResult<Player>;
}

export class PlayerJoinEvent {
    private constructor();
    player: Player;
}

export class PlayerJoinEventSignal {
    private constructor();
    subscribe(callback: (arg: PlayerJoinEvent) => void): (arg: PlayerJoinEvent) => void;
    unsubscribe(callback: (arg: PlayerJoinEvent) => void): void;
}

export class PlayerLeaveEvent {
    private constructor();
    readonly playerName: string;
}

export class PlayerLeaveEventSignal {
    private constructor();
    subscribe(callback: (arg: PlayerLeaveEvent) => void): (arg: PlayerLeaveEvent) => void;
    unsubscribe(callback: (arg: PlayerLeaveEvent) => void): void;
}

export class PropertyRegistry {
    private constructor();
    registerEntityTypeDynamicProperties(
        propertiesDefinition: DynamicPropertiesDefinition,
        entityTypeOrId: EntityType | string,
    ): void;
    registerWorldDynamicProperties(propertiesDefinition: DynamicPropertiesDefinition): void;
}

export class Scoreboard {
    private constructor();
    getObjective(objectiveId: string): ScoreboardObjective | undefined;
    getObjectives(): ScoreboardObjective[];
    getParticipants(): ScoreboardIdentity[];
}

export class ScoreboardIdentity {
    private constructor();
    readonly displayName: string;
    readonly id: number;
    readonly "type": ScoreboardIdentityType;
    getEntity(): Entity | undefined;
}

export class ScoreboardObjective {
    private constructor();
    readonly displayName: string;
    readonly id: string;
    getParticipants(): ScoreboardIdentity[];
    getScore(participant: Entity | ScoreboardIdentity | string): number | undefined;
    getScores(): ScoreboardScoreInfo[];
}

export class ScoreboardScoreInfo {
    private constructor();
    readonly participant: ScoreboardIdentity;
    readonly score: number;
}

export class Seat {
    private constructor();
    readonly lockRiderRotation: number;
    readonly maxRiderCount: number;
    readonly minRiderCount: number;
    readonly position: Location;
}

export class SoundOptions {
    location?: Location;
    pitch?: number;
    volume?: number;
}

export class StringBlockProperty extends IBlockProperty {
    private constructor();
    readonly validValues: string[];
    value: string;
}

export class TickEvent {
    private constructor();
    readonly currentTick: number;
    readonly deltaTime: number;
}

export class TickEventSignal {
    private constructor();
    subscribe(callback: (arg: TickEvent) => void): (arg: TickEvent) => void;
    unsubscribe(callback: (arg: TickEvent) => void): void;
}

export class Trigger {
    eventName: string;
    constructor(eventName: string);
}

export class Vector {
    readonly x: number;
    readonly y: number;
    readonly z: number;
    constructor(x: number, y: number, z: number);
    equals(other: Vector): boolean;
    length(): number;
    normalized(): Vector;
    static add(a: Vector, b: Vector): Vector;
    static cross(a: Vector, b: Vector): Vector;
    static distance(a: Vector, b: Vector): number;
    static divide(a: Vector, b: number | Vector): Vector;
    static lerp(a: Vector, b: Vector, t: number): Vector;
    static max(a: Vector, b: Vector): Vector;
    static min(a: Vector, b: Vector): Vector;
    static multiply(a: Vector, b: number | Vector): Vector;
    static slerp(a: Vector, b: Vector, t: number): Vector;
    static subtract(a: Vector, b: Vector): Vector;
}

export class WeatherChangeEvent {
    private constructor();
    readonly dimension: string;
    readonly lightning: boolean;
    readonly raining: boolean;
}

export class WeatherChangeEventSignal {
    private constructor();
    subscribe(callback: (arg: WeatherChangeEvent) => void): (arg: WeatherChangeEvent) => void;
    unsubscribe(callback: (arg: WeatherChangeEvent) => void): void;
}

export class World {
    private constructor();
    readonly events: Events;
    readonly scoreboard: Scoreboard;
    broadcastClientMessage(id: string, value: string): void;
    getDimension(dimensionId: string): Dimension;
    getDynamicProperty(identifier: string): boolean | number | Location | string | undefined;
    getPlayers(options?: EntityQueryOptions): PlayerIterator;
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    playSound(soundID: string, soundOptions?: SoundOptions): void;
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    removeDynamicProperty(identifier: string): boolean;
    setDynamicProperty(identifier: string, value: boolean | number | Location | string): void;
    stopMusic(): void;
}

export class WorldInitializeEvent {
    private constructor();
    readonly propertyRegistry: PropertyRegistry;
}

export class WorldInitializeEventSignal {
    private constructor();
    subscribe(callback: (arg: WorldInitializeEvent) => void): (arg: WorldInitializeEvent) => void;
    unsubscribe(callback: (arg: WorldInitializeEvent) => void): void;
}

export class XYRotation {
    private constructor();
    x: number;
    y: number;
}

export const TicksPerSecond = 20;
export const world: World;