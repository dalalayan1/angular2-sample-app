import { Component,Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'child-div',
    templateUrl : './child.component.html',
    styleUrls: ['./child.component.css']
})

export class ChildComponent {
    @Input() hero: Hero;
}