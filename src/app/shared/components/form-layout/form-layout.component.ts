import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormLayout } from '../../models/FormLayout.model';

@Component({
  selector: 'app-form-layout',
  templateUrl: './form-layout.component.html',
  styleUrls: ['./form-layout.component.css']
})
export class FormLayoutComponent implements OnInit {

  @Input() info: FormLayout;
  @Output() submitEvent: EventEmitter<any> = new EventEmitter();

  isEditing = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  emitSubmit = () => this.submitEvent.emit();

  goToList = () => this.info.isEditing
    ? this.router.navigate(['../../'], { relativeTo: this.route })
    : this.router.navigate(['../'], { relativeTo: this.route })
}
