export interface IGridsterOptions {
    direction?: string;
    lanes?: number;
    widthHeightRatio?: number;
    heightToFontSizeRatio?: number;
    dragAndDrop?: boolean;
    itemSelector?: string;
    resizable?: boolean;
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
    mainView?: boolean;
    defaultItemWidth?: number;
    defaultItemHeight?: number;
    minWindowWidth?: number;
    responsiveOptions?: Array<IGridsterOptions>;
}
