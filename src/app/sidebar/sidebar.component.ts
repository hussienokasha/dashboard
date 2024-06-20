import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations:[trigger('collapse', [
    state('open', style({
      height: '*',
      opacity: 1,
      display: 'block'
    })),
    state('closed', style({
      height: '0',
      opacity: 0,
      display: 'none'
    })),
    transition('open <=> closed', [
      animate('300ms ease-in-out')
    ])
  ])]
})
export class SidebarComponent {
  cities: any[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
  ingredient: any;
  rule: any;
  engine: any;
  rental: any;

  value: any;
  isOpen = true;

  toggleCollapse() {
    this.isOpen = !this.isOpen;
  }
  ngOnInit() {
    let sidebar = document.querySelector('.sidebar');
    let closeBtn = document.querySelector('#btn');
    let searchBtn = document.querySelector('.bx-search');

    closeBtn?.addEventListener('click', () => {
      sidebar?.classList.toggle('open');
      menuBtnChange();
    });

    searchBtn?.addEventListener('click', () => {
      sidebar?.classList.toggle('open');
      menuBtnChange();
    });

    function menuBtnChange() {
      if (sidebar?.classList.contains('open')) {
        closeBtn?.classList.replace('bx-menu', 'bx-menu-alt-right');
      } else {
        closeBtn?.classList.replace('bx-menu-alt-right', 'bx-menu');
      }
    }
  }

}
