import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'about-us',
  templateUrl: 'about-us.component.html',
  styleUrls: ['about-us.component.css'],
})
export class AboutUs {
  rawmiiy: string = ' '
  rawxp5k: string = ' '
  rawlo28: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('About-us - Outapi-town-council')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'About-us - Outapi-town-council',
      },
    ])
  }
}
