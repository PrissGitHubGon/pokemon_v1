export class Pokemon {
    id:number;
    name:string;
    picture:string;
    types:string;
    hp:number;
    cp:number;
    created:Date;
    
    constructor(id:number=0,name:string = '',picture:string = '',types:string = '',hp:number = 0,cp:number = 0,created:Date = new Date) {
this.id = id;
this.name = name;
this.picture = picture;
this.types = types;
this.hp = hp;
this.cp = cp;
this.created = created
    }
}
