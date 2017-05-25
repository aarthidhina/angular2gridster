import {GridsterItemComponent} from '../gridster-item/gridster-item.component';
import {GridsterItemPrototypeDirective} from '../gridster-prototype/gridster-item-prototype.directive';

export class GridListItem {
    itemComponent: GridsterItemComponent;
    itemPrototype: GridsterItemPrototypeDirective;
    itemObject: Object;


    get originalX () {
        return this.getItem().originalX;
    }
    set originalX (value: number) {
        this.getItem().originalX = value;
    }

    get originalY () {
        return this.getItem().originalY;
    }
    set originalY (value: number) {
        this.getItem().originalY = value;
    }

    get originalH () {
        return this.getItem().originalH;
    }
    set originalH (value: number) {
        this.getItem().originalH = value;
    }

    get originalW () {
        return this.getItem().originalW;
    }
    set originalW (value: number) {
        this.getItem().originalW = value;
    }

    get $element () {
        return this.getItem().$element;
    }

    get x () {
        return this.getItem().x;
    }
    set x (value: number) {
        this.getItem().x = value;
    }

    get y () {
        return this.getItem().y;
    }
    set y (value: number) {
        this.getItem().y = value;
    }

    get w () {
        return this.getItem().w;
    }
    set w (value: number) {
        this.getItem().w = value;
    }

    get h () {
        return this.getItem().h;
    }
    set h (value: number) {
        this.getItem().h = value;
    }

    get autoSize () {
        return this.getItem().autoSize;
    }
    set autoSize (value: boolean) {
        this.getItem().autoSize = value;
    }

    get dragAndDrop() {
        return !!this.getItem().dragAndDrop;
    }

    get resizable() {
        return !!this.getItem().resizable;
    }

    constructor () {}

    public setFromGridsterItem (item: GridsterItemComponent): GridListItem {
        if (this.itemComponent || this.itemPrototype || this.itemObject) {
            throw new Error('GridListItem is already set.');
        }
        this.itemComponent = item;
        return this;
    }

    public setFromGridsterItemPrototype (item: GridsterItemPrototypeDirective): GridListItem {
        if (this.itemComponent || this.itemPrototype || this.itemObject) {
            throw new Error('GridListItem is already set.');
        }
        this.itemPrototype = item;
        return this;
    }

    public setFromObjectLiteral (item: Object): GridListItem {
        if (this.itemComponent || this.itemPrototype || this.itemObject) {
            throw new Error('GridListItem is already set.');
        }
        this.itemObject = item;
        return this;
    }

    public copy () {
        const itemCopy = new GridListItem();

        return itemCopy.setFromObjectLiteral({
            $element: this.$element,
            x: this.x,
            y: this.y,
            w: this.w,
            h: this.h,
            autoSize: this.autoSize,
            dragAndDrop: this.dragAndDrop,
            resizable: this.resizable
        });
    }

    private getItem(): any {
        const item = this.itemComponent || this.itemPrototype || this.itemObject;

        if (!item) {
            throw new Error('GridListItem is not set.');
        }
        return item;
    }

    public saveOriginalProperties(){
        this.originalX = this.x;
        this.originalY = this.y;
        this.originalH = this.h;
        this.originalW = this.w;
    }
}
