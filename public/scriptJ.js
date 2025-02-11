console.log("hola mund");



let getRandom = size => {
    return Math.floor(Math.random() * size);
}

let getDistance = (e, target) => {
        let diffX = e.offsetX - target.x;
        let diffY = e.offsetY - target.y;
        return Math.sqrt((diffX * diffX) + (diffY * diffY));

    }
    //creo una instacio para el body
let body = document.getElementById("body");

let getDistanceHint = (distance) => {
    if (distance < 50) {
        //cambio colr de fondo 
        body.setAttribute("class", "bg-danger text-white ");
        return "INFIERNO";
    } else if (distance < 70) {
        //cambio colr de fondo 
        body.setAttribute("class", "bg-danger text-white ");
        return "QUEMANDO";
    } else if (distance < 90) {
        //cambio colr de fondo 
        body.setAttribute("class", "bg-warning text-white ");
        return "TIBIO";

    } else if (distance < 120) {
        //cambio colr de fondo 
        body.setAttribute("class", "bg-warning text-white ");
        return "CERCA";
    } else if (distance < 150) {
        //cambio colr de fondo 
        body.setAttribute("class", "bg-info text-white ");




        return "FRIO";
    } else if (distance < 170) {
        //cambio colr de fondo 
        body.setAttribute("class", "bg-primary text-white ");
        return "CONGELADO";
    } else {
        //cambio color
        body.setAttribute("class", "bg-ligth text-dark ");
        return "PERDIDO";
    }
}




const W = 215;
const H = 215;

//Na - Ella/norte
let target = {
    x: 241, //getRandom(W),
    y: 339 //getRandom(H)
};

//Hih - Cosechado
let target2 = {
    x: 289,
    y: 340

};

//Chi Kín - Oeste
let target3 = {
    x: 340,
    y: 344
};

//Ox wil - Mucha comida
let target4 = {
    x: 288,
    y: 374
};

//K'in Ajaw - Sagrado sol
let target5 = {
    x: 337,
    y: 380
};

//Xul men - Fin del trabajo
let target6 = {
    x: 384,
    y: 381
};
//llamo las instacios que necesito del juego.html
//llamo el mapa para saber sus dimensiones
let $map = document.getElementById("map");
//en el documento html creo una variable que se llama distancia para pintar el mensaje de frio o caliente
let $distance = document.getElementById("distance");
//creo una instacia para pintar el nivel del jugador
let $nivel = document.getElementById("nivel");
//creo instancia en el target 
let $target = document.getElementById("target");
//creo la variable clicks  para poder contar
let clicks = 0;
//creo la variable nivel para imprimir
let level = 0;
//pinto la variable nivel
$nivel.innerHTML = "Nivel # :" + (level + 1);

var i = 0;
//decir cual es el target a buscar 
$target.innerHTML = "Busca el glifo de Ella/Norte"

//creo un metodo en el que se ejecuten a partir de los clicks la funcio getdishint que me da un mensaje
$map.addEventListener("click", function(e) {
    //console.log(e.offsetX);
    //console.log(e.offsetY);
    //evaluo en que nivel estoy entro a nivel 1
    if (level == 0) {

        //creo contador para clicks
        clicks++;
        //traigo la iformacion de la distancia del click hasta el objetivo
        let distance = getDistance(e, target);
        //llamo el metodo que me saca mensaje y lo guardo en la variable disHint
        let distanceHint = getDistanceHint(distance);

        //pinto el mensaje que me entrega el metodo getDistanceHint
        $distance.innerHTML = distanceHint;

        //creo un condicional para poder mostrar que se gano si esta cerca del objetivo
        if (distance < 15) {
            alert("GANASTE ¡PRIMER NIVEL DESBLOQUEADO! EN : " + clicks + " CLIKS");

            //hago variable para poder pasar de nivel
            level++;
            //hago que el contador reste uno pora el proximo nivel empieze bien
            clicks = -1;
        }
    }

    //paso al nivel siguiente "2"
    if (level == 1) {
        //decir cual es el target a buscar 
        $target.innerHTML = "Busca el glifo de Hih - Cosechado"

        //imprimo el nivel en el que se encuentra el cliente
        $nivel.innerHTML = "Nivel # : " + (level + 1);
        //contador de clicks
        clicks++;
        //traigo la info de distancia entre  traget dos y el click
        let distance = getDistance(e, target2);
        //llamo metodo que me da mensaje
        let distanceHint = getDistanceHint(distance);
        //pantalla negra cuando comience nuevo nivel
        if (i == 0) {
            //pongo bg negro
            body.setAttribute("class", "bg-dark text-white ");
            i++;
        }

        //--------------------------------------
        //console.log(distance);
        //entrego y ejecuto el mensaje de distanceHint a la instacia que habia creado
        $distance.innerHTML = distanceHint;
        //creo un condicional si estoy cerca del target
        if (distance < 15) {
            //alerta de ganador
            alert("GANASTE ¡SEGUNDO NIVEL DESBLOQUEADO!!: " + clicks + " CLIKS");
            //location.reload();
            //aumento contador de nivel para que se pueda pasar al siguiente condicional
            level++;
            //le resto 1 al click para que empieze en cero el nuevo nivel
            clicks = -1;
            //hago i =0 para que el bg del proximo nivel empieze negro
            i = 0;
        }
    }
    //paso al nivel"3"
    if (level == 2) {
        //decir cual es el target a buscar 
        $target.innerHTML = "Busca el glifo de Chi K'in - Oeste"
        $nivel.innerHTML = " Nivel # : " + (level + 1);
        clicks++;
        let distance = getDistance(e, target3);
        let distanceHint = getDistanceHint(distance);
        //pantalla negra cuando comience nuevo nivel
        if (i == 0) {
            body.setAttribute("class", "bg-dark text-white ");
        }
        i++;
        //--------------------------------------------

        console.log(distance);
        $distance.innerHTML = distanceHint;
        if (distance < 15) {
            alert("GANASTE ¡TERCER NIVEL DESBLOQUEADO!!: " + clicks + " CLIKS");
            //location.reload();
            level++;
            clicks = -1;
            i = 0;
        }
    }

    //paso al nivel siguiente "4"
    if (level == 3) {
        //decir cual es el target a buscar 
        $target.innerHTML = "Busca el glifo de Ox Wil - Mucha comida"

        //imprimo el nivel en el que se encuentra el cliente
        $nivel.innerHTML = "Nivel # : " + (level + 1);
        //contador de clicks
        clicks++;
        //traigo la info de distancia entre  traget dos y el click
        let distance = getDistance(e, target4);
        //llamo metodo que me da mensaje
        let distanceHint = getDistanceHint(distance);
        //pantalla negra cuando comience nuevo nivel
        if (i == 0) {
            //pongo bg negro
            body.setAttribute("class", "bg-dark text-white ");
            i++;
        }

        //--------------------------------------
        //console.log(distance);
        //entrego y ejecuto el mensaje de distanceHint a la instacia que habia creado
        $distance.innerHTML = distanceHint;
        //creo un condicional si estoy cerca del target
        if (distance < 15) {
            //alerta de ganador
            alert("GANASTE ¡SEGUNDO NIVEL DESBLOQUEADO!!: " + clicks + " CLIKS");
            //location.reload();
            //aumento contador de nivel para que se pueda pasar al siguiente condicional
            level++;
            //le resto 1 al click para que empieze en cero el nuevo nivel
            clicks = -1;
            //hago i =0 para que el bg del proximo nivel empieze negro
            i = 0;
        }
    }

    //paso al nivel siguiente "5"
    if (level == 4) {
        //decir cual es el target a buscar 
        $target.innerHTML = "Busca el glifo de K'in Ajaw - Segundo sol"

        //imprimo el nivel en el que se encuentra el cliente
        $nivel.innerHTML = "Nivel # : " + (level + 1);
        //contador de clicks
        clicks++;
        //traigo la info de distancia entre  traget dos y el click
        let distance = getDistance(e, target5);
        //llamo metodo que me da mensaje
        let distanceHint = getDistanceHint(distance);
        //pantalla negra cuando comience nuevo nivel
        if (i == 0) {
            //pongo bg negro
            body.setAttribute("class", "bg-dark text-white ");
            i++;
        }

        //--------------------------------------
        //console.log(distance);
        //entrego y ejecuto el mensaje de distanceHint a la instacia que habia creado
        $distance.innerHTML = distanceHint;
        //creo un condicional si estoy cerca del target
        if (distance < 15) {
            //alerta de ganador
            alert("GANASTE ¡SEGUNDO NIVEL DESBLOQUEADO!!: " + clicks + " CLIKS");
            //location.reload();
            //aumento contador de nivel para que se pueda pasar al siguiente condicional
            level++;
            //le resto 1 al click para que empieze en cero el nuevo nivel
            clicks = -1;
            //hago i =0 para que el bg del proximo nivel empieze negro
            i = 0;
        }
    }

    //paso al nivel siguiente "6"
    if (level == 5) {
        //decir cual es el target a buscar 
        $target.innerHTML = "Busca el glifo de Xul men - Fin del trabajo"

        //imprimo el nivel en el que se encuentra el cliente
        $nivel.innerHTML = "Nivel # : " + (level + 1);
        //contador de clicks
        clicks++;
        //traigo la info de distancia entre  traget dos y el click
        let distance = getDistance(e, target6);
        //llamo metodo que me da mensaje
        let distanceHint = getDistanceHint(distance);
        //pantalla negra cuando comience nuevo nivel
        if (i == 0) {
            //pongo bg negro
            body.setAttribute("class", "bg-dark text-white ");
            i++;
        }

        //--------------------------------------
        //console.log(distance);
        //entrego y ejecuto el mensaje de distanceHint a la instacia que habia creado
        $distance.innerHTML = distanceHint;
        //creo un condicional si estoy cerca del target
        if (distance < 15) {
            //alerta de ganador
            alert("GANASTE ¡SEGUNDO NIVEL DESBLOQUEADO!!: " + clicks + " CLIKS");
            //location.reload();
            //aumento contador de nivel para que se pueda pasar al siguiente condicional
            level++;
            //le resto 1 al click para que empieze en cero el nuevo nivel
            clicks = -1;
            //hago i =0 para que el bg del proximo nivel empieze negro
            i = 0;
        }
    }

    if (level == 6) {
        var rnd = Math.random,
            flr = Math.floor;

        let canvas = document.createElement('canvas');
        document.getElementById('firework').appendChild(canvas);
        canvas.style.position = 'relative';
        canvas.style.width = '100%';
        canvas.style.height = '300px';

        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        let ctx = canvas.getContext('2d');

        function rndNum(num) {
            return rnd() * num + 1;
        }

        function vector(x, y) {
            this.x = x;
            this.y = y;

            this.add = function(vec2) {
                this.x = this.x + vec2.x;
                this.y = this.y + vec2.y;
            }
        }

        function particle(pos, vel) {
            this.pos = new vector(pos.x, pos.y);
            this.vel = vel;
            this.dead = false;
            this.start = 0;

            this.update = function(time) {
                let timeSpan = time - this.start;

                if (timeSpan > 500) {
                    this.dead = true;
                }

                if (!this.dead) {
                    this.pos.add(this.vel);
                    this.vel.y = this.vel.y + gravity;
                }
            };

            this.draw = function() {
                if (!this.dead) {
                    drawDot(this.pos.x, this.pos.y, 1);
                }
            }

        }

        function firework(x, y) {

            this.pos = new vector(x, y);
            this.vel = new vector(0, -rndNum(10) - 3);
            this.color = 'hsl(' + rndNum(360) + ', 100%, 50%)'
            this.size = 4;
            this.dead = false;
            this.start = 0;
            let exParticles = [],
                exPLen = 100;

            let rootShow = true;

            this.update = function(time) {
                if (this.dead) {
                    return;
                }

                rootShow = this.vel.y < 0;

                if (rootShow) {
                    this.pos.add(this.vel);
                    this.vel.y = this.vel.y + gravity;
                } else {
                    if (exParticles.length === 0) {
                        flash = true;
                        for (let i = 0; i < exPLen; i++) {
                            exParticles.push(new particle(this.pos, new vector(-rndNum(10) + 5, -rndNum(10) + 5)));
                            exParticles[exParticles.length - 1].start = time;
                        }
                    }
                    let numOfDead = 0;
                    for (let i = 0; i < exPLen; i++) {
                        let p = exParticles[i];
                        p.update(time);
                        if (p.dead) {
                            numOfDead++;
                        }
                    }

                    if (numOfDead === exPLen) {
                        this.dead = true;
                    }

                }
            }

            this.draw = function() {
                if (this.dead) {
                    return;
                }

                ctx.fillStyle = this.color;
                if (rootShow) {
                    drawDot(this.pos.x, this.pos.y, this.size);
                } else {
                    for (let i = 0; i < exPLen; i++) {
                        let p = exParticles[i];
                        p.draw();
                    }
                }
            }

        }

        function drawDot(x, y, size) {
            ctx.beginPath();

            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();

            ctx.closePath();
        }

        var fireworks = [],
            gravity = 0.2,
            snapTime = 0,
            flash = false;

        function init() {
            let numOfFireworks = 20;
            for (let i = 0; i < numOfFireworks; i++) {
                fireworks.push(new firework(rndNum(canvas.width), canvas.height));
            }
        }

        function update(time) {
            for (let i = 0, len = fireworks.length; i < len; i++) {
                let p = fireworks[i];
                p.update(time);
            }
        }

        function draw(time) {
            update(time);

            ctx.fillStyle = '#fff';
            if (flash) {
                flash = false;
            }
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = 'white';
            ctx.font = "30px Arial";
            let newTime = time - snapTime;
            snapTime = time;

            //ctx.fillText(newTime,10,50);

            ctx.fillStyle = 'blue';
            for (let i = 0, len = fireworks.length; i < len; i++) {
                let p = fireworks[i];
                if (p.dead) {
                    fireworks[i] = new firework(rndNum(canvas.width), canvas.height);
                    p = fireworks[i];
                    p.start = time;
                }
                p.draw();
            }

            window.requestAnimationFrame(draw);
        }

        window.addEventListener('resize', function() {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
        });

        init();
        draw();

    }





});