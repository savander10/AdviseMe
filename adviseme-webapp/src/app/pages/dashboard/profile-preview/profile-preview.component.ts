import { Component, OnInit } from '@angular/core';

import { User } from '../../../_shared/models/user';
import { Class } from '../../../_shared/models/class';
import { UserService } from '../../../_shared/services/user.service';
import { ClassService } from '../../../_shared/services/class.service';

import {CapitalizePipe} from '../../../@theme/pipes/capitalize.pipe';

/**
  Component:
    For the simple profile view
*/
@Component({
  selector: 'ngx-profile-preview',
  styleUrls: ['./profile-preview.component.scss'],
  templateUrl: './profile-preview.component.html',
})

export class ProfilePreviewComponent implements OnInit {

  /**
    Getting the current user
  */
  currentUser: User;

  /**
    Initializes new names for the imports
  */
  constructor(private userService: UserService,
              private classService: ClassService) {
  }

  /**
    Gets the currents users to display info about them
  */
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userService.getById(this.currentUser._id)
        .subscribe(res => this.currentUser = res);
  }
}
