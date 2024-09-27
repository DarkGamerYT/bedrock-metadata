// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server",
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
    readonly location: Vector3;
    readonly permutation: BlockPermutation;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    setPermutation(permutation: BlockPermutation): void;
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

export class Dimension {
    private constructor();
    readonly id: string;
    getBlock(location: Vector3): Block | undefined;
    getEntities(options?: EntityQueryOptions): Entity[];
    getEntitiesAtBlockLocation(location: Vector3): Entity[];
    getPlayers(options?: EntityQueryOptions): Player[];
    runCommandAsync(commandString: string): Promise<CommandResult>;
}

export class Entity {
    private constructor();
    readonly dimension: Dimension;
    readonly id: string;
    readonly location: Vector3;
    nameTag: string;
    readonly typeId: string;
    getHeadLocation(): Vector3;
    getVelocity(): Vector3;
    getViewDirection(): Vector3;
    runCommandAsync(commandString: string): Promise<CommandResult>;
}

export class MinecraftDimensionTypes {
    private constructor();
}

export class Player extends Entity {
    private constructor();
    readonly name: string;
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

export class LocationInUnloadedChunkError {
    private constructor();
}

export class LocationOutOfWorldBoundariesError {
    private constructor();
}

export const system: System;
export const world: World;