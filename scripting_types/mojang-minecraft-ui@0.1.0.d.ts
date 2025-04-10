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
    /**
     * @remarks This function can't be called in read-only mode.
     */
    body(bodyText: string): ActionFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    button(text: string, iconPath?: string): ActionFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    show(player: mojangminecraft.Player): Promise<ActionFormResponse>;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    title(titleText: string): ActionFormData;
}

// @ts-ignore
export class ActionFormResponse extends FormResponse {
    private constructor();
    readonly selection?: number;
}

export class FormResponse {
    private constructor();
    readonly isCanceled: boolean;
}

export class MessageFormData {
    /**
     * @remarks This function can't be called in read-only mode.
     */
    body(bodyText: string): MessageFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    button1(text: string): MessageFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    button2(text: string): MessageFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    show(player: mojangminecraft.Player): Promise<MessageFormResponse>;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    title(titleText: string): MessageFormData;
}

// @ts-ignore
export class MessageFormResponse extends FormResponse {
    private constructor();
    readonly selection?: number;
}

export class ModalFormData {
    /**
     * @remarks This function can't be called in read-only mode.
     */
    dropdown(label: string, options: string[], defaultValueIndex?: number): ModalFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    icon(iconPath: string): ModalFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    show(player: mojangminecraft.Player): Promise<ModalFormResponse>;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    slider(
        label: string,
        minimumValue: number,
        maximumValue: number,
        valueStep: number,
        defaultValue?: number,
    ): ModalFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    textField(label: string, placeholderText: string, defaultValue?: string): ModalFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    title(titleText: string): ModalFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    toggle(label: string, defaultValue?: boolean): ModalFormData;
}

// @ts-ignore
export class ModalFormResponse extends FormResponse {
    private constructor();
    readonly formValues?: (boolean | number | string)[];
}
