import { ListNode, printList } from "../lib/ListNode";
function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	const firstNumber = flattenList(l1) as any;
	const secondNumber = flattenList(l2) as any;

	const sum = firstNumber + secondNumber;
	console.log(firstNumber.toString(), secondNumber.toString(), sum.toString());
	const sumList = convertToList(sum);
	return sumList;
}

const convertToList = (number: BigInt): ListNode => {
	const numberStr = number.toString().split("");
	const list = new ListNode();
	let itr = list;
	let i = numberStr.pop();
	while (i !== undefined) {
		itr.next = new ListNode(parseFloat(i));
		itr = itr.next;
		i = numberStr.pop();
	}
	return list.next!;
};
const flattenList = (list: ListNode | null): BigInt => {
	let result: number[] = [];
	while (list) {
		result.push(list.val);
		list = list.next;
	}
	return BigInt(result.reverse().join(""));
};

console.log(
	printList(
		addTwoNumbers(
			convertToList(1000000000000000000000000000001n),
			convertToList(BigInt([5, 6, 4].reverse().join("")))
		)
	)
);
