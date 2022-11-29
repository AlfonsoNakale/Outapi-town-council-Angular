import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Procurement } from './procurement.component'

const routes = [
  {
    path: '',
    component: Procurement,
  },
]

@NgModule({
  declarations: [Procurement],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Procurement],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProcurementModule {}
