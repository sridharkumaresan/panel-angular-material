import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { INDICATOR_ROTATE } from '../_animation';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  animations: [INDICATOR_ROTATE]

})
export class PanelComponent implements OnInit {
  @ViewChild('templ', {static: true}) templ ;
  @Input() data: any = [];
  panelOpenState: boolean = false;

  constructor(
    private vcr: ViewContainerRef
  ) { }

  ngOnInit() {
    this.vcr.createEmbeddedView(this.templ);
  }

}
