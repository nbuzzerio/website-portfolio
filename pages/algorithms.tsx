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
    bigO: `0(n) space where n is the size of the array\n0(n) time where n is the size of the array`,
  },
  {
    title: "Valid Subsequence",
    prompt:
      "Given an array (array) of integers write a function that determines whether the second array (sequence) is a subsequence of the first one. The subsequence must appear in the same order in the array but not necessarily with values adjacent within the array.",
    soln: `
    function validSubsequence(array, sequence) {

      let j = 0
      
      for (let i5 = 0; i < array.length; i++) {
        if (array[i] === sequence[j]) {
          j++;
        }
        if (j === sequence.length) return true
      }
      return false
      
    }`,
    bigO: `O(n) time where n is the length of the array\nO(1) space`,
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
  {
    title: "Sorted Squared Array",
    prompt:
      "Write a function that takes a sorted array of integers and returns a sorted array of their squares.",
    soln: `
    function sortedSquaredArray(array) {
      let l;
      let r;
      let results = [];
      let smallestSq = array[0]**2;
      let smallestIndex = 0;
    
      //find closest to 0
      for (var i = 0; i < array.length; i++) {
        if (array[i]**2 < smallestSq) {
          smallestSq = array[i]**2
          smallestIndex = i
        }
      }
      l = smallestIndex-1
      r = smallestIndex+1
      results.push(smallestSq)
    
      while (l >= 0 || r < array.length) {
        if (l < 0 || (array[l]**2 >= array[r]**2)) {
          results.push(array[r]**2)
          r++;
        } else if (r === array.length || (array[l]**2 < array[r]**2)) {
          results.push(array[l]**2)
          l--;
        }
      }
      
      
      return results;
    }`,
    bigO: `O(n) time where n is the length of the array\nO(n) space where n is the length of the array`,
  },
];

const Algorithms = () => {
  const [algo, setAlgo] = useState(null);

  return (
    <section className="min-h-screen w-full bg-black">
      <h1 className="py-20 text-center text-4xl text-white underline md:text-9xl">
        Algorithms
      </h1>
      <div className="algo-btns flex flex-wrap items-center justify-center gap-7 px-5">
        {algorithmsData.map((a: Algo, i) => (
          <button
            className="w-full rounded-3xl border border-white p-3 px-10 text-red-800 hover:scale-105 active:scale-110 md:w-auto md:min-w-[200px]"
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
