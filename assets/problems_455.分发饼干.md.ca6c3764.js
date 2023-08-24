import{_ as s,c as n,o as a,d as l}from"./app.67d99937.js";const A=JSON.parse('{"title":"455. 分发饼干","description":"","frontmatter":{},"headers":[],"relativePath":"problems/455.分发饼干.md"}'),p={name:"problems/455.分发饼干.md"},o=l(`<h1 id="_455-分发饼干" tabindex="-1">455. 分发饼干 <a class="header-anchor" href="#_455-分发饼干" aria-hidden="true">#</a></h1><p>假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。</p><p>对每个孩子 i，都有一个胃口值  g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。<br> 如果 s[j] &gt;= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。<br> 你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。</p><p>示例  1:<br> 输入: g = [1,2,3], s = [1,1]<br> 输出: 1<br> 解释:<br> 你有三个孩子和两块小饼干，3 个孩子的胃口值分别是：1,2,3。<br> 虽然你有两块小饼干，由于他们的尺寸都是 1，你只能让胃口值是 1 的孩子满足。<br> 所以你应该输出 1。</p><p>示例  2:<br> 输入: g = [1,2], s = [1,2,3]<br> 输出: 2<br> 解释:<br> 你有两个孩子和三块小饼干，2 个孩子的胃口值分别是 1,2。<br> 你拥有的饼干数量和尺寸都足以让所有孩子满足。<br> 所以你应该输出 2.</p><p>提示：<br> 1 &lt;= g.length &lt;= 3 _ 104<br> 0 &lt;= s.length &lt;= 3 _ 104<br> 1 &lt;= g[i], s[j] &lt;= 231 - 1</p><p>来源：力扣（LeetCode）<br> 链接：<a href="https://leetcode.cn/problems/assign-cookies" target="_blank" rel="noreferrer">https://leetcode.cn/problems/assign-cookies</a></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number[]</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">g</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number[]</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">s</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#676E95;">// var findContentChildren = function (g, s) {</span></span>
<span class="line"><span style="color:#676E95;">//   var gSort = g.sort((a, b) =&gt; a - b),</span></span>
<span class="line"><span style="color:#676E95;">//     sSort = s.sort((a, b) =&gt; a - b),</span></span>
<span class="line"><span style="color:#676E95;">//     i = 0,</span></span>
<span class="line"><span style="color:#676E95;">//     j = 0,</span></span>
<span class="line"><span style="color:#676E95;">//     count = 0</span></span>
<span class="line"><span style="color:#676E95;">//   console.log(gSort, sSort)</span></span>
<span class="line"><span style="color:#676E95;">//   while (j &lt;= sSort.length) {</span></span>
<span class="line"><span style="color:#676E95;">//     if (sSort[j] &gt;= gSort[i]) {</span></span>
<span class="line"><span style="color:#676E95;">//       count++</span></span>
<span class="line"><span style="color:#676E95;">//       i++</span></span>
<span class="line"><span style="color:#676E95;">//       j++</span></span>
<span class="line"><span style="color:#676E95;">//     } else {</span></span>
<span class="line"><span style="color:#676E95;">//       j++</span></span>
<span class="line"><span style="color:#676E95;">//     }</span></span>
<span class="line"><span style="color:#676E95;">//   }</span></span>
<span class="line"><span style="color:#676E95;">//   return count</span></span>
<span class="line"><span style="color:#676E95;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">findContentChildren</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]))</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">findContentChildren</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]))</span></span>
<span class="line"></span></code></pre></div>`,8),e=[o];function t(r,c,y,C,i,F){return a(),n("div",null,e)}const _=s(p,[["render",t]]);export{A as __pageData,_ as default};
