// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @alpha
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-gametest",
 *     "version": "2.0.0-alpha"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
export enum GameTestErrorType {
    Assert = "Assert",
    AssertAtPosition = "AssertAtPosition",
    ExecutionTimeout = "ExecutionTimeout",
    ExhaustedAttempts = "ExhaustedAttempts",
    FailConditionsMet = "FailConditionsMet",
    LevelStateModificationFailed = "LevelStateModificationFailed",
    MethodNotImplemented = "MethodNotImplemented",
    SimulatedPlayerOutOfBounds = "SimulatedPlayerOutOfBounds",
    Unknown = "Unknown",
    Waiting = "Waiting",
}

export enum LookDuration {
    Continuous = "Continuous",
    Instant = "Instant",
    UntilMove = "UntilMove",
}

export class FenceConnectivity {
    private constructor();
    readonly east: boolean;
    readonly north: boolean;
    readonly south: boolean;
    readonly west: boolean;
}

export class GameTestDebug {
    private constructor();
    static crash(): void;
    static debugFail(message: string): void;
    static timeout(duration: number): void;
}

export class GameTestSequence {
    private constructor();
    thenExecute(callback: () => void): GameTestSequence;
    thenExecuteAfter(delayTicks: number, callback: () => void): GameTestSequence;
    thenExecuteFor(tickCount: number, callback: () => void): GameTestSequence;
    thenFail(errorMessage: string): void;
    thenIdle(delayTicks: number): GameTestSequence;
    thenSucceed(): void;
    thenWait(callback: () => void): GameTestSequence;
    thenWaitAfter(delayTicks: number, callback: () => void): GameTestSequence;
}

export class NavigationResult {
    private constructor();
    readonly isFullPath: boolean;
    getPath(): minecraftserver.Vector3[];
}

export class RegistrationBuilder {
    private constructor();
    batch(batchName: string): RegistrationBuilder;
    maxAttempts(attemptCount: number): RegistrationBuilder;
    maxTicks(tickCount: number): RegistrationBuilder;
    padding(paddingBlocks: number): RegistrationBuilder;
    required(isRequired: boolean): RegistrationBuilder;
    requiredSuccessfulAttempts(attemptCount: number): RegistrationBuilder;
    rotateTest(rotate: boolean): RegistrationBuilder;
    setupTicks(tickCount: number): RegistrationBuilder;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    structureLocation(
        structureLocation: minecraftserver.Vector3,
        structureDimension?: minecraftserver.DimensionType | string,
    ): RegistrationBuilder;
    structureName(structureName: string): RegistrationBuilder;
    tag(tag: string): RegistrationBuilder;
}

export class SculkSpreader {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly maxCharge: number;
    addCursorsWithOffset(offset: minecraftserver.Vector3, charge: number): void;
    /**
     * @throws This function can throw errors.
     */
    getCursorPosition(index: number): minecraftserver.Vector3;
    /**
     * @throws This function can throw errors.
     */
    getNumberOfCursors(): number;
    /**
     * @throws This function can throw errors.
     */
    getTotalCharge(): number;
}

// @ts-ignore
export class SimulatedPlayer extends minecraftserver.Player {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly headRotation: minecraftserver.Vector2;
    isSprinting: boolean;
    /**
     * @throws This function can throw errors.
     */
    attack(): boolean;
    /**
     * @throws This function can throw errors.
     */
    attackEntity(entity: minecraftserver.Entity): boolean;
    /**
     * @throws This function can throw errors.
     */
    breakBlock(blockLocation: minecraftserver.Vector3, direction?: minecraftserver.Direction): boolean;
    /**
     * @throws This function can throw errors.
     */
    chat(message: string): void;
    /**
     * @throws This function can throw errors.
     */
    disconnect(): void;
    /**
     * @throws This function can throw errors.
     */
    dropSelectedItem(): boolean;
    /**
     * @throws This function can throw errors.
     */
    fly(): void;
    /**
     * @throws This function can throw errors.
     */
    giveItem(itemStack: minecraftserver.ItemStack, selectSlot?: boolean): boolean;
    /**
     * @throws This function can throw errors.
     */
    glide(): boolean;
    /**
     * @throws This function can throw errors.
     */
    interact(): boolean;
    /**
     * @throws This function can throw errors.
     */
    interactWithBlock(blockLocation: minecraftserver.Vector3, direction?: minecraftserver.Direction): boolean;
    /**
     * @throws This function can throw errors.
     */
    interactWithEntity(entity: minecraftserver.Entity): boolean;
    /**
     * @throws This function can throw errors.
     */
    jump(): boolean;
    /**
     * @throws This function can throw errors.
     */
    lookAtBlock(blockLocation: minecraftserver.Vector3, duration?: LookDuration): void;
    /**
     * @throws This function can throw errors.
     */
    lookAtEntity(entity: minecraftserver.Entity, duration?: LookDuration): void;
    /**
     * @throws This function can throw errors.
     */
    lookAtLocation(location: minecraftserver.Vector3, duration?: LookDuration): void;
    /**
     * @throws This function can throw errors.
     */
    move(westEast: number, northSouth: number, speed?: number): void;
    /**
     * @throws This function can throw errors.
     */
    moveRelative(leftRight: number, backwardForward: number, speed?: number): void;
    /**
     * @throws This function can throw errors.
     */
    moveToBlock(blockLocation: minecraftserver.Vector3, options?: MoveToOptions): void;
    /**
     * @throws This function can throw errors.
     */
    moveToLocation(location: minecraftserver.Vector3, options?: MoveToOptions): void;
    /**
     * @throws This function can throw errors.
     */
    navigateToBlock(blockLocation: minecraftserver.Vector3, speed?: number): NavigationResult;
    /**
     * @throws This function can throw errors.
     */
    navigateToEntity(entity: minecraftserver.Entity, speed?: number): NavigationResult;
    /**
     * @throws This function can throw errors.
     */
    navigateToLocation(location: minecraftserver.Vector3, speed?: number): NavigationResult;
    /**
     * @throws This function can throw errors.
     */
    navigateToLocations(locations: minecraftserver.Vector3[], speed?: number): void;
    /**
     * @throws This function can throw errors.
     */
    respawn(): boolean;
    /**
     * @throws This function can throw errors.
     */
    rotateBody(angleInDegrees: number): void;
    /**
     * @throws This function can throw errors.
     */
    setBodyRotation(angleInDegrees: number): void;
    /**
     * @throws This function can throw errors.
     */
    setItem(itemStack: minecraftserver.ItemStack, slot: number, selectSlot?: boolean): boolean;
    /**
     * @throws This function can throw errors.
     */
    startBuild(slot?: number): void;
    /**
     * @throws This function can throw errors.
     */
    stopBreakingBlock(): void;
    /**
     * @throws This function can throw errors.
     */
    stopBuild(): void;
    /**
     * @throws This function can throw errors.
     */
    stopFlying(): void;
    /**
     * @throws This function can throw errors.
     */
    stopGliding(): void;
    /**
     * @throws This function can throw errors.
     */
    stopInteracting(): void;
    /**
     * @throws This function can throw errors.
     */
    stopMoving(): void;
    /**
     * @throws This function can throw errors.
     */
    stopSwimming(): void;
    /**
     * @throws This function can throw errors.
     */
    stopUsingItem(): minecraftserver.ItemStack | undefined;
    /**
     * @throws This function can throw errors.
     */
    swim(): void;
    /**
     * @throws This function can throw errors.
     */
    useItem(itemStack: minecraftserver.ItemStack): boolean;
    /**
     * @throws This function can throw errors.
     */
    useItemInSlot(slot: number): boolean;
    /**
     * @throws This function can throw errors.
     */
    useItemInSlotOnBlock(
        slot: number,
        blockLocation: minecraftserver.Vector3,
        direction?: minecraftserver.Direction,
        faceLocation?: minecraftserver.Vector3,
    ): boolean;
    /**
     * @throws This function can throw errors.
     */
    useItemOnBlock(
        itemStack: minecraftserver.ItemStack,
        blockLocation: minecraftserver.Vector3,
        direction?: minecraftserver.Direction,
        faceLocation?: minecraftserver.Vector3,
    ): boolean;
}

export class Tags {
    private constructor();
}

export class Test {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    assert(condition: boolean, message: string): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    assertBlockPresent(
        blockType: minecraftserver.BlockType | string,
        blockLocation: minecraftserver.Vector3,
        isPresent?: boolean,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    assertBlockState(blockLocation: minecraftserver.Vector3, callback: (arg: minecraftserver.Block) => boolean): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    assertCanReachLocation(mob: minecraftserver.Entity, blockLocation: minecraftserver.Vector3, canReach?: boolean): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    assertContainerContains(itemStack: minecraftserver.ItemStack, blockLocation: minecraftserver.Vector3): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    assertContainerEmpty(blockLocation: minecraftserver.Vector3): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    assertEntityHasArmor(
        entityTypeIdentifier: string,
        armorSlot: number,
        armorName: string,
        armorData: number,
        blockLocation: minecraftserver.Vector3,
        hasArmor?: boolean,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    assertEntityHasComponent(
        entityTypeIdentifier: string,
        componentIdentifier: string,
        blockLocation: minecraftserver.Vector3,
        hasComponent?: boolean,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    assertEntityInstancePresent(
        entity: minecraftserver.Entity,
        blockLocation: minecraftserver.Vector3,
        isPresent?: boolean,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    assertEntityInstancePresentInArea(entity: minecraftserver.Entity, isPresent?: boolean): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    assertEntityPresent(
        entityTypeIdentifier: string,
        blockLocation: minecraftserver.Vector3,
        searchDistance?: number,
        isPresent?: boolean,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    assertEntityPresentInArea(entityTypeIdentifier: string, isPresent?: boolean): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    assertEntityState(
        blockLocation: minecraftserver.Vector3,
        entityTypeIdentifier: string,
        callback: (arg: minecraftserver.Entity) => boolean,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    assertEntityTouching(entityTypeIdentifier: string, location: minecraftserver.Vector3, isTouching?: boolean): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    assertIsWaterlogged(blockLocation: minecraftserver.Vector3, isWaterlogged?: boolean): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    assertItemEntityCountIs(
        itemType: minecraftserver.ItemType | string,
        blockLocation: minecraftserver.Vector3,
        searchDistance: number,
        count: number,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    assertItemEntityPresent(
        itemType: minecraftserver.ItemType | string,
        blockLocation: minecraftserver.Vector3,
        searchDistance?: number,
        isPresent?: boolean,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    assertRedstonePower(blockLocation: minecraftserver.Vector3, power: number): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    destroyBlock(blockLocation: minecraftserver.Vector3, dropResources?: boolean): void;
    /**
     * @throws This function can throw errors.
     */
    fail(errorMessage: string): void;
    /**
     * @throws This function can throw errors.
     */
    failIf(callback: () => void): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    getBlock(blockLocation: minecraftserver.Vector3): minecraftserver.Block;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    getDimension(): minecraftserver.Dimension;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    getFenceConnectivity(blockLocation: minecraftserver.Vector3): FenceConnectivity;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    getSculkSpreader(blockLocation: minecraftserver.Vector3): SculkSpreader | undefined;
    getTestDirection(): minecraftserver.Direction;
    idle(tickDelay: number): Promise<void>;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    killAllEntities(): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    onPlayerJump(mob: minecraftserver.Entity, jumpAmount: number): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    pressButton(blockLocation: minecraftserver.Vector3): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    print(text: string): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    pullLever(blockLocation: minecraftserver.Vector3): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    pulseRedstone(blockLocation: minecraftserver.Vector3, duration: number): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    relativeBlockLocation(worldBlockLocation: minecraftserver.Vector3): minecraftserver.Vector3;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    relativeLocation(worldLocation: minecraftserver.Vector3): minecraftserver.Vector3;
    removeSimulatedPlayer(simulatedPlayer: SimulatedPlayer): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    rotateDirection(direction: minecraftserver.Direction): minecraftserver.Direction;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    rotateVector(vector: minecraftserver.Vector3): minecraftserver.Vector3;
    /**
     * @throws This function can throw errors.
     */
    runAfterDelay(delayTicks: number, callback: () => void): void;
    /**
     * @throws This function can throw errors.
     */
    runAtTickTime(tick: number, callback: () => void): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    setBlockPermutation(blockData: minecraftserver.BlockPermutation, blockLocation: minecraftserver.Vector3): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    setBlockType(blockType: minecraftserver.BlockType | string, blockLocation: minecraftserver.Vector3): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    setFluidContainer(location: minecraftserver.Vector3, type: minecraftserver.FluidType): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    setTntFuse(entity: minecraftserver.Entity, fuseLength: number): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    spawn(entityTypeIdentifier: string, blockLocation: minecraftserver.Vector3): minecraftserver.Entity;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    spawnAtLocation(entityTypeIdentifier: string, location: minecraftserver.Vector3): minecraftserver.Entity;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    spawnItem(itemStack: minecraftserver.ItemStack, location: minecraftserver.Vector3): minecraftserver.Entity;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    spawnSimulatedPlayer(
        blockLocation: minecraftserver.Vector3,
        name: string,
        gameMode?: minecraftserver.GameMode,
    ): SimulatedPlayer;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    spawnWithoutBehaviors(entityTypeIdentifier: string, blockLocation: minecraftserver.Vector3): minecraftserver.Entity;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    spawnWithoutBehaviorsAtLocation(
        entityTypeIdentifier: string,
        location: minecraftserver.Vector3,
    ): minecraftserver.Entity;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    spreadFromFaceTowardDirection(
        blockLocation: minecraftserver.Vector3,
        fromFace: minecraftserver.Direction,
        direction: minecraftserver.Direction,
    ): void;
    startSequence(): GameTestSequence;
    /**
     * @throws This function can throw errors.
     */
    succeed(): void;
    /**
     * @throws This function can throw errors.
     */
    succeedIf(callback: () => void): void;
    /**
     * @throws This function can throw errors.
     */
    succeedOnTick(tick: number): void;
    /**
     * @throws This function can throw errors.
     */
    succeedOnTickWhen(tick: number, callback: () => void): void;
    /**
     * @throws This function can throw errors.
     */
    succeedWhen(callback: () => void): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    succeedWhenBlockPresent(
        blockType: minecraftserver.BlockType | string,
        blockLocation: minecraftserver.Vector3,
        isPresent?: boolean,
    ): void;
    /**
     * @throws This function can throw errors.
     */
    succeedWhenEntityHasComponent(
        entityTypeIdentifier: string,
        componentIdentifier: string,
        blockLocation: minecraftserver.Vector3,
        hasComponent: boolean,
    ): void;
    /**
     * @throws This function can throw errors.
     */
    succeedWhenEntityPresent(
        entityTypeIdentifier: string,
        blockLocation: minecraftserver.Vector3,
        isPresent?: boolean,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    triggerInternalBlockEvent(blockLocation: minecraftserver.Vector3, event: string, eventParameters?: number[]): void;
    until(callback: () => void): Promise<void>;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    walkTo(mob: minecraftserver.Entity, blockLocation: minecraftserver.Vector3, speedModifier?: number): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    walkToLocation(mob: minecraftserver.Entity, location: minecraftserver.Vector3, speedModifier?: number): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    worldBlockLocation(relativeBlockLocation: minecraftserver.Vector3): minecraftserver.Vector3;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    worldLocation(relativeLocation: minecraftserver.Vector3): minecraftserver.Vector3;
}

export interface GameTestErrorContext {
    absolutePosition: minecraftserver.Vector3;
    relativePosition: minecraftserver.Vector3;
    tickCount: number;
}

export interface MoveToOptions {
    faceTarget?: boolean;
    speed?: number;
}

export class GameTestError {
    private constructor();
    readonly context?: GameTestErrorContext;
    readonly messageParameters: string[];
    readonly "type": GameTestErrorType;
}

export function register(
    testClassName: string,
    testName: string,
    testFunction: (arg: Test) => void,
): RegistrationBuilder;
export function registerAsync(
    testClassName: string,
    testName: string,
    testFunction: (arg: Test) => Promise<void>,
): RegistrationBuilder;