// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @beta
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-net",
 *     "version": "1.0.0-beta"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserveradmin from "@minecraft/server-admin";
export enum HttpRequestMethod {
    Delete = "Delete",
    Get = "Get",
    Head = "Head",
    Post = "Post",
    Put = "Put",
}

export class HttpClient {
    private constructor();
    cancelAll(reason: string): void;
    get(uri: string): Promise<HttpResponse>;
    request(config: HttpRequest): Promise<HttpResponse>;
}

export class HttpHeader {
    key: string;
    value: minecraftserveradmin.SecretString | string;
    constructor(key: string, value: minecraftserveradmin.SecretString | string);
}

export class HttpRequest {
    body: string;
    headers: HttpHeader[];
    method: HttpRequestMethod;
    timeout: number;
    uri: string;
    constructor(uri: string);
    addHeader(key: string, value: minecraftserveradmin.SecretString | string): HttpRequest;
    setBody(body: string): HttpRequest;
    setHeaders(headers: HttpHeader[]): HttpRequest;
    setMethod(method: HttpRequestMethod): HttpRequest;
    setTimeout(timeout: number): HttpRequest;
}

export class HttpResponse {
    private constructor();
    readonly body: string;
    readonly headers: HttpHeader[];
    readonly request: HttpRequest;
    readonly status: number;
}

export const http: HttpClient;