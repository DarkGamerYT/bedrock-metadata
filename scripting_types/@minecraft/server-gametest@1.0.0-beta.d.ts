// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @beta
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-gametest",
 *     "version": "1.0.0-beta"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
export enum GameTestCompletedErrorReason {
    Cleanup = "Cleanup",
    Done = "Done",
}

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

export enum PersonaArmSize {
    Slim = "Slim",
    Wide = "Wide",
}

export enum PersonaPieceType {
    Arms = "Arms",
    Back = "Back",
    Body = "Body",
    Bottom = "Bottom",
    Capes = "Capes",
    Dress = "Dress",
    Eyes = "Eyes",
    FaceAccessory = "FaceAccessory",
    FacialHair = "FacialHair",
    Feet = "Feet",
    Hair = "Hair",
    Hands = "Hands",
    Head = "Head",
    HighPants = "HighPants",
    Hood = "Hood",
    LeftArm = "LeftArm",
    LeftLeg = "LeftLeg",
    Legs = "Legs",
    Mouth = "Mouth",
    Outerwear = "Outerwear",
    RightArm = "RightArm",
    RightLeg = "RightLeg",
    Skeleton = "Skeleton",
    Skin = "Skin",
    Top = "Top",
}

export class FenceConnectivity {
    private constructor();
    readonly east: boolean;
    readonly north: boolean;
    readonly south: boolean;
    readonly west: boolean;
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
    getPath(): minecraftserverbindings.Vector3[];
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
        structureLocation: minecraftserverbindings.Vector3,
        structureDimension?: minecraftserverbindings.DimensionType | string,
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
    addCursorsWithOffset(offset: minecraftserverbindings.Vector3, charge: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getCursorPosition(index: number): minecraftserverbindings.Vector3;
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
export class SimulatedPlayer extends minecraftserverbindings.Player {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly headRotation: minecraftserverbindings.Vector2;
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
    attackEntity(entity: minecraftserverbindings.Entity): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     */
    breakBlock(blockLocation: minecraftserverbindings.Vector3, direction?: minecraftserverbindings.Direction): boolean;
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
    giveItem(itemStack: minecraftserverbindings.ItemStack, selectSlot?: boolean): boolean;
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
     *
     * {@link GameTestError}
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     */
    interactWithBlock(
        blockLocation: minecraftserverbindings.Vector3,
        direction?: minecraftserverbindings.Direction,
    ): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     */
    interactWithEntity(entity: minecraftserverbindings.Entity): boolean;
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
     *
     * {@link GameTestError}
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     */
    lookAtBlock(blockLocation: minecraftserverbindings.Vector3, duration?: LookDuration): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    lookAtEntity(entity: minecraftserverbindings.Entity, duration?: LookDuration): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    lookAtLocation(location: minecraftserverbindings.Vector3, duration?: LookDuration): void;
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
    moveToBlock(blockLocation: minecraftserverbindings.Vector3, options?: MoveToOptions): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link GameTestError}
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     */
    moveToLocation(location: minecraftserverbindings.Vector3, options?: MoveToOptions): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     */
    navigateToBlock(blockLocation: minecraftserverbindings.Vector3, speed?: number): NavigationResult;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     */
    navigateToEntity(entity: minecraftserverbindings.Entity, speed?: number): NavigationResult;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     */
    navigateToLocation(location: minecraftserverbindings.Vector3, speed?: number): NavigationResult;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     */
    navigateToLocations(locations: minecraftserverbindings.Vector3[], speed?: number): void;
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
    setItem(itemStack: minecraftserverbindings.ItemStack, slot: number, selectSlot?: boolean): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     */
    setSkin(options: PlayerSkinData): void;
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
    stopUsingItem(): minecraftserverbindings.ItemStack | undefined;
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
    useItem(itemStack: minecraftserverbindings.ItemStack): boolean;
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
     *
     * {@link GameTestError}
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     */
    useItemInSlotOnBlock(
        slot: number,
        blockLocation: minecraftserverbindings.Vector3,
        direction?: minecraftserverbindings.Direction,
        faceLocation?: minecraftserverbindings.Vector3,
    ): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestError}
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     */
    useItemOnBlock(
        itemStack: minecraftserverbindings.ItemStack,
        blockLocation: minecraftserverbindings.Vector3,
        direction?: minecraftserverbindings.Direction,
        faceLocation?: minecraftserverbindings.Vector3,
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
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assert(condition: boolean, message: string): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertBlockPresent(
        blockType: minecraftserverbindings.BlockType | string,
        blockLocation: minecraftserverbindings.Vector3,
        isPresent?: boolean,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertBlockState(
        blockLocation: minecraftserverbindings.Vector3,
        callback: (arg0: minecraftserverbindings.Block) => boolean,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertCanReachLocation(
        mob: minecraftserverbindings.Entity,
        blockLocation: minecraftserverbindings.Vector3,
        canReach?: boolean,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertContainerContains(
        itemStack: minecraftserverbindings.ItemStack,
        blockLocation: minecraftserverbindings.Vector3,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertContainerEmpty(blockLocation: minecraftserverbindings.Vector3): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertEntityHasArmor(
        entityTypeIdentifier: string,
        armorSlot: number,
        armorName: string,
        armorData: number,
        blockLocation: minecraftserverbindings.Vector3,
        hasArmor?: boolean,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertEntityHasComponent(
        entityTypeIdentifier: string,
        componentIdentifier: string,
        blockLocation: minecraftserverbindings.Vector3,
        hasComponent?: boolean,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertEntityInstancePresent(
        entity: minecraftserverbindings.Entity,
        blockLocation: minecraftserverbindings.Vector3,
        isPresent?: boolean,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertEntityInstancePresentInArea(entity: minecraftserverbindings.Entity, isPresent?: boolean): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertEntityPresent(
        entityTypeIdentifier: string,
        blockLocation: minecraftserverbindings.Vector3,
        searchDistance?: number,
        isPresent?: boolean,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertEntityPresentInArea(entityTypeIdentifier: string, isPresent?: boolean): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertEntityState(
        blockLocation: minecraftserverbindings.Vector3,
        entityTypeIdentifier: string,
        callback: (arg0: minecraftserverbindings.Entity) => boolean,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertEntityTouching(
        entityTypeIdentifier: string,
        location: minecraftserverbindings.Vector3,
        isTouching?: boolean,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertIsWaterlogged(blockLocation: minecraftserverbindings.Vector3, isWaterlogged?: boolean): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertItemEntityCountIs(
        itemType: minecraftserverbindings.ItemType | string,
        blockLocation: minecraftserverbindings.Vector3,
        searchDistance: number,
        count: number,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertItemEntityPresent(
        itemType: minecraftserverbindings.ItemType | string,
        blockLocation: minecraftserverbindings.Vector3,
        searchDistance?: number,
        isPresent?: boolean,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    assertRedstonePower(blockLocation: minecraftserverbindings.Vector3, power: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    destroyBlock(blockLocation: minecraftserverbindings.Vector3, dropResources?: boolean): void;
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
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    getBlock(blockLocation: minecraftserverbindings.Vector3): minecraftserverbindings.Block;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    getDimension(): minecraftserverbindings.Dimension;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    getFenceConnectivity(blockLocation: minecraftserverbindings.Vector3): FenceConnectivity;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    getSculkSpreader(blockLocation: minecraftserverbindings.Vector3): SculkSpreader | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     */
    getTestDirection(): minecraftserverbindings.Direction;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     */
    idle(tickDelay: number): Promise<void>;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    isCleaningUp(): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    isCompleted(): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    killAllEntities(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    onPlayerJump(mob: minecraftserverbindings.Entity, jumpAmount: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    pressButton(blockLocation: minecraftserverbindings.Vector3): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    print(text: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    pullLever(blockLocation: minecraftserverbindings.Vector3): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    pulseRedstone(blockLocation: minecraftserverbindings.Vector3, duration: number): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    relativeBlockLocation(worldBlockLocation: minecraftserverbindings.Vector3): minecraftserverbindings.Vector3;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    relativeLocation(worldLocation: minecraftserverbindings.Vector3): minecraftserverbindings.Vector3;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     */
    removeSimulatedPlayer(simulatedPlayer: SimulatedPlayer): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    rotateDirection(direction: minecraftserverbindings.Direction): minecraftserverbindings.Direction;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    rotateVector(vector: minecraftserverbindings.Vector3): minecraftserverbindings.Vector3;
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
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    runOnFinish(callback: () => void): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    setBlockPermutation(
        blockData: minecraftserverbindings.BlockPermutation,
        blockLocation: minecraftserverbindings.Vector3,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    setBlockType(
        blockType: minecraftserverbindings.BlockType | string,
        blockLocation: minecraftserverbindings.Vector3,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    setFluidContainer(location: minecraftserverbindings.Vector3, type: minecraftserverbindings.FluidType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    setTntFuse(entity: minecraftserverbindings.Entity, fuseLength: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    spawn(entityTypeIdentifier: string, blockLocation: minecraftserverbindings.Vector3): minecraftserverbindings.Entity;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    spawnAtLocation(
        entityTypeIdentifier: string,
        location: minecraftserverbindings.Vector3,
    ): minecraftserverbindings.Entity;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    spawnItem(
        itemStack: minecraftserverbindings.ItemStack,
        location: minecraftserverbindings.Vector3,
    ): minecraftserverbindings.Entity;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    spawnSimulatedPlayer(
        blockLocation: minecraftserverbindings.Vector3,
        name: string,
        gameMode?: minecraftserverbindings.GameMode,
    ): SimulatedPlayer;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    spawnWithoutBehaviors(
        entityTypeIdentifier: string,
        blockLocation: minecraftserverbindings.Vector3,
    ): minecraftserverbindings.Entity;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    spawnWithoutBehaviorsAtLocation(
        entityTypeIdentifier: string,
        location: minecraftserverbindings.Vector3,
    ): minecraftserverbindings.Entity;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    spreadFromFaceTowardDirection(
        blockLocation: minecraftserverbindings.Vector3,
        fromFace: minecraftserverbindings.Direction,
        direction: minecraftserverbindings.Direction,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
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
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    succeedWhenBlockPresent(
        blockType: minecraftserverbindings.BlockType | string,
        blockLocation: minecraftserverbindings.Vector3,
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
        blockLocation: minecraftserverbindings.Vector3,
        hasComponent: boolean,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    succeedWhenEntityPresent(
        entityTypeIdentifier: string,
        blockLocation: minecraftserverbindings.Vector3,
        isPresent?: boolean,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    triggerInternalBlockEvent(
        blockLocation: minecraftserverbindings.Vector3,
        event: string,
        eventParameters?: number[],
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     */
    until(callback: () => void): Promise<void>;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    walkTo(
        mob: minecraftserverbindings.Entity,
        blockLocation: minecraftserverbindings.Vector3,
        speedModifier?: number,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    walkToLocation(
        mob: minecraftserverbindings.Entity,
        location: minecraftserverbindings.Vector3,
        speedModifier?: number,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    worldBlockLocation(relativeBlockLocation: minecraftserverbindings.Vector3): minecraftserverbindings.Vector3;
    /**
     * @throws This function can throw errors.
     *
     * {@link GameTestCompletedError}
     *
     * {@link GameTestError}
     */
    worldLocation(relativeLocation: minecraftserverbindings.Vector3): minecraftserverbindings.Vector3;
}

export interface GameTestErrorContext {
    absolutePosition: minecraftserverbindings.Vector3;
    relativePosition: minecraftserverbindings.Vector3;
    tickCount: number;
}

export interface MoveToOptions {
    faceTarget?: boolean;
    speed?: number;
}

export interface PlayerPersonaPiece {
    id: string;
    isDefaultPiece?: boolean;
    packId: string;
    productId: string;
    type: PersonaPieceType;
}

export interface PlayerSkinData {
    armSize?: PersonaArmSize;
    personaPieces?: PlayerPersonaPiece[];
    skinColor?: minecraftserverbindings.RGB;
}

// @ts-ignore
export class GameTestCompletedError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly reason: GameTestCompletedErrorReason;
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
 * @remarks This function can't be called in read-only mode.
 *
 * @throws This function can throw errors.
 *
 * {@link minecraftcommon.InvalidArgumentError}
 *
 * {@link minecraftserverbindings.InvalidEntityError}
 */
export function getPlayerSkin(player: minecraftserverbindings.Player): PlayerSkinData;
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
/**
 * @remarks This function can be called in early-execution mode.
 *
 * This function can't be called in read-only mode.
 *
 * @throws This function can throw errors.
 *
 * {@link GameTestError}
 */
export function setAfterBatchCallback(batchName: string, batchCallback: () => void): void;
/**
 * @remarks This function can be called in early-execution mode.
 *
 * This function can't be called in read-only mode.
 *
 * @throws This function can throw errors.
 *
 * {@link GameTestError}
 */
export function setBeforeBatchCallback(batchName: string, batchCallback: () => void): void;
/**
 * @remarks This function can't be called in read-only mode.
 *
 * @throws This function can throw errors.
 *
 * {@link minecraftcommon.EngineError}
 */
export function spawnSimulatedPlayer(
    location: minecraftserverbindings.DimensionLocation,
    name: string,
    gameMode?: minecraftserverbindings.GameMode,
): SimulatedPlayer;