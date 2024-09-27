// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/common",
 *     "version": "1.1.0"
 * }
 * ```
 */
export interface NumberRange {
    max: number;
    min: number;
}

export class ArgumentOutOfBoundsError {
    private constructor();
    readonly maxValue: number;
    readonly minValue: number;
    readonly value: number;
}

export class EngineError {
    private constructor();
}

export class InvalidArgumentError {
    private constructor();
    readonly index: number;
}
