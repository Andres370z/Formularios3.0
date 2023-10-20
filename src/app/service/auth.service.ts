import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoutersLink } from '../models/router';
import { AlertService } from './alert.service';
import { HttpsService } from './https.service';
import { LocalstoreService } from './localstore.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private registeresquest: HttpsService,
    private route: Router, 
    private localStore: LocalstoreService,
    private alert: AlertService
  ) { }

  create(inform:any){
    const data = {
      businessName: inform.businessName,
      identificationCard: inform.identificationCard,
      idCategoryToRegister: inform.idCategoryToRegister,
      address: inform.address,
      phone: inform.phone,
      email: inform.email,
      password: "sumateClaro",
      password_confirmation : "sumateClaro",
      idCity: inform.idCity
    };
    return  this.registeresquest.POST(RoutersLink.register, data)
  }

  resgisterImageEvents(inform:any){
    return  this.registeresquest.POST(RoutersLink.resgisterImageEvents, inform)
  }
  
  login(inform:any){
    return  this.registeresquest.POST(RoutersLink.loginApi, inform)
  }

  cerra(){
    this.alert.messagefin();
    localStorage.removeItem('token')
    this.route.navigate(['pages/login']);
  }

  getCity(){
    return  this.registeresquest.GET(RoutersLink.city)
  }

  getStatus(item: string){
    return  this.registeresquest.GET(RoutersLink.status+item)
  }
  logout(){
    this.localStore.clear();
    this.route.navigate([RoutersLink.login]);
  } 
  getUsers(){
    return  this.registeresquest.GET("user")
  }

  getUsersData(item: number){
    return  this.registeresquest.GET(RoutersLink.getUsersData+item)
  }

  getCustomerDetail(item: string){
    return  this.registeresquest.GET(RoutersLink.customerDetail+item)
  }

  gettotal(item: number, search: string){
    return  this.registeresquest.GET(RoutersLink.gettotal+item)
  }

  getmenu(item: number, ){
    return  this.registeresquest.GET(RoutersLink.menu+item)
  }

  gettotaldatagallery(item: number, ){
    return  this.registeresquest.GET(RoutersLink.gettotaldatagallery+item)
  }

  getEvent(item: number){
    return  this.registeresquest.GET(RoutersLink.getEvent+item)
  }
  
  gettotaldata(item: number, ){
    return  this.registeresquest.GET(RoutersLink.gettotaldata+item)
  }

  gettotaldataDelete(item: number, ){
    return  this.registeresquest.GET(RoutersLink.gettotaldataDelete+item)
  }
  deleteRegisterImageEvent(item: number){
    return  this.registeresquest.GET(RoutersLink.deleteRegisterImageEvent+item)
  }
  getEventImg(item: number, itemEvent: string){
    return  this.registeresquest.GET(RoutersLink.getEventImg+item+'&idevento='+itemEvent)
  }

  getCategory(){
    return  this.registeresquest.GET(RoutersLink.category)
  }

  getBenefits(){
    return  this.registeresquest.GET(RoutersLink.benefits)
  }
  getScale(){
    return  this.registeresquest.GET(RoutersLink.scale)
  }

  getChallenges(){
    return  this.registeresquest.GET(RoutersLink.challenges)
  }

  forgotPassword(item: string){
    return  this.registeresquest.GET(RoutersLink.forgotPassword+item)
  }

  createExpoalidos(inform:any){
    const data = {
      businessName: inform.businessName,
      identificationCard: inform.identificationCard,
      idCategoryToRegister: inform.idCategoryToRegister,
      address: inform.address,
      phone: inform.phone,
      email: inform.email,
      monthlyBudget: inform.monthlyBudget,
      contactPerson : inform.contactPerson,
      terms: inform.terms,
      legalRepresentatives: inform.terms
    };
    return  this.registeresquest.POST(RoutersLink.registerExpoAllies, data)
  }

  createChallenge(inform:any){
    const formData = new FormData(); 
    formData.append("file", inform.file);
    formData.append("businessDescription", inform.description);
    formData.append("nit", inform.nit);
    formData.append("businessName", inform.businessName);
    formData.append("nameWorks", inform.name);
    formData.append("numberContact", inform.numberContact);
    formData.append("typeCategory", inform.typeCategory);
    return  this.registeresquest.POST(RoutersLink.registerChallenge, formData)
  }

  createEditUsers(inform:any){
    const data = {
      businessName: inform.businessName,
      identificationCard: inform.identificationCard,
      idCategoryToRegister: inform.idCategoryToRegister,
      address: inform.address,
      phone: inform.phone,
      email: inform.email,
      idCity: inform.idCity,
      businessDescription: inform.businessDescription,
      contactPerson : inform.contactPerson,
      telephoneContact: inform.telephoneContact,
      legalRepresentatives: inform.legalRepresentatives,
      password: inform.password,
      id: inform.id
    };
    return  this.registeresquest.POST(RoutersLink.registerUpdate, data)
  }

  createUpdatePassword(inform:any){
    const data = {
      id: inform.id,
      email: inform.email,
      password: inform.password,
    };
    return  this.registeresquest.POST(RoutersLink.passwordUpdate, data)
  }

  createImgUpdate(inform:any){
    const formData = new FormData(); 
    formData.append("file", inform.file);
    formData.append("id", inform.id);
    return  this.registeresquest.POST(RoutersLink.imgUpdate, formData)
  }

  createResidentApplication(inform:any){
    return  this.registeresquest.POST(RoutersLink.residentApplication, inform)
  }

  getResidentApplication(item: number){
    return  this.registeresquest.GET(RoutersLink.residentApplication+'/'+item)
  }

  createEmergencyContact(inform:any){
    return  this.registeresquest.POST(RoutersLink.emergencyContact, inform)
  }

  getEmergencyContact(item: number){
    return  this.registeresquest.GET(RoutersLink.emergencyContact+'/'+item)
  }

  createEmployers(inform:any){
    return  this.registeresquest.POST(RoutersLink.employers, inform)
  }

  getEmployers(item: number){
    return  this.registeresquest.GET(RoutersLink.employers+'/'+item)
  }

  createStatus(inform:any){
    return  this.registeresquest.POST(RoutersLink.statu, inform)
  }

  getStatu(item: number){
    return  this.registeresquest.GET(RoutersLink.statu+'/'+item)
  }
  
  createMedications(inform:any){
    return  this.registeresquest.POST(RoutersLink.medications, inform)
  }

  getMedications(item: number){
    return  this.registeresquest.GET(RoutersLink.medications+'/'+item)
  }

  createTreatment(inform:any){
    return  this.registeresquest.POST(RoutersLink.treatment, inform)
  }

  getTreatment(item: number){
    return  this.registeresquest.GET(RoutersLink.treatment+'/'+item)
  }
  createUsersClients(inform:any){
    return  this.registeresquest.POST(RoutersLink.registerUsersClients, inform)
  }
  createRecoveryAgreementPlan(inform:any){
    return  this.registeresquest.POST(RoutersLink.recoveryAgreementPlan, inform)
  }
  getRecoveryAgreementPlan(item: number){
    return  this.registeresquest.GET(RoutersLink.recoveryAgreementPlan+'/'+item)
  }
  getTypesOfForms(item: number){
    return  this.registeresquest.GET(RoutersLink.typesOfForms+'/'+item)
  }
  createGeneralForms(inform:any){
    return  this.registeresquest.POST(RoutersLink.generalForms, inform)
  }
  editGeneralForms(id:number, inform:any){
    return  this.registeresquest.PUT(RoutersLink.generalForms+'/'+id, inform)
  }
  getGeneralForms(item: any){
    return  this.registeresquest.POST(RoutersLink.generalFormsList, item)
  }
  createAuthorizationReleaseInformation(inform:any){
    return  this.registeresquest.POST(RoutersLink.authorizationReleaseInformation, inform)
  }
  getAuthorizationReleaseInformation(item: number){
    return  this.registeresquest.GET(RoutersLink.authorizationReleaseInformation+'/'+item)
  }
  createPhaseUpProgressTracking(inform:any){
    return  this.registeresquest.POST(RoutersLink.phaseUpProgressTracking, inform)
  }
  getPhaseUpProgressTracking(item: number){
    return  this.registeresquest.GET(RoutersLink.phaseUpProgressTracking+'/'+item)
  }
  createPhaseUpProgressTrackingTwo(inform:any){
    return  this.registeresquest.POST(RoutersLink.phaseUpProgressTrackingTwo, inform)
  }
  getPhaseUpProgressTrackingTwo(item: number){
    return  this.registeresquest.GET(RoutersLink.phaseUpProgressTrackingTwo+'/'+item)
  }
  createPhaseUpProgressTrackingThree(inform:any){
    return  this.registeresquest.POST(RoutersLink.phaseUpProgressTrackingThree, inform)
  }
  getPhaseUpProgressTrackingThree(item: number){
    return  this.registeresquest.GET(RoutersLink.phaseUpProgressTrackingThree+'/'+item)
  }
  getListUsers(item: number){
    return  this.registeresquest.GET(RoutersLink.listUsers+item)
  }
}
