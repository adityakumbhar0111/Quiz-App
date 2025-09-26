const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "HyperTool Markup Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<css>", "<script>", "<link>"],
    answer: "<style>",
  },
  {
    question: "Which property is used to change the font of an element in CSS?",
    options: ["font-family", "font-style", "font-size", "font-weight"],
    answer: "font-family",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Color Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which of the following is a valid CSS selector?",
    options: [".container", "#container", "*", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "How can you add a comment in a JavaScript?",
    options: [
      "// This is a comment",
      "<!-- This is a comment -->",
      "/* This is a comment */",
      "None of the above",
    ],
    answer: "// This is a comment",
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Netscape", "Oracle", "Microsoft", "Sun Microsystems"],
    answer: "Netscape",
  },
  {
    question: "What is the correct way to declare a JavaScript variable?",
    options: ["var x = 10", "let x = 10", "const x = 10", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    options: ["String", "Boolean", "Alert", "Number"],
    answer: "Alert",
  },
  {
    question:
      "What is the correct syntax to link a JavaScript file to an HTML document?",
    options: [
      "<script href='file.js'>",
      "<script src='file.js'>",
      "<js src='file.js'>",
      "<script file='file.js'>",
    ],
    answer: "<script src='file.js'>",
  },
  {
    question:
      "Which of the following is the correct way to select an element with the class name 'example' in JavaScript?",
    options: [
      "document.getElementById('example')",
      "document.querySelector('.example')",
      "document.getElementsByClassName('example')",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "What is the purpose of the 'Bootstrap' framework?",
    options: [
      "Responsive design",
      "Cross-browser compatibility",
      "Predefined CSS styles",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "Which class is used to make a button primary in Bootstrap?",
    options: [".btn-primary", ".btn-default", ".btn-secondary", ".btn-alert"],
    answer: ".btn-primary",
  },
  {
    question:
      "Which of the following is a correct use of a Bootstrap grid system?",
    options: [
      "<div class='col-6'></div>",
      "<div class='row-12'></div>",
      "<section class='grid-2'></section>",
      "<div class='container'></div>",
    ],
    answer: "<div class='col-6'></div>",
  },
  {
    question: "What is React.js?",
    options: [
      "A CSS framework",
      "A JavaScript library for building user interfaces",
      "A JavaScript framework for backend development",
      "A database management system",
    ],
    answer: "A JavaScript library for building user interfaces",
  },
  {
    question: "Which of the following is used for managing state in React?",
    options: ["useState", "useEffect", "Redux", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "What is the syntax to create a React component?",
    options: [
      "function MyComponent() {}",
      "class MyComponent extends React.Component {}",
      "Both A and B",
      "None of the above",
    ],
    answer: "Both A and B",
  },
  {
    question: "What does JSX stand for in React?",
    options: [
      "JavaScript XML",
      "JavaScript Extended",
      "JSON Syntax Extension",
      "JavaScript X",
    ],
    answer: "JavaScript XML",
  },
  {
    question: "Which hook is used for side effects in React?",
    options: ["useEffect", "useState", "useRef", "useReducer"],
    answer: "useEffect",
  },
  {
    question: "Correct Syntax of useState ?",
    options: [
      "let [value,setValue] = useState('initial value')",
      "let [value] = useState()",
      "let value = useState('initial value')",
      "let [value,setValue] = usestate()",
    ],
    answer: "let [value,setValue] = useState('initial value')",
  },
];

export default questions;
