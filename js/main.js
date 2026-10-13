const YT={"macd-intro-voiced":"08Tn_2KI5uw","rsi-intro-voiced":"3U1ybHTFDHU","bb-intro-voiced":"USRKr7P_21w","kdj-intro-voiced":"xMu--z-zBCI","how-economy-works":"dmtGmFmPsg8","why-invest":"ck0ZL6gwHrA","art-history-pompeii":"sO6F-qWzho0","tech-history-clock":"RSx4QGjHAOI","blue-spiral":"yNVckJW-zmQ","code-film-lab":"8FbM3OtSMmI","contour-ball":"Utve96oRW6Q","contour-side-v2":"wL9KqW8grTA","showcase":"CRSaRzKRNh0"};
const S=[{id:"s1",t:"圖表技術指標系列",d:"把交易指標拆解成一步步的動態圖解。",w:[
["macd-intro-voiced","MACD 介紹（配音版）","以香港用字講解 MACD 指標的動態資訊圖解短片，附配音。","2:45"],
["rsi-intro-voiced","RSI 介紹（配音版）","講解 RSI 相對強弱指標的動態資訊圖解短片，附配音。","2:09"],
["bb-intro-voiced","布林通道介紹（配音版）","講解布林通道（Bollinger Bands）的動態資訊圖解短片，附配音。","2:13"],
["kdj-intro-voiced","KDJ 介紹（配音版）","講解 KDJ 隨機指標的動態資訊圖解短片，附配音。","2:35"]]},
{id:"s2",t:"財經系列",d:"從日常生活出發，看懂經濟與投資。",w:[
["how-economy-works","經濟如何運行","從一頓早餐出發，講解市場與供需如何運作的長篇程式碼動畫科普片（普通話旁白＋配樂）。","21:10"],
["why-invest","為什麼要投資","從通脹、複利到風險配置與行為偏誤，講解為什麼要投資的長篇科普片（普通話旁白＋配樂）。","21:10"]]},
{id:"s3",t:"程式碼動畫測試",d:"用程式碼生成畫面的各種實驗與風格探索。",w:[
["art-history-pompeii","藝術史：龐貝（Cave Canem）","從龐貝「小心惡犬」到波斯細密畫，以插畫動態穿越不同時代的藝術風格。","1:25"],
["tech-history-clock","科技史時鐘：從火開始","以「人類歷史時鐘」介面串連關鍵發明的科技史動畫。","3:15"],
["blue-spiral","藍色螺旋粒子","藍色粒子漩渦的程式生成動畫。","3:05"],
["code-film-lab","程式碼電影實驗室：資源不夠，就得 choose","以程式碼編輯器畫面講述「選擇與取捨」的實驗短片。","1:18"],
["contour-ball","等高線球體","以等高線描繪旋轉球體的程式動畫。","0:12"],
["contour-side-v2","等高線側面 v2","等高線線條側面造型動畫第二版。","0:12"],
["showcase","動畫技巧展示","程式碼動畫技巧綜合展示。","0:08"]]}];
const m=document.getElementById("works");
S.forEach(s=>{const e=document.createElement("section");e.id=s.id;
e.innerHTML=`<h2 class="reveal">${s.t}</h2><p class="desc reveal">${s.d}</p><div class="grid">${s.w.map(([f,t,d,du],i)=>
`<article class="card reveal" style="transition-delay:${i*80}ms" data-f="${f}" data-t="${t}" data-d="${d}" tabindex="0"><div class="thumb"><img loading="lazy" src="media/${f}_thumb.jpg" alt="${t}"><span class="play">▶</span><span class="dur">${du}</span></div><div class="info"><h3>${t}</h3><p>${d}</p></div></article>`).join("")}</div>`;m.appendChild(e)});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll(".reveal").forEach(x=>io.observe(x));
const lb=document.getElementById("lb"),v=lb.querySelector(".vid");
function open(c){v.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${YT[c.dataset.f]}?autoplay=1&rel=0" title="${c.dataset.t}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;lb.querySelector("h3").textContent=c.dataset.t;lb.querySelector("p").textContent=c.dataset.d;lb.hidden=false}
function close(){v.innerHTML="";lb.hidden=true}
document.querySelectorAll(".card").forEach(c=>{c.onclick=()=>open(c);c.onkeydown=e=>{if(e.key==="Enter")open(c)}});
lb.querySelector(".x").onclick=close;lb.onclick=e=>{if(e.target===lb)close()};document.onkeydown=e=>{if(e.key==="Escape"&&!lb.hidden)close()};
