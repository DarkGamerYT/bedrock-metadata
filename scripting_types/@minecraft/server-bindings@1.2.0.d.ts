// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-bindings",
 *     "version": "1.2.0"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
export enum EntityDamageCause {
    anvil = "anvil",
    blockExplosion = "blockExplosion",
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
    magic = "magic",
    magma = "magma",
    none = "none",
    override = "override",
    piston = "piston",
    projectile = "projectile",
    selfDestruct = "selfDestruct",
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

export enum GameMode {
    adventure = "adventure",
    creative = "creative",
    spectator = "spectator",
    survival = "survival",
}

export enum ItemLockMode {
    inventory = "inventory",
    none = "none",
    slot = "slot",
}

export class Block {
    private constructor();
    readonly dimension: Dimension;
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
    readonly x: number;
    readonly y: number;
    readonly z: number;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setPermutation(permutation: BlockPermutation): void;
}

// @ts-ignore
export class BlockComponent extends Component {
    private constructor();
}

// @ts-ignore
export class BlockInventoryComponent extends BlockComponent {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly container?: Container;
}

export class BlockPermutation {
    private constructor();
    matches(blockName: string, states?: Record<string, boolean | number | string>): boolean;
    /**
     * @throws This function can throw errors.
     */
    static resolve(blockName: string, states?: Record<string, boolean | number | string>): BlockPermutation;
}

export class CommandResult {
    private constructor();
    readonly successCount: number;
}

export class Component {
    private constructor();
    readonly typeId: string;
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
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    addItem(itemStack: ItemStack): ItemStack | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    clearAll(): void;
    /**
     * @throws This function can throw errors.
     */
    getItem(slot: number): ItemStack | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    moveItem(fromSlot: number, toSlot: number, toContainer: Container): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    setItem(slot: number, itemStack?: ItemStack): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    transferItem(fromSlot: number, toContainer: Container): ItemStack | undefined;
}

export class Dimension {
    private constructor();
    readonly id: string;
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
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getEntities(options?: EntityQueryOptions): Entity[];
    getEntitiesAtBlockLocation(location: Vector3): Entity[];
    /**
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     */
    runCommand(commandString: string): CommandResult;
    /**
     * @throws This function can throw errors.
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
}

export class Entity {
    private constructor();
    /**
     * @throws This property can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    readonly dimension: Dimension;
    readonly id: string;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidEntityError}
     */
    readonly location: Vector3;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    nameTag: string;
    readonly typeId: string;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    addTag(tag: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    applyImpulse(vector: Vector3): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    clearVelocity(): void;
    getComponent(componentId: string): EntityComponent | undefined;
    getComponents(): EntityComponent[];
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getHeadLocation(): Vector3;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getTags(): string[];
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getVelocity(): Vector3;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getViewDirection(): Vector3;
    hasComponent(componentId: string): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    kill(): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    removeTag(tag: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     *
     * {@link InvalidEntityError}
     */
    runCommand(commandString: string): CommandResult;
    /**
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     *
     * {@link InvalidEntityError}
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
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
export class EntityColorComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    value: number;
}

// @ts-ignore
export class EntityComponent extends Component {
    private constructor();
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
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    value: number;
}

// @ts-ignore
export class EntityFrictionModifierComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    value: number;
}

// @ts-ignore
export class EntityGroundOffsetComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    value: number;
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
    readonly container?: Container;
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

// @ts-ignore
export class EntityMarkVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    value: number;
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
export class EntityMovementFlyComponent extends EntityBaseMovementComponent {
    private constructor();
}

// @ts-ignore
export class EntityMovementGenericComponent extends EntityBaseMovementComponent {
    private constructor();
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
export class EntityPushThroughComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    value: number;
}

// @ts-ignore
export class EntityScaleComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    value: number;
}

// @ts-ignore
export class EntitySkinIdComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    value: number;
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

// @ts-ignore
export class ItemComponent extends Component {
    private constructor();
}

export class ItemStack {
    readonly amount: number;
    readonly isStackable: boolean;
    readonly keepOnDeath: boolean;
    readonly lockMode: ItemLockMode;
    readonly maxAmount: number;
    readonly nameTag?: string;
    readonly "type": ItemType;
    readonly typeId: string;
    /**
     * @throws This function can throw errors.
     */
    constructor(itemType: ItemType | string, amount?: number);
    getComponent(componentId: string): ItemComponent | undefined;
    getComponents(): ItemComponent[];
    hasComponent(componentId: string): boolean;
    isStackableWith(itemStack: ItemStack): boolean;
}

export class ItemType {
    private constructor();
    readonly id: string;
}

export class MinecraftDimensionTypes {
    private constructor();
}

// @ts-ignore
export class Player extends Entity {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly name: string;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    playSound(soundId: string, soundOptions?: PlayerSoundOptions): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
}

export class System {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly currentTick: number;
    /**
     * @remarks This function can be called in early-execution mode.
     */
    clearRun(runId: number): void;
    /**
     * @remarks This function can be called in early-execution mode.
     */
    run(callback: () => void): number;
    /**
     * @remarks This function can be called in early-execution mode.
     */
    runInterval(callback: () => void, tickInterval?: number): number;
    /**
     * @remarks This function can be called in early-execution mode.
     */
    runTimeout(callback: () => void, tickDelay?: number): number;
}

export class World {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getAllPlayers(): Player[];
    /**
     * @throws This function can throw errors.
     */
    getDimension(dimensionId: string): Dimension;
    /**
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.PropertyOutOfBoundsError}
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.PropertyOutOfBoundsError}
     */
    playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.PropertyOutOfBoundsError}
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @throws This function can throw errors.
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    stopMusic(): void;
}

export interface EntityApplyDamageByProjectileOptions {
    damagingEntity?: Entity;
    damagingProjectile: Entity;
}

export interface EntityApplyDamageOptions {
    cause: EntityDamageCause;
    damagingEntity?: Entity;
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
    scoreOptions?: EntityQueryScoreOptions[];
    tags?: string[];
    type?: string;
}

// @ts-ignore
export interface EntityQueryOptions extends EntityFilter {
    closest?: number;
    farthest?: number;
    location?: Vector3;
    maxDistance?: number;
    minDistance?: number;
}

export interface EntityQueryScoreOptions {
    exclude?: boolean;
    maxScore?: number;
    minScore?: number;
    objective?: string;
}

export interface MusicOptions {
    fade?: number;
    loop?: boolean;
    volume?: number;
}

export interface PlayerSoundOptions {
    location?: Vector3;
    pitch?: number;
    volume?: number;
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

export interface Vector3 {
    x: number;
    y: number;
    z: number;
}

export interface WorldSoundOptions {
    pitch?: number;
    volume?: number;
}

// @ts-ignore
export class CommandError extends Error {
    private constructor();
}

// @ts-ignore
export class ContainerRulesError extends Error {
    private constructor();
}

// @ts-ignore
export class InvalidEntityError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly id: string;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly "type": string;
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
export class RawMessageError extends Error {
    private constructor();
}

export const system: System;
export const world: World;