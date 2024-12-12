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
    ClientboundDebugRendererPacket = "ClientboundDebugRendererPacket",
    ClientboundMapItemDataPacket = "ClientboundMapItemDataPacket",
    ClientCacheBlobStatusPacket = "ClientCacheBlobStatusPacket",
    ClientCacheMissResponsePacket = "ClientCacheMissResponsePacket",
    ClientCacheStatusPacket = "ClientCacheStatusPacket",
    ClientCameraAimAssistPacket = "ClientCameraAimAssistPacket",
    ClientToServerHandshakePacket = "ClientToServerHandshakePacket",
    CodeBuilderPacket = "CodeBuilderPacket",
    CodeBuilderSourcePacket = "CodeBuilderSourcePacket",
    CommandBlockUpdatePacket = "CommandBlockUpdatePacket",
    CommandOutputPacket = "CommandOutputPacket",
    CommandRequestPacket = "CommandRequestPacket",
    CompletedUsingItemPacket = "CompletedUsingItemPacket",
    CompressedBiomeDefinitionList = "CompressedBiomeDefinitionList",
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
    ItemStackRequestPacket = "ItemStackRequestPacket",
    ItemStackResponse = "ItemStackResponse",
    JigsawStructureDataPacket = "JigsawStructureDataPacket",
    LabTablePacket = "LabTablePacket",
    LecternUpdatePacket = "LecternUpdatePacket",
    LegacyTelemetryEventPacket = "LegacyTelemetryEventPacket",
    LessonProgressPacket = "LessonProgressPacket",
    LevelChunkPacket = "LevelChunkPacket",
    LevelEventGenericPacket = "LevelEventGenericPacket",
    LevelEventPacket = "LevelEventPacket",
    LevelSoundEventPacket = "LevelSoundEventPacket",
    LevelSoundEventPacketV1 = "LevelSoundEventPacketV1",
    LevelSoundEventPacketV2 = "LevelSoundEventPacketV2",
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
    PassengerJumpPacket = "PassengerJumpPacket",
    PhotoTransferPacket = "PhotoTransferPacket",
    PlayerActionPacket = "PlayerActionPacket",
    PlayerArmorDamagePacket = "PlayerArmorDamagePacket",
    PlayerAuthInputPacket = "PlayerAuthInputPacket",
    PlayerEnchantOptionsPacket = "PlayerEnchantOptionsPacket",
    PlayerFogPacket = "PlayerFogPacket",
    PlayerHotbarPacket = "PlayerHotbarPacket",
    PlayerInputPacket = "PlayerInputPacket",
    PlayerListPacket = "PlayerListPacket",
    PlayerSkinPacket = "PlayerSkinPacket",
    PlayerStartItemCooldownPacket = "PlayerStartItemCooldownPacket",
    PlayerToggleCrafterSlotRequestPacket = "PlayerToggleCrafterSlotRequestPacket",
    PlaySoundPacket = "PlaySoundPacket",
    PlayStatusPacket = "PlayStatusPacket",
    PositionTrackingDBClientRequestPacket = "PositionTrackingDBClientRequestPacket",
    PositionTrackingDBServerBroadcast = "PositionTrackingDBServerBroadcast",
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
    SetMovementAuthorityPacket = "SetMovementAuthorityPacket",
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
    StructureTemplateDataExportPacket = "StructureTemplateDataExportPacket",
    StructureTemplateDataRequestPacket = "StructureTemplateDataRequestPacket",
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
    UpdatePlayerGameTypePacket = "UpdatePlayerGameTypePacket",
    UpdateSoftEnumPacket = "UpdateSoftEnumPacket",
    UpdateSubChunkBlocksPacket = "UpdateSubChunkBlocksPacket",
    WSConnectPacket = "WSConnectPacket",
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

export class NetworkBeforeEvents {
    private constructor();
    readonly packetReceive: PacketReceiveBeforeEventSignal;
    readonly packetSend: PacketSendBeforeEventSignal;
}

export class PacketReceiveBeforeEventSignal {
    private constructor();
    subscribe(
        callback: (arg: PacketReceivedBeforeEvent) => void,
        options?: PacketEventOptions,
    ): (arg: PacketReceivedBeforeEvent) => void;
    unsubscribe(callback: (arg: PacketReceivedBeforeEvent) => void): void;
}

export class PacketReceivedBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly packetId: PacketId;
    readonly packetSize: number;
    readonly sender?: minecraftserver.Player;
}

export class PacketSendBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly packetId: PacketId;
    readonly recipients: minecraftserver.Player[];
}

export class PacketSendBeforeEventSignal {
    private constructor();
    subscribe(
        callback: (arg: PacketSendBeforeEvent) => void,
        options?: PacketEventOptions,
    ): (arg: PacketSendBeforeEvent) => void;
    unsubscribe(callback: (arg: PacketSendBeforeEvent) => void): void;
}

export interface PacketEventOptions {
    ignoredPacketIds?: PacketId[];
    monitoredPacketIds?: PacketId[];
}

export const beforeEvents: NetworkBeforeEvents;
export const http: HttpClient;