import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAddComponent } from "./contact-add/contact-add.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { ContactDetailsComponent } from "./contact-details/contact-details.component";

const routes: Routes = [
  { path: 'add', component: ContactAddComponent },
  { path: 'list', component: ContactListComponent },
  { path: 'details', component: ContactDetailsComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  /*{ path: '**', component: PageNotFoundComponent },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
