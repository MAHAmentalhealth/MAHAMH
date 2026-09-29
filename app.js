const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

// A focused selection from the ICI–MAHA field guide plan. A listing is not a partnership claim.
const entries = [
  {name:'Inner Compass Initiative',category:'informed-choice',label:'Informed choice & withdrawal',description:'Independent education on psychiatric drugs, diagnoses, withdrawal, and informed decision-making.',relevance:'ICI provides the subject-matter foundation for this guide and its Companion Guide.',url:'https://www.theinnercompass.org/'},
  {name:'Antidepressant Coalition for Education',category:'informed-choice',label:'Antidepressant safety',description:'Education, advocacy, and peer support focused on antidepressant risks, discontinuation, and informed consent.',relevance:'Adds a focused resource for questions about antidepressant use and withdrawal.',url:'https://antidepressantinfo.org/'},
  {name:'Benzodiazepine Information Coalition',category:'informed-choice',label:'Benzodiazepine safety',description:'Public education and advocacy on prescribed benzodiazepines, adverse effects, dependence, and informed consent.',relevance:'Addresses a distinct medication-safety issue that calls for careful, specific information.',url:'https://www.benzoinfo.com/'},
  {name:'Akathisia Alliance for Education and Research',category:'informed-choice',label:'Adverse effects',description:'Education and research advocacy concerning akathisia, a potentially severe medication-associated condition.',relevance:'Helps make a frequently misunderstood adverse effect more visible.',url:'https://akathisiaalliance.org/'},
  {name:'Inner Compass Exchange',category:'peer-support',label:'ICI peer community',description:'ICI’s online community for peer connection, shared experience, discussion, and learning.',relevance:'Provides a direct route from information to people who have navigated similar questions.',url:'https://exchange.theinnercompass.org/'},
  {name:'Surviving Antidepressants',category:'peer-support',label:'Withdrawal peer forum',description:'A volunteer peer forum documenting psychiatric drug withdrawal experiences and explaining reductions of no more than 10% of the current dose over about a month.',relevance:'Adds a withdrawal-specific peer community with an explicit current-dose, progressively smaller reduction approach; forum posts are personal experiences, not individual medical guidance.',url:'https://www.survivingantidepressants.org/'},
  {name:'Wildflower Alliance / Afiya Peer Respite',category:'peer-support',label:'Peer respite',description:'Afiya is a voluntary, peer-run respite in Western Massachusetts operated by Wildflower Alliance.',relevance:'Shows a concrete community-based option for people experiencing emotional distress.',url:'https://wildfloweralliance.org/afiya/'},
  {name:'National Empowerment Center',category:'peer-support',label:'Peer support & respite',description:'Peer-led education and resources, including a national directory of peer respite programs.',relevance:'Helps visitors find peer-run alternatives and learn how they work.',url:'https://power2u.org/directory-of-peer-respites/'},
  {name:'Project LETS',category:'peer-support',label:'Peer-led support',description:'Community and campus peer-support programs, including peer mental health advocates and crisis response work.',relevance:'Broadens the support path toward consent-centered, peer-led models.',url:'https://projectlets.org/'},
  {name:'Hearing Voices Network USA',category:'peer-support',label:'Hearing Voices groups',description:'Supports groups where people can explore voice-hearing and other unusual experiences with peers, including room for different ways of understanding them.',relevance:'The support page already directs visitors to these groups; the directory explains the network behind them.',url:'https://www.hearingvoicesusa.org/'},
  {name:'Intentional Peer Support',category:'peer-support',label:'Peer-support practice',description:'A framework and training organization for mutual relationships, dialogue, and peer support attentive to power and social change.',relevance:'Shows how peer support can be practiced and taught, beyond a single group or setting.',url:'https://intentionalpeersupport.org/'},
  {name:'Inner Compass Research Institute (ICRI)',category:'research',label:'Research & policy',description:'ICI’s research institute brings clinicians, researchers, and academics together to examine mental health evidence, informed consent, and potential treatment harms.',relevance:'Connects rigorous inquiry with layperson expertise and the policy questions at the heart of this guide.',url:'https://www.theinnercompass.org/researchinstitute'},
  {name:'RxISK',category:'research',label:'Drug safety & reporting',description:'Independent prescription-drug safety information and a way for people to report possible adverse effects.',relevance:'Connects lived reports of medication effects with questions about evidence and accountability.',url:'https://rxisk.org/'},
  {name:'Metabolic Mind',category:'approaches',label:'Metabolic research',description:'Education and research resources exploring metabolic approaches to mental health.',relevance:'Represents a developing area of inquiry that deserves careful study and clear limits.',url:'https://www.metabolicmind.org/'},
  {name:'Institute for Dialogic Practice',category:'approaches',label:'Open Dialogue',description:'Training and education in Open Dialogue and network-based approaches to mental health care.',relevance:'Highlights a relational model involving the person and their social network.',url:'https://www.dialogicpractice.net/'},
  {name:'ISPS-US',category:'approaches',label:'Psychological & social approaches',description:'A membership organization promoting psychological and social approaches to experiences often called psychosis.',relevance:'Brings lived experience, families, clinicians, and researchers into discussion of more choices in care.',url:'https://isps-us.org/'},
  {name:'SocialRx',category:'approaches',label:'Social prescribing',description:'Connects people with community-based activities involving arts, culture, nature, and movement.',relevance:'Offers a practical model for addressing isolation and connection beyond clinical care.',url:'https://www.socialrx.com/'},
  {name:'TownHome Health',category:'approaches',label:'Crisis alternative',description:'Developing a home-like, technology-supported alternative for urgent mental health crises.',relevance:'Illustrates the question of how crisis care might be less institutional and more voluntary.',url:'https://www.townhomehealth.com/'},
  {name:'National Coalition for Mental Health Recovery',category:'rights',label:'Peer voice & policy',description:'A coalition advocating for the voice, rights, and choices of people with mental health diagnoses in policy and services.',relevance:'Connects lived experience and self-determination to national policy discussions.',url:'https://www.ncmhr.org/'},
  {name:'National Association for Rights Protection and Advocacy',category:'rights',label:'Rights & advocacy',description:'A network bringing together people with psychiatric experience, advocates, mental health workers, and legal professionals around rights and choice.',relevance:'Centers civil rights and freedom from coercion in mental health systems.',url:'https://www.narpa.org/'}
];

const list = document.querySelector('#directory-list');
if (list) {
  const search = document.querySelector('#directory-search');
  const count = document.querySelector('#result-count');
  let active = 'all';
  function render() {
    const term = search.value.trim().toLowerCase();
    const matches = entries.filter(e => (active === 'all' || e.category === active) &&
      `${e.name} ${e.label} ${e.description} ${e.relevance}`.toLowerCase().includes(term));
    list.replaceChildren();
    count.textContent = `${matches.length} ${matches.length === 1 ? 'entry' : 'entries'} shown`;
    if (!matches.length) {
      const p = document.createElement('p');
      p.className = 'empty-state';
      p.textContent = 'No entries match. Try another term or area of work.';
      list.append(p);
      return;
    }
    for (const e of matches) {
      const a = document.createElement('article');
      a.className = 'directory-entry';
      a.dataset.category = e.category;
      const tag = document.createElement('span');
      tag.className = 'entry-tag';
      tag.textContent = e.label;
      const h = document.createElement('h3');
      h.textContent = e.name;
      const p = document.createElement('p');
      p.textContent = e.description;
      const why = document.createElement('p');
      why.className = 'entry-relevance';
      const strong = document.createElement('strong');
      strong.textContent = 'Why here  '; 
      why.append(strong, document.createTextNode(e.relevance));
      const link = document.createElement('a');
      link.href = e.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'Explore their work ↗';
      a.append(tag, h, p, why, link);
      list.append(a);
    }
  }
  document.querySelectorAll('.filters button').forEach(button => button.addEventListener('click', () => {
    active = button.dataset.filter;
    document.querySelectorAll('.filters button').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    render();
  }));
  search.addEventListener('input', render);
  const hash = location.hash.slice(1);
  if (['informed-choice','peer-support','research','approaches','rights'].includes(hash)) {
    document.querySelector(`.filters button[data-filter="${hash}"]`).click();
  } else render();
}
