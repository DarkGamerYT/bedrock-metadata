// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-bindings",
 *     "version": "1.6.0"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
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
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getComponent(componentId: string): BlockComponent | undefined;
    isValid(): boolean;
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
    readonly block: Block;
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

// @ts-ignore
export class ButtonPushAfterEvent extends BlockEvent {
    private constructor();
    readonly source: Entity;
}

// @ts-ignore
export class ButtonPushAfterEventSignal extends IButtonPushAfterEventSignal {
    private constructor();
}

export class Camera {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    clear(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    fade(fadeCameraOptions?: CameraFadeOptions): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
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
    isValid(): boolean;
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
     */
    getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit | undefined;
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
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[];
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
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setWeather(weatherType: WeatherType, duration?: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link EntitySpawnError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    spawnEntity(identifier: string, location: Vector3): Entity;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    spawnItem(itemStack: ItemStack, location: Vector3): Entity;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
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
    /**
     * @throws This property can throw errors.
     */
    readonly typeId: string;
    isValid(): boolean;
}

export class EffectType {
    private constructor();
    getName(): string;
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
    readonly isClimbing: boolean;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidEntityError}
     */
    readonly isFalling: boolean;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidEntityError}
     */
    readonly isInWater: boolean;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidEntityError}
     */
    readonly isOnGround: boolean;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidEntityError}
     */
    readonly isSleeping: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    isSneaking: boolean;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidEntityError}
     */
    readonly isSprinting: boolean;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidEntityError}
     */
    readonly isSwimming: boolean;
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
    readonly scoreboardIdentity?: ScoreboardIdentity;
    readonly typeId: string;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): Effect | undefined;
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
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    getComponent(componentId: string): EntityComponent | undefined;
    getComponents(): EntityComponent[];
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    getEffect(effectType: EffectType | string): Effect | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getEffects(): Effect[];
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[];
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
    getProperty(identifier: string): boolean | number | string | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getRotation(): Vector2;
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
    isValid(): boolean;
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
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    removeEffect(effectType: EffectType | string): boolean;
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
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link InvalidEntityError}
     */
    resetProperty(identifier: string): boolean | number | string;
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
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    setProperty(identifier: string, value: boolean | number | string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    setRotation(rotation: Vector2): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    teleport(location: Vector3, teleportOptions?: TeleportOptions): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    triggerEvent(eventName: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean;
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

export class EntityDieAfterEvent {
    private constructor();
    readonly damageSource: EntityDamageSource;
    readonly deadEntity: Entity;
}

export class EntityDieAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg0: EntityDieAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityDieAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
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
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
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
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg0: EntityHealthChangedAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHealthChangedAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
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
}

export class EntityHitBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg0: EntityHitBlockAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHitBlockAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: EntityHitBlockAfterEvent) => void): void;
}

export class EntityHitEntityAfterEvent {
    private constructor();
    readonly damagingEntity: Entity;
    readonly hitEntity: Entity;
}

export class EntityHitEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg0: EntityHitEntityAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHitEntityAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
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
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg0: EntityHurtAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHurtAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
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

export class EntityLoadAfterEvent {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    entity: Entity;
}

export class EntityLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: EntityLoadAfterEvent) => void): (arg0: EntityLoadAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: EntityLoadAfterEvent) => void): void;
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

export class EntityRemoveAfterEvent {
    private constructor();
    readonly removedEntityId: string;
    readonly typeId: string;
}

export class EntityRemoveAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg0: EntityRemoveAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityRemoveAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: EntityRemoveAfterEvent) => void): void;
}

export class EntityRemoveBeforeEvent {
    private constructor();
    readonly removedEntity: Entity;
}

export class EntityRemoveBeforeEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): (arg0: EntityRemoveBeforeEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): void;
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

export class EntitySpawnAfterEvent {
    private constructor();
    readonly cause: EntityInitializationCause;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    entity: Entity;
}

export class EntitySpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: EntitySpawnAfterEvent) => void): (arg0: EntitySpawnAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: EntitySpawnAfterEvent) => void): void;
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

export class IButtonPushAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: ButtonPushAfterEvent) => void): (arg0: ButtonPushAfterEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: ButtonPushAfterEvent) => void): void;
}

export class ILeverActionAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: LeverActionAfterEvent) => void): (arg0: LeverActionAfterEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: LeverActionAfterEvent) => void): void;
}

export class IPlayerJoinAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: PlayerJoinAfterEvent) => void): (arg0: PlayerJoinAfterEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: PlayerJoinAfterEvent) => void): void;
}

export class IPlayerLeaveAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): (arg0: PlayerLeaveAfterEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): void;
}

export class IPlayerSpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): (arg0: PlayerSpawnAfterEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): void;
}

export class ItemCompleteUseAfterEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemCompleteUseAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: ItemCompleteUseAfterEvent) => void): (arg0: ItemCompleteUseAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: ItemCompleteUseAfterEvent) => void): void;
}

// @ts-ignore
export class ItemComponent extends Component {
    private constructor();
}

export class ItemReleaseUseAfterEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemReleaseUseAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): (arg0: ItemReleaseUseAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): void;
}

export class ItemStack {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    amount: number;
    readonly isStackable: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    keepOnDeath: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    lockMode: ItemLockMode;
    readonly maxAmount: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    nameTag?: string;
    readonly "type": ItemType;
    readonly typeId: string;
    /**
     * @throws This function can throw errors.
     */
    constructor(itemType: ItemType | string, amount?: number);
    clone(): ItemStack;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getCanDestroy(): string[];
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getCanPlaceOn(): string[];
    getComponent(componentId: string): ItemComponent | undefined;
    getComponents(): ItemComponent[];
    getLore(): string[];
    getTags(): string[];
    hasComponent(componentId: string): boolean;
    hasTag(tag: string): boolean;
    isStackableWith(itemStack: ItemStack): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link Error}
     */
    setLore(loreList?: (RawMessage | string)[]): void;
}

export class ItemStartUseAfterEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemStartUseAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: ItemStartUseAfterEvent) => void): (arg0: ItemStartUseAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
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
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): (arg0: ItemStartUseOnAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
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
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: ItemStopUseAfterEvent) => void): (arg0: ItemStopUseAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
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
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): (arg0: ItemStopUseOnAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): void;
}

export class ItemType {
    private constructor();
    readonly id: string;
}

export class ItemUseAfterEvent {
    private constructor();
    itemStack: ItemStack;
    readonly source: Player;
}

export class ItemUseAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: ItemUseAfterEvent) => void): (arg0: ItemUseAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: ItemUseAfterEvent) => void): void;
}

// @ts-ignore
export class ItemUseBeforeEvent extends ItemUseAfterEvent {
    private constructor();
    cancel: boolean;
}

export class ItemUseBeforeEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: ItemUseBeforeEvent) => void): (arg0: ItemUseBeforeEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: ItemUseBeforeEvent) => void): void;
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
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: ItemUseOnAfterEvent) => void): (arg0: ItemUseOnAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: ItemUseOnAfterEvent) => void): void;
}

// @ts-ignore
export class ItemUseOnBeforeEvent extends ItemUseOnAfterEvent {
    private constructor();
    cancel: boolean;
}

export class ItemUseOnBeforeEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: ItemUseOnBeforeEvent) => void): (arg0: ItemUseOnBeforeEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: ItemUseOnBeforeEvent) => void): void;
}

// @ts-ignore
export class LeverActionAfterEvent extends BlockEvent {
    private constructor();
    readonly isPowered: boolean;
    readonly player: Player;
}

// @ts-ignore
export class LeverActionAfterEventSignal extends ILeverActionAfterEventSignal {
    private constructor();
}

export class MinecraftDimensionTypes {
    private constructor();
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
    /**
     * @throws This property can throw errors.
     */
    readonly totalXpNeededForNextLevel: number;
    /**
     * @throws This property can throw errors.
     */
    readonly xpEarnedAtCurrentLevel: number;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addExperience(amount: number): number;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addLevels(amount: number): number;
    /**
     * @throws This function can throw errors.
     */
    getSpawnPoint(): DimensionLocation | undefined;
    /**
     * @throws This function can throw errors.
     */
    getTotalXp(): number;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    playSound(soundId: string, soundOptions?: PlayerSoundOptions): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
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
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setSpawnPoint(spawnPoint?: DimensionLocation): void;
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
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg0: PlayerBreakBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerBreakBlockAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
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
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg0: PlayerBreakBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerBreakBlockBeforeEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: PlayerBreakBlockBeforeEvent) => void): void;
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
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: PlayerDimensionChangeAfterEvent) => void): (arg0: PlayerDimensionChangeAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: PlayerDimensionChangeAfterEvent) => void): void;
}

export class PlayerJoinAfterEvent {
    private constructor();
    readonly playerId: string;
    readonly playerName: string;
}

// @ts-ignore
export class PlayerJoinAfterEventSignal extends IPlayerJoinAfterEventSignal {
    private constructor();
}

export class PlayerLeaveAfterEvent {
    private constructor();
    readonly playerId: string;
    readonly playerName: string;
}

// @ts-ignore
export class PlayerLeaveAfterEventSignal extends IPlayerLeaveAfterEventSignal {
    private constructor();
}

// @ts-ignore
export class PlayerPlaceBlockAfterEvent extends BlockEvent {
    private constructor();
    readonly player: Player;
}

export class PlayerPlaceBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg0: PlayerPlaceBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerPlaceBlockAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: PlayerPlaceBlockAfterEvent) => void): void;
}

export class PlayerSpawnAfterEvent {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    initialSpawn: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    player: Player;
}

// @ts-ignore
export class PlayerSpawnAfterEventSignal extends IPlayerSpawnAfterEventSignal {
    private constructor();
}

// @ts-ignore
export class PressurePlatePopAfterEvent extends BlockEvent {
    private constructor();
    readonly previousRedstonePower: number;
    readonly redstonePower: number;
}

export class PressurePlatePopAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): (arg0: PressurePlatePopAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
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
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): (arg0: PressurePlatePushAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): void;
}

export class ProjectileHitBlockAfterEvent {
    private constructor();
    readonly dimension: Dimension;
    readonly hitVector: Vector3;
    readonly location: Vector3;
    readonly projectile: Entity;
    readonly source?: Entity;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getBlockHit(): BlockHitInformation;
}

export class ProjectileHitBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): (arg0: ProjectileHitBlockAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): void;
}

export class ProjectileHitEntityAfterEvent {
    private constructor();
    readonly dimension: Dimension;
    readonly hitVector: Vector3;
    readonly location: Vector3;
    readonly projectile: Entity;
    readonly source?: Entity;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getEntityHit(): EntityHitInformation;
}

export class ProjectileHitEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): (arg0: ProjectileHitEntityAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): void;
}

export class Scoreboard {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addObjective(objectiveId: string, displayName?: string): ScoreboardObjective;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective | undefined;
    getObjective(objectiveId: string): ScoreboardObjective | undefined;
    getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions | undefined;
    getObjectives(): ScoreboardObjective[];
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    removeObjective(objectiveId: ScoreboardObjective | string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
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
    readonly "type": ScoreboardIdentityType;
    /**
     * @throws This function can throw errors.
     */
    getEntity(): Entity | undefined;
    isValid(): boolean;
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
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
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
    isValid(): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
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
    isValid(): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     */
    setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     */
    setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
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
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg0: ScriptEventCommandMessageAfterEvent) => void,
        options?: ScriptEventMessageFilterOptions,
    ): (arg0: ScriptEventCommandMessageAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: ScriptEventCommandMessageAfterEvent) => void): void;
}

export class System {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly afterEvents: SystemAfterEvents;
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

export class SystemAfterEvents {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;
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
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): (arg0: TargetBlockHitAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): void;
}

// @ts-ignore
export class TripWireTripAfterEvent extends BlockEvent {
    private constructor();
    readonly isPowered: boolean;
    readonly sources: Entity[];
}

export class TripWireTripAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: TripWireTripAfterEvent) => void): (arg0: TripWireTripAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: TripWireTripAfterEvent) => void): void;
}

export class World {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly afterEvents: WorldAfterEvents;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly beforeEvents: WorldBeforeEvents;
    readonly scoreboard: Scoreboard;
    getAbsoluteTime(): number;
    /**
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getAllPlayers(): Player[];
    getDay(): number;
    getDefaultSpawnLocation(): Vector3;
    /**
     * @throws This function can throw errors.
     */
    getDimension(dimensionId: string): Dimension;
    getMoonPhase(): MoonPhase;
    /**
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    getTimeOfDay(): number;
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
    setAbsoluteTime(absoluteTime: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setDefaultSpawnLocation(spawnLocation: Vector3): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setTimeOfDay(timeOfDay: number | TimeOfDay): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    stopMusic(): void;
}

export class WorldAfterEvents {
    private constructor();
    readonly buttonPush: ButtonPushAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityDie: EntityDieAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityHealthChanged: EntityHealthChangedAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityHitBlock: EntityHitBlockAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityHitEntity: EntityHitEntityAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityHurt: EntityHurtAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityLoad: EntityLoadAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityRemove: EntityRemoveAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entitySpawn: EntitySpawnAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly itemCompleteUse: ItemCompleteUseAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly itemReleaseUse: ItemReleaseUseAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly itemStartUse: ItemStartUseAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly itemStartUseOn: ItemStartUseOnAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly itemStopUse: ItemStopUseAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly itemStopUseOn: ItemStopUseOnAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly itemUse: ItemUseAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly itemUseOn: ItemUseOnAfterEventSignal;
    readonly leverAction: LeverActionAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal;
    readonly playerJoin: PlayerJoinAfterEventSignal;
    readonly playerLeave: PlayerLeaveAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal;
    readonly playerSpawn: PlayerSpawnAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly pressurePlatePop: PressurePlatePopAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly pressurePlatePush: PressurePlatePushAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly targetBlockHit: TargetBlockHitAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly tripWireTrip: TripWireTripAfterEventSignal;
}

export class WorldBeforeEvents {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityRemove: EntityRemoveBeforeEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly itemUse: ItemUseBeforeEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly itemUseOn: ItemUseOnBeforeEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal;
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

export interface DimensionLocation {
    dimension: Dimension;
    x: number;
    y: number;
    z: number;
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
    maxDistance?: number;
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
export class EntitySpawnError extends Error {
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

export const MoonPhaseCount = 8;
export const system: System;
export const world: World;