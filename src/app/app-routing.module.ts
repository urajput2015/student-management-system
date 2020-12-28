import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { SchemaResolver } from './services/schema.resolver';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthGuard } from './gaurds/auth.guard';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
{
  path: 'login',
  component: UserLoginComponent,
  resolve: {
    schema: SchemaResolver,
  },
  data: {
    schemaId: 'login-schema'
  }
},
{
  path: 'password-reset',
  component: ForgotPasswordComponent,
  resolve: {
    schema: SchemaResolver,
  },
  data: {
    schemaPath: 'assets/json-schemas/forgot-password.schema.json'
  }
},
{
  path: 'register',
  component: UserRegistrationComponent,
  resolve: {
    schema: SchemaResolver,
  },
  data: {
    schemaPath: 'assets/json-schemas/user-registration.schema.json'
  }
},
{
  path: 'home',
  component: HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
