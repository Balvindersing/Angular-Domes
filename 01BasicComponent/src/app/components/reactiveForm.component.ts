import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";



@Component({
    selector: 'app-reactive-form',
    templateUrl: '../components/reactiveForm.component.html'

})

export class ReactiveFormComponent implements OnInit {
    ngOnInit(): void {

    }

    userName: FormControl = new FormControl('', [Validators.required]);
    password: FormControl = new FormControl('', [Validators.required]);
    loginFormSubmit() {
        console.log(this.userName.value)
        console.log(this.password.value)
    }
    loginFormGroup = new FormGroup({
        usename: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    })
    loginFormGroupSubmit() {
        console.log(this.loginFormGroup.controls.usename.value)
        console.log(this.loginFormGroup.controls.password.value)
    }
    //Dynamic form
    dynamicForm = new FormGroup({
        username: new FormControl('', []),
        password: new FormControl('', [])
    });
    setDynamicValue() {
        this.dynamicForm.controls.username.setValue("Updated dynamic username");
        this.dynamicForm.controls.password.setValue("Updated dynamic password");
    }

    //Custom Validation
    customValidationForm = new FormGroup({
        username: new FormControl('', []),
        password: new FormControl('')
    });

}