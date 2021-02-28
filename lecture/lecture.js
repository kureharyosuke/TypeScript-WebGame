var numOne = Math.ceil(Math.random() * 9);
//(method) Math.ceil(x: number): number //(method) Math.random(): number
var numTwo = Math.ceil(Math.random() * 9);
var result = numOne * numTwo;
// const word = document.createElement('div');
// const word: HTMLDivElement
// word의 타입은 HTMLDivElement
var word = document.createElement('div');
word.textContent = numOne + " X " + numTwo + " =";
document.body.append(word);
//const word: HTMLDivElement
// const form = document.createElement('form');
//const form: HTMLFormElement
// form의 타입은 HTMLFormElement
var form = document.createElement('form');
//(method) Document.createElement<"div">(tagName: "div", options?: ElementCreationOptions): HTMLDivElement (+2 overloads)
document.body.append(form);
//(method) ParentNode.append(...nodes: (string | Node)[]): void
// const input = document.createElement('input');
// const input: HTMLInputElement
var input = document.createElement('input');
input.type = "number";
form.append(input);
var button = document.createElement('button');
button.textContent = 'Button';
//const button: HTMLButtonElement
form.append(button);
var resultDiv = document.createElement('div');
document.body.append(resultDiv);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (result === Number(input.value)) { // input.value = string => Number(input.value) or +(input.value)
        resultDiv.textContent = 'Good Answer';
        numOne = Math.ceil(Math.random() * 9);
        numTwo = Math.ceil(Math.random() * 9);
        result = numOne * numTwo;
        word.textContent = numOne + " X " + numTwo + " =";
        input.value = '';
        input.focus();
    }
    else {
        resultDiv.textContent = 'No Answer';
        input.value = '';
        input.focus();
    }
});
