import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

export class Memory {

  splice(arg0: any, arg1: any): any {
    throw new Error("Method not implemented.");
  }
    constructor(
        public scrapbookTitle: string,
        public dateAdded: number,
        public memoryInfo: string,
        public galleryImg: string,
        public youtubeLink: string
      
    ) {
        

    }
}

