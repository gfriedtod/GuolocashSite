import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {
  HlmAccordionContentDirective,
  HlmAccordionDirective, HlmAccordionIconDirective,
  HlmAccordionImports,
  HlmAccordionItemDirective,
  HlmAccordionTriggerDirective
} from "@spartan-ng/ui-accordion-helm";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {BrnAccordionContentComponent} from "@spartan-ng/ui-accordion-brain";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HlmButtonDirective, HlmButtonDirective, HlmButtonDirective, HlmButtonDirective, HlmButtonDirective, HlmAccordionDirective, HlmAccordionImports, HlmAccordionDirective, HlmAccordionImports, HlmAccordionItemDirective, HlmAccordionTriggerDirective, HlmIconComponent, HlmAccordionContentDirective, HlmAccordionIconDirective, HlmAccordionImports, BrnAccordionContentComponent, HlmAccordionIconDirective, HlmIconComponent, HlmAccordionImports, HlmAccordionIconDirective, HlmIconComponent, HlmAccordionImports, HlmAccordionItemDirective, HlmAccordionImports, HlmAccordionImports, HlmIconComponent, HlmAccordionDirective, HlmAccordionImports, HlmAccordionImports, HlmAccordionImports, HlmAccordionDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GuoloCahSite';
  protected readonly _thirdOpened = signal(false);
  toggleThird() {
    this._thirdOpened.set(!this._thirdOpened());
  }
}
