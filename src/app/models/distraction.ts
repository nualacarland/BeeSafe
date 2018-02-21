export class Distraction {

  splice(arg0: any, arg1: any): any {
    throw new Error("Method not implemented.");
  }
    constructor(
        public distractionTitle: string,
        public distraction: string,
        public galleryPhoto: number,
        public websiteLink: string,
        public youtubeLink: string
      
    ) {
        

    }
}
