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
    /**
     * @remarks This function can't be called in read-only mode.
     */
    static crash(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    static debugFail(message: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    static timeout(duration: number): void;
}

export class GameTestSequence {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    thenExecute(callback: () => void): GameTestSequence;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    thenExecuteAfter(delayTicks: number, callback: () => void): GameTestSequence;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    thenExecuteFor(tickCount: number, callback: () => void): GameTestSequence;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    thenFail(errorMessage: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    thenIdle(delayTicks: number): GameTestSequence;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    thenSucceed(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    thenWait(callback: () => void): GameTestSequence;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    thenWaitAfter(delayTicks: number, callback: () => void): GameTestSequence;
}

export class NavigationResult {
    private constructor();
    readonly isFullPath: boolean;
    getPath(): minecraftserver.Vector3[];
}

export class RegistrationBuilder {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    batch(batchName: string): RegistrationBuilder;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    maxAttempts(attemptCount: number): RegistrationBuilder;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    maxTicks(tickCount: number): RegistrationBuilder;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    padding(paddingBlocks: number): RegistrationBuilder;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    required(isRequired: boolean): RegistrationBuilder;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    requiredSuccessfulAttempts(attemptCount: number): RegistrationBuilder;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    rotateTest(rotate: boolean): RegistrationBuilder;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    setupTicks(tickCount: number): RegistrationBuilder;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     *
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
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    structureName(structureName: string): RegistrationBuilder;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    tag(tag: string): RegistrationBuilder;
}

export class SculkSpreader {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly maxCharge: number;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    addCursorsWithOffset(offset: minecraftserver.Vector3, charge: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getCursorPosition(index: number): minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getNumberOfCursors(): number;
    /**
     * @remarks This function can't be called in read-only mode.
     *
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
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    isSprinting: boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    attack(): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    attackEntity(entity: minecraftserver.Entity): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    breakBlock(blockLocation: minecraftserver.Vector3, direction?: minecraftserver.Direction): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    chat(message: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    disconnect(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    dropSelectedItem(): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    fly(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    giveItem(itemStack: minecraftserver.ItemStack, selectSlot?: boolean): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    glide(): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    interact(): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    interactWithBlock(blockLocation: minecraftserver.Vector3, direction?: minecraftserver.Direction): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    interactWithEntity(entity: minecraftserver.Entity): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    jump(): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    lookAtBlock(blockLocation: minecraftserver.Vector3, duration?: LookDuration): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    lookAtEntity(entity: minecraftserver.Entity, duration?: LookDuration): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    lookAtLocation(location: minecraftserver.Vector3, duration?: LookDuration): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    move(westEast: number, northSouth: number, speed?: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    moveRelative(leftRight: number, backwardForward: number, speed?: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    moveToBlock(blockLocation: minecraftserver.Vector3, options?: MoveToOptions): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    moveToLocation(location: minecraftserver.Vector3, options?: MoveToOptions): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    navigateToBlock(blockLocation: minecraftserver.Vector3, speed?: number): NavigationResult;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    navigateToEntity(entity: minecraftserver.Entity, speed?: number): NavigationResult;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    navigateToLocation(location: minecraftserver.Vector3, speed?: number): NavigationResult;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    navigateToLocations(locations: minecraftserver.Vector3[], speed?: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    respawn(): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    rotateBody(angleInDegrees: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setBodyRotation(angleInDegrees: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setItem(itemStack: minecraftserver.ItemStack, slot: number, selectSlot?: boolean): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    startBuild(slot?: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    stopBreakingBlock(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    stopBuild(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    stopFlying(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    stopGliding(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    stopInteracting(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    stopMoving(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    stopSwimming(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    stopUsingItem(): minecraftserver.ItemStack | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    swim(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    useItem(itemStack: minecraftserver.ItemStack): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    useItemInSlot(slot: number): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    useItemInSlotOnBlock(
        slot: number,
        blockLocation: minecraftserver.Vector3,
        direction?: minecraftserver.Direction,
        faceLocation?: minecraftserver.Vector3,
    ): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
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
     * @remarks This function can't be called in read-only mode.
     *
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
     * @remarks This function can't be called in read-only mode.
     *
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
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    getFenceConnectivity(blockLocation: minecraftserver.Vector3): FenceConnectivity;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    getSculkSpreader(blockLocation: minecraftserver.Vector3): SculkSpreader | undefined;
    getTestDirection(): minecraftserver.Direction;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    idle(tickDelay: number): Promise<void>;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    killAllEntities(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    onPlayerJump(mob: minecraftserver.Entity, jumpAmount: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    pressButton(blockLocation: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    print(text: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    pullLever(blockLocation: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
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
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    relativeLocation(worldLocation: minecraftserver.Vector3): minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    removeSimulatedPlayer(simulatedPlayer: SimulatedPlayer): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    rotateDirection(direction: minecraftserver.Direction): minecraftserver.Direction;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    rotateVector(vector: minecraftserver.Vector3): minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    runAfterDelay(delayTicks: number, callback: () => void): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    runAtTickTime(tick: number, callback: () => void): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    setBlockPermutation(blockData: minecraftserver.BlockPermutation, blockLocation: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    setBlockType(blockType: minecraftserver.BlockType | string, blockLocation: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    setFluidContainer(location: minecraftserver.Vector3, type: minecraftserver.FluidType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    setTntFuse(entity: minecraftserver.Entity, fuseLength: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    spawn(entityTypeIdentifier: string, blockLocation: minecraftserver.Vector3): minecraftserver.Entity;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    spawnAtLocation(entityTypeIdentifier: string, location: minecraftserver.Vector3): minecraftserver.Entity;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    spawnItem(itemStack: minecraftserver.ItemStack, location: minecraftserver.Vector3): minecraftserver.Entity;
    /**
     * @remarks This function can't be called in read-only mode.
     *
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
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    spawnWithoutBehaviors(entityTypeIdentifier: string, blockLocation: minecraftserver.Vector3): minecraftserver.Entity;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    spawnWithoutBehaviorsAtLocation(
        entityTypeIdentifier: string,
        location: minecraftserver.Vector3,
    ): minecraftserver.Entity;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    spreadFromFaceTowardDirection(
        blockLocation: minecraftserver.Vector3,
        fromFace: minecraftserver.Direction,
        direction: minecraftserver.Direction,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    startSequence(): GameTestSequence;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    succeed(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    succeedIf(callback: () => void): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    succeedOnTick(tick: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    succeedOnTickWhen(tick: number, callback: () => void): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    succeedWhen(callback: () => void): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
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
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    succeedWhenEntityHasComponent(
        entityTypeIdentifier: string,
        componentIdentifier: string,
        blockLocation: minecraftserver.Vector3,
        hasComponent: boolean,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    succeedWhenEntityPresent(
        entityTypeIdentifier: string,
        blockLocation: minecraftserver.Vector3,
        isPresent?: boolean,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    triggerInternalBlockEvent(blockLocation: minecraftserver.Vector3, event: string, eventParameters?: number[]): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    until(callback: () => void): Promise<void>;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     */
    walkTo(mob: minecraftserver.Entity, blockLocation: minecraftserver.Vector3, speedModifier?: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
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

// @ts-ignore
export class GameTestError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly context?: GameTestErrorContext;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly messageParameters: string[];
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly "type": GameTestErrorType;
}

/**
 * @remarks This function can be called in early-execution mode.
 *
 * This function can't be called in read-only mode.
 */
export function register(
    testClassName: string,
    testName: string,
    testFunction: (arg0: Test) => void,
): RegistrationBuilder;
/**
 * @remarks This function can be called in early-execution mode.
 *
 * This function can't be called in read-only mode.
 */
export function registerAsync(
    testClassName: string,
    testName: string,
    testFunction: (arg0: Test) => Promise<void>,
): RegistrationBuilder;