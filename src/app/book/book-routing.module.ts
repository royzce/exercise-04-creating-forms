import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookFormComponent } from './pages/book-form/book-form.component';

const routes: Routes = [
  {
    path: 'book',
    component: BookListComponent
  },
  {
    path: 'book',
    children : [
      {
        path: 'form',
        component: BookFormComponent
      }
    ]
  },
  {
    path: 'book',
    children : [
      {
        path: 'form/:id',
        component: BookFormComponent
      }
    ]
  },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BookRoutingModule { }
