import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';



declare var particlesJS: any;
@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.css']
})
export class NewRegisterComponent implements OnInit {
  public form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    particlesJS.load('particles-js', '../assets/particle.json', null);
  }
  onSubmit(){

  }

}
