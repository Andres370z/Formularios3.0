import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Menssage, RoutersLink } from 'src/app/models/router';
import { AlertService } from 'src/app/service/alert.service';
import { AuthService } from 'src/app/service/auth.service';
import { LocalstoreService } from 'src/app/service/localstore.service';

@Component({
    selector: 'app-register-cmp',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit, OnDestroy {
    test: Date = new Date();
    public form: FormGroup;
    public customerDetail: any = [];
    public textAlert: any;
    constructor(
        private router: Router,
        public formBuilder: FormBuilder,
        private _https:AuthService,
        private alert: AlertService,
        private localStore: LocalstoreService) {
          this.textAlert = Menssage;
    }

    

    ngOnInit() {
      const body = document.getElementsByTagName('body')[0];
      body.classList.add('register-page');
      body.classList.add('off-canvas-sidebar');
      let token = Menssage.token;
        this.getCustomerDetail(token)
      this.initial()
    }

    initial(){
      /* if (localStorage.getItem('token') !== null) {
        this.router.navigate([RoutersLink.home]);
      } */
      this.form = this.formBuilder.group({
        name: [Menssage.empty, Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])],
        surName: [Menssage.empty, Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])],
        documentType: [Menssage.empty, Validators.compose([
          Validators.required
        ])],
        documentNumber: [Menssage.empty, Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])],
        sex: [Menssage.empty, Validators.compose([
          Validators.required,
        ])],
        birthDate: [Menssage.empty, Validators.compose([
          Validators.required,
        ])],
        telephone: [Menssage.empty, Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])],
        email: [Menssage.empty, Validators.compose([
          Validators.required,
          Validators.pattern(Menssage.valiEmail),
          Validators.minLength(5)
        ])],
        img: [Menssage.empty],
        passwordClient: [Menssage.empty, Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])],
        passwordClientVerify: [Menssage.empty, Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])],
        rolAppId: [2],
        clientsProyectsId: [1],
      });
    }
    ngOnDestroy(){
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('register-page');
      body.classList.remove('off-canvas-sidebar');
    }

    onSubmit(item: any){
      const date = new Date(item.birthDate) 
      const dateEnd = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDay()
      //const timeEnd = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
      //this.form.controls['birthDate'].setValue(dateEnd); 
      item.birthDate = dateEnd;
      console.log(item)
      if (this.valid(item)) {
          this.alert.loading();
          this._https.createUsersClients(item).then((resulta: any)=>{
            if (resulta) {
              console.log(resulta); 
                this.localStore.setSuccessLogin(resulta)
                this.localStore.removeEnd("reload")
                this.router.navigate([RoutersLink.content]);
                this.alert.success(Menssage.exito, Menssage.success);
                //this.alert.messagefin();
                this.form.reset();
              
            } else {
              this.alert.error(Menssage.error, Menssage.server);
            }
          }).catch((err: any)=>{
            console.log(err)
            this.alert.error(Menssage.error, Menssage.server);
          });
      }
  }
  valid(item: any): boolean{
    let valid = true
    if (item.name === Menssage.empty) {
      this.alert.error(Menssage.error, Menssage.name);
      valid = false
    }
    if (item.surName === Menssage.empty) {
      this.alert.error(Menssage.error, Menssage.surName);
      valid = false
    }
    if (item.documentType === Menssage.empty) {
      this.alert.error(Menssage.error, Menssage.documentType);
      valid = false
    }
    if (item.documentNumber === Menssage.empty) {
      this.alert.error(Menssage.error, Menssage.documentNumber);
      valid = false
    }
    if (item.sex === Menssage.empty) {
      this.alert.error(Menssage.error, Menssage.sex);
      valid = false
    }
    if (item.birthDate === Menssage.empty) {
      this.alert.error(Menssage.error, Menssage.birthDate);
      valid = false
    }
    if (item.telephone === Menssage.empty) {
      this.alert.error(Menssage.error, Menssage.telephone);
      valid = false
    }
    if (item.email === Menssage.empty) {
      this.alert.error(Menssage.error, Menssage.email);
      valid = false
    }
    if (item.passwordClient === Menssage.empty) {
      this.alert.error(Menssage.error, Menssage.passwordClient);
      valid = false
    }
    if (item.passwordClientVerify === Menssage.empty) {
      this.alert.error(Menssage.error, Menssage.passwordClientVerify);
      valid = false
    }
    return valid
  }

  login(){
    this.router.navigate([RoutersLink.login]);
  } 
  verifyPassword(){
    if (this.form.controls['passwordClient'].value != this.form.controls['passwordClientVerify'].value) {
      this.alert.error(Menssage.error, Menssage.errorPassword);
      this.form.controls['passwordClient'].setValue("");
      this.form.controls['passwordClientVerify'].setValue("");
    }
  }
  getCustomerDetail(item: string){
    this.alert.loading();
    this._https.getCustomerDetail(item).then((resulta: any)=>{
        console.log(resulta); 
          this.customerDetail = resulta.data
          this.localStore.removeEnd("reload")
          this.localStore.setItem(resulta.data, Menssage.customerDetail)
          this.alert.messagefin();
    }).catch((err: any)=>{
      console.log(err)
      this.alert.error(Menssage.error, Menssage.server);
    });
  }
}
