import TaskbarAction from "../../models/store/windows/TaskbarAction";
import TaskbarActionType from "../../models/store/windows/TaskbarActionType";
import File from "../../models/windows/File";
import IWindow from "../../models/windows/IWindow";
import IRectangle from "../../models/2d/IRectangle";

export function openFile(file: File): TaskbarAction {
    return {
        type: TaskbarActionType.openFile,
        payload: {file}
    }
}

export function closeWindow(window: IWindow): TaskbarAction {
    return {
        type: TaskbarActionType.closeWindow,
        payload: {window}
    }
}

export function maximizeWindow(window: IWindow, isMaximized: boolean): TaskbarAction {
    return {
        type: TaskbarActionType.maximizeWindow,
        payload: {window, isMaximized}
    }
}

export function minimizeWindow(window: IWindow, isMinimized: boolean): TaskbarAction {
    return {
        type: TaskbarActionType.minimizeWindow,
        payload: {window, isMinimized}
    }
}

export function focusWindow(window: IWindow): TaskbarAction {
    return {
        type: TaskbarActionType.focusWindow,
        payload: {window}
    }
}

export function moveWindow(window: IWindow, rectangle: IRectangle): TaskbarAction {
    return {
        type: TaskbarActionType.moveWindow,
        payload: {window, rectangle}
    }
}
