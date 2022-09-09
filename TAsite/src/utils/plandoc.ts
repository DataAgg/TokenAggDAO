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
	manTypes: Array<ManType> = [];
	sections: Array<PlanSection> = [];
	feeCategories: Array<PlanFeeCategory> = [];
	feeManagement: number = 0;
	feeTaxes: number = 0;
	total: number = 0;

	constructor(
		public title: string,
		public description: string = "",
		public unit: string = "USDT"
	) {}
}

export class PlanSection {
	// title:string;
	// category:string;
	// start?:Date;
	// end?:Date;
	// days?:number;
	// description:string;
	tasks: Array<PlanTask> = [];
	total: number = 0;

	constructor(
		public category: string,
		public title: string,
		public description = "",
		public start?: Date,
		public end?: Date,
		public days?: number
	) {}
}

export class PlanSectionTxt {
	mdTasks: Array<PlanTaskTxt> = [];
	constructor(
		public category: string,
		public title: string,
		public description: string,
		public mdGantt: string = "",
		public summary: string = ""
	) {}
}

export class PlanTaskTxt {
	status: number = 0;
	constructor(
		public no: number,
		public category: string,
		public title: string,
		public description: string,
		public summary: string = ""
	) {}
}

export class GroupData<T>{
	public count: number = 0;
	public sum: number = 0;
	public items:Array<T> = [];

	public addItem(item:T, num:number){
		this.count++;
		this.sum+=num;
		this.items.push(item);
	}
}

export class PlanProjectFeeTxt {
	sections = new Map<string, GroupData<PlanTaskFeeTxt>>();
	others = new Map<string, GroupData<PlanOtherFeeTxt>>();
	mans = new Array<ManType>();
	feeManagement: number = 0;
	feeTaxes: number = 0;
	totalTasksFee: number = 0;
	totalOtherFee: number = 0;

	constructor() {}
}

export class PlanTaskFeeTxt {
	public manType: number = 0;
	public costMan: number = 0;
	public costTime: number = 0;
	public costTotal: number = 0;
	constructor(
		public no: number,
		public category: string,
		public title: string,
		public description: string
	) {}
}

export class PlanOtherFeeTxt {
	public quantity: number = 0;
	public total: number = 0;
	public comments: string = '';
	constructor(
		public no: number,
		public category: string,
		public title: string,
		public description: string
	) {}
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
	total: number = 0;

	constructor(
		public no: number,
		public title: string,
		public category = "",
		public description = "",
		public comment = "",
		public start?: string,
		public dep?: number,
		public costTime?: string,
		public costMan?: number,
		public manType?: number
	) {}
}

export class PlanFeeCategory {
	// category:string;
	items: Array<PlanOtherFee> = [];
	total: number = 0;

	constructor(public category: string) {}
}

export class PlanOtherFee {
	// title:string;
	// category:string;
	// specification:string;
	// description?:string;
	// quantity:number;
	// price:number = 0;
	total: number = 0;
	comments: string = '';

	constructor(
		public category: string,
		public title: string,
		public specification: string,
		public quantity: number,
		public price: number = 0,
		public description?: string
	) {}
}

export function parseProject(map: any): PlanProject {
	var planProject = new PlanProject(map["title"], map["description"], map["unit"]);
	planProject.feeManagement = map["feeManagement"] ?? 0;
	planProject.feeTaxes = map["feeTaxes"] ?? 0;

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
					if (items.length >= 5) {
						if (items[1].trim().startsWith("after")) {
							task.dep = parseInt(items[1].trim().substring(5).trim());
						} else {
							task.start = items[1].trim();
						}
						task.costTime = items[2].trim();
						task.manType = parseInt(items[3].trim());
						task.costMan = parseFloat(items[4].trim());
					}
					task.category = t["category"] ?? "";
					task.description = t["description"] ?? "";

					section.tasks.push(task);
				}
			}
			planProject.sections.push(section);
		}
	}
	var feeCategories = map["feeCategories"];
	if (feeCategories != null) {
		for (var category in feeCategories) {
			var feeCategory = new PlanFeeCategory(category);
			for (var f of feeCategories[category]) {
				var fee = new PlanOtherFee(
					category,
					f["title"],
					f["specification"],
					f["quantity"],
					f["price"] ?? 0
				);
				fee.comments = f["description"];
				feeCategory.items.push(fee);
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
				task.costTime = task.costTime!.substring(0, task.costTime!.length - 1);
			}
			tTotal =
				task.costMan! *
					parseFloat(task.costTime ?? "0") *
					planProject.manTypes[task.manType! - 1]?.price ?? 0;
			task.total = tTotal;
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
			feeCategory.total += fTotal;
		}
		pTotal += feeCategory.total;
	}
	pTotal += planProject.feeManagement + planProject.feeTaxes;
	planProject.total = pTotal;
}

export function genGantt(section: PlanSection, i: number = 1): PlanSectionTxt {
	let planSectionTxt = new PlanSectionTxt(
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
			},\t${task.costTime}d`
		);
	}
	codes = writeln(codes, `\`\`\``);
	planSectionTxt.mdGantt = codes;
	planSectionTxt.summary = `时间：${day(section.start)} - ${day(
		section.end
	)}\t耗时：${section.days ?? 0}天`;

	var j = 1;
	for (var task of section.tasks) {
		if (task?.description ?? "" != "") {
			let planTaskTxt = new PlanTaskTxt(
				j++,
				task.category,
				task.title,
				task.description
			);
			planTaskTxt.summary = `${task.costMan}*${task.costTime}人天`;
			planSectionTxt.mdTasks.push(planTaskTxt);
		}
	}
	return planSectionTxt;
}

export function genAllPlanSections(
	planProject: PlanProject
): Array<PlanSectionTxt> {
	let allData = new Array<PlanSectionTxt>();
	if (planProject && planProject.sections && planProject.sections.length > 0) {
		for (let i = 0; i < planProject.sections.length; i++) {
			let section: PlanSection = planProject.sections[i];
			let planSectionTxt = genGantt(section, i);
			allData.push(planSectionTxt);
		}
	}
	return allData;
}

export function genAllFee(planProject: PlanProject): PlanProjectFeeTxt {
	let planProjectFeeTxt = new PlanProjectFeeTxt();
	for (var section of planProject.sections) {
		planProjectFeeTxt.totalTasksFee += section.total;
		var sTasks =
			planProjectFeeTxt.sections.get(section.title) ??
			new GroupData<PlanTaskFeeTxt>();
		var j = 1;
		for (let task of section.tasks) {
			let taskfee = new PlanTaskFeeTxt(
				j++,
				task.category,
				task.title,
				task.description
			);
			taskfee.manType = task.manType ?? 0;
			taskfee.costMan = task.costMan ?? 0;
			taskfee.costTime = parseFloat(task.costTime ?? "0");
			taskfee.costTotal = task.total ?? 0;
			sTasks.addItem(taskfee, taskfee.costTotal);
		}
		planProjectFeeTxt.sections.set(section.title, sTasks);
	}

	for (var man of planProject.manTypes) {
		planProjectFeeTxt.mans.push(new ManType(man.title, man.price));
	}

	for (var feeCategory of planProject.feeCategories) {
		planProjectFeeTxt.totalOtherFee += feeCategory.total;
		var otherFeeGroup =
			planProjectFeeTxt.others.get(feeCategory.category) ??
			new GroupData<PlanOtherFeeTxt>();
		var j = 1;
		for (var fee of feeCategory.items) {
			let otherfee = new PlanOtherFeeTxt(
				j++,
				fee.category,
				fee.title,
				fee.specification
			);
			otherfee.quantity = fee.quantity;
			otherfee.total = fee.total;
			otherfee.comments = fee.comments;
			otherFeeGroup.addItem(otherfee, otherfee.total);
		}
		planProjectFeeTxt.others.set(feeCategory.category, otherFeeGroup);
	}

	if (planProject.feeManagement > 0 && planProject.feeTaxes > 0) {
		planProjectFeeTxt.feeManagement = planProject.feeManagement;
		planProjectFeeTxt.feeTaxes = planProject.feeTaxes;
	}
	return planProjectFeeTxt;
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
