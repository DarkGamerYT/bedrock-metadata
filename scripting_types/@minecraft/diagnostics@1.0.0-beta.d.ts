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
import * as minecraftserveradmin from "@minecraft/server-admin";
export enum SentryEventLevel {
    debug = "debug",
    error = "error",
    fatal = "fatal",
    info = "info",
    warning = "warning",
}

export class Sentry {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link SentryUninitializedError}
     */
    addBreadcrumb(level: SentryEventLevel, message: string, category?: string): void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link SentryUninitializedError}
     */
    addTag(name: string, value: string): void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link SentryUninitializedError}
     */
    captureException(exception: error, captureContext?: SentryCaptureContext): void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link SentryUninitializedError}
     */
    getTags(): Record<string, string>;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link SentryAlreadyInitializedError}
     */
    init(options: SentryOptions): void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link SentryUninitializedError}
     */
    removeTag(name: string): void;
}

export interface SentryCaptureContext {
    extraData?: Record<string, boolean | number | string>;
    level?: SentryEventLevel;
    tags?: Record<string, string>;
}

export interface SentryOptions {
    debug?: boolean;
    dsn: minecraftserveradmin.SecretString | string;
    maxBreadcrumbs?: number;
    sampleRate?: number;
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