import {TweenLite, TimelineLite} from 'gsap';

export default {
  fadeIn(target){
    return TweenLite.fromTo(target, 1, {opacity:0, y:-20}, {opacity: 1, y:0
  });
  },
  fadeOut(target){
    let tl = new TimelineLite();
    return tl.to(target, .4, {opacity:0}).to(target, .4, {height: '0px', opacity: 0
  });
  }
};
