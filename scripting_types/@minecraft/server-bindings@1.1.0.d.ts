// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-bindings",
 *     "version": "1.1.0"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
export enum GameMode {
    adventure = "adventure",
    creative = "creative",
    spectator = "spectator",
    survival = "survival",
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
    getVelocity(): Vector3;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getViewDirection(): Vector3;
    /**
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     *
     * {@link InvalidEntityError}
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
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
     * @throws This function can throw errors.
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
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

// @ts-ignore
export class CommandError extends Error {
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