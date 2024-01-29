import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { EnetlistComponent } from './enetlist/enetlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventlistdetailsComponent } from './eventlistdetails/eventlistdetails.component';
import { SignupComponent } from './signup/signup.component';
import { AdmineventlistComponent } from './admineventlist/admineventlist.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AdminGuidesComponent } from './admin-guides/admin-guides.component';
import { AdminMembersComponent } from './admin-members/admin-members.component';
import { AddGuideComponent } from './add-guide/add-guide.component';
import { EditGuideComponent } from './edit-guide/edit-guide.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { AdminWebsiteComponent } from './admin-website/admin-website.component';
import { ProfileComponent } from './profile/profile.component';
import { GuideslistComponent } from './guideslist/guideslist.component';
import { AssignGuideComponent } from './assign-guide/assign-guide.component';

export const routes: Routes = [
  {'path':'', component:HomepageComponent},
  { 'path': 'events', component: EnetlistComponent },
  { 'path': 'events/eventdetails/:id', component: EventlistdetailsComponent},
  { 'path': 'login', component: LoginComponent},
  { 'path': 'dashboard', component: DashboardComponent},
  { 'path': 'signup', component: SignupComponent},
  { 'path': 'adminEvents', component: AdmineventlistComponent},
  { 'path': 'adminEvents/editEvent/:id', component: EditEventComponent},
  { 'path': 'adminEvents/assignGuide/:id', component: AssignGuideComponent},
  {'path':'addEvent', component:AddEventComponent},
  {'path':'users', component:UsersComponent},
  {'path':'addU', component:AddUserComponent},
  { 'path': 'users/editUser/:id', component: EditUserComponent},
  {'path':'guides', component:AdminGuidesComponent},
  {'path':'members', component:AdminMembersComponent},
  {'path':'addGuide', component:AddGuideComponent},
  { 'path': 'guides/editGuide/:id', component: EditGuideComponent},
  { 'path': 'members/editMember/:id', component: EditMemberComponent},
  {'path':'websiteInfo', component:AdminWebsiteComponent},
  {'path':'profile', component:ProfileComponent},
  {'path':'ourTeam', component:GuideslistComponent}
];
