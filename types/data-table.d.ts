import type {
	Column,
	ColumnDef,
	FacetedColumn,
	Table
} from "@tanstack/vue-table";
import type { Component } from "vue";

declare namespace DTable {
	export type FacetOptions = {
		label: string;
		value: string;
		icon?: Component; // | undefined
	};


	type FacetType<T> = {
		[K in keyof T]: {
			title: string;
			column_id_name: K;
			options: {
				label: string;
				value: string;
			}[];
		};
	};
	export type PageOptions = {
		pageSize: number;
		pageIndex: number;
	};
	export type DataFacetOptions<T> = {
		[KEY in keyof T]?: DTable.FacetType<T>[KEY];
	};
}
