<template>
	<Header />
	<main>
		<section class="max-w-6xl mx-auto px-4 sm:px-6">
			<div class="py-6 md:py-10">
				<div class="text-3xl">{{projectInfo.title}}</div>
				<div class="grid md:(grid-cols-3 p-2) sd:(grid-cols-1)">
					<div class="flex flex-col justify-center">
						<n-statistic :label="t('project.tasks')" :value="projectData.workingTasks">
							<template #suffix>/{{projectData.finishedTasks}}/{{projectData.pendingTasks}}</template>
						</n-statistic>
					</div>
					<div class="flex flex-col justify-center">
						<n-statistic :label="t('project.feeStates')" :value="projectData.used">
							<template #prefix>
							</template>
							<template #suffix>
								/ {{projectData.needed}} {{projectData.symbol1}}
							</template>
						</n-statistic>
					</div>
					<div class="flex flex-col justify-center">
						<n-statistic :label="t('project.vault')">
							{{projectData.vault}} {{projectData.symbol2}}
						</n-statistic>
					</div>
				</div>
				<n-card>
					<n-tabs type="line" animated default-value="plans">
						<n-tab-pane name="info" :tab="t('project.info')">
							<v-md-preview :text="pInfoData" />
						</n-tab-pane>
						<n-tab-pane name="plans" :tab="t('project.plans')">
							<v-md-preview :text="testData" />
							<div class="">


							</div>
						</n-tab-pane>
						<n-tab-pane name="budgets" :tab="t('project.budgets')">
							<div class="">


							</div>
						</n-tab-pane>
						<n-tab-pane name="mans" :tab="t('project.mans')">
							<div class="">


							</div>
						</n-tab-pane>
					</n-tabs>
				</n-card>
			</div>
		</section>
	</main>
	<Footer />
</template>
<script setup lang="ts">
import axios from 'axios';

const { t } = useI18n();

const route = useRoute();
const id = route.params.id;
const projectInfo = ref<any>({
	description: ''
});
const pInfoData = ref<string>(``);
const testData = ref<string>(`
$$sum_{i=1}^n a_i=0$$

\`\`\`mermaid
gantt
	axisFormat  %m-%d
	title 平台基础功能开发
	section 详细设计
		需求分析讨论	:m2t1,	20220818,	3d
		v1功能模块详细设计	:m2t2,	after m2t1,	5d
	section TAsite
		TAsite基础框开发架搭建	:m2t3,	after m2t2,	5d
		集成整合钱包交互基本功能	:m2t4,	after m2t3,	5d
		实现web3.storage集成	:m2t5,	after m2t4,	5d
		TAadmin V0.1基础功能实现	:m2t6,	after m2t4,	3d
		ProjectFactory项目管理基础功能	:m2t7,	after m2t5,	3d
		ProjectFactory数据展示与客户交互	:m2t8,	after m2t7,	3d
		ProjectFactory的参与人相关功能	:m2t9,	after m2t7,	3d
	section TAcontracts
		TAcontracts基础框开发架搭建	:m2t10,	20220825,	3d
		TADAO合约开发	:m2t11,	after m2t10,	1d
		TANFT合约开发	:m2t12,	after m2t11,	2d
		TAService合约开发	:m2t13,	after m2t12,	6d
	section TAadmin
		单元测试基础框架	:m2t14,	after m2t3,	3d
		TADAO+TANFT合约单元测试	:m2t15,	after m2t14,	3d
		TAService合约单元测试	:m2t16,	after m2t14,	9d
		所有平台合约的集成测试	:m2t17,	after m2t13,	20d
		合约配置管理	:m2t18,	after m2t10,	2d
		TAadminv0.1的合约部署与更新	:m2t19,	after m2t6,	3d
	section TAserver
		TAserver基础框架搭建	:m2t20,	after m2t13,	5d
		实现索引机器人	:m2t21,	after m2t20,	10d
		TAserver与TAsite集成整合	:m2t22,	after m2t21,	10d
	section 平台运营
		EVM主链商务对接	:m2t23,	after m2t2,	15d
		市场推广	:m2t24,	after m2t23,	10d
		正式启动001号项目	:m2t25,	after m2t13,	10d
		平台第1阶段成果验收	:m2t26,	after m2t22,	10d
		功能测试与功能完善	:m2t27,	after m2t26,	20d
\`\`\``);

const projectData = ref<any>({
	workingTasks: 10,
	finishedTasks: 20,
	pendingTasks: 200,
	used: '3,000',
	needed: '123,000',
	symbol1: 'USDT',
	vault: '200',
	symbol2: 'BNB',

});

onMounted(async () => {
	const pInfoMd = await axios.get('/projects/project' + id + '.md');
	pInfoData.value = pInfoMd.data.toString();
	const pInfo = await axios.get('/projects/project' + id + '.json');
	projectInfo.value = pInfo.data;
	// const pData = await axios.get('/projects/project' + id + 'Data.json');
	// projectData.value = pData.data;

	console.log(projectInfo.value);
});
</script>
