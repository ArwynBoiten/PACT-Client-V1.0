export class Session {

  id: string;
  preset: any;
  members: any;
  data: any;
  contract: any;

  constructor() {
    this.id = this.generateSessionID();
    this.members = [];
  }

  generateSessionID(){
    return Math.floor(100000 + Math.random() * 900000) + "";
  }

  addMember(_member){
    this.members.push(_member);
  }

}
