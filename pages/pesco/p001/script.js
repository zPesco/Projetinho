
function teams(times) {
    
    var img = window.document.getElementById('img')
    var teamdesc = "";
    
    switch (times) {
        case "bmg":
            teamdesc = "O Borussia Mönchengladbach, fundado em 1900, é um dos clubes mais tradicionais da Alemanha e ficou conhecido nos anos 1970 como 'Os Potros' devido ao seu futebol ofensivo e veloz. Naquela década, o time conquistou 5 títulos da Bundesliga (1970–1971, 1974–1975, 1975–1976, 1976–1977 e 1976–1977) e chegou à final da Copa da UEFA em 1973 e 1977, vencendo em 1975 e 1979. Curiosamente, o clube revelou jogadores lendários como Jupp Heynckes e Günter Netzer, além de ter sido o primeiro time alemão a vencer o Bayern de Munique por 7x1 em 1978 — um recorde que permanece até hoje!"
            img.src = "https://cdn.sofifa.net/kits/23/25_3.png"
            document.querySelector('.desc').style.background = '#f1f1f1'
            document.querySelector('#teamdesc').style.color = '#000'
            document.querySelector('.times-bg').style.background = '#000'
            document.querySelector('.times-bg').style.borderRadius = '11px 11px 0px 0px'
            document.querySelector('.desc').style.borderRadius = '0px 0px 11px 11px'
            document.querySelector('.desc').style.margin = '0'
            document.querySelector('.desc').style.boxShadow = '2px 2px 13px rgba(0, 0, 0, 0.300)'
            break;

        case "gooners":
            teamdesc = "Em 2006, o Arsenal chegou à final da Champions League. Se o Arsenal tivesse vencido o Barcelona, teríamos tido um Mundial de Clubes histórico: possivelmente, Arsenal vs Inter, dois times INVICTOS em seus campeonatos nacionais. Mas a desgraça aconteceu: o goleiro Jens Lehmann foi expulso aos 18 minutos (o mais rápido em uma final de Champions), e mesmo com 10 jogadores, o Arsenal abriu o placar com Sol Campbell e lutou como leões. Se não fosse a expulsão, quem sabe Thierry Henry, Dennis Bergkamp e Patrick Vieira levariam a taça e teríamos esse confronto épico contra o Inter no Japão! O Barcelona virou com 2×1 no fim, mas até hoje os torcedores do Arsenal juram que, com 11 em campo, eles seriam campeões. (E o pior? O Inter também merecia testar seu time campeão contra o Arsenal no auge... seria lendário!)"
            img.src = "https://cdn.sofifa.net/kits/1/25_3.png"
            document.querySelector('.desc').style.background = '#ff3838'
            document.querySelector('#teamdesc').style.color = '#fff'
            document.querySelector('.times-bg').style.background = '#de1f1f'
            document.querySelector('.times-bg').style.borderRadius = '11px 11px 0px 0px'
            document.querySelector('.desc').style.borderRadius = '0px 0px 11px 11px'
            document.querySelector('.desc').style.margin = '0'
            document.querySelector('.desc').style.boxShadow = '2px 2px 13px rgba(0, 0, 0, 0.300)'
            break;

        case "millwall":
            teamdesc = "Conhecido por sua torcida aguerrida e polêmica, o Millwall FC carrega o lema 'No one likes us, we don't care' (Ninguém nos ama, e não nos importamos). Sua torcida, famosa por criar um dos ambientes mais intimidantes do futebol inglês (especialmente no The Den), já foi protagonista de episódios de violência, como os tumultos em 1985 (pós-jogo contra o Luton Town) que levaram a proibições de torcedores visitantes. Apesar da reputação, o clube tem uma base fiel e uma identidade marcante — orgulhosa, combativa e, acima de tudo, fora do mainstream."
            img.src = "https://cdn.sofifa.net/kits/97/25_2.png"
            document.querySelector('.desc').style.background = '#112b5f'
            document.querySelector('#teamdesc').style.color = '#fff'
            document.querySelector('.times-bg').style.background = '#00194a'
            document.querySelector('.times-bg').style.borderRadius = '11px 11px 0px 0px'
            document.querySelector('.desc').style.borderRadius = '0px 0px 11px 11px'
            document.querySelector('.desc').style.margin = '0'
            document.querySelector('.desc').style.boxShadow = '2px 2px 13px rgba(0, 0, 0, 0.300)'
            break;

        case "lazio":
            teamdesc = "A Lazio tem uma parcela minoritária, porém barulhenta, de torcedores com vinculações a simbologias extremistas, um problema crônico que mancha a história do clube. Nos anos 1970, surgiram grupos ultras como os Irriducibili, que frequentemente usavam saudações fascistas, bandeiras com runas nazistas e cantos racistas – herança da relação histórica entre o fascismo italiano e a Roma, cidade onde Mussolini estabeleceu seu regime."
            img.src = "https://cdn.sofifa.net/kits/46/25_1.png"
            document.querySelector('.desc').style.background = '#84d7f7'
            document.querySelector('#teamdesc').style.color = '#1e7ada'
            document.querySelector('.times-bg').style.background = '#3e9abe'
            document.querySelector('.times-bg').style.borderRadius = '11px 11px 0px 0px'
            document.querySelector('.desc').style.borderRadius = '0px 0px 11px 11px'
            document.querySelector('.desc').style.margin = '0'
            document.querySelector('.desc').style.boxShadow = '2px 2px 13px rgba(0, 0, 0, 0.300)'
            break;

        default:
            break;
    }

    document.getElementById('teamdesc').textContent = teamdesc
}