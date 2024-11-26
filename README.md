# Parallel Mergesort

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

# Runtime Analysis

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program.

## My Runtime Analysis

In my algorithm, I tell the algorithm to start a new thread on every new branch that occurs. Since this is merge sort, every division of the array creates a new thread. This means that the span of an algorithm like merge sort is $T_{\infty}(n) \in \Theta(log\ n)$ because there is only $log\ n$ merge steps - which corresponds to the span size itself.

# Sources

- Original mergesort algorithm is from the lecture slides. I implemented all the parallel processing. 

# Plagiarism Acknowledgment

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.