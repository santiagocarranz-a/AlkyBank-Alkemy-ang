import { ResetPasswordComponent } from './reset-password.component';
import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthService } from "@core/services/auth.service";
import { LocalStorageService } from "@core/services/local-storage.service";
import { MaterialModule } from "src/app/material/material.module";




describe (`(1) TEST del componente "ResetPasswordComponent"`, () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        BrowserAnimationsModule

      ],
      declarations: [
       ResetPasswordComponent

      ],
      providers: [
        AuthService,
        LocalStorageService,
      ]

    })
    .compileComponents();

  });

  it('Debe existir el RegisterComponent', () => {
    const fixture = TestBed.createComponent(ResetPasswordComponent);
    const component = fixture.componentInstance
    expect(component).toBeTruthy();
  })

})
