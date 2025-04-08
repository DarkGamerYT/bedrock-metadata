// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/common",
 *     "version": "1.0.0"
 * }
 * ```
 */
// @ts-ignore
export class ArgumentOutOfBoundsError extends Error {
    private constructor();
    readonly maxValue: number;
    readonly minValue: number;
    readonly value: number;
}

// @ts-ignore
export class EngineError extends Error {
    private constructor();
}

// @ts-ignore
export class InvalidArgumentError extends Error {
    private constructor();
    readonly index: number;
}
