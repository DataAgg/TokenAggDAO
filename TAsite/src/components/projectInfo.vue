<template>
	<Header />
	<main>
		<section class="max-w-6xl mx-auto px-4 <sm:px-1">
			<div class="md-body md:py-6 sm:py-1">
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
				<n-tabs type="line" animated default-value="budgets">
					<n-tab-pane name="info" :tab="t('project.info')">
						<v-md-preview :text="pInfoData" />
					</n-tab-pane>
					<n-tab-pane name="plans" :tab="t('project.plans')">
						<n-collapse v-if="projectSections.length>0" arrow-placement="right">
							<n-collapse-item v-for="(section, idx) in projectSections" :key="idx" :title="section.title" :name="idx">
								<template #header-extra>{{section.summary}}</template>
								<v-md-preview :text="section.mdGantt" />
								{{section.description}}
								<div class="table border-collapse empty-cells-visible">
									<div class="table-header-group bg-blue-200">
										<div class="table-row">
											<div class="wtablecell font-medium">{{t('tasktable.no')}}</div>
											<div class="wtablecell font-medium">{{t('tasktable.category')}}</div>
											<div class="wtablecell font-medium">{{t('tasktable.title')}}</div>
											<div class="wtablecell font-medium">{{t('tasktable.summary')}}</div>
											<div class="wtablecell font-medium">{{t('tasktable.status')}}</div>
											<div class="wtablecell font-medium">&nbsp;</div>
										</div>
									</div>
									<div class="table-row-group">
										<div class="table-row" v-for="(task, idx) in section.mdTasks" :key="idx">
											<div class="wtablecell">{{idx}}</div>
											<div class="wtablecell">{{task.category}}</div>
											<div class="wtablecell">{{task.title}}
												<div class="text-gray-500">{{task.description}}</div>
											</div>
											<div class="wtablecell font-medium">{{task.summary}}</div>
											<div class="wtablecell font-medium">
												<n-tag type="warning" size="small" round v-if="task.status == 0">{{t('tasktable.status_pending')}}</n-tag>
												<n-tag type="info" size="small" round v-if="task.status == 1">{{t('tasktable.status_working')}}</n-tag>
												<n-tag type="success" size="small" round v-if="task.status == 10">{{t('tasktable.status_finished')}}</n-tag>
											</div>
											<div class="wtablecell font-medium">
												<n-dropdown trigger="hover" :options="ActionOptions" :show-arrow="true">
													{{t('tasktable.actions')}}
												</n-dropdown>
											</div>
										</div>
									</div>
								</div>
							</n-collapse-item>
						</n-collapse>
					</n-tab-pane>
					<n-tab-pane name="budgets" :tab="t('project.budgets')">
						<h3>1.平台开发费用</h3>
						<table class="table w-full border-collapse empty-cells-visible">
							<thead class="table-header-group bg-blue-200">
								<tr>
									<td class="font-bold">{{t('feetable.no')}}</td>
									<td class="font-bold">{{t('feetable.category')}}</td>
									<td class="font-bold">{{t('feetable.title')}}</td>
									<td class="font-bold">{{t('feetable.manType')}}</td>
									<td class="font-bold">{{t('feetable.costMan')}}</td>
									<td class="font-bold">{{t('feetable.costTime')}}</td>
									<td class="font-bold">{{t('feetable.costTotal')}}({{planProject.unit}})</td>
								</tr>
							</thead>
							<tbody>
								<template v-for="(data) in planProjectFeeTxt.sections">
									<tr>
										<td class="font-bold" colspan="6">{{data[0]}}</td>
										<td class="font-bold" align="right">
											<span class="font-bold mx-1">{{f.fixMoney(data[1].sum, 2, true)}}</span>{{planProject.unit}}
										</td>
									</tr>
									<tr v-for="(task, idx) in data[1].items" :key="idx">
										<td class="wtablecell">{{task.no}}</td>
										<td class="wtablecell">{{task.category}}</td>
										<td class="wtablecell">{{task.title}}</td>
										<td class="wtablecell font-medium">{{manTitle(task)}}</td>
										<td class="wtablecell font-medium">{{task.costMan}}</td>
										<td class="wtablecell font-medium">{{task.costTime}}</td>
										<td class="wtablecell font-medium">{{f.fixMoney(task.costTotal, 2, true)}}</td>
									</tr>
								</template>
							</tbody>
						</table>
						<ul>
							<li>人员平均成本:
								<ul>
									<li v-for="(man,idx) in planProjectFeeTxt.mans" :key="idx">{{man.title}}: <span class="font-bold mx-1">{{f.fixMoney(man.price*30, 1)}}</span>{{planProject.unit}}/月</li>
								</ul>
							</li>
							<li>平台开发费用粗略按照人工耗时*人员工时工资进行计算,没有包含人员占用空闲时间成本及额外加班成本,所以整体时间预估相对宽松</li>
						</ul>

						<h3>2.实施运维费用</h3>
						<table class="table w-full border-collapse empty-cells-visible">
							<thead class="table-header-group bg-blue-200">
								<tr>
									<td class="font-bold">{{t('feetable2.no')}}</td>
									<td class="font-bold">{{t('feetable2.category')}}</td>
									<td class="font-bold">{{t('feetable2.title')}}</td>
									<td class="font-bold">{{t('feetable2.quantity')}}</td>
									<td class="font-bold">{{t('feetable2.total')}}({{planProject.unit}})</td>
									<td class="font-bold">{{t('feetable2.comments')}}</td>
								</tr>
							</thead>
							<tbody>
								<template v-for="(data) in planProjectFeeTxt.others">
									<tr>
										<td class="font-bold" colspan="5">{{data[0]}}</td>
										<td class="font-bold" align="right">
											<span class="font-bold mx-1">{{f.fixMoney(data[1].sum, 2, true)}}</span>{{planProject.unit}}
										</td>
									</tr>
									<tr v-for="(task, idx) in data[1].items" :key="idx">
										<td class="wtablecell">{{task.no}}</td>
										<td class="wtablecell">{{task.title}}</td>
										<td class="wtablecell">{{task.description}}</td>
										<td class="wtablecell font-medium">{{task.quantity}}</td>
										<td class="wtablecell font-medium">{{f.fixMoney(task.total, 2, true)}}</td>
										<td class="wtablecell">{{task.comments}}</td>
									</tr>
								</template>
							</tbody>
						</table>

						<h3>3.合计</h3>

						<table class="table w-auto border-collapse empty-cells-visible">
							<thead class="table-header-group bg-blue-200">
								<tr>
									<td class="font-bold">{{t('feetablesum.category')}}</td>
									<td class="font-bold">{{t('feetablesum.title')}}</td>
									<td class="font-bold">{{t('feetablesum.total')}}({{planProject.unit}})</td>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(sdata, sidx) in planProjectFeeTxt.sections">
									<td class="font-bold" :rowspan="planProjectFeeTxt.sections.size" v-if="sidx==0">平台开发</td>
									<td class="wtablecell">{{sdata[0]}}</td>
									<td class="wtablecell font-medium">{{f.fixMoney(sdata[1].sum, 2, true)}}</td>
								</tr>
								<tr v-for="(odata, oidx) in planProjectFeeTxt.others">
									<td class="font-bold" :rowspan="planProjectFeeTxt.others.size" v-if="oidx==0">实施运维</td>
									<td class="wtablecell">{{odata[0]}}</td>
									<td class="wtablecell font-medium">{{f.fixMoney(odata[1].sum, 2, true)}}</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<td colspan="2" class="font-bold" align="right">{{t('tasktable.sum')}}</td>
									<td>
										<span class="font-bold mx-1">{{f.fixMoney(planProjectFeeTxt.totalTasksFee+planProjectFeeTxt.totalOtherFee, 2, true)}}</span>{{planProject.unit}}
									</td>
								</tr>
							</tfoot>
						</table>
					</n-tab-pane>
					<n-tab-pane name="mans" :tab="t('project.mans')">
						<div class="">


						</div>
					</n-tab-pane>
				</n-tabs>
			</div>
		</section>
	</main>
	<Footer />
</template>
<script setup lang="ts">
import axios from 'axios';
import { calcTotal, genAllFee, genAllPlanSections, parseProject, PlanProject, PlanProjectFeeTxt, PlanSectionTxt } from '@/utils/plandoc';
import * as f from '@/utils/formarts';
const { t } = useI18n();

const route = useRoute();
const id = route.params.id;
const ActionOptions = [
	{ label: '申请任务', key: "applyTask" },//
	{ label: '提交任务', key: "submitTask" },//
	{ label: '任务验收', key: "testTask" },//
	{ label: '释放奖励', key: "releaseTask" }];
const projectInfo = ref<any>({
	description: ''
});
const planProject = ref<PlanProject>(new PlanProject(''));
const projectSections = ref<PlanSectionTxt[]>([]);
const planProjectFeeTxt = ref<PlanProjectFeeTxt>(new PlanProjectFeeTxt());
const pInfoData = ref<string>(``);
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
	let pProject: PlanProject = parseProject(pInfo.data);
	calcTotal(pProject);
	planProject.value = pProject;
	projectSections.value = genAllPlanSections(pProject);
	planProjectFeeTxt.value = genAllFee(pProject);
	// const pData = await axios.get('/projects/project' + id + 'Data.json');
	// projectData.value = pData.data;
	console.log(planProjectFeeTxt.value);
});

const manTitle = function (task: any) {
	let manInfo = planProjectFeeTxt.value.mans[task.manType - 1];
	return manInfo?.title ?? task.manType;
}
</script>
