import { Component } from '@angular/core';

import { SavedJobsPage } from '../savedJobs/savedJobs';
import { AppliedJobsPage } from '../appliedJobs/appliedJobs';
import { HomePage } from '../home/home';
import { MessagesPage } from '../messages/messages';
import { AccountPage } from '../account/account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SavedJobsPage;
  tab3Root = AppliedJobsPage;
  tab4Root = MessagesPage;
  tab5Root = AccountPage;

  constructor() {

  }
}
