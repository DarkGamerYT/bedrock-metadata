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
export enum BlockMaskListType {
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
    ShowChunkBoundaries = "ShowChunkBoundaries",
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

export enum PaintCompletionState {
    Success = 0,
    Canceled = 1,
    Failed = 2,
}

export enum PaintMode {
    BlockPaint = 0,
    FreehandSelect = 1,
}

export enum Plane {
    XY = "XY",
    XZ = "XZ",
    YZ = "YZ",
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
    AxialSphere = "AxialSphere",
    Box = "Box",
    Disc = "Disc",
    Line = "Line",
    Text = "Text",
}

export enum ProjectExportType {
    PlayableWorld = 0,
    ProjectBackup = 1,
    WorldTemplate = 2,
}

export enum SplineType {
    Hermite = "Hermite",
    Line = "Line",
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
    TitleBarBackground = "TitleBarBackground",
    ViewportOutline = "ViewportOutline",
    Warning = "Warning",
}

export enum WidgetComponentType {
    Entity = "Entity",
    Gizmo = "Gizmo",
    Guide = "Guide",
    RenderPrim = "RenderPrim",
    Spline = "Spline",
    Text = "Text",
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
    getItem(index: number): IBlockPaletteItem;
    removeItemAt(index: number): void;
    removeItems(): void;
    setItem(blockPaletteItem: IBlockPaletteItem, index: number): void;
}

export class BlockPaletteManager {
    private constructor();
    addOrReplacePalette(paletteId: string, palette: BlockPalette): void;
    getPalette(paletteId: string): BlockPalette | undefined;
    getPaletteIdList(): string[];
    getPaletteItem(paletteId: string, index: number): IBlockPaletteItem;
    getPrimaryPalette(): BlockPalette;
    getSelectedBlockType(): minecraftserver.BlockType;
    getSelectedItem(): IBlockPaletteItem;
    removePalette(paletteId: string): void;
    setPaletteItem(paletteId: string, index: number, item: IBlockPaletteItem): void;
    setPrimaryPalette(paletteId: string): void;
    setSelectedItem(item: IBlockPaletteItem): void;
}

export class BrushShapeManager {
    private constructor();
    readonly activeBrushShape?: BrushShape;
    readonly activeBrushVolume?: minecraftserver.CompoundBlockVolume;
    readonly brushShapeList: BrushShape[];
    activateBrushTool(): void;
    beginPainting(onComplete: (arg: PaintCompletionState) => void): void;
    deactivateBrushTool(): void;
    endPainting(cancelled: boolean): void;
    getBrushShapeOffset(): minecraftserver.Vector3;
    getSettingsUIElements(brushName: string): SettingsUIElement[];
    registerBrushShape(
        name: string,
        icon: string,
        rebuild: () => minecraftserver.CompoundBlockVolume,
        getSettingsUIElements: () => SettingsUIElement[],
    ): void;
    setBrushMask(mask: BlockMaskList): void;
    setBrushShape(shape: minecraftserver.Vector3[] | minecraftserver.CompoundBlockVolume): void;
    setBrushShapeOffset(offset: minecraftserver.Vector3): void;
    singlePaint(onComplete: (arg: PaintCompletionState) => void): void;
    switchBrushPaintMode(paintMode: PaintMode): void;
    switchBrushShape(name: string): minecraftserver.CompoundBlockVolume;
    uiSettingValueChanged(elementName: string, newValue: boolean | number | string | minecraftserver.Vector3): boolean;
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
    readonly isEmpty: boolean;
    clear(): void;
    getPredictedWriteAsCompoundBlockVolume(
        location: minecraftserver.Vector3,
        options?: ClipboardWriteOptions,
    ): minecraftserver.CompoundBlockVolume;
    getPredictedWriteAsSelection(location: minecraftserver.Vector3, options?: ClipboardWriteOptions): Selection;
    getSize(): minecraftserver.Vector3;
    readFromSelection(selection: Selection): void;
    readFromStructure(structure: EditorStructure): void;
    readFromWorld(from: minecraftserver.Vector3, to: minecraftserver.Vector3): void;
    writeToWorld(location: minecraftserver.Vector3, options?: ClipboardWriteOptions): boolean;
}

export class ClipboardManager {
    private constructor();
    readonly clipboard: ClipboardItem;
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
    readonly faceDirection: number;
    readonly isVisible: boolean;
    attachClipboardItem(item: ClipboardItem): void;
    clearAttachment(): void;
    getAttachmentProperties(): CursorAttachmentProperties;
    getPosition(): minecraftserver.Vector3;
    getProperties(): CursorProperties;
    hide(): void;
    moveBy(offset: minecraftserver.Vector3): minecraftserver.Vector3;
    resetToDefaultState(): void;
    setAttachmentProperties(properties: CursorAttachmentProperties): void;
    setProperties(properties: CursorProperties): void;
    show(): void;
}

export class CursorAttachmentPropertiesChangeAfterEvent {
    private constructor();
    readonly properties: CursorAttachmentProperties;
}

export class CursorAttachmentPropertyChangeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: CursorAttachmentPropertiesChangeAfterEvent) => void): (arg: CursorAttachmentPropertiesChangeAfterEvent) => void;
    unsubscribe(callback: (arg: CursorAttachmentPropertiesChangeAfterEvent) => void): void;
}

export class CursorPropertiesChangeAfterEvent {
    private constructor();
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
    registerItem(id: string, payload: string): void;
    unregisterItem(id: string): void;
    updateRegisteredItem(id: string, payload: string): void;
    updateRegisteredItemProperty(id: string, payload: string, property: string): void;
}

export class DataStoreActionContainer {
    private constructor();
    bindActionToControl(controlId: string, actionPayload: string): void;
    removeActionFromControl(controlId: string, actionPayload?: string): void;
}

export class DataStoreAfterEvents {
    private constructor();
    readonly payloadReceived: DataStorePayloadAfterEventSignal;
}

export class DataStoreMenuContainer {
    private constructor();
    createItem(id: string, payload: string): void;
    destroyItem(id: string): void;
    getPayload(id: string): string;
    getProperty(id: string, property: string): boolean | number | string | undefined;
    hasPayload(id: string): boolean;
    hasProperty(id: string, property: string): boolean;
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
    getRegisteredAccessors(): DataTransferCollectionNameData[];
    requestData(collectionUniqueId: string): Promise<DataTransferRequestResponse>;
    sendData(collectionUniqueId: string, jsonData: string): void;
    sendDataToClipboard(jsonData: string): void;
}

export class DataTransferRequestResponse {
    private constructor();
    readonly collectionName: string;
    readonly data: string;
    readonly schema: string;
}

export class EditorStructureManager {
    private constructor();
    createFromClipboardItem(item: ClipboardItem, structureName: string): EditorStructure;
    getExistingTags(): string[];
    loadStructure(location: string, id: string): EditorStructure;
    saveStructure(structure: EditorStructure): void;
    searchStructures(options?: EditorStructureSearchOptions): EditorStructure[];
}

export class ExportManager {
    private constructor();
    beginExportProject(options: GameOptions): Promise<ExportResult>;
    canExportProject(): boolean;
    getGameOptions(useDefault?: boolean): GameOptions;
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
    readonly cursorAttachmentPropertyChange: CursorAttachmentPropertyChangeAfterEventSignal;
    readonly cursorPropertyChange: CursorPropertyChangeAfterEventSignal;
    readonly modeChange: ModeChangeAfterEventSignal;
    readonly primarySelectionChange: PrimarySelectionChangeAfterEventSignal;
}

export class GraphicsSettings {
    private constructor();
    get(property: GraphicsSettingsProperty): boolean | number | string | undefined;
    getAll(): Record<string, boolean | number | string>;
    set(property: GraphicsSettingsProperty, value: boolean | number | string): void;
    setAll(properties: Record<string, boolean | number | string>): void;
}

export class IBlockPaletteItem {
    private constructor();
    getBlock(): minecraftserver.BlockType | undefined;
    getDisplayName(): string;
    getType(): BlockPaletteItemType;
    setBlock(block: minecraftserver.BlockPermutation | minecraftserver.BlockType | string): void;
}

export class InputService {
    private constructor();
    focusViewport(): void;
    registerKeyBinding(
        contextId: string,
        bindingId: string,
        key: number,
        modifier: InputModifier,
        info: InputBindingInfo,
    ): void;
    unregisterKeyBinding(controlId: string, bindingId: string): void;
}

export class InternalPlayerServiceContext {
    private constructor();
    readonly dataStore: DataStore;
    readonly dataTransfer: DataTransferManager;
    readonly input: InputService;
    readonly tickingArea: TickingAreaManager;
}

export class Logger {
    private constructor();
    debug(message: string, properties?: LogProperties): void;
    error(message: string, properties?: LogProperties): void;
    info(message: string, properties?: LogProperties): void;
    warning(message: string, properties?: LogProperties): void;
}

export class MinecraftEditor {
    private constructor();
    readonly log: Logger;
    readonly simulation: SimulationState;
}

export class MinecraftEditorInternal {
    private constructor();
    getMapColorUnsafe(player: minecraftserver.Player, coordinate: minecraftserver.Vector3): minecraftserver.RGBA;
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
    beginPlaytest(options: GameOptions): Promise<PlaytestSessionResult>;
    getPlaytestSessionAvailability(): PlaytestSessionResult;
}

export class PrimarySelectionChangeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg: SelectionEventAfterEvent) => void): (arg: SelectionEventAfterEvent) => void;
    unsubscribe(callback: (arg: SelectionEventAfterEvent) => void): void;
}

export class PrimarySelectionChangedEvent {
    private constructor();
    readonly volume?: minecraftserver.CompoundBlockVolume;
}

export class ProbabilityBlockPaletteItem extends IBlockPaletteItem {
    constructor(displayName?: string);
    addBlock(block: minecraftserver.BlockPermutation | minecraftserver.BlockType | string, weight: number): void;
    getBlocks(): WeightedBlock[];
    removeBlockAt(index: number): void;
}

export class Selection {
    private constructor();
    readonly isEmpty: boolean;
    visible: boolean;
    clear(): void;
    getBlockLocationIterator(): minecraftserver.BlockLocationIterator;
    getBoundingBox(): minecraftserver.BoundingBox;
    getFillColor(): minecraftserver.RGBA;
    getOutlineColor(): minecraftserver.RGBA;
    getVolumeOrigin(): minecraftserver.Vector3;
    moveBy(delta: minecraftserver.Vector3): minecraftserver.Vector3;
    moveTo(location: minecraftserver.Vector3): minecraftserver.Vector3;
    peekLastVolume(forceRelativity?: minecraftserver.CompoundBlockVolumePositionRelativity): minecraftserver.CompoundBlockVolumeItem | undefined;
    popVolume(): void;
    pushVolume(item: minecraftserver.CompoundBlockVolumeItem): void;
    set(other: minecraftserver.CompoundBlockVolume | Selection): void;
    setFillColor(color: minecraftserver.RGBA): void;
    setOutlineColor(color: minecraftserver.RGBA): void;
}

export class SelectionEventAfterEvent {
    private constructor();
    readonly selectionEvent: PrimarySelectionChangedEvent;
}

export class SelectionManager {
    private constructor();
    readonly selection: Selection;
    create(): Selection;
}

export class SettingsManager {
    private constructor();
    readonly graphics: GraphicsSettings;
    readonly theme: ThemeSettings;
}

export class SettingsUIElement {
    readonly initialValue: boolean | number | string | minecraftserver.Vector3;
    readonly name: string;
    readonly onChange: (arg: boolean | number | string | minecraftserver.Vector3) => void;
    readonly options: SettingsUIElementOptions;
    constructor(
    name: string,
    initialValue: boolean | number | string | minecraftserver.Vector3,
    onChange: (arg: boolean | number | string | minecraftserver.Vector3) => void,
    options?: SettingsUIElementOptions,
);
}

export class SimpleBlockPaletteItem extends IBlockPaletteItem {
    constructor(displayName?: string);
}

export class SimulationState {
    private constructor();
    isPaused(): boolean;
    setPaused(isPaused: boolean): void;
}

export class ThemeSettings {
    private constructor();
    addNewTheme(id: string, name?: string, sourceThemeId?: string): void;
    canThemeBeModified(id: string): boolean;
    deleteTheme(id: string): void;
    getCurrentTheme(): string;
    getThemeColors(id: string): Record<string, minecraftserver.RGBA> | undefined;
    getThemeIdList(): string[];
    getThemeName(id: string): string;
    resolveColorKey(key: ThemeSettingsColorKey): minecraftserver.RGBA;
    setCurrentTheme(id: string): void;
    setThemeName(id: string, name: string): void;
    updateThemeColor(id: string, key: ThemeSettingsColorKey, newColor: minecraftserver.RGBA): void;
}

export class TickingAreaManager {
    private constructor();
    isTickingAreaActive(areaIdentifier: string): boolean;
    purgeTickingAreas(areaIdentifier: string): boolean;
    releaseTickingArea(areaIdentifier: string): boolean;
    requestTickingArea(areaIdentifier: string, from: minecraftserver.Vector3, to: minecraftserver.Vector3): boolean;
}

export class TransactionManager {
    private constructor();
    addEntityOperation(entity: minecraftserver.Entity, type: EntityOperationType): boolean;
    addUserDefinedOperation(
        transactionHandlerId: UserDefinedTransactionHandlerId,
        operationData: string,
        operationName?: string,
    ): void;
    commitOpenTransaction(): boolean;
    commitTrackedChanges(): number;
    createUserDefinedTransactionHandler(
        undoClosure: (arg: string) => void,
        redoClosure: (arg: string) => void,
    ): UserDefinedTransactionHandlerId;
    discardOpenTransaction(): boolean;
    discardTrackedChanges(): number;
    openTransaction(name: string): boolean;
    redo(): void;
    redoSize(): number;
    trackBlockChangeArea(from: minecraftserver.Vector3, to: minecraftserver.Vector3): boolean;
    trackBlockChangeCompoundBlockVolume(compoundBlockVolume: minecraftserver.CompoundBlockVolume): boolean;
    trackBlockChangeList(locations: minecraftserver.Vector3[]): boolean;
    trackBlockChangeSelection(selection: Selection): boolean;
    undo(): void;
    undoSize(): number;
}

export class UserDefinedTransactionHandlerId {
    private constructor();
}

export class Widget {
    private constructor();
    collisionOffset: minecraftserver.Vector3;
    collisionRadius: number;
    location: minecraftserver.Vector3;
    readonly selectable: boolean;
    selected: boolean;
    showBoundingBox: boolean;
    showCollisionRadius: boolean;
    snapToBlockLocation: boolean;
    visible: boolean;
    addEntityComponent(
        componentName: string,
        actorNameId: string,
        options?: WidgetComponentEntityOptions,
    ): WidgetComponentEntity;
    addGizmoComponent(componentName: string, options?: WidgetComponentGizmoOptions): WidgetComponentGizmo;
    addGuideComponent(componentName: string, options?: WidgetComponentGuideOptions): WidgetComponentGuide;
    addRenderPrimitiveComponent(
        componentName: string,
        primitiveType: 
            | WidgetComponentRenderPrimitiveAxialSphere
            | WidgetComponentRenderPrimitiveBox
            | WidgetComponentRenderPrimitiveDisc
            | WidgetComponentRenderPrimitiveLine,
        options?: WidgetComponentRenderPrimitiveOptions,
    ): WidgetComponentRenderPrimitive;
    addSplineComponent(componentName: string, options?: WidgetComponentSplineOptions): WidgetComponentSpline;
    addTextComponent(componentName: string, label: string, options?: WidgetComponentTextOptions): WidgetComponentText;
    delete(): void;
    deleteComponent(componentOrName: string | WidgetComponentBase): void;
    getComponent(componentName: string): WidgetComponentBase;
    getComponents(): WidgetComponentBase[];
    setStateChangeEvent(eventFunction?: (arg: WidgetStateChangeEventData) => void): void;
}

export class WidgetComponentBase {
    private constructor();
    readonly componentType: WidgetComponentType;
    readonly location: minecraftserver.Vector3;
    readonly name: string;
    offset: minecraftserver.Vector3;
    readonly valid: boolean;
    visible: boolean;
    readonly widget: Widget;
    delete(): void;
}

export class WidgetComponentEntity extends WidgetComponentBase {
    private constructor();
    clickable: boolean;
    playAnimation(animationName: string): void;
}

export class WidgetComponentGizmo extends WidgetComponentBase {
    private constructor();
}

export class WidgetComponentGuide extends WidgetComponentBase {
    private constructor();
}

export class WidgetComponentRenderPrimitive extends WidgetComponentBase {
    private constructor();
    setPrimitive(primitive: 
            | WidgetComponentRenderPrimitiveAxialSphere
            | WidgetComponentRenderPrimitiveBox
            | WidgetComponentRenderPrimitiveDisc
            | WidgetComponentRenderPrimitiveLine): void;
}

export class WidgetComponentRenderPrimitiveAxialSphere {
    center: minecraftserver.Vector3;
    color?: minecraftserver.RGBA;
    radius: number;
    constructor(center: minecraftserver.Vector3, radius: number, color?: minecraftserver.RGBA);
}

export class WidgetComponentRenderPrimitiveBox {
    center: minecraftserver.Vector3;
    color: minecraftserver.RGBA;
    size?: minecraftserver.Vector3;
    constructor(center: minecraftserver.Vector3, color: minecraftserver.RGBA, size?: minecraftserver.Vector3);
}

export class WidgetComponentRenderPrimitiveDisc {
    center: minecraftserver.Vector3;
    color: minecraftserver.RGBA;
    radius: number;
    constructor(center: minecraftserver.Vector3, radius: number, color: minecraftserver.RGBA);
}

export class WidgetComponentRenderPrimitiveLine {
    color: minecraftserver.RGBA;
    end: minecraftserver.Vector3;
    start: minecraftserver.Vector3;
    constructor(start: minecraftserver.Vector3, end: minecraftserver.Vector3, color: minecraftserver.RGBA);
}

export class WidgetComponentSpline extends WidgetComponentBase {
    private constructor();
    splineType: SplineType;
    getControlPoints(): Widget[];
    getInterpolatedPoints(maxPointsPerControlSegment?: number): minecraftserver.Vector3[];
    setControlPoints(widgetList: Widget[]): void;
}

export class WidgetComponentText extends WidgetComponentBase {
    private constructor();
    color: minecraftserver.RGBA;
    label: string;
}

export class WidgetGroup {
    private constructor();
    readonly selectedWidgetCount: number;
    visible: boolean;
    visibleBounds: boolean;
    createWidget(location: minecraftserver.Vector3, options?: WidgetCreateOptions): Widget;
    delete(): void;
    deleteWidget(widgetToDelete: Widget): void;
    deselectAllWidgets(): void;
    selectAllWidgets(): void;
}

export class WidgetManager {
    private constructor();
    createGroup(options?: WidgetGroupCreateOptions): WidgetGroup;
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

export interface BrushShape {
    icon: string;
    name: string;
}

export interface ClipboardWriteOptions {
    anchor?: minecraftserver.Vector3;
    mirror?: minecraftserver.StructureMirrorAxis;
    offset?: minecraftserver.Vector3;
    rotation?: minecraftserver.StructureRotation;
}

export interface CursorAttachmentProperties {
    boundsFillColor?: minecraftserver.RGBA;
    boundsVisible?: boolean;
    boundsWireframeColor?: minecraftserver.RGBA;
    contentsFillColor?: minecraftserver.RGBA;
    contentsWireframeColor?: minecraftserver.RGBA;
    mirror?: minecraftserver.StructureMirrorAxis;
    offset?: minecraftserver.Vector3;
    origin?: minecraftserver.Vector3;
    rotation?: minecraftserver.StructureRotation;
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

export interface DataTransferCollectionNameData {
    nameStringId: string;
    uniqueId: string;
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
    bonusChest?: boolean;
    cheats?: boolean;
    commandBlockEnabled?: boolean;
    daylightCycle?: DaylightCycle;
    difficulty?: minecraftserver.Difficulty;
    dimensionId?: string;
    disableWeather?: boolean;
    educationEdition?: boolean;
    entitiesDropLoot?: boolean;
    exportType?: ProjectExportType;
    fireSpreads?: boolean;
    friendlyFire?: boolean;
    gameMode?: minecraftserver.GameMode;
    hardcore?: boolean;
    immediateRespawn?: boolean;
    keepInventory?: boolean;
    lanVisibility?: boolean;
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
    showCoordinates?: boolean;
    showDaysPlayed?: boolean;
    simulationDistance?: number;
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

export interface SettingsUIElementOptions {
    dropdownItems?: string[];
    max?: number;
    min?: number;
    refreshOnChange?: boolean;
}

export interface WeightedBlock {
    block: minecraftserver.BlockType;
    weight: number;
}

export interface WidgetComponentBaseOptions {
    offset?: minecraftserver.Vector3;
    visible?: boolean;
}

export interface WidgetComponentEntityOptions extends WidgetComponentBaseOptions {
    deselectedAnimation?: string;
    isClickable?: boolean;
    selectedAnimation?: string;
}

export interface WidgetComponentGizmoOptions extends WidgetComponentBaseOptions {
}

export interface WidgetComponentGuideOptions extends WidgetComponentBaseOptions {
}

export interface WidgetComponentRenderPrimitiveOptions extends WidgetComponentBaseOptions {
}

export interface WidgetComponentSplineOptions extends WidgetComponentBaseOptions {
    controlPoints: Widget[];
    splineType?: SplineType;
}

export interface WidgetComponentTextOptions extends WidgetComponentBaseOptions {
    color?: minecraftserver.RGBA;
}

export interface WidgetCreateOptions {
    collisionOffset?: minecraftserver.Vector3;
    collisionRadius?: number;
    selectable?: boolean;
    snapToBlockLocation?: boolean;
    stateChangeEvent?: (arg: WidgetStateChangeEventData) => void;
    visible?: boolean;
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