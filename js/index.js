let pokemons = [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
    {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
    {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
    {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
    {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
    {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
    {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
    {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]

class PokemonMaster{

    constructor(id, name, created_date){
        this.id = id;
        this.name = name;
        this.created_date = created_date;
        this.pokemon = [];
    }

    add_pokemon(objeto) {
        this.pokemon.push(objeto);
    }

    write_information(){
        console.log('Id: ' + this.id);
        console.log('Name: ' + this.name);
        console.log('Created_date: ' + this.created_date);
        console.log('Pokemons: ');
        this.pokemon.forEach((item) => {
            console.log(item);
        });
    }
}

//1. Ordernar los pokemons por base_damage de menor a mayor.

function ordenarPokemonsBaseDamage(propiedad, sentido, funcionOrdenamiento){
    let llaveOrdenamiento = funcionOrdenamiento ?
    function(objeto){
        return funcionOrdenamiento(objeto[propiedad]);
    } : function  (objeto) {
        return objeto[propiedad];
    }

    sentido = !sentido ? 1 : -1

    return function (objeto1, objeto2){
        return objeto1 = llaveOrdenamiento(objeto1), objeto2 = llaveOrdenamiento(objeto2), sentido * ((objeto1 > objeto2) - (objeto2 > objeto1));
    }
}

let resultado = pokemons.sort(ordenarPokemonsBaseDamage('base_damage', false));

console.log('Resultado1')
console.log(pokemons);

//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.

function ordenar(atributo) {
    if (atributo == 'type') {
        pokemons.sort((a, b) => {
            if (a.type < b.type) {
                return -1;
            }

            if (a.type > b.type) {
                return 1;
            }

            return 0;
        });
    } else {
        pokemons.sort((a, b) => a[atributo] - b[atributo]);
    }
}

console.log('Resultado2')
ordenar('base_damage');
console.log(pokemons);

//3. Crear una funcion que filtre el objeto pokemons y devuelva un agrreglo con los pokemons filtrados. La funcion debe aceptar un argumento para filtrar por type de pokemon.
 
function filtrar(type){
    return pokemons.filter((x) => {
        return x['type'] == type;
    })
}

console.log('Resultado3')
console.log(filtrar('fire'));

//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, name: string, created_date: string, y pokemon: array of objects.

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

console.log('Resultado4')
let pokemon_master = new PokemonMaster(1, 'Ash Ketchup xD', '18-12-2022');

pokemon_master.write_information();

//5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.

function agregar_pokemon_aleatorio(pokemon_master){
    if(pokemons.length > 0){
        const index = random(0, pokemons.length - 1);

        pokemon_master.add_pokemon(pokemons[index]);
    }
}

console.log('Resultado5')
agregar_pokemon_aleatorio(pokemon_master);
agregar_pokemon_aleatorio(pokemon_master);
agregar_pokemon_aleatorio(pokemon_master);

pokemon_master.write_information();

//6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:
// min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero entero aleatorio entre 3 y 5
 
function generar_min_max_damage(){

    pokemons.forEach((item) =>{
        item['min_damage'] = random(1, 2);
        item['max_damage'] = random(3, 5);
    })
}

console.log('Resultado6');
generar_min_max_damage();
console.log(pokemons);
