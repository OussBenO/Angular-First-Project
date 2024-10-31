import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'verb-conjugator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
 <div>
      <input type="text" [(ngModel)]="verb" placeholder="Entrez un verbe">
      <button (click)="conjugate()">Conjuguer</button>
      
      @if (!verb) {
        <p>Aucun verbe</p>
      } @else if (!verb.endsWith('er')) {
        <p>Ce n'est pas un verbe du premier groupe</p>
      } @else {
        <ul>
          @for (conjugation of getConjugations(); track conjugation) {
            <li>{{ conjugation }}</li>
          }
        </ul>
      }
</div>
  `
})
export class VerbConjugatorComponent {
  verb: string = '';
  private pronouns = ['Je', 'Tu', 'Il/Elle', 'Nous', 'Vous', 'Ils/Elles'];

  conjugate() {
    if (!this.verb || !this.verb.endsWith('er')) {
      return;
    }
  }

  getConjugations(): string[] {
    if (!this.verb || !this.verb.endsWith('er')) {
      return [];
    }

    const root = this.verb.slice(0, -2);
    return [
      `${this.pronouns[0]} ${root}e`,
      `${this.pronouns[1]} ${root}es`,
      `${this.pronouns[2]} ${root}e`,
      `${this.pronouns[3]} ${root}ons`,
      `${this.pronouns[4]} ${root}ez`,
      `${this.pronouns[5]} ${root}ent`
    ];
  }
}