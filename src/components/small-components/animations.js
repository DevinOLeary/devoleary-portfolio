import {TweenLite, TimelineLite} from 'gsap';

export default {
  fadeIn(target, cb){
    return TweenLite.fromTo(target, 2, {height: '0px', opacity:0, y:-20}, {height: 'auto', opacity: 1, y:0, delay: 1, onComplete(){
      cb();
    }
  });
  },
  fadeOut(target, cb){
    let tl = new TimelineLite();
    return tl.to(target, .4, {opacity:0}).to(target, .4, {height: '0px', opacity: 0,
    onComplete(){
      cb();
    }
  });
  }
};
