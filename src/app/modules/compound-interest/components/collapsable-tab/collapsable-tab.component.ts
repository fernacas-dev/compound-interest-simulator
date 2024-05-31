import { Component, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-collapsable-tab',
  templateUrl: './collapsable-tab.component.html',
  styleUrl: './collapsable-tab.component.scss'
})
export class CollapsableTabComponent {
  @Input() tabTitle: string = "";
  @ViewChild("tab") tab!: ElementRef

  tabClicked() {
    this.tab.nativeElement.classList.toggle("active");
    var content = this.tab.nativeElement.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  }
}
