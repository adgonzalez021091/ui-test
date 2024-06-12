 interface PollType {    
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
  constructor(private readonly polls: PollType[]) {
    this.list = data.data;
  }

  getPolls(): PollType[] {
    return this.list.filter(poll => !poll.hero);
  }
  getHeroPoll(): PollType {
    return this.list.find(poll => poll.hero) || {} as PollType;
  }
}
export type { PollType as PollType, VotesType}