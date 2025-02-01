export class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}
export const printList = (list: ListNode | null) => {
	console.log(JSON.stringify(list, null, 2));
};
