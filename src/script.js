class Hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type; 
    }

    attack(){
        let attackMessage;
        let color;
        switch(this.type.toLowerCase()){
            case 'mago':
                attackMessage = 'magia';
                color = "rgb(7, 175, 231)";
                break;
            case 'guerreiro':
                attackMessage = 'espada';
                color = "#32CD32";
                break;
            case 'monge':
                attackMessage = 'artes marciais';
                color = "rgba(191, 187, 214, 0.932)";
                break;
            case 'ninja':
                attackMessage = 'shuriken';
                color = "gray";
                break;
            default:
                attackMessage = 'ataque desconhecido';
                color = "black";
        }
        document.querySelector('#header').innerHTML = `O ${this.type} atacou usando <span style="color:${color}; text-decoration: underline;">${attackMessage}</span>`;
    }
}

function createHero() {
    let name;
    while (true) {
        name = prompt("Digite o nome do Herói").trim();

        if (name) 
            break;

        alert("O nome não pode estar vazio! Tente novamente.");
    }

    let age;
    while (true) {
        const ageInput = prompt("Digite a idade do Herói").trim();
        age = parseInt(ageInput, 10);

        if (!isNaN(age) && age > 0) 
            break;

        alert("Idade não pode ser zero e deve sernúmero positivo! Tente novamente.");
    }

    const validTypes = ['mago', 'guerreiro', 'monge', 'ninja'];
    let type;
    while (true) {
        type = prompt("Digite a classe do Herói (mago, guerreiro, monge, ninja)").trim().toLowerCase();

        if (validTypes.includes(type) || type) 
            break;

        alert("O tipo do herói não pode estar vazio. Tente novamente.");
    }

    const hero = new Hero(name, age, type || 'desconhecido');
    hero.attack();
}

createHero();