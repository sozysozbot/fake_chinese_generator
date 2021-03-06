"use strict";
var syllable_dat = [
    ["a5", 143836],
    ["ai1", 34794],
    ["ai2", 16044],
    ["ai3", 7909],
    ["ai4", 154839],
    ["an1", 188449],
    ["an3", 2671],
    ["an4", 227391],
    ["ang1", 1499],
    ["ang2", 7637],
    ["ang4", 1131],
    ["ao1", 2273],
    ["ao2", 3924],
    ["ao3", 1057],
    ["ao4", 53201],
    ["ba1", 82762],
    ["ba2", 108689],
    ["ba3", 1411],
    ["ba4", 380447],
    ["ba5", 106028],
    ["bai2", 148728],
    ["bai3", 139693],
    ["bai4", 60605],
    ["ban1", 124251],
    ["ban3", 78185],
    ["ban4", 226789],
    ["bang1", 64218],
    ["bang3", 7570],
    ["bang4", 15469],
    ["bao1", 108942],
    ["bao2", 15150],
    ["bao3", 227852],
    ["bao4", 268590],
    ["bei1", 51649],
    ["bei3", 136939],
    ["bei4", 481504],
    ["ben3", 388118],
    ["ben4", 23701],
    ["beng1", 5658],
    ["beng2", 1146],
    ["beng4", 5628],
    ["bi1", 12623],
    ["bi2", 17773],
    ["bi3", 59136],
    ["bi4", 331746],
    ["bian1", 45055],
    ["bian3", 14530],
    ["bian4", 402035],
    ["bian5", 136277],
    ["biao1", 93254],
    ["biao3", 226768],
    ["bie1", 1588],
    ["bie4", 186634],
    ["bin1", 25234],
    ["bing1", 134183],
    ["bing3", 18672],
    ["bing4", 380308],
    ["bo1", 104184],
    ["bo2", 114747],
    ["bo5", 7301],
    ["bu2", 2237915],
    ["bu3", 55244],
    ["bu4", 650809],
    ["ca1", 15954],
    ["cai1", 11875],
    ["cai2", 293917],
    ["cai3", 27717],
    ["cai4", 93787],
    ["can1", 95304],
    ["can2", 28641],
    ["can4", 17871],
    ["cang1", 28725],
    ["cao1", 24824],
    ["cao2", 15438],
    ["cao3", 44612],
    ["ce4", 128686],
    ["cen2", 1069],
    ["ceng2", 143033],
    ["cha1", 13938],
    ["cha2", 181337],
    ["cha4", 59990],
    ["chai2", 7276],
    ["chan1", 1172],
    ["chan2", 8446],
    ["chan3", 272452],
    ["chan4", 9610],
    ["chang1", 12944],
    ["chang2", 593421],
    ["chang3", 210348],
    ["chang4", 32851],
    ["chao1", 56700],
    ["chao2", 96495],
    ["chao3", 9969],
    ["che1", 118824],
    ["che3", 6325],
    ["che4", 41148],
    ["chen1", 1215],
    ["chen2", 183634],
    ["chen4", 103492],
    ["cheng1", 5628],
    ["cheng2", 850343],
    ["cheng3", 1530],
    ["chi1", 92722],
    ["chi2", 158310],
    ["chi3", 31275],
    ["chi4", 29954],
    ["chong1", 56085],
    ["chong2", 33171],
    ["chong3", 4108],
    ["chong4", 53378],
    ["chou1", 22937],
    ["chou2", 45395],
    ["chou3", 10693],
    ["chou4", 6166],
    ["chu1", 813843],
    ["chu2", 99345],
    ["chu3", 83731],
    ["chu4", 224620],
    ["chuai4", 1829],
    ["chuan1", 70889],
    ["chuan2", 194069],
    ["chuan3", 7320],
    ["chuan4", 8695],
    ["chuang1", 28659],
    ["chuang2", 27283],
    ["chuang3", 5954],
    ["chuang4", 63156],
    ["chui1", 17442],
    ["chui2", 15081],
    ["chun1", 36027],
    ["chun2", 38179],
    ["chun3", 5542],
    ["chuo1", 2051],
    ["chuo4", 2089],
    ["ci2", 90106],
    ["ci3", 318534],
    ["ci4", 249179],
    ["cong1", 24550],
    ["cong2", 380623],
    ["cou4", 5544],
    ["cu1", 15557],
    ["cu4", 30970],
    ["cuan4", 5002],
    ["cui1", 15757],
    ["cui4", 24004],
    ["cun1", 52603],
    ["cun2", 110970],
    ["cun3", 1890],
    ["cun4", 8056],
    ["cuo1", 3050],
    ["cuo3", 1049],
    ["cuo4", 90662],
    ["da1", 8626],
    ["da2", 220328],
    ["da3", 186146],
    ["da4", 1054064],
    ["dai1", 17746],
    ["dai3", 2148],
    ["dai4", 477150],
    ["dan1", 131535],
    ["dan3", 17486],
    ["dan4", 551461],
    ["dang1", 429274],
    ["dang3", 103165],
    ["dang4", 32367],
    ["dao1", 27292],
    ["dao3", 178045],
    ["dao4", 1583563],
    ["de2", 168917],
    ["de5", 8553372],
    ["deng1", 68088],
    ["deng3", 266296],
    ["deng4", 22449],
    ["di1", 80368],
    ["di2", 105286],
    ["di3", 102477],
    ["di4", 1436219],
    ["dian1", 8131],
    ["dian3", 329660],
    ["dian4", 237908],
    ["diao1", 8713],
    ["diao4", 158370],
    ["die1", 18983],
    ["die2", 18346],
    ["ding1", 34708],
    ["ding3", 35825],
    ["ding4", 450588],
    ["diu1", 11285],
    ["dong1", 224625],
    ["dong3", 32567],
    ["dong4", 466052],
    ["dou1", 443231],
    ["dou3", 14005],
    ["dou4", 84087],
    ["du1", 36883],
    ["du2", 148208],
    ["du3", 16538],
    ["du4", 47268],
    ["duan1", 36233],
    ["duan3", 37834],
    ["duan4", 173661],
    ["dui4", 870671],
    ["dun1", 24207],
    ["dun4", 63693],
    ["duo1", 484388],
    ["duo2", 238402],
    ["duo3", 23636],
    ["duo4", 1302],
    ["e2", 85441],
    ["e4", 22923],
    ["e5", 1532],
    ["en1", 37898],
    ["er2", 857066],
    ["er3", 229320],
    ["er4", 267506],
    ["fa2", 49019],
    ["fa3", 466816],
    ["fa4", 572904],
    ["fan1", 52604],
    ["fan2", 51955],
    ["fan3", 196564],
    ["fan4", 158327],
    ["fang1", 504778],
    ["fang2", 168518],
    ["fang3", 53179],
    ["fang4", 147600],
    ["fei1", 280231],
    ["fei2", 11594],
    ["fei3", 22839],
    ["fei4", 113127],
    ["fen1", 42872],
    ["fen2", 8120],
    ["fen3", 13874],
    ["fen4", 501833],
    ["feng1", 230581],
    ["feng2", 15760],
    ["feng3", 4713],
    ["feng4", 38782],
    ["fo2", 47038],
    ["fou3", 64772],
    ["fu1", 13145],
    ["fu2", 290495],
    ["fu3", 144463],
    ["fu4", 602195],
    ["fu5", 6257],
    ["ga3", 2307],
    ["ga4", 2743],
    ["gai1", 136053],
    ["gai3", 121023],
    ["gai4", 78029],
    ["gan1", 37093],
    ["gan3", 267307],
    ["gan4", 121876],
    ["gang1", 82689],
    ["gang3", 44740],
    ["gang4", 13470],
    ["gao1", 297684],
    ["gao3", 36277],
    ["gao4", 141243],
    ["ge1", 96813],
    ["ge2", 250512],
    ["ge3", 7952],
    ["ge4", 1393015],
    ["gei3", 217815],
    ["gen1", 196736],
    ["geng1", 10244],
    ["geng3", 5020],
    ["geng4", 187378],
    ["gong1", 848800],
    ["gong3", 7683],
    ["gong4", 215777],
    ["gou1", 16875],
    ["gou3", 21306],
    ["gou4", 191469],
    ["gu1", 59213],
    ["gu3", 196511],
    ["gu4", 177184],
    ["gua1", 13305],
    ["gua3", 6112],
    ["gua4", 23827],
    ["guai1", 3828],
    ["guai3", 5282],
    ["guai4", 46600],
    ["guan1", 403271],
    ["guan3", 201310],
    ["guan4", 183826],
    ["guang1", 147639],
    ["guang3", 87900],
    ["guang4", 3074],
    ["gui1", 180190],
    ["gui3", 40512],
    ["gui4", 59601],
    ["gun3", 12863],
    ["gun4", 5140],
    ["guo1", 15347],
    ["guo2", 985350],
    ["guo3", 251153],
    ["guo4", 589925],
    ["ha4", 52475],
    ["hai2", 495311],
    ["hai3", 209302],
    ["hai4", 74567],
    ["han2", 86743],
    ["han3", 28188],
    ["han4", 88640],
    ["hang2", 51372],
    ["hao2", 55171],
    ["hao3", 1681],
    ["hao4", 516354],
    ["he2", 358767],
    ["he4", 1276446],
    ["hei1", 84324],
    ["hen2", 7805],
    ["hen3", 295368],
    ["hen4", 18702],
    ["heng1", 13264],
    ["heng2", 27202],
    ["heng4", 17912],
    ["hong1", 21041],
    ["hong2", 125266],
    ["hong4", 3660],
    ["hou2", 11815],
    ["hou3", 5814],
    ["hou4", 731776],
    ["hu1", 168541],
    ["hu2", 94403],
    ["hu4", 208731],
    ["hua1", 103367],
    ["hua2", 19759],
    ["hua4", 684865],
    ["huai2", 55976],
    ["huai4", 41723],
    ["huan1", 55294],
    ["huan2", 59522],
    ["huan3", 25455],
    ["huan4", 92677],
    ["huang1", 29073],
    ["huang2", 136142],
    ["huang3", 10468],
    ["huang4", 9157],
    ["hui1", 105664],
    ["hui2", 239243],
    ["hui3", 32258],
    ["hui4", 803965],
    ["hun1", 47210],
    ["hun2", 24671],
    ["hun4", 24605],
    ["huo2", 189876],
    ["huo3", 126484],
    ["huo4", 395664],
    ["ji1", 798348],
    ["ji2", 831401],
    ["ji3", 459485],
    ["ji4", 888717],
    ["jia1", 267922],
    ["jia2", 12599],
    ["jia3", 32247],
    ["jia4", 228475],
    ["jia5", 509790],
    ["jian1", 125358],
    ["jian3", 158877],
    ["jian4", 1167654],
    ["jiang1", 85310],
    ["jiang3", 119214],
    ["jiang4", 306526],
    ["jiao1", 178197],
    ["jiao3", 118578],
    ["jiao4", 407110],
    ["jie1", 276646],
    ["jie2", 339958],
    ["jie3", 41762],
    ["jie4", 450949],
    ["jin1", 332854],
    ["jin3", 87942],
    ["jin4", 742278],
    ["jing1", 285733],
    ["jing3", 120622],
    ["jing4", 779888],
    ["jiong3", 4019],
    ["jiu1", 111268],
    ["jiu3", 201237],
    ["jiu4", 853519],
    ["ju1", 64352],
    ["ju2", 89572],
    ["ju3", 75727],
    ["ju4", 455661],
    ["juan1", 10426],
    ["juan4", 41333],
    ["jue2", 384873],
    ["jun1", 435026],
    ["jun4", 28472],
    ["ka1", 8196],
    ["ka3", 52244],
    ["kai1", 377012],
    ["kai3", 21574],
    ["kan1", 32787],
    ["kan3", 11837],
    ["kan4", 424616],
    ["kang1", 39380],
    ["kang2", 1921],
    ["kang4", 50658],
    ["kao3", 87231],
    ["kao4", 42988],
    ["ke1", 188545],
    ["ke2", 12203],
    ["ke3", 7395],
    ["ke4", 1046035],
    ["ken3", 47955],
    ["keng1", 6954],
    ["kong3", 56566],
    ["kong4", 204203],
    ["kou3", 191936],
    ["kou4", 17024],
    ["ku1", 29135],
    ["ku3", 63194],
    ["ku4", 40551],
    ["kua1", 7594],
    ["kua3", 2958],
    ["kua4", 9404],
    ["kuai4", 163050],
    ["kuan1", 23918],
    ["kuan3", 43087],
    ["kuang1", 2497],
    ["kuang2", 24259],
    ["kuang4", 127135],
    ["kui1", 14399],
    ["kui2", 6421],
    ["kui4", 15002],
    ["kun1", 11698],
    ["kun3", 3079],
    ["kun4", 39172],
    ["kuo4", 81713],
    ["la1", 3127],
    ["la3", 2939],
    ["la4", 155313],
    ["la5", 22263],
    ["lai2", 1101656],
    ["lai4", 17123],
    ["lan2", 109320],
    ["lan3", 18450],
    ["lan4", 14599],
    ["lang2", 16708],
    ["lang3", 19288],
    ["lang4", 37484],
    ["lao1", 3681],
    ["lao2", 66573],
    ["lao3", 226582],
    ["lao4", 2236],
    ["le4", 98193],
    ["le5", 2128528],
    ["lei2", 55226],
    ["lei3", 6516],
    ["lei4", 176990],
    ["leng2", 3604],
    ["leng3", 53460],
    ["leng4", 5088],
    ["li2", 129043],
    ["li3", 1059566],
    ["li4", 1103579],
    ["li5", 15853],
    ["lian2", 260342],
    ["lian3", 67834],
    ["lian4", 61388],
    ["liang2", 75082],
    ["liang3", 306940],
    ["liang4", 257374],
    ["liao2", 55543],
    ["liao4", 74975],
    ["lie4", 162890],
    ["lie5", 2707],
    ["lin2", 182865],
    ["lin3", 1870],
    ["lin4", 7405],
    ["ling1", 1176],
    ["ling2", 121995],
    ["ling3", 136422],
    ["ling4", 198272],
    ["liu2", 245324],
    ["liu3", 12642],
    ["liu4", 93765],
    ["long2", 76608],
    ["long3", 18145],
    ["lou2", 38463],
    ["lou3", 2512],
    ["lou4", 9622],
    ["lou5", 1445],
    ["lu1", 1587],
    ["lu2", 21662],
    ["lu3", 46158],
    ["lu4", 293382],
    ["lü3", 64184],
    ["lü4", 209159],
    ["lü5", 3532],
    ["luan2", 1230],
    ["luan3", 6971],
    ["luan4", 47474],
    ["lue:4", 61411],
    ["lun2", 67400],
    ["lun4", 197165],
    ["luo2", 21710],
    ["luo3", 5752],
    ["luo4", 145312],
    ["luo5", 108376],
    ["ma1", 48622],
    ["ma2", 25584],
    ["ma3", 193605],
    ["ma4", 17182],
    ["ma5", 103113],
    ["mai2", 11246],
    ["mai3", 47788],
    ["mai4", 78329],
    ["man2", 10694],
    ["man3", 96954],
    ["man4", 80662],
    ["mang2", 63001],
    ["mang3", 2816],
    ["mao2", 96517],
    ["mao4", 73531],
    ["me5", 480720],
    ["mei2", 509329],
    ["mei3", 389046],
    ["mei4", 34998],
    ["men2", 212769],
    ["men4", 8708],
    ["men5", 1169853],
    ["meng2", 28204],
    ["meng3", 52881],
    ["meng4", 51760],
    ["mi1", 1298],
    ["mi2", 37063],
    ["mi3", 73396],
    ["mi4", 118542],
    ["mian2", 20233],
    ["mian3", 58465],
    ["mian4", 425180],
    ["miao2", 31576],
    ["miao3", 8809],
    ["miao4", 28385],
    ["mie4", 37465],
    ["min2", 335796],
    ["min3", 18412],
    ["ming2", 528260],
    ["ming4", 168358],
    ["miu4", 4290],
    ["mo2", 129545],
    ["mo4", 143484],
    ["mou2", 36743],
    ["mou3", 79482],
    ["mu3", 107437],
    ["mu4", 300813],
    ["na2", 61798],
    ["na4", 707256],
    ["na5", 62871],
    ["nai3", 42739],
    ["nai4", 27138],
    ["nan2", 211765],
    ["nan4", 144597],
    ["nang2", 6709],
    ["nao2", 2523],
    ["nao3", 73111],
    ["nao4", 17764],
    ["ne5", 112185],
    ["nei4", 231331],
    ["nen4", 3707],
    ["neng2", 665358],
    ["ni1", 6000],
    ["ni2", 61854],
    ["ni3", 718090],
    ["ni4", 26117],
    ["nian2", 607118],
    ["nian3", 1066],
    ["nian4", 87128],
    ["niang2", 38274],
    ["niang4", 2633],
    ["niao3", 19698],
    ["niao4", 9621],
    ["nie1", 3824],
    ["nie4", 9167],
    ["nin2", 51094],
    ["ning2", 12487],
    ["ning4", 31530],
    ["niu1", 1487],
    ["niu2", 30047],
    ["niu3", 21426],
    ["nong2", 103020],
    ["nong4", 28205],
    ["nu2", 15917],
    ["nu3", 27631],
    ["nu4", 24374],
    ["nü3", 185188],
    ["nuan3", 9762],
    ["nue:4", 2979],
    ["nuo2", 5500],
    ["nuo4", 34522],
    ["o1", 4582],
    ["ou1", 44914],
    ["ou3", 17246],
    ["ou4", 2292],
    ["pa1", 4394],
    ["pa2", 15255],
    ["pa4", 77086],
    ["pai1", 23483],
    ["pai2", 21447],
    ["pai3", 55938],
    ["pai4", 76750],
    ["pan1", 10475],
    ["pan2", 28582],
    ["pan4", 69473],
    ["pang2", 49579],
    ["pang4", 8184],
    ["pao1", 10477],
    ["pao2", 5901],
    ["pao3", 39497],
    ["pao4", 43361],
    ["pei1", 2093],
    ["pei2", 46499],
    ["pei4", 65518],
    ["pen2", 6780],
    ["pen4", 10027],
    ["peng1", 4481],
    ["peng2", 76698],
    ["peng3", 4533],
    ["peng4", 16919],
    ["pi1", 78465],
    ["pi2", 67978],
    ["pi3", 11784],
    ["pi4", 17136],
    ["pian1", 54185],
    ["pian4", 104413],
    ["piao1", 13357],
    ["piao2", 1073],
    ["piao4", 48947],
    ["pie1", 2840],
    ["pie3", 2219],
    ["pin1", 10771],
    ["pin2", 30390],
    ["pin3", 138528],
    ["pin4", 5148],
    ["ping1", 1086],
    ["ping2", 280687],
    ["po1", 36746],
    ["po2", 36302],
    ["po4", 103794],
    ["pou1", 3767],
    ["pu1", 14818],
    ["pu2", 26851],
    ["pu3", 83290],
    ["pu4", 13151],
    ["qi1", 275049],
    ["qi2", 533538],
    ["qi3", 550536],
    ["qi4", 405998],
    ["qia1", 1042],
    ["qia4", 20229],
    ["qian1", 117637],
    ["qian2", 477810],
    ["qian3", 23042],
    ["qian4", 20332],
    ["qiang1", 46544],
    ["qiang2", 21101],
    ["qiang3", 162261],
    ["qiang4", 2385],
    ["qiao1", 9978],
    ["qiao2", 51469],
    ["qiao3", 36105],
    ["qiao4", 7912],
    ["qie2", 5192],
    ["qie3", 144597],
    ["qie4", 137732],
    ["qin1", 150757],
    ["qin2", 44743],
    ["qin3", 2475],
    ["qin4", 1847],
    ["qing1", 329953],
    ["qing2", 322073],
    ["qing3", 102979],
    ["qing4", 19487],
    ["qiong2", 23167],
    ["qiu1", 35828],
    ["qiu2", 208771],
    ["qu1", 208015],
    ["qu2", 6078],
    ["qu3", 166276],
    ["qu4", 503704],
    ["quan1", 17115],
    ["quan2", 470281],
    ["quan3", 3042],
    ["quan4", 12587],
    ["que1", 38506],
    ["que4", 282853],
    ["qun2", 74521],
    ["ran2", 523734],
    ["ran3", 26168],
    ["rang3", 10441],
    ["rang4", 125660],
    ["rao2", 5079],
    ["rao3", 14252],
    ["rao4", 14172],
    ["re3", 5018],
    ["re4", 67051],
    ["ren2", 1885262],
    ["ren3", 24862],
    ["ren4", 408802],
    ["reng1", 8045],
    ["reng2", 67490],
    ["ri4", 363763],
    ["rong2", 163056],
    ["rou2", 14816],
    ["rou4", 30820],
    ["ru2", 456040],
    ["ru3", 20233],
    ["ru4", 193514],
    ["ruan3", 30350],
    ["rui3", 1373],
    ["rui4", 27525],
    ["run4", 16922],
    ["ruo4", 89865],
    ["sa3", 19964],
    ["sa4", 28804],
    ["sai1", 1522],
    ["sai4", 54062],
    ["san1", 304272],
    ["san3", 5511],
    ["san4", 39336],
    ["sang1", 13328],
    ["sang3", 3724],
    ["sang4", 15731],
    ["sao1", 6348],
    ["sao3", 5863],
    ["sao4", 15140],
    ["se4", 155077],
    ["sen1", 29533],
    ["seng1", 6920],
    ["sha1", 86840],
    ["sha3", 7167],
    ["sha4", 53169],
    ["shai1", 1166],
    ["shai4", 3124],
    ["shan1", 186391],
    ["shan3", 31196],
    ["shan4", 67091],
    ["shang1", 165038],
    ["shang3", 17347],
    ["shang4", 1107951],
    ["shang5", 2274],
    ["shao1", 26458],
    ["shao2", 2435],
    ["shao4", 227353],
    ["she1", 2835],
    ["she2", 18049],
    ["she4", 413008],
    ["shei2", 61528],
    ["shen1", 410476],
    ["shen2", 452423],
    ["shen3", 61455],
    ["shen4", 82001],
    ["sheng1", 941326],
    ["sheng2", 7256],
    ["sheng3", 58642],
    ["sheng4", 143299],
    ["shi1", 382903],
    ["shi2", 1837087],
    ["shi3", 536989],
    ["shi4", 4293312],
    ["shou1", 120897],
    ["shou3", 409742],
    ["shou4", 272962],
    ["shu1", 262768],
    ["shu2", 31542],
    ["shu3", 101771],
    ["shu4", 471728],
    ["shua3", 5109],
    ["shua4", 8773],
    ["shuai1", 15402],
    ["shuai3", 3208],
    ["shuai4", 8249],
    ["shuan1", 3605],
    ["shuang1", 72559],
    ["shuang3", 4368],
    ["shui3", 198933],
    ["shui4", 79035],
    ["shun4", 42354],
    ["shuo1", 874977],
    ["shuo4", 9311],
    ["si1", 608808],
    ["si3", 136194],
    ["si4", 310742],
    ["song1", 38705],
    ["song3", 5758],
    ["song4", 107929],
    ["sou1", 26975],
    ["sou4", 2438],
    ["su1", 73394],
    ["su2", 17463],
    ["su4", 227217],
    ["suan1", 14855],
    ["suan4", 106384],
    ["sui1", 81097],
    ["sui2", 87519],
    ["sui3", 2474],
    ["sui4", 72630],
    ["sun1", 31506],
    ["sun3", 37523],
    ["suo1", 23097],
    ["suo3", 581408],
    ["ta1", 2334385],
    ["ta3", 29454],
    ["ta4", 12526],
    ["tai1", 7256],
    ["tai2", 127337],
    ["tai4", 277746],
    ["tan1", 23051],
    ["tan2", 106562],
    ["tan3", 33168],
    ["tan4", 61933],
    ["tang1", 11620],
    ["tang2", 84938],
    ["tang3", 19723],
    ["tang4", 6028],
    ["tao1", 18474],
    ["tao2", 61109],
    ["tao3", 41717],
    ["tao4", 26301],
    ["te4", 239091],
    ["teng2", 27136],
    ["ti1", 16256],
    ["ti2", 400263],
    ["ti3", 273792],
    ["ti4", 34214],
    ["tian1", 428344],
    ["tian2", 60181],
    ["tian3", 1236],
    ["tiao2", 191280],
    ["tiao3", 18417],
    ["tiao4", 32554],
    ["tie1", 14888],
    ["tie3", 45798],
    ["tie4", 2191],
    ["ting1", 171529],
    ["ting2", 111540],
    ["ting3", 31483],
    ["tong2", 34578],
    ["tong3", 177494],
    ["tong4", 697116],
    ["tou1", 19006],
    ["tou2", 354619],
    ["tou4", 26836],
    ["tu1", 90401],
    ["tu2", 155921],
    ["tu3", 79809],
    ["tu4", 15550],
    ["tuan2", 104151],
    ["tui1", 82512],
    ["tui2", 1900],
    ["tui3", 17509],
    ["tui4", 52528],
    ["tun1", 9142],
    ["tun2", 5062],
    ["tuo1", 92573],
    ["tuo2", 11747],
    ["tuo3", 9935],
    ["tuo4", 7065],
    ["wa1", 12028],
    ["wa2", 8662],
    ["wa4", 24019],
    ["wa5", 4055],
    ["wai1", 5251],
    ["wai4", 295645],
    ["wan1", 51018],
    ["wan2", 180878],
    ["wan3", 82822],
    ["wan4", 137534],
    ["wang1", 8294],
    ["wang2", 33917],
    ["wang3", 70356],
    ["wang4", 433350],
    ["wei1", 170112],
    ["wei2", 191706],
    ["wei3", 180562],
    ["wei4", 1549634],
    ["wen1", 40653],
    ["wen2", 320552],
    ["wen3", 37065],
    ["wen4", 297700],
    ["weng1", 8702],
    ["wo1", 13536],
    ["wo3", 1690048],
    ["wo4", 46161],
    ["wu1", 65926],
    ["wu2", 401391],
    ["wu3", 310780],
    ["wu4", 593990],
    ["xi1", 583964],
    ["xi2", 120268],
    ["xi3", 86117],
    ["xi4", 292216],
    ["xia1", 6598],
    ["xia2", 60414],
    ["xia4", 667330],
    ["xian1", 240676],
    ["xian2", 46325],
    ["xian3", 179592],
    ["xian4", 700867],
    ["xiang1", 110391],
    ["xiang2", 80754],
    ["xiang3", 473015],
    ["xiang4", 911780],
    ["xiao1", 160793],
    ["xiao2", 1375],
    ["xiao3", 428303],
    ["xiao4", 277972],
    ["xie1", 409261],
    ["xie2", 111597],
    ["xie4", 165247],
    ["xin1", 683384],
    ["xin4", 235394],
    ["xing1", 87122],
    ["xing2", 794742],
    ["xing3", 26899],
    ["xing4", 450482],
    ["xiong1", 66869],
    ["xiong2", 37972],
    ["xiu1", 83019],
    ["xiu3", 3526],
    ["xiu4", 43271],
    ["xu1", 229779],
    ["xu2", 18175],
    ["xu3", 166034],
    ["xu4", 156678],
    ["xuan1", 53924],
    ["xuan2", 24969],
    ["xuan3", 82498],
    ["xuan4", 34208],
    ["xue1", 9318],
    ["xue2", 472033],
    ["xue3", 30997],
    ["xue4", 59944],
    ["xun1", 4568],
    ["xun2", 74826],
    ["xun4", 90374],
    ["ya1", 26887],
    ["ya2", 46455],
    ["ya3", 24527],
    ["ya4", 156279],
    ["ya5", 35343],
    ["yan1", 40078],
    ["yan2", 281197],
    ["yan3", 223257],
    ["yan4", 246649],
    ["yang1", 44052],
    ["yang2", 178735],
    ["yang3", 76098],
    ["yang4", 399279],
    ["yao1", 33371],
    ["yao2", 60978],
    ["yao3", 11029],
    ["yao4", 882933],
    ["ye2", 54105],
    ["ye3", 753465],
    ["ye4", 433207],
    ["yi1", 3253593],
    ["yi2", 186067],
    ["yi3", 1262437],
    ["yi4", 1166958],
    ["yin1", 489220],
    ["yin2", 60867],
    ["yin3", 123047],
    ["yin4", 77604],
    ["ying1", 137870],
    ["ying2", 126378],
    ["ying3", 112520],
    ["ying4", 321850],
    ["yo5", 3635],
    ["yong1", 34940],
    ["yong3", 78248],
    ["yong4", 538997],
    ["you1", 80415],
    ["you2", 440383],
    ["you3", 68196],
    ["you4", 2157764],
    ["yu1", 8865],
    ["yu2", 767961],
    ["yu3", 73311],
    ["yu4", 863697],
    ["yuan1", 9794],
    ["yuan2", 696563],
    ["yuan3", 110455],
    ["yuan4", 207638],
    ["yue1", 110223],
    ["yue4", 381178],
    ["yun2", 59071],
    ["yun3", 16351],
    ["yun4", 143600],
    ["za2", 44146],
    ["zai1", 24393],
    ["zai3", 6390],
    ["zai4", 2221244],
    ["zan4", 40877],
    ["zan5", 19554],
    ["zang1", 1321],
    ["zang4", 54612],
    ["zao1", 36602],
    ["zao2", 2880],
    ["zao3", 97859],
    ["zao4", 134667],
    ["ze2", 293345],
    ["zei2", 7045],
    ["zen3", 112294],
    ["zeng1", 97038],
    ["zeng4", 6004],
    ["zha1", 2797],
    ["zha2", 19784],
    ["zha3", 4393],
    ["zha4", 41260],
    ["zhai1", 11039],
    ["zhai2", 8464],
    ["zhai3", 5219],
    ["zhai4", 25685],
    ["zhan1", 10883],
    ["zhan3", 164916],
    ["zhan4", 408786],
    ["zhang1", 215570],
    ["zhang3", 37729],
    ["zhang4", 88041],
    ["zhao1", 41455],
    ["zhao3", 92038],
    ["zhao4", 156444],
    ["zhe1", 5914],
    ["zhe2", 51556],
    ["zhe3", 360974],
    ["zhe4", 1558087],
    ["zhe5", 626326],
    ["zhen1", 263552],
    ["zhen3", 20595],
    ["zhen4", 133951],
    ["zheng1", 137417],
    ["zheng3", 103560],
    ["zheng4", 742315],
    ["zhi5", 49855],
    ["zhi1", 826970],
    ["zhi2", 393090],
    ["zhi3", 655690],
    ["zhi4", 1259703],
    ["zhong5", 15258],
    ["zhong1", 133105],
    ["zhong3", 11559],
    ["zhong4", 1981434],
    ["zhou1", 195545],
    ["zhou3", 1877],
    ["zhou4", 41606],
    ["zhu1", 91765],
    ["zhu2", 50801],
    ["zhu3", 410078],
    ["zhu4", 405809],
    ["zhua1", 31675],
    ["zhua3", 4419],
    ["zhuai4", 1396],
    ["zhuan1", 88873],
    ["zhuan4", 126883],
    ["zhuang1", 124651],
    ["zhuang4", 95916],
    ["zhui1", 52705],
    ["zhui4", 6867],
    ["zhun3", 113877],
    ["zhuo1", 41721],
    ["zhuo2", 9315],
    ["zi1", 199928],
    ["zi3", 669512],
    ["zi4", 719905],
    ["zong1", 66582],
    ["zong3", 184470],
    ["zong4", 20599],
    ["zou1", 1591],
    ["zou3", 193619],
    ["zou4", 12859],
    ["zu1", 16052],
    ["zu2", 154865],
    ["zu3", 174064],
    ["zuan4", 10064],
    ["zui1", 16920],
    ["zui3", 30765],
    ["zui4", 345049],
    ["zun1", 36597],
    ["zuo2", 14406],
    ["zuo3", 51946],
    ["zuo4", 827478]
];
