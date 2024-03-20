/**
 * 二叉树层序遍历
 */

const levelOrder = (root) => {
    if (!root) {
        return [];
    }

    const queen = [root];

    const result = [];

    while (queen.length) {
        const node = queen.shift();
        result.push(node.val);
        if (node.left) {
            queen.push(node.left);
        }

        if (node.right) {
            queen.push(node.right);
        }
    }

    return result;
}

const levalOrder2 = (root) => {
    const result = [];

    const queen = [root];

    while (queen.length) {
        const tmp = []

        for (let i = queen.length; i>0; i--) {

            const node = tmp.push(queen.shift());

            if (node.left) {
                queen.push(node.left);
            }

            if (node.right) {
                queen.push(node.right);
            }

        }

        result.push(tmp);
    }

    return result;
}


const data = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4
        }
    },
    right: {
        val: 3,
        right: {
            val: 5
        }
    }
}


console.log(levelOrder(data));