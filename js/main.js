let body = document.body;

let container = create('div')('container')(body)({});

let header = create('div')('header')(container)({});

let srishti = create('div')('srishti')(header)({});
srishti.innerText = 'Srishti';

let sawla = create('div')('sawla')(header)({});
sawla.innerText = 'Sawla';

optBar = create('div')('optBar')(container)({});

let options = ['about','courses','contact'];

options.map(x=>{
    y = create('a')('options')(optBar)({});
    y.innerText = x.toUpperCase(); 
    y.href = '#'+ x;
});




//-----------------------------------//

let introTitle = create('div')('title')(container)({});
introTitle.innerText = content.title;
introTitle.id ='about';

let intro = create('div')('intro')(container)({});
let introImage = create('div')('introImage')(intro)({});
let introText = create('div')('introText')(intro)({});

introText.innerHTML = content.intro;

let outro = create('div')('outro')(container)({});

let outroImage = create('div')('outroImage')(outro)({});
let outroText = create('div')('outroText')(outro)({});

outroText.innerHTML = content.outro;


//----------------------------------------------//

let courseTitle = create('div')('title')(container)({});
courseTitle.innerText = content.course;
courseTitle.id = 'courses';

let cintro = create('div')('intro')(container)({});
let cintroImage = create('div')('cintroImage')(cintro)({});
let cintroText = create('div')('cintroText')(cintro)({});

cintroText.innerHTML = content.cintro;

let cstage = create('div')('outro')(container)({});

let cstageImage = create('div')('cstageImage')(cstage)({});
let cstageText = create('div')('cstageText')(cstage)({});

cstageText.innerHTML = content.cstage;

let ctrick = create('div')('intro')(container)({});

let ctrickImage = create('div')('ctrickImage')(ctrick)({});
let ctrickText = create('div')('ctrickText')(ctrick)({});

ctrickText.innerHTML = content.ctrick;

let cprestige = create('div')('outro')(container)({});

let cprestigeImage = create('div')('cprestigeImage')(cprestige)({});
let cprestigeText = create('div')('cprestigeText')(cprestige)({});

cprestigeText.innerHTML = content.cprestige;

let csyllabus = create('div')('intro')(container)({});

// let csyllabusImage = create('div')('csyllabusImage')(csyllabus)({});
let csyllabusText = create('div')('csyllabusText')(csyllabus)({});

csyllabusText.innerHTML = content.csyllabus;

let cpricing = create('div')('intro')(container)({});

let cpricingImage = create('div')('cpricingImage')(cpricing)({});
let cpricingText = create('div')('cpricingText')(cpricing)({});

cpricingText.innerHTML = content.cpricing;

let cschedule = create('div')('intro')(container)({});

let cscheduleImage = create('div')('cscheduleImage')(cschedule)({});
let cscheduleText = create('div')('cscheduleText')(cschedule)({});

cscheduleText.innerHTML = content.cschedule;

let contactTitle = create('div')('title')(container)({});
contactTitle.innerText = 'Contact';
contactTitle.id = 'contact';

let cenrollment = create('div')('intro')(container)({});

let cenrollmentImage = create('div')('cenrollmentImage')(cenrollment)({});
let cenrollmentText = create('div')('cenrollmentText')(cenrollment)({});

cenrollmentText.innerHTML = content.cenrollment;

let ccontact = create('div')('intro')(container)({});

let ccontactImage = create('div')('ccontactImage')(ccontact)({});
let ccontactText = create('div')('ccontactText')(ccontact)({});

ccontactText.innerHTML = content.ccontact;

// let stackTitle = create('div')('title')(container)({});
// stackTitle.innerText = 'Tech Stack';