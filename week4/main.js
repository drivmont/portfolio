const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
    { name: "The Hulk",realName: "Bruce Banner" },
    { name: "Spider-man",realName: "Peter Parker" },
    { name: "Cyclops",realName: "Scott Summers" }
];

// Utility functions
function random(a,b=1) {
    // if only 1 argument is provided, we need to swap the values of a and b
      if (b === 1) {
          [a,b] = [b,a];
      }
      return Math.floor((b-a+1) * Math.random()) + a;
    }
    
function shuffle(array) {
      for (let i = array.length; i; i--) {
          let j = random(i)-1;
          [array[i - 1], array[j]] = [array[j], array[i - 1]];
      }
    }



const game = {
    start(quiz){
        console.log('start() invoked');
        this.score = 0;
        this.questions = [...quiz];
        view.setup();
        this.ask();
    },

    ask(name){
        console.log('ask() invoked');
        if(this.questions.length > 2) {
            shuffle(this.questions);
            this.question = this.questions.pop();
            const options = [this.questions[0].realName, this.questions[1].realName, this.question.realName];
            shuffle(options);
            const question = `What is ${this.question.name}'s real name?`;
            view.render(view.question,question);
            view.render(view.response,view.buttons(options));
        }
        else {
            this.gameOver();
        }
    },
    check(event){
        console.log('check(event) invoked');
        const response = event.target.textContent;
        const answer = this.question.realName;
        if(response === answer){
            view.render(view.result,'Correct!',{'class':'correct'});
            this.score++;
            view.render(view.score,this.score);
        } else {
            view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
        }
        this.ask();
    },
    gameOver(){
        console.log('gameOver() invoked');
        view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.teardown();
    }
}

// View Object
const view = {
    start: document.getElementById('start'),
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    response: document.querySelector('#response'),
    render(target,content,attributes) {
        console.log('render() invoked');
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element){
        console.log('show() invoked');
        element.style.display = 'block';
    },
    hide(element){
        console.log('hide() invoked');
        element.style.display = 'none';
    },
    setup(){
        console.log('setup() invoked');
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score,game.score);
        this.render(this.result,'');
        this.render(this.info,'');
    },
    teardown(){
        console.log('teardown() invoked');
        this.hide(this.question);
        this.hide(this.response);
        this.show(this.start);
    },
    buttons(array){
        console.log('buttons() invoked');
        return array.map(value => `<button>${value}</button>`).join('');
    }
};

view.start.addEventListener('click', () => game.start(quiz), false);
view.response.addEventListener('click', (event) => game.check(event), false);