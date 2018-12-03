import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "grid-view",
    templateUrl: "../Views/GridView.html"
})
export class GridComponent {
    @Output("grid-selected")
    selected: EventEmitter<Object> = new EventEmitter<Object>();

    @Output("grid-deleted")
    deleted: EventEmitter<Object> = new EventEmitter<Object>();

    gridColumns: Array<Object> = new Array<Object>();
    gridData: Array<Object> = new Array<Object>();

    @Input("grid-entityname")
    EntityName: string;

    @Input("grid-data")
    set gridDataSet(_gridData: Array<Object>) {
        if (_gridData.length > 0) {
            var columnNames = Object.keys(_gridData[0]);
            for (var i = 0; i < columnNames.length; i++) {
                this.gridColumns.push(columnNames[i]);
            }
            this.gridData = _gridData;
        }
    }

    Select(_selected: Object) {
        this.selected.emit(_selected);
    }
    Delete(_selected: Object) {
        this.deleted.emit(_selected);
    }
}
