// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @beta
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/debug-utilities",
 *     "version": "1.0.0-beta"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
// @ts-ignore
export class DebugArrow extends DebugLine {
    headLength: number;
    headRadius: number;
    headSegments: number;
    constructor(location: minecraftserverbindings.Vector3, endLocation: minecraftserverbindings.Vector3);
}

// @ts-ignore
export class DebugBox extends DebugShape {
    bound: minecraftserverbindings.Vector3;
    constructor(location: minecraftserverbindings.Vector3);
}

// @ts-ignore
export class DebugCircle extends DebugShape {
    constructor(location: minecraftserverbindings.Vector3);
}

export class DebugDrawer {
    private constructor();
    addShape(shape: DebugShape): void;
    removeAll(): void;
    removeShape(shape: DebugShape): void;
}

// @ts-ignore
export class DebugLine extends DebugShape {
    endLocation: minecraftserverbindings.Vector3;
    constructor(location: minecraftserverbindings.Vector3, endLocation: minecraftserverbindings.Vector3);
}

export class DebugShape {
    private constructor();
    color: minecraftserverbindings.RGB;
    readonly hasDuration: boolean;
    location: minecraftserverbindings.Vector3;
    rotation: minecraftserverbindings.Vector3;
    scale: number;
    timeLeft?: number;
    readonly totalTimeLeft?: number;
    remove(): void;
}

// @ts-ignore
export class DebugSphere extends DebugShape {
    constructor(location: minecraftserverbindings.Vector3);
}

// @ts-ignore
export class DebugText extends DebugShape {
    text: string;
    constructor(location: minecraftserverbindings.Vector3, text: string);
}

export interface HandleCounts {
    handleCounts: Record<string, number>;
    name: string;
    packId: string;
    scriptModuleUUID: string;
}

export interface PluginStats {
    plugins: HandleCounts[];
}

export interface RuntimeStats {
    arrayCount: number;
    atomCount: number;
    atomSize: number;
    fastArrayCount: number;
    fastArrayElementCount: number;
    functionCodeSize: number;
    functionCount: number;
    functionLineCount: number;
    functionSize: number;
    memoryAllocatedCount: number;
    memoryAllocatedSize: number;
    memoryUsedCount: number;
    memoryUsedSize: number;
    objectCount: number;
    objectSize: number;
    propertyCount: number;
    propertySize: number;
    stringCount: number;
    stringSize: number;
}

export function collectPluginStats(): PluginStats;
export function collectRuntimeStats(): RuntimeStats;
/**
 * @throws This function can throw errors.
 */
export function disableWatchdogTimingWarnings(disable: boolean): void;
export const debugDrawer: DebugDrawer;