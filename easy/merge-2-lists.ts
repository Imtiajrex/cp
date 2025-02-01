class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

const addToList = (val: number, list?: ListNode) => {
	if (!list) list = new ListNode(val);
	else list.next = new ListNode(val);
	return list;
};
const mergeLists = (
	list1: ListNode | null,
	list2: ListNode | null,
	newList?: ListNode
) => {
	if (!list1 && list2) {
		if (!newList) newList = list2;
		else newList.next = list2;
		return newList;
	} else if (!list2 && list1) {
		if (!newList) newList = list1;
		else newList.next = list1;
		return newList;
	}

	if (list1 && list2) {
		if (list1.val <= list2.val) {
			newList = addToList(list1.val, newList);
			mergeLists(list1.next, list2, newList.next || newList);
			return newList;
		} else {
			newList = addToList(list2.val, newList);
			mergeLists(list1, list2.next, newList.next || newList);
			return newList;
		}
	} else {
		return null;
	}
};
function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null
): ListNode | null {
	const newList = mergeLists(list1, list2)!;
	return newList;
}
