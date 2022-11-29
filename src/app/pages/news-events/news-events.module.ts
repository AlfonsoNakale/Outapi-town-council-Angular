import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { NewsEvents } from './news-events.component'

const routes = [
  {
    path: '',
    component: NewsEvents,
  },
]

@NgModule({
  declarations: [NewsEvents],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [NewsEvents],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewsEventsModule {}
