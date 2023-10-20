import { Component, OnInit } from '@angular/core';
import { TableData } from 'src/app/md/md-table/md-table.component';
import PerfectScrollbar from 'perfect-scrollbar';
import { LocalstoreService } from 'src/app/service/localstore.service';
import { Menssage, RoutersLink } from 'src/app/models/router';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/service/alert.service';
import { Calendar, CalendarOptions, EventClickArg } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es'
import interactionPlugin, { DateClickArg, EventDragStopArg } from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { ViewChild } from '@angular/core';
import { forwardRef } from '@angular/core';
import * as CryptoJS from 'crypto-js';  
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ExcelService } from 'src/app/service/excel.service';
export interface UserData {
  id: number,
  idRegister: number,
  name: string,
  company: string,
  nit: string,
  fechaEvent: string,
  nameUser: string,
  surname: string,
  service: string,
  subservice:string,
  document: string,
  email: string,
  telephone: string,
  fecha: string,
}

declare const $: any;
@Component({
  selector: 'app-assistant-list',
  templateUrl: './assistant-list.component.html',
  styleUrls: ['./assistant-list.component.css']
})
export class AssistantListComponent implements OnInit {
  public tableData1: TableData;
  public usersData: any;
  public eventList: any = [];
  public calendarVisible = false;
  public eventsData: any = [];
  public customerDetail: any = [];
  public calendarOptions?: CalendarOptions;
  public form: FormGroup;
  public images:any = [];
  public eventItems: any = [];
  public selectItems: any;
  private needRefresh = false;
  public displayedColumns: string[] = ['id',  'name',  'surname', 'telephone', 'document','email','birthDate', 'sex', 'accion' ];
  public dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('fullcalendar') fullcalendar?: FullCalendarComponent;
  constructor(
    private localStore: LocalstoreService,
    private _https: AuthService,
    private router: Router,
    private excel: ExcelService,
    private alert: AlertService) { 
    this.usersData = this.localStore.getSuccessLogin();
    this.customerDetail = this.localStore.getItem(Menssage.customerDetail)
    if (this.usersData) {
      this.getMenu(this.usersData.user.clientsProyectsId);
    }
    this.dataSource = new MatTableDataSource(this.eventsData);
    if (this.usersData.user.rolAppId == 2) {
      this.router.navigate([RoutersLink.content]);
    }
  }

  ngOnInit(): void {
    forwardRef(() => Calendar);
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getMenu(item: number){
      this.alert.loading();
      this._https.getListUsers(item).then((resulta: any)=>{
            
            let count = 1;
            if (resulta.data.length != 0) {
              resulta.data.forEach(element => {
                if (element.olAppId != 2) {
                  this.eventsData.push({
                    idCount: count++,
                    id:element.id,
                    name: element.name,
                    surname: element.surName,
                    document: element.documentNumber,
                    birthDate: element.birthDate,
                    sex: element.sex,
                    telephone: element.telephone,
                    email: element.email
                  },);
                }
              });
              this.dataSource = new MatTableDataSource(this.eventsData);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
              this.alert.messagefin();
            }
      }).catch((err: any)=>{
        console.log(err)
        this.alert.error(Menssage.error, Menssage.server);
      });
  }
  getCalendar(){
    this.calendarOptions = {
      locale: esLocale,
      plugins: [dayGridPlugin, interactionPlugin],
      headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth'
      },
      aspectRatio: 1.5,
      views: {
        dayGridMonth: { buttonText: "month" },
        timeGridWeek: { buttonText: "week" },
        timeGridDay: { buttonText: "day" }
      },

      initialView: 'dayGridMonth',
      events: this.eventList, // alternatively, use the `events` setting to fetch from a feed
     
      weekends: true,
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      dateClick: this.handleDateClick.bind(this),
      eventClick: this.handleEventClick.bind(this),
      eventDragStop: this.handleEventDragStop.bind(this)
      /* you can update a remote database when these fire:
      eventAdd:
      eventChange:
      eventRemove:
      */
    };
    this.calendarVisible = true;
  }

  handleDateClick(arg: DateClickArg) {
    console.log('dateclick');
    console.log(arg);
    console.log('dateclick');
  }

  handleEventClick(arg: EventClickArg) {
    console.log(arg.event._def);
    if (arg.event._def.publicId != "") {
      let token = this.convertTextEncrypt(arg.event._def.publicId)
      this.router.navigate([RoutersLink.assistantDetail+token]);
    }
  }

  handleEventDragStop(arg: EventDragStopArg) {
    console.log('DragStop');
    console.log(arg);
    console.log('DragStop');
  }
  //method is used to encrypt and decrypt the text  
  convertTextEncrypt(text:string) {  
      return window.btoa(text)
      //return CryptoJS.AES.encrypt(text, Menssage.passwordAES).toString().replace('Por21Ld', '/');  
  } 
  dowload(){
    console.log("entro");
    if (this.eventsData.length != 0) {
      this.excel.exportAsExcelFile(this.eventsData, Menssage.nameEvents);
    }else{
      this.alert.error(Menssage.error, Menssage.nameEventsNull);
    }
  } 
  routeList(id:any){
    this.localStore.setItem(id, Menssage.selectUsers)
    this.router.navigate(['/home/content']);
  }
}
