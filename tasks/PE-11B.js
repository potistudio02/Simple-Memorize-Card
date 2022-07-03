var questions = [
	{q: "WHOとは", a: "世界保健機関 (World Health Organization)"},
	{q: "WHOの憲章条文", a: "健康とは、身体的・精神的・社会的に完全に良好な状態であり、単に病気あるいは虚弱でないことではない。"},
	{q: "昔の健康とは", a: "完全に良好な状態・無病息災であること"},
	{q: "現在の健康とは", a: "いきいきとした生活を送っていること"},

	{q: "精神症状・知的能力・満足感を含む健康の側面", a: "精神的側面"},
	{q: "身体症状・体力・抵抗力を含む健康の側面", a: "身体的側面"},
	{q: "人間関係・社会的役割・社会の仕組みを含む健康の側面", a: "社会的側面"},
	{q: "精神的側面の要素", a: "精神症状・知的能力・満足感"},
	{q: "身体的側面の要素", a: "身体症状・体力・抵抗力"},
	{q: "社会的側面の要素", a: "人間関係・社会的役割・社会の仕組み"},

	{q: "本人に係る健康の要因", a: "主体要因"},
	{q: "本人を取り巻く健康の要因", a: "環境要因"},

	{q: "生活習慣の主な主体要因", a: "運動・食事・飲酒・喫煙"},
	{q: "生物としての主体要因", a: "年齢・性別・遺伝・免疫"},
	{q: "自然環境の主な環境要因", a: "大気・水・土壌・動植物"},
	{q: "経済的・文化的環境の主な環境要因", a: "所得・職場・人間関係"},
	{q: "社会環境の主な環境要因", a: "保健・医療・サービス"},

	{q: "健康水準とは", a: "ある集団の健康の程度"},
	{q: "平均寿命とは", a: "生まれてばかりの0歳児の平均余命"},
	{q: "平均余命とは", a: "ある年の各年齢における死亡率が今後そのまま続くと仮定した場合、各年齢の人が後何年生きられるかを統計上予測した値"},

	{q: "日本人男子の平均寿命", a: "81.64歳"},
	{q: "日本人女子の平均寿命", a: "87.74歳"},
	{q: "日本人男子の健康寿命", a: "72.64歳"},
	{q: "日本人女子の健康寿命", a: "74.79歳"},

	{q: "平均寿命の長い国 1位", a: "84.3歳"},
	{q: "平均寿命の長い国 2位", a: "83.4歳"},
	{q: "平均寿命の長い国 3位", a: "83.2歳"},

	{q: "平均寿命の短い国 1位", a: "50.7歳"},
	{q: "平均寿命の短い国 2位", a: "53.1歳"},
	{q: "平均寿命の短い国 3位", a: "56.5歳"},

	{q: "平均寿命の世界平均", a: "73.3歳"},
	{q: "アフリカの国々の平均寿命が短い理由", a: "技術・医療が発達していないため、不衛生で病気になりやすいから"},

	{q: "男子平均寿命の長い県 1位", a: "滋賀県 : 81.7歳"},
	{q: "男子平均寿命の長い県 2位", a: "長野県 : 81.6歳"},
	{q: "男子平均寿命の長い県 3位", a: "京都府 : 81.4歳"},

	{q: "女子平均寿命の長い県 1位", a: "長野県 : 87.6歳"},
	{q: "女子平均寿命の長い県 2位", a: "岡山県 : 87.6歳"},
	{q: "女子平均寿命の長い県 3位", a: "島根県 : 87.6歳"},

	{q: "男子平均寿命の短い県 1位", a: "青森県 : 78.6歳"},
	{q: "男子平均寿命の短い県 2位", a: "秋田県 : 79.5歳"},
	{q: "男子平均寿命の短い県 3位", a: "岩手県 : 79.8歳"},

	{q: "女子平均寿命の短い県 1位", a: "長野県 : 85.9歳"},
	{q: "女子平均寿命の短い県 2位", a: "栃木県 : 86.2歳"},
	{q: "女子平均寿命の短い県 3位", a: "茨城県 : 86.3歳"},

	{q: "1950年の死亡原因 1位", a: "結核"},
	{q: "1950年の死亡原因 2位", a: "肺炎"},
	{q: "1950年の死亡原因 3位", a: "心臓病"},

	{q: "1980年の死亡原因 1位", a: "脳卒中"},
	{q: "1980年の死亡原因 2位", a: "がん"},
	{q: "1980年の死亡原因 3位", a: "心臓病"},

	{q: "2018年の死亡原因 1位", a: "がん"},
	{q: "2018年の死亡原因 2位", a: "心臓病"},
	{q: "2018年の死亡原因 4位", a: "脳卒中"},

	{q: "生活習慣と密接に関係している病気", a: "生活習慣病"},
	{q: "主な生活習慣病 6つ", a: "糖尿病・高血圧・脂質異常症・がん・歯周病・心筋梗塞"},
	{q: "高血圧とは", a: "血圧が上がり続け、動脈硬化が進む"},
	{q: "脂質異常症", a: ""},
	{q: "糖尿病", a: "血液中の糖の濃度が高い状態"},

	{q: "10歳 ~ 14歳の死因 1位", a: "がん"},
	{q: "10歳 ~ 14歳の死因 2位", a: "事故"},
	{q: "10歳 ~ 14歳の死因 3位", a: "自殺"},

	{q: "15歳 ~ 24歳の死因 1位", a: "自殺"},
	{q: "15歳 ~ 24歳の死因 2位", a: "事故"},
	{q: "15歳 ~ 24歳の死因 3位", a: "がん"},

	{q: "25歳 ~ 34歳の死因 1位", a: "自殺"},
	{q: "25歳 ~ 34歳の死因 2位", a: "事故"},
	{q: "25歳 ~ 34歳の死因 3位", a: "心疾患"},

	{q: "35歳 ~ 39歳の死因 1位", a: "自殺"},
	{q: "35歳 ~ 39歳の死因 2位", a: "がん"},
	{q: "35歳 ~ 39歳の死因 3位", a: "心疾患"},

	{q: "40歳 ~ 49歳の死因 1位", a: ""},
	{q: "40歳 ~ 49歳の死因 2位", a: ""},
	{q: "40歳 ~ 49歳の死因 3位", a: ""},

	{q: "古代での病気の考え", a: "人知を超えた超自然・たたりによるものとされていた"},
	{q: "現代での病気の考え", a: "人体の正常からの逸脱である異常のこと"},

	{q: "生活習慣病のかつての呼ばれ方", a: "成人病"},
	{q: "かつての生活習慣病の対処方", a: "早期発見・早期治療"},

	{q: "現在の生活習慣病の対処法", a: "生活習慣を改善する"},
	{q: "生活習慣を見直すのに大事なこと", a: "運動習慣・食習慣"},
	{q: "生活習慣病の予防には", a: "健康的な生活習慣を続ける"},

	{q: "生活習慣病の一次予防", a: "健康的な生活習慣を続けて、発病のリスクを減らす"},
	{q: "生活習慣病の二次予防", a: "定期的な健康診断による早期発見・早期治療"},
	{q: "生活習慣病の三時予防", a: "生活習慣の指導・重症化した病気の治療・社会復帰するための治療・指導・リハビリ"},

	{q: "人の細胞の数", a: "約37兆個"},
	{q: "日本人の死亡原因 1位", a: "がん"},
	{q: "がんとは", a: "遺伝子の異常によって、勝手に増殖をするようになった細胞集団 (腫瘍) の中でも、特に周囲の細胞に浸透・転移を起こすもののこと"},
	{q: "肺がんとは", a: "呼吸困難・胸・背中の痛みを伴う。主な原因はたばこ。早期治療によって、ほとんど治すことができる"},
	{q: "がんには自覚症状が...", a: "ない"},
	{q: "早期発見のためには...", a: "がん検診が大切"},
	{q: "がんの手術療法とは", a: "がん細胞を手術によって切り取る。体への負担が大きい"},
	{q: "がんの化学療法とは", a: "抗がん・点滴・注射など。副作用が強い"},
	{q: "がんの放射線治療とは", a: "放射線を照射し、がん細胞を死滅させる"},
	{q: "納得するがん治療方法を選択すること", a: "インフォームドコンセント"},
	{q: "インフォームドコンセントとは", a: "納得するがん治療方法を選択すること"},
	{q: "がん治療において必要な", a: "免疫療法、身体的・精神的・経済的ケア"},
	{q: "QOLとは", a: "生活の質 (Quality of Life)"},
	{q: "がんゲノム医療とは", a: "その人の遺伝子に合った治療法でがんを治療すること"},
];
