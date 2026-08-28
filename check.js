function getDetailedCategory(heroCards, boardCards, evalFn) {
        var baseCategory = classifyGenericHand(heroCards, boardCards, evalFn);
        
        var hRanks = heroCards.map(c  typeof c === 'string' ? c[0] : cardRank(c));
        var bRanks = boardCards.map(c  typeof c === 'string' ? c[0] : cardRank(c));
        var all = [heroCards, boardCards];
        var allRanks = all.map(c  typeof c === 'string' ? c[0] : cardRank(c));
        var rankVals = r  '23456789TJQKA'.indexOf(r);
        
        var kickerIndex = 0;
        var isPocket = hRanks[0] === hRanks[1];
        
                  if (isPocket) {
              var bVals = bRanks.map(rankVals).sort((a,b)b-a);
              var possiblePockets = [];
              for (var v=12; v>=0; v--) {
                  if (bVals.includes(v)) continue;
                  if (baseCategory === '\u041e\u0432\u0435\u0440' && v > bVals[0]) possiblePockets.push(v);
                  else if (baseCategory === '\u0410\u043d\u0434\u0435\u0440 \u043a \u0422\u041a' && v < bVals[0] && v > bVals[1]) possiblePockets.push(v);
                  else if (baseCategory === '\u0410\u043d\u0434\u0435\u0440 \u043a \u041c\u041a' && bVals.length > 2 && v < bVals[1] && v > bVals[2]) possiblePockets.push(v);
                  else if (baseCategory === '\u0410\u043d\u0434\u0435\u0440 \u043a 3\u041a' && bVals.length > 3 && v < bVals[2] && v > bVals[3]) possiblePockets.push(v);
                  else if (baseCategory === '\u0410\u043d\u0434\u0435\u0440 \u043a \u041b\u041a' && v < bVals[bVals.length-1]) possiblePockets.push(v);
              }
              var myVal = rankVals(hRanks[0]);
              kickerIndex = possiblePockets.indexOf(myVal) + 1;
          } else {
                var pairRank = allRanks.find(r  allRanks.filter(xx===r).length===2);
                var nonPairHero = hRanks.find(r  r !== pairRank);
                if (nonPairHero) {
                    var myKickerVal = rankVals(nonPairHero);
                    var possibleKickers = [];
                    for (var v=12; v>=0; v--) {
                        if (v === rankVals(pairRank) || bRanks.includes('23456789TJQKA'[v])) continue;
                        possibleKickers.push(v);
                    }
                    kickerIndex = possibleKickers.indexOf(myKickerVal) + 1;
                }
            }
        
        
        var txIndex = 0;
        if (baseCategory === 'Мусор' || baseCategory === 'Гатшот' || baseCategory === 'Дро') {
            var myMaxVal = Math.max(rankVals(hRanks[0]), rankVals(hRanks[1]));
            var possibleTX = [];
            for (var v=12; v>=0; v--) {
                if (bRanks.includes('23456789TJQKA'[v])) continue;
                possibleTX.push(v);
            }
            txIndex = possibleTX.indexOf(myMaxVal) + 1;
        }

        return { base: baseCategory, kicker: kickerIndex, tx: txIndex, heroPairRank: isPocket ? '23456789TJQKA'.indexOf(hRanks[0]) : -1 };
    }

        