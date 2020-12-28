import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { FieldErrorDirective } from './directives/field-error.directive';
import { FieldErrorComponent } from './components/common/field-error/field-error.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PersonalInfoComponent } from './components/user-profile/personal-info/personal-info.component';
import { AddressInfoComponent } from './components/user-profile/address-info/address-info.component';
import { IdentificationInfoComponent } from './components/user-profile/identification-info/identification-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AuthEffects } from './store/effects/auth.effects';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { UserRegisterEffects } from './store/effects/user-register.effects';
import { SideNavComponent } from './components/common/side-nav/side-nav.component';




@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    FieldErrorDirective,
    FieldErrorComponent,
    ForgotPasswordComponent,
    HomeComponent,
    PostListComponent,
    CreatePostComponent,
    UserProfileComponent,
    PersonalInfoComponent,
    AddressInfoComponent,
    IdentificationInfoComponent,
    SideNavComponent
   
    
  ],
  entryComponents:[FieldErrorComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    StoreModule.forRoot({}, {}),
   EffectsModule.forRoot([AuthEffects,UserRegisterEffects]),
    StoreModule.forRoot(reducers, {
      metaReducers, 
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
