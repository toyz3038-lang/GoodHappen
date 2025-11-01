// This file defines the TypeScript types and interfaces used in the application. 

export interface LoanPlan {
    id: number;
    name: string;
    interestRate: number;
    duration: number; // in months
    description: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}