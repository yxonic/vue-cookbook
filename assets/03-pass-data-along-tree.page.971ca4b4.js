import{h as s}from"./vendor.38dd88c9.js";const n=[s("h1",{},["Pass data along tree"]),s("h2",{},["Problem"]),s("p",{},["You have a homogeneous component tree (e.g. nested comments, menus), and you want to pass data from parent to children."]),s("h2",{},["Solution"]),s("p",{},["Typical way of passing data to child components is to use props. However, this would expose implementation details in public API, and sometimes is not what you want. This also requires component user to correctly fill in props, if the component tree is composed by user:"]),s("div",{innerHTML:`<pre class="shiki" style="background-color: #282A36"><code><span class="line"><span style="color: #F6F6F4">&lt;</span><span style="color: #F286C4">menu-item</span><span style="color: #F6F6F4"> </span><span style="color: #62E884; font-style: italic">title</span><span style="color: #F286C4">=</span><span style="color: #DEE492">&quot;</span><span style="color: #E7EE98">File</span><span style="color: #DEE492">&quot;</span><span style="color: #F6F6F4">&gt;</span></span>
<span class="line"><span style="color: #F6F6F4">  &lt;</span><span style="color: #F286C4">menu-item</span><span style="color: #F6F6F4"> </span><span style="color: #62E884; font-style: italic">parent-title</span><span style="color: #F286C4">=</span><span style="color: #DEE492">&quot;</span><span style="color: #E7EE98">File</span><span style="color: #DEE492">&quot;</span><span style="color: #F6F6F4"> </span><span style="color: #62E884; font-style: italic">title</span><span style="color: #F286C4">=</span><span style="color: #DEE492">&quot;</span><span style="color: #E7EE98">Open...</span><span style="color: #DEE492">&quot;</span><span style="color: #F6F6F4">&gt;&lt;/</span><span style="color: #F286C4">menu-item</span><span style="color: #F6F6F4">&gt;</span></span>
<span class="line"><span style="color: #F6F6F4">  &lt;</span><span style="color: #F286C4">menu-item</span><span style="color: #F6F6F4"> </span><span style="color: #62E884; font-style: italic">parent-title</span><span style="color: #F286C4">=</span><span style="color: #DEE492">&quot;</span><span style="color: #E7EE98">File</span><span style="color: #DEE492">&quot;</span><span style="color: #F6F6F4"> </span><span style="color: #62E884; font-style: italic">title</span><span style="color: #F286C4">=</span><span style="color: #DEE492">&quot;</span><span style="color: #E7EE98">Save...</span><span style="color: #DEE492">&quot;</span><span style="color: #F6F6F4">&gt;&lt;/</span><span style="color: #F286C4">menu-item</span><span style="color: #F6F6F4">&gt;</span></span>
<span class="line"><span style="color: #F6F6F4">&lt;/</span><span style="color: #F286C4">menu-item</span><span style="color: #F6F6F4">&gt;</span></span>
<span class="line"></span></code></pre>`}),s("p",{},["Another way of passing data is to use provide/inject. To pass data from parent to children, we combine provide and inject in the same function, and put data under the same name:"]),s("div",{innerHTML:`<pre class="shiki" style="background-color: #282A36"><code><span class="line"><span style="color: #F286C4">export</span><span style="color: #F6F6F4"> </span><span style="color: #F286C4">function</span><span style="color: #F6F6F4"> </span><span style="color: #62E884">useParentData</span><span style="color: #F6F6F4">&lt;</span><span style="color: #FFB86C; font-style: italic">T</span><span style="color: #F6F6F4">&gt;(</span><span style="color: #FFB86C; font-style: italic">name</span><span style="color: #F286C4">:</span><span style="color: #F6F6F4"> </span><span style="color: #97E1F1; font-style: italic">string</span><span style="color: #F6F6F4">, </span><span style="color: #FFB86C; font-style: italic">v</span><span style="color: #F286C4">:</span><span style="color: #F6F6F4"> </span><span style="color: #97E1F1; font-style: italic">T</span><span style="color: #F6F6F4">) {</span></span>
<span class="line"><span style="color: #F6F6F4">  </span><span style="color: #F286C4">const</span><span style="color: #F6F6F4"> s </span><span style="color: #F286C4">=</span><span style="color: #F6F6F4"> </span><span style="color: #62E884">inject</span><span style="color: #F6F6F4">(name, </span><span style="color: #BF9EEE">undefined</span><span style="color: #F6F6F4">)</span></span>
<span class="line"><span style="color: #F6F6F4">  </span><span style="color: #62E884">provide</span><span style="color: #F6F6F4">(name, v)</span></span>
<span class="line"><span style="color: #F6F6F4">  </span><span style="color: #F286C4">return</span><span style="color: #F6F6F4"> s</span></span>
<span class="line"><span style="color: #F6F6F4">}</span></span>
<span class="line"></span></code></pre>`}),s("p",{},["We can also allow an optional default value with function overloading:"]),s("div",{innerHTML:`<pre class="shiki" style="background-color: #282A36"><code><span class="line"><span style="color: #F286C4">export</span><span style="color: #F6F6F4"> </span><span style="color: #F286C4">function</span><span style="color: #F6F6F4"> </span><span style="color: #62E884">useParentData</span><span style="color: #F6F6F4">&lt;</span><span style="color: #FFB86C; font-style: italic">T</span><span style="color: #F6F6F4">&gt;(</span><span style="color: #FFB86C; font-style: italic">name</span><span style="color: #F286C4">:</span><span style="color: #F6F6F4"> </span><span style="color: #97E1F1; font-style: italic">string</span><span style="color: #F6F6F4">, </span><span style="color: #FFB86C; font-style: italic">v</span><span style="color: #F286C4">:</span><span style="color: #F6F6F4"> </span><span style="color: #97E1F1; font-style: italic">T</span><span style="color: #F6F6F4">)</span><span style="color: #F286C4">:</span><span style="color: #F6F6F4"> </span><span style="color: #97E1F1; font-style: italic">T</span><span style="color: #F6F6F4"> </span><span style="color: #F286C4">|</span><span style="color: #F6F6F4"> </span><span style="color: #97E1F1; font-style: italic">undefined</span></span>
<span class="line"><span style="color: #F286C4">export</span><span style="color: #F6F6F4"> </span><span style="color: #F286C4">function</span><span style="color: #F6F6F4"> </span><span style="color: #62E884">useParentData</span><span style="color: #F6F6F4">&lt;</span><span style="color: #FFB86C; font-style: italic">T</span><span style="color: #F6F6F4">&gt;(</span><span style="color: #FFB86C; font-style: italic">name</span><span style="color: #F286C4">:</span><span style="color: #F6F6F4"> </span><span style="color: #97E1F1; font-style: italic">string</span><span style="color: #F6F6F4">, </span><span style="color: #FFB86C; font-style: italic">v</span><span style="color: #F286C4">:</span><span style="color: #F6F6F4"> </span><span style="color: #97E1F1; font-style: italic">T</span><span style="color: #F6F6F4">, </span><span style="color: #FFB86C; font-style: italic">defaultValue</span><span style="color: #F286C4">:</span><span style="color: #F6F6F4"> </span><span style="color: #97E1F1; font-style: italic">T</span><span style="color: #F6F6F4">)</span><span style="color: #F286C4">:</span><span style="color: #F6F6F4"> </span><span style="color: #97E1F1; font-style: italic">T</span></span>
<span class="line"><span style="color: #F286C4">export</span><span style="color: #F6F6F4"> </span><span style="color: #F286C4">function</span><span style="color: #F6F6F4"> </span><span style="color: #62E884">useParentData</span><span style="color: #F6F6F4">&lt;</span><span style="color: #FFB86C; font-style: italic">T</span><span style="color: #F6F6F4">&gt;(</span><span style="color: #FFB86C; font-style: italic">name</span><span style="color: #F286C4">:</span><span style="color: #F6F6F4"> </span><span style="color: #97E1F1; font-style: italic">string</span><span style="color: #F6F6F4">, </span><span style="color: #FFB86C; font-style: italic">v</span><span style="color: #F286C4">:</span><span style="color: #F6F6F4"> </span><span style="color: #97E1F1; font-style: italic">T</span><span style="color: #F6F6F4">, </span><span style="color: #FFB86C; font-style: italic">defaultValue</span><span style="color: #F286C4">?:</span><span style="color: #F6F6F4"> </span><span style="color: #97E1F1; font-style: italic">T</span><span style="color: #F6F6F4">) {</span></span>
<span class="line"><span style="color: #F6F6F4">  </span><span style="color: #F286C4">const</span><span style="color: #F6F6F4"> s </span><span style="color: #F286C4">=</span><span style="color: #F6F6F4"> </span><span style="color: #62E884">inject</span><span style="color: #F6F6F4">(name, defaultValue)</span></span>
<span class="line"><span style="color: #F6F6F4">  </span><span style="color: #62E884">provide</span><span style="color: #F6F6F4">(name, v)</span></span>
<span class="line"><span style="color: #F6F6F4">  </span><span style="color: #F286C4">return</span><span style="color: #F6F6F4"> s</span></span>
<span class="line"><span style="color: #F6F6F4">}</span></span>
<span class="line"></span></code></pre>`})];var l={render(){return n}};const o={title:"Pass data along tree",layout:"book"};export{l as default,o as frontmatter,n as nodes};
