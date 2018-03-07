export class Distraction {

  push(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  splice: any;
    constructor(
        public distractionTitle: string,
        public distraction: string,
        public emojis: string,
        public galleryPhoto: number,
        public websiteLink: string,
        public youtubeLink: string
      
    ) {
        

    }
}
