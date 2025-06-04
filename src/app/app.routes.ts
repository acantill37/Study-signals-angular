import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './components/cards/cards.component';
import { NgModule } from '@angular/core';
import { TestComponent } from './components/test/test.component';

export const routes: Routes = [
    { path: '', redirectTo: 'cards', pathMatch: 'full' },
    { path: 'header', component: HeaderComponent },
    { path: 'cards', component: CardsComponent },
    { path: 'test-component', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
