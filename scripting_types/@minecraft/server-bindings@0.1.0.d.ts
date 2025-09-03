// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-bindings",
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

// @ts-ignore
export class BeforeChatEvent extends ChatEvent {
    private constructor();
    cancel: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    targets: Player[];
}

export class BeforeChatEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: BeforeChatEvent) => void): (arg0: BeforeChatEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: BeforeChatEvent) => void): void;
}

// @ts-ignore
export class BeforeItemUseEvent extends ItemUseEvent {
    private constructor();
    cancel: boolean;
}

export class BeforeItemUseEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: BeforeItemUseEvent) => void): (arg0: BeforeItemUseEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: BeforeItemUseEvent) => void): void;
}

// @ts-ignore
export class BeforeItemUseOnEvent extends ItemUseOnEvent {
    private constructor();
    cancel: boolean;
}

export class BeforeItemUseOnEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: BeforeItemUseOnEvent) => void): (arg0: BeforeItemUseOnEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: BeforeItemUseOnEvent) => void): void;
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
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getComponent(componentName: string): BlockComponent | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getTags(): string[];
    /**
     * @remarks This function can't be called in read-only mode.
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    setPermutation(permutation: BlockPermutation): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    setType(blockType: BlockType): void;
}

export class BlockAreaSize {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number);
    equals(other: BlockAreaSize): boolean;
}

// @ts-ignore
export class BlockComponent extends Component {
    private constructor();
    readonly location: BlockLocation;
}

export class BlockEvent {
    private constructor();
    readonly block: Block;
    readonly dimension: Dimension;
}

// @ts-ignore
export class BlockInventoryComponent extends BlockComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly container?: BlockInventoryComponentContainer;
}

export class BlockInventoryComponentContainer {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly emptySlotsCount: number;
    /**
     * @throws This property can throw errors.
     */
    readonly size: number;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addItem(itemStack: ItemStack): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getItem(slot: number): ItemStack | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setItem(slot: number, itemStack: ItemStack): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
}

// @ts-ignore
export class BlockLavaContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
}

// @ts-ignore
export class BlockLiquidContainerComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    fillLevel: number;
}

export class BlockLocation {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    x: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    y: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    z: number;
    constructor(x: number, y: number, z: number);
    /**
     * @remarks This function can't be called in read-only mode.
     */
    above(): BlockLocation;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    blocksBetween(other: BlockLocation): BlockLocation[];
    /**
     * @remarks This function can't be called in read-only mode.
     */
    equals(other: BlockLocation): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    offset(x: number, y: number, z: number): BlockLocation;
}

export class BlockPermutation {
    private constructor();
    readonly "type": BlockType;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getAllProperties(): (IBlockProperty | undefined)[];
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getProperty(propertyName: string): IBlockProperty | undefined;
    getTags(): string[];
    hasTag(tag: string): boolean;
}

// @ts-ignore
export class BlockPistonComponent extends BlockComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly attachedBlocks: BlockLocation[];
    /**
     * @throws This property can throw errors.
     */
    readonly isExpanded: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly isExpanding: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly isMoving: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly isRetracted: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly isRetracting: boolean;
}

// @ts-ignore
export class BlockPotionContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setPotionType(item: ItemStack): void;
}

export class BlockRaycastOptions {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    includeLiquidBlocks?: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    includePassableBlocks?: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    maxDistance?: number;
}

export class BlockRecordPlayerComponent {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    clearRecord(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    isPlaying(): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setRecord(recordItemType: ItemType): void;
}

// @ts-ignore
export class BlockSnowContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
}

export class BlockType {
    private constructor();
    readonly id: string;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    createDefaultBlockPermutation(): BlockPermutation;
}

// @ts-ignore
export class BlockWaterContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addDye(itemType: ItemType): void;
}

// @ts-ignore
export class BoolBlockProperty extends IBlockProperty {
    private constructor();
    readonly validValues: boolean[];
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    value: boolean;
}

export class ChatEvent {
    private constructor();
    message: string;
    sender: Player;
    sendToTargets: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    targets: Player[];
}

export class Color {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    alpha: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    blue: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    green: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    red: number;
    constructor(red: number, green: number, blue: number, alpha: number);
}

export class Component {
    private constructor();
    readonly id: string;
}

export class Container {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly emptySlotsCount: number;
    /**
     * @throws This property can throw errors.
     */
    readonly size: number;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addItem(itemStack: ItemStack): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getItem(slot: number): ItemStack | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setItem(slot: number, itemStack: ItemStack): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
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
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg0: DataDrivenEntityTriggerEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg0: DataDrivenEntityTriggerEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: DataDrivenEntityTriggerEvent) => void): void;
}

export class DefinitionModifier {
    readonly componentGroupsToAdd: string[];
    readonly componentGroupsToRemove: string[];
    triggers: Trigger[];
}

export class Dimension {
    private constructor();
    readonly id: string;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    createExplosion(location: Location, radius: number, explosionOptions: ExplosionOptions): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getBlock(location: BlockLocation): Block;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getBlockFromRay(location: Location, direction: Vector, options?: BlockRaycastOptions): Block | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getEntities(options?: EntityQueryOptions): EntityIterator;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getEntitiesAtBlockLocation(location: BlockLocation): Entity[];
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getEntitiesFromRay(location: Location, direction: Vector, options?: EntityRaycastOptions): Entity[];
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getPlayers(options?: EntityQueryOptions): PlayerIterator;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    isEmpty(location: BlockLocation): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    runCommand(commandString: string): unknown;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    spawnEntity(identifier: string, location: BlockLocation | Location): Entity;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    spawnItem(item: ItemStack, location: BlockLocation | Location): Entity;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    spawnParticle(effectName: string, location: Location, molangVariables: MolangVariableMap): void;
}

export class DynamicPropertiesDefinition {
    /**
     * @throws This function can throw errors.
     */
    defineBoolean(identifier: string, defaultValue?: boolean): DynamicPropertiesDefinition;
    /**
     * @throws This function can throw errors.
     */
    defineNumber(identifier: string, defaultValue?: number): DynamicPropertiesDefinition;
    /**
     * @throws This function can throw errors.
     */
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
    /**
     * @throws This property can throw errors.
     */
    readonly dimension: Dimension;
    /**
     * @throws This property can throw errors.
     */
    readonly headLocation: Location;
    /**
     * @throws This property can throw errors.
     */
    readonly id: string;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    isSneaking: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly location: Location;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    nameTag: string;
    /**
     * @throws This property can throw errors.
     */
    readonly rotation: XYRotation;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    target: Entity;
    /**
     * @throws This property can throw errors.
     */
    readonly velocity: Vector;
    /**
     * @throws This property can throw errors.
     */
    readonly viewVector: Vector;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addEffect(effectType: EffectType, duration: number, amplifier?: number, showParticles?: boolean): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addTag(tag: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getBlockFromViewVector(options?: BlockRaycastOptions): Block | undefined;
    getComponent(componentId: string): IEntityComponent | undefined;
    getComponents(): IEntityComponent[];
    /**
     * @throws This function can throw errors.
     */
    getDynamicProperty(identifier: string): boolean | number | Location | string | undefined;
    /**
     * @throws This function can throw errors.
     */
    getEffect(effectType: EffectType): Effect | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getEntitiesFromViewVector(options?: EntityRaycastOptions): Entity[];
    /**
     * @throws This function can throw errors.
     */
    getTags(): string[];
    hasComponent(componentId: string): boolean;
    /**
     * @throws This function can throw errors.
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    kill(): void;
    /**
     * @throws This function can throw errors.
     */
    removeDynamicProperty(identifier: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    removeTag(tag: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    runCommand(commandString: string): unknown;
    /**
     * @throws This function can throw errors.
     */
    setDynamicProperty(identifier: string, value: boolean | number | Location | string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setRotation(degreesX: number, degreesY: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setVelocity(velocity: Vector): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    teleport(location: Location, dimension: Dimension, xRotation: number, yRotation: number, keepVelocity?: boolean): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    teleportFacing(location: Location, dimension: Dimension, facingLocation: Location, keepVelocity?: boolean): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    triggerEvent(eventName: string): void;
}

// @ts-ignore
export class EntityAddRiderComponent extends IEntityComponent {
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
export class EntityAgeableComponent extends IEntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly dropItems: string[];
    /**
     * @throws This property can throw errors.
     */
    readonly duration: number;
    /**
     * @throws This property can throw errors.
     */
    readonly feedItems: EntityDefinitionFeedItem[];
    /**
     * @throws This property can throw errors.
     */
    readonly growUp: Trigger;
}

// @ts-ignore
export class EntityAttributeComponent extends IEntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly current: number;
    /**
     * @throws This property can throw errors.
     */
    readonly value: number;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setCurrent(value: number): boolean;
}

// @ts-ignore
export class EntityBaseMovementComponent extends IEntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly maxTurn: number;
}

// @ts-ignore
export class EntityCanClimbComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityCanFlyComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityCanPowerJumpComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityColorComponent extends IEntityComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    value: number;
}

export class EntityCreateEvent {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    entity: Entity;
}

export class EntityCreateEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: EntityCreateEvent) => void): (arg0: EntityCreateEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: EntityCreateEvent) => void): void;
}

export class EntityDataDrivenTriggerEventOptions {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    entities?: Entity[];
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    entityTypes?: string[];
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    eventTypes?: string[];
}

export class EntityDefinitionFeedItem {
    private constructor();
    readonly growth: number;
    readonly item: string;
}

export class EntityEventOptions {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    entities?: Entity[];
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    entityTypes?: string[];
}

// @ts-ignore
export class EntityFireImmuneComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityFloatsInLiquidComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityFlyingSpeedComponent extends IEntityComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    value: number;
}

// @ts-ignore
export class EntityFrictionModifierComponent extends IEntityComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    value: number;
}

// @ts-ignore
export class EntityGroundOffsetComponent extends IEntityComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    value: number;
}

// @ts-ignore
export class EntityHealableComponent extends IEntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly forceUse: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly items: FeedItem[];
}

// @ts-ignore
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
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: EntityHitEvent) => void, options?: EntityEventOptions): (arg0: EntityHitEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: EntityHitEvent) => void): void;
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
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: EntityHurtEvent) => void, options?: EntityEventOptions): (arg0: EntityHurtEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: EntityHurtEvent) => void): void;
}

// @ts-ignore
export class EntityInventoryComponent extends IEntityComponent {
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
     */
    readonly container: InventoryComponentContainer;
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
export class EntityIsBabyComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityIsChargedComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityIsChestedComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityIsDyableComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityIsHiddenWhenInvisibleComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityIsIgnitedComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityIsIllagerCaptainComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityIsSaddledComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityIsShakingComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityIsShearedComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityIsStackableComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityIsStunnedComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityIsTamedComponent extends IEntityComponent {
    private constructor();
}

// @ts-ignore
export class EntityItemComponent extends IEntityComponent {
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
export class EntityMarkVariantComponent extends IEntityComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    value: number;
}

// @ts-ignore
export class EntityMovementAmphibiousComponent extends IEntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly maxTurn: number;
}

// @ts-ignore
export class EntityMovementBasicComponent extends IEntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly maxTurn: number;
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
export class EntityNavigationComponent extends IEntityComponent {
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
export class EntityPushThroughComponent extends IEntityComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    value: number;
}

export class EntityQueryOptions {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    closest?: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    excludeFamilies?: string[];
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    excludeGameModes?: GameMode[];
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    excludeNames?: string[];
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    excludeTags?: string[];
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    excludeTypes?: string[];
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    families?: string[];
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    farthest?: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    gameMode?: GameMode;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    location?: Location;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    maxDistance?: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    maxHorizontalRotation?: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    maxLevel?: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    maxVerticalRotation?: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    minDistance?: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    minHorizontalRotation?: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    minLevel?: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    minVerticalRotation?: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    name?: string;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    scoreOptions?: EntityQueryScoreOptions[];
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    tags?: string[];
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    "type"?: string;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    volume?: BlockAreaSize;
}

export class EntityQueryScoreOptions {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    exclude?: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    maxScore?: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    minScore?: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    objective?: string;
}

export class EntityRaycastOptions {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    maxDistance?: number;
}

// @ts-ignore
export class EntityRideableComponent extends IEntityComponent {
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
    readonly familyTypes: string[];
    /**
     * @throws This property can throw errors.
     */
    readonly interactText: string;
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
     * @throws This property can throw errors.
     */
    readonly seats: Seat[];
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addRider(rider: Entity): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    ejectRider(rider: Entity): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    ejectRiders(): void;
}

// @ts-ignore
export class EntityScaleComponent extends IEntityComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    value: number;
}

// @ts-ignore
export class EntitySkinIdComponent extends IEntityComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    value: number;
}

// @ts-ignore
export class EntityStrengthComponent extends IEntityComponent {
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
export class EntityTameableComponent extends IEntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly probability: number;
    /**
     * @throws This property can throw errors.
     */
    readonly tameItems: string[];
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    tame(): boolean;
}

// @ts-ignore
export class EntityTameMountComponent extends IEntityComponent {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
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

// @ts-ignore
export class EntityUnderwaterMovementComponent extends EntityAttributeComponent {
    private constructor();
}

// @ts-ignore
export class EntityVariantComponent extends IEntityComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly value: number;
}

// @ts-ignore
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
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    allowUnderwater?: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    breaksBlocks?: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    causesFire?: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
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

export class FluidContainer {
    private constructor();
}

export class IBlockProperty {
    private constructor();
    readonly name: string;
}

// @ts-ignore
export class IEntityComponent extends Component {
    private constructor();
}

// @ts-ignore
export class IntBlockProperty extends IBlockProperty {
    private constructor();
    readonly validValues: number[];
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    value: number;
}

export class InventoryComponentContainer {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly emptySlotsCount: number;
    /**
     * @throws This property can throw errors.
     */
    readonly size: number;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addItem(itemStack: ItemStack): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getItem(slot: number): ItemStack | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setItem(slot: number, itemStack: ItemStack): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
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
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: ItemCompleteChargeEvent) => void): (arg0: ItemCompleteChargeEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: ItemCompleteChargeEvent) => void): void;
}

// @ts-ignore
export class ItemComponent extends Component {
    private constructor();
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
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    startCooldown(player: Player): void;
}

// @ts-ignore
export class ItemDurabilityComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    damage: number;
    /**
     * @throws This property can throw errors.
     */
    readonly damageRange: NumberRange;
    /**
     * @throws This property can throw errors.
     */
    readonly maxDurability: number;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getDamageChance(unbreakingEnchantmentLevel?: number): number;
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

export class ItemReleaseChargeEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemReleaseChargeEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: ItemReleaseChargeEvent) => void): (arg0: ItemReleaseChargeEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: ItemReleaseChargeEvent) => void): void;
}

export class Items {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    static get(itemId: string): ItemType | undefined;
}

export class ItemStack {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    amount: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    data: number;
    readonly id: string;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    nameTag?: string;
    /**
     * @throws This function can throw errors.
     */
    constructor(itemType: ItemType | string, amount?: number, data?: number);
    getComponent(componentId: string): ItemComponent | undefined;
    getComponents(): ItemComponent[];
    getLore(): string[];
    hasComponent(componentId: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     */
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
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: ItemStartChargeEvent) => void): (arg0: ItemStartChargeEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: ItemStartChargeEvent) => void): void;
}

export class ItemStopChargeEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemStopChargeEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: ItemStopChargeEvent) => void): (arg0: ItemStopChargeEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: ItemStopChargeEvent) => void): void;
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
    /**
     * @throws This property can throw errors.
     */
    readonly blockLocation: BlockLocation;
    item: ItemStack;
    readonly source: Player;
}

export class ItemUseOnEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: ItemUseOnEvent) => void): (arg0: ItemUseOnEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: ItemUseOnEvent) => void): void;
}

export class Location {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    x: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    y: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    z: number;
    constructor(x: number, y: number, z: number);
    /**
     * @remarks This function can't be called in read-only mode.
     */
    equals(other: Location): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     */
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
    /**
     * @throws This function can throw errors.
     */
    setColorRGB(variableName: string, color: Color): void;
    /**
     * @throws This function can throw errors.
     */
    setColorRGBA(variableName: string, color: Color): void;
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector): MolangVariableMap;
    setVector3(variableName: string, vector: Vector): MolangVariableMap;
}

export class MusicOptions {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    fade?: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    loop?: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    volume?: number;
}

export class NumberRange {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    max: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    min: number;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    next(): number;
}

// @ts-ignore
export class Player extends Entity {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly name: string;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    selectedSlot: number;
    /**
     * @throws This function can throw errors.
     */
    getItemCooldown(cooldownCategory: string): number;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    playSound(soundId: string, soundOptions?: SoundOptions): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    postClientMessage(id: string, value: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    startItemCooldown(cooldownCategory: string, tickDuration: number): void;
}

export class PlayerInventoryComponentContainer {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly emptySlotsCount: number;
    /**
     * @throws This property can throw errors.
     */
    readonly size: number;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addItem(itemStack: ItemStack): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getItem(slot: number): ItemStack | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setItem(slot: number, itemStack: ItemStack): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
}

export class PlayerIterator implements Iterable<Player> {
    private constructor();
    [Symbol.iterator](): Iterator<Player>;
    next(): IteratorResult<Player>;
}

export class PlayerJoinEvent {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    player: Player;
}

export class PlayerJoinEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: PlayerJoinEvent) => void): (arg0: PlayerJoinEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: PlayerJoinEvent) => void): void;
}

export class PlayerLeaveEvent {
    private constructor();
    readonly playerName: string;
}

export class PlayerLeaveEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: PlayerLeaveEvent) => void): (arg0: PlayerLeaveEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: PlayerLeaveEvent) => void): void;
}

export class PropertyRegistry {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    registerEntityTypeDynamicProperties(
        propertiesDefinition: DynamicPropertiesDefinition,
        entityTypeOrId: EntityType | string,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
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
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    location?: Location;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    pitch?: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    volume?: number;
}

// @ts-ignore
export class StringBlockProperty extends IBlockProperty {
    private constructor();
    readonly validValues: string[];
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    value: string;
}

export class TickEvent {
    private constructor();
    readonly currentTick: number;
    readonly deltaTime: number;
}

export class TickEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: TickEvent) => void): (arg0: TickEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: TickEvent) => void): void;
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
    /**
     * @throws This function can throw errors.
     */
    static divide(a: Vector, b: number | Vector): Vector;
    /**
     * @remarks This function can't be called in read-only mode.
     */
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
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: WeatherChangeEvent) => void): (arg0: WeatherChangeEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: WeatherChangeEvent) => void): void;
}

export class World {
    private constructor();
    readonly events: Events;
    readonly scoreboard: Scoreboard;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    broadcastClientMessage(id: string, value: string): void;
    /**
     * @throws This function can throw errors.
     */
    getDimension(dimensionId: string): Dimension;
    /**
     * @throws This function can throw errors.
     */
    getDynamicProperty(identifier: string): boolean | number | Location | string | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getPlayers(options?: EntityQueryOptions): PlayerIterator;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    playSound(soundID: string, soundOptions?: SoundOptions): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    removeDynamicProperty(identifier: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setDynamicProperty(identifier: string, value: boolean | number | Location | string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    stopMusic(): void;
}

export class WorldInitializeEvent {
    private constructor();
    readonly propertyRegistry: PropertyRegistry;
}

export class WorldInitializeEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: WorldInitializeEvent) => void): (arg0: WorldInitializeEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: WorldInitializeEvent) => void): void;
}

export class XYRotation {
    private constructor();
    x: number;
    y: number;
}

export const TicksPerSecond = 20;
export const world: World;