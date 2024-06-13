 interface PollType {  
  id:number;  
    name: string;
    description: string;
    category: string;
    picture: string;
    picture_url: string;
    lastUpdated: string;
    votes:VotesType;
    hero?: boolean|undefined;
}
 interface VotesType {
    positive: number;
    negative: number;
}
import data from "./data.json"
export default class Polls {
    list:PollType[];
  constructor() {
    console.log(localStorage.getItem("list"))
    if(!localStorage.getItem("list")){
      this.list = data.data.map((poll,index) => {return {...poll,id:index}});
      localStorage.setItem("list",JSON.stringify(this.list));
    }else{
      this.list = JSON.parse(localStorage.getItem("list") || "[]");
    }
  }

  getPolls(): PollType[] {
    return this.list.filter(poll => !poll.hero);
  }
  getHeroPoll(): PollType {
    return this.list.find(poll => poll.hero) || {} as PollType;
  }
  getPoll(id:number): PollType {
    return this.list.find(poll => poll.id === id) || {} as PollType;
  }
  updateVotes(id:number,vote:string):VotesType{
    const index = this.list.findIndex((poll) => poll.id === id); 
    let list = JSON.parse(localStorage.getItem("list") || "[]");
    list[index].votes[vote]++;
    localStorage.setItem("list",JSON.stringify(list));
    this.list = list;
    return this.getPoll(id).votes;
  }
}
export type { PollType as PollType, VotesType}