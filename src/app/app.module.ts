import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxStripeModule } from 'ngx-stripe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot('pk_test_51I0tBLHjDycGB3bI5KY701EORzL4a4Fwzu7LfhhlzvfDgA2Ifo1rYhutDHaFNvR6i0CZqp0AplSYBQcHSTwXM0CQ00kkW6q5V1')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
