import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlticciComponent } from './pages/alticci/alticci.component'

const routes: Routes = [
  {
    path: '',
    component: AlticciComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
