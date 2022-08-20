import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ValidationButtonComponent } from "./validation-button/validation-button.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { BlockComponentsComponent } from "./block-components/block-components.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MenuComponent } from "./menu/menu.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SearchMovieComponent } from "./search-movie/search-movie.component";
import { DeveloperComponentComponent } from "./Challenge9_Input/developer-component/developer-component.component";
import { SkillComponentComponent } from "./Challenge9_Input/skill-component/skill-component.component";
import { CreateOnomatopiaComponentComponent } from "./Challenge10_Output/create-onomatopia-component/create-onomatopia-component.component";
import { CocktailListComponent } from "./Challenge11/cocktail-list/cocktail-list.component";

@NgModule({
  declarations: [
    AppComponent,
    ValidationButtonComponent,
    HeroesComponent,
    BlockComponentsComponent,
    UserProfileComponent,
    MenuComponent,
    SignUpComponent,
    SearchMovieComponent,
    DeveloperComponentComponent,
    SkillComponentComponent,
    CreateOnomatopiaComponentComponent,
    CocktailListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
