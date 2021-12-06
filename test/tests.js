export default  class Test {
    constructor(text,answer) {
      this.text = text;
      this.answer = answer;
    }

    getAnswer(id, firstname, lastname, score, seriousgame, seriousgameresponce, motivation, motivationresponce, administrationresponce, technique, techniqueresponce){

      let tests = {
          "id": id, 
          "firstname": firstname,
          "lastname" : lastname,
          "score_quiz1" : score,
          "seriousgame" : seriousgame,
          "seriousgameresponce" : seriousgameresponce,
          "motivation" : motivation,
          "motivationresponce" : motivationresponce,
          // "administration" : administration,
          "administrationresponce" : administrationresponce,
          "technique" : technique,
          "techniqueresponce" : techniqueresponce
          }

      fetch('http://localhost:5000/quiz', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(tests)
   })

  }
} 