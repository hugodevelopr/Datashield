import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Question {
  id: number;
  text: string;
  options: string[];
  answer: string;
  comment: string;
}

interface Step {
  name: string;
  questions: Question[];
}

@Component({
  selector: 'app-evaluation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './evalution.component.html',
  styleUrls: ['./evalution.component.scss']
})
export class EvaluationComponent {
  steps: Step[] = [
    {
      name: 'Requisitos Gerais',
      questions: [
        { id: 1, text: 'Cumpre requisitos legais?', options: ['Sim', 'Parcial', 'Não'], answer: '', comment: '' },
        { id: 2, text: 'Está em dia com obrigações fiscais?', options: ['Sim', 'Parcial', 'Não'], answer: '', comment: '' },
      ]
    },
    {
      name: 'Segurança',
      questions: [
        { id: 3, text: 'Política de backup ativa?', options: ['Sim', 'Parcial', 'Não'], answer: '', comment: '' },
        { id: 4, text: 'Criptografia dos dados?', options: ['Sim', 'Parcial', 'Não'], answer: '', comment: '' },
      ]
    },
    {
      name: 'Compliance',
      questions: [
        { id: 5, text: 'Conformidade LGPD?', options: ['Sim', 'Parcial', 'Não'], answer: '', comment: '' },
        { id: 6, text: 'Treinamento de colaboradores?', options: ['Sim', 'Parcial', 'Não'], answer: '', comment: '' },
      ]
    }
  ];

  currentStep = 0;

  get progressPercent() {
    return Math.round((this.currentStep + 1) / this.steps.length * 100);
  }

  get allQuestions() {
    return this.steps.flatMap(step => step.questions);
  }

  nextStep() {
    if (this.currentStep < this.steps.length - 1) this.currentStep++;
  }
  prevStep() {
    if (this.currentStep > 0) this.currentStep--;
  }
  saveDraft() {
    alert('Rascunho salvo!');
  }
  submit() {
    // aqui você pode processar o envio das respostas
    alert('Avaliação enviada!');
  }
}
