// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-bindings",
 *     "version": "1.0.0"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
export class CommandResult {
    private constructor();
    readonly successCount: number;
}

export class Dimension {
    private constructor();
    readonly id: string;
    /**
     * @throws This function can throw errors.
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
}

export class Entity {
    private constructor();
    readonly id: string;
    readonly typeId: string;
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
}

export class System {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     */
    run(callback: () => void): number;
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
export class RawMessageError extends Error {
    private constructor();
}

export const system: System;
export const world: World;