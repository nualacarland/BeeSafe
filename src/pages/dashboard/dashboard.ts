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
  alertEvent: boolean;
  private _oldalertEvent;
 
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
 
      this.quotesArray.push('The more I like myself, the more others will like me.!');
      this.quotesArray.push('I am becoming better with each day.!');
      this.quotesArray.push('I will ask for help if I need it.!');
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
      this.quotesArray.push('You can give yourself permission to be well.!');
      this.quotesArray.push('Throw glitter in today’s face!!');
      this.quotesArray.push('If you get tired, learn to rest - not to quit.!');
      this.quotesArray.push('Every day may not be good, but there is something good in every day.!');
      this.quotesArray.push('A mind is like a parachute - it doesn’t work if it isn’t open.!');
      this.quotesArray.push('Ask yourself if what you’re doing today is getting you closer to where you want to be tomorrow.!');
      this.quotesArray.push('When something goes wrong in your life, just yell “plot twist!” and move on.!');
      this.quotesArray.push('Let it hurt - then let it go.!');
      this.quotesArray.push('I am enough.!');
      this.quotesArray.push('It is enough to do my best.!');
      this.quotesArray.push('Kindness is free - sprinkle that stuff everywhere!!');
      this.quotesArray.push('Don’t cry because its over - smile because it happened.!');
      this.quotesArray.push('The more difficulties one has to encounter, within and without, the more significant and the higher the inspiration his life will be.!');
      this.quotesArray.push('"You miss 100% of the shots you dont take."');
      this.quotesArray.push('If you do not hope, you will not find what is beyond your hopes.!');
      this.quotesArray.push('Without inspiration, the best powers of the mind remain dormant. There is a fuel in us which needs to be ignited with sparks.!');
      this.quotesArray.push('Work spares us from three evils: boredom, vice, and need.!');
      this.quotesArray.push('Mans best successes come after the disappointments.!');
      this.quotesArray.push('Do not wait to strike till the iron is hot. Make it hot by striking.!');
      this.quotesArray.push('Knowing is not enough; we must apply. Willing is not enough; we must do.!');
      this.quotesArray.push('Believe you can and youre halfway there.!');
      this.quotesArray.push('Change your thoughts and you change your world.!');
      this.quotesArray.push('Dont judge each day by the harvest you reap but by the seeds that you plant.!');
      this.quotesArray.push('Great hopes make great men.!');
      this.quotesArray.push('Hope for the best. Pray in case of the worst.!');
      this.quotesArray.push('It is always the simple that produces the marvellous.!');
      this.quotesArray.push('It is during our darkest moments that we must focus to see the light.!');
      this.quotesArray.push('Nothing is impossible - the word itself says, "Im possible!"!');
      this.quotesArray.push('Put your heart, mind, and soul into even your smallest acts. This is the secret of success.!');
      this.quotesArray.push('There are two ways of spreading light: to be the candle or to be the mirror that reflects it.!');
      this.quotesArray.push('We cant help everyone, but everyone can help someone.!');
      this.quotesArray.push('Whoever is happy will make others happy too.!');
      this.quotesArray.push('Your present circumstances dont determine where you can go; they merely determine where you start.!');
      this.quotesArray.push('Life isn’t about finding yourself - it’s about creating yourself.!');
      this.quotesArray.push('The reason people find it so hard to be happy is that they always see the past better than it was, the present worse than it is, and the future less resolved than it will be.!');
      this.quotesArray.push('A thousand mile journey begins with a single step.!');
      this.quotesArray.push('Be more concerned with your character than your reputation, because your character is what you really are, while your reputation is merely what others think you are.!');
      this.quotesArray.push('Breathe. It’s just a bad day. Not a bad life.!');
      this.quotesArray.push('People were created to be loved. Things were created to be used. The reason the world is in chaos, is because things are being loved, and people are being used.!');
      this.quotesArray.push('Happiness always sneaks in a door you did not think was open.!');
      this.quotesArray.push('Being happy doesn’t mean that everything is perfect. It means that you’ve decided to look beyond the imperfections.!');
      this.quotesArray.push('Self-worth comes from one thing - thinking that you are worthy.!');
      this.quotesArray.push('"If you’re going through hell, keep going." —Winston Churchill!');
      this.quotesArray.push('When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one which has opened for us.!');
      this.quotesArray.push('"You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face." —Eleanor Roosevelt!');
      this.quotesArray.push('The harder you fall, the higher you bounce.!');
      this.quotesArray.push('The best way to predict the future is to create it.!');
      this.quotesArray.push('Instead of thinking what could go wrong, think of what could go right.!');
      this.quotesArray.push('May the bridges you burned light your way.!');
      this.quotesArray.push('The longer you wait for the future, the shorter it will be.!');
      this.quotesArray.push('Plant your own garden, decorate your own soul.!');
      this.quotesArray.push('Today I will do what others won’t, so tomorrow I can accomplish what others can’t.!');
      this.quotesArray.push('Don’t wait for something big to occur. Start where you are with what you have – that will always lead you into something greater.!');
      this.quotesArray.push('Don’t let life discourage you; everyone who has got to where he is had to begin where he was.!');
      this.quotesArray.push('Take the risk to be happy.!');
      this.quotesArray.push('Keep away from people who try to belittle your ambitions.!');
      this.quotesArray.push('You never know how strong you are until being strong is the only choice you have.!');
      this.quotesArray.push('The happiness of your life depends upon the quality of your thoughts.!');
      this.quotesArray.push('It is not what they take away from you that counts - it’s what you do with what you have left.!');
      this.quotesArray.push('The difference between ‘try’ and ‘triumph’ is a little "umph."!');
      this.quotesArray.push('Instead of just following your dreams, chase them as if they will never return.!');
      this.quotesArray.push('365 new days. 365 new chances.!');
      this.quotesArray.push('How do we change the world? One random act of kindness at a time.!');
      this.quotesArray.push('Dream big, work hard, stay focused, and surround yourself with good people.!');
      this.quotesArray.push('We all smile in the same language!');
      this.quotesArray.push('Fall in love with taking care of your body.!');
      this.quotesArray.push('You’re beautiful, and I hope one day you learn to believe it.!');
      this.quotesArray.push('Spread love not hate.!');
      this.quotesArray.push('Try to be a rainbow in someone else’s cloud.!');
      this.quotesArray.push('You never realise how strong you are, until being strong is the only choice you have.!');
      this.quotesArray.push('You are never alone.!');
      this.quotesArray.push('Don’t believe everything you think.!');
      this.quotesArray.push('If today you are a little better than you were yesterday, that is enough.!');
      this.quotesArray.push('Don’t believe the things you tell yourself when you are sad and alone.!');
      this.quotesArray.push('I am going to get better. I don’t know how on earth I will, but I won’t live like this forever.!');
      this.quotesArray.push('“Where are you moving?” I said, “on to better things”.!');
      this.quotesArray.push('No one is you. And that is your superpower.!');
      this.quotesArray.push('You’ll be fine. Feeling unsure and lost is part of your path. Don’t avoid it. Breathe. You’ll be okay even if you don’t feel it at the time.!');
      this.quotesArray.push('Always wear your invisible crown.!');
      this.quotesArray.push('You will be exactly as happy as you decide to be.!');
      this.quotesArray.push('We tend to forget that baby steps still move us forward.!');
      this.quotesArray.push('Everything is going to be okay in the end. If it’s not okay, it’s not the end.!');
      this.quotesArray.push('Wake up. Smile. Tell yourself, “Today is my day!”!');
      this.quotesArray.push('Believe with your eyes, not with your ears.!');
      this.quotesArray.push('If you have good thoughts they will shine out of your face like sunbeams and you will always be happy.!');
      this.quotesArray.push('You can’t rush something you want to last forever.!');
      this.quotesArray.push('Control your emotions or they will control you.!');
      this.quotesArray.push('Sometimes you just have to start from scratch and let go of the baggage weighing you down. Trust your journey. Trust your gut.!');
      this.quotesArray.push('You made it through another day which means you are one more day stronger than yesterday.!');
      this.quotesArray.push('Mental illness is nothing to be ashamed of. Neither is talking about it.!');
      this.quotesArray.push('Be bold enough to use your voice. Brave enough to listen to your heart. And strong enough to live the life you have always imagined.!');
      this.quotesArray.push('Never be ashamed of what you feel. You have the right to feel what you want.!');
      this.quotesArray.push('You are worth more than your darkness.!');
      this.quotesArray.push('You’re a diamond dear. They can’t break you.!');
      this.quotesArray.push('Relapse does not erase your successes.!');
      this.quotesArray.push('ou have already survived 100% of your worst days.!');
      this.quotesArray.push('You can’t put a deadline on recovery.!');
      this.quotesArray.push('Before Alice got to wonderland she had to fall.!');
      this.quotesArray.push('One small crack does not mean that you were broken, it means you were put to the test and you didn’t fall apart.!');
      this.quotesArray.push('Happiness looks good on you.!');
      this.quotesArray.push('It’s going to be hard, but hard is not impossible.!');
      this.quotesArray.push('Don’t forget that you’re human. It’s okay to have a melt down. Just don’t unpack and live there. Cry it out, and focus on where you’re headed.!');
      this.quotesArray.push('Worrying is like walking around with an umbrella waiting for it to rain.!');
      this.quotesArray.push('Dance like no-one is watching, cause they’re not. They’re checking their phones.!');
      this.quotesArray.push('Happiness can be found even in the darkest of times if one only remembers to turn on the light. – Dumbledore!');
      this.quotesArray.push('Broken crayons still colour.!');
      this.quotesArray.push('Accept your body the way it is. You’re unique and beautiful. You don’t need to be a certain way. Be yourself.!');
      this.quotesArray.push('Let’s try not to figure out everything at once.!');
      this.quotesArray.push('And if today all you did was hold yourself together, I’m proud of you.!');
      this.quotesArray.push('Never lower your standards for anyone.!');
      this.quotesArray.push('Be a fruit loop in a world of Cheerios!!');
      this.quotesArray.push('5X5 rule… If it’s not going to matter in 5 years, don’t spend more than 5 minutes being upset about it.!');
      this.quotesArray.push('Do you stop believing in the moon just because the sun comes up?!');
      this.quotesArray.push('Don’t be sad, because "sad" backwards is "das" and das not good!');
      this.quotesArray.push('Confidence level: selfie with no filter.!');
      this.quotesArray.push('Your speed doesn’t matter. Forward is forward.!');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    this.setInterval();
    this.quotesArray[Math.floor(Math.random() * this.quotesArray.length)];
    console.log('randomQuoteIs...' , this.randomQuote);

    this.storage.get('alertEvent').then((value) => {
      this._oldalertEvent = value;
      console.log('what is the old affirmation?', value);
      console.log('what is the old affirmation', this._oldalertEvent);

      
      })


   

    
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


