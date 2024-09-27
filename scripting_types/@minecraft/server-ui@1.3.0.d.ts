// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-ui",
 *     "version": "1.3.0"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
export enum FormCancelationReason {
    UserBusy = "UserBusy",
    UserClosed = "UserClosed",
}

export enum FormRejectReason {
    MalformedResponse = "MalformedResponse",
    PlayerQuit = "PlayerQuit",
    ServerShutdown = "ServerShutdown",
}

export class ActionFormData {
    body(bodyText: minecraftserver.RawMessage | string): ActionFormData;
    button(text: minecraftserver.RawMessage | string, iconPath?: string): ActionFormData;
    show(player: minecraftserver.Player): Promise<ActionFormResponse>;
    title(titleText: minecraftserver.RawMessage | string): ActionFormData;
}

export class ActionFormResponse extends FormResponse {
    private constructor();
    readonly selection?: number;
}

export class FormResponse {
    private constructor();
    readonly cancelationReason?: FormCancelationReason;
    readonly canceled: boolean;
}

export class MessageFormData {
    body(bodyText: minecraftserver.RawMessage | string): MessageFormData;
    button1(text: minecraftserver.RawMessage | string): MessageFormData;
    button2(text: minecraftserver.RawMessage | string): MessageFormData;
    show(player: minecraftserver.Player): Promise<MessageFormResponse>;
    title(titleText: minecraftserver.RawMessage | string): MessageFormData;
}

export class MessageFormResponse extends FormResponse {
    private constructor();
    readonly selection?: number;
}

export class ModalFormData {
    dropdown(
        label: minecraftserver.RawMessage | string,
        options: (minecraftserver.RawMessage | string)[],
        defaultValueIndex?: number,
    ): ModalFormData;
    show(player: minecraftserver.Player): Promise<ModalFormResponse>;
    slider(
        label: minecraftserver.RawMessage | string,
        minimumValue: number,
        maximumValue: number,
        valueStep: number,
        defaultValue?: number,
    ): ModalFormData;
    submitButton(submitButtonText: minecraftserver.RawMessage | string): ModalFormData;
    textField(
        label: minecraftserver.RawMessage | string,
        placeholderText: minecraftserver.RawMessage | string,
        defaultValue?: minecraftserver.RawMessage | string,
    ): ModalFormData;
    title(titleText: minecraftserver.RawMessage | string): ModalFormData;
    toggle(label: minecraftserver.RawMessage | string, defaultValue?: boolean): ModalFormData;
}

export class ModalFormResponse extends FormResponse {
    private constructor();
    readonly formValues?: (boolean | number | string)[];
}

export class UIManager {
    private constructor();
    closeAllForms(player: minecraftserver.Player): void;
}

export class FormRejectError {
    private constructor();
    readonly reason: FormRejectReason;
}

export const uiManager: UIManager;