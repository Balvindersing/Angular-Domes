import { Component, EventEmitter, Input, Output,OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'child-component',
    templateUrl: '../components/child.component.html'
})
export class ChildComponent implements OnChanges {
    ngOnChanges(): void {
       this.tilteFromParentToChild=this.titleForChild;
    }
    @Input() titleForChild: string = '';
    tilteFromParentToChild = '';
    @Output() updateFromChildToParent: EventEmitter<string> = new EventEmitter();
    childtoParentDataUpdate:string="";
    ngOnInit() {
        console.log("");
        this.tilteFromParentToChild = this.titleForChild;
    }
    
    updateHandler() { 
        debugger
        this.updateFromChildToParent.emit(this.childtoParentDataUpdate)
    }
}

