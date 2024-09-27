// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server",
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
    runCommandAsync(commandString: string): Promise<CommandResult>;
}

export class Entity {
    private constructor();
    readonly id: string;
    readonly typeId: string;
    runCommandAsync(commandString: string): Promise<CommandResult>;
}

export class MinecraftDimensionTypes {
    private constructor();
}

export class Player extends Entity {
    private constructor();
    readonly name: string;
}

export class System {
    private constructor();
    run(callback: () => void): number;
}

export class World {
    private constructor();
    getAllPlayers(): Player[];
    getDimension(dimensionId: string): Dimension;
}

export const system: System;
export const world: World;