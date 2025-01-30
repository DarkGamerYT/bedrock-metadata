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
    structureLocation(
        structureLocation: minecraftserver.Vector3,
        structureDimension?: minecraftserver.DimensionType | string,
    ): RegistrationBuilder;
    structureName(structureName: string): RegistrationBuilder;
    tag(tag: string): RegistrationBuilder;
}

export class SculkSpreader {
    private constructor();
    readonly maxCharge: number;
    addCursorsWithOffset(offset: minecraftserver.Vector3, charge: number): void;
    getCursorPosition(index: number): minecraftserver.Vector3;
    getNumberOfCursors(): number;
    getTotalCharge(): number;
}

// @ts-ignore
export class SimulatedPlayer extends minecraftserver.Player {
    private constructor();
    readonly headRotation: minecraftserver.Vector2;
    isSprinting: boolean;
    attack(): boolean;
    attackEntity(entity: minecraftserver.Entity): boolean;
    breakBlock(blockLocation: minecraftserver.Vector3, direction?: minecraftserver.Direction): boolean;
    chat(message: string): void;
    disconnect(): void;
    dropSelectedItem(): boolean;
    fly(): void;
    giveItem(itemStack: minecraftserver.ItemStack, selectSlot?: boolean): boolean;
    glide(): boolean;
    interact(): boolean;
    interactWithBlock(blockLocation: minecraftserver.Vector3, direction?: minecraftserver.Direction): boolean;
    interactWithEntity(entity: minecraftserver.Entity): boolean;
    jump(): boolean;
    lookAtBlock(blockLocation: minecraftserver.Vector3, duration?: LookDuration): void;
    lookAtEntity(entity: minecraftserver.Entity, duration?: LookDuration): void;
    lookAtLocation(location: minecraftserver.Vector3, duration?: LookDuration): void;
    move(westEast: number, northSouth: number, speed?: number): void;
    moveRelative(leftRight: number, backwardForward: number, speed?: number): void;
    moveToBlock(blockLocation: minecraftserver.Vector3, options?: MoveToOptions): void;
    moveToLocation(location: minecraftserver.Vector3, options?: MoveToOptions): void;
    navigateToBlock(blockLocation: minecraftserver.Vector3, speed?: number): NavigationResult;
    navigateToEntity(entity: minecraftserver.Entity, speed?: number): NavigationResult;
    navigateToLocation(location: minecraftserver.Vector3, speed?: number): NavigationResult;
    navigateToLocations(locations: minecraftserver.Vector3[], speed?: number): void;
    respawn(): boolean;
    rotateBody(angleInDegrees: number): void;
    setBodyRotation(angleInDegrees: number): void;
    setItem(itemStack: minecraftserver.ItemStack, slot: number, selectSlot?: boolean): boolean;
    startBuild(slot?: number): void;
    stopBreakingBlock(): void;
    stopBuild(): void;
    stopFlying(): void;
    stopGliding(): void;
    stopInteracting(): void;
    stopMoving(): void;
    stopSwimming(): void;
    stopUsingItem(): minecraftserver.ItemStack | undefined;
    swim(): void;
    useItem(itemStack: minecraftserver.ItemStack): boolean;
    useItemInSlot(slot: number): boolean;
    useItemInSlotOnBlock(
        slot: number,
        blockLocation: minecraftserver.Vector3,
        direction?: minecraftserver.Direction,
        faceLocation?: minecraftserver.Vector3,
    ): boolean;
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
    assert(condition: boolean, message: string): void;
    assertBlockPresent(
        blockType: minecraftserver.BlockType | string,
        blockLocation: minecraftserver.Vector3,
        isPresent?: boolean,
    ): void;
    assertBlockState(blockLocation: minecraftserver.Vector3, callback: (arg: minecraftserver.Block) => boolean): void;
    assertCanReachLocation(mob: minecraftserver.Entity, blockLocation: minecraftserver.Vector3, canReach?: boolean): void;
    assertContainerContains(itemStack: minecraftserver.ItemStack, blockLocation: minecraftserver.Vector3): void;
    assertContainerEmpty(blockLocation: minecraftserver.Vector3): void;
    assertEntityHasArmor(
        entityTypeIdentifier: string,
        armorSlot: number,
        armorName: string,
        armorData: number,
        blockLocation: minecraftserver.Vector3,
        hasArmor?: boolean,
    ): void;
    assertEntityHasComponent(
        entityTypeIdentifier: string,
        componentIdentifier: string,
        blockLocation: minecraftserver.Vector3,
        hasComponent?: boolean,
    ): void;
    assertEntityInstancePresent(
        entity: minecraftserver.Entity,
        blockLocation: minecraftserver.Vector3,
        isPresent?: boolean,
    ): void;
    assertEntityInstancePresentInArea(entity: minecraftserver.Entity, isPresent?: boolean): void;
    assertEntityPresent(
        entityTypeIdentifier: string,
        blockLocation: minecraftserver.Vector3,
        searchDistance?: number,
        isPresent?: boolean,
    ): void;
    assertEntityPresentInArea(entityTypeIdentifier: string, isPresent?: boolean): void;
    assertEntityState(
        blockLocation: minecraftserver.Vector3,
        entityTypeIdentifier: string,
        callback: (arg: minecraftserver.Entity) => boolean,
    ): void;
    assertEntityTouching(entityTypeIdentifier: string, location: minecraftserver.Vector3, isTouching?: boolean): void;
    assertIsWaterlogged(blockLocation: minecraftserver.Vector3, isWaterlogged?: boolean): void;
    assertItemEntityCountIs(
        itemType: minecraftserver.ItemType | string,
        blockLocation: minecraftserver.Vector3,
        searchDistance: number,
        count: number,
    ): void;
    assertItemEntityPresent(
        itemType: minecraftserver.ItemType | string,
        blockLocation: minecraftserver.Vector3,
        searchDistance?: number,
        isPresent?: boolean,
    ): void;
    assertRedstonePower(blockLocation: minecraftserver.Vector3, power: number): void;
    destroyBlock(blockLocation: minecraftserver.Vector3, dropResources?: boolean): void;
    fail(errorMessage: string): void;
    failIf(callback: () => void): void;
    getBlock(blockLocation: minecraftserver.Vector3): minecraftserver.Block;
    getDimension(): minecraftserver.Dimension;
    getFenceConnectivity(blockLocation: minecraftserver.Vector3): FenceConnectivity;
    getSculkSpreader(blockLocation: minecraftserver.Vector3): SculkSpreader | undefined;
    getTestDirection(): minecraftserver.Direction;
    idle(tickDelay: number): Promise<void>;
    killAllEntities(): void;
    onPlayerJump(mob: minecraftserver.Entity, jumpAmount: number): void;
    pressButton(blockLocation: minecraftserver.Vector3): void;
    print(text: string): void;
    pullLever(blockLocation: minecraftserver.Vector3): void;
    pulseRedstone(blockLocation: minecraftserver.Vector3, duration: number): void;
    relativeBlockLocation(worldBlockLocation: minecraftserver.Vector3): minecraftserver.Vector3;
    relativeLocation(worldLocation: minecraftserver.Vector3): minecraftserver.Vector3;
    removeSimulatedPlayer(simulatedPlayer: SimulatedPlayer): void;
    rotateDirection(direction: minecraftserver.Direction): minecraftserver.Direction;
    rotateVector(vector: minecraftserver.Vector3): minecraftserver.Vector3;
    runAfterDelay(delayTicks: number, callback: () => void): void;
    runAtTickTime(tick: number, callback: () => void): void;
    setBlockPermutation(blockData: minecraftserver.BlockPermutation, blockLocation: minecraftserver.Vector3): void;
    setBlockType(blockType: minecraftserver.BlockType | string, blockLocation: minecraftserver.Vector3): void;
    setFluidContainer(location: minecraftserver.Vector3, type: minecraftserver.FluidType): void;
    setTntFuse(entity: minecraftserver.Entity, fuseLength: number): void;
    spawn(entityTypeIdentifier: string, blockLocation: minecraftserver.Vector3): minecraftserver.Entity;
    spawnAtLocation(entityTypeIdentifier: string, location: minecraftserver.Vector3): minecraftserver.Entity;
    spawnItem(itemStack: minecraftserver.ItemStack, location: minecraftserver.Vector3): minecraftserver.Entity;
    spawnSimulatedPlayer(
        blockLocation: minecraftserver.Vector3,
        name: string,
        gameMode?: minecraftserver.GameMode,
    ): SimulatedPlayer;
    spawnWithoutBehaviors(entityTypeIdentifier: string, blockLocation: minecraftserver.Vector3): minecraftserver.Entity;
    spawnWithoutBehaviorsAtLocation(
        entityTypeIdentifier: string,
        location: minecraftserver.Vector3,
    ): minecraftserver.Entity;
    spreadFromFaceTowardDirection(
        blockLocation: minecraftserver.Vector3,
        fromFace: minecraftserver.Direction,
        direction: minecraftserver.Direction,
    ): void;
    startSequence(): GameTestSequence;
    succeed(): void;
    succeedIf(callback: () => void): void;
    succeedOnTick(tick: number): void;
    succeedOnTickWhen(tick: number, callback: () => void): void;
    succeedWhen(callback: () => void): void;
    succeedWhenBlockPresent(
        blockType: minecraftserver.BlockType | string,
        blockLocation: minecraftserver.Vector3,
        isPresent?: boolean,
    ): void;
    succeedWhenEntityHasComponent(
        entityTypeIdentifier: string,
        componentIdentifier: string,
        blockLocation: minecraftserver.Vector3,
        hasComponent: boolean,
    ): void;
    succeedWhenEntityPresent(
        entityTypeIdentifier: string,
        blockLocation: minecraftserver.Vector3,
        isPresent?: boolean,
    ): void;
    triggerInternalBlockEvent(blockLocation: minecraftserver.Vector3, event: string, eventParameters?: number[]): void;
    until(callback: () => void): Promise<void>;
    walkTo(mob: minecraftserver.Entity, blockLocation: minecraftserver.Vector3, speedModifier?: number): void;
    walkToLocation(mob: minecraftserver.Entity, location: minecraftserver.Vector3, speedModifier?: number): void;
    worldBlockLocation(relativeBlockLocation: minecraftserver.Vector3): minecraftserver.Vector3;
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