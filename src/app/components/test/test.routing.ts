import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test.component'; // Asegúrate de importar el componente correcto

const routes: Routes = [
  {
    path: '',
    component: TestComponent, // Ruta principal del módulo Test
    children: [
      { path: 'calendar', loadChildren: () => import('../test/calendar/calendar.component').then(m => m.CalendarComponent) }, // Ruta para "calendar"
    ],
  },
];

export const TestRoutes = RouterModule.forChild(routes);