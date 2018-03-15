import { NgModule } from "@angular/core";
import { HeaderComponent } from "./page-header/header.component";
import { FooterComponent } from "./page-footer/footer.component";
import { ContentComponent } from "./page-content/content.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ]
})
export class ComponentsModule { }
