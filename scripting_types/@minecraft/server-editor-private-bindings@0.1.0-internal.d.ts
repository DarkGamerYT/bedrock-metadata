// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @internal
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-editor-private-bindings",
 *     "version": "0.1.0-internal"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
import * as minecraftservereditorbindings from "@minecraft/server-editor-bindings";
export enum EditorRealmsServiceAvailability {
    NotLoggedIn = 0,
    NoRealmsSubscription = 1,
    DedicatedServer = 2,
    NotServerHost = 3,
    Success = 4,
    Unknown = 5,
}

export enum RealmsServiceStatus {
    Fetching = 0,
    Idle = 1,
    Exporting = 2,
    Uploading = 3,
}

export enum RealmsWorldUploadResult {
    Unknown = 0,
    Success = 1,
    ExportWorldFailure = 2,
    UploadWorldFailure = 3,
    EditorSystemFailure = 4,
    WorldUploadBusy = 5,
    WorldNameNonCompliant = 6,
}

export class DataStore {
    private constructor();
    readonly actionBarContainer: DataStoreActionBarContainer;
    readonly actionContainer: DataStoreActionContainer;
    readonly afterEvents: DataStoreAfterEvents;
    readonly menuContainer: DataStoreMenuContainer;
    readonly modalToolContainer: DataStoreModalToolContainer;
    readonly paneContainer: DataStorePaneContainer;
}

export class DataStoreActionBarContainer {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getItemPayload(id: string): string;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getItemProperty(id: string, property: string): boolean | number | string | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    hasItemPayload(id: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    hasItemProperty(id: string, property: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    registerItem(id: string, payload: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unregisterItem(id: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    updateRegisteredItem(id: string, payload: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    updateRegisteredItemProperty(id: string, payload: string, property: string): void;
}

export class DataStoreActionContainer {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    bindActionToControl(controlId: string, actionPayload: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    removeActionFromControl(controlId: string, actionPayload?: string): void;
}

export class DataStoreAfterEvents {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly payloadReceived: DataStorePayloadAfterEventSignal;
}

export class DataStoreMenuContainer {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    createItem(id: string, payload: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    destroyItem(id: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getPayload(id: string): string;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getProperty(id: string, property: string): boolean | number | string | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    hasPayload(id: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    hasProperty(id: string, property: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    updateItem(id: string, payload: string): void;
}

export class DataStoreModalToolActivationChangedEvent {
    private constructor();
    readonly isActive: boolean;
    readonly toolId?: string;
}

export class DataStoreModalToolActivationChangedEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: DataStoreModalToolActivationChangedEvent) => void): (arg0: DataStoreModalToolActivationChangedEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: DataStoreModalToolActivationChangedEvent) => void): void;
}

export class DataStoreModalToolContainer {
    private constructor();
    readonly toolActivationChanged: DataStoreModalToolActivationChangedEventSignal;
    getSelectedTool(): string | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getToolPayload(id: string): string;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getToolProperty(id: string, property: string): boolean | number | string | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    hasToolPayload(id: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    hasToolProperty(id: string, property: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    registerTool(id: string, payload: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unregisterTool(id: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    updateRegisteredTool(id: string, payload: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    updateRegisteredToolProperty(id: string, payload: string, property: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    updateSelectedTool(toolId?: string): void;
}

export class DataStorePaneContainer {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    createPane(id: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    destroyPane(id: string): void;
}

export class DataStorePayloadAfterEvent {
    private constructor();
    readonly dataTag: string;
    readonly payload: string;
}

export class DataStorePayloadAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: DataStorePayloadAfterEvent) => void): (arg0: DataStorePayloadAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: DataStorePayloadAfterEvent) => void): void;
}

export class DataTransferManager {
    private constructor();
    /**
     * @throws This function can throw errors.
     */
    closeSession(collectionUniqueId: string): void;
    /**
     * @throws This function can throw errors.
     */
    getRegisteredAccessors(): DataTransferCollectionNameData[];
    /**
     * @throws This function can throw errors.
     */
    openSession(collectionUniqueId: string): void;
    /**
     * @throws This function can throw errors.
     */
    requestData(collectionUniqueId: string): Promise<DataTransferRequestResponse>;
    /**
     * @throws This function can throw errors.
     */
    sendData(collectionUniqueId: string, jsonData: string): void;
    /**
     * @throws This function can throw errors.
     */
    sendDataToClipboard(jsonData: string): void;
}

export class DataTransferRequestResponse {
    private constructor();
    readonly collectionName: string;
    readonly data: string;
    readonly schema: string;
}

export class InputService {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    focusViewport(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getKeyBindingProcessingState(contextId: string, bindingId: string): number | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    registerKeyBinding(
        contextId: string,
        bindingId: string,
        key: number,
        modifier: minecraftservereditorbindings.InputModifier,
        info: InputBindingInfo,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    registerMouseBinding(
        contextId: string,
        bindingId: string,
        mouseAction: minecraftservereditorbindings.MouseActionCategory,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unregisterKeyBinding(contextId: string, bindingId: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unregisterMouseBinding(contextId: string, bindingId: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    updateKeyBindingProcessingState(contextId: string, bindingId: string, state?: number): void;
}

export class InternalPlayerServiceContext {
    private constructor();
    readonly dataStore: DataStore;
    readonly dataTransfer: DataTransferManager;
    readonly input: InputService;
    readonly realmsService: RealmsService;
    readonly tickingArea: TickingAreaManager;
}

export class MinecraftEditorInternal {
    private constructor();
    readonly isNewLevel: boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    fireTelemetryEvent(player: minecraftserver.Player, source: string, eventName: string, metadata: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getMapColorUnsafe(player: minecraftserver.Player, coordinate: minecraftserver.Vector3): minecraftserver.RGBA;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getPlayerServices(player: minecraftserver.Player): InternalPlayerServiceContext;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    registerExtension(
        extensionName: string,
        activationFunction: (arg0: minecraftservereditorbindings.ExtensionContext) => void,
        shutdownFunction: (arg0: minecraftservereditorbindings.ExtensionContext) => void,
        options?: minecraftservereditorbindings.ExtensionOptionalParameters,
    ): minecraftservereditorbindings.Extension;
}

export class RealmsService {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    beginDownloadFromRealms(realmsWorldId: string, slotId: number): Promise<string>;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    beginUploadToRealms(
        realmsWorldId: string,
        slotId: number,
        gameOptions: minecraftservereditorbindings.GameOptions,
    ): Promise<RealmsWorldUploadResult>;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    canUploadWorld(): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getRealmWorldlist(): Promise<EditorRealmsWorld[]>;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getServiceStatus(): RealmsServiceStatus;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getSlots(worldId: string): Promise<EditorRealmsWorldSlot[]>;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    isRealmsServiceAvailable(): EditorRealmsServiceAvailability;
}

export class TickingAreaManager {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    isTickingAreaActive(areaIdentifier: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    purgeTickingAreas(areaIdentifier: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    releaseTickingArea(areaIdentifier: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    requestTickingArea(areaIdentifier: string, from: minecraftserver.Vector3, to: minecraftserver.Vector3): boolean;
}

export interface DataTransferCollectionNameData {
    nameStringId: string;
    uniqueId: string;
}

export interface EditorRealmsWorld {
    id: string;
    name: string;
}

export interface EditorRealmsWorldSlot {
    id: number;
    name: string;
}

export interface InputBindingInfo {
    actionId?: string;
    canRebind: boolean;
    label?: string;
    tooltip?: string;
}

export const editorInternal: MinecraftEditorInternal;