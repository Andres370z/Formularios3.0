import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menssage } from 'src/app/models/router';
import { AlertService } from 'src/app/service/alert.service';
import { AuthService } from 'src/app/service/auth.service';
import { LocalstoreService } from 'src/app/service/localstore.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  lotsOfTabs = new Array(10).fill(0).map((_, index) => `contenido ${index}`);
  public menuItems: any[] = [];
  public menuItemsStore: any[];
  public usersData: any;
  public customerDetail: any = [];
  public question: boolean = false;
  public question2: boolean = false;
  public question3: boolean = false;
  public question4: boolean = false;
  public question5: boolean = false;
  public question6: boolean = false;
  public question7: boolean = false;
  public question8: boolean = false;
  public question9: boolean = false;
  public question10: boolean = false;
  public question11: boolean = false;
  constructor(private localStore: LocalstoreService,
    private _https:AuthService,
    private router: Router,
    private alert: AlertService) { 
      this.usersData = this.localStore.getSuccessLogin();
      this.customerDetail = this.localStore.getItem(Menssage.customerDetail)
      /* var data =  this.localStore.getItem(Menssage.menu)
      this.menuItemsStore = data == null ? []: data
      if (this.menuItemsStore.length == 0) {
          this.getMenu(this.usersData.user.idrol);
      }else{
          this.menuItems = this.menuItemsStore.filter(menuItem => menuItem);
      } */
    }

  ngOnInit(): void {
  }
  getMenu(item: number){
      this.alert.loading();
      this._https.getmenu(item).then((resulta: any)=>{
          console.log(resulta); 
            this.menuItems = resulta.filter(menuItem => menuItem);
            this.localStore.setItem(resulta, Menssage.menu)
            this.alert.messagefin();
      }).catch((err: any)=>{
        console.log(err)
        this.alert.error(Menssage.error, Menssage.server);
      });
  }
  routerList(item: string){
    this.router.navigate([item]);
  }

  async questionResult(event: boolean){
    this.question = event;
  }
  async questionResult1(event: boolean){
    this.question2 = event;
  }
  async questionResult2(event: boolean){
    this.question3 = event;
  }
  async questionResult3(event: boolean){
    this.question4 = event;
  }
  async questionResult4(event: boolean){
    this.question5 = event;
  }
  async questionResult5(event: boolean){
    this.question6 = event;
  }
  async questionResult6(event: boolean){
    this.question7 = event;
  }
  async questionResult7(event: boolean){
    this.question8 = event;
  }
  async questionResult8(event: boolean){
    this.question9 = event;
  }
  async questionResult9(event: boolean){
    this.question10 = event;
  }
  async questionResult10(event: boolean){
    this.question11 = event;
  }
}
