const cardRank = c => typeof c === 'string' ? c[0] : c;
const cardSuit = c => typeof c === 'string' ? c[1] : '';
const rankToNum = r => '23456789TJQKA'.indexOf(r) + 2;

function evaluate5(cards) {
      const ranks = cards.map(cardRank).map(rankToNum).sort((a,b)=>b-a);
      const suits = cards.map(cardSuit);
      const rankCounts = {};
      ranks.forEach(r => rankCounts[r] = (rankCounts[r]||0)+1);
      const counts = Object.values(rankCounts).sort((a,b)=>b-a);

      const isFlush = suits.every(s => s === suits[0]);

      // Проверка стрита (учитывая колесо A-2-3-4-5)
      const uniqueRanks = [...new Set(ranks)].sort((a,b)=>a-b);
      let isStraight = false;
      if (uniqueRanks.length === 5) {
        if (uniqueRanks[4] - uniqueRanks[0] === 4) isStraight = true;
        if (uniqueRanks[0] === 2 && uniqueRanks[1] === 3 && uniqueRanks[2] === 4 && uniqueRanks[3] === 5 && uniqueRanks[4] === 14) {
          isStraight = true;
        }
      }

      if (isStraight && isFlush) {
        return { rank: 8, value: [uniqueRanks[4]] };
      }
      if (counts[0] === 4) {
        const quadRank = Number(Object.keys(rankCounts).find(r => rankCounts[r] === 4));
        const kicker = Number(Object.keys(rankCounts).find(r => rankCounts[r] === 1));
        return { rank: 7, value: [quadRank, kicker] };
      }
      if (counts[0] === 3 && counts[1] === 2) {
        const tripsRank = Number(Object.keys(rankCounts).find(r => rankCounts[r] === 3));
        const pairRank = Number(Object.keys(rankCounts).find(r => rankCounts[r] === 2));
        return { rank: 6, value: [tripsRank, pairRank] };
      }
      if (isFlush) return { rank: 5, value: ranks };
      if (isStraight) return { rank: 4, value: [uniqueRanks[4]] };
      if (counts[0] === 3) {
        const tripsRank = Number(Object.keys(rankCounts).find(r => rankCounts[r] === 3));
        const kickers = ranks.filter(r => r !== tripsRank).sort((a,b)=>b-a);
        return { rank: 3, value: [tripsRank, ...kickers] };
      }
      if (counts[0] === 2 && counts[1] === 2) {
        const pairRanks = Object.keys(rankCounts).filter(r => rankCounts[r] === 2).map(Number).sort((a,b)=>b-a);
        const kicker = Number(Object.keys(rankCounts).find(r => rankCounts[r] === 1));
        return { rank: 2, value: [...pairRanks, kicker] };
      }
      if (counts[0] === 2) {
        const pairRank = Number(Object.keys(rankCounts).find(r => rankCounts[r] === 2));
        const kickers = ranks.filter(r => r !== pairRank).sort((a,b)=>b-a);
        return { rank: 1, value: [pairRank, ...kickers] };
      }
      return { rank: 0, value: ranks };
    }

    
function checkDraws(heroCards, boardCards, allCards) {
      const getR = c => typeof c === 'string' ? c[0] : cardRank(c);
      const getS = c => typeof c === 'string' ? c[1] : cardSuit(c);
      const rToN = { '2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'T':10,'J':11,'Q':12,'K':13,'A':14 };
      const heroRanks = heroCards.map(c => rToN[getR(c)]);
      const h1 = heroRanks[0], h2 = heroRanks[1];
      const suits = allCards.map(c => getS(c));
      const suitCounts = {}; suits.forEach(s => suitCounts[s] = (suitCounts[s]||0)+1);
      const maxSuit = Math.max(...Object.values(suitCounts));
      const heroSuits = heroCards.map(c => getS(c));
      
      let hasFlushDraw = false;
      if (maxSuit >= 4) {
         const flushSuit = Object.keys(suitCounts).find(s => suitCounts[s] >= 4);
         if (heroSuits.includes(flushSuit)) hasFlushDraw = true;
      }

      const ur = [...new Set(allCards.map(c => rToN[getR(c)]))];
      let outs = 0;
      const h1Val = h1 === 14 ? [1, 14] : [h1];
      const h2Val = h2 === 14 ? [1, 14] : [h2];
      
      for (let r = 2; r <= 14; r++) {
          if (ur.includes(r)) continue;
          const testUr = [...ur, r];
          if (testUr.includes(14) && !testUr.includes(1)) testUr.push(1);
          testUr.sort((a,b)=>a-b);
          
          let madeStraightWithHero = false;
          for (let i = 0; i <= testUr.length - 5; i++) {
              if (testUr[i+4] - testUr[i] === 4) {
                  const st = testUr.slice(i, i+5);
                  const heroInvolved = h1Val.some(v => st.includes(v)) || h2Val.some(v => st.includes(v));
                  if (heroInvolved) {
                      madeStraightWithHero = true;
                      break;
                  }
              }
          }
          if (madeStraightWithHero) outs++;
      }
      
      if (hasFlushDraw || outs >= 2) return 'Дро';
      if (outs === 1) return 'Гатшот';
      return 'Мусор';
    }

    
function classifyGenericHand(heroCards, boardCards, evalFn) {
      const all = [...heroCards, ...boardCards];
      const { rank, value } = evalFn(all);
      const getR = c => typeof c === 'string' ? c[0] : cardRank(c);
      const rToN = { '2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'T':10,'J':11,'Q':12,'K':13,'A':14 };
      const bRanks = boardCards.map(c => rToN[getR(c)]);
      const bRankCounts = {}; bRanks.forEach(r => bRankCounts[r] = (bRankCounts[r] || 0) + 1);
      const bCounts = Object.values(bRankCounts).sort((a,b) => b-a);
      const bIsPaired = bCounts[0] >= 2;
      const bUnpaired = Object.keys(bRankCounts).filter(r => bRankCounts[r] === 1).map(Number).sort((a,b)=>b-a);

      const h1 = rToN[getR(heroCards[0])];
      const h2 = rToN[getR(heroCards[1])];
      const isPocket = h1 === h2;
      
      let isMonster = false;
      let bRankValue = 0;
      if (bCounts[0] === 4) bRankValue = 7;
      else if (bCounts[0] === 3 && bCounts[1] === 2) bRankValue = 6;
      else if (bCounts[0] === 3) bRankValue = 3;
      else if (bCounts[0] === 2 && bCounts[1] === 2) bRankValue = 2;
      else if (bCounts[0] === 2) bRankValue = 1;
      
      if (boardCards.length >= 5) {
         const bEval = evalFn(boardCards);
         if (bEval) bRankValue = Math.max(bRankValue, bEval.rank);
      }
      
      if (rank >= 2 && rank > bRankValue) {
          if (rank === 2) {
              if (!bIsPaired) isMonster = true;
          } else if (rank === 3) {
              isMonster = true;
          } else if (rank === 4 || rank === 5 || rank === 8) {
              isMonster = true;
          } else if (rank === 6) {
              if (bCounts[0] === 3 && isPocket && !bRanks.includes(h1)) {
                  isMonster = false;
              } else {
                  isMonster = true;
              }
          } else if (rank === 7) {
              isMonster = true;
          }
      } else if (rank >= 4 && rank === bRankValue && boardCards.length >= 5) {
          const bVal = evalFn(boardCards).value;
          let improved = false;
          for(let i=0; i<value.length; i++) {
             if (value[i] > bVal[i]) { improved = true; break; }
             else if (value[i] < bVal[i]) break;
          }
          if (improved) isMonster = true;
      }

      if (isMonster) return 'Две пары+';

      let baseCategory = 'Мусор';

      if (bIsPaired) {
          let heroPairRank = -1;
          if (isPocket && !bRanks.includes(h1)) heroPairRank = h1;
          else {
             if (bUnpaired.includes(h1)) heroPairRank = h1;
             else if (bUnpaired.includes(h2)) heroPairRank = h2;
          }
          if (heroPairRank !== -1) {
              const uniqueB = [...new Set(bRanks)].sort((a,b)=>b-a);
              if (heroPairRank > uniqueB[0]) baseCategory = 'Овер';
              else if (heroPairRank === uniqueB[0]) baseCategory = 'Топ';
              else if (uniqueB.length > 1 && heroPairRank >= uniqueB[1]) baseCategory = 'Мидл';
              else baseCategory = 'Лоу';
          }
      } else if (rank === 1) {
          let heroPairRank = value[0];
          const sortedB = bRanks.slice().sort((a,b)=>b-a);
          if (heroPairRank > sortedB[0]) baseCategory = 'Овер';
          else if (heroPairRank === sortedB[0]) baseCategory = 'Топ';
          else if (heroPairRank >= sortedB[1]) baseCategory = 'Мидл';
          else baseCategory = 'Лоу';
      }

      if (baseCategory === 'Мусор') return checkDraws(heroCards, boardCards, all);
      return baseCategory;
    }

        

    

console.log(classifyGenericHand(['5c', '5s'], ['Ah', 'Ad', '3d'], evaluate5));
console.log(classifyGenericHand(['Kc', 'Kd'], ['Th', 'Td', '2s'], evaluate5));