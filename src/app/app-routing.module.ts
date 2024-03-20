
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { CreateHolidayComponent } from './pages/holidays/create-holiday/create-holiday.component';
import { HoildayListComponent } from './pages/holidays/hoilday-list/hoilday-list.component';
import { HolidayComponent } from './pages/holidays/holiday/holiday.component';
import { UpdateHolidayComponent } from './pages/holidays/update-holiday/update-holiday.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CreateTaskComponent } from './pages/tasks/create-task/create-task.component';
import { TaskListComponent } from './pages/tasks/task-list/task-list.component';
import { TaskComponent } from './pages/tasks/task/task.component';
import { UpdateTaskComponent } from './pages/tasks/update-task/update-task.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'userprofile',
    component: UserprofileComponent,
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],

    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        component: UserprofileComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'holiday',
        component: HolidayComponent,
        canActivate: [AdminGuard],
      }, {
        path: 'create-holiday',
        component: CreateHolidayComponent,
        canActivate: [AdminGuard],
      }, {
        path: 'update-holiday/:id',
        component: UpdateHolidayComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'holiday-list',
        component: HoildayListComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'task',
        component: TaskComponent,
        canActivate: [AdminGuard],
      },{
        path: 'create-task',
        component: CreateTaskComponent,
        canActivate: [AdminGuard],
      }, {
        path: 'update-task/:id',
        component: UpdateTaskComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'task-list',
        component: TaskListComponent,
        canActivate: [AdminGuard],
      },
    ],
  },














  {
    path: 'user',
    component: UserDashboardComponent,
    canActivate: [NormalGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        component: UserprofileComponent,
        canActivate: [AdminGuard],
      },
    ],
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
