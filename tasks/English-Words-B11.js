var questions = [
	{q: "show", a: "見せる, 明らかにする"},
	{q: "ask", a: "尋ねる, 頼む"},
	{q: "answer", a: "答える, 解答"},
	{q: "think", a: "～と思う"},
	{q: "know", a: "知っている"},
	{q: "find", a: "～だと気づく, 見つける"},
	{q: "understand", a: "理解する"},

	{q: "everything", a: "全てのもの"},
	{q: "something", a: "何か, ある物"},
	{q: "anything", a: "疑: 何か, 否: 何も"},
	{q: "nothing", a: "何も ･･･ ない"},
	{q: "everyone", a: "みんな, 誰でも"},
	{q: "someone", a: "誰か"},
	{q: "anyone", a: "肯: 誰でも, 否: 誰も, 疑: 誰か"},
	{q: "nobody", a: "誰も ･･･ ない"},
	{q: "none", a: "何も ･･･ ない"},
	{q: "many", a: "(数が)多くの, たくさんの"},
	{q: "much", a: "(量が)たくさんの, とても"},

	{q: "all", a: "全ての, 全て, まったく"},
	{q: "every", a: "どの ･･･ も, 全ての"},
	{q: "each", a: "それぞれ"},
	{q: "another", a: "もう一つの"},
	{q: "other", a: "他の, もう一方"},

	{q: "run away (from ...)", a: "(･･･から)逃げる"},
	{q: "look after ...", a: "･･･の世話をする"},
	{q: "look up ...", a: "見上げる"},
	{q: "see off ...", a: "･･･を見送る"},
	{q: "hear of ...", a: "･･･について聞く"},
	{q: "say hello to ...", a: "･･･によろしく言う"},
	{q: "say to oneself", a: "自分に言い聞かせる"},
	{q: "talk to oneself", a: "独り言を言う"},
	{q: "would like to do", a: "･･･したいのですが"},
	{q: "be going to do", a: "･･･するつもり"},

	{q: "have", a: "持っている, ･･･がある"},
	{q: "get", a: "もらう, 手に入れる, ･･･に着く"},
	{q: "take", a: "･･･を取る, 乗っていく, ･･･をする"},
	{q: "bring", a: "持ってくる"},
	{q: "give", a: "与える, あげる"},
	{q: "make", a: "つくる, ･･･の状態にする"},
	{q: "put", a: "置く, 記入する"},
	{q: "go", a: "行く"},
	{q: "come", a: "来る, ･･･の出身"},
	{q: "keep", a: "保つ, 取っておく"},
	{q: "leave", a: "去る, 出ていく"},

	{q: "sight", a: "見ること, 視野"},
	{q: "view", a: "眺め"},
	{q: "sound", a: "音, ･･･のように聞こえる"},
	{q: "noise", a: "騒音, 雑音"},
	{q: "instrument", a: "楽器"},
	{q: "plate", a: "皿, 板"},
	{q: "mirror", a: "鏡"},
	{q: "brush", a: "ブラシ, ブラシをかける"},
	{q: "fashion", a: "流行"},
	{q: "style", a: "様式, ･･･風"},
	{q: "ceremony", a: "式典, 儀式"},
	{q: "contest", a: "コンテスト"},
	{q: "concert", a: "コンサート"},

	{q: "favorite", a: "大好きな, お気に入りの"},
	{q: "popular", a: "人気のある, 一般的な"},
	{q: "famous", a: "有名な"},
	{q: "familiar", a: "よく知られた"},
	{q: "fresh", a: "新鮮な"},
	{q: "social", a: "社会の"},
	{q: "official", a: "公式の, 公認の"},
	{q: "central", a: "中心の, 主要な"},
	{q: "medium", a: "中間, 中くらい"},

	{q: "knock", a: "ノックする, ぶつかる"},
	{q: "hit", a: "打つ, ぶつかる"},
	{q: "shut", a: "閉める"},
	{q: "shake", a: "振る, 揺する"},
	{q: "mix", a: "混ぜる"},
	{q: "tie", a: "縛る, 結ぶ"},
	{q: "hang", a: "掛ける, 吊るす"},
	{q: "print", a: "印刷する, 印刷物"},

	{q: "hero", a: "英雄, 主人公"},
	{q: "host", a: "主人, 主催者"},
	{q: "volunteer", a: "ボランティア"},
	{q: "guide", a: "案内人, 案内する"},
	{q: "generation", a: "世代"},
	{q: "kid", a: "子供"},
	{q: "fool", a: "バカ, 愚か者"},
	{q: "dream", a: "夢, 願い"},
	{q: "mystery", a: "謎, 神秘"},
	{q: "trick", a: "トリック, たくらみ, いたずら"},

	{q: "few", a: "少数の, (数が)ほとんどない"},
	{q: "little", a: "少量の, (量が)ほとんどない, 小さい"},
	{q: "less", a: "･･･より少ない, ほど･･･でない"},
	{q: "least", a: "最小の, 最も･･･ない"},
	{q: "several", a: "いくつかの"},
	{q: "full", a: "いっぱいの, 満ちた, 最大の"},

	{q: "mark", a: "印を付ける"},
	{q: "check", a: "調べる, 確認する, 調査"},
	{q: "change", a: "･･･を変える, 変化"},
	{q: "turn", a: "振り返る, ･･･を曲がる, 順番"},
	{q: "pick", a: "･･･を選ぶ, 摘まみ取る"},
	{q: "drive", a: "車で行く, 運転する"},
	{q: "deliver", a: "配達する, 届ける"},

	{q: "half", a: "半分, 2分の1"},
	{q: "part", a: "部分, 役割"},
	{q: "section", a: "区画"},
	{q: "block", a: "街区, かたまり"},
	{q: "passage", a: "通路, 廊下"},
	{q: "side", a: "面, 側面"},
	{q: "top", a: "頂上, 上部"},
	{q: "bottom", a: "底, 下部"},
	{q: "space", a: "空間, 場所, 宇宙"},
	{q: "chance", a: "機会, 可能性"},

	{q: "usual", a: "いつもの"},
	{q: "common", a: "普通の, 共通の"},
	{q: "perfect", a: "完全な, 完璧な"},
	{q: "special", a: "特別の"},
	{q: "important", a: "重要な"},
	{q: "secret", a: "秘密の, 秘密"},
	{q: "thick", a: "厚い, 太い"},
	{q: "deep", a: "深い, 深く"},
	{q: "tight", a: "きつい, 余裕のない"},
	{q: "loud", a: "(音が)大きい, 大声で"},
]
