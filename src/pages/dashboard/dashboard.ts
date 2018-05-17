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
      this.quotesArray.push('Take a small step every day.!');
      this.quotesArray.push('Recovery is scary, but so is remaining exactly the same.!');
      this.quotesArray.push('When life shuts a door, open it again. It’s a door. That’s how they work.!');
      this.quotesArray.push('Don’t compare your life to others. There is no comparison between the sun and the moon. They shine when it’s their time.!');
      this.quotesArray.push('Focus on the good.!');
      this.quotesArray.push('Shoot for the moon darling.!');
      this.quotesArray.push('When nothing goes right…go left!!');
      this.quotesArray.push('Keep your head up. You are so much better than you believe. You can do this. I promise.!');
      this.quotesArray.push('Your speed doesn’t matter. Forward is forward.!');
      this.quotesArray.push('You beautiful, beautiful thing you.!');
      this.quotesArray.push('Let it hurt. Let it heal. Let it go.!');
      this.quotesArray.push('In school you’re taught a lesson and then given a test. In life you’re given a test that teaches you a lesson.!');
      this.quotesArray.push('If you can read this, it means you made it through another day.!');
      this.quotesArray.push('Good vibes.!');
      this.quotesArray.push('Be known for your kindness and grace.!');
      this.quotesArray.push('No rain, no rainbows.!');
      this.quotesArray.push('Be someone’s sunshine when their skies are grey.!');
      this.quotesArray.push('Always end the day with a positive thought. No matter how hard things were, tomorrow’s a fresh opportunity to make it better.!');
      this.quotesArray.push('People who wonder whether the glass is half empty or half full are missing the point. The glass is refillable.!');
      this.quotesArray.push('The past is in your head. The future is in your hands.!');
      this.quotesArray.push('When someone told me I lived in a fantasy land, I nearly fell of my unicorn.!');
      this.quotesArray.push('Hey, you! Don’t give up, okay.!');
      this.quotesArray.push('It gets better.!');
      this.quotesArray.push('HOPE – Hold On, Pain Ends.!');
      this.quotesArray.push('Sometimes you have to get knocked down lower than you have ever been to stand back up taller than you ever were.!');
      this.quotesArray.push('You’re even more amazing than you wish you were.!');
      this.quotesArray.push('The most important thing is never to stop questioning.!');
      this.quotesArray.push('"To learn to succeed, you must first learn to fail." —Michael Jordan!');
      this.quotesArray.push('The sooner you fall behind, the more time youll have to catch up.!');
      this.quotesArray.push('When everything is coming your way, youre in the wrong lane.!');
      this.quotesArray.push('Life is not measured by the number of breaths we take, but by the number of moments that take our breath away.!');
      this.quotesArray.push('Look up for inspiration, look down for concentration - but don’t look side to side for information.!');
      this.quotesArray.push('Opportunity is always knocking. The problem is that most people have the self-doubt station in their head turned up way too loud to hear it.!');
      this.quotesArray.push('Opportunity dances with those who are already on the dance floor.!');
      this.quotesArray.push('People often say that motivation doesnt last. Well, neither does bathing. Thats why we recommend it daily.!');
      this.quotesArray.push('Life is not about how fast you run, or how high you climb, but about how well you bounce back.!');
      this.quotesArray.push('Remember, today is the tomorrow you worried about yesterday.!');
      this.quotesArray.push('"Try not to become a man of success, but a man of value." —Albert Einstein!');
      this.quotesArray.push('To find what you seek in life, leave no rock unturned.!');
      this.quotesArray.push('Every artist was first an amateur.!');
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
      this.quotesArray.push('Dance in the rain.!');
      this.quotesArray.push('When you don’t like something, change it. If you can’t change it, change the way you think about it.!');
      this.quotesArray.push('Sometimes it’s okay. Sometimes it’s not.!');
      this.quotesArray.push('Crying isn’t weak.!');
      this.quotesArray.push('Give yourself credit for the days you made it when you thought you couldn’t.!');
      this.quotesArray.push('If you’re reading this then I hope something good happens to you today.!');
      this.quotesArray.push('A million likes will never be enough if you don’t like yourself.!');
      this.quotesArray.push('Recovery isn’t easy, but it is worth it.!');
      this.quotesArray.push('You are not a failure.!');
      this.quotesArray.push('Storms don’t last forever.!');
      this.quotesArray.push('It’s okay not to be okay.!');
      this.quotesArray.push('You are beautiful no matter what they say.!');
      this.quotesArray.push('Resting when you are tired isn’t laziness - it is self care.!');
      this.quotesArray.push('It’s a beautiful day - don’t let it get away.!');
      this.quotesArray.push('Be proud of yourself for how hard you’re trying.!');
      this.quotesArray.push('If at first you don’t succeed, dust yourself off and try again.!');
      this.quotesArray.push('All you need is love. Love is all you need.!');
      this.quotesArray.push('You are greater than your bad days.!');
      this.quotesArray.push('There is no shame in taking medication for mental illness. Whatever works for you.!');
      this.quotesArray.push('Stop the stigma.!');
      this.quotesArray.push('I am really glad you made it today.!');
      this.quotesArray.push('I didn’t come this far to only come this far.!');
      this.quotesArray.push('Crying is okay - let it out.!');
      this.quotesArray.push('You are not a burden.!');
      this.quotesArray.push('Make a wish, take a chance, make a change.!');
      this.quotesArray.push('What’s the most important thing you have done this year? SURVIVED.!');
      this.quotesArray.push('Health is not just about what you are eating - it is also about what you are thinking and saying.!');
      this.quotesArray.push('Don’t stop believing.!');
      this.quotesArray.push('Slow progress is still progress.!');
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


