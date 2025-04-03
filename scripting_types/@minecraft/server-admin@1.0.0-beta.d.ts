// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @beta
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-admin",
 *     "version": "1.0.0-beta"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
export class AdminBeforeEvents {
    private constructor();
    readonly asyncPlayerJoin: AsyncPlayerJoinBeforeEventSignal;
}

export class AsyncPlayerJoinBeforeEvent {
    private constructor();
    readonly name: string;
    readonly persistentId: string;
    /**
     * @throws This function can throw errors.
     *
     * {@link DisconnectedError}
     */
    disconnect(reason?: string): void;
    isValid(): boolean;
}

export class AsyncPlayerJoinBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg: AsyncPlayerJoinBeforeEvent) => Promise<void>): (arg: AsyncPlayerJoinBeforeEvent) => Promise<void>;
    unsubscribe(callback: (arg: AsyncPlayerJoinBeforeEvent) => Promise<void>): boolean;
}

export class SecretString {
    constructor(value: string);
}

export class ServerSecrets {
    private constructor();
    readonly names: string[];
    get(name: string): SecretString | undefined;
}

export class ServerVariables {
    private constructor();
    readonly names: string[];
    get(name: string): unknown | undefined;
}

export class DisconnectedError {
    private constructor();
    readonly id: string;
}

/**
 * @throws This function can throw errors.
 */
export function transferPlayer(player: minecraftserver.Player, host: string, port: number): void;
export const beforeEvents: AdminBeforeEvents;
export const secrets: ServerSecrets;
export const variables: ServerVariables;