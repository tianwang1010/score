<template>
	<div class="index">
		<div class="cont">
			<div class="contTop">
				<div class="contLeft">
					<el-carousel style="background:black;">
						<el-carousel-item v-for="(img, index) in swiper" :key="index">
							<img :src="img.imageUrls[0]" alt @click="gosh(img.id, index)" />
							<span class="title">{{ img.title }}</span>
						</el-carousel-item>
					</el-carousel>
				</div>
				<div class="contRight">
					<div class="contTopT pa" @click="goMatch(recentMatch[0])">
						<div class="gm">
							<img :src="recentMatch[0].imageUrl" alt="" />
							<h4>{{ recentMatch[0].team1 }}</h4>
						</div>
						<div class="score">
							<h4>{{ recentMatch[0].lx }}</h4>
							<p>未开赛</p>
						</div>
						<div class=" gm1">
							<img :src="recentMatch[0].imageUrl1" alt="" />
							<h4>{{ recentMatch[0].team2 }}</h4>
						</div>
					</div>
					<div class="contTopB pa" @click="goMatch(recentMatch[1])">
						<div class="gm">
							<img :src="recentMatch[1].imageUrl" alt="" />
							<h4>{{ recentMatch[1].team1 }}</h4>
						</div>
						<div class="score">
							<h4>{{ recentMatch[1].lx }}</h4>
							<p>未开赛</p>
						</div>
						<div class=" gm1">
							<img :src="recentMatch[1].imageUrl1" alt="" />
							<h4>{{ recentMatch[1].team2 }}</h4>
						</div>
					</div>
				</div>
			</div>
			<div class="contBot">
				<div class="contBotL">
					<div class="contNav">
						<ul>
							<li v-for="(choice, index) in dataChoice" :key="index" @click="changeNews(index)">
								<span :class="index == active ? 'active' : ''">{{ choice.name }}</span>
							</li>
						</ul>
					</div>
					<div class="contCont">
						<ul>
							<li v-for="(inf, index) in info" :key="index" @click="goshow(inf.id)" id="news">
								<div class="imgUrl"><img :src="inf.imageUrls[0]" alt="木有图片" title="木有图品" /></div>
								<div class="newsRight">
									<p class="ptitle">{{ inf.title }}</p>
									<p class="ptime">{{ inf.publishDateStr }} {{ inf.posterScreenName }}</p>
								</div>
							</li>
						</ul>
						<p class="addMore" @click="addMore" v-if="hasNext < 3">加载更多...</p>
						<p class="addMore" v-else>到底了，兄弟</p>
					</div>
				</div>
				<div class="contBotR">
					<div class="botNav">
						<h2>积分榜</h2>
						<span @click="$router.push('/data')">更多</span>
					</div>
					<div class="botChoice">
						<ul>
							<li v-for="(site, index) in dataChoice" :key="index" :class="index == active1 ? 'active' : ''" @click="changels(index)">
								<span>{{ site.name }}</span>
							</li>
						</ul>
					</div>
					<div class="teams">
						<div class="teamsNav">
							<span class="rank">排名</span>
							<span class="teamName">球队</span>
							<span class="rel">胜/平/负</span>
							<span class="stat">积分</span>
						</div>
						<div class="footTeam">
							<ul class="teamsUl">
								<li v-for="(team, index) in jTeam" :key="index" class="teamPm" @click="goTeamInfo(team.name)">
									<span class="cx">{{ index + 1 }}</span>
									<span>
										<img :src="team.imageUrl" alt class="teamLogo" />
										{{ team.name }}
									</span>
									<span>{{ team.winM }} / {{ team.equalM }} / {{ team.loseM }}</span>
									<span>{{ team.score }}</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'index',
	data() {
		return {
			active: 0,
			active1: 0,
			allInfo: '',
			hasNext: 1,
			// 五大联赛
			jTeam: '',
			// 具体联赛
			teamMc: '',
			onFetching: false,
			page: 0,
			dataChoice: [{ name: '西甲' }, { name: '英超' }, { name: '意甲' }, { name: '德甲' }, { name: '中超' }],
			recentMatch: '',
			swiper: [],
			info: '',
			infoIndex: [141, 140, 139, 138, 65]
		};
	},

	created() {
		this.$store.commit('increment');
		this.$store.state.active1 = 0;
		(this.$store.state.infoYa = null),
			//获取新闻
			this.getNews();

		// 获取五大联赛数据
		this.getMatchData();
		//获取最近比赛数据
		this.getRecentMatch();
		// 获取轮播图
		this.getSwiper();
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll, true);
	},
	methods: {
		//     handleScroll(){
		//       let scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
		//       if(scrollTop == 1200){
		//         console.log(123);
		//         for(var k in this.info){
		//           this.info.push(this.info[k])
		//         }
		//       }
		//       console.log('据顶部距离',scrollTop)
		// },
		addMore() {
			this.hasNext++;
			for (var k in this.info) {
				this.info.push(this.info[k]);
			}
		},
		getRecentMatch() {
			this.$http({
				method: 'get',
				url: 'https://www.easy-mock.com/mock/5c94b8ef6ae9b20872ade3b5/football/recentMatch'
			}).then(res => {
				console.log(res.data.data);
				this.recentMatch = res.data.data.recentMatch;
				console.log(this.recentMatch);
			});
		},
		// 获取五大联赛排名数据
		getMatchData() {
			this.$http({
				method: 'get',
				url: 'https://www.easy-mock.com/mock/5c94b8ef6ae9b20872ade3b5/football/match'
			}).then(res => {
				console.log('mozk', res.data);

				this.$store.state.teamMc = this.teamMc = res.data.data;
				this.$store.state.jTeamYa = this.jTeam = this.teamMc.xj;
			});
		},
		// 转变各大联赛排名
		changels(index) {
			this.active1 = this.$store.state.active1 = index;
			if (index == 0) {
				this.$store.state.jTeamYa = this.jTeam = this.teamMc.xj;
			}
			if (index == 1) {
				this.$store.state.jTeamYa = this.jTeam = this.teamMc.yc;
			}
			if (index == 2) {
				this.$store.state.jTeamYa = this.jTeam = this.teamMc.yj;
			}
			if (index == 3) {
				this.$store.state.jTeamYa = this.jTeam = this.teamMc.dj;
			}
			if (index == 4) {
				this.$store.state.jTeamYa = this.jTeam = this.teamMc.zc;
			}
		},
		// 球队详情页面
		goTeamInfo(teamName) {
			this.$store.state.teamName = teamName;
			this.$router.push({ name: 'teamInfo' });
		},
		// 比赛详情页面
		goMatch(match) {
			this.$store.state.firstShow = match.team1;

			this.$store.state.matchLx = match.lx;
			this.$store.state.nextShow = match.team2;
			this.$store.state.firstImg = match.imageUrl;
			this.$store.state.nextImg = match.imageUrl1;
			this.$store.state.time = match.time;
			console.log(this.$store.state.nextShow);
			this.$router.push('/matchZb');
		},
		// 新闻展示页面
		goshow(id) {
			this.$router.push({ path: '/newsShow', query: { idYa: id } });
		},
		gosh(id, index) {
			console.log(index, 'sh');

			if (index == 0) {
				this.$store.state.matchInfo = this.allInfo.xj;
				this.$store.state.jTeamYa = this.teamMc.xj;
			}
			if (index == 1) {
				this.$store.state.matchInfo = this.allInfo.yj;
				this.$store.state.jTeamYa = this.teamMc.yj;
			}
			if (index == 2) {
				this.$store.state.matchInfo = this.allInfo.dj;
				this.$store.state.jTeamYa = this.teamMc.dj;
			}
			if (index == 3) {
				this.$store.state.matchInfo = this.allInfo.yc;
				this.$store.state.jTeamYa = this.teamMc.yc;
			}
			if (index == 4) {
				this.$store.state.matchInfo = this.allInfo.zc;
				this.$store.state.jTeamYa = this.teamMc.zc;
			}
			this.$router.push({ path: '/newsShow', query: { idYa: id } });
		},
		//获取新闻
		getNews() {
			this.$http({
				method: 'get',
				url: 'https://www.easy-mock.com/mock/5c94b8ef6ae9b20872ade3b5/football/turnImgs'
			}).then(res => {
				console.log(res.data, '所有比赛信息');
				this.allInfo = res.data.data;
				console.log(this.allInfo, '所有的球员信息');
				if (this.allInfo != '') {
					this.changeNews(0);
				}
			});
			console.log('weqewqeqwe');
		},
		// 各联赛新闻页面
		changeNews(index) {
			this.hasNext = 1
			console.log(index, 1235456);
			this.active = index;
			this.$store.state.active1 = index;
			if (index == 0) {
				this.info = this.allInfo.xj;
			}
			if (index == 1) {
				this.info = this.allInfo.yc;
			}
			if (index == 2) {
				this.info = this.allInfo.yj;
			}
			if (index == 3) {
				this.info = this.allInfo.dj;
			}
			if (index == 4) {
				this.info = this.allInfo.zc;
			}
			if (index == 0) {
				this.$store.state.jTeamYa = this.teamMc.xj;
			}
			if (index == 1) {
				this.$store.state.jTeamYa = this.teamMc.yc;
			}
			if (index == 2) {
				this.$store.state.jTeamYa = this.teamMc.yj;
			}
			if (index == 3) {
				this.$store.state.jTeamYa = this.teamMc.dj;
			}
			if (index == 4) {
				this.$store.state.jTeamYa = this.teamMc.zc;
			}
			this.$store.state.matchInfo = this.info;
			console.log(this.info, '联赛新闻');
		},
		// 轮播图展示数据
		getSwiper() {
			this.$http({
				method: 'get',
				url: 'https://www.easy-mock.com/mock/5c94b8ef6ae9b20872ade3b5/football/swiperImgs'
			}).then(res => {
				this.swiper = res.data.data.news;
				console.log(this.swiper, '轮播图新闻');
			});
		}
	}
};
</script>
<style scoped>
.addMore {
	text-align: center;
	margin-top: 30px;
	font-size: 20px;
	line-height: 30px;
	color: grey;
	cursor: pointer;
}
.addMore:hover {
	color: #16b13a;
}
.index {
	width: 100%;
	margin-top: 60px;
}
.contNav .active {
	color: #16b13a;
	display: inline-block;
	height: 100%;
	box-sizing: border-box;
	border-bottom: 1px solid #16b13a;
}
.cont {
	width: 1000px;
	margin: 0 auto;
	overflow: hidden;
}
.contTop {
	width: 1000px;
	overflow: hidden;

	padding-top: 35px;
}
.contLeft {
	width: 640px;
	height: 256px;
	float: left;
	text-align: center;
}
.contLeft img {
	width: 640px;
}
.title {
	position: absolute;
	bottom: 50px;
	left: 0;
	right: 0;
	color: yellow;
	font-weight: 700;
}
.contRight {
	float: right;
	width: 360px;
	background: #333333;
}

.contBot {
	width: 100%;
	overflow: hidden;
	margin-top: 30px;
}
.opa {
	border-bottom: 2px solid white;
}
.opa:hover {
	opacity: 0.5;
}
.contNav {
	background: white;
	overflow: hidden;
	border-bottom: 1px solid grey;
}
.contNav li {
	width: 60px;
	line-height: 30px;
	font-size: 16px;
	text-align: left;
	float: left;
	color: black;
	cursor: pointer;
}
.contNav li:hover {
	color: #16b13a;
}

.contCont {
	overflow: hidden;
}
.contCont li {
	width: 100%;
	height: 100px;
	padding: 20px 0;
	position: relative;
	overflow: hidden;
	border-bottom: 1px solid #e6eaed;
	cursor: pointer;
	color: #999;
}
.newsRight {
	overflow: hidden;
}
.imgUrl img {
	float: left;
	display: block;
	margin-right: 25px;
	width: 140px;
	height: 105px;
	line-height: 120px;
}
.ptitle {
	color: black;
	font-size: 20px;
}
.ptime {
	position: absolute;
	bottom: 20px;
	font-size: 14px;
}
.contBotL {
	float: left;
	width: 640px;
}
.contBotR {
	float: right;
	width: 300px;
	overflow: hidden;
}
.botNav {
	width: 100%;
	height: 30px;
	text-align: right;
	line-height: 29px;
	border-bottom: 1px solid #16b13a;
	color: #666;
}
h2 {
	float: left;
	padding: 0 15px;
	line-height: 30px;
	font-size: 14px;
	color: white;
	background: #16b13a;
}
.botChoice {
	margin: 15px 0;
	overflow: hidden;
	border-bottom: 1px solid #e6eaed;
}
.botChoice li {
	float: left;
	width: 28px;
	line-height: 20px;
	margin-right: 15px;
	font-size: 14px;
}
.teams {
	overflow: hidden;
}
.teamsNav {
	background: blue;

	color: #333;
}
.teamsNav span {
	line-height: 36px;
	display: block;
	float: left;
	font-size: 12px;
	font-weight: bold;
}
.rank {
	width: 36px;
	padding: 0;
	border: 0;
	background: #f1f1f1;
	color: #333;
	text-align: center;
}
.teamName {
	width: 133px;
	text-align: left;
	text-indent: 24px;
	background: #f1f1f1;
}
.rel {
	width: 89px;
	background: #f1f1f1;
	text-align: center;
}
.stat {
	width: 40px;
	background: #f1f1f1;
	text-align: center;
}
.footTeam {
	font-size: 0;
	border: 1px solid #f1f1f1;
}
.teamPm span {
	text-align: center;
	display: inline-block;
	line-height: 36px;
	font-size: 12px;
	font-family: Helvetica;
}
.cx {
	font-weight: 700;
	font-size: 14px;
}
.teamPm span:nth-child(1) {
	width: 36px;
}
.teamPm span:nth-child(2) {
	text-align: left;
	text-indent: 15px;
	width: 133px;
}
.teamPm span:nth-child(3) {
	width: 89px;
}
.teamPm span:nth-child(4) {
	width: 40px;
}
.teamLogo {
	width: 20px;
	height: 20px;
	vertical-align: middle;
}
.teamsUl li {
	cursor: pointer;
}
.teamsUl li:nth-child(even) {
	background: #f1f1f1;
}
.teamsUl li:nth-child(1) .cx {
	color: red;
}
.teamsUl li:nth-child(2) .cx {
	color: #ffa800;
}
.teamsUl li:nth-child(3) .cx {
	color: #16b13a;
}
.active {
	color: #16b13a;
}
.contTopT,
.contTopB {
	text-align: center;
	color: white;
}
.contTopT {
	border-bottom: 1px solid #252525;
}
.contTopB {
	border-top: 1px solid #252525;
}
.pa {
	padding: 20px 10px;
	height: 88px;
}
.contRight img {
	width: 50px;
}
.gm {
	margin-top: 8px;
	float: left;
	width: 120px;
}
.gm h4 {
	margin-top: 10px;
}

.gm1 h4 {
	font-weight: 700;
	margin-top: 10px;
}
.gm1 {
	margin-top: 8px;
	float: right;
	width: 120px;
}

.score {
	width: 90px;
	margin-left: 5px;
	vertical-align: middle;

	float: left;
	padding-top: 10px;
}
.score h4 {
	font-size: 12px;
	color: grey;
}
.score p {
	line-height: 80px;
	font-size: 30px;
}
</style>
