// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @beta
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/diagnostics",
 *     "version": "1.0.0-beta"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
export enum SentryBreadcrumbLevel {
    debug = "debug",
    error = "error",
    info = "info",
    warning = "warning",
}

export class Sentry {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     *
     * {@link SentryUninitializedError}
     */
    addBreadcrumb(level: SentryBreadcrumbLevel, message: string, category?: string): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     *
     * {@link SentryUninitializedError}
     */
    addTag(name: string, value: string): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     *
     * {@link SentryUninitializedError}
     */
    getTags(): Record<string, string>;
    /**
     * @throws This function can throw errors.
     *
     * This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link SentryAlreadyInitializedError}
     */
    init(options: SentryOptions): void;
    /**
     * @throws This function can throw errors.
     *
     * This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     *
     * {@link SentryUninitializedError}
     */
    removeTag(name: string): void;
}

export interface SentryOptions {
    dsn: string;
}

// @ts-ignore
export class SentryAlreadyInitializedError extends Error {
    private constructor();
}

// @ts-ignore
export class SentryUninitializedError extends Error {
    private constructor();
}

export const sentry: Sentry;