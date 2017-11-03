import { Component, OnInit, ElementRef, EventEmitter, Output } from '@angular/core';
import { JsTreeItem } from '@shared/AppClass';

@Component({
  selector: 'm-jstree',
  template: '<ng-template></ng-template>'
})
export class MJsTreeComponent {

  private treeOuo: any;

  selectedItem: JsTreeItem;
  @Output() onSelectNodeChanged = new EventEmitter<JsTreeItem>()

  constructor(private ele: ElementRef) { }

  init(options: any): void {
    this.treeOuo = $(this.ele.nativeElement)
      .on("changed.jstree", (e, data) => {
        if (!data.node || (this.selectedItem && data.node.id === this.selectedItem.id))
          return;
        this.selectedItem = data.node;
        this.onSelectNodeChanged.emit(this.selectedItem);
      })
      .jstree({
        plugins: ["types", "contextmenu", "wholerow"],
        contextmenu: options.contextmenu,
        core: {
          multiple: false,
          themes: {
            responsive: !1
          },
          data: options.data
        },
        types: {
          default: {
            icon: "fa fa-folder m--font-warning"
          },
          file: {
            icon: "fa fa-file  m--font-warning"
          }
        }
      });
  }

  refresh(data: Array<JsTreeItem>): void {
    this.treeOuo.jstree(true).settings.core.data = data;
    this.treeOuo.jstree(true).refresh();
  }
}
