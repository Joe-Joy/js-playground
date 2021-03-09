class Toyota{
    constructor(color){
        this.color = color;
    }
    honk(){
        return 'ashli';
    }
}

const toyota = new Toyota({color:"red"});
Toyota.honk();