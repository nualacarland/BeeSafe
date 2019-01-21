export class Distraction {

  baseImage(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  push(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  splice: any;
    constructor(
        public distractionTitle: string,
        public distraction: string,
        public emojis: string,
        public galleryPhoto: string = '',
        public websiteLink: string = '',
        public youtubeLink: string = ''
      
    ) {
        

    }
}
