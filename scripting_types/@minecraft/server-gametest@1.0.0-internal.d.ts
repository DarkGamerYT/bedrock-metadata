// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @internal
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-gametest",
 *     "version": "1.0.0-internal"
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
     * This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
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
     *
     * This function can't be called in read-only mode.
     */
    getCursorPosition(index: number): minecraftserver.Vector3;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    getNumberOfCursors(): number;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
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
     *
     * This function can't be called in read-only mode.
     */
    attack(): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    attackEntity(entity: minecraftserver.Entity): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    breakBlock(blockLocation: minecraftserver.Vector3, direction?: minecraftserver.Direction): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    chat(message: string): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    disconnect(): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    dropSelectedItem(): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    fly(): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    giveItem(itemStack: minecraftserver.ItemStack, selectSlot?: boolean): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    glide(): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    interact(): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    interactWithBlock(blockLocation: minecraftserver.Vector3, direction?: minecraftserver.Direction): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    interactWithEntity(entity: minecraftserver.Entity): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    jump(): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    lookAtBlock(blockLocation: minecraftserver.Vector3, duration?: LookDuration): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    lookAtEntity(entity: minecraftserver.Entity, duration?: LookDuration): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    lookAtLocation(location: minecraftserver.Vector3, duration?: LookDuration): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    move(westEast: number, northSouth: number, speed?: number): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    moveRelative(leftRight: number, backwardForward: number, speed?: number): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    moveToBlock(blockLocation: minecraftserver.Vector3, options?: MoveToOptions): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    moveToLocation(location: minecraftserver.Vector3, options?: MoveToOptions): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    navigateToBlock(blockLocation: minecraftserver.Vector3, speed?: number): NavigationResult;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    navigateToEntity(entity: minecraftserver.Entity, speed?: number): NavigationResult;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    navigateToLocation(location: minecraftserver.Vector3, speed?: number): NavigationResult;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    navigateToLocations(locations: minecraftserver.Vector3[], speed?: number): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    respawn(): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    rotateBody(angleInDegrees: number): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setBodyRotation(angleInDegrees: number): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    setItem(itemStack: minecraftserver.ItemStack, slot: number, selectSlot?: boolean): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    startBuild(slot?: number): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    stopBreakingBlock(): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    stopBuild(): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    stopFlying(): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    stopGliding(): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    stopInteracting(): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    stopMoving(): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    stopSwimming(): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    stopUsingItem(): minecraftserver.ItemStack | undefined;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    swim(): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    useItem(itemStack: minecraftserver.ItemStack): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    useItemInSlot(slot: number): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    useItemInSlotOnBlock(
        slot: number,
        blockLocation: minecraftserver.Vector3,
        direction?: minecraftserver.Direction,
        faceLocation?: minecraftserver.Vector3,
    ): boolean;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
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
    assertBlockState(blockLocation: minecraftserver.Vector3, callback: (arg0: minecraftserver.Block) => boolean): void;
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
        callback: (arg0: minecraftserver.Entity) => boolean,
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
     * This function can't be called in read-only mode.
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
     * This function can't be called in read-only mode.
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
     * This function can't be called in read-only mode.
     *
     * {@link GameTestError}
     */
    getFenceConnectivity(blockLocation: minecraftserver.Vector3): FenceConnectivity;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link GameTestError}
     */
    getSculkSpreader(blockLocation: minecraftserver.Vector3): SculkSpreader | undefined;
    getTestDirection(): minecraftserver.Direction;
    idle(tickDelay: number): Promise<void>;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link GameTestError}
     */
    killAllEntities(): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link GameTestError}
     */
    onPlayerJump(mob: minecraftserver.Entity, jumpAmount: number): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link GameTestError}
     */
    pressButton(blockLocation: minecraftserver.Vector3): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link GameTestError}
     */
    print(text: string): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link GameTestError}
     */
    pullLever(blockLocation: minecraftserver.Vector3): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
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
     * This function can't be called in read-only mode.
     *
     * {@link GameTestError}
     */
    relativeLocation(worldLocation: minecraftserver.Vector3): minecraftserver.Vector3;
    removeSimulatedPlayer(simulatedPlayer: SimulatedPlayer): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link GameTestError}
     */
    rotateDirection(direction: minecraftserver.Direction): minecraftserver.Direction;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link GameTestError}
     */
    rotateVector(vector: minecraftserver.Vector3): minecraftserver.Vector3;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    runAfterDelay(delayTicks: number, callback: () => void): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    runAtTickTime(tick: number, callback: () => void): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link GameTestError}
     */
    setBlockPermutation(blockData: minecraftserver.BlockPermutation, blockLocation: minecraftserver.Vector3): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link GameTestError}
     */
    setBlockType(blockType: minecraftserver.BlockType | string, blockLocation: minecraftserver.Vector3): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link GameTestError}
     */
    setFluidContainer(location: minecraftserver.Vector3, type: minecraftserver.FluidType): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link GameTestError}
     */
    setTntFuse(entity: minecraftserver.Entity, fuseLength: number): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link GameTestError}
     */
    spawn(entityTypeIdentifier: string, blockLocation: minecraftserver.Vector3): minecraftserver.Entity;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link GameTestError}
     */
    spawnAtLocation(entityTypeIdentifier: string, location: minecraftserver.Vector3): minecraftserver.Entity;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link GameTestError}
     */
    spawnItem(itemStack: minecraftserver.ItemStack, location: minecraftserver.Vector3): minecraftserver.Entity;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
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
     * This function can't be called in read-only mode.
     *
     * {@link GameTestError}
     */
    spawnWithoutBehaviors(entityTypeIdentifier: string, blockLocation: minecraftserver.Vector3): minecraftserver.Entity;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
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
     * This function can't be called in read-only mode.
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
     *
     * This function can't be called in read-only mode.
     */
    succeed(): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    succeedIf(callback: () => void): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    succeedOnTick(tick: number): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    succeedOnTickWhen(tick: number, callback: () => void): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    succeedWhen(callback: () => void): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
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
     *
     * This function can't be called in read-only mode.
     */
    succeedWhenEntityHasComponent(
        entityTypeIdentifier: string,
        componentIdentifier: string,
        blockLocation: minecraftserver.Vector3,
        hasComponent: boolean,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     */
    succeedWhenEntityPresent(
        entityTypeIdentifier: string,
        blockLocation: minecraftserver.Vector3,
        isPresent?: boolean,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link GameTestError}
     */
    triggerInternalBlockEvent(blockLocation: minecraftserver.Vector3, event: string, eventParameters?: number[]): void;
    until(callback: () => void): Promise<void>;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
     *
     * {@link GameTestError}
     */
    walkTo(mob: minecraftserver.Entity, blockLocation: minecraftserver.Vector3, speedModifier?: number): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can't be called in read-only mode.
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

// @ts-ignore
export class GameTestError extends Error {
    private constructor();
    readonly context?: GameTestErrorContext;
    readonly messageParameters: string[];
    readonly "type": GameTestErrorType;
}

export function register(
    testClassName: string,
    testName: string,
    testFunction: (arg0: Test) => void,
): RegistrationBuilder;
export function registerAsync(
    testClassName: string,
    testName: string,
    testFunction: (arg0: Test) => Promise<void>,
): RegistrationBuilder;