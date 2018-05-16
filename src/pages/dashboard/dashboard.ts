import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MockProvider } from '../../app/models/provider';
// import { Refresher } from 'ionic-angular';

 
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})

export class DashboardPage {

  public quotesArray: any[] = [];
  public randomQuote: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
      this.quotesArray.push('The more I like myself, the more others will like me.!');
      this.quotesArray.push('I am becoming better with each day.!');
      this.quotesArray.push('I will ask for help if I need it.!');
      this.quotesArray.push('Create a life you love.!');
      this.quotesArray.push(' I am always learning more about who I am and what matters to me.!');
      this.quotesArray.push('The things you take for granted, someone else is praying for.!');
      this.quotesArray.push('I am an intelligent being, but I don’t know everything.!');
      this.quotesArray.push('I am proud to represent the values that matter to me and my community.!');
      this.quotesArray.push('I love myself.!');
      this.quotesArray.push(' I feel lucky to have the opportunities that I do.!');
      this.quotesArray.push('My dreams are achievable.!');
      this.quotesArray.push('Strong people don’t put others down - they lift them up.!');
      this.quotesArray.push('I matter.!');
      this.quotesArray.push('I’ll get through this.!');
      this.quotesArray.push('I am beautiful.!');
      this.quotesArray.push('I deserve to be loved.!');
      this.quotesArray.push('In 5 years it is not going to matter what I wore today. In 15 years the only thing that will remain is what I have learned.!');
      this.quotesArray.push('People can be mean, but it only reflects the kind of person they are.!');
      this.quotesArray.push(' I am happy. Who else am I trying to please?!');
      this.quotesArray.push('Now stop doubting your greatness and start living an awesome life.!');
      this.quotesArray.push('I accept and love the way I look without comparing myself to others.!');
      this.quotesArray.push('I am completely unique and therefore, there are no rules to what I am and am not.!');
      this.quotesArray.push('I give myself permission to do what is best for me.!');
      this.quotesArray.push('I admit that I may not always know what is best for me, so I am open to advice from people who I respect.!');
      this.quotesArray.push('I trust my inner wisdom.!');
      this.quotesArray.push('Just breathe.!');
      this.quotesArray.push('Accept what is, let go of what was, and have faith in what will be.!');
      this.quotesArray.push('I forgive myself for the mistakes I have made.!');
      this.quotesArray.push('The only limits are the ones you set.!');
      this.quotesArray.push('I do not need to share every personal detail with my entire social network.!');
      this.quotesArray.push('In the midst of a meltdown, I breathe through the discomfort and come out the other side.!');
      this.quotesArray.push('My opinion matters.!');
      this.quotesArray.push('I care about what is going on in the world.!');
      this.quotesArray.push('I can say no, and no will mean no.!');
      this.quotesArray.push('I stand up for myself because I matter.!');
      this.quotesArray.push('I love myself unconditionally.!');
      this.quotesArray.push('I see the beauty in stopping to appreciate my blessings.!');
      this.quotesArray.push('I am not in a race, there is plenty of time.!');
      this.quotesArray.push('Reputation is important, but it is not defining.!');
      this.quotesArray.push('My friends are not always right.!');
      this.quotesArray.push('I am not lost - I’m still creating myself.!');
      this.quotesArray.push('When there is a bump in the road, I keep going.!');
      this.quotesArray.push('If someone is trying to bring me down, it means I am above them.!');
      this.quotesArray.push('I have all the tools to be successful.!');
      this.quotesArray.push('Though times may be difficult, they will eventually get better.!');
      this.quotesArray.push('Actually…I can!!');
      this.quotesArray.push('I do not regret yesterday and I am excited for tomorrow.!');
      this.quotesArray.push('This is only the beginning.!');
      this.quotesArray.push('I haven’t even seen what I am capable of yet.!');
      this.quotesArray.push('I do not wish for age, but instead experiences and knowledge.!');
      this.quotesArray.push('I will do today what I will appreciate tomorrow.!');
      this.quotesArray.push('I begin my day by affirming the positive and end my day with gratitude.!');
      this.quotesArray.push('When you get the chance to sit out or dance…dance!!');
      this.quotesArray.push('To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.!');
      this.quotesArray.push('I hope you look back and remember that today is the day you decided to make every moment count.!');
      this.quotesArray.push('Take nothing but pictures. Leave nothing but footprints. Kill nothing but time. Keep nothing but memories.!');
      this.quotesArray.push('You’ve got this.!');
      this.quotesArray.push('Just keep swimming.!');
      this.quotesArray.push('Beautiful. Definition: a person who is reading this.!');
      this.quotesArray.push('Don’t sweat the small stuff.!');
      this.quotesArray.push('What others think of me is their choice. What I think of me is my choice.!');
      this.quotesArray.push('The perfect love is to fall in love with yourself first.!');
      this.quotesArray.push('Sometimes it’s the journey that teaches you a lot about your destination.!');
      this.quotesArray.push('Distance doesn’t separate people. Silence does.!');
      this.quotesArray.push('I’m trying to be better than yesterday.!');
      this.quotesArray.push('If I could love the wrong person this much, think of how much I could love the right one.!');
      this.quotesArray.push('When it rains, look for rainbows. When it’s dark, look for stars.!');
      this.quotesArray.push('Your body doesn’t define who you really are.!');
      this.quotesArray.push('Remember that you were given this life because you’re strong enough to live it.!');
      this.quotesArray.push('When ‘I’ is replaced by ‘we’, even ‘illness’ becomes ‘wellness’. !');
      this.quotesArray.push('Have a cup of positive tea.!');
      this.quotesArray.push('Remember the compliments you received. Forget the insults.!');
      this.quotesArray.push('Put on your positive pants.!');
      this.quotesArray.push('When you become moody, shake your booty.!');
      this.quotesArray.push('Tell that negative committee that meets inside your head to sit down and shut up!!');
      this.quotesArray.push('Your feelings are valid.!');
      this.quotesArray.push('Sometimes it’s okay if the only thing you did today was breathe.!');
      this.quotesArray.push('Don’t forget that ‘healthy’ looks different on everybody.!');
      this.quotesArray.push('I am thankful for all those difficult people in my life, for they have shown me exactly who I do not want to be. !');
      this.quotesArray.push('No one else can play your part.!');
      this.quotesArray.push('Be kind.!');
      this.quotesArray.push('Don’t worry, be happy.!');
      this.quotesArray.push('Don’t worry about those who talk behind your back, they’re behind you for a reason.!');
      this.quotesArray.push('It’s not the future that you’re afraid of…it’s repeating the past that makes you anxious.!');
      this.quotesArray.push('Life has no remote. You have to get up and change it yourself.!');
      this.quotesArray.push('Luck isn’t getting what you want - it’s surviving what you don’t want.!');
      this.quotesArray.push('Be kind to your mind.!');
      this.quotesArray.push('My dark days made me strong - or maybe I already was strong and they made me prove it.!');
      this.quotesArray.push('Remember even your worst days only have 24 hours.!');
      this.quotesArray.push('Nothing can dim the light that shines from within.!');
      this.quotesArray.push('Stop being afraid of what can go wrong and think about what could go right.!');
      this.quotesArray.push('A year changes a lot.!');
      this.quotesArray.push('Don’t let anyone ever dull your sparkle.!');
      this.quotesArray.push('Celebrate yourself!!');
      this.quotesArray.push('Be patient - good things are going to happen.!');
      this.quotesArray.push('Be like a postage stamp - stick to a thing until you get there.!');
      this.quotesArray.push('Difficult roads often lead to beautiful destinations.!');
      this.quotesArray.push('Don’t stumble over something behind you.!');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    this.setInterval();
    this.quotesArray[Math.floor(Math.random() * this.quotesArray.length)];
    console.log('randomQuoteIs...' , this.randomQuote);
    
  }

  gotoHelpNowPage(){
    this.navCtrl.push('HelpNowPage');
  }
  gotoBeeSafePlanPage() {
    this.navCtrl.push('BeeSafePlanPage');
  }
  gotoScrapbookPage() {
    this.navCtrl.push('ScrapbookPage');
  }
  gotoCreateBeesafePlanPage() {
    this.navCtrl.push('CreateBeesafePlanPage');
  }

  
  setInterval(){
    this.randomQuote = this.quotesArray[Math.floor(Math.random() * this.quotesArray.length)]; // this'll get the quote depending on your array length
  }



  }


