export class Client{
    name: string;
    cif: string;
    address: string;
    group: number;

    constructor(name:string, cif:string, address:string,group:number){
        this.name = name;
        this.cif = cif;
        this.address = address;
        this.group = group;
    }

}