<template>
	<Header />
	<main>
		<section class="max-w-6xl mx-auto px-4 pb-6 <sm:px-1">
			<div class="md-body md:py-6 sm:py-1">
				<div class="text-3xl">{{projectInfo.title}}</div>
				<div class="grid md:(grid-cols-3 p-2) sd:(grid-cols-1)">
					<div class="flex flex-col justify-center">
						<n-statistic :label="t('project.tasks')" :value="projectData.workingTasks">
							<template #suffix>/{{projectData.finishedTasks}}/{{projectData.allTasks}}</template>
						</n-statistic>
					</div>
					<div class="flex flex-col justify-center">
						<n-statistic :label="t('project.feeStates')" :value="f.fixMoney(projectData.usedCost, 1, true)">
							<template #prefix>
							</template>
							<template #suffix>
								/ {{f.fixMoney(projectData.neededCost, 1, true)}} {{projectData.symbol1}}
							</template>
						</n-statistic>
					</div>
					<div class="flex flex-col justify-center">
						<n-statistic :label="t('project.vault')">
							{{f.fixMoney(projectData.vault, 2, true)}} {{projectData.symbol2}}
						</n-statistic>
					</div>
				</div>
				<n-tabs type="line" animated default-value="plans">
					<n-tab-pane name="info" :tab="t('project.info')">
						<v-md-preview :text="pInfoMdText" />
					</n-tab-pane>
					<n-tab-pane name="plans" :tab="t('project.plans')">
						<n-collapse v-if="projectData.sections.size>0" arrow-placement="right" :default-expanded-names="[0]">
							<n-collapse-item v-for="([sname, section], idx) in projectData.sections" :key="sname" :title="section.title" :name="idx">
								<template #header><span class="font-bold text-lg">[{{t('project.milestone')+(idx+1)}}]{{section.title}}</span></template>
								<template #header-extra>{{section.summary}}</template>
								{{section.description}}
								<v-md-preview :text="section.mdGantt" />
								<div class="table w-full border-collapse empty-cells-visible">
									<div class="table-header-group font-bold">
										<div class="table-row">
											<div class="wtablecell">{{t('tasktable.no')}}</div>
											<div class="wtablecell">{{t('tasktable.category')}}</div>
											<div class="wtablecell">{{t('tasktable.title')}}</div>
											<div class="wtablecell">{{t('tasktable.summary')}}</div>
											<div class="wtablecell">{{t('tasktable.status')}}</div>
											<div class="wtablecell">&nbsp;</div>
										</div>
									</div>
									<div class="table-row-group">
										<div class="table-row" v-for="(task, idx) in section.tasks.items" :key="idx">
											<div class="wtablecell">{{task.id}}</div>
											<div class="wtablecell">{{task.category}}</div>
											<div class="wtablecell">{{task.title}}
												<div class="text-gray-500">{{task.description}}</div>
											</div>
											<div class="wtablecell font-medium">{{task.summary}}</div>
											<div class="wtablecell font-medium">
												<n-tag type="warning" size="small" round v-if="task.status == 'pending'">{{t('tasktable.status_pending')}}</n-tag>
												<n-tag type="info" size="small" round v-if="task.status == 'working'">{{t('tasktable.status_working')}}</n-tag>
												<n-tag type="success" size="small" round v-if="task.status == 'finished'">{{t('tasktable.status_finished')}}</n-tag>
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
							<thead class="table-header-group font-bold">
								<tr>
									<td class="wtablecell">{{t('feetable.no')}}</td>
									<td class="wtablecell">{{t('feetable.category')}}</td>
									<td class="wtablecell">{{t('feetable.title')}}</td>
									<td class="wtablecell">{{t('feetable.costMan')}}</td>
									<td class="wtablecell">{{t('feetable.costTime')}}</td>
									<td class="wtablecell">{{t('feetable.status')}}</td>
									<td class="wtablecell">{{t('feetable.costTotal')}}({{planProject.unit}})</td>
								</tr>
							</thead>
							<tbody>
								<template v-for="(sdata,idx) in projectData.sections">
									<tr>
										<td class="wtablecell font-bold" colspan="6" align="center">[{{t('project.milestone')+(idx+1)}}]{{sdata[0]}}</td>
										<td class="wtablecell font-bold" align="right">
											<span class="font-bold mx-1">{{f.fixMoney(sdata[1].tasks.sum, 2, true)}}</span>{{planProject.unit}}
										</td>
									</tr>
									<tr v-for="(task, idx) in sdata[1].tasks.items" :key="idx">
										<td class="wtablecell">{{task.id}}</td>
										<td class="wtablecell" align="right">{{task.category}}</td>
										<td class="wtablecell">{{task.title}}</td>
										<td class="wtablecell font-medium">
											<n-tag size="small" round v-for="([mantype, [man,days]], idx) in task.costs" :key="idx" class="ml-1" :color="manColor(mantype)">
												{{manText(mantype, man, days)}}
											</n-tag>
										</td>
										<td class="wtablecell font-medium">{{task.costDays}}</td>
										<td class="wtablecell font-medium">
											<n-tag type="warning" size="small" round v-if="task.status == 'pending'">{{t('tasktable.status_pending')}}</n-tag>
											<n-tag type="info" size="small" round v-if="task.status == 'working'">{{t('tasktable.status_working')}}</n-tag>
											<n-tag type="success" size="small" round v-if="task.status == 'finished'">{{t('tasktable.status_finished')}}</n-tag>
										</td>
										<td class="wtablecell font-medium" align="right">{{f.fixMoney(task.costTotal, 2, true)}}</td>
									</tr>
								</template>
							</tbody>
						</table>
						<ul>
							<li>人员平均成本:
								<ul>
									<li v-for="(man,idx) in projectData.mans" :key="idx">{{t('manType.'+man.title)}}: <span class="font-bold mx-1">{{f.fixMoney(man.price*30, 1)}}</span>{{planProject.unit}}/月</li>
								</ul>
							</li>
							<li>平台开发费用粗略按照人工耗时*人员工时工资进行计算,没有包含人员占用空闲时间成本及额外加班成本,所以整体时间预估相对宽松</li>
						</ul>

						<h3>2.实施运维费用</h3>
						<table class="table w-full border-collapse empty-cells-visible">
							<thead class="table-header-group font-bold">
								<tr>
									<td class="wtablecell">{{t('feetable2.no')}}</td>
									<td class="wtablecell">{{t('feetable2.category')}}</td>
									<td class="wtablecell">{{t('feetable2.title')}}</td>
									<td class="wtablecell">{{t('feetable2.quantity')}}</td>
									<td class="wtablecell">{{t('feetable2.total')}}({{planProject.unit}})</td>
									<td class="wtablecell">{{t('feetable2.comments')}}</td>
								</tr>
							</thead>
							<tbody>
								<template v-for="(data) in projectData.others">
									<tr>
										<td class="wtablecell font-bold" colspan="5" align="center">{{data[0]}}</td>
										<td class="wtablecell font-bold" align="right">
											<span class="font-bold mx-1">{{f.fixMoney(data[1].sum, 2, true)}}</span>{{planProject.unit}}
										</td>
									</tr>
									<tr v-for="(task, idx) in data[1].items" :key="idx">
										<td class="wtablecell">{{task.no}}</td>
										<td class="wtablecell">{{task.title}}</td>
										<td class="wtablecell">{{task.description}}</td>
										<td class="wtablecell font-medium">{{task.quantity}}</td>
										<td class="wtablecell font-medium" align="right">{{f.fixMoney(task.total, 2, true)}}</td>
										<td class="wtablecell">{{task.comments}}</td>
									</tr>
								</template>
							</tbody>
						</table>

						<h3>3.合计</h3>

						<table class="table w-auto border-collapse empty-cells-visible">
							<thead class="table-header-group font-bold">
								<tr>
									<td class="wtablecell">{{t('feetablesum.category')}}</td>
									<td class="wtablecell">{{t('feetablesum.title')}}</td>
									<td class="wtablecell">{{t('feetablesum.total')}}({{planProject.unit}})</td>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(sdata, sidx) in projectData.sections" :key="sdata[0]">
									<td class="wtablecell font-bold" :rowspan="projectData.sections.size" v-if="sidx==0">平台开发</td>
									<td class="wtablecell">[{{t('project.milestone')+(sidx+1)}}]{{sdata[0]}}</td>
									<td class="wtablecell font-medium" align="right">{{f.fixMoney(sdata[1].tasks.sum, 2, true)}}</td>
								</tr>
								<tr v-for="(odata, oidx) in projectData.others">
									<td class="wtablecell font-bold" :rowspan="projectData.others.size" v-if="oidx==0">实施运维</td>
									<td class="wtablecell">{{odata[0]}}</td>
									<td class="wtablecell font-medium" align="right">{{f.fixMoney(odata[1].sum, 2, true)}}</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<td colspan="2" class="wtablecell font-bold" align="right">{{t('project.sum')}}</td>
									<td>
										<span class="font-bold mx-1">{{f.fixMoney(projectData.total, 2, true)}}</span>{{planProject.unit}}
									</td>
								</tr>
							</tfoot>
						</table>
					</n-tab-pane>
				</n-tabs>
			</div>
		</section>
	</main>
	<Footer />
</template>
<script setup lang="ts">
import axios from 'axios';
import { calcProjectData, PlanProject, ProjectData } from '@/utils/plandoc';
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
const pInfoMdText = ref<string>(``);
const projectData = ref<ProjectData>(new ProjectData());

const manText = function (mantype: string, man: number, days: number): string {
	return `${man}${t('manType.' + mantype)}*${days}${t('project.day')}`;
}

const ManColors = new Map<string, string>();
const AllColors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#f1c40f', '#e67e22', '#e74c3c', '#16a085', '#27ae60', '#2980b9', '#8e44ad', '#f39c12', '#d35400', '#c0392b',];

const manColor = function (mantype: string): any {
	if (!ManColors.has(mantype) && AllColors.length > ManColors.size) {
		ManColors.set(mantype, AllColors[ManColors.size]);
	}
	return { color: (ManColors.get(mantype) ?? '') + '88' };
}

onMounted(async () => {
	const pInfoMd = await axios.get('/projects/project' + id + '.md');
	pInfoMdText.value = pInfoMd.data.toString();
	const pInfo = await axios.get('/projects/project' + id + '.json');
	projectInfo.value = pInfo.data;
	let pData = calcProjectData(pInfo.data);
	projectData.value = pData;
	planProject.value = pData.planProject;

	// console.log(projectData.value);
});


</script>
