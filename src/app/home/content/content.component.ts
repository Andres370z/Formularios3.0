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
  constructor(private localStore: LocalstoreService,
    private _https:AuthService,
    private router: Router,
    private alert: AlertService) { 
      this.usersData = this.localStore.getSuccessLogin();
      this.customerDetail = this.localStore.getItem(Menssage.customerDetail)
      var data =  this.localStore.getItem(Menssage.menu)
      this.menuItemsStore = data == null ? []: data
      if (this.menuItemsStore.length == 0) {
          this.getMenu(this.usersData.user.idrol);
      }else{
          this.menuItems = this.menuItemsStore.filter(menuItem => menuItem);
      }
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
}
