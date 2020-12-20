import { ChangeDetectionStrategy, Component, Input, EventEmitter, Output } from '@angular/core';
import { TreeNode } from '../node';
import { TreeNodeComponent } from '../tree/tree-node/tree-node.component';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlComponent {
  @Input()
  currentNodeComponent!: TreeNodeComponent | null;

  @Output()
  addNode = new EventEmitter<TreeNode>();

  @Output()
  removeNode = new EventEmitter<TreeNode>();
}
