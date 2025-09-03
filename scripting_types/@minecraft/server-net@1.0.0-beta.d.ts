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
import * as minecraftserver from "@minecraft/server";
import * as minecraftserveradmin from "@minecraft/server-admin";
export enum HttpRequestMethod {
    Delete = "Delete",
    Get = "Get",
    Head = "Head",
    Post = "Post",
    Put = "Put",
}

export enum PacketId {
    ActorEventPacket = "ActorEventPacket",
    ActorPickRequestPacket = "ActorPickRequestPacket",
    AddActorPacket = "AddActorPacket",
    AddBehaviorTreePacket = "AddBehaviorTreePacket",
    AddItemActorPacket = "AddItemActorPacket",
    AddPaintingPacket = "AddPaintingPacket",
    AddPlayerPacket = "AddPlayerPacket",
    AddVolumeEntityPacket = "AddVolumeEntityPacket",
    AgentActionEventPacket = "AgentActionEventPacket",
    AgentAnimationPacket = "AgentAnimationPacket",
    AnimateEntityPacket = "AnimateEntityPacket",
    AnimatePacket = "AnimatePacket",
    AnvilDamagePacket = "AnvilDamagePacket",
    AutomationClientConnectPacket = "AutomationClientConnectPacket",
    AvailableActorIdentifiersPacket = "AvailableActorIdentifiersPacket",
    AvailableCommandsPacket = "AvailableCommandsPacket",
    AwardAchievementPacket = "AwardAchievementPacket",
    BiomeDefinitionListPacket = "BiomeDefinitionListPacket",
    BlockActorDataPacket = "BlockActorDataPacket",
    BlockEventPacket = "BlockEventPacket",
    BlockPickRequestPacket = "BlockPickRequestPacket",
    BookEditPacket = "BookEditPacket",
    BossEventPacket = "BossEventPacket",
    CameraAimAssistPacket = "CameraAimAssistPacket",
    CameraAimAssistPresetsPacket = "CameraAimAssistPresetsPacket",
    CameraInstructionPacket = "CameraInstructionPacket",
    CameraPacket = "CameraPacket",
    CameraPresetsPacket = "CameraPresetsPacket",
    CameraShakePacket = "CameraShakePacket",
    ChangeDimensionPacket = "ChangeDimensionPacket",
    ChangeMobPropertyPacket = "ChangeMobPropertyPacket",
    ChunkRadiusUpdatedPacket = "ChunkRadiusUpdatedPacket",
    ClientboundCloseFormPacket = "ClientboundCloseFormPacket",
    ClientboundControlSchemeSetPacket = "ClientboundControlSchemeSetPacket",
    ClientboundDebugRendererPacket = "ClientboundDebugRendererPacket",
    ClientboundMapItemDataPacket = "ClientboundMapItemDataPacket",
    ClientCacheBlobStatusPacket = "ClientCacheBlobStatusPacket",
    ClientCacheMissResponsePacket = "ClientCacheMissResponsePacket",
    ClientCacheStatusPacket = "ClientCacheStatusPacket",
    ClientCameraAimAssistPacket = "ClientCameraAimAssistPacket",
    ClientMovementPredictionSyncPacket = "ClientMovementPredictionSyncPacket",
    ClientToServerHandshakePacket = "ClientToServerHandshakePacket",
    CodeBuilderPacket = "CodeBuilderPacket",
    CodeBuilderSourcePacket = "CodeBuilderSourcePacket",
    CommandBlockUpdatePacket = "CommandBlockUpdatePacket",
    CommandOutputPacket = "CommandOutputPacket",
    CommandRequestPacket = "CommandRequestPacket",
    CompletedUsingItemPacket = "CompletedUsingItemPacket",
    ContainerClosePacket = "ContainerClosePacket",
    ContainerOpenPacket = "ContainerOpenPacket",
    ContainerRegistryCleanupPacket = "ContainerRegistryCleanupPacket",
    ContainerSetDataPacket = "ContainerSetDataPacket",
    CorrectPlayerMovePredictionPacket = "CorrectPlayerMovePredictionPacket",
    CraftingDataPacket = "CraftingDataPacket",
    CreatePhotoPacket = "CreatePhotoPacket",
    CreativeContentPacket = "CreativeContentPacket",
    CurrentStructureFeaturePacket = "CurrentStructureFeaturePacket",
    DeathInfoPacket = "DeathInfoPacket",
    DebugDrawerPacket = "DebugDrawerPacket",
    DebugInfoPacket = "DebugInfoPacket",
    DimensionDataPacket = "DimensionDataPacket",
    DisconnectPacket = "DisconnectPacket",
    EditorNetworkPacket = "EditorNetworkPacket",
    EducationSettingsPacket = "EducationSettingsPacket",
    EduUriResourcePacket = "EduUriResourcePacket",
    EmoteListPacket = "EmoteListPacket",
    EmotePacket = "EmotePacket",
    FeatureRegistryPacket = "FeatureRegistryPacket",
    GameRulesChangedPacket = "GameRulesChangedPacket",
    GameTestRequestPacket = "GameTestRequestPacket",
    GameTestResultsPacket = "GameTestResultsPacket",
    GuiDataPickItemPacket = "GuiDataPickItemPacket",
    HurtArmorPacket = "HurtArmorPacket",
    InteractPacket = "InteractPacket",
    InventoryContentPacket = "InventoryContentPacket",
    InventorySlotPacket = "InventorySlotPacket",
    InventoryTransactionPacket = "InventoryTransactionPacket",
    ItemRegistryPacket = "ItemRegistryPacket",
    ItemStackRequestPacket = "ItemStackRequestPacket",
    ItemStackResponsePacket = "ItemStackResponsePacket",
    JigsawStructureDataPacket = "JigsawStructureDataPacket",
    LabTablePacket = "LabTablePacket",
    LecternUpdatePacket = "LecternUpdatePacket",
    LegacyTelemetryEventPacket = "LegacyTelemetryEventPacket",
    LessonProgressPacket = "LessonProgressPacket",
    LevelChunkPacket = "LevelChunkPacket",
    LevelEventGenericPacket = "LevelEventGenericPacket",
    LevelEventPacket = "LevelEventPacket",
    LevelSoundEventPacket = "LevelSoundEventPacket",
    LoginPacket = "LoginPacket",
    MapCreateLockedCopyPacket = "MapCreateLockedCopyPacket",
    MapInfoRequestPacket = "MapInfoRequestPacket",
    MobArmorEquipmentPacket = "MobArmorEquipmentPacket",
    MobEffectPacket = "MobEffectPacket",
    MobEquipmentPacket = "MobEquipmentPacket",
    ModalFormRequestPacket = "ModalFormRequestPacket",
    ModalFormResponsePacket = "ModalFormResponsePacket",
    MotionPredictionHintsPacket = "MotionPredictionHintsPacket",
    MoveActorAbsolutePacket = "MoveActorAbsolutePacket",
    MoveActorDeltaPacket = "MoveActorDeltaPacket",
    MovementEffectPacket = "MovementEffectPacket",
    MovePlayerPacket = "MovePlayerPacket",
    MultiplayerSettingsPacket = "MultiplayerSettingsPacket",
    NetworkChunkPublisherUpdatePacket = "NetworkChunkPublisherUpdatePacket",
    NetworkSettingsPacket = "NetworkSettingsPacket",
    NetworkStackLatencyPacket = "NetworkStackLatencyPacket",
    NpcDialoguePacket = "NpcDialoguePacket",
    NpcRequestPacket = "NpcRequestPacket",
    OnScreenTextureAnimationPacket = "OnScreenTextureAnimationPacket",
    OpenSignPacket = "OpenSignPacket",
    PacketViolationWarningPacket = "PacketViolationWarningPacket",
    PhotoTransferPacket = "PhotoTransferPacket",
    PlayerActionPacket = "PlayerActionPacket",
    PlayerArmorDamagePacket = "PlayerArmorDamagePacket",
    PlayerAuthInputPacket = "PlayerAuthInputPacket",
    PlayerEnchantOptionsPacket = "PlayerEnchantOptionsPacket",
    PlayerFogPacket = "PlayerFogPacket",
    PlayerHotbarPacket = "PlayerHotbarPacket",
    PlayerListPacket = "PlayerListPacket",
    PlayerLocationPacket = "PlayerLocationPacket",
    PlayerSkinPacket = "PlayerSkinPacket",
    PlayerStartItemCooldownPacket = "PlayerStartItemCooldownPacket",
    PlayerToggleCrafterSlotRequestPacket = "PlayerToggleCrafterSlotRequestPacket",
    PlayerUpdateEntityOverridesPacket = "PlayerUpdateEntityOverridesPacket",
    PlaySoundPacket = "PlaySoundPacket",
    PlayStatusPacket = "PlayStatusPacket",
    PositionTrackingDBClientRequestPacket = "PositionTrackingDBClientRequestPacket",
    PositionTrackingDBServerBroadcastPacket = "PositionTrackingDBServerBroadcastPacket",
    PurchaseReceiptPacket = "PurchaseReceiptPacket",
    RefreshEntitlementsPacket = "RefreshEntitlementsPacket",
    RemoveActorPacket = "RemoveActorPacket",
    RemoveObjectivePacket = "RemoveObjectivePacket",
    RemoveVolumeEntityPacket = "RemoveVolumeEntityPacket",
    RequestAbilityPacket = "RequestAbilityPacket",
    RequestChunkRadiusPacket = "RequestChunkRadiusPacket",
    RequestNetworkSettingsPacket = "RequestNetworkSettingsPacket",
    RequestPermissionsPacket = "RequestPermissionsPacket",
    ResourcePackChunkDataPacket = "ResourcePackChunkDataPacket",
    ResourcePackChunkRequestPacket = "ResourcePackChunkRequestPacket",
    ResourcePackClientResponsePacket = "ResourcePackClientResponsePacket",
    ResourcePackDataInfoPacket = "ResourcePackDataInfoPacket",
    ResourcePacksInfoPacket = "ResourcePacksInfoPacket",
    ResourcePackStackPacket = "ResourcePackStackPacket",
    RespawnPacket = "RespawnPacket",
    ScriptMessagePacket = "ScriptMessagePacket",
    ServerboundDiagnosticsPacket = "ServerboundDiagnosticsPacket",
    ServerboundLoadingScreenPacket = "ServerboundLoadingScreenPacket",
    ServerboundPackSettingChangePacket = "ServerboundPackSettingChangePacket",
    ServerPlayerPostMovePositionPacket = "ServerPlayerPostMovePositionPacket",
    ServerSettingsRequestPacket = "ServerSettingsRequestPacket",
    ServerSettingsResponsePacket = "ServerSettingsResponsePacket",
    ServerStatsPacket = "ServerStatsPacket",
    ServerToClientHandshakePacket = "ServerToClientHandshakePacket",
    SetActorDataPacket = "SetActorDataPacket",
    SetActorLinkPacket = "SetActorLinkPacket",
    SetActorMotionPacket = "SetActorMotionPacket",
    SetCommandsEnabledPacket = "SetCommandsEnabledPacket",
    SetDefaultGameTypePacket = "SetDefaultGameTypePacket",
    SetDifficultyPacket = "SetDifficultyPacket",
    SetDisplayObjectivePacket = "SetDisplayObjectivePacket",
    SetHealthPacket = "SetHealthPacket",
    SetHudPacket = "SetHudPacket",
    SetLastHurtByPacket = "SetLastHurtByPacket",
    SetLocalPlayerAsInitializedPacket = "SetLocalPlayerAsInitializedPacket",
    SetPlayerGameTypePacket = "SetPlayerGameTypePacket",
    SetPlayerInventoryOptionsPacket = "SetPlayerInventoryOptionsPacket",
    SetScoreboardIdentityPacket = "SetScoreboardIdentityPacket",
    SetScorePacket = "SetScorePacket",
    SetSpawnPositionPacket = "SetSpawnPositionPacket",
    SetTimePacket = "SetTimePacket",
    SettingsCommandPacket = "SettingsCommandPacket",
    SetTitlePacket = "SetTitlePacket",
    ShowCreditsPacket = "ShowCreditsPacket",
    ShowProfilePacket = "ShowProfilePacket",
    ShowStoreOfferPacket = "ShowStoreOfferPacket",
    SimpleEventPacket = "SimpleEventPacket",
    SimulationTypePacket = "SimulationTypePacket",
    SpawnExperienceOrbPacket = "SpawnExperienceOrbPacket",
    SpawnParticleEffectPacket = "SpawnParticleEffectPacket",
    StartGamePacket = "StartGamePacket",
    StopSoundPacket = "StopSoundPacket",
    StructureBlockUpdatePacket = "StructureBlockUpdatePacket",
    StructureTemplateDataRequestPacket = "StructureTemplateDataRequestPacket",
    StructureTemplateDataResponsePacket = "StructureTemplateDataResponsePacket",
    SubChunkPacket = "SubChunkPacket",
    SubChunkRequestPacket = "SubChunkRequestPacket",
    SubClientLoginPacket = "SubClientLoginPacket",
    SyncActorPropertyPacket = "SyncActorPropertyPacket",
    TakeItemActorPacket = "TakeItemActorPacket",
    TextPacket = "TextPacket",
    TickingAreasLoadStatusPacket = "TickingAreasLoadStatusPacket",
    ToastRequestPacket = "ToastRequestPacket",
    TransferPacket = "TransferPacket",
    TrimDataPacket = "TrimDataPacket",
    UnlockedRecipesPacket = "UnlockedRecipesPacket",
    UpdateAbilitiesPacket = "UpdateAbilitiesPacket",
    UpdateAdventureSettingsPacket = "UpdateAdventureSettingsPacket",
    UpdateAttributesPacket = "UpdateAttributesPacket",
    UpdateBlockPacket = "UpdateBlockPacket",
    UpdateBlockSyncedPacket = "UpdateBlockSyncedPacket",
    UpdateClientInputLocksPacket = "UpdateClientInputLocksPacket",
    UpdateClientOptionsPacket = "UpdateClientOptionsPacket",
    UpdateEquipPacket = "UpdateEquipPacket",
    UpdatePlayerGameTypePacket = "UpdatePlayerGameTypePacket",
    UpdateSoftEnumPacket = "UpdateSoftEnumPacket",
    UpdateSubChunkBlocksPacket = "UpdateSubChunkBlocksPacket",
    UpdateTradePacket = "UpdateTradePacket",
}

export class HttpClient {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     */
    cancelAll(reason: string): void;
    /**
     * @remarks This function can be called in early-execution mode.
     */
    get(uri: string): Promise<HttpResponse>;
    /**
     * @remarks This function can be called in early-execution mode.
     */
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
    /**
     * @remarks This function can be called in early-execution mode.
     */
    addHeader(key: string, value: minecraftserveradmin.SecretString | string): HttpRequest;
    /**
     * @remarks This function can be called in early-execution mode.
     */
    setBody(body: string): HttpRequest;
    /**
     * @remarks This function can be called in early-execution mode.
     */
    setHeaders(headers: HttpHeader[]): HttpRequest;
    /**
     * @remarks This function can be called in early-execution mode.
     */
    setMethod(method: HttpRequestMethod): HttpRequest;
    /**
     * @remarks This function can be called in early-execution mode.
     */
    setTimeout(timeout: number): HttpRequest;
}

export class HttpResponse {
    private constructor();
    readonly body: string;
    readonly headers: HttpHeader[];
    readonly request: HttpRequest;
    readonly status: number;
}

export class NetworkBeforeEvents {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly packetReceive: PacketReceiveBeforeEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly packetSend: PacketSendBeforeEventSignal;
}

export class PacketReceiveBeforeEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg0: PacketReceivedBeforeEvent) => void,
        options?: PacketEventOptions,
    ): (arg0: PacketReceivedBeforeEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: PacketReceivedBeforeEvent) => void): void;
}

export class PacketReceivedBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly packetId: PacketId;
    readonly packetSize: number;
    readonly sender?: minecraftserverbindings.Player;
}

export class PacketSendBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly packetId: PacketId;
    readonly recipients: (minecraftserverbindings.Player | undefined)[];
}

export class PacketSendBeforeEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg0: PacketSendBeforeEvent) => void,
        options?: PacketEventOptions,
    ): (arg0: PacketSendBeforeEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: PacketSendBeforeEvent) => void): void;
}

export interface PacketEventOptions {
    ignoredPacketIds?: PacketId[];
    monitoredPacketIds?: PacketId[];
}

// @ts-ignore
export class InternalHttpRequestError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly code: number;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly message: string;
}

// @ts-ignore
export class MalformedHttpRequestError extends Error {
    private constructor();
}

export const beforeEvents: NetworkBeforeEvents;
export const http: HttpClient;