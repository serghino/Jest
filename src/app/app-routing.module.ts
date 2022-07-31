import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './example/counter/counter.component';

const routes: Routes = [
  { path: 'example/counter', component: CounterComponent },
  { path: '**', redirectTo: 'example/counter' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
