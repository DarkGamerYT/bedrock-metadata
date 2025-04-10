// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/common",
 *     "version": "1.2.0"
 * }
 * ```
 */
export enum InvalidArgumentErrorType {
    Duplicate = "Duplicate",
    Empty = "Empty",
    Unknown = "Unknown",
    Unspecified = "Unspecified",
}

export interface NumberRange {
    max: number;
    min: number;
}

// @ts-ignore
export class ArgumentOutOfBoundsError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly maxValue: number;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly minValue: number;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly value: number;
}

// @ts-ignore
export class EngineError extends Error {
    private constructor();
}

// @ts-ignore
export class InvalidArgumentError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly index: number;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly "type": InvalidArgumentErrorType;
}

// @ts-ignore
export class PropertyOutOfBoundsError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly maxValue: number;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly minValue: number;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly value: number;
}

// @ts-ignore
export class RuntimeConditionError extends Error {
    private constructor();
}
