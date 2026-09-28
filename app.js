const resources = [
  {name:'Inner Compass Initiative: Learn',type:'withdrawal',label:'Withdrawal & informed choice',description:'Articles on psychiatric drugs, withdrawal, and questions to consider before making changes.',url:'https://www.theinnercompass.org/learn',source:'Inner Compass Initiative'},
  {name:'Companion Guide: Prepare',type:'withdrawal',label:'Withdrawal & informed choice',description:'A step-by-step collection of considerations for people exploring whether and when to taper.',url:'https://www.theinnercompass.org/prepare',source:'Inner Compass Initiative'},
  {name:'FDA: Learn About Your Medicines',type:'evidence',label:'Government information',description:'A guide to finding medication guides and FDA-approved patient information for particular medicines.',url:'https://www.fda.gov/patients/learn-about-your-medicines',source:'U.S. Food and Drug Administration'},
  {name:'Inner Compass Exchange',type:'peer',label:'Peer connection',description:'An online peer community for discussion, learning, and mutual support.',url:'https://exchange.theinnercompass.org/',source:'Inner Compass Initiative'},
  {name:'Directory of Peer Respites',type:'peer',label:'Community support',description:'A directory of voluntary, peer-operated respite programs and their contact information.',url:'https://power2u.org/directory-of-peer-respites/',source:'National Empowerment Center'},
  {name:'Hearing Voices USA Groups',type:'peer',label:'Peer connection',description:'A listing of peer groups for people who hear voices or have related experiences.',url:'https://www.hearingvoicesusa.org/hvn-usa-groups-list',source:'Hearing Voices USA'},
  {name:'FDA MedWatch',type:'accountability',label:'Safety reporting',description:'Report suspected problems with medicines and other medical products to the FDA.',url:'https://www.fda.gov/safety/medwatch-fda-safety-information-and-adverse-event-reporting-program',source:'U.S. Food and Drug Administration'}
];
const grid = document.querySelector('#resource-grid');
const count = document.querySelector('#results-count');
const query = document.querySelector('#resource-search');
let selected = 'all';
function renderResources(){
  const term = query.value.trim().toLocaleLowerCase();
  const items = resources.filter(item => (selected === 'all' || item.type === selected) && `${item.name} ${item.label} ${item.description} ${item.source}`.toLocaleLowerCase().includes(term));
  grid.replaceChildren();
  count.textContent = `${items.length} ${items.length === 1 ? 'resource' : 'resources'} shown`;
  if (!items.length){const empty=document.createElement('p');empty.className='empty-state';empty.textContent='No resources match this search. Try a different term or topic.';grid.append(empty);return;}
  for(const item of items){
    const article=document.createElement('article');article.className='resource-card';
    const tag=document.createElement('span');tag.className='tag';tag.textContent=item.label;
    const title=document.createElement('h3');title.textContent=item.name;
    const desc=document.createElement('p');desc.textContent=item.description;
    const link=document.createElement('a');link.href=item.url;link.target='_blank';link.rel='noopener noreferrer';link.textContent=`Visit ${item.source} ↗`;
    article.append(tag,title,desc,link);grid.append(article);
  }
}
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
  selected=button.dataset.filter;
  document.querySelectorAll('.filter').forEach(el=>{const active=el===button;el.classList.toggle('active',active);el.setAttribute('aria-pressed',String(active));});
  renderResources();
}));
query.addEventListener('input',renderResources);
renderResources();
const toggle=document.querySelector('#menu-toggle');const nav=document.querySelector('#primary-nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
