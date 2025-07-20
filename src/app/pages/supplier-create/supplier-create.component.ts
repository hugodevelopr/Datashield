import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-create',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './supplier-create.component.html',
  styleUrl: './supplier-create.component.scss'
})
export class SupplierCreateComponent {

  supplierForm: FormGroup;
  isSaving = false;
  saved = false;

  constructor(private fb: FormBuilder, private router: Router) {

    this.supplierForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      cnpj: ['', [Validators.required, Validators.pattern(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/)]],
      email: ['', [Validators.required, Validators.email]],
      responsavel: ['', Validators.required],
      telefone: [''],
      observacao: ['']
    });
  }

  get f() {
    return this.supplierForm.controls;
  }

  onSubmit() {
    if (this.supplierForm.invalid) {
      this.supplierForm.markAllAsTouched();
      return;
    }
    this.isSaving = true;
    setTimeout(() => {
      this.isSaving = false;
      this.saved = true;
    }, 1200);
  }

  voltar() {
    this.router.navigate(['/suppliers']);
  }
}
