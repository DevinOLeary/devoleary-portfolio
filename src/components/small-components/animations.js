import {TweenLite, TimelineLite} from 'gsap';

let tl = new TimelineLite();

export default {
  fadeInDown(target){
    return TweenLite.fromTo(target, 1, {opacity:0, y:-20}, {opacity: 1, y:0});
  },
  fadeIn(target){
    return TweenLite.fromTo(target,.7, {opacity: 0}, {opacity:1});
  },
  fadeOut(target){
    return tl.to(target, .4, {opacity:0}).to(target, .4, {height: '0px', opacity: 0});
  },
  titleFadeIn(target, delay){
    return TweenLite.fromTo(target, 1.5, {opacity: 0, y: 0},{opacity: 1, y: 40, delay: delay});
  },
  firstBoxDrawAnimation(target1, target2){
    return tl.fromTo(target1, 1, {height:0}, {height:238, ease:"Power1.easeIn", delay: .8})
      .fromTo(target2, 3, {width:0}, {width:'150%', ease: "Power1.easeOut"});
  },
  secondBoxDrawAnimation(target){
    return tl.fromTo(target, 4, {width:0}, {width:'150%', ease:"Power1.easeInOut" , delay: .8});
  }
};
