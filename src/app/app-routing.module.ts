import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesListComponent } from './components/houses-list/houses-list.component';
import { AddHouseComponent } from './components/add-house/add-house.component';
import { UpdateHouseComponent } from './components/update-house/update-house.component'; // Import the UpdateHouseComponent

const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'houses-list' },
{ path: 'houses-list', component: HousesListComponent },
{ path: 'add-house', component: AddHouseComponent },
{ path: '', pathMatch: 'full', redirectTo: 'delete-house/:id' },
{ path: 'update-house/:id', component: UpdateHouseComponent },
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }