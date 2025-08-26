let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    gateWage: function(){
        return this.baseSalary +(this.overtime * this.rate);
    }
};

console.log(employee.gateWage());

const circle1 = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('draw');
    }
};

function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw');
        }
    }
}
circle1.draw();

const circle2 = createCircle(1);

for( let key in circle1){
    console.log(key, circle1[key]);
}

const keys = Object.keys(circle1);
console.log(keys);

if('radius' in circle1)
    console.log('Circle has a radius.');


function Circle3(radius){
    this.radius = radius;

    let defaultLocation = { x: 0 , y: 0 };

    this.getdefaultLocation = function(){
        return defaultLocation;
    }

    let computeOptimumLocation = function(){
        // ...
    }

    this.draw = function(){
        computeOptimumLocation();
        console.log('draw3');
    }

    Object.defineProperties(this, {
    defaultLocation: {
        get: function() {
            return defaultLocation;
        },
        set: function(value){
            if(!value.x || !value.y)
                throw new Error('Invalid location.')
            defaultLocation = value;
        }
    }
});
}

const another = new Circle3(3);

another.draw();

// ex 

function Stopwatch(){
    let duration , startTime , endTime, running= 0 ;
    let isStarted = false;

    this.start = function(){
        if(!isStarted){
            startTime = new Date();
            isStarted = true;
        }else{
            throw new Error('Stopwatch is started');
        }

    }

    this.stop = function(){
        if(isStarted){
            endTime = new Date();
            isStarted = false;

            const seconds = (endTime.getTime()- startTime.getTime()) / 1000;
            duration += seconds;
        }else{
            throw new Error('Stopwatch is not started');
        }
    }

    this.reset = function(){
        startTime = null;
        endTime = null;
        isStarted = false;
        duration = 0;
    }

    Object.defineProperties(this,{duration :{
        get: function() { return duration; }
    }
    })
}



const sw = new Stopwatch();

