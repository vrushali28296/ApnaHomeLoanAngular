import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegapplicantComponent } from './regapplicant/regapplicant.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

import { AllApplicationOeComponent } from './operationalExecutive/all-application-oe/all-application-oe.component';
import { AllApplicationDveComponent } from './documentExecutive/all-application-dve/all-application-dve.component';
import { VerifyDocumentsDveComponent } from './documentExecutive/verify-documents-dve/verify-documents-dve.component';
import { AllApprovedApplicationAhComponent } from './accountHead/all-approved-application-ah/all-approved-application-ah.component';
import { AllEmiCalculationAhComponent } from './accountHead/all-emi-calculation-ah/all-emi-calculation-ah.component';
import { AllApprovedDoComponent } from './disbursementOfficer/all-approved-do/all-approved-do.component';
import { AllApprovedListComponent } from './ledger/all-approved-list/all-approved-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { AllApplicationSeComponent } from './saleExecutive/all-application-se/all-application-se.component';
import { ApprovedApplicationSeComponent } from './saleExecutive/approved-application-se/approved-application-se.component';
import { RejectedApplicationSeComponent } from './saleExecutive/rejected-application-se/rejected-application-se.component';
import { NewApplicationSeComponent } from './saleExecutive/new-application-se/new-application-se.component';

import { HeaderComponent } from './adminMod/header/header.component';
import { FooterComponent } from './adminMod/footer/footer.component';
import { NavbarComponent } from './adminMod/navbar/navbar.component';
import { SidebarComponent } from './adminMod/sidebar/sidebar.component';
import { AdminModModule } from './adminMod/admin-mod.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegapplicantComponent,
    AboutusComponent,
    ContactusComponent,
    AllApplicationSeComponent,
    ApprovedApplicationSeComponent,
    RejectedApplicationSeComponent,
    NewApplicationSeComponent,
    AllApplicationOeComponent,
    AllApplicationDveComponent,
    VerifyDocumentsDveComponent,
    AllApprovedApplicationAhComponent,
    AllEmiCalculationAhComponent,
    AllApprovedDoComponent,
    AllApprovedListComponent,
   
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AdminModModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
