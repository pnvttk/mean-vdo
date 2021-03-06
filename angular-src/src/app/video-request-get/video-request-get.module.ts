import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoRequestGetComponent } from './video-request-get/video-request-get.component';
import { SafePipe } from './video-request-get/safe.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule, Routes } from '@angular/router';
import { VideoDetailComponent } from './video-request-get/video-detail/video-detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddVideoComponent } from './video-request-get/add-video/add-video.component';
import {InputTextModule} from 'primeng/inputtext';
import { UpdateComponent } from './video-request-get/update/update.component';
import { TooltipModule } from 'primeng/tooltip';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { CourseComponent } from './course/course.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    VideoRequestGetComponent,
    AddVideoComponent,
    UpdateComponent,
    CourseComponent,
    // VideoDetailComponent
    // SafePipe
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule ,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    BrowserAnimationsModule,
    InputTextModule,
    TooltipModule,
    ScrollPanelModule,
    TableModule,
    

  ],
  exports: [VideoRequestGetComponent]
})
export class VideoRequestModule { }
