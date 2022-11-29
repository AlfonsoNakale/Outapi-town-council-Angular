import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawo63x: string = ' '
  raw7se7: string = ' '
  rawjy86: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Outapi-town-council')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Outapi-town-council',
      },
    ])
  }
}
