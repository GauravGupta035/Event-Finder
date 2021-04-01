const hero = document.querySelector('.hero');
const scroller = hero.querySelector('.scroller');
const nextBtn = hero.querySelector('.btn.next');
const prevBtn = hero.querySelector('.btn.prev');
const itemWidth = hero.querySelector('.item').clientWidth;

nextBtn.addEventListener('click', scrollToNextItem);
prevBtn.addEventListener('click', scrollToPrevItem);

function scrollToNextItem() {
    if (scroller.scrollLeft < (scroller.scrollWidth - itemWidth))
        scroller.scrollBy({left: itemWidth, top: 0, behavior:'smooth'});
    else
        scroller.scrollTo({left: 0, top: 0, behavior:'smooth'});
}

function scrollToPrevItem() {
    if (scroller.scrollLeft != 0)
        scroller.scrollBy({left: -itemWidth, top: 0, behavior:'smooth'});
    else
        scroller.scrollTo({left: scroller.scrollWidth, top: 0, behavior:'smooth'});
}