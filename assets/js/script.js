
let log = new Log(document.querySelector('.log'));
let char = new Knight('Cavaleiro da Luz');
let monster = new Bigmonster();

let stage = new Stage(char,
    monster,
    document.querySelector('#character'),
    document.querySelector('#monster'),
    log);
stage.start();
