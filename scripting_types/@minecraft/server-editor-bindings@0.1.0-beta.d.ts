// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @beta
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-editor-bindings",
 *     "version": "0.1.0-beta"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
export enum Axis {
    None = 0,
    X = 1,
    Y = 2,
    Z = 4,
}

export enum BlockMaskListType {
    Disabled = "Disabled",
    Mask = "Mask",
    Replace = "Replace",
}

export enum BlockPaletteItemType {
    Simple = 0,
    Probability = 1,
}

export enum BrushShapeType {
    OffsetList = "OffsetList",
    WeightedSphere = "WeightedSphere",
}

export enum ContiguousSelectionType {
    SameBlock = 0,
    SameBlockAndStates = 1,
    SolidBlocks = 2,
    AllBlocks = 3,
    Custom = 4,
}

export enum CursorControlMode {
    Keyboard = 0,
    Mouse = 1,
    KeyboardAndMouse = 2,
    Fixed = 3,
}

export enum CursorTargetMode {
    Block = 0,
    Face = 1,
}

export enum DaylightCycle {
    Normal = 0,
    AlwaysDay = 1,
    LockTime = 2,
}

export enum EditorMode {
    Crosshair = "Crosshair",
    Tool = "Tool",
}

export enum EditorRealmsServiceAvailability {
    NotLoggedIn = 0,
    NoRealmsSubscription = 1,
    DedicatedServer = 2,
    NotServerHost = 3,
    Success = 4,
    Unknown = 5,
}

export enum EntityOperationType {
    Create = 0,
    Delete = 1,
}

export enum ExportResult {
    ValidWorldExport = 0,
    LevelFetchFailed = 1,
    FileArchiverFetchFailed = 2,
    ProjectConverterFetchFailed = 3,
    PlayerNotFound = 4,
    WorldExportFailed = 5,
    WorldExportBusy = 6,
    EditorSystemFailure = 7,
}

export enum GamePublishSetting {
    NoMultiPlay = 0,
    InviteOnly = 1,
    FriendsOnly = 2,
    FriendsOfFriends = 3,
    Public = 4,
}

export enum GraphicsSettingsProperty {
    NightVision = "NightVision",
    ShowChunkBoundaries = "ShowChunkBoundaries",
    ShowCompass = "ShowCompass",
    ShowInvisibleBlocks = "ShowInvisibleBlocks",
}

export enum InputModifier {
    Unused = 0,
    None = 1,
    Alt = 2,
    Control = 4,
    Shift = 8,
    Any = 15,
}

export enum KeyInputType {
    Invalid = 0,
    Press = 1,
    Release = 2,
}

export enum MouseActionCategory {
    Invalid = 0,
    Button = 1,
    Wheel = 2,
    Drag = 3,
}

export enum PaintCompletionState {
    Success = 0,
    Canceled = 1,
    Failed = 2,
}

export enum PaintMode {
    BlockPaint = 0,
    FreehandSelect = 1,
    Smooth = 2,
    Roughen = 3,
    Flatten = 4,
}

export enum Plane {
    None = 0,
    XY = 1,
    XZ = 2,
    YZ = 4,
}

export enum PlayerPermissionLevel {
    Visitor = 0,
    Member = 1,
    Operator = 2,
    Custom = 3,
}

export enum PlaytestSessionResult {
    OK = 0,
    InvalidSessionHandle = 1,
    SessionInfoNotFound = 2,
    TooManyPlayers = 3,
    WorldExportFailed = 4,
    WorldExportBusy = 5,
    UnsupportedScenario = 6,
    EditorSystemFailure = 7,
    InvalidLevelId = 8,
    PlayerNotFound = 9,
    ResponseTimeout = 10,
    UnspecifiedError = 11,
}

export enum PrimitiveType {
    Text = 0,
    Box = 1,
    Line = 2,
    Disc = 4,
    AxialSphere = 5,
}

export enum ProjectExportType {
    PlayableWorld = 0,
    ProjectBackup = 1,
    WorldTemplate = 2,
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

export enum SelectionVolumeEventType {
    Set = 1,
    Add = 2,
    Remove = 3,
    Translate = 4,
    Move = 5,
    Clear = 6,
}

export enum SpeedSettingsProperty {
    FlySpeedMultiplier = "FlySpeedMultiplier",
}

export enum SplineType {
    Line = 0,
    Hermite = 1,
}

export enum ThemeSettingsColorKey {
    Caret = "Caret",
    Confirm1 = "Confirm1",
    Confirm2 = "Confirm2",
    Confirm3 = "Confirm3",
    ConfirmFill = "ConfirmFill",
    ControlsGeneralFill = "ControlsGeneralFill",
    ControlsGeneralHighlight = "ControlsGeneralHighlight",
    Coordinate1 = "Coordinate1",
    Coordinate2 = "Coordinate2",
    Coordinate3 = "Coordinate3",
    CoordinateControlX = "CoordinateControlX",
    CoordinateControlY = "CoordinateControlY",
    CoordinateControlZ = "CoordinateControlZ",
    CursorVolumeBorder = "CursorVolumeBorder",
    CursorVolumeFill = "CursorVolumeFill",
    Destroy1 = "Destroy1",
    Destroy2 = "Destroy2",
    Destroy3 = "Destroy3",
    DestroyFill = "DestroyFill",
    DisableBackground = "DisableBackground",
    DisableFill = "DisableFill",
    DisableOutline = "DisableOutline",
    DisableText = "DisableText",
    DropDown1 = "DropDown1",
    DropDown2 = "DropDown2",
    DropDown3 = "DropDown3",
    ElementBorder = "ElementBorder",
    Error = "Error",
    FocusOutline = "FocusOutline",
    HeaderBackground = "HeaderBackground",
    HotbarOutline = "HotbarOutline",
    Info1 = "Info1",
    Info2 = "Info2",
    Info3 = "Info3",
    InfoFill = "InfoFill",
    PanelBackground = "PanelBackground",
    PanelBorder = "PanelBorder",
    PlacementVolumeBorder = "PlacementVolumeBorder",
    PlacementVolumeFill = "PlacementVolumeFill",
    PrefillVolumeBorder = "PrefillVolumeBorder",
    PrefillVolumeFill = "PrefillVolumeFill",
    PrimaryActive = "PrimaryActive",
    PrimaryBackground1 = "PrimaryBackground1",
    PrimaryBackground2 = "PrimaryBackground2",
    PrimaryBackground3 = "PrimaryBackground3",
    PrimaryBackground4 = "PrimaryBackground4",
    PrimaryDefault = "PrimaryDefault",
    PrimaryDisable = "PrimaryDisable",
    PrimaryMute = "PrimaryMute",
    ScrollBar = "ScrollBar",
    SecondaryActive = "SecondaryActive",
    SecondaryBackground1 = "SecondaryBackground1",
    SecondaryBackground2 = "SecondaryBackground2",
    SecondaryBackground3 = "SecondaryBackground3",
    SecondaryDefault = "SecondaryDefault",
    SecondaryDisable = "SecondaryDisable",
    SecondaryMute = "SecondaryMute",
    SelectionVolumeBorder = "SelectionVolumeBorder",
    SelectionVolumeFill = "SelectionVolumeFill",
    SelectionVolumeOutlineBorder = "SelectionVolumeOutlineBorder",
    SelectionVolumeOutlineFill = "SelectionVolumeOutlineFill",
    TitleBarBackground = "TitleBarBackground",
    ViewportOutline = "ViewportOutline",
    Warning = "Warning",
}

export enum WidgetComponentType {
    BoundingBox = "BoundingBox",
    Clipboard = "Clipboard",
    Entity = "Entity",
    Gizmo = "Gizmo",
    Guide = "Guide",
    RenderPrim = "RenderPrim",
    Spline = "Spline",
    Text = "Text",
    VolumeOutline = "VolumeOutline",
}

export enum WidgetGizmoEventType {
    CornerGrabbed = "CornerGrabbed",
    CornerMoved = "CornerMoved",
    CornerReleased = "CornerReleased",
    OriginActivated = "OriginActivated",
    OriginDeactivated = "OriginDeactivated",
    OriginGrabbed = "OriginGrabbed",
    OriginMoved = "OriginMoved",
    OriginReleased = "OriginReleased",
}

export enum WidgetGroupSelectionMode {
    Multiple = "Multiple",
    None = "None",
    Single = "Single",
}

export enum WidgetMouseButtonActionType {
    Pressed = 0,
    Released = 1,
    Drag = 2,
}

export class BlockPalette {
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    getItem(index: number): IBlockPaletteItem;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    removeItemAt(index: number): void;
    removeItems(): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    setItem(blockPaletteItem: IBlockPaletteItem, index: number): void;
}

export class BlockPaletteManager {
    private constructor();
    addOrReplacePalette(paletteId: string, palette: BlockPalette): void;
    getPalette(paletteId: string): BlockPalette | undefined;
    getPaletteIdList(): string[];
    /**
     * @throws This function can throw errors.
     */
    getPaletteItem(paletteId: string, index: number): IBlockPaletteItem;
    getPrimaryPalette(): BlockPalette;
    /**
     * @throws This function can throw errors.
     */
    getSelectedBlockType(): minecraftserver.BlockType;
    getSelectedItem(): IBlockPaletteItem;
    /**
     * @throws This function can throw errors.
     */
    removePalette(paletteId: string): void;
    /**
     * @throws This function can throw errors.
     */
    setPaletteItem(paletteId: string, index: number, item: IBlockPaletteItem): void;
    /**
     * @throws This function can throw errors.
     */
    setPrimaryPalette(paletteId: string): void;
    /**
     * @throws This function can throw errors.
     */
    setSelectedItem(item: IBlockPaletteItem): void;
}

export class BlockUtilities {
    private constructor();
    /**
     * @throws This function can throw errors.
     */
    fillVolume(
        volume: 
            | minecraftserver.BlockVolumeBase
            | minecraftserver.CompoundBlockVolume
            | RelativeVolumeListBlockVolume,
        block?: minecraftserver.BlockPermutation | minecraftserver.BlockType | string,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    getContiguousSelection(properties?: ContiguousSelectionProperties): minecraftserver.CompoundBlockVolume;
    getDimensionLocationBoundingBox(): minecraftserver.BlockBoundingBox;
    getDimensionMaxLocation(): minecraftserver.Vector3;
    getDimensionMinLocation(): minecraftserver.Vector3;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    getFacePreviewSelection(properties?: QuickExtrudeProperties): minecraftserver.ListBlockVolume;
    isLocationInsideCurrentDimensionBounds(locationOrVolumeOrBounds: 
            | minecraftserver.BlockBoundingBox
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3): boolean;
    /**
     * @throws This function can throw errors.
     */
    quickExtrude(properties?: QuickExtrudeProperties): void;
    shrinkWrapVolume(volume: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume): RelativeVolumeListBlockVolume;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    trimVolumeToFitContents(
        volume: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume,
        retainMarqueeAfterTrimming: boolean,
        ignoreLiquid: boolean,
        ignoreNoCollision: boolean,
        blockMask?: BlockMaskList,
    ): RelativeVolumeListBlockVolume;
}

export class BrushShapeManager {
    private constructor();
    readonly activeBrushVolume?: RelativeVolumeListBlockVolume;
    activateBrushTool(): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    beginPainting(onComplete: (arg: PaintCompletionState) => void): void;
    deactivateBrushTool(): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    endPainting(cancelled: boolean): void;
    getBrushShapeOffset(): minecraftserver.Vector3;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    setBrushMask(mask: BlockMaskList): void;
    setBrushShape(shape: minecraftserver.Vector3[] | RelativeVolumeListBlockVolume): void;
    setBrushShapeOffset(offset: minecraftserver.Vector3): void;
    setBrushShapeVisible(visible: boolean): void;
    setFlattenHeight(flattenHeight: number): void;
    setFlattenRadius(flattenRadius: number): void;
    setTerrainStrength(terrainStrength: number): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    singlePaint(onComplete: (arg: PaintCompletionState) => void): void;
    switchBrushPaintMode(paintMode: PaintMode): void;
}

export class ClipboardChangeAfterEvent {
    private constructor();
    readonly isPrimary: boolean;
    readonly itemId: string;
}

export class ClipboardChangeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: ClipboardChangeAfterEvent) => void): (arg: ClipboardChangeAfterEvent) => void;
    unsubscribe(callback: (arg: ClipboardChangeAfterEvent) => void): void;
}

export class ClipboardItem {
    private constructor();
    readonly id: string;
    readonly isEmpty: boolean;
    readonly size: minecraftserver.Vector3;
    /**
     * @throws This function can throw errors.
     */
    clear(): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    getPredictedWriteVolume(
        location: minecraftserver.Vector3,
        options?: ClipboardWriteOptions,
    ): RelativeVolumeListBlockVolume;
    /**
     * @throws This function can throw errors.
     */
    readFromStructure(structure: EditorStructure): void;
    /**
     * @throws This function can throw errors.
     */
    readFromWorld(source: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    writeToWorld(location: minecraftserver.Vector3, options?: ClipboardWriteOptions): boolean;
}

export class ClipboardManager {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly clipboard: ClipboardItem;
    /**
     * @throws This function can throw errors.
     */
    create(): ClipboardItem;
}

export class CurrentThemeChangeAfterEvent {
    private constructor();
    readonly id: string;
}

export class CurrentThemeChangeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: CurrentThemeChangeAfterEvent) => void): (arg: CurrentThemeChangeAfterEvent) => void;
    unsubscribe(callback: (arg: CurrentThemeChangeAfterEvent) => void): void;
}

export class CurrentThemeColorChangeAfterEvent {
    private constructor();
    readonly color: minecraftserver.RGBA;
    readonly colorKey: string;
}

export class CurrentThemeColorChangeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: CurrentThemeColorChangeAfterEvent) => void): (arg: CurrentThemeColorChangeAfterEvent) => void;
    unsubscribe(callback: (arg: CurrentThemeColorChangeAfterEvent) => void): void;
}

export class Cursor {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly faceDirection: number;
    /**
     * @throws This property can throw errors.
     */
    readonly isVisible: boolean;
    /**
     * @throws This function can throw errors.
     */
    getPosition(): minecraftserver.Vector3;
    /**
     * @throws This function can throw errors.
     */
    getProperties(): CursorProperties;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    getRay(): CursorRay;
    /**
     * @throws This function can throw errors.
     */
    hide(): void;
    /**
     * @throws This function can throw errors.
     */
    moveBy(offset: minecraftserver.Vector3): minecraftserver.Vector3;
    /**
     * @throws This function can throw errors.
     */
    resetToDefaultState(): void;
    /**
     * @throws This function can throw errors.
     */
    setProperties(properties: CursorProperties): void;
    /**
     * @throws This function can throw errors.
     */
    show(): void;
}

export class CursorPropertiesChangeAfterEvent {
    private constructor();
    readonly position?: CursorPosition;
    readonly properties: CursorProperties;
}

export class CursorPropertyChangeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: CursorPropertiesChangeAfterEvent) => void): (arg: CursorPropertiesChangeAfterEvent) => void;
    unsubscribe(callback: (arg: CursorPropertiesChangeAfterEvent) => void): void;
}

export class DataStore {
    private constructor();
    readonly actionBarContainer: DataStoreActionBarContainer;
    readonly actionContainer: DataStoreActionContainer;
    readonly afterEvents: DataStoreAfterEvents;
    readonly menuContainer: DataStoreMenuContainer;
    readonly modalToolContainer: DataStoreModalToolContainer;
}

export class DataStoreActionBarContainer {
    private constructor();
    getItemPayload(id: string): string;
    getItemProperty(id: string, property: string): boolean | number | string | undefined;
    hasItemPayload(id: string): boolean;
    hasItemProperty(id: string, property: string): boolean;
    /**
     * @throws This function can throw errors.
     */
    registerItem(id: string, payload: string): void;
    /**
     * @throws This function can throw errors.
     */
    unregisterItem(id: string): void;
    /**
     * @throws This function can throw errors.
     */
    updateRegisteredItem(id: string, payload: string): void;
    /**
     * @throws This function can throw errors.
     */
    updateRegisteredItemProperty(id: string, payload: string, property: string): void;
}

export class DataStoreActionContainer {
    private constructor();
    /**
     * @throws This function can throw errors.
     */
    bindActionToControl(controlId: string, actionPayload: string): void;
    /**
     * @throws This function can throw errors.
     */
    removeActionFromControl(controlId: string, actionPayload?: string): void;
}

export class DataStoreAfterEvents {
    private constructor();
    readonly payloadReceived: DataStorePayloadAfterEventSignal;
}

export class DataStoreMenuContainer {
    private constructor();
    /**
     * @throws This function can throw errors.
     */
    createItem(id: string, payload: string): void;
    /**
     * @throws This function can throw errors.
     */
    destroyItem(id: string): void;
    getPayload(id: string): string;
    getProperty(id: string, property: string): boolean | number | string | undefined;
    hasPayload(id: string): boolean;
    hasProperty(id: string, property: string): boolean;
    /**
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
    subscribe(callback: (arg: DataStoreModalToolActivationChangedEvent) => void): (arg: DataStoreModalToolActivationChangedEvent) => void;
    unsubscribe(callback: (arg: DataStoreModalToolActivationChangedEvent) => void): void;
}

export class DataStoreModalToolContainer {
    private constructor();
    readonly toolActivationChanged: DataStoreModalToolActivationChangedEventSignal;
    getSelectedTool(): string | undefined;
    getToolPayload(id: string): string;
    getToolProperty(id: string, property: string): boolean | number | string | undefined;
    hasToolPayload(id: string): boolean;
    hasToolProperty(id: string, property: string): boolean;
    /**
     * @throws This function can throw errors.
     */
    registerTool(id: string, payload: string): void;
    /**
     * @throws This function can throw errors.
     */
    unregisterTool(id: string): void;
    /**
     * @throws This function can throw errors.
     */
    updateRegisteredTool(id: string, payload: string): void;
    /**
     * @throws This function can throw errors.
     */
    updateRegisteredToolProperty(id: string, payload: string, property: string): void;
    /**
     * @throws This function can throw errors.
     */
    updateSelectedTool(toolId?: string): void;
}

export class DataStorePayloadAfterEvent {
    private constructor();
    readonly dataTag: string;
    readonly payload: string;
}

export class DataStorePayloadAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: DataStorePayloadAfterEvent) => void): (arg: DataStorePayloadAfterEvent) => void;
    unsubscribe(callback: (arg: DataStorePayloadAfterEvent) => void): void;
}

export class DataTransferManager {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    getRegisteredAccessors(): DataTransferCollectionNameData[];
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
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

export class EditorConstants {
    private constructor();
    readonly maxSelectionSize: minecraftserver.Vector3;
    readonly maxStructureOffset: minecraftserver.Vector3;
    readonly minStructureOffset: minecraftserver.Vector3;
}

export class EditorStructureManager {
    private constructor();
    /**
     * @throws This function can throw errors.
     */
    createFromClipboardItem(item: ClipboardItem, structureName: string): EditorStructure;
    /**
     * @throws This function can throw errors.
     */
    getExistingTags(): string[];
    /**
     * @throws This function can throw errors.
     */
    loadStructure(location: string, id: string): EditorStructure;
    /**
     * @throws This function can throw errors.
     */
    saveStructure(structure: EditorStructure): void;
    /**
     * @throws This function can throw errors.
     */
    searchStructures(options?: EditorStructureSearchOptions): EditorStructure[];
}

export class ExportManager {
    private constructor();
    /**
     * @throws This function can throw errors.
     */
    beginExportProject(options: GameOptions): Promise<ExportResult>;
    /**
     * @throws This function can throw errors.
     */
    canExportProject(): boolean;
    getGameOptions(useDefault?: boolean): GameOptions;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    getGameVersion(): string;
}

export class Extension {
    private constructor();
    readonly defaultToolGroupId: string;
    readonly description: string;
    readonly name: string;
    readonly notes: string;
}

export class ExtensionContext {
    private constructor();
    readonly afterEvents: ExtensionContextAfterEvents;
    readonly blockPalette: BlockPaletteManager;
    readonly blockUtilities: BlockUtilities;
    readonly brushShapeManager: BrushShapeManager;
    readonly clipboardManager: ClipboardManager;
    readonly cursor: Cursor;
    readonly exportManager: ExportManager;
    readonly extensionInfo: Extension;
    readonly player: minecraftserver.Player;
    readonly playtest: PlaytestManager;
    readonly selectionManager: SelectionManager;
    readonly settings: SettingsManager;
    readonly structureManager: EditorStructureManager;
    readonly transactionManager: TransactionManager;
    readonly widgetManager: WidgetManager;
}

export class ExtensionContextAfterEvents {
    private constructor();
    readonly clipboardChange: ClipboardChangeAfterEventSignal;
    readonly currentThemeChange: CurrentThemeChangeAfterEventSignal;
    readonly currentThemeColorChange: CurrentThemeColorChangeAfterEventSignal;
    readonly cursorPropertyChange: CursorPropertyChangeAfterEventSignal;
    readonly modeChange: ModeChangeAfterEventSignal;
    readonly SelectionChange: SelectionChangeAfterEventSignal;
}

export class GraphicsSettings {
    private constructor();
    get(property: GraphicsSettingsProperty): boolean | number | string | undefined;
    getAll(): Record<string, boolean | number | string>;
    /**
     * @throws This function can throw errors.
     */
    set(property: GraphicsSettingsProperty, value: boolean | number | string): void;
    /**
     * @throws This function can throw errors.
     */
    setAll(properties: Record<string, boolean | number | string>): void;
}

export class IBlockPaletteItem {
    private constructor();
    getBlock(): minecraftserver.BlockType | undefined;
    getDisplayName(): string | undefined;
    getType(): BlockPaletteItemType;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    setBlock(block: minecraftserver.BlockPermutation | minecraftserver.BlockType | string): void;
}

export class InputService {
    private constructor();
    /**
     * @throws This function can throw errors.
     */
    focusViewport(): void;
    getKeyBindingProcessingState(contextId: string, bindingId: string): number | undefined;
    /**
     * @throws This function can throw errors.
     */
    registerKeyBinding(
        contextId: string,
        bindingId: string,
        key: number,
        modifier: InputModifier,
        info: InputBindingInfo,
    ): void;
    /**
     * @throws This function can throw errors.
     */
    registerMouseBinding(contextId: string, bindingId: string, mouseAction: MouseActionCategory): void;
    /**
     * @throws This function can throw errors.
     */
    unregisterKeyBinding(contextId: string, bindingId: string): void;
    /**
     * @throws This function can throw errors.
     */
    unregisterMouseBinding(contextId: string, bindingId: string): void;
    /**
     * @throws This function can throw errors.
     */
    updateKeyBindingProcessingState(contextId: string, bindingId: string, state?: number): void;
}

export class InternalPlayerServiceContext {
    private constructor();
    readonly dataStore: DataStore;
    readonly dataTransfer: DataTransferManager;
    readonly input: InputService;
    readonly realmsService: realmsService;
    readonly tickingArea: TickingAreaManager;
}

export class Logger {
    private constructor();
    /**
     * @throws This function can throw errors.
     */
    debug(message: string, properties?: LogProperties): void;
    /**
     * @throws This function can throw errors.
     */
    error(message: string, properties?: LogProperties): void;
    /**
     * @throws This function can throw errors.
     */
    info(message: string, properties?: LogProperties): void;
    /**
     * @throws This function can throw errors.
     */
    warning(message: string, properties?: LogProperties): void;
}

export class MinecraftEditor {
    private constructor();
    readonly constants: EditorConstants;
    /**
     * @throws This property can throw errors.
     */
    readonly log: Logger;
    readonly simulation: SimulationState;
}

export class MinecraftEditorInternal {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    fireTelemetryEvent(player: minecraftserver.Player, source: string, eventName: string, metadata: string): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    getMapColorUnsafe(player: minecraftserver.Player, coordinate: minecraftserver.Vector3): minecraftserver.RGBA;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    getPlayerServices(player: minecraftserver.Player): InternalPlayerServiceContext;
    registerExtension(
        extensionName: string,
        activationFunction: (arg: ExtensionContext) => void,
        shutdownFunction: (arg: ExtensionContext) => void,
        options?: ExtensionOptionalParameters,
    ): Extension;
}

export class ModeChangeAfterEvent {
    private constructor();
    readonly mode: EditorMode;
}

export class ModeChangeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: ModeChangeAfterEvent) => void): (arg: ModeChangeAfterEvent) => void;
    unsubscribe(callback: (arg: ModeChangeAfterEvent) => void): void;
}

export class PlaytestManager {
    private constructor();
    /**
     * @throws This function can throw errors.
     */
    beginPlaytest(options: GameOptions): Promise<PlaytestSessionResult>;
    /**
     * @throws This function can throw errors.
     */
    getPlaytestSessionAvailability(): PlaytestSessionResult;
}

// @ts-ignore
export class ProbabilityBlockPaletteItem extends IBlockPaletteItem {
    constructor(displayName?: string);
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    addBlock(block: minecraftserver.BlockPermutation | minecraftserver.BlockType | string, weight: number): void;
    getBlocks(): WeightedBlock[];
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link Error}
     */
    removeBlockAt(index: number): void;
}

export class realmsService {
    private constructor();
    /**
     * @throws This function can throw errors.
     */
    beginDownloadFromRealms(realmsWorldId: string, slotId: number): Promise<string>;
    /**
     * @throws This function can throw errors.
     */
    beginUploadToRealms(realmsWorldId: string, slotId: number, gameOptions: GameOptions): Promise<RealmsWorldUploadResult>;
    canUploadWorld(): boolean;
    /**
     * @throws This function can throw errors.
     */
    getRealmWorldlist(): Promise<EditorRealmsWorld[]>;
    getServiceStatus(): RealmsServiceStatus;
    /**
     * @throws This function can throw errors.
     */
    getSlots(worldId: string): Promise<EditorRealmsWorldSlot[]>;
    isRealmsServiceAvailable(): EditorRealmsServiceAvailability;
}

// @ts-ignore
export class RelativeVolumeListBlockVolume extends minecraftserver.BlockVolumeBase {
    readonly isEmpty: boolean;
    origin?: minecraftserver.Vector3;
    readonly volumeCount: number;
    constructor(origin?: minecraftserver.Vector3);
    add(toAdd: 
            | minecraftserver.Vector3[]
            | minecraftserver.BlockVolume
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3): void;
    clear(): void;
    getVolumeList(): minecraftserver.BlockVolume[];
    hasAdjacent(location: minecraftserver.Vector3, normalizedOffset: minecraftserver.Vector3): boolean;
    moveTo(location: minecraftserver.Vector3): void;
    remove(toRemove: 
            | minecraftserver.Vector3[]
            | minecraftserver.BlockVolume
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3): void;
    set(toSet: 
            | minecraftserver.Vector3[]
            | minecraftserver.BlockVolume
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3): void;
    translate(offset: minecraftserver.Vector3): void;
}

export class SelectionChangeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: SelectionEventAfterEvent) => void): (arg: SelectionEventAfterEvent) => void;
    unsubscribe(callback: (arg: SelectionEventAfterEvent) => void): void;
}

export class SelectionContainerBase {
    private constructor();
}

// @ts-ignore
export class SelectionContainerEntity extends SelectionContainerBase {
    private constructor();
}

// @ts-ignore
export class SelectionContainerVolume extends SelectionContainerBase {
    private constructor();
    readonly isEmpty: boolean;
    readonly volumeCount: number;
    add(volume: 
            | minecraftserver.Vector3[]
            | minecraftserver.BlockVolume
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3): void;
    clear(): void;
    get(): RelativeVolumeListBlockVolume;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    getBoundingBox(): minecraftserver.BlockBoundingBox;
    moveTo(location: minecraftserver.Vector3): void;
    remove(volume: 
            | minecraftserver.Vector3[]
            | minecraftserver.BlockVolume
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3): void;
    set(volume: 
            | minecraftserver.Vector3[]
            | minecraftserver.BlockVolume
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3): void;
    translate(offset: minecraftserver.Vector3): void;
}

export class SelectionContainerVolumeEvent {
    private constructor();
    readonly "type": SelectionVolumeEventType;
}

export class SelectionEventAfterEvent {
    private constructor();
    readonly volumeEventData?: SelectionContainerVolumeEvent;
}

export class SelectionManager {
    private constructor();
    readonly entity: SelectionContainerEntity;
    readonly volume: SelectionContainerVolume;
}

export class SettingsManager {
    private constructor();
    readonly graphics: GraphicsSettings;
    readonly speed: SpeedSettings;
    readonly theme: ThemeSettings;
}

// @ts-ignore
export class SimpleBlockPaletteItem extends IBlockPaletteItem {
    constructor(displayName?: string);
}

export class SimulationState {
    private constructor();
    isPaused(): boolean;
    /**
     * @throws This function can throw errors.
     */
    setPaused(isPaused: boolean): void;
}

export class SpeedSettings {
    private constructor();
    get(property: SpeedSettingsProperty): number | undefined;
    getAll(): Record<string, number>;
    /**
     * @throws This function can throw errors.
     */
    set(property: SpeedSettingsProperty, value: number): void;
    /**
     * @throws This function can throw errors.
     */
    setAll(properties: Record<string, number>): void;
}

export class ThemeSettings {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    addNewTheme(id: string, name?: string, sourceThemeId?: string): void;
    canThemeBeModified(id: string): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    deleteTheme(id: string): void;
    getCurrentTheme(): string;
    getThemeColors(id: string): Record<string, minecraftserver.RGBA> | undefined;
    getThemeIdList(): string[];
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    getThemeName(id: string): string;
    resolveColorKey(key: ThemeSettingsColorKey): minecraftserver.RGBA;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    setCurrentTheme(id: string): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    setThemeName(id: string, name: string): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    updateThemeColor(id: string, key: ThemeSettingsColorKey, newColor: minecraftserver.RGBA): void;
}

export class TickingAreaManager {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    isTickingAreaActive(areaIdentifier: string): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    purgeTickingAreas(areaIdentifier: string): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    releaseTickingArea(areaIdentifier: string): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    requestTickingArea(areaIdentifier: string, from: minecraftserver.Vector3, to: minecraftserver.Vector3): boolean;
}

export class TransactionManager {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    addEntityOperation(entity: minecraftserver.Entity, type: EntityOperationType): boolean;
    /**
     * @throws This function can throw errors.
     */
    addUserDefinedOperation(
        transactionHandlerId: UserDefinedTransactionHandlerId,
        operationData: string,
        operationName?: string,
    ): void;
    /**
     * @throws This function can throw errors.
     */
    commitOpenTransaction(): boolean;
    /**
     * @throws This function can throw errors.
     */
    commitTrackedChanges(): number;
    /**
     * @throws This function can throw errors.
     */
    createUserDefinedTransactionHandler(
        undoClosure: (arg: string) => void,
        redoClosure: (arg: string) => void,
    ): UserDefinedTransactionHandlerId;
    /**
     * @throws This function can throw errors.
     */
    discardOpenTransaction(): boolean;
    /**
     * @throws This function can throw errors.
     */
    discardTrackedChanges(): number;
    /**
     * @throws This function can throw errors.
     */
    openTransaction(name: string): boolean;
    /**
     * @throws This function can throw errors.
     */
    redo(): void;
    /**
     * @throws This function can throw errors.
     */
    redoSize(): number;
    /**
     * @throws This function can throw errors.
     */
    trackBlockChangeArea(from: minecraftserver.Vector3, to: minecraftserver.Vector3): boolean;
    /**
     * @throws This function can throw errors.
     */
    trackBlockChangeList(locations: minecraftserver.Vector3[]): boolean;
    /**
     * @throws This function can throw errors.
     */
    trackBlockChangeVolume(blockVolume: minecraftserver.BlockVolumeBase): boolean;
    /**
     * @throws This function can throw errors.
     */
    undo(): void;
    /**
     * @throws This function can throw errors.
     */
    undoSize(): number;
}

export class UserDefinedTransactionHandlerId {
    private constructor();
}

export class Widget {
    private constructor();
    bindPositionToBlockCursor: boolean;
    collisionOffset: minecraftserver.Vector3;
    collisionRadius: number;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidWidgetError}
     */
    readonly group: WidgetGroup;
    location: minecraftserver.Vector3;
    lockPositionToSurface: boolean;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidWidgetError}
     */
    readonly selectable: boolean;
    selected: boolean;
    showBoundingBox: boolean;
    showCollisionRadius: boolean;
    snapToBlockLocation: boolean;
    visible: boolean;
    readonly widgetName: string;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     */
    addBoundingBox(
        componentName: string,
        size: minecraftserver.Vector3,
        options?: WidgetComponentBoundingBoxOptions,
    ): WidgetComponentBoundingBox;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     */
    addClipboardComponent(
        componentName: string,
        clipboardItem?: ClipboardItem,
        options?: WidgetComponentClipboardOptions,
    ): WidgetComponentClipboard;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     */
    addEntityComponent(
        componentName: string,
        actorNameId: string,
        options?: WidgetComponentEntityOptions,
    ): WidgetComponentEntity;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     */
    addGizmoComponent(componentName: string, options?: WidgetComponentGizmoOptions): WidgetComponentGizmo;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     */
    addGuideComponent(componentName: string, options?: WidgetComponentGuideOptions): WidgetComponentGuide;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     */
    addRenderPrimitiveComponent(
        componentName: string,
        primitiveType: 
            | WidgetComponentRenderPrimitiveTypeAxialSphere
            | WidgetComponentRenderPrimitiveTypeBox
            | WidgetComponentRenderPrimitiveTypeDisc
            | WidgetComponentRenderPrimitiveTypeLine,
        options?: WidgetComponentRenderPrimitiveOptions,
    ): WidgetComponentRenderPrimitive;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     */
    addSplineComponent(componentName: string, options?: WidgetComponentSplineOptions): WidgetComponentSpline;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     */
    addTextComponent(componentName: string, label: string, options?: WidgetComponentTextOptions): WidgetComponentText;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     */
    addVolumeOutline(
        componentName: string,
        volume?: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume,
        options?: WidgetComponentVolumeOutlineOptions,
    ): WidgetComponentVolumeOutline;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     *
     * {@link InvalidWidgetGroupError}
     */
    delete(): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    deleteComponent(componentOrName: string | WidgetComponentBase): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     */
    getComponent(componentName: string): WidgetComponentBase;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetError}
     */
    getComponents(): WidgetComponentBase[];
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetError}
     */
    setStateChangeEvent(eventFunction?: (arg: WidgetStateChangeEventData) => void): void;
}

export class WidgetComponentBase {
    private constructor();
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly componentType: WidgetComponentType;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly location: minecraftserver.Vector3;
    lockToSurface: boolean;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly name: string;
    offset: minecraftserver.Vector3;
    readonly valid: boolean;
    visible: boolean;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly widget: Widget;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    delete(): void;
}

// @ts-ignore
export class WidgetComponentBoundingBox extends WidgetComponentBase {
    private constructor();
    boundsOffset: minecraftserver.Vector3;
    enableResizeHandles: Axis;
    hullColor: minecraftserver.RGBA;
    mirror: minecraftserver.StructureMirrorAxis;
    normalizedOrigin: minecraftserver.Vector3;
    outlineColor: minecraftserver.RGBA;
    rotation: minecraftserver.StructureRotation;
    showWorldIntersections: boolean;
    size: minecraftserver.Vector3;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly transformedWorldVolume: minecraftserver.BlockVolume;
    visibleHull: boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    deactivateHandles(): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    setStateChangeEvent(eventFunction?: (arg: WidgetComponentBoundingBoxStateChangeEventParameters) => void): void;
}

export class WidgetComponentBoundingBoxStateChangeEventParameters {
    private constructor();
    readonly boundsOffset?: minecraftserver.Vector3;
    readonly boundsSize?: minecraftserver.Vector3;
    readonly component: WidgetComponentBoundingBox;
    readonly eventType: WidgetGizmoEventType;
    readonly widget: Widget;
}

// @ts-ignore
export class WidgetComponentClipboard extends WidgetComponentBase {
    private constructor();
    clipboardOffset: minecraftserver.Vector3;
    highlightHullColor: minecraftserver.RGBA;
    highlightOutlineColor: minecraftserver.RGBA;
    hullColor: minecraftserver.RGBA;
    mirror: minecraftserver.StructureMirrorAxis;
    normalizedOrigin: minecraftserver.Vector3;
    outlineColor: minecraftserver.RGBA;
    rotation: minecraftserver.StructureRotation;
    showOutline: boolean;
}

// @ts-ignore
export class WidgetComponentEntity extends WidgetComponentBase {
    private constructor();
    clickable: boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    playAnimation(animationName: string): void;
}

// @ts-ignore
export class WidgetComponentGizmo extends WidgetComponentBase {
    private constructor();
    activated: boolean;
    enabledAxes: Axis;
    normalizedOffsetOverride?: minecraftserver.Vector3;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    setStateChangeEvent(eventFunction?: (arg: WidgetComponentGizmoStateChangeEventParameters) => void): void;
}

export class WidgetComponentGizmoStateChangeEventParameters {
    private constructor();
    readonly component: WidgetComponentGizmo;
    readonly eventType?: WidgetGizmoEventType;
    readonly widget: Widget;
}

// @ts-ignore
export class WidgetComponentGuide extends WidgetComponentBase {
    private constructor();
}

// @ts-ignore
export class WidgetComponentRenderPrimitive extends WidgetComponentBase {
    private constructor();
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    readonly primitiveType: PrimitiveType;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    setPrimitive(primitive: 
            | WidgetComponentRenderPrimitiveTypeAxialSphere
            | WidgetComponentRenderPrimitiveTypeBox
            | WidgetComponentRenderPrimitiveTypeDisc
            | WidgetComponentRenderPrimitiveTypeLine): void;
}

// @ts-ignore
export class WidgetComponentRenderPrimitiveTypeAxialSphere extends WidgetComponentRenderPrimitiveTypeBase {
    center: minecraftserver.Vector3;
    color?: minecraftserver.RGBA;
    radius: number;
    constructor(center: minecraftserver.Vector3, radius: number, color?: minecraftserver.RGBA);
}

export class WidgetComponentRenderPrimitiveTypeBase {
    private constructor();
    readonly primitiveType: PrimitiveType;
}

// @ts-ignore
export class WidgetComponentRenderPrimitiveTypeBox extends WidgetComponentRenderPrimitiveTypeBase {
    center: minecraftserver.Vector3;
    color: minecraftserver.RGBA;
    size?: minecraftserver.Vector3;
    constructor(center: minecraftserver.Vector3, color: minecraftserver.RGBA, size?: minecraftserver.Vector3);
}

// @ts-ignore
export class WidgetComponentRenderPrimitiveTypeDisc extends WidgetComponentRenderPrimitiveTypeBase {
    center: minecraftserver.Vector3;
    color: minecraftserver.RGBA;
    radius: number;
    constructor(center: minecraftserver.Vector3, radius: number, color: minecraftserver.RGBA);
}

// @ts-ignore
export class WidgetComponentRenderPrimitiveTypeLine extends WidgetComponentRenderPrimitiveTypeBase {
    color: minecraftserver.RGBA;
    end: minecraftserver.Vector3;
    start: minecraftserver.Vector3;
    constructor(start: minecraftserver.Vector3, end: minecraftserver.Vector3, color: minecraftserver.RGBA);
}

// @ts-ignore
export class WidgetComponentSpline extends WidgetComponentBase {
    private constructor();
    splineType: SplineType;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    getControlPoints(): Widget[];
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    getInterpolatedPoints(maxPointsPerControlSegment?: number): minecraftserver.Vector3[];
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    setControlPoints(widgetList: Widget[]): void;
}

// @ts-ignore
export class WidgetComponentText extends WidgetComponentBase {
    private constructor();
    color: minecraftserver.RGBA;
    label: string;
}

// @ts-ignore
export class WidgetComponentVolumeOutline extends WidgetComponentBase {
    private constructor();
    highlightHullColor: minecraftserver.RGBA;
    highlightOutlineColor: minecraftserver.RGBA;
    hullColor: minecraftserver.RGBA;
    mirror: minecraftserver.StructureMirrorAxis;
    normalizedOrigin: minecraftserver.Vector3;
    outlineColor: minecraftserver.RGBA;
    rotation: minecraftserver.StructureRotation;
    showHighlightOutline: boolean;
    showOutline: boolean;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly transformedWorldVolume: minecraftserver.BlockVolume;
    volumeOffset: minecraftserver.Vector3;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    getVolume(): RelativeVolumeListBlockVolume | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    setVolume(volumeToSet?: 
            | minecraftserver.Vector3[]
            | minecraftserver.BlockVolume
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3): void;
}

export class WidgetGroup {
    private constructor();
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidWidgetGroupError}
     */
    readonly selectedWidgetCount: number;
    visible: boolean;
    visibleBounds: boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetGroupError}
     */
    createWidget(location: minecraftserver.Vector3, options?: WidgetCreateOptions): Widget;
    delete(): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetError}
     *
     * {@link InvalidWidgetGroupError}
     */
    deleteWidget(widgetToDelete: Widget): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetGroupError}
     */
    deselectAllWidgets(): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetGroupError}
     */
    selectAllWidgets(): void;
}

export class WidgetManager {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     */
    createGroup(options?: WidgetGroupCreateOptions): WidgetGroup;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetGroupError}
     */
    deleteGroup(groupToDelete: WidgetGroup): void;
}

export class WidgetMouseButtonEventData {
    private constructor();
    readonly action: WidgetMouseButtonActionType;
    readonly altPressed: boolean;
    readonly controlPressed: boolean;
    readonly shiftPressed: boolean;
}

export class WidgetStateChangeEventData {
    private constructor();
    readonly group: WidgetGroup;
    readonly location?: minecraftserver.Vector3;
    readonly mouseEvent?: WidgetMouseButtonEventData;
    readonly selected?: boolean;
    readonly visible?: boolean;
    readonly widget: Widget;
}

export interface BlockMaskList {
    blockList: (minecraftserver.BlockPermutation | minecraftserver.BlockType | string)[];
    maskType: BlockMaskListType;
}

export interface ClipboardWriteOptions {
    mirror?: minecraftserver.StructureMirrorAxis;
    normalizedOrigin?: minecraftserver.Vector3;
    offset?: minecraftserver.Vector3;
    rotation?: minecraftserver.StructureRotation;
}

export interface ContiguousSelectionProperties {
    checkForAdjacentFace?: boolean;
    contiguousSelectionBlockList?: string[];
    contiguousSelectionType?: ContiguousSelectionType;
    fullSelectionToleranceLevel?: number;
    isFace?: boolean;
    selectionDirection?: number;
    size?: number;
    startingLocation?: minecraftserver.Vector3;
}

export interface CursorPosition {
    FaceDirection: number;
    Position: minecraftserver.Vector3;
}

export interface CursorProperties {
    controlMode?: CursorControlMode;
    fillColor?: minecraftserver.RGBA;
    fixedModeDistance?: number;
    outlineColor?: minecraftserver.RGBA;
    projectThroughLiquid?: boolean;
    targetMode?: CursorTargetMode;
    visible?: boolean;
}

export interface CursorRay {
    end: minecraftserver.Vector3;
    hit: boolean;
    start: minecraftserver.Vector3;
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

export interface EditorStructure {
    storageLocation: string;
    structure: minecraftserver.Structure;
    tags: string[];
}

export interface EditorStructureSearchOptions {
    excludeTags?: string[];
    idPattern?: string;
    includeLocation?: string[];
    includeTags?: string[];
}

export interface ExtensionOptionalParameters {
    description?: string;
    notes?: string;
    toolGroupId?: string;
}

export interface GameOptions {
    bedsWork?: boolean;
    bonusChest?: boolean;
    cheats?: boolean;
    commandBlockEnabled?: boolean;
    commandBlockOutput?: boolean;
    daylightCycle?: DaylightCycle;
    difficulty?: minecraftserver.Difficulty;
    dimensionId?: string;
    disableWeather?: boolean;
    drowningDamage?: boolean;
    educationEdition?: boolean;
    entitiesDropLoot?: boolean;
    exportType?: ProjectExportType;
    fallDamage?: boolean;
    fireDamage?: boolean;
    fireSpreads?: boolean;
    freezeDamage?: boolean;
    friendlyFire?: boolean;
    functionCommandLimit?: number;
    gameMode?: minecraftserver.GameMode;
    hardcore?: boolean;
    immediateRespawn?: boolean;
    insomnia?: boolean;
    keepInventory?: boolean;
    lanVisibility?: boolean;
    limitedCrafting?: boolean;
    maxCommandChainLength?: number;
    mobGriefing?: boolean;
    mobLoot?: boolean;
    mobSpawning?: boolean;
    multiplayerGame?: boolean;
    naturalRegeneration?: boolean;
    playerAccess?: GamePublishSetting;
    playerPermissions?: PlayerPermissionLevel;
    randomTickSpeed?: number;
    recipeUnlocking?: boolean;
    respawnBlocksExplode?: boolean;
    respawnRadius?: number;
    sendCommandFeedback?: boolean;
    showBorderEffect?: boolean;
    showCoordinates?: boolean;
    showDaysPlayed?: boolean;
    showDeathMessage?: boolean;
    showItemTags?: boolean;
    simulationDistance?: number;
    sleepSkipPercent?: number;
    spawnPosition?: minecraftserver.Vector3;
    startingMap?: boolean;
    tileDrops?: boolean;
    timeOfDay?: number;
    tntExplodes?: boolean;
    weather?: number;
    worldName?: string;
}

export interface InputBindingInfo {
    actionId?: string;
    canRebind: boolean;
    label?: string;
    tooltip?: string;
}

export interface LogProperties {
    player?: minecraftserver.Player;
    tags?: string[];
}

export interface ProjectExportOptions {
    alwaysDay?: boolean;
    difficulty?: minecraftserver.Difficulty;
    disableWeather?: boolean;
    exportName?: string;
    exportType: ProjectExportType;
    gameMode?: minecraftserver.GameMode;
    initialTimOfDay?: number;
}

export interface QuickExtrudeProperties {
    checkForAdjacentFace?: boolean;
    contiguousSelectionBlockList?: string[];
    contiguousSelectionType?: ContiguousSelectionType;
    isShrink?: boolean;
    layerCount?: number;
    selectionDirection?: number;
    size?: number;
    startingLocation?: minecraftserver.Vector3;
}

export interface WeightedBlock {
    block: minecraftserver.BlockType;
    weight: number;
}

export interface WidgetComponentBaseOptions {
    lockToSurface?: boolean;
    offset?: minecraftserver.Vector3;
    visible?: boolean;
}

// @ts-ignore
export interface WidgetComponentBoundingBoxOptions extends WidgetComponentBaseOptions {
    boundsOffset?: minecraftserver.Vector3;
    enableResizeHandles?: Axis;
    hullColor?: minecraftserver.RGBA;
    maxSize?: minecraftserver.Vector3;
    minSize?: minecraftserver.Vector3;
    mirror?: minecraftserver.StructureMirrorAxis;
    normalizedOrigin?: minecraftserver.Vector3;
    outlineColor?: minecraftserver.RGBA;
    rotation?: minecraftserver.StructureRotation;
    showWorldIntersections?: boolean;
    stateChangeEvent?: (arg: WidgetComponentBoundingBoxStateChangeEventParameters) => void;
    visibleHull?: boolean;
}

// @ts-ignore
export interface WidgetComponentClipboardOptions extends WidgetComponentBaseOptions {
    clipboardOffset?: minecraftserver.Vector3;
    highlightHullColor?: minecraftserver.RGBA;
    highlightOutlineColor?: minecraftserver.RGBA;
    hullColor?: minecraftserver.RGBA;
    mirror?: minecraftserver.StructureMirrorAxis;
    normalizedOrigin?: minecraftserver.Vector3;
    outlineColor?: minecraftserver.RGBA;
    rotation?: minecraftserver.StructureRotation;
    showOutline?: boolean;
}

// @ts-ignore
export interface WidgetComponentEntityOptions extends WidgetComponentBaseOptions {
    deselectedAnimation?: string;
    isClickable?: boolean;
    selectedAnimation?: string;
}

// @ts-ignore
export interface WidgetComponentGizmoOptions extends WidgetComponentBaseOptions {
    axes?: Axis;
    enablePlanes?: boolean;
    normalizedAutoOffset?: minecraftserver.Vector3;
    stateChangeEvent?: (arg: WidgetComponentGizmoStateChangeEventParameters) => void;
}

// @ts-ignore
export interface WidgetComponentGuideOptions extends WidgetComponentBaseOptions {
}

// @ts-ignore
export interface WidgetComponentRenderPrimitiveOptions extends WidgetComponentBaseOptions {
}

// @ts-ignore
export interface WidgetComponentSplineOptions extends WidgetComponentBaseOptions {
    controlPoints: Widget[];
    splineType?: SplineType;
}

// @ts-ignore
export interface WidgetComponentTextOptions extends WidgetComponentBaseOptions {
    color?: minecraftserver.RGBA;
}

// @ts-ignore
export interface WidgetComponentVolumeOutlineOptions extends WidgetComponentBaseOptions {
    highlightHullColor?: minecraftserver.RGBA;
    highlightOutlineColor?: minecraftserver.RGBA;
    hullColor?: minecraftserver.RGBA;
    mirror?: minecraftserver.StructureMirrorAxis;
    normalizedOrigin?: minecraftserver.Vector3;
    outlineColor?: minecraftserver.RGBA;
    rotation?: minecraftserver.StructureRotation;
    showHighlightOutline?: boolean;
    showOutline?: boolean;
    volumeOffset?: minecraftserver.Vector3;
}

export interface WidgetCreateOptions {
    bindPositionToBlockCursor?: boolean;
    collisionOffset?: minecraftserver.Vector3;
    collisionRadius?: number;
    lockToSurface?: boolean;
    selectable?: boolean;
    snapToBlockLocation?: boolean;
    stateChangeEvent?: (arg: WidgetStateChangeEventData) => void;
    visible?: boolean;
    widgetName?: string;
    worldBoundsMax?: minecraftserver.Vector3;
    worldBoundsMin?: minecraftserver.Vector3;
}

export interface WidgetGroupCreateOptions {
    groupSelectionMode?: WidgetGroupSelectionMode;
    showBounds?: boolean;
    visible?: boolean;
}

export class InvalidWidgetComponentError {
    private constructor();
}

export class InvalidWidgetError {
    private constructor();
}

export class InvalidWidgetGroupError {
    private constructor();
}

export const editor: MinecraftEditor;
export const editorInternal: MinecraftEditorInternal;