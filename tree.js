// Define the TreeNode structure here (assuming a typical definition)
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    largestValues(root) {
        const queue = [];
        queue.push(root);
        const ans = [];
        
        if (root === null) return ans;

        while (queue.length > 0) {
            const size = queue.length;
            const level = [];

            for (let i = 0; i < size; i++) {
                const node = queue.shift();
                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }
                level.push(node.val);
            }

            const maxi = Math.max(...level);
            ans.push(maxi);
        }

        return ans;
    }
}

// Create a sample binary tree (you should replace this with your own tree)
const root = new TreeNode(1);
root.left = new TreeNode(3);
root.right = new TreeNode(2);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(9);

const solution = new Solution();
const result = solution.largestValues(root);

console.log("Largest values in each level: " + result.join(' '));
