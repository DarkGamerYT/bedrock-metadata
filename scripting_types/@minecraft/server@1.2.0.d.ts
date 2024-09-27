// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server",
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
    readonly location: Vector3;
    readonly permutation: BlockPermutation;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    setPermutation(permutation: BlockPermutation): void;
}

export class BlockComponent extends Component {
    private constructor();
}

export class BlockInventoryComponent extends BlockComponent {
    private constructor();
    readonly container?: Container;
}

export class BlockPermutation {
    private constructor();
    matches(blockName: string, states?: Record<string, boolean | number | string>): boolean;
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
    readonly emptySlotsCount: number;
    readonly size: number;
    addItem(itemStack: ItemStack): ItemStack | undefined;
    clearAll(): void;
    getItem(slot: number): ItemStack | undefined;
    moveItem(fromSlot: number, toSlot: number, toContainer: Container): void;
    setItem(slot: number, itemStack?: ItemStack): void;
    swapItems(slot: number, otherSlot: number, otherContainer: Container): void;
    transferItem(fromSlot: number, toContainer: Container): ItemStack | undefined;
}

export class Dimension {
    private constructor();
    readonly id: string;
    getBlock(location: Vector3): Block | undefined;
    getEntities(options?: EntityQueryOptions): Entity[];
    getEntitiesAtBlockLocation(location: Vector3): Entity[];
    getPlayers(options?: EntityQueryOptions): Player[];
    runCommand(commandString: string): CommandResult;
    runCommandAsync(commandString: string): Promise<CommandResult>;
}

export class Entity {
    private constructor();
    readonly dimension: Dimension;
    readonly id: string;
    readonly location: Vector3;
    nameTag: string;
    readonly typeId: string;
    addTag(tag: string): boolean;
    applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean;
    applyImpulse(vector: Vector3): void;
    applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void;
    clearVelocity(): void;
    getComponent(componentId: string): EntityComponent | undefined;
    getComponents(): EntityComponent[];
    getHeadLocation(): Vector3;
    getTags(): string[];
    getVelocity(): Vector3;
    getViewDirection(): Vector3;
    hasComponent(componentId: string): boolean;
    hasTag(tag: string): boolean;
    kill(): boolean;
    removeTag(tag: string): boolean;
    runCommand(commandString: string): CommandResult;
    runCommandAsync(commandString: string): Promise<CommandResult>;
}

export class EntityBaseMovementComponent extends EntityComponent {
    private constructor();
    readonly maxTurn: number;
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

export class EntityColorComponent extends EntityComponent {
    private constructor();
    value: number;
}

export class EntityComponent extends Component {
    private constructor();
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

export class EntityMovementFlyComponent extends EntityBaseMovementComponent {
    private constructor();
}

export class EntityMovementGenericComponent extends EntityBaseMovementComponent {
    private constructor();
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

export class EntityPushThroughComponent extends EntityComponent {
    private constructor();
    value: number;
}

export class EntityScaleComponent extends EntityComponent {
    private constructor();
    value: number;
}

export class EntitySkinIdComponent extends EntityComponent {
    private constructor();
    value: number;
}

export class EntityVariantComponent extends EntityComponent {
    private constructor();
    readonly value: number;
}

export class EntityWantsJockeyComponent extends EntityComponent {
    private constructor();
}

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

export class Player extends Entity {
    private constructor();
    readonly name: string;
    playSound(soundId: string, soundOptions?: PlayerSoundOptions): void;
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
}

export class System {
    private constructor();
    readonly currentTick: number;
    clearRun(runId: number): void;
    run(callback: () => void): number;
    runInterval(callback: () => void, tickInterval?: number): number;
    runTimeout(callback: () => void, tickDelay?: number): number;
}

export class World {
    private constructor();
    getAllPlayers(): Player[];
    getDimension(dimensionId: string): Dimension;
    getPlayers(options?: EntityQueryOptions): Player[];
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void;
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
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

export class CommandError {
    private constructor();
}

export class LocationInUnloadedChunkError {
    private constructor();
}

export class LocationOutOfWorldBoundariesError {
    private constructor();
}

export const system: System;
export const world: World;