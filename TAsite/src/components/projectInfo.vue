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
								/ {{projectData.needed}} {{projectData.symbol}}
							</template>
						</n-statistic>
					</div>
					<div class="flex flex-col justify-center">
						<n-statistic :label="t('project.vault')">
							{{projectData.vault}} {{projectData.symbol}}
						</n-statistic>
					</div>
				</div>
				<n-card>
					<n-tabs type="line" animated default-value="plans">
						<n-tab-pane name="info" :tab="t('project.info')">
							<Project001 v-if="id == '001'" />
						</n-tab-pane>
						<n-tab-pane name="plans" :tab="t('project.plans')">
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
import Project001 from '@/projects/project001.md';
import axios from 'axios';

const { t } = useI18n();

const route = useRoute();
const id = route.params.id;
const projectInfo = ref<any>({});
const projectData = ref<any>({
	workingTasks: 10,
	finishedTasks: 20,
	pendingTasks: 200,
	used: '3,000',
	needed: '123,000',
	symbol: 'USDT',
	vault: '200,000',

});
onMounted(async () => {
	const pInfo = await axios.get('/projects/project' + id + '.json');
	projectInfo.value = pInfo.data;
	// const pData = await axios.get('/projects/project' + id + 'Data.json');
	// projectData.value = pData.data;

	console.log(projectInfo.value);
});
</script>
