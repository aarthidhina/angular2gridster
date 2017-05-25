import { Component, HostListener, ViewChild } from '@angular/core';
import { GridsterComponent } from './gridster/gridster.component';
import { IGridsterOptions } from './gridster/IGridsterOptions';
import { IGridsterDraggableOptions } from './gridster/IGridsterDraggableOptions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(GridsterComponent) gridster: GridsterComponent;
  gridsterOptions: IGridsterOptions = {
    lanes: 8,
    direction: 'vertical',
    resizable: true,
    widthHeightRatio: 1,
    dragAndDrop: true,
    maxHeight: 3,
    responsiveOptions: [
      {
        minWindowWidth: 0,    //Default options values
        lanes: 4,
        dragAndDrop: false,
        maxWidth: 1,
        mainView: false
      },
      {
        minWindowWidth: 300,
        lanes: 2,
        maxWidth: 2
      },
      {
        minWindowWidth: 900,
        lanes: 4,
        maxWidth: 4
      },
      {
        minWindowWidth: 1200,
        lanes: 8,
        maxWidth: 8,
        dragAndDrop:true,
        mainView: false
      }]
  };
  gridsterDraggableOptions: IGridsterDraggableOptions = {
    handlerClass: 'panel-heading'
  };
  title = 'Angular2Gridster';
  widgets: Array<any> = [
    {
      x: 0, y: 0,
      w: 1, h: 2,
      dragAndDrop: true,
      resizable: true,
      title: 'Basic form inputs 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
      'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
      'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
      'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
      'laborum.'
    },
    {
      x: 1, y: 0, w: 2, h: 1,
      dragAndDrop: true,
      resizable: true,
      title: 'Basic form inputs 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
      'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
      'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
      'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
      'laborum.'
    },
    {
      x: 1, y: 1, w: 2, h: 1,
      dragAndDrop: true,
      resizable: true,
      title: 'Basic form inputs 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
      'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
      'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
      'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
      'laborum.'
    },
    {
      x: 3, y: 0, w: 1, h: 2,
      dragAndDrop: true,
      resizable: true,
      title: 'Basic form inputs 4',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
      'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
      'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
      'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
      'laborum.'
    }
  ];
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.gridster.reload();
  }
  removeLine (gridster: GridsterComponent) {
    gridster.setOption('lanes', --this.gridsterOptions.lanes)
        .reload();
  }
  getTitle() {
    return this.title;
  }
  addLine (gridster: GridsterComponent) {
    gridster.setOption('lanes', ++this.gridsterOptions.lanes)
        .reload();
  }
  setWidth (widget: any, size: number, e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    if (size < 1) {
      size = 1;
    }
    widget.w = size;

    return false;
  }

  setHeight (widget: any, size: number, e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    if (size < 1) {
      size = 1;
    }
    widget.h = size;

    return false;
  }

  logChanges (items: any) {
    console.log('===>> Changed items: ', items);
  }

  swap () {
    this.widgets[0].x = 3;
    this.widgets[3].x = 0;
  }

  addWidgetFromDrag (gridster: GridsterComponent, event: any) {
    const item = event.item;
    this.widgets.push({
      x: item.x, y: item.y, w: item.w, h: item.h,
      dragAndDrop: true,
      resizable: true,
      title: 'Basic form inputs 5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
      'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
      'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
      'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
      'laborum.'
    });

    console.log('add widget from drag to:', gridster);
  }

  over (event) {
    event.item.itemPrototype.$element.querySelector('.gridster-item-inner').style.width =
        event.gridster.getItemWidth(event.item) + 'px';
    event.item.itemPrototype.$element.querySelector('.gridster-item-inner').style.height =
        event.gridster.getItemHeight(event.item) + 'px';
    event.item.itemPrototype.$element.classList.add('is-over');
  }
  out (event) {
    event.item.itemPrototype.$element.querySelector('.gridster-item-inner').style.width = '';
    event.item.itemPrototype.$element.querySelector('.gridster-item-inner').style.height = '';
    event.item.itemPrototype.$element.classList.remove('is-over');
  }

  addWidgetWithoutData() {
    this.widgets.push({
      title: 'Basic form inputs X',
      dragAndDrop: true,
      resizable: true,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
      'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
      'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
      'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
      'laborum.'
    });
  }

  addWidget (gridster: GridsterComponent) {
    this.widgets.push({
      x: 4, y: 0, w: 1, h: 1,
      dragAndDrop: true,
      resizable: true,
      title: 'Basic form inputs 5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
      'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
      'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
      'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
      'laborum.'
    });
    console.log('widget push', this.widgets[this.widgets.length - 1]);
  }

  remove ($event, index: number, gridster: GridsterComponent) {
    $event.preventDefault();
    this.widgets.splice(index, 1);
    console.log('widget remove', index);
  }

  resize(item) {
    console.log('resize', item);
  }
}
