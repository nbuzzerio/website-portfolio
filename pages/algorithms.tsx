import Algorithm from "@/components/Algorithm";
import { useState } from "react";

export interface Algo {
  title: string;
  prompt: string;
  soln: string;
  bigO: string;
}

const algorithmsData = [
  {
    title: "Two Sum",
    prompt:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    soln: `
    function twoSum(array, targetSum) {
      const nums = {}
    
      for (const num of array) {
        const keyPair = targetSum - num;
        if (nums[keyPair]) return [keyPair, num]
        else nums[num] = true;
      }
    
      return []
    }`,
    bigO: `0(n) space where n is the size of the array\n0(n) time where nj is the size of the array`,
  },
  {
    title: "Closest Value BST",
    prompt:
      "Write a function that takes a Binary Search Tree (BST) and a target integer value and returns the closest value to that target value within the BST. Each node has a value, left and right child node, or null",
    soln: `
    function findClosestValueInBst(tree, target) {
      let closest = tree.value;
      
      const findClosest = (tree) => {
        if (Math.abs(tree.value - target) <= Math.abs(closest - target)) {
            closest = tree.value;
        }
        
        if (tree.value > target) {
          if (tree.left) {
            findClosest(tree.left);
          }
        } else {
          if (tree.right) {
            findClosest(tree.right);
          }
        }
      }

      findClosest(tree);
      return closest;
    }

    class BST {
      constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
      }
    }`,
    bigO: `Recursive approach
    O(log(n)) time
    O(log(n)) space`,
  },
];

const Algorithms = () => {
  const [algo, setAlgo] = useState(null);

  return (
    <section className="min-h-screen w-full bg-black">
      <h1 className="py-20 text-center text-9xl text-white underline">
        Algorithms
      </h1>
      <div className="algo-btns flex flex-wrap items-center justify-center gap-7">
        {algorithmsData.map((a: Algo, i) => (
          <button
            className="rounded-3xl border border-white p-3 px-10 text-red-800 hover:scale-105 active:scale-110"
            onClick={() => setAlgo(a)}
            key={i}
          >
            {a.title}
          </button>
        ))}
      </div>
      {algo && (
        <Algorithm
          title={algo.title}
          prompt={algo.prompt}
          soln={algo.soln}
          bigO={algo.bigO}
        />
      )}
    </section>
  );
};

export default Algorithms;
