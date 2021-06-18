(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(18),r=c.n(s),i=(c(25),c(26),c(8)),j=c.n(i),l=c(10),h=c(11),o=c(4),m=(c(28),c(0)),d=function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,n="/teams/".concat(a),s=t===c.matchWinner;return Object(m.jsxs)("div",{className:s?"MatchDetailCard win-card":"MatchDetailCard lost-card",children:[Object(m.jsxs)("div",{className:"main-info",children:[Object(m.jsx)("span",{className:"vs",children:"vs"}),Object(m.jsx)("h1",{className:"team-name",children:Object(m.jsx)(o.b,{to:n,children:a})}),Object(m.jsx)("h2",{className:"match-date",children:c.date}),Object(m.jsxs)("h3",{className:"match-venue",children:["at ",c.venue]}),Object(m.jsxs)("h3",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result]})]}),Object(m.jsxs)("div",{className:"additional-details",children:[Object(m.jsx)("h3",{children:"First Innings"}),Object(m.jsx)("p",{children:c.team1}),Object(m.jsx)("h3",{children:"Second Innings"}),Object(m.jsx)("p",{children:c.team2}),Object(m.jsx)("h3",{children:"Man of the match"}),Object(m.jsx)("p",{children:c.playerOfMatch}),Object(m.jsx)("h3",{children:"Umpires"}),Object(m.jsxs)("p",{children:[c.umpire1,", ",c.umpire2]})]})]})},u=(c(35),function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,n="/teams/".concat(a),s=t===c.matchWinner;return Object(m.jsxs)("div",{className:s?"MatchSmallCard win-card":"MatchSmallCard lost-card",children:[Object(m.jsx)("span",{className:"vs",children:"vs"}),Object(m.jsx)("h1",{className:"team-name",children:Object(m.jsx)(o.b,{to:n,children:a})}),Object(m.jsx)("div",{className:"match-result",children:Object(m.jsxs)("p",{children:[c.matchWinner," won by ",c.resultMargin," ",c.result]})})]})}),b=c(2),x=c(20),O=(c(36),function(){var e=Object(a.useState)({matches:[]}),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(b.g)({}).teamName;return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team/").concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),c&&c.teamName?Object(m.jsxs)("div",{className:"TeamPage",children:[Object(m.jsx)("div",{className:"team-name-secton",children:Object(m.jsx)("h1",{className:"team-name",children:c.teamName})}),Object(m.jsxs)("div",{className:"win-loss-section",children:["Wins/Losses",Object(m.jsx)(x.PieChart,{data:[{title:"Losses",value:c.totalMatches-c.totalWin,color:"#a34d5d"},{title:"Wins",value:c.totalWin,color:"#4da375"}]})]}),Object(m.jsxs)("div",{className:"match-detail-section",children:[Object(m.jsx)("h3",{children:"Latest Matches"}),Object(m.jsx)(d,{teamName:c.teamName,match:c.matches[0]})]}),c.matches.slice(1).map((function(e){return Object(m.jsx)(u,{teamName:c.teamName,match:e},e.id)})),Object(m.jsx)("div",{className:"more-section",children:Object(m.jsx)(o.b,{to:"/teams/".concat(s,"/matches/").concat("2020"),children:"more... "})})]}):Object(m.jsx)("h1",{children:"Team not found."})}),f=(c(37),c(38),function(e){for(var t=e.teamName,c=[],a="2020";a>="2008";a--)c.push(a);return Object(m.jsx)("ol",{className:"YearSelector",children:c.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{to:"/teams/".concat(t,"/matches/").concat(e),children:e})},e)}))})}),p=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],s=Object(b.g)(),r=s.teamName,i=s.year;return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team/").concat(r,"/matches?year=").concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log("data",c),n(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,i]),Object(m.jsxs)("div",{className:"MatchPage",children:[Object(m.jsxs)("div",{className:"year-selector",children:[Object(m.jsx)("h4",{children:"Select Year"}),Object(m.jsx)(f,{teamName:r})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{children:[r," matches for ",i]}),c.length>0?c.map((function(e){return Object(m.jsx)(d,{teamName:r,match:e},e.id)})):"No Match Found"]})]})},v=(c(39),function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team-names"));case 2:return t=e.sent,e.t0=n,e.next=6,t.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(m.jsx)("div",{className:"AllTeamsPage",children:c.length>0?c.map((function(e){return Object(m.jsx)("span",{children:Object(m.jsx)("h3",{children:Object(m.jsx)(o.b,{to:"/teams/".concat(e," "),children:e})})},e.id)})):"No team Found"})}),N=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"No Page Found."})})},g=function(){return Object(m.jsx)("nav",{style:{backgroundColor:"transparent"},children:Object(m.jsx)("h1",{style:{textAlign:"center"},children:Object(m.jsx)("a",{href:"/",children:"Ipl Dashboard"})})})};var w=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(g,{}),Object(m.jsx)(o.a,{children:Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.b,{path:"/teams/:teamName/matches/:year",exact:!0,children:Object(m.jsx)(p,{})}),Object(m.jsx)(b.b,{path:"/teams/:teamName",exact:!0,children:Object(m.jsx)(O,{})}),Object(m.jsx)(b.b,{path:"/teams",exact:!0,children:Object(m.jsx)(v,{})}),Object(m.jsx)(b.b,{path:"/",exact:!0,children:Object(m.jsx)(b.a,{to:"/teams"})}),Object(m.jsx)(b.b,{path:"/notfound",exact:!0,component:N}),Object(m.jsx)(b.a,{to:"/notfound"})]})})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root")),y()}},[[40,1,2]]]);
//# sourceMappingURL=main.73939e51.chunk.js.map