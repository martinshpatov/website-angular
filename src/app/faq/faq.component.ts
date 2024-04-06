import { Component, OnInit } from '@angular/core';

interface FAQItem {
  question: string;
  answer: string;
}


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqData: FAQItem[] = [
  {   question: "What type of news do you cover?",
      answer: "We cover a wide range of news topics including but not limited to politics, technology, business, sports, entertainment, and more." 
  },
  { question: "How frequently do you update your news content?", 
      answer: "We strive to provide up-to-date news coverage and aim to update our content regularly throughout the day." 
  },
  { 
      question: "Is your news content reliable?", 
      answer: "Yes, we prioritize accuracy and reliability in our news reporting. Our team of journalists follows strict ethical guidelines to ensure the credibility of our content." 
  },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}