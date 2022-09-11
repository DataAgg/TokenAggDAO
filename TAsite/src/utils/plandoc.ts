import dayjs from "dayjs";

export class TaskList {
	projectName?: string; //"the task list for watano projects"
	earliestDueDate?: string; //="0.00000000"
	lastMod?: string; //="44146.70743056"
	lastModString?: string; //="2020/11/11 16:58"
	nextUniqueId?: number; //="158"
	fileName?: string; //="myprojects.tdl"
	fileVersion?: number = 1; //="139"
	appVer: string = "8.0.10.0"; //="7.2.23.0"
	fileFormat: string = "12"; //="12"
	items: Array<Task> = [];
	categories: Array<string> = [];
	status: Array<string> = [];
	allocatedBy: Array<string> = [];
	persons: Array<string> = [];
}

export class Task {
	id?: number; //="141"
	title?: string; //="文件备份工具"
	refId?: number; //="0"
	commentsType?: string = "PLAIN_TEXT"; //="plain_text"
	createdBy?: string; //="watano"
	risk: number = 0; //="0"
	percentDone?: string; //="0"
	startDate?: string; //="42990.00000000"
	startDateString?: string; //="2017/9/12"
	dueDate?: string; //="42990.00000000"
	dueDateString?: string; //="2017/9/12"
	creationDate?: string; //="42990.64288194"
	creationDateString?: string; //="2017/9/12 15:25"
	lastMod?: string; //="42990.64298611"
	lastModString?: string; //="2017/9/12 15:25"
	lastModBy?: string; //=""
	pos?: string; //="0"
	posString?: string; //="1"
	textColor?: string; //="0"
	textWebColor?: string; //="#000000"
	subTaskDone?: string; //="0/5"
	priority: number = 5;
	priorityHide?: number;
	cost?: number;
	timeEstimate?: number; //="5.00000000"
	timeEstUnits?: string;
	timeSpent?: number; //="7.00000000"
	timeSpentUnits?: string;
	comments?: string;
	categories: Array<string> = [];
	tags: Array<string> = [];
	depends: Array<string> = [];
	persons: Array<string> = [];
	metaData = <Map<string, any>>{};
	items: Array<Task> = [];
}

export class ManType {
	constructor(public title: string, public price: number) {}
}

export class PlanProject {
	public manTypes: Array<ManType> = [];
	public sections: Array<PlanSection> = [];
	public feeCategories: Array<GroupData<PlanOtherFee>> = [];
	public total: number = 0;

	constructor(
		public title: string,
		public description: string = "",
		public unit: string = "USDT"
	) {}

	public getManPrice(manType: string): number {
		for (var mt of this.manTypes) {
			if (mt.title == manType) {
				return mt.price;
			}
		}
		return 0;
	}
}

export class PlanSection {
	// title:string;
	// category:string;
	// start?:Date;
	// end?:Date;
	// days?:number;
	// description:string;
	public tasks: Array<PlanTask> = [];
	public total: number = 0;

	constructor(
		public category: string,
		public title: string,
		public description = "",
		public start?: Date,
		public end?: Date,
		public days?: number
	) {}
}

export class ProjectData {
	public planProject: PlanProject;
	public title: string;
	public description: string = "";

	public draftTasks: number = 0;
	public workingTasks: number = 0;
	public finishedTasks: number = 0;
	public pendingTasks: number = 0;
	public allTasks: number = 0;
	public usedCost: number = 0;
	public neededCost: number = 0;
	public symbol1: string = "USDT";
	public vault: number = 500;
	public symbol2: string = "BNB";

	public sections = new Map<string, PlanSectionData>();
	public others = new Map<string, GroupData<PlanOtherFee>>();
	public mans = new Array<ManType>();
	public totalTasksFee: number = 0;
	public totalOtherFee: number = 0;
	public total: number = 0;
	public count: number = 0;

	constructor() {
		this.title = "";
		this.planProject = new PlanProject("");
	}

	up(planProject: PlanProject) {
		this.title = planProject.title;
		this.description = planProject.description;
		this.planProject = planProject;
		this.mans = planProject.manTypes;
	}
}

export class PlanSectionData {
	public draftTasks: number = 0;
	public workingTasks: number = 0;
	public finishedTasks: number = 0;
	public pendingTasks: number = 0;
	public usedCost: number = 0;
	public neededCost: number = 0;
	public tasks = new GroupData<PlanTask>();

	constructor(
		public category: string,
		public title: string,
		public description: string,
		public mdGantt: string = "",
		public summary: string = ""
	) {}

	public addTask(task: PlanTask) {
		this.tasks.addItem(task, task.costTotal);
	}

	public fetchTask(no: number): PlanTask {
		let pTaskData = this.tasks.items[no - 1];
		if (pTaskData == undefined) {
			throw new Error("task-" + no);
		}
		return pTaskData;
	}
}

export class GroupData<T> {
	public count: number = 0;
	public sum: number = 0;
	public items: Array<T> = [];

	public addItem(item: T, num: number) {
		this.count++;
		this.sum += num;
		this.items.push(item);
	}
}

export class PlanTask {
	// no:number;
	// title:string;
	// category:string;
	// description:string;
	// comment:string; //费用说明
	// start?:string;
	// dep?:number;
	// costTime?:string;
	// costMan?:number;
	// manType?:number;
	public costTotal: number = 0;
	public summary: string = "";
	public status: string = "draftTasks";
	public costDays: number = 0;
	public costs = new Map<string, number[]>();
	public sumMans: number = 0;
	public sumDays: number = 0;

	constructor(
		public no: number,
		public title: string,
		public category = "",
		public description = "",
		public comment = "",
		public start?: string,
		public dep?: number,
		public costTime?: string
	) {}
}

export class PlanOtherFee {
	// title:string;
	// category:string;
	// description?:string;
	// quantity:number;
	// price:number = 0;
	public total: number = 0;
	public comments: string = "";
	public status: string = "draft";

	constructor(
		public no: number,
		public category: string,
		public title: string,
		public description: string,
		public quantity: number,
		public price: number = 0
	) {}
}

export function parseProject(map: any): PlanProject {
	var planProject = new PlanProject(
		map["title"],
		map["description"],
		map["unit"]
	);

	var manTypes = map["manTypes"];
	if (manTypes != null) {
		for (var title in manTypes) {
			var type = new ManType(title, parseFloat(manTypes[title]));
			planProject.manTypes.push(type);
		}
	}
	var sections = map["sections"];
	if (sections != null) {
		for (let s of sections) {
			var section = new PlanSection(
				s["category"],
				s["title"],
				s["description"]
			);
			section.days = 0;
			if (s["start"] != null && s["start"].length > 0) {
				section.start = getDateTime(s["start"]);
			}
			if (s["end"] != null && s["end"].length > 0) {
				section.end = getDateTime(s["end"]);
			}
			var tasks = s["tasks"];
			if (tasks != null) {
				var no = 1;
				for (let t of tasks) {
					var items = t["task"].split(",");
					var task = new PlanTask(no++, items[0].trim());
					var index = task.title.indexOf(":");
					if (index > 0) {
						task.title = task.title.substring(0, index).trim();
					}
					if (items.length >= 3) {
						if (items[1].trim().startsWith("after")) {
							task.dep = parseInt(items[1].trim().substring(5).trim());
						} else {
							task.start = items[1].trim();
						}
						task.costTime = items[2].trim();
					}
					task.category = t["category"] ?? "";
					task.description = t["description"] ?? "";
					task.status = t["status"] ?? "draft";
					var costs = t["costs"] ?? {};
					Object.entries(costs).forEach(([k, v]) => {
						task.costs.set(k, v as number[]);
					});
					section.tasks.push(task);
				}
			}
			planProject.sections.push(section);
		}
	}
	var feeCategories = map["feeCategories"];
	if (feeCategories != null) {
		let idx = 1;
		for (var category in feeCategories) {
			var feeCategory = new GroupData<PlanOtherFee>();
			for (var f of feeCategories[category]) {
				var fee = new PlanOtherFee(
					idx++,
					category,
					f["title"],
					f["specification"],
					f["quantity"],
					f["price"] ?? 0
				);
				fee.comments = f["description"];
				fee.status = f["status"]??'draft';
				feeCategory.addItem(fee, fee.total);
			}
			planProject.feeCategories.push(feeCategory);
		}
	}
	return planProject;
}

export function calcTotal(planProject: PlanProject): void {
	var pTotal = 0;
	for (var section of planProject.sections) {
		var sTotal = 0;
		var start = dayjs(section.start);
		var end = dayjs(section.end);
		section.days = end.diff(start, "day");
		for (var task of section.tasks ?? []) {
			var tTotal = 0;
			task.costTime = task.costTime!.trim();
			if (task.costTime!.endsWith("d")) {
				task.costDays = parseFloat(
					task.costTime!.substring(0, task.costTime!.length - 1)
				);
			}
			for (var man of task.costs.keys()) {
				var manDays = task.costs.get(man) ?? [0, 0];
				var manPrice = planProject.getManPrice(man);
				tTotal += manDays[0] * manDays[1] * manPrice;
				task.sumMans += manDays[0];
				task.sumDays += manDays[1];
			}
			task.costTotal = tTotal;
			sTotal += tTotal;
		}
		section.total = sTotal;
		pTotal += sTotal;
	}
	var feeTotals = new Map<string, number>();
	for (var feeCategory of planProject.feeCategories) {
		for (var fee of feeCategory.items ?? []) {
			var fTotal = fee.quantity * fee.price;
			fee.total = fTotal;
			if (!feeTotals.has(fee.category)) {
				feeTotals.set(fee.category, 0);
			}
			feeCategory.sum += fTotal;
		}
		pTotal += feeCategory.sum;
	}
	planProject.total = pTotal;
}

export function genGantt(section: PlanSection, i: number = 1): PlanSectionData {
	let planSectionData = new PlanSectionData(
		section.category,
		section.title,
		section.description
	);
	var codes = "";

	codes = writeln(codes, "```mermaid");
	codes = writeln(codes, "gantt");
	codes = writeln(codes, "\taxisFormat  %m-%d");
	codes = writeln(codes, `\ttitle ${section.title}`);
	var category = "";
	for (var task of section.tasks) {
		if (category != task.category) {
			category = task.category;
			codes = writeln(codes, `\tsection ${task.category}`);
		}
		codes = writeln(
			codes,
			`\t\t${task.title}\t:${taskName(i, task.no)},\t${
				task.start ?? "after " + taskName(i, task.dep ?? 1)
			},\t${task.costTime}`
		);
		if (task.status == "working") {
			planSectionData.workingTasks++;
		} else if (task.status == "finished") {
			planSectionData.finishedTasks++;
			planSectionData.usedCost += task.costTotal;
		} else if (task.status == "pending") {
			planSectionData.pendingTasks++;
		} else {
			planSectionData.draftTasks++;
		}
		planSectionData.neededCost += task.costTotal;
	}
	codes = writeln(codes, `\`\`\``);
	planSectionData.mdGantt = codes;
	planSectionData.summary = `时间：${day(section.start)} - ${day(
		section.end
	)}\t耗时：${section.days ?? 0}天`;
	for (var task of section.tasks) {
		if (task?.title ?? "" != "") {
			task.summary = `${task.sumMans}*${task.sumDays}人天`;
			planSectionData.addTask(task);
		}
	}
	return planSectionData;
}

export function calcAll(pProject: PlanProject, projectData: ProjectData): void {
	if (pProject && pProject.sections && pProject.sections.length > 0) {
		for (let i = 0; i < pProject.sections.length; i++) {
			let section: PlanSection = pProject.sections[i];
			let planSectionData = genGantt(section, i);
			projectData.sections.set(section.title, planSectionData);
			projectData.totalTasksFee += planSectionData.tasks.sum;
			//
			projectData.allTasks += planSectionData.tasks.count;
			projectData.draftTasks += planSectionData.draftTasks;
			projectData.workingTasks += planSectionData.workingTasks;
			projectData.pendingTasks += planSectionData.pendingTasks;
			projectData.finishedTasks += planSectionData.finishedTasks;

			projectData.usedCost += planSectionData.usedCost;
			projectData.neededCost += planSectionData.neededCost;
		}
	}

	for (var feeCategory of pProject.feeCategories) {
		projectData.totalOtherFee += feeCategory.sum;
		for (var fee of feeCategory.items) {
			var categoryName = fee.category;
			var otherFeeGroup =
				projectData.others.get(categoryName) ?? new GroupData<PlanOtherFee>();
			otherFeeGroup.addItem(fee, fee.total);
			projectData.others.set(categoryName, otherFeeGroup);

			if (fee.status == "finished") {
				projectData.usedCost += fee.total;
			}
		}
	}
	projectData.total = projectData.totalTasksFee + projectData.totalOtherFee;
	projectData.neededCost += projectData.totalOtherFee;
}

export function calcProjectData(map: any): ProjectData {
	let pProject: PlanProject = parseProject(map);
	calcTotal(pProject);
	let projectData = new ProjectData();
	projectData.up(pProject);
	calcAll(pProject, projectData);
	return projectData;
}

function getDateTime(value: any): Date {
	let d = dayjs(value.toString());
	return d.toDate();
}
function day(t?: Date): string {
	if (t == null) return "";
	return dayjs(t, "yyyy/M/d").format("YYYY/MM/DD");
}
function taskName(m: number, t: number): string {
	return `m${m}t${t}`;
}
function writeln(codes: string, text: string) {
	return codes + text + "\n";
}
