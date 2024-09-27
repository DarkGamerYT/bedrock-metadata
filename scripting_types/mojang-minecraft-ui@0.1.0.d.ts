// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "mojang-minecraft-ui",
 *     "version": "0.1.0"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as mojangminecraft from "mojang-minecraft";
export class ActionFormData {
    body(bodyText: string): ActionFormData;
    button(text: string, iconPath?: string): ActionFormData;
    show(player: mojangminecraft.Player): Promise<ActionFormResponse>;
    title(titleText: string): ActionFormData;
}

export class ActionFormResponse extends FormResponse {
    private constructor();
    readonly selection?: number;
}

export class FormResponse {
    private constructor();
    readonly isCanceled: boolean;
}

export class MessageFormData {
    body(bodyText: string): MessageFormData;
    button1(text: string): MessageFormData;
    button2(text: string): MessageFormData;
    show(player: mojangminecraft.Player): Promise<MessageFormResponse>;
    title(titleText: string): MessageFormData;
}

export class MessageFormResponse extends FormResponse {
    private constructor();
    readonly selection?: number;
}

export class ModalFormData {
    dropdown(label: string, options: string[], defaultValueIndex?: number): ModalFormData;
    icon(iconPath: string): ModalFormData;
    show(player: mojangminecraft.Player): Promise<ModalFormResponse>;
    slider(
        label: string,
        minimumValue: number,
        maximumValue: number,
        valueStep: number,
        defaultValue?: number,
    ): ModalFormData;
    textField(label: string, placeholderText: string, defaultValue?: string): ModalFormData;
    title(titleText: string): ModalFormData;
    toggle(label: string, defaultValue?: boolean): ModalFormData;
}

export class ModalFormResponse extends FormResponse {
    private constructor();
    readonly formValues?: (boolean | number | string)[];
}
