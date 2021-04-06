import { Component } from '@angular/core';
import { FormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { StripeService, Elements, Element as StripeElement, ElementsOptions } from 'ngx-stripe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SR';
  stripeForm: FormGroup;
  elements: Elements;
  card: StripeElement;
  paymentStatus:any ;
  stripeData: any;

  elementsOptions: ElementsOptions = {
    locale: 'en'
  }

  constructor(private formBuilder: FormBuilder, private stripeService: StripeService) {

  }

  ngOnInit() {
    this.createForm();

    this.stripeService.elements(this.elementsOptions).subscribe(elements => {
      this.elements = elements;
      if(!this.card) {
        this.card = this.elements.create('card', {
          iconStyle: 'solid',
          style: {
            base: {
              iconColor: '#666EE8',
              color: '#31325F',
              lineHeight: '40px',
              fontWeight: 300,
              fontFamily: '"Verdana"',
              fontSize: '18px',
              '::placeholder': {
                color: '#CFD7E0'
              }
            }
          }
        });
        this.card.mount('#card-element');
      }
    })
  }

  createForm() {
    this.stripeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      amount: ['', [Validators.required]]
    });
  }
  public buy() {
    this.stripeData = this.stripeForm.value;
    this.stripeService.createToken(this.card, { name: 'hey' }).subscribe(result => {
      if(result.token) {
        this.stripeData['token'] = result.token;
        console.log(this.stripeData);
        
      }
    })
  }
}