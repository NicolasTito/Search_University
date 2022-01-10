import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'universities' },
	{
		path: 'universities',
		loadChildren: () => import('./universities/universities.module').then(m => m.UniversitiesModule)
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
