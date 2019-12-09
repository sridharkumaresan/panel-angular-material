import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { INDICATOR_ROTATE } from './_animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [INDICATOR_ROTATE]
})
export class HomeComponent implements OnInit {
  @ViewChild('accordion', {static: true}) accordion: MatAccordion;
  panelOpenState: boolean = false;
  accordionGroupState: boolean = false;
  data;

  constructor() {
    this.data = data;
  }

  ngOnInit() {
  }

  expandCollapse() {
    if (this.accordionGroupState) {
      this.collapseAll();
    } else {
      this.accordion.openAll();
      this.accordionGroupState = !this.accordionGroupState;
      this.panelOpenState = true;
    }
  }

  collapseAll() {
    this.accordionGroupState = false;
    this.accordion.closeAll();
  }

}

export const data = [
  {
    title: 'JP Morgan',
    attributeGroup: [
      {
        clientIndividual: 'Person 1',
        preApprovedAmountPerPerson: '100 USD / 80.29 GBP',
        actualSpendPerPerPerson: '150 USD / 120.43 GBP'
      },
      {
        clientIndividual: 'Person 2',
        preApprovedAmountPerPerson: '100 USD / 80.29 GBP',
        actualSpendPerPerPerson: '150 USD / 120.43 GBP'
      },
      {
        clientIndividual: 'Person 3',
        preApprovedAmountPerPerson: '100 USD / 80.29 GBP',
        actualSpendPerPerPerson: '150 USD / 120.43 GBP'
      }
    ]
  },
  {
    title: 'Chase',
    attributeGroup: [
      {
        clientIndividual: 'Person 1',
        preApprovedAmountPerPerson: '100 USD / 80.29 GBP'
      },
      {
        clientIndividual: 'Person 2',
        preApprovedAmountPerPerson: '100 USD / 80.29 GBP',
      },
      {
        clientIndividual: 'Person 3',
        preApprovedAmountPerPerson: '100 USD / 80.29 GBP',
      }
    ]
  },
  {
    title: 'UBS',
    attributeGroup: [
      {
        clientIndividual: 'Person 1',
        preApprovedAmountPerPerson: '100 USD / 80.29 GBP',
        actualSpendPerPerPerson: '150 USD / 120.43 GBP'
      },
      {
        clientIndividual: 'Person 2',
        preApprovedAmountPerPerson: '100 USD / 80.29 GBP',
        actualSpendPerPerPerson: '150 USD / 120.43 GBP'
      },
      {
        clientIndividual: 'Person 3',
        preApprovedAmountPerPerson: '100 USD / 80.29 GBP',
        actualSpendPerPerPerson: '150 USD / 120.43 GBP'
      }
    ]
  }
];
