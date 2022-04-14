import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgReduxModule } from '@angular-redux/store';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { LocationsActions } from './redux/items.actions'

import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { DetailsComponent } from './details/details.component';
import { IAppState, rootReducer } from './store';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    DetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDividerModule,
    AppRoutingModule,
    HttpClientModule,
    NgReduxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ LocationsActions ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension
  ) {

    this.ngRedux.configureStore(
      rootReducer,
      {} as IAppState,
      [],
      [ devTool.isEnabled() ? devTool.enhancer() : f => f]
    );

  }
}
