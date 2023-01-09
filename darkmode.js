const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const div = document.querySelector('div');
const h1 = document.querySelector('h1');
const id1 = document.querySelector('#id1');
const id2 = document.querySelector('#id2');
const id3 = document.querySelector('#id3');
const id4 = document.querySelector('#id4');
const id5 = document.querySelector('#id5');
const id6 = document.querySelector('#id6');
const id7 = document.querySelector('#id7');
const id8 = document.querySelector('#id8');
const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');

const service1 = document.querySelector('#service1');
const service2 = document.querySelector('#service2');
const service3 = document.querySelector('#service3');

const team = document.querySelector('#team');
const what_clients = document.querySelector('#what_clients');
const contact_for = document.querySelector('#contact_for');
const devil = document.querySelector('#devil');
const astrate = document.querySelector('#astrate');


const ul1 = document.querySelector('#ul1');
const ul2 = document.querySelector('#ul2');
const ul3 = document.querySelector('#ul3');
const ul4 = document.querySelector('#ul4');
const ul5 = document.querySelector('#ul5');
const ul6 = document.querySelector('#ul6');
const ul7 = document.querySelector('#ul7');
const ul8 = document.querySelector('#ul8');
const ul9 = document.querySelector('#ul9');


const price1 = document.querySelector('#price1');
const price2 = document.querySelector('#price2');
const price3 = document.querySelector('#price3');


const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
const div3 = document.querySelector('#div3');



toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){


        body.style.background = 'white';
        div.style.color = '#282634';
        id1.style.color = '#282634';
        id2.style.color = '#282634';
        id3.style.color = '#282634';
        id4.style.color = '#282634';
        id5.style.color = '#282634';
        id6.style.color = '#282634';
        id7.style.color = '#282634';
        id8.style.color = '#282634';

        card1.style.background = 'white';
        card2.style.background = 'white';
        card3.style.background = 'white';

        ul1.style.background = 'white';
        ul2.style.background = 'white';
        ul3.style.background = 'white';

        
        ul4.style.background = 'white';
        ul5.style.background = 'white';
        ul6.style.background = 'white';

        
        ul7.style.background = 'white';
        ul8.style.background = 'white';
        ul9.style.background = 'white';


        team.style.color = '#3A3644';
        what_clients.style.color = '#3A3644';
        contact_for.style.color = '#3A3644';



        ul1.style.color = '#3A3644';
        ul2.style.color = '#3A3644';
        ul3.style.color = '#3A3644';

        ul4.style.color = '#3A3644';
        ul5.style.color = '#3A3644';
        ul6.style.color = '#3A3644';

        ul7.style.color = '#3A3644';
        ul8.style.color = '#3A3644';
        ul9.style.color = '#3A3644';

        div1.style.color = '#282634';
        div2.style.color = '#282634';
        div3.style.color = '#282634';

        price1.style.color = '#282634';
        price2.style.color = '#282634';
        price3.style.color = '#282634';

        body.style.transition = '1s';
        



    }else{
        body.style.background = '#282634';
        div.style.color = 'grey';
        id1.style.color = '#DADADA';
        id2.style.color = '#DADADA';
        id3.style.color = '#DADADA';
        id4.style.color = '#DADADA';
        id5.style.color = '#DADADA';
        id6.style.color = '#DADADA';
        id7.style.color = '#DADADA';
        id8.style.color = '#DADADA';

        card1.style.background = '#2E2B37';
        card2.style.background = '#2E2B37';
        card3.style.background = '#2E2B37';

        ul1.style.background = '#3A3644';
        ul2.style.background = '#3A3644';
        ul3.style.background = '#3A3644';

        
        ul4.style.background = '#3A3644';
        ul5.style.background = '#3A3644';
        ul6.style.background = '#3A3644';

        
        ul7.style.background = '#3A3644';
        ul8.style.background = '#3A3644';
        ul9.style.background = '#3A3644';
        
        

        ul1.style.color = '#E4E4E4';
        ul2.style.color = '#E4E4E4';
        ul3.style.color = '#E4E4E4';

        ul4.style.color = '#E4E4E4';
        ul5.style.color = '#E4E4E4';
        ul6.style.color = '#E4E4E4';

        ul7.style.color = '#E4E4E4';
        ul8.style.color = '#E4E4E4';
        ul9.style.color = '#E4E4E4';

        div1.style.color = '#D0D0D0';
        div2.style.color = '#D0D0D0';
        div3.style.color = '#D0D0D0';

        price1.style.color = '#D0D0D0';
        price2.style.color = '#D0D0D0';
        price3.style.color = '#D0D0D0';


        team.style.color = '#D0D0D0';
        what_clients.style.color = '#D0D0D0';
        contact_for.style.color = '#D0D0D0';




        card1.style.transition = '1s';
        card2.style.transition = '1s';
        card3.style.transition = '1s';
        div1.style.transition = '1s';
        div2.style.transition = '1s';
        div3.style.transition = '1s';

        ul1.style.transition = '1s';
        ul2.style.transition = '1s';
        ul3.style.transition = '1s';

        ul4.style.transition = '1s';
        ul5.style.transition = '1s';
        ul6.style.transition = '1s';

        team.style.transition = '1s';


        ul7.style.transition = '1s';
        ul8.style.transition = '1s';
        ul9.style.transition = '1s';
        body.style.transition = '1s';


    }
});