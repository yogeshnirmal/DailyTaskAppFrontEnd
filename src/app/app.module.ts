import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import{MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { UsersidebarComponent } from './pages/usersidebar/usersidebar.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HolidayComponent } from './pages/holidays/holiday/holiday.component';
import { TaskComponent } from './pages/tasks/task/task.component';
import { HoildayListComponent } from './pages/holidays/hoilday-list/hoilday-list.component';
import { CreateHolidayComponent } from './pages/holidays/create-holiday/create-holiday.component';
import { UpdateHolidayComponent } from './pages/holidays/update-holiday/update-holiday.component';
import { CreateTaskComponent } from './pages/tasks/create-task/create-task.component';
import { UpdateTaskComponent } from './pages/tasks/update-task/update-task.component';
import { TaskListComponent } from './pages/tasks/task-list/task-list.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    UserprofileComponent,
    UsersidebarComponent,
    SidebarComponent,
    WelcomeComponent,
    HolidayComponent,
    TaskComponent,
    HoildayListComponent,
    CreateHolidayComponent,
    UpdateHolidayComponent,
    CreateTaskComponent,
    UpdateTaskComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,MatCardModule,
    MatToolbarModule,MatIconModule,
    MatListModule,MatSelectModule,
    MatDatepickerModule,MatNativeDateModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule { }
